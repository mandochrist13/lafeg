"use client";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const infoItems = [
  {
    id: 1,
    activeIcon: "/images/chart1.png",
    icon: "/images/chart.png",
    title: "S’unir pour être plus fort",
    text: "En adhérant à la FEG, vous faites partie d’un réseau puissant qui représente près de 500 entreprises, réalise environ 80% du PIB et près de 90% de l’emploi formel au Gabon. Ensemble, nous pouvons défendre les intérêts du secteur privé, négocier avec les pouvoirs publics et contribuer à l’amélioration du climat des affaires dans notre pays.",
  },
  {
    id: 2,
    activeIcon: "/images/voice1.png",
    icon: "/images/voice.png",
    title: "Une voix unifiée",
    text: "Rejoindre la FEG vous permet de faire entendre votre voix, d’influencer les politiques publiques et de renforcer votre visibilité sur la scène économique nationale.",
  },
  {
    id: 3,
    activeIcon: "/images/doc1.png",
    icon: "/images/doc.png",
    title: "Accès aux services",
    text: "Profitez d’un accompagnement professionnel, de formations, d’analyses économiques et juridiques, ainsi que d’un accès facilité aux services de l’État et aux opportunités d’affaires.",
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
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <section className="relative h-[800px] text-white">
      {/* Background parallax */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/tab-bk.jpg')" }}
      />

      <div className="relative flex flex-col justify-between z-10 max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          3 bonnes raisons d&apos;adhérer à la FEG
        </h2>
        <p className="text-md md:text-lg mb-10">
          Adhérer à la Fédération des Entreprises du Gabon (FEG) offre de
          nombreux avantages pour les entreprises locales. Voici trois bonnes
          raisons de rejoindre la FEG :
        </p>

        {/* Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {infoItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`p-4 rounded shadow-md hover:scale-105 transition-transform duration-300 ${
                activeIndex === index
                  ? "border-4 bg-[#006633] border-white text-white"
                  : "bg-white text-[#006633]"
              }`}
            >
              <Image
                src={activeIndex === index ? item.activeIcon : item.icon}
                alt={item.text}
                width={1000}
                height={1000}
                className="w-36 object-cover object-center"
              />
            </button>
          ))}
        </div>

        {/* Content Switch */}
        <div className="mt-6 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={infoItems[activeIndex].id}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-[#006633] p-6 rounded-md shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">
                {infoItems[activeIndex].title}
              </h3>
              <p className="text-lg">{infoItems[activeIndex].text}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10">
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 font-semibold rounded hover:bg-white hover:text-[#006633] transition-colors duration-300">
            REJOIGNEZ-NOUS AUJOURD’HUI
          </button>
        </div>
      </div>
    </section>
  );
}
