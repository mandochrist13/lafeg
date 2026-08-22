"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ChevronRight } from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Célébration de la Fête du Travail 2025",
    date: "1er Mai 2025",
    location: "Libreville, Gabon",
    participants: "Membres et partenaires de la FEG",
    image: "/images/1ermai.jpg",
    category: "ÉVÉNEMENT NATIONAL",
    description: "La FEG célèbre la Fête du Travail aux côtés des travailleurs gabonais et rend hommage à leur contribution au développement économique du pays.",
    type: "event"
  },
  {
    id: 2,
    title: "Salon International Cuisine Bain Expo",
    date: "Août 2025",
    location: "Alger, Algérie",
    image: "/images/cuisine-bain-expo.png",
    category: "SALON INTERNATIONAL",
    description: "Participation de la FEG au salon international des cuisines et salles de bain, renforçant les échanges commerciaux entre le Gabon et l'Algérie.",
    type: "event"
  },
  {
    id: 3,
    title: "Assemblée Générale Ordinaire de la FEG",
    date: "Janvier 2025",
    location: "Siège de la FEG, Libreville",
    image: "/images/event1.jpg",
    category: "ASSEMBLÉE GÉNÉRALE",
    description: "Rencontre annuelle des membres pour faire le bilan des actions menées et définir les orientations stratégiques pour l'année à venir.",
    type: "actualite"
  },
  {
    id: 4,
    title: "Forum sur le Dialogue Public-Privé",
    date: "Décembre 2024",
    location: "Palais des Congrès",
    image: "/images/event2.jpg",
    category: "FORUM",
    description: "Échanges entre le secteur privé et les pouvoirs publics sur les réformes économiques et l'amélioration du climat des affaires au Gabon.",
    type: "actualite"
  },
  {
    id: 5,
    title: "Rencontre avec les Autorités Gabonaises",
    date: "Novembre 2024",
    location: "Primature",
    image: "/images/activity2.jpg",
    category: "DIALOGUE INSTITUTIONNEL",
    description: "Session de travail entre la direction de la FEG et le gouvernement pour discuter des enjeux prioritaires du secteur privé gabonais.",
    type: "actualite"
  },
  {
    id: 6,
    title: "Séminaire de Formation Continue",
    date: "Octobre 2024",
    location: "Centre de Formation FEG",
    image: "/images/activity3.jpg",
    category: "FORMATION",
    description: "Programme de renforcement des capacités managériales et techniques des cadres d'entreprises membres de la FEG.",
    type: "actualite"
  },
];

export default function FegActualitesSection() {
  const featuredEvent = activities[0];
  const otherActivities = activities.slice(1);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Motif institutionnel en arrière-plan */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary-900 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* En-tête institutionnel */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-900 to-transparent"></div>
            <span className="text-xs font-bold tracking-[0.3em] text-primary-900 uppercase">
              Actualités Institutionnelles
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-900 to-transparent"></div>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-center text-primary-900 mb-6 tracking-tight">
            La FEG en Action
          </h2>

          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Au service du développement du secteur privé gabonais et du dialogue public-privé
          </p>
        </div>

        {/* Événement principal - Format institutionnel */}
        <div className="mb-20">
          <Link
            href={`/activite/evenements/${featuredEvent.id}`}
            className="group block relative"
          >
            <div className="grid lg:grid-cols-2 gap-0 bg-gray-50 overflow-hidden">
              {/* Image - Gauche */}
              <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
                <Image
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  fill
                  className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                  priority
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

                {/* Badge flottant */}
                <div className="absolute top-8 left-8">
                  <div className="bg-white/95 backdrop-blur-sm px-6 py-3 border-l-4 border-bronze-base">
                    <span className="text-primary-900 font-bold text-xs tracking-[0.2em]">
                      {featuredEvent.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contenu - Droite */}
              <div className="p-12 lg:p-16 flex flex-col justify-center bg-white">
                <div className="space-y-6">
                  {/* Date et lieu */}
                  <div className="flex flex-col gap-3 text-sm text-gray-600 font-medium">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-6 bg-bronze-base"></div>
                      <Calendar size={18} className="text-primary-900" />
                      <span>{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-6 bg-transparent"></div>
                      <MapPin size={18} className="text-primary-900" />
                      <span>{featuredEvent.location}</span>
                    </div>
                  </div>

                  {/* Titre */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-primary-900 leading-tight">
                    {featuredEvent.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {featuredEvent.description}
                  </p>

                  {/* Participants */}
                  {featuredEvent.participants && (
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-sm text-gray-500 uppercase tracking-wider">
                        {featuredEvent.participants}
                      </span>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="pt-6">
                    <span className="inline-flex items-center gap-3 text-primary-900 font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all duration-300">
                      Découvrir événement
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Autres actualités - Grille épurée */}
        <div>
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-bold text-primary-900 tracking-tight">
              Autres Actualités
            </h3>
            <Link
              href="/activite/actualites"
              className="flex items-center gap-2 text-sm font-bold text-primary-900 uppercase tracking-wider hover:text-bronze-base transition-colors group"
            >
              Tout voir
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {otherActivities.map((activity, index) => (
              <Link
                key={activity.id}
                href={`/activite/${activity.type === 'event' ? 'evenements' : 'actualites'}/${activity.id}`}
                className="group"
              >
                <article className="bg-white border border-gray-200 hover:border-primary-900 transition-all duration-500 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    {/* Numéro */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/95 backdrop-blur-sm w-12 h-12 flex items-center justify-center">
                        <span className="text-primary-900 font-bold text-lg">
                          {String(index + 2).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6 space-y-4">
                    {/* Badge */}
                    <div className="border-l-2 border-bronze-base pl-3">
                      <span className="text-xs font-bold text-primary-900 tracking-[0.15em]">
                        {activity.category}
                      </span>
                    </div>

                    {/* Titre */}
                    <h4 className="text-xl font-bold text-primary-900 leading-tight line-clamp-2 group-hover:text-bronze-base transition-colors duration-300">
                      {activity.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {activity.description}
                    </p>

                    {/* Footer */}
                    <div className="pt-4 flex items-center justify-between border-t border-gray-100">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar size={14} />
                        <span>{activity.date}</span>
                      </div>
                      <ChevronRight
                        size={18}
                        className="text-primary-900 group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Barre de séparation finale */}
        <div className="mt-24 h-px bg-gradient-to-r from-transparent via-primary-900/20 to-transparent"></div>
      </div>
    </section>
  );
}
