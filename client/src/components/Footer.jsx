export function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-dark text-white">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <a href="#hero" className="inline-block">
              <h2 className="font-serif text-3xl font-semibold tracking-wide text-primary-light sm:text-4xl">
                The Quiet Shelf
              </h2>
            </a>

            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-primary-dark">
              A little space for big stories
            </p>

            <p className="mx-auto mt-6 max-w-sm text-sm leading-7 text-white sm:mx-0">
              A little corner for big imaginations. Discover your next favourite
              story, find a cosy read, and share your love of books. There's
              always room for one more story.
            </p>

            {/* Social links */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary-dark px-4 py-2.5 text-sm text-primary-light transition duration-300 hover:bg-primary-dark hover:text-white"
              >
                Instagram ↗
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary-dark px-4 py-2.5 text-sm text-primary-light transition duration-300 hover:bg-primary-dark hover:text-white"
              >
                Facebook ↗
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 sm:justify-start">
              <span className="h-px w-10 bg-primary-dark" />
              <span className="font-serif text-lg italic text-primary-light">
                Turn a page. Find your peace.
              </span>
            </div>
          </div>

          {/* Opening hours */}
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-2xl font-semibold text-primary-light">
              Come Visit Us
            </h3>

            <p className="mt-3 text-sm leading-6 text-white">
              Our doors are open for book lovers, curious minds, and anyone
              looking for a quiet moment.
            </p>

            <div className="mt-7 space-y-4 text-sm">
              <div className="flex items-center justify-between gap-4 border-b border-primary-dark/40 pb-4">
                <span className="text-white">Monday – Friday</span>
                <span className="whitespace-nowrap font-medium text-primary-light">
                  9 AM – 7 PM
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 border-b border-primary-dark/40 pb-4">
                <span className="text-white">Saturday</span>
                <span className="whitespace-nowrap font-medium text-primary-light">
                  10 AM – 6 PM
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 border-b border-primary-dark/40 pb-4">
                <span className="text-white">Sunday</span>
                <span className="whitespace-nowrap font-medium text-primary-light">
                  10 AM – 4 PM
                </span>
              </div>
            </div>

            <p className="mt-5 text-sm italic leading-6 text-primary-light">
              Good books, warm welcomes, and time well spent.
            </p>
          </div>

          {/* Contact form */}
          <div id="contact" className="text-center sm:text-left">
            <h3 className="font-serif text-2xl font-semibold text-primary-light">
              Let's Talk Stories
            </h3>

            <p className="mt-3 text-sm leading-6 text-white">
              Looking for a book or have a question? Send us a message. We'd
              love to hear from you.
            </p>

            <form className="mt-6 flex flex-col gap-4 text-left">
              <div>
                <label
                  htmlFor="footer-name"
                  className="mb-2 block text-xs font-medium text-primary-light"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="footer-name"
                  name="name"
                  placeholder="How should we call you?"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-primary-dark bg-primary-light px-4 py-3 text-sm text-dark outline-none transition placeholder:text-dark/60 focus:border-white focus:ring-2 focus:ring-primary-dark/40"
                />
              </div>

              <div>
                <label
                  htmlFor="footer-email"
                  className="mb-2 block text-xs font-medium text-primary-light"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="footer-email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-primary-dark bg-primary-light px-4 py-3 text-sm text-dark outline-none transition placeholder:text-dark/60 focus:border-white focus:ring-2 focus:ring-primary-dark/40"
                />
              </div>

              <div>
                <label
                  htmlFor="footer-message"
                  className="mb-2 block text-xs font-medium text-primary-light"
                >
                  Your Message
                </label>
                <textarea
                  id="footer-message"
                  name="message"
                  rows={3}
                  placeholder="Tell us what's on your mind..."
                  required
                  className="w-full resize-y rounded-xl border border-primary-dark bg-primary-light px-4 py-3 text-sm text-dark outline-none transition placeholder:text-dark/60 focus:border-white focus:ring-2 focus:ring-primary-dark/40"
                />
              </div>

              <button
                type="submit"
                className="group mt-1 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary-dark px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-primary-light hover:text-dark focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 focus:ring-offset-dark"
              >
                Send a Little Note
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-14 border-t border-primary-dark/40 pt-6 sm:mt-16">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-xs leading-6 text-white">
              © {new Date().getFullYear()} The Quiet Shelf. All rights reserved.
            </p>

            <a
              href="#hero"
              className="inline-flex items-center gap-2 text-xs font-medium text-primary-light transition hover:text-white"
            >
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}