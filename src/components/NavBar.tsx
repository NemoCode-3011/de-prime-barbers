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
    <nav className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto bg-primary md:bg-transparent px-8 py-6 md:p-0 items-start md:items-center gap-6 md:gap-8`}>
      <div>
        <img src={image1} alt="de-prime-image" className="h-18 w-auto" />
      </div>
      <ul className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row hidden  items-center gap-8`} >
        <li><a onClick={() => setIsOpen(false)} className={linkClass} href="#herosection">Home</a></li>
        <li><a onClick={() => setIsOpen(false)} className={linkClass} href="#pricing">Services</a></li>
        <li><a onClick={() => setIsOpen(false)} className={linkClass} href="#about">About</a></li>
        <li><a onClick={() => setIsOpen(false)} className={linkClass} href="#gallery">Gallery</a></li>
        <li><a onClick={() => setIsOpen(false)} className={linkClass} href="#team">Team</a></li>
      </ul>
      <div className="flex items-center gap-4">
        <button className="border border-accent rounded-md hover:bg-accent hover:text-primary transition-colors text-accent px-3 py-2 hidden md:block">
          Book Now
        </button>
        <button
          className="md:hidden text-text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar