"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import Link from "next/link"

export function Hero() {
  const { t } = useLanguage()
  
  return (
    <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/50 -skew-x-12 translate-x-1/4" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
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
          
          {/* Visual Element */}
          <div className="relative lg:justify-self-end">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Main card */}
              <div className="absolute inset-0 bg-card rounded-3xl border border-border shadow-xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-12 bg-muted flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/50" />
                  <div className="w-3 h-3 rounded-full bg-chart-4/50" />
                  <div className="w-3 h-3 rounded-full bg-chart-2/50" />
                </div>
                <div className="pt-16 px-4 sm:px-6 pb-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-5 h-5 rounded bg-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="h-3 w-24 bg-muted rounded" />
                        <div className="h-2 w-16 bg-muted rounded mt-2" />
                      </div>
                      <div className="text-xs text-primary font-medium flex-shrink-0">{t.hero.automated}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-5 h-5 rounded bg-chart-2" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="h-3 w-32 bg-muted rounded" />
                        <div className="h-2 w-20 bg-muted rounded mt-2" />
                      </div>
                      <div className="text-xs text-chart-2 font-medium flex-shrink-0">{t.hero.processing}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-chart-4/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-5 h-5 rounded bg-chart-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="h-3 w-28 bg-muted rounded" />
                        <div className="h-2 w-14 bg-muted rounded mt-2" />
                      </div>
                      <div className="text-xs text-chart-4 font-medium flex-shrink-0">{t.hero.complete}</div>
                    </div>
                  </div>
                  
                  {/* Visual workflow indicator */}
                  <div className="mt-8 p-4 rounded-xl bg-muted/50 border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">{t.hero.workflowActive}</div>
                        <div className="text-xs text-muted-foreground">{t.hero.workflowRunning}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
