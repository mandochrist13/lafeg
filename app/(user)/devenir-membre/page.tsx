"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle, Send } from "lucide-react"

export default function DevenirMembre() {
  const [formData, setFormData] = useState({
    companyName: "",
    sector: "",
    address: "",
    contactPerson: "",
    position: "",
    email: "",
    phone: "",
    employees: "",
    turnover: "",
    motivation: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError("")

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your server
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (error) {
      setSubmitError("Une erreur s'est produite. Veuillez réessayer plus tard.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const benefits = [
    "Représentation et défense des intérêts des entreprises auprès des pouvoirs publics",
    "Accès à un réseau d'entreprises et d'opportunités d'affaires",
    "Participation aux événements organisés par la FEG (forums, séminaires, ateliers)",
    "Accès à l'information économique et juridique",
    "Accompagnement dans les démarches administratives",
    "Visibilité accrue grâce à la promotion des membres sur les supports de communication de la FEG",
    "Accès à des formations et des programmes de renforcement des capacités",
    "Participation aux commissions sectorielles et thématiques",
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#063d21] mb-8">Devenir membre</h1>

        {submitSuccess ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-[#063d21]" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Demande envoyée avec succès !</h2>
            <p className="text-gray-700 mb-6">
              Nous avons bien reçu votre demande d'adhésion à la Fédération des Entreprises du Gabon. Notre équipe va
              étudier votre dossier et vous contactera dans les plus brefs délais.
            </p>
            <p className="text-gray-700">
              Pour toute question, n'hésitez pas à nous contacter au +241 011 77 55 57 ou par email à info@feg.ga.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-6">Formulaire d'adhésion</h2>

                {submitError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                    {submitError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-200">
                      Informations sur l'entreprise
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="companyName" className="block mb-2 font-medium">
                          Nom de l'entreprise <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#063d21]"
                        />
                      </div>

                      <div>
                        <label htmlFor="sector" className="block mb-2 font-medium">
                          Secteur d'activité <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="sector"
                          name="sector"
                          value={formData.sector}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#063d21]"
                        >
                          <option value="">Sélectionnez un secteur</option>
                          <option value="Agriculture">Agriculture</option>
                          <option value="Banque et Finance">Banque et Finance</option>
                          <option value="BTP">BTP</option>
                          <option value="Commerce">Commerce</option>
                          <option value="Énergie">Énergie</option>
                          <option value="Industrie">Industrie</option>
                          <option value="Mines">Mines</option>
                          <option value="Pétrole et Gaz">Pétrole et Gaz</option>
                          <option value="Services">Services</option>
                          <option value="TIC">TIC</option>
                          <option value="Tourisme">Tourisme</option>
                          <option value="Transport">Transport</option>
                          <option value="Autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label htmlFor="address" className="block mb-2 font-medium">
                        Adresse <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#063d21]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label htmlFor="employees" className="block mb-2 font-medium">
                          Nombre d'employés <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="employees"
                          name="employees"
                          value={formData.employees}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#063d21]"
                        >
                          <option value="">Sélectionnez</option>
                          <option value="1-10">1-10</option>
                          <option value="11-50">11-50</option>
                          <option value="51-100">51-100</option>
                          <option value="101-250">101-250</option>
                          <option value="251-500">251-500</option>
                          <option value="501+">501+</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="turnover" className="block mb-2 font-medium">
                          Chiffre d'affaires annuel <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="turnover"
                          name="turnover"
                          value={formData.turnover}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#063d21]"
                        >
                          <option value="">Sélectionnez</option>
                          <option value="Moins de 100 millions FCFA">Moins de 100 millions FCFA</option>
                          <option value="100-500 millions FCFA">100-500 millions FCFA</option>
                          <option value="500 millions - 1 milliard FCFA">500 millions - 1 milliard FCFA</option>
                          <option value="1-5 milliards FCFA">1-5 milliards FCFA</option>
                          <option value="Plus de 5 milliards FCFA">Plus de 5 milliards FCFA</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-200">Personne de contact</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contactPerson" className="block mb-2 font-medium">
                          Nom et prénom <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="contactPerson"
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#063d21]"
                        />
                      </div>

                      <div>
                        <label htmlFor="position" className="block mb-2 font-medium">
                          Fonction <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#063d21]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label htmlFor="email" className="block mb-2 font-medium">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#063d21]"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block mb-2 font-medium">
                          Téléphone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#063d21]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="motivation" className="block mb-2 font-medium">
                      Motivation pour rejoindre la FEG <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#063d21]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center bg-[#063d21] text-white px-6 py-3 rounded-md hover:bg-[#005528] transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>Envoi en cours...</>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Soumettre la demande
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Avantages de l'adhésion</h2>

                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={20} className="text-bronze-base mr-2 flex-shrink-0 mt-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                  <h3 className="font-bold mb-2">Cotisation annuelle</h3>
                  <p className="mb-2">
                    Le montant de la cotisation annuelle varie en fonction de la taille et du chiffre d'affaires de
                    l'entreprise.
                  </p>
                  <p>
                    Pour plus d'informations sur les cotisations, veuillez nous contacter au +241 011 77 55 57 ou par
                    email à info@feg.ga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
