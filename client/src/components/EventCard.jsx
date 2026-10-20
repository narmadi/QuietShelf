export function EventCard({ event }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary-dark/20 bg-primary-light p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
      {/* Top accent */}
      <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-primary-dark transition-transform duration-300 group-hover:scale-x-100" />

      {/* Date and event details */}
      <div className="mb-7 flex items-start gap-4">
        <div className="flex min-w-[76px] flex-col items-center justify-center rounded-xl border border-primary-dark/5 bg-white px-3 py-4 text-center transition-colors duration-300 group-hover:border-primary-dark/50 group-hover:bg-primary-dark/10">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary-dark">
            {event.month}
          </span>

          <span className="my-1 font-serif text-4xl font-semibold leading-none text-dark">
            {event.day}
          </span>

          <span className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-dark/70">
            {event.weekday}
          </span>
        </div>

        <div className="min-w-0 flex-1 pt-1">
          <span className="inline-flex max-w-full items-center rounded-full bg-primary-dark/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-dark">
            {event.type}
          </span>

          <div className="mt-3 flex items-center gap-2 text-sm text-dark/70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-4 w-4 shrink-0 text-primary-dark"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>

            <span>{event.time}</span>
          </div>
        </div>
      </div>

      {/* Event content */}
      <div className="flex flex-1 flex-col">
        <h3 className="font-serif text-2xl font-semibold leading-snug text-dark transition-colors duration-300 group-hover:text-primary-dark sm:text-[26px]">
          {event.title}
        </h3>

        <p className="mt-4 flex-1 text-sm leading-7 text-dark/75">
          {event.description}
        </p>

        {/* Event link */}
        <a
          href={event.href || '#contact'}
          className="mt-7 inline-flex w-fit items-center gap-2 border-b border-primary-dark/50 pb-1.5 text-sm font-semibold text-primary-dark transition-colors duration-300 hover:border-dark hover:text-dark"
        >
          <span>{event.link || 'Discover More'}</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      {/* Decorative detail */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 -right-5 font-serif text-8xl leading-none text-dark/[0.04] transition-colors duration-300 group-hover:text-primary-dark/10"
      >
        “
      </span>
    </article>
  );
}