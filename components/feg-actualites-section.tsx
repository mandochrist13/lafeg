"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Users, Eye } from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Forum Économique du Gabon 2025",
    date: "15 mars 2025",
    location: "Libreville, Gabon",
    participants: "500+",
    image: "/images/activity1.jpg",
    category: "Forum",
    description: "Le plus grand rassemblement des acteurs économiques du Gabon pour discuter de l'avenir du secteur privé.",
    type: "event"
  },
  {
    id: 2,
    title: "Table ronde sur le refinancement hypothécaire",
    date: "22 janvier 2025",
    location: "Siège de la FEG",
    participants: "150+",
    image: "/images/slider-bg-2.jpg",
    category: "Conférence",
    description: "Discussion sur les solutions de refinancement pour les entreprises gabonaises.",
    type: "event"
  },
  {
    id: 3,
    title: "Assises nationales de l'emploi",
    date: "22 janvier 2025",
    location: "Palais des Congrès",
    image: "/images/slider-bg-3.jpg",
    category: "Événement",
    description: "Réflexion collective sur les enjeux de l'emploi au Gabon et les solutions à apporter.",
    type: "actualite"
  },
  {
    id: 4,
    title: "Formation des entreprises membres",
    date: "10 janvier 2025",
    location: "Centre de formation FEG",
    image: "/images/slider-bg-4.jpg",
    category: "Formation",
    description: "Programme de renforcement des capacités pour nos membres.",
    type: "actualite"
  },
  {
    id: 5,
    title: "Rencontre avec les autorités",
    date: "Décembre 2024",
    location: "Primature",
    image: "/images/publication1.jpg",
    category: "Réunion",
    description: "Échanges sur les politiques économiques et le dialogue public-privé.",
    type: "actualite"
  },
  {
    id: 6,
    title: "Assemblée générale annuelle",
    date: "Novembre 2024",
    location: "Hôtel Radisson",
    image: "/images/publication2.jpg",
    category: "Assemblée",
    description: "Bilan de l'année et perspectives pour le développement du secteur privé.",
    type: "actualite"
  },
];

export default function FegActualitesSection() {
  const featuredEvent = activities[0];
  const recentNews = activities.slice(1);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <span className="inline-block text-bronze-base font-bold text-sm uppercase tracking-wider mb-4">
            Notre actualité
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-4">
            La FEG en Action
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Découvrez nos événements, forums et initiatives au service du développement économique du Gabon
          </p>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-primary-900 via-bronze-base to-primary-900 mx-auto rounded-full"></div>
        </div>

        {/* Événement principal + Grille actualités */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Événement principal à gauche */}
          <Link
            href={`/activite/evenements/${featuredEvent.id}`}
            className="group relative h-[500px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <Image
              src={featuredEvent.image}
              alt={featuredEvent.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

            {/* Badge */}
            <div className="absolute top-6 left-6">
              <span className="bg-primary-900 text-white px-4 py-2 text-xs font-bold uppercase tracking-wide rounded-lg shadow-lg">
                {featuredEvent.category}
              </span>
            </div>

            {/* Contenu */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Calendar size={16} />
                  <span>{featuredEvent.date}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <MapPin size={16} />
                  <span>{featuredEvent.location}</span>
                </div>
                {featuredEvent.participants && (
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Users size={16} />
                    <span>{featuredEvent.participants}</span>
                  </div>
                )}
              </div>
              <h3 className="text-3xl font-bold mb-3 leading-tight group-hover:text-bronze-light transition-colors">
                {featuredEvent.title}
              </h3>
              <p className="text-gray-200 mb-4 line-clamp-2">
                {featuredEvent.description}
              </p>
              <span className="inline-flex items-center gap-2 text-bronze-light font-semibold group-hover:gap-3 transition-all">
                En savoir plus
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          {/* Grille d'actualités à droite */}
          <div className="grid grid-cols-1 gap-6">
            {recentNews.slice(0, 3).map((news) => (
              <Link
                key={news.id}
                href={`/activite/${news.type === 'event' ? 'evenements' : 'actualites'}/${news.id}`}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex"
              >
                {/* Image */}
                <div className="relative w-40 h-40 flex-shrink-0">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="160px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>

                  {/* Badge catégorie */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-bronze-base text-primary-900 px-2 py-1 text-xs font-bold uppercase rounded">
                      {news.category}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-primary-900 mb-2 line-clamp-2 group-hover:text-bronze-base transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                      {news.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar size={14} />
                      <span>{news.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-bronze-base text-xs font-semibold group-hover:gap-2 transition-all">
                      Lire plus
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Autres actualités - Grille 3 colonnes */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-primary-900">Autres actualités</h3>
            <Link
              href="/activite/actualites"
              className="flex items-center gap-2 text-primary-900 font-semibold hover:text-bronze-base transition-colors group"
            >
              Voir tout
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentNews.slice(3).map((news) => (
              <Link
                key={news.id}
                href={`/activite/actualites/${news.id}`}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-bronze-base text-primary-900 px-3 py-1 text-xs font-bold uppercase rounded">
                      {news.category}
                    </span>
                  </div>

                  {/* Icône Eye au survol */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 p-3 rounded-full">
                      <Eye size={24} className="text-primary-900" />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <Calendar size={14} />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2 line-clamp-2 group-hover:text-bronze-base transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {news.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Restez informé de nos activités
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Ne manquez aucun de nos événements et suivez l'actualité du secteur privé gabonais
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/activite/evenements"
              className="inline-flex items-center gap-2 bg-white text-primary-900 px-8 py-4 font-bold rounded-lg hover:bg-bronze-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Tous nos événements
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/activite/actualites"
              className="inline-flex items-center gap-2 bg-bronze-base text-primary-900 px-8 py-4 font-bold rounded-lg hover:bg-bronze-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Toutes les actualités
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
