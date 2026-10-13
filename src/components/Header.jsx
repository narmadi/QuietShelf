import { useState } from 'react'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#shop', label: 'Collection' },
  { href: '#events', label: 'Events' },
  { href: '#contact', label: 'Contact' }
]

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-4">
        <a href="#">
            <img className="h-14 md:h-16 lg:h-18 w-auto object-contain" src="images/logo.jpeg" alt="Bookstore Logo" />
        </a>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink-soft transition hover:bg-line md:hidden"
        >
        <span className="text-2xl leading-none">{open ? '×' : '☰'}</span>
        </button>
        <ul className="hidden gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm transition-colors hover:text-muted-rose">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul id="mobile-nav" className="flex flex-col border-t border-line px-4 py-2 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-lg transition-colors hover:text-muted-rose"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}