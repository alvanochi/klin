import VisionMissionCard from "../molecules/VisionMissionCard"

export default function VisionMissionSection() {
  const visionContent =
    "Menjadi perusahaan berbasis profit yang memberi keuntungan berlimpah kepada stakeholder/investor."

  const missionContent = [
    "Menjadi perusahaan berbasis profit yang memberi keuntungan berlimpah kepada stakeholder/investor",
    "Memberikan layanan prima dan solusi yang bernilai tambah kepada pengguna",
    "Memberikan lingkungan kerja yang aman dan nyaman, meningkatkan kesejahteraan dan memberikan kesempatan berkembang kepada karyawan",
    "Menjadikan Klin sebagai acuan pelaksanaan kepatuhan dan tata kelola carwash/bengkel yang baik dengan menggunakan kemajuan teknologi",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <VisionMissionCard title="VISI" content={visionContent} />
          <VisionMissionCard title="MISI" content={missionContent} />
        </div>
      </div>
    </section>
  )
}
