import { pgTable, text, integer, boolean, timestamp, uniqueIndex } from 'drizzle-orm/pg-core'
export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').notNull().default(false),
  image: text('image'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})
export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expires_at').notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
})
export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  idToken: text('id_token'),
  accessTokenExpiresAt: timestamp('access_token_expires_at'),
  refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})
export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})
export const books = pgTable(
  'books',
  {
    id: text('id').primaryKey(),
    slug: text('slug').notNull(),
    name: text('name').notNull(),
    author: text('author').notNull(),
    category: text('category').notNull(),
    price: integer('price').notNull(),
    currency: text('currency').notNull().default('usd'),
    imageUrl: text('image_url').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [uniqueIndex('books_slug_idx').on(table.slug)],
)

export const bookImages = pgTable('book_images', {
  id: text('id').primaryKey(),
  bookId: text('book_id')
    .notNull()
    .references(() => books.id, { onDelete: 'cascade' }),
  url: text('url').notNull(),
  sortOrder: integer('sort_order').notNull().default(0),
})

export const events = pgTable('events', {
  id: text('id').primaryKey(),
  day: integer('day').notNull(),
  month: text('month').notNull(),
  weekday: text('weekday').notNull(),
  time: text('time').notNull(),
  type: text('type').notNull().notNull(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  link: text('link').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  status: text("status").notNull().default("pending"), // pending | paid
  totalCents: integer("total_cents").notNull(),
  currency: text("currency").notNull().default("usd"),
  stripeSessionId: text("stripe_session_id").unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  paidAt: timestamp("paid_at"),
});

export const orderItems = pgTable("order_items", {
  id: serial("id").primaryKey(),
  orderId: integer("order_id").notNull().references(() => orders.id),
  bookId: integer("book_id").notNull().references(() => books.id),
  quantity: integer("quantity").notNull().default(1),
  unitPriceCents: integer("unit_price_cents").notNull(), // price at time of purchase
});