"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calculator, Quote } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  const { t } = useLanguage()
  
  return (
    <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/50 -skew-x-12 translate-x-1/4" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Hero Text Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {t.hero.badge}
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight text-balance">
              {t.hero.title1}{" "}
              <span className="text-primary">{t.hero.title2}</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {t.hero.description}
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/time-savings">
                  <Calculator className="w-4 h-4" />
                  {t.hero.calculateSavings}
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="mailto:contact@elveontech.com">
                  {t.hero.scheduleCall}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right: Personal/Founder Section */}
          <div className="space-y-6 lg:mt-0 mt-12">
            {/* Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/founder-photo.jpg"
                  alt="Founder"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Quote */}
            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/20" />
              <p className="text-base lg:text-lg font-medium text-foreground italic pl-6 lg:pl-8">
                {t.founder.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
