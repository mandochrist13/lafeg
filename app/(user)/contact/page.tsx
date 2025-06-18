"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitError("Une erreur s'est produite. Veuillez réessayer plus tard.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#] mb-8">Contact</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Nous contacter</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin size={24} className="mr-4 text-[#f39c12] flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Adresse</h3>
                  <p>Immeuble ODYSSEE, Boulevard de l'Indépendance, BP 415, Libreville, Gabon</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone size={24} className="mr-4 text-[#f39c12] flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Téléphone</h3>
                  <p>+241 011 77 55 57</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail size={24} className="mr-4 text-[#f39c12] flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p>info@feg.ga</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Horaires d'ouverture</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between py-2 border-b border-gray-300">
                <span className="font-bold">Lundi - Jeudi</span>
                <span>08:00 - 16:30</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-300">
                <span className="font-bold">Vendredi</span>
                <span>08:00 - 12:00</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-bold">Samedi - Dimanche</span>
                <span>Fermé</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>

            {submitSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
              </div>
            )}

            {submitError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">{submitError}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#063d21]"
                  />
                </div>

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
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Sujet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#063d21]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
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
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Nous trouver</h2>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127504.85340007505!2d9.3868844!3d0.3909265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107f3b91c56c5a0f%3A0xb9a1e8b1d9e9fda!2sLibreville%2C%20Gabon!5e0!3m2!1sfr!2sfr!4v1651234567890!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
