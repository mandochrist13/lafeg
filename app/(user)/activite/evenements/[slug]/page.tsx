import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowLeft, User, Users } from "lucide-react"

interface EventItem {
  title: string
  date: string
  time: string
  location: string
  organizer: string
  participants: string
  description: string[]
  program: { time: string; activity: string }[]
  imageUrl: string
}

interface EventData {
  [key: string]: EventItem
}

export default function EventDetail({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Simulated event database
  const eventData: EventData = {
    "assemblee-generale-annuelle": {
      title: "Assemblée Générale Annuelle de la FEG",
      date: "15 juin 2025",
      time: "09:00 - 13:00",
      location: "Hôtel Radisson Blu, Libreville",
      organizer: "Fédération des Entreprises du Gabon",
      participants: "Membres de la FEG",
      description: [
        "L'Assemblée Générale Annuelle de la FEG réunira tous les membres pour faire le bilan de l'année écoulée et définir les orientations pour l'année à venir.",
        "Cette assemblée sera l'occasion de présenter le rapport d'activités 2024, le rapport financier, et le plan d'action 2025-2026. Les membres auront également l'opportunité d'élire les nouveaux membres du Conseil d'Administration pour un mandat de trois ans.",
        "L'Assemblée Générale sera suivie d'un cocktail déjeunatoire qui permettra aux membres d'échanger dans un cadre convivial.",
      ],
      program: [
        { time: "08:30 - 09:00", activity: "Accueil et enregistrement des participants" },
        { time: "09:00 - 09:15", activity: "Mot de bienvenue du Président de la FEG" },
        { time: "09:15 - 10:00", activity: "Présentation du rapport d'activités 2024" },
        { time: "10:00 - 10:30", activity: "Présentation du rapport financier" },
        { time: "10:30 - 11:00", activity: "Pause-café" },
        { time: "11:00 - 11:45", activity: "Présentation du plan d'action 2025-2026" },
        { time: "11:45 - 12:30", activity: "Élection des nouveaux membres du Conseil d'Administration" },
        { time: "12:30 - 13:00", activity: "Questions-réponses et clôture" },
        { time: "13:00 - 14:30", activity: "Cocktail déjeunatoire" },
      ],
      imageUrl: "/images/event1.jpg",
    },
    "forum-investissement": {
      title: "Forum sur l'investissement au Gabon",
      date: "10 mai 2025",
      time: "08:30 - 17:00",
      location: "Palais des Congrès, Libreville",
      organizer:
        "Fédération des Entreprises du Gabon en collaboration avec l'Agence Nationale de Promotion des Investissements",
      participants: "Investisseurs nationaux et internationaux, entreprises gabonaises, représentants du gouvernement",
      description: [
        "Ce forum réunira des investisseurs nationaux et internationaux pour discuter des opportunités d'investissement au Gabon.",
        "Il vise à promouvoir le Gabon comme destination d'investissement et à faciliter les rencontres entre investisseurs et porteurs de projets.",
        "Le forum comprendra des sessions plénières, des ateliers thématiques, et des rencontres B2B. Des représentants du gouvernement présenteront les réformes récentes visant à améliorer l'environnement des affaires au Gabon.",
      ],
      program: [
        { time: "08:30 - 09:00", activity: "Accueil et enregistrement des participants" },
        { time: "09:00 - 09:30", activity: "Cérémonie d'ouverture" },
        { time: "09:30 - 10:30", activity: "Session plénière : 'Le Gabon, terre d'opportunités'" },
        { time: "10:30 - 11:00", activity: "Pause-café" },
        { time: "11:00 - 12:30", activity: "Ateliers thématiques (Agriculture, Mines, Tourisme, TIC)" },
        { time: "12:30 - 14:00", activity: "Déjeuner" },
        { time: "14:00 - 15:30", activity: "Table ronde : 'Financer son projet au Gabon'" },
        { time: "15:30 - 16:00", activity: "Pause-café" },
        { time: "16:00 - 17:00", activity: "Rencontres B2B" },
        { time: "17:00 - 17:30", activity: "Cérémonie de clôture" },
      ],
      imageUrl: "/images/event2.jpg",
    },
    "seminaire-fiscalite": {
      title: "Séminaire sur la fiscalité des entreprises",
      date: "25 avril 2025",
      time: "14:00 - 17:30",
      location: "Siège de la FEG, Libreville",
      organizer: "Fédération des Entreprises du Gabon",
      participants: "Directeurs financiers, comptables, conseillers fiscaux, chefs d'entreprise",
      description: [
        "Ce séminaire permettra aux entreprises de mieux comprendre les récentes réformes fiscales et leurs implications pour les entreprises.",
        "Il sera animé par des experts fiscalistes qui présenteront les principales dispositions de la loi de finances 2025 et répondront aux questions des participants.",
        "Le séminaire abordera notamment les thèmes suivants : l'impôt sur les sociétés, la TVA, les droits d'enregistrement, la fiscalité des salaires, et les incitations fiscales pour les investissements.",
      ],
      program: [
        { time: "13:30 - 14:00", activity: "Accueil des participants" },
        { time: "14:00 - 14:15", activity: "Mot de bienvenue" },
        { time: "14:15 - 15:00", activity: "Présentation des principales dispositions de la loi de finances 2025" },
        { time: "15:00 - 15:45", activity: "Impact des réformes fiscales sur les entreprises" },
        { time: "15:45 - 16:15", activity: "Pause-café" },
        { time: "16:15 - 17:00", activity: "Optimisation fiscale et bonnes pratiques" },
        { time: "17:00 - 17:30", activity: "Questions-réponses et clôture" },
      ],
      imageUrl: "/images/event3.jpg",
    },
    "atelier-commerce-electronique": {
      title: "Atelier sur le commerce électronique",
      date: "15 avril 2025",
      time: "09:00 - 12:30",
      location: "Hôtel Nomad, Libreville",
      organizer: "Fédération des Entreprises du Gabon en partenariat avec la Chambre de Commerce du Gabon",
      participants: "Entreprises gabonaises, startups, entrepreneurs",
      description: [
        "Cet atelier vise à sensibiliser les entreprises aux opportunités offertes par le commerce électronique et à les accompagner dans leur transition numérique.",
        "Il sera animé par des experts en commerce électronique qui partageront leurs connaissances et expériences dans ce domaine en pleine expansion.",
        "L'atelier abordera les thèmes suivants : les fondamentaux du commerce électronique, la création d'une boutique en ligne, les moyens de paiement électronique, la logistique et la livraison, et les aspects juridiques du commerce électronique.",
      ],
      program: [
        { time: "08:30 - 09:00", activity: "Accueil des participants" },
        { time: "09:00 - 09:15", activity: "Introduction au commerce électronique" },
        { time: "09:15 - 10:00", activity: "Création d'une boutique en ligne" },
        { time: "10:00 - 10:30", activity: "Pause-café" },
        { time: "10:30 - 11:15", activity: "Moyens de paiement électronique" },
        { time: "11:15 - 12:00", activity: "Logistique, livraison et aspects juridiques" },
        { time: "12:00 - 12:30", activity: "Questions-réponses et clôture" },
      ],
      imageUrl: "/images/event4.jpg",
    },
  }

  const eventItem = eventData[slug] || {
    title: "Événement non trouvé",
    date: "",
    time: "",
    location: "",
    organizer: "",
    participants: "",
    description: ["L'événement que vous recherchez n'existe pas ou a été supprimé."],
    program: [],
    imageUrl: "/images/placeholder.jpg",
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <Link href="/evenements" className="inline-flex items-center text-[#063d21] hover:underline mb-6">
          <ArrowLeft size={20} className="mr-2" /> Retour aux événements
        </Link>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64 md:h-96">
            <Image src={eventItem.imageUrl || "/placeholder.svg"} alt={eventItem.title} fill className="object-cover" />
          </div>

          <div className="p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">{eventItem.title}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Calendar size={20} className="mr-3 text-[#063d21]" />
                  <span>{eventItem.date}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock size={20} className="mr-3 text-[#063d21]" />
                  <span>{eventItem.time}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin size={20} className="mr-3 text-[#063d21]" />
                  <span>{eventItem.location}</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <User size={20} className="mr-3 text-[#063d21]" />
                  <span>{eventItem.organizer}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users size={20} className="mr-3 text-[#063d21]" />
                  <span>{eventItem.participants}</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-[#063d21]">Description</h2>
              <div className="prose max-w-none">
                {eventItem.description.map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {eventItem.program.length > 0 && (
              <div>
                <h2 className="text-xl font-bold mb-4 text-[#063d21]">Programme</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-2 px-4 font-bold">Horaire</th>
                        <th className="text-left py-2 px-4 font-bold">Activité</th>
                      </tr>
                    </thead>
                    <tbody>
                      {eventItem.program.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="py-2 px-4 border-b border-gray-200">{item.time}</td>
                          <td className="py-2 px-4 border-b border-gray-200">{item.activity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="inline-block bg-[#f39c12] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#e67e22] transition-colors"
              >
                S'inscrire à cet événement
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
