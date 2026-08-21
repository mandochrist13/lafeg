"use client";

import Image from "next/image";
import { Quote, Briefcase, Award, Target } from "lucide-react";

export default function President() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* En-tête */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-3">
            <span className="text-bronze-base font-bold text-sm uppercase tracking-wider">
              Leadership
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Le Président de la FEG
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-bronze-base mx-auto"></div>
        </div>

        {/* Layout avec photo + texte */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo du président avec effet 3D */}
          <div className="relative perspective-[1200px] group">
            <div
              className="relative h-[500px] transition-all duration-500 ease-out"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateY(-8deg) rotateX(2deg)',
              }}
            >
              {/* Cadre avec effet de profondeur */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-800 rounded-lg transform translate-x-3 translate-y-3 blur-sm opacity-40"></div>

              {/* Photo principale */}
              <div className="relative h-full overflow-hidden rounded-lg shadow-[20px_20px_40px_-12px_rgba(6,61,33,0.5)] transition-all duration-500 group-hover:shadow-[25px_25px_50px_-10px_rgba(6,61,33,0.6)]">
                <Image
                  src="/images/nomitation.jpg"
                  alt="Alain-Claude KOUAKOUA - Président de la FEG"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay subtil avec dégradé */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/5 to-transparent"></div>

                {/* Bordure intérieure subtile (effet cadre) */}
                <div className="absolute inset-4 border-2 border-white/20 rounded pointer-events-none"></div>
              </div>

              {/* Badge avec titre - redesigné pour l'effet 3D */}
              <div className="absolute -bottom-4 -right-4 left-8 bg-white p-6 border-l-4 border-bronze-base shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)] rounded-r-lg transform transition-all duration-500 group-hover:translate-y-[-4px]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0 rounded">
                    <Award size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Alain-Claude KOUAKOUA
                    </h3>
                    <p className="text-bronze-base font-semibold text-sm">
                      Président de la Fédération des Entreprises du Gabon
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Style pour l'effet 3D au survol */}
            <style jsx>{`
              .perspective-1200px {
                perspective: 1200px;
              }

              .group:hover > div {
                transform: rotateY(-5deg) rotateX(1deg) translateZ(10px);
              }

              @media (max-width: 1024px) {
                .group > div {
                  transform: rotateY(-4deg) rotateX(1deg);
                }
                .group:hover > div {
                  transform: rotateY(-2deg) rotateX(0.5deg);
                }
              }
            `}</style>
          </div>

          {/* Contenu texte */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4 leading-tight">
                Notre institution contribue à un idéal commun :{" "}
                <span className="text-bronze-base">
                  la performance des entreprises gabonaises
                </span>
              </h3>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Alain-Claude Kouakoua est à présent le leader du patronat
                  gabonais, reconnu pour son influence grandissante au sein de
                  la Fédération des Entreprises du Gabon (FEG) et pour ses
                  engagements dans des secteurs essentiels tels que la
                  logistique, le transport, la construction et les
                  infrastructures. Il succède à Henri-Claude Oyima, qui occupe
                  désormais le poste de ministre d'État.
                </p>

                <p>
                  Né en 1960, Alain Claude KOUAKOUA, originaire de Lambaréné,
                  entame sa carrière dans le monde des affaires en fondant Mika
                  Transports, une entreprise spécialisée dans le transport et la
                  distribution de produits pétroliers et de gaz. Quelques années
                  plus tard, il prend la direction d'une nouvelle société, Mika
                  Services, qui regroupe en son sein, en plus des hydrocarbures,
                  des activités de BTP.
                </p>
              </div>
            </div>

            {/* Points clés */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 p-4 bg-gray-50 border-l-4 border-primary">
                <Briefcase size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    PDG du Groupe ACK
                  </h4>
                  <p className="text-sm text-gray-600">
                    Conglomérat actif dans le BTP, transport et logistique
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 border-l-4 border-bronze-base">
                <Target size={20} className="text-bronze-base flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    Ancien Vice-président de la FEG
                  </h4>
                  <p className="text-sm text-gray-600">
                    Chargé du corridor logistique et de la fédération des métiers de la construction
                  </p>
                </div>
              </div>
            </div>

            {/* Citation */}
            <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-6 relative overflow-hidden">
              <div className="absolute top-2 right-2 opacity-10">
                <Quote size={80} />
              </div>
              <div className="relative z-10">
                <p className="text-lg font-medium italic mb-3">
                  "Ensemble, bâtissons une économie forte pour garantir la souveraineté nationale"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-bronze-light"></div>
                  <p className="text-sm text-bronze-light font-semibold">
                    Alain-Claude KOUAKOUA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
