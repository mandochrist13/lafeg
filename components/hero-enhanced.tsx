"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

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
    image: "/images/gef.png",
    category: "ÉVÉNEMENT MAJEUR",
    link: "/actualites/gef-2026",
    ctaText: "En savoir plus",
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

// Les 3 dernières actualités
// Note: Les images suivantes doivent être ajoutées dans public/images/
// Voir IMAGES_À_AJOUTER.md pour les instructions
const recentNews: NewsItem[] = [
  {
    id: 1,
    title: "Forum International de Libreville pour l'innovation et le développement",
    date: "29 Avril 2026",
    category: "Agenda",
    link: "/actualites/forum-libreville-2026",
    imageUrl: "/images/forum-libreville-2026.jpeg",
  },
  {
    id: 2,
    title: "Cuisine Bain Expo - 3ème édition",
    date: "28 Avril 2026",
    category: "Agenda",
    link: "/actualites/cuisine-bain-expo",
    imageUrl: "/images/cuisine-bain-expo.png",
  },
  {
    id: 3,
    title: "8ème édition du SIFFP - Salon International des Façades, Fenêtres et Portes",
    date: "28 Avril 2026",
    category: "Agenda",
    link: "/actualites/siffp-2026",
    imageUrl: "/images/siffp-2026.png",
  },
];

