import { Router } from "express";
import { and, eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { orders, orderItems } from "../db/schema.js";
import { requireAuth } from "../../middleware/requireAuth.js";

export const ordersRouter = Router();

ordersRouter.get("/api/orders/:id", requireAuth, async (req, res) => {
  const [order] = await db
    .select()
    .from(orders)
    .where(and(eq(orders.id, req.params.id), eq(orders.userId, req.user.id)));
  if (!order) return res.status(404).json({ error: "Order not found" });

  const items = await db
    .select()
    .from(orderItems)
    .where(eq(orderItems.orderId, order.id));
  res.json({ ...order, items });
});