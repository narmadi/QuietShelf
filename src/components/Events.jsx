import { events } from '../data/events';
import { EventCard } from './EventCard';

export function Events() {
  return (
    <section id="events" className='bg-light'>
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center md:text-left px-4 pt-12 pb-10 sm:px-6 md:pt-20 md:pb-16">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold text-white uppercase tracking-[0.25em]">
            Gather · Discover · Connect
          </p>

          <h2 className="font-serif text-3xl font-bold leading-tight text-primary-dark sm:text-4xl lg:text-5xl">
            What's Happening at The Quiet Shelf
          </h2>

          <p className="mt-4 text-base leading-7 text-white sm:text-lg">
            Come along, meet fellow readers, and share a good story.
          </p>
        </div>
        {events.map((event) => (
          <EventCard key={`${event.month}-${event.day}`} event={event} />
        ))}

      </div>
    </section>
  )
}

