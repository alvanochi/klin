interface StatCardProps {
  number: string
  label: string
  className?: string
}

export default function StatCard({ number, label, className = "" }: StatCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-4xl md:text-6xl font-bold text-blue-600 mb-4">{number}</div>
      <div className="text-gray-700 text-sm md:text-base font-medium uppercase tracking-wide">{label}</div>
    </div>
  )
}
