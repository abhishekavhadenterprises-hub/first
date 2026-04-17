import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Info } from 'lucide-react';

export function ImportantNoteSection() {
  const infoBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!infoBoxRef.current) return;

    const animation = gsap.to(infoBoxRef.current, {
      backgroundPosition: "100% 100%",
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "none"
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="important-note-section">
      <div className="important-note-container">
        <div 
          ref={infoBoxRef}
          className="important-note-card"
        >
          {/* Icon + Heading Group */}
          <div className="heading-group">
            <Info className="info-icon" size={24} strokeWidth={2} />
            <h2 className="important-note-heading">
              Important information about university listings
            </h2>
          </div>

          {/* Paragraph */}
          <p className="important-note-text">
            Visa requirements and application timelines vary significantly by country. Start your visa application process at least 3-6 months before your intended departure date. Each country has specific documentation requirements, financial proof standards, and processing times.
          </p>
        </div>
      </div>

      {/* Comprehensive Responsive Styles */}
      <style>{`
        /* ============================================
           SECTION BASE - Light Blue Background
           ============================================ */
        .important-note-section {
          width: 100%;
          background-color: #EFF6FF;
        }

        /* ============================================
           CONTAINER - Responsive Outer Padding
           ============================================ */
        .important-note-container {
          margin: 0 auto;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Mobile (≤480px): Reduce light-blue background vertical padding */
        @media (max-width: 480px) {
          .important-note-container {
            padding: 48px 16px;
          }
        }

        /* Mobile-Large (481-767px) */
        @media (min-width: 481px) and (max-width: 767px) {
          .important-note-container {
            padding: 56px 20px;
          }
        }

        /* Tablet (768-1199px): Reduce outer padding, 90% card width */
        @media (min-width: 768px) and (max-width: 1199px) {
          .important-note-container {
            padding: 64px 32px;
          }
        }

        /* Desktop (≥1200px): Standard padding */
        @media (min-width: 1200px) {
          .important-note-container {
            padding: 80px 40px;
          }
        }

        /* ============================================
           CARD - Responsive Width & Padding
           Auto Layout: Fill container on mobile, constrained on desktop
           ============================================ */
        .important-note-card {
          position: relative;
          background-color: white;
          display: flex;
          flex-direction: column;
          background: radial-gradient(
            circle at center,
            transparent 0%,
            transparent 20%,
            rgba(75, 110, 72, 0.08) 50%,
            transparent 80%,
            transparent 100%
          );
          background-size: 300% 300%;
          will-change: background-position;
          border-radius: 16px;
        }

        /* Mobile (≤480px): 100% width, 16px horizontal, 20px vertical padding */
        @media (max-width: 480px) {
          .important-note-card {
            width: 100%;
            padding: 20px 16px;
            gap: 16px;
            background-size: 250% 250%;
          }
        }

        /* Mobile-Large (481-767px) */
        @media (min-width: 481px) and (max-width: 767px) {
          .important-note-card {
            width: 100%;
            padding: 24px 20px;
            gap: 18px;
            background-size: 250% 250%;
          }
        }

        /* Tablet (768-1199px): 90% width, 24px padding */
        @media (min-width: 768px) and (max-width: 1199px) {
          .important-note-card {
            width: 90%;
            max-width: 880px;
            padding: 24px;
            gap: 20px;
            border-radius: 20px;
          }
        }

        /* Desktop (≥1200px): max-width 960px, 32px padding, center aligned */
        @media (min-width: 1200px) {
          .important-note-card {
            max-width: 960px;
            padding: 32px;
            gap: 24px;
            border-radius: 24px;
          }
        }

        /* ============================================
           CARD BORDER - Animated Gradient
           ============================================ */
        .important-note-card::before {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 0;
          padding: 1.5px;
          border-radius: inherit;
          background: radial-gradient(
            circle at center,
            transparent 0%,
            transparent 20%,
            rgba(75, 110, 72, 0.5) 50%,
            transparent 80%,
            transparent 100%
          );
          background-size: 300% 300%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: pulse-border 14s linear infinite;
          will-change: background-position;
        }

        @media (max-width: 767px) {
          .important-note-card::before {
            background-size: 250% 250%;
            padding: 1.5px;
          }
        }

        @keyframes pulse-border {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        /* ============================================
           HEADING GROUP - Icon + Heading
           Auto Layout: Horizontal on desktop, vertical on mobile
           ============================================ */
        .heading-group {
          display: flex;
          align-items: flex-start;
        }

        /* Mobile (≤480px): Vertical stack, icon above heading */
        @media (max-width: 480px) {
          .heading-group {
            flex-direction: column;
            gap: 12px;
          }
        }

        /* Tablet & Desktop: Horizontal layout, icon left of heading */
        @media (min-width: 481px) {
          .heading-group {
            flex-direction: row;
            gap: 14px;
            align-items: center;
          }
        }

        @media (min-width: 1200px) {
          .heading-group {
            gap: 16px;
          }
        }

        /* ============================================
           INFO ICON - Responsive Sizing
           ============================================ */
        .info-icon {
          flex-shrink: 0;
          color: #4B6E48;
        }

        /* Mobile (≤480px): 20px icon */
        @media (max-width: 480px) {
          .info-icon {
            width: 20px;
            height: 20px;
          }
        }

        /* Tablet (481-1199px): 22px icon */
        @media (min-width: 481px) and (max-width: 1199px) {
          .info-icon {
            width: 22px;
            height: 22px;
          }
        }

        /* Desktop (≥1200px): 24px icon */
        @media (min-width: 1200px) {
          .info-icon {
            width: 24px;
            height: 24px;
          }
        }

        /* ============================================
           HEADING - Responsive Typography Per Breakpoint
           Hug contents vertically
           ============================================ */
        .important-note-heading {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          color: #0F172A;
          margin: 0;
          line-height: 1.3;
          text-align: left;
        }

        /* Mobile (≤480px): 16-18px, prevent awkward wrapping */
        @media (max-width: 480px) {
          .important-note-heading {
            font-size: 17px;
            line-height: 1.35;
            max-width: 100%;
          }
        }

        /* Mobile-Large (481-767px) */
        @media (min-width: 481px) and (max-width: 767px) {
          .important-note-heading {
            font-size: 18px;
            line-height: 1.3;
          }
        }

        /* Tablet (768-1199px): 18-20px */
        @media (min-width: 768px) and (max-width: 1199px) {
          .important-note-heading {
            font-size: 19px;
            line-height: 1.3;
          }
        }

        /* Desktop (≥1200px): 20-22px */
        @media (min-width: 1200px) {
          .important-note-heading {
            font-size: 21px;
            line-height: 1.3;
          }
        }

        /* ============================================
           PARAGRAPH - Responsive Typography
           Hug contents vertically, limit line length on mobile
           ============================================ */
        .important-note-text {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          color: #475569;
          margin: 0;
          line-height: 1.65;
          text-align: left;
        }

        /* Mobile (≤480px): 13-14px, limit text line length, comfortable spacing */
        @media (max-width: 480px) {
          .important-note-text {
            font-size: 13px;
            line-height: 1.7;
            max-width: 100%;
          }
        }

        /* Mobile-Large (481-767px) */
        @media (min-width: 481px) and (max-width: 767px) {
          .important-note-text {
            font-size: 14px;
            line-height: 1.65;
            max-width: 100%;
          }
        }

        /* Tablet (768-1199px): 14-15px */
        @media (min-width: 768px) and (max-width: 1199px) {
          .important-note-text {
            font-size: 14px;
            line-height: 1.65;
          }
        }

        /* Desktop (≥1200px): 14-15px */
        @media (min-width: 1200px) {
          .important-note-text {
            font-size: 15px;
            line-height: 1.6;
          }
        }

        /* ============================================
           ACCESSIBILITY & PERFORMANCE
           ============================================ */
        
        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .important-note-card,
          .important-note-card::before {
            animation: none !important;
            will-change: auto;
          }
        }

        /* Focus states for accessibility */
        .important-note-card:focus-within {
          outline: 2px solid #4B6E48;
          outline-offset: 4px;
        }
      `}</style>
    </section>
  );
}
