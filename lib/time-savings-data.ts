import type { LucideIcon } from "lucide-react"
import { Mail, FileText, BarChart3, Headphones, CalendarClock, Package } from "lucide-react"

export type TimeSavingTopic = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  /** Gemiddelde tijdsbesparing die vergelijkbare klanten realiseren, als percentage van de dagelijkse tijd. */
  efficiency: number
  /** Korte weergave van de gemiddelde besparing voor op de card. */
  averageSaved: string
  /** Uitleg over de oplossing op de resultatenpagina. */
  solution: {
    headline: string
    body: string
    benefits: string[]
  }
}

export const timeSavingTopics: TimeSavingTopic[] = [
  {
    id: "email",
    title: "E-mail & communicatie",
    description: "Inbox opschonen, standaardantwoorden en interne afstemming die zich elke dag herhalen.",
    icon: Mail,
    efficiency: 0.6,
    averageSaved: "~60% minder tijd",
    solution: {
      headline: "Slimme e-mail- en communicatieautomatisering",
      body: "We categoriseren binnenkomende berichten automatisch, stellen concept-antwoorden op basis van context op en routeren vragen direct naar de juiste persoon of afdeling. Terugkerende updates worden automatisch verstuurd, zodat u zich kunt richten op de gesprekken die er echt toe doen.",
      benefits: [
        "Automatische triage en labeling van inkomende e-mail",
        "Kant-en-klare concept-antwoorden op veelgestelde vragen",
        "Geen handmatige interne doorstuur- en herinneringsmails meer",
      ],
    },
  },
  {
    id: "facturatie",
    title: "Facturatie & administratie",
    description: "Facturen opstellen, versturen, boekingen verwerken en betalingen opvolgen.",
    icon: FileText,
    efficiency: 0.75,
    averageSaved: "~75% minder tijd",
    solution: {
      headline: "End-to-end facturatie zonder handwerk",
      body: "Facturen worden automatisch gegenereerd vanuit uw orders of urenregistratie, verstuurd naar de juiste contactpersoon en gekoppeld aan uw boekhouding. Openstaande betalingen worden automatisch opgevolgd met vriendelijke herinneringen.",
      benefits: [
        "Automatisch genereren en versturen van facturen",
        "Directe koppeling met uw boekhoudpakket",
        "Automatische betalingsherinneringen en afletteren",
      ],
    },
  },
  {
    id: "rapportages",
    title: "Rapportages & data-invoer",
    description: "Gegevens overtypen tussen systemen en handmatig rapportages samenstellen.",
    icon: BarChart3,
    efficiency: 0.8,
    averageSaved: "~80% minder tijd",
    solution: {
      headline: "Rapportages die zichzelf bijwerken",
      body: "We koppelen uw systemen zodat gegevens automatisch synchroniseren en bouwen dashboards die realtime bijwerken. Terugkerende rapportages worden op schema aangemaakt en verstuurd, zonder dat u nog iets hoeft over te typen.",
      benefits: [
        "Automatische synchronisatie tussen uw systemen",
        "Realtime dashboards in plaats van handmatige overzichten",
        "Geplande rapportages die vanzelf in uw inbox verschijnen",
      ],
    },
  },
  {
    id: "klantenservice",
    title: "Klantenservice & tickets",
    description: "Terugkerende klantvragen beantwoorden en tickets handmatig toewijzen.",
    icon: Headphones,
    efficiency: 0.55,
    averageSaved: "~55% minder tijd",
    solution: {
      headline: "Snellere klantenservice met slimme assistentie",
      body: "Veelgestelde vragen worden direct beantwoord met een slimme kennisbank, terwijl complexere tickets automatisch bij de juiste medewerker terechtkomen. Uw team krijgt suggesties voor antwoorden, zodat reacties sneller en consistenter zijn.",
      benefits: [
        "Directe antwoorden op veelvoorkomende vragen",
        "Automatische toewijzing en prioritering van tickets",
        "Voorgestelde antwoorden voor uw medewerkers",
      ],
    },
  },
  {
    id: "planning",
    title: "Planning & agendabeheer",
    description: "Afspraken inplannen, heen-en-weer mailen en agenda's op elkaar afstemmen.",
    icon: CalendarClock,
    efficiency: 0.65,
    averageSaved: "~65% minder tijd",
    solution: {
      headline: "Planning die zichzelf regelt",
      body: "Klanten en collega's plannen zelf afspraken in beschikbare momenten, met automatische bevestigingen en herinneringen. Wijzigingen worden direct in alle agenda's verwerkt, zodat dubbele boekingen en heen-en-weer mailen verleden tijd zijn.",
      benefits: [
        "Zelf inplannen via een gedeelde beschikbaarheid",
        "Automatische bevestigingen en herinneringen",
        "Geen dubbele boekingen of afstemmingsmails meer",
      ],
    },
  },
  {
    id: "voorraad",
    title: "Voorraad & orderverwerking",
    description: "Orders verwerken, voorraad bijhouden en leveranciers handmatig informeren.",
    icon: Package,
    efficiency: 0.7,
    averageSaved: "~70% minder tijd",
    solution: {
      headline: "Vlotte order- en voorraadstroom",
      body: "Orders worden automatisch verwerkt en voorraadniveaus realtime bijgewerkt. Bij lage voorraad worden bestellingen of meldingen automatisch aangemaakt, zodat u nooit meer misgrijpt of handmatig hoeft te tellen.",
      benefits: [
        "Automatische orderverwerking van begin tot eind",
        "Realtime voorraadniveaus zonder handmatig tellen",
        "Automatische bijbestellingen bij lage voorraad",
      ],
    },
  },
]

export function getTopicById(id: string | undefined | null): TimeSavingTopic | undefined {
  if (!id) return undefined
  return timeSavingTopics.find((topic) => topic.id === id)
}

const WORKDAYS_PER_WEEK = 5
const WORKWEEKS_PER_YEAR = 46

export type SavingsResult = {
  dailyHours: number
  savedHoursPerDay: number
  savedHoursPerWeek: number
  savedHoursPerYear: number
  savedDaysPerYear: number
}

export function calculateSavings(topic: TimeSavingTopic, dailyHours: number): SavingsResult {
  const savedHoursPerDay = dailyHours * topic.efficiency
  const savedHoursPerWeek = savedHoursPerDay * WORKDAYS_PER_WEEK
  const savedHoursPerYear = savedHoursPerWeek * WORKWEEKS_PER_YEAR
  const savedDaysPerYear = savedHoursPerYear / 8

  return {
    dailyHours,
    savedHoursPerDay: Math.round(savedHoursPerDay * 10) / 10,
    savedHoursPerWeek: Math.round(savedHoursPerWeek * 10) / 10,
    savedHoursPerYear: Math.round(savedHoursPerYear),
    savedDaysPerYear: Math.round(savedDaysPerYear),
  }
}
