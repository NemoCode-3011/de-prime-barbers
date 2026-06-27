import Navbar from "../components/NavBar"
import About from "../sections/About"
import Gallery from "../sections/Gallery"
import HeroSection from "../sections/HeroSection"
import Pricing from "../sections/Pricing"
import Team from "../sections/Team"
import Testimonial from "../sections/Testimonial"
import Footer from "../components/Footer"
const Home = () => {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <About />
      <Pricing />
      <Team />
      <Gallery />
      <Testimonial />
      <Footer/>
    </main>

  )
}

export default Home