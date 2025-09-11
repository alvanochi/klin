import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

export default function LocationSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Lokasi Kantor Pusat
          </h2>
          <p className="text-lg text-gray-600">
            Kunjungi kantor pusat kami untuk konsultasi langsung
          </p>
        </div>

        <div className="relative rounded-lg overflow-hidden h-[500px]">
          <Map locations={[{ latitude: -6.225, longitude: 106.809, title: "Kantor Pusat Klin", description: "8 PARC PLACE TOWER B LANTAI 2 SCBD" }]} />
        </div>
      </div>
    </section>
  );
}
