"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"

export type Language = "nl" | "en"

const STORAGE_KEY = "elveon-lang"

type LanguageContextValue = {
  lang: Language
  setLang: (lang: Language) => void
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

function detectBrowserLanguage(): Language {
  if (typeof navigator === "undefined") return "nl"
  const languages = navigator.languages ?? [navigator.language]
  for (const entry of languages) {
    const code = entry.toLowerCase()
    if (code.startsWith("nl")) return "nl"
    if (code.startsWith("en")) return "en"
  }
  // Fallback to Dutch
  return "nl"
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("nl")

  // On mount, resolve the stored preference or detect the browser language.
  useEffect(() => {
    let resolved: Language
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null
    if (stored === "nl" || stored === "en") {
      resolved = stored
    } else {
      resolved = detectBrowserLanguage()
    }
    setLangState(resolved)
    if (typeof document !== "undefined") {
      document.documentElement.lang = resolved
    }
  }, [])

  const setLang = useCallback((next: Language) => {
    setLangState(next)
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next)
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = next
    }
  }, [])

  const toggleLang = useCallback(() => {
    setLang(lang === "nl" ? "en" : "nl")
  }, [lang, setLang])

  return <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
