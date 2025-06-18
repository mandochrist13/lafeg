"use client";

export default function President() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#063d21] mb-6 leading-tight">
                Notre institution contribue à un idéal commun :{" "}
                <span className="text-[#f39c12]">
                  la performance des entreprises gabonaises
                </span>
              </h3>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg">
                  Alain-Claude Kouakoua est à présent le leader du patronat
                  gabonais, reconnu pour son influence grandissante au sein de
                  la Fédération des Entreprises du Gabon (FEG) et pour ses
                  engagements dans des secteurs essentiels tels que la
                  logistique, le transport, la construction et les
                  infrastructures. Il succède à Henri-Claude Oyima, qui occupe
                  désormais le poste de ministre d'État.
                </p>

                <p className="text-base md:text-lg">
                  Né en 1960, Alain Claude KOUAKOUA, originaire de Lambaréné,
                  entame sa carrière dans le monde des affaires en fondant Mika
                  Transports, une entreprise spécialisée dans le transport et la
                  distribution de produits pétroliers et de gaz. Quelques années
                  plus tard, il prend la direction d'une nouvelle société, Mika
                  Services, qui regroupe en son sein, en plus des hydrocarbures,
                  des activités de BTP.Kouakoua est le Président Directeur
                  Général du groupe ACK, un conglomérat actif dans le domaine du
                  BTP, du transport et de la logistique. Il a également exercé
                  en tant que vice-président de la FEG, chargé du corridor
                  logistique, de la logistique, du transport et de la fédération
                  des métiers de la construction.
                </p>
              </div>

              {/* Modern Quote Card */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[#f8f9fa] to-[#f1f3f5] rounded-lg border-l-4 border-[#f8c537]">
                <h4 className="text-[#063d21] font-bold text-lg mb-1">
                  Alain-Claude KOUAKOUA
                </h4>
                <p className="text-gray-600">Président de La FEG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
