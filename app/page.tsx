import Header from "../components/organisms/Header"
import HeroSection from "../components/organisms/HeroSection"
import AchievementsSection from "../components/organisms/AchievementsSection"
import WhyChooseUsSection from "../components/organisms/WhyChooseUsSection"
import ClientsSection from "../components/organisms/ClientsSection"
import CallToActionSection from "../components/organisms/CallToActionSection"
import Footer from "../components/organisms/Footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AchievementsSection />
      <WhyChooseUsSection />
      <ClientsSection />
      <CallToActionSection />
      <Footer />
    </main>
  )
}
