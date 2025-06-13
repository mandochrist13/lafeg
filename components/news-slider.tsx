"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";

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
      title: "Participation de la FEG à la table ronde sur le mécanisme de refinancement hypothécaire au Gabon",
      date: "22 janvier 2025",
      link: "/actualites/participation-table-ronde",
      imageUrl: "/images/slider-bg-2.jpg",
    },
    {
      id: 3,
      title: "Les assises nationales de l'emploi et des élections professionnelles au cœur des discussions",
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
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div 
      className="relative w-full px-4 py-8 sm:py-12 mx-auto max-w-7xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* Conteneur principal du slider */}
      <div className="relative w-full">
        {/* Boutons de navigation (desktop) */}
        <button
          onClick={prevSlide}
          className="hidden sm:block absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all"
          aria-label="Précédent"
        >
          <ArrowLeft size={20} />
        </button>
        
        <button
          onClick={nextSlide}
          className="hidden sm:block absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all"
          aria-label="Suivant"
        >
          <ArrowRight size={20} />
        </button>

        {/* Slide actuelle */}
        <div className="flex flex-col lg:flex-row h-auto min-h-[400px] bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
          {/* Partie texte */}
          <div className="lg:w-1/2 w-full p-6 sm:p-8 bg-[#f39c12] text-white flex flex-col">
            <div className="mb-4">
              <span className="inline-block bg-white text-[#f39c12] px-3 py-1 rounded-md text-sm font-medium">
                {slides[currentSlide].date}
              </span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              {slides[currentSlide].title}
            </h3>
            
            <div className="mt-auto">
              <Link
                href={slides[currentSlide].link}
                className="inline-flex items-center text-white font-medium hover:underline"
              >
                Lire la suite
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* Partie image */}
          <div className="lg:w-1/2 w-full h-64 sm:h-auto relative">
            <Image
              src={slides[currentSlide].imageUrl}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-[#f39c12] w-6" : "bg-gray-300"
              }`}
              aria-label={`Aller à l'actualité ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Boutons de navigation (mobile) */}
      <div className="sm:hidden flex justify-center mt-6 space-x-4">
        <button
          onClick={prevSlide}
          className="bg-white text-gray-800 p-2 rounded-full shadow-sm border border-gray-200"
          aria-label="Précédent"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white text-gray-800 p-2 rounded-full shadow-sm border border-gray-200"
          aria-label="Suivant"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}