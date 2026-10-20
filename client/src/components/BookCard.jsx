import { Link } from "react-router";
import { formatPrice } from "../lib/format";

export function BookCard({ book }) {
  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-2xl
        border border-primary-dark/10 bg-white shadow-sm
        transition-all duration-300 hover:-translate-y-1.5
        hover:border-muted-rose/40 hover:shadow-xl"
    >
      {/* Book cover */}
      <Link
        to={`/books/${book.id}`}
        aria-label={`View details for ${book.name}`}
        className="relative block overflow-hidden bg-[#F3ECE4]"
      >
        <img
          src={book.imageUrl}
          alt={`Cover of ${book.name}`}
          loading="lazy"
          className="aspect-[3/4] w-full object-cover
            transition-transform duration-500 ease-out
            group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-end justify-center
          bg-gradient-to-t from-primary-dark/60 via-transparent
          to-transparent p-4 opacity-0 transition-opacity
          duration-300 group-hover:opacity-100"
        >
          <span
            className="translate-y-2 rounded-full bg-white
            px-5 py-2.5 text-xs font-semibold text-primary-dark
            shadow-md transition-transform duration-300
            group-hover:translate-y-0"
          >
            Discover Book
          </span>
        </div>
      </Link>

      {/* Book information */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <p
          className="mb-2 text-[10px] font-semibold uppercase
          tracking-[0.18em] text-muted-rose sm:text-xs"
        >
          {book.category}
        </p>

        <Link to={`/books/${book.id}`} className="group/title">
          <h3
            className="line-clamp-2 text-sm font-semibold leading-6
            text-primary-dark transition-colors duration-200
            group-hover/title:text-muted-rose sm:text-base"
          >
            {book.name}
          </h3>
        </Link>

        <p className="mt-1 line-clamp-1 text-xs text-text/60 sm:text-sm">
          By {book.author}
        </p>

        {/* Price and details */}
        <div className="mt-auto pt-4">
          <div className="mb-3 border-t border-primary-dark/10" />

          <div className="flex flex-col gap-3">
            <p className="text-base font-semibold text-primary-dark sm:text-lg">
              {formatPrice(book.price)}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}