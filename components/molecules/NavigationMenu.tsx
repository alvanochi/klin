"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavigationMenuProps {
  className?: string
  isMobile?: boolean
  onItemClick?: () => void
}

export default function NavigationMenu({ className = "", isMobile = false, onItemClick }: NavigationMenuProps) {
  const pathname = usePathname()

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Service", href: "/service" },
    { name: "Our Merchant", href: "/our-merchant" },
    { name: "Contact Us", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const baseClasses = isMobile
    ? `flex flex-col space-y-4 ${className}`
    : `hidden md:flex items-center space-x-8 ${className}`

  return (
    <nav className={baseClasses}>
      {menuItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={onItemClick}
          className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
            isActive(item.href) ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""
          } ${isMobile ? "py-2 px-4 hover:bg-gray-50 rounded-md" : ""}`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
