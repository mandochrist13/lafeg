import Link from "next/link"
import Image from "next/image"
import { FileText, Download, Calendar } from "lucide-react"

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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-[#063d21] text-white text-sm px-3 py-1 rounded-full">{type}</span>
          <div className="flex items-center text-gray-500">
            <Calendar size={16} className="mr-1" />
            <span className="text-sm">{date}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>

        <div className="flex justify-between items-center">
          <Link href={fileUrl} className="inline-flex items-center text-[#063d21] hover:underline">
            <FileText size={16} className="mr-2" />
            Consulter
          </Link>

          <Link
            href={fileUrl}
            className="inline-flex items-center bg-primary hover:bg-primary-800 text-white px-3 py-1 rounded"
            download
          >
            <Download size={16} className="mr-2" />
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
      title: "Rapport annuel 2024",
      type: "Rapport",
      date: "15 mars 2025",
      description:
        "Le rapport annuel 2024 de la FEG présente les activités et les réalisations de la fédération au cours de l'année écoulée.",
      imageUrl: "/images/publication1.jpg",
      fileUrl: "/files/rapport-annuel-2024.pdf",
    },
    {
      title: "Guide de l'investisseur au Gabon",
      type: "Guide",
      date: "10 février 2025",
      description:
        "Ce guide fournit des informations pratiques pour les investisseurs souhaitant s'implanter au Gabon.",
      imageUrl: "/images/publication2.jpg",
      fileUrl: "/files/guide-investisseur.pdf",
    },
    {
      title: "Étude sur le climat des affaires au Gabon",
      type: "Étude",
      date: "25 janvier 2025",
      description:
        "Cette étude analyse le climat des affaires au Gabon et formule des recommandations pour son amélioration.",
      imageUrl: "/images/publication3.jpg",
      fileUrl: "/files/etude-climat-affaires.pdf",
    },
    {
      title: "Bulletin trimestriel - T4 2024",
      type: "Bulletin",
      date: "15 janvier 2025",
      description:
        "Le bulletin trimestriel de la FEG présente les principales actualités économiques et les activités de la fédération.",
      imageUrl: "/images/publication4.jpg",
      fileUrl: "/files/bulletin-t4-2024.pdf",
    },
    {
      title: "Livre blanc sur la fiscalité des entreprises",
      type: "Livre blanc",
      date: "10 décembre 2024",
      description:
        "Ce livre blanc analyse la fiscalité des entreprises au Gabon et propose des réformes pour la rendre plus compétitive.",
      imageUrl: "/images/publication5.jpg",
      fileUrl: "/files/livre-blanc-fiscalite.pdf",
    },
    {
      title: "Guide des bonnes pratiques RSE",
      type: "Guide",
      date: "25 novembre 2024",
      description:
        "Ce guide présente les bonnes pratiques en matière de Responsabilité Sociétale des Entreprises (RSE) au Gabon.",
      imageUrl: "/images/publication6.jpg",
      fileUrl: "/files/guide-rse.pdf",
    },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#063d21] mb-8">Publications</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((publication, index) => (
            <PublicationCard key={index} {...publication} />
          ))}
        </div>
      </div>
    </div>
  )
}
