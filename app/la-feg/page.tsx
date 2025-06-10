"use client";
import Image from "next/image";
import Link from "next/link";

export default function LaFeg() {
  return (
    <>
      <div className="relative bg-[#006633] text-white py-20">
        {/* Image d'arrière-plan avec overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/1ermai.jpg"
            alt="Arrière-plan entreprises membres"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Contenu par-dessus l'image */}
        <div className="container mx-auto px-4 relative z-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            A PROPOS DE NOUS
          </h1>
          <p className="text-xl max-w-3xl opacity-90">
            Bâtir ensemble une économie forte pour garantir la souveraineté
            nationale. Notre institution contribue à un idéal commun : la
            performance des entreprises gabonaises.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="bg-white shadow-sm py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm">
              <Link href="/" className="text-[#006633] hover:text-[#004d26]">
                ACCUEIL
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-[#f39c12] font-medium">
                ENTREPRISES MEMBRES
              </span>
            </div>
          </div>
        </div>
        {/* Left Content */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
            Mieux connaître la FEG
          </h2>
          <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">
            Bâtir ensemble une économie forte pour garantir la souveraineté
            nationale. Notre institution contribue à un idéal commun : la
            performance des entreprises gabonaises.
          </p>

          {/* Tabs - Responsive */}
          <div className="mb-6 sm:mb-8">
            {/* Mobile Tabs - Dropdown style */}
            <div className="sm:hidden">
              <select
                className="w-full border border-gray-300 rounded px-3 py-2 bg-[#f39c12] text-white"
                onChange={(e) => (window.location.href = e.target.value)}
              >
                <option value="/la-feg">À propos</option>
                <option value="/la-feg/gouvernance">Gouvernance</option>
                <option value="/histoire">Notre histoire</option>
                <option value="/valeurs">Nos valeurs</option>
                <option value="/missions">Nos missions</option>
                <option value="/services">Nos services</option>
              </select>
            </div>

            {/* Desktop/Tablet Tabs */}
            <div className="hidden sm:flex flex-wrap">
              <a
                href="/a-propos"
                className="bg-[#f39c12] text-white px-3 md:px-6 py-2 md:py-3 font-medium text-xs md:text-sm hover:bg-[#e67e22] transition"
              >
                À propos
              </a>
              <a
                href="/gouvernance"
                className="bg-gray-200 text-gray-700 px-3 md:px-6 py-2 md:py-3 font-medium text-xs md:text-sm hover:bg-gray-300 transition"
              >
                Gouvernance
              </a>
              <a
                href="/histoire"
                className="bg-gray-200 text-gray-700 px-3 md:px-6 py-2 md:py-3 font-medium text-xs md:text-sm hover:bg-gray-300 transition"
              >
                Notre histoire
              </a>
              <a
                href="/valeurs"
                className="bg-gray-200 text-gray-700 px-3 md:px-6 py-2 md:py-3 font-medium text-xs md:text-sm hover:bg-gray-300 transition"
              >
                Nos valeurs
              </a>
              <a
                href="/missions"
                className="bg-gray-200 text-gray-700 px-3 md:px-6 py-2 md:py-3 font-medium text-xs md:text-sm hover:bg-gray-300 transition"
              >
                Nos missions
              </a>
              <a
                href="/services"
                className="bg-gray-200 text-gray-700 px-3 md:px-6 py-2 md:py-3 font-medium text-xs md:text-sm hover:bg-gray-300 transition"
              >
                Nos services
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Takes full width on mobile, 2/3 on desktop */}
          <div className="lg:w-2/3">
            <div className="border-t-4 border-[#fff] pt-6 sm:pt-8 rounded-lg bg-white shadow-md p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006d40] mb-3 sm:mb-4 leading-tight">
                Notre institution contribue à un idéal commun :
                <br className="hidden sm:block" />
                
                  la performance des entreprises gabonaises
               
              </h3>

              <div className="space-y-4 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                <p>
                  La Fédération des Entreprises du Gabon (FEG) est un acteur
                  incontournable de l'économie gabonaise, dont les membres
                  représentent et produisent à ce jour près de{" "}
                  <span className="font-semibold">80% du PIB</span> et plus de{" "}
                  <span className="font-semibold">90% de la main d'œuvre</span>{" "}
                  formelle de notre pays. Ce site internet nous donne
                  l'opportunité d'en valoriser la modernisation, en cours depuis
                  2017, et qui vise à la rendre plus inclusive, innovante, et
                  donc performante en tant que force de proposition aux côtés du
                  gouvernement et des organisations de travailleurs partenaires
                  dans le cadre du dialogue social tripartite prôné par
                  l'Organisation Internationale du Travail.
                </p>

                <p>
                  C'est dans cet élan de modernité que nous sommes heureux de
                  vous proposer une plateforme qui a pour ambition de renforcer
                  le rayonnement de notre organisation, en rassemblant nos
                  actualités, nos réflexions sur les nombreux enjeux du moment
                  susceptibles d'affecter le climat des affaires de demain.
                  C'est donc avec un immense plaisir que nous vous souhaitons
                  une agréable navigation.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 sm:p-6 mt-6 sm:mt-8 rounded-lg border-l-4 border-[#006d40] shadow-sm">
                <h4 className="text-[#006d40] font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                  Alain-Claude KOUAKOUA
                </h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  Président de La FEG
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

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              {[
                { src: "/images/executive_club.png", alt: "Executive Club" },
                { src: "/images/iga.png", alt: "IGA" },
                { src: "/images/cch.png", alt: "CCH" },
                { src: "/images/think_tank.png", alt: "Think Tank Fiscal" },
              ].map((partner) => (
                <div
                  key={partner.alt}
                  className="border p-3 sm:p-4 flex items-center justify-center bg-gray-50 rounded-lg hover:shadow-md transition-shadow h-full"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={120} // Largeur de base de l'image en pixels (doit correspondre au ratio souhaité)
                    height={60} // Hauteur de base de l'image en pixels (doit correspondre au ratio souhaité)
                    className="h-10 sm:h-12 lg:h-14 w-auto transition-transform object-contain" // Ajout de object-contain pour bien ajuster l'image
                     priority={false} // Optionnel : ne priorise pas le chargement si ce ne sont pas des images LCP
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
