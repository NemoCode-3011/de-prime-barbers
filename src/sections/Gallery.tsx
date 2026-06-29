import { useState, useRef } from "react"
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
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  return (
    <section id="gallery" className="bg-primary py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-accent text-sm uppercase tracking-widest mb-2">Gallery</p>
        <div className="w-12 h-0.5 bg-accent mb-4" />
        <div>
          <h2 className="font-heading text-4xl font-bold text-text-primary mb-4">Discover Our Works</h2>
          <p className="text-text-muted max-w-md mb-12">Our team of experienced barbers is dedicated to their craft.
            We stay updated with the latest techniques and styles to
            ensure you get the best service possible.</p>
        </div>
        <div className="flex overflow-hidden">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-4 cursor-grab active:cursor-grabbing scrollbar-none"
            style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
            onMouseDown={(e) => {
              setIsDragging(true)
              setStartX(e.pageX - sliderRef.current!.offsetLeft)
              setScrollLeft(sliderRef.current!.scrollLeft)
            }}
            onMouseLeave={() => setIsDragging(false)}
            onMouseUp={() => setIsDragging(false)}
            onMouseMove={(e) => {
              if (!isDragging) return
              e.preventDefault()
              const x = e.pageX - sliderRef.current!.offsetLeft
              const walk = (x - startX) * 2
              sliderRef.current!.scrollLeft = scrollLeft - walk
            }}>
            {pictures.map((picture) => (
              <article key={picture.id} className="min-w-87.5 h-112.5 shrink-0">
                <img src={picture.src} alt={picture.alt} className="w-full h-full object-cover" />
              </article>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={() => { if (sliderRef.current) sliderRef.current.scrollLeft -= 354 }}
            className="border border-accent text-accent p-3 hover:bg-accent hover:text-primary transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => { if (sliderRef.current) sliderRef.current.scrollLeft += 354 }}
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