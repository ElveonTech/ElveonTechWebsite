import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQ } from "@/components/faq"
import { Button } from "@/components/ui/button"
import { Calculator, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <FAQ />
        
        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Calculator CTA */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Curious How Much Time You Can Save?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Use our free calculator to discover how much time and money your team can save by handling processes smarter.
                </p>
                <Button size="lg" className="gap-2 text-lg py-6" asChild>
                  <Link href="/time-savings">
                    <Calculator className="w-5 h-5" />
                    Calculate Your Time Savings
                  </Link>
                </Button>
              </div>

              {/* Right: Contact Card */}
              <div className="lg:sticky lg:top-24 h-fit">
                <div className="bg-primary rounded-3xl p-8 lg:p-10 text-primary-foreground shadow-2xl">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    Ready To Get Started?
                  </h3>
                  <p className="text-primary-foreground/80 text-lg mb-8">
                    Contact us for a no-obligation call about the options for your business.
                  </p>

                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="w-full gap-2 bg-white text-primary hover:bg-white/90 mb-6"
                    asChild
                  >
                    <a href="mailto:contact@elveontech.com">
                      <Mail className="w-5 h-5" />
                      Send An Email
                    </a>
                  </Button>

                  <div className="space-y-4 pt-6 border-t border-primary-foreground/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-primary-foreground/60 mb-1">
                          Email
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
                          Phone
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
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
