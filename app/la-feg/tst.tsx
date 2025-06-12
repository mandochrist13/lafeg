"use client";
import Image from "next/image";
import Link from "next/link";

export default function LaFeg() {
  const services = [
    {
      title: "Publications",
      icon: "📰",
      description: "La FEG réalise une veille sur les réformes législatives, règlementaire, institutionnelles et macro-économiques. Elle met à disposition de ses membres des circulaires et une newsletter pour les tenir informés de l'actualité économique, sociale, nationale et internationale.",
      color: "bg-blue-50 border-blue-100"
    },
    {
      title: "Formations",
      icon: "🎓",
      description: "La FEG propose à ses adhérents des cycles de formation en collaboration avec ses partenaires sur des thèmes en relation avec l'entreprise et l'actualité. Un cadre spécifique d'accompagnement est dédié aux entreprises du secteur informel et des Start-ups.",
      color: "bg-green-50 border-green-100"
    },
    {
      title: "Dialogue Public-Privé",
      icon: "🤝",
      description: "La FEG maintient le dialogue public-privé pour la défense des intérêts de ses membres. Elle assure la représentation de ses adhérents au sein des différentes institutions nationales et internationales.",
      color: "bg-purple-50 border-purple-100"
    },
    {
      title: "Réseau d'affaires",
      icon: "🌐",
      description: "La FEG offre une plateforme de rencontres permettant de saisir les opportunités d'affaires : Assemblées Générales, Forums, Salons, etc. Elle accompagne ses membres dans l'optimisation de leurs budgets.",
      color: "bg-orange-50 border-orange-100"
    },
    {
      title: "Médiation et arbitrage",
      icon: "⚖️",
      description: "La FEG offre aux entreprises un cadre de règlement des conflits à l'amiable, volontaire et confidentiel, entre membres ou avec des tiers, conforme aux intérêts des parties.",
      color: "bg-red-50 border-red-100"
    }
  ];

  const partners = [
    { src: "/images/executive_club.png", alt: "Executive Club" },
    { src: "/images/iga.png", alt: "IGA" },
    { src: "/images/cch.png", alt: "CLUB CAPITAL HUMAIN" },
    { src: "/images/think_tank.png", alt: "Think Tank Fiscal" },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-[#006633] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banière.jpg"
            alt="Arrière-plan entreprises membres"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            NOS SERVICES
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Bâtir ensemble une économie forte pour garantir la souveraineté
            nationale. Notre institution contribue à un idéal commun : la
            performance des entreprises gabonaises.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center text-sm md:text-base">
            <Link href="/" className="text-[#006633] hover:text-[#004d26] hover:underline">
              ACCUEIL
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-[#f39c12] font-medium">Services</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Navigation Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2">
            {[
              { name: "À propos", href: "/la-feg" },
              { name: "Présidence", href: "/la-feg/president" },
              { name: "Gouvernance", href: "/la-feg/gouvernance" },
              { name: "Notre histoire", href: "/la-feg/histoire" },
              { name: "Nos valeurs", href: "/la-feg/valeurs" },
              { name: "Nos missions", href: "/la-feg/missions" },
              { name: "Nos services", href: "/la-feg/services", active: true },
            ].map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                className={`px-5 py-3 rounded-lg font-medium transition-all ${tab.active 
                  ? "bg-[#f39c12] text-white shadow-md" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Services Cards */}
          <div className="lg:w-2/3">
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`${service.color} border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{service.icon}</span>
                    <h3 className="text-xl font-bold text-[#006633]">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* President Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="relative h-64">
                <Image
                  src="/images/Mr_KOUAKOUA.jpg"
                  alt="Alain-Claude KOUAKOUA"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#006633] mb-2">
                  Alain-Claude KOUAKOUA
                </h4>
                <p className="text-gray-700 font-medium mb-4">
                  Président de La FEG
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#f39c12]">
                  <p className="text-gray-600 italic">
                    "Bâtissons ensemble une économie forte pour garantir la
                    souveraineté nationale"
                  </p>
                </div>
              </div>
            </div>

            {/* Partners Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-lg font-bold text-[#006633] mb-4">Nos partenaires</h4>
              <div className="grid grid-cols-2 gap-4">
                {partners.map((partner) => (
                  <div
                    key={partner.alt}
                    className="p-4 bg-gray-50 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={120}
                      height={60}
                      className="h-12 w-auto object-contain"
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












 {/* Main Content - Takes full width on mobile, 2/3 on desktop */}
          <div className="lg:w-2/3 mb-8">
            <div className="border-t-4 border-[#fff] pt-6 sm:pt-8 rounded-lg bg-gray-200 shadow-md p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006d40] mb-3 sm:mb-4 leading-tight">
                Publications
              </h3>

              <div className="space-y-4 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                <p>
                  La FEG réalise une veille sur les réformes législatives,
                  règlementaire, institutionnelles et macri-économiques. Elle
                  met à disposition de ses membres des circulaires et une
                  newsletter pour les tenir informés de l'actualité économique,
                  sociale, nationale et internationale.
                </p>
              </div>
            </div>
            <div className="border-t-4 border-[#fff] pt-6 sm:pt-8 rounded-lg bg-gray-200 shadow-md p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006d40] mb-3 sm:mb-4 leading-tight">
                Formations
              </h3>

              <div className="space-y-4 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                <p>
                  La FEG propose à ses adhérents des cycles de formation en
                  collaboration avec ses partenaires : l'Exécutive Club,
                  l'Institut Gabonais d'Administrateur et le Centre d'Arbitrage,
                  les centres de formations professionnels publics et privés sur
                  des thèmes en relation avec l'entreprise et l'actualité. Un
                  cadre spécifique d'accompagnement est dédié aux entreprises du
                  secteur informel et des Start-ups.
                </p>
              </div>
            </div>
            <div className="border-t-4 border-[#fff] pt-6 sm:pt-8 rounded-lg bg-gray-200 shadow-md p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006d40] mb-3 sm:mb-4 leading-tight">
                Dialogue Public-Privé
              </h3>

              <div className="space-y-4 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                <p>
                  La FEG a toujours su maintenir le dialogue public-privé pour
                  la défense des intérêts de ses membres quelles que soient leur
                  taille et leur forme juridique pour faire entendre leur voix
                  sur les sujets en lien avec l'entreprise. Elle assure
                  également la représentation de ses adhérents à travers ses
                  mandataires sociaux au sein des différentes institutions
                  nationales et internationales.
                </p>
              </div>
            </div>
            <div className="border-t-4 border-[#fff] pt-6 sm:pt-8 rounded-lg bg-gray-200 shadow-md p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006d40] mb-3 sm:mb-4 leading-tight">
                Réseau d'affaires
              </h3>

              <div className="space-y-4 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                <p>
                  La FEG offre à ses adhérents une plateforme de rencontres
                  permettant à chacun de saisir les opportunités d'affaires :
                  Assemblées Générales, Forums, Salons, etc. Elle accompagne ses
                  membres dans l'optimisation de leurs budgets par le bénéfice
                  des tarifs négociés auprès de ses partenaires. Par sa
                  fondation, la FEG étend son action dans le domaine social, de
                  la Responsabilité de l'entreprise et du développement durable.
                </p>
              </div>
            </div>
            <div className="border-t-4 border-[#fff] pt-6 sm:pt-8 rounded-lg bg-gray-200 shadow-md p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006d40] mb-3 sm:mb-4 leading-tight">
                Médiation et arbitrage
              </h3>

              <div className="space-y-4 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                <p>
                  La FEG offre aux entreprises un cadre de règlement des
                  conflits à l'amiable, volontaire et confidentiel, entre
                  membres ou avec des tiers, conforme aux intérêts des parties
                  pour mettre fin au litige.
                </p>
              </div>
            </div>
          </div>