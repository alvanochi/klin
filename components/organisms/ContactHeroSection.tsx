export default function ContactHeroSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Hubungi Kami</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Butuh bantuan? Kami tersedia untuk menjawab semua pertanyaan Anda dengan cepat dan profesional
            </p>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/professional-workspace-with-laptop-and-calculator-.jpg"
                alt="Professional workspace"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-200 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
