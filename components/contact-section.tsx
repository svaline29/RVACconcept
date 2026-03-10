import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[--color-white]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[--color-primary] font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Contact
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[--color-dark] tracking-tight mb-6">
            SCHEDULE A TOUR
          </h2>
          <p className="text-lg text-[--color-secondary] leading-relaxed mb-10">
            See for yourself why RVAC is the St. Croix Valley&apos;s favorite fitness
            destination. Schedule a free tour and let us show you around.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-10 text-left">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[--color-primary] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[--color-dark]">Location</p>
                <p className="text-[--color-secondary]">1826 Northwestern Ave S, Stillwater, MN 55082</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[--color-primary] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[--color-dark]">Phone</p>
                <a href="tel:651-439-7611" className="text-[--color-secondary] hover:text-[--color-primary]">(651) 439-7611</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[--color-primary] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[--color-dark]">Hours</p>
                <p className="text-[--color-secondary] text-sm">Mon–Thu 5AM–10PM · Fri 5AM–9PM · Sat–Sun 6AM–9PM</p>
              </div>
            </div>
          </div>

          <Button asChild className="bg-[--color-primary] hover:bg-[--color-primary]/90 text-white font-semibold px-8 py-6 text-base">
            <Link href="/contact">Schedule a Free Tour</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
