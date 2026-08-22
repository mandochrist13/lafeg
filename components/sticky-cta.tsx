"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, UserPlus } from "lucide-react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Afficher le CTA après 2 secondes de scroll
    const handleScroll = () => {
      if (window.scrollY > 500 && !isClosed) {
        setIsVisible(true);
      } else if (window.scrollY <= 500) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClosed]);

  const handleClose = () => {
    setIsClosed(true);
    setIsVisible(false);
  };

  if (!isVisible || isClosed) return null;

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 animate-slideInLeft">
      <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white shadow-2xl rounded-r-xl overflow-hidden flex items-stretch">
        {/* Contenu principal */}
        <div className="flex flex-col py-4 px-5 gap-2">
          <h3 className="font-bold text-sm uppercase tracking-wide">
            Suivez le mouvement
          </h3>
          <div className="flex flex-col gap-1 text-xs">
            <Link
              href="/devenir-membre"
              className="hover:text-bronze-light transition-colors duration-300 flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-bronze-base rounded-full"></span>
              Économie
            </Link>
            <Link
              href="/devenir-membre"
              className="hover:text-bronze-light transition-colors duration-300 flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-bronze-base rounded-full"></span>
              Entrepreneuriat
            </Link>
          </div>
        </div>

        {/* Bouton adhérer vertical */}
        <Link
          href="/devenir-membre"
          className="bg-[linear-gradient(110deg,#b0b08b,45%,#dcdaa4,55%,#b0b08b)] bg-[length:200%_100%] animate-shimmer text-primary-900 font-bold text-sm px-4 flex items-center justify-center hover:scale-105 transition-transform duration-300 relative group"
        >
          <div className="flex items-center gap-2 -rotate-0">
            <UserPlus size={18} className="group-hover:scale-110 transition-transform" />
            <span className="whitespace-nowrap">Adhérez</span>
          </div>
        </Link>

        {/* Bouton fermer */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 bg-white text-primary-900 rounded-full p-1 shadow-lg hover:bg-bronze-light hover:text-white transition-all duration-300 transform hover:rotate-90"
          aria-label="Fermer"
        >
          <X size={14} />
        </button>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%) translateY(-50%);
            opacity: 0;
          }
          to {
            transform: translateX(0) translateY(-50%);
            opacity: 1;
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
