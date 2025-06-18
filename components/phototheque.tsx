"use client";
import Image from "next/image";
import { useState } from "react";

export default function Phototheque() {
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
      src: "/images/Henri_BASSET.png",
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
      src: "/images/BA_OUMAR.png",
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
        {/* Contenu principal */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Section principale de la photothèque */}
            <div className="">
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
          </div>
        </div>
      </div>
    </>
  );
}
