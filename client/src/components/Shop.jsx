import { useState, useEffect } from "react";
import { BookCard } from "./BookCard";

const categories = ["All", "Fiction", "Non-Fiction", "Staff-Picks"];

export function Shop() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadBooks() {
      try {
        const response = await fetch("/api/books");

        if (!response.ok) {
          throw new Error("Unable to load books");
        }

        const data = await response.json();
        setBooks(data);
      } catch (err) {
        console.error("Failed to load books:", err);
        setError("We couldn’t load our books right now. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadBooks();
  }, []);

  const filtered =
    filter === "All" ? books : books.filter((book) => book.category === filter);

  return (
    <section
      id="shop"
      className="relative overflow-hidden py-16 font-[Poppins] sm:py-20 lg:py-28"
    >
      {/* Decorative background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-20
          h-72 w-72 rounded-full bg-muted-rose/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-10
          h-64 w-64 rounded-full bg-white/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mb-10 text-center sm:mb-14">
          <p
            className="mb-3 text-xs font-semibold uppercase
            tracking-[0.3em] text-muted-rose sm:text-sm"
          >
            Find Your Next Favourite
          </p>

          <h2
            className="text-3xl font-semibold tracking-tight
            text-primary-dark sm:text-4xl lg:text-5xl"
          >
            Explore Our Collection
          </h2>

          <div
            className="mx-auto my-5 h-1 w-16 rounded-full
            bg-muted-rose"
          />

          <p
            className="mx-auto max-w-2xl text-sm leading-7
            text-text/65 sm:text-base"
          >
            From unforgettable stories to fresh perspectives, discover books
            that inspire, comfort, and stay with you long after the last page.
          </p>
        </div>

        {/* Category filters and result count */}
        <div
          className="mb-8 flex flex-col items-center gap-5
          sm:mb-10 lg:flex-row lg:justify-between"
        >
          <div className="flex flex-wrap justify-center gap-2.5">
            {categories.map((cat) => {
              const active = filter === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  aria-pressed={active}
                  className={`rounded-full border px-5 py-2.5
                    text-sm font-medium transition-all duration-300
                    focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-muted-rose
                    focus-visible:ring-offset-2
                    ${
                      active
                        ? "border-primary-dark bg-primary-dark text-white shadow-md"
                        : "border-primary-dark/15 bg-white/70 text-primary-dark hover:border-muted-rose hover:bg-white hover:text-muted-rose"
                    }`}
                >
                  {cat === "Staff-Picks" ? "Staff Picks" : cat}
                </button>
              );
            })}
          </div>

          {!loading && !error && (
            <p className="text-sm text-text/55">
              Showing{" "}
              <span className="font-semibold text-primary-dark">
                {filtered.length}
              </span>{" "}
              {filtered.length === 1 ? "book" : "books"}
            </p>
          )}
        </div>

        {/* Loading state */}
        {loading && (
          <div
            className="grid grid-cols-2 gap-4 sm:grid-cols-3
              sm:gap-6 lg:grid-cols-4"
            aria-label="Loading books"
            aria-busy="true"
          >
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse rounded-2xl bg-white/70 p-3
                  shadow-sm sm:p-4"
              >
                <div className="aspect-[3/4] rounded-xl bg-primary-dark/10" />
                <div className="mt-4 h-4 w-3/4 rounded bg-primary-dark/10" />
                <div className="mt-3 h-3 w-1/2 rounded bg-primary-dark/10" />
                <div className="mt-4 h-4 w-1/3 rounded bg-primary-dark/10" />
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div
            className="rounded-2xl border border-muted-rose/20
            bg-white/80 px-6 py-12 text-center"
          >
            <p className="text-base font-medium text-primary-dark">
              Something went wrong
            </p>

            <p className="mt-2 text-sm text-text/65">{error}</p>

            <button
              type="button"
              onClick={() => {
                setLoading(true);
                setError("");

                fetch("/api/books")
                  .then((response) => {
                    if (!response.ok) {
                      throw new Error("Unable to load books");
                    }
                    return response.json();
                  })
                  .then(setBooks)
                  .catch((err) => {
                    console.error("Failed to load books:", err);
                    setError("Please try again in a moment.");
                  })
                  .finally(() => setLoading(false));
              }}
              className="mt-5 rounded-full bg-primary-dark px-6 py-3
                text-sm font-medium text-white transition
                hover:bg-muted-rose"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Books grid */}
        {!loading && !error && filtered.length > 0 && (
          <div
            className="grid grid-cols-2 gap-x-4 gap-y-8
              sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10
              lg:grid-cols-4 lg:gap-x-7 lg:gap-y-12"
          >
            {filtered.map((book) => (
              <div
                key={book.id}
                className="min-w-0 transition duration-300
                  hover:-translate-y-1"
              >
                <BookCard book={book} />
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && filtered.length === 0 && (
          <div
            className="rounded-2xl border border-primary-dark/10
            bg-white/60 px-6 py-16 text-center"
          >
            <span
              className="mx-auto flex h-16 w-16 items-center
              justify-center rounded-full bg-muted-rose/10
              text-3xl text-muted-rose"
            >
              ♡
            </span>

            <h3 className="mt-5 text-xl font-semibold text-primary-dark">
              No books found
            </h3>

            <p className="mt-2 text-sm text-text/60">
              There are no books in this category just yet.
            </p>

            <button
              type="button"
              onClick={() => setFilter("All")}
              className="mt-6 rounded-full bg-primary-dark px-6 py-3
                text-sm font-medium text-white transition
                hover:bg-muted-rose"
            >
              Explore All Books
            </button>
          </div>
        )}

        {/* Closing note */}
        {!loading && !error && books.length > 0 && (
          <div className="mt-14 text-center sm:mt-20">
            <p className="text-sm italic text-text/55">
              “A room without books is like a body without a soul.”
            </p>
            <p
              className="mt-2 text-xs font-medium uppercase
              tracking-[0.2em] text-muted-rose"
            >
              Stay curious. Keep reading.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
