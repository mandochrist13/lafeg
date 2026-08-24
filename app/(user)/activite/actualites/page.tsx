"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

interface NewsItemProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  slug: string;
}

function NewsItem({ title, excerpt, date, imageUrl, slug }: NewsItemProps) {
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
        <div className="relative h-52 overflow-hidden bg-gray-100">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Badge date */}
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
              <Calendar size={14} className="text-primary-900" />
              <span className="text-xs font-semibold text-gray-700">{date}</span>
            </div>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-lg font-bold text-primary-900 mb-3 line-clamp-2 leading-tight group-hover:text-bronze-base transition-colors">
            {title}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
            {excerpt}
          </p>

          <Link
            href={`/activite/actualites/${slug}`}
            className="inline-flex items-center text-sm font-semibold text-primary-900 hover:text-bronze-base transition-colors group/link"
          >
            Lire la suite
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

export default function Actualites() {
  const newsItems = [
    {
      title: "Appel à manifestation d'intérêt",
      excerpt:
        "La FEG lance un appel pour des projets innovants dans le secteur privé gabonais.",
      date: "28 mars 2025",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      slug: "appel-manifestation-interet",
    },
    {
      title: "Table ronde sur le refinancement",
      excerpt:
        "Participation de la FEG à une table ronde sur le refinancement hypothécaire.",
      date: "22 jan 2025",
      imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
      slug: "participation-table-ronde",
    },
    {
      title: "Assises nationales de l'emploi",
      excerpt:
        "Discussions sur les assises nationales avec le Ministère du Travail.",
      date: "22 jan 2025",
      imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
      slug: "assises-nationales-emploi",
    },
    {
      title: "Nouvel appel à projets",
      excerpt: "Opportunités pour les entreprises gabonaises.",
      date: "15 jan 2025",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      slug: "appel-manifestation-interet-2",
    },
    {
      title: "Conseil d'administration",
      excerpt: "Orientation stratégique pour l'année 2025.",
      date: "10 déc 2024",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      slug: "reunion-conseil-administration",
    },
    {
      title: "Forum Gabon-France",
      excerpt: "Renforcement des relations économiques.",
      date: "5 déc 2024",
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
      slug: "forum-economique-gabon-france",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banière.jpg"
            alt="Actualités FEG"
            fill
            className="object-cover opacity-15"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-bronze-base"></div>
              <span className="text-xs font-bold tracking-widest text-bronze-base uppercase">
                Actualités
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight">
              Nos Actualités
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Restez informés des dernières initiatives et événements de la Fédération des Entreprises du Gabon
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
            <span className="font-medium text-gray-700">Actualités</span>
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
              Dernières Nouvelles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les dernières actualités et initiatives de la FEG
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <NewsItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
