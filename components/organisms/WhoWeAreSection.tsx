export default function WhoWeAreSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-64 h-40 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <img
                    src="/pos-system-dashboard-interface.jpg"
                    alt="POS System Dashboard"
                    className="w-48 h-28 object-cover rounded"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kami adalah penyedia sistem POS cuci mobil yang dirancang untuk mempermudah pengelolaan transaksi,
                antrean, dan laporan keuangan. Dengan teknologi modern dan antarmuka sederhana, kami membantu pemilik
                usaha meningkatkan efisiensi, mempercepat layanan, dan mengembangkan bisnis secara digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
