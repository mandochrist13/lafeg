import Image from "next/image"
import Link from "next/link"

export default function VoiceOfBusiness() {
  return (
    <div className="bg-[#FDF6E9] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              La voix des affaires au Gabon, une question d'engagement historique
            </h2>

            <p className="text-gray-700 mb-4">
              À travers des interventions régulières auprès du gouvernement, des institutions et des partenaires
              nationaux et internationaux, la FEG travaille jour après jour à l'amélioration du climat des affaires au
              Gabon pour le secteur privé. Les négociations et les séances de travail sur un projet peuvent se
              poursuivre pendant plusieurs années avant d'aboutir à un résultat satisfaisant pour les parties.
            </p>

            <p className="text-gray-700 mb-6">
              C'est pourquoi la FEG a à cœur de déployer la même énergie vibrante tout en cultivant un sentiment d'unité
              parmi ses membres, et en particulier le bureau exécutif.
            </p>

            <Link
              href="/la-feg"
              className="inline-block bg-[#f39c12] text-white px-6 py-2 rounded hover:bg-[#e67e22] transition-colors"
            >
              LIRE LA SUITE
            </Link>
          </div>

          <div className="md:w-1/3">
            <div className="relative h-80 w-full md:h-96">
              <div className="absolute inset-0 bg-[#f39c12] rounded-lg transform translate-x-2 translate-y-2"></div>
              <div className="relative h-full w-full rounded-lg overflow-hidden">
                <Image src="/images/ppl.png" alt="Président de la FEG" fill className="object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
