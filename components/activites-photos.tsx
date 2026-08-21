"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Forum Économique du Gabon 2025",
    date: "15 mars 2025",
    location: "Libreville, Gabon",
    participants: "500+",
    image: "/images/activity1.jpg",
    category: "Forum",
  },
  {
    id: 2,
    title: "Table ronde sur le refinancement hypothécaire",
    date: "22 janvier 2025",
    location: "Siège de la FEG",
    participants: "150+",
    image: "/images/slider-bg-2.jpg",
    category: "Conférence",
  },
  {
    id: 3,
    title: "Assises nationales de l'emploi",
    date: "22 janvier 2025",
    location: "Palais des Congrès",
    participants: "300+",
    image: "/images/slider-bg-3.jpg",
    category: "Événement",
  },
  {
    id: 4,
    title: "Formation des entreprises membres",
    date: "10 janvier 2025",
    location: "Centre de formation FEG",
    participants: "80+",
    image: "/images/slider-bg-4.jpg",
    category: "Formation",
  },
  {
    id: 5,
    title: "Rencontre avec les autorités",
    date: "Décembre 2024",
    location: "Primature",
    participants: "50+",
    image: "/images/publication1.jpg",
    category: "Réunion",
  },
  {
    id: 6,
    title: "Assemblée générale annuelle",
    date: "Novembre 2024",
    location: "Hôtel Radisson",
    participants: "400+",
    image: "/images/publication2.jpg",
    category: "Assemblée",
  },
];

export default function ActivitesPhotos() {
  const featuredActivity = activities[0];
  const gridActivities = activities.slice(1, 5);
  const lastActivity = activities[5];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* En-tête avec ligne décorative */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="inline-block mb-3">
                <span className="text-bronze-base font-bold text-sm uppercase tracking-wider">
                  Nos activités en images
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                La FEG en action
              </h2>
              <p className="text-gray-600 max-w-2xl text-lg">
                Découvrez nos événements, forums et rencontres avec les acteurs économiques du Gabon
              </p>
            </div>
            <Link
              href="/activite/evenements"
              className="hidden lg:flex items-center gap-2 text-primary font-semibold hover:text-primary/80 group"
            >
              Tous les événements
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="h-px bg-gradient-to-r from-primary via-bronze-base to-transparent"></div>
        </div>

        {/* Layout GECAM inspiré : Photo principale + grille */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Photo principale - Grande à gauche */}
          <div className="lg:col-span-7">
            <Link href={`/activite/evenements/${featuredActivity.id}`} className="group block relative h-full min-h-[500px] overflow-hidden">
              <Image
                src={featuredActivity.image}
                alt={featuredActivity.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Badge catégorie */}
              <div className="absolute top-6 left-6">
                <span className="bg-primary text-white px-4 py-2 text-xs font-bold uppercase tracking-wide">
                  {featuredActivity.category}
                </span>
              </div>

              {/* Contenu en bas */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{featuredActivity.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{featuredActivity.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>{featuredActivity.participants} participants</span>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                  {featuredActivity.title}
                </h3>
                <span className="inline-flex items-center text-bronze-light font-semibold group-hover:gap-2 transition-all">
                  En savoir plus
                  <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>

          {/* Grille de 4 photos à droite */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {gridActivities.map((activity) => (
              <Link
                key={activity.id}
                href={`/activite/evenements/${activity.id}`}
                className="group block relative h-60 overflow-hidden"
              >
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Badge catégorie */}
                <div className="absolute top-3 left-3">
                  <span className="bg-bronze-base text-primary-900 px-2 py-1 text-xs font-bold uppercase">
                    {activity.category}
                  </span>
                </div>

                {/* Titre */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="text-sm font-bold line-clamp-2 leading-tight mb-2 group-hover:text-bronze-light transition-colors">
                    {activity.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs">
                    <Calendar size={12} />
                    <span>{activity.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Section dernière activité - Pleine largeur en bas */}
        <div className="mt-6">
          <Link href={`/activite/evenements/${lastActivity.id}`} className="group block relative h-64 overflow-hidden">
            <Image
              src={lastActivity.image}
              alt={lastActivity.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="100vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <div className="max-w-2xl">
                  <span className="inline-block bg-bronze-base text-primary-900 px-4 py-2 text-xs font-bold uppercase mb-4">
                    {lastActivity.category}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                    {lastActivity.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-white text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{lastActivity.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{lastActivity.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      <span>{lastActivity.participants} participants</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center text-bronze-light font-bold group-hover:gap-2 transition-all">
                    Voir les photos
                    <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* CTA mobile */}
        <div className="mt-8 text-center lg:hidden">
          <Link
            href="/activite/evenements"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-bold hover:bg-primary/90 transition-all"
          >
            Tous les événements
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
