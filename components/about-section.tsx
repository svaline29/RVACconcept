import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Award, Heart, Clock } from "lucide-react"

const values = [
  {
    icon: Users,
    title: "Community First",
    description: "We're neighbors helping neighbors reach their potential.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "High level facilities with a local and community feel.",
  },
  {
    icon: Heart,
    title: "Wellness",
    description: "Holistic approach to mind, body, and spirit.",
  },
  {
    icon: Clock,
    title: "Consistency",
    description: "Open early, close late. We're here when you need us.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Content on solid white so text is always readable */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content - explicit dark text on white */}
          <div>
            <p
              className="font-medium tracking-[0.2em] uppercase text-sm mb-4"
              style={{ color: "#29ABE2" }}
            >
              About RVAC
            </p>
            <h2
              className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              style={{ color: "#1a1a1a" }}
            >
              STILLWATER&apos;S FULL-SERVICE ATHLETIC CLUB
            </h2>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "#1a1a1a" }}
            >
              River Valley Athletic Club is a full-service gym and aquatic center located in Stillwater, MN. Members enjoy 50+ free fitness classes, racquetball courts, a basketball court, a wide range of cardio and weight equipment, an indoor pool with hot tub, an outdoor pool, towels and lockers, a spa and salon, and onsite childcare.
            </p>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "#1a1a1a" }}
            >
              RVAC has everything you need to be your best.
            </p>
            <Button asChild className="font-semibold bg-[#29ABE2] hover:bg-[#29ABE2]/90 text-white">
              <Link href="/contact">Schedule a tour</Link>
            </Button>
          </div>

          {/* Values Grid - explicit colors */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group p-6 rounded-lg transition-all duration-300"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <value.icon className="w-8 h-8 mb-4" style={{ color: "#29ABE2" }} />
                <h3
                  className="font-semibold mb-2 transition-colors"
                  style={{ color: "#1a1a1a" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm transition-colors"
                  style={{ color: "#808285" }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
