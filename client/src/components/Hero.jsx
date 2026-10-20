import { Link } from "react-router";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[600px] items-center
        overflow-hidden bg-[url('/images/hero-img.jpg')]
        bg-cover bg-center bg-no-repeat sm:min-h-[680px]
        lg:min-h-[760px]"
    >
      {/* Dark overlay for readable text */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r
        from-[#211815]/60 via-[#211815]/45 to-[#211815]/20"
      />

      {/* Soft decorative glow */}
      <div
        className="pointer-events-none absolute -right-20
        top-10 -z-10 h-72 w-72 rounded-full bg-muted-rose/20
        blur-3xl sm:h-96 sm:w-96"
      />

      <div
        className="mx-auto w-full max-w-7xl px-5 py-20
        sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="max-w-3xl text-center md:text-left">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-muted-rose" />
            <p
              className="text-xs font-semibold uppercase
              tracking-[0.3em] text-white/85 sm:text-sm"
            >
              A little escape between the pages
            </p>
          </div>

          {/* Main heading */}
          <h1
            className="text-4xl font-light leading-[1.15]
            tracking-tight text-white sm:text-6xl
            lg:text-7xl xl:text-8xl"
          >
            Find a{" "}
            <span className="font-semibold italic text-[#E6B9B5]">story.</span>
            <br />
            Find a{" "}
            <span className="font-semibold italic text-[#E6B9B5]">moment.</span>
          </h1>

          {/* Offer badge */}
          <div
            className="mt-7 inline-flex items-center gap-3
            rounded-full border border-white/25 bg-white/10
            px-4 py-2.5 text-white backdrop-blur-sm"
          >
            <span
              className="rounded-full bg-muted-rose px-3 py-1
              text-[10px] font-bold uppercase tracking-wider
              text-white sm:text-xs"
            >
              Special Offer
            </span>
            <span
              className="text-xs font-medium tracking-wide
              sm:text-sm"
            >
              Sales up to 70% off
            </span>
          </div>

          {/* Description */}
          <p
            className="mx-auto mt-7 max-w-xl text-sm leading-7
            text-white/80 sm:text-base sm:leading-8
            md:mx-0 lg:text-lg"
          >
            Welcome to The Quiet Shelf, an independent bookstore for curious
            minds, thoughtful readers, and anyone searching for their next great
            story.
          </p>

          {/* Actions */}
          <div
            className="mt-9 flex flex-col items-center gap-4
            sm:flex-row sm:justify-center md:justify-start"
          >
            <Link
              to="/shop"
              className="group inline-flex items-center
                justify-center gap-3 rounded-full
                bg-muted-rose px-8 py-4 text-sm font-semibold
                text-white shadow-lg shadow-black/10
                transition-all duration-300
                hover:-translate-y-1 hover:bg-white
                hover:text-primary-dark hover:shadow-xl
                sm:px-10"
            >
              Explore Books
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5 transition-transform
                  duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-6-6 6 6-6 6"
                />
              </svg>
            </Link>

            <a
              href="#shop"
              className="inline-flex items-center justify-center
                rounded-full border border-white/40 px-8 py-4
                text-sm font-medium text-white transition
                duration-300 hover:border-white hover:bg-white/10"
            >
              Browse Collection
            </a>
          </div>

          {/* Small brand detail */}
          <div
            className="mt-12 flex items-center justify-center
            gap-3 text-xs tracking-wide text-white/65
            md:justify-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5 text-[#E6B9B5]"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7v10m-5-5h10M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
              />
            </svg>
            <span>Slow down. Turn a page. Find your world.</span>
          </div>
        </div>
      </div>

      {/* Bottom fade into the next section */}
      <div
        className="pointer-events-none absolute inset-x-0
        bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent"
      />
    </section>
  );
}
