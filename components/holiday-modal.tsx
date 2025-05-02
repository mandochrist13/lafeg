"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, MapPin, Phone, Mail } from "lucide-react"

export default function HolidayModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show modal after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-8 max-w-4xl w-full mx-4 relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Fermer"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <div className="flex flex-col items-center">
              <div className="relative h-20 w-40 mb-4">
                <Image src="/images/logo-feg.png" alt="FEG Logo" fill className="object-contain" />
              </div>
              <div className="relative h-64 w-64 mt-4">
                <Image src="/images/gabon-map-workers.png" alt="Carte du Gabon" fill className="object-contain" />
              </div>
            </div>
          </div>

          <div className="md:w-2/3 md:pl-8">
            <div className="text-center mb-8">
              <h2 className="text-[#f39c12] text-7xl font-bold">
                1<sup>er</sup>Mai
              </h2>
              <h3 className="text-[#f39c12] text-3xl font-bold">FÊTE DU TRAVAIL</h3>
            </div>

            <p className="mb-4">
              La <span className="font-bold">Fédération des Entreprises du Gabon</span> vous souhaite une excellente
              Fête du travail.
            </p>

            <p className="italic text-center my-8 border-t border-b border-gray-200 py-4">
              " Bâtir ensemble une économie forte pour garantir la souveraineté nationale "
            </p>

            <div className="flex flex-col md:flex-row justify-between text-sm">
              <div className="flex items-center mb-2 md:mb-0">
                <Phone size={16} className="mr-2 text-[#006633]" />
                <span>+241 011 77 55 57</span>
              </div>

              <div className="flex items-center mb-2 md:mb-0">
                <MapPin size={16} className="mr-2 text-[#006633]" />
                <span>Immeuble ODYSSEE, Boulevard de l'Indépendance, BP 415</span>
              </div>

              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-[#006633]" />
                <span>info@feg.ga</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
