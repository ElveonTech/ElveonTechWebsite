import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative bg-primary rounded-3xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          </div>
          
          <div className="relative py-16 px-8 lg:py-24 lg:px-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance max-w-2xl mx-auto">
              Ready to Transform Your Business Operations?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl mx-auto">
              Let&apos;s discuss your specific challenges and explore how automation 
              can help. Schedule a free consultation to get started.
            </p>
            
            <div className="mt-10 flex justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="gap-2 bg-white text-primary hover:bg-white/90"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Contact info */}
            <div className="mt-12 pt-8 border-t border-primary-foreground/20">
              <p className="text-primary-foreground/60 text-sm">
                Or reach us directly at{" "}
                <a href="mailto:contact@elveontech.com" className="text-primary-foreground hover:underline">
                  contact@elveontech.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
