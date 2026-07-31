"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/i18n/language-context"
import { ChevronDown, HelpCircle, Calculator } from "lucide-react"
import Link from "next/link"

export function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Generate JSON-LD structured data for Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faq.questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  }

  return (
    <section className="py-20 lg:py-32">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            {t.faq.badge}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t.faq.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {t.faq.questions.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden transition-all hover:shadow-md"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-foreground text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all ${
                  openIndex === index ? "max-h-[600px]" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.answer}
                  </p>
                  
                  {/* Subtle CTA */}
                  <Link
                    href="/time-savings"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors border-b border-primary/30 hover:border-primary/60 pb-0.5"
                  >
                    <Calculator className="w-4 h-4" />
                    {t.faq.calculateLink}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
