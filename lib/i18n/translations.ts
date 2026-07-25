"use client"

import { useLanguage, type Language } from "./language-context"

export type Translation = {
  nav: {
    solutions: string
    industries: string
    timeSavings: string
    about: string
    contact: string
    getStarted: string
  }
  hero: {
    badge: string
    titleLead: string
    titleHighlight: string
    titleTrail: string
    description: string
    getInTouch: string
    exploreSolutions: string
    cardAutomated: string
    cardProcessing: string
    cardComplete: string
    workflowActive: string
    workflowSubtitle: string
  }
  solutions: {
    eyebrow: string
    title: string
    description: string
    items: { title: string; description: string }[]
  }
  industries: {
    eyebrow: string
    title: string
    description: string
    items: { name: string; description: string }[]
  }
  about: {
    eyebrow: string
    title: string
    body1: string
    body2: string
    values: string[]
    cardTitle: string
    cardSubtitle: string
    badgeTitle: string
    badgeSubtitle: string
  }
  cta: {
    title: string
    description: string
    getInTouch: string
    directLead: string
  }
  footer: {
    tagline: string
    solutions: string
    company: string
    resources: string
    solutionsLinks: string[]
    companyLinks: string[]
    resourcesLinks: string[]
    legalLinks: string[]
    rights: string
  }
  calculator: {
    badge: string
    titleLead: string
    titleHighlight: string
    titleTrail: string
    description: string
    sliderLabel: string
    hoursUnit: string
    calculate: string
    selectToCalculate: string
    averageSavedSuffix: string
  }
  result: {
    metaTitle: string
    back: string
    titleLead: string
    perDay: string
    titleTrail: string
    basedOn1: string
    basedOn2: string
    savedPerWeek: string
    savedPerYear: string
    freeDaysPerYear: string
    hoursUnit: string
    workdaysUnit: string
    solutionEyebrow: string
    contactTitle: string
    contactBody: string
    sendEmail: string
    calcAnother: string
    contactDetails: string
    emailLabel: string
    phoneLabel: string
    locationLabel: string
    locationValue: string
    emailSubject: string
    emailBody: string
    notFound: string
  }
}

