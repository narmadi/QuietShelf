import { webcrypto } from "node:crypto";
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto;
}
import "dotenv/config";
import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from './auth.js';
import { booksRouter } from "./routes/books.js";
import { eventsRouter } from "./routes/events.js";
import { webhookRouter } from "./routes/webhook.js";   // NEW
import { checkoutRouter } from "./routes/checkout.js"; // NEW
import { ordersRouter } from "./routes/orders.js";     // NEW

const app = express();
const PORT = Number(process.env.PORT ?? 3000);

app.use(
  cors({
    origin: process.env.CLIENT_URL ?? "http://localhost:5173",
    credentials: true,
  }),
);

// Stripe's webhook needs the raw body to verify the signature, so it comes
// BEFORE express.json().
app.use(webhookRouter); // NEW

// better-auth needs the raw request body, so it's mounted before express.json().
app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());

app.use("/api/books", booksRouter);
app.use("/api/events", eventsRouter);
app.use(checkoutRouter); // NEW
app.use(ordersRouter);   // NEW

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

// Catch-all 404 must stay BELOW every route above
app.use("/api/*splat", (_req, res) => {
  res.status(404).json({ error: "No such endpoint" });
});
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "Something broke on our side." });
});
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Quiet Shelf API listening on port ${PORT}`);
});