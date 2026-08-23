"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, Megaphone, FileText, ArrowRight, Shield } from "lucide-react";

const reasons = [
  {
    id: 1,
    icon: Users,
    title: "Réseau & Influence",
    subtitle: "LA FORCE DU COLLECTIF",
    content: "Rejoignez un réseau de plus de 500 entreprises représentant 80% du PIB gabonais. Ensemble, nous défendons les intérêts du secteur privé et négocions avec les pouvoirs publics.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80", // Business team meeting
    stats: [
      { value: "500+", label: "Entreprises" },
      { value: "80%", label: "PIB" },
      { value: "90%", label: "Emploi" },
    ],
  },
  {
    id: 2,
    icon: Megaphone,
    title: "Représentation & Plaidoyer",
    subtitle: "VOTRE VOIX INSTITUTIONNELLE",
    content: "La FEG est votre porte-parole auprès de l'État et des institutions internationales. Nous influençons les politiques publiques et renforçons votre visibilité.",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1200&q=80", // Government building/institution
    stats: [
      { value: "24/7", label: "Représentation" },
      { value: "100%", label: "Engagement" },
      { value: "National", label: "Impact" },
    ],
  },
  {
    id: 3,
    icon: FileText,
    title: "Services & Accompagnement",
    subtitle: "RESSOURCES PREMIUM",
    content: "Formations professionnelles, analyses économiques et juridiques expertes, opportunités d'affaires exclusives. Nous vous accompagnons à chaque étape.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80", // Professional training/consulting
    stats: [
      { value: "Premium", label: "Formations" },
      { value: "Expert", label: "Analyses" },
      { value: "Exclusif", label: "Opportunités" },
    ],
  },
];

