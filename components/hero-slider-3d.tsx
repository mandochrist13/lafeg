"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface SlideItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  link: string;
  ctaText: string;
}

const slides: SlideItem[] = [
  {
    id: 1,
    title: "Fédération des Entreprises du Gabon",
    subtitle: "Votre Partenaire de Croissance",
    description: "Rejoignez un réseau de 950+ entreprises et bénéficiez d'un accompagnement sur mesure pour développer votre activité au Gabon.",
    image: "/images/hero-business-gabon.jpg",
    category: "À PROPOS",
    link: "/la-feg",
    ctaText: "Découvrir la FEG",
  },
  {
    id: 2,
    title: "Dialogue avec les Institutions",
    subtitle: "Une Voix Unifiée",
    description: "La FEG représente les intérêts des entreprises auprès des pouvoirs publics et contribue activement au développement économique du pays.",
    image: "/images/hero-dialogue-institutions.jpg",
    category: "INFLUENCE",
    link: "/la-feg",
    ctaText: "Notre Impact",
  },
  {
    id: 3,
    title: "Formation & Accompagnement",
    subtitle: "Développez vos Compétences",
    description: "Accédez à des formations professionnelles, des analyses économiques et un accompagnement juridique adapté à vos besoins.",
    image: "/images/hero-formation.jpg",
    category: "SERVICES",
    link: "/devenir-membre",
    ctaText: "Nos Services",
  },
  {
    id: 4,
    title: "Événements & Networking",
    subtitle: "Élargissez votre Réseau",
    description: "Participez à nos événements exclusifs, rencontrez des décideurs et créez des opportunités d'affaires stratégiques.",
    image: "/images/hero-networking.jpg",
    category: "ÉVÉNEMENTS",
    link: "/activite/evenements",
    ctaText: "Prochains Événements",
  },
  {
    id: 5,
    title: "Devenez Membre",
    subtitle: "Rejoignez l'Élite Économique",
    description: "Intégrez la première organisation patronale du Gabon et bénéficiez d'avantages exclusifs pour propulser votre entreprise.",
    image: "/images/hero-member.jpg",
    category: "ADHÉSION",
    link: "/devenir-membre",
    ctaText: "Adhérer Maintenant",
  },
  {
    id: 6,
    title: "Publications & Ressources",
    subtitle: "Restez Informé",
    description: "Consultez nos rapports, guides pratiques et analyses sectorielles pour prendre les meilleures décisions stratégiques.",
    image: "/images/hero-publications.jpg",
    category: "RESSOURCES",
    link: "/publications",
    ctaText: "Nos Publications",
  },
];

export default function HeroSlider3D() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at index 1 to show first slide content
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-advance slider every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Calculate positions for each slide
  const getSlideStyle = (index: number) => {
    const diff = (index - currentIndex + slides.length) % slides.length;

    if (diff === 0) {
      // First slide (background, full screen)
      return {
        transform: "translate(0, 0)",
        width: "100%",
        height: "100%",
        zIndex: 1,
        opacity: 1,
        borderRadius: "0",
      };
    } else if (diff === 1) {
      // Second slide (main focus with content)
      return {
        transform: "translate(0, 0)",
        width: "100%",
        height: "100%",
        zIndex: 2,
        opacity: 1,
        borderRadius: "0",
      };
    } else if (diff === 2) {
      // Third slide (small card)
      return {
        left: "50%",
        top: "50%",
        transform: "translate(0, -50%)",
        width: "200px",
        height: "300px",
        zIndex: 3,
        opacity: 1,
        borderRadius: "20px",
      };
    } else if (diff === 3) {
      // Fourth slide
      return {
        left: "calc(50% + 220px)",
        top: "50%",
        transform: "translate(0, -50%)",
        width: "200px",
        height: "300px",
        zIndex: 3,
        opacity: 1,
        borderRadius: "20px",
      };
    } else if (diff === 4) {
      // Fifth slide
      return {
        left: "calc(50% + 440px)",
        top: "50%",
        transform: "translate(0, -50%)",
        width: "200px",
        height: "300px",
        zIndex: 3,
        opacity: 1,
        borderRadius: "20px",
      };
    } else {
      // Hidden slides
      return {
        left: "calc(50% + 660px)",
        top: "50%",
        transform: "translate(0, -50%)",
        width: "200px",
        height: "300px",
        zIndex: 3,
        opacity: 0,
        borderRadius: "20px",
      };
    }
  };

  // Get the slide that should show content (index 1 in the rotation)
  const contentSlideIndex = (currentIndex + 1) % slides.length;
  const contentSlide = slides[contentSlideIndex];

  return (
    <section className="relative w-full h-[600px] bg-gray-100 overflow-hidden">
      {/* Slides container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const style = getSlideStyle(index);
          const diff = (index - currentIndex + slides.length) % slides.length;

          return (
            <div
              key={slide.id}
              className="absolute transition-all duration-500 ease-out"
              style={{
                ...style,
                boxShadow: diff >= 2 ? "0 30px 50px rgba(6, 61, 33, 0.3)" : "none",
              }}
            >
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority={index === 0 || index === 1}
                />

                {/* Dark overlay for full slides */}
                {diff <= 1 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                )}

                {/* Content overlay for small cards */}
                {diff >= 2 && diff <= 4 && (
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/40 flex flex-col justify-end p-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-bronze-light mb-1">
                      {slide.category}
                    </span>
                    <h4 className="text-sm font-bold leading-tight line-clamp-2">
                      {slide.title}
                    </h4>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Main content (shows for the second slide in rotation) */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center z-10 pointer-events-none">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="max-w-xl text-white space-y-6 animate-fadeInUp">
              {/* Category badge */}
              <div>
                <span className="inline-block bg-bronze-base text-primary-900 px-4 py-2 text-xs font-bold uppercase tracking-wider">
                  {contentSlide.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {contentSlide.title}
              </h1>

              {/* Subtitle */}
              <h2 className="text-2xl lg:text-3xl font-semibold text-bronze-light">
                {contentSlide.subtitle}
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-100 leading-relaxed">
                {contentSlide.description}
              </p>

              {/* CTA Button */}
              <div className="pointer-events-auto">
                <Link
                  href={contentSlide.link}
                  className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 font-bold text-lg hover:bg-bronze-light hover:text-primary-900 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  {contentSlide.ctaText}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
        <button
          onClick={handlePrev}
          disabled={isAnimating}
          className="w-12 h-12 rounded-lg border-2 border-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group"
          aria-label="Slide précédent"
        >
          <ChevronLeft
            size={24}
            className="text-white group-hover:text-primary transition-colors"
          />
        </button>

        <button
          onClick={handleNext}
          disabled={isAnimating}
          className="w-12 h-12 rounded-lg border-2 border-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group"
          aria-label="Slide suivant"
        >
          <ChevronRight
            size={24}
            className="text-white group-hover:text-primary transition-colors"
          />
        </button>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 500);
              }
            }}
            className={`h-1 transition-all duration-300 ${
              index === contentSlideIndex
                ? "w-12 bg-white"
                : "w-6 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Responsive: Hide small cards on mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .absolute[style*="200px"] {
            display: none !important;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}
