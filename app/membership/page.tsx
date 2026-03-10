import { Navigation } from "@/components/navigation"
import { MembershipSection } from "@/components/membership-section"
import { Footer } from "@/components/footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata = {
  title: "Membership | River Valley Athletic Club",
  description: "Flexible membership plans for every stage of life. Individual, Family, Student, Senior, and more. No hidden fees.",
}

const faqs = [
  {
    question: "What's included with membership?",
    answer: "All amenities are included: full facility access, 70+ classes per week, indoor and outdoor pools, spa, and childcare for family memberships.",
  },
  {
    question: "Is there a joining fee?",
    answer: "There is a one-time card fee per tier. The amount varies by membership type (e.g., Individual $10, Dual $15, Family $20). See the pricing section above for details.",
  },
  {
    question: "Can I try before I join?",
    answer: "Yes. Schedule a free tour to see the facility and learn more. Visit our Contact page to request a tour.",
  },
]

export default function MembershipPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-[--color-dark] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            FIND YOUR FIT
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Flexible plans for every stage of life. No hidden fees.
          </p>
        </div>
      </section>

      <MembershipSection />

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-[--color-light]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[--color-primary] font-medium tracking-[0.2em] uppercase text-sm mb-4">FAQ</p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[--color-dark] tracking-tight">
              MEMBERSHIP FAQ
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-[--color-white] px-6 rounded-lg border border-[--color-border] mb-3">
                <AccordionTrigger className="text-left font-semibold text-[--color-dark] hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[--color-secondary] pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </main>
  )
}
