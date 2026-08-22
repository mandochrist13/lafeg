"use client";

import { CheckCircle, Info, Megaphone, Users, Shield, Target, ArrowRight } from "lucide-react";
import Image from "next/image";

const missions = [
  {
    icon: "/images/info.png",
    iconComponent: Info,
    title: "Informer",
    description: "Tenir nos membres informés des évolutions réglementaires et économiques",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: "/images/pro.png",
    iconComponent: Megaphone,
    title: "Promouvoir",
    description: "Valoriser l'entreprise gabonaise et son rôle dans le développement",
    color: "from-green-500 to-green-600",
  },
  {
    icon: "/images/part.png",
    iconComponent: Users,
    title: "Participer",
    description: "Prendre part aux négociations avec les pouvoirs publics",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: "/images/defendre.png",
    iconComponent: Shield,
    title: "Défendre",
    description: "Représenter et défendre les intérêts des entreprises adhérentes",
    color: "from-red-500 to-red-600",
  },
];

const objectifs = [
  {
    title: "Promouvoir l'entreprise",
    icon: Target,
  },
  {
    title: "Défendre les intérêts des entreprises adhérentes et les représenter",
    icon: Shield,
  },
  {
    title: "Participer à toutes les négociations avec les pouvoirs publics et syndicats de travailleurs",
    icon: Users,
  },
  {
    title: "Émettre notre avis sur toute question à caractère économique et social",
    icon: Megaphone,
  },
  {
    title: "Offrir à nos membres tous les services afin d'accroître la productivité d'ensemble",
    icon: CheckCircle,
  },
  {
    title: "Assurer et veiller à garantir la compétitivité et la croissance du tissu économique",
    icon: Target,
  },
  {
    title: "Accroître la dynamique entrepreneuriale et le développement des entreprises locales",
    icon: ArrowRight,
  },
];

export default function MissionsSection() {
  return (
    <section className="relative overflow-hidden bg-primary text-white py-16 lg:py-24">
      {/* Motif de fond décoratif */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 border-4 border-white transform rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border-4 border-white transform -rotate-6"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* En-tête avec ligne décorative */}
        <div className="mb-12 lg:mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="text-bronze-light font-bold text-sm uppercase tracking-wider">
              Notre raison d'être
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Nos Missions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-bronze-light to-bronze-base mx-auto mb-6"></div>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto font-light">
            Informer | Promouvoir | Participer | Défendre
          </p>
        </div>

        {/* Grille des 4 missions - Plus attractive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {missions.map((mission, index) => {
            const IconComp = mission.iconComponent;
            return (
              <div
                key={index}
                className="group bg-white text-primary p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Barre décorative animée */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bronze-base to-bronze-light"></div>

                {/* Icône avec effet */}
                <div className="mb-6 relative">
                  <div className="w-20 h-20 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-4">
                    <Image
                      src={mission.icon}
                      alt={mission.title}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  {/* Badge numéro */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-bronze-base text-primary-900 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary/80 transition-colors">
                  {mission.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {mission.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Section Objectifs - Plus digestible */}
        <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 p-8 lg:p-12">
          <div className="mb-8 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-3 flex items-center justify-center gap-3">
              <Target className="text-bronze-light" size={32} />
              Nos objectifs stratégiques
            </h3>
            <p className="text-gray-100">
              Un engagement fort pour le développement économique du Gabon
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
            {objectifs.map((objectif, index) => {
              const ObjIcon = objectif.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-bronze-base/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ObjIcon size={20} className="text-primary-900" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base leading-relaxed">{objectif.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}