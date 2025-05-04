"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, MapPin, Phone, Mail } from "lucide-react";

export default function HolidayModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        style={{
          backgroundImage: "url('/images/1ermai.jpg')",
        }}
        className=" p-8 max-w-3xl h-[550px] bg-cover bg-center w-full mx-4 relative"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Fermer"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
}
