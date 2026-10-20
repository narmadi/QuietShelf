import { events } from "../data/events";
import { EventCard } from "./EventCard";

export function Events() {
  return (
    <section
      id="events"
      className="relative overflow-hidden bg-[#F8F3ED] px-5 py-16 font-[Poppins] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#D9AAA5]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#C7A98B]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#D9AAA5]/50 bg-white/70 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#B77979]" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#936565]">
              Gather · Discover · Connect
            </p>
          </div>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#392923] sm:text-4xl lg:text-5xl">
            More Than Books,
            <span className="mt-1 block italic text-[#B77979]">
              Moments Together.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#76655D] sm:text-base sm:leading-8">
            Great stories bring people together. Join our little reading
            community for thoughtful conversations, book discoveries, and
            memorable moments at The Quiet Shelf.
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#D9AAA5]" />
            <span className="text-lg text-[#B77979]">✦</span>
            <span className="h-px w-10 bg-[#D9AAA5]" />
          </div>
        </div>

        {/* Events grid */}
        {events.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {events.map((event) => (
              <div
                key={`${event.month}-${event.day}`}
                className="group h-full transition duration-300 hover:-translate-y-1"
              >
                <div className="h-full overflow-hidden rounded-2xl border border-[#E8DCD1] bg-white shadow-[0_8px_30px_rgba(57,41,35,0.05)] transition duration-300 group-hover:shadow-[0_16px_40px_rgba(57,41,35,0.12)]">
                  <EventCard event={event} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#D9C6B8] bg-white/70 px-6 py-12 text-center">
            <p className="font-serif text-2xl text-[#392923]">
              Something lovely is coming.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#76655D]">
              We’re planning our next gathering. Check back soon for upcoming
              events at The Quiet Shelf.
            </p>
          </div>
        )}

        {/* Bottom invitation */}
        <div className="mt-12 text-center sm:mt-16">
          <p className="font-serif text-lg italic text-[#76655D] sm:text-xl">
            Every reader has a story. Come share yours.
          </p>
        </div>
      </div>
    </section>
  );
}