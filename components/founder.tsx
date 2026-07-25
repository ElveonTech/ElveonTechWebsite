"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Badge } from "@/components/ui/badge"
import { Quote } from "lucide-react"
import Image from "next/image"

export function Founder() {
  const { t } = useLanguage()

  return (
    <section id="founder" className="py-12 lg:py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">
            {t.founder.badge}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t.founder.name}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/founder-photo.jpg"
                alt="Founder"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
              <p className="text-xl font-medium text-foreground italic pl-8">
                {t.founder.quote}
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.founder.description}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.founder.mission}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
