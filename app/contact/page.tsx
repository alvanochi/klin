import ContactHeroSection from "../../components/organisms/ContactHeroSection"
import ContactFormSection from "../../components/organisms/ContactFormSection"
import LocationSection from "../../components/organisms/LocationSection"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHeroSection />
      <ContactFormSection />
      <LocationSection />
    </main>
  )
}
