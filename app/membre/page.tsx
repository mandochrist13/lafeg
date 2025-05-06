import Image from "next/image"
import Link from "next/link"

interface MemberCompany {
  id: string
  name: string
  logo: string
  headquarters: string
  sector: string
  legalStatus: string
}

export default function MembresPage() {
  // Données simulées des entreprises membres
  const memberCompanies: MemberCompany[] = [
    {
      id: "ags-frasers",
      name: "AGS FRASERS",
      logo: "/images/members/ags-frasers.png",
      headquarters: "BP.9161",
      sector: "Services Divers",
      legalStatus: "SA",
    },
    {
      id: "art",
      name: "ART",
      logo: "/images/members/default-logo.png",
      headquarters: "B. P. 9193/569",
      sector: "Services Divers",
      legalStatus: "N/A",
    },
    {
      id: "bgfi-bank",
      name: "BGFI BANK",
      logo: "/images/members/bgfi-bank.png",
      headquarters: "BP.2253",
      sector: "Banque et Services Financiers",
      legalStatus: "SA",
    },
    {
      id: "ceca-gadis",
      name: "CECA GADIS",
      logo: "/images/members/ceca-gadis.png",
      headquarters: "BP.2975",
      sector: "Commerce et Distribution",
      legalStatus: "SA",
    },
    {
      id: "cfao-motors",
      name: "CFAO MOTORS",
      logo: "/images/members/cfao-motors.png",
      headquarters: "BP.2181",
      sector: "Commerce et Distribution",
      legalStatus: "SA",
    },
    {
      id: "eramet",
      name: "ERAMET",
      logo: "/images/members/eramet.png",
      headquarters: "BP.4905",
      sector: "Mines",
      legalStatus: "SA",
    },
  ]

  // Catégories de secteurs d'activité
  const sectors = [
    "Tous les membres",
    "Activités Portuaires et Aéroportuaires",
    "Assurances et Courtiers",
    "Banque et Services Financiers",
    "Bâtiments et Travaux Publics",
    "Bois et Transformation",
    "Cabinets et Agences Conseil",
    "Importateurs et Exportateurs",
    "Commerce et Distribution",
    "Mines",
    "Pétrole et Gaz",
    "Services Divers",
    "Technologies et Télécommunications",
    "Transport et Logistique",
  ]

  return (
    <>
      {/* Hero Banner amélioré */}
      <div className="relative bg-gradient-to-r from-[#006633] to-[#004d26] text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-black/30">
          <Image 
            src="/images/members-banner.jpg" 
            alt="Membres de la FEG" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Entreprises membres</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Découvrez notre réseau d'entreprises dynamiques, moteurs de l'économie gabonaise, 
            réparties dans les différents secteurs d'activité.
          </p>
          <div className="mt-8">
            <Link 
              href="#members-list" 
              className="inline-block bg-[#f39c12] hover:bg-[#e67e22] text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Explorer les membres
            </Link>
          </div>
        </div>
      </div>

      {/* Breadcrumb stylisé */}
      <div className="bg-white shadow-sm py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#006633] transition-colors">
              Accueil
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-[#f39c12] font-medium">Entreprises membres</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search Bar améliorée */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-12 border border-gray-100">
          <h2 className="text-2xl font-semibold text-[#006633] mb-4">Trouvez une entreprise membre</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Rechercher par nom, secteur ou localisation..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006633] focus:border-transparent"
              />
            </div>
            <button className="bg-[#006633] hover:bg-[#005528] text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Rechercher
            </button>
          </div>
          <p className="text-gray-500 mt-3 text-sm">Exemple : "Banque", "Mines", "Libreville"...</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Sectors amélioré */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-6">
              <div className="bg-[#006633] p-4">
                <h3 className="text-white text-lg font-semibold">Secteurs d'activité</h3>
              </div>
              <ul className="divide-y divide-gray-100">
                {sectors.map((sector, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className={`flex items-center px-4 py-3 hover:bg-[#f5f5f5] transition-colors ${
                        index === 0 
                          ? "bg-[#f39c12]/10 text-[#f39c12] font-medium" 
                          : "text-gray-700 hover:text-[#006633]"
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full mr-3 ${index === 0 ? "bg-[#f39c12]" : "bg-gray-300"}`}></span>
                      {sector}
                      {index !== 0 && (
                        <span className="ml-auto text-gray-400 text-sm">12</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content - Member Companies amélioré */}
          <div className="lg:col-span-3" id="members-list">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#006633]">Nos entreprises membres</h2>
              <p className="text-gray-600">Découvrez les entreprises qui font partie de notre réseau</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {memberCompanies.map((company) => (
                <div 
                  key={company.id} 
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                      <div className="w-24 h-24 bg-gray-50 rounded-lg flex items-center justify-center p-2 border border-gray-200">
                        <div className="relative w-full h-full">
                          <Image
                            src={company.logo || "/placeholder.svg"}
                            alt={company.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-xl font-bold text-[#006633] mb-2">{company.name}</h3>
                        <div className="space-y-2 text-gray-600">
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-[#f39c12]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{company.headquarters}</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-[#f39c12]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            <span>{company.sector}</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-[#f39c12]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span>Statut: {company.legalStatus}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                    <Link 
                      href={`/membres/${company.id}`} 
                      className="text-[#006633] hover:text-[#f39c12] font-medium text-sm flex items-center justify-end gap-1 transition-colors"
                    >
                      Voir détails
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination améliorée */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-500">
                Affichage de 1 à 6 sur 42 entreprises
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-[#006633] disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                  Précédent
                </button>
                <button className="px-4 py-2 border border-[#006633] rounded-lg bg-[#006633] text-white hover:bg-[#005528]">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-[#006633]">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-[#006633]">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-[#006633]">
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section CTA */}
      <div className="bg-[#006633] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Votre entreprise souhaite nous rejoindre ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Bénéficiez des avantages de notre réseau et contribuez au développement économique du Gabon.
          </p>
          <Link 
            href="/adhesion" 
            className="inline-block bg-white text-[#006633] hover:bg-gray-100 font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Devenir membre
          </Link>
        </div>
      </div>
    </>
  )
}