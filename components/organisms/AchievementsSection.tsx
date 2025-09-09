import StatCard from "../atoms/StatCard"

export default function AchievementsSection() {
  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">PENCAPAIAN KAMI</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <StatCard number="10+" label="10 TAHUN PENGALAMAN" />
          <StatCard number="300+" label="TENAGA AHLI" />
          <StatCard number="95%" label="KLIEN TERPUASKAN" />
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-gray-600 text-4xl opacity-15"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            +
          </div>
        ))}
      </div>
    </section>
  )
}
