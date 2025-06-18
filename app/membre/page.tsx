"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import PartnersSection from "@/components/partner"

interface Member {
  id: number;
  name: string;
  logo: string;
  headquarters: string;
  sector: string;
  legalStatus: string;
  description?: string;
}

interface Sector {
  id: number;
  name: string;
  count: number;
}

// Données statiques des membres déclarées en premier
const membersData: Member[] = [
  {
    id: 1,
    name: "BGFIBANK",
    logo: "/images/members/bgfibank.png",
    headquarters: "BP. 2244, Libreville",
    sector: "Banque et Services Financiers",
    legalStatus: "SA",
    description:
      "Première banque gabonaise, membre actif de la FEG depuis 2010.",
  },
  {
    id: 2,
    name: "TOTAL Gabon",
    logo: "/images/members/total.png",
    headquarters: "BP. 525, Port-Gentil",
    sector: "Energie et Eau",
    legalStatus: "SA",
    description:
      "Leader dans le secteur pétrolier au Gabon, membre de la FEG depuis 1985.",
  },
  {
    id: 3,
    name: "SEEG",
    logo: "/images/members/seeg.png",
    headquarters: "BP. 400, Libreville",
    sector: "Energie et Eau",
    legalStatus: "SA",
    description:
      "Société d'Energie et d'Eau du Gabon, membre de la FEG depuis sa création.",
  },
  {
    id: 4,
    name: "CFAO Motors Gabon",
    logo: "/images/members/cfao-motors.png",
    headquarters: "BP. 1234, Libreville",
    sector: "Commerce et Distribution",
    legalStatus: "SA",
    description:
      "Leader de la distribution automobile au Gabon, membre de la FEG depuis 2012.",
  },
  {
    id: 5,
    name: "Gabon Oil Company",
    logo: "/images/members/gabon-oil-company.png",
    headquarters: "BP. 4567, Port-Gentil",
    sector: "Mines et Métallurgie",
    legalStatus: "SA",
    description:
      "Entreprise nationale pétrolière, membre de la FEG depuis sa création en 2011.",
  },
  {
    id: 6,
    name: "Gabon Telecom",
    logo: "/images/members/gabon-telecom.png",
    headquarters: "BP. 7890, Libreville",
    sector: "Communication et Médias",
    legalStatus: "SA",
    description:
      "Opérateur historique de télécommunications au Gabon, membre de la FEG depuis 2000.",
  },
  {
    id: 7,
    name: "Gabon Special Economic Zone",
    logo: "/images/members/gabon-special-economic-zone.png",
    headquarters: "BP. 1010, Nkok",
    sector: "Industrie et Transformation",
    legalStatus: "SA",
    description:
      "Zone économique spéciale dédiée à l'industrialisation du Gabon, membre de la FEG depuis 2015.",
  },
  {
    id: 8,
    name: "Gabon Mining Company",
    logo: "/images/members/gabon-mining-company.png",
    headquarters: "BP. 2020, Franceville",
    sector: "Mines et Métallurgie",
    legalStatus: "SA",
    description:
      "Entreprise minière spécialisée dans l'extraction de manganèse, membre de la FEG depuis 2018.",
  },
  {
    id: 9,
    name: "Gabon Post",
    logo: "/images/members/gabon-post.png",
    headquarters: "BP. 3030, Libreville",
    sector: "Services Divers",
    legalStatus: "SA",
    description:
      "Service postal national du Gabon, membre de la FEG depuis sa création.",
  },
  {
    id: 10,
    name: "Gabon Airports",
    logo: "/images/members/gabon-airports.png",
    headquarters: "BP. 4040, Libreville",
    sector: "Activités Portuaires et Aéroportuaires",
    legalStatus: "SA",
    description:
      "Gestionnaire des aéroports internationaux du Gabon, membre de la FEG depuis 2016.",
  },
  {
    id: 11,
    name: "Gabon National Railway",
    logo: "/images/members/gabon-national-railway.png",
    headquarters: "BP. 5050, Libreville",
    sector: "Transport et Logistique Terrestre",
    legalStatus: "SA",
    description:
      "Société nationale des chemins de fer du Gabon, membre de la FEG depuis 2005.",
  },
  {
    id: 12,
    name: "Gabon Cement Company",
    logo: "/images/members/gabon-cement-company.png",
    headquarters: "BP. 6060, Libreville",
    sector: "Industrie et Transformation",

    legalStatus: "SA",
    description:
      "Principal producteur de ciment au Gabon, membre de la FEG depuis 2019.",
  },
];

