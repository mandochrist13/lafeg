"use client";

import { Info, Megaphone, Users, Shield, ArrowRight } from "lucide-react";

const missions = [
  {
    iconComponent: Info,
    title: "Informer",
    description: "Émettre notre avis sur toute question à caractère économique et social",
    bgImage: "/images/informer.jpg",
  },
  {
    iconComponent: Megaphone,
    title: "Promouvoir",
    description: "Assurer et veiller à garantir la compétitivité et la croissance du tissu économique",
    bgImage: "/images/promouvoir.jpg",
  },
  {
    iconComponent: Users,
    title: "Participer",
    description: "Participer à toutes les négociations avec les pouvoirs publics et syndicats de travailleurs",
    bgImage: "/images/participer.jpg",
  },
  {
    iconComponent: Shield,
    title: "Défendre",
    description: "Défendre les intérêts des entreprises adhérentes et les représenter",
    bgImage: "/images/défendre.jpg",
  },
];


export default function MissionsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 lg:py-32">
      {/* Motif de fond décoratif subtil */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-bronze-base rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* En-tête moderne */}
        <div className="mb-16 lg:mb-20">
          <div className="inline-block mb-6">
            <span className="text-primary-900 font-bold text-sm uppercase tracking-wider">
              Notre raison d'être
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary-900 leading-tight">
            L'amélioration du <span className="text-primary-600">climat des affaires</span> au Gabon<br/>
            pour le <span className="text-primary-600">secteur privé</span>.
          </h2>
        </div>

        {/* Grille des 4 missions - Design avec effet glassmorphism et profondeur */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 perspective-1000">
          {missions.map((mission, index) => {
            const IconComp = mission.iconComponent;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-105 h-[400px]"
                style={{
                  transform: `translateZ(${index * 10}px)`,
                  boxShadow: '0 20px 60px -10px rgba(0, 0, 0, 0.3), 0 10px 20px -5px rgba(0, 0, 0, 0.2)',
                }}
              >
                {/* Image de fond */}
                <div className="absolute inset-0">
                  <img
                    src={mission.bgImage}
                    alt={mission.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  {/* Overlay gradient sombre */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/60 to-primary-900/90"></div>
                </div>

                {/* Effet glassmorphism sur toute la carte */}
                <div className="absolute inset-0 backdrop-blur-[2px] bg-gradient-to-br from-white/10 via-transparent to-black/20"></div>

                {/* Bordure glass effect */}
                <div className="absolute inset-0 rounded-3xl border border-white/20 group-hover:border-white/40 transition-all duration-700"></div>

                {/* Reflets glass subtils */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-white/10 via-transparent to-transparent opacity-20 pointer-events-none"></div>

                {/* Contenu */}
                <div className="relative h-full flex flex-col justify-between p-8 text-white z-10">
                  {/* Icône circulaire avec effet glass renforcé */}
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/25 backdrop-blur-xl border-2 border-white/40 group-hover:bg-white/35 group-hover:scale-110 transition-all duration-500 shadow-2xl">
                    <IconComp size={36} className="text-white drop-shadow-lg" strokeWidth={2} />
                  </div>

                  {/* Texte avec effet de profondeur */}
                  <div className="space-y-3">
                    <h3 className="text-3xl font-black mb-3 text-white drop-shadow-2xl group-hover:text-bronze-light transition-colors duration-500 tracking-tight">
                      {mission.title}
                    </h3>
                    <p className="text-sm text-gray-100 leading-relaxed drop-shadow-lg font-medium">
                      {mission.description}
                    </p>
                  </div>
                </div>

                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/about"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary-900 text-white rounded-xl font-semibold hover:bg-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            En savoir plus
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-900 rounded-xl font-semibold border-2 border-primary-900 hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}