import { useState } from "react";

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
    <header className="relative z-50 bg-bg font-body text-text">
      <nav className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-4 py-4">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img
            className="h-14 w-auto object-contain md:h-16"
            src="images/logo.jpeg"
            alt="The Quiet Shelf Logo"
          />
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-5 md:flex lg:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-muted-rose"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop authentication buttons */}
        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <a
            href="/signin"
            className="rounded-full border border-primary-dark px-4 py-2 text-sm font-medium text-primary-dark transition duration-200 hover:bg-primary-light/20"
          >
            Sign In
          </a>

          <a
            href="/signup"
            className="rounded-full bg-primary-dark px-4 py-2 text-sm font-medium text-white transition duration-200 hover:bg-muted-rose focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition hover:bg-primary-light/20 md:hidden"
        >
          <span className="text-2xl leading-none">{open ? "×" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div
          id="mobile-nav"
          className="absolute h-screen left-0 top-full w-full border-t border-dark/10 bg-bg px-4 pb-6 shadow-lg md:hidden"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-dark/10 py-3 text-base transition-colors duration-200 hover:text-muted-rose"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile authentication buttons */}
          <div className="mt-5 flex flex-col gap-3">
            <a
              href="/signin"
              onClick={() => setOpen(false)}
              className="rounded-full border border-primary-dark px-4 py-3 text-center text-sm font-medium text-primary-dark transition hover:bg-primary-light/20"
            >
              Sign In
            </a>

            <a
              href="/signup"
              onClick={() => setOpen(false)}
              className="rounded-full border border-primary-dark px-4 py-3 text-center text-sm font-medium text-primary-dark transition hover:bg-primary-light/20"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