export default function MembersPage() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredMembers, setFilteredMembers] = useState<Member[]>(membersData);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const membersPerPage = 9;

  // Tableau des secteurs qui utilise maintenant membersData déjà déclaré
  const sectors: Sector[] = [
    { id: 0, name: "Tous les secteurs", count: membersData.length },
    {
      id: 1,
      name: "Activités Portuaires et Aéroportuaires",
      count: membersData.filter(
        (m) => m.sector === "Activités Portuaires et Aéroportuaires"
      ).length,
    },
    {
      id: 2,
      name: "Assurances et Courtiers",
      count: membersData.filter((m) => m.sector === "Assurances et Courtiers")
        .length,
    },
    {
      id: 3,
      name: "Banque et Services Financiers",
      count: membersData.filter(
        (m) => m.sector === "Banque et Services Financiers"
      ).length,
    },
    {
      id: 4,
      name: "Bois et Dérivés",
      count: membersData.filter((m) => m.sector === "Bois et Dérivés").length,
    },
    {
      id: 5,
      name: "Commerce et Distribution",
      count: membersData.filter((m) => m.sector === "Commerce et Distribution")
        .length,
    },
    {
      id: 6,
      name: "Communication et Médias",
      count: membersData.filter((m) => m.sector === "Communication et Médias")
        .length,
    },
    {
      id: 7,
      name: "Construction et BTP",
      count: membersData.filter((m) => m.sector === "Construction et BTP")
        .length,
    },
    {
      id: 8,
      name: "Energie et Eau",
      count: membersData.filter((m) => m.sector === "Energie et Eau").length,
    },
    {
      id: 9,
      name: "Hôtellerie et Restauration",
      count: membersData.filter(
        (m) => m.sector === "Hôtellerie et Restauration"
      ).length,
    },
    {
      id: 10,
      name: "Industrie et Transformation",
      count: membersData.filter(
        (m) => m.sector === "Industrie et Transformation"
      ).length,
    },
    {
      id: 11,
      name: "Mines et Métallurgie",
      count: membersData.filter((m) => m.sector === "Mines et Métallurgie")
        .length,
    },
    {
      id: 12,
      name: "Santé et Pharmacie",
      count: membersData.filter((m) => m.sector === "Santé et Pharmacie")
        .length,
    },
    {
      id: 13,
      name: "Services Divers",
      count: membersData.filter((m) => m.sector === "Services Divers").length,
    },
    {
      id: 14,
      name: "Transport et Logistique Terrestre",
      count: membersData.filter(
        (m) => m.sector === "Transport et Logistique Terrestre"
      ).length,
    },
  ];

  // Filtrer les membres
  useEffect(() => {
    let result = [...membersData];

    if (activeTab !== 0) {
      const sectorName = sectors.find((s) => s.id === activeTab)?.name;
      result = result.filter((member) => member.sector === sectorName);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (member) =>
          member.name.toLowerCase().includes(query) ||
          member.sector.toLowerCase().includes(query) ||
          member.headquarters.toLowerCase().includes(query)
      );
    }

    setFilteredMembers(result);
    setCurrentPage(1);
  }, [activeTab, searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  // Pagination
  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);
  const paginatedMembers = filteredMembers.slice(
    (currentPage - 1) * membersPerPage,
    currentPage * membersPerPage
  );

  return (
    <>
      {/* Hero Section Institutionnelle */}
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">NOS MEMBRES</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Bâtir ensemble une économie forte pour garantir la souveraineté
            nationale. Notre institution contribue à un idéal commun : la
            performance des entreprises gabonaises.
          </p>
        </div>
      </div>

      {/* Breadcrumb Minimaliste */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#005528] transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <span className="font-medium text-gray-800">
              Membres institutionnels
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Institutionnelle */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden sticky top-8">
              {/* Mobile menu button */}
              <button
                className="lg:hidden w-full flex justify-between items-center p-4 bg-[#005528] text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="font-medium">FILTRES</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    isMobileMenuOpen ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Filtres */}
              <div
                className={`${isMobileMenuOpen ? "block" : "hidden"} lg:block`}
              >
                <div className="p-6 border-b border-gray-200">
                  <h3 className="font-bold  text-gray-800 mb-4 uppercase tracking-wider text-sm">
                    Recherche Institutionnelle
                  </h3>
                  <form onSubmit={handleSearch} className="space-y-4">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Nom, secteur, siège..."
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-[#005528] focus:border-[#005528] outline-none text-sm"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#005528] hover:bg-[#00552b] text-white px-4 py-2 rounded font-medium transition-colors text-sm"
                    >
                      Appliquer les filtres
                    </button>
                  </form>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4 uppercase tracking-wider text-sm">
                    Secteurs d'activité
                  </h3>
                  <ul className="space-y-2">
                    {sectors.map((sector) => (
                      <li key={sector.id}>
                        <button
                          onClick={() => {
                            setActiveTab(sector.id);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded flex justify-between items-center transition-colors text-sm ${
                            activeTab === sector.id
                              ? "bg-gray-100 text-[#005528] font-medium"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <span className="truncate">{sector.name}</span>
                          <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full ml-2">
                            {sector.count}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {/* Header Institutionnel */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Membres Institutionnels
                  <span className="text-gray-500 font-normal ml-2">
                    ({filteredMembers.length})
                  </span>
                </h2>
              </div>

              {/* Barre de recherche desktop */}
              <form onSubmit={handleSearch} className="hidden lg:block mb-6">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher une entreprise membre..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#063d21] focus:border-[#063d21] outline-none pl-12"
                  />
                  <svg
                    className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </form>
            </div>

            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedMembers.map((member) => (
                  <div
                    key={member.id}
                    className="bg-white rounded-lg border border-gray-200 hover: hover:border-[#005528] overflow-hidden duration-700 flex flex-col h-full"
                  >
                    <div className="p-5 flex-grow ">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="flex-shrink-0">
                          <div className="h-14 w-14 bg-gray-100 rounded border border-gray-200 flex items-center justify-center overflow-hidden">
                            <Image
                              src={member.logo}
                              alt={member.name}
                              width={56}
                              height={56}
                              className="object-contain"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  "/images/inconnu.png";
                              }}
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-1">
                            {member.name}
                          </h3>
                          <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                            {member.legalStatus}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-start">
                          <svg
                            className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="text-gray-600">
                            {member.headquarters}
                          </span>
                        </div>

                        <div className="flex items-start">
                          <svg
                            className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                          <span className="text-gray-600">{member.sector}</span>
                        </div>

                        {member.description && (
                          <div className="pt-3 mt-3 border-t border-gray-100">
                            <p className="text-gray-600 line-clamp-2 text-sm">
                              {member.description}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          
          </div>
           
        </div>
         <PartnersSection/>
      </div>
    </>
  );
}
