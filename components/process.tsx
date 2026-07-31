"use client"

import { GitBranch, Target, Rocket, BarChart3, Clock, Shield, TrendingUp } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const processIcons = [GitBranch, Target, Rocket, BarChart3]

export function Process() {
  const { t } = useLanguage()
  
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

        {/* Steps Container */}
        <div className="relative mb-12">
          <div className="flex flex-col gap-0 lg:grid lg:grid-cols-4 lg:gap-6 lg:items-stretch">
            {t.process.steps.map((step, index) => {
              const Icon = processIcons[index]
              const isLast = index === t.process.steps.length - 1
              return (
                <div key={step.number} className="flex flex-col lg:flex-row lg:items-stretch">
                  {/* Card */}
                  <div className="w-full">
                    <div className="bg-white border border-border rounded-2xl p-5 lg:p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30 flex flex-col h-full relative">
                      {/* Number */}
                      <div className={`absolute top-4 left-4 lg:top-6 lg:left-6 w-12 h-12 lg:w-16 lg:h-16 rounded-full ${isLast ? 'bg-emerald-500/10' : 'bg-primary/10'} flex items-center justify-center`}>
                        <span className={`text-2xl lg:text-3xl font-bold leading-none ${isLast ? 'text-emerald-500' : 'text-primary'}`}>
                          {step.number}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="flex justify-center mb-4 lg:mb-6 mt-10 lg:mt-12">
                        <Icon className={`w-9 h-9 lg:w-12 lg:h-12 ${isLast ? 'text-emerald-500' : 'text-primary'}`} strokeWidth={1.5} />
                      </div>

                      {/* Title */}
                      <h3 className="text-sm lg:text-base font-bold text-foreground mb-2 text-center">
                        {step.title}
                      </h3>
                      <div className={`w-10 lg:w-12 h-1 ${isLast ? 'bg-emerald-500' : 'bg-primary'} mx-auto mb-3 lg:mb-4`}></div>

                      {/* Description */}
                      <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed text-center flex-grow">
                        {step.description}
                      </p>

                      {/* Time estimate for first step */}
                      {index === 0 && (
                        <div className="flex items-center justify-center gap-2 mt-3 lg:mt-4 text-primary font-medium text-xs lg:text-sm bg-primary/10 rounded-full px-3 lg:px-4 py-1.5 lg:py-2">
                          <Clock className="w-3 h-3 lg:w-4 lg:h-4" />
                          {t.process.timeEstimate}
                        </div>
                      )}

                      {/* Savings estimate for last step */}
                      {isLast && (
                        <div className="flex items-center justify-center gap-2 mt-3 lg:mt-4 text-emerald-500 font-medium text-xs lg:text-sm bg-emerald-500/10 rounded-full px-3 lg:px-4 py-1.5 lg:py-2">
                          <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4" />
                          {t.process.savingsEstimate}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Desktop: horizontal arrow to the right */}
                  {!isLast && (
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

                  {/* Mobile: vertical arrow below */}
                  {!isLast && (
                    <div className="flex lg:hidden justify-center py-2">
                      <svg
                        width="20"
                        height="32"
                        viewBox="0 0 20 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={index === t.process.steps.length - 2 ? "text-emerald-500" : "text-primary"}
                      >
                        <path
                          d="M10 0V27M10 27L5 22M10 27L15 22"
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
            {t.process.cta}
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
