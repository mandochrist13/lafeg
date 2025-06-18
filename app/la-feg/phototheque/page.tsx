"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Services() {
  // État pour la catégorie active
  const [activeCategory, setActiveCategory] = useState("Toutes");

  // Données des images (remplacez par vos vraies images)
  const images = [
    {
      id: 1,
      src: "/images/P.APANDINA.png",
      alt: "Événement FEG 2023",
      category: "Événements",
      date: "15/03/2023",
    },
    {
      id: 2,
      src: "/images/Dieudonné_BERRE.png",
      alt: "Réunion du conseil",
      category: "Réunions",
      date: "22/04/2023",
    },
    {
      id: 3,
      src: "/images/S.BERRE.png",
      alt: "Signature de partenariat",
      category: "Partenariats",
      date: "10/05/2023",
    },
    {
      id: 4,
      src:  "/images/Henri_BASSET.png",
      alt: "Conférence de presse",
      category: "Événements",
      date: "30/06/2023",
    },
    {
      id: 5,
      src: "/images/Mr_KOUAKOUA.jpg",
      alt: "Président KOUAKOUA",
      category: "Présidence",
      date: "12/07/2023",
    },
    {
      id: 6,
      src:"/images/BA_OUMAR.png",
      alt: "Atelier de formation",
      category: "Événements",
      date: "18/08/2023",
    },
  ];

  // Filtrer les images selon la catégorie active
  const filteredImages =
    activeCategory === "Toutes"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* En-tête avec image de fond */}
      <div className="relative bg-[#063d21] text-white py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/banière.jpg"
            alt="Arrière-plan photothèque"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PHOTOTHÈQUE</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Découvrez les moments forts de la FEG à travers notre collection de
            photos.
          </p>
        </div>
      </div>

      {/* Fil d'Ariane */}
      <div className="bg-white shadow-sm py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-[#063d21] hover:text-[#004d26]">
              ACCUEIL
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-[#f39c12] font-medium">Photothèque</span>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Section principale de la photothèque */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Galerie photo
            </h2>

            <div className="mb-8 overflow-x-auto">
            <div className="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-0">
              <a
                href="/la-feg"
           className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition"
              >
                À propos
              </a>
              <a
                href="/la-feg/president"
                className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition"
              >
                Présidence
              </a>
              <a
                href="/la-feg/gouvernance"
                className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition"
              >
                Gouvernance
              </a>
              <a
                href="/la-feg//histoire"
                className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition"
              >
                Notre histoire
              </a>
              <a
                href="/la-feg/valeurs"
                className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition"
              >
                Nos valeurs
              </a>
              <a
                href="/la-feg/missions"
                className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition"
              >
                Nos missions
              </a>
              <a
                href="/la-feg/services"
                className="whitespace-nowrap bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm hover:bg-gray-300 transition"
              >
                Nos services
              </a>
            </div>
          </div>

            {/* Galerie d'images */}
            {filteredImages.length === 0 ? (
              <p className="text-gray-500 text-center py-10">
                Aucune photo disponible dans cette catégorie.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredImages.map((image) => (
                  <div
                    key={image.id}
                    className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-medium">{image.alt}</h3>
                      <p className="text-gray-300 text-sm">
                        {image.category} • {image.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination (optionnelle) */}
            <div className="flex justify-center mt-10">
              <nav className="flex items-center gap-1">
                <button className="px-3 py-1 rounded bg-gray-200 text-gray-700">
                  Précédent
                </button>
                <button className="px-3 py-1 rounded bg-[#f39c12] text-white">
                  1
                </button>
                <button className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300">
                  2
                </button>
                <button className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300">
                  3
                </button>
                <button className="px-3 py-1 rounded bg-gray-200 text-gray-700">
                  Suivant
                </button>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            {/* Carte du président */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-100">
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/Mr_KOUAKOUA.jpg"
                  alt="Alain-Claude KOUAKOUA"
                  width={300}
                  height={400}
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  layout="responsive"
                />
              </div>
              <h4 className="text-[#006d40] font-bold text-lg sm:text-xl mb-1">
                Alain-Claude KOUAKOUA
              </h4>
              <p className="text-gray-700 font-medium mb-2 text-sm sm:text-base">
                Président de La FEG
              </p>
              <p className="text-gray-600 text-xs sm:text-sm italic mb-4 bg-gray-50 p-3 rounded-lg border-l-2 border-[#f39c12]">
                "Bâtissons ensemble une économie forte pour garantir la
                souveraineté nationale"
              </p>
            </div>

            {/* Partenaires */}
            <div className="bg-white rounded-xl shadow-md p-5">
              <h4 className="font-bold text-[#063d21] mb-4">Nos partenaires</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: "/images/executive_club.png", alt: "Executive Club" },
                  { src: "/images/iga.png", alt: "IGA" },
                  { src: "/images/cch.png", alt: "CLUB CAPITAL HUMAIN" },
                  { src: "/images/think_tank.png", alt: "Think Tank Fiscal" },
                ].map((partner) => (
                  <div
                    key={partner.alt}
                    className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center hover:shadow-sm transition-shadow h-20"
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={120}
                      height={60}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}