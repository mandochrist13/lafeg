"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Member {
  id: string;
  name: string;
  logo: string;
  headquarters: string;
  sector: string;
  legalStatus: string;
}

interface Partner {
  id: string;
  name: string;
  logo: string;
}

const MembersPage = () => {
  // Données des membres
  const allMembers: Member[] = [
    {
      id: "ags-frasers",
      name: "AGS FRASERS",
      logo: "/logos/ags-frasers.png",
      headquarters: "BP 8101",
      sector: "Logistique et Transport",
      legalStatus: "SA"
    },
    {
      id: "art",
      name: "ART",
      logo: "/logos/art.png",
      headquarters: "B. P. R193/BB",
      sector: "Télécommunications",
      legalStatus: "N/A"
    },
    {
      id: "bicig",
      name: "BICIG",
      logo: "/logos/bicig.png",
      headquarters: "BP 2251",
      sector: "Banque et Services Financiers",
      legalStatus: "SA"
    },
    // Ajouter d'autres membres ici...
  ];

  // Données des partenaires
  const partners: Partner[] = [
    { id: "ice", name: "ICE", logo: "/logos/ice.png" },
    { id: "mines", name: "Ministère des Mines", logo: "/logos/mines.png" },
    { id: "commerce", name: "Ministère du Commerce", logo: "/logos/commerce.png" },
    { id: "ue", name: "Union Européenne", logo: "/logos/ue.png" },
    { id: "banque-mondiale", name: "Banque Mondiale", logo: "/logos/banque-mondiale.png" },
    { id: "undp", name: "PNUD", logo: "/logos/undp.png" },
    { id: "afdb", name: "Banque Africaine de Développement", logo: "/logos/afdb.png" },
    { id: "ccima", name: "CCIMA", logo: "/logos/ccima.png" },
  ];

  // Secteurs d'activité
  const sectors = [
    "Tous les membres",
    "Activités Portuaires et Aéroportuaires",
    "Agroalimentaire",
    "Assurances et Courtiers",
    "Banque et Services Financiers",
    "Bâtiment et Travaux Publics",
    "Commerce et Distribution",
    "Éducation et Formation",
    "Énergie et Hydrocarbures",
    "Industrie et Manufacture",
    "Logistique et Transport",
    "Mines et Métallurgie",
    "Santé et Pharmacie",
    "Services aux Entreprises",
    "Services Divers",
    "Télécommunications",
    "Tourisme et Hôtellerie",
    "Immobilier",
    "Agriculture et Sylviculture",
    "Technologie et Numérique"
  ];

  // État
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSector, setSelectedSector] = useState("Tous les membres");
  const [showAllPartners, setShowAllPartners] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Filtrage des membres
  const filteredMembers = allMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === "Tous les membres" || member.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  // Affichage des partenaires
  const displayedPartners: Partner[] = showAllPartners ? partners : partners.slice(0, 6);

  // Gestion du scroll pour la sidebar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants pour les partenaires
  const partnerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#006633] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Entreprises membres</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Découvrez les {allMembers.length} entreprises membres de la Fédération des Entreprises du Gabon réparties dans {sectors.length - 1} secteurs d'activité.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white shadow-sm py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-[#006633] hover:text-[#004d26]">
              ACCUEIL
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-[#f39c12] font-medium">ENTREPRISES MEMBRES</span>
          </div>
        </div>
      </div>

      {/* Mobile Filter Button */}
      <div className="lg:hidden sticky top-0 z-10 bg-white shadow-md p-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-[#006633] text-white rounded-lg"
        >
          <span>Filtrer les membres</span>
          <svg
            className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Filtres */}
          <div className={`lg:w-1/4 ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <div className={`bg-white rounded-xl shadow-lg p-6 lg:sticky border border-gray-100 ${isScrolled ? 'lg:top-4' : 'lg:top-24'}`}>
              <h2 className="text-xl font-bold text-[#006633] mb-6 pb-2 border-b border-gray-200">Filtrer les membres</h2>
              
              {/* Barre de recherche */}
              <div className="mb-6">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Rechercher une entreprise
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="search"
                    placeholder="Nom ou secteur..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f39c12] focus:border-[#f39c12] transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Filtre par secteur avec scroll */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Secteur d'activité ({sectors.length - 1})</h3>
                <div className="max-h-[400px] overflow-y-auto pr-2">
                  <ul className="space-y-2">
                    {sectors.map((sector) => (
                      <li key={sector}>
                        <button
                          onClick={() => {
                            setSelectedSector(sector);
                            if (window.innerWidth < 1024) {
                              setIsMobileMenuOpen(false);
                            }
                          }}
                          className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all ${
                            sector === selectedSector
                              ? "bg-[#006633] text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {sector}
                          {sector !== "Tous les membres" && (
                            <span className="float-right bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                              {allMembers.filter(m => m.sector === sector).length}
                            </span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Liste des membres */}
          <div className="lg:w-3/4">
            {/* Résumé des filtres */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-gray-600">Affichage de </span>
                <span className="font-bold text-[#006633]">{filteredMembers.length}</span>
                <span className="text-gray-600"> sur </span>
                <span className="font-bold">{allMembers.length}</span>
                <span className="text-gray-600"> entreprises</span>
              </div>
              
              {selectedSector !== "Tous les membres" && (
                <div className="bg-[#f0f7f4] text-[#006633] px-4 py-2 rounded-full flex items-center">
                  <span>Secteur: {selectedSector}</span>
                  <button 
                    onClick={() => setSelectedSector("Tous les membres")}
                    className="ml-2 text-[#f39c12] hover:text-[#e67e22]"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {filteredMembers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredMembers.map((member) => (
                  <motion.div 
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="p-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-16 w-16 bg-gray-100 rounded-lg overflow-hidden mr-4 border border-gray-200 flex items-center justify-center">
                          {member.logo ? (
                            <Image
                              src={member.logo}
                              alt={member.name}
                              width={64}
                              height={64}
                              className="object-contain max-h-full max-w-full"
                            />
                          ) : (
                            <div className="text-xs text-gray-400 text-center p-2">Logo indisponible</div>
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#006633] mb-1">{member.name}</h3>
                          <p className="text-sm text-gray-600 mb-1">
                            <span className="font-medium">Siège:</span> {member.headquarters}
                          </p>
                          <p className="text-sm text-gray-600 mb-1">
                            <span className="font-medium">Secteur:</span> {member.sector}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Statut:</span> {member.legalStatus}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
                      <Link
                        href={`/membres/${member.id}`}
                        className="text-[#f39c12] hover:text-[#e67e22] text-sm font-medium flex items-center transition-colors"
                      >
                        Voir la fiche complète
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100"
              >
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">Aucun résultat</h3>
                <p className="mt-1 text-gray-500">
                  Aucune entreprise ne correspond à votre recherche "{searchTerm}" {selectedSector !== "Tous les membres" && `dans le secteur "${selectedSector}"`}
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedSector("Tous les membres");
                    }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#f39c12] hover:bg-[#e67e22] focus:outline-none"
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Partenaires */}
        <div className="mt-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-[#006633] mb-6 text-center"
          >
            Nos <span className="text-[#f39c12]">partenaires institutionnels</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto text-center mb-8"
          >
            La FEG collabore avec {partners.length} institutions et organisations pour promouvoir le développement économique du Gabon.
          </motion.p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {displayedPartners.map((partner: Partner, index: number) => (
              <motion.div
                key={partner.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={partnerVariants}
                className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center h-32 hover:shadow-lg transition-all border border-gray-100 hover:border-[#f39c12]"
              >
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={80}
                    className="object-contain max-h-16 hover:scale-105 transition-transform"
                  />
                ) : (
                  <span className="text-sm text-center text-gray-500">{partner.name}</span>
                )}
              </motion.div>
            ))}
          </div>

          {partners.length > 6 && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-8"
            >
              <button
                onClick={() => setShowAllPartners(!showAllPartners)}
                className="inline-flex items-center px-6 py-3 border border-[#f39c12] text-[#f39c12] rounded-lg hover:bg-[#fff5e6] font-medium transition-colors"
              >
                {showAllPartners ? 'VOIR MOINS' : 'TOUS NOS PARTENAIRES'}
                <svg className={`w-4 h-4 ml-2 transition-transform ${showAllPartners ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MembersPage;