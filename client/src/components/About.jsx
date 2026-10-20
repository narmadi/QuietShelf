export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white font-[Poppins]"
    >
      {/* Decorative background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10
          h-64 w-64 rounded-full bg-muted-rose/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20
          -right-20 h-72 w-72 rounded-full bg-primary-light/80 blur-3xl"
      />

      <div
        className="relative mx-auto grid max-w-7xl
        grid-cols-1 items-center gap-12 px-5 py-16
        sm:px-8 sm:py-20 md:gap-16 lg:grid-cols-2
        lg:gap-24 lg:px-12 lg:py-28"
      >
        {/* Left: Visual */}
        <div className="relative mx-auto w-full max-w-lg">
          <div
            className="absolute -left-3 -top-3 h-full w-full
            rounded-2xl border border-muted-rose/40 sm:-left-5 sm:-top-5"
          />

          <div
            className="relative overflow-hidden rounded-2xl
            bg-primary-light shadow-xl"
          >
            <img
              src="/images/about-img.jpeg"
              alt="A cosy collection of books waiting to be discovered"
              loading="lazy"
              className="aspect-[5/4] w-full object-cover
                transition-transform duration-700 hover:scale-105"
            />

            <div
              className="absolute inset-0 bg-gradient-to-t
              from-primary-dark/60 via-transparent to-transparent"
            />

            <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7">
              <p
                className="text-xs font-medium uppercase
                tracking-[0.25em] text-white/80"
              >
                Your next chapter starts here
              </p>
              <p
                className="mt-2 text-2xl font-semibold italic
                text-white sm:text-3xl"
              >
                Make room for stories.
              </p>
            </div>
          </div>

          {/* Decorative quote card */}
          <div
            className="relative ml-auto mt-4 w-[85%] rounded-xl
            border border-primary-dark/5 bg-primary-light
            p-4 shadow-sm sm:p-5"
          >
            <p className="text-sm italic leading-6 text-primary-dark/80">
              “Between the pages, there's a whole world waiting.”
            </p>
          </div>
        </div>

        {/* Right: About content */}
        <div className="text-center md:text-left">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-muted-rose" />
            <p
              className="text-xs font-semibold uppercase
              tracking-[0.28em] text-muted-rose sm:text-sm"
            >
              Our Story
            </p>
            <span className="h-px w-8 bg-muted-rose md:hidden" />
          </div>

          <h2
            className="text-3xl font-light leading-tight
            tracking-tight text-primary-dark sm:text-4xl
            lg:text-5xl"
          >
            A little bookstore
            <br />
            with a lot of{" "}
            <span className="font-semibold italic text-muted-rose">
              stories.
            </span>
          </h2>

          <div
            className="mx-auto my-6 h-1 w-16 rounded-full
            bg-muted-rose md:mx-0"
          />

          <p className="text-sm leading-8 text-text/70 sm:text-base">
            We believe the right book can change the way you see the world. Our
            shelves are thoughtfully filled with stories, ideas, and voices—from
            familiar favourites to exciting new discoveries.
          </p>

          <p className="mt-4 text-sm leading-8 text-text/70 sm:text-base">
            Whether you're searching for an unforgettable novel, learning
            something new, or simply looking for a quiet afternoon read, there's
            always something waiting for you here.
          </p>

          {/* Brand values */}
          <div
            className="mt-8 grid grid-cols-1 gap-4
            text-left sm:grid-cols-3"
          >
            <div
              className="rounded-xl border border-primary-dark/10
              bg-primary-light/60 p-4 transition-colors
              hover:border-muted-rose/40"
            >
              <span className="text-xl text-muted-rose">✦</span>
              <h3 className="mt-2 text-sm font-semibold text-primary-dark">
                Thoughtful Picks
              </h3>
              <p className="mt-1 text-xs leading-5 text-text/60">
                Books chosen with readers in mind.
              </p>
            </div>

            <div
              className="rounded-xl border border-primary-dark/10
              bg-primary-light/60 p-4 transition-colors
              hover:border-muted-rose/40"
            >
              <span className="text-xl text-muted-rose">♡</span>
              <h3 className="mt-2 text-sm font-semibold text-primary-dark">
                Reader First
              </h3>
              <p className="mt-1 text-xs leading-5 text-text/60">
                A place for every kind of reader.
              </p>
            </div>

            <div
              className="rounded-xl border border-primary-dark/10
              bg-primary-light/60 p-4 transition-colors
              hover:border-muted-rose/40"
            >
              <span className="text-xl text-muted-rose">⌘</span>
              <h3 className="mt-2 text-sm font-semibold text-primary-dark">
                Endless Discovery
              </h3>
              <p className="mt-1 text-xs leading-5 text-text/60">
                New ideas on every shelf.
              </p>
            </div>
          </div>

          <a
            href="#shop"
            className="mt-8 inline-flex items-center gap-3
              rounded-full bg-primary-dark px-7 py-3.5
              text-sm font-semibold text-white shadow-sm
              transition-all duration-300 hover:-translate-y-0.5
              hover:bg-muted-rose hover:shadow-md"
          >
            Find Your Next Read
            <span aria-hidden="true" className="text-lg">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
