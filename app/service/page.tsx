import Header from "../../components/organisms/Header"
import ServiceHeroSection from "../../components/organisms/ServiceHeroSection"
import ProjectsSection from "../../components/organisms/ProjectsSection"
import MainServicesSection from "../../components/organisms/MainServicesSection"
import Footer from "../../components/organisms/Footer"

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ServiceHeroSection />
        <ProjectsSection />
        <MainServicesSection />
      </main>
      <Footer />
    </div>
  )
}
