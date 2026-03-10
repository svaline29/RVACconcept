import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Waves, Sun, Users, Trophy, Zap, Calendar } from "lucide-react"

export const metadata = {
  title: "Aquatics & Swim Programs | River Valley Athletic Club",
  description: "Two pools, year-round programming, swim lessons, junior swim team, and triathlon swim training at RVAC Stillwater.",
}

export default function PoolPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/pool.jpg')" }}
        />
        <div className="absolute inset-0 bg-[--color-dark]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4">
            AQUATICS & SWIM PROGRAMS
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Two pools, year-round programming, and expert instruction for all ages and levels.
          </p>
        </div>
      </section>

      {/* Section 1 — THE POOLS */}
      <section className="py-24 lg:py-32 bg-[--color-white]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[--color-primary] font-medium tracking-[0.2em] uppercase text-sm mb-4">The Pools</p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[--color-dark] tracking-tight">
              TWO POOLS, ONE CLUB
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Indoor Pool */}
            <div className="rounded-xl bg-[--color-light] border border-[--color-border] p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[--color-primary]/10 flex items-center justify-center">
                  <Waves className="w-6 h-6 text-[--color-primary]" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-[--color-dark]">
                  Indoor Pool
                </h3>
              </div>
              <ul className="space-y-2 text-[--color-secondary] mb-6">
                <li>25-yard, 4 lap lanes</li>
                <li>3.5–5 ft deep</li>
                <li>Hot tub available (members and guests 15+)</li>
                <li>No diving</li>
                <li>Towels and lockers included</li>
              </ul>
              <p className="font-semibold text-[--color-dark] mb-2">Activities</p>
              <p className="text-[--color-secondary]">
                Water Aerobics, Masters Swim, Adult Lap Swim, Open Swim
              </p>
            </div>

            {/* Outdoor Pool */}
            <div className="rounded-xl bg-[--color-light] border border-[--color-border] p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[--color-primary]/10 flex items-center justify-center">
                  <Sun className="w-6 h-6 text-[--color-primary]" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-[--color-dark]">
                  Outdoor Pool
                </h3>
              </div>
              <ul className="space-y-2 text-[--color-secondary] mb-6">
                <li>L-shaped, 20 yards</li>
                <li>3–5 ft deep</li>
                <li>Open Memorial Day weekend through Labor Day</li>
                <li>Closes 8:30 PM weekdays / 7:45 PM weekends</li>
                <li>Bring your own towel</li>
                <li>No inflatables over 36 inches</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — SWIM LESSONS */}
      <section className="py-24 lg:py-32 bg-[--color-light]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[--color-primary] font-medium tracking-[0.2em] uppercase text-sm mb-4">Swim Lessons</p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[--color-dark] tracking-tight">
              LEARN TO SWIM
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Group Swim Lessons */}
            <div className="bg-[--color-white] rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[--color-border]">
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-dark] mb-4">
                Group Swim Lessons
              </h3>
              <p className="text-[--color-secondary] mb-4">
                Spring session April 12–May 19. Two tracks: <strong className="text-[--color-dark]">Preschool</strong> (ages 1–5; children under 3 require caregiver in water) and <strong className="text-[--color-dark]">School-Age</strong> (kindergarten eligible and older). American Red Cross curriculum.
              </p>
              <p className="text-sm text-[--color-secondary] mb-6">
                Registration opening soon — sign up for email notification.
              </p>
              <Button asChild className="w-full bg-[--color-primary] hover:bg-[--color-primary]/90 text-white font-semibold">
                <a href="https://rvac.squarespace.com/swim-notification" target="_blank" rel="noopener noreferrer">
                  Join Waitlist
                </a>
              </Button>
            </div>

            {/* Private Swim Lessons */}
            <div className="bg-[--color-white] rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[--color-border]">
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-dark] mb-4">
                Private Swim Lessons
              </h3>
              <p className="text-[--color-secondary] mb-4">
                Currently waitlist only. Serves fearful swimmers, novice adults, and swimmers with disabilities.
              </p>
              <ul className="text-[--color-secondary] mb-6 space-y-1">
                <li><strong className="text-[--color-dark]">$40</strong> per 30-min private lesson (1 swimmer)</li>
                <li><strong className="text-[--color-dark]">$50</strong> per 30-min semi-private lesson (2–3 swimmers, similar skill level)</li>
              </ul>
              <Button asChild className="w-full bg-[--color-dark] hover:bg-[--color-dark]/90 text-white font-semibold">
                <a href="https://rivervalleyathleticclub.com/aquaticstraining" target="_blank" rel="noopener noreferrer">
                  Join Waitlist
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — JUNIOR SWIM TEAM */}
      <section className="py-24 lg:py-32 bg-[--color-dark] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[--color-primary]/20 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-[--color-primary]" />
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold tracking-tight">
              JUNIOR SWIM TEAM
            </h2>
          </div>
          <p className="text-white/90 mb-4">
            Coach: <strong>Marybeth Rosell</strong>. Non-competitive team developing the four competitive strokes, turns, starts, and basic racing skills.
          </p>
          <p className="text-white/80 mb-4">
            <strong className="text-white">Prerequisite:</strong> Swimmers must be able to swim all four strokes for 25 yards. This is <strong className="text-white">not</strong> a learn-to-swim program.
          </p>
          <ul className="text-white/90 space-y-2 mb-6">
            <li><strong>Winter 2026 session:</strong> Thursdays January 8 – February 26, 2026</li>
            <li><strong>Practice times:</strong> 4:45 PM and 5:30 PM (Coach Marybeth assigns based on skill level)</li>
            <li><strong>Cost:</strong> $110</li>
          </ul>
          <Button asChild className="bg-[--color-primary] hover:bg-[--color-primary]/90 text-white font-semibold">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeg4o8Bpae876YUt_pzICxKgUqZFJNlULagN0o4fNqR-vgfAA/viewform" target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </Button>
        </div>
      </section>

      {/* Section 4 — TRIATHLON SWIM TRAINING */}
      <section className="py-24 lg:py-32 bg-[--color-white]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[--color-primary] font-medium tracking-[0.2em] uppercase text-sm mb-4">Triathlon</p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[--color-dark] tracking-tight">
              TRIATHLON SWIM TRAINING
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[--color-primary]/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[--color-primary]" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-dark]">
                  Personal & Small Group Coaching
                </h3>
              </div>
              <p className="text-[--color-secondary] mb-4">
                For all levels. 45-minute sessions with flexible scheduling. Includes stroke analysis, workouts, drills, and technique instruction.
              </p>
              <p className="text-[--color-secondary]">
                <strong className="text-[--color-dark]">Coach:</strong> Parrin
              </p>
            </div>

            <div className="rounded-xl bg-[--color-light] border border-[--color-border] p-8">
              <h4 className="font-semibold text-[--color-dark] mb-4">Pricing</h4>
              <ul className="space-y-3 text-[--color-secondary] mb-4">
                <li><strong className="text-[--color-dark]">1-on-1:</strong> $60/session</li>
                <li><strong className="text-[--color-dark]">Small Group</strong> (up to 3 swimmers): $75/session</li>
              </ul>
              <p className="text-sm text-[--color-secondary] mb-6">
                Note: Swimmers must form their own group; RVAC cannot match individuals.
              </p>
              <Button asChild className="w-full bg-[--color-primary] hover:bg-[--color-primary]/90 text-white font-semibold">
                <a href="https://rivervalleyathleticclub.com/triathlon-swim" target="_blank" rel="noopener noreferrer">
                  Request Training
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — POOL SCHEDULE */}
      <section className="py-24 lg:py-32 bg-[--color-light]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-[--color-primary]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[--color-dark] tracking-tight">
              POOL SCHEDULE
            </h2>
          </div>
          <p className="text-[--color-secondary] mb-8">
            View the full pool schedule for lap swim, open swim, water aerobics, and class times.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[--color-primary] hover:bg-[--color-primary]/90 text-white font-semibold">
              <a href="https://rivervalleyathleticclub.com/pool-schedule" target="_blank" rel="noopener noreferrer">
                Pool Schedule PDF
              </a>
            </Button>
            <Button asChild variant="outline" className="border-[--color-dark] text-[--color-dark] hover:bg-[--color-dark] hover:text-white">
              <a href="https://rivervalleyathleticclub.com/s/Gym-Schedule-2026.pdf" target="_blank" rel="noopener noreferrer">
                Full Club Schedule
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
