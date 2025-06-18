import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Clock } from "lucide-react"

interface EventProps {
  title: string
  date: string
  time: string
  location: string
  description: string
  imageUrl: string
  slug: string
}

function EventCard({ title, date, time, location, description, imageUrl, slug }: EventProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>

        <div className="flex items-center text-gray-500 mb-2">
          <Calendar size={16} className="mr-2 flex-shrink-0" />
          <span>{date}</span>
        </div>

        <div className="flex items-center text-gray-500 mb-2">
          <Clock size={16} className="mr-2 flex-shrink-0" />
          <span>{time}</span>
        </div>

        <div className="flex items-center text-gray-500 mb-4">
          <MapPin size={16} className="mr-2 flex-shrink-0" />
          <span>{location}</span>
        </div>

        <p className="text-gray-700 mb-4">{description}</p>

        <Link
          href={`/evenements/${slug}`}
          className="inline-block bg-[#f39c12] text-white px-4 py-2 rounded hover:bg-[#e67e22]"
        >
          En savoir plus
        </Link>
      </div>
    </div>
  )
}

export default function Evenements() {
  const events = [
    {
      title: "Assemblée Générale Annuelle de la FEG",
      date: "15 juin 2025",
      time: "09:00 - 13:00",
      location: "Hôtel Radisson Blu, Libreville",
      description:
        "L'Assemblée Générale Annuelle de la FEG réunira tous les membres pour faire le bilan de l'année écoulée et définir les orientations pour l'année à venir.",
      imageUrl: "/images/event1.jpg",
      slug: "assemblee-generale-annuelle",
    },
    {
      title: "Forum sur l'investissement au Gabon",
      date: "10 mai 2025",
      time: "08:30 - 17:00",
      location: "Palais des Congrès, Libreville",
      description:
        "Ce forum réunira des investisseurs nationaux et internationaux pour discuter des opportunités d'investissement au Gabon.",
      imageUrl: "/images/event2.jpg",
      slug: "forum-investissement",
    },
    {
      title: "Séminaire sur la fiscalité des entreprises",
      date: "25 avril 2025",
      time: "14:00 - 17:30",
      location: "Siège de la FEG, Libreville",
      description:
        "Ce séminaire permettra aux entreprises de mieux comprendre les récentes réformes fiscales et leurs implications pour les entreprises.",
      imageUrl: "/images/event3.jpg",
      slug: "seminaire-fiscalite",
    },
    {
      title: "Atelier sur le commerce électronique",
      date: "15 avril 2025",
      time: "09:00 - 12:30",
      location: "Hôtel Nomad, Libreville",
      description:
        "Cet atelier vise à sensibiliser les entreprises aux opportunités offertes par le commerce électronique et à les accompagner dans leur transition numérique.",
      imageUrl: "/images/event4.jpg",
      slug: "atelier-commerce-electronique",
    },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#063d21] mb-8">Événements</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  )
}
