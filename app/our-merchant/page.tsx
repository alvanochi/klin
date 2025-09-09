import Header from "../../components/organisms/Header"
import MerchantHeroSection from "../../components/organisms/MerchantHeroSection"
import TopPerformingSection from "../../components/organisms/TopPerformingSection"
import MerchantLocationsSection from "../../components/organisms/MerchantLocationsSection"
import Footer from "../../components/organisms/Footer"

export default function OurMerchantPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <MerchantHeroSection />
      <TopPerformingSection />
      <MerchantLocationsSection />
      <Footer />
    </main>
  )
}
