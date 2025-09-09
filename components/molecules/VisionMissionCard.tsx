interface VisionMissionCardProps {
  title: string
  content: string | string[]
}

export default function VisionMissionCard({ title, content }: VisionMissionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{title}</h2>
      {Array.isArray(content) ? (
        <ul className="space-y-4">
          {content.map((item, index) => (
            <li key={index} className="text-gray-600 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 leading-relaxed text-center">{content}</p>
      )}
    </div>
  )
}
