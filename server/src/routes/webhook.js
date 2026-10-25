import express, { Router } from "express";
import Stripe from "stripe";
import { and, eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { orders } from "../db/schema.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export const webhookRouter = Router();

webhookRouter.post(
  "/api/webhooks/stripe",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    let event;
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        req.headers["stripe-signature"],
        process.env.STRIPE_WEBHOOK_SECRET,
      );
    } catch (err) {
      console.error("Bad webhook signature:", err.message);
      return res.status(400).send("Invalid signature");
    }

    try {
      if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        if (session.payment_status === "paid") {
          const orderId = session.metadata?.orderId;
          // Only flips pending -> paid, so repeated deliveries are harmless
          await db
            .update(orders)
            .set({ status: "paid", paidAt: new Date() })
            .where(and(eq(orders.id, orderId), eq(orders.status, "pending")));
        }
      }
      res.json({ received: true });
    } catch (err) {
      console.error("Webhook handler error:", err);
      res.status(500).send("Webhook handler failed"); // Stripe will retry
    }
  },
);