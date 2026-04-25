import { ArrowRight } from 'lucide-react';
import { StandardButton } from './ui/standard-button';

export function UniversityCTASection() {
  return (
    <section className="university-cta-section">
      <div className="university-cta-container">
        {/* Decorative diagonal line - visible on desktop/tablet only */}
        <div className="decorative-line" aria-hidden="true" />

        {/* Heading */}
        <h2 className="university-cta-heading">
          Need help choosing universities?
        </h2>

        {/* Paragraph */}
        <p className="university-cta-paragraph">
          Our concierge service provides personalized guidance on university selection, understanding requirements, and preparing competitive applications.
        </p>

        {/* Buttons Group */}
        <div className="buttons-group">
          <StandardButton
            className="primary-cta-button"
            onClick={() => console.log('Talk to Concierge Team')}
          >
            Talk to Concierge Team
            <ArrowRight className="button-icon" />
          </StandardButton>
          
          <button
            className="group relative inline-flex items-center justify-center px-12 py-6 bg-white text-[#0F172A] border-2 border-[#0F172A] rounded-xl font-black uppercase tracking-widest text-[13px] overflow-hidden transition-all duration-500 hover:border-[#4EA62F] transform"
            onClick={() => window.location.href = '/countries'}
          >
            <span className="relative z-20 group-hover:text-white transition-colors duration-500">Explore Countries</span>
            <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-10" />
          </button>
        </div>

        {/* Helper Text */}
        <p className="helper-text">
          University search and comparison tools available free for all users
        </p>
      </div>

      {/* Comprehensive Responsive Styles */}
      <style>{`
        /* ============================================
           SECTION BASE
           ============================================ */
        .university-cta-section {
          position: relative;
          width: 100%;
          background-color: white;
          overflow: hidden;
        }

        /* ============================================
           CONTAINER - Responsive Width & Padding
           ============================================ */
        .university-cta-container {
          position: relative;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* Mobile (≤480px): 100% width, 16px horizontal, 24px vertical padding */
        @media (max-width: 480px) {
          .university-cta-container {
            width: 100%;
            padding: 24px 16px;
          }
        }

        /* Mobile-Large (481-767px) */
        @media (min-width: 481px) and (max-width: 767px) {
          .university-cta-container {
            width: 100%;
            padding: 32px 20px;
          }
        }

        /* Tablet (768-1199px): 90% width, reduce vertical padding */
        @media (min-width: 768px) and (max-width: 1199px) {
          .university-cta-container {
            width: 90%;
            max-width: 880px;
            padding: 56px 32px;
          }
        }

        /* Desktop (≥1200px): max-width 960px, center aligned */
        @media (min-width: 1200px) {
          .university-cta-container {
            max-width: 960px;
            padding: 80px 40px;
          }
        }

        /* ============================================
           DECORATIVE DIAGONAL LINE
           Visible on desktop/tablet, hidden on mobile
           ============================================ */
        .decorative-line {
          position: absolute;
          top: 0;
          right: 10%;
          width: 2px;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(75, 110, 72, 0.2) 20%,
            rgba(75, 110, 72, 0.4) 50%,
            rgba(75, 110, 72, 0.2) 80%,
            transparent 100%
          );
          transform: rotate(15deg);
          transform-origin: top center;
        }

        /* Hide decorative line on mobile */
        @media (max-width: 767px) {
          .decorative-line {
            display: none;
          }
        }

        /* Show on tablet/desktop */
        @media (min-width: 768px) {
          .decorative-line {
            display: block;
          }
        }

        /* ============================================
           HEADING - Responsive Typography
           Prevent awkward multi-line breaks on mobile
           Hug contents vertically
           ============================================ */
        .university-cta-heading {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          color: #0F172A;
          margin: 0;
          line-height: 1.25;
          text-align: center;
        }

        /* Mobile (≤480px): 20-22px, prevent awkward breaks */
        @media (max-width: 480px) {
          .university-cta-heading {
            font-size: 21px;
            line-height: 1.3;
            max-width: 100%;
            margin-bottom: 16px;
          }
        }

        /* Mobile-Large (481-767px) */
        @media (min-width: 481px) and (max-width: 767px) {
          .university-cta-heading {
            font-size: 23px;
            line-height: 1.25;
            margin-bottom: 18px;
          }
        }

        /* Tablet (768-1199px): 24-26px */
        @media (min-width: 768px) and (max-width: 1199px) {
          .university-cta-heading {
            font-size: 21px;
            line-height: 1.25;
            margin-bottom: 20px;
          }
        }

        /* Desktop (≥1200px): 28-32px */
        @media (min-width: 1200px) {
          .university-cta-heading {
            font-size: 24px;
            line-height: 1.2;
            margin-bottom: 24px;
          }
        }

        /* ============================================
           PARAGRAPH - Responsive Typography
           Improve text line length for readability
           Hug contents vertically
           ============================================ */
        .university-cta-paragraph {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          color: #64748B;
          margin: 0;
          line-height: 1.65;
          text-align: center;
        }

        /* Mobile (≤480px): 14px, improve line length */
        @media (max-width: 480px) {
          .university-cta-paragraph {
            font-size: 14px;
            line-height: 1.7;
            max-width: 100%;
            margin-bottom: 24px;
          }
        }

        /* Mobile-Large (481-767px) */
        @media (min-width: 481px) and (max-width: 767px) {
          .university-cta-paragraph {
            font-size: 15px;
            line-height: 1.65;
            max-width: 95%;
            margin-bottom: 28px;
          }
        }

        /* Tablet (768-1199px): 15px */
        @media (min-width: 768px) and (max-width: 1199px) {
          .university-cta-paragraph {
            font-size: 15px;
            line-height: 1.6;
            max-width: 90%;
            margin-bottom: 32px;
          }
        }

        /* Desktop (≥1200px): 16px */
        @media (min-width: 1200px) {
          .university-cta-paragraph {
            font-size: 16px;
            line-height: 1.6;
            max-width: 700px;
            margin-bottom: 36px;
          }
        }

        /* ============================================
           BUTTONS GROUP
           Mobile: Stack vertically, fill width
           Desktop: Inline horizontally
           ============================================ */
        .buttons-group {
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
        }

        /* Mobile (≤480px): Stack vertically, full width buttons, 12-16px gap */
        @media (max-width: 480px) {
          .buttons-group {
            flex-direction: column;
            gap: 14px;
            max-width: 100%;
          }
        }

        /* Mobile-Large (481-767px) */
        @media (min-width: 481px) and (max-width: 767px) {
          .buttons-group {
            flex-direction: column;
            gap: 16px;
            max-width: 320px;
          }
        }

        /* Tablet & Desktop: Horizontal inline buttons */
        @media (min-width: 768px) {
          .buttons-group {
            flex-direction: row;
            gap: 16px;
            max-width: none;
          }
        }

        /* ============================================
           PRIMARY CTA BUTTON
           Full width on mobile, auto width on desktop
           ============================================ */
        .primary-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 24px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 12px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        /* Mobile: Full width */
        @media (max-width: 767px) {
          .primary-cta-button {
            width: 100%;
            min-height: 48px;
          }
        }

        /* Tablet & Desktop: Auto width */
        @media (min-width: 768px) {
          .primary-cta-button {
            width: auto;
            padding: 15px 28px;
          }
        }

        /* ============================================
           SECONDARY CTA BUTTON
           Full width on mobile, auto width on desktop
           ============================================ */
        .secondary-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 24px;
          font-size: 15px;
          font-weight: 600;
          background-color: white;
          color: #0F172A;
          border: 2px solid #0F172A;
          border-radius: 12px;
          transition: all 0.3s ease;
          cursor: pointer;
          white-space: nowrap;
        }

        .secondary-cta-button:hover {
          background-color: #F8FAFC;
          transform: translateY(-1px);
        }

        .secondary-cta-button:active {
          transform: translateY(0);
        }

        /* Mobile: Full width, below primary with 12-16px gap */
        @media (max-width: 767px) {
          .secondary-cta-button {
            width: 100%;
            min-height: 48px;
          }
        }

        /* Tablet & Desktop: Auto width */
        @media (min-width: 768px) {
          .secondary-cta-button {
            width: auto;
            padding: 15px 28px;
          }
        }

        /* ============================================
           BUTTON ICON
           ============================================ */
        .button-icon {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }

        /* ============================================
           HELPER TEXT
           Group directly under buttons
           ============================================ */
        .helper-text {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          color: #94A3B8;
          margin: 0;
          text-align: center;
          line-height: 1.5;
        }

        /* Mobile (≤480px): 12px, close to buttons */
        @media (max-width: 480px) {
          .helper-text {
            font-size: 12px;
            margin-top: 16px;
          }
        }

        /* Mobile-Large (481-767px) */
        @media (min-width: 481px) and (max-width: 767px) {
          .helper-text {
            font-size: 13px;
            margin-top: 18px;
          }
        }

        /* Tablet (768-1199px) */
        @media (min-width: 768px) and (max-width: 1199px) {
          .helper-text {
            font-size: 13px;
            margin-top: 20px;
          }
        }

        /* Desktop (≥1200px) */
        @media (min-width: 1200px) {
          .helper-text {
            font-size: 14px;
            margin-top: 24px;
          }
        }

        /* ============================================
           FOCUS STATES - Accessibility
           ============================================ */
        .primary-cta-button:focus-visible,
        .secondary-cta-button:focus-visible {
          outline: 3px solid #4B6E48;
          outline-offset: 3px;
        }

        /* ============================================
           HOVER EFFECTS - Desktop Only
           ============================================ */
        @media (hover: hover) {
          .primary-cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          }
        }

        /* Disable hover effects on touch devices */
        @media (hover: none) {
          .primary-cta-button:hover,
          .secondary-cta-button:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}