import React from 'react';
import { motion } from 'motion/react';
import { StandardButton } from '@/app/components/ui/standard-button';
import { ArrowRight } from 'lucide-react';

/**
 * Country Concierge Section - CTA for personalized country selection guidance
 * Placed below "How we help with country selection" section
 */
export function CountryConciergeSection() {
  return (
    <section className="concierge-section">
      <div className="concierge-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="concierge-card"
        >
          {/* Heading */}
          <h2 className="concierge-heading">
            Need help choosing the right country?
          </h2>

          {/* Description */}
          <p className="concierge-description">
            Our concierge service includes personalized guidance on country selection,
            comparing requirements, and understanding what each destination offers for your
            specific situation.
          </p>

          {/* CTA Buttons */}
          <div className="concierge-buttons">
            <StandardButton
              onClick={() => {
                console.log('Talk to Concierge Team clicked');
              }}
              className="concierge-button concierge-button-primary"
            >
              <span className="concierge-button-content">
                <span>Talk to Concierge Team</span>
                <ArrowRight className="concierge-button-icon" />
              </span>
            </StandardButton>

            <button
              onClick={() => {
                window.location.href = '/countries';
              }}
              className="concierge-button concierge-button-secondary"
            >
              Compare Countries
            </button>
          </div>

          {/* Bottom Note */}
          <p className="concierge-note">
            Basic country information available free for all users
          </p>
        </motion.div>
      </div>

      {/* Comprehensive Responsive Styles */}
      <style>{`
        /* ============================================
           SECTION BASE
           ============================================ */
        .concierge-section {
          width: 100%;
          background-color: white;
        }

        /* ============================================
           CONTAINER - Precise Width Control
           ============================================ */
        .concierge-container {
          margin: 0 auto;
          width: 100%;
        }

        /* Mobile (≤767px): 16-20px padding */
        @media (max-width: 767px) {
          .concierge-container {
            padding: 52px 18px;
          }
        }

        /* Tablet (768-991px): 32px padding */
        @media (min-width: 768px) and (max-width: 991px) {
          .concierge-container {
            padding: 68px 32px;
          }
        }

        /* Mid-desktop (992-1199px): Contained width */
        @media (min-width: 992px) and (max-width: 1199px) {
          .concierge-container {
            max-width: 950px;
            padding: 84px 40px;
          }
        }

        /* Desktop (≥1200px): max-width 900-1000px centered */
        @media (min-width: 1200px) {
          .concierge-container {
            max-width: 950px;
            padding: 88px 40px;
          }
        }

        /* ============================================
           CARD - Structure & Styling
           ============================================ */
        .concierge-card {
          background-color: white;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Mobile: 24px padding */
        @media (max-width: 767px) {
          .concierge-card {
            padding: 28px 24px;
            border-radius: 16px;
          }
        }

        /* Tablet: 32px padding */
        @media (min-width: 768px) and (max-width: 991px) {
          .concierge-card {
            padding: 36px 32px;
          }
        }

        /* Desktop: 40px padding */
        @media (min-width: 992px) {
          .concierge-card {
            padding: 44px 40px;
          }
        }

        /* ============================================
           HEADING - Responsive Typography
           ============================================ */
        .concierge-heading {
          font-weight: 600;
          color: #0F172A;
          letter-spacing: -0.02em;
          margin: 0;
          line-height: 1.25;
        }

        /* Mobile: 22-26px */
        @media (max-width: 767px) {
          .concierge-heading {
            font-size: 24px;
            line-height: 1.3;
            margin-bottom: 14px;
          }
        }

        /* Tablet: 30-32px */
        @media (min-width: 768px) and (max-width: 991px) {
          .concierge-heading {
            font-size: 31px;
            line-height: 1.25;
            margin-bottom: 16px;
          }
        }

        /* Desktop: 36-40px */
        @media (min-width: 992px) {
          .concierge-heading {
            font-size: 38px;
            line-height: 1.2;
            margin-bottom: 18px;
          }
        }

        /* ============================================
           DESCRIPTION - Controlled Max-Width
           ============================================ */
        .concierge-description {
          color: #64748B;
          font-weight: 400;
          margin: 0;
        }

        /* Mobile: 14px, 90-95% width */
        @media (max-width: 767px) {
          .concierge-description {
            font-size: 14px;
            line-height: 1.6;
            max-width: 95%;
            margin-bottom: 24px;
          }
        }

        /* Tablet: 15px, 500px max-width */
        @media (min-width: 768px) and (max-width: 991px) {
          .concierge-description {
            font-size: 15px;
            line-height: 1.6;
            max-width: 500px;
            margin-bottom: 28px;
          }
        }

        /* Desktop: 16px, 600px max-width */
        @media (min-width: 992px) {
          .concierge-description {
            font-size: 16px;
            line-height: 1.55;
            max-width: 600px;
            margin-bottom: 32px;
          }
        }

        /* ============================================
           BUTTONS CONTAINER
           ============================================ */
        .concierge-buttons {
          display: flex;
          align-items: stretch;
          justify-content: center;
          width: 100%;
        }

        /* Mobile: Stack vertically, full width */
        @media (max-width: 767px) {
          .concierge-buttons {
            flex-direction: column;
            gap: 12px;
            margin-bottom: 20px;
          }
        }

        /* Tablet: Horizontal, controlled width */
        @media (min-width: 768px) and (max-width: 991px) {
          .concierge-buttons {
            flex-direction: row;
            gap: 14px;
            margin-bottom: 22px;
            max-width: 100%;
          }
        }

        /* Desktop: Horizontal, 16-20px gap */
        @media (min-width: 992px) {
          .concierge-buttons {
            flex-direction: row;
            gap: 16px;
            margin-bottom: 24px;
          }
        }

        /* ============================================
           BUTTON BASE STYLES
           ============================================ */
        .concierge-button {
          font-weight: 500;
          border-radius: 12px;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
        }

        /* Mobile: 44-48px height, full width */
        @media (max-width: 767px) {
          .concierge-button {
            height: 46px;
            font-size: 14px;
            padding: 0 24px;
            width: 100%;
          }
        }

        /* Tablet & Desktop: 48-52px height, auto width */
        @media (min-width: 768px) {
          .concierge-button {
            height: 48px;
            font-size: 14px;
            padding: 0 28px;
            width: auto;
            min-width: 180px;
          }
        }

        @media (min-width: 992px) {
          .concierge-button {
            height: 50px;
            font-size: 15px;
            padding: 0 32px;
            min-width: 200px;
          }
        }

        /* ============================================
           PRIMARY BUTTON (Override StandardButton)
           ============================================ */
        .concierge-button-primary {
          background-color: #020617 !important;
          color: white !important;
        }

        .concierge-button-primary:hover {
          background-color: #1a1f2e !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12) !important;
        }

        /* ============================================
           SECONDARY BUTTON
           ============================================ */
        .concierge-button-secondary {
          background-color: white;
          color: #0F172A;
          border: 1.5px solid #E2E8F0;
        }

        .concierge-button-secondary:hover {
          background-color: #F8FAFC;
          border-color: #CBD5E1;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        /* ============================================
           BUTTON CONTENT - Icon & Text Alignment
           ============================================ */
        .concierge-button-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .concierge-button-icon {
          flex-shrink: 0;
          width: 16px;
          height: 16px;
        }

        @media (max-width: 767px) {
          .concierge-button-icon {
            width: 15px;
            height: 15px;
          }
        }

        /* ============================================
           HELPER NOTE
           ============================================ */
        .concierge-note {
          color: #94A3B8;
          font-weight: 400;
          margin: 0;
          text-align: center;
        }

        /* Mobile: 12-13px */
        @media (max-width: 767px) {
          .concierge-note {
            font-size: 12px;
            line-height: 1.5;
          }
        }

        /* Desktop: 14px */
        @media (min-width: 768px) {
          .concierge-note {
            font-size: 13px;
            line-height: 1.5;
          }
        }

        @media (min-width: 992px) {
          .concierge-note {
            font-size: 14px;
          }
        }

        /* ============================================
           ACCESSIBILITY
           ============================================ */
        .concierge-button:focus-visible {
          outline: 3px solid rgba(75, 110, 72, 0.5);
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: no-preference) {
          .concierge-button {
            transition: all 0.3s ease;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .concierge-button {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
