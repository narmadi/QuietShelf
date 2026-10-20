import { useState, useEffect } from 'react'
import { BookCard } from './BookCard'
const categories = ['All', 'Fiction', 'Non-Fiction', 'Staff-Picks']

export function Shop() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All')

    useEffect(() => {
        async function loadBooks() {
            try {
                const response = await fetch('/api/books')
                const data = await response.json()
                setBooks(data)
            } catch (err) {
                console.error('Failed to load boks', err)
            } finally {
                setLoading(false)
            }
        }
        loadBooks()
    }, [])

    const filtered = 
    filter === 'All' ? books : books.filter((p) => p.category === filter)

    return (
        <section id="shop">
            <div className="mx-auto max-w-[1100px] md:text-left px-4 pt-12 pb-10 sm:px-6 md:pt-20 md:pb-16">
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center text-center sm:justify-between">
                    <h2 className="text-h4">Explore More</h2>
                    <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                        key={cat}
                        type="button"
                        onClick={() => setFilter(cat)}
                        className={`rounded-full text-sm px-4 py-1.5 text-sm transition ${filter === cat
                            ? 'bg-muted-rose text-white'
                            : 'border border-line hover:border-dark'
                            }`}
                        >
                        {cat}
                        </button>
                    ))}
                    </div>
                </div>
                {loading ? (
                    <p className="text-ink-soft">Loading products...</p>
                ) : (
                    <div className="mx-auto grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                        {filtered.map((book) => (
                        <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}