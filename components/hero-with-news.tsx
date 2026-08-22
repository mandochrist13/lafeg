"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Calendar, TrendingUp } from "lucide-react";

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

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  link: string;
  imageUrl: string;
}

const slides: SlideItem[] = [
  {
    id: 1,
    title: "Gabon Economic Forum 2026",
    subtitle: "L'Événement Économique de l'Année",
    description: "Rejoignez les leaders économiques du Gabon pour deux jours d'échanges, de networking et d'opportunités d'affaires stratégiques.",
    image: "/images/hero-business-gabon.jpg",
    category: "ÉVÉNEMENT MAJEUR",
    link: "/actualites/gef-2026",
    ctaText: "En savoir plus",
  },
  {
    id: 2,
    title: "Dialogue avec les Institutions",
    subtitle: "Une Voix Unifiée pour le Secteur Privé",
    description: "La FEG représente les intérêts de 950+ entreprises auprès des pouvoirs publics et contribue activement au développement économique.",
    image: "/images/hero-dialogue-institutions.jpg",
    category: "INFLUENCE",
    link: "/la-feg",
    ctaText: "Notre Impact",
  },
  {
    id: 3,
    title: "Formation Continue",
    subtitle: "Développez vos Compétences",
    description: "Accédez à des formations professionnelles, des analyses économiques et un accompagnement juridique adapté à vos besoins.",
    image: "/images/hero-formation.jpg",
    category: "SERVICES",
    link: "/devenir-membre",
    ctaText: "Nos Services",
  },
];

// Les 3 dernières actualités (à remplacer par vos vraies données)
const recentNews: NewsItem[] = [
  {
    id: 1,
    title: "Participation de la FEG à la table ronde sur le mécanisme de refinancement hypothécaire",
    date: "22 janvier 2025",
    category: "Événements",
    link: "/actualites/table-ronde-refinancement",
    imageUrl: "/images/slider-bg-2.jpg",
  },
  {
    id: 2,
    title: "Les assises nationales de l'emploi et des élections professionnelles",
    date: "22 janvier 2025",
    category: "Événements",
    link: "/actualites/assises-emploi",
    imageUrl: "/images/slider-bg-3.jpg",
  },
  {
    id: 3,
    title: "Forum International de Libreville pour l'innovation et le développement",
    date: "29 avril 2026",
    category: "Agenda",
    link: "/actualites/forum-innovation",
    imageUrl: "/images/activity1.jpg",
  },
];

export default function HeroWithNews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll every 6 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating, isPaused]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const handleSlideClick = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section
      className="relative w-full h-[600px] lg:h-[650px] bg-gray-100 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl h-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">

          {/* SLIDER PRINCIPAL - 8 colonnes sur desktop */}
          <div className="lg:col-span-8 relative h-full rounded-lg overflow-hidden shadow-2xl">
            {/* Slides */}
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  index === currentSlide
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-95 z-0"
                }`}
              >
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority={index === 0}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>

                {/* Content overlay */}
                {index === currentSlide && (
                  <div className="absolute inset-0 flex items-end p-8 lg:p-12">
                    <div className="max-w-2xl text-white space-y-4 animate-fadeInUp">
                      {/* Category badge */}
                      <div>
                        <span className="inline-flex items-center gap-2 bg-bronze-base text-primary-900 px-4 py-2 text-xs font-bold uppercase tracking-wider">
                          <TrendingUp size={14} />
                          {slide.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                        {slide.title}
                      </h1>

                      {/* Subtitle */}
                      <h2 className="text-xl lg:text-2xl font-semibold text-bronze-light">
                        {slide.subtitle}
                      </h2>

                      {/* Description */}
                      <p className="text-base lg:text-lg text-gray-100 leading-relaxed max-w-xl">
                        {slide.description}
                      </p>

                      {/* CTA Button */}
                      <div className="pt-2">
                        <Link
                          href={slide.link}
                          className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 font-bold text-base hover:bg-bronze-light hover:text-primary-900 transition-all duration-300 shadow-lg hover:shadow-xl group"
                        >
                          {slide.ctaText}
                          <ArrowRight
                            size={20}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Navigation buttons */}
            <div className="absolute bottom-8 right-8 flex gap-3 z-20">
              <button
                onClick={handlePrev}
                disabled={isAnimating}
                className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm border-2 border-white/40 hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group"
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
                className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm border-2 border-white/40 hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group"
                aria-label="Slide suivant"
              >
                <ChevronRight
                  size={24}
                  className="text-white group-hover:text-primary transition-colors"
                />
              </button>
            </div>

            {/* Progress indicators */}
            <div className="absolute bottom-8 left-8 flex gap-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideClick(index)}
                  className={`h-1 transition-all duration-300 ${
                    index === currentSlide
                      ? "w-12 bg-white"
                      : "w-6 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Aller au slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* FIL D'ACTUALITÉS - 4 colonnes sur desktop */}
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-4 py-8">
            {/* En-tête */}
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <div className="w-1 h-6 bg-bronze-base"></div>
                Dernières Actualités
              </h3>
              <Link
                href="/actualites"
                className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1 group"
              >
                Tout voir
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Liste des actualités */}
            <div className="space-y-4 flex-1">
              {recentNews.map((news, index) => (
                <Link
                  key={news.id}
                  href={news.link}
                  className="group block bg-white border-l-4 border-transparent hover:border-primary shadow-md hover:shadow-lg p-4 transition-all duration-300 rounded-r"
                  style={{
                    animation: `slideInRight 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="flex gap-3">
                    {/* Thumbnail */}
                    <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded">
                      <Image
                        src={news.imageUrl}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="80px"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                        <Calendar size={12} />
                        <span>{news.date}</span>
                      </div>

                      <h4 className="text-sm font-bold text-gray-900 line-clamp-2 mb-1 group-hover:text-primary transition-colors leading-tight">
                        {news.title}
                      </h4>

                      <span className="text-xs text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Lire plus
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA "Devenir Membre" */}
            <div className="mt-4 p-6 bg-gradient-to-br from-primary to-primary-800 rounded-lg text-white shadow-xl">
              <h4 className="text-lg font-bold mb-2">Rejoignez-nous</h4>
              <p className="text-sm text-white/90 mb-4 leading-relaxed">
                Intégrez un réseau de 950+ entreprises et bénéficiez d'un accompagnement sur mesure.
              </p>
              <Link
                href="/devenir-membre"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 font-bold text-sm hover:bg-bronze-light hover:text-primary-900 transition-all duration-300 w-full justify-center group"
              >
                Devenir Membre
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animations CSS */}
      <style jsx>{`
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}
