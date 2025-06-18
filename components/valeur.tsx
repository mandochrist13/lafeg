"use client";

export default function Valeurs() {
  const values = [
    "EXEMPLARITÉ ET CONDUITE",
    "RESPECT DES LOIS ET DES RÈGLEMENTS",
    "PARTAGE ET COHÉSION",
    "SOLIDARITÉ ET EMINENCE DU SECTEUR PRIVÉ",
  ];
  return (
    <>
      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Responsive Layout */}
        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          {/* Main Content - Left Side */}
          <div className="">
            {/* Values Card without animation */}
            <div className="bg-gray-200 rounded-md  overflow-hidden mb-8 lg:mb-0">
              <div className="p-8">
                <div className="text-2xl font-bold text-[#063d21] mb-6 border-b-2 border-[#f39c12] pb-2">
                  Charte des valeurs et code éthique
                </div>
                <p className="text-gray-800 text-lg mb-8">
                  La FEG a un rôle de modèle et d'exemplarité envers ses
                  partenaires, syndicats de travailleurs, administrations,
                  groupements associatifs professionnels et collaborateurs. Elle
                  véhicule une image d'excellence et de respectabilité.
                </p>

                <ul className="space-y-4 mb-8">
                  {values.map((value) => (
                    <li
                      key={value}
                      className="flex items-center bg-white p-4 rounded-lg  "
                    >
                      <div className="flex-shrink-0 bg-[#063d21] p-2 rounded-full">
                        <svg
                          className="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="ml-4 text-gray-800 font-medium">
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-300">
                  <button
                    onClick={() => {
                      // Ouvre le PDF dans un nouvel onglet
                      window.open("/CHARTE_FEG.pdf", "_blank");
                    }}
                    className="px-6 py-3 bg-[#063d21] text-white font-medium rounded-md transition-all duration-500 flex items-center mx-auto hover:bg-[#063d21]"
                  >
                    <span>Consulter notre charte</span>
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
        </div>
      </div>
    </>
  );
}
