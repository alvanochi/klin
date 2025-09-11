import HeroSlider from "../molecules/HeroSlider"

export default function HeroSection() {
  return (
    <section className="relative bg-gray-50 py-6">
      <div className="relative z-20">
        <div className="container mx-auto">
          <div className="text-center py-6 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Welcome To <span className="text-blue-600">klin autocare</span>
            </h2>
          </div>
          <HeroSlider />
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
