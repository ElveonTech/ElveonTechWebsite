"use client"

import { Factory, Building2, Stethoscope, ShoppingCart, Truck, Landmark } from "lucide-react"
import { useTranslation } from "@/lib/i18n/translations"

const icons = [Factory, Building2, Stethoscope, ShoppingCart, Truck, Landmark]

export function Industries() {
  const { t } = useTranslation()
  const industries = t.industries.items.map((item, index) => ({
    ...item,
    icon: icons[index],
  }))
  return (
    <section id="industries" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
              {t.industries.eyebrow}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              {t.industries.title}
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              {t.industries.description}
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group p-5 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300"
              >
                <industry.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{industry.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
