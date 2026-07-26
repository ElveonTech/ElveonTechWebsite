import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Solutions } from "@/components/solutions"
import { Process } from "@/components/process"
import { Industries } from "@/components/industries"
import { About } from "@/components/about"
import { CTA } from "@/components/cta"
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
      </main>
      <Footer />
    </>
  )
}
