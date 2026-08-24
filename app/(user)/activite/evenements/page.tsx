"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

interface EventProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  slug: string;
}

function EventCard({ title, date, time, location, description, imageUrl, slug }: EventProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div className="h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary-900/20 flex flex-col">
        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-gray-100">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

          {/* Badge date */}
          <div className="absolute top-4 right-4">
            <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-center">
              <Calendar size={18} className="text-primary-900 mx-auto mb-1" />
              <span className="text-xs font-bold text-gray-700 block">{date}</span>
            </div>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-primary-900 mb-4 line-clamp-2 leading-tight group-hover:text-bronze-base transition-colors">
            {title}
          </h3>

          <div className="space-y-2.5 mb-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={16} className="text-primary-900/60 flex-shrink-0" />
              <span>{time}</span>
            </div>

            <div className="flex items-start gap-2 text-gray-600">
              <MapPin size={16} className="text-primary-900/60 flex-shrink-0 mt-0.5" />
              <span>{location}</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
            {description}
          </p>

          <Link
            href={`/activite/evenements/${slug}`}
            className="inline-flex items-center text-sm font-semibold text-primary-900 hover:text-bronze-base transition-colors group/link mt-auto"
          >
            En savoir plus
            <ArrowRight
              size={16}
              className="ml-2 transition-transform group-hover/link:translate-x-1"
            />
          </Link>
        </div>

        {/* Bordure bottom */}
        <div className="h-1 bg-gradient-to-r from-primary-900 to-bronze-base transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </motion.div>
  );
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
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      slug: "assemblee-generale-annuelle",
    },
    {
      title: "Forum sur l'investissement au Gabon",
      date: "10 mai 2025",
      time: "08:30 - 17:00",
      location: "Palais des Congrès, Libreville",
      description:
        "Ce forum réunira des investisseurs nationaux et internationaux pour discuter des opportunités d'investissement au Gabon.",
      imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
      slug: "forum-investissement",
    },
    {
      title: "Séminaire sur la fiscalité des entreprises",
      date: "25 avril 2025",
      time: "14:00 - 17:30",
      location: "Siège de la FEG, Libreville",
      description:
        "Ce séminaire permettra aux entreprises de mieux comprendre les récentes réformes fiscales et leurs implications pour les entreprises.",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      slug: "seminaire-fiscalite",
    },
    {
      title: "Atelier sur le commerce électronique",
      date: "15 avril 2025",
      time: "09:00 - 12:30",
      location: "Hôtel Nomad, Libreville",
      description:
        "Cet atelier vise à sensibiliser les entreprises aux opportunités offertes par le commerce électronique et à les accompagner dans leur transition numérique.",
      imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      slug: "atelier-commerce-electronique",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banière.jpg"
            alt="Événements FEG"
            fill
            className="object-cover opacity-15"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-bronze-base"></div>
              <span className="text-xs font-bold tracking-widest text-bronze-base uppercase">
                Événements
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight">
              Nos Événements
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Participez aux événements organisés par la Fédération des Entreprises du Gabon
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-primary-900 hover:text-bronze-base transition-colors">
              Accueil
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-400">Activités</span>
            <span className="text-gray-400">/</span>
            <span className="font-medium text-gray-700">Événements</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-3">
              Événements à venir
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos prochains événements et inscrivez-vous
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