export default function HeroEnhanced() {
  // Commencer sur les actualités (index 6 = première actualité)
  const [currentIndex, setCurrentIndex] = useState(6);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);

  // Combine slides and news into one array
  const allItems = [...slides, ...recentNews.map(news => ({
    ...news,
    image: news.imageUrl,
    subtitle: news.category,
    description: `${news.date}`,
    ctaText: "Lire plus",
  }))];


  // Auto-advance slider every 6 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, allItems.length]);

  // Calculate positions for each item
  const getSlideStyle = (index: number) => {
    const diff = (index - currentIndex + allItems.length) % allItems.length;

    if (diff === 0 || diff === 1) {
      // Background slides (full screen)
      return {
        transform: "translate(-50%, -50%) scale(1)",
        left: "50%",
        top: "50%",
        width: "100%",
        height: "100%",
        zIndex: diff === 1 ? 2 : 1,
        opacity: 1,
        borderRadius: "0",
      };
    } else if (diff === 2) {
      // First small card - positioned at right with better spacing
      return {
        left: "calc(50% + 120px)",
        top: "50%",
        transform: "translate(-50%, -50%) scale(1)",
        width: "240px",
        height: "320px",
        zIndex: 5,
        opacity: 1,
        borderRadius: "16px",
      };
    } else if (diff === 3) {
      // Second small card - stacked with depth
      return {
        left: "calc(50% + 380px)",
        top: "50%",
        transform: "translate(-50%, -50%) scale(0.92)",
        width: "240px",
        height: "320px",
        zIndex: 4,
        opacity: 0.85,
        borderRadius: "16px",
      };
    } else if (diff === 4) {
      // Third small card - more depth
      return {
        left: "calc(50% + 620px)",
        top: "50%",
        transform: "translate(-50%, -50%) scale(0.84)",
        width: "240px",
        height: "320px",
        zIndex: 3,
        opacity: 0.65,
        borderRadius: "16px",
      };
    } else {
      // Hidden slides
      return {
        left: "calc(50% + 800px)",
        top: "50%",
        transform: "translate(-50%, -50%) scale(0.8)",
        width: "240px",
        height: "340px",
        zIndex: 2,
        opacity: 0,
        borderRadius: "16px",
      };
    }
  };

  // Get the item that should show content
  const contentItemIndex = (currentIndex + 1) % allItems.length;
  const contentItem = allItems[contentItemIndex];

  return (
    <section
      className="relative w-full h-[600px] md:h-[650px] lg:h-[700px] xl:h-[750px] bg-gradient-to-br from-gray-800 via-gray-700 to-primary-900 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Mixed slides and news container */}
      <div className="relative w-full h-full">
        {allItems.map((item, index) => {
          const diff = (index - currentIndex + allItems.length) % allItems.length;
          const style = getSlideStyle(index);

          // Calculate progressive shadow for depth
          const getShadow = () => {
            if (diff === 2) {
              return "0 30px 80px -10px rgba(0, 0, 0, 0.5), 0 15px 30px -5px rgba(6, 61, 33, 0.4), 0 8px 16px -4px rgba(0, 0, 0, 0.3)";
            } else if (diff === 3) {
              return "0 25px 60px -10px rgba(0, 0, 0, 0.45), 0 12px 24px -5px rgba(6, 61, 33, 0.35)";
            } else if (diff === 4) {
              return "0 20px 40px -10px rgba(0, 0, 0, 0.4), 0 10px 20px -5px rgba(6, 61, 33, 0.3)";
            }
            return "none";
          };

          const isHovered = hoveredCard === index;
          const isCard = diff >= 2 && diff <= 4;

          // Calculate 3D rotation based on mouse position
          const get3DTransform = () => {
            if (!isHovered || !isCard || !mousePosition) return style.transform;

            const { x, y } = mousePosition;

            // Rotation intensity based on card depth
            let intensity = 1;
            if (diff === 2) intensity = 1;
            else if (diff === 3) intensity = 0.7;
            else if (diff === 4) intensity = 0.5;

            // Calculate rotation angles based on mouse position
            // x: -1 (left) to 1 (right)
            // y: -1 (top) to 1 (bottom)
            const rotateY = -x * 20 * intensity; // Max ±20deg
            const rotateX = y * 15 * intensity;  // Max ±15deg

            // Scale based on depth
            let scale = 1;
            if (diff === 2) scale = 1.05;
            else if (diff === 3) scale = 1.0;
            else if (diff === 4) scale = 0.95;

            return `translate(-50%, -50%) scale(${scale}) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
          };

          // Handle mouse move on card to track position
          const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            if (!isCard) return;

            const rect = e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;  // 0 to 1
            const y = (e.clientY - rect.top) / rect.height;  // 0 to 1

            // Convert to -1 to 1 range (centered)
            const normalizedX = (x - 0.5) * 2;
            const normalizedY = (y - 0.5) * 2;

            setMousePosition({ x: normalizedX, y: normalizedY });
          };

          return (
            <div
              key={item.id}
              className="absolute"
              style={{
                ...style,
                transform: isHovered ? get3DTransform() : style.transform,
                boxShadow: getShadow(),
                transition: isHovered
                  ? "box-shadow 300ms ease-out, transform 0ms"
                  : "all 800ms cubic-bezier(0.34, 1.56, 0.64, 1), transform 800ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                transformOrigin: "center center",
                perspective: "1200px",
                transformStyle: "preserve-3d",
              }}
              onMouseEnter={() => isCard && setHoveredCard(index)}
              onMouseLeave={() => {
                setHoveredCard(null);
                setMousePosition(null);
              }}
              onMouseMove={handleMouseMove}
            >
              {/* Image */}
              <div
                className="relative w-full h-full overflow-hidden"
                style={{
                  borderRadius: style.borderRadius,
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    transform: isHovered && isCard ? "translateZ(20px) scale(1.05)" : "translateZ(0px) scale(1)",
                    transition: "transform 200ms ease-out",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    style={{
                      animation: diff === 1 && !isCard ? "slowZoom 20s ease-out forwards" : "none",
                    }}
                    sizes="(max-width: 768px) 100vw, 1200px"
                    priority={index === 0 || index === 1}
                    unoptimized={item.image.startsWith('http')}
                  />
                </div>

                {/* Shimmer sweep effect on hover */}
                {isHovered && isCard && (
                  <div
                    className="absolute inset-0 pointer-events-none overflow-hidden"
                    style={{
                      background: `linear-gradient(
                        110deg,
                        transparent 20%,
                        rgba(255, 255, 255, 0.15) 40%,
                        rgba(255, 255, 255, 0.4) 50%,
                        rgba(255, 255, 255, 0.15) 60%,
                        transparent 80%
                      )`,
                      backgroundSize: "200% 100%",
                      animation: "shimmerSweep 1.5s ease-in-out",
                    }}
                  />
                )}

                {/* Overlay avec gauche sombre pour la lecture et droite claire avec estompage */}
                {diff <= 1 && (
                  <>
                    <div
                      className="absolute inset-0"
                      style={{
                        animation: diff === 1 ? "slowZoom 20s ease-out forwards" : "none",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 via-40% to-white/20"></div>
                  </>
                )}

                {/* Content overlay for small cards */}
                {diff >= 2 && diff <= 4 && (
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent flex flex-col justify-end p-5 text-white cursor-pointer"
                    style={{
                      transition: "background 200ms ease-out",
                      transformStyle: "preserve-3d",
                    }}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setCurrentIndex(index === 0 ? allItems.length - 1 : index - 1);
                        setTimeout(() => setIsAnimating(false), 600);
                      }
                    }}
                  >
                    {/* Badge with translateZ */}
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest text-bronze-light mb-2 block"
                      style={{
                        transform: isHovered ? "translateZ(40px)" : "translateZ(0px)",
                        transition: "transform 200ms ease-out",
                      }}
                    >
                      {item.category}
                    </span>

                    {/* Title with deeper translateZ */}
                    <h4
                      className="text-base font-bold leading-snug line-clamp-3 drop-shadow-lg"
                      style={{
                        transform: isHovered ? "translateZ(60px)" : "translateZ(0px)",
                        transition: "transform 200ms ease-out",
                      }}
                    >
                      {item.title}
                    </h4>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Main content (shows for the second slide in rotation) */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center z-10 pointer-events-none pt-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            {/* Limiter la largeur pour ne pas chevaucher les cartes */}
            <div className="max-w-xl lg:max-w-2xl xl:max-w-xl">
              <div className="text-white space-y-3 md:space-y-4 animate-fadeInUp">
                  {/* Category badge */}
                  <div>
                    <span className="inline-flex items-center gap-2 bg-bronze-base text-primary-900 px-3 md:px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-sm shadow-lg">
                      <TrendingUp size={12} className="md:w-3.5 md:h-3.5" />
                      {contentItem.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] text-shadow-strong">
                    {contentItem.title}
                  </h1>

                  {/* Subtitle */}
                  {contentItem.subtitle && (
                    <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-bronze-light drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                      {contentItem.subtitle}
                    </h2>
                  )}

                  {/* Description */}
                  {contentItem.description && (
                    <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-50 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] font-medium">
                      {contentItem.description}
                    </p>
                  )}

                  {/* CTA Button */}
                  <div className="pointer-events-auto pt-1 md:pt-2">
                    <Link
                      href={contentItem.link}
                      className="inline-flex items-center gap-2 md:gap-3 bg-white text-primary px-5 md:px-7 py-2.5 md:py-3.5 font-bold text-xs md:text-sm lg:text-base hover:bg-bronze-light hover:text-primary-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group rounded-sm"
                    >
                      {contentItem.ctaText}
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform md:w-5 md:h-5"
                      />
                    </Link>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {allItems.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating && index !== contentItemIndex) {
                setIsAnimating(true);
                setCurrentIndex(index === 0 ? allItems.length - 1 : index - 1);
                setTimeout(() => setIsAnimating(false), 600);
              }
            }}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              index === contentItemIndex
                ? "w-12 bg-white shadow-lg"
                : "w-6 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Aller au item ${index + 1}`}
          />
        ))}
      </div>

      {/* Responsive: Hide small cards on mobile */}
      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*="240px"] {
            display: none !important;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(176, 176, 139, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(176, 176, 139, 0.6);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Smooth hardware-accelerated transitions */
        .absolute {
          will-change: transform, opacity;
          backface-visibility: hidden;
        }

        /* Shimmer sweep animation */
        @keyframes shimmerSweep {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        /* Slow progressive zoom for background images */
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        /* Custom easing for depth effect */
        @media (prefers-reduced-motion: no-preference) {
          .absolute {
            perspective: 1000px;
          }
        }
      `}</style>
    </section>
  );
}
