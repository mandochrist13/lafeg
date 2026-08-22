import HolidayModal from "@/components/holiday-modal"
import HeroEnhanced from "@/components/hero-enhanced"
import FegActualitesSection from "@/components/feg-actualites-section"
import President from "@/components/president"
import KeyStatistics from "@/components/key"
import AdhesionSection from "@/components/raison"
import MissionsSection from "@/components/mission"
import PublicationsSection from "@/components/publication"
import PartnersSection from "@/components/partner"

export default function Home() {
  return (
    <>
      <HolidayModal />
      <HeroEnhanced />
      <FegActualitesSection />

      <President />
      <KeyStatistics/>
      <AdhesionSection />
      <MissionsSection/>
      <PublicationsSection/>
      <PartnersSection/>
      {/* <BecomeMemberForm/>   */}
    </>
  )
}
