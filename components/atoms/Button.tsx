"use client"

import type React from "react"

interface ButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
}

export default function Button({ children, variant = "primary", size = "md", className = "", onClick }: ButtonProps) {
  const baseClasses = "font-semibold rounded-lg transition-all duration-300 hover:transform hover:scale-105"

  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg",
    secondary: "bg-white hover:bg-gray-50 text-blue-600 border border-blue-200",
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
