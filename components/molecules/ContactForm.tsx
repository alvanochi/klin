"use client"

import type React from "react"

import { useState } from "react"
import FormInput from "../atoms/FormInput"
import FormTextarea from "../atoms/FormTextarea"
import Button from "../atoms/Button"

const API_CONFIG = {
  baseURL: "https://your-api-domain.com", // Change this to your API base URL
  endpoint: "/api/contact", // Change this to your contact endpoint
  timeout: 10000, // Request timeout in milliseconds
}

interface FormData {
  fullName: string
  phoneNumber: string
  email: string
  carwashName: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    carwashName: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // API Integration - Modify this section based on your backend requirements
      const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers your API requires
          // 'Authorization': 'Bearer your-token',
          // 'X-API-Key': 'your-api-key',
        },
        body: JSON.stringify({
          // Modify field names to match your API expectations
          full_name: formData.fullName,
          phone_number: formData.phoneNumber,
          email: formData.email,
          carwash_name: formData.carwashName,
          message: formData.message,
          // Add any additional fields your API requires
          // source: 'website',
          // timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        // Reset form on success
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          carwashName: "",
          message: "",
        })
      } else {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormInput
        label="Nama Lengkap"
        name="fullName"
        placeholder="Masukan Nama lengkap"
        value={formData.fullName}
        onChange={handleInputChange}
        required
      />

      <FormInput
        label="Nomor Telepon"
        name="phoneNumber"
        type="tel"
        placeholder="Masukan Nomor Telepon"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        required
      />

      <FormInput
        label="Email Anda"
        name="email"
        type="email"
        placeholder="Masukan Email Anda"
        value={formData.email}
        onChange={handleInputChange}
        required
      />

      <FormInput
        label="Nama Carwash Anda"
        name="carwashName"
        placeholder="Masukan Nama Carwash Anda"
        value={formData.carwashName}
        onChange={handleInputChange}
        required
      />

      <FormTextarea
        label="Pesan"
        name="message"
        placeholder="Masukan Pesan yang ingin anda sampaikan"
        value={formData.message}
        onChange={handleInputChange}
        required
        rows={5}
      />

      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 text-sm">Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 text-sm">Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.</p>
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
      </Button>
    </form>
  )
}
