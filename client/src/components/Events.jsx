import { events } from '../data/events';
import { EventCard } from './EventCard';

export function Events() {
  return (
    <section
      id="events"
      className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-primary-dark/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-primary-dark/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-primary-dark/30 bg-primary-light px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary-dark" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-dark">
              Gather · Discover · Connect
            </p>
          </div>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-dark sm:text-4xl lg:text-5xl">
            More Than Books,
            <span className="mt-1 block italic text-primary-dark">
              Moments Together.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-dark/75 sm:text-base sm:leading-8">
            Great stories bring people together. Join our reading community
            for thoughtful conversations, new discoveries, and memorable
            moments at The Quiet Shelf.
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-primary-dark/50" />
            <span className="font-serif text-xl text-primary-dark">✦</span>
            <span className="h-px w-10 bg-primary-dark/50" />
          </div>
        </div>

        {/* Events grid */}
        {events.length > 0 ? (
          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {events.map((event) => (
              <div
                key={`${event.month}-${event.day}`}
                className="h-full transition duration-300 hover:-translate-y-1"
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-primary-dark/30 bg-primary-light px-6 py-12 text-center">
            <span className="font-serif text-4xl text-primary-dark">✦</span>

            <h3 className="mt-4 font-serif text-2xl text-dark">
              Something lovely is coming.
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-dark/75">
              We’re planning our next gathering. Check back soon for upcoming
              events at The Quiet Shelf.
            </p>
          </div>
        )}

        {/* Closing message */}
        <div className="mt-12 text-center sm:mt-16">
          <p className="font-serif text-lg italic text-dark/75 sm:text-xl">
            Every reader has a story. Come share yours.
          </p>
        </div>
      </div>
    </section>
  );
}