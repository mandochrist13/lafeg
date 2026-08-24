"use client";

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
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
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
      imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
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
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
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
      imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
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
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src={eventItem.imageUrl || "/images/banière.jpg"}
            alt={eventItem.title}
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/activite/evenements"
            className="inline-flex items-center text-bronze-base hover:text-bronze-light mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" /> Retour aux événements
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-bronze-base mb-4">
              <Calendar size={18} />
              <span className="text-sm font-semibold">{eventItem.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              {eventItem.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="relative h-96">
                <Image
                  src={eventItem.imageUrl || "/placeholder.svg"}
                  alt={eventItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 md:p-12">
                {/* Event Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 pb-10 border-b border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <Calendar size={18} className="text-primary-900" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Date</p>
                        <p className="text-gray-900 font-medium">{eventItem.date}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <Clock size={18} className="text-primary-900" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Horaire</p>
                        <p className="text-gray-900 font-medium">{eventItem.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <MapPin size={18} className="text-primary-900" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Lieu</p>
                        <p className="text-gray-900 font-medium">{eventItem.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <User size={18} className="text-primary-900" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Organisateur</p>
                        <p className="text-gray-900 font-medium">{eventItem.organizer}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <Users size={18} className="text-primary-900" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Participants</p>
                        <p className="text-gray-900 font-medium">{eventItem.participants}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-primary-900 mb-6">Description</h2>
                  <div className="prose prose-lg max-w-none">
                    {eventItem.description.map((paragraph, index) => (
                      <p key={index} className="mb-6 text-gray-700 leading-relaxed text-justify">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Program */}
                {eventItem.program.length > 0 && (
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-primary-900 mb-6">Programme</h2>
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl overflow-hidden border border-gray-200">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-primary-900 text-white">
                              <th className="text-left py-4 px-6 font-bold">Horaire</th>
                              <th className="text-left py-4 px-6 font-bold">Activité</th>
                            </tr>
                          </thead>
                          <tbody>
                            {eventItem.program.map((item, index) => (
                              <tr
                                key={index}
                                className={`${
                                  index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                                } hover:bg-primary-50/30 transition-colors`}
                              >
                                <td className="py-4 px-6 border-b border-gray-200 font-semibold text-primary-900 whitespace-nowrap">
                                  {item.time}
                                </td>
                                <td className="py-4 px-6 border-b border-gray-200 text-gray-700">
                                  {item.activity}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <div className="text-center pt-8 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-bronze-base to-bronze-dark hover:from-bronze-dark hover:to-bronze-base text-primary-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <span>S'inscrire à cet événement</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-200">
                  <Link
                    href="/activite/evenements"
                    className="inline-flex items-center text-primary-900 hover:text-bronze-base font-semibold transition-colors"
                  >
                    <ArrowLeft size={20} className="mr-2" />
                    Retour aux événements
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
