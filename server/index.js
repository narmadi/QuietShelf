import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import connectPgSimple from 'connect-pg-simple';
import { pool } from './db.js';
import booksRouter from './routes/books.js';
import authRouter from './routes/auth.js';

const app = express();
const isProd = process.env.NODE_ENV === 'production';
const PgStore = connectPgSimple(session);

app.set('trust proxy', 1); // needed behind Railway's proxy
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(session({
  store: new PgStore({ pool }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? 'none' : 'lax', // 'none' because client and server are on different domains
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
}));

app.use('/api/books', booksRouter);
app.use('/api/auth', authRouter);

if (!process.env.VERCEL) {
  app.listen(process.env.PORT || 3000, () => console.log('Server running'));
}

export default app;