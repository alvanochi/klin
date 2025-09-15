'use client'

import dynamic from "next/dynamic"

const Map = dynamic(() => import("@/components/organisms/Map"), { ssr: false })
export default function MerchantLocationsSection() {
  const locations = [
    { latitude: -6.225, longitude: 106.809, title: "RPN Pademangan"},
    { latitude: -5.025, longitude: 100.809, title: "RPN Cilebut"},
    { latitude: -3.125, longitude: 97.809, title: "RPN Bogor"},
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lokasi Merchant Kami</h2>
          <p className="text-lg text-gray-600">Tersebar di berbagai kota untuk melayani kebutuhan Anda</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gray-100 rounded-2xl shadow-lg">
            <Map locations={locations} />
          </div>
        </div>
      </div>
    </section>
  )
}
