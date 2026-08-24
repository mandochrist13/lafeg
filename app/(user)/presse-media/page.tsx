"use client";

import Image from "next/image";
import { Calendar, Newspaper, Video, Image as ImageIcon, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface MediaItem {
  id: number;
  title: string;
  source: string;
  date: string;
  type: "article" | "video" | "photo";
  excerpt: string;
  imageUrl: string;
  externalUrl: string;
}

export default function PresseMediaPage() {
  const [selectedType, setSelectedType] = useState<string>("tous");

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      title: "La FEG au cœur de la transformation économique du Gabon",
      source: "L'Union",
      date: "20 mars 2025",
      type: "article",
      excerpt:
        "Interview exclusive du Président de la FEG sur les enjeux de la diversification économique et le rôle du secteur privé dans le développement du pays.",
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
      externalUrl: "#",
    },
    {
      id: 2,
      title: "Forum de l'investissement : La FEG mobilise les acteurs économiques",
      source: "Gabon Média Time",
      date: "15 mars 2025",
      type: "video",
      excerpt:
        "Reportage sur le grand forum de l'investissement organisé par la FEG, réunissant investisseurs nationaux et internationaux.",
      imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
      externalUrl: "#",
    },
    {
      id: 3,
      title: "Assemblée Générale 2025 - Album photo",
      source: "FEG",
      date: "10 mars 2025",
      type: "photo",
      excerpt:
        "Revivez en images les moments forts de l'Assemblée Générale annuelle de la Fédération des Entreprises du Gabon.",
      imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      externalUrl: "#",
    },
    {
      id: 4,
      title: "Partenariat FEG-Gouvernement pour l'emploi des jeunes",
      source: "Gabonews",
      date: "5 mars 2025",
      type: "article",
      excerpt:
        "Un accord historique signé entre la FEG et le Ministère de l'Emploi pour favoriser l'insertion professionnelle des jeunes gabonais.",
      imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
      externalUrl: "#",
    },
    {
      id: 5,
      title: "Transition énergétique : Le secteur privé s'engage",
      source: "Gabon Review",
      date: "1 mars 2025",
      type: "video",
      excerpt:
        "Table ronde organisée par la FEG sur les défis de la transition énergétique et les opportunités pour les entreprises gabonaises.",
      imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
      externalUrl: "#",
    },
    {
      id: 6,
      title: "Séminaire fiscal 2025 - Galerie photos",
      source: "FEG",
      date: "25 février 2025",
      type: "photo",
      excerpt:
        "Images du séminaire sur la fiscalité des entreprises qui a réuni plus de 200 participants au siège de la FEG.",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      externalUrl: "#",
    },
    {
      id: 7,
      title: "Le digital au service des entreprises gabonaises",
      source: "Africa Business+",
      date: "20 février 2025",
      type: "article",
      excerpt:
        "La FEG lance une initiative ambitieuse pour accompagner la transformation digitale des entreprises membres.",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      externalUrl: "#",
    },
    {
      id: 8,
      title: "Interview du Président de la FEG sur RTG",
      source: "Radio Télévision Gabonaise",
      date: "15 février 2025",
      type: "video",
      excerpt:
        "Le Président de la FEG invité du journal télévisé pour évoquer les priorités du secteur privé pour 2025.",
      imageUrl: "https://images.unsplash.com/photo-1560177112-fbfd5fde9566?w=800&h=600&fit=crop",
      externalUrl: "#",
    },
    {
      id: 9,
      title: "Commerce électronique : La FEG forme ses membres",
      source: "Eco Gabon",
      date: "10 février 2025",
      type: "article",
      excerpt:
        "Retour sur l'atelier de formation au commerce électronique organisé par la FEG en partenariat avec la Chambre de Commerce.",
      imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      externalUrl: "#",
    },
  ];

  const filteredItems =
    selectedType === "tous"
      ? mediaItems
      : mediaItems.filter((item) => item.type === selectedType);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "article":
        return <Newspaper size={16} />;
      case "video":
        return <Video size={16} />;
      case "photo":
        return <ImageIcon size={16} />;
      default:
        return <Newspaper size={16} />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "article":
        return "Article";
      case "video":
        return "Vidéo";
      case "photo":
        return "Photos";
      default:
        return "Média";
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-bronze-base"></div>
              <span className="text-xs font-bold tracking-widest text-bronze-base uppercase">
                Presse & Média
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              Espace Presse & Média
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Retrouvez notre présence dans les médias et nos couvertures presse
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Type Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { value: "tous", label: "Tous", icon: null },
                  { value: "article", label: "Articles", icon: <Newspaper size={18} /> },
                  { value: "video", label: "Vidéos", icon: <Video size={18} /> },
                  { value: "photo", label: "Photos", icon: <ImageIcon size={18} /> },
                ].map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setSelectedType(type.value)}
                    className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                      selectedType === type.value
                        ? "bg-primary-900 text-white shadow-lg scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-900 shadow-md"
                    }`}
                  >
                    {type.icon}
                    <span>{type.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Media Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={item.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-gray-100">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Type Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-bronze-base text-primary-900 text-xs font-bold rounded-full">
                          {getTypeIcon(item.type)}
                          {getTypeLabel(item.type)}
                        </span>
                      </div>

                      {/* Date Badge */}
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                          <Calendar size={14} className="text-primary-900" />
                          <span className="text-xs font-semibold text-gray-700">{item.date}</span>
                        </div>
                      </div>

                      {/* External Link Icon */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-white/95 backdrop-blur-sm rounded-full p-2">
                          <ExternalLink size={18} className="text-primary-900" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="text-xs font-semibold text-bronze-dark mb-2 uppercase tracking-wide">
                        {item.source}
                      </div>

                      <h3 className="text-lg font-bold text-primary-900 mb-3 line-clamp-2 group-hover:text-bronze-dark transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-600 line-clamp-3">{item.excerpt}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Contact Presse Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Contact Presse</h2>
                    <p className="text-lg text-white/80 mb-6">
                      Vous êtes journaliste ou professionnel des médias ? Contactez notre service communication pour toute demande d'interview, information ou accréditation.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-bronze-base flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="font-semibold">presse@feg.ga</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-bronze-base flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <span className="font-semibold">+241 01 76 35 47</span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Newspaper size={96} className="text-bronze-base" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
