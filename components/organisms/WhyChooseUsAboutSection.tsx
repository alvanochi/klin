import NumberCard from "../atoms/NumberCard"

export default function WhyChooseUsAboutSection() {
  const features = [
    {
      number: "01",
      title: "Cepat & Efisien",
      description: "Sistem yang dirancang untuk mempercepat proses transaksi dan mengurangi waktu tunggu",
    },
    {
      number: "02",
      title: "Mudah Digunakan",
      description: "Interface yang intuitif dan mudah dipahami oleh semua kalangan pengguna",
    },
    {
      number: "03",
      title: "Layanan Terbaik",
      description: "Dukungan teknis 24/7 dan pelatihan komprehensif untuk tim Anda",
    },
    {
      number: "04",
      title: "Dukungan Penuh",
      description: "Tim support yang siap membantu kapan saja Anda membutuhkan bantuan",
    },
    {
      number: "05",
      title: "Data Real-Time",
      description: "Laporan dan analisis bisnis yang akurat dan dapat diakses secara real-time",
    },
  ]

  const benefits = [
    "Mempercepat transaksi dan mengurangi antrean",
    "Tampilan sederhana dan ramah pengguna",
    "Tim support kami siap membantu kapan saja Anda butuh",
    "Tim kami siap membantu setiap langkah bisnis Anda",
    "Pantau laporan dan omzet kapan saja, di mana saja",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">Mengapa Memilih Kita</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <ul className="space-y-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <NumberCard
                  key={index}
                  number={feature.number}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
