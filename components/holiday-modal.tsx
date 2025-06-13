"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function HolidayModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000]/60 backdrop-blur-sm p-4">
      {/* Conteneur de l'image avec ratio 16/9 */}
      <div className="relative w-full max-w-4xl aspect-[16/9]">
        <img
          src="/images/1ermai.jpg"
          alt="1er Mai - Fête du Travail"
          className=" w-[100%] h-[100%] rounded-sm"
        />
        
        {/* Bouton fermer stylisé */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-3 -right-3 z-10 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Fermer"
        >
          <X size={24} className="text-gray-800" />
        </button>
        
        {/* Effet de bordure moderne */}
        <div className="absolute inset-0 border-2 border-[#063d21] rounded-sm pointer-events-none"></div>
      </div>
    </div>
  );
}