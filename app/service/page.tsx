import ServiceHeroSection from "../../components/organisms/ServiceHeroSection"
import ProjectsSection from "../../components/organisms/ProjectsSection"
import MainServicesSection from "../../components/organisms/MainServicesSection"

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <ServiceHeroSection />
        <ProjectsSection />
        <MainServicesSection />
      </main>
    </div>
  )
}
