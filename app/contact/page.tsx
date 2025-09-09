import Header from "../../components/organisms/Header"
import ContactHeroSection from "../../components/organisms/ContactHeroSection"
import ContactFormSection from "../../components/organisms/ContactFormSection"
import LocationSection from "../../components/organisms/LocationSection"
import Footer from "../../components/organisms/Footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ContactHeroSection />
      <ContactFormSection />
      <LocationSection />
      <Footer />
    </main>
  )
}
