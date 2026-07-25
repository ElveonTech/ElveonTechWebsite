"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Badge } from "@/components/ui/badge"
import { Quote } from "lucide-react"
import Image from "next/image"

export function Founder() {
  const { t } = useLanguage()

  return (
    <section id="founder" className="py-12 lg:py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Mobile & Desktop Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column: Heading + Description (Desktop) / Heading (Mobile) */}
            <div className="space-y-6 lg:space-y-8">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <Badge variant="outline" className="mb-4">
                  {t.founder.badge}
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 lg:mb-8">
                  {t.founder.name}
                </h2>
              </div>

              {/* Description - Hidden on mobile, shown on desktop */}
              <div className="hidden lg:block space-y-6">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t.founder.description}
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t.founder.mission}
                </p>
              </div>
            </div>

            {/* Right Column: Quote + Photo (Desktop) / Shown after heading (Mobile) */}
            <div className="space-y-8">
              {/* Quote */}
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                <p className="text-lg sm:text-xl font-medium text-foreground italic pl-8 sm:pl-10">
                  {t.founder.quote}
                </p>
              </div>

              {/* Photo */}
              <div className="flex justify-center">
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/founder-photo.jpg"
                    alt="Founder"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Description - Shown on mobile, hidden on desktop */}
              <div className="lg:hidden space-y-6">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t.founder.description}
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t.founder.mission}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
