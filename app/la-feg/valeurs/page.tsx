"use client";
import Image from "next/image";
import Link from "next/link";

export default function LaFeg() {
  const values = [
    "EXEMPLARITÉ ET CONDUITE",
    "RESPECT DES LOIS ET DES RÈGLEMENTS",
    "PARTAGE ET COHÉSION",
    "SOLIDARITÉ ET EMINENCE DU SECTEUR PRIVÉ",
  ];

  const partners = [
    { src: "/images/executive_club.png", alt: "Executive Club" },
    { src: "/images/iga.png", alt: "IGA" },
    { src: "/images/cch.png", alt: "CLUB CAPITAL HUMAIN" },
    { src: "/images/think_tank.png", alt: "Think Tank Fiscal" },
  ];

  return (
    <>
      {/* Hero Section without animated background */}
      <div className="relative bg-[#006633] text-white py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/banière.jpg"
            alt="Arrière-plan gouvernance"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            NOS VALEURS
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl opacity-90">
            Bâtir ensemble une économie forte pour garantir la souveraineté
            nationale. Notre institution contribue à un idéal commun : la
            performance des entreprises gabonaises.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="py-3">
          <div className="flex items-center text-sm">
            <Link
              href="/"
              className="text-[#063d21] hover:text-[#063d21]/80 transition-colors"
            >
              ACCUEIL
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-[#f39c12] font-medium">NOS VALEURS</span>
          </div>
        </nav>

        {/* Responsive Layout */}
        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          {/* Main Content - Left Side */}
          <div className="lg:w-2/3">
            {/* Introduction Section */}
            <section className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                Mieux connaître la FEG
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Bâtir ensemble une économie forte pour garantir la souveraineté
                nationale. Notre institution contribue à un idéal commun : la
                performance des entreprises gabonaises.
              </p>

              {/* Responsive Tabs */}
              <div className="mb-8 overflow-x-auto">
                <div className="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-0">
                  <Link
                    href="/la-feg"
                    className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition-all duration-300"
                  >
                    À propos
                  </Link>
                  <Link
                    href="/la-feg/president"
                    className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition-all duration-300"
                  >
                    Présidence
                  </Link>
                  <Link
                    href="/la-feg/gouvernance"
                    className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition-all duration-300"
                  >
                    Gouvernance
                  </Link>
                  <Link
                    href="/la-feg/histoire"
                    className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition-all duration-300"
                  >
                    Notre histoire
                  </Link>
                  <Link
                    href="/la-feg/valeurs"
                    className="whitespace-nowrap bg-[#f39c12] text-white px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-[#e67e22] transition-all duration-300 shadow-md"
                  >
                    Nos valeurs
                  </Link>
                  <Link
                    href="/la-feg/missions"
                    className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition-all duration-300"
                  >
                    Nos missions
                  </Link>
                  <Link
                    href="/la-feg/services"
                    className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition-all duration-300"
                  >
                    Nos services
                  </Link>
                </div>
              </div>
            </section>

            {/* Values Card without animation */}
            <div className="bg-gray-200 rounded-md  overflow-hidden mb-8 lg:mb-0">
              <div className="p-8">
                <div className="text-2xl font-bold text-[#006633] mb-6 border-b-2 border-[#f39c12] pb-2">
                  Charte des valeurs et code éthique
                </div>
                <p className="text-gray-800 text-lg mb-8">
                  La FEG a un rôle de modèle et d'exemplarité envers ses
                  partenaires, syndicats de travailleurs, administrations,
                  groupements associatifs professionnels et collaborateurs. Elle
                  véhicule une image d'excellence et de respectabilité.
                </p>

                <ul className="space-y-4 mb-8">
                  {values.map((value) => (
                    <li
                      key={value}
                      className="flex items-center bg-white p-4 rounded-lg  "
                    >
                      <div className="flex-shrink-0 bg-[#006633] p-2 rounded-full">
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
                      </div>
                      <span className="ml-4 text-gray-800 font-medium">
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-300">
                  <button
                    onClick={() => {
                      // Ouvre le PDF dans un nouvel onglet
                      window.open("/CHARTE_FEG.pdf", "_blank");
                    }}
                    className="px-6 py-3 bg-[#006633] text-white font-medium rounded-md transition-all duration-500 flex items-center mx-auto hover:bg-[#063d21]"
                  >
                    <span>Consulter notre charte</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
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
              <h4 className="font-bold text-[#063d21] mb-4">Nos partenaires</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: "/images/executive_club.png", alt: "Executive Club" },
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
    </>
  );
}
