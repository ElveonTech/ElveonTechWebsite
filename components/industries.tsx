import { Factory, Building2, Stethoscope, ShoppingCart, Truck, Landmark } from "lucide-react"

const industries = [
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Optimize production lines, supply chains, and quality control with intelligent automation.",
  },
  {
    icon: Building2,
    name: "Real Estate",
    description: "Streamline property management, tenant communications, and documentation workflows.",
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    description: "Automate patient scheduling, medical records management, and compliance reporting.",
  },
  {
    icon: ShoppingCart,
    name: "Retail & E-commerce",
    description: "Enhance inventory management, order processing, and customer service operations.",
  },
  {
    icon: Truck,
    name: "Logistics",
    description: "Optimize route planning, shipment tracking, and warehouse operations seamlessly.",
  },
  {
    icon: Landmark,
    name: "Financial Services",
    description: "Automate transaction processing, risk assessment, and regulatory compliance.",
  },
]

export function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
              Industries
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Seeking Solutions Across Industries
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Every industry has unique challenges and inefficiencies. I take the time 
              to understand your specific pain points and build targeted solutions 
              that address the root causes of operational friction.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group p-5 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300"
              >
                <industry.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{industry.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
