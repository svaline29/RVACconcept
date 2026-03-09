import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

const footerLinks = {
  facility: [
    { label: "Fitness Floor", href: "#amenities" },
    { label: "Aquatic Center", href: "#amenities" },
    { label: "Racquetball & Basketball", href: "#amenities" },
    { label: "Group Fitness", href: "#amenities" },
  ],
  programs: [
    { label: "Personal Training", href: "#programs" },
    { label: "Swim Lessons", href: "#programs" },
    { label: "Pilates", href: "#programs" },
    { label: "Youth & Teen Programs", href: "#programs" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Membership", href: "#membership" },
    { label: "Contact", href: "#contact" },
    { label: "Virtual Tour", href: "https://rivervalleyathleticclub.com/virtual-tour", external: true },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[--color-dark] text-[--color-white]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="River Valley Athletic Club"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <div>
                <span className="text-2xl font-bold tracking-tight">RVAC</span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[--color-secondary]">
                  River Valley Athletic Club
                </p>
              </div>
            </div>
            <p className="text-[--color-secondary] leading-relaxed mb-6 max-w-sm">
              Stillwater&apos;s full-service athletic club. 50+ free fitness classes, pools, spa, childcare, and more.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/rivervalleyathleticclub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[--color-white]/10 flex items-center justify-center hover:bg-[--color-primary] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/rvac_stillwater"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[--color-white]/10 flex items-center justify-center hover:bg-[--color-primary] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Facility</h3>
            <ul className="space-y-3">
              {footerLinks.facility.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[--color-secondary] hover:text-[--color-primary] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Programs</h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[--color-secondary] hover:text-[--color-primary] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[--color-secondary] hover:text-[--color-primary] transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[--color-secondary] hover:text-[--color-primary] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[--color-white]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[--color-secondary]">
              &copy; {new Date().getFullYear()} River Valley Athletic Club. All rights reserved.
            </p>
            <p className="text-xs text-[--color-secondary]/60">
              This is a concept redesign. Not affiliated with the actual RVAC.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
