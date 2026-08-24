"use client";

import Link from "next/link"
import Image from "next/image"
import { FileText, Download, Calendar } from "lucide-react"
import { motion } from "framer-motion"

interface PublicationProps {
  title: string
  type: string
  date: string
  description: string
  imageUrl: string
  fileUrl: string
}

function PublicationCard({ title, type, date, description, imageUrl, fileUrl }: PublicationProps) {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-bronze-base text-primary-900 text-xs font-bold rounded-full">{type}</span>
        </div>

        {/* Date Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
            <Calendar size={14} className="text-primary-900" />
            <span className="text-xs font-semibold text-gray-700">{date}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-primary-900 mb-3 line-clamp-2 group-hover:text-bronze-dark transition-colors">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{description}</p>

        <div className="flex gap-3 pt-4 border-t border-gray-100">
          <Link
            href={fileUrl}
            className="flex-1 inline-flex items-center justify-center gap-2 text-primary-900 hover:text-bronze-base font-semibold text-sm transition-colors border border-primary-900/20 rounded-lg py-2 hover:bg-primary-50"
          >
            <FileText size={16} />
            Consulter
          </Link>

          <Link
            href={fileUrl}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-900 to-primary-800 hover:from-primary-800 hover:to-primary-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
            download
          >
            <Download size={16} />
            Télécharger
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Publications() {
  const publications = [
    {
      title: "Rapport annuel d'activités 2024",
      type: "Rapport",
      date: "Janvier 2025",
      description:
        "Le rapport annuel 2024 de la FEG présente les activités et les réalisations de la fédération au cours de l'année écoulée.",
      imageUrl: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&h=600&fit=crop",
      fileUrl: "/files/rapport-annuel-2024.pdf",
    },
    {
      title: "Guide de l'investisseur au Gabon",
      type: "Guide",
      date: "Décembre 2024",
      description:
        "Ce guide fournit des informations pratiques pour les investisseurs souhaitant s'implanter au Gabon.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      fileUrl: "/files/guide-investisseur.pdf",
    },
    {
      title: "Étude sur le climat des affaires au Gabon",
      type: "Étude",
      date: "Novembre 2024",
      description:
        "Cette étude analyse le climat des affaires au Gabon et formule des recommandations pour son amélioration.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      fileUrl: "/files/etude-climat-affaires.pdf",
    },
    {
      title: "Bulletin trimestriel - T4 2024",
      type: "Bulletin",
      date: "Octobre 2024",
      description:
        "Le bulletin trimestriel de la FEG présente les principales actualités économiques et les activités de la fédération.",
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
      fileUrl: "/files/bulletin-t4-2024.pdf",
    },
    {
      title: "Livre blanc sur la fiscalité des entreprises",
      type: "Livre blanc",
      date: "Septembre 2024",
      description:
        "Ce livre blanc analyse la fiscalité des entreprises au Gabon et propose des réformes pour la rendre plus compétitive.",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
      fileUrl: "/files/livre-blanc-fiscalite.pdf",
    },
    {
      title: "Guide des bonnes pratiques RSE",
      type: "Guide",
      date: "Août 2024",
      description:
        "Ce guide présente les bonnes pratiques en matière de Responsabilité Sociétale des Entreprises (RSE) au Gabon.",
      imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
      fileUrl: "/files/guide-rse.pdf",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-bronze-base"></div>
              <span className="text-xs font-bold tracking-widest text-bronze-base uppercase">
                Publications
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              Nos Publications
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Découvrez nos rapports, études, guides et bulletins d'information
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publications.map((publication, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <PublicationCard {...publication} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
