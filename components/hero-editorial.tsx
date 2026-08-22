"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, TrendingUp } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  imageUrl: string;
  link: string;
  featured?: boolean;
}

export default function HeroEditorial() {
  const featuredNews: NewsItem = {
    id: 1,
    title: "Appel à manifestation d'intérêt (FEG)",
    date: "28 mars 2025",
    category: "Actualités",
    excerpt: "La FEG lance un appel à manifestation d'intérêt dans le cadre de son programme de développement des entreprises gabonaises. Une opportunité unique pour les entrepreneurs locaux.",
    imageUrl: "/images/activity1.jpg",
    link: "/actualites/appel-manifestation-interet",
    featured: true,
  };

  const recentNews: NewsItem[] = [
    {
      id: 2,
      title: "Participation de la FEG à la table ronde sur le mécanisme de refinancement hypothécaire",
      date: "22 janvier 2025",
      category: "Événements",
      excerpt: "Une délégation de la FEG a participé à la table ronde organisée par le gouvernement.",
      imageUrl: "/images/slider-bg-2.jpg",
      link: "/actualites/participation-table-ronde",
    },
    {
      id: 3,
      title: "Les assises nationales de l'emploi et des élections professionnelles",
      date: "22 janvier 2025",
      category: "Événements",
      excerpt: "La FEG participe activement aux assises nationales de l'emploi.",
      imageUrl: "/images/slider-bg-3.jpg",
      link: "/actualites/assises-nationales-emploi",
    },
    {
      id: 4,
      title: "Nouveau programme de soutien aux entreprises gabonaises",
      date: "2025",
      category: "Actualités",
      excerpt: "Nouveau programme de soutien aux entreprises gabonaises.",
      imageUrl: "/images/slider-bg-4.jpg",
      link: "/actualites/appel-manifestation-interet-2",
    },
  ];

  return (
    <section className="bg-white pt-6 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* En-tête de section avec ligne décorative */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-8 bg-primary"></div>
              <h2 className="text-3xl font-bold text-gray-900">Actualités</h2>
            </div>
            <Link
              href="/actualites"
              className="ml-auto text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-2 group"
            >
              Toutes les actualités
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="h-px bg-gradient-to-r from-primary via-bronze-base to-transparent"></div>
        </div>

        {/* Grille principale : Article à la une + Actualités */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Article à la une */}
          <div className="lg:col-span-8">
            {/* Bandeau Actualité (News Ticker) */}
            <div className="flex items-stretch mb-6 border border-gray-200 rounded-sm overflow-hidden bg-white">
              <div
                className="bg-primary text-white text-[11px] font-bold tracking-wider uppercase flex items-center px-4 lg:px-6 py-2.5 whitespace-nowrap relative"
                style={{
                  clipPath: 'polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)',
                  marginRight: '-12px',
                  zIndex: 1,
                  paddingRight: '24px'
                }}
              >
                Actualité
              </div>
              <div className="px-5 lg:px-8 py-2.5 text-[12.5px] text-gray-600 font-semibold flex items-center flex-1 min-w-0">
                <span className="truncate">{featuredNews.title}</span>
              </div>
            </div>

            {/* Article à la une avec overlay */}
            <Link href={featuredNews.link} className="group block rounded overflow-hidden h-full transition-all duration-300">
              <div className="relative h-80 lg:h-[450px] overflow-hidden bg-gradient-to-br from-[rgba(6,61,33,0.9)] to-[rgba(5,38,23,0.6)]">
                <Image
                  src={featuredNews.imageUrl}
                  alt={featuredNews.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                {/* Overlay gradient plus prononcé pour garantir la lisibilité */}
                <div
                  className="absolute inset-x-0 bottom-0 pt-12 pb-7 px-7 lg:px-8"
                  style={{
                    background: 'linear-gradient(0deg, rgba(4,26,15,0.96) 15%, rgba(4,26,15,0.55) 60%, transparent 100%)'
                  }}
                >
                  {/* Tag catégorie */}
                  <div className="mb-2.5">
                    <span className="text-bronze-base text-[11px] font-bold tracking-wider uppercase">
                      {featuredNews.category}
                    </span>
                  </div>

                  {/* Titre */}
                  <h3 className="text-white text-2xl lg:text-[26px] font-bold leading-tight mb-3.5 max-w-[24ch]">
                    {featuredNews.title}
                  </h3>

                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-[12.5px] text-[#dfe9e2]">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{featuredNews.date}</span>
                    </div>
                    <span className="text-white font-bold underline decoration-1 underline-offset-[3px] group-hover:underline-offset-[5px] transition-all">
                      Lire l'article →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Liste d'actualités récentes */}
          <div className="lg:col-span-4 space-y-4">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <div className="w-1 h-5 bg-bronze-base"></div>
                Dernières nouvelles
              </h3>
            </div>
            {recentNews.map((news) => (
              <Link
                key={news.id}
                href={news.link}
                className="group block bg-white border-l-4 border-gray-200 hover:border-primary shadow-sm p-4 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex gap-4">
                  <div className="relative w-28 h-20 flex-shrink-0 overflow-hidden">
                    <Image
                      src={news.imageUrl}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="112px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <Calendar size={12} />
                      <span>{news.date}</span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 line-clamp-2 mb-1 group-hover:text-primary transition-colors leading-snug">
                      {news.title}
                    </h4>
                    <span className="text-xs text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Lire plus
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {/* CTA "Voir toutes les actualités" */}
            <Link
              href="/actualites"
              className="block text-center bg-gray-50 border-2 border-gray-200 hover:border-primary hover:bg-primary/5 py-4 font-semibold text-sm text-primary transition-all duration-300 mt-6"
            >
              Voir toutes les actualités →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
