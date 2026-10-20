export function EventCard({ event }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-5 transition-all duration-300 sm:p-7">
      {/* Top accent */}
      <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-[#B77979] transition-transform duration-300 group-hover:scale-x-100" />

      {/* Date and event details */}
      <div className="mb-7 flex items-start gap-4">
        <div className="flex min-w-[76px] flex-col items-center justify-center rounded-xl border border-[#E8DCD1] bg-[#F8F3ED] px-3 py-4 text-center transition-colors duration-300 group-hover:border-[#D9AAA5] group-hover:bg-[#F4E5E2]">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#B77979]">
            {event.month}
          </span>

          <span className="my-1 font-serif text-4xl font-semibold leading-none text-[#392923]">
            {event.day}
          </span>

          <span className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-[#76655D]">
            {event.weekday}
          </span>
        </div>

        <div className="min-w-0 flex-1 pt-1">
          <span className="inline-flex max-w-full items-center rounded-full bg-[#F4E5E2] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#936565]">
            {event.type}
          </span>

          <div className="mt-3 flex items-center gap-2 text-sm text-[#76655D]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-4 w-4 shrink-0 text-[#B77979]"
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
        <h3 className="font-serif text-2xl font-semibold leading-snug text-[#392923] transition-colors duration-300 group-hover:text-[#B77979] sm:text-[26px]">
          {event.title}
        </h3>

        <p className="mt-4 flex-1 text-sm leading-7 text-[#76655D]">
          {event.description}
        </p>

        {/* Event link */}
        <a
          href={event.href || "#contact"}
          className="mt-7 inline-flex w-fit items-center gap-2 border-b border-[#D9AAA5] pb-1.5 text-sm font-semibold text-[#936565] transition-colors duration-300 hover:border-[#392923] hover:text-[#392923]"
        >
          <span>{event.link || "Discover More"}</span>

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
        className="pointer-events-none absolute -bottom-8 -right-5 font-serif text-8xl leading-none text-[#F8F3ED] transition-colors duration-300 group-hover:text-[#F4E5E2]"
      >
        “
      </span>
    </article>
  );
}
