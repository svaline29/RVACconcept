import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background: gympic2 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/gympic2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[--color-dark]/70 via-[--color-dark]/50 to-[--color-dark]/80" />
      {/* Left-side gradient: darker over text, lighter toward image */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
        }}
      />

      {/* Content - inline color overrides body text-foreground so hero text stays white */}
      <div
        className="relative z-10 max-w-7xl mx-auto pl-16 md:pl-20 pr-6 lg:pr-8 text-left"
        style={{ color: "#ffffff", textShadow: "0 1px 3px rgba(0,0,0,0.6), 0 2px 12px rgba(0,0,0,0.4)" }}
      >
        <p className="font-medium tracking-[0.3em] uppercase text-sm mb-6" style={{ color: "#29ABE2" }}>
          Stillwater, Minnesota
        </p>
        <h1 className="font-[family-name:var(--font-oswald)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white">
          YOUR STRONGEST
          <br />
          SELF
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.95)" }}>
          Stillwater&apos;s full-service athletic club.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
          <Button
            asChild
            size="lg"
            className="font-semibold px-8 py-6 text-lg border-0"
            style={{ backgroundColor: "#29ABE2", color: "#fff" }}
          >
            <Link href="#membership">Start Your Journey</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white hover:bg-white/15 px-8 py-6 text-lg text-white"
          >
            <Link href="#contact">Schedule a Tour</Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="flex justify-start">
          <div className="text-left">
            <p className="text-3xl md:text-4xl font-bold">50+</p>
            <p className="text-sm uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.9)" }}>Free Classes per Week</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: "rgba(255,255,255,0.85)" }}>
        <Link href="#about" aria-label="Scroll to learn more">
          <ChevronDown className="w-8 h-8" style={{ color: "inherit" }} />
        </Link>
      </div>
    </section>
  )
}
