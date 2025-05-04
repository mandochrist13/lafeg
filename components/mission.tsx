"use client";

import {  CheckCircle } from "lucide-react";
import Image from "next/image";

export default function MissionsSection() {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover text-white flex justify-center items-center py-20 px-6 md:px-20"
      style={{
        backgroundImage: "url('/images/mis-bk.jpg')", 
      }}
    >
      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Icônes à gauche */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white text-[#f39c12] p-6 rounded shadow-md flex flex-col items-center justify-center text-center">
            <Image
              src="/images/info.png"
              alt="Informer"
              width={100}
              height={100}
              className="w-14 object-cover object-center"
            />
            <p className="mt-2 font-semibold">Informer</p>
          </div>
          <div className="bg-white text-[#f39c12] p-6 rounded shadow-md flex flex-col items-center justify-center text-center">
            <Image
              src="/images/pro.png"
              alt="Informer"
              width={100}
              height={100}
              className="w-14 object-cover object-center"
            />
            <p className="mt-2 font-semibold">Promouvoir</p>
          </div>
          <div className="bg-white text-[#f39c12] p-6 rounded shadow-md flex flex-col items-center justify-center text-center">
            <Image
              src="/images/part.png"
              alt="Informer"
              width={100}
              height={100}
              className="w-14 object-cover object-center"
            />
            <p className="mt-2 font-semibold">Participer</p>
          </div>
          <div className="bg-white text-[#f39c12] p-6 rounded shadow-md flex flex-col items-center justify-center text-center">
            <Image
              src="/images/defendre.png"
              alt="Informer"
              width={100}
              height={100}
              className="w-14 object-cover object-center"
            />
            <p className="mt-2 font-semibold">Défendre</p>
          </div>
        </div>

        {/* Texte à droite */}
        <div className="text-left">
          <p className="text-sm text-gray-200 mb-2">Nos Missions</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Informer | Promouvoir | Participer | Défendre
          </h2>
          <ul className="space-y-3 text-white text-md">
            {[
              "Promouvoir l’entreprise ;",
              "Défendre les intérêts des entreprises adhérentes et les représenter ;",
              "Participer à toutes les négociations avec les pouvoirs publics et syndicats de travailleurs ;",
              "Émettre notre avis sur toute question à caractère économique et social ;",
              "Offrir à nos membres tous les services afin d’accroître la productivité d’ensemble ;",
              "Assurer et veiller à garantir la compétitivité et la croissance du tissu économique ;",
              "Accroître la dynamique entrepreneuriale et le développement des entreprises locales.",
            ].map((mission, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle size={20} className="text-white mt-1" />
                <span>{mission}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
