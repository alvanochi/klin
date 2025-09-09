"use client"

import type React from "react"

interface FormTextareaProps {
  label: string
  name: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  required?: boolean
  rows?: number
}

export default function FormTextarea({
  label,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  rows = 4,
}: FormTextareaProps) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-blue-600 font-medium mb-2">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-vertical"
      />
    </div>
  )
}
