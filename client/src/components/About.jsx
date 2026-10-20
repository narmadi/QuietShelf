export function About() {
  return (
    <section id="about" className="bg-dark text-white">
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center md:text-left px-4 pt-12 pb-10 sm:px-6 md:pt-20 md:pb-16">
        <h4 className="text-heading text-center font-thin text-primary-dark">A little bookstore with a lot of stories</h4>
        <p className="leading-8 text-justify">
            We believe the right book can change the way you see the world. 
            Our shelves are carefully filled with stories, ideas, and voices 
            from both familiar favourites and new discoveries.
            Whether you're searching for an unforgettable novel, 
            learning something new, or simply looking for a quiet afternoon read, 
            there's always something waiting for you here.
        </p>
      </div>
    </section>
  )
}

