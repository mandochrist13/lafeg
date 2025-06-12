"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LaFeg() {
  // const [activeTab, setActiveTab] = useState("a-propos");

  // const tabs = [
  //   { id: "a-propos", label: "À propos" },
  //   { id: "gouvernance", label: "Gouvernance" },
  //   { id: "histoire", label: "Notre histoire" },
  //   { id: "valeurs", label: "Nos valeurs" },
  //   { id: "missions", label: "Nos missions" },
  //   { id: "services", label: "Nos services" },
  // ];

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

        {/* Content with modern typography */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Le Président de la FEG{" "}
              <span className="text-[#f8c537]">Alain-Claude KOUAKOUA</span>
            </h1>
            <p className="text-xl max-w-3xl opacity-90">
              Bâtir ensemble une économie forte pour garantir la souveraineté
              nationale. Notre institution contribue à un idéal commun : la
              performance des entreprises gabonaises.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb with modern style */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/"
              className="text-[#006633] hover:text-[#f8c537] transition-colors duration-200"
            >
              ACCUEIL
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#f8c537] font-medium">
              Présidence
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Mieux connaître la FEG
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Bâtir ensemble une économie forte pour garantir la souveraineté
            nationale. Notre institution contribue à un idéal commun : la
            performance des entreprises gabonaises.
          </p>
        </div>

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
              className="whitespace-nowrap  bg-[#f39c12]  text-gray-200 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-[#e67e22] transition"
            >
              Présidence
            </a>
            <a
              href="/la-feg/gouvernance"
              className="whitespace-nowrap text-gray-700 bg-gray-200 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm  hover:bg-gray-300 transition"
            >
              Gouvernance
            </a>
            <a
              href="/la-feg/histoire"
              className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition"
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

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#006633] mb-6 leading-tight">
                  Notre institution contribue à un idéal commun :{" "}
                  <span className="text-[#f8c537]">
                    la performance des entreprises gabonaises
                  </span>
                </h3>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-base md:text-lg">
                    Alain-Claude Kouakoua est à présent le leader du patronat
                    gabonais, reconnu pour son influence grandissante au sein de
                    la Fédération des Entreprises du Gabon (FEG) et pour ses
                    engagements dans des secteurs essentiels tels que la
                    logistique, le transport, la construction et les
                    infrastructures. Il succède à Henri-Claude Oyima, qui occupe
                    désormais le poste de ministre d'État.
                  </p>

                  <p className="text-base md:text-lg">
                    Né en 1960, Alain Claude KOUAKOUA, originaire de Lambaréné,
                    entame sa carrière dans le monde des affaires en fondant
                    Mika Transports, une entreprise spécialisée dans le
                    transport et la distribution de produits pétroliers et de
                    gaz. Quelques années plus tard, il prend la direction d'une
                    nouvelle société, Mika Services, qui regroupe en son sein,
                    en plus des hydrocarbures, des activités de BTP.Kouakoua est
                    le Président Directeur Général du groupe ACK, un conglomérat
                    actif dans le domaine du BTP, du transport et de la
                    logistique. Il a également exercé en tant que vice-président
                    de la FEG, chargé du corridor logistique, de la logistique,
                    du transport et de la fédération des métiers de la
                    construction.
                  </p>
                </div>

                {/* Modern Quote Card */}
                <div className="mt-8 p-6 bg-gradient-to-r from-[#f8f9fa] to-[#f1f3f5] rounded-lg border-l-4 border-[#f8c537]">
                  <h4 className="text-[#006633] font-bold text-lg mb-1">
                    Alain-Claude KOUAKOUA
                  </h4>
                  <p className="text-gray-600">Président de La FEG</p>
                </div>
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
              <h4 className="text-[#006d40] font-bold text-lg sm:text-xl mb-1">
                Alain-Claude KOUAKOUA
              </h4>
              <p className="text-gray-700 font-medium mb-2 text-sm sm:text-base">
                Président de La FEG
              </p>
              <p className="text-gray-600 text-xs sm:text-sm italic mb-4 bg-gray-50 p-3 rounded-lg border-l-2 border-[#f39c12]">
                "Bâtissons ensemble une économie forte pour garantir la
                souveraineté nationale"
              </p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
