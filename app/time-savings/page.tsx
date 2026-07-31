"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useLanguage } from "@/lib/i18n/language-context"
import { Calculator, Clock, ChevronDown, Users } from "lucide-react"
import { useRouter } from "next/navigation"

// Custom time values: 5, 10, 15, 30, 45 min, 1h, then 30min increments to 3h, then 1h increments to 8h
const TIME_VALUES = [
  0.083,  // 5 min
  0.167,  // 10 min
  0.25,   // 15 min
  0.5,    // 30 min
  0.75,   // 45 min
  1,      // 1 hour
  1.5,    // 1.5 hours
  2,      // 2 hours
  2.5,    // 2.5 hours
  3,      // 3 hours
  4,      // 4 hours
  5,      // 5 hours
  6,      // 6 hours
  7,      // 7 hours
  8,      // 8 hours
  9       // 8+ hours (represented as 9 internally)
]

const formatTimeValue = (hours: number, hoursOver8: string, hoursSuffix: string) => {
  if (hours >= 9) return hoursOver8
  if (hours >= 1) return `${hours}${hoursSuffix}`
  const minutes = Math.round(hours * 60)
  return `${minutes} min`
}

export default function TimeSavingsPage() {
  const { t } = useLanguage()
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sliderIndex, setSliderIndex] = useState(5) // Default to 1 hour (index 5)
  const [numberOfPeople, setNumberOfPeople] = useState(1)
  const [showSlider, setShowSlider] = useState(false)

  const hoursPerDay = TIME_VALUES[sliderIndex]
  const fmt = (h: number) => formatTimeValue(h, t.timeSavings.hoursOver8, t.timeSavings.hoursSuffix)

  useEffect(() => {
    if (selectedCategory) {
      setShowSlider(true)
      // Scroll to slider on mobile when category is selected
      if (window.innerWidth < 768) {
        setTimeout(() => {
          document.getElementById('slider-section')?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          })
        }, 100)
      }
    }
  }, [selectedCategory])

  const handleCalculate = () => {
    if (selectedCategory) {
      router.push(`/time-savings/result?category=${selectedCategory}&hours=${hoursPerDay}&people=${numberOfPeople}`)
    }
  }

  const selectedCategoryData = selectedCategory 
    ? t.timeSavings.categories.find(c => c.id === selectedCategory)
    : null

  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-8 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              {t.timeSavings.title}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t.timeSavings.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.timeSavings.subtitle}
            </p>
          </div>

          {/* Selected Category Indicator - Mobile Only */}
          {selectedCategory && (
            <div className="md:hidden mb-4 p-4 rounded-xl bg-primary/10 border-2 border-primary">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-xs text-primary font-medium mb-1">{t.timeSavings.selectedLabel}</div>
                  <div className="text-sm font-semibold text-foreground">{selectedCategoryData?.title}</div>
                </div>
                <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
              </div>
            </div>
          )}

          {/* Slider Section - Sticky on mobile when category selected */}
          {showSlider && (
            <div 
              id="slider-section"
              className={`mb-6 space-y-4 ${selectedCategory ? 'md:hidden' : 'hidden'}`}
            >
              {/* Hours slider - Mobile */}
              <div className="p-6 rounded-2xl border-2 border-primary bg-card shadow-lg">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-base font-semibold text-foreground">
                      {t.timeSavings.currentlySpend}
                    </label>
                    <div className="text-2xl font-bold text-primary">
                      {fmt(hoursPerDay)}
                    </div>
                  </div>
                </div>

                <Slider
                  value={[sliderIndex]}
                  onValueChange={(value) => setSliderIndex(value[0])}
                  min={0}
                  max={TIME_VALUES.length - 1}
                  step={1}
                  className="mb-2"
                />

                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>5 min</span>
                  <span>{t.timeSavings.hoursOver8}</span>
                </div>
              </div>

              {/* Team size slider - Mobile */}
              <div className="p-6 rounded-2xl border-2 border-border bg-card shadow-lg">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-base font-semibold text-foreground">
                      {t.timeSavings.teamSizeLabel}
                    </label>
                    <div className="text-2xl font-bold text-primary">
                      {numberOfPeople} <span className="text-sm font-normal text-muted-foreground">
                        {numberOfPeople === 1 ? t.timeSavings.person : t.timeSavings.people}
                      </span>
                    </div>
                  </div>
                </div>

                <Slider
                  value={[numberOfPeople]}
                  onValueChange={(value) => setNumberOfPeople(value[0])}
                  min={1}
                  max={50}
                  step={1}
                  className="mb-2"
                />

                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>1</span>
                  <span>50</span>
                </div>
              </div>

              <Button
                size="lg"
                onClick={handleCalculate}
                className="w-full gap-2"
              >
                <Calculator className="w-5 h-5" />
                {t.timeSavings.calculate}
              </Button>
            </div>
          )}

          {/* Categories Grid - More compact on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-8">
            {t.timeSavings.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl border-2 transition-all text-left ${
                  selectedCategory === category.id
                    ? "border-primary bg-primary/5 shadow-lg scale-[0.98] sm:scale-100"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="px-2 sm:px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-medium border border-green-500/20">
                    {t.timeSavings.savePrefix}{category.avgSavings}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">
                  {category.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                  {category.description}
                </p>
                {selectedCategory === category.id && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Slider Section - Desktop */}
          <div className="hidden md:block max-w-6xl mx-auto mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Hours per day card */}
              <div
                className={`p-8 rounded-2xl border-2 transition-all ${
                  selectedCategory
                    ? "border-border bg-card"
                    : "border-border bg-muted/50 opacity-50"
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <label className="text-lg font-semibold text-foreground">
                    {selectedCategory
                      ? t.timeSavings.currentlySpend
                      : t.timeSavings.selectCategory}
                  </label>
                </div>

                {selectedCategory && (
                  <div className="text-3xl font-bold text-primary mb-6">
                    {fmt(hoursPerDay)}
                  </div>
                )}

                <Slider
                  disabled={!selectedCategory}
                  value={[sliderIndex]}
                  onValueChange={(value) => setSliderIndex(value[0])}
                  min={0}
                  max={TIME_VALUES.length - 1}
                  step={1}
                  className="mb-2"
                />

                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>5 min</span>
                  <span>{t.timeSavings.hoursOver8}</span>
                </div>
              </div>

              {/* Team size card */}
              <div
                className={`p-8 rounded-2xl border-2 transition-all ${
                  selectedCategory
                    ? "border-border bg-card"
                    : "border-border bg-muted/50 opacity-50"
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <label className="text-lg font-semibold text-foreground">
                    {t.timeSavings.teamSizeLabel}
                  </label>
                </div>

                {selectedCategory && (
                  <div className="text-3xl font-bold text-primary mb-6">
                    {numberOfPeople} <span className="text-base font-normal text-muted-foreground">
                      {numberOfPeople === 1 ? t.timeSavings.person : t.timeSavings.people}
                    </span>
                  </div>
                )}

                <Slider
                  disabled={!selectedCategory}
                  value={[numberOfPeople]}
                  onValueChange={(value) => setNumberOfPeople(value[0])}
                  min={1}
                  max={50}
                  step={1}
                  className="mb-2"
                />

                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>1</span>
                  <span>50</span>
                </div>
              </div>
            </div>
          </div>

          {/* Calculate Button - Desktop */}
          <div className="hidden md:block text-center">
            <Button
              size="lg"
              onClick={handleCalculate}
              disabled={!selectedCategory}
              className="gap-2 min-w-[200px]"
            >
              <Calculator className="w-5 h-5" />
              {t.timeSavings.calculate}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
