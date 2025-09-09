import ProjectGallery from "../molecules/ProjectGallery"

export default function ProjectsSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lihat berbagai proyek dan layanan berkualitas tinggi yang telah kami kerjakan
          </p>
        </div>
        <ProjectGallery />
      </div>
    </section>
  )
}
