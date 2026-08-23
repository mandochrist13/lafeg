"use client";

import { useEffect, useState, useRef } from "react";

interface StatisticProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  icon?: React.ElementType;
  iconImage?: string;
  size?: "large" | "medium" | "small";
  bgColor?: string;
}

function StatisticItem({
  value,
  label,
  suffix = "",
  prefix = "",
  duration = 2000,
  iconImage,
  size = "medium",
  bgColor = "bg-white/95",
}: StatisticProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      start = Math.min(Math.floor(progress * end), end);
      setCount(start);

      if (start === end) {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [value, duration, isVisible]);

  const sizeClasses = {
    large: "lg:col-span-2 lg:row-span-2 p-10 lg:p-14",
    medium: "lg:col-span-1 lg:row-span-1 p-8 lg:p-10",
    small: "lg:col-span-1 lg:row-span-1 p-6 lg:p-8",
  };

  const numberSize = {
    large: "text-7xl lg:text-8xl xl:text-9xl",
    medium: "text-5xl lg:text-6xl",
    small: "text-4xl lg:text-5xl",
  };

  const textColorClass = bgColor.includes('text-white') ? 'text-white' : 'text-primary-900';
  const labelColorClass = bgColor.includes('text-white') ? 'text-white/80' : 'text-gray-600';

  return (
    <div
      ref={countRef}
      className={`${sizeClasses[size]} ${bgColor} backdrop-blur-2xl rounded-3xl shadow-2xl hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] transition-all duration-500 group hover:scale-[1.02] relative overflow-hidden border border-white/20`}
    >
      {/* Image de fond si fournie */}
      {iconImage && (
        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
          <img src={iconImage} alt="" className="w-full h-full object-cover" />
        </div>
      )}

      {/* Effet de verre givrée - reflets subtils */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-40 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-white/10 via-transparent to-transparent opacity-30 pointer-events-none"></div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-col h-full justify-center">

        {/* Chiffre avec animation et style élégant */}
        <div className={`${numberSize[size]} font-black ${textColorClass} mb-4 leading-none tracking-tighter drop-shadow-sm`}>
          <span className="inline-block transform transition-transform duration-700 group-hover:scale-105">
            {prefix}
          </span>
          <span className="inline-block transform transition-transform duration-700 group-hover:scale-105">
            {count}
          </span>
          <span className="inline-block transform transition-transform duration-700 group-hover:scale-105">
            {suffix}
          </span>
        </div>

        {/* Label avec meilleure typographie */}
        <div className={`${size === "large" ? "text-lg lg:text-xl font-bold" : "text-sm lg:text-base font-semibold"} ${labelColorClass} leading-snug tracking-wider uppercase`}>
          {label}
        </div>
      </div>

      {/* Shimmer effet glace au survol */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-shimmer-card"></div>
      </div>

      {/* Bordure brillante animée */}
      <div className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-white/40 transition-all duration-700 pointer-events-none"></div>
    </div>
  );
}

export default function KeyStatistics() {
  return (
    <section
      className="h-screen min-h-[700px] max-h-[1000px] relative overflow-hidden flex items-center"
      style={{
        backgroundImage: 'url(/images/siege.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay gradient assombri */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(6, 61, 33, 0.75) 0%, rgba(6, 61, 33, 0.65) 50%, rgba(6, 61, 33, 0.75) 100%)',
          zIndex: 1
        }}
      />

      {/* Patterns décoratifs subtils */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ zIndex: 2 }}>
        <div className="absolute top-10 left-10 w-72 h-72 bg-bronze-base rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative w-full" style={{ zIndex: 10 }}>
        {/* Layout en deux colonnes optimisé */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Colonne gauche - Titre et intro */}
          <div className="text-left space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-4">
                <div className="w-20 h-[2px] bg-gradient-to-r from-bronze-base to-bronze-light shadow-lg shadow-bronze-base/50"></div>
                <span className="text-[11px] font-black tracking-[0.35em] text-bronze-light uppercase drop-shadow-lg">
                  Notre impact en chiffres
                </span>
              </div>

              <h2 className="text-6xl lg:text-8xl font-black text-white tracking-[-0.02em] leading-[0.95]" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5)' }}>
                La FEG
                <br />
                <span className="text-bronze-light" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(220,218,164,0.3)' }}>
                  en chiffres
                </span>
              </h2>

              <p className="text-white text-lg lg:text-xl leading-[1.8] font-semibold max-w-lg" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.7)' }}>
                À travers des interventions régulières auprès du gouvernement et des
                partenaires internationaux, nous œuvrons quotidiennement pour le développement du secteur privé gabonais.
              </p>
            </div>

            {/* Stats rapides en badges élégants */}
            <div className="flex flex-col gap-3 max-w-md">
              <div className="group flex items-center gap-4 bg-white/30 backdrop-blur-xl px-6 py-4 rounded-2xl border-2 border-white/50 hover:bg-white/40 hover:border-white/60 transition-all duration-500 shadow-2xl">
                <div className="w-3 h-3 bg-bronze-light rounded-full group-hover:scale-125 transition-transform duration-500 shadow-lg shadow-bronze-base/50"></div>
                <span className="text-white font-bold text-lg tracking-wide" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>80% du PIB national</span>
              </div>
              <div className="group flex items-center gap-4 bg-white/30 backdrop-blur-xl px-6 py-4 rounded-2xl border-2 border-white/50 hover:bg-white/40 hover:border-white/60 transition-all duration-500 shadow-2xl">
                <div className="w-3 h-3 bg-bronze-light rounded-full group-hover:scale-125 transition-transform duration-500 shadow-lg shadow-bronze-base/50"></div>
                <span className="text-white font-bold text-lg tracking-wide" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>Leader du patronat</span>
              </div>
            </div>
          </div>

          {/* Colonne droite - Grille bento optimisée */}
          <div>
            <div className="grid grid-cols-2 gap-5">
              {/* Carte principale - Membres (pleine largeur, grande) */}
              <div className="col-span-2">
                <StatisticItem
                  value={800}
                  label="Membres actifs"
                  prefix="+"
                  size="large"
                  bgColor="bg-primary-900/80 text-white"
                  iconImage="/images/Team5.jpg"
                />
              </div>

              {/* Années d'existence avec image de fond */}
              <div className="col-span-1">
                <StatisticItem
                  value={67}
                  label="Années d'existence"
                  size="medium"
                  bgColor="bg-white/95 "
                  iconImage="/images/logo.png"
                />
              </div>

              {/* Secteurs d'activités avec image de fond */}
              <div className="col-span-1">
                <StatisticItem
                  value={18}
                  label="Secteurs d'activités"
                  size="medium"
                  bgColor="bg-primary-900/80 text-white"
                  iconImage="/images/secteur.jpg"
                />
              </div>

              {/* Présidents avec image de fond (pleine largeur) */}
              <div className="col-span-2">
                <StatisticItem
                  value={11}
                  label="Présidents depuis notre création"
                  size="medium"
                  bgColor="bg-white/95"
                  iconImage="/images/Mr_KOUAKOUA.jpg"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Styles pour les animations */}
      <style jsx>{`
        @keyframes shimmer-card {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        :global(.animate-shimmer-card) {
          animation: shimmer-card 1.5s ease-out;
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        :global(.animate-blob) {
          animation: blob 20s ease-in-out infinite;
        }

        :global(.animation-delay-2000) {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
