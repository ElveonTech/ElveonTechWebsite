"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Mail, CheckCircle2 } from "lucide-react"

interface ContactFormProps {
  variant?: "default" | "primary"
  title?: string
  description?: string
  context?: {
    category?: string
    hoursPerDay?: number
    numberOfPeople?: number
  }
}

export function ContactForm({ 
  variant = "default", 
  title = "Laat je interesse zien",
  description = "Vul je gegevens in en wij nemen zo snel mogelijk contact met je op.",
  context
}: ContactFormProps) {
  const [showComment, setShowComment] = useState(false)
  const [commentValue, setCommentValue] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    const formData = new FormData(e.currentTarget)
    const data = {
      email: formData.get('email'),
      phone: formData.get('phone'),
      comment: formData.get('comment'),
      context: context
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        // Use server error message if available
        throw new Error(result.error || 'Failed to send message')
      }

      setShowSuccessMessage(true)
      
      // Reset form using ref instead of e.currentTarget
      if (formRef.current) {
        formRef.current.reset()
      }
      
      setShowComment(false)
      setCommentValue("")
      
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 5000)
    } catch (error: any) {
      // Display specific error message
      const message = error.message || 'Er ging iets mis. Probeer het opnieuw of neem direct contact op via email.'
      setErrorMessage(message)
      
      // Auto-hide error after 10 seconds
      setTimeout(() => {
        setErrorMessage("")
      }, 10000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isPrimary = variant === "primary"
  const textColor = isPrimary ? "text-primary-foreground" : "text-foreground"
  const labelColor = isPrimary ? "text-primary-foreground" : "text-foreground"
  const placeholderBg = isPrimary ? "bg-white" : "bg-background"
  const inputTextColor = isPrimary ? "text-foreground" : "text-foreground"

  return (
    <div className="relative">
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="mb-6 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-500">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <p className="font-semibold mb-1">Bedankt voor je interesse!</p>
            <p className="text-sm text-white/90">We nemen zo snel mogelijk contact met je op.</p>
          </div>
          <button
            onClick={() => setShowSuccessMessage(false)}
            className="text-white/80 hover:text-white transition-colors"
          >
            <span className="text-2xl leading-none">×</span>
          </button>
        </div>
      )}

      <div className={isPrimary ? "" : "bg-card rounded-2xl p-8 border border-border shadow-lg"}>
        <h3 className={`text-2xl lg:text-3xl font-bold mb-4 ${textColor}`}>
          {title}
        </h3>
        <p className={`${isPrimary ? 'text-primary-foreground/80' : 'text-muted-foreground'} text-lg mb-8`}>
          {description}
        </p>

        <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label htmlFor="email" className={`block text-sm font-medium mb-2 ${labelColor}`}>
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={isSubmitting}
              className={`w-full px-4 py-3 rounded-lg ${placeholderBg} ${inputTextColor} border-2 border-transparent focus:border-primary/20 focus:outline-none transition-colors disabled:opacity-50`}
              placeholder="jouw@email.nl"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className={`block text-sm font-medium mb-2 ${labelColor}`}>
              Telefoonnummer *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              disabled={isSubmitting}
              className={`w-full px-4 py-3 rounded-lg ${placeholderBg} ${inputTextColor} border-2 border-transparent focus:border-primary/20 focus:outline-none transition-colors disabled:opacity-50`}
              placeholder="+31 6 12345678"
            />
          </div>

          {/* Comment - conditionally shown */}
          {showComment && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="comment" className={`block text-sm font-medium ${labelColor}`}>
                  Opmerking (optioneel)
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setShowComment(false)
                    setCommentValue("")
                  }}
                  className={`text-xs ${isPrimary ? 'text-primary-foreground/60 hover:text-primary-foreground' : 'text-muted-foreground hover:text-foreground'} transition-colors flex items-center gap-1`}
                >
                  <span className="text-lg leading-none">×</span>
                  <span>Verwijderen</span>
                </button>
              </div>
              <textarea
                id="comment"
                name="comment"
                rows={3}
                value={commentValue}
                onChange={(e) => setCommentValue(e.target.value)}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg ${placeholderBg} ${inputTextColor} border-2 border-transparent focus:border-primary/20 focus:outline-none transition-colors resize-none disabled:opacity-50`}
                placeholder="Vertel ons waar we je mee kunnen helpen..."
              />
            </div>
          )}

          {/* Add comment button */}
          {!showComment && (
            <button
              type="button"
              onClick={() => setShowComment(true)}
              className={`text-sm ${isPrimary ? 'text-primary-foreground/80 hover:text-primary-foreground' : 'text-muted-foreground hover:text-foreground'} transition-colors flex items-center gap-2`}
            >
              <span className="text-lg">+</span>
              Opmerking toevoegen (optioneel)
            </button>
          )}

          {/* Error message */}
          {errorMessage && (
            <div className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg p-3">
              {errorMessage}
            </div>
          )}

          <Button 
            type="submit"
            size="lg" 
            variant={isPrimary ? "secondary" : "default"}
            disabled={isSubmitting}
            className={`w-full gap-2 ${isPrimary ? 'bg-white text-primary hover:bg-white/90' : ''}`}
          >
            <Mail className="w-5 h-5" />
            {isSubmitting ? 'Verzenden...' : 'Verstuur aanvraag'}
          </Button>
        </form>
      </div>
    </div>
  )
}
