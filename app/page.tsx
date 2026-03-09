import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AmenitiesSection } from "@/components/amenities-section"
import { ProgramsSection } from "@/components/programs-section"
import { MembershipSection } from "@/components/membership-section"
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
      <MembershipSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
