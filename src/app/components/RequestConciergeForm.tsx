import { useState } from 'react';
import { motion } from 'motion/react';
import { StandardButton } from '@/app/components/ui/standard-button';

export function RequestConciergeForm() {
  const [formData, setFormData] = useState({
    educationLevel: '',
    intendedIntake: '',
    preferredUniversities: '',
    budgetRange: '',
    supportAreas: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="request-concierge-form" className="request-concierge-section">
      <div className="request-concierge-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="request-concierge-header"
        >
          <h2 className="request-concierge-title">
            Request concierge support
          </h2>
          <p className="request-concierge-subtitle">
            Share your background and preferences so we can understand how to best support you
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="request-concierge-card"
        >
          <form onSubmit={handleSubmit} className="request-concierge-form">
            {/* Row 1: Education Level and Intended Intake */}
            <div className="form-fields-grid">
              {/* Current Education Level */}
              <div className="form-field">
                <label
                  htmlFor="educationLevel"
                  className="form-label"
                >
                  Current education level
                </label>
                <select
                  id="educationLevel"
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleChange}
                  className="form-select"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236B7280' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '12px',
                  }}
                >
                  <option value="" disabled>
                    Select level
                  </option>
                  <option value="high-school">High School</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="graduate">Graduate</option>
                  <option value="postgraduate">Postgraduate</option>
                </select>
              </div>

              {/* Intended Intake */}
              <div className="form-field">
                <label
                  htmlFor="intendedIntake"
                  className="form-label"
                >
                  Intended intake
                </label>
                <select
                  id="intendedIntake"
                  name="intendedIntake"
                  value={formData.intendedIntake}
                  onChange={handleChange}
                  className="form-select"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236B7280' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '12px',
                  }}
                >
                  <option value="" disabled>
                    Select intake
                  </option>
                  <option value="spring-2026">Spring 2026</option>
                  <option value="fall-2026">Fall 2026</option>
                  <option value="spring-2027">Spring 2027</option>
                  <option value="fall-2027">Fall 2027</option>
                </select>
              </div>
            </div>

            {/* Preferred Universities or Regions */}
            <div className="form-field">
              <label
                htmlFor="preferredUniversities"
                className="form-label"
              >
                Preferred universities or regions
              </label>
              <input
                type="text"
                id="preferredUniversities"
                name="preferredUniversities"
                value={formData.preferredUniversities}
                onChange={handleChange}
                placeholder="e.g., California, New York, or specific universities"
                className="form-input"
              />
            </div>

            {/* Budget Range */}
            <div className="form-field">
              <label
                htmlFor="budgetRange"
                className="form-label"
              >
                Budget range (annual)
              </label>
              <select
                id="budgetRange"
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="form-select"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236B7280' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '12px',
                }}
              >
                <option value="" disabled>
                  Select range
                </option>
                <option value="under-20k">Under $20,000</option>
                <option value="20k-40k">$20,000 - $40,000</option>
                <option value="40k-60k">$40,000 - $60,000</option>
                <option value="60k-80k">$60,000 - $80,000</option>
                <option value="above-80k">Above $80,000</option>
              </select>
            </div>

            {/* Areas Where You Need Support */}
            <div className="form-field">
              <label
                htmlFor="supportAreas"
                className="form-label"
              >
                Areas where you need support
              </label>
              <textarea
                id="supportAreas"
                name="supportAreas"
                value={formData.supportAreas}
                onChange={handleChange}
                rows={4}
                placeholder="Describe what aspects of planning you need help with (e.g., shortlisting, timeline, visa preparation)"
                className="form-textarea"
              />
            </div>

            {/* Submit Button Container */}
            <div className="form-cta-container">
              <StandardButton
                type="submit"
                className="form-submit-button"
              >
                Request Concierge Support
              </StandardButton>

              {/* Footer Text - directly under CTA */}
              <p className="form-footer-text">
                Requests are reviewed manually. You will receive a response within 2-3 business days.
              </p>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Comprehensive Mobile-First Responsive Styles */}
      <style>{`
        /* ============================================
           SECTION CONTAINER
           Mobile: Top padding increased to avoid navbar overlap
           ============================================ */
        .request-concierge-section {
          width: 100%;
          background-color: #FFFFFF;
          scroll-margin-top: 96px;
          position: relative;
        }

        /* Mobile (≤480px): 56px top padding (avoid navbar), 16px horizontal */
        @media (max-width: 480px) {
          .request-concierge-section {
            padding: 40px 16px 32px;
          }
        }

        /* Mobile Large (481-767px): standard padding */
        @media (min-width: 481px) and (max-width: 767px) {
          .request-concierge-section {
            padding: 48px 20px;
          }
        }

        /* Tablet (768-1199px): 32px horizontal padding */
        @media (min-width: 768px) and (max-width: 1199px) {
          .request-concierge-section {
            padding: 56px 32px;
          }
        }

        /* Desktop (≥1200px): centered container */
        @media (min-width: 1200px) {
          .request-concierge-section {
            padding: 64px 40px;
          }
        }

        /* ============================================
           CONTAINER WRAPPER
           Desktop: max-width 760px
           Tablet: 90% width
           Mobile: 100% width
           ============================================ */
        .request-concierge-container {
          margin: 0 auto;
          width: 100%;
        }

        /* Mobile: 100% width, Fill container */
        @media (max-width: 767px) {
          .request-concierge-container {
            max-width: 100%;
          }
        }

        /* Tablet: 90% width */
        @media (min-width: 768px) and (max-width: 1199px) {
          .request-concierge-container {
            max-width: 90%;
          }
        }

        /* Desktop: max-width 760px centered */
        @media (min-width: 1200px) {
          .request-concierge-container {
            max-width: 760px;
          }
        }

        /* ============================================
           SECTION HEADER
           ============================================ */
        .request-concierge-header {
          text-align: center;
        }

        /* Mobile: 28px bottom margin */
        @media (max-width: 480px) {
          .request-concierge-header {
            margin-bottom: 28px;
          }
        }

        /* Mobile Large: 32px bottom margin */
        @media (min-width: 481px) and (max-width: 767px) {
          .request-concierge-header {
            margin-bottom: 32px;
          }
        }

        /* Tablet & Desktop: 48px bottom margin */
        @media (min-width: 768px) {
          .request-concierge-header {
            margin-bottom: 48px;
          }
        }

        /* ============================================
           TITLE
           ============================================ */
        .request-concierge-title {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.2;
          margin: 0;
        }

        /* Mobile (≤480px): 24px */
        @media (max-width: 480px) {
          .request-concierge-title {
            font-size: 24px;
            margin-bottom: 12px;
          }
        }

        /* Mobile Large (481-767px): 28px */
        @media (min-width: 481px) and (max-width: 767px) {
          .request-concierge-title {
            font-size: 28px;
            margin-bottom: 14px;
          }
        }

        /* Tablet (768-1199px): 32px */
        @media (min-width: 768px) and (max-width: 1199px) {
          .request-concierge-title {
            font-size: 32px;
            margin-bottom: 16px;
          }
        }

        /* Desktop (≥1200px): 36px */
        @media (min-width: 1200px) {
          .request-concierge-title {
            font-size: 36px;
            margin-bottom: 16px;
          }
        }

        /* ============================================
           SUBTITLE
           ============================================ */
        .request-concierge-subtitle {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 400;
          color: #64748B;
          line-height: 1.6;
          margin: 0 auto;
        }

        /* Mobile (≤480px): 15px */
        @media (max-width: 480px) {
          .request-concierge-subtitle {
            font-size: 15px;
            max-width: 100%;
          }
        }

        /* Mobile Large & Tablet: 16px */
        @media (min-width: 481px) and (max-width: 1199px) {
          .request-concierge-subtitle {
            font-size: 16px;
            max-width: 95%;
          }
        }

        /* Desktop: 18px */
        @media (min-width: 1200px) {
          .request-concierge-subtitle {
            font-size: 18px;
            max-width: 700px;
          }
        }

        /* ============================================
           FORM CARD
           Mobile (≤480px): Card width 100%, Horizontal padding 16px
           Tablet (768-1199px): Card width 90%, Reduce vertical padding
           Desktop (≥1200px): Center aligned, Max-width 760px
           ============================================ */
        .request-concierge-card {
          width: 100%;
          background-color: #FFFFFF;
          border: 1px solid #E5E7EB;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        }

        /* Mobile (≤480px): 16px padding, 12px radius */
        @media (max-width: 480px) {
          .request-concierge-card {
            padding: 20px 16px;
            border-radius: 12px;
          }
        }

        /* Mobile Large (481-767px): 24px padding, 14px radius */
        @media (min-width: 481px) and (max-width: 767px) {
          .request-concierge-card {
            padding: 28px 24px;
            border-radius: 14px;
          }
        }

        /* Tablet (768-1199px): 32px padding, 16px radius, reduced vertical padding */
        @media (min-width: 768px) and (max-width: 1199px) {
          .request-concierge-card {
            padding: 32px;
            border-radius: 16px;
          }
        }

        /* Desktop (≥1200px): 40px padding, 16px radius */
        @media (min-width: 1200px) {
          .request-concierge-card {
            padding: 40px;
            border-radius: 16px;
          }
        }

        /* ============================================
           FORM
           Vertical stack layout
           Improve vertical rhythm between fields
           ============================================ */
        .request-concierge-form {
          display: flex;
          flex-direction: column;
        }

        /* Mobile: 20px gap */
        @media (max-width: 480px) {
          .request-concierge-form {
            gap: 20px;
          }
        }

        /* Mobile Large: 22px gap */
        @media (min-width: 481px) and (max-width: 767px) {
          .request-concierge-form {
            gap: 22px;
          }
        }

        /* Tablet & Desktop: 24px gap */
        @media (min-width: 768px) {
          .request-concierge-form {
            gap: 24px;
          }
        }

        /* ============================================
           FORM FIELDS GRID
           Desktop (≥1200px): Two-column grid for education + intake
           Tablet (768-1199px): Convert all fields to single column
           Mobile (≤480px): All inputs full width, single column
           ============================================ */
        .form-fields-grid {
          display: grid;
          width: 100%;
        }

        /* Mobile & Tablet: Single column */
        @media (max-width: 1199px) {
          .form-fields-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        /* Desktop: Two columns for education + intake */
        @media (min-width: 1200px) {
          .form-fields-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
        }

        /* ============================================
           FORM FIELD
           Labels stacked above inputs
           ============================================ */
        .form-field {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        /* ============================================
           FORM LABEL
           ============================================ */
        .form-label {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 500;
          color: #0F172A;
          display: block;
        }

        /* Mobile: 14px, 8px bottom margin */
        @media (max-width: 480px) {
          .form-label {
            font-size: 14px;
            margin-bottom: 8px;
          }
        }

        /* Mobile Large & up: 14px, 8px bottom margin */
        @media (min-width: 481px) {
          .form-label {
            font-size: 14px;
            margin-bottom: 8px;
          }
        }

        /* ============================================
           FORM INPUTS (SELECT & TEXT INPUT)
           Inputs height: 44px
           Mobile: Input min height 44px, Full width
           Prevent placeholder truncation
           ============================================ */
        .form-select,
        .form-input {
          width: 100%;
          min-height: 44px;
          height: 44px;
          padding: 0 16px;
          background-color: rgba(243, 244, 246, 0.5);
          border: 1px solid #E5E7EB;
          border-radius: 8px;
          color: #0F172A;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 15px;
          transition: all 0.2s ease;
          appearance: none;
        }

        .form-select {
          cursor: pointer;
          padding-right: 40px; /* Space for dropdown arrow */
        }

        .form-input::placeholder {
          color: #9CA3AF;
          opacity: 1;
        }

        .form-select:hover,
        .form-input:hover {
          background-color: rgba(243, 244, 246, 1);
        }

        .form-select:focus,
        .form-input:focus {
          outline: none;
          ring: 2px;
          ring-color: #4B6E48;
          border-color: transparent;
        }

        /* Mobile: Prevent text overflow */
        @media (max-width: 480px) {
          .form-select,
          .form-input {
            font-size: 15px;
            line-height: 1.4;
          }
        }

        /* ============================================
           FORM TEXTAREA
           Mobile: Textarea min height 96px
           Prevent placeholder truncation
           ============================================ */
        .form-textarea {
          width: 100%;
          min-height: 96px;
          padding: 12px 16px;
          background-color: rgba(243, 244, 246, 0.5);
          border: 1px solid #E5E7EB;
          border-radius: 8px;
          color: #0F172A;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 15px;
          line-height: 1.6;
          resize: vertical;
          transition: all 0.2s ease;
        }

        .form-textarea::placeholder {
          color: #9CA3AF;
          opacity: 1;
        }

        .form-textarea:hover {
          background-color: rgba(243, 244, 246, 1);
        }

        .form-textarea:focus {
          outline: none;
          ring: 2px;
          ring-color: #4B6E48;
          border-color: transparent;
        }

        /* ============================================
           CTA CONTAINER
           Mobile: Add 16px spacing above CTA
           Helper text placed directly under CTA
           ============================================ */
        .form-cta-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        /* Mobile: 24px top margin, 12px gap */
        @media (max-width: 480px) {
          .form-cta-container {
            margin-top: 24px;
            gap: 12px;
          }
        }

        /* Mobile Large & up: 28px top margin, 16px gap */
        @media (min-width: 481px) {
          .form-cta-container {
            margin-top: 28px;
            gap: 16px;
          }
        }

        /* ============================================
           SUBMIT BUTTON
           Mobile: CTA button full width
           Desktop: CTA centered, fixed width
           ============================================ */
        .form-submit-button {
          /* Mobile: full width */
        }

        @media (max-width: 767px) {
          .form-submit-button {
            width: 100% !important;
          }
        }

        /* Tablet: max-width 400px */
        @media (min-width: 768px) and (max-width: 1199px) {
          .form-submit-button {
            width: 100% !important;
            max-width: 400px;
          }
        }

        /* Desktop: fixed width 320px */
        @media (min-width: 1200px) {
          .form-submit-button {
            width: 320px !important;
          }
        }

        /* ============================================
           FOOTER TEXT
           Helper text placed directly under CTA
           ============================================ */
        .form-footer-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #6B7280;
          text-align: center;
          margin: 0;
          line-height: 1.5;
        }

        /* Mobile: 13px */
        @media (max-width: 480px) {
          .form-footer-text {
            font-size: 13px;
          }
        }

        /* Mobile Large & up: 14px */
        @media (min-width: 481px) {
          .form-footer-text {
            font-size: 14px;
          }
        }

        /* ============================================
           OVERALL BEHAVIOR
           Prevent horizontal overflow
           Smooth transitions
           Mobile-first design
           ============================================ */
        
        .request-concierge-section,
        .request-concierge-container,
        .request-concierge-card {
          overflow-x: hidden;
          max-width: 100%;
        }

        .form-select,
        .form-input,
        .form-textarea {
          transition: all 0.2s ease;
        }
      `}</style>
    </div>
  );
}