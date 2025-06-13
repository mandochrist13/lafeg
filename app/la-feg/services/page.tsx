"use client";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Publications",
      description:
        "La FEG réalise une veille sur les réformes législatives, règlementaire, institutionnelles et macro-économiques. Elle met à disposition de ses membres des circulaires et une newsletter pour les tenir informés de l'actualité économique, sociale, nationale et internationale.",
      color: "bg-gray-100 border-[#006633]",
    },
    {
      title: "Formations",
      description:
        "La FEG propose à ses adhérents des cycles de formation en collaboration avec ses partenaires sur des thèmes en relation avec l'entreprise et l'actualité. Un cadre spécifique d'accompagnement est dédié aux entreprises du secteur informel et des Start-ups.",
      color: "bg-gray-100 border-[#006633]",
    },
    {
      title: "Dialogue Public-Privé",
      description:
        "La FEG maintient le dialogue public-privé pour la défense des intérêts de ses membres. Elle assure la représentation de ses adhérents au sein des différentes institutions nationales et internationales.",
      color: "bg-gray-100 border-[#006633]",
    },
    {
      title: "Réseau d'affaires",
      description:
        "La FEG offre une plateforme de rencontres permettant de saisir les opportunités d'affaires : Assemblées Générales, Forums, Salons, etc. Elle accompagne ses membres dans l'optimisation de leurs budgets.",
      color: "bg-gray-100 border-[#006633]",
    },
    {
      title: "Médiation et arbitrage",
      description:
        "La FEG offre aux entreprises un cadre de règlement des conflits à l'amiable, volontaire et confidentiel, entre membres ou avec des tiers, conforme aux intérêts des parties.",
      color: "bg-gray-100 border-[#006633]",
    },
  ];
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">NOS SERVICES</h1>
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
              <span className="text-[#f39c12] font-medium">Services</span>
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

          {/* Responsive Tabs */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-0">
              <a
                href="/la-feg"
                className="whitespace-nowrap bg-[#f39c12] text-white px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-[#e67e22] transition"
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
                href="/la-feg//histoire"
                className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition"
              >
                Notre histoire
              </a>
              <a
                href="/la-feg/valeurs"
                className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition"
              >
                Nos valeurs
              </a>
              <a
                href="/la-feg/missions"
                className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition"
              >
                Nos missions
              </a>
              <a
                href="/la-feg/services"
                className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition"
              >
                Nos services
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Services Cards */}
          <div className="lg:w-2/3">
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  className={`${service.color} border rounded-sm p-6  hover:shadow-md transition-shadow`}
                >
                  <div className="flex items-center mb-4">
                    <h3 className="text-xl font-bold text-[#006633]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="py-5 my-9 border-t border-gray-300">
              <button
                onClick={() => { 
                  // Ouvre le PDF dans un nouvel onglet
                  window.open("/Services.pdf", "_blank");
                }}
                className="px-6 py-3 bg-[#006633] text-white font-medium rounded-md transition-all duration-500 flex items-center mx-auto hover:bg-[#063d21]"
              >
                <span>Voir les details de nos services</span>
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

            {/* Partners Section */}
            <div className="bg-white rounded-xl shadow-md p-5">
              <h4 className="font-bold text-[#006633] mb-4">Nos partenaires</h4>
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
