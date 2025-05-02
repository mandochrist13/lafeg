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
      {/* Hero Banner */}
      <div className="relative bg-[#006633] text-white py-16">
        <div className="absolute inset-0 bg-black opacity-50">
          <Image src="/images/members-banner.jpg" alt="Membres de la FEG" fill className="object-cover opacity-30" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Entreprises membres</h1>
          <p className="max-w-3xl mx-auto">
            Découvrez ici l'ensemble des entreprises membres de la Fédération des Entreprises du Gabon organisé dans les
            différents secteurs d'activité.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#006633]">
              ACCUEIL
            </Link>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-[#f39c12] font-medium">ENTREPRISES MEMBRES</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="bg-[#f39c12]/10 p-6 rounded-lg mb-8">
          <div className="flex">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Rechercher une entreprise"
                className="w-full px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#006633]"
              />
            </div>
            <button className="bg-[#006633] text-white px-6 py-3 rounded-r-md hover:bg-[#005528] transition-colors">
              RECHERCHER
            </button>
          </div>
          <p className="text-gray-600 mt-2 italic text-sm">Saisir le nom de l'entreprise ou le secteur d'activité.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar - Sectors */}
          <div className="md:col-span-1">
            <div className="bg-[#006633] rounded-lg overflow-hidden">
              <ul>
                {sectors.map((sector, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className={`flex items-center px-4 py-3 border-b border-[#005528] hover:bg-[#005528] transition-colors ${
                        index === 0 ? "bg-[#f39c12] text-white" : "text-white"
                      }`}
                    >
                      <span className="w-2 h-2 bg-[#f39c12] rounded-full mr-3"></span>
                      {sector}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content - Member Companies */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 gap-6">
              {memberCompanies.map((company) => (
                <div key={company.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center p-4 mb-4 md:mb-0 md:mr-6">
                      <div className="relative w-full h-full">
                        <Image
                          src={company.logo || "/placeholder.svg"}
                          alt={company.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#006633] mb-2">{company.name}</h3>
                      <div className="space-y-1 text-gray-700">
                        <p>
                          <span className="font-semibold">Siège :</span> {company.headquarters}
                        </p>
                        <p>
                          <span className="font-semibold">Secteur :</span> {company.sector}
                        </p>
                        <p>
                          <span className="font-semibold">Statut juridique :</span> {company.legalStatus}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-1">
                <a
                  href="#"
                  className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-[#006633]"
                >
                  &laquo;
                </a>
                <a
                  href="#"
                  className="px-4 py-2 border border-gray-300 rounded-md bg-[#006633] text-white hover:bg-[#005528]"
                >
                  1
                </a>
                <a
                  href="#"
                  className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-[#006633]"
                >
                  2
                </a>
                <a
                  href="#"
                  className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-[#006633]"
                >
                  3
                </a>
                <a
                  href="#"
                  className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-[#006633]"
                >
                  &raquo;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
