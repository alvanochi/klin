interface NumberCardProps {
  number: string
  title: string
  description: string
}

export default function NumberCard({ number, title, description }: NumberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="text-4xl font-bold text-gray-300 mb-2">{number}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
