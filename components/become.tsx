"use client"

import type React from "react"
import { useState } from "react"

export default function BecomeMemberForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    sector: "",
    legalForm: "",
    phone1: "",
    phone2: "",
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
    console.log("Formulaire soumis:", formData)
  }

  return (
    <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-[#063d21] mb-4">
                Bienvenue à la Fédération des Entreprises du Gabon
              </h2>
              <p className="text-gray-700 mb-4">
                La Fédération des Entreprises du Gabon (FEG) est l'organisation patronale représentative des entreprises
                gabonaises. Elle a pour mission de défendre les intérêts des entreprises et de promouvoir le
                développement économique du Gabon.
              </p>
              <p className="text-gray-700 mb-4">
                Créée en 1983, la FEG regroupe aujourd'hui plus de 300 entreprises de toutes tailles et de tous secteurs
                d'activité. Elle est un interlocuteur privilégié des pouvoirs publics et des partenaires sociaux.
              </p>
              <div className="bg-[#f39c12] text-white p-4 rounded-lg">
                <h3 className="font-bold mb-2">Notre mission</h3>
                <p>" Bâtir ensemble une économie forte pour garantir la souveraineté nationale "</p>
              </div>
            </div>
            <div className="md:col-span-1">
              <BecomeMemberForm />
            </div>
          </div>
        </div>
      </section>
  )
}
