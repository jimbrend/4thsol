"use client"

import { useState, useEffect } from "react"
import { Mail, X } from "lucide-react"

export function ContactPrompt() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [showEmail, setShowEmail] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true)
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [isDismissed])

  if (isDismissed) return null

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 max-w-xs transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <div className="relative bg-background/80 backdrop-blur-sm border border-border/30 p-4 opacity-60 hover:opacity-90 transition-opacity duration-300">
        {/* Dismiss button */}
        <button 
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-3 h-3" />
        </button>

        <div className="space-y-3">
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 font-mono">
            Reach us
          </p>
          
          <p className="text-xs text-muted-foreground/60 leading-relaxed">
            Leave a voicemail or text at{" "}
            <a href="tel:+12109019785" className="text-accent/60 hover:text-accent/80 transition-colors">
              +1 210-901-9785
            </a>
          </p>

          {!showEmail ? (
            <button
              onClick={() => setShowEmail(true)}
              className="flex items-center gap-2 text-xs text-accent/50 hover:text-accent/70 transition-colors font-mono"
            >
              <Mail className="w-3 h-3" />
              <span>prefer email?</span>
            </button>
          ) : (
            <div className="space-y-2 pt-1 border-t border-border/20">
              <a 
                href="mailto:jim@highermark.xyz"
                className="text-xs text-accent/70 hover:text-accent font-mono transition-colors block"
              >
                jim@highermark.xyz
              </a>
              <p className="text-[10px] text-muted-foreground/40 leading-relaxed">
                Founder contact. Best for paranormal consultancy and detailed inquiries 
                if you prefer email threads over voice or text.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
