"use client"

import { Workflow, Zap, BarChart3, Shield, Clock, Puzzle } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const solutionIcons = [Workflow, Zap, BarChart3, Shield, Clock, Puzzle]

export function Solutions() {
  const { t } = useLanguage()
  
  return (
    <section id="solutions" className="py-12 lg:py-16 bg-secondary/30 pb-6 lg:pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            {t.solutions.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {t.solutions.description.split('**').map((part, index) => 
              index % 2 === 1 ? <strong key={index} className="font-semibold text-foreground">{part}</strong> : part
            )}
          </p>
          <div className="mt-6">
            <a 
              href="#time-savings" 
              className="text-primary hover:text-primary/80 font-medium text-lg transition-colors duration-200 inline-flex items-center gap-2"
            >
              Waar verlies je tijd?
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-5 h-5" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
