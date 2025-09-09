import FeatureBadge from "../atoms/FeatureBadge"

export default function WhyChooseUsSection() {
  const features = [
    "Hemat Waktu",
    "Booking Online Mudah",
    "Hasil Maksimal & Detail Bersih",
    "Lokasi Strategis & Akses Mudah",
    "Pilihan Paket Lengkap & Transparan",
    "Layanan Profesional & Berpengalaman",
  ]

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Mengapa Memilih Kita</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Kami memberikan solusi terbaik dan layanan yang terpercaya untuk kebutuhan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/images/car-wash-service.jpg"
              alt="Car wash service"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <FeatureBadge key={index} className="block w-full text-center">
                {feature}
              </FeatureBadge>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-gray-600 text-3xl opacity-15"
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
