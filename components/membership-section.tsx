import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Individual",
    price: "XX",
    description: "Full facility access for one.",
    features: [
      "Full facility access",
      "70+ free group fitness classes",
      "Towels and lockers included",
      "Cardio and weight equipment",
      "Racquetball, basketball, pools",
    ],
  },
  {
    name: "Family",
    price: "XX",
    description: "The whole family, one membership.",
    features: [
      "Everything in Individual",
      "Childcare included",
      "Indoor & outdoor pool access",
      "Spa and salon on site",
      "Swim lessons and youth programs",
    ],
    featured: true,
  },
  {
    name: "Student",
    price: "XX",
    description: "Valid student ID required.",
    features: [
      "Full facility access",
      "70+ free group fitness classes",
      "Towels and lockers included",
      "All equipment and courts",
      "Pool access",
    ],
  },
]

export function MembershipSection() {
  return (
    <section id="membership" className="py-24 lg:py-32 bg-[--color-white]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[--color-primary] font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Membership
          </p>
          <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl lg:text-6xl font-bold text-[--color-dark] tracking-tight mb-4">
            INVEST IN YOURSELF
          </h2>
          <p className="text-lg text-[--color-secondary] max-w-2xl mx-auto">
            No contracts. No hidden fees. Just results. All memberships include full
            facility access. Contact us for current rates.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg p-8 transition-all duration-300 ${
                plan.featured
                  ? "bg-[--color-dark] text-[--color-white] shadow-[0_8px_40px_rgba(0,0,0,0.2)] scale-105"
                  : "bg-[--color-light] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[--color-primary] text-[--color-white] text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3
                className={`text-xl font-bold mb-2 ${
                  plan.featured ? "text-[--color-white]" : "text-[--color-dark]"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.featured ? "text-[--color-white]/70" : "text-[--color-secondary]"
                }`}
              >
                {plan.description}
              </p>

              <div className="mb-6">
                <span
                  className={`text-5xl font-bold ${
                    plan.featured ? "text-[--color-white]" : "text-[--color-dark]"
                  }`}
                >
                  ${plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.featured ? "text-[--color-white]/70" : "text-[--color-secondary]"
                  }`}
                >
                  /month
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 ${
                        plan.featured ? "text-[--color-primary]" : "text-[--color-primary]"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.featured ? "text-[--color-white]/80" : "text-[--color-secondary]"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full font-semibold ${
                  plan.featured
                    ? "bg-[--color-primary] hover:bg-[--color-primary]/90 text-[--color-white]"
                    : "bg-[--color-dark] hover:bg-[--color-dark]/90 text-[--color-white]"
                }`}
              >
                <Link href="#contact">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-[--color-secondary] mt-8">
          Contact RVAC at (651) 439-7611 or visit rivervalleyathleticclub.com for current membership rates.
        </p>
      </div>
    </section>
  )
}
