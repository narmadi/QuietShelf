import { randomUUID } from "node:crypto";
import { db } from "./index.js";

import { books, bookImages, events } from "./schema.js";

import { booksData } from "./books.data.js";
import { eventsData } from "./events.data.js";

async function seed() {
  console.log("Starting database seeding...");

  try {
    // 1. Seed books and their images
    for (const b of booksData) {
      const [inserted] = await db
        .insert(books)
        .values({
          id: randomUUID(),
          ...b,
        })
        .onConflictDoNothing({
          target: books.slug,
        })
        .returning();

      if (inserted) {
        await db
          .insert(bookImages)
          .values({
            id: randomUUID(),
            bookId: inserted.id,
            url: inserted.imageUrl,
            sortOrder: 0,
          })
          .onConflictDoNothing();
      }
    }

    // 2. Seed events
    for (const event of eventsData) {
      await db
        .insert(events)
        .values({
          id: randomUUID(),
          ...event,
        })
        .onConflictDoNothing();
    }

    console.log("Database seeding completed!");
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exitCode = 1;
  } finally {
    // Close the database connection here if your driver requires it.
  }
}

seed();
