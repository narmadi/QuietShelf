import { Router } from 'express'
import { db } from '../db/index.js'
import { events } from '../db/schema.js'
export const eventsRouter = Router()
eventsRouter.get('/', async (_req, res) => {
  const rows = await db.select().from(events)
  res.json(rows)
})