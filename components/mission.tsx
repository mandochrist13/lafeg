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

        {/* Grille des 4 missions - Design moderne avec images de fond */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {missions.map((mission, index) => {
            const IconComp = mission.iconComponent;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-[320px]"
              >
                {/* Image de fond */}
                <div className="absolute inset-0">
                  <img
                    src={mission.bgImage}
                    alt={mission.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary-900/90 via-primary-900/80 to-primary-900/95"></div>
                </div>

                {/* Contenu */}
                <div className="relative h-full flex flex-col justify-between p-8 text-white">
                  {/* Icône circulaire avec lucide-react */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 group-hover:bg-white/30 transition-colors">
                    <IconComp size={32} className="text-white" strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-bronze-light transition-colors">
                      {mission.title}
                    </h3>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {mission.description}
                    </p>
                  </div>
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