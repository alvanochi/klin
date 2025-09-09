export default function LocationSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Lokasi Kantor Pusat</h2>
          <p className="text-lg text-gray-600">Kunjungi kantor pusat kami untuk konsultasi langsung</p>
        </div>

        <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ height: "500px" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Gedung A</h3>
              <p className="text-gray-600">
                8 PARC PLACE TOWER B LANTAI 2 SCBD
                <br />
                JL. JEND SUDIRMAN KAV 52-53
                <br />
                Jakarta Selatan, DKI Jakarta 12190
              </p>
            </div>
          </div>

          <img
            src="/interactive-map-showing-office-location-in-jakarta.jpg"
            alt="Office location map"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

      </div>
    </section>
  )
}
