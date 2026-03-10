import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User, Users, GraduationCap } from "lucide-react"

const plans = [
  {
    name: "Individual",
    price: "$64",
    period: "/mo",
    description: "Full facility access for one.",
    icon: User,
  },
  {
    name: "Family",
    price: "$125",
    period: "/mo",
    description: "2 adults + kids up to 21. Childcare included.",
    icon: Users,
  },
  {
    name: "Student",
    price: "$109",
    period: "/3 mo",
    description: "Age 14–24, 3-month term. Student ID required.",
    icon: GraduationCap,
  },
]

export function MembershipSummary() {
  return (
    <section id="membership" className="py-24 lg:py-32 bg-[--color-white]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[--color-primary] font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Membership
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-[--color-dark] tracking-tight mb-4">
            FIND YOUR FIT
          </h2>
          <p className="text-lg text-[--color-secondary] max-w-2xl mx-auto">
            Flexible plans for every stage of life. All prices plus tax.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-xl p-6 lg:p-8 bg-[--color-light] border border-[--color-border] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[--color-primary]/10 flex items-center justify-center mb-4">
                <plan.icon className="w-6 h-6 text-[--color-primary]" />
              </div>
              <h3 className="text-xl font-bold text-[--color-dark] mb-1">
                {plan.name}
              </h3>
              <p className="text-2xl font-bold text-[--color-dark] mb-2">
                {plan.price}
                <span className="text-base font-normal text-[--color-secondary]">{plan.period}</span>
              </p>
              <p className="text-sm text-[--color-secondary]">
                {plan.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            className="bg-[--color-primary] hover:bg-[--color-primary]/90 text-white font-semibold px-8 py-6 text-base"
          >
            <Link href="/membership">
              See All Plans →
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
