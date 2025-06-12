"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HistoryPage: React.FC = () => {
  return (
    <>
      <div className="relative bg-[#006633] text-white py-20">
        {/* Image d'arrière-plan avec overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/banière.jpg"
            alt="Arrière-plan entreprises membres"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Contenu par-dessus l'image */}
        <div className="container mx-auto px-4 relative z-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            NOTRE HISTOIRE
          </h1>
          <p className="text-xl max-w-3xl opacity-90">
            Bâtir ensemble une économie forte pour garantir la souveraineté
            nationale. Notre institution contribue à un idéal commun : la
            performance des entreprises gabonaises.
          </p>
        </div>
      </div>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="text-sm">
              <ol className="flex space-x-2 text-gray-600">
                <li>
                  <a
                    href="/"
                    className="text-[#063d21] hover:text-[#16412a] transition-colors"
                  >
                    Accueil
                  </a>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-500">Notre histoire</li>
              </ol>
            </nav>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Mieux connaître la FEG
            </h2>
            <p className="text-gray-700 mb-6">
              Bâtir ensemble une économie forte pour garantir la souveraineté
              nationale. Notre institution contribue à un idéal commun : la
              performance des entreprises gabonaises.
            </p>

            {/* Responsive Tabs */}
            <div className="mb-8 overflow-x-auto">
              <div className="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-0">
                <a
                  href="/la-feg"
                  className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition"
                >
                  À propos
                </a>
                <a
                  href="/la-feg/president"
                  className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition"
                >
                  Présidence
                </a>
                <a
                  href="/la-feg/gouvernance"
                  className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition"
                >
                  Gouvernance
                </a>
                <a
                  href="/la-feg/histoire"
                  className="whitespace-nowrap bg-[#f39c12] text-white px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-[#e67e22] transition"
                >
                  Notre histoire
                </a>
                <a
                  href="/valeurs"
                  className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition"
                >
                  Nos valeurs
                </a>
                <a
                  href="/missions"
                  className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition"
                >
                  Nos missions
                </a>
                <a
                  href="/services"
                  className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition"
                >
                  Nos services
                </a>
              </div>
            </div>
          </section>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Mieux connaître la FEG
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Bâtir ensemble une économie forte pour garantir la
                  souveraineté nationale. Notre institution contribue à un idéal
                  commun : la performance des entreprises gabonaises.
                </p>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Dates clés de la FEG
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Découvrez les dates clés de notre organisation en plus de 60
                  années d'existence. Ces principales dates ont profondément
                  marqué notre histoire.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Le nouveau Bureau Exécutif (BUREX) est composé du Président de
                  la FEG, de 8 Vice-Présidents et de 1 conseiller. Il s'agit ici
                  d'un Conseiller Stratégique du Président, représentant 18
                  fédérations ou secteurs d'activités de l'économie gabonaise.
                </p>

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

                {/* History Section */}
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-800">
                    Notre histoire
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Créé le 4 septembre 1959, sous l'appellation d'Union
                    Interprofessionnelle du Gabon (UNIGABON) le patronat
                    gabonais a connu plusieurs évolutions avec le souci constant
                    de s'adapter à son environnement.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-800">
                    Chronologie de l'evolution du patronat gabonais
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Créé le 4 septembre 1959, sous l'appellation d'Union
                    Interprofessionnelle du Gabon (UNIGABON) le patronat
                    gabonais a connu plusieurs évolutions avec le souci constant
                    de s'adapter à son environnement.
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
                    internationales entretenant des rapports avec les
                    entreprises.
                  </p>

                  {/* Presidents Section */}
                  <h2 className="text-3xl font-bold text-gray-800 pt-8">
                    Les anciens présidents de la FEG
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Au fil des années, notre organisation a vu le passage de
                    plusieurs présidents qui ont tour à tour marqué leurs
                    mandats.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {[
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
                ].map((president, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#063d21]/30 group"
                  >
                    <div className="relative">
                      <div className="aspect-w-3 aspect-h-4 bg-gray-50">
                        <img
                          src={president.image || "/placeholder.svg"}
                          alt={president.name}
                          className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = "/images/placeholder-profile.jpg"
                          }}
                        />
                      </div>
                      <div className="absolute top-2 right-2">
                        
                      </div>
                    </div>
                    <div className="p-4 border-t border-gray-100">
                      <h3 className="font-bold text-gray-800 group-hover:text-[#063d21] transition-colors">
                        {president.name}
                      </h3>
                      <span className="text-[#063d21] text-sm font-medium mt-1 inline-block">{president.period}</span>
                    </div>
                  </div>
                ))}
              </div>

                  {/* Anniversary Section */}
                  <h2 className="text-3xl font-bold text-gray-800 pt-12">
                    1959-2019 : 60 ans et des défis pour la promotion de la PME
                    gabonaise
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Dans le cadre de la commémoration de cet âge d'or et de
                    raison, la plus puissante organisation patronale gabonaise a
                    organisé, le vendredi 13 décembre 2019 à l'hôtel Radisson
                    Blu de Libreville, une conférence débat sur le thème
                    "L'entreprise gabonaise et l'intégration régionale" suivie
                    d'un dîner gala.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Cette première édition des Rencontres de la FEG, sponsorisée
                    par Comilog, Total et Gabon Télécom, a réuni les adhérents
                    de la FEG, le Premier ministre, Julien Nkoghé Békalé et
                    plusieurs membres de son équipe, ainsi que les décideurs
                    économiques du Gabon et de la sous-région, pour discuter des
                    grands enjeux économiques de demain.
                  </p>
                </div>
              </div>
            </div>
            {/* Right Sidebar - Full width on mobile, 1/3 on desktop */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              {/* President Card */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-100">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/images/Mr_KOUAKOUA.jpg"
                    alt="Alain-Claude KOUAKOUA"
                    width={300}
                    height={400}
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                    layout="responsive"
                  />
                </div>
                <h4 className="text-[#063d21] font-bold text-lg sm:text-xl mb-1">
                  Alain-Claude KOUAKOUA
                </h4>
                <p className="text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Président de La FEG
                </p>
                <p className="text-gray-600 text-xs sm:text-sm italic mb-4 bg-gray-50 p-3 rounded-lg border-l-2 border-[#e67e22]">
                  "Bâtissons ensemble une économie forte pour garantir la
                  souveraineté nationale"
                </p>
                <div></div>
              </div>

              {/* Partners Section */}
              <div className="bg-white rounded-xl shadow-md p-5">
                <h4 className="font-bold text-[#063d21] mb-4">
                  Nos partenaires
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      src: "/images/executive_club.png",
                      alt: "Executive Club",
                    },
                    { src: "/images/iga.png", alt: "IGA" },
                    { src: "/images/cch.png", alt: "CLUB CAPITAL HUMAIN" },
                    { src: "/images/think_tank.png", alt: "Think Tank Fiscal" },
                  ].map((partner) => (
                    <div
                      key={partner.alt}
                      className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center hover:shadow-sm transition-shadow h-20"
                    >
                      <Image
                        src={partner.src}
                        alt={partner.alt}
                        width={120}
                        height={60}
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HistoryPage;
