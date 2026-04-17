import { motion } from 'motion/react';
import { DollarSign } from 'lucide-react';

interface CostsComparisonSectionProps {
  selectedCountries: string[];
  countryData: Record<string, { code: string; recommendation: string }>;
  comparisonData: Record<string, Record<string, Record<string, string>>>;
}

export function CostsComparisonSection({
  selectedCountries,
  countryData,
  comparisonData,
}: CostsComparisonSectionProps) {
  const costLabels = [
    'Tuition Range (Annual)',
    'Living Costs (Annual)',
    'Total Cost Range',
    'Health Insurance'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className="costs-comparison-section"
    >
      {/* Header */}
      <div className="costs-header">
        <div className="header-icon">
          <DollarSign className="icon" />
        </div>
        <h3 className="header-title">Costs</h3>
      </div>

      {/* Comparison Content */}
      <div className="costs-content">
        {/* Desktop & Tablet: Grid Layout */}
        <div className="costs-grid-desktop">
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
            {costLabels.map((label, index) => (
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
                    {data?.['Costs']?.['Tuition Range (Annual)'] || 'N/A'}
                  </span>
                </div>

                <div className="value-row">
                  <span className="value-text">
                    {data?.['Costs']?.['Living Costs (Annual)'] || 'N/A'}
                  </span>
                </div>

                <div className="value-row">
                  <span className="value-text">
                    {data?.['Costs']?.['Total Cost Range'] || 'N/A'}
                  </span>
                </div>

                <div className="value-row">
                  <span className="value-text">
                    {data?.['Costs']?.['Health Insurance'] || 'N/A'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: Stacked Layout */}
        <div className="costs-stack-mobile">
          {/* Labels First */}
          <div className="mobile-labels">
            <h4 className="mobile-section-title">Cost Categories</h4>
            {costLabels.map((label, index) => (
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

                {/* Cost Data */}
                <div className="mobile-data-grid">
                  {costLabels.map((label, index) => (
                    <div key={index} className="mobile-data-row">
                      <span className="mobile-data-label">{label}</span>
                      <span className="mobile-data-value">
                        {data?.['Costs']?.[label] || 'N/A'}
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
        .costs-comparison-section {
          background-color: white;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          margin-top: 32px;
        }

        /* ============================================
           HEADER
           ============================================ */
        .costs-header {
          background-color: #F8FAFC;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border-bottom: 1px solid #E2E8F0;
        }

        /* Mobile: Reduce padding */
        @media (max-width: 767px) {
          .costs-header {
            padding: 20px 16px;
          }
        }

        /* Tablet: Medium padding */
        @media (min-width: 768px) and (max-width: 1199px) {
          .costs-header {
            padding: 24px 32px;
          }
        }

        /* Desktop: Standard padding */
        @media (min-width: 1200px) {
          .costs-header {
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
           ============================================ */
        .header-title {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          color: #0F172A;
          margin: 0;
        }

        /* Mobile */
        @media (max-width: 767px) {
          .header-title {
            font-size: 18px;
          }
        }

        /* Tablet & Desktop */
        @media (min-width: 768px) {
          .header-title {
            font-size: 20px;
          }
        }

        /* ============================================
           CONTENT CONTAINER
           Desktop: max-width 1200px centered, 96px padding
           Tablet: 100% width, 32px padding, 72px vertical
           Mobile: 16-20px padding, 48px vertical
           ============================================ */
        .costs-content {
          width: 100%;
        }

        /* Mobile: 48px vertical, 18px horizontal */
        @media (max-width: 767px) {
          .costs-content {
            padding: 48px 18px;
          }
        }

        /* Tablet: 72px vertical, 32px horizontal */
        @media (min-width: 768px) and (max-width: 1199px) {
          .costs-content {
            padding: 72px 32px;
          }
        }

        /* Desktop: 96px vertical, max-width 1200px centered */
        @media (min-width: 1200px) {
          .costs-content {
            padding: 96px 40px;
            max-width: 1200px;
            margin: 0 auto;
          }
        }

        /* ============================================
           DESKTOP & TABLET GRID LAYOUT
           Desktop: 3-column layout (labels + 2 country cards)
           Tablet: reduce gap, scale cards proportionally
           Hidden on mobile
           ============================================ */
        .costs-grid-desktop {
          display: none;
        }

        /* Tablet & Desktop: Show grid */
        @media (min-width: 768px) {
          .costs-grid-desktop {
            display: grid;
            gap: 24px;
            grid-template-columns: 200px repeat(var(--country-count, 2), 1fr);
          }
        }

        /* Tablet: Reduce gap */
        @media (min-width: 768px) and (max-width: 1199px) {
          .costs-grid-desktop {
            gap: 20px;
            grid-template-columns: 180px repeat(var(--country-count, 2), 1fr);
          }
        }

        /* Desktop: Standard gap */
        @media (min-width: 1200px) {
          .costs-grid-desktop {
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

        /* Tablet: Smaller text */
        @media (min-width: 768px) and (max-width: 1199px) {
          .label-text {
            font-size: 13px;
          }
        }

        /* Desktop: Standard text */
        @media (min-width: 1200px) {
          .label-text {
            font-size: 14px;
          }
        }

        /* ============================================
           COUNTRY CARD - DESKTOP
           Prevent extremely narrow cards
           Maintain equal card width
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

        /* Tablet: Reduce padding */
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

        /* Desktop: 16px */
        @media (min-width: 1200px) {
          .country-name {
            font-size: 14px;
          }
        }

        /* Tablet: 14px */
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
           Consistent alignment for all cost data
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
           Labels first, then country cards below
           ============================================ */
        .costs-stack-mobile {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Hide on tablet & desktop */
        @media (min-width: 768px) {
          .costs-stack-mobile {
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
      `}</style>
    </motion.div>
  );
}
