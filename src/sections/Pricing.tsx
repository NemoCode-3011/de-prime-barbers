import { Scissors, Zap, Smile, Flame, Palette, Baby, Sparkles, Home } from "lucide-react"
const Pricing = () => {
  const services = [
    { name: "Signature Haircut", price: "₦3,000" },
    { name: "Skin Fade", price: "₦3,500" },
    { name: "Low Cut / Even Cut", price: "₦2,500" },
    { name: "Kids Haircut (Under 12)", price: "₦2,000" },
    { name: "Student Haircut", price: "₦2,500" },
    { name: "Beard Trim & Shape Up", price: "₦1,500" },
    { name: "Hairline / Line Up", price: "₦1,500" },
    { name: "Hair Wash", price: "₦1,000" },
    { name: "Hair Dye (Black)", price: "₦4,000" },
    { name: "Hair Dye (Color)", price: "₦6,000" },
    { name: "Facial Treatment", price: "₦5,000" },
    { name: "Hot Towel Shave", price: "₦3,500" },
    { name: "Head Shave", price: "₦2,500" },
    { name: "Hair Design", price: "From ₦2,000" },
    { name: "Home Service", price: "From ₦10,000" },
  ]

  const packages = [
    {
      name: "The Classic",
      price: "₦4,000",
      includes: ["Haircut", "Beard Line Up", "Styling"]
    },
    {
      name: "The Executive",
      price: "₦6,500",
      includes: ["Premium Haircut", "Beard Trim", "Hair Wash", "Styling"]
    },
    {
      name: "The De-Prime Experience",
      price: "₦10,000",
      includes: ["Signature Haircut", "Beard Grooming", "Facial", "Hair Wash", "Hot Towel Finish"]
    },
  ]

  type IconName = keyof typeof iconMap
  const iconMap = {
    Scissors, Zap, Smile, Flame, Palette, Baby, Sparkles, Home,
  }
  const featuredServices: { name: string; icon: IconName }[] = [
    { name: "Signature Haircuts", icon: "Scissors" },
    { name: "Skin Fades", icon: "Zap" },
    { name: "Beard Grooming", icon: "Smile" },
    { name: "Hot Towel Shaves", icon: "Flame" },
    { name: "Hair Coloring", icon: "Palette" },
    { name: "Kids Haircuts", icon: "Baby" },
    { name: "Hair Designs", icon: "Sparkles" },
    { name: "Home Service", icon: "Home" },
  ]

  return (
    <section id="pricing" className='bg-primary py-24'>
      <div className='max-w-7xl mx-auto px-8'>
        <h2 className="font-heading text-4xl font-bold text-text-primary mb-2">Our Services & Pricing</h2>
        <div>
          <h3>Featured Services</h3>
          <div className='grid grid-cols-4 gap-6 mt-8 mb-16'>
            {featuredServices.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap]
              return (
                <article key={service.name} className="flex flex-col gap-3 p-6 border border-border hover:border-accent transition-colors">
                  <IconComponent className="text-accent w-6 h-6" />
                  <h3 className="text-text-primary font-heading text-lg">{service.name}</h3>
                </article>
              )
            })}
          </div>
        </div>
        <div className="w-full h-0.5 bg-accent mb-4" />
        <div className="max-w-2xl">
          <h3 className="text-text-primary font-heading text-2xl mb-8">Full Price List</h3>
          <dl>
            {services.map((service) => (
              <div key={service.name} className="flex justify-between items-center py-3 border-b border-border">
                <dt className="text-text-muted">{service.name}</dt>
                <dd className="text-accent font-semibold">{service.price}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="w-full h-0.5 bg-accent mb-4" />
        <h3 className="text-text-primary font-heading text-2xl mb-8 mt-16">Our Packages</h3>
        <div className='grid grid-cols-3 gap-8 pt-3 '>
          {packages.map((pkg) => (
            <article key={pkg.name} className="flex flex-col gap-4 p-8 border border-border hover:border-accent transition-colors">
              <h3 className="font-heading text-xl text-text-primary">{pkg.name}</h3>
              <p className="text-accent text-2xl font-bold">{pkg.price}</p>
              <ul>
                {pkg.includes.map((item) => (
                  <li key={item} className="text-text-muted text-sm flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full inline-block" />{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <button className="border border-accent text-accent px-6 py-3 w-fit hover:bg-accent hover:text-primary transition-colors">Book Now</button>
        </div>
      </div>
    </section>
  )
}

export default Pricing