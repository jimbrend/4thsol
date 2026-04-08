"use client"

import { useRef, useEffect, useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { FAQSection } from "@/components/faq-section"
import { ContactPrompt } from "@/components/contact-prompt"

function NCFlagComponent() {
  return (
    <div className="fixed bottom-4 left-4 z-50 opacity-[0.15] hover:opacity-[0.25] transition-opacity duration-500 pointer-events-none">
      <svg
        width="48"
        height="32"
        viewBox="0 0 48 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="North Carolina State Flag"
      >
        <rect x="0" y="0" width="16" height="32" fill="#004B87" />
        <rect x="16" y="0" width="32" height="16" fill="#BF0D3E" />
        <rect x="16" y="16" width="32" height="16" fill="#FFFFFF" />
        <polygon
          points="8,8 9.2,11.8 13,11.8 10,14 11,18 8,15.5 5,18 6,14 3,11.8 6.8,11.8"
          fill="#FFFFFF"
        />
        <text x="8" y="7" textAnchor="middle" fontSize="3" fill="#FFD700" fontWeight="bold">N</text>
        <text x="8" y="28" textAnchor="middle" fontSize="3" fill="#FFD700" fontWeight="bold">C</text>
      </svg>
    </div>
  )
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    const scrollContainer = scrollContainerRef.current
    if (!container || !scrollContainer) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      scrollContainer.scrollLeft += e.deltaY * 5
    }

    const handleScroll = () => {
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth
      const progress = maxScroll > 0 ? scrollContainer.scrollLeft / maxScroll : 0
      setScrollProgress(progress)
    }

    container.addEventListener("wheel", handleWheel, { passive: false })
    scrollContainer.addEventListener("scroll", handleScroll)
    
    return () => {
      container.removeEventListener("wheel", handleWheel)
      scrollContainer.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Calculate opacity for each section based on scroll progress
  const getSectionStyle = (sectionIndex: number) => {
    const sectionStart = sectionIndex * 0.25
    const sectionEnd = (sectionIndex + 1) * 0.25
    const fadeOutStart = sectionStart + 0.15
    
    let opacity = 1
    if (scrollProgress > fadeOutStart && scrollProgress < sectionEnd + 0.1) {
      opacity = Math.max(0.1, 1 - ((scrollProgress - fadeOutStart) / 0.1) * 0.9)
    } else if (scrollProgress >= sectionEnd + 0.1) {
      opacity = 0.1
    }
    
    return {
      opacity,
      transition: "opacity 0.15s ease-out"
    }
  }

  return (
    <div ref={containerRef} className="h-screen overflow-hidden bg-background relative">
      <NCFlagComponent />
      <div 
        ref={scrollContainerRef}
        className="h-full overflow-x-auto overflow-y-hidden scrollbar-hide"
      >
        <div className="flex h-full">
          <div style={getSectionStyle(0)}><HeroSection /></div>
          <div style={getSectionStyle(1)}><ServicesSection /></div>
          <div style={getSectionStyle(2)}><TestimonialSection /></div>
          <div style={getSectionStyle(3)}><FAQSection /></div>
        </div>
      </div>
      <ContactPrompt />
    </div>
  )
}
