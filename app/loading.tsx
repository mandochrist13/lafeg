"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Toujours afficher le loader brièvement
    setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 secondes seulement
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 z-50">
      <div className="flex flex-col items-center gap-6">
        {/* Logo animé */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-2xl bg-bronze-base/30 animate-pulse"></div>
          <div className="relative bg-white rounded-full p-8 shadow-2xl">
            <Image
              src="/logo (1).png"
              alt="Logo FEG"
              width={120}
              height={120}
              className="h-24 w-auto animate-pulse"
              priority
            />
          </div>
        </div>

        {/* Texte */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Fédération des Entreprises du Gabon
          </h2>
          <p className="text-bronze-light text-sm">Chargement en cours...</p>
        </div>

        {/* Barre de progression moderne */}
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-bronze-base via-bronze-light to-bronze-base bg-[length:200%_100%] animate-shimmer"></div>
        </div>

        {/* Spinner circulaire */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-bronze-base border-r-bronze-light animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
