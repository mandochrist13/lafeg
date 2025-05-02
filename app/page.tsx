import NewsSlider from "@/components/news-slider"
import RecentActivities from "@/components/recent-activities"
import HolidayModal from "@/components/holiday-modal"
import Image from "next/image"
import Link from "next/link"
import AdhesionSection from "@/components/raison"
import MissionsSection from "@/components/mission"
import PublicationsSection from "@/components/publication"
import KeyStatistics from "@/components/key"
import PartnersSection from "@/components/partner"
import BecomeMemberForm from "@/components/become"

export default function Home() {
  return (
    <>
      <HolidayModal />
      <NewsSlider />

      {/* <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-[#006633] mb-4">
                Bienvenue à la Fédération des Entreprises du Gabon
              </h2>
              <p className="text-gray-700 mb-4">
                La Fédération des Entreprises du Gabon (FEG) est l'organisation patronale représentative des entreprises
                gabonaises. Elle a pour mission de défendre les intérêts des entreprises et de promouvoir le
                développement économique du Gabon.
              </p>
              <p className="text-gray-700 mb-4">
                Créée en 1983, la FEG regroupe aujourd'hui plus de 300 entreprises de toutes tailles et de tous secteurs
                d'activité. Elle est un interlocuteur privilégié des pouvoirs publics et des partenaires sociaux.
              </p>
              <div className="bg-[#f39c12] text-white p-4 rounded-lg">
                <h3 className="font-bold mb-2">Notre mission</h3>
                <p>" Bâtir ensemble une économie forte pour garantir la souveraineté nationale "</p>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="relative h-80 w-full">
                <Image
                  src="/images/gabon-business.jpg"
                  alt="Entreprises au Gabon"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <RecentActivities />
      
      <AdhesionSection />

      <MissionsSection/>
      <PublicationsSection/>
      <KeyStatistics/>
      <PartnersSection/>
      <BecomeMemberForm/>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[#333]">Nos partenaires</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow flex items-center justify-center h-24">
                <div className="relative h-16 w-full">
                  <Image src={`/images/partner${i}.png`} alt={`Partenaire ${i}`} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#006633]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Rejoignez la Fédération des Entreprises du Gabon</h2>
          <p className="text-white mb-8 max-w-3xl mx-auto">
            Devenez membre de la FEG et bénéficiez de nombreux avantages pour votre entreprise. Rejoignez un réseau
            d'entreprises dynamiques et contribuez au développement économique du Gabon.
          </p>
          <Link
            href="/devenir-membre"
            className="inline-block bg-[#f39c12] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#e67e22] transition-colors"
          >
            DEVENIR MEMBRE
          </Link>
        </div>
      </section>
    </>
  )
}
