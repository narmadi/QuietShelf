import { randomUUID } from 'node:crypto'
import { db } from './index.js'
import { books, bookImages } from './schema.js'
import { booksData } from './books.data.js'
async function seed() {
  console.log('Seeding books...')
  for (const b of booksData) {
    const id = randomUUID()
    const [inserted] = await db
      .insert(books)
      .values({ id, ...b })
      .onConflictDoNothing({ target: books.slug })
      .returning()
    if (inserted) {
      await db.insert(bookImages).values({
        id: randomUUID(),
        bookId: inserted.id,
        url: inserted.imageUrl,
        sortOrder: 0,
      })
    }
  }
  console.log(`Done — seeded ${booksData.length} books.`)
  process.exit(0)
}
seed()