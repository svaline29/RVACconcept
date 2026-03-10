"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock } from "lucide-react"

const interestOptions = [
  { value: "", label: "Select an option" },
  { value: "individual", label: "Individual Membership" },
  { value: "family", label: "Family Membership" },
  { value: "student", label: "Student Membership" },
  { value: "swim", label: "Swim Lessons" },
  { value: "training", label: "Personal Training" },
  { value: "golf", label: "Golf Simulator" },
  { value: "general", label: "General Question" },
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you! We'll be in touch soon to schedule your tour.")
  }

  return (
    <section className="py-24 lg:py-32 bg-[--color-white]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-[--color-primary] font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Contact
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[--color-dark] tracking-tight mb-6">
              SCHEDULE A TOUR
            </h2>
            <p className="text-lg text-[--color-secondary] leading-relaxed mb-10">
              See for yourself why RVAC is the St. Croix Valley&apos;s favorite fitness
              destination. Schedule a free tour and let us show you around.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[--color-primary]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[--color-primary]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[--color-dark] mb-1">Address</h3>
                  <p className="text-[--color-secondary]">
                    1826 Northwestern Ave S
                    <br />
                    Stillwater, MN 55082
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[--color-primary]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[--color-primary]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[--color-dark] mb-1">Phone</h3>
                  <a
                    href="tel:651-439-7611"
                    className="text-[--color-secondary] hover:text-[--color-primary] transition-colors"
                  >
                    (651) 439-7611
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[--color-primary]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[--color-primary]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[--color-dark] mb-1">Hours</h3>
                  <p className="text-[--color-secondary]">
                    Mon–Thu: 5:00 AM – 10:00 PM
                    <br />
                    Fri: 5:00 AM – 9:00 PM
                    <br />
                    Sat–Sun: 6:00 AM – 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[--color-light] rounded-xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-[--color-dark] mb-6">
              Request a Free Tour
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[--color-dark] mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[--color-white] border-[--color-secondary]/20 focus:border-[--color-primary] focus:ring-[--color-primary]"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[--color-dark] mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[--color-white] border-[--color-secondary]/20 focus:border-[--color-primary] focus:ring-[--color-primary]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[--color-dark] mb-2">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-[--color-white] border-[--color-secondary]/20 focus:border-[--color-primary] focus:ring-[--color-primary]"
                  placeholder="(651) 555-0123"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-[--color-dark] mb-2">
                  Interest
                </label>
                <select
                  id="interest"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full h-10 px-3 rounded-md bg-[--color-white] border border-[--color-secondary]/20 focus:border-[--color-primary] focus:ring-[--color-primary] text-[--color-dark]"
                >
                  {interestOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[--color-dark] mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[--color-white] border-[--color-secondary]/20 focus:border-[--color-primary] min-h-[120px]"
                  placeholder="Tell us what you're interested in..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[--color-primary] hover:bg-[--color-primary]/90 text-white font-semibold py-6"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
