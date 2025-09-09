interface MapPinProps {
  name: string
  top: string
  left: string
}

export default function MapPin({ name, top, left }: MapPinProps) {
  return (
    <div className="absolute transform -translate-x-1/2 -translate-y-full" style={{ top, left }}>
      {/* Pin Icon */}
      <div className="relative">
        <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
        {/* Label */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white px-2 py-1 rounded shadow-lg text-sm font-medium text-gray-800 whitespace-nowrap">
          {name}
        </div>
      </div>
    </div>
  )
}
