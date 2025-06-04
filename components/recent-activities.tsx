import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ActivityProps {
  title: string;
  date: string;
  link: string;
  imageUrl: string;
  type?: string;
  category?: string;
  description?: string;
}

function ActivityCard({
  title,
  date,
  link,
  imageUrl,
  type,
  category,
  description,
}: ActivityProps) {
  return (
    <div className="bg-white flex flex-col justify-between overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,102,51,0.8)] to-transparent"></div>
        {type && (
          <div className="absolute top-4 left-4">
            <div className="bg-[#f39c12] text-white px-3 py-1 rounded-md text-xs font-bold">
              {type}
            </div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-bold uppercase line-clamp-2">{title}</h3>
        </div>
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <div className="p-4">
          <p className="text-gray-600 line-clamp-3">{description}</p>
        </div>
        <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center">
            <div className="bg-[#006633] text-white p-2 rounded-lg flex flex-col sm:flex-row items-center">
              {category && (
                <span className="text-xs uppercase border-b sm:border-b-0 sm:border-r py-1 px-2">
                  {category}
                </span>
              )}
              <span className="text-sm font-medium px-2">{date}</span>
            </div>
          </div>
          <Link
            href={link}
            className="bg-[#f39c12] text-white px-4 py-2 rounded hover:bg-[#e67e22] transition-colors duration-300 text-sm font-medium whitespace-nowrap"
          >
            Lire plus
          </Link>
        </div>
      </div>
    </div>
  );
}

function SmallActivityCard({ title, date, type, imageUrl, link }: ActivityProps) {
  return (
    <Link href={link}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-24 flex items-center overflow-hidden group">
        <div className="relative h-full w-24 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="100px"
          />
        </div>
        <div className="p-3 flex-grow">
          <span className="text-xs font-semibold text-[#f39c12]">{type}</span>
          <h3 className="text-sm font-bold text-[#006633] line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-gray-500 mt-1">{date}</p>
        </div>
      </div>
    </Link>
  );
}

export default function RecentActivities() {
  const activities = [
    {
      id: 1,
      title:
        "Participation de la FEG à la table ronde sur le mécanisme de refinancement hypothécaire au Gabon",
      date: "22 janv 2025",
      category: "Agenda",
      type: "Événement",
      description:
        "La FEG a participé à une table ronde sur le mécanisme de refinancement hypothécaire au Gabon.",
      link: "/actualites/participation-table-ronde",
      imageUrl: "/images/activity1.jpg",
    },
    {
      id: 2,
      title:
        "Les assises nationales de l'emploi et des élections professionnelles au cœur des discussions",
      date: "22 janv 2025",
      category: "Agenda",
      type: "Événement",
      description:
        "Les assises nationales de l'emploi et des élections professionnelles au cœur des discussions.",
      link: "/actualites/assises-nationales-emploi",
      imageUrl: "/images/activity2.jpg",
    },
    {
      id: 3,
      title: "Appel à manifestation d'intérêt",
      date: "2025",
      category: "Agenda",
      type: "Événement",
      description:
        "Appel à manifestation d'intérêt pour les entreprises intéressées.",
      link: "/actualites/appel-manifestation-interet",
      imageUrl: "/images/activity3.jpg",
    },
  ];

  const subactivities = [
    {
      id: 5,
      title:
        "Participation de la FEG à la table ronde sur le mécanisme de refinancement hypothécaire au Gabon",
      date: "22 janv 2025",
      category: "Agenda",
      type: "Actualité",
      description:
        "La FEG a participé à une table ronde sur le mécanisme de refinancement hypothécaire au Gabon.",
      link: "/actualites/participation-table-ronde",
      imageUrl: "/images/activity1.jpg",
    },
    {
      id: 6,
      title: "Appel à manifestation d'intérêt",
      date: "2025",
      category: "Agenda",
      type: "Actualité",
      description:
        "Appel à manifestation d'intérêt pour les entreprises intéressées.",
      link: "/actualites/appel-manifestation-interet",
      imageUrl: "/images/activity3.jpg",
    },
  ];

  const events = [
    {
      id: 7,
      title: "Forum économique national 2025",
      date: "15 mars 2025",
      category: "Agenda",
      type: "Événement",
      description: "Le forum économique national annuel réunissant les acteurs clés du secteur.",
      link: "/evenements/forum-economique",
      imageUrl: "/images/activity2.jpg",
    },
    {
      id: 8,
      title: "Conférence sur l'innovation",
      date: "30 avril 2025",
      category: "Agenda",
      type: "Événement",
      description: "Conférence annuelle sur l'innovation et les technologies émergentes.",
      link: "/evenements/conference-innovation",
      imageUrl: "/images/activity1.jpg",
    },
  ];

  const communications = [
    {
      id: 9,
      title: "Nouvelle publication trimestrielle",
      date: "10 fév 2025",
      category: "Agenda",
      type: "Communication",
      description: "Notre dernier rapport trimestriel est maintenant disponible.",
      link: "/communications/publication-trimestrielle",
      imageUrl: "/images/activity3.jpg",
    },
    {
      id: 10,
      title: "Communiqué de presse officiel",
      date: "5 janv 2025",
      category: "Agenda",
      type: "Communication",
      description: "Lire notre dernier communiqué de presse concernant les nouvelles initiatives.",
      link: "/communications/communique-presse",
      imageUrl: "/images/activity2.jpg",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Cards Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#333] pb-3 border-b-2 border-[#006633] mb-8">
            Activités récentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <ActivityCard key={activity.id} {...activity} />
            ))}
          </div>
        </div>
      </section>

      {/* Sub Activities Section */}
      <section className="py-12 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Actualités */}
            <div className="space-y-6 gap-6">
              <h3 className="text-xl font-bold text-[#006633] border-b-2 border-[#f39c12] pb-2">
                Actualités
              </h3>
              <div className="space-y-4 gap-6">
                {subactivities.map((item) => (
                  <SmallActivityCard key={item.id} {...item} />
                ))}
              </div>
              <Link
                href="/actualites"
                className="flex items-center text-[#006633] font-semibold hover:text-[#f39c12] transition-colors duration-300"
              >
                Toutes les Actualités
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            {/* Événements */}
            <div className="space-y-6 gap-6">
              <h3 className="text-xl font-bold text-[#006633] border-b-2 border-[#f39c12] pb-2">
                Événements
              </h3>
              <div className="space-y-4">
                {events.map((item) => (
                  <SmallActivityCard key={item.id} {...item} />
                ))}
              </div>
              <Link
                href="/evenements"
                className="flex items-center text-[#006633] font-semibold hover:text-[#f39c12] transition-colors duration-300"
              >
                Tous les Événements
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            {/* Communications */}
            <div className="space-y-6 ">
              <h3 className="text-xl font-bold text-[#006633] border-b-2 border-[#f39c12] pb-2">
                Communications
              </h3>
              <div className="space-y-4">
                {communications.map((item) => (
                  <SmallActivityCard key={item.id} {...item} />
                ))}
              </div>
              <Link
                href="/communications"
                className="flex items-center text-[#006633] font-semibold hover:text-[#f39c12] transition-colors duration-300"
              >
                Toutes les Communications
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}