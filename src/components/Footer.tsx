import image1 from "../assets/dpiage-2.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  const linkClass = "text-text-muted hover:text-text-primary transition-colors"
  return (
    <footer className="bg-primary py-16 md:py-24">
      <div className='max-w-7xl mx-auto px-6 md:px-8'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12'>
          <div>
            <img src={image1} alt="de-prime-image" className="h-40 w-auto" />
            <p className="text-text-muted text-sm mt-4 max-w-xs">Where Tradition Meets Modern Style</p>
          </div>
          <div>
            <h3 className="text-text-primary font-heading text-lg mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><a className={linkClass} href="#herosection">Home</a></li>
              <li><a className={linkClass} href="#pricing">Services</a></li>
              <li><a className={linkClass} href="#about">About</a></li>
              <li><a className={linkClass} href="#gallery">Gallery</a></li>
              <li><a className={linkClass} href="#team">Team</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-text-primary font-heading text-lg mb-6"> Contact & Hours</h3>
            <p className="text-text-muted text-sm">+234 8149798764</p>
            <p className="text-text-muted text-sm">de-primebarbers@gmail.com</p>
            <p className="text-text-muted text-sm">Mon – Sun: 9AM – 9PM</p>
            <a className="text-accent text-sm hover:underline" href="https://maps.google.com/?q=Egbejila Road, Oko Erin 240281, Kwara" target="_blank">
              View on Google Maps →
            </a>
          </div>
          <div>
            <h3 className="text-text-primary font-heading text-lg mb-6">Ready for a fresh cut?</h3>
             <p className="text-text-muted text-sm mb-6">Book your appointment today and experience the De-Prime difference.</p>
            <button className="border border-accent text-accent px-6 py-3 hover:bg-accent hover:text-primary transition-colors mt-4">Book Now</button>
          </div>
        </div>
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">© {new Date().getFullYear()} De-Prime Barbers. All rights reserved.</p>
          <div className="flex gap-4">
            <FaFacebook className="text-accent w-5 h-5 hover:text-accent-light cursor-pointer" />
            <FaInstagramSquare className="text-accent w-5 h-5 hover:text-accent-light cursor-pointer" />
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer