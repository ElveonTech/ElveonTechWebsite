"use client"

import { GitBranch, Target, Rocket, BarChart3, Clock, Shield } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const processIcons = [GitBranch, Target, Rocket, BarChart3]

export function Process() {
  const { t } = useLanguage()
  
  return (
    <section id="process" className="py-12 lg:py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            {t.process.badge}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.process.title}
            <span className="text-primary">{t.process.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.process.subtitle}
          </p>
        </div>

        {/* Steps Container - Horizontally scrollable on mobile */}
        <div className="relative mb-12">
          <div className="overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide">
            <div className="flex gap-6 lg:grid lg:grid-cols-4 lg:gap-6 min-w-max lg:min-w-0">
              {t.process.steps.map((step, index) => {
                const Icon = processIcons[index]
                const isLast = index === t.process.steps.length - 1
                return (
                  <div key={step.number} className="flex items-center gap-0">
                    <div className="flex-shrink-0 w-[300px] lg:w-full">
                      <div className="bg-white border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30 flex flex-col min-h-[380px] relative">
                        {/* Number - top left with transparent circle */}
                        <div className={`absolute top-6 left-6 w-16 h-16 rounded-full ${isLast ? 'bg-emerald-500/10' : 'bg-primary/10'} flex items-center justify-center`}>
                          <span className={`text-3xl font-bold leading-none ${isLast ? 'text-emerald-500' : 'text-primary'}`}>
                            {step.number}
                          </span>
                        </div>
                        
                        {/* Icon - centered */}
                        <div className="flex justify-center mb-6 mt-12">
                          <Icon className={`w-12 h-12 ${isLast ? 'text-emerald-500' : 'text-primary'}`} strokeWidth={1.5} />
                        </div>
                        
                        {/* Title - centered */}
                        <h3 className="text-base font-bold text-foreground mb-2 text-center">
                          {step.title}
                        </h3>
                        <div className={`w-12 h-1 ${isLast ? 'bg-emerald-500' : 'bg-primary'} mx-auto mb-4`}></div>
                        
                        {/* Description - centered */}
                        <p className="text-sm text-muted-foreground leading-relaxed text-center flex-grow">
                          {step.description}
                        </p>
                        
                        {/* Time estimate for first step */}
                        {index === 0 && (
                          <div className="flex items-center justify-center gap-2 mt-4 text-primary font-medium text-sm">
                            <Clock className="w-4 h-4" />
                            {t.process.timeEstimate}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Dotted arrow between cards - desktop only */}
                    {index < t.process.steps.length - 1 && (
                      <div className="hidden lg:flex items-center justify-center flex-shrink-0 -mx-3">
                        <svg
                          width="40"
                          height="20"
                          viewBox="0 0 40 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary"
                        >
                          <path
                            d="M0 10H35M35 10L30 5M35 10L30 15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray="4 4"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
          
          {/* Scroll indicator for mobile */}
          <div className="flex lg:hidden justify-center mt-6 gap-2">
            <div className="text-xs text-muted-foreground flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
              {t.process.scrollHint}
            </div>
          </div>
        </div>
        
        {/* Bottom message with shield icon */}
        <div className="flex items-center justify-center gap-3 text-muted-foreground text-base lg:text-lg">
          <Shield className="w-5 h-5 text-primary flex-shrink-0" />
          <p className="text-center">
            {t.process.bottomMessage}
          </p>
        </div>
      </div>
    </section>
  )
}
