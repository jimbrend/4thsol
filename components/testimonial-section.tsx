"use client"

export function TestimonialSection() {
  return (
    <section className="relative h-full w-screen flex-shrink-0 flex items-center justify-center px-8 md:px-16">
      {/* Cross grid lines */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-border/20 to-transparent" />
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />

      <div className="relative z-10 max-w-2xl">
        <span className="text-[10px] tracking-[0.4em] uppercase text-accent/50 font-mono block mb-12">
          Client Stories
        </span>

        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-extralight text-foreground leading-relaxed mb-12 text-pretty">
          &ldquo;Fourth Sol found an old memory of mine and helped recreate it in AR, just of a scene in nature that was dear to me. Highly recommend their services.&rdquo;
        </blockquote>
        
        <div className="flex items-center gap-6">
          <div className="w-px h-8 bg-accent/30" />
          <div>
            <p className="text-sm text-foreground/80 font-mono">Anonymous Client</p>
            <p className="text-xs text-muted-foreground/50 mt-1">AR Memory Project</p>
          </div>
        </div>
      </div>
    </section>
  )
}
