"use client";
import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";
import { Calendar, Award } from "lucide-react";

export const president = [
  {
    name: "M. Alain-Claude KOUAKOUA",
    period: "2025 - Aujourd'hui",
    image: "/images/président.jpg",
  },
  {
    name: "M. Henri-Claude OYIMA",
    period: "2022 - 2025",
    image: "/images/Mr_OYIMA.png",
  },
  {
    name: "M. Alain BA OUMAR",
    period: "2017 - 2022",
    image: "/images/BA_OUMAR.png",
  },
  {
    name: "M. Jean-Bernard BOUMAH",
    period: "2015 - 2017",
    image: "/images/BOUMAH.png",
  },
  {
    name: "Mme. Madeleine BERRE",
    period: "2014 - 2015",
    image: "/images/Madeleine_BERRE.png",
  },
  {
    name: "M. Henri-Claude OYIMA",
    period: "2003 - 2013",
    image: "/images/Mr_OYIMA1.png",
  },
  {
    name: "M. Jean Claude BALOCHE",
    period: "1996 - 2002",
    image: "/images/Claude_BALOCHE.png",
  },
  {
    name: "M. Emile DOUMBA",
    period: "1991 - 1995",
    image: "/images/Emile_DOUMBA.png",
  },
  {
    name: "M. André Dieudonné BERRE",
    period: "1988 - 1990",
    image: "/images/Dieudonné_BERRE.png",
  },
  {
    name: "M. André P. APANDINA",
    period: "1984 - 1987",
    image: "/images/P.APANDINA.png",
  },
  {
    name: "M. Emmanuel S. BERRE",
    period: "1981 - 1983",
    image: "/images/S.BERRE.png",
  },
  {
    name: "M. Henri BASSET",
    period: "1975 - 1980",
    image: "/images/Henri_BASSET.png",
  },
];

