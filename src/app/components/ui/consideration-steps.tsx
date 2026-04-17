"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

interface Consideration {
  step: string
  title: string
  points: string[]
}

interface ConsiderationStepsProps {
  considerations: Consideration[]
  className?: string
  title?: string
  autoPlayInterval?: number
}

export function ConsiderationSteps({
  considerations,
  className,
  title = "What to Consider",
  autoPlayInterval = 3000,
}: ConsiderationStepsProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null)

  // ScrollTrigger setup for scroll-based step progression
  useEffect(() => {
    // Ensure we have considerations to display
    if (!considerations || considerations.length === 0) return
    if (!containerRef.current) return

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (!containerRef.current) return

      try {
        const totalSteps = considerations.length
        
        // Kill any existing ScrollTrigger on this element
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === containerRef.current) {
            trigger.kill()
          }
        })

        // Refresh ScrollTrigger to recalculate positions
        ScrollTrigger.refresh()

        // Create the main ScrollTrigger with increased scroll distance
        scrollTriggerRef.current = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: `+=${window.innerHeight * totalSteps * 1.5}`, // Increased scroll distance
          pin: true,
          pinSpacing: true,
          scrub: 1, // Smoother scrubbing
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers: false, // Set to true for debugging
          onUpdate: (self) => {
            // Calculate which step based on scroll progress
            const scrollProgress = self.progress
            const stepIndex = Math.min(
              Math.floor(scrollProgress * totalSteps),
              totalSteps - 1
            )
            // Calculate progress within current step
            const stepProgress = ((scrollProgress * totalSteps) % 1) * 100
            
            setCurrentStep(stepIndex)
            setProgress(stepProgress)
          },
        })
      } catch (error) {
        console.error("ScrollTrigger error:", error)
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      // Kill the ScrollTrigger instance
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill()
        scrollTriggerRef.current = null
      }
    }
  }, [considerations])

  // Safety check: ensure we have considerations
  if (!considerations || considerations.length === 0) {
    return null
  }

  return (
    <div ref={containerRef} className="consideration-steps-container" style={{ position: 'relative' }}>
      <div className="consideration-steps-content-wrapper">
        <h2 className="consideration-steps-title">
          {title}
        </h2>

        <div className="consideration-steps-grid">
          {/* Steps on the left */}
          <div className="consideration-steps-list">
            {considerations.map((consideration, index) => (
              <motion.div
                key={index}
                className="consideration-step-item"
                animate={{ 
                  opacity: index === currentStep ? 1 : 0.3,
                }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                <motion.div
                  className={cn(
                    "consideration-step-circle",
                    index === currentStep
                      ? "step-circle-active"
                      : index < currentStep
                      ? "step-circle-completed"
                      : "step-circle-inactive",
                  )}
                  animate={{
                    scale: index === currentStep ? 1.1 : 1,
                    backgroundColor: index === currentStep || index < currentStep ? "#4B6E48" : "#F3F4F6",
                    borderColor: index === currentStep || index < currentStep ? "#4B6E48" : "#D1D5DB",
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                >
                  {index < currentStep ? (
                    <Check className="step-check-icon" />
                  ) : (
                    <span className="step-number">{index + 1}</span>
                  )}
                </motion.div>

                <div className="consideration-step-text-wrapper">
                  <motion.h3 
                    className="consideration-step-title"
                    animate={{
                      opacity: index === currentStep ? 1 : 0.5,
                    }}
                    transition={{ 
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                  >
                    {consideration.title}
                  </motion.h3>
                  
                  {/* Progress bar for current step */}
                  {index === currentStep && (
                    <motion.div
                      className="consideration-progress-bar-track"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ 
                        duration: 0.4,
                        ease: [0.25, 0.1, 0.25, 1]
                      }}
                      style={{ originX: 0 }}
                    >
                      <motion.div
                        className="consideration-progress-bar-fill"
                        style={{ width: `${progress}%` }}
                        transition={{ 
                          duration: 0.05,
                          ease: "linear"
                        }}
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Content on the right */}
          <div className="consideration-content-card">
            <motion.div
              key={`content-${currentStep}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="consideration-content-inner"
            >
              <h3 className="consideration-content-title">
                {considerations[currentStep].title}
              </h3>
              <ul className="consideration-checklist">
                {considerations[currentStep].points.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="consideration-checklist-item"
                  >
                    <Check className="consideration-checklist-icon" />
                    <span className="consideration-checklist-text">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Comprehensive Responsive Styles */}
      <style>{`
        /* ============================================
           1. SECTION CONTAINER
           Desktop: max-width 1100-1200px centered
           Tablet: full width with 32px side padding
           Mobile: 16-20px padding
           Maintain consistent alignment with other page sections
           Remove excessive empty space on large screens
           Prevent content from feeling left-heavy
           ============================================ */
        .consideration-steps-container {
          position: relative;
          background-color: #FFFFFF;
          display: flex;
          align-items: center;
          width: 100%;
          min-height: 70vh;
        }

        /* Mobile (≤480px): 16px padding, 48px vertical */
        @media (max-width: 480px) {
          .consideration-steps-container {
            padding: 48px 16px;
          }
        }

        /* Mobile Large (481-767px): 18px padding, 56px vertical */
        @media (min-width: 481px) and (max-width: 767px) {
          .consideration-steps-container {
            padding: 56px 18px;
          }
        }

        /* Tablet (768-1023px): 32px padding, 64px vertical */
        @media (min-width: 768px) and (max-width: 1023px) {
          .consideration-steps-container {
            padding: 64px 32px;
          }
        }

        /* Desktop (≥1024px): centered, 80-100px vertical */
        @media (min-width: 1024px) {
          .consideration-steps-container {
            padding: 88px 48px;
          }
        }

        /* ============================================
           CONTENT WRAPPER
           Desktop: max-width 1150px (within 1100-1200px)
           Prevent content from feeling left-heavy
           ============================================ */
        .consideration-steps-content-wrapper {
          max-width: 1150px;
          margin: 0 auto;
          width: 100%;
        }

        /* ============================================
           2. SECTION HEADER — "Post-Study Work Options in UK"
           Desktop: 32-40px font size
           Tablet: 28-32px
           Mobile: 22-26px
           Center align heading
           Maintain clear spacing below header (32-40px desktop, 20-24px mobile)
           Prevent awkward text wrapping
           ============================================ */
        .consideration-steps-title {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 700;
          color: #111827;
          text-align: center;
          line-height: 1.2;
          margin: 0;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Mobile (≤480px): 23px (within 22-26px), 20px spacing below */
        @media (max-width: 480px) {
          .consideration-steps-title {
            font-size: 23px;
            margin-bottom: 24px;
          }
        }

        /* Mobile Large (481-767px): 25px (within 22-26px), 24px spacing below */
        @media (min-width: 481px) and (max-width: 767px) {
          .consideration-steps-title {
            font-size: 25px;
            margin-bottom: 28px;
          }
        }

        /* Tablet (768-1023px): 30px (within 28-32px), 32px spacing below */
        @media (min-width: 768px) and (max-width: 1023px) {
          .consideration-steps-title {
            font-size: 30px;
            margin-bottom: 36px;
          }
        }

        /* Desktop (≥1024px): 36px (within 32-40px), 40px spacing below */
        @media (min-width: 1024px) {
          .consideration-steps-title {
            font-size: 36px;
            margin-bottom: 48px;
          }
        }

        /* ============================================
           3. MAIN LAYOUT STRUCTURE (Tabs + Content Card)
           Desktop (≥1024px): 2-column layout (Left: 30-35%, Right: 65-70%)
           Tablet (768-1023px): 2-column if space allows, reduce gap
           Mobile (≤767px): Stack vertically (steps on top, content card below)
           Vertically center content alignment
           Ensure smooth layout transition
           ============================================ */
        .consideration-steps-grid {
          display: grid;
          width: 100%;
        }

        /* Mobile (≤767px): stacked single column, 20px gap */
        @media (max-width: 767px) {
          .consideration-steps-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        /* Tablet (768-1023px): 2 columns (35% / 65%), 28px gap */
        @media (min-width: 768px) and (max-width: 1023px) {
          .consideration-steps-grid {
            grid-template-columns: 35% 65%;
            gap: 28px;
            align-items: start;
          }
        }

        /* Desktop (≥1024px): 2 columns (32% / 68%), 48px gap */
        @media (min-width: 1024px) {
          .consideration-steps-grid {
            grid-template-columns: 32% 68%;
            gap: 48px;
            align-items: start;
          }
        }

        /* ============================================
           4. STEP NAVIGATION (Left Side Items)
           Maintain clear visual hierarchy (active highlighted, inactive muted)
           Desktop: fixed width column
           Tablet: slightly reduce width
           Mobile: convert to stacked selector
           Maintain consistent spacing between steps (16-20px)
           Ensure step number circle and label align vertically
           Progress line should scale responsively
           ============================================ */
        .consideration-steps-list {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        /* Mobile: 16px gap */
        @media (max-width: 767px) {
          .consideration-steps-list {
            gap: 16px;
          }
        }

        /* Tablet: 18px gap */
        @media (min-width: 768px) and (max-width: 1023px) {
          .consideration-steps-list {
            gap: 18px;
          }
        }

        /* Desktop: 20px gap (within 16-20px) */
        @media (min-width: 1024px) {
          .consideration-steps-list {
            gap: 20px;
          }
        }

        /* ============================================
           STEP ITEM
           Ensure step number circle and label align vertically
           ============================================ */
        .consideration-step-item {
          display: flex;
          align-items: flex-start;
        }

        /* Mobile: 12px gap */
        @media (max-width: 767px) {
          .consideration-step-item {
            gap: 12px;
          }
        }

        /* Tablet & Desktop: 14px gap */
        @media (min-width: 768px) {
          .consideration-step-item {
            gap: 14px;
          }
        }

        /* ============================================
           STEP CIRCLE
           Active step highlighted, inactive muted
           ============================================ */
        .consideration-step-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          border-width: 2px;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        /* Mobile: 40px circle */
        @media (max-width: 767px) {
          .consideration-step-circle {
            width: 40px;
            height: 40px;
          }
        }

        /* Tablet: 44px circle */
        @media (min-width: 768px) and (max-width: 1023px) {
          .consideration-step-circle {
            width: 44px;
            height: 44px;
          }
        }

        /* Desktop: 48px circle */
        @media (min-width: 1024px) {
          .consideration-step-circle {
            width: 48px;
            height: 48px;
          }
        }

        .step-circle-active {
          background-color: #4B6E48;
          border-color: #4B6E48;
          color: #FFFFFF;
        }

        .step-circle-completed {
          background-color: #4B6E48;
          border-color: #4B6E48;
          color: #FFFFFF;
        }

        .step-circle-inactive {
          background-color: #F3F4F6;
          border-color: #D1D5DB;
          color: #6B7280;
        }

        /* ============================================
           STEP ICONS & NUMBER
           ============================================ */
        .step-check-icon {
          width: 22px;
          height: 22px;
        }

        .step-number {
          font-size: 20px;
          font-weight: 600;
          line-height: 1;
        }

        /* ============================================
           STEP TEXT WRAPPER
           ============================================ */
        .consideration-step-text-wrapper {
          flex: 1;
          min-width: 0;
        }

        /* ============================================
           STEP TITLE
           Maintain clear visual hierarchy
           ============================================ */
        .consideration-step-title {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 600;
          color: #111827;
          margin: 0;
          line-height: 1.3;
        }

        /* Mobile: 16px */
        @media (max-width: 767px) {
          .consideration-step-title {
            font-size: 16px;
            margin-bottom: 8px;
          }
        }

        /* Tablet: 17px */
        @media (min-width: 768px) and (max-width: 1023px) {
          .consideration-step-title {
            font-size: 17px;
            margin-bottom: 8px;
          }
        }

        /* Desktop: 18px */
        @media (min-width: 1024px) {
          .consideration-step-title {
            font-size: 18px;
            margin-bottom: 8px;
          }
        }

        /* ============================================
           PROGRESS INDICATOR (Progress line scales responsively)
           ============================================ */
        .consideration-progress-bar-track {
          height: 4px;
          background-color: #E5E7EB;
          border-radius: 9999px;
          overflow: hidden;
          width: 100%;
          margin-top: 8px;
        }

        .consideration-progress-bar-fill {
          height: 100%;
          background-color: #4B6E48;
          transition: width 0.05s linear;
        }

        /* ============================================
           5. DETAILS CARD (Right Panel)
           Desktop padding: 32px
           Tablet padding: 28px
           Mobile padding: 20px
           Maintain max-width to prevent stretched layout
           Center card inside container
           Prevent card from sticking too far right
           ============================================ */
        .consideration-content-card {
          position: relative;
          background: linear-gradient(to bottom right, #F9FAFB, #F3F4F6);
          border: 1px solid #E5E7EB;
          display: flex;
          align-items: center;
          width: 100%;
        }

        /* Mobile (≤480px): 20px padding, 16px radius */
        @media (max-width: 480px) {
          .consideration-content-card {
            padding: 20px;
            border-radius: 16px;
            min-height: 300px;
          }
        }

        /* Mobile Large (481-767px): 24px padding */
        @media (min-width: 481px) and (max-width: 767px) {
          .consideration-content-card {
            padding: 24px;
            border-radius: 18px;
            min-height: 320px;
          }
        }

        /* Tablet (768-1023px): 28px padding */
        @media (min-width: 768px) and (max-width: 1023px) {
          .consideration-content-card {
            padding: 28px;
            border-radius: 20px;
            min-height: 340px;
          }
        }

        /* Desktop (≥1024px): 32px padding */
        @media (min-width: 1024px) {
          .consideration-content-card {
            padding: 32px;
            border-radius: 24px;
            min-height: 360px;
          }
        }

        /* ============================================
           CARD INTERNAL CONTENT
           ============================================ */
        .consideration-content-inner {
          width: 100%;
        }

        /* ============================================
           6. CARD CONTENT (Title + List)
           Card Title — "Graduate Route Visa"
           Desktop: 20-24px
           Mobile: 16-18px
           Maintain strong hierarchy
           ============================================ */
        .consideration-content-title {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 700;
          color: #111827;
          margin: 0;
          line-height: 1.3;
        }

        /* Mobile: 17px (within 16-18px) */
        @media (max-width: 767px) {
          .consideration-content-title {
            font-size: 17px;
            margin-bottom: 18px;
          }
        }

        /* Tablet: 19px */
        @media (min-width: 768px) and (max-width: 1023px) {
          .consideration-content-title {
            font-size: 19px;
            margin-bottom: 20px;
          }
        }

        /* Desktop: 22px (within 20-24px) */
        @media (min-width: 1024px) {
          .consideration-content-title {
            font-size: 22px;
            margin-bottom: 24px;
          }
        }

        /* ============================================
           BULLET LIST
           Desktop text: 16px
           Mobile: 14px
           Line height: 1.5-1.6
           Maintain consistent spacing between list items (12-16px)
           Ensure check icons align properly with text
           ============================================ */
        .consideration-checklist {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }

        /* Mobile: 12px gap */
        @media (max-width: 767px) {
          .consideration-checklist {
            gap: 12px;
          }
        }

        /* Tablet: 14px gap */
        @media (min-width: 768px) and (max-width: 1023px) {
          .consideration-checklist {
            gap: 14px;
          }
        }

        /* Desktop: 16px gap */
        @media (min-width: 1024px) {
          .consideration-checklist {
            gap: 16px;
          }
        }

        /* ============================================
           CHECKLIST ITEM
           Ensure check icons align properly with text
           ============================================ */
        .consideration-checklist-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        /* ============================================
           CHECKLIST ICON
           ============================================ */
        .consideration-checklist-icon {
          color: #4B6E48;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Mobile: 18px icon */
        @media (max-width: 767px) {
          .consideration-checklist-icon {
            width: 18px;
            height: 18px;
          }
        }

        /* Tablet & Desktop: 20px icon */
        @media (min-width: 768px) {
          .consideration-checklist-icon {
            width: 20px;
            height: 20px;
          }
        }

        /* ============================================
           CHECKLIST TEXT
           Desktop text: 16px, Line height: 1.5-1.6
           Mobile: 14px
           ============================================ */
        .consideration-checklist-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #374151;
          flex: 1;
        }

        /* Mobile: 14px, line-height 1.6 */
        @media (max-width: 767px) {
          .consideration-checklist-text {
            font-size: 14px;
            line-height: 1.6;
          }
        }

        /* Tablet: 15px, line-height 1.6 */
        @media (min-width: 768px) and (max-width: 1023px) {
          .consideration-checklist-text {
            font-size: 15px;
            line-height: 1.6;
          }
        }

        /* Desktop: 16px, line-height 1.5 */
        @media (min-width: 1024px) {
          .consideration-checklist-text {
            font-size: 16px;
            line-height: 1.5;
          }
        }

        /* ============================================
           7. SPACING & ALIGNMENT
           Desktop section spacing: 80-100px top/bottom
           Mobile: 48-64px
           Maintain equal spacing between columns
           Prevent excessive whitespace
           Ensure content appears centered and balanced
           ============================================ */
        
        /* Already handled in .consideration-steps-container padding */

        /* ============================================
           9. GRID & GAP SYSTEM
           Desktop column gap: 48px
           Tablet gap: 24-32px (using 28px)
           Mobile gap: 16px
           Maintain consistent vertical rhythm
           ============================================ */

        /* Already handled in .consideration-steps-grid gap */

        /* ============================================
           10. OVERALL BEHAVIOR
           Layout should feel clean, balanced, and readable
           Maintain strong visual hierarchy
           Ensure smooth scaling from desktop → tablet → mobile
           Avoid text overflow or misalignment
           Maintain professional and structured UI feel
           ============================================ */
        
        /* Prevent horizontal overflow */
        .consideration-steps-container,
        .consideration-steps-content-wrapper,
        .consideration-steps-grid,
        .consideration-content-card {
          overflow-x: hidden;
          max-width: 100%;
        }

        /* Smooth transitions for responsive changes */
        .consideration-steps-grid,
        .consideration-step-circle,
        .consideration-content-card {
          transition: all 0.3s ease;
        }

        /* Prevent text wrapping issues */
        .consideration-steps-title,
        .consideration-step-title,
        .consideration-content-title,
        .consideration-checklist-text {
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
      `}</style>
    </div>
  )
}