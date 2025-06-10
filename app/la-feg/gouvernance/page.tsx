"use client";
import Image from "next/image";
import Link from "next/link";

export default function LaFeg() {
  // Tableau d'objets pour les membres du Bureau Exécutif
  const bureauExecutif = [
    {
      id: 1,
      name: "Alain-Claude KOUAKOUA",
      role: "Président de la FEG",
      position: "",
      image: "/images/membres/kouakoua.jpg",
    },
    {
      id: 2,
      name: "Léod Paul BATOLO",
      role: "Vice-Président en charge de l'Industrie Minière",
      position: "Administrateur Directeur Général de COMILOG",
      image: "/images/membres/batolo.jpg",
    },
    {
      id: 3,
      name: "Isabelle ESSONGHE",
      role: "Vice-Présidente en charge du Commerce, des Services et de l'Artisanat",
      position: "Administratrice Directrice Générale, Groupe CECA-GADIS",
      image: "/images/membres/essonghe.jpg",
    },
    {
      id: 4,
      name: "Frédéric OBER",
      role: "Vice-Président en charge de l'industrie du Bois",
      position: "Directeur Général, Precious Woods - CEB",
      image: "/images/membres/ober.jpg",
    },
    {
      id: 5,
      name: "Sandrine ITOU-Y-MAGANGA",
      role: "Vice-Présidente en charge de la Santé et de la Protection Sociale",
      position: "Directrice Générale, Pharmacie du Commissariat Central",
      image: "/images/membres/itou-maganga.jpg",
    },
    {
      id: 6,
      name: "Dimitri NDJEBI",
      role: "Vice-Président en charge de la Compétitivité, du Développement Economique et de l'Inclusion Financière",
      position: "Directeur Général, BGFIBank Gabon",
      image: "/images/membres/ndjebi.jpg",
    },
    {
      id: 7,
      name: "Romain BOUTONNET",
      role: "Vice-Président en charge de l'Industrie et de la Transformation",
      position:
        "Président Directeur Général Compagnie du Komo / Administrateur Directeur Général, Groupe SOGAFRIC",
      image: "/images/membres/boutonnet.jpg",
    },
    {
      id: 8,
      name: "Christophe BLANC",
      role: "Vice-Président en charge de l'industrie Pétrolière et Gazière",
      position: "Directeur Général, PERENCO OIL & GAS GABON",
      image: "/images/membres/blanc.jpg",
    },
    {
      id: 9,
      name: "Seydou KANE",
      role: "Conseiller Stratégique du Président",
      position:
        "Président Directeur Général Consortium international des Travaux Publics",
      image: "/images/membres/kane.jpg",
    },
    {
      id: 10,
      name: "Erik WATREMEZ",
      role: "Vice-Président en charge du Conseil, du Développement Durable, de la RSE",
      position: "Directeur Général d'ERNST & YOUNG",
      image: "/images/membres/watremez.jpg",
    },
    {
      id: 11,
      name: "Jean-Baptiste BIKALOU",
      role: "Vice-Président en charge de l'Emploi, de la Formation, de la Communication, du Numérique et des Relations Internationales",
      position: "Président Directeur Général de Petro Gabon",
      image: "/images/membres/bikalou.jpg",
    },
    {
      id: 12,
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
      image: "/images/membres/ndiaye.jpg",
    },
    {
      id: 4,
      name: "Yannick EBEBIE",
      role: "Création d'Entreprises",
      image: "/images/membres/ebebie.jpg",
    },
    {
      id: 5,
      name: "Benito NDONGO",
      role: "Gouvernance des Entreprises",
      image: "/images/membres/ndongo.jpg",
    },
    {
      id: 6,
      name: "Jean Marie NTOUTOUME",
      role: "Transition Ecologique",
      image: "/images/membres/ntoutoume.jpg",
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
      image: "/images/membres/ngoua.jpg",
    },
    {
      id: 2,
      name: "Pr. Etienne NSIE",
      role: "Arbitrage",
      image: "/images/membres/nsie.jpg",
    },
    {
      id: 3,
      name: "Bernadette SANGARE OGOMBE",
      role: "Destination Gabon",
      image: "/images/membres/ogombe.jpg",
    },
    {
      id: 4,
      name: "Jean-Pierre BOZEC",
      role: "Ethique et Déontologie des Affaires",
      image: "/images/membres/bozec.jpg",
    },
    {
      id: 5,
      name: "Claude AKOULOU EYELEKO",
      role: "Education, Formation Compétence",
      image: "/images/membres/eyeleyo.jpg",
    },
    {
      id: 6,
      name: "Stéphane MOUSSIROU",
      role: "Santé et Prévoyance Sociale",
      image: "/images/membres/moussirou.jpg",
    },
    {
      id: 7,
      name: "Franck SIMA MBA",
      role: "Conformité des Mandats",
      image: "/images/membres/sima-mba.jpg",
    },
  ];

  return (
    <>
      <div className="relative bg-[#006633] text-white py-20">
        {/* Image d'arrière-plan avec overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/1ermai.jpg"
            alt="Arrière-plan gouvernance"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Contenu par-dessus l'image */}
        <div className="container mx-auto px-4 relative z-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GOUVERNANCE</h1>
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
              <span className="text-[#f39c12] font-medium">LA GOUVERNANCE</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Left Content */}
          <div className="lg:w-2/3">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                Mieux connaître la FEG
              </h2>
              <p className="text-gray-700 mb-6">
                Bâtir ensemble une économie forte pour garantir la souveraineté
                nationale. Notre institution contribue à un idéal commun : la
                performance des entreprises gabonaises.
              </p>

              {/* Tabs */}
              <div className="mb-8">
                <div className="hidden sm:flex flex-wrap">
                  <a
                    href="/la-feg"
                    className="bg-gray-200 text-gray-700 px-6 py-3 font-medium text-sm hover:bg-gray-300 transition"
                  >
                    À propos
                  </a>
                  <a
                    href="/la-feg/gouvernance"
                    className="bg-[#f39c12] text-white px-6 py-3 font-medium text-sm hover:bg-[#e67e22] transition"
                  >
                    Gouvernance
                  </a>
                  <a
                    href="/histoire"
                    className="bg-gray-200 text-gray-700 px-6 py-3 font-medium text-sm hover:bg-gray-300 transition"
                  >
                    Notre histoire
                  </a>
                  <a
                    href="/valeurs"
                    className="bg-gray-200 text-gray-700 px-6 py-3 font-medium text-sm hover:bg-gray-300 transition"
                  >
                    Nos valeurs
                  </a>
                  <a
                    href="/missions"
                    className="bg-gray-200 text-gray-700 px-6 py-3 font-medium text-sm hover:bg-gray-300 transition"
                  >
                    Nos missions
                  </a>
                  <a
                    href="/services"
                    className="bg-gray-200 text-gray-700 px-6 py-3 font-medium text-sm hover:bg-gray-300 transition"
                  >
                    Nos services
                  </a>
                </div>
              </div>
            </div>

            {/* Bureau Exécutif Section */}
            <div className="bg-white shadow-md p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-[#006633] mb-6">
                Le Bureau Exécutif
              </h3>
              <p className="text-gray-700 mb-6">
                Depuis 2017, la FEG a entamé un processus de modernisation de
                son organisation et de sa gouvernance pour s'adapter aux enjeux
                de l'économie gabonaise. Le Bureau Exécutif est l'organe qui a
                pour mission de conduire l'action de la FEG pendant un mandat de
                4 ans.
              </p>
              <p className="text-gray-700 mb-6">
                Le nouveau Bureau Exécutif (BUREX) est composé du Président de
                la FEG, de 11 Vice-Présidents et de 1 conseiller. Il s'agit ici
                d'un Conseiller Stratégique du Président, représentant 12
                fédérations ou secteurs d'activités de l'économie gabonaise.
              </p>

              {/* Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bureauExecutif.map((member) => (
                  <div
                    key={member.id}
                    className="border border-gray-200 p-4 rounded-lg flex items-start gap-4"
                  >
                    <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#006633]">
                        {member.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">
                        {member.role}
                      </p>
                      {member.position && (
                        <p className="text-xs text-gray-500">
                          {member.position}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Commissions Permanentes Section */}
            <div className="bg-white shadow-md p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-[#006633] mb-6">
                Les présidents des commissions permanentes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commissions.map((member) => (
                  <div
                    key={member.id}
                    className="border border-gray-200 p-3 rounded-lg flex items-center gap-3"
                  >
                    <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#006633]">
                        {member.name}
                      </h4>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comités Section */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#006633] mb-6">
                Les présidents des comités
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {comites.map((member) => (
                  <div
                    key={member.id}
                    className="border border-gray-200 p-3 rounded-lg flex items-center gap-3"
                  >
                    <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#006633]">
                        {member.name}
                      </h4>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-1/3">
            {/* President Card */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/Mr_KOUAKOUA.jpg"
                  alt="Alain-Claude KOUAKOUA"
                  width={300}
                  height={400}
                  className="w-full h-auto"
                  layout="responsive"
                />
              </div>
              <h4 className="text-[#006633] font-bold text-lg mb-1">
                Alain-Claude KOUAKOUA
              </h4>
              <p className="text-gray-700 font-medium mb-2">
                Président de La FEG
              </p>
              <p className="text-gray-600 text-sm italic mb-4 bg-gray-50 p-3 rounded-lg border-l-2 border-[#f39c12]">
                "Bâtissons ensemble une économie forte pour garantir la
                souveraineté nationale"
              </p>
              <Link
                href="#"
                className="text-[#006633] text-sm font-medium hover:underline"
              >
                Lire la biographie
              </Link>
            </div>

            {/* Partners */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { src: "/images/executive_club.png", alt: "Executive Club" },
                { src: "/images/iga.png", alt: "IGA" },
                { src: "/images/cch.png", alt: "CLUB CAPITAL HUMAIN" },
                { src: "/images/think_tank.png", alt: "Think Tank Fiscal" },
              ].map((partner) => (
                <div
                  key={partner.alt}
                  className="border p-4 flex items-center justify-center bg-gray-50 rounded-lg hover:shadow-md transition-shadow h-full"
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
    </>
  );
}
