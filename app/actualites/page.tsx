import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"

interface NewsItemProps {
  title: string
  excerpt: string
  date: string
  imageUrl: string
  slug: string
}

function NewsItem({ title, excerpt, date, imageUrl, slug }: NewsItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 mb-2">
          <Calendar size={16} className="mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{excerpt}</p>
        <Link
          href={`/actualites/${slug}`}
          className="inline-block bg-[#f39c12] text-white px-4 py-2 rounded hover:bg-[#e67e22]"
        >
          Lire plus
        </Link>
      </div>
    </div>
  )
}

export default function Actualites() {
  const newsItems = [
    {
      title: "Appel à manifestation d'intérêt (FEG)",
      excerpt:
        "La Fédération des Entreprises du Gabon lance un appel à manifestation d'intérêt pour le développement de projets innovants dans le secteur privé gabonais.",
      date: "28 mars 2025",
      imageUrl: "/images/news1.jpg",
      slug: "appel-manifestation-interet",
    },
    {
      title: "Participation de la FEG à la table ronde sur le mécanisme de refinancement hypothécaire au Gabon",
      excerpt:
        "La FEG a participé à une table ronde importante sur le mécanisme de refinancement hypothécaire, un enjeu majeur pour le développement économique du pays.",
      date: "22 janvier 2025",
      imageUrl: "/images/news2.jpg",
      slug: "participation-table-ronde",
    },
    {
      title: "Les assises nationales de l'emploi et des élections professionnelles au cœur des discussions",
      excerpt:
        "La FEG a participé aux discussions sur les assises nationales de l'emploi et les élections professionnelles avec le Ministère du Travail.",
      date: "22 janvier 2025",
      imageUrl: "/images/news3.jpg",
      slug: "assises-nationales-emploi",
    },
    {
      title: "Appel à manifestation d'intérêt",
      excerpt:
        "Nouvel appel à manifestation d'intérêt pour les entreprises souhaitant participer aux projets de développement économique du Gabon.",
      date: "15 janvier 2025",
      imageUrl: "/images/news4.jpg",
      slug: "appel-manifestation-interet-2",
    },
    {
      title: "Réunion du conseil d'administration de la FEG",
      excerpt:
        "Le conseil d'administration de la FEG s'est réuni pour discuter des orientations stratégiques pour l'année 2025.",
      date: "10 décembre 2024",
      imageUrl: "/images/news5.jpg",
      slug: "reunion-conseil-administration",
    },
    {
      title: "Forum économique Gabon-France",
      excerpt:
        "La FEG a participé au forum économique Gabon-France visant à renforcer les relations économiques entre les deux pays.",
      date: "5 décembre 2024",
      imageUrl: "/images/news6.jpg",
      slug: "forum-economique-gabon-france",
    },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#006633] mb-8">Actualités</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <NewsItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
