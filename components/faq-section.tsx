"use client"

export function FAQSection() {
  return (
    <section className="relative h-full w-screen flex-shrink-0 flex items-center px-8 md:px-16">
      {/* Vertical line accent */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-border/50 to-transparent" />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent/50 font-mono block mb-4">
            Services & Scope
          </span>
          <h2 className="text-3xl md:text-4xl font-extralight text-foreground tracking-tight">
            What we offer
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Services We Offer */}
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground/70 leading-relaxed">
              Fourth Sol provides research and consultancy services across technology, 
              the unexplained, and specialized inquiries. Our work operates within the 
              scope of independent research, creative development, and advisory.
            </p>
            
            <div className="space-y-3">
              <h3 className="text-xs tracking-[0.2em] uppercase text-foreground/80 font-mono">
                Available Services
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground/60">
                <li className="flex items-start gap-2">
                  <span className="text-accent/50 mt-1">—</span>
                  <span>Technology consulting and system architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent/50 mt-1">—</span>
                  <span>Paranormal research and documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent/50 mt-1">—</span>
                  <span>Historical and genealogical research</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent/50 mt-1">—</span>
                  <span>Creative and AR experience development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent/50 mt-1">—</span>
                  <span>Open-source intelligence gathering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent/50 mt-1">—</span>
                  <span>Custom research inquiries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent/50 mt-1">—</span>
                  <span className="text-accent/40 italic">and more upon request</span>
                </li>
              </ul>
            </div>
          </div>

          {/* What We Don't Do */}
          <div className="space-y-6 group/scope">
            <p className="text-sm text-muted-foreground/50 leading-relaxed opacity-60 group-hover/scope:opacity-80 transition-opacity duration-300">
              Certain activities fall outside our scope of work. The following require 
              specialized credentials we do not hold:
            </p>
            
            <div className="space-y-3 opacity-40 group-hover/scope:opacity-90 transition-opacity duration-300">
              <h3 className="text-xs tracking-[0.2em] uppercase text-red-500/40 group-hover/scope:text-red-500/70 font-mono transition-colors duration-300">
                Outside Our Scope
              </h3>
              <ul className="space-y-2 text-sm text-red-400/30 group-hover/scope:text-red-400/80 transition-colors duration-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-500/30 group-hover/scope:text-red-500/70 mt-1 transition-colors duration-300">×</span>
                  <span>Surveillance or tracking of individuals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500/30 group-hover/scope:text-red-500/70 mt-1 transition-colors duration-300">×</span>
                  <span>Background checks or personal investigations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500/30 group-hover/scope:text-red-500/70 mt-1 transition-colors duration-300">×</span>
                  <span>Process serving or legal evidence gathering</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
