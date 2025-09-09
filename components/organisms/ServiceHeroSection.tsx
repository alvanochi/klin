import Image from "next/image"

export default function ServiceHeroSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              PAKAI <span className="text-blue-600">POS KAMI</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Kelola transaksi di carwash dengan mudah dan cepat menggunakan sistem POS kami.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/customer-using-credit-card-with-pos-terminal-at-ca.jpg"
              alt="Customer using POS system at carwash"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
