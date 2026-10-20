import { useState } from "react";
import { Link } from "react-router";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#shop", label: "Collection" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full max-w-full box-border shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-12">
        {/* Logo and brand */}
        <a
          href="/"
          aria-label="The Quiet Shelf home"
          className="group flex shrink-0 items-center gap-3"
        >
          <div
            className="flex h-12 w-12 items-center justify-center
            overflow-hidden rounded-full border border-primary-dark/10
            bg-white shadow-sm transition duration-300
            group-hover:border-muted-rose/50 sm:h-14 sm:w-14"
          >
            <img
              src="/images/logo.jpeg"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>

          <div className="hidden min-[380px]:block">
            <p
              className="text-base font-semibold tracking-tight
              text-primary-dark sm:text-lg"
            >
              The Quiet Shelf
            </p>
            <p
              className="mt-0.5 text-[9px] uppercase
              tracking-[0.22em] text-muted-rose sm:text-[10px]"
            >
              Stories worth staying for
            </p>
          </div>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-5 lg:gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative py-2 text-sm font-medium
                  text-text/75 transition-colors duration-300
                  hover:text-primary-dark"
              >
                {link.label}

                <span
                  className="absolute inset-x-0 -bottom-0.5
                  h-0.5 origin-left scale-x-0 rounded-full
                  bg-muted-rose transition-transform duration-300
                  group-hover:scale-x-100"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop authentication */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Link
            to="/signin"
            className="rounded-full border border-primary-dark/20
              px-5 py-2.5 text-sm font-medium text-primary-dark
              transition-all duration-300 hover:border-muted-rose
              hover:bg-white hover:text-muted-rose"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="rounded-full bg-primary-dark px-5 py-2.5
              text-sm font-medium text-white shadow-sm
              transition-all duration-300 hover:-translate-y-0.5
              hover:bg-muted-rose hover:shadow-md
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-muted-rose focus-visible:ring-offset-2"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 shrink-0 items-center
            justify-center rounded-full border border-primary-dark/10
            bg-white text-primary-dark transition-all duration-300
            hover:border-muted-rose hover:text-muted-rose lg:hidden"
        >
          {open ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-nav"
        className={`absolute left-0 top-full w-full overflow-hidden h-screen
          border-b border-primary-dark/10 bg-dark
          shadow-lg transition-all duration-300 lg:hidden
          ${
            open
              ? "visible max-h-[600px] translate-y-0 opacity-100"
              : "invisible max-h-0 -translate-y-2 opacity-0"
          }`}
      >
        <div className="mx-auto max-w-7xl px-5 pb-6 pt-3 sm:px-8">
          <ul className="flex flex-col">
            {links.map((link, index) => (
              <li key={link.href} className="border-b border-primary-dark/10">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between
                    py-3.5 text-sm font-medium text-white/80
                    transition-colors hover:text-muted-rose"
                >
                  {link.label}
                  <span className="text-lg text-muted-rose/70">→</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile authentication buttons */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Link
              to="/signin"
              onClick={() => setOpen(false)}
              className="rounded-full border border-primary-dark/20
                px-4 py-3 text-center text-sm font-medium
                text-primary-dark transition hover:border-muted-rose
                hover:bg-white"
            >
              Sign In
            </Link>

            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className="rounded-full bg-primary-dark px-4 py-3
                text-center text-sm font-medium text-white
                transition hover:bg-muted-rose"
            >
              Join Us
            </Link>
          </div>

          <p className="mt-5 text-center text-xs italic text-text/50">
            Find a quiet moment. Find your next story.
          </p>
        </div>
      </div>
    </header>
  );
}
