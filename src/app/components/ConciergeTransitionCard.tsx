"use client";

import React, { useEffect, useState } from "react";
import { TransitionPanel } from "@/app/components/ui/transition-panel";
import useMeasure from "react-use-measure";
import { Check, X } from "lucide-react";

function Button({
  onClick,
  children,
  disabled,
}: {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className="relative flex h-10 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg bg-[#020617] px-6 text-sm font-medium text-white transition-all hover:bg-[#020617]/90 focus-visible:ring-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}

export function ConciergeTransitionCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [ref, bounds] = useMeasure();

  const CONTENT = [
    {
      title: "Best suited for",
      icon: Check,
      iconColor: "#4B6E48",
      items: [
        "Students planning to study abroad within the next 6-18 months.",
        "Individuals seeking expert advice on destination, university, and program selection.",
        "Applicants who want guidance on improving their profile and application strategy.",
        "Those who need clarity on visa processes, timelines, and documentation.",
        "Students looking for scholarship opportunities and financial planning support.",
      ],
    },
    {
      title: "Not ideal for",
      icon: X,
      iconColor: "#DC2626",
      items: [
        "Students who have already finalized their university and submitted applications.",
        "Individuals looking for a fully managed, end-to-end application service (this is advisory support, not a full application service).",
        "Those expecting guaranteed admission to specific universities.",
        "Students seeking last-minute consultation with less than 2 weeks before application deadlines.",
        "Applicants who are not ready to commit time for self-preparation based on guidance provided.",
      ],
    },
  ];

  const handleSetActiveIndex = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (activeIndex < 0) setActiveIndex(0);
    if (activeIndex >= CONTENT.length) setActiveIndex(CONTENT.length - 1);
  }, [activeIndex]);

  return (
    <div className="who-is-this-for-section">
      <div className="who-is-this-for-container">
        <div className="who-is-this-for-header">
          <h2 className="who-is-this-for-title">
            Who is this for?
          </h2>
          <p className="who-is-this-for-subtitle">
            Understand if our concierge service is the right fit for your study abroad journey
          </p>
        </div>
        
        <div className="who-is-this-for-card">
          <TransitionPanel
            activeIndex={activeIndex}
            variants={{
              enter: (direction) => ({
                x: direction > 0 ? 600 : -600,
                opacity: 0,
                height: bounds.height > 0 ? bounds.height : "auto",
                position: "initial",
              }),
              center: {
                zIndex: 1,
                x: 0,
                opacity: 1,
                height: bounds.height > 0 ? bounds.height : "auto",
              },
              exit: (direction) => ({
                zIndex: 0,
                x: direction < 0 ? 600 : -600,
                opacity: 0,
                position: "absolute",
                top: 0,
                width: "100%",
              }),
            }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            custom={direction}
          >
            {CONTENT.map((content, index) => {
              const IconComponent = content.icon;
              return (
                <div key={index} className="card-content-wrapper" ref={ref}>
                  <div className="card-content-header">
                    <div 
                      className="card-icon-badge"
                      style={{ backgroundColor: `${content.iconColor}15` }}
                    >
                      <IconComponent 
                        className="card-icon" 
                        style={{ color: content.iconColor }}
                        strokeWidth={2.5}
                      />
                    </div>
                    <h3 className="card-content-title">
                      {content.title}
                    </h3>
                  </div>
                  <ul className="card-items-list">
                    {content.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="card-list-item">
                        <div 
                          className="card-bullet-outer"
                          style={{ backgroundColor: `${content.iconColor}15` }}
                        >
                          <div 
                            className="card-bullet-inner"
                            style={{ backgroundColor: content.iconColor }}
                          />
                        </div>
                        <p className="card-list-text">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </TransitionPanel>
          <div className="card-navigation-footer">
            <Button 
              onClick={() => handleSetActiveIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
            >
              Previous
            </Button>
            <div className="card-progress-dots">
              {CONTENT.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSetActiveIndex(index)}
                  className="progress-dot"
                  data-active={index === activeIndex}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <Button
              onClick={() => handleSetActiveIndex(activeIndex + 1)}
              disabled={activeIndex === CONTENT.length - 1}
            >
              Next
            </Button>
          </div>
        </div>
      </div>

      {/* Comprehensive Mobile-First Responsive Styles */}
      <style>{`
        /* ============================================
           SECTION CONTAINER
           Mobile: Full-width, remove floating modal feel
           Tablet: 90% width
           Desktop: Centered with max-width 900px
           ============================================ */
        .who-is-this-for-section {
          width: 100%;
          background-color: #FFFFFF;
        }

        /* Mobile (≤480px): 20px vertical padding, 16px horizontal */
        @media (max-width: 480px) {
          .who-is-this-for-section {
            padding: 24px 16px;
          }
        }

        /* Mobile Large (481-767px): standard padding */
        @media (min-width: 481px) and (max-width: 767px) {
          .who-is-this-for-section {
            padding: 32px 20px;
          }
        }

        /* Tablet (768-1199px): 32px horizontal padding */
        @media (min-width: 768px) and (max-width: 1199px) {
          .who-is-this-for-section {
            padding: 40px 32px;
          }
        }

        /* Desktop (≥1200px): centered container */
        @media (min-width: 1200px) {
          .who-is-this-for-section {
            padding: 48px 40px;
          }
        }

        /* ============================================
           CONTAINER WRAPPER
           ============================================ */
        .who-is-this-for-container {
          margin: 0 auto;
          width: 100%;
        }

        /* Mobile: 100% width */
        @media (max-width: 767px) {
          .who-is-this-for-container {
            max-width: 100%;
          }
        }

        /* Tablet: 90% width */
        @media (min-width: 768px) and (max-width: 1199px) {
          .who-is-this-for-container {
            max-width: 90%;
          }
        }

        /* Desktop: max-width 900px centered */
        @media (min-width: 1200px) {
          .who-is-this-for-container {
            max-width: 900px;
          }
        }

        /* ============================================
           SECTION HEADER
           Reduce subtitle-to-card gap on mobile
           Prevent awkward heading line breaks
           ============================================ */
        .who-is-this-for-header {
          text-align: center;
        }

        /* Mobile: 24px bottom margin */
        @media (max-width: 480px) {
          .who-is-this-for-header {
            margin-bottom: 24px;
          }
        }

        /* Mobile Large: 32px bottom margin */
        @media (min-width: 481px) and (max-width: 767px) {
          .who-is-this-for-header {
            margin-bottom: 32px;
          }
        }

        /* Tablet: 40px bottom margin */
        @media (min-width: 768px) and (max-width: 1199px) {
          .who-is-this-for-header {
            margin-bottom: 40px;
          }
        }

        /* Desktop: 48px bottom margin */
        @media (min-width: 1200px) {
          .who-is-this-for-header {
            margin-bottom: 48px;
          }
        }

        /* ============================================
           HEADING SIZE
           Mobile (≤480px): 20-22px
           Tablet (768-1199px): 24-26px
           Desktop (≥1200px): 28-32px
           Prevent awkward heading line breaks
           ============================================ */
        .who-is-this-for-title {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 600;
          color: #0F172A;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0;
          word-wrap: break-word;
          hyphens: auto;
        }

        /* Mobile (≤480px): 21px (within 20-22px) */
        @media (max-width: 480px) {
          .who-is-this-for-title {
            font-size: 21px;
            margin-bottom: 12px;
          }
        }

        /* Mobile Large (481-767px): 24px */
        @media (min-width: 481px) and (max-width: 767px) {
          .who-is-this-for-title {
            font-size: 24px;
            margin-bottom: 12px;
          }
        }

        /* Tablet (768-1199px): 25px (within 24-26px) */
        @media (min-width: 768px) and (max-width: 1199px) {
          .who-is-this-for-title {
            font-size: 25px;
            margin-bottom: 14px;
          }
        }

        /* Desktop (≥1200px): 30px (within 28-32px) */
        @media (min-width: 1200px) {
          .who-is-this-for-title {
            font-size: 30px;
            margin-bottom: 16px;
          }
        }

        /* ============================================
           SUBTITLE
           ============================================ */
        .who-is-this-for-subtitle {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 400;
          color: #64748B;
          line-height: 1.6;
          margin: 0 auto;
        }

        /* Mobile (≤480px): 14px */
        @media (max-width: 480px) {
          .who-is-this-for-subtitle {
            font-size: 14px;
            max-width: 100%;
          }
        }

        /* Mobile Large (481-767px): 15px */
        @media (min-width: 481px) and (max-width: 767px) {
          .who-is-this-for-subtitle {
            font-size: 15px;
            max-width: 95%;
          }
        }

        /* Tablet & Desktop: 16px */
        @media (min-width: 768px) {
          .who-is-this-for-subtitle {
            font-size: 16px;
            max-width: 700px;
          }
        }

        /* ============================================
           CARD CONTAINER
           Mobile (≤480px): Full width (100%), Remove floating modal feel
           Tablet (768-1199px): Width 90%, Padding 24px
           Desktop (≥1200px): Centered, Max-width 900px, Padding 32px
           ============================================ */
        .who-is-this-for-card {
          width: 100%;
          overflow: hidden;
          border: 1px solid #E5E7EB;
          background-color: #FFFFFF;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        /* Mobile (≤480px): 16px radius, no floating feel */
        @media (max-width: 480px) {
          .who-is-this-for-card {
            border-radius: 12px;
          }
        }

        /* Mobile Large (481-767px): 14px radius */
        @media (min-width: 481px) and (max-width: 767px) {
          .who-is-this-for-card {
            border-radius: 14px;
          }
        }

        /* Tablet & Desktop: 16px radius */
        @media (min-width: 768px) {
          .who-is-this-for-card {
            border-radius: 16px;
          }
        }

        /* ============================================
           CARD CONTENT WRAPPER
           Mobile: Vertical padding 20px, Horizontal padding 16px
           Tablet: Padding 24px
           Desktop: Padding 32px
           Text blocks Hug contents vertically
           ============================================ */
        .card-content-wrapper {
          width: 100%;
        }

        /* Mobile (≤480px): 20px vertical, 16px horizontal */
        @media (max-width: 480px) {
          .card-content-wrapper {
            padding: 20px 16px 16px;
          }
        }

        /* Mobile Large (481-767px): 24px all sides */
        @media (min-width: 481px) and (max-width: 767px) {
          .card-content-wrapper {
            padding: 24px 20px 20px;
          }
        }

        /* Tablet (768-1199px): 24px padding */
        @media (min-width: 768px) and (max-width: 1199px) {
          .card-content-wrapper {
            padding: 24px;
          }
        }

        /* Desktop (≥1200px): 32px padding */
        @media (min-width: 1200px) {
          .card-content-wrapper {
            padding: 32px;
          }
        }

        /* ============================================
           CARD HEADER (ICON + TITLE)
           ============================================ */
        .card-content-header {
          display: flex;
          align-items: center;
        }

        /* Mobile: 10px gap, 20px bottom margin */
        @media (max-width: 480px) {
          .card-content-header {
            gap: 10px;
            margin-bottom: 20px;
          }
        }

        /* Mobile Large: 12px gap, 20px bottom margin */
        @media (min-width: 481px) and (max-width: 767px) {
          .card-content-header {
            gap: 12px;
            margin-bottom: 20px;
          }
        }

        /* Tablet & Desktop: 12px gap, 24px bottom margin */
        @media (min-width: 768px) {
          .card-content-header {
            gap: 12px;
            margin-bottom: 24px;
          }
        }

        /* ============================================
           ICON BADGE
           ============================================ */
        .card-icon-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          flex-shrink: 0;
        }

        /* Mobile: 36px size */
        @media (max-width: 767px) {
          .card-icon-badge {
            width: 36px;
            height: 36px;
          }
        }

        /* Tablet & Desktop: 40px size */
        @media (min-width: 768px) {
          .card-icon-badge {
            width: 40px;
            height: 40px;
          }
        }

        .card-icon {
          flex-shrink: 0;
        }

        /* Mobile: 18px icon */
        @media (max-width: 767px) {
          .card-icon {
            width: 18px;
            height: 18px;
          }
        }

        /* Tablet & Desktop: 20px icon */
        @media (min-width: 768px) {
          .card-icon {
            width: 20px;
            height: 20px;
          }
        }

        /* ============================================
           CARD CONTENT TITLE
           ============================================ */
        .card-content-title {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 700;
          color: #111827;
          margin: 0;
          line-height: 1.3;
        }

        /* Mobile: 18px */
        @media (max-width: 480px) {
          .card-content-title {
            font-size: 18px;
          }
        }

        /* Mobile Large: 20px */
        @media (min-width: 481px) and (max-width: 767px) {
          .card-content-title {
            font-size: 20px;
          }
        }

        /* Tablet & Desktop: 24px */
        @media (min-width: 768px) {
          .card-content-title {
            font-size: 24px;
          }
        }

        /* ============================================
           BULLETED LIST WITH COMFORTABLE SPACING
           Optimize bullet spacing and line length for readability
           ============================================ */
        .card-items-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }

        /* Mobile: 14px gap */
        @media (max-width: 480px) {
          .card-items-list {
            gap: 14px;
          }
        }

        /* Mobile Large: 15px gap */
        @media (min-width: 481px) and (max-width: 767px) {
          .card-items-list {
            gap: 15px;
          }
        }

        /* Tablet: 16px gap */
        @media (min-width: 768px) and (max-width: 1199px) {
          .card-items-list {
            gap: 16px;
          }
        }

        /* Desktop: 16px gap */
        @media (min-width: 1200px) {
          .card-items-list {
            gap: 16px;
          }
        }

        /* ============================================
           LIST ITEM
           ============================================ */
        .card-list-item {
          display: flex;
          align-items: flex-start;
        }

        /* Mobile: 10px gap */
        @media (max-width: 767px) {
          .card-list-item {
            gap: 10px;
          }
        }

        /* Tablet & Desktop: 12px gap */
        @media (min-width: 768px) {
          .card-list-item {
            gap: 12px;
          }
        }

        /* ============================================
           BULLET OUTER
           ============================================ */
        .card-bullet-outer {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          margin-top: 2px;
        }

        .card-bullet-inner {
          border-radius: 9999px;
          width: 8px;
          height: 8px;
        }

        /* ============================================
           LIST TEXT
           Optimize line length for readability
           ============================================ */
        .card-list-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #374151;
          line-height: 1.6;
          margin: 0;
          flex: 1;
        }

        /* Mobile (≤480px): 14px */
        @media (max-width: 480px) {
          .card-list-text {
            font-size: 14px;
          }
        }

        /* Mobile Large (481-767px): 15px */
        @media (min-width: 481px) and (max-width: 767px) {
          .card-list-text {
            font-size: 15px;
          }
        }

        /* Tablet & Desktop: 16px */
        @media (min-width: 768px) {
          .card-list-text {
            font-size: 16px;
          }
        }

        /* ============================================
           NAVIGATION FOOTER
           Navigation buttons aligned horizontally on desktop
           Navigation buttons full-width on mobile
           Increase visibility of step progress indicator
           ============================================ */
        .card-navigation-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #E5E7EB;
          background-color: #F9FAFB;
        }

        /* Mobile: column layout, full-width buttons */
        @media (max-width: 480px) {
          .card-navigation-footer {
            flex-direction: column;
            padding: 16px;
            gap: 12px;
          }
        }

        /* Mobile Large: row layout */
        @media (min-width: 481px) and (max-width: 767px) {
          .card-navigation-footer {
            flex-direction: row;
            padding: 20px;
          }
        }

        /* Tablet & Desktop: row layout */
        @media (min-width: 768px) {
          .card-navigation-footer {
            flex-direction: row;
            padding: 24px 32px;
          }
        }

        /* ============================================
           NAVIGATION BUTTONS
           Full-width on mobile
           ============================================ */
        .card-navigation-footer button[type="button"] {
          /* Mobile: full width */
        }

        @media (max-width: 480px) {
          .card-navigation-footer button[type="button"] {
            width: 100%;
            order: 2;
          }

          .card-navigation-footer button[type="button"]:first-child {
            order: 3;
          }
        }

        /* ============================================
           PROGRESS DOTS
           Increase visibility of step progress indicator
           ============================================ */
        .card-progress-dots {
          display: flex;
          align-items: center;
        }

        /* Mobile: 10px gap, order 1 (top position) */
        @media (max-width: 480px) {
          .card-progress-dots {
            gap: 10px;
            order: 1;
          }
        }

        /* Mobile Large & up: 8px gap */
        @media (min-width: 481px) {
          .card-progress-dots {
            gap: 8px;
          }
        }

        .progress-dot {
          border-radius: 9999px;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          padding: 0;
          background-color: #D1D5DB;
        }

        .progress-dot:hover {
          background-color: #9CA3AF;
        }

        .progress-dot[data-active="true"] {
          background-color: #4B6E48;
        }

        /* Mobile: larger dots for better visibility */
        @media (max-width: 480px) {
          .progress-dot {
            width: 10px;
            height: 10px;
          }

          .progress-dot[data-active="true"] {
            width: 28px;
          }
        }

        /* Mobile Large & up: standard size */
        @media (min-width: 481px) {
          .progress-dot {
            width: 8px;
            height: 8px;
          }

          .progress-dot[data-active="true"] {
            width: 24px;
          }
        }

        /* ============================================
           OVERALL BEHAVIOR
           Remove floating modal feel on mobile
           Section should feel like full-width step screen
           ============================================ */
        
        /* Prevent horizontal overflow */
        .who-is-this-for-section,
        .who-is-this-for-container,
        .who-is-this-for-card {
          overflow-x: hidden;
          max-width: 100%;
        }

        /* Smooth transitions */
        .who-is-this-for-card,
        .progress-dot {
          transition: all 0.3s ease;
        }

        /* Mobile: Full-width feel, no floating */
        @media (max-width: 480px) {
          .who-is-this-for-card {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          }
        }
      `}</style>
    </div>
  );
}