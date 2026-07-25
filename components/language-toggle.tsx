"use client"

import { useLanguage } from "@/lib/i18n/language-context"

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className={`inline-flex items-center rounded-full border border-border bg-secondary/50 p-0.5 text-xs font-semibold ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLang("nl")}
        aria-pressed={lang === "nl"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === "nl" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        NL
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  )
}
