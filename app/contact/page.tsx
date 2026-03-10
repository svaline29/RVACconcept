import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contact & Tour | River Valley Athletic Club",
  description: "Schedule a free tour of River Valley Athletic Club. Visit us in Stillwater, MN or get in touch by phone or form.",
}

export default function ContactPage() {
  const mapSrc = "https://www.google.com/maps?q=1826+Northwestern+Ave+S+Stillwater+MN+55082&output=embed"

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Full-width Google Map */}
      <section className="w-full aspect-[21/9] min-h-[300px] bg-[--color-light]">
        <iframe
          title="River Valley Athletic Club location"
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full min-h-[300px]"
        />
      </section>

      <ContactForm />

      <Footer />
    </main>
  )
}
