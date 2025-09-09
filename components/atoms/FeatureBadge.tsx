import type React from "react"
interface FeatureBadgeProps {
  children: React.ReactNode
  className?: string
}

export default function FeatureBadge({ children, className = "" }: FeatureBadgeProps) {
  return (
    <div
      className={`bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 text-white text-sm md:text-base font-medium ${className}`}
    >
      {children}
    </div>
  )
}
