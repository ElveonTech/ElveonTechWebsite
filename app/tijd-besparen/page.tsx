import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TimeSavingsCalculator } from "@/components/time-savings-calculator"

export const metadata: Metadata = {
  title: "Bereken uw tijdsbesparing | Elveon Tech",
  description:
    "Ontdek hoeveel tijd u kunt besparen met slimme automatisering. Kies een onderwerp, geef aan hoelang u er dagelijks mee bezig bent en bereken uw besparing.",
}

export default function TimeSavingsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="absolute top-0 right-0 h-full w-1/2 -skew-x-12 translate-x-1/4 bg-secondary/50" />
          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Tijdsbesparing berekenen
            </div>
            <h1 className="text-balance text-4xl font-bold leading-tight text-foreground lg:text-5xl">
              Hoeveel tijd kunt u <span className="text-primary">besparen</span>?
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Kies hieronder het onderwerp dat de meeste tijd kost. Geef aan hoelang u er dagelijks mee bezig bent en
              ontdek direct hoeveel tijd automatisering u kan opleveren.
            </p>
          </div>
        </section>

        <section className="pb-20 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <TimeSavingsCalculator />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
