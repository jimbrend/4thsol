"use client"

import { Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-full w-screen flex-shrink-0 flex flex-col items-center justify-center px-8 md:px-16">
      {/* Anduril-style grid lines */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Horizontal lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        
        {/* Vertical accent line */}
        <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-3xl">
        {/* Small label */}
        <div className="mb-12">
          <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground/60 font-mono">
            Research & Consultancy
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[-0.02em] text-foreground mb-8">
          Fourth Sol
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground/80 max-w-xl mb-4 leading-relaxed font-light">
          Solutions for the century.
        </p>

        <p className="text-sm text-muted-foreground/50 max-w-lg mb-16 leading-relaxed">
          Tech consultancy, worldwide paranormal research, and off-book investigations. 
          We are happy to look into anything our clients are curious about.
        </p>

        {/* Contact Button - Anduril style, offset right */}
        <div className="flex justify-start pl-4 md:pl-8">
          <a
            href="tel:+12109019785"
            className="group relative inline-flex items-center gap-4 px-8 py-4
                       border border-accent/30 hover:border-accent/60
                       bg-transparent hover:bg-accent/5
                       transition-all duration-300 ease-out"
          >
            <Phone className="w-4 h-4 text-accent/70 group-hover:text-accent transition-colors duration-300" />
            <span className="text-sm tracking-[0.1em] text-accent/80 group-hover:text-accent font-mono">
              +1 210-901-9785
            </span>
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 flex items-center gap-3 text-muted-foreground/30">
        <span className="text-[10px] tracking-[0.3em] uppercase font-mono">Scroll</span>
        <div className="w-8 h-px bg-muted-foreground/30" />
      </div>
    </section>
  )
}
