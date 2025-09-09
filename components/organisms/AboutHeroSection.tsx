export default function AboutHeroSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full text-2xl font-bold mb-4">
              <span className="text-white">klin</span>
              <span className="text-yellow-400 ml-2">autocare</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Meningkatkan Efisiensi Bisnis Cuci Mobil dengan Teknologi
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Kami adalah perusahaan teknologi yang berfokus pada pengembangan aplikasi Point of Sale (POS) khusus untuk
            industri cuci mobil. Dengan pemahaman mendalam tentang tantangan operasional yang dihadapi oleh pemilik
            usaha cuci mobil, kami hadir untuk memberikan solusi yang praktis, modern, dan efisien.
          </p>
          <div className="flex justify-center items-center gap-8 mt-12">
            <div className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">Merchant</div>
            </div>
            <div className="bg-gray-800 text-white px-6 py-3 rounded-lg">
              <div className="text-2xl font-bold">2024</div>
              <div className="text-sm">Founded</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
