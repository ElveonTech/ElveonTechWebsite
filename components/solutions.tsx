import { Workflow, Zap, BarChart3, Shield, Clock, Puzzle } from "lucide-react"

const solutions = [
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Transform repetitive tasks into streamlined automated workflows tailored to your specific business processes.",
  },
  {
    icon: Zap,
    title: "System Integration",
    description: "Connect disparate systems and data sources to eliminate silos and enable smoother data flow across your operations.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Build dashboards and reporting tools that give you clear visibility into your operations and help inform decisions.",
  },
  {
    icon: Shield,
    title: "Compliance Tools",
    description: "Develop tools to help track regulatory requirements and maintain audit trails with less manual overhead.",
  },
  {
    icon: Clock,
    title: "Scheduled Automation",
    description: "Set up processes that run on schedule, handling routine tasks so you can focus on higher-value work.",
  },
  {
    icon: Puzzle,
    title: "Custom Development",
    description: "Every business is different. I build tailored solutions that fit your specific workflows and challenges.",
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Solutions
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Comprehensive Automation for Every Challenge
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From simple task automation to more complex workflows, I build solutions 
            that address your specific needs.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
