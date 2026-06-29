import barber1 from "../assets/barber1.jpg"
import barber2 from "../assets/barber2.jpg"
import ceo from "../assets/ceo2.jpg"
const Team = () => {
  const teams = [
    { id: 1, title: "Owner/CEO", name: "John Bamidele", image: ceo },
    { id: 2, title: "Barber 1", name: "Aaron Adeboyega", image: barber1 },
    { id: 3, title: "Barber 2", name: "Segun Johnson", image: barber2 },
  ]
  return (
    <section id="team" className="bg-surface py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="w-12 h-0.5 bg-accent mb-4" />
        <h2 className="font-heading text-4xl font-bold text-text-dark mb-12">Meet The Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 h-auto md:h-125">
          {teams.map((team) => (
            <article key={team.id} className="relative overflow-hidden cursor-pointer group h-100">
              <img src={team.image} alt={team.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-4 py-3">
                <h3 className="text-text-primary font-heading text-lg">{team.name}</h3>
                <p className="text-accent text-sm">{team.title}</p>
              </div>
            </article>
          ))}
          <article className="relative overflow-hidden bg-primary flex flex-col items-center justify-center gap-6 p-8 text-center">
            <h3 className="font-heading text-2xl text-text-primary">Join Our Team</h3>
            <p className="text-text-muted text-sm">We're always looking for talented barbers to grow with us.</p>
            <button className="border border-accent text-accent px-6 py-3 hover:bg-accent hover:text-primary transition-colors">Get In Touch</button>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Team