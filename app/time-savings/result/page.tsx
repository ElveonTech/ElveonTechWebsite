"use client"

import { useState, useEffect, Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useLanguage } from "@/lib/i18n/language-context"
import { useSearchParams, useRouter } from "next/navigation"
import { Clock, CheckCircle2, Mail, Phone, ArrowRight, Users, Euro, Calculator } from "lucide-react"
import Link from "next/link"

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

const formatTimeValue = (hours: number) => {
  if (hours >= 9) return "8+ uur"
  if (hours >= 1) return `${hours} uur`
  const minutes = Math.round(hours * 60)
  return `${minutes} min`
}

const findClosestIndex = (value: number) => {
  let closestIndex = 0
  let minDiff = Math.abs(TIME_VALUES[0] - value)
  
  for (let i = 1; i < TIME_VALUES.length; i++) {
    const diff = Math.abs(TIME_VALUES[i] - value)
    if (diff < minDiff) {
      minDiff = diff
      closestIndex = i
    }
  }
  
  return closestIndex
}

function TimeSavingsResultContent() {
  const { t } = useLanguage()
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const initialCategory = searchParams.get("category") || "email"
  const initialHours = parseFloat(searchParams.get("hours") || "1")
  const initialPeople = parseInt(searchParams.get("people") || "1")
  
  const [category, setCategory] = useState(initialCategory)
  const [sliderIndex, setSliderIndex] = useState(findClosestIndex(initialHours))
  const [numberOfPeople, setNumberOfPeople] = useState(initialPeople)

  const hoursPerDay = TIME_VALUES[sliderIndex]

  // Update URL when category or hours change
  useEffect(() => {
    const params = new URLSearchParams()
    params.set("category", category)
    params.set("hours", hoursPerDay.toString())
    params.set("people", numberOfPeople.toString())
    router.replace(`/time-savings/result?${params.toString()}`, { scroll: false })
  }, [category, hoursPerDay, numberOfPeople, router])

  // Calculate savings (assuming 70% automation efficiency)
  const automationEfficiency = 0.7
  const workDaysPerYear = 260
  const hoursPerWorkDay = 8
  const avgCostPerHour = 50 // €50 per hour average employee cost
  
  // Per person calculations
  const hoursPerYearPerPerson = hoursPerDay * workDaysPerYear
  const savedHoursPerYearPerPerson = hoursPerYearPerPerson * automationEfficiency
  const savedWorkDaysPerPerson = savedHoursPerYearPerPerson / hoursPerWorkDay
  const savedWeeksPerPerson = savedWorkDaysPerPerson / 5
  const savedMoneyPerYearPerPerson = savedHoursPerYearPerPerson * avgCostPerHour
  
  // Total calculations (multiplied by number of people)
  const totalSavedHoursPerYear = savedHoursPerYearPerPerson * numberOfPeople
  const totalSavedWorkDays = Math.round(savedWorkDaysPerPerson * numberOfPeople)
  const totalSavedWeeks = Math.round(savedWeeksPerPerson * numberOfPeople)
  const totalSavedMoneyPerYear = savedMoneyPerYearPerPerson * numberOfPeople

  const categoryData = t.timeSavings.categories.find(c => c.id === category) || t.timeSavings.categories[0]
  const solutionData = t.timeSavingsResult.solutions[category as keyof typeof t.timeSavingsResult.solutions]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <>
      <Header />
      <main className="pt-16 pb-20">
        {/* Hero Section with Results */}
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background pt-12 lg:pt-16 pb-8 lg:pb-12 mb-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Clock className="w-4 h-4" />
                {categoryData.title}
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 max-w-4xl mx-auto">
                {t.timeSavingsResult.headline}{" "}
                <span className="text-primary">{totalSavedWorkDays} {t.timeSavingsResult.workDays}</span>{" "}
                {t.timeSavingsResult.perYear}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-12">
                {t.timeSavingsResult.subheadline}
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
              {/* Time Savings */}
              <div className="bg-card p-6 rounded-2xl border border-border">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {t.timeSavingsResult.totalTimeSaved}
                    </h3>
                  </div>
                  <span className="text-sm text-muted-foreground">per jaar</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                      {Math.round(totalSavedHoursPerYear)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t.timeSavingsResult.hours}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                      {totalSavedWorkDays}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t.timeSavingsResult.days}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                      {totalSavedWeeks}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t.timeSavingsResult.weeks}
                    </div>
                  </div>
                </div>
              </div>

              {/* Money Savings */}
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-2xl border border-green-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <Euro className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {t.timeSavingsResult.totalMoneySaved}
                  </h3>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">
                  {formatCurrency(totalSavedMoneyPerYear)}
                </div>
                <div className="text-xs text-muted-foreground mb-4">
                  {t.timeSavingsResult.perYearLabel}
                </div>
                <div className="pt-4 border-t border-green-500/20">
                  <p className="text-xs text-muted-foreground">
                    {t.timeSavingsResult.basedOn} {t.timeSavingsResult.avgCostPerHour}
                  </p>
                </div>
              </div>
            </div>

            {/* Adjustment Sliders */}
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Hours per day slider */}
              <div className="p-6 lg:p-8 rounded-2xl border-2 border-border bg-card">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <label className="text-lg font-semibold text-foreground">
                      {t.timeSavingsResult.adjustHours}
                    </label>
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {formatTimeValue(hoursPerDay)}
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

                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>5 min</span>
                  <span>8+ uur</span>
                </div>
              </div>

              {/* Team size slider */}
              <div className="p-6 lg:p-8 rounded-2xl border-2 border-border bg-card">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <label className="text-lg font-semibold text-foreground">
                      {t.timeSavingsResult.adjustTeamSize}
                    </label>
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {numberOfPeople} <span className="text-base font-normal text-muted-foreground">
                      {numberOfPeople === 1 ? t.timeSavingsResult.person : t.timeSavingsResult.people}
                    </span>
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

                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>1</span>
                  <span>50</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Details & Contact - Main CTA Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Solution Details */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {t.timeSavingsResult.aboutSolution}
              </h2>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {solutionData.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {solutionData.description}
              </p>

              {/* Benefits */}
              <div className="space-y-4">
                {solutionData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card - Central CTA */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-primary rounded-3xl p-8 lg:p-10 text-primary-foreground shadow-2xl">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {t.timeSavingsResult.readyToStart}
                </h3>
                <p className="text-primary-foreground/80 text-lg mb-8">
                  {t.timeSavingsResult.readyDescription}
                </p>

                <Button 
                  size="lg" 
                  variant="secondary"
                  className="w-full gap-2 bg-white text-primary hover:bg-white/90 mb-6"
                  asChild
                >
                  <a href="mailto:contact@elveontech.com">
                    <Mail className="w-5 h-5" />
                    {t.timeSavingsResult.contactUs}
                  </a>
                </Button>

                <div className="space-y-4 pt-6 border-t border-primary-foreground/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-primary-foreground/60 mb-1">
                        {t.timeSavingsResult.email}
                      </div>
                      <a 
                        href="mailto:contact@elveontech.com"
                        className="font-medium hover:underline"
                      >
                        contact@elveontech.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-primary-foreground/60 mb-1">
                        {t.timeSavingsResult.phone}
                      </div>
                      <a 
                        href="tel:+31628546303"
                        className="font-medium hover:underline"
                      >
                        +31 6 28546303
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back to calculator */}
              <div className="mt-6 text-center">
                <Link 
                  href="/time-savings"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  {t.timeSavingsResult.calculateAgain}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Other Categories */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium mb-4">
              <Calculator className="w-4 h-4" />
              {t.timeSavingsResult.exploreOther}
            </div>
            <p className="text-muted-foreground">
              {t.timeSavingsResult.exploreDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.timeSavings.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`group relative p-5 rounded-xl border-2 transition-all text-left ${
                  category === cat.id
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-semibold text-foreground">
                    {cat.title}
                  </h3>
                  <div className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                    {cat.avgSavings}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {cat.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function TimeSavingsResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <TimeSavingsResultContent />
    </Suspense>
  )
}
