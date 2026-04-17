import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

interface BasicInformationSectionProps {
  selectedCountries: string[];
  countryData: Record<string, { code: string; recommendation: string }>;
  comparisonData: Record<string, Record<string, Record<string, string>>>;
}

export function BasicInformationSection({
  selectedCountries,
  countryData,
  comparisonData,
}: BasicInformationSectionProps) {
  const infoLabels = [
    'Capital City',
    'Official Language(s)',
    'Climate',
    'Safety Rating'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className="basic-info-section"
    >
      {/* Header */}
      <div className="basic-info-header">
        <div className="header-icon">
          <Globe className="icon" />
        </div>
        <h3 className="header-title">Basic Information</h3>
      </div>

      {/* Comparison Content */}
      <div className="basic-info-content">
        {/* Desktop & Tablet: Grid Layout */}
        <div className="basic-info-grid-desktop">
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
            {infoLabels.map((label, index) => (
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
                  <div>
                    <h4 className="country-name">{country}</h4>
                    <p className="country-label">Country</p>
                  </div>
                </div>

                {/* Values */}
                <div className="value-row">
                  <span className="value-text">
                    {data?.['Basic Information']?.['Capital City'] || 'N/A'}
                  </span>
                </div>

                <div className="value-row">
                  <span className="value-text">
                    {data?.['Basic Information']?.['Official Language(s)'] || 'N/A'}
                  </span>
                </div>

                <div className="value-row">
                  <span className="value-text">
                    {data?.['Basic Information']?.['Climate'] || 'N/A'}
                  </span>
                </div>

                <div className="value-row">
                  <span className="value-text">
                    {data?.['Basic Information']?.['Safety Rating'] || 'N/A'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: Stacked Layout */}
        <div className="basic-info-stack-mobile">
          {/* Labels First */}
          <div className="mobile-labels">
            <h4 className="mobile-section-title">Information Categories</h4>
            {infoLabels.map((label, index) => (
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

                {/* Information Data */}
                <div className="mobile-data-grid">
                  {infoLabels.map((label, index) => (
                    <div key={index} className="mobile-data-row">
                      <span className="mobile-data-label">{label}</span>
                      <span className="mobile-data-value">
                        {data?.['Basic Information']?.[label] || 'N/A'}
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
           ============================================ */
        .basic-info-section {
          background-color: white;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        /* ============================================
           HEADER
           ============================================ */
        .basic-info-header {
          background-color: #F8FAFC;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border-bottom: 1px solid #E2E8F0;
        }

        /* Mobile: Reduce padding, 24px heading */
        @media (max-width: 767px) {
          .basic-info-header {
            padding: 20px 16px;
          }
        }

        /* Tablet: Medium padding, 28px heading */
        @media (min-width: 768px) and (max-width: 1199px) {
          .basic-info-header {
            padding: 24px 32px;
          }
        }

        /* Desktop: Standard padding, 32px heading */
        @media (min-width: 1200px) {
          .basic-info-header {
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
        }

        .icon {
          width: 20px;
          height: 20px;
        }

        /* ============================================
           HEADER TITLE
           Heading: 32px desktop → 24px mobile
           ============================================ */
        .header-title {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          color: #0F172A;
          margin: 0;
          line-height: 1.2;
        }

        /* Mobile: 24px */
        @media (max-width: 767px) {
          .header-title {
            font-size: 24px;
          }
        }

        /* Tablet: 28px */
        @media (min-width: 768px) and (max-width: 1199px) {
          .header-title {
            font-size: 28px;
          }
        }

        /* Desktop: 32px */
        @media (min-width: 1200px) {
          .header-title {
            font-size: 32px;
          }
        }

        /* ============================================
           CONTENT CONTAINER
           Desktop: max-width 1200px centered, 96px padding
           Tablet: 100% width, 32px padding, 72px vertical
           Mobile: 16-20px padding, 48px vertical
           ============================================ */
        .basic-info-content {
          width: 100%;
        }

        /* Mobile: 48px vertical, 18px horizontal */
        @media (max-width: 767px) {
          .basic-info-content {
            padding: 48px 18px;
          }
        }

        /* Tablet: 72px vertical, 32px horizontal */
        @media (min-width: 768px) and (max-width: 1199px) {
          .basic-info-content {
            padding: 72px 32px;
          }
        }

        /* Desktop: 96px vertical, max-width 1200px centered */
        @media (min-width: 1200px) {
          .basic-info-content {
            padding: 96px 40px;
            max-width: 1200px;
            margin: 0 auto;
          }
        }

        /* ============================================
           DESKTOP & TABLET GRID LAYOUT
           Desktop: 3-column layout (labels + 2 country cards)
           Tablet: reduce gap, adjust card width
           Hidden on mobile
           ============================================ */
        .basic-info-grid-desktop {
          display: none;
        }

        /* Tablet & Desktop: Show grid */
        @media (min-width: 768px) {
          .basic-info-grid-desktop {
            display: grid;
            gap: 24px;
            grid-template-columns: 200px repeat(var(--country-count, 2), 1fr);
          }
        }

        /* Tablet: Reduce gap, adjust card width */
        @media (min-width: 768px) and (max-width: 1199px) {
          .basic-info-grid-desktop {
            gap: 20px;
            grid-template-columns: 180px repeat(var(--country-count, 2), 1fr);
          }
        }

        /* Desktop: Standard gap */
        @media (min-width: 1200px) {
          .basic-info-grid-desktop {
            gap: 24px;
            grid-template-columns: 200px repeat(var(--country-count, 2), 1fr);
          }
        }

        /* ============================================
           LABELS COLUMN
           ============================================ */
        .labels-column {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 4px;
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
           Keep equal row height
           ============================================ */
        .label-row {
          height: 48px;
          display: flex;
          align-items: center;
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
        }

        /* Tablet: 14px text */
        @media (min-width: 768px) and (max-width: 1199px) {
          .label-text {
            font-size: 13px;
          }
        }

        /* Desktop: 16px text */
        @media (min-width: 1200px) {
          .label-text {
            font-size: 14px;
          }
        }

        /* ============================================
           COUNTRY CARD - DESKTOP
           Prevent cards from becoming too narrow on tablet
           Desktop: equal width
           Maintain consistent spacing between cards
           ============================================ */
        .country-card-desktop {
          background-color: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          min-width: 240px;
        }

        /* Tablet: Reduce padding, prevent narrow cards */
        @media (min-width: 768px) and (max-width: 1199px) {
          .country-card-desktop {
            padding: 20px;
            gap: 20px;
            min-width: 220px;
          }
        }

        /* ============================================
           COUNTRY HEADER
           ============================================ */
        .country-header {
          display: flex;
          align-items: center;
          gap: 8px;
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

        .country-name {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          color: #0F172A;
          margin: 0;
          line-height: 1.3;
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
           Ensure label → value alignment stays readable
           Prevent text breaking into too many lines
           Keep equal row height
           ============================================ */
        .value-row {
          height: 48px;
          display: flex;
          align-items: center;
        }

        .value-text {
          font-family: 'Inter', sans-serif;
          color: #0F172A;
          font-weight: 400;
          line-height: 1.5;
          word-break: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }

        /* Desktop: 16px text */
        @media (min-width: 1200px) {
          .value-text {
            font-size: 14px;
          }
        }

        /* Tablet: 14px text */
        @media (min-width: 768px) and (max-width: 1199px) {
          .value-text {
            font-size: 13px;
          }
        }

        /* ============================================
           MOBILE STACKED LAYOUT
           Show only on mobile (≤767px)
           Labels on top, then country cards below
           Mobile: full width stacked
           ============================================ */
        .basic-info-stack-mobile {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Hide on tablet & desktop */
        @media (min-width: 768px) {
          .basic-info-stack-mobile {
            display: none;
          }
        }

        /* ============================================
           MOBILE LABELS SECTION
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
           ============================================ */
        .country-card-mobile {
          background-color: white;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 16px;
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
           Text: 14px mobile
           Maintain readable line-height
           ============================================ */
        .mobile-data-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
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
           REDUCE EXTRA BLANK SPACE
           ============================================ */
        @media (min-width: 768px) and (max-width: 1199px) {
          .basic-info-section {
            min-height: auto;
          }
        }
      `}</style>
    </motion.div>
  );
}
