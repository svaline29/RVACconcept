import { Dumbbell, Waves, CircleDot, Users, Sparkles, Baby, Sun, Gamepad2 } from "lucide-react"

const amenities = [
  {
    icon: Dumbbell,
    title: "Fitness Floor",
    description:
      "Full cardio and weight equipment, plus 50+ free fitness classes per week including Pilates, strength training, and more.",
  },
  {
    icon: CircleDot,
    title: "Racquetball & Basketball",
    description:
      "Racquetball courts and a basketball court for members.",
  },
  {
    icon: Waves,
    title: "Indoor Pool",
    description:
      "25-yard pool with 4 lap lanes, 3.5–5 ft depth, hot tub available. Members and guests 15+. No diving. Towels and lockers included.",
  },
  {
    icon: Sun,
    title: "Outdoor Pool",
    description:
      "Seasonal L-shaped pool, 20 yards, 3–5 ft deep.",
  },
  {
    icon: Users,
    title: "Group Fitness",
    description:
      "50+ free fitness classes per week. Something for every level.",
  },
  {
    icon: Sparkles,
    title: "Spa & Salon",
    description:
      "Full-service spa and salon on site.",
  },
  {
    icon: Baby,
    title: "Childcare",
    description:
      "Childcare included with family membership.",
  },
  {
    icon: Gamepad2,
    title: "Golf Simulator",
    description:
      "Book the golf simulator separately. Reserve your bay online.",
    bookingUrl: "https://yourgolfbooking.com/venues/stillwater-golf-simulator/booking/bays",
  },
]

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-24 lg:py-32 bg-[--color-light]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[--color-primary] font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Amenities
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-[--color-dark] tracking-tight">
            EVERYTHING YOU NEED
          </h2>
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="group bg-[--color-white] rounded-lg p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 border-b-4 border-transparent hover:border-[--color-primary]"
            >
              <div className="w-14 h-14 rounded-full bg-[--color-primary]/10 flex items-center justify-center mb-6 group-hover:bg-[--color-primary]/20 transition-colors">
                <amenity.icon className="w-7 h-7 text-[--color-primary]" />
              </div>
              <h3 className="text-xl font-bold text-[--color-dark] mb-3">
                {amenity.title}
              </h3>
              <p className="text-[--color-secondary] leading-relaxed">
                {amenity.description}
              </p>
              {"bookingUrl" in amenity && amenity.bookingUrl && (
                <a
                  href={amenity.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm font-medium text-[--color-primary] hover:underline"
                >
                  Book a bay →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
