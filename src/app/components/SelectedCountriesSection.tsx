import { motion, AnimatePresence } from 'motion/react';
import { X, Pin, Plus } from 'lucide-react';

interface SelectedCountriesSectionProps {
  selectedCountries: string[];
  highlightDifferences: boolean;
  setHighlightDifferences: (value: boolean) => void;
  removeCountry: (country: string) => void;
  addCountry: (country: string) => void;
  availableCountries: Array<{ name: string; code: string }>;
  countryData: Record<string, { code?: string; recommendation?: string }>;
  showAddCountryDropdown: boolean;
  setShowAddCountryDropdown: (value: boolean) => void;
}

export function SelectedCountriesSection({
  selectedCountries,
  highlightDifferences,
  setHighlightDifferences,
  removeCountry,
  addCountry,
  availableCountries,
  countryData,
  showAddCountryDropdown,
  setShowAddCountryDropdown,
}: SelectedCountriesSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.24, ease: "easeOut", delay: 0.18 }}
      className="selected-countries-section"
    >
      {/* Header with Highlight Differences */}
      <div className="section-header">
        <h3 className="section-title">Selected Countries</h3>
        <label className="highlight-differences-label">
          <input
            type="checkbox"
            checked={highlightDifferences}
            onChange={(e) => setHighlightDifferences(e.target.checked)}
            className="checkbox-input"
          />
          <span className="highlight-text">
            Highlight Differences
            <span className="comparison-count">
              (Comparing {selectedCountries.length} of {availableCountries.length})
            </span>
          </span>
        </label>
      </div>

      {/* Country Cards Grid */}
      <div className="countries-grid">
        {selectedCountries.map((country, index) => {
          const data = countryData[country];
          return (
            <motion.div
              key={country}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.22 + index * 0.05 }}
              className="country-card"
            >
              {/* Remove Button */}
              <button
                onClick={() => removeCountry(country)}
                disabled={selectedCountries.length === 1}
                className={`remove-button ${
                  selectedCountries.length === 1 ? 'disabled' : ''
                }`}
              >
                <X className="w-4 h-4" />
              </button>

              {/* Country Code & Pin */}
              <div className="country-header">
                <div className="country-code-badge">
                  <span className="country-code">{data?.code || 'XX'}</span>
                </div>
                <Pin className="pin-icon" />
              </div>

              {/* Country Name */}
              <h4 className="country-name">{country}</h4>

              {/* Recommendation */}
              {data?.recommendation && (
                <p className="country-recommendation">{data.recommendation}</p>
              )}
            </motion.div>
          );
        })}

        {/* Add Country Card */}
        <div className="add-country-container">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
            onClick={() => setShowAddCountryDropdown(!showAddCountryDropdown)}
            className="add-country-button"
          >
            <Plus className="w-5 h-5" />
            Add Country
          </motion.button>

          <AnimatePresence>
            {showAddCountryDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="add-country-dropdown"
              >
                <div className="dropdown-content">
                  {availableCountries
                    .filter((c) => !selectedCountries.includes(c.name))
                    .map((country) => (
                      <button
                        key={country.name}
                        onClick={() => addCountry(country.name)}
                        className="dropdown-item"
                      >
                        <div className="dropdown-item-badge">
                          <span className="dropdown-item-code">{country.code}</span>
                        </div>
                        <span>{country.name}</span>
                      </button>
                    ))}
                  {availableCountries.filter((c) => !selectedCountries.includes(c.name)).length === 0 && (
                    <div className="dropdown-empty">
                      All countries added
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Comprehensive Responsive Styles */}
      <style>{`
        /* ============================================
           SECTION CONTAINER
           ============================================ */
        .selected-countries-section {
          background-color: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          margin-bottom: 24px;
        }

        /* Mobile (≤767px): Reduce padding to 16px */
        @media (max-width: 767px) {
          .selected-countries-section {
            padding: 16px;
            border-radius: 12px;
          }
        }

        /* Tablet (768-1199px): Slightly reduce padding */
        @media (min-width: 768px) and (max-width: 1199px) {
          .selected-countries-section {
            padding: 20px;
          }
        }

        /* Desktop (≥1200px): Standard padding */
        @media (min-width: 1200px) {
          .selected-countries-section {
            padding: 24px;
          }
        }

        /* ============================================
           SECTION HEADER
           Header switches from horizontal to vertical at ≤767px
           ============================================ */
        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Mobile (≤767px): Stack vertically, prevent awkward text wrapping */
        @media (max-width: 767px) {
          .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 16px;
          }
        }

        /* Tablet & Desktop: Horizontal layout */
        @media (min-width: 768px) {
          .section-header {
            flex-direction: row;
            margin-bottom: 20px;
          }
        }

        /* ============================================
           SECTION TITLE
           ============================================ */
        .section-title {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          color: #0F172A;
          margin: 0;
          line-height: 1.3;
        }

        /* Mobile */
        @media (max-width: 767px) {
          .section-title {
            font-size: 17px;
          }
        }

        /* Tablet & Desktop */
        @media (min-width: 768px) {
          .section-title {
            font-size: 18px;
          }
        }

        /* ============================================
           HIGHLIGHT DIFFERENCES LABEL
           ============================================ */
        .highlight-differences-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        /* Mobile: Full width */
        @media (max-width: 767px) {
          .highlight-differences-label {
            width: 100%;
          }
        }

        /* ============================================
           CHECKBOX INPUT
           ============================================ */
        .checkbox-input {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          border: 1px solid #CBD5E1;
          cursor: pointer;
          flex-shrink: 0;
        }

        .checkbox-input:checked {
          background-color: #4B6E48;
          border-color: #4B6E48;
        }

        /* ============================================
           HIGHLIGHT TEXT
           ============================================ */
        .highlight-text {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #475569;
          font-weight: 400;
          line-height: 1.5;
        }

        /* Mobile: Smaller text */
        @media (max-width: 767px) {
          .highlight-text {
            font-size: 13px;
          }
        }

        /* ============================================
           COMPARISON COUNT
           ============================================ */
        .comparison-count {
          margin-left: 4px;
          color: #94A3B8;
        }

        /* Mobile: Hide or simplify count text */
        @media (max-width: 480px) {
          .comparison-count {
            display: none;
          }
        }

        /* ============================================
           COUNTRIES GRID
           Responsive grid with proper breakpoints
           ============================================ */
        .countries-grid {
          display: grid;
          gap: 16px;
        }

        /* Mobile (≤767px): 1-column grid, all full width */
        @media (max-width: 767px) {
          .countries-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }

        /* Tablet (768-1199px): 2-column grid */
        @media (min-width: 768px) and (max-width: 1199px) {
          .countries-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        /* Desktop (≥1200px): 3-column grid */
        @media (min-width: 1200px) {
          .countries-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
        }

        /* ============================================
           COUNTRY CARD
           Fill container on mobile
           ============================================ */
        .country-card {
          position: relative;
          background-color: white;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          transition: box-shadow 0.3s ease;
        }

        .country-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        /* Mobile: Reduce card padding */
        @media (max-width: 767px) {
          .country-card {
            padding: 14px;
          }
        }

        /* Tablet & Desktop */
        @media (min-width: 768px) {
          .country-card {
            padding: 16px;
          }
        }

        /* ============================================
           REMOVE BUTTON
           ============================================ */
        .remove-button {
          position: absolute;
          top: 12px;
          right: 12px;
          color: #94A3B8;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s ease;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .remove-button:hover:not(.disabled) {
          color: #64748B;
        }

        .remove-button.disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        /* ============================================
           COUNTRY HEADER (Code + Pin)
           ============================================ */
        .country-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        /* ============================================
           COUNTRY CODE BADGE
           ============================================ */
        .country-code-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: #F1F5F9;
          border-radius: 8px;
          flex-shrink: 0;
        }

        .country-code {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #475569;
        }

        /* ============================================
           PIN ICON
           ============================================ */
        .pin-icon {
          width: 16px;
          height: 16px;
          color: #94A3B8;
          flex-shrink: 0;
        }

        /* ============================================
           COUNTRY NAME
           ============================================ */
        .country-name {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          color: #0F172A;
          margin: 0 0 8px 0;
          line-height: 1.3;
        }

        /* Mobile */
        @media (max-width: 767px) {
          .country-name {
            font-size: 15px;
          }
        }

        /* Tablet & Desktop */
        @media (min-width: 768px) {
          .country-name {
            font-size: 16px;
          }
        }

        /* ============================================
           COUNTRY RECOMMENDATION
           ============================================ */
        .country-recommendation {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #3B82F6;
          margin: 0;
          line-height: 1.5;
        }

        /* Mobile */
        @media (max-width: 767px) {
          .country-recommendation {
            font-size: 12px;
          }
        }

        /* ============================================
           ADD COUNTRY CONTAINER
           Always positioned last in grid
           ============================================ */
        .add-country-container {
          position: relative;
        }

        /* Tablet (2-column): Ensure proper positioning */
        @media (min-width: 768px) and (max-width: 1199px) {
          .add-country-container {
            /* Will naturally fall to the last position in grid */
          }
        }

        /* ============================================
           ADD COUNTRY BUTTON
           Full width on mobile
           ============================================ */
        .add-country-button {
          width: 100%;
          min-height: 140px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #4B6E48;
          background-color: transparent;
          border: 2px dashed #CBD5E1;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .add-country-button:hover {
          border-color: #4B6E48;
          background-color: #F0F7F0;
        }

        /* Mobile: Adjust min-height */
        @media (max-width: 767px) {
          .add-country-button {
            min-height: 120px;
            font-size: 13px;
          }
        }

        /* ============================================
           ADD COUNTRY DROPDOWN
           ============================================ */
        .add-country-dropdown {
          position: absolute;
          left: 0;
          top: 100%;
          margin-top: 8px;
          width: 256px;
          background-color: white;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          z-index: 50;
        }

        /* Mobile: Full width dropdown */
        @media (max-width: 767px) {
          .add-country-dropdown {
            width: 100%;
            left: 0;
            right: 0;
          }
        }

        /* ============================================
           DROPDOWN CONTENT
           ============================================ */
        .dropdown-content {
          padding: 8px;
        }

        /* ============================================
           DROPDOWN ITEM
           ============================================ */
        .dropdown-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          text-align: left;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #475569;
          background: none;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .dropdown-item:hover {
          background-color: #F8FAFC;
        }

        /* ============================================
           DROPDOWN ITEM BADGE
           ============================================ */
        .dropdown-item-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background-color: #F1F5F9;
          border-radius: 6px;
          flex-shrink: 0;
        }

        .dropdown-item-code {
          font-size: 12px;
          font-weight: 700;
          color: #475569;
        }

        /* ============================================
           DROPDOWN EMPTY STATE
           ============================================ */
        .dropdown-empty {
          padding: 10px 12px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #94A3B8;
        }

        /* ============================================
           FOCUS STATES - Accessibility
           ============================================ */
        .remove-button:focus-visible,
        .add-country-button:focus-visible,
        .dropdown-item:focus-visible {
          outline: 3px solid #4B6E48;
          outline-offset: 2px;
        }

        .checkbox-input:focus-visible {
          outline: 2px solid #4B6E48;
          outline-offset: 2px;
        }
      `}</style>
    </motion.div>
  );
}
