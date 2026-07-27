"use client"

import { useEffect, useRef } from "react"
import { GitBranch, Target, Rocket, BarChart3, Clock, Shield, TrendingUp } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const processIcons = [GitBranch, Target, Rocket, BarChart3]

export function Process() {
  const { t } = useLanguage()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const hasHintedRef = useRef(false)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only nudge on smaller screens where the steps scroll horizontally (below lg breakpoint)
        if (entry.isIntersecting && !hasHintedRef.current && window.innerWidth < 1024) {
          hasHintedRef.current = true
          container.scrollTo({ left: 120, behavior: "smooth" })
          window.setTimeout(() => {
            container.scrollTo({ left: 0, behavior: "smooth" })
          }, 650)
        }
      },
      // Only fires once the container passes through the middle band of the viewport
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" className="pt-6 lg:pt-8 pb-12 lg:pb-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            {t.process.badge}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.process.title}
            {t.process.titleHighlight && <span className="text-primary">{t.process.titleHighlight}</span>}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.process.subtitle}
          </p>
        </div>

        {/* Steps Container - Horizontally scrollable on mobile */}
        <div className="relative mb-12">
          <div ref={scrollContainerRef} className="overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide">
            <div className="flex gap-6 lg:grid lg:grid-cols-4 lg:gap-6 min-w-max lg:min-w-0 lg:items-stretch">
              {t.process.steps.map((step, index) => {
                const Icon = processIcons[index]
                const isLast = index === t.process.steps.length - 1
                return (
                  <div key={step.number} className="flex items-stretch gap-0">
                    <div className="flex-shrink-0 w-[300px] lg:w-full h-full">
                      <div className="bg-white border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30 flex flex-col h-full relative">
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
                          <div className="flex items-center justify-center gap-2 mt-4 text-primary font-medium text-sm bg-primary/10 rounded-full px-4 py-2">
                            <Clock className="w-4 h-4" />
                            {t.process.timeEstimate}
                          </div>
                        )}
                        
                        {/* Savings estimate for last step */}
                        {isLast && (
                          <div className="flex items-center justify-center gap-2 mt-4 text-emerald-500 font-medium text-sm bg-emerald-500/10 rounded-full px-4 py-2">
                            <TrendingUp className="w-4 h-4" />
                            Bespaar 150+ uur per jaar
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
                          className={index === t.process.steps.length - 2 ? "text-emerald-500" : "text-primary"}
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
        <div className="flex items-center justify-center gap-3 text-muted-foreground text-base lg:text-lg mb-8">
          <Shield className="w-5 h-5 text-primary flex-shrink-0" />
          <p className="text-center">
            {t.process.bottomMessage}
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Plan een gratis gesprek
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
    </section>
  )
}
