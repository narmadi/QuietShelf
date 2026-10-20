export function EventCard({ event }) {
    return (
       <div className="overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]">
            <article className="group rounded-2xl bg-primary-light p-6">
                <div className="mb-6 flex items-start gap-4">
                    <div className="flex min-w-16 flex-col items-center rounded-xl bg-dark px-3 py-3 text-center">
                        <span className="text-xs font-bold tracking-widest text-primary-light">
                            {event.month}
                        </span>
                        <span className="my-1 font-serif text-3xl font-bold text-primary-dark">
                            {event.day}
                        </span>
                        <span className="text-xs font-medium text-white">
                            {event.weekday}
                        </span>
                    </div>

                    <div className="pt-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-white">{event.type}</p>
                        <p className="mt-2 text-sm text-white">{event.time}</p>
                    </div>
                </div>

                {/* Event content */}
                <h3 className="font-serif text-2xl font-bold leading-snug text-dark transition-colors group-hover:text-light">
                    {event.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white">{event.description}</p>

                {/* Event link */}
                <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 border-b border-dark pb-1 text-sm font-semibold text-dark transition-colors hover:border-white hover:text-white"
                >
                    {event.link}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </a>
        </article>
            
        </div>
    )
}