"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

export default function PresidentFull() {
  return (
    <div className="relative space-y-8">
      {/* Logo en filigrane */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden -z-10">
        <Image
          src="/images/logo.png"
          alt="Logo FEG"
          width={500}
          height={500}
          className="opacity-[0.05] select-none"
        />
      </div>

      {/* Photo et Nom */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="md:w-1/3">
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-2xl border border-white/20 ring-1 ring-bronze-base/10 group">
            <Image
              src="/images/président.jpg"
              alt="Alain-Claude KOUAKOUA - Président de la FEG"
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-gradient-to-t from-black/95 via-black/80 to-transparent p-6 border-t border-white/10">
              <h3 className="text-white font-bold text-lg mb-1 drop-shadow-lg">
                Alain-Claude KOUAKOUA
              </h3>
              <p className="text-bronze-base text-xs font-semibold uppercase tracking-wider drop-shadow-md">
                Président de la FEG
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="relative pl-8 mb-6">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-bronze-base via-bronze-dark to-bronze-base rounded-full"></div>
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-900 leading-tight">
              Un leader engagé pour{" "}
              <span className="text-bronze-dark font-extrabold">
                la performance des entreprises gabonaises
              </span>
            </h3>
          </div>

          {/* Citation */}
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white p-6 shadow-2xl">
            <div className="absolute top-0 right-0 opacity-[0.02]">
              <Quote size={120} />
            </div>
            <div className="relative z-10">
              <Quote size={22} className="text-bronze-base mb-3 drop-shadow-lg" />
              <p className="text-base lg:text-lg font-light italic mb-4 leading-relaxed text-white/95">
                "L'histoire économique d'un pays ne s'écrit pas dans les administrations. Elle s'écrit sur le terrain, dans la sueur des ateliers et le risque des entrepreneurs."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-gradient-to-r from-bronze-base to-transparent"></div>
                <p className="text-[11px] text-bronze-base font-bold tracking-[0.3em] uppercase">
                  Alain-Claude KOUAKOUA
                </p>
              </div>
            </div>
            <div className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Biographie complète */}
      <div className="border-t-4 border-bronze-base pt-6 rounded-lg bg-white shadow-md p-6">
        <h4 className="text-2xl font-bold text-primary-900 mb-6">Biographie</h4>

        <div className="space-y-6 text-gray-800 leading-relaxed text-base lg:text-lg">
          <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-bronze-base first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-2">
            Entrepreneur reconnu, membre actif de la FEG, Alain-Claude Kouakoua est né en 1960 au Gabon où il est originaire de Lambaréné dans la province du Moyen-Ogooué. Homme d'affaires, il est le président Directeur général (PDG) du groupe ACK, qui s'illustre dans divers domaines tels que le BTP, les assurances et les services. Il a débuté sa carrière à travers la création de Mika Transports, entreprise spécialisée dans le transport et la commercialisation des produits pétroliers et du gaz.
          </p>

          <p className="pl-5 border-l-4 border-bronze-base/30 py-1">
            En 2012, il a décidé, au vu de la multitude d'entreprises qu'il a créées (MIKA Services, Soleo, Trans'form, ELESA, GME, SMITH Services, Laruche assurance, MBA), de les réunir sous une Holding baptisée ACK (représentant chacune des initiales de son nom). Il était jusqu'à sa nomination, vice-président en charge des infrastructures au sein de la FEG.
          </p>

          <p>
            En effet, Alain Claude est également le président du Conseil d'administration (PCA) de la Caisse Nationale d'Assurance Maladie et de Garantie Sociale (Cnamgs). Il prend les commandes du Patronat gabonais dans un contexte marqué par de nombreux défis, qui au cours de la cérémonie d'installation à la tête de la FEG a annoncé qu'il s'engage « à poursuivre son œuvre en plaçant l'entreprise gabonaise au cœur de notre souveraineté économique ».
          </p>

          <p className="bg-gray-50 p-5 rounded-lg border-l-4 border-bronze-base">
            Il remplace à ce poste Henri Claude Oyima, nommé ministre de l'Economie au Gabon. Rappelons que, la FEG est la plus grande confédération du patronat gabonais, qui regroupe les plus grandes entreprises du pays. Elle a été créée en septembre 1959 sous l'appellation d'Union interprofessionnelle du Gabon (Unigabon), l'organisation a ensuite évolué vers la Confédération patronale gabonaise (CPG) avant de devenir la FEG en octobre 2022.
          </p>
        </div>
      </div>

      {/* Parcours professionnel */}
      <div className="border-t-4 border-primary-900 pt-6 rounded-lg bg-gray-50 shadow-md p-6">
        <h4 className="text-2xl font-bold text-primary-900 mb-6">Parcours professionnel</h4>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-2 bg-bronze-base rounded-full"></div>
            <div>
              <h5 className="font-bold text-primary-900 text-lg mb-1">Président de la FEG</h5>
              <p className="text-gray-700">
                Leader du patronat gabonais, il représente les intérêts des entreprises auprès du gouvernement et contribue activement au dialogue social tripartite.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-2 bg-bronze-base rounded-full"></div>
            <div>
              <h5 className="font-bold text-primary-900 text-lg mb-1">Président du Groupe ACK</h5>
              <p className="text-gray-700">
                Holding regroupant des entreprises dans les secteurs du BTP, des assurances, des services, du transport et de la logistique.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-2 bg-bronze-base rounded-full"></div>
            <div>
              <h5 className="font-bold text-primary-900 text-lg mb-1">Président du Conseil d'Administration de la CNAMGS</h5>
              <p className="text-gray-700">
                À la tête de la Caisse Nationale d'Assurance Maladie et de Garantie Sociale, institution clé pour la protection sociale au Gabon.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-2 bg-bronze-base rounded-full"></div>
            <div>
              <h5 className="font-bold text-primary-900 text-lg mb-1">Fondateur de Mika Transports</h5>
              <p className="text-gray-700">
                Entreprise spécialisée dans le transport et la commercialisation des produits pétroliers et du gaz, première pierre de son empire entrepreneurial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
