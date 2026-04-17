import { motion } from 'motion/react';

interface CompareTabsAndFiltersProps {
  activeTab: 'countries' | 'universities';
  setActiveTab: (tab: 'countries' | 'universities') => void;
}

export function CompareTabsAndFilters({
  activeTab,
  setActiveTab,
}: CompareTabsAndFiltersProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut", delay: 0.12 }}
      className="compare-tabs-section"
    >
      {/* Tabs Container */}
      <div className="tabs-container">
        {/* Segmented Control */}
        <div className="segmented-control">
          <button
            onClick={() => setActiveTab('countries')}
            className={`tab-button ${
              activeTab === 'countries' ? 'active' : ''
            }`}
          >
            Compare Countries
          </button>
          <button
            onClick={() => setActiveTab('universities')}
            className={`tab-button ${
              activeTab === 'universities' ? 'active' : ''
            }`}
          >
            Compare Universities
          </button>
        </div>
      </div>

      {/* Filter Pills / Chips */}
      <div className="filter-chips-container">
        <span className="filter-label">What changes if…</span>
        <button className="filter-chip">
          Budget under $20k/year
        </button>
        <button className="filter-chip">
          Prioritize post-study work
        </button>
        <button className="filter-chip">
          Clear PR pathway
        </button>
      </div>

      {/* Comprehensive Responsive Styles */}
      <style>{`
        /* ============================================
           SECTION CONTAINER
           ============================================ */
        .compare-tabs-section {
          margin-bottom: 32px;
        }

        /* Mobile: Reduce margin */
        @media (max-width: 767px) {
          .compare-tabs-section {
            margin-bottom: 20px;
          }
        }

        /* ============================================
           TABS CONTAINER
           ============================================ */
        .tabs-container {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
        }

        /* Mobile: Full width */
        @media (max-width: 767px) {
          .tabs-container {
            margin-bottom: 12px;
          }
        }

        /* ============================================
           SEGMENTED CONTROL
           Tabs inline on desktop, full-width on mobile
           ============================================ */
        .segmented-control {
          display: inline-flex;
          background-color: #F1F5F9;
          padding: 4px;
          border-radius: 10px;
        }

        /* Mobile (≤767px): Convert to full-width segmented control */
        @media (max-width: 767px) {
          .segmented-control {
            width: 100%;
            display: flex;
          }
        }

        /* Tablet & Desktop: Inline with auto width */
        @media (min-width: 768px) {
          .segmented-control {
            width: auto;
            display: inline-flex;
          }
        }

        /* ============================================
           TAB BUTTON
           ============================================ */
        .tab-button {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          border-radius: 8px;
          transition: all 0.18s ease;
          background: none;
          border: none;
          cursor: pointer;
          color: #64748B;
        }

        .tab-button:hover:not(.active) {
          color: #475569;
        }

        .tab-button.active {
          background-color: white;
          color: #0F172A;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        /* Mobile: Full width buttons, smaller text */
        @media (max-width: 767px) {
          .tab-button {
            flex: 1;
            padding: 10px 12px;
            font-size: 13px;
            white-space: nowrap;
          }
        }

        /* Tablet & Desktop: Auto width */
        @media (min-width: 768px) {
          .tab-button {
            padding: 10px 16px;
            font-size: 14px;
          }
        }

        /* ============================================
           FILTER CHIPS CONTAINER
           Chips wrap with 8-12px spacing on mobile
           ============================================ */
        .filter-chips-container {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
        }

        /* Mobile: 8-12px spacing */
        @media (max-width: 767px) {
          .filter-chips-container {
            gap: 10px;
          }
        }

        /* Tablet & Desktop: 12px spacing */
        @media (min-width: 768px) {
          .filter-chips-container {
            gap: 12px;
          }
        }

        /* ============================================
           FILTER LABEL
           ============================================ */
        .filter-label {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          color: #64748B;
          padding: 8px 0;
        }

        /* Mobile: Smaller text */
        @media (max-width: 767px) {
          .filter-label {
            font-size: 13px;
          }
        }

        /* Tablet & Desktop */
        @media (min-width: 768px) {
          .filter-label {
            font-size: 14px;
          }
        }

        /* Mobile: Optional - full width label on its own row */
        @media (max-width: 480px) {
          .filter-label {
            width: 100%;
          }
        }

        /* ============================================
           FILTER CHIP
           ============================================ */
        .filter-chip {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          color: #475569;
          background-color: white;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .filter-chip:hover {
          border-color: #CBD5E1;
          background-color: #F8FAFC;
        }

        /* Mobile: Smaller padding */
        @media (max-width: 767px) {
          .filter-chip {
            padding: 7px 14px;
            font-size: 12px;
          }
        }

        /* Tablet & Desktop */
        @media (min-width: 768px) {
          .filter-chip {
            padding: 8px 16px;
            font-size: 13px;
          }
        }

        /* ============================================
           FOCUS STATES - Accessibility
           ============================================ */
        .tab-button:focus-visible,
        .filter-chip:focus-visible {
          outline: 3px solid #4B6E48;
          outline-offset: 2px;
        }
      `}</style>
    </motion.div>
  );
}
