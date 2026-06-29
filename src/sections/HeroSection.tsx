import heroimage1 from "../assets/bb-14.jpg"
const HeroSection = () => {
  return (
    <section id="home" className="bg-primary h-screen min-h-screen overflow-hidden relative">
      {/* Mobile — full bg image with overlay */}
      <div className="absolute inset-0 md:hidden z-0">
        <img src={heroimage1} alt="barber" className="w-full h-full object-cover object-top opacity-30" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 h-full relative z-10">
        {/* Left — content */}
        <div className="flex flex-col justify-center px-6 md:px-16 gap-6 pt-24">
          <div className="w-12 h-0.5 bg-accent" />
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-text-primary leading-tight">
            Where Tradition Meets Modern Style
          </h1>
          <p className="text-text-muted text-base max-w-md">
            Precision cuts. Expert grooming. Timeless style.
          </p>
          <div className="flex flex-row items-center gap-8">
            <button className="border border-accent text-accent px-6 py-3 w-fit hover:bg-accent hover:text-primary transition-colors rounded-md">
              Book Now
            </button>
            <a href="#gallery" className="text-text-muted hover:text-text-primary transition-colors text-sm">
              View Our Work →
            </a>
          </div>
        </div>

        {/* Right — image, hidden on mobile */}
        <div className="hidden md:block overflow-hidden">
          <img src={heroimage1} alt="barber" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection