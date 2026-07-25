"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useLanguage } from "@/lib/i18n/language-context"
import { Calculator, Clock } from "lucide-react"
import { useRouter } from "next/navigation"

export default function TimeSavingsPage() {
  const { t } = useLanguage()
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoursPerDay, setHoursPerDay] = useState(1)

  const handleCalculate = () => {
    if (selectedCategory) {
      router.push(`/time-savings/result?category=${selectedCategory}&hours=${hoursPerDay}`)
    }
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              {t.timeSavings.title}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t.timeSavings.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.timeSavings.subtitle}
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {t.timeSavings.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative p-6 rounded-2xl border-2 transition-all text-left ${
                  selectedCategory === category.id
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {category.avgSavings}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </button>
            ))}
          </div>

          {/* Slider Section */}
          <div className="max-w-3xl mx-auto mb-8">
            <div
              className={`p-8 rounded-2xl border-2 transition-all ${
                selectedCategory
                  ? "border-border bg-card"
                  : "border-border bg-muted/50 opacity-50"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <label className="text-lg font-semibold text-foreground">
                  {selectedCategory
                    ? t.timeSavings.currentlySpend
                    : t.timeSavings.selectCategory}
                </label>
                {selectedCategory && (
                  <div className="text-3xl font-bold text-primary">
                    {hoursPerDay} <span className="text-base font-normal text-muted-foreground">{t.timeSavings.hoursPerDay}</span>
                  </div>
                )}
              </div>

              <Slider
                disabled={!selectedCategory}
                value={[hoursPerDay]}
                onValueChange={(value) => setHoursPerDay(value[0])}
                min={0.5}
                max={8}
                step={0.5}
                className="mb-2"
              />

              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>0.5</span>
                <span>8</span>
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <div className="text-center">
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
