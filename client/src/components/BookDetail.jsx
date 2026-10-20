import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { BookCard } from "./BookCard";

export function BookDetail() {
  const [books, setBooks] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const { id } = useParams();
  const book = books.find((b) => b.id === id);

  useEffect(() => {
    async function loadBooks() {
      try {
        const response = await fetch("/api/books");
        const data = await response.json();
        setBooks(data);
      } catch (err) {
        console.error("Failed to load boks", err);
      } finally {
        setLoading(false);
      }
    }
    loadBooks();
  }, []);

  if (!book) {
    return (
      <main className="min-h-screen px-5 py-20 text-center font-[Poppins]">
        <h1 className="text-3xl font-semibold text-primary-dark">
          Book not found
        </h1>
        <p className="mt-3 text-text/70">
          Sorry, we couldn't find the book you're looking for.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-primary-dark px-7 py-3
          font-medium text-white transition hover:bg-muted-rose"
        >
          Back to Home
        </Link>
      </main>
    );
  }

  const relatedBooks = books
    .filter((item) => item.category === book.category && item.id !== book.id)
    .slice(0, 4);

  return (
    <main className="min-h-screen font-[Poppins] text-text">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-8 lg:px-12">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-text/55">
          <Link to="/" className="transition hover:text-muted-rose">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="transition hover:text-muted-rose">
            Collection
          </Link>
          <span>/</span>
          <span className="font-medium text-primary-dark">{book.name}</span>
        </nav>
      </div>

      {/* Main book details */}
      <section
        className="mx-auto grid max-w-7xl grid-cols-1 gap-10
        px-5 py-10 sm:px-8 md:py-16 lg:grid-cols-2 lg:gap-20 lg:px-12"
      >
        {/* Book cover */}
        <div className="flex flex-col items-center">
          <div
            className="group relative w-full max-w-md overflow-hidden
            rounded-2xl bg-white p-5 shadow-sm sm:p-8"
          >
            <span
              className="absolute left-7 top-7 z-10 rounded-full
              bg-muted-rose px-4 py-2 text-xs font-semibold uppercase
              tracking-wider text-white"
            >
              {book.category}
            </span>

            <img
              src={book.imageUrl}
              alt={`Cover of ${book.name}`}
              className="mx-auto aspect-[3/4] max-h-[560px] w-full
                object-contain transition duration-500
                group-hover:scale-[1.03]"
            />
          </div>

          <p className="mt-4 text-center text-sm text-text/50">
            A good book is a quiet escape to another world.
          </p>
        </div>

        {/* Purchase information */}
        <div className="flex flex-col justify-center">
          <p
            className="mb-3 text-xs font-semibold uppercase
            tracking-[0.25em] text-muted-rose"
          >
            The Quiet Shelf · Book Collection
          </p>

          <h1
            className="text-3xl font-semibold leading-tight
            tracking-tight text-primary-dark sm:text-4xl lg:text-5xl"
          >
            {book.name}
          </h1>

          <p className="mt-4 text-base text-text/65 sm:text-lg">
            By{" "}
            <span className="font-medium text-primary-dark">{book.author}</span>
          </p>

          <div className="my-7 h-px w-full bg-primary-dark/10" />

          <p
            className="text-3xl font-semibold tracking-tight
            text-primary-dark"
          >
            ${Number(book.price).toFixed(2)}
          </p>

          <p className="mt-5 max-w-xl text-sm leading-7 text-text/70 sm:text-base">
            Discover your next favourite read with {book.name}. Explore a new
            perspective, enjoy a quiet moment, and let this book become part of
            your reading journey.
          </p>

          {/* Availability */}
          <div className="mt-6 flex items-center gap-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-green-600" />
            <span className="font-medium text-text/75">
              Available in our collection
            </span>
          </div>

          {/* Quantity selector */}
          <div className="mt-8">
            <label
              className="mb-3 block text-sm font-medium
              text-primary-dark"
            >
              Quantity
            </label>

            <div
              className="inline-flex items-center overflow-hidden
              rounded-full border border-primary-dark/15 bg-white"
            >
              <button
                type="button"
                onClick={() =>
                  setQuantity((current) => Math.max(1, current - 1))
                }
                disabled={quantity <= 1}
                aria-label="Decrease quantity"
                className="px-5 py-3 text-lg text-primary-dark
                  transition hover:bg-primary-light
                  disabled:cursor-not-allowed disabled:opacity-40"
              >
                −
              </button>

              <span className="min-w-10 text-center text-sm font-medium">
                {quantity}
              </span>

              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                aria-label="Increase quantity"
                className="px-5 py-3 text-lg text-primary-dark
                  transition hover:bg-primary-light"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                // Connect this to your cart functionality.
                console.log("Add to bag:", {
                  bookId: book.id,
                  quantity,
                });
              }}
              className="inline-flex flex-1 items-center justify-center
                gap-2 rounded-full bg-primary-dark px-7 py-4
                text-sm font-semibold text-white shadow-sm
                transition duration-300 hover:-translate-y-0.5
                hover:bg-muted-rose hover:shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L21 8H6" />
                <circle cx="10" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
              Add to Bag
            </button>

            <button
              type="button"
              onClick={() => setIsWishlisted((current) => !current)}
              aria-pressed={isWishlisted}
              className={`inline-flex items-center justify-center gap-2
                rounded-full border px-7 py-4 text-sm font-semibold
                transition duration-300 hover:-translate-y-0.5
                ${
                  isWishlisted
                    ? "border-muted-rose bg-muted-rose/10 text-muted-rose"
                    : "border-primary-dark/20 bg-transparent text-primary-dark hover:border-muted-rose hover:text-muted-rose"
                }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={isWishlisted ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
              </svg>
              {isWishlisted ? "Saved to Wishlist" : "Add to Wishlist"}
            </button>
          </div>

          <div
            className="mt-8 grid grid-cols-2 gap-4 border-t
            border-primary-dark/10 pt-6"
          >
            <div>
              <p className="text-xs uppercase tracking-wider text-text/45">
                Category
              </p>
              <p className="mt-2 text-sm font-medium text-primary-dark">
                {book.category}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-text/45">
                Author
              </p>
              <p className="mt-2 text-sm font-medium text-primary-dark">
                {book.author}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related books */}
      {relatedBooks.length > 0 && (
        <section className="border-t border-primary-dark/10 bg-white/40">
          <div
            className="mx-auto max-w-7xl px-5 py-14
            sm:px-8 lg:px-12 lg:py-20"
          >
            <div
              className="mb-9 flex flex-wrap items-end
              justify-between gap-4"
            >
              <div>
                <p
                  className="mb-2 text-xs font-semibold uppercase
                  tracking-[0.25em] text-muted-rose"
                >
                  Keep Exploring
                </p>
                <h2
                  className="text-2xl font-semibold text-primary-dark
                  sm:text-3xl"
                >
                  You may also love
                </h2>
              </div>

              <Link
                to="/"
                className="text-sm font-medium text-primary-dark
                  underline decoration-muted-rose underline-offset-4
                  transition hover:text-muted-rose"
              >
                Explore all books
              </Link>
            </div>

            <div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2
              lg:grid-cols-4"
            >
              {relatedBooks.map((relatedBook) => (
                <BookCard key={relatedBook.id} book={relatedBook} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
