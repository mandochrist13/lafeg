"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function MissionsSection() {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover text-white flex justify-center items-center py-12 md:py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/images/mis-bk.jpg')",
      }}
    >
      {/* Overlay pour meilleure lisibilité */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Contenu */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Icônes - maintenant en haut sur mobile */}
          <div className="w-full lg:w-auto grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { icon: "/images/info.png", text: "Informer" },
              { icon: "/images/pro.png", text: "Promouvoir" },
              { icon: "/images/part.png", text: "Participer" },
              { icon: "/images/defendre.png", text: "Défendre" },
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white text-[#f39c12] p-4 sm:p-6 rounded shadow-md flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={item.icon}
                  alt={item.text}
                  width={80}
                  height={80}
                  className="w-10 sm:w-14 object-cover object-center"
                />
                <p className="mt-2 text-sm sm:text-base font-semibold">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Texte - maintenant en bas sur mobile */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-sm md:text-base text-gray-200 mb-2">Nos Missions</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Informer | Promouvoir | Participer | Défendre
            </h2>
            <ul className="space-y-2 sm:space-y-3 text-white text-sm sm:text-base">
              {[
                "Promouvoir l'entreprise ;",
                "Défendre les intérêts des entreprises adhérentes et les représenter ;",
                "Participer à toutes les négociations avec les pouvoirs publics et syndicats de travailleurs ;",
                "Émettre notre avis sur toute question à caractère économique et social ;",
                "Offrir à nos membres tous les services afin d'accroître la productivité d'ensemble ;",
                "Assurer et veiller à garantir la compétitivité et la croissance du tissu économique ;",
                "Accroître la dynamique entrepreneuriale et le développement des entreprises locales.",
              ].map((mission, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-white mt-0.5 flex-shrink-0" />
                  <span className="text-left">{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}