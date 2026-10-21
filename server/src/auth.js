// server.js
import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./auth.js";

const app = express();
app.set("trust proxy", 1);

app.use(
  cors({
    origin: process.env.CLIENT_URL, // your Vercel URL, no trailing slash
    credentials: true,
  })
);

// Must come BEFORE express.json()
app.all("/api/auth/*splat", toNodeHandler(auth)); // Express 5
// app.all("/api/auth/*", toNodeHandler(auth));   // Express 4

app.use(express.json());

app.listen(process.env.PORT || 3000, () => console.log("API running"));