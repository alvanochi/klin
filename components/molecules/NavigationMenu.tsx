"use client"

import { useState } from "react"
import Link from "next/link"

interface NavigationMenuProps {
  className?: string
}

export default function NavigationMenu({ className = "" }: NavigationMenuProps) {
  const [activeItem, setActiveItem] = useState("Home")

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Service", href: "/service" },
    { name: "Our Merchant", href: "/our-merchant" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <nav className={`hidden md:flex items-center space-x-8 ${className}`}>
      {menuItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={() => setActiveItem(item.name)}
          className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
            activeItem === item.name ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