const Histoire: React.FC = () => {
  const data = [
    {
      title: "1959",
      content: (
        <div>
          <h3 className="text-2xl font-bold text-primary-900 mb-4">
            Naissance d'UNIGABON
          </h3>
          <p className="mb-8 text-gray-600 leading-relaxed">
            Création de l'Union Interprofessionnelle du Gabon, marquant le début de l'organisation patronale gabonaise.
          </p>
          <p className="text-gray-600 leading-relaxed">
            En octobre 1959, un mois après la création d'Unigabon, plusieurs syndicats vont se constituer : le Syndicat des Entrepreneurs de Manutention du Gabon, le Syndicat des Compagnies de Navigation et de Consignation de Navires, le Syndicat des Transitaires, et le Syndicat des Transporteurs Fluviaux.
          </p>
        </div>
      ),
    },
    {
      title: "1971",
      content: (
        <div>
          <h3 className="text-2xl font-bold text-primary-900 mb-4">
            Ouverture et Inclusion
          </h3>
          <p className="mb-4 text-gray-600 leading-relaxed">
            Réforme des statuts pour permettre aux entreprises non syndiquées de rejoindre le patronat, élargissant la représentativité.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Une restriction de principes fut apportée pour permettre aux entreprises qui ne sont pas dans une organisation syndicale d'être membre à part entière du patronat gabonais.
          </p>
        </div>
      ),
    },
    {
      title: "1978",
      content: (
        <div>
          <h3 className="text-2xl font-bold text-primary-900 mb-4">
            Naissance de la CPG
          </h3>
          <p className="mb-4 text-gray-600 leading-relaxed">
            UNIGABON devient la Confédération Patronale Gabonaise, une fédération de syndicats et d'entreprises plus structurée.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Cette appellation reflétait mieux le caractère patronal de l'organisation d'une part, sa composition multi-syndicale d'autre part.
          </p>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <h3 className="text-2xl font-bold text-primary-900 mb-4">
            Modernisation
          </h3>
          <p className="mb-4 text-gray-600 leading-relaxed">
            La CPG s'organise autour de 18 secteurs forts et modernise sa gouvernance avec un Conseil d'Administration réduit.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Cette restructuration marque une nouvelle ère de professionnalisation et d'efficacité pour l'organisation patronale.
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h3 className="text-2xl font-bold text-primary-900 mb-4">
            La FEG est née
          </h3>
          <p className="mb-4 text-gray-600 leading-relaxed">
            La Confédération Patronale Gabonaise devient la Fédération des Entreprises du Gabon, marquant une nouvelle ère.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Au-delà de sa position de quasi-monopole, la FEG doit son statut autant à une longue histoire qu'à son implication grandissante auprès des décideurs et des partenaires sociaux.
          </p>
        </div>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Logo en filigrane */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden -z-10"
      >
        <Image
          src="/images/logo.png"
          alt="Logo FEG"
          width={700}
          height={700}
          className="opacity-[0.02] select-none"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-bronze-base to-bronze-base"></div>
            <Calendar className="w-5 h-5 text-bronze-base" />
            <span className="text-xs font-bold tracking-[0.3em] text-primary-900/70 uppercase">
              Notre Histoire
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-bronze-base via-bronze-base to-transparent"></div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-900 mb-6 tracking-tight">
            67 ANS D'ENGAGEMENT
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Depuis 1959, une histoire au service des entreprises gabonaises
          </p>
        </motion.div>

        {/* Timeline animée avec scroll */}
        <div className="mb-24">
          <Timeline data={data} />
        </div>

        {/* Histoire détaillée */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8 flex items-center gap-4">
              <div className="w-1.5 h-12 bg-gradient-to-b from-bronze-base to-bronze-dark rounded-full"></div>
              L'évolution du patronat gabonais
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
              <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-bronze-base first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-2">
                Créé le 4 septembre 1959 sous l'appellation d'Union
                Interprofessionnelle du Gabon (UNIGABON), le patronat gabonais a
                connu plusieurs évolutions avec le souci constant de s'adapter à
                son environnement.
              </p>

              <p>
                En octobre 1959, un mois après la création d'Unigabon, plusieurs
                syndicats vont se constituer : le Syndicat des Entrepreneurs de
                Manutention du Gabon, le Syndicat des Compagnies de Navigation et
                de Consignation de Navires, le Syndicat des Transitaires, et le
                Syndicat des Transporteurs Fluviaux.
              </p>

              <p className="bg-gray-50 p-6 rounded-lg border-l-4 border-bronze-base">
                Les années qui suivent verront l'apparition du Syndicat des
                Entreprises Minières du Gabon (1960) et du Syndicat des Négociants
                en Bois et Courtiers du Gabon (1963).
              </p>

              <p>
                En 1971, une restriction de principes fut apportée pour permettre
                aux entreprises qui ne sont pas dans une organisation syndicale
                d'être membre à part entière du patronat gabonais.
              </p>

              <p>
                En 1978, UNIGABON devenait la Confédération Patronale Gabonaise
                (CPG), appellation reflétant mieux le caractère patronal de
                l'organisation d'une part, sa composition multi-syndicale d'autre
                part. Au-delà de sa position de quasi-monopole, la FEG doit son
                statut autant à une longue histoire qu'à son implication
                grandissante auprès des décideurs et des partenaires sociaux.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Les présidents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Les Présidents de la FEG
            </h2>
            <p className="text-lg text-gray-600">
              Au fil des années, notre organisation a vu le passage de plusieurs
              présidents qui ont marqué leurs mandats
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {president.map((p, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-bronze-base/30"
              >
                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-xs font-bold text-bronze-base mb-1">
                    {p.period}
                  </p>
                  <h3 className="text-sm font-bold leading-tight line-clamp-2">
                    {p.name}
                  </h3>
                </div>

                {/* Bordure top bronze */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-bronze-base to-bronze-dark"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* 60 ans anniversaire */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 md:p-12 text-white shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <Award className="w-12 h-12 text-bronze-base" />
            <h2 className="text-3xl md:text-4xl font-bold">
              1959-2019 : 60 ans d'excellence
            </h2>
          </div>

          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              Dans le cadre de la commémoration de cet âge d'or et de raison, la
              plus puissante organisation patronale gabonaise a organisé, le
              vendredi 13 décembre 2019 à l'hôtel Radisson Blu de Libreville, une
              conférence débat sur le thème "L'entreprise gabonaise et
              l'intégration régionale" suivie d'un dîner gala.
            </p>

            <p className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              Cette première édition des Rencontres de la FEG, sponsorisée par
              Comilog, Total et Gabon Télécom, a réuni les adhérents de la FEG,
              le Premier ministre, Julien Nkoghé Békalé et plusieurs membres de
              son équipe, ainsi que les décideurs économiques du Gabon et de la
              sous-région.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Histoire;
