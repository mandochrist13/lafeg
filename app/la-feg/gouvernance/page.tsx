"use client";
import Image from "next/image";
import Link from "next/link";

export default function LaFeg() {
  // Tableau d'objets pour les membres du Bureau Exécutif
  const bureauExecutif = [
    {
      id: 1,
      name: "Léod Paul BATOLO",
      role: "Vice-Président en charge de l'Industrie Minière",
      position: "Administrateur Directeur Général de COMILOG",
      image: "/images/membres/batolo.png",
    },
    {
      id: 2,
      name: "Isabelle ESSONGHE",
      role: "Vice-Présidente en charge du Commerce, des Services et de l'Artisanat",
      position: "Administratrice Directrice Générale, Groupe CECA-GADIS",
      image: "/images/membres/essonghe.jpg",
    },
    {
      id: 3,
      name: "Frédéric OBER",
      role: "Vice-Président en charge de l'industrie du Bois",
      position: "Directeur Général, Precious Woods - CEB",
      image: "/images/membres/ober.jpg",
    },
    {
      id: 4,
      name: "Sandrine ITOU-Y-MAGANGA",
      role: "Vice-Présidente en charge de la Santé et de la Protection Sociale",
      position: "Directrice Générale, Pharmacie du Commissariat Central",
      image: "/images/membres/itou-maganga.jpg",
    },
    {
      id: 5,
      name: "Dimitri NDJEBI",
      role: "Vice-Président en charge de la Compétitivité, du Développement Economique et de l'Inclusion Financière",
      position: "Directeur Général, BGFIBank Gabon",
      image: "/images/membres/ndjebi.jpg",
    },
    {
      id: 6,
      name: "Romain BOUTONNET",
      role: "Vice-Président en charge de l'Industrie et de la Transformation",
      position:
        "Président Directeur Général Compagnie du Komo / Administrateur Directeur Général, Groupe SOGAFRIC",
      image: "/images/membres/boutonnet.jpg",
    },
    {
      id: 7,
      name: "Christophe BLANC",
      role: "Vice-Président en charge de l'industrie Pétrolière et Gazière",
      position: "Directeur Général, PERENCO OIL & GAS GABON",
      image: "/images/membres/blanc.png",
    },
    {
      id: 8,
      name: "Seydou KANE",
      role: "Conseiller Stratégique du Président",
      position:
        "Président Directeur Général Consortium international des Travaux Publics",
      image: "/images/membres/kane.jpg",
    },
    {
      id: 9,
      name: "Erik WATREMEZ",
      role: "Vice-Président en charge du Conseil, du Développement Durable, de la RSE",
      position: "Directeur Général d'ERNST & YOUNG",
      image: "/images/membres/watremez.jpg",
    },
    {
      id: 10,
      name: "Jean-Baptiste BIKALOU",
      role: "Vice-Président en charge de l'Emploi, de la Formation, de la Communication, du Numérique et des Relations Internationales",
      position: "Président Directeur Général de Petro Gabon",
      image: "/images/membres/bikalou.jpg",
    },
    {
      id: 11,
      name: "Hélène ZOUA-ONDO",
      role: "Vice-Présidente en charge de la Fiscalité, de la Protection Judiciaire des Entreprises, des Relations Institutionnelles et du tourisme",
      position: "Présidente THINK TANK FISCAL",
      image: "/images/membres/zoua-ondo.jpg",
    },
  ];

  // Tableau d'objets pour les commissions permanentes
  const commissions = [
    {
      id: 1,
      name: "Nicolas CHEVRINAIS",
      role: "Juridique et Fiscale",
      image: "/images/membres/chevrinais.jpg",
    },
    {
      id: 2,
      name: "Murielle Natacha M'BOUNA",
      role: "Economie et Compétitivité",
      image: "/images/membres/mbouna.jpg",
    },
    {
      id: 3,
      name: "Ismaël NDIAYE",
      role: "Relations Internationales",
      image: "/images/membres/ndiaye.png",
    },
    {
      id: 4,
      name: "Yannick EBEBIE",
      role: "Création d'Entreprises",
      image: "/images/membres/ebebie.png",
    },
    {
      id: 5,
      name: "Benito NDONGO",
      role: "Gouvernance des Entreprises",
      image: "/images/membres/ndongo.png",
    },
    {
      id: 6,
      name: "Jean Marie NTOUTOUME",
      role: "Transition Ecologique",
      image: "/images/membres/ntoutoume.png",
    },
    {
      id: 7,
      name: "Eric BOUNDONO",
      role: "Développement des PME-PMI et Sous-traitance",
      image: "/images/membres/boundono.jpg",
    },
  ];

  // Tableau d'objets pour les comités
  const comites = [
    {
      id: 1,
      name: "Anaclet NGOUA",
      role: "Audit",
      image: "/images/membres/ngoua.png",
    },
    {
      id: 2,
      name: "Pr. Etienne NSIE",
      role: "Arbitrage",
      image: "/images/membres/nsie.png",
    },
    {
      id: 3,
      name: "Bernadette SANGARE OGOMBE",
      role: "Destination Gabon",
      image: "/images/membres/ogombe.jpg",
    },
    {
      id: 4,
      name: "Franck SIMA MBA",
      role: "Conformité des Mandats",
      image: "/images/membres/sima-mba.png",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-[#006633] text-white py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/banière.jpg"
            alt="Arrière-plan gouvernance"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            GOUVERNANCE
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
            <Link href="/" className="text-[#063d21] hover:text-[#063d21]/80">
              ACCUEIL
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-[#f39c12] font-medium">LA GOUVERNANCE</span>
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
                    className="whitespace-nowrap bg-[#f39c12] text-white px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-[#e67e22] transition"
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
            </section>

            {/* Bureau Exécutif Section */}
            <section className="bg-white rounded-xl  p-2 mb-10">
              <h3 className="text-2xl font-bold text-[#063d21] mb-6">
                Le Bureau Exécutif
              </h3>
              <div className="space-y-4 text-gray-700 mb-8">
                <p>
                  Depuis 2017, la FEG a entamé un processus de modernisation de
                  son organisation et de sa gouvernance pour s'adapter aux
                  enjeux de l'économie gabonaise.
                </p>
                <p>
                  Le Bureau Exécutif est l'organe qui a pour mission de conduire
                  l'action de la FEG pendant un mandat de 4 ans.
                </p>
                <p>
                  Le nouveau Bureau Exécutif (BUREX) est composé du Président de
                  la FEG, de 11 Vice-Présidents et de 1 conseiller.
                </p>
              </div>

              {/* Members Grid - Modern Version */}
              <div className="bg-white rounded-xl shadow-sm p-2 mb-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#063d21] relative inline-block pb-1">
                      Bureau Exécutif
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-[#e67e22]  rounded-full"></span>
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Les dirigeants de notre organisation
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-4 sm:px-0 mt-14">
                  {bureauExecutif.map((member) => (
                    <div
                      key={member.id}
                      className="group relative bg-white rounded-xl mt-10 p-6 shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100 hover:border-[#063d21]/20 text-center hover:-translate-y-1"
                    >
                      {/* Photo circulaire  */}
                      <div className="relative mx-auto -mt-16 mb-4 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl ring-2 ring-[#063d21]/10 group-hover:ring-[#063d21]/30 transition-all duration-500">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-fill transition-transform duration-700"
                        />
                      </div>

                      {/* Contenu texte */}
                      <div className="mt-2">
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#063d21] transition-colors">
                          {member.name}
                        </h4>
                        <p className="text-sm font-semibold text-[#e67e22] my-1">
                          {member.role}
                        </p>
                        {member.position && (
                          <p className="text-sm text-gray-600 mt-2 mb-3 line-clamp-2">
                            {member.position}
                          </p>
                        )}
                      </div>

                      {/* Éléments décoratifs */}
                      <div className="absolute top-0 right-0 w-14 h-14 bg-[#063d21]/5 rounded-bl-full transition-all duration-500 group-hover:bg-[#063d21]/10"></div>
                      <div className="absolute bottom-0 left-0 w-14 h-14 bg-[#e67e22]/5 rounded-tr-full transition-all duration-500 group-hover:bg-[#e67e22]/10"></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Commissions Permanentes Section */}
            <section className="bg-white rounded-xl p-6 mb-10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#063d21] relative inline-block pb-1">
                    Commissions Permanentes
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#e67e22] rounded-full"></span>
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
                {commissions.map((member) => (
                  <div
                    key={member.id}
                    className="group relative bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-[#063d21]/30 text-center"
                  >
                    <div className="relative  mx-auto -mt-12 mb-3 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover transition-transform duration-500"
                      />
                    </div>
                    <h4 className="font-bold text-gray-800 group-hover:text-[#063d21] transition-colors mt-2">
                      {member.name}
                    </h4>
                    <p className="text-sm text-transparent bg-clip-text bg-[#e67e22] font-medium my-1">
                      {member.role}
                    </p>
                    <div className="absolute top-0 right-0 w-12 h-12 bg-[#063d21]/5 rounded-bl-full"></div>
                  </div>
                ))}
              </div>
            </section>

            {/* Comités Section */}
            <section className="bg-white rounded-xl shadow-md p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#063d21] relative inline-block pb-1">
                    Comités Spécialisés
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#e67e22]  rounded-full"></span>
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {comites.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 hover:border-[#063d21]/50 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden shadow-sm">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[#063d21] truncate">
                        {member.name}
                      </h4>
                      <p className="text-sm text-gray-600 truncate">
                        {member.role}
                      </p>
                      <button className="text-xs text-[#063d21] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        En savoir plus
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
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
