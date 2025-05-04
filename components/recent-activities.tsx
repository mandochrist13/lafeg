import Link from "next/link";
import Image from "next/image";
import { ArrowRight} from "lucide-react";

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
    <div className="bg-[#f5f5f5] flex flex-col justify-between overflow-hidden rounded-lg shadow-md">
      <div className="relative h-[300px]">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,102,51,0.8)] to-transparent"></div>
        <div className="absolute top-4 left-4">
          <div className="relative h-12 w-12">
            <div className="bg-[#f39c12] absolute text-white p-2 rounded-md flex items-center justify-center mr-4">
              <span className="text-sm   font-bold">{type}</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-bold uppercase">{title}</h3>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="p-4">
          <p className="text-gray-700">{description}</p>
        </div>
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-[#006633] text-white p-2 rounded-lg flex  items-center justify-center ">
              <span className="text-xs uppercase border-r py-1 px-2">
                {category}
              </span>
              <div className="">
                {" "}
                <span className="text-base font-bold mx-2">{date}</span>
              </div>
            </div>
          </div>
          <Link
            href={link}
            className="bg-[#f39c12] text-white px-4 py-2 rounded hover:bg-[#e67e22]"
          >
            Lire plus
          </Link>
        </div>
      </div>
    </div>
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
      logoUrl: "/images/logo-feg-white.png",
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
      logoUrl: "/images/logo-feg-white.png",
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
      logoUrl: "/images/logo-feg-white.png",
    },
  ];
  const subactivities = [
    {
      id: 5,
      title:
        "Participation de la FEG à la table ronde sur le mécanisme de refinancement hypothécaire au Gabon",
      date: "22 janv 2025",
      category: "Agenda",
      type: "Événement",
      description:
        "La FEG a participé à une table ronde sur le mécanisme de refinancement hypothécaire au Gabon.",
      link: "/actualites/participation-table-ronde",
      imageUrl: "/images/activity1.jpg",
      logoUrl: "/images/logo-feg-white.png",
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
      logoUrl: "/images/logo-feg-white.png",
    },
  ];
  const comun = [
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
      logoUrl: "/images/logo-feg-white.png",
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
      logoUrl: "/images/logo-feg-white.png",
    },
  ];
  const event = [
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
      logoUrl: "/images/logo-feg-white.png",
    },
    {
      id: 4,
      title:
        "Participation de la FEG à la table ronde sur le mécanisme de refinancement hypothécaire au Gabon",
      date: "22 janv 2025",
      category: "Agenda",
      type: "Événement",
      description:
        "La FEG a participé à une table ronde sur le mécanisme de refinancement hypothécaire au Gabon.",
      link: "/actualites/participation-table-ronde",
      imageUrl: "/images/activity1.jpg",
      logoUrl: "/images/logo-feg-white.png",
    },
  ];

  return (
    <div>
      <section className="py-12 px-14">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold pb-2  border-b-2 mb-8 text-[#333]">
            Activités récentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <ActivityCard key={index} {...activity} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-[#f9f9f9]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          <div className="grid grid-cols-1 gap-6">
            {subactivities.map((item) => (
              <div
                key={item.id}
                className="bg-white  rounded-lg shadow flex items-center justify-between h-24"
              >
                <div className="h-full rounded-l-lg ">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="object-cover object-center w-full h-full rounded-l-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg truncate font-bold text-[#f39c12] mb-2">
                    {item.type}
                  </h3>
                  <h3 className="text-lg truncate w-full max-w-[250px] font-bold text-[#006633] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.date}</p>
                </div>
              </div>
            ))}
            <h1 className="flex text-[#006633]">Toutes les Actualités <span className="mx-2"><ArrowRight/></span></h1>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {event.map((item) => (
              <div
                key={item.id}
                className="bg-white  rounded-lg shadow flex items-center justify-between h-24"
              >
                <div className="h-full rounded-l-lg ">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="object-cover object-center w-full h-full rounded-l-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg truncate font-bold text-[#f39c12] mb-2">
                    {item.type}
                  </h3>
                  <h3 className="text-lg truncate w-full max-w-[250px] font-bold text-[#006633] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.date}</p>
                </div>
              </div>
            ))}
                        <h1 className="flex text-[#006633]">Touts les Evenements <span className="mx-2"><ArrowRight/></span></h1>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {comun.map((item) => (
              <div
                key={item.id}
                className="bg-white  rounded-lg shadow flex items-center justify-between h-24"
              >
                <div className="h-full rounded-l-lg ">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="object-cover object-center w-full h-full rounded-l-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg truncate font-bold text-[#f39c12] mb-2">
                    {item.type}
                  </h3>
                  <h3 className="text-lg truncate w-full max-w-[250px] font-bold text-[#006633] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.date}</p>
                </div>
              </div>
            ))}
                        <h1 className="flex text-[#006633]">Toutes les Actualités <span className="mx-2"><ArrowRight/></span></h1>
          </div>
        </div>
      </section>
    </div>
  );
}
