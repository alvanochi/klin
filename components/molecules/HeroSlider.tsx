"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const slides = [
  {
    id: 1,
    image: "/images/hero-slide-1.png",
    title: "Kami hadir untuk membuat mobil Anda selalu tampil bersih dan mengkilap setiap saat",
    subtitle: "10+ Tahun Pengalaman",
  },
  {
    id: 2,
    image: "/images/hero-slide-2.png",
    title: "Layanan profesional dengan teknologi modern untuk hasil maksimal",
    subtitle: "300+ Tenaga Ahli",
  },
  {
    id: 3,
    image: "/images/hero-slide-3.png",
    title: "Kepuasan pelanggan adalah prioritas utama kami",
    subtitle: "95% Kepuasan Pelanggan",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
   <div className="relative h-[520px] mx-4 overflow-hidden rounded-lg shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex h-full">
            <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-8">
              <div className="text-center md:text-left max-w-lg">
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">{slide.title}</h1>
                <p className="text-yellow-400 text-lg font-semibold mb-8">{slide.subtitle}</p>
              </div>
            </div>
            <div className="hidden md:block w-1/2 relative">
              <Image
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-yellow-400" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
