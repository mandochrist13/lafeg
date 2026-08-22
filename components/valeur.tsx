"use client";

import { motion } from "framer-motion";

export default function Valeurs() {
  const values = [
    "EXEMPLARITÉ ET CONDUITE",
    "RESPECT DES LOIS ET DES RÈGLEMENTS",
    "PARTAGE ET COHÉSION",
    "SOLIDARITÉ ET EMINENCE DU SECTEUR PRIVÉ",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <>
      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Responsive Layout */}
        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          {/* Main Content - Left Side */}
          <motion.div
            className=""
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Values Card */}
            <div className="bg-gray-200 rounded-md overflow-hidden mb-8 lg:mb-0 shadow-lg">
              <div className="p-8">
                <motion.div
                  className="text-2xl font-bold text-[#063d21] mb-6 border-b-2 border-bronze-base pb-2"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Charte des valeurs et code éthique
                </motion.div>
                <motion.p
                  className="text-gray-800 text-lg mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  La FEG a un rôle de modèle et d'exemplarité envers ses
                  partenaires, syndicats de travailleurs, administrations,
                  groupements associatifs professionnels et collaborateurs. Elle
                  véhicule une image d'excellence et de respectabilité.
                </motion.p>

                <motion.ul
                  className="space-y-4 mb-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {values.map((value, index) => (
                    <motion.li
                      key={value}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.02,
                        x: 5,
                        transition: { duration: 0.2 },
                      }}
                      className="flex items-center bg-white p-4 rounded-lg shadow-md cursor-pointer group"
                    >
                      <motion.div
                        className="flex-shrink-0 bg-[#063d21] p-2 rounded-full"
                        whileHover={{
                          rotate: 360,
                          backgroundColor: "#0a5a31",
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <svg
                          className="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </motion.div>
                      <span className="ml-4 text-gray-800 font-medium group-hover:text-[#063d21] transition-colors">
                        {value}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  className="pt-4 border-t border-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button
                    onClick={() => {
                      // Ouvre le PDF dans un nouvel onglet
                      window.open("/CHARTE_FEG.pdf", "_blank");
                    }}
                    className="px-6 py-3 bg-[#063d21] text-white font-medium rounded-md transition-all duration-300 flex items-center mx-auto hover:bg-[#0a5a31]"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 20px rgba(6, 61, 33, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Consulter notre charte</span>
                    <motion.svg
                      className="w-5 h-5 ml-2"
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
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