export const translations: Record<Language, Translation> = {
  nl: {
    nav: {
      solutions: "Oplossingen",
      industries: "Sectoren",
      timeSavings: "Tijd besparen",
      about: "Over ons",
      contact: "Contact",
      getStarted: "Aan de slag",
    },
    hero: {
      badge: "Slimme automatiseringsoplossingen",
      titleLead: "Automatiseer uw bedrijf,",
      titleHighlight: "versterk",
      titleTrail: " uw groei",
      description:
        "Ik identificeer en los de meest urgente knelpunten in uw sector op en bouw automatiseringsoplossingen op maat die inefficiënties wegnemen en meetbare resultaten opleveren.",
      getInTouch: "Neem contact op",
      exploreSolutions: "Bekijk oplossingen",
      cardAutomated: "Geautomatiseerd",
      cardProcessing: "Bezig",
      cardComplete: "Voltooid",
      workflowActive: "Workflow actief",
      workflowSubtitle: "Automatisering draait soepel",
    },
    solutions: {
      eyebrow: "Oplossingen",
      title: "Volledige automatisering voor elke uitdaging",
      description:
        "Van eenvoudige taakautomatisering tot complexere workflows, ik bouw oplossingen die inspelen op uw specifieke behoeften.",
      items: [
        {
          title: "Procesautomatisering",
          description:
            "Zet repetitieve taken om in gestroomlijnde, geautomatiseerde workflows, afgestemd op uw specifieke bedrijfsprocessen.",
        },
        {
          title: "Systeemintegratie",
          description:
            "Verbind losse systemen en gegevensbronnen om silo's te doorbreken en een soepelere gegevensstroom door uw organisatie mogelijk te maken.",
        },
        {
          title: "Analyse & rapportage",
          description:
            "Bouw dashboards en rapportagetools die u helder inzicht geven in uw activiteiten en helpen bij het nemen van beslissingen.",
        },
        {
          title: "Compliance-tools",
          description:
            "Ontwikkel tools om aan regelgeving te voldoen en audittrails bij te houden met minder handmatig werk.",
        },
        {
          title: "Geplande automatisering",
          description:
            "Zet processen op die volgens schema draaien en routinetaken afhandelen, zodat u zich kunt richten op werk met meer waarde.",
        },
        {
          title: "Maatwerkontwikkeling",
          description:
            "Elk bedrijf is anders. Ik bouw oplossingen op maat die passen bij uw specifieke workflows en uitdagingen.",
        },
      ],
    },
    industries: {
      eyebrow: "Sectoren",
      title: "Oplossingen voor uiteenlopende sectoren",
      description:
        "Elke sector heeft unieke uitdagingen en inefficiënties. Ik neem de tijd om uw specifieke knelpunten te begrijpen en bouw gerichte oplossingen die de kern van operationele wrijving aanpakken.",
      items: [
        {
          name: "Productie",
          description: "Optimaliseer productielijnen, toeleveringsketens en kwaliteitscontrole met slimme automatisering.",
        },
        {
          name: "Vastgoed",
          description: "Stroomlijn vastgoedbeheer, huurderscommunicatie en documentatieworkflows.",
        },
        {
          name: "Zorg",
          description: "Automatiseer patiëntplanning, beheer van medische dossiers en compliance-rapportage.",
        },
        {
          name: "Retail & e-commerce",
          description: "Verbeter voorraadbeheer, orderverwerking en klantenserviceprocessen.",
        },
        {
          name: "Logistiek",
          description: "Optimaliseer routeplanning, zendingtracering en magazijnprocessen naadloos.",
        },
        {
          name: "Financiële diensten",
          description: "Automatiseer transactieverwerking, risicobeoordeling en naleving van regelgeving.",
        },
      ],
    },
    about: {
      eyebrow: "Over Elveon Tech",
      title: "Echte knelpunten in sectoren oplossen",
      body1:
        "Elveon Tech is opgericht met een duidelijke missie: de meest urgente knelpunten identificeren en oplossen waar bedrijven in verschillende sectoren mee te maken hebben. Door direct met klanten samen te werken, achterhaal ik de oorzaken van inefficiënties en bouw ik gerichte automatiseringsoplossingen die echt impact maken.",
      body2:
        "Als solo-oprichter breng ik een praktische, persoonlijke aanpak naar elk project. U werkt van analyse tot oplevering rechtstreeks met mij samen, zodat uw unieke uitdagingen met precisie en zorg worden begrepen en aangepakt.",
      values: [
        "Diepgaande analyse van knelpunten",
        "Automatiseringsoplossingen op maat",
        "Praktische, persoonlijke aanpak",
        "Snelle iteratie en oplevering",
        "Langetermijnpartnerschap",
        "Focus op continue verbetering",
      ],
      cardTitle: "Probleemoplosser",
      cardSubtitle: "Elegante oplossingen voor complexe uitdagingen",
      badgeTitle: "Door de oprichter",
      badgeSubtitle: "Directe samenwerking",
    },
    cta: {
      title: "Klaar om uw bedrijfsprocessen te transformeren?",
      description:
        "Laten we uw specifieke uitdagingen bespreken en verkennen hoe automatisering kan helpen. Plan een vrijblijvend gesprek om te starten.",
      getInTouch: "Neem contact op",
      directLead: "Of bereik ons direct via",
    },
    footer: {
      tagline: "Slimme automatiseringsoplossingen bouwen die veranderen hoe bedrijven werken en groeien.",
      solutions: "Oplossingen",
      company: "Bedrijf",
      resources: "Bronnen",
      solutionsLinks: ["Procesautomatisering", "Integratieplatform", "Analysepakket", "Compliance-tools"],
      companyLinks: ["Over ons", "Contact"],
      resourcesLinks: ["Documentatie", "Praktijkvoorbeelden", "Webinars", "Ondersteuning"],
      legalLinks: ["Privacybeleid", "Servicevoorwaarden", "Cookiebeleid"],
      rights: "Alle rechten voorbehouden.",
    },
    calculator: {
      badge: "Tijdsbesparing berekenen",
      titleLead: "Hoeveel tijd kunt u ",
      titleHighlight: "besparen",
      titleTrail: "?",
      description:
        "Kies hieronder het onderwerp dat de meeste tijd kost. Geef aan hoelang u er dagelijks mee bezig bent en ontdek direct hoeveel tijd automatisering u kan opleveren.",
      sliderLabel: "Hoeveel uur bent u hier dagelijks mee bezig?",
      hoursUnit: "uur",
      calculate: "Berekenen",
      selectToCalculate: "Selecteer om te berekenen",
      averageSavedSuffix: "minder tijd",
    },
    result: {
      metaTitle: "Uw tijdsbesparing | Elveon Tech",
      back: "Terug naar berekening",
      titleLead: "U kunt tot ",
      perDay: "uur per dag",
      titleTrail: " besparen",
      basedOn1: "Op basis van",
      basedOn2: "uur per dag aan",
      savedPerWeek: "bespaard per week",
      savedPerYear: "bespaard per jaar",
      freeDaysPerYear: "vrij per jaar",
      hoursUnit: "uur",
      workdaysUnit: "werkdagen",
      solutionEyebrow: "De oplossing",
      contactTitle: "Klaar om deze tijd terug te winnen?",
      contactBody:
        "Vul het contactformulier in of stuur ons direct een e-mail. We bekijken samen kosteloos hoe we deze oplossing voor u kunnen realiseren.",
      sendEmail: "Stuur een e-mail",
      calcAnother: "Ander onderwerp berekenen",
      contactDetails: "Contactgegevens",
      emailLabel: "E-mail",
      phoneLabel: "Telefoon",
      locationLabel: "Locatie",
      locationValue: "Nederland",
      emailSubject: "Tijdsbesparing",
      emailBody:
        "Hallo Elveon Tech,\n\nIk ben dagelijks ongeveer {hours} uur bezig met {topic} en wil graag meer weten over de mogelijkheden om dit te automatiseren.\n\nMet vriendelijke groet,",
      notFound: "Onderwerp niet gevonden",
    },
  },
  en: {
    nav: {
      solutions: "Solutions",
      industries: "Industries",
      timeSavings: "Save time",
      about: "About",
      contact: "Contact",
      getStarted: "Get Started",
    },
    hero: {
      badge: "Intelligent Automation Solutions",
      titleLead: "Automate Your Business,",
      titleHighlight: "Amplify",
      titleTrail: " Your Growth",
      description:
        "I identify and solve the most pressing pain points in your industry, building tailored automation solutions that eliminate inefficiencies and drive measurable results.",
      getInTouch: "Get in Touch",
      exploreSolutions: "Explore Solutions",
      cardAutomated: "Automated",
      cardProcessing: "Processing",
      cardComplete: "Complete",
      workflowActive: "Workflow Active",
      workflowSubtitle: "Automation running smoothly",
    },
    solutions: {
      eyebrow: "Solutions",
      title: "Comprehensive Automation for Every Challenge",
      description:
        "From simple task automation to more complex workflows, I build solutions that address your specific needs.",
      items: [
        {
          title: "Process Automation",
          description:
            "Transform repetitive tasks into streamlined automated workflows tailored to your specific business processes.",
        },
        {
          title: "System Integration",
          description:
            "Connect disparate systems and data sources to eliminate silos and enable smoother data flow across your operations.",
        },
        {
          title: "Analytics & Reporting",
          description:
            "Build dashboards and reporting tools that give you clear visibility into your operations and help inform decisions.",
        },
        {
          title: "Compliance Tools",
          description:
            "Develop tools to help track regulatory requirements and maintain audit trails with less manual overhead.",
        },
        {
          title: "Scheduled Automation",
          description:
            "Set up processes that run on schedule, handling routine tasks so you can focus on higher-value work.",
        },
        {
          title: "Custom Development",
          description:
            "Every business is different. I build tailored solutions that fit your specific workflows and challenges.",
        },
      ],
    },
    industries: {
      eyebrow: "Industries",
      title: "Seeking Solutions Across Industries",
      description:
        "Every industry has unique challenges and inefficiencies. I take the time to understand your specific pain points and build targeted solutions that address the root causes of operational friction.",
      items: [
        {
          name: "Manufacturing",
          description: "Optimize production lines, supply chains, and quality control with intelligent automation.",
        },
        {
          name: "Real Estate",
          description: "Streamline property management, tenant communications, and documentation workflows.",
        },
        {
          name: "Healthcare",
          description: "Automate patient scheduling, medical records management, and compliance reporting.",
        },
        {
          name: "Retail & E-commerce",
          description: "Enhance inventory management, order processing, and customer service operations.",
        },
        {
          name: "Logistics",
          description: "Optimize route planning, shipment tracking, and warehouse operations seamlessly.",
        },
        {
          name: "Financial Services",
          description: "Automate transaction processing, risk assessment, and regulatory compliance.",
        },
      ],
    },
    about: {
      eyebrow: "About Elveon Tech",
      title: "Solving Real Industry Pain Points",
      body1:
        "Elveon Tech was founded with a clear mission: to identify and solve the most pressing pain points that businesses face across various industries. By working directly with clients, I uncover the root causes of inefficiencies and build targeted automation solutions that deliver real impact.",
      body2:
        "As a solo founder, I bring a hands-on, personalized approach to every project. You work directly with me from discovery to delivery, ensuring your unique challenges are understood and addressed with precision and care.",
      values: [
        "Deep industry pain point analysis",
        "Tailored automation solutions",
        "Hands-on, personalized approach",
        "Rapid iteration and delivery",
        "Long-term partnership mindset",
        "Continuous improvement focus",
      ],
      cardTitle: "Problem Solver",
      cardSubtitle: "Finding elegant solutions for complex industry challenges",
      badgeTitle: "Founder-Led",
      badgeSubtitle: "Direct collaboration",
    },
    cta: {
      title: "Ready to Transform Your Business Operations?",
      description:
        "Let's discuss your specific challenges and explore how automation can help. Schedule a free consultation to get started.",
      getInTouch: "Get in Touch",
      directLead: "Or reach us directly at",
    },
    footer: {
      tagline: "Building intelligent automation solutions that transform how businesses operate and grow.",
      solutions: "Solutions",
      company: "Company",
      resources: "Resources",
      solutionsLinks: ["Process Automation", "Integration Platform", "Analytics Suite", "Compliance Tools"],
      companyLinks: ["About", "Contact"],
      resourcesLinks: ["Documentation", "Case Studies", "Webinars", "Support"],
      legalLinks: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
      rights: "All rights reserved.",
    },
    calculator: {
      badge: "Calculate time savings",
      titleLead: "How much time can you ",
      titleHighlight: "save",
      titleTrail: "?",
      description:
        "Choose the topic below that takes up the most time. Indicate how long you spend on it each day and instantly discover how much time automation can save you.",
      sliderLabel: "How many hours do you spend on this daily?",
      hoursUnit: "hours",
      calculate: "Calculate",
      selectToCalculate: "Select to calculate",
      averageSavedSuffix: "less time",
    },
    result: {
      metaTitle: "Your time savings | Elveon Tech",
      back: "Back to calculation",
      titleLead: "You can save up to ",
      perDay: "hours per day",
      titleTrail: "",
      basedOn1: "Based on",
      basedOn2: "hours per day on",
      savedPerWeek: "saved per week",
      savedPerYear: "saved per year",
      freeDaysPerYear: "free per year",
      hoursUnit: "hours",
      workdaysUnit: "workdays",
      solutionEyebrow: "The solution",
      contactTitle: "Ready to win back this time?",
      contactBody:
        "Fill in the contact form or send us an email directly. Together we'll explore, free of charge, how we can build this solution for you.",
      sendEmail: "Send an email",
      calcAnother: "Calculate another topic",
      contactDetails: "Contact details",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      locationValue: "Netherlands",
      emailSubject: "Time savings",
      emailBody:
        "Hello Elveon Tech,\n\nI spend roughly {hours} hours per day on {topic} and would like to learn more about the possibilities to automate this.\n\nKind regards,",
      notFound: "Topic not found",
    },
  },
}

export function useTranslation() {
  const { lang, setLang, toggleLang } = useLanguage()
  return { t: translations[lang], lang, setLang, toggleLang }
}
