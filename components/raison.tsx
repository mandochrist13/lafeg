"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const infoItems = [
  {
    id: 1,
    activeIcon: "/images/chart1.png",
    icon: "/images/chart.png",
    title: "S'unir pour être plus fort",
    text: "En adhérant à la FEG, vous faites partie d'un réseau puissant qui représente près de 500 entreprises, réalise environ 80% du PIB et près de 90% de l'emploi formel au Gabon. Ensemble, nous pouvons défendre les intérêts du secteur privé, négocier avec les pouvoirs publics et contribuer à l'amélioration du climat des affaires dans notre pays.",
  },
  {
    id: 2,
    activeIcon: "/images/voice1.png",
    icon: "/images/voice.png",
    title: "Une voix unifiée",
    text: "Rejoindre la FEG vous permet de faire entendre votre voix, d'influencer les politiques publiques et de renforcer votre visibilité sur la scène économique nationale.",
  },
  {
    id: 3,
    activeIcon: "/images/doc1.png",
    icon: "/images/doc.png",
    title: "Accès aux services",
    text: "Profitez d'un accompagnement professionnel, de formations, d'analyses économiques et juridiques, ainsi que d'un accès facilité aux services de l'État et aux opportunités d'affaires.",
  },
];

export default function AdhesionSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  // Auto-switch every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === infoItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[600px] md:h-[800px] text-white">
      {/* Background parallax with overlay */}
      <div className="absolute inset-0 bg-fixed bg-cover bg-center bg-[url('/images/tab-bk.jpg')]">
        <div className="absolute inset-0 bg-[#f39d1238]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-3xl mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            3 bonnes raisons d'adhérer à la FEG
          </h2>
          <p className="text-sm sm:text-base md:text-lg">
            Adhérer à la Fédération des Entreprises du Gabon (FEG) offre de
            nombreux avantages pour les entreprises locales. Voici trois bonnes
            raisons de rejoindre la FEG :
          </p>
        </div>

        {/* Icons - Stack on mobile, row on larger screens */}
        <div className="flex flex-row sm:flex-row justify-center gap-2 sm:gap-4 mb-8 w-full max-w-4xl">
          {infoItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`flex flex-col items-center p-3 sm:p-4 rounded shadow-md transition-all duration-300 ${
                activeIndex === index
                  ? "border-2 sm:border-4 bg-[#063d21] border-white text-white scale-105"
                  : "bg-white text-[#063d21] hover:scale-105"
              }`}
            >
              <Image
                src={activeIndex === index ? item.activeIcon : item.icon}
                alt={item.title}
                width={80}
                height={80}
                className="w-16 sm:w-20 md:w-24 object-contain"
              />
              <span className="mt-2 text-xs sm:text-sm font-medium hidden sm:block">
                {item.title}
              </span>
            </button>
          ))}
        </div>

        {/* Content Switch - Full width on mobile, centered on larger screens */}
        <div className="w-full max-w-4xl mx-auto mb-8 md:mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={infoItems[activeIndex].id}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-[#063d21] p-4 sm:p-6 rounded-md shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
                {infoItems[activeIndex].title}
              </h3>
              <p className="text-sm sm:text-base">{infoItems[activeIndex].text}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Button - Responsive sizing */}
        <button className="bg-transparent border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded hover:bg-white hover:text-[#063d21] transition-colors duration-300">
          REJOIGNEZ-NOUS AUJOURD'HUI
        </button>
      </div>
    </section>
  );
}