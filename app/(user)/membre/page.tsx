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
    name: "AGS FRASERS",
    logo: "/images/logo defaut.png",
    headquarters: "BP. 9161, Libreville",
    sector: "Services Divers",
    legalStatus: "SA",
    description: "Spécialiste en déménagement international et logistique au Gabon.",
  },
  {
    id: 2,
    name: "ART",
    logo: "/images/logo defaut.png",
    headquarters: "BP. 9193/569, Libreville",
    sector: "Services Divers",
    legalStatus: "SA",
    description: "Entreprise de services diversifiés basée à Libreville.",
  },
  {
    id: 3,
    name: "APRETAC",
    logo: "/images/logo defaut.png",
    headquarters: "BP. 1500, Libreville",
    sector: "Services Divers",
    legalStatus: "SA",
    description: "Association professionnelle pour la promotion du secteur tertiaire.",
  },
  {
    id: 4,
    name: "AVS TNT",
    logo: "/images/logo defaut.png",
    headquarters: "BP. 10836, Libreville",
    sector: "Services Divers",
    legalStatus: "SA",
    description: "Services de télécommunications et réseaux au Gabon.",
  },
  {
    id: 5,
    name: "BOLLORE TRANSPORT & LOGISTICS GABON",
    logo: "/images/logo defaut.png",
    headquarters: "BP. 77, Libreville",
    sector: "Transport et Logistique Terrestre",
    legalStatus: "SA",
    description: "Leader mondial en transport et logistique, acteur majeur au Gabon.",
  },
  {
    id: 6,
    name: "BGFIBANK",
    logo: "/images/logo defaut.png",
    headquarters: "BP. 2244, Libreville",
    sector: "Banque et Services Financiers",
    legalStatus: "SA",
    description: "Première banque gabonaise, membre actif de la FEG depuis 2010.",
  },
  {
    id: 7,
    name: "TOTAL GABON",
    logo: "/images/logo defaut.png",
    headquarters: "BP. 525, Port-Gentil",
    sector: "Energie et Eau",
    legalStatus: "SA",
    description: "Leader dans le secteur pétrolier au Gabon, membre de la FEG depuis 1985.",
  },
  {
    id: 8,
    name: "SEEG",
    logo: "/images/logo defaut.png",
    headquarters: "BP. 400, Libreville",
    sector: "Energie et Eau",
    legalStatus: "SA",
    description: "Société d'Energie et d'Eau du Gabon, fournisseur principal d'électricité.",
  },
  {
    id: 9,
    name: "CFAO MOTORS GABON",
    logo: "/images/logo defaut.png",
    headquarters: "BP. 1234, Libreville",
    sector: "Commerce et Distribution",
    legalStatus: "SA",
    description: "Leader de la distribution automobile au Gabon depuis 2012.",
  },
  {
    id: 10,
    name: "GABON OIL COMPANY",
    logo: "/images/logo defaut.png",
    headquarters: "BP. 4567, Port-Gentil",
    sector: "Mines et Métallurgie",
    legalStatus: "SA",
    description: "Entreprise nationale pétrolière, acteur clé du secteur énergétique.",
  },
  {
    id: 11,
    name: "GABON TELECOM",
    logo: "/images/logo defaut.png",
    headquarters: "BP. 7890, Libreville",
    sector: "Communication et Médias",
    legalStatus: "SA",
    description: "Opérateur historique de télécommunications au Gabon depuis 2000.",
  },
  {
    id: 12,
    name: "AIRTEL GABON",
    logo: "/images/logo defaut.png",
    headquarters: "BP. 8800, Libreville",
    sector: "Communication et Médias",
    legalStatus: "SA",
    description: "Opérateur de télécommunications mobile, réseau national étendu.",
  },
  {
    id: 13,
    name: "COMILOG",
    logo: "/images/logo defaut.png",
    headquarters: "BP. 27, Moanda",
    sector: "Mines et Métallurgie",
    legalStatus: "SA",
    description: "Premier producteur de manganèse au Gabon, acteur industriel majeur.",
  },
  {
    id: 14,
    name: "ORABANK GABON",
    logo: "/images/logo defaut.png",
    headquarters: "BP. 2253, Libreville",
    sector: "Banque et Services Financiers",
    legalStatus: "SA",
    description: "Banque panafricaine présente au Gabon, services financiers diversifiés.",
  },
  {
    id: 15,
    name: "SOCIETE GENERALE GABON",
    logo: "/images/logo defaut.png",
    headquarters: "BP. 4042, Libreville",
    sector: "Banque et Services Financiers",
    legalStatus: "SA",
    description: "Institution bancaire internationale, partenaire du développement économique.",
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
      {/* Hero Section Élégant */}
      <div className="relative bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        {/* Image d'arrière-plan avec overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banière.jpg"
            alt="Arrière-plan entreprises membres"
            fill
            className="object-cover opacity-15"
          />
        </div>

        {/* Contenu */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-bronze-base"></div>
              <span className="text-xs font-bold tracking-widest text-bronze-base uppercase">
                Notre Écosystème
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight">
              Nos Membres
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Un réseau d'excellence regroupant les acteurs majeurs de l'économie gabonaise
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-primary-900 hover:text-bronze-base transition-colors">
              Accueil
            </Link>
            <span className="text-gray-400">/</span>
            <span className="font-medium text-gray-700">
              Nos Membres
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

            {/* Cards des membres - Design magnifique */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {paginatedMembers.map((member) => (
                <div
                  key={member.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary-900/20 flex flex-col"
                >
                  {/* Section logo - Grand et centré */}
                  <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 p-8 flex items-center justify-center min-h-[200px]">
                    {/* Motif décoratif background */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-900 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-bronze-base rounded-full blur-2xl"></div>
                    </div>

                    {/* Logo grand format */}
                    <div className="relative z-10 w-32 h-32 flex items-center justify-center">
                      <Image
                        src={member.logo}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 drop-shadow-lg"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "/images/logo defaut.png";
                        }}
                      />
                    </div>

                    {/* Badge statut - Position absolue */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-block bg-white/90 backdrop-blur-sm text-primary-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md border border-gray-200">
                        {member.legalStatus}
                      </span>
                    </div>

                    {/* Bordure décorative en bas */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-900/20 to-transparent"></div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6 flex-grow bg-white">
                    {/* Nom de l'entreprise */}
                    <h3 className="text-xl font-bold text-primary-900 mb-4 leading-tight min-h-[3.5rem] flex items-center">
                      {member.name}
                    </h3>

                    {/* Informations */}
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-primary-900/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <span className="font-semibold text-gray-700 text-xs uppercase tracking-wide block mb-1">Siège</span>
                          <span className="text-gray-600">{member.headquarters}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-primary-900/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <div>
                          <span className="font-semibold text-gray-700 text-xs uppercase tracking-wide block mb-1">Secteur</span>
                          <span className="text-gray-600">{member.sector}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bordure animée bottom */}
                  <div className="h-1.5 bg-gradient-to-r from-primary-900 via-bronze-base to-primary-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Précédent
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                        currentPage === page
                          ? "bg-primary-900 text-white"
                          : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Suivant
                </button>
              </div>
            )}
          
          </div>
           
        </div>
         <PartnersSection/>
      </div>
    </>
  );
}