export default function AdhesionSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const sectionHeight = rect.height - windowHeight;
        const scrolled = Math.abs(rect.top);
        const progress = Math.min(Math.max(scrolled / sectionHeight, 0), 1);
        setScrollProgress(progress);

        // Calculate active index based on scroll progress
        // Each page transition happens at specific thresholds
        let newIndex = 0;
        if (progress >= 0.66) {
          newIndex = 2; // Third page
        } else if (progress >= 0.33) {
          newIndex = 1; // Second page
        } else {
          newIndex = 0; // First page
        }

        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-b from-white via-gray-50/50 to-white"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl h-full flex flex-col justify-center py-8">
          {/* En-tête */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-16 h-px bg-bronze-base"></div>
              <span className="text-[10px] font-bold tracking-[0.4em] text-primary-900/70 uppercase">
                Pourquoi nous rejoindre
              </span>
              <div className="w-16 h-px bg-bronze-base"></div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-4 tracking-tighter">
              Les avantages de l'adhésion
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Rejoignez la première organisation patronale du Gabon
            </p>
          </div>

          {/* Contenu principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-1">
            {/* Image avec effet de page qui tourne */}
            <div className="relative h-full max-h-[550px]">
              <div className="relative h-full perspective-2000">
                {reasons.map((reason, index) => {
                  const isActive = activeIndex === index;
                  const isPast = index < activeIndex;
                  const isFuture = index > activeIndex;
                  const isLast = index === reasons.length - 1;

                  let rotateY = 0;
                  let zIndex = reasons.length - index;
                  let translateX = 0;
                  let opacity = 1;

                  if (isLast) {
                    // Last page: simple fade in, no rotation
                    opacity = isActive ? 1 : 0;
                    zIndex = isActive ? 999 : 0;
                  } else if (isPast) {
                    rotateY = -180;
                    translateX = -50;
                    zIndex = index;
                    opacity = 0;
                  } else if (isActive && !isLast) {
                    // Calculate rotation progress for current page
                    const pageProgress = index === 0
                      ? Math.min(scrollProgress / 0.33, 1) // 0 to 0.33
                      : Math.min(Math.max((scrollProgress - 0.33) / 0.33, 0), 1); // 0.33 to 0.66

                    rotateY = -180 * pageProgress;
                    translateX = -50 * pageProgress;
                    opacity = 1;
                  } else if (isFuture) {
                    opacity = 1;
                  }

                  return (
                    <div
                      key={reason.id}
                      className="absolute inset-0"
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: isLast ? 'none' : `rotateY(${rotateY}deg) translateX(${translateX}%)`,
                        transformOrigin: 'left center',
                        transition: 'transform 800ms cubic-bezier(0.4, 0, 0.2, 1), opacity 600ms cubic-bezier(0.4, 0, 0.2, 1)',
                        zIndex,
                        opacity,
                      }}
                    >
                      <div className="relative h-full overflow-hidden bg-gray-900 shadow-2xl rounded-lg">
                        <Image
                          src={reason.image}
                          alt={reason.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/90 via-primary-900/50 to-transparent"></div>

                        {/* Badge flottant */}
                        <div className="absolute top-8 left-8 bg-white px-6 py-3 shadow-2xl rounded-lg">
                          <span className="text-primary-900 font-black text-[10px] tracking-[0.25em] uppercase">
                            {reason.subtitle}
                          </span>
                        </div>

                        {/* Numéro de page */}
                        <div className="absolute top-8 right-8 w-12 h-12 bg-bronze-base text-white rounded-full flex items-center justify-center shadow-xl">
                          <span className="text-xl font-black">{index + 1}</span>
                        </div>

                        {/* Stats en bas */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-transparent p-6">
                          <div className="grid grid-cols-3 gap-3">
                            {reason.stats.map((stat, idx) => (
                              <div key={idx} className="text-center">
                                <div className="text-xl lg:text-2xl font-black text-white mb-1">{stat.value}</div>
                                <div className="text-[10px] text-bronze-base font-semibold uppercase tracking-wide">
                                  {stat.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contenu textuel sans card */}
            <div className="relative h-full max-h-[550px] flex flex-col justify-center">
              {reasons.map((reason, index) => {
                const IconComponent = reason.icon;
                const isActive = activeIndex === index;

                return (
                  <div
                    key={reason.id}
                    className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-out ${
                      isActive
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-8 scale-95 pointer-events-none"
                    }`}
                  >
                    {/* En-tête avec animation */}
                    <div className="flex items-start gap-6 mb-8">
                      <div
                        className={`relative flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary-900 to-primary-800 flex items-center justify-center rounded-full shadow-2xl transition-all duration-700 ${
                          isActive ? "scale-100 rotate-0" : "scale-0 rotate-180"
                        }`}
                        style={{ transitionDelay: isActive ? "0ms" : "0ms" }}
                      >
                        <IconComponent size={36} className="text-white" />
                      </div>

                      <div className="flex-1">
                        <div
                          className={`text-[10px] font-bold tracking-[0.3em] text-bronze-base mb-3 transition-all duration-700 ${
                            isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                          }`}
                          style={{ transitionDelay: isActive ? "100ms" : "0ms" }}
                        >
                          {reason.subtitle}
                        </div>
                        <h3
                          className={`text-4xl lg:text-5xl font-bold text-primary-900 tracking-tight leading-tight mb-4 transition-all duration-700 ${
                            isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                          }`}
                          style={{ transitionDelay: isActive ? "200ms" : "0ms" }}
                        >
                          {reason.title}
                        </h3>
                        <p
                          className={`text-gray-700 leading-relaxed text-lg transition-all duration-700 ${
                            isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                          }`}
                          style={{ transitionDelay: isActive ? "300ms" : "0ms" }}
                        >
                          {reason.content}
                        </p>
                      </div>
                    </div>

                    {/* CTA - uniquement sur la dernière page */}
                    {index === reasons.length - 1 && (
                      <div
                        className={`bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white p-8 rounded-xl shadow-2xl transition-all duration-700 ${
                          isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                        style={{ transitionDelay: isActive ? "400ms" : "0ms" }}
                      >
                        <div className="flex items-start gap-5 mb-6">
                          <div className="flex-shrink-0 w-12 h-12 bg-bronze-base/20 rounded-full flex items-center justify-center">
                            <Shield size={24} className="text-bronze-base" />
                          </div>
                          <div>
                            <h5 className="font-bold text-2xl mb-3 tracking-tight">
                              Rejoignez-nous dès aujourd'hui
                            </h5>
                            <p className="text-gray-100 leading-relaxed font-light mb-6">
                              Plus de 500 entreprises nous font confiance. Faites partie du réseau le plus influent du Gabon.
                            </p>
                            <Link
                              href="/devenir-membre"
                              className="relative inline-flex items-center gap-3 bg-white text-primary-900 px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 group overflow-hidden"
                            >
                              <span className="relative z-10">DEVENIR MEMBRE</span>
                              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                              {/* Shimmer ultra-lent */}
                              <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bronze-base/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer-slide"></div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Indicateur de progression */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {reasons.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === activeIndex
                    ? "w-12 bg-primary-900"
                    : index < activeIndex
                    ? "w-8 bg-bronze-base"
                    : "w-8 bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-2000 {
          perspective: 2000px;
        }

        @keyframes shimmer-slide {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        :global(.animate-shimmer-slide) {
          animation: shimmer-slide 15s ease-in-out;
        }
      `}</style>
    </section>
  );
}
