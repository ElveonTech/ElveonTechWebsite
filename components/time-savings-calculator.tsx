"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { ArrowRight, Check } from "lucide-react"
import { timeSavingTopics } from "@/lib/time-savings-data"

export function TimeSavingsCalculator() {
  const router = useRouter()
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [hours, setHours] = useState<number>(2)

  function handleSelect(id: string) {
    if (selectedId === id) {
      setSelectedId(null)
      return
    }
    setSelectedId(id)
    setHours(2)
  }

  function handleCalculate() {
    if (!selectedId) return
    router.push(`/tijd-besparen/resultaat?onderwerp=${selectedId}&uren=${hours}`)
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {timeSavingTopics.map((topic) => {
        const isSelected = selectedId === topic.id
        return (
          <div
            key={topic.id}
            className={`flex flex-col rounded-2xl border bg-card p-6 transition-all duration-300 ${
              isSelected
                ? "border-primary shadow-lg ring-1 ring-primary/20"
                : "border-border hover:border-primary/30 hover:shadow-lg"
            }`}
          >
            <button
              type="button"
              onClick={() => handleSelect(topic.id)}
              aria-expanded={isSelected}
              className="flex flex-col items-start text-left"
            >
              <div className="flex w-full items-start justify-between gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                    isSelected ? "bg-primary/20" : "bg-primary/10"
                  }`}
                >
                  <topic.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {topic.averageSaved}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{topic.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
            </button>

            {isSelected && (
              <div className="mt-6 border-t border-border pt-6">
                <label htmlFor={`slider-${topic.id}`} className="text-sm font-medium text-foreground">
                  Hoeveel uur bent u hier dagelijks mee bezig?
                </label>
                <div className="mt-5 flex items-center gap-4">
                  <Slider
                    id={`slider-${topic.id}`}
                    min={0.5}
                    max={8}
                    step={0.5}
                    value={[hours]}
                    onValueChange={(value) => setHours(value[0])}
                    aria-label="Uren per dag"
                  />
                  <span className="w-16 shrink-0 text-right text-sm font-semibold text-foreground tabular-nums">
                    {hours} uur
                  </span>
                </div>
                <Button className="mt-6 w-full gap-2" onClick={handleCalculate}>
                  Berekenen
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            )}

            {!isSelected && (
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                <Check className="h-4 w-4" />
                Selecteer om te berekenen
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
