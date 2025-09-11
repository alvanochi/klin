import ContactInfoItem from "../atoms/ContactInfoItem"
import SocialIcon from "../atoms/SocialIcon"

export default function ContactInformation() {
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h2>
      <p className="text-gray-600 mb-8">Siap Membantu dan Bertumbuh Bersama Anda!</p>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Ada pertanyaan?</h3>
        <p className="text-gray-600 text-sm mb-6">
          Kami selalu siap memberikan jawaban dan solusi terbaik untuk kebutuhan Anda. Jangan ragu untuk menghubungi
          kami kapan saja.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Ingin berkembang lebih jauh?</h3>
        <p className="text-gray-600 text-sm mb-6">
          Bergabunglah sebagai merchant dan rasakan kemudahan mengelola bisnis dengan dukungan penuh dari kami. Perluas
          jangkauan, tingkatkan penjualan, dan nikmati berbagai keuntungan bersama platform kami.
        </p>
      </div>

      <ContactInfoItem
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        }
        title="Telepon"
        content="088 9999 88 909"
      />

      <ContactInfoItem
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        }
        title="Email"
        content="tech.klinautocare@gmail.com"
      />

      <ContactInfoItem
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        }
        title="Alamat"
        content={[
          "8 PARC PLACE TOWER B LANTAI 2 SCBD",
          "JL. JEND SUDIRMAN KAV",
          "52-53, Kelurahan Senayan, Kec.",
          "Kebayoran Baru, Kota Adm.",
          "Jakarta Selatan, Provinsi DKI Jakarta 12190",
        ]}
      />

      <div className="mt-8">
        <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          <SocialIcon platform="linkedin" className="bg-black/10 hover:bg-black/20 text-blue-500" />
          <SocialIcon platform="instagram" className="bg-black/10 hover:bg-black/20 text-blue-500" />
          <SocialIcon platform="facebook" className="bg-black/10 hover:bg-black/20 text-blue-500" />
        </div>
      </div>
    </div>
  )
}
