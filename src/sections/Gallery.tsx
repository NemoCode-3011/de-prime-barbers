import { useState } from "react"
import galpic from "../assets/gal-1.jpg"
import galpic1 from "../assets/gal-2.jpg"
import galpic2 from "../assets/gal3.jpg"
import galpic3 from "../assets/gal4.jpg"
import galpic4 from "../assets/gal5.jpg"
import galpic5 from "../assets/gal6.jpeg"
import galpic6 from "../assets/gal7.jpg"
import galpic7 from "../assets/gal8.jpg"
import galpic8 from "../assets/gal9.jpg"
import galpic9 from "../assets/gal10.jpg"
const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const pictures = [
    { id: 1, src: galpic, alt: "Haircut 1" },
    { id: 2, src: galpic1, alt: "Haircut 2" },
    { id: 3, src: galpic2, alt: "Haircut 3" },
    { id: 4, src: galpic3, alt: "Haircut 4" },
    { id: 5, src: galpic4, alt: "Haircut 5" },
    { id: 6, src: galpic5, alt: "Haircut 6" },
    { id: 7, src: galpic6, alt: "Haircut 7" },
    { id: 8, src: galpic7, alt: "Haircut 8" },
    { id: 9, src: galpic8, alt: "Haircut 9" },
    { id: 10, src: galpic9, alt: "Haircut 10" },

  ]
  return (
    <section id="gallery" className="bg-primary py-24">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-accent text-sm uppercase tracking-widest mb-2">Gallery</p>
        <div className="w-12 h-0.5 bg-accent mb-4" />
        <div>
          <h2 className="font-heading text-4xl font-bold text-text-primary mb-4">Discover Our Works</h2>
          <p className="text-text-muted max-w-md mb-12">Our team of experienced barbers is dedicated to their craft.
            We stay updated with the latest techniques and styles to
            ensure you get the best service possible.</p>
        </div>
        <div className="flex overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out gap-4"
            style={{ transform: `translateX(-${currentIndex * 354}px)` }}>
            {pictures.map((picture) => (
              <article key={picture.id} className="min-w-[350px] h-[450px] flex-shrink-0">
                <img src={picture.src} alt={picture.alt} className="w-full h-full object-cover" />
              </article>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            className="border border-accent text-accent p-3 hover:bg-accent hover:text-primary transition-colors"
          >
            ←
          </button>
          <span className="text-text-muted text-sm">
            {currentIndex + 1} — {Math.min(currentIndex + 3, pictures.length)} / {pictures.length}
          </span>
          <button
            onClick={() => setCurrentIndex(Math.min(pictures.length - 3, currentIndex + 1))}
            className="border border-accent text-accent p-3 hover:bg-accent hover:text-primary transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Gallery