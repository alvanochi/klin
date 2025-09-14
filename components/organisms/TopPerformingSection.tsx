import MerchantCard from "../atoms/MerchantCard"

export default function TopPerformingSection() {
 
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top Performing Merchant 2025</h2>
          <p className="text-lg text-gray-600">Merchant terbaik yang menggunakan platform KlinAutoCare</p>
        </div>

        <div className="space-y-12">
            <MerchantCard
              name={"Elegance Wear"}
              category={"Car Wash"}
              rating={5}
              achievement={"100+ produk terjual setiap minggu"}
              badge={"Top Growth"}
              image={"/images/top-perform.png"}
              className="max-w-5xl mx-auto"
            />
        </div>
      </div>
    </section>
  )
}
