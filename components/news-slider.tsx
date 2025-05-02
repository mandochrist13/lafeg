"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SlideProps {
  id: number;
  title: string;
  date: string;
  link: string;
  imageUrl: string;
}

export default function NewsSlider() {
  const slides: SlideProps[] = [
    {
      id: 1,
      title: "Appel à manifestation d'intérêt (FEG)",
      date: "28 mars 2025",
      link: "/actualites/appel-manifestation-interet",
      imageUrl: "/images/activity1.jpg",
    },
    {
      id: 2,
      title:
        "Participation de la FEG à la table ronde sur le mécanisme de refinancement hypothécaire au Gabon",
      date: "22 janvier 2025",
      link: "/actualites/participation-table-ronde",
      imageUrl: "/images/slider-bg-2.jpg",
    },
    {
      id: 3,
      title:
        "Les assises nationales de l'emploi et des élections professionnelles au cœur des discussions",
      date: "22 janvier 2025",
      link: "/actualites/assises-nationales-emploi",
      imageUrl: "/images/slider-bg-3.jpg",
    },
    {
      id: 4,
      title: "Appel à manifestation d'intérêt",
      date: "2025",
      link: "/actualites/appel-manifestation-interet-2",
      imageUrl: "/images/slider-bg-4.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 2) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="py-5 px-10 w-full max-w-screen-xl mx-auto space-y-6">
      {[0].map((offset) => {
        const slide = slides[(currentSlide + offset) % slides.length];
        return (
          <div
            key={slide.id}
            className="flex flex-col md:flex-row h-[400px] bg-white rounded-lg overflow-hidden shadow-md"
          >
            {/* Texte à gauche */}
            <div className="bg-[#f39c12] text-white md:w-1/2 w-full p-6 flex flex-col justify-between">
              <div>
                <div className="inline-block bg-white text-black px-4 py-2 mb-4">
                  <span>Agenda | {slide.date}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-4">{slide.title}</h2>
              </div>
              <Link
                href={slide.link}
                className="inline-flex items-center text-white hover:underline"
              >
                LIRE LA SUITE <ChevronRight size={20} className="ml-2" />
              </Link>
            </div>

            {/* Image à droite */}
            <div
              className="md:w-1/2 w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
              }}
            />
          </div>
        );
      })}

      {/* Pagination */}
      <div className="flex justify-center space-x-2 pt-4">
        {Array.from({ length: Math.ceil(slides.length / 2) }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index * 2)}
            className={`w-4 h-4 rounded-full ${
              index * 2 === currentSlide ? "bg-[#f39c12]" : "bg-gray-300"
            }`}
            aria-label={`Aller à la page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
