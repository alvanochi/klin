import Button from "../atoms/Button"

export default function CallToActionSection() {
  return (
    <section className="bg-white py-20 relative overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-balance">
          Siap menjadi bagian dari kita?
        </h2>
        <p className="text-gray-600 text-lg max-w-4xl mx-auto mb-10 leading-relaxed text-pretty">
          Dengan menjadi merchant kami, Anda akan mendapatkan visibilitas lebih luas, transaksi lebih mudah, dan
          keuntungan lebih besar. Daftar sekarang, wujudkan bisnis impian Anda bersama kami.
        </p>
        <Button size="lg" className="shadow-2xl">
          Hubungi Sekarang
        </Button>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-gray-600 text-2xl opacity-15"
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
