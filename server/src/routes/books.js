import { Router } from 'express'
import { eq } from 'drizzle-orm'
import { db } from '../db/index.js'
import { books, bookImages } from '../db/schema.js'
export const booksRouter = Router()
booksRouter.get('/', async (_req, res) => {
  const rows = await db.select().from(books)
  res.json(rows)
})
booksRouter.get('/:slug', async (req, res) => {
  const [row] = await db.select().from(books).where(eq(books.slug,
    req.params.slug)).limit(1)
  if (!row) return res.status(404).json({ error: 'No such book' })
  const images = await db
    .select()
    .from(bookImages)
    .where(eq(bookImages.bookId, row.id))
    .orderBy(bookImages.sortOrder)
  res.json({ ...row, images })
})