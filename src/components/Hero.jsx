export function Hero() {
  return (
    <section id="hero" className="bg-[url(images/hero-img.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="mx-auto max-w-[1100px] text-white text-center md:text-left px-4 pt-12 pb-10 sm:px-6 md:pt-20 md:pb-16">
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-thin leading-6">Find a <span className="font-bold">story</span></h1>
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-thin">Find a <span className="font-bold">moment</span></h1>
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-extralight">SALES UPTO 70% OFF</h1>
        <h4 className="mx-auto sm:mx-0 text-[clamp(1rem,2vw,1.5rem)] leading-8 my-8 max-w-full md:max-w-[75%] lg:max-w-[50%]">
          Welcome to The Quiet Shelf, an independent bookstore for curious minds,
          thoughtful readers, and anyone looking for their next great story.
        </h4>
        <a href="#" className="bg-dark rounded-full py-5 px-10 hover:bg-light transition-all duration-300">Explore Books</a>
      </div>
    </section>
  )
}

