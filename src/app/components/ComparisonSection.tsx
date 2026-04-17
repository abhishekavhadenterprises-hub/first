import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ComparisonSectionProps {
  title: string;
  icon: LucideIcon;
  categoryKey: string;
  labels: string[];
  selectedCountries: string[];
  countryData: Record<string, { code: string; recommendation: string }>;
  comparisonData: Record<string, Record<string, Record<string, string>>>;
}

export function ComparisonSection({
  title,
  icon: Icon,
  categoryKey,
  labels,
  selectedCountries,
  countryData,
  comparisonData,
}: ComparisonSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className="comparison-section"
    >
      {/* Header */}
      <div className="comparison-header">
        <div className="header-icon">
          <Icon className="icon" />
        </div>
        <h3 className="header-title">{title}</h3>
      </div>

      {/* Comparison Content */}
      <div className="comparison-content">
        {/* Desktop & Tablet: Grid Layout */}
        <div className="comparison-grid-desktop">
          {/* Row Labels Column */}
          <div className="labels-column">
            {/* Spacer to align with country card headers */}
            <div className="labels-spacer">
              <div className="spacer-content">
                <div className="spacer-icon"></div>
                <div>
                  <div className="spacer-text-large"></div>
                  <div className="spacer-text-small"></div>
                </div>
              </div>
            </div>

            {/* Row Labels */}
            {labels.map((label, index) => (
              <div key={index} className="label-row">
                <div className="label-content">
                  <div className="label-icon">
                    <div className="label-icon-inner"></div>
                  </div>
                  <span className="label-text">{label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Country Cards Columns */}
          {selectedCountries.map((country) => {
            const countryInfo = countryData[country];
            const data = comparisonData[country];
            return (
              <div key={country} className="country-card-desktop">
                {/* Country Header */}
                <div className="country-header">
                  <div className="country-code-badge">
                    <span className="country-code">{countryInfo?.code || 'XX'}</span>
                  </div>
                  <div className="country-info">
                    <h4 className="country-name">{country}</h4>
                    <p className="country-label">Country</p>
                  </div>
                </div>

                {/* Values */}
                {labels.map((label, index) => (
                  <div key={index} className="value-row">
                    <span className="value-text">
                      {data?.[categoryKey]?.[label] || 'N/A'}
                    </span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Mobile: Stacked Layout */}
        <div className="comparison-stack-mobile">
          {/* Labels First */}
          <div className="mobile-labels">
            <h4 className="mobile-section-title">{title} Categories</h4>
            {labels.map((label, index) => (
              <div key={index} className="mobile-label-item">
                <div className="mobile-label-icon">
                  <div className="mobile-label-icon-inner"></div>
                </div>
                <span className="mobile-label-text">{label}</span>
              </div>
            ))}
          </div>

          {/* Country Cards Below */}
          {selectedCountries.map((country) => {
            const countryInfo = countryData[country];
            const data = comparisonData[country];
            return (
              <div key={country} className="country-card-mobile">
                {/* Country Header */}
                <div className="mobile-country-header">
                  <div className="mobile-country-code-badge">
                    <span className="mobile-country-code">{countryInfo?.code || 'XX'}</span>
                  </div>
                  <div>
                    <h4 className="mobile-country-name">{country}</h4>
                    <p className="mobile-country-label">Country</p>
                  </div>
                </div>

                {/* Data */}
                <div className="mobile-data-grid">
                  {labels.map((label, index) => (
                    <div key={index} className="mobile-data-row">
                      <span className="mobile-data-label">{label}</span>
                      <span className="mobile-data-value">
                        {data?.[categoryKey]?.[label] || 'N/A'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Comprehensive Responsive Styles */}
      <style>{`
        /* ============================================
           SECTION CONTAINER
           Desktop: max-width 1200px centered
           Tablet: 100% width with 32px padding
           Mobile: 16-20px padding
           Remove narrow boxed appearance on mid-tablet
           Prevent horizontal overflow
           ============================================ */
        .comparison-section {
          background-color: white;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          margin-top: 32px;
          max-width: 100%;
        }

        /* ============================================
           HEADER (Title + Icon)
           Desktop title: 32-36px
           Tablet: 28px
           Mobile: 22-24px
           Icon and title vertically centered
           Reduce extra space above and below header
           Keep header centered
           ============================================ */
        .comparison-header {
          background-color: #F8FAFC;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border-bottom: 1px solid #E2E8F0;
        }

        /* Mobile: 22-24px title, reduced padding */
        @media (max-width: 767px) {
          .comparison-header {
            padding: 18px 16px;
          }
        }

        /* Tablet: 28px title, medium padding */
        @media (min-width: 768px) and (max-width: 1199px) {
          .comparison-header {
            padding: 22px 32px;
          }
        }

        /* Desktop: 32-36px title, standard padding */
        @media (min-width: 1200px) {
          .comparison-header {
            padding: 24px 32px;
          }
        }

        /* ============================================
           HEADER ICON
           ============================================ */
        .header-icon {
          color: #4B6E48;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .icon {
          width: 20px;
          height: 20px;
        }

        /* ============================================
           HEADER TITLE
           ============================================ */
        .header-title {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          color: #0F172A;
          margin: 0;
          line-height: 1.2;
        }

        /* Mobile: 22-24px */
        @media (max-width: 767px) {
          .header-title {
            font-size: 23px;
          }
        }

        /* Tablet: 28px */
        @media (min-width: 768px) and (max-width: 1199px) {
          .header-title {
            font-size: 28px;
          }
        }

        /* Desktop: 32-36px */
        @media (min-width: 1200px) {
          .header-title {
            font-size: 34px;
          }
        }

        /* ============================================
           CONTENT CONTAINER
           Reduce section top/bottom padding on mobile
           Avoid excessive empty space
           ============================================ */
        .comparison-content {
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        /* Mobile: reduced vertical spacing, 18px horizontal */
        @media (max-width: 767px) {
          .comparison-content {
            padding: 40px 18px;
          }
        }

        /* Tablet: 72px vertical, 32px horizontal */
        @media (min-width: 768px) and (max-width: 1199px) {
          .comparison-content {
            padding: 64px 32px;
          }
        }

        /* Desktop: 96px vertical, max-width 1200px centered */
        @media (min-width: 1200px) {
          .comparison-content {
            padding: 88px 40px;
            max-width: 1200px;
            margin: 0 auto;
          }
        }

        /* ============================================
           DESKTOP & TABLET GRID LAYOUT
           Desktop: 3-column (labels + 2 cards)
           Tablet: reduce column width imbalance
           Hidden on mobile
           Smooth transition from 3-column → 2-column → stacked
           ============================================ */
        .comparison-grid-desktop {
          display: none;
        }

        /* Tablet & Desktop: Show grid */
        @media (min-width: 768px) {
          .comparison-grid-desktop {
            display: grid;
            gap: 24px;
            grid-template-columns: minmax(220px, 260px) repeat(var(--country-count, 2), 1fr);
            max-width: 100%;
          }
        }

        /* Tablet: reduce width imbalance, keep readable spacing */
        @media (min-width: 768px) and (max-width: 1199px) {
          .comparison-grid-desktop {
            gap: 20px;
            grid-template-columns: minmax(180px, 200px) repeat(var(--country-count, 2), 1fr);
          }
        }

        /* Desktop: standard layout with 220-260px labels */
        @media (min-width: 1200px) {
          .comparison-grid-desktop {
            gap: 24px;
            grid-template-columns: minmax(220px, 260px) repeat(var(--country-count, 2), 1fr);
          }
        }

        /* ============================================
           LABELS COLUMN
           Desktop width: 220-260px fixed
           Tablet: reduce width proportionally
           Mobile: labels become full width (handled by stacked layout)
           ============================================ */
        .labels-column {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 4px;
        }

        /* Tablet: reduce gap */
        @media (min-width: 768px) and (max-width: 1199px) {
          .labels-column {
            gap: 20px;
          }
        }

        /* ============================================
           LABELS SPACER
           ============================================ */
        .labels-spacer {
          margin-bottom: 16px;
          padding-bottom: 16px;
        }

        .spacer-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .spacer-icon {
          width: 40px;
          height: 40px;
        }

        .spacer-text-large {
          height: 20px;
        }

        .spacer-text-small {
          height: 16px;
        }

        /* ============================================
           LABEL ROW
           Maintain consistent vertical spacing
           Align label icons and text properly
           ============================================ */
        .label-row {
          height: 48px;
          display: flex;
          align-items: center;
        }

        /* Tablet: reduce height */
        @media (min-width: 768px) and (max-width: 1199px) {
          .label-row {
            height: 44px;
          }
        }

        .label-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .label-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid #4B6E48;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .label-icon-inner {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #4B6E48;
        }

        .label-text {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          color: #64748B;
          line-height: 1.4;
          word-break: break-word;
        }

        /* Tablet: smaller text */
        @media (min-width: 768px) and (max-width: 1199px) {
          .label-text {
            font-size: 13px;
          }
        }

        /* Desktop: standard text */
        @media (min-width: 1200px) {
          .label-text {
            font-size: 14px;
          }
        }

        /* ============================================
           COUNTRY CARD - DESKTOP
           Desktop: 2 equal-width cards, max-width 420-480px
           Tablet: maintain readable width, flexible
           Prevent card shrinking too much
           Keep cards centered within container
           ============================================ */
        .country-card-desktop {
          background-color: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          min-width: 240px;
          max-width: 100%;
        }

        /* Desktop: padding 32px */
        @media (min-width: 1200px) {
          .country-card-desktop {
            padding: 32px;
            gap: 24px;
            max-width: 480px;
          }
        }

        /* Tablet: padding 28px, prevent too narrow */
        @media (min-width: 768px) and (max-width: 1199px) {
          .country-card-desktop {
            padding: 28px;
            gap: 20px;
            min-width: 220px;
          }
        }

        /* ============================================
           COUNTRY HEADER (Flag + Country Name)
           Align flag and country name horizontally
           Prevent text wrapping into multiple lines
           Keep consistent spacing between header and values
           ============================================ */
        .country-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid #E2E8F0;
        }

        .country-code-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: white;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          flex-shrink: 0;
        }

        .country-code {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #4B6E48;
        }

        .country-info {
          min-width: 0;
          flex: 1;
        }

        .country-name {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          color: #0F172A;
          margin: 0;
          line-height: 1.3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Desktop */
        @media (min-width: 1200px) {
          .country-name {
            font-size: 14px;
          }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1199px) {
          .country-name {
            font-size: 13px;
          }
        }

        .country-label {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #64748B;
          margin: 0;
          line-height: 1.3;
        }

        /* ============================================
           VALUE ROW
           Maintain equal vertical rhythm between rows
           Ensure values align correctly across both country cards
           Keep consistent spacing between rows
           Desktop: 24px
           Tablet: 20px
           Mobile: 16px
           ============================================ */
        .value-row {
          height: 48px;
          display: flex;
          align-items: center;
        }

        /* Tablet: reduce height */
        @media (min-width: 768px) and (max-width: 1199px) {
          .value-row {
            height: 44px;
          }
        }

        /* ============================================
           TEXT & DATA VALUES
           Desktop font size: 16px
           Mobile: 14px
           Line-height: 1.5-1.6
           Prevent text overflow
           Ensure long values wrap properly
           Maintain clear hierarchy
           ============================================ */
        .value-text {
          font-family: 'Inter', sans-serif;
          color: #0F172A;
          font-weight: 400;
          line-height: 1.55;
          word-break: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }

        /* Desktop: 16px text */
        @media (min-width: 1200px) {
          .value-text {
            font-size: 14px;
            line-height: 1.5;
          }
        }

        /* Tablet: 14px text */
        @media (min-width: 768px) and (max-width: 1199px) {
          .value-text {
            font-size: 13px;
            line-height: 1.55;
          }
        }

        /* ============================================
           MOBILE STACKED LAYOUT
           Show only on mobile (≤767px)
           Stack layout vertically:
           - Section title
           - Labels
           - Country 1 card (full width)
           - Country 2 card (full width)
           Move labels above values
           Remove side-by-side layout
           No horizontal scrolling
           ============================================ */
        .comparison-stack-mobile {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* Hide on tablet & desktop */
        @media (min-width: 768px) {
          .comparison-stack-mobile {
            display: none;
          }
        }

        /* ============================================
           MOBILE LABELS SECTION
           Labels become full width, place above card content
           ============================================ */
        .mobile-labels {
          background-color: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 16px;
        }

        .mobile-section-title {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #0F172A;
          margin: 0 0 12px 0;
        }

        .mobile-label-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid #E2E8F0;
        }

        .mobile-label-item:last-child {
          border-bottom: none;
        }

        .mobile-label-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid #4B6E48;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mobile-label-icon-inner {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #4B6E48;
        }

        .mobile-label-text {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #64748B;
          line-height: 1.4;
        }

        /* ============================================
           MOBILE COUNTRY CARDS
           Mobile: 100% width, padding 20px
           Stack vertically, reduce vertical padding
           ============================================ */
        .country-card-mobile {
          background-color: white;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 20px;
          width: 100%;
          max-width: 100%;
        }

        .mobile-country-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #E2E8F0;
        }

        .mobile-country-code-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          flex-shrink: 0;
        }

        .mobile-country-code {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #4B6E48;
        }

        .mobile-country-name {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #0F172A;
          margin: 0;
          line-height: 1.3;
        }

        .mobile-country-label {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #64748B;
          margin: 0;
          line-height: 1.3;
        }

        /* ============================================
           MOBILE DATA GRID
           Mobile: 16px spacing between rows
           ============================================ */
        .mobile-data-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mobile-data-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 10px 0;
          border-bottom: 1px solid #F1F5F9;
        }

        .mobile-data-row:last-child {
          border-bottom: none;
        }

        .mobile-data-label {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #64748B;
          line-height: 1.4;
        }

        .mobile-data-value {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #0F172A;
          line-height: 1.5;
          word-break: break-word;
        }

        /* ============================================
           OVERFLOW & SCROLL FIX
           Prevent horizontal scroll
           Prevent content cut from right side
           Ensure full visibility of both country cards
           ============================================ */
        .comparison-section,
        .comparison-content,
        .comparison-grid-desktop,
        .comparison-stack-mobile {
          overflow-x: hidden;
          overflow-y: visible;
          max-width: 100%;
        }

        .country-card-desktop,
        .country-card-mobile {
          overflow-x: hidden;
          max-width: 100%;
        }

        /* ============================================
           ACCESSIBILITY
           ============================================ */
        .country-card-desktop:focus-within,
        .country-card-mobile:focus-within {
          outline: 2px solid #4B6E48;
          outline-offset: 2px;
        }

        /* ============================================
           MAINTAIN CONSISTENT SPACING BETWEEN SECTIONS
           ============================================ */
        @media (min-width: 768px) and (max-width: 1199px) {
          .comparison-section {
            min-height: auto;
          }
        }
      `}</style>
    </motion.div>
  );
}
