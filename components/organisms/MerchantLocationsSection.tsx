import Image from "next/image"
import MapPin from "../atoms/MapPin"

export default function MerchantLocationsSection() {
  const locations = [
    { name: "RPN Bogor", top: "15%", left: "65%" },
    { name: "RPN Rancamaya", top: "35%", left: "25%" },
    { name: "RPN Padalarang", top: "65%", left: "35%" },
    { name: "RPN Cilebut", top: "75%", left: "15%" },
    { name: "RPN Bandung", top: "85%", left: "75%" },
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lokasi Merchant Kami</h2>
          <p className="text-lg text-gray-600">Tersebar di berbagai kota untuk melayani kebutuhan Anda</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/merchant-locations-map.jpg"
              alt="Peta lokasi merchant"
              width={800}
              height={500}
              className="w-full h-96 md:h-[500px] object-cover"
            />

            {locations.map((location, index) => (
              <MapPin key={index} name={location.name} top={location.top} left={location.left} />
            ))}
          </div>

          <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg">
            <button className="p-2 hover:bg-gray-50 border-b border-gray-200">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-50">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
