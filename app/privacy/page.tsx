import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dubu RecipeBud — Privacy Policy",
  description: "Privacy Policy for the RecipeBud mobile application.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
          <p className="mt-3 text-muted-foreground">Last updated: May 1, 2026</p>
        </div>

        <div className="prose-custom space-y-10 text-foreground">

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              RecipeBud (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the RecipeBud mobile
              application (the &ldquo;App&rdquo;). This Privacy Policy explains how we collect, use, store, share, and
              protect your personal information when you use the App, and describes your rights regarding that
              information.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              By creating an account or using the App, you agree to this Privacy Policy. If you do not agree, please do
              not use the App.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              RecipeBud is an independent application for creating, organizing, and sharing recipes. For privacy
              inquiries, you can contact us at:
            </p>
            <ul className="mt-4 space-y-1 text-muted-foreground list-disc list-inside">
              <li>Email: <a href="mailto:contact@elveontech.com" className="text-primary hover:underline">contact@elveontech.com</a></li>
              <li>Website: <Link href="/" className="text-primary hover:underline">elveontech.com</Link></li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Information We Collect</h2>

            <h3 className="text-lg font-semibold mt-6 mb-3">3.1 Information You Provide Directly</h3>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Data</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Email address", "Account creation, authentication, and password reset"],
                    ["Password", "Authentication (processed and stored securely by Supabase Auth; we never see your raw password)"],
                    ["Username", "To identify you within the App"],
                    ["Profile picture", "Displayed on your public profile; you may upload a custom image"],
                    ["Bio", "Optional text displayed on your public profile"],
                    ["Recipe content", "Titles, descriptions, ingredients, steps, images, and videos you create or import"],
                  ].map(([data, purpose]) => (
                    <tr key={data} className="hover:bg-muted/40 transition-colors">
                      <td className="px-4 py-3 font-medium text-foreground align-top w-1/3">{data}</td>
                      <td className="px-4 py-3 text-muted-foreground">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3">3.2 Information Collected Automatically</h3>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Data</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Authentication session tokens", "Stored securely on your device using expo-secure-store to keep you logged in"],
                    ["Cached profile data", "Stored locally on your device (AsyncStorage) to improve performance"],
                    ["User preferences", "Language setting and measurement system preference, stored locally"],
                  ].map(([data, purpose]) => (
                    <tr key={data} className="hover:bg-muted/40 transition-colors">
                      <td className="px-4 py-3 font-medium text-foreground align-top w-1/3">{data}</td>
                      <td className="px-4 py-3 text-muted-foreground">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3">3.3 Information Generated by Your Use of the App</h3>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Data</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Recipes you create or save", "Core app functionality"],
                    ["Bookmarks and bookmark folders", "Organising saved recipes"],
                    ["Likes", "Social engagement feature"],
                    ["Follow relationships", "Social graph (who you follow / who follows you)"],
                    ["Subscription tier", "Managed via RevenueCat to unlock premium features"],
                    ["Coins / in-app credits", "Tracked server-side for feature access"],
                  ].map(([data, purpose]) => (
                    <tr key={data} className="hover:bg-muted/40 transition-colors">
                      <td className="px-4 py-3 font-medium text-foreground align-top w-1/3">{data}</td>
                      <td className="px-4 py-3 text-muted-foreground">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Device Permissions We Request</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The App requests the following device permissions. You are always prompted before a permission is granted,
              and you can revoke permissions at any time through your device settings.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Permission</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Why it is needed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Camera", "To take photos of recipes or your profile picture"],
                    ["Photo / media library", "To select images or videos from your device for recipes or profile"],
                    ["Microphone / audio recording", "Required by the video recording system for recipe creation"],
                  ].map(([permission, reason]) => (
                    <tr key={permission} className="hover:bg-muted/40 transition-colors">
                      <td className="px-4 py-3 font-medium text-foreground align-top w-1/3">{permission}</td>
                      <td className="px-4 py-3 text-muted-foreground">{reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
              Denying a permission will disable the relevant feature but will not prevent you from using the rest of the
              App.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">5. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              {[
                "Create and manage your account",
                "Provide, operate, and maintain the App's features",
                "Enable social features (following, liking, bookmarking)",
                "Process and fulfill in-app purchases and subscriptions via RevenueCat",
                "Send password reset emails when you request them",
                "Generate a default avatar image using the DiceBear service (based on your username) if you have not set a profile picture",
                "Improve app performance through local caching",
                "Operate AI-assisted recipe import and creation features (via OpenAI, processed server-side)",
                "Perform image-to-text (OCR) conversion for recipe imports (via Google Cloud Vision, processed server-side)",
                "Enable video-based recipe imports (via YouTube Data API, processed server-side)",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-muted-foreground leading-relaxed font-medium">
              We do not use your data for advertising, behavioural profiling, or sell your data to third parties.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To provide the App&apos;s functionality, we share certain data with the following trusted third parties.
              Each operates under its own privacy policy.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Service</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Purpose</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Privacy Policy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Supabase", "Authentication, database, file storage, and server-side functions", "supabase.com/privacy", "https://supabase.com/privacy"],
                    ["RevenueCat", "In-app purchase and subscription management", "revenuecat.com/privacy", "https://www.revenuecat.com/privacy"],
                    ["OpenAI", "AI-powered recipe generation and import (server-side only)", "openai.com/policies/privacy-policy", "https://openai.com/policies/privacy-policy"],
                    ["Google Cloud Vision", "OCR text extraction from recipe images (server-side only)", "policies.google.com/privacy", "https://policies.google.com/privacy"],
                    ["YouTube Data API", "Fetching video metadata for recipe imports", "policies.google.com/privacy", "https://policies.google.com/privacy"],
                    ["DiceBear", "Generating a default avatar image from your username", "dicebear.com/legal/privacy-policy", "https://www.dicebear.com/legal/privacy-policy/"],
                  ].map(([service, purpose, label, href]) => (
                    <tr key={service} className="hover:bg-muted/40 transition-colors">
                      <td className="px-4 py-3 font-medium text-foreground align-top">{service}</td>
                      <td className="px-4 py-3 text-muted-foreground align-top">{purpose}</td>
                      <td className="px-4 py-3 align-top">
                        <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs break-all">
                          {label}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Server-side processing note:</strong> OpenAI, Google Cloud Vision, and
              YouTube API calls are made from our secure server-side Edge Functions. Your raw data is never sent directly
              from your device to these services.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Data Storage and Security</h2>
            <ul className="space-y-3 text-muted-foreground list-disc list-inside leading-relaxed">
              <li>Your account data, recipes, media, social graph, and engagement data are stored on Supabase servers hosted in the European Union (or the region configured for our Supabase project).</li>
              <li>Your authentication session is stored locally on your device using expo-secure-store, which uses the platform&apos;s secure keychain/keystore.</li>
              <li>Your preferences and profile cache are stored locally in AsyncStorage on your device.</li>
              <li>Uploaded images and videos are stored in Supabase Storage. Temporary video import files are automatically deleted after processing.</li>
              <li>We use Row-Level Security (RLS) policies on our database to ensure users can only access data they are authorised to view.</li>
              <li>We take reasonable technical and organisational measures to protect your personal data. However, no method of transmission over the internet or electronic storage is 100% secure.</li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
            <ul className="space-y-3 text-muted-foreground list-disc list-inside leading-relaxed">
              <li>Your account data is retained for as long as your account is active.</li>
              <li>If you delete your account, we will delete or anonymise your personal data within 30 days, except where we are required to retain it for legal obligations.</li>
              <li>Locally cached data is cleared from your device when you log out.</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Public Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              Recipes you mark as public are visible to other users and may be indexed or displayed within the App. Your
              username, profile picture, bio, follower count, following count, and public recipes are visible to other
              users of the App.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Children&apos;s Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              The App is not directed at children under the age of 13 (or under 16 where applicable under local law,
              such as in the EU under GDPR). We do not knowingly collect personal information from children. If you
              believe a child has provided us with personal data, please contact us and we will delete it promptly.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              {[
                ["Access", "Request a copy of the personal data we hold about you."],
                ["Rectification", "Request correction of inaccurate or incomplete data."],
                ["Erasure", "Request deletion of your personal data (\"right to be forgotten\")."],
                ["Portability", "Request your data in a structured, machine-readable format."],
                ["Restriction", "Request that we restrict processing of your data in certain circumstances."],
                ["Objection", "Object to processing of your data for certain purposes."],
                ["Withdraw consent", "Where processing is based on consent, you may withdraw it at any time."],
              ].map(([right, desc]) => (
                <li key={right}><strong className="text-foreground">{right}</strong> – {desc}</li>
              ))}
            </ul>
            <div className="mt-6 space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                <strong className="text-foreground">EU/EEA and UK users:</strong> These rights are provided under the
                General Data Protection Regulation (GDPR) and UK GDPR respectively. You also have the right to lodge a
                complaint with your local data protection authority.
              </p>
              <p>
                <strong className="text-foreground">California residents:</strong> Under the California Consumer Privacy
                Act (CCPA), you have the right to know, delete, and opt out of the sale of personal information. We do
                not sell your personal information.
              </p>
            </div>
            <p className="mt-4 text-muted-foreground">
              To exercise any of these rights, contact us at:{" "}
              <a href="mailto:contact@elveontech.com" className="text-primary hover:underline">contact@elveontech.com</a>
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Legal Basis for Processing (EU/EEA Users)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We process your personal data on the following legal bases:
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Processing Activity</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Legal Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Creating and managing your account", "Performance of a contract (Art. 6(1)(b) GDPR)"],
                    ["Providing app features", "Performance of a contract (Art. 6(1)(b) GDPR)"],
                    ["In-app purchases", "Performance of a contract (Art. 6(1)(b) GDPR)"],
                    ["Sending password reset emails", "Performance of a contract / Legitimate interest"],
                    ["Local caching for performance", "Legitimate interest (Art. 6(1)(f) GDPR)"],
                    ["Security and fraud prevention", "Legitimate interest (Art. 6(1)(f) GDPR)"],
                  ].map(([activity, basis]) => (
                    <tr key={activity} className="hover:bg-muted/40 transition-colors">
                      <td className="px-4 py-3 text-muted-foreground align-top w-1/2">{activity}</td>
                      <td className="px-4 py-3 text-muted-foreground align-top">{basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">13. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your data may be processed in countries outside your country of residence, including countries that may not
              have the same data protection laws. When we transfer data internationally, we ensure appropriate safeguards
              are in place (such as Supabase&apos;s Standard Contractual Clauses).
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by updating
              the &ldquo;Last updated&rdquo; date at the top of this page. For material changes, we may also provide an
              in-app notification. Your continued use of the App after changes take effect constitutes your acceptance of
              the updated policy.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">15. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
              please contact us at:
            </p>
            <div className="rounded-xl border border-border bg-muted/40 p-6 space-y-1 text-muted-foreground text-sm">
              <p className="font-semibold text-foreground">RecipeBud</p>
              <p>Email: <a href="mailto:contact@elveontech.com" className="text-primary hover:underline">contact@elveontech.com</a></p>
              <p>Website: <Link href="/" className="text-primary hover:underline">elveontech.com</Link></p>
            </div>
          </section>

          {/* Footer note */}
          <div className="border-t border-border pt-8 text-sm text-muted-foreground leading-relaxed">
            <p>
              This privacy policy was written to comply with the Google Play Developer Programme Policies, the General
              Data Protection Regulation (GDPR), the UK GDPR, and the California Consumer Privacy Act (CCPA).
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
