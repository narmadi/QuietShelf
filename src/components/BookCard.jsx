export function BookCard({ book }) {
    return (
       <div class="overflow-hidden rounded-2xl border border-line transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]">
            <img
                src={book.image}
                alt={book.name}
                className="aspect-[3/4] w-full object-cover"
            />
            <div className="p-4 text-sm">
                <h3 className="font-semibold">{book.name}</h3>
                <p>By {book.author}</p>
                <p class="price-tag pt-3 font-semibold">${book.price.toFixed(2)}</p>
            </div>
        </div>
    )
}