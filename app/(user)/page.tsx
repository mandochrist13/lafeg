import HolidayModal from "@/components/holiday-modal"
import HeroEnhanced from "@/components/hero-enhanced"
import ActivitesPhotos from "@/components/activites-photos"
import RecentActivities from "@/components/recent-activities"
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
      <ActivitesPhotos />
      <RecentActivities />

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
