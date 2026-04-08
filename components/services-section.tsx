"use client"

import { Monitor, Search, FlaskConical, Eye } from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "Tech Consultancy",
    description: "Desktop computing, layer 2 networks, artificial intelligence, and emerging technologies."
  },
  {
    icon: Search,
    title: "Paranormal Research",
    description: "Worldwide investigations into unexplained phenomena, conducted with scientific rigor and discretion."
  },
  {
    icon: FlaskConical,
    title: "Off-Book Research",
    description: "Confidential investigations tailored to your unique questions. We look into anything."
  },
  {
    icon: Eye,
    title: "Custom Solutions",
    description: "From AR experiences to bespoke digital tools, we build what you envision."
  }
]

export function ServicesSection() {
  return (
    <section className="relative h-full w-screen flex-shrink-0 flex items-center px-8 md:px-16">
      {/* Vertical divider line */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-border/50 to-transparent" />
      
      {/* Horizontal accent */}
      <div className="absolute top-1/2 left-0 w-24 h-px bg-accent/20" />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent/50 font-mono block mb-4">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-extralight text-foreground tracking-tight">
            Research spans domains
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Index number */}
              <span className="absolute -left-8 top-0 text-[10px] font-mono text-muted-foreground/30">
                0{index + 1}
              </span>
              
              <service.icon className="w-5 h-5 text-accent/50 mb-5 group-hover:text-accent/80 transition-colors duration-300" />
              
              <h3 className="text-base font-medium text-foreground mb-3 tracking-wide">
                {service.title}
              </h3>
              
              <p className="text-sm text-muted-foreground/60 leading-relaxed max-w-xs">
                {service.description}
              </p>
              
              {/* Subtle underline on hover */}
              <div className="mt-4 w-0 h-px bg-accent/40 group-hover:w-12 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
