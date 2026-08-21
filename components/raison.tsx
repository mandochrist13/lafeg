"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Users, Megaphone, FileText, ArrowRight, Building2, TrendingUp, Shield } from "lucide-react";

const reasons = [
  {
    id: 1,
    icon: Users,
    color: "primary",
    title: "S'unir pour être plus fort",
    subtitle: "La force du collectif",
    content: "En adhérant à la FEG, vous faites partie d'un réseau puissant qui représente près de 500 entreprises, réalise environ 80% du PIB et près de 90% de l'emploi formel au Gabon. Ensemble, nous pouvons défendre les intérêts du secteur privé, négocier avec les pouvoirs publics et contribuer à l'amélioration du climat des affaires dans notre pays.",
    image: "/images/slider-bg-2.jpg", // Photo d'événement/réseau
    highlights: [
      { icon: Building2, label: "500 entreprises membres", value: "500+" },
      { icon: TrendingUp, label: "Du PIB gabonais", value: "80%" },
      { icon: Users, label: "De l'emploi formel", value: "90%" },
    ],
  },
  {
    id: 2,
    icon: Megaphone,
    color: "bronze",
    title: "Une voix unifiée",
    subtitle: "Influence et représentation",
    content: "Rejoindre la FEG vous permet de faire entendre votre voix, d'influencer les politiques publiques et de renforcer votre visibilité sur la scène économique nationale. Nous sommes votre porte-parole auprès des institutions.",
    image: "/images/slider-bg-3.jpg", // Photo de conférence/table ronde
    highlights: [
      { icon: Shield, label: "Représentation auprès de l'État", value: "24/7" },
      { icon: Megaphone, label: "Influence sur les politiques publiques", value: "Active" },
      { icon: TrendingUp, label: "Visibilité accrue", value: "Nationale" },
    ],
  },
  {
    id: 3,
    icon: FileText,
    color: "primary",
    title: "Accès aux services",
    subtitle: "Accompagnement et ressources",
    content: "Profitez d'un accompagnement professionnel, de formations, d'analyses économiques et juridiques, ainsi que d'un accès facilité aux services de l'État et aux opportunités d'affaires. Nous mettons à votre disposition tous les outils nécessaires à votre croissance.",
    image: "/images/activity1.jpg", // Photo de formation/services
    highlights: [
      { icon: FileText, label: "Formations professionnelles", value: "Premium" },
      { icon: Shield, label: "Analyses économiques et juridiques", value: "Expert" },
      { icon: TrendingUp, label: "Opportunités d'affaires", value: "Exclusives" },
    ],
  },
];

export default function AdhesionSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* En-tête de section avec ligne décorative */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-3">
            <span className="text-bronze-base font-bold text-sm uppercase tracking-wider">
              Pourquoi nous rejoindre
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            3 bonnes raisons d'adhérer à la FEG
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-bronze-base mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Rejoignez la plus grande fédération d'entreprises du Gabon et bénéficiez d'avantages exclusifs
          </p>
        </div>

        {/* Onglets horizontaux améliorés */}
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={reason.id}
                  onClick={() => setActiveTab(index)}
                  className={`group relative overflow-hidden p-6 border-2 transition-all duration-300 ${
                    isActive
                      ? "border-primary bg-primary text-white shadow-lg scale-105"
                      : "border-gray-200 bg-white text-gray-700 hover:border-primary/50 hover:shadow-md"
                  }`}
                >
                  {/* Ligne décorative */}
                  <div className={`absolute top-0 left-0 w-full h-1 transition-all duration-300 ${
                    isActive ? "bg-bronze-base" : "bg-transparent group-hover:bg-primary/30"
                  }`}></div>

                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center transition-all duration-300 ${
                      isActive ? "bg-white/20" : "bg-primary/10 group-hover:bg-primary/20"
                    }`}>
                      <IconComponent size={24} className={isActive ? "text-white" : "text-primary"} />
                    </div>
                    <div className="flex-1 text-left">
                      <div className={`text-xs font-semibold mb-1 uppercase tracking-wide ${
                        isActive ? "text-bronze-light" : "text-gray-500"
                      }`}>
                        {reason.subtitle}
                      </div>
                      <h3 className="font-bold text-base leading-tight">
                        {reason.title}
                      </h3>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Contenu de l'onglet actif */}
        <div className="bg-white shadow-xl border-t-4 border-primary p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Texte principal */}
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  {(() => {
                    const IconComponent = reasons[activeTab].icon;
                    return (
                      <div className="w-14 h-14 bg-primary/10 flex items-center justify-center">
                        <IconComponent size={28} className="text-primary" />
                      </div>
                    );
                  })()}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {reasons[activeTab].title}
                    </h3>
                    <p className="text-bronze-base font-semibold text-sm">
                      {reasons[activeTab].subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-base mb-8">
                {reasons[activeTab].content}
              </p>

              <Link
                href="/devenir-membre"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-bold hover:bg-primary/90 transition-all duration-300 group shadow-md hover:shadow-lg"
              >
                DEVENIR MEMBRE
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Image illustrative + Statistiques */}
            <div className="space-y-6">
              {/* Image réelle illustrative */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={reasons[activeTab].image}
                  alt={reasons[activeTab].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay avec gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>

                {/* Badge superposé */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm p-4 border-l-4 border-bronze-base">
                    <div className="flex items-center gap-3">
                      {(() => {
                        const IconComponent = reasons[activeTab].icon;
                        return (
                          <div className="w-12 h-12 bg-primary flex items-center justify-center">
                            <IconComponent size={24} className="text-white" />
                          </div>
                        );
                      })()}
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">
                          {reasons[activeTab].title}
                        </h4>
                        <p className="text-xs text-gray-600">{reasons[activeTab].subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Avantages clés */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-bronze-base"></div>
                  Avantages clés
                </h4>
              </div>

              <div className="space-y-4">
                {reasons[activeTab].highlights.map((highlight, idx) => {
                  const HighlightIcon = highlight.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 bg-gray-50 border-l-4 border-primary hover:bg-primary/5 transition-colors"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center">
                        <HighlightIcon size={20} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 text-sm mb-1">
                          {highlight.label}
                        </div>
                        <div className="text-primary font-bold text-lg">
                          {highlight.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Call-out box */}
              <div className="mt-6 bg-gradient-to-r from-primary to-primary-dark text-white p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-bronze-light flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-lg mb-2">Rejoignez-nous dès aujourd'hui</h5>
                    <p className="text-sm text-gray-100">
                      Plus de 500 entreprises nous font confiance. Faites partie du réseau le plus influent du Gabon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}