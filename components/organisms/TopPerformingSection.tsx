import MerchantCard from "../atoms/MerchantCard"

export default function TopPerformingSection() {
  const topMerchants = [
    {
      name: "Elegance Wear",
      category: "Car Wash",
      rating: 5,
      achievement: "100+ produk terjual setiap minggu",
      badge: "Top Growth",
      image: "/luxury-car-being-washed-at-premium-carwash.jpg",
    },
    {
      name: "Premium Auto Care",
      category: "Car Wash",
      rating: 5,
      achievement: "95% kepuasan pelanggan",
      badge: "Best Service",
      image: "/professional-car-detailing-service.jpg",
    },
    {
      name: "Quick Wash Express",
      category: "Car Wash",
      rating: 4,
      achievement: "200+ mobil dilayani per hari",
      badge: "High Volume",
      image: "/express-car-wash-service.jpg",
    },
  ]

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top Performing Merchant 2025</h2>
          <p className="text-lg text-gray-600">Merchant terbaik yang menggunakan platform KlinAutoCare</p>
        </div>

        <div className="space-y-12">
          {/* {topMerchants.map((merchant, index) => ( */}
            <MerchantCard
              name={"Elegance Wear"}
              category={"Car Wash"}
              rating={5}
              achievement={"100+ produk terjual setiap minggu"}
              badge={"Top Growth"}
              image={"/images/top-perform.png"}
              className="max-w-5xl mx-auto"
            />
          {/* ))} */}
        </div>
      </div>
    </section>
  )
}
