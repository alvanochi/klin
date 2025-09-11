interface LogoProps {
  className?: string
  variant?: "light" | "dark"
}

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-sm">klin</span>
      </div>
      <span className="font-semibold">
        <span className="text-yellow-400">autocare</span>
      </span>
    </div>
  )
}
