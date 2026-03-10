"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "The community here is unlike any other gym I've been to. So many classes and the pool is fantastic.",
    author: "RVAC Member",
    role: "Family Member",
  },
  {
    quote:
      "My kids learned to swim here and love the programs. Childcare makes it easy to get my workout in.",
    author: "RVAC Member",
    role: "Family Member",
  },
  {
    quote:
      "RVAC made me feel welcome from day one. Great equipment, clean facility, and the staff is helpful.",
    author: "RVAC Member",
    role: "Member",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 lg:py-32 bg-[--color-light]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[--color-primary] font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-[--color-dark] tracking-tight">
            MEMBER STORIES
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-[--color-white] rounded-lg p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
          <div className="relative z-10">
            <Quote
              className="block w-9 h-9 md:w-10 md:h-10 text-[#29ABE2] mb-2 mx-auto"
              aria-hidden
            />
            <p className="text-xl md:text-2xl text-[--color-dark] leading-relaxed mb-8 text-center">
              {testimonials[current].quote}
            </p>

            <div className="text-center">
              <p className="font-bold text-[--color-dark]">
                {testimonials[current].author}
              </p>
              <p className="text-sm text-[--color-secondary]">
                {testimonials[current].role}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[--color-secondary]/30 flex items-center justify-center hover:border-[--color-primary] hover:text-[--color-primary] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current ? "bg-[--color-primary]" : "bg-[--color-secondary]/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[--color-secondary]/30 flex items-center justify-center hover:border-[--color-primary] hover:text-[--color-primary] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
