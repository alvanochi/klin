export default function ClientsSection() {
  const clientImages = ["/images/client-1.jpg", "/images/client-2.jpg", "/images/client-3.jpg"]

  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Clients</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Selamat datang di Galeri Klien kami, tempat di mana setiap proyek menjadi bukti dedikasi dan
              profesionalisme. Kami percaya bahwa setiap detail adalah investasi dalam membangun kepercayaan dan
              menghasilkan karya terbaik. Inilah potret kolaborasi yang telah memberikan nilai dan dampak nyata bagi
              mitra kami.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src={clientImages[0] || "/placeholder.svg"}
                alt="Client 1"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src={clientImages[1] || "/placeholder.svg"}
                alt="Client 2"
                className="w-full h-32 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="pt-8">
              <img
                src={clientImages[2] || "/placeholder.svg"}
                alt="Client 3"
                className="w-full h-56 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
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
