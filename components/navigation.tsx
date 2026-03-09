"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#amenities", label: "Amenities" },
  { href: "#programs", label: "Programs" },
  { href: "#membership", label: "Membership" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? "shadow-lg" : ""
      }`}
      style={{
        backgroundColor: isScrolled ? "var(--color-dark)" : "rgba(0,0,0,0.78)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="River Valley Athletic Club"
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl md:text-2xl font-bold text-white tracking-tight whitespace-nowrap">
              River Valley Athletic Club
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white hover:text-[--color-primary] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:651-439-7611"
              className="flex items-center gap-2 text-sm text-white hover:text-[--color-primary] transition-colors"
            >
              <Phone className="w-4 h-4" />
              (651) 439-7611
            </a>
            <Button
              asChild
              className="bg-[--color-primary] hover:bg-[--color-primary]/90 text-white font-semibold px-6"
            >
              <Link href="#membership">Join Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[--color-dark] border-t border-[--color-white]/10">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-white hover:text-[--color-primary] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[--color-white]/10">
              <a
                href="tel:651-439-7611"
                className="flex items-center gap-2 text-sm text-white mb-4"
              >
                <Phone className="w-4 h-4" />
                (651) 439-7611
              </a>
              <Button
                asChild
                className="w-full bg-[--color-primary] hover:bg-[--color-primary]/90 text-white font-semibold"
              >
                <Link href="#membership">Join Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
