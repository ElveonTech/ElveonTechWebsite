import type { Metadata } from "next"
import { Trash2, CheckCircle2, Clock, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Dubu — Account Deletion Request",
  description: "Request deletion of your Dubu account and all associated data.",
}

const deletedData = [
  "Your account and login credentials",
  "Your profile (username, bio, profile picture)",
  "All recipes you have created",
  "Your bookmarks, likes, and follows",
]

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl">

        {/* Icon + Title */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
            <Trash2 className="w-6 h-6 text-destructive" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Account Deletion Request</h1>
            <p className="text-sm text-muted-foreground mt-0.5">Dubu by Elveon Tech</p>
          </div>
        </div>

        {/* How to request */}
        <div className="rounded-2xl border border-border bg-card p-6 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Mail className="w-4 h-4 text-primary" />
            <h2 className="font-semibold text-foreground">How to request deletion</h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Send an email to{" "}
            <a
              href="mailto:contact@elveontech.nl?subject=Delete%20my%20account"
              className="text-primary hover:underline font-medium"
            >
              contact@elveontech.nl
            </a>{" "}
            with the subject line{" "}
            <span className="font-mono bg-muted px-1.5 py-0.5 rounded text-xs text-foreground">
              Delete my account
            </span>{" "}
            and include the email address associated with your Dubu account.
          </p>
        </div>

        {/* What gets deleted */}
        <div className="rounded-2xl border border-border bg-card p-6 mb-4">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <h2 className="font-semibold text-foreground">What data will be deleted</h2>
          </div>
          <ul className="space-y-3">
            {deletedData.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Retention */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-primary" />
            <h2 className="font-semibold text-foreground">Retention period</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            All data is permanently deleted within <strong className="text-foreground">30 days</strong> of your request.
          </p>
        </div>

      </div>
    </div>
  )
}
