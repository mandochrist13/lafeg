"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const partners = [
  { id: 1, name: "CIAN", logo: "/images/partners/cian.png" },
  { id: 2, name: "CCEM", logo: "/images/partners/ccem.png" },
  { id: 3, name: "IOE", logo: "/images/partners/ioe.png" },
  { id: 4, name: "CPCCAF", logo: "/images/partners/cpccaf.png" },
  { id: 5, name: "ARPEGE", logo: "/images/partners/arpege.png" },
  { id: 6, name: "OIT", logo: "/images/partners/oit.png" },
  { id: 7, name: "MEDEF", logo: "/images/partners/medef.png" },
  { id: 8, name: "CGECI", logo: "/images/partners/cgeci.png" },
]

export default function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    companyName: "",
    status: "",
    email: "",
    acceptTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Traitement du formulaire
    console.log("Inscription newsletter:", formData)
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = direction === "left" ? -current.offsetWidth / 2 : current.offsetWidth / 2
      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2 text-center">Nos partenaires</h2>
        <p className="text-center text-gray-600 mb-8">
          Les partenaires de la FEG l'accompagnent au quotidien dans ses actions et missions en faveur de l'amélioration
          du climat des affaires au Gabon.
        </p>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
            aria-label="Précédent"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide space-x-8 py-4 px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {partners.map((partner) => (
              <div key={partner.id} className="flex-shrink-0 w-40">
                <div className="h-24 bg-white rounded-lg shadow-sm flex items-center justify-center p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
            aria-label="Suivant"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-6">
          <Link
            href="/partenaires"
            className="border border-[#f39c12] text-[#f39c12] px-6 py-2 rounded hover:bg-[#f39c12] hover:text-white transition-colors"
          >
            TOUT AFFICHER
          </Link>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-[#006633] text-white py-10 px-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Inscrivez-vous à notre newsletter afin de recevoir nos actualités
          </h2>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="md:col-span-1">
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Raison sociale *"
                  className="w-full p-2 text-black rounded"
                  required
                />
              </div>

              <div className="md:col-span-1">
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full p-2 text-black rounded"
                  required
                >
                  <option value="">Statut *</option>
                  <option value="membre">Membre</option>
                  <option value="partenaire">Partenaire</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="md:col-span-1">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  className="w-full p-2 text-black rounded"
                  required
                />
              </div>

              <div className="md:col-span-1">
                <button
                  type="submit"
                  className="w-full bg-[#f39c12] text-white py-2 px-4 rounded font-bold hover:bg-[#e67e22] transition-colors"
                >
                  S'INSCRIRE À NOTRE NEWSLETTER
                </button>
              </div>
            </div>

            <div className="mt-4 flex items-start">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="mt-1 mr-2"
                required
              />
              <label className="text-sm">J'accepte de recevoir les informations de la FEG et ses partenaires</label>
            </div>

            <div className="flex justify-center mt-4">
              <div className="bg-white p-2 rounded w-full max-w-[220px]">
                <div className="text-xs text-gray-500 flex items-center justify-between">
                  <input type="checkbox" className="mr-2" />
                  <span>Je ne suis pas un robot</span>
                  <img src="/images/recaptcha.png" alt="reCAPTCHA" className="h-8 w-8" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
