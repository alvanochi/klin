import Header from "../../components/organisms/Header"
import AboutHeroSection from "../../components/organisms/AboutHeroSection"
import VisionMissionSection from "../../components/organisms/VisionMissionSection"
import WhoWeAreSection from "../../components/organisms/WhoWeAreSection"
import WhyChooseUsAboutSection from "../../components/organisms/WhyChooseUsAboutSection"
import Footer from "../../components/organisms/Footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AboutHeroSection />
      <VisionMissionSection />
      <WhoWeAreSection />
      <WhyChooseUsAboutSection />
      <Footer />
    </main>
  )
}
