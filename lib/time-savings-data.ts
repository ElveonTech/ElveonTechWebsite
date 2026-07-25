import type { LucideIcon } from "lucide-react"
import { Mail, FileText, BarChart3, Headphones, CalendarClock, Package } from "lucide-react"
import type { Language } from "@/lib/i18n/language-context"

type LocalizedText = Record<Language, string>

type LocalizedSolution = {
  headline: string
  body: string
  benefits: string[]
}

export type TimeSavingTopic = {
  id: string
  icon: LucideIcon
  /** Gemiddelde tijdsbesparing die vergelijkbare klanten realiseren, als fractie van de dagelijkse tijd. */
  efficiency: number
  title: LocalizedText
  description: LocalizedText
  /** Korte weergave van de gemiddelde besparing voor op de card (zonder achtervoegsel). */
  averageSavedValue: string
  solution: Record<Language, LocalizedSolution>
}

export const timeSavingTopics: TimeSavingTopic[] = [
  {
    id: "email",
    icon: Mail,
    efficiency: 0.6,
    averageSavedValue: "~60%",
    title: { nl: "E-mail & communicatie", en: "Email & communication" },
    description: {
      nl: "Inbox opschonen, standaardantwoorden en interne afstemming die zich elke dag herhalen.",
      en: "Clearing your inbox, standard replies and internal coordination that repeat every day.",
    },
    solution: {
      nl: {
        headline: "Slimme e-mail- en communicatieautomatisering",
        body: "We categoriseren binnenkomende berichten automatisch, stellen concept-antwoorden op basis van context op en routeren vragen direct naar de juiste persoon of afdeling. Terugkerende updates worden automatisch verstuurd, zodat u zich kunt richten op de gesprekken die er echt toe doen.",
        benefits: [
          "Automatische triage en labeling van inkomende e-mail",
          "Kant-en-klare concept-antwoorden op veelgestelde vragen",
          "Geen handmatige interne doorstuur- en herinneringsmails meer",
        ],
      },
      en: {
        headline: "Smart email and communication automation",
        body: "We automatically categorize incoming messages, draft context-aware replies and route questions straight to the right person or department. Recurring updates are sent automatically, so you can focus on the conversations that truly matter.",
        benefits: [
          "Automatic triage and labeling of incoming email",
          "Ready-made draft replies to frequently asked questions",
          "No more manual internal forwarding and reminder emails",
        ],
      },
    },
  },
  {
    id: "facturatie",
    icon: FileText,
    efficiency: 0.75,
    averageSavedValue: "~75%",
    title: { nl: "Facturatie & administratie", en: "Invoicing & administration" },
    description: {
      nl: "Facturen opstellen, versturen, boekingen verwerken en betalingen opvolgen.",
      en: "Creating and sending invoices, processing entries and following up on payments.",
    },
    solution: {
      nl: {
        headline: "End-to-end facturatie zonder handwerk",
        body: "Facturen worden automatisch gegenereerd vanuit uw orders of urenregistratie, verstuurd naar de juiste contactpersoon en gekoppeld aan uw boekhouding. Openstaande betalingen worden automatisch opgevolgd met vriendelijke herinneringen.",
        benefits: [
          "Automatisch genereren en versturen van facturen",
          "Directe koppeling met uw boekhoudpakket",
          "Automatische betalingsherinneringen en afletteren",
        ],
      },
      en: {
        headline: "End-to-end invoicing without manual work",
        body: "Invoices are generated automatically from your orders or time tracking, sent to the right contact and linked to your bookkeeping. Outstanding payments are followed up automatically with friendly reminders.",
        benefits: [
          "Automatically generate and send invoices",
          "Direct integration with your accounting software",
          "Automatic payment reminders and reconciliation",
        ],
      },
    },
  },
  {
    id: "rapportages",
    icon: BarChart3,
    efficiency: 0.8,
    averageSavedValue: "~80%",
    title: { nl: "Rapportages & data-invoer", en: "Reporting & data entry" },
    description: {
      nl: "Gegevens overtypen tussen systemen en handmatig rapportages samenstellen.",
      en: "Retyping data between systems and manually compiling reports.",
    },
    solution: {
      nl: {
        headline: "Rapportages die zichzelf bijwerken",
        body: "We koppelen uw systemen zodat gegevens automatisch synchroniseren en bouwen dashboards die realtime bijwerken. Terugkerende rapportages worden op schema aangemaakt en verstuurd, zonder dat u nog iets hoeft over te typen.",
        benefits: [
          "Automatische synchronisatie tussen uw systemen",
          "Realtime dashboards in plaats van handmatige overzichten",
          "Geplande rapportages die vanzelf in uw inbox verschijnen",
        ],
      },
      en: {
        headline: "Reports that update themselves",
        body: "We connect your systems so data syncs automatically and build dashboards that update in real time. Recurring reports are created and sent on schedule, without you having to retype anything.",
        benefits: [
          "Automatic synchronization between your systems",
          "Real-time dashboards instead of manual overviews",
          "Scheduled reports that appear in your inbox automatically",
        ],
      },
    },
  },
  {
    id: "klantenservice",
    icon: Headphones,
    efficiency: 0.55,
    averageSavedValue: "~55%",
    title: { nl: "Klantenservice & tickets", en: "Customer service & tickets" },
    description: {
      nl: "Terugkerende klantvragen beantwoorden en tickets handmatig toewijzen.",
      en: "Answering recurring customer questions and assigning tickets manually.",
    },
    solution: {
      nl: {
        headline: "Snellere klantenservice met slimme assistentie",
        body: "Veelgestelde vragen worden direct beantwoord met een slimme kennisbank, terwijl complexere tickets automatisch bij de juiste medewerker terechtkomen. Uw team krijgt suggesties voor antwoorden, zodat reacties sneller en consistenter zijn.",
        benefits: [
          "Directe antwoorden op veelvoorkomende vragen",
          "Automatische toewijzing en prioritering van tickets",
          "Voorgestelde antwoorden voor uw medewerkers",
        ],
      },
      en: {
        headline: "Faster customer service with smart assistance",
        body: "Frequently asked questions are answered instantly with a smart knowledge base, while more complex tickets are routed automatically to the right employee. Your team gets suggested replies, making responses faster and more consistent.",
        benefits: [
          "Instant answers to common questions",
          "Automatic assignment and prioritization of tickets",
          "Suggested replies for your employees",
        ],
      },
    },
  },
  {
    id: "planning",
    icon: CalendarClock,
    efficiency: 0.65,
    averageSavedValue: "~65%",
    title: { nl: "Planning & agendabeheer", en: "Scheduling & calendar management" },
    description: {
      nl: "Afspraken inplannen, heen-en-weer mailen en agenda's op elkaar afstemmen.",
      en: "Scheduling appointments, emailing back and forth and aligning calendars.",
    },
    solution: {
      nl: {
        headline: "Planning die zichzelf regelt",
        body: "Klanten en collega's plannen zelf afspraken in beschikbare momenten, met automatische bevestigingen en herinneringen. Wijzigingen worden direct in alle agenda's verwerkt, zodat dubbele boekingen en heen-en-weer mailen verleden tijd zijn.",
        benefits: [
          "Zelf inplannen via een gedeelde beschikbaarheid",
          "Automatische bevestigingen en herinneringen",
          "Geen dubbele boekingen of afstemmingsmails meer",
        ],
      },
      en: {
        headline: "Scheduling that runs itself",
        body: "Clients and colleagues book their own appointments in available slots, with automatic confirmations and reminders. Changes are processed instantly across all calendars, so double bookings and back-and-forth emails are a thing of the past.",
        benefits: [
          "Self-scheduling through shared availability",
          "Automatic confirmations and reminders",
          "No more double bookings or coordination emails",
        ],
      },
    },
  },
  {
    id: "voorraad",
    icon: Package,
    efficiency: 0.7,
    averageSavedValue: "~70%",
    title: { nl: "Voorraad & orderverwerking", en: "Inventory & order processing" },
    description: {
      nl: "Orders verwerken, voorraad bijhouden en leveranciers handmatig informeren.",
      en: "Processing orders, tracking inventory and informing suppliers manually.",
    },
    solution: {
      nl: {
        headline: "Vlotte order- en voorraadstroom",
        body: "Orders worden automatisch verwerkt en voorraadniveaus realtime bijgewerkt. Bij lage voorraad worden bestellingen of meldingen automatisch aangemaakt, zodat u nooit meer misgrijpt of handmatig hoeft te tellen.",
        benefits: [
          "Automatische orderverwerking van begin tot eind",
          "Realtime voorraadniveaus zonder handmatig tellen",
          "Automatische bijbestellingen bij lage voorraad",
        ],
      },
      en: {
        headline: "Smooth order and inventory flow",
        body: "Orders are processed automatically and stock levels updated in real time. When stock runs low, orders or alerts are created automatically, so you never run out or have to count by hand again.",
        benefits: [
          "Automatic order processing from start to finish",
          "Real-time stock levels without manual counting",
          "Automatic reordering when stock runs low",
        ],
      },
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
