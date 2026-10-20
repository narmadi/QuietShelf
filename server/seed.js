import { pool } from './db.js';

const books = [
    {
        id: 'the-midnight-garden',
        name: 'The Midnight Garden',
        author: 'Elaine Roth',
        category: 'Fiction',
        price: 25,
        image: '/images/fiction/fiction-book-1.webp',
    },
    {
        id: 'sapiens',
        name: 'Sapiens',
        author: 'Yuval Noah Harari',
        category: 'Non-Fiction',
        price: 74,
        image: '/images/non-fiction/non-fiction-book-1.png',
    },
    {
        id: 'the-last-lighthouse',
        name: 'The Last Lighthouse',
        author: 'Daniel Reed',
        category: 'Fiction',
        price: 11,
        image: '/images/fiction/fiction-book-3.jpeg',
    },
    {
        id: 'educated',
        name: 'educated',
        author: 'Tara Westover',
        category: 'Non-Fiction',
        price: 14,
        image: '/images/non-fiction/non-fiction-book-2.png',
    },
    {
        id: 'a-map-of-small-things',
        name: 'A Map of Tiny Things',
        author: 'Clara Bennett',
        category: 'Fiction',
        price: 38,
        image: '/images/fiction/fiction-book-4.jpg',
    },
    {
        id: 'atomic-habits',
        name: 'Atomic Habits',
        author: 'James Clear',
        category: 'Non-Fiction',
        price: 14,
        image: '/images/non-fiction/non-fiction-book-3.png',
    },
    {
        id: 'little-woman',
        name: 'Little Woman',
        author: 'Louisa May Alcott',
        category: 'Fiction',
        price: 64,
        image: '/images/fiction/fiction-book-5.jpg',
    },
    {
        id: 'to-kill-a-mockingbird',
        name: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        category: 'Staff-Picks',
        price: 17,
        image: '/images/picks/picks-1.webp',
    },
    {
        id: 'red-rising',
        name: 'Red Rising',
        author: 'Pierce Brown',
        category: 'Fiction',
        price: 74,
        image: '/images/fiction/fiction-book-7.jpg',
    },
    {
        id: 'pride-and-prejudice',
        name: 'Pride and Prejudice',
        author: 'Jane Austen',
        category: 'Staff-Picks',
        price: 57,
        image: '/images/picks/picks-2.webp',
    },
    {
        id: '1984',
        name: '1984',
        author: 'George Orwell',
        category: 'Staff-Picks',
        price: 29,
        image: '/images/picks/picks-3.webp',
    }
]

await pool.query('DELETE FROM books');
for (const b of books) {
  await pool.query(
    'INSERT INTO books (title, author, price, description, image_url) VALUES ($1,$2,$3,$4,$5)',
    [b.title, b.author, b.price, b.description, b.image_url]
  );
}
console.log('Seeded', books.length, 'books');
await pool.end();