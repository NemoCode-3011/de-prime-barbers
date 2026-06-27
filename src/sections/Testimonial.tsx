
const Testimonial = () => {
  const testimonials = [
    { id: 1, name: "John B.", quote: "I've tried several barbers over the years, but De-Prime consistently gets it right. The attention to detail is impressive, the atmosphere is welcoming, and the prices are more than fair for the quality you receive.", rating: "⭐⭐⭐⭐⭐" },
    { id: 2, name: "Micheal O.", quote: "From the moment I walked in, I knew this wasn't an ordinary barbershop. The service was professional, my fade was exactly how I wanted it, and I left feeling confident. Highly recommended.", rating: "⭐⭐⭐⭐" },
    { id: 3, name: "Victoria J.", quote: "Clean environment, skilled barbers, and excellent customer service. De-Prime delivers a premium grooming experience without charging premium prices. I'll definitely be coming back.", rating: "⭐⭐⭐⭐⭐" }
  ]
  return (
    <section id="testimonial" className="bg-surface py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="w-12 h-0.5 bg-accent mb-4" />
        <h2 className="font-heading text-4xl font-bold text-text-dark mb-2">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="flex flex-col gap-4 p-8 border border-border">
              <h3 className="text-text-dark font-semibold text-sm">{testimonial.name}</h3>
              <div className="w-8 h-0.5 bg-accent" />
              <span className="text-accent font-heading text-6xl leading-none">❝</span>
              <p className="text-text-dark/70 text-sm leading-relaxed">{testimonial.quote}</p>
              <span className="text-sm">{testimonial.rating}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial