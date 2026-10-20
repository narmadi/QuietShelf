export function Footer() {
  return (
    <section id="footer" className="bg-dark text-white">
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left px-4 pt-12 pb-10 sm:px-6 md:pt-20 md:pb-16">
            <div>
                <h2 className="mb-5 text-2xl font-bold tracking-wide text-primary-light">The Quiet Shelf</h2>
                <p className="leading-7 text-white">
                    A little corner for big imaginations. Discover your next
                    favourite story, find a cosy read, and share your love of books.
                </p>

                <div className="mt-6 flex gap-5">
                    <a href="#" className="text-primary-dark transition hover:text-white">Instagram</a>
                    <a href="#" className="text-primary-dark transition hover:text-white">Facebook</a>
                </div>
            </div>

            {/* Opening hours */}
            <div>
            <h3 className="mb-5 text-xl font-semibold text-primary-light">
                    Opening Hours
                </h3>

                <ul className="space-y-4 text-sm text-[#d0dad4]">
                    <li className="flex justify-between gap-4 border-b border-[#40534b] pb-3">
                    <span>Monday – Friday</span>
                    <span className="whitespace-nowrap">9 AM – 7 PM</span>
                    </li>

                    <li className="flex justify-between gap-4 border-b border-[#40534b] pb-3">
                    <span>Saturday</span>
                    <span className="whitespace-nowrap">10 AM – 6 PM</span>
                    </li>

                    <li className="flex justify-between gap-4 border-b border-[#40534b] pb-3">
                    <span>Sunday</span>
                    <span className="whitespace-nowrap">10 AM – 4 PM</span>
                    </li>
                </ul>

                <p className="mt-5 text-sm italic leading-6 text-primary-light">
                    Come in, slow down, and find your next read.
                </p>
            </div>

            {/* Contact form */}
            <div>
                <h3 className="mb-3 text-xl font-semibold text-primary-light">Get in Touch</h3>
                <p className="mb-5 text-sm leading-6 text-white">
                    Have a question or looking for a book? We'd love to hear from you.
                </p>

                <form className="flex flex-col gap-3 text-left">
                    <label htmlFor="name" className="text-sm">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                        className="w-full rounded-md border border-primary-dark bg-primary-light px-4 py-3 
                        text-sm text-dark outline-none transition placeholder:text-white focus:border-white 
                        focus:ring-2 focus:ring-primary-dark/20"
                    />

                    <label htmlFor="email" className="text-sm">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="w-full rounded-md border border-primary-dark bg-primary-light px-4 py-3 
                        text-sm text-dark outline-none transition placeholder:text-white focus:border-white 
                        focus:ring-2 focus:ring-primary-dark/20"
                    />

                    <label htmlFor="message" className="text-sm">Your Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Write your message..."
                        required
                        className="w-full resize-y rounded-md border border-primary-dark bg-primary-light px-4 py-3
                        text-sm text-dark outline-none transition placeholder:text-white focus:border-white 
                        focus:ring-2 focus:ring-primary-dark/20"
                    />

                    <button
                        type="submit"
                        className="mt-2 rounded-md bg-primary-dark px-5 py-3 font-semibold text-white transition 
                        hover:-translate-y-0.5 hover:bg-primary-light focus:outline-none focus:ring-2 
                        focus:ring-primary-dark focus:ring-offset-2 focus:ring-offset-primary-dark"
                    >
                    Send Message
                    </button>
                </form>
            </div>
            {/* Copyright */}
            <div className="mx-auto max-w-7xl border-t border-white py-5 text-center text-sm text-white">
                <p>&copy; {new Date().getFullYear()} The Quiet Shelf. All rights reserved.</p>
            </div>
        </div>
    </section>
  )
}

