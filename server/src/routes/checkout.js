import { Router } from 'express'
import Stripe from 'stripe'
import { eq } from 'drizzle-orm'
import { db } from '../db/index.js'
import { books, orders, orderItems } from '../db/schema.js'
import { requireAuth } from '../../middleware/requireAuth.js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
export const checkoutRouter = Router()

// EDIT if needed: books.price in cents -> book.price | in whole dollars -> book.price * 100
const getUnitCents = (book) => Math.round(Number(book.price) * 100)

checkoutRouter.post('/api/checkout', requireAuth, async (req, res) => {
  try {
    const bookId = String(req.body.bookId ?? '')
    const quantity = Math.min(Math.max(Number(req.body.quantity) || 1, 1), 10)

    // The price comes from OUR database, never from the browser
    const [book] = await db.select().from(books).where(eq(books.id, bookId))
    if (!book) return res.status(404).json({ error: 'Book not found' })

    const unitCents = getUnitCents(book)
    if (!Number.isInteger(unitCents) || unitCents <= 0) {
      return res.status(500).json({ error: 'Invalid book price' })
    }
    const totalCents = unitCents * quantity

    // 1. Create the order as "pending" (only the webhook can mark it paid)
    const [order] = await db
      .insert(orders)
      .values({
        userId: req.user.id,
        totalCents,
        currency: book.currency || 'usd',
        status: 'pending',
      })
      .returning()

    // 2. Record what was bought, at what price
    await db.insert(orderItems).values({
      orderId: order.id,
      bookId: book.id,
      quantity,
      unitPriceCents: unitCents,
    })

    // 3. Start the Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          quantity,
          price_data: {
            currency: book.currency || 'usd',
            unit_amount: unitCents,
            product_data: {
              name: book.name,
              description: `by ${book.author}`,
            },
          },
        },
      ],
      client_reference_id: order.id,
      metadata: { orderId: order.id }, // the webhook uses this
      success_url: `${process.env.CLIENT_URL}/success?order_id=${order.id}`,
      cancel_url: `${process.env.CLIENT_URL}/#shop`,
    })

    // 4. Link the Stripe session to our order
    await db
      .update(orders)
      .set({ stripeSessionId: session.id })
      .where(eq(orders.id, order.id))

    res.json({ url: session.url })
    } catch (err) {
    console.error('Checkout error:', err)
    res.status(500).json({ error: `Could not start checkout: ${err.message}` })
  }
})