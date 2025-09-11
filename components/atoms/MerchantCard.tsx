import Image from "next/image"

interface MerchantCardProps {
  name: string
  category: string
  rating: number
  achievement: string
  badge: string
  image: string
  className?: string
}

export default function MerchantCard({
  name,
  category,
  rating,
  achievement,
  badge,
  image,
  className = "",
}: MerchantCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden ${className}`}>
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="lg:w-1/2 relative">
          <Image
            src={image}
            alt={name}
            width={400}
            height={300}
            className="w-full h-64 lg:h-full object-cover"
          />
          {/* Growth Icon */}
          <div className="absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-lg">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
            </svg>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 p-8 bg-blue-50">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Nama Merchant:</h3>
              <p className="text-xl font-bold text-gray-900">{name}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Kategori:</h3>
              <p className="text-xl text-gray-900">{category}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Rating:</h3>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-6 h-6 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Pencapaian:</h3>
              <p className="text-lg text-gray-900">{achievement}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Badge Eksklusif:</h3>
              <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">{badge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
