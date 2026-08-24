"use client";

import { Info, Megaphone, Users, Shield } from "lucide-react";

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
    <section className="relative overflow-hidden bg-white py-12">
      {/* Logo en filigrane */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img
          src="/images/logo.png"
          alt="Logo FEG"
          className="w-[600px] h-[600px] opacity-[0.02] select-none"
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* En-tête */}
        <div className="mb-12">
          <div className="inline-block mb-4">
            <span className="text-primary-900 font-bold text-sm uppercase tracking-wider">
              Notre raison d'être
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary-900 leading-tight">
            L'amélioration du <span className="text-bronze-base">climat des affaires</span> au Gabon<br/>
            pour le <span className="text-bronze-base">secteur privé</span>.
          </h2>
        </div>

        {/* Grille des 4 missions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {missions.map((mission, index) => {
            const IconComp = mission.iconComponent;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.02] h-[280px] shadow-lg hover:shadow-xl"
              >
                {/* Image de fond */}
                <div className="absolute inset-0">
                  <img
                    src={mission.bgImage}
                    alt={mission.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/70 to-primary-900/90"></div>
                </div>

                {/* Bordure */}
                <div className="absolute inset-0 rounded-xl border border-bronze-base/20 group-hover:border-bronze-base/40 transition-all duration-500"></div>

                {/* Contenu */}
                <div className="relative h-full flex flex-col justify-between p-6 text-white z-10">
                  {/* Icône */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bronze-base/20 backdrop-blur-sm border border-bronze-base/40 group-hover:bg-bronze-base/30 group-hover:scale-110 transition-all duration-500">
                    <IconComp size={28} className="text-bronze-base" strokeWidth={2} />
                  </div>

                  {/* Texte */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-bronze-light transition-colors duration-500">
                      {mission.title}
                    </h3>
                    <p className="text-sm text-gray-100 leading-relaxed">
                      {mission.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}