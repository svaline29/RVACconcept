import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AmenitiesSection } from "@/components/amenities-section"
import { ProgramsSection } from "@/components/programs-section"
import { MembershipSummary } from "@/components/membership-summary"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AmenitiesSection />
      <ProgramsSection />
      <MembershipSummary />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
