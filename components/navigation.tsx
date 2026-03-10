"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#amenities", label: "Amenities" },
]

const programLinks = [
  { label: "Personal Training", href: "/#programs" },
  { label: "Group Fitness", href: "/#programs" },
  { label: "Swim & Aquatics", href: "/pool" },
  { label: "Pilates", href: "/#programs" },
  { label: "Youth & Teen", href: "/#programs" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProgramsOpen, setIsProgramsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobile = () => setIsMobileMenuOpen(false)

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
            <Image
              src="/images/logo.png"
              alt="River Valley Athletic Club"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <span className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold text-white tracking-tight whitespace-nowrap">
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

            {/* Programs dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="text-sm font-medium text-white hover:text-[--color-primary] transition-colors flex items-center gap-1"
                  aria-expanded={undefined}
                  aria-haspopup="menu"
                >
                  Programs
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-[200px] !bg-[#1a1a1a] border border-white/10 shadow-xl backdrop-blur-none">
                {programLinks.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link
                      href={item.href}
                      className="text-white focus:bg-[--color-primary]/20 focus:text-white cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/membership"
              className="text-sm font-medium text-white hover:text-[--color-primary] transition-colors"
            >
              Membership
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-white hover:text-[--color-primary] transition-colors"
            >
              Contact
            </Link>
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
              <Link href="/membership">Join Now</Link>
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
                onClick={closeMobile}
                className="block text-lg font-medium text-white hover:text-[--color-primary] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div>
              <button
                onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                className="flex items-center justify-between w-full text-lg font-medium text-white hover:text-[--color-primary] transition-colors"
              >
                Programs
                <ChevronDown className={`w-5 h-5 transition-transform ${isProgramsOpen ? "rotate-180" : ""}`} />
              </button>
              {isProgramsOpen && (
                <div className="mt-2 pl-4 space-y-2 border-l-2 border-[--color-white]/20">
                  {programLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMobile}
                      className="block text-[--color-secondary] hover:text-[--color-primary] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/membership"
              onClick={closeMobile}
              className="block text-lg font-medium text-white hover:text-[--color-primary] transition-colors"
            >
              Membership
            </Link>
            <Link
              href="/contact"
              onClick={closeMobile}
              className="block text-lg font-medium text-white hover:text-[--color-primary] transition-colors"
            >
              Contact
            </Link>
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
                <Link href="/membership" onClick={closeMobile}>Join Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
