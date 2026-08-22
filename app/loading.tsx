"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animation de progression
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    // Masquer le loader après 1.2 secondes
    setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearInterval(progressInterval);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <div className="flex flex-col items-center gap-8">
        {/* Logo avec animation élégante */}
        <div className="relative">
          {/* Cercles d'animation autour du logo */}
          <div className="absolute inset-0 -m-12">
            <div className="absolute inset-0 rounded-full border-2 border-primary-100 animate-ping opacity-20"></div>
            <div className="absolute inset-0 rounded-full border-2 border-bronze-base/30 animate-pulse"></div>
          </div>

          {/* Logo */}
          <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg">
            <Image
              src="/logo (1).png"
              alt="Logo FEG"
              width={100}
              height={100}
              className="h-20 w-auto"
              priority
            />
          </div>
        </div>

        {/* Texte élégant */}
        <div className="text-center space-y-2">
          <h2 className="text-xl font-bold text-primary-900">
            Fédération des Entreprises du Gabon
          </h2>
          <p className="text-sm text-gray-500">Chargement en cours...</p>
        </div>

        {/* Barre de progression minimaliste */}
        <div className="w-64 h-1 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-900 via-bronze-base to-primary-900 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Points animés */}
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-primary-900 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-bronze-base rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-primary-900 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        div {
          animation: fadeIn 0.3s ease-in;
        }
      `}</style>
    </div>
  );
};

export default Loader;
