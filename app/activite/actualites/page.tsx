import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";

interface NewsItemProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  slug: string;
}

function NewsItem({ title, excerpt, date, imageUrl, slug }: NewsItemProps) {
  return (
    <div className="group bg-white rounded-sm border-2 border-[#005528] transition-shadow duration-300 overflow-hidden">
      {/* Image avec effet de zoom subtil */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Contenu compact */}
      <div className="p-5">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar size={14} className="mr-1.5" />
          <span>{date}</span>
        </div>

        <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-[#005528] transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{excerpt}</p>

        <Link
          href={`/actualites/${slug}`}
          className="inline-flex items-center text-sm font-medium text-[#005528] hover:text-[#004d32] transition-colors"
        >
          Lire plus
          <ArrowRight
            size={16}
            className="ml-1.5 transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}

export default function Actualites() {
  const newsItems = [
    {
      title: "Appel à manifestation d'intérêt",
      excerpt:
        "La FEG lance un appel pour des projets innovants dans le secteur privé gabonais.",
      date: "28 mars 2025",
      imageUrl: "/images/news1.jpg",
      slug: "appel-manifestation-interet",
    },
    {
      title: "Table ronde sur le refinancement",
      excerpt:
        "Participation de la FEG à une table ronde sur le refinancement hypothécaire.",
      date: "22 jan 2025",
      imageUrl: "/images/news2.jpg",
      slug: "participation-table-ronde",
    },
    {
      title: "Assises nationales de l'emploi",
      excerpt:
        "Discussions sur les assises nationales avec le Ministère du Travail.",
      date: "22 jan 2025",
      imageUrl: "/images/news3.jpg",
      slug: "assises-nationales-emploi",
    },
    {
      title: "Nouvel appel à projets",
      excerpt: "Opportunités pour les entreprises gabonaises.",
      date: "15 jan 2025",
      imageUrl: "/images/news4.jpg",
      slug: "appel-manifestation-interet-2",
    },
    {
      title: "Conseil d'administration",
      excerpt: "Orientation stratégique pour l'année 2025.",
      date: "10 déc 2024",
      imageUrl: "/images/news5.jpg",
      slug: "reunion-conseil-administration",
    },
    {
      title: "Forum Gabon-France",
      excerpt: "Renforcement des relations économiques.",
      date: "5 déc 2024",
      imageUrl: "/images/news6.jpg",
      slug: "forum-economique-gabon-france",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Les dernières nouvelles{" "}
              <span className="text-[#005528]">FEG</span>
            </h1>
            <div className="w-24 h-1 bg-[#005528] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Restez informés des dernières initiatives et événements de la
              Fédération des Entreprises du Gabon
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {newsItems.map((item, index) => (
              <NewsItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
