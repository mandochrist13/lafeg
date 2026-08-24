"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users, Briefcase, Scale } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Publications",
      description:
        "La FEG réalise une veille sur les réformes législatives, règlementaire, institutionnelles et macro-économiques. Elle met à disposition de ses membres des circulaires et une newsletter pour les tenir informés de l'actualité économique, sociale, nationale et internationale.",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
    },
    {
      title: "Formations",
      description:
        "La FEG propose à ses adhérents des cycles de formation en collaboration avec ses partenaires sur des thèmes en relation avec l'entreprise et l'actualité. Un cadre spécifique d'accompagnement est dédié aux entreprises du secteur informel et des Start-ups.",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
    },
    {
      title: "Dialogue Public-Privé",
      description:
        "La FEG maintient le dialogue public-privé pour la défense des intérêts de ses membres. Elle assure la représentation de ses adhérents au sein des différentes institutions nationales et internationales.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
    },
    {
      title: "Réseau d'affaires",
      description:
        "La FEG offre une plateforme de rencontres permettant de saisir les opportunités d'affaires : Assemblées Générales, Forums, Salons, etc. Elle accompagne ses membres dans l'optimisation de leurs budgets.",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
    },
    {
      title: "Médiation et arbitrage",
      description:
        "La FEG offre aux entreprises un cadre de règlement des conflits à l'amiable, volontaire et confidentiel, entre membres ou avec des tiers, conforme aux intérêts des parties.",
      icon: Scale,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* En-tête sobre */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-primary-900 mb-3">
          Nos Services
        </h2>
        <p className="text-gray-600 text-base max-w-2xl">
          La FEG accompagne ses membres avec une gamme complète de services dédiés au développement des entreprises
        </p>
      </motion.div>

      {/* Grille des services - Design sobre et élégant */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {services.map((service, index) => {
          const IconComp = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              {/* Card minimaliste */}
              <div className="h-full bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-primary-900/20">
                {/* Image header sobre */}
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay léger */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

                  {/* Icône minimaliste */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <IconComp className="w-6 h-6 text-primary-900" strokeWidth={2} />
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Indicateur subtil */}
                <div className="h-1 bg-gradient-to-r from-primary-900 to-bronze-base transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA minimaliste */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center pt-8 border-t border-gray-200"
      >
        <motion.button
          onClick={() => {
            window.open("/Services.pdf", "_blank");
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 bg-primary-900 text-white font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2 hover:bg-primary-800 shadow-md hover:shadow-lg"
        >
          <span>Télécharger notre catalogue</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
}
