import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Solutions } from "@/components/solutions"
import { Process } from "@/components/process"
import { Industries } from "@/components/industries"
import { About } from "@/components/about"
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
        <section id="contact" className="py-12 lg:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="relative bg-primary rounded-3xl overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
              </div>
              
              <div className="relative py-12 px-6 lg:py-16 lg:px-12">
                <div className="max-w-xl mx-auto">
                  <ContactForm 
                    variant="primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
