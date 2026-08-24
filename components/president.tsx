"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { useState } from "react";

export default function President() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -15;
    const rotateYValue = ((x - centerX) / centerX) * 15;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-white via-gray-50/40 to-white relative overflow-hidden">
      {/* Effets de fond décoratifs */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-20 left-10 w-96 h-96 bg-bronze-base rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* En-tête élégant avec animation */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-4 mb-5 animate-fade-in-down">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-bronze-base to-transparent"></div>
            <span className="text-[9px] font-bold tracking-[0.5em] text-primary-900/70 uppercase">
              Leadership
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-bronze-base to-transparent"></div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 tracking-tight mb-3 animate-fade-in-up">
            Le Président de la FEG
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base animate-fade-in-up animation-delay-200">
            À la tête du patronat gabonais, un leader visionnaire au service du développement économique
          </p>
        </div>

        {/* Layout asymétrique - Photo dominante */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Photo avec effet 3D avancé */}
          <div
            className="lg:col-span-1 relative group perspective-2000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Glow effect background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-bronze-base/20 via-primary-600/20 to-bronze-dark/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse-slow"></div>

            <div
              className="relative aspect-[3/4] transition-all duration-200 ease-out transform-gpu card-3d"
              style={{
                transformStyle: 'preserve-3d',
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`,
              }}
            >
              {/* Ombre portée 3D multicouche */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 to-bronze-dark/30 rounded-xl transform translate-x-6 translate-y-6 blur-2xl transition-all duration-700 group-hover:translate-x-8 group-hover:translate-y-8 group-hover:opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-bronze-base/20 to-transparent rounded-xl transform translate-x-3 translate-y-3 blur-xl transition-all duration-700 group-hover:translate-x-5 group-hover:translate-y-5"></div>

              {/* Photo principale avec bordure 3D */}
              <div className="relative h-full overflow-hidden rounded-xl shadow-2xl transition-all duration-700 group-hover:shadow-[0_30px_60px_-15px_rgba(6,61,33,0.5)] border border-white/20 ring-1 ring-bronze-base/10">
                <Image
                  src="/images/président.jpg"
                  alt="Alain-Claude KOUAKOUA - Président de la FEG"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />

                {/* Overlay gradient sophistiqué */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-transparent to-bronze-base/10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>

                {/* Shimmer au survol uniquement */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:animate-shimmer-once"></div>
                </div>

                {/* Reflet lumineux diagonal au survol - style miroir */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent opacity-0 group-hover:animate-mirror-reflection" style={{transformOrigin: 'top left'}}></div>
                </div>

                {/* Reflet secondaire pour effet réaliste */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 z-20 pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/20 to-transparent animate-fade-reflection"></div>
                </div>

                {/* Particules de lumière décoratives */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-bronze-base rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 animate-float"></div>
                <div className="absolute top-1/3 right-8 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-80 transition-all duration-700 delay-500 animate-float-delayed"></div>

                {/* Badge nom avec effet glassmorphism */}
                <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-gradient-to-t from-black/95 via-black/80 to-transparent p-6 border-t border-white/10">
                  <h3 className="text-white font-bold text-lg mb-1 drop-shadow-lg">
                    Alain-Claude KOUAKOUA
                  </h3>
                  <p className="text-bronze-base text-xs font-semibold uppercase tracking-wider drop-shadow-md">
                    Président de la FEG
                  </p>
                </div>

                {/* Bordure intérieure brillante */}
                <div className="absolute inset-0 rounded-xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-700 pointer-events-none"></div>
              </div>
            </div>

            {/* Styles avancés */}
            <style jsx>{`
              .perspective-2000 {
                perspective: 2000px;
              }

              .card-3d {
                will-change: transform;
                transition: transform 0.2s ease-out;
              }

              @keyframes shimmer-once {
                0% {
                  transform: translateX(-100%) skewX(-15deg);
                }
                100% {
                  transform: translateX(200%) skewX(-15deg);
                }
              }

              .animate-shimmer-once {
                animation: shimmer-once 0.8s ease-out;
              }

              @keyframes light-sweep {
                0% {
                  transform: translateX(-100%) translateY(-100%) rotate(45deg);
                  opacity: 0;
                }
                50% {
                  opacity: 1;
                }
                100% {
                  transform: translateX(100%) translateY(100%) rotate(45deg);
                  opacity: 0;
                }
              }

              .animate-light-sweep {
                animation: light-sweep 2.5s ease-in-out;
              }

              @keyframes float {
                0%, 100% {
                  transform: translateY(0) scale(1);
                }
                50% {
                  transform: translateY(-10px) scale(1.2);
                }
              }

              .animate-float {
                animation: float 3s ease-in-out infinite;
              }

              .animate-float-delayed {
                animation: float 3s ease-in-out infinite 1s;
              }

              @keyframes pulse-slow {
                0%, 100% {
                  opacity: 0;
                }
                50% {
                  opacity: 1;
                }
              }

              .animate-pulse-slow {
                animation: pulse-slow 4s ease-in-out infinite;
              }

              @keyframes blob {
                0%, 100% {
                  transform: translate(0, 0) scale(1);
                }
                33% {
                  transform: translate(30px, -50px) scale(1.1);
                }
                66% {
                  transform: translate(-20px, 20px) scale(0.9);
                }
              }

              .animate-blob {
                animation: blob 20s ease-in-out infinite;
              }

              .animation-delay-2000 {
                animation-delay: 2s;
              }

              .animation-delay-200 {
                animation-delay: 0.2s;
              }

              @keyframes fade-in-down {
                from {
                  opacity: 0;
                  transform: translateY(-20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              @keyframes fade-in-up {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              .animate-fade-in-down {
                animation: fade-in-down 0.6s ease-out;
              }

              .animate-fade-in-up {
                animation: fade-in-up 0.6s ease-out;
              }

              @keyframes mirror-reflection {
                0% {
                  opacity: 0;
                  transform: translateX(-100%) translateY(-100%) rotate(45deg) scale(1.5);
                }
                50% {
                  opacity: 1;
                }
                100% {
                  opacity: 0;
                  transform: translateX(100%) translateY(100%) rotate(45deg) scale(1.5);
                }
              }

              .animate-mirror-reflection {
                animation: mirror-reflection 1.2s ease-out;
              }

              @keyframes fade-reflection {
                0% {
                  opacity: 0;
                }
                50% {
                  opacity: 1;
                }
                100% {
                  opacity: 0;
                }
              }

              .animate-fade-reflection {
                animation: fade-reflection 1.5s ease-in-out;
              }
            `}</style>
          </div>

          {/* Contenu textuel - 2 colonnes */}
          <div className="lg:col-span-2 space-y-4">
            {/* Titre accrocheur avec effet */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-bronze-base via-bronze-dark to-bronze-base rounded-full"></div>
              <h3 className="text-xl lg:text-2xl font-bold text-primary-900 leading-tight">
                Un leader engagé pour{" "}
                <span className="text-bronze-dark font-extrabold">
                  la performance des entreprises gabonaises
                </span>
              </h3>
            </div>

            {/* Biographie résumée */}
            <div className="space-y-3 text-gray-800 leading-relaxed text-sm lg:text-base">
              <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-bronze-base first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-1">
                Entrepreneur reconnu, membre actif de la FEG, Alain-Claude Kouakoua est né en 1960 au Gabon où il est originaire de Lambaréné dans la province du Moyen-Ogooué. Homme d'affaires, il est le président Directeur général (PDG) du groupe ACK, qui s'illustre dans divers domaines tels que le BTP, les assurances et les services.
              </p>

              <p>
                En 2012, il a décidé, au vu de la multitude d'entreprises qu'il a créées, de les réunir sous une Holding baptisée ACK. Il prend les commandes du Patronat gabonais dans un contexte marqué par de nombreux défis, et s'engage « à poursuivre son œuvre en plaçant l'entreprise gabonaise au cœur de notre souveraineté économique ».
              </p>
            </div>

            {/* Citation améliorée */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white p-5 shadow-2xl group hover:shadow-[0_20px_60px_-10px_rgba(6,61,33,0.5)] transition-all duration-500">
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Pattern décoratif */}
              <div className="absolute top-0 right-0 opacity-[0.02]">
                <Quote size={120} />
              </div>

              <div className="relative z-10">
                <Quote size={22} className="text-bronze-base mb-3 drop-shadow-lg" />
                <p className="text-base lg:text-lg font-light italic mb-4 leading-relaxed text-white/95">
                  "L'histoire économique d'un pays ne s'écrit pas dans les administrations. Elle s'écrit sur le terrain, dans la sueur des ateliers et le risque des entrepreneurs."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-px bg-gradient-to-r from-bronze-base to-transparent"></div>
                  <p className="text-[11px] text-bronze-base font-bold tracking-[0.3em] uppercase">
                    Alain-Claude KOUAKOUA
                  </p>
                </div>
              </div>

              {/* Bordure animée */}
              <div className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none"></div>
            </div>

            {/* Bouton Lire la biographie */}
            <div className="flex justify-center lg:justify-start pt-2">
              <a
                href="/la-feg?tab=president"
                className="inline-flex items-center gap-2 px-6 py-3 bg-bronze-base hover:bg-bronze-dark text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Lire la biographie complète
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
