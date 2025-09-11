import AboutHeroSection from "../../components/organisms/AboutHeroSection"
import VisionMissionSection from "../../components/organisms/VisionMissionSection"
import WhoWeAreSection from "../../components/organisms/WhoWeAreSection"
import WhyChooseUsAboutSection from "../../components/organisms/WhyChooseUsAboutSection"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHeroSection />
      <VisionMissionSection />
      <WhoWeAreSection />
      <WhyChooseUsAboutSection />
    </main>
  )
}
