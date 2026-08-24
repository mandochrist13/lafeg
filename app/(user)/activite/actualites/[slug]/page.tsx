import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowLeft } from "lucide-react"

interface NewsItem {
  title: string
  date: string
  content: string[]
  imageUrl: string
}

interface NewsData {
  [key: string]: NewsItem
}

export default function NewsDetail({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Simulated news database
  const newsData: NewsData = {
    "appel-manifestation-interet": {
      title: "Appel à manifestation d'intérêt (FEG)",
      date: "28 mars 2025",
      content: [
        "La Fédération des Entreprises du Gabon (FEG) lance un appel à manifestation d'intérêt pour le développement de projets innovants dans le secteur privé gabonais.",
        "Cet appel s'adresse aux entreprises gabonaises et internationales souhaitant contribuer au développement économique du Gabon à travers des projets innovants dans les secteurs prioritaires définis par le Plan Stratégique Gabon Émergent (PSGE).",
        "Les secteurs concernés sont notamment l'agriculture, la pêche, le bois, les mines, le tourisme, les technologies de l'information et de la communication, et les énergies renouvelables.",
        "Les entreprises intéressées sont invitées à soumettre leur dossier de candidature comprenant une présentation de l'entreprise, une description du projet, un plan d'affaires, et un calendrier de mise en œuvre.",
        "Les dossiers seront évalués sur la base de critères tels que la pertinence du projet par rapport aux objectifs du PSGE, la viabilité économique et financière, l'impact socio-économique, et la capacité de l'entreprise à mettre en œuvre le projet.",
        "Les entreprises sélectionnées bénéficieront d'un accompagnement de la FEG dans la mise en œuvre de leur projet, notamment en termes de facilitation des démarches administratives, de mise en relation avec des partenaires techniques et financiers, et de promotion du projet auprès des autorités et du public.",
        "La date limite de soumission des dossiers est fixée au 30 avril 2025. Les résultats de la sélection seront communiqués aux candidats au plus tard le 31 mai 2025.",
      ],
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    },
    "participation-table-ronde": {
      title: "Participation de la FEG à la table ronde sur le mécanisme de refinancement hypothécaire au Gabon",
      date: "22 janvier 2025",
      content: [
        "La Fédération des Entreprises du Gabon (FEG) a participé le 22 janvier 2025 à une table ronde sur le mécanisme de refinancement hypothécaire au Gabon, organisée par le Ministère de l'Économie et des Finances en collaboration avec la Banque Mondiale.",
        "Cette table ronde a réuni les principaux acteurs du secteur financier et immobilier du Gabon, ainsi que des experts internationaux, pour discuter de la mise en place d'un mécanisme de refinancement hypothécaire visant à faciliter l'accès au logement pour les Gabonais.",
        "Le Président de la FEG a souligné l'importance de ce mécanisme pour le développement du secteur immobilier et la création d'emplois dans le secteur de la construction. Il a également insisté sur la nécessité de mettre en place un cadre réglementaire adapté et des incitations fiscales pour encourager les investissements dans ce secteur.",
        "Les discussions ont porté sur les différentes options de refinancement hypothécaire, les conditions de mise en œuvre, et les mesures d'accompagnement nécessaires pour garantir le succès de ce mécanisme.",
        "À l'issue de la table ronde, un comité de pilotage a été mis en place pour élaborer une feuille de route pour la mise en œuvre du mécanisme de refinancement hypothécaire au Gabon. La FEG sera représentée dans ce comité et contribuera activement à ses travaux.",
      ],
      imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
    },
    "assises-nationales-emploi": {
      title: "Les assises nationales de l'emploi et des élections professionnelles au cœur des discussions",
      date: "22 janvier 2025",
      content: [
        "La Fédération des Entreprises du Gabon (FEG) a participé le 22 janvier 2025 à une réunion avec le Ministre du Travail sur les assises nationales de l'emploi et les élections professionnelles.",
        "Cette réunion a permis d'échanger sur les préparatifs des assises nationales de l'emploi prévues pour le mois de mars 2025, ainsi que sur l'organisation des élections professionnelles qui se tiendront au cours du second semestre 2025.",
        "Le Président de la FEG a rappelé l'importance de ces assises pour définir une politique de l'emploi adaptée aux réalités économiques du Gabon et aux besoins des entreprises. Il a également souligné la nécessité d'organiser des élections professionnelles transparentes et inclusives pour garantir une représentation équitable des travailleurs.",
        "Le Ministre du Travail a présenté les grandes lignes du programme des assises nationales de l'emploi, qui porteront notamment sur la formation professionnelle, l'adéquation entre l'offre et la demande d'emploi, la promotion de l'entrepreneuriat, et la protection sociale des travailleurs.",
        "Concernant les élections professionnelles, le Ministre a annoncé la mise en place d'un comité de pilotage comprenant des représentants des employeurs, des syndicats de travailleurs, et de l'administration du travail. Ce comité sera chargé de définir les modalités pratiques d'organisation des élections et de veiller à leur bon déroulement.",
        "La FEG a réaffirmé son engagement à contribuer activement à la préparation et à la tenue des assises nationales de l'emploi, ainsi qu'à l'organisation des élections professionnelles, dans l'intérêt des entreprises et des travailleurs gabonais.",
      ],
      imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
    },
    "appel-manifestation-interet-2": {
      title: "Appel à manifestation d'intérêt",
      date: "15 janvier 2025",
      content: [
        "La Fédération des Entreprises du Gabon (FEG) lance un nouvel appel à manifestation d'intérêt pour les entreprises souhaitant participer aux projets de développement économique du Gabon.",
        "Cet appel s'inscrit dans le cadre de la mise en œuvre du Plan Stratégique Gabon Émergent (PSGE) et vise à identifier des entreprises capables de contribuer à la diversification de l'économie gabonaise.",
        "Les entreprises intéressées sont invitées à soumettre leur dossier de candidature comprenant une présentation de l'entreprise, une description des projets envisagés, et un plan d'affaires préliminaire.",
        "Les secteurs prioritaires sont l'agriculture, la pêche, le bois, les mines, le tourisme, les technologies de l'information et de la communication, et les énergies renouvelables.",
        "Les dossiers seront évalués sur la base de critères tels que la pertinence des projets par rapport aux objectifs du PSGE, la viabilité économique et financière, l'impact socio-économique, et la capacité de l'entreprise à mettre en œuvre les projets.",
        "Les entreprises sélectionnées bénéficieront d'un accompagnement de la FEG dans la mise en œuvre de leurs projets, notamment en termes de facilitation des démarches administratives, de mise en relation avec des partenaires techniques et financiers, et de promotion des projets auprès des autorités et du public.",
        "La date limite de soumission des dossiers est fixée au 28 février 2025. Les résultats de la sélection seront communiqués aux candidats au plus tard le 31 mars 2025.",
      ],
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    },
    "reunion-conseil-administration": {
      title: "Réunion du conseil d'administration de la FEG",
      date: "10 décembre 2024",
      content: [
        "Le conseil d'administration de la Fédération des Entreprises du Gabon (FEG) s'est réuni le 10 décembre 2024 pour discuter des orientations stratégiques pour l'année 2025.",
        "Cette réunion a permis de faire le bilan des activités de l'année 2024 et de définir les priorités pour l'année à venir. Le conseil a notamment approuvé le plan d'action 2025, qui s'articule autour de quatre axes stratégiques : la promotion du secteur privé, l'amélioration de l'environnement des affaires, le renforcement des capacités des entreprises, et la défense des intérêts des entreprises.",
        "Le conseil a également approuvé le budget 2025, qui prévoit une augmentation des ressources allouées aux activités de promotion du secteur privé et de renforcement des capacités des entreprises.",
        "Par ailleurs, le conseil a décidé de renforcer la présence de la FEG dans les provinces à travers la création de délégations provinciales. Cette décision vise à rapprocher la FEG des entreprises opérant en dehors de Libreville et à mieux prendre en compte leurs préoccupations.",
        "Enfin, le conseil a approuvé le calendrier des événements majeurs de la FEG pour l'année 2025, notamment le Forum économique Gabon-France prévu en mars, les Assises du secteur privé prévues en juin, et le Gala des entreprises prévu en décembre.",
      ],
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    },
    "forum-economique-gabon-france": {
      title: "Forum économique Gabon-France",
      date: "5 décembre 2024",
      content: [
        "La Fédération des Entreprises du Gabon (FEG) a participé au Forum économique Gabon-France qui s'est tenu à Libreville du 3 au 5 décembre 2024.",
        "Ce forum, organisé conjointement par la FEG et le MEDEF International, a réuni plus de 200 entreprises gabonaises et françaises, ainsi que des représentants des gouvernements des deux pays.",
        "Les discussions ont porté sur les opportunités d'investissement au Gabon, les partenariats public-privé, le transfert de technologies, et le renforcement des capacités des entreprises gabonaises.",
        "Le Président de la FEG a souligné l'importance des relations économiques entre le Gabon et la France, et a appelé à un renforcement de la coopération entre les entreprises des deux pays. Il a également insisté sur la nécessité de créer un environnement des affaires favorable aux investissements étrangers au Gabon.",
        "À l'issue du forum, plusieurs accords de partenariat ont été signés entre des entreprises gabonaises et françaises, notamment dans les secteurs de l'énergie, des infrastructures, de l'agriculture, et des technologies de l'information et de la communication.",
        "Le prochain Forum économique Gabon-France se tiendra à Paris en 2026.",
      ],
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
    },
  }

  const newsItem = newsData[slug] || {
    title: "Article non trouvé",
    date: "",
    content: ["L'article que vous recherchez n'existe pas ou a été supprimé."],
    imageUrl: "/images/placeholder.jpg",
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src={newsItem.imageUrl || "/images/banière.jpg"}
            alt={newsItem.title}
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/activite/actualites"
            className="inline-flex items-center text-bronze-base hover:text-bronze-light mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" /> Retour aux actualités
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-bronze-base mb-4">
              <Calendar size={18} />
              <span className="text-sm font-semibold">{newsItem.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              {newsItem.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="relative h-96">
                <Image
                  src={newsItem.imageUrl || "/placeholder.svg"}
                  alt={newsItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  {newsItem.content.map((paragraph, index) => (
                    <p key={index} className="mb-6 text-gray-700 leading-relaxed text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-gray-200">
                  <Link
                    href="/activite/actualites"
                    className="inline-flex items-center text-primary-900 hover:text-bronze-base font-semibold transition-colors"
                  >
                    <ArrowLeft size={20} className="mr-2" />
                    Retour aux actualités
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
