interface LogoProps {
  className?: string
  variant?: "light" | "dark"
}

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-sm">klin</span>
      </div>
      <span className="font-semibold">
        <span className={variant === "light" ? "text-white" : "text-gray-800"}>klin</span>
        <span className="text-blue-600 ml-1">autocare</span>
      </span>
    </div>
  )
}
