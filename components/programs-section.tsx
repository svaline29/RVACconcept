const programs: {
  title: string
  description: string
  image: string
  popular?: boolean
  href?: string
}[] = [
  {
    title: "Personal Training",
    description: "Programs and individual trainers to help you reach your goals.",
    image: "/images/gympic.png",
  },
  {
    title: "Group Fitness",
    description: "50+ free classes per week. Something for every level.",
    image: "/images/group-fitness.jpg",
    popular: true,
  },
  {
    title: "Swim Programs",
    description: "Group and private swim lessons, junior swim team, and triathlon swim training.",
    image: "/images/pool.jpg",
    href: "/pool",
  },
  {
    title: "Pilates & Youth",
    description: "Pilates classes plus summer youth and teen programs.",
    image: "/images/gympic2.png",
  },
]

import Link from "next/link"

export function ProgramsSection() {
  return (
    <section id="programs" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background: your group-fitness image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/group-fitness.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Solid dark overlay so white header text is readable */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header - explicit white text on dark */}
        <div className="text-center mb-16">
          <p
            className="font-medium tracking-[0.2em] uppercase text-sm mb-4"
            style={{ color: "#29ABE2" }}
          >
            Programs
          </p>
          <h2
            className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            style={{ color: "#ffffff" }}
          >
            FIND YOUR FIT
          </h2>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => {
            const content = (
              <>
                {program.popular && (
                  <div
                    className="absolute top-4 right-4 z-10 text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#29ABE2", color: "#ffffff" }}
                  >
                    Popular
                  </div>
                )}
                <div
                  className="relative h-48 overflow-hidden bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url('${program.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#1a1a1a" }}>
                    {program.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#808285" }}>
                    {program.description}
                  </p>
                </div>
              </>
            )
            const className = "group relative rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 block"
            const style = { backgroundColor: "#ffffff" }
            return program.href ? (
              <Link key={program.title} href={program.href} className={className} style={style}>
                {content}
              </Link>
            ) : (
              <div key={program.title} className={className} style={style}>
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
