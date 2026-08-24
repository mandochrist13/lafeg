"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Valeurs() {
  const values = [
    {
      title: "EXEMPLARITÉ ET CONDUITE",
      description:
        "La FEG a un rôle de modèle et d'exemplarité envers ses partenaires, syndicats de travailleurs, administrations, groupements associatifs professionnels et collaborateurs.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=800&fit=crop",
      gradient: "from-pink-100 to-pink-50",
      borderColor: "border-pink-300",
    },
    {
      title: "RESPECT DES LOIS ET DES RÈGLEMENTS",
      description:
        "Nous veillons au respect strict des lois et règlements en vigueur, garantissant ainsi l'intégrité et la conformité de nos actions.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=800&fit=crop",
      gradient: "from-blue-100 to-blue-50",
      borderColor: "border-blue-300",
    },
    {
      title: "PARTAGE ET COHÉSION",
      description:
        "Le partage des connaissances et la cohésion entre nos membres sont au cœur de notre mission pour renforcer le tissu économique gabonais.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop",
      gradient: "from-green-100 to-green-50",
      borderColor: "border-green-300",
    },
    {
      title: "SOLIDARITÉ ET EMINENCE DU SECTEUR PRIVÉ",
      description:
        "Nous promouvons la solidarité entre entreprises et l'excellence du secteur privé gabonais pour un développement économique durable.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=800&fit=crop",
      gradient: "from-yellow-100 to-yellow-50",
      borderColor: "border-yellow-300",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* Logo en filigrane */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <Image
          src="/images/logo.png"
          alt="Logo FEG"
          width={800}
          height={800}
          className="opacity-[0.02] select-none"
        />
      </div>

      {/* En-tête */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-black text-primary-900 mb-4">
          Nos Valeurs
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          La FEG véhicule une image d'excellence et de respectabilité
        </p>
      </motion.div>

      {/* Valeurs en alternance */}
      <div className="space-y-16 relative z-10">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-8 lg:gap-16`}
          >
            {/* Image circulaire avec photo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 w-64 h-64 lg:w-80 lg:h-80 relative"
            >
              <div
                className={`absolute inset-0 rounded-[40%] bg-gradient-to-br ${value.gradient} border-4 ${value.borderColor} overflow-hidden shadow-xl`}
              >
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Contenu texte */}
            <div
              className={`flex-1 ${
                index % 2 === 0 ? "lg:text-left" : "lg:text-right"
              } text-center`}
            >
              <motion.h2
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                {value.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                {value.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Charte */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 text-center relative z-10"
      >
        <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Charte des valeurs et code éthique
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Découvrez notre charte complète qui définit nos principes et notre engagement envers l'excellence
          </p>
          <motion.button
            onClick={() => {
              window.open("/CHARTE_FEG.pdf", "_blank");
            }}
            className="px-8 py-4 bg-bronze-base text-primary-900 font-bold rounded-lg transition-all duration-300 inline-flex items-center gap-3 hover:bg-bronze-dark"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(184, 134, 11, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Consulter notre charte</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
