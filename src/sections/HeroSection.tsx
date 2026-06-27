import heroimage1 from "../assets/bb-14.jpg"
const HeroSection = () => {
  return (
    <section id="herosection" className="bg-primary h-screen min-h-screen overflow-hidden pt-20">
      <div className="grid grid-cols-2 h-full">
        <div className="flex flex-col justify-center px-16 gap-6 ">
          <div className="w-12 h-0.5 bg-accent" />
          <h1 className="text-text-primary font-heading text-5xl font-bold leading-tight">Where Tradition Meets Modern Style</h1>
          <p className="text-text-muted text-base max-w-md">Precision cuts. Expert grooming. Timeless style.
          </p>
          <div className="flex items-center gap-8">
            <button className="border border-accent text-accent px-6 py-3 w-fit hover:bg-accent hover:text-primary transition-colors">Book Now</button>
            <a href="#gallery" className="text-text-muted hover:text-text-primary transition-colors text-sm">
              View Our Work →
            </a>
          </div>
        </div>
        <div className=" relative overflow-hidden">
          <img src={heroimage1} alt="barber" className="w-full h-full object-cover " />
        </div>
      </div>
    </section >
  )
}

export default HeroSection