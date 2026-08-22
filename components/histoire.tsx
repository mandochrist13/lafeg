"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Timeline } from "@/components/ui/timeline";
import { HoverEffect } from "./ui/card-hover-effect";

export const president = [
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
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Création de l'Union Interprofessionnelle du Gabon (UNIGABON)
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Random file upload lol
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <section className="p-6 rounded-lg bg-[#f5f5f5]">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="">
            <div className="mb-16">
             
              {/* Timeline Cards - Version Simplifiée */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {[
                  {
                    year: "1959",
                    text: "Création de l'Union Interprofessionnelle du Gabon (UNIGABON)",
                  },
                  {
                    year: "1971",
                    text: "Réforme des statuts pour permettre aux entreprises non syndiquées de rejoindre le patronat.",
                  },
                  {
                    year: "1978",
                    text: "UNIGABON devient la Confédération Patronale Gabonaise, soit une fédération de syndicats ou d'entreprises.",
                  },
                  {
                    year: "2020",
                    text: "La CPG s'organise autour de 18 secteurs forts et réduit la taille de son Conseil d'Administration",
                  },
                  {
                    year: "2022",
                    text: "La CPG devient la FEG",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#063d21] transition-colors duration-300 shadow-sm hover:shadow-md relative"
                  >
                    {/* Année */}
                    <h3 className="text-2xl font-bold text-[#063d21] mb-3">
                      {item.year}
                    </h3>

                    {/* Texte */}
                    <p className="text-gray-600 pl-2 border-l-2 border-[#063d21]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="relative w-full overflow-clip">
                <Timeline data={data} />
              </div>

              {/* History Section */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-800">
                  Notre histoire
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Créé le 4 septembre 1959, sous l'appellation d'Union
                  Interprofessionnelle du Gabon (UNIGABON) le patronat gabonais
                  a connu plusieurs évolutions avec le souci constant de
                  s'adapter à son environnement.
                </p>

                <h3 className="text-2xl font-bold text-gray-800">
                  Chronologie de l'evolution du patronat gabonais
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Créé le 4 septembre 1959, sous l'appellation d'Union
                  Interprofessionnelle du Gabon (UNIGABON) le patronat gabonais
                  a connu plusieurs évolutions avec le souci constant de
                  s'adapter à son environnement.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  En octobre 1959, un mois après la création d'Unigabon,
                  plusieurs syndicats vont se constituer:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  {[
                    "le Syndicat des Entrepreneurs de Manutention du Gabon;",
                    "le Syndicat des Compagnies de Navigation et de Consignation de Navires du Gabon;",
                    "le Syndicat des Transitaires du Gabon;",
                    "le Syndicat des Transporteurs Fluviaux.",
                  ].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h4 className="text-xl font-bold text-gray-800">
                  Les années qui suivent verront l'apparition des groupements
                  suivants :
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    le Syndicat des Entreprises Minières du Gabon (1960) ;
                  </li>
                  <li>
                    le Syndicat des Négociants en Bois et Courtiers du Gabon
                    (1963).
                  </li>
                </ul>

                <p className="text-gray-600 leading-relaxed">
                  En 1971, une restriction de principes fut apportée pour
                  permettre aux entreprises qui ne sont pas dans une
                  organisation syndicale d'être membre à part entière du
                  patronat gabonais.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  En 1978, UNIGABON devenait la Confédération Patronale
                  Gabonaise (CPG), appellation reflétant mieux le caractère
                  patronal de l'organisation d'une part, sa composition multi
                  syndicale d'autre part. Au-delà de sa position de
                  quasi-monopole, la FEG doit son statut autant à une longue
                  histoire qu'à son implication grandissante auprès des
                  décideurs et des partenaires sociaux et à une crédibilité
                  reconnue par toutes les instances nationales et
                  internationales entretenant des rapports avec les entreprises.
                </p>

                {/* Presidents Section */}
                <h2 className="text-3xl font-bold text-gray-800 pt-8">
                  Les anciens présidents de la FEG
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Au fil des années, notre organisation a vu le passage de
                  plusieurs présidents qui ont tour à tour marqué leurs mandats.
                </p>

                <div className="max-w-5xl mx-auto px-8">
                  <HoverEffect
                    items={president.map((p) => ({
                      title: p.name,
                      description: p.period,
                      link: p.image, // If 'link' is meant to be a URL, otherwise use "#" or ""
                    }))}
                  />
                </div>

                {/* Anniversary Section */}
                <h2 className="text-3xl font-bold text-gray-800 pt-12">
                  1959-2019 : 60 ans et des défis pour la promotion de la PME
                  gabonaise
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Dans le cadre de la commémoration de cet âge d'or et de
                  raison, la plus puissante organisation patronale gabonaise a
                  organisé, le vendredi 13 décembre 2019 à l'hôtel Radisson Blu
                  de Libreville, une conférence débat sur le thème "L'entreprise
                  gabonaise et l'intégration régionale" suivie d'un dîner gala.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Cette première édition des Rencontres de la FEG, sponsorisée
                  par Comilog, Total et Gabon Télécom, a réuni les adhérents de
                  la FEG, le Premier ministre, Julien Nkoghé Békalé et plusieurs
                  membres de son équipe, ainsi que les décideurs économiques du
                  Gabon et de la sous-région, pour discuter des grands enjeux
                  économiques de demain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Histoire;
