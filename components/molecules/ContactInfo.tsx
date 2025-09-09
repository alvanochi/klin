import SocialIcon from "../atoms/SocialIcon"

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white mb-4">Kontak</h3>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 text-yellow-400">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </div>
          <span className="text-white">tech.klinautocare@gmail.com</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-6 h-6 text-yellow-400">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </div>
          <span className="text-white">088 9999 88 909</span>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-6 h-6 text-yellow-400 mt-1">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <div className="text-white">
            <p>8 PARC PLACE TOWER B LANTAI 2 SCBD</p>
            <p>
              JL. JEND SUDIRMAN KAV 52-53, Kelurahan Senayan, Kec. Kebayoran Baru, Kota Adm. Jakarta Selatan, Provinsi
              DKI Jakarta 12190
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <SocialIcon platform="linkedin" />
        <SocialIcon platform="instagram" />
        <SocialIcon platform="facebook" />
      </div>
    </div>
  )
}
