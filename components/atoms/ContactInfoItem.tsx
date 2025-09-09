import type React from "react"
interface ContactInfoItemProps {
  icon: React.ReactNode
  title: string
  content: string | string[]
}

export default function ContactInfoItem({ icon, title, content }: ContactInfoItemProps) {
  return (
    <div className="flex items-start space-x-4 mb-6">
      <div className="flex-shrink-0 w-8 h-8 text-blue-600">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        {Array.isArray(content) ? (
          content.map((line, index) => (
            <p key={index} className="text-gray-600 text-sm">
              {line}
            </p>
          ))
        ) : (
          <p className="text-gray-600 text-sm">{content}</p>
        )}
      </div>
    </div>
  )
}
