"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ChevronRight } from "lucide-react";

const activities = [
  {
    id: "feg-1",
    title: "Célébration de la Fête du Travail 2025",
    date: "1er Mai 2025",
    location: "Libreville, Gabon",
    participants: "Membres et partenaires de la FEG",
    image: "/images/1ermai.jpg",
    category: "ÉVÉNEMENT NATIONAL",
    description: "La FEG célèbre la Fête du Travail aux côtés des travailleurs gabonais et rend hommage à leur contribution au développement économique du pays.",
    type: "agenda"
  },
  {
    id: "feg-2",
    title: "Appel à manifestation d'intérêt",
    date: "28 Mars 2025",
    location: "Libreville, Gabon",
    image: "/images/news1.jpg",
    category: "ACTUALITÉ",
    description: "La FEG lance un appel pour des projets innovants dans le secteur privé gabonais.",
    type: "actualite"
  },
  {
    id: "feg-3",
    title: "Salon International des Façades, Fenêtres et Portes 2026",
    date: "Septembre 2026",
    location: "Alger, Algérie",
    image: "/images/siffp-2026.png",
    category: "AGENDA",
    description: "Participation de la FEG au SIFFP, salon international dédié aux professionnels du bâtiment, renforçant les échanges commerciaux Gabon-Algérie.",
    type: "agenda"
  },
  {
    id: "feg-4",
    title: "Assemblée Générale Ordinaire de la FEG",
    date: "Janvier 2025",
    location: "Siège de la FEG, Libreville",
    image: "/images/banière.jpg",
    category: "COMMUNIQUÉ",
    description: "Rencontre annuelle des membres pour faire le bilan des actions menées et définir les orientations stratégiques pour l'année à venir.",
    type: "communique"
  },
  {
    id: "feg-5",
    title: "Table ronde sur le refinancement",
    date: "22 Janvier 2025",
    location: "Libreville, Gabon",
    image: "/images/news2.jpg",
    category: "ACTUALITÉ",
    description: "Participation de la FEG à une table ronde sur le refinancement hypothécaire.",
    type: "actualite"
  },
];

export default function FegActualitesSection() {
  const featuredEvent = activities[0];
  const otherActivities = activities.slice(1);

  return (
    <section className="py-28 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Grille subtile en arrière-plan */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#063d21 1px, transparent 1px), linear-gradient(90deg, #063d21 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* En-tête institutionnel épuré */}
        <div className="mb-24 text-center">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-16 h-px bg-bronze-base"></div>
            <span className="text-[10px] font-bold tracking-[0.4em] text-primary-900/70 uppercase">
              Notre Actualité
            </span>
            <div className="w-16 h-px bg-bronze-base"></div>
          </div>

          <h2 className="text-6xl lg:text-7xl font-bold text-primary-900 mb-8 tracking-tighter">
            La FEG en Action
          </h2>

          <p className="text-gray-600 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Au cœur du développement économique gabonais
          </p>
        </div>

        {/* Événement principal - Design magazine premium */}
        <div className="mb-28">
          <Link
            href={`/activite/evenements/${featuredEvent.id}`}
            className="group block"
          >
            <div className="relative overflow-hidden bg-white shadow-2xl">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Image - 3/5 */}
                <div className="lg:col-span-3 relative h-[550px] lg:h-[700px] overflow-hidden bg-gray-900">
                  <Image
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    fill
                    className="object-cover transition-all duration-1000 ease-out group-hover:scale-105 group-hover:brightness-110"
                    priority
                    sizes="60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent"></div>

                  {/* Badge premium */}
                  <div className="absolute top-12 left-12">
                    <div className="bg-white px-8 py-4 shadow-xl">
                      <span className="text-primary-900 font-black text-[11px] tracking-[0.25em]">
                        {featuredEvent.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contenu - 2/5 */}
                <div className="lg:col-span-2 p-12 lg:p-16 flex flex-col justify-center bg-white">
                  <div className="space-y-8">
                    {/* Métadonnées */}
                    <div className="space-y-4 pb-6 border-b border-gray-200">
                      <div className="flex items-start gap-4">
                        <div className="w-px h-12 bg-bronze-base"></div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <Calendar size={16} className="text-bronze-base" />
                            <span className="font-medium">{featuredEvent.date}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <MapPin size={16} className="text-bronze-base" />
                            <span className="font-medium">{featuredEvent.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Titre */}
                    <h3 className="text-4xl lg:text-5xl font-bold text-primary-900 leading-[1.1] tracking-tight">
                      {featuredEvent.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-lg leading-relaxed font-light">
                      {featuredEvent.description}
                    </p>

                    {/* Participants */}
                    {featuredEvent.participants && (
                      <div className="pt-6">
                        <p className="text-xs text-gray-500 uppercase tracking-[0.2em] font-bold">
                          {featuredEvent.participants}
                        </p>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="pt-8">
                      <div className="inline-flex items-center gap-3 text-primary-900 font-bold text-sm uppercase tracking-[0.15em] group-hover:gap-5 transition-all duration-500 border-b-2 border-bronze-base pb-2">
                        Découvrir
                        <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Autres actualités - Grille minimaliste */}
        <div>
          <div className="flex items-center justify-between mb-16">
            <h3 className="text-3xl font-bold text-primary-900 tracking-tight">
              Activités récentes
            </h3>
            <Link
              href="/activite/actualites"
              className="flex items-center gap-3 text-sm font-bold text-primary-900 uppercase tracking-[0.15em] hover:text-bronze-base transition-colors group"
            >
              Voir tout
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {otherActivities.map((activity, index) => (
              <Link
                key={activity.id}
                href={`/activite/${activity.type === 'agenda' ? 'evenements' : 'actualites'}/${activity.id}`}
                className="group"
              >
                <article className="bg-white border border-gray-100 hover:border-primary-900/20 transition-all duration-700 shadow-sm hover:shadow-2xl overflow-hidden">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden bg-gray-100">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover transition-all duration-1000 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>

                  {/* Contenu */}
                  <div className="p-8 space-y-5">
                    {/* Badge */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-px bg-bronze-base"></div>
                      <span className="text-[10px] font-black text-primary-900 tracking-[0.2em] uppercase">
                        {activity.category}
                      </span>
                    </div>

                    {/* Titre */}
                    <h4 className="text-2xl font-bold text-primary-900 leading-tight line-clamp-2 group-hover:text-bronze-base transition-colors duration-500">
                      {activity.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 font-light">
                      {activity.description}
                    </p>

                    {/* Footer */}
                    <div className="pt-6 flex items-center justify-between border-t border-gray-100">
                      <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                        <Calendar size={14} className="text-bronze-base" />
                        <span>{activity.date}</span>
                      </div>
                      <ChevronRight
                        size={20}
                        className="text-primary-900 group-hover:translate-x-2 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Séparateur final élégant */}
        <div className="mt-32 flex items-center justify-center gap-4">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-bronze-base"></div>
          <div className="w-2 h-2 bg-bronze-base rotate-45"></div>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-bronze-base"></div>
        </div>
      </div>
    </section>
  );
}
