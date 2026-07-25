import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Clock, CalendarDays, TrendingUp, Mail, Phone, MapPin } from "lucide-react"
import { getTopicById, calculateSavings } from "@/lib/time-savings-data"

export const metadata: Metadata = {
  title: "Uw tijdsbesparing | Elveon Tech",
  description: "Bekijk hoeveel tijd u kunt besparen met automatisering en neem contact op voor een oplossing op maat.",
}

export default async function ResultPage({
  searchParams,
}: {
  searchParams: Promise<{ onderwerp?: string; uren?: string }>
}) {
  const params = await searchParams
  const topic = getTopicById(params.onderwerp)

  if (!topic) {
    notFound()
  }

  const dailyHours = Number.parseFloat(params.uren ?? "2")
  const hours = Number.isFinite(dailyHours) && dailyHours > 0 ? dailyHours : 2
  const savings = calculateSavings(topic, hours)

  const stats = [
    {
      icon: Clock,
      value: `${savings.savedHoursPerWeek} uur`,
      label: "bespaard per week",
    },
    {
      icon: CalendarDays,
      value: `${savings.savedHoursPerYear} uur`,
      label: "bespaard per jaar",
    },
    {
      icon: TrendingUp,
      value: `${savings.savedDaysPerYear} werkdagen`,
      label: "vrij per jaar",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Resultaat hero */}
        <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40 lg:pb-16">
          <div className="absolute top-0 right-0 h-full w-1/2 -skew-x-12 translate-x-1/4 bg-secondary/50" />
          <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
            <Link
              href="/tijd-besparen"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Terug naar berekening
            </Link>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <topic.icon className="h-4 w-4" />
              {topic.title}
            </div>
            <h1 className="mt-4 text-balance text-3xl font-bold leading-tight text-foreground lg:text-5xl">
              U kunt tot <span className="text-primary">{savings.savedHoursPerDay} uur per dag</span> besparen
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Op basis van {hours} uur per dag aan {topic.title.toLowerCase()} realiseren vergelijkbare klanten
              gemiddeld {Math.round(topic.efficiency * 100)}% tijdsbesparing met automatisering.
            </p>
          </div>
        </section>

        {/* Besparingsstatistieken */}
        <section className="pb-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border bg-card p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="mt-4 text-3xl font-bold text-foreground tabular-nums">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Oplossing */}
        <section className="pb-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="rounded-2xl border border-border bg-secondary/30 p-8 lg:p-12">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">De oplossing</p>
              <h2 className="mt-3 text-2xl font-bold text-foreground lg:text-3xl">{topic.solution.headline}</h2>
              <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
                {topic.solution.body}
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-1">
                {topic.solution.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </span>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="pb-20 lg:pb-32">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="grid lg:grid-cols-2">
                {/* CTA */}
                <div className="p-8 lg:p-12">
                  <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
                    Klaar om deze tijd terug te winnen?
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Vul het contactformulier in of stuur ons direct een e-mail. We bekijken samen kosteloos hoe we
                    deze oplossing voor u kunnen realiseren.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button size="lg" className="gap-2" asChild>
                      <a
                        href={`mailto:contact@elveontech.nl?subject=${encodeURIComponent(
                          `Tijdsbesparing: ${topic.title}`,
                        )}&body=${encodeURIComponent(
                          `Hallo Elveon Tech,\n\nIk ben dagelijks ongeveer ${hours} uur bezig met ${topic.title.toLowerCase()} en wil graag meer weten over de mogelijkheden om dit te automatiseren.\n\nMet vriendelijke groet,`,
                        )}`}
                      >
                        <Mail className="h-4 w-4" />
                        Stuur een e-mail
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/tijd-besparen">Ander onderwerp berekenen</Link>
                    </Button>
                  </div>
                </div>

                {/* Contactgegevens */}
                <div className="border-t border-border bg-secondary/30 p-8 lg:border-l lg:border-t-0 lg:p-12">
                  <h3 className="text-lg font-semibold text-foreground">Contactgegevens</h3>
                  <ul className="mt-6 space-y-5">
                    <li className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </span>
                      <div>
                        <p className="text-sm text-muted-foreground">E-mail</p>
                        <a
                          href="mailto:contact@elveontech.nl"
                          className="font-medium text-foreground transition-colors hover:text-primary"
                        >
                          contact@elveontech.nl
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </span>
                      <div>
                        <p className="text-sm text-muted-foreground">Telefoon</p>
                        <a
                          href="tel:+31612345678"
                          className="font-medium text-foreground transition-colors hover:text-primary"
                        >
                          +31 6 1234 5678
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </span>
                      <div>
                        <p className="text-sm text-muted-foreground">Locatie</p>
                        <p className="font-medium text-foreground">Nederland</p>
                      </div>
                    </li>
                  </ul>
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
