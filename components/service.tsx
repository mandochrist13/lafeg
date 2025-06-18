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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Services Cards */}
          <div className="">
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  className={`${service.color} border rounded-sm p-6  hover:shadow-md transition-shadow`}
                >
                  <div className="flex items-center mb-4">
                    <h3 className="text-xl font-bold text-[#063d21]">
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
                className="px-6 py-3 bg-[#063d21] text-white font-medium rounded-md transition-all duration-500 flex items-center mx-auto hover:bg-[#063d21]"
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
        </div>
      </div>
    </>
  );
}
