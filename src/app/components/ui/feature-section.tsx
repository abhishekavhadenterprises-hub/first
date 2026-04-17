import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null)

  // ScrollTrigger setup for scroll-based step progression
  useEffect(() => {
    // Ensure we have features to display
    if (!features || features.length === 0) return
    if (!containerRef.current) return

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (!containerRef.current) return

      try {
        const totalSteps = features.length
        
        // Kill any existing ScrollTrigger on this element
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === containerRef.current) {
            trigger.kill()
          }
        })

        // Create the main ScrollTrigger
        scrollTriggerRef.current = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: `+=${window.innerHeight * totalSteps}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Calculate which step based on scroll progress
            const scrollProgress = self.progress
            const stepIndex = Math.min(
              Math.floor(scrollProgress * totalSteps),
              totalSteps - 1
            )
            // Calculate progress within current step
            const stepProgress = ((scrollProgress * totalSteps) % 1) * 100
            
            setCurrentFeature(stepIndex)
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
  }, [features])

  // Safety check: ensure we have features
  if (!features || features.length === 0) {
    return null
  }

  return (
    <div ref={containerRef} className="feature-steps-container" style={{ position: 'relative' }}>
      <div className="feature-steps-content-wrapper">
        <h2 className="feature-steps-title">
          {title}
        </h2>

        <div className="feature-steps-grid">
          <div className="feature-steps-list">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-step-item"
              >
                <motion.div
                  className={cn(
                    "feature-step-circle",
                    index === currentFeature
                      ? "step-circle-active"
                      : index < currentFeature
                      ? "step-circle-completed"
                      : "step-circle-inactive",
                  )}
                  animate={{
                    scale: index === currentFeature ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {index < currentFeature ? (
                    <span className="step-check-mark">✓</span>
                  ) : index === currentFeature ? (
                    <span className="step-number">{index + 1}</span>
                  ) : (
                    <span className="step-number">{index + 1}</span>
                  )}
                </motion.div>

                <div className="feature-step-content">
                  <motion.h3 
                    className="feature-step-title"
                    animate={{
                      opacity: index === currentFeature ? 1 : 0.4,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.title || feature.step}
                  </motion.h3>
                  <p className={cn(
                    "feature-step-description",
                    index === currentFeature ? "description-active" : "description-inactive"
                  )}>
                    {feature.content}
                  </p>
                  
                  {/* Progress bar for current step */}
                  {index === currentFeature && (
                    <motion.div
                      className="feature-progress-bar-track"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="feature-progress-bar-fill"
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </motion.div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="feature-image-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={`feature-image-${currentFeature}`}
                className="feature-image-container"
                initial={{ y: 100, opacity: 0, rotateX: -20 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: -100, opacity: 0, rotateX: 20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <img
                  src={features[currentFeature].image}
                  alt={features[currentFeature].step}
                  className="feature-image"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Comprehensive Responsive Styles */}
      <style>{`
        /* ============================================
           CONTAINER
           Desktop: max-width 1200px centered
           Tablet: full width with 32px side padding
           Mobile: 16-20px padding
           Remove excessive empty space around section
           Maintain consistent alignment with other page sections
           Prevent boxed or compressed layout on tablet
           ============================================ */
        .feature-steps-container {
          position: relative;
          background-color: #FFFFFF;
          display: flex;
          align-items: center;
          width: 100%;
          min-height: 100vh;
        }

        /* Mobile: 18px horizontal padding, 48px vertical */
        @media (max-width: 767px) {
          .feature-steps-container {
            padding: 48px 18px;
          }
        }

        /* Tablet: 32px horizontal padding, 68px vertical */
        @media (min-width: 768px) and (max-width: 1199px) {
          .feature-steps-container {
            padding: 68px 32px;
          }
        }

        /* Desktop: 40px horizontal padding, 96px vertical */
        @media (min-width: 1200px) {
          .feature-steps-container {
            padding: 96px 40px;
          }
        }

        /* ============================================
           CONTENT WRAPPER
           Desktop: max-width 1200px
           ============================================ */
        .feature-steps-content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        /* ============================================
           SECTION HEADER (TITLE)
           Desktop title: 32-36px
           Tablet: 28px
           Mobile: 22-24px
           Center align heading
           Reduce spacing below title by 16-24px
           Maintain consistent spacing with other sections
           ============================================ */
        .feature-steps-title {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 700;
          color: #000000;
          text-align: center;
          line-height: 1.2;
          margin: 0;
        }

        /* Mobile: 23px */
        @media (max-width: 767px) {
          .feature-steps-title {
            font-size: 23px;
            margin-bottom: 28px;
          }
        }

        /* Tablet: 28px */
        @media (min-width: 768px) and (max-width: 1199px) {
          .feature-steps-title {
            font-size: 28px;
            margin-bottom: 32px;
          }
        }

        /* Desktop: 34px (within 32-36px) */
        @media (min-width: 1200px) {
          .feature-steps-title {
            font-size: 34px;
            margin-bottom: 40px;
          }
        }

        /* ============================================
           MAIN LAYOUT STRUCTURE (STEPS + IMAGE)
           Desktop (≥1200px): 2-column layout - Left → steps timeline, Right → supporting image
           Maintain balanced width (50/50 or 55/45)
           Vertically center both columns
           Tablet (768-1199px): Keep 2-column layout if space allows, Otherwise stack: Image first, Steps below
           Mobile (≤767px): Stack vertically - Section title, Image, Steps list
           Prevent horizontal overflow
           ============================================ */
        .feature-steps-grid {
          display: grid;
          width: 100%;
        }

        /* Mobile: stacked single column, image first */
        @media (max-width: 767px) {
          .feature-steps-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        /* Tablet: 2 columns, 50/50 balanced */
        @media (min-width: 768px) and (max-width: 1199px) {
          .feature-steps-grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            align-items: center;
          }
        }

        /* Desktop: 2 columns, 53/47 balanced */
        @media (min-width: 1200px) {
          .feature-steps-grid {
            grid-template-columns: 53% 47%;
            gap: 40px;
            align-items: center;
          }
        }

        /* ============================================
           STEPS / TIMELINE LAYOUT
           Keep vertical step flow clear
           Maintain consistent spacing between steps
           Align number icon, title, and description properly
           Desktop step spacing: 24-32px
           Mobile step spacing: 16-20px
           Ensure progress line or divider aligns correctly
           ============================================ */
        .feature-steps-list {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        /* Mobile: order 2, 18px gap */
        @media (max-width: 767px) {
          .feature-steps-list {
            order: 2;
            gap: 18px;
          }
        }

        /* Tablet: order 1, 22px gap */
        @media (min-width: 768px) and (max-width: 1199px) {
          .feature-steps-list {
            order: 1;
            gap: 22px;
          }
        }

        /* Desktop: order 1, 28px gap (within 24-32px) */
        @media (min-width: 1200px) {
          .feature-steps-list {
            order: 1;
            gap: 28px;
          }
        }

        /* ============================================
           STEP ITEM
           Align number icon, title, and description properly
           ============================================ */
        .feature-step-item {
          display: flex;
          align-items: flex-start;
        }

        /* Mobile: 12px gap */
        @media (max-width: 767px) {
          .feature-step-item {
            gap: 12px;
          }
        }

        /* Tablet: 16px gap */
        @media (min-width: 768px) and (max-width: 1199px) {
          .feature-step-item {
            gap: 16px;
          }
        }

        /* Desktop: 18px gap */
        @media (min-width: 1200px) {
          .feature-step-item {
            gap: 18px;
          }
        }

        /* ============================================
           STEP NUMBER ICONS
           Desktop size: 40-48px circle
           Mobile size: 32-36px
           Keep numbers centered
           Maintain consistent alignment with text
           Prevent icon-text misalignment
           ============================================ */
        .feature-step-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          border-width: 2px;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        /* Mobile: 34px circle (within 32-36px) */
        @media (max-width: 767px) {
          .feature-step-circle {
            width: 34px;
            height: 34px;
          }
        }

        /* Tablet: 40px circle */
        @media (min-width: 768px) and (max-width: 1199px) {
          .feature-step-circle {
            width: 40px;
            height: 40px;
          }
        }

        /* Desktop: 44px circle (within 40-48px) */
        @media (min-width: 1200px) {
          .feature-step-circle {
            width: 44px;
            height: 44px;
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
           STEP NUMBER & CHECK MARK
           Keep numbers centered
           ============================================ */
        .step-check-mark,
        .step-number {
          font-weight: 600;
          line-height: 1;
        }

        /* Mobile: 15px */
        @media (max-width: 767px) {
          .step-check-mark,
          .step-number {
            font-size: 15px;
          }
        }

        /* Tablet: 17px */
        @media (min-width: 768px) and (max-width: 1199px) {
          .step-check-mark,
          .step-number {
            font-size: 17px;
          }
        }

        /* Desktop: 18px */
        @media (min-width: 1200px) {
          .step-check-mark,
          .step-number {
            font-size: 18px;
          }
        }

        /* ============================================
           STEP CONTENT
           ============================================ */
        .feature-step-content {
          flex: 1;
          min-width: 0;
        }

        /* ============================================
           STEP CONTENT TYPOGRAPHY - STEP TITLE
           Step title:
           Desktop: 18px
           Mobile: 16px
           ============================================ */
        .feature-step-title {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 600;
          color: #010101;
          margin: 0;
          line-height: 1.3;
        }

        /* Mobile: 16px */
        @media (max-width: 767px) {
          .feature-step-title {
            font-size: 16px;
            margin-bottom: 4px;
          }
        }

        /* Tablet: 17px */
        @media (min-width: 768px) and (max-width: 1199px) {
          .feature-step-title {
            font-size: 17px;
            margin-bottom: 4px;
          }
        }

        /* Desktop: 18px */
        @media (min-width: 1200px) {
          .feature-step-title {
            font-size: 18px;
            margin-bottom: 4px;
          }
        }

        /* ============================================
           STEP CONTENT TYPOGRAPHY - DESCRIPTION TEXT
           Description text:
           Desktop: 16px
           Mobile: 14px
           Line height: 1.5-1.6
           Prevent awkward text wrapping
           Maintain readability on small screens
           ============================================ */
        .feature-step-description {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          line-height: 1.6;
          margin: 0;
        }

        /* Mobile: 14px */
        @media (max-width: 767px) {
          .feature-step-description {
            font-size: 14px;
          }
        }

        /* Tablet: 15px */
        @media (min-width: 768px) and (max-width: 1199px) {
          .feature-step-description {
            font-size: 15px;
          }
        }

        /* Desktop: 16px */
        @media (min-width: 1200px) {
          .feature-step-description {
            font-size: 16px;
          }
        }

        .description-active {
          color: #374151;
          opacity: 0.9;
        }

        .description-inactive {
          color: #9CA3AF;
          opacity: 0.6;
        }

        /* ============================================
           PROGRESS BAR
           ============================================ */
        .feature-progress-bar-track {
          background-color: #E5E7EB;
          border-radius: 9999px;
          overflow: hidden;
          width: 100%;
        }

        /* Mobile: 3px height */
        @media (max-width: 767px) {
          .feature-progress-bar-track {
            height: 3px;
            margin-top: 6px;
          }
        }

        /* Tablet & Desktop: 4px height */
        @media (min-width: 768px) {
          .feature-progress-bar-track {
            height: 4px;
            margin-top: 8px;
          }
        }

        .feature-progress-bar-fill {
          height: 100%;
          background-color: #4B6E48;
          transition: width 0.1s linear;
        }

        /* ============================================
           SUPPORTING IMAGE
           Maintain consistent aspect ratio
           Desktop: fixed height with rounded corners
           Tablet: slightly reduce image height
           Mobile: Full width, Reduce height proportionally
           Prevent image overflow or compression
           Maintain proper spacing from steps
           ============================================ */
        .feature-image-panel {
          position: relative;
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
        }

        /* Mobile: order 1, 220px height */
        @media (max-width: 767px) {
          .feature-image-panel {
            order: 1;
            height: 220px;
            border-radius: 12px;
          }
        }

        /* Tablet: order 2, 320px height */
        @media (min-width: 768px) and (max-width: 1199px) {
          .feature-image-panel {
            order: 2;
            height: 320px;
            border-radius: 14px;
          }
        }

        /* Desktop: order 2, 420px height, rounded corners */
        @media (min-width: 1200px) {
          .feature-image-panel {
            order: 2;
            height: 420px;
            border-radius: 16px;
          }
        }

        /* ============================================
           IMAGE CONTAINER
           ============================================ */
        .feature-image-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        /* Mobile: 12px radius */
        @media (max-width: 767px) {
          .feature-image-container {
            border-radius: 12px;
          }
        }

        /* Tablet: 14px radius */
        @media (min-width: 768px) and (max-width: 1199px) {
          .feature-image-container {
            border-radius: 14px;
          }
        }

        /* Desktop: 16px radius */
        @media (min-width: 1200px) {
          .feature-image-container {
            border-radius: 16px;
          }
        }

        /* ============================================
           IMAGE
           ============================================ */
        .feature-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        /* ============================================
           OVERALL BEHAVIOR
           Layout should feel clean, structured, and premium
           Maintain clear step progression flow
           Ensure smooth transition across breakpoints
           Prevent layout shift or overlap
           Keep visual consistency with rest of website
           ============================================ */
        
        /* Prevent horizontal overflow */
        .feature-steps-container,
        .feature-steps-content-wrapper,
        .feature-steps-grid {
          overflow-x: hidden;
          max-width: 100%;
        }

        /* Smooth transitions for responsive changes */
        .feature-steps-grid,
        .feature-step-circle,
        .feature-image-panel {
          transition: all 0.3s ease;
        }

        /* Maintain equal visual balance between image and steps */
        @media (min-width: 768px) {
          .feature-steps-list,
          .feature-image-panel {
            align-self: center;
          }
        }
      `}</style>
    </div>
  )
}