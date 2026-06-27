import { useEffect, useState } from "react"
import image1 from "../assets/dpiage-2.png"
import { Menu, X } from "lucide-react"
const Navbar = () => {
  const linkClass = "text-text-muted hover:text-text-primary transition-colors"
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`flex items-center justify-between px-8 py-5 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-primary shadow-lg" : "bg-black/40 backdrop-blur-md"}`}>

      {/* Logo */}
      <div>
        <img src={image1} alt="de-prime-image" className="h-18 w-auto" />
      </div>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8">
        <li><a className={linkClass} href="#hero">Home</a></li>
        <li><a className={linkClass} href="#services">Services</a></li>
        <li><a className={linkClass} href="#about">About</a></li>
        <li><a className={linkClass} href="#gallery">Gallery</a></li>
        <li><a className={linkClass} href="#team">Team</a></li>
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button className="border border-accent rounded-md hover:bg-accent hover:text-primary transition-colors text-accent px-3 py-2 hidden md:block">
          Book Now
        </button>
        <button className="md:hidden text-text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <ul className={`${isOpen ? "flex" : "hidden"} flex-col absolute top-full left-0 right-0 bg-primary px-8 py-6 gap-6`}>
        <li><a onClick={() => setIsOpen(false)} className={linkClass} href="#hero">Home</a></li>
        <li><a onClick={() => setIsOpen(false)} className={linkClass} href="#services">Services</a></li>
        <li><a onClick={() => setIsOpen(false)} className={linkClass} href="#about">About</a></li>
        <li><a onClick={() => setIsOpen(false)} className={linkClass} href="#gallery">Gallery</a></li>
        <li><a onClick={() => setIsOpen(false)} className={linkClass} href="#team">Team</a></li>
        <li>
          <button className="border border-accent text-accent px-6 py-3 w-full hover:bg-accent hover:text-primary transition-colors">
            Book Now
          </button>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar