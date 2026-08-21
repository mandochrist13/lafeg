"use client";
import Image from "next/image";

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
      <div className="relative flex justify-center items-center w-full max-w-5xl aspect-[16/12] lg:aspect-[16/9]">
        <Image
        width={800}
        height={450}
          src="/images/nomitation.jpg"
          alt="1er Mai - Fête du Travail"
          className="object-center object-cover w-auto h-[100%] rounded-sm"
        />
        
        {/* Bouton fermer stylisé */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute flex justify-center items-center -top-3 -right-3 z-10 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Fermer"
        >
          <X size={24} className="text-gray-800" />
        </button>
        
        {/* Effet de bordure moderne */}
        <div className="absolute inset-0 w-[70%] h-[100%] rounded-sm pointer-events-none"></div>
      </div>
    </div>
  );
}