import { CheckCircle2 } from "lucide-react"

const values = [
  "Deep industry pain point analysis",
  "Tailored automation solutions",
  "Hands-on, personalized approach",
  "Rapid iteration and delivery",
  "Long-term partnership mindset",
  "Continuous improvement focus",
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl sm:rounded-3xl bg-card border border-border overflow-hidden">
              <div className="h-full w-full bg-muted flex items-center justify-center">
                <div className="text-center p-6 sm:p-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg sm:rounded-xl" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                    Problem Solver
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Finding elegant solutions for complex industry challenges
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating card - hidden on mobile, repositioned on tablet+ */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-card p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-border shadow-lg max-w-[200px] lg:max-w-xs">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-base lg:text-lg">1</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm lg:text-base">Founder-Led</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Direct collaboration</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
              About Elveon Tech
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Solving Real Industry Pain Points
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Elveon Tech was founded with a clear mission: to identify and solve the most 
              pressing pain points that businesses face across various industries. By working 
              directly with clients, I uncover the root causes of inefficiencies and build 
              targeted automation solutions that deliver real impact.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              As a solo founder, I bring a hands-on, personalized approach to every project. 
              You work directly with me from discovery to delivery, ensuring your unique 
              challenges are understood and addressed with precision and care.
            </p>

            {/* Values list */}
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
