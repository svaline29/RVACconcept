import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Users, User, GraduationCap, Calendar, Info } from "lucide-react"

const standardPlans = [
  {
    name: "Individual",
    price12: 64,
    price6: 80,
    cardFee: 10,
    description: "Full facility access for one.",
    features: [
      "Full facility access",
      "50+ free group fitness classes",
      "Cardio, weights, pools, racquetball & more",
    ],
  },
  {
    name: "Dual",
    price12: 95,
    price6: 111,
    cardFee: 15,
    description: "Two people, one household.",
    note: "2 individuals residing in the same house. Government IDs for both members must verify addresses.",
    features: [
      "Everything in Individual",
      "Two members, same address",
      "One convenient monthly rate",
    ],
    featured: true,
  },
  {
    name: "Family",
    price12: 125,
    price6: 140,
    cardFee: 20,
    description: "2 adults + children up to 21 at home.",
    note: "Up to 5 members included. Additional members over 5: $6/month each. Proof of legal guardianship required.",
    features: [
      "2 adults + kids up to 21",
      "Up to 5 members included",
      "Childcare included",
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
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-[--color-dark] tracking-tight mb-4">
            MEMBERSHIP PRICING
          </h2>
          <p className="text-lg text-[--color-secondary] max-w-2xl mx-auto">
            Choose the plan that fits you. All prices plus tax. One-time card fee applies to new memberships.
          </p>
        </div>

        {/* Standard Membership */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <User className="w-6 h-6 text-[--color-primary]" />
            <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-[--color-dark] tracking-tight">
              Standard Membership
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {standardPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl p-6 lg:p-8 transition-all duration-300 border ${
                  plan.featured
                    ? "bg-[--color-dark] text-[--color-white] border-[--color-dark] shadow-[0_8px_40px_rgba(0,0,0,0.15)] scale-[1.02]"
                    : "bg-[--color-light] border-[--color-border] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[--color-primary] text-[--color-white] text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <h4
                  className={`text-xl font-bold mb-1 ${
                    plan.featured ? "text-[--color-white]" : "text-[--color-dark]"
                  }`}
                >
                  {plan.name} Membership
                </h4>
                <p
                  className={`text-sm mb-4 ${
                    plan.featured ? "text-[--color-white]/80" : "text-[--color-secondary]"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span
                      className={`text-4xl font-bold ${
                        plan.featured ? "text-[--color-white]" : "text-[--color-dark]"
                      }`}
                    >
                      ${plan.price12}
                    </span>
                    <span
                      className={`text-base ${
                        plan.featured ? "text-[--color-white]/80" : "text-[--color-secondary]"
                      }`}
                    >
                      /mo
                    </span>
                    <span
                      className={`text-sm ${
                        plan.featured ? "text-[--color-white]/70" : "text-[--color-secondary]"
                      }`}
                    >
                      (12 mo + tax)
                    </span>
                  </div>
                  <div
                    className={`text-sm mt-1 ${
                      plan.featured ? "text-[--color-white]/70" : "text-[--color-secondary]"
                    }`}
                  >
                    or ${plan.price6}/mo (6 mo + tax)
                  </div>
                  <div
                    className={`text-sm mt-1 ${
                      plan.featured ? "text-[--color-white]/70" : "text-[--color-secondary]"
                    }`}
                  >
                    One-time card fee ${plan.cardFee}
                  </div>
                </div>

                {plan.note && (
                  <p
                    className={`text-xs mb-4 leading-relaxed ${
                      plan.featured ? "text-[--color-white]/70" : "text-[--color-secondary]"
                    }`}
                  >
                    {plan.note}
                  </p>
                )}

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          plan.featured ? "text-[--color-primary]" : "text-[--color-primary]"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.featured ? "text-[--color-white]/90" : "text-[--color-secondary]"
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
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Short Term */}
        <div className="mb-20 rounded-xl bg-[--color-light] border border-[--color-border] p-6 lg:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[--color-primary]/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-6 h-6 text-[--color-primary]" />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold text-[--color-dark] mb-2">
                Short Term Memberships
              </h3>
              <p className="text-[--color-secondary] leading-relaxed">
                From a single day pass to 2 months—we can find a solution that works for you. Stop in at the Front Desk to learn more.
              </p>
            </div>
          </div>
        </div>

        {/* Senior & Student Row */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Senior */}
          <div className="rounded-xl bg-[--color-light] border border-[--color-border] p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-[--color-primary]" />
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-dark] tracking-tight">
                Senior Memberships
              </h3>
            </div>
            <p className="text-sm text-[--color-secondary] mb-4">Age 62 and up · 3 Month Term</p>
            <ul className="space-y-3 mb-6">
              <li className="flex justify-between items-baseline gap-4">
                <span className="text-[--color-dark] font-medium">Senior Individual</span>
                <span className="text-[--color-dark] font-bold">$185</span>
              </li>
              <li className="flex justify-between items-baseline gap-4">
                <span className="text-[--color-dark] font-medium">Senior Couple</span>
                <span className="text-[--color-dark] font-bold">$270</span>
              </li>
            </ul>
            <p className="text-sm text-[--color-secondary]">
              Plus one-time card fee for new memberships.
            </p>
            <Button asChild className="w-full mt-6 font-semibold bg-[--color-dark] hover:bg-[--color-dark]/90 text-[--color-white]">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Student */}
          <div className="rounded-xl bg-[--color-light] border border-[--color-border] p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-[--color-primary]" />
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-dark] tracking-tight">
                Student Memberships
              </h3>
            </div>
            <p className="text-sm text-[--color-secondary] mb-4">Age 14–24 · Student ID required · 3 month term</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-[--color-dark]">$109</span>
              <span className="text-[--color-secondary] ml-2">for 3-month term · plus one-time card fee for new memberships</span>
            </div>
            <Button asChild className="w-full font-semibold bg-[--color-dark] hover:bg-[--color-dark]/90 text-[--color-white]">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>

        {/* FitPass / Age Policy */}
        <div className="rounded-xl bg-[--color-primary]/5 border border-[--color-primary]/20 p-6 lg:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[--color-primary]/15 flex items-center justify-center flex-shrink-0">
              <Info className="w-6 h-6 text-[--color-primary]" />
            </div>
            <div>
              <h3 className="font-semibold text-[--color-dark] mb-2">Age & Equipment Access</h3>
              <p className="text-[--color-secondary] text-sm leading-relaxed mb-2">
                Hot tub, cardio, and weight equipment are available for members and guests <strong className="text-[--color-dark]">14 years old and older</strong>. Youth under 14 may enroll in <strong className="text-[--color-dark]">FitPass</strong>, a one-hour course to be certified to use cardio and weight equipment safely, properly, and independently.
              </p>
              <p className="text-sm text-[--color-secondary]">
                For FitPass offerings, contact <strong className="text-[--color-dark]">Allyson Czaja, Fitness Director</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <p className="text-center text-sm text-[--color-secondary] mt-10">
          Questions? Contact RVAC at <a href="tel:6514397611" className="text-[--color-primary] font-medium hover:underline">(651) 439-7611</a> or visit the Front Desk.
        </p>
      </div>
    </section>
  )
}
