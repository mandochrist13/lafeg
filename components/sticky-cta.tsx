"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, UserPlus } from "lucide-react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Afficher le CTA après scroll
    const handleScroll = () => {
      if (window.scrollY > 300 && !isClosed) {
        setIsVisible(true);
      } else if (window.scrollY <= 300) {
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
      <div className="relative">
        {/* Bouton adhérer */}
        <Link
          href="/devenir-membre"
          className="bg-[linear-gradient(110deg,#b0b08b,45%,#dcdaa4,55%,#b0b08b)] bg-[length:200%_100%] shimmer-ultra-slow text-primary-900 font-bold text-base px-6 py-4 flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-2xl rounded-r-xl group"
        >
          <UserPlus size={22} className="group-hover:scale-110 transition-transform" />
          <span className="whitespace-nowrap">Adhérez</span>
        </Link>

        {/* Bouton fermer */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 bg-white text-primary-900 rounded-full p-1.5 shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:rotate-90 border-2 border-primary-900"
          aria-label="Fermer"
        >
          <X size={16} />
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
