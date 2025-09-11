import Link from "next/link"
import Logo from "../atoms/Logo"
import ContactInfo from "../molecules/ContactInfo"

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <Logo variant="light" />
            <p className="text-white/90 leading-relaxed">
              Kami adalah perusahaan jasa pencucian mobil profesional yang mengutamakan kualitas, kecepatan, dan
              kenyamanan. Dengan teknologi modern dan tim berpengalaman, kami hadir untuk menjaga kendaraan Anda tetap
              bersih dan berkilau setiap saat.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Tautan Cepat</h3>
            <div className="space-y-3">
              <div>
                <Link href={"/about"} className="text-white font-semibold mb-2">Tentang Kami</Link>
              </div>
              <div>
                <Link href={"/service"} className="text-white font-semibold">Layanan</Link>
              </div>
            </div>
          </div>

          <ContactInfo />
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/70">© 2025 KlinAutoCare Indonesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
