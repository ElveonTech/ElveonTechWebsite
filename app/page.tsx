import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Solutions } from "@/components/solutions"
import { Process } from "@/components/process"
import { Industries } from "@/components/industries"
import { About } from "@/components/about"
import { CTA } from "@/components/cta"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Process />
        <Industries />
        <About />
        <CTA />
        <section className="py-12 lg:py-20 bg-secondary/30">
          <div className="max-w-2xl mx-auto px-6 lg:px-8">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
