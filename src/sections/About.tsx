import { Scissors, Star, BadgeDollarSign } from "lucide-react"
const About = () => {
  return (
    <>
      <section id="about" className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="w-full mb-16">
            <div className="w-12 h-0.5 bg-accent mb-4" />
            <h2 className="font-heading text-4xl font-bold text-text-dark mb-4">About De-Prime Barbers</h2>
            <p className="text-text-dark/70 text-base max-w-2xl">At De-Prime Barbers, exceptional grooming is more than a service, it's an experience. Precision cuts, expert beard grooming, and timeless style in an environment built for comfort and sophistication.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-3 ">
            <article className="flex flex-col gap-4 p-10 border border-border">
              <Scissors className="text-accent w-8 h-8" />
              <h3 className="font-heading text-xl font-semibold text-text-dark">Skilled Barbers</h3>
              <p className="text-text-dark/60 text-sm leading-relaxed">Our experienced barbers combine precision, creativity, and attention to detail to deliver cuts that suit your style.</p>
            </article>
            <article className="flex flex-col gap-4 p-10 border border-border">
              <Star className="text-accent w-8 h-8" />
              <h3 className="font-heading text-xl font-semibold text-text-dark">Premium Experience</h3>
              <p className="text-text-dark/60 text-sm leading-relaxed">Enjoy a clean, modern, and welcoming environment where every visit feels comfortable and professional.</p>
            </article>
            <article className="flex flex-col gap-4 p-10 border border-border">
              <BadgeDollarSign className="text-accent w-8 h-8" />
              <h3 className="font-heading text-xl font-semibold text-text-dark">Affordable Excellence</h3>
              <p className="text-text-dark/60 text-sm leading-relaxed">Looking your best shouldn't come at a premium price. We offer quality grooming services at prices that deliver exceptional value.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default About