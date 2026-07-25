"use client"

import { Workflow, Zap, BarChart3, Shield, Clock, Puzzle } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const solutionIcons = [Workflow, Zap, BarChart3, Shield, Clock, Puzzle]

export function Solutions() {
  const { t } = useLanguage()
  
  return (
    <section id="solutions" className="py-12 lg:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            {t.solutions.badge}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            {t.solutions.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {t.solutions.description}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.solutions.items.map((solution, index) => {
            const Icon = solutionIcons[index]
            return (
              <div
                key={solution.title}
                className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
