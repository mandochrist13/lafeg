"use client";
import Image from "next/image";
import Link from "next/link";

export default function a_propos() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Takes full width on mobile, 2/3 on desktop */}
          <div className="">
            <div className="border-t-4 border-[#fff] pt-6 sm:pt-8 rounded-lg bg-white shadow-md p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006d40] mb-3 sm:mb-4 leading-tight">
                Notre institution contribue à un idéal commun :
                <br className="hidden sm:block" />
                la performance des entreprises gabonaises
              </h3>

              <div className="space-y-4 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                <p>
                  La Fédération des Entreprises du Gabon (FEG) est un acteur
                  incontournable de l'économie gabonaise, dont les membres
                  représentent et produisent à ce jour près de{" "}
                  <span className="font-semibold">80% du PIB</span> et plus de{" "}
                  <span className="font-semibold">90% de la main d'œuvre</span>{" "}
                  formelle de notre pays. Ce site internet nous donne
                  l'opportunité d'en valoriser la modernisation, en cours depuis
                  2017, et qui vise à la rendre plus inclusive, innovante, et
                  donc performante en tant que force de proposition aux côtés du
                  gouvernement et des organisations de travailleurs partenaires
                  dans le cadre du dialogue social tripartite prôné par
                  l'Organisation Internationale du Travail.
                </p>

                <p>
                  C'est dans cet élan de modernité que nous sommes heureux de
                  vous proposer une plateforme qui a pour ambition de renforcer
                  le rayonnement de notre organisation, en rassemblant nos
                  actualités, nos réflexions sur les nombreux enjeux du moment
                  susceptibles d'affecter le climat des affaires de demain.
                  C'est donc avec un immense plaisir que nous vous souhaitons
                  une agréable navigation.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 sm:p-6 mt-6 sm:mt-8 rounded-lg border-l-4 border-[#006d40] shadow-sm">
                <h4 className="text-[#006d40] font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                  Alain-Claude KOUAKOUA
                </h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  Président de La FEG
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
