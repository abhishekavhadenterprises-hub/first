import { useParams, Link, useNavigate } from 'react-router';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { bankProviders } from '@/app/components/BankProvidersSection';
import { 
  ArrowLeft, 
  Building2, 
  DollarSign, 
  CheckCircle, 
  FileText, 
  Award,
  Globe,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { motion } from 'motion/react';

export default function BankDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const bank = bankProviders.find(b => b.id === id);

  if (!bank) {
    return (
      <div className="relative min-h-screen bg-white">
        <Navigation />
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">Bank Not Found</h1>
          <p className="text-gray-600 mb-8">The banking provider you're looking for doesn't exist.</p>
          <Link to="/services/banks" className="text-[#4B6E48] hover:underline">
            ← Back to All Banks
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white">
      <Navigation />

      {/* Header Section */}
      <div className="bank-detail-header">
        <div className="bank-detail-header-container">
          <button 
            onClick={() => navigate(-1)}
            className="bank-back-button"
          >
            <ArrowLeft className="bank-back-icon" />
            Back to Banks
          </button>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bank-detail-hero"
          >
            <div className="bank-detail-hero-content">
              <div className="bank-detail-logo-wrapper">
                <img 
                  src={bank.logo} 
                  alt={bank.name}
                  className="bank-detail-logo"
                />
              </div>

              <div className="bank-detail-hero-text">
                <h1 className="bank-detail-title">{bank.name}</h1>
                <div className="bank-detail-meta">
                  <div className="bank-detail-meta-item">
                    <Building2 className="bank-detail-meta-icon" />
                    <span>{bank.accountType}</span>
                  </div>
                  <div className="bank-detail-rating-badge">
                    <span className="bank-detail-rating-star">⭐</span>
                    <span className="bank-detail-rating-text">{bank.rating}/5</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <main className="bank-detail-main">
        <div className="bank-detail-container">
          <div className="bank-detail-grid">
            {/* Left Column - Main Info */}
            <div className="bank-detail-left">
              {/* Overview */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bank-detail-section"
              >
                <h2 className="bank-detail-section-title">Account Overview</h2>
                <p className="bank-detail-overview-text">
                  {bank.name} offers a comprehensive banking solution designed specifically for students. 
                  With competitive fees and robust features, this account provides everything you need to 
                  manage your finances effectively during your studies.
                </p>
              </motion.section>

              {/* Key Features */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bank-detail-section"
              >
                <h2 className="bank-detail-section-title">What They Offer</h2>
                <div className="bank-detail-features-list">
                  {bank.features.map((feature, index) => (
                    <div key={index} className="bank-detail-feature-item">
                      <CheckCircle className="bank-detail-feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Additional Benefits */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bank-detail-section"
              >
                <h2 className="bank-detail-section-title">Additional Benefits</h2>
                <div className="bank-detail-features-list">
                  {bank.benefits.map((benefit, index) => (
                    <div key={index} className="bank-detail-feature-item">
                      <Award className="bank-detail-benefit-icon" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Requirements */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bank-detail-section"
              >
                <h2 className="bank-detail-section-title">Documents Required</h2>
                <div className="bank-detail-requirements-list">
                  {bank.requirements.map((requirement, index) => (
                    <div key={index} className="bank-detail-requirement-item">
                      <FileText className="bank-detail-requirement-icon" />
                      <span>{requirement}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Right Column - Sidebar */}
            <div className="bank-detail-right">
              {/* Pricing Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bank-detail-sidebar-card"
              >
                <h3 className="bank-detail-sidebar-title">Monthly Fee</h3>
                <div className="bank-detail-price-box">
                  <DollarSign className="bank-detail-price-icon" />
                  <div>
                    <div className="bank-detail-price-label">Account Fee</div>
                    <div className="bank-detail-price-value">{bank.monthlyFee}</div>
                  </div>
                </div>

                <button className="bank-detail-apply-button">
                  Open Account Online
                </button>

                <div className="bank-detail-contact-info">
                  <div className="bank-detail-contact-item">
                    <Phone className="bank-detail-contact-icon" />
                    <span>1-800-BANKING</span>
                  </div>
                  <div className="bank-detail-contact-item">
                    <Mail className="bank-detail-contact-icon" />
                    <span>support@bank.com</span>
                  </div>
                  <div className="bank-detail-contact-item">
                    <Globe className="bank-detail-contact-icon" />
                    <span>Visit Website</span>
                  </div>
                </div>
              </motion.div>

              {/* Quick Info Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bank-detail-sidebar-card"
              >
                <h3 className="bank-detail-sidebar-title">Quick Info</h3>
                <div className="bank-detail-quick-info">
                  <div className="bank-detail-quick-item">
                    <span className="bank-detail-quick-label">Account Type</span>
                    <span className="bank-detail-quick-value">{bank.accountType}</span>
                  </div>
                  <div className="bank-detail-quick-item">
                    <span className="bank-detail-quick-label">Monthly Fee</span>
                    <span className="bank-detail-quick-value">{bank.monthlyFee}</span>
                  </div>
                  <div className="bank-detail-quick-item">
                    <span className="bank-detail-quick-label">Minimum Balance</span>
                    <span className="bank-detail-quick-value">Varies by account</span>
                  </div>
                  <div className="bank-detail-quick-item">
                    <span className="bank-detail-quick-label">Customer Rating</span>
                    <span className="bank-detail-quick-value">⭐ {bank.rating}/5</span>
                  </div>
                </div>
              </motion.div>

              {/* Help Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bank-detail-help-card"
              >
                <h3 className="bank-detail-help-title">Need Help?</h3>
                <p className="bank-detail-help-text">
                  Our banking advisors are here to help you choose the right account for your needs.
                </p>
                <button className="bank-detail-help-button">
                  Contact Support
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        /* ============================================
           HEADER SECTION
           ============================================ */
        .bank-detail-header {
          background: linear-gradient(135deg, #4B6E48 0%, #3d5a3a 100%);
          padding: 120px 24px 80px;
        }

        @media (max-width: 767px) {
          .bank-detail-header {
            padding: 100px 18px 60px;
          }
        }

        .bank-detail-header-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .bank-back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.9);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 14px;
          background: none;
          border: none;
          cursor: pointer;
          margin-bottom: 32px;
          padding: 8px 0;
          transition: color 0.2s ease;
        }

        .bank-back-button:hover {
          color: #FFFFFF;
        }

        .bank-back-icon {
          width: 18px;
          height: 18px;
        }

        .bank-detail-hero {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 40px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 767px) {
          .bank-detail-hero {
            padding: 24px;
          }
        }

        .bank-detail-hero-content {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        @media (max-width: 767px) {
          .bank-detail-hero-content {
            flex-direction: column;
            text-align: center;
            gap: 24px;
          }
        }

        .bank-detail-logo-wrapper {
          width: 120px;
          height: 120px;
          border-radius: 12px;
          overflow: hidden;
          background: #FFFFFF;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 767px) {
          .bank-detail-logo-wrapper {
            width: 100px;
            height: 100px;
          }
        }

        .bank-detail-logo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .bank-detail-hero-text {
          flex: 1;
        }

        .bank-detail-title {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 36px;
          font-weight: 600;
          color: #FFFFFF;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }

        @media (max-width: 1199px) {
          .bank-detail-title {
            font-size: 28px;
          }
        }

        @media (max-width: 767px) {
          .bank-detail-title {
            font-size: 24px;
          }
        }

        .bank-detail-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        @media (max-width: 767px) {
          .bank-detail-meta {
            justify-content: center;
          }
        }

        .bank-detail-meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.9);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 15px;
        }

        .bank-detail-meta-icon {
          width: 18px;
          height: 18px;
        }

        .bank-detail-rating-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.2);
          padding: 6px 12px;
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }

        .bank-detail-rating-star {
          font-size: 14px;
        }

        .bank-detail-rating-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #FFFFFF;
        }

        /* ============================================
           MAIN CONTENT
           ============================================ */
        .bank-detail-main {
          background: #FFFFFF;
          padding: 80px 24px;
        }

        @media (max-width: 767px) {
          .bank-detail-main {
            padding: 60px 18px;
          }
        }

        .bank-detail-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .bank-detail-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 48px;
        }

        @media (max-width: 1023px) {
          .bank-detail-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        /* ============================================
           LEFT COLUMN SECTIONS
           ============================================ */
        .bank-detail-left {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .bank-detail-section {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 32px;
          border: 1px solid #E5E7EB;
        }

        @media (max-width: 767px) {
          .bank-detail-section {
            padding: 24px;
          }
        }

        .bank-detail-section-title {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 22px;
          font-weight: 600;
          color: #111827;
          margin: 0 0 20px 0;
        }

        @media (max-width: 767px) {
          .bank-detail-section-title {
            font-size: 19px;
          }
        }

        .bank-detail-overview-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 16px;
          color: #4B5563;
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 767px) {
          .bank-detail-overview-text {
            font-size: 15px;
          }
        }

        /* Features List */
        .bank-detail-features-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .bank-detail-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px;
          background: #F9FAFB;
          border-radius: 8px;
        }

        .bank-detail-feature-icon {
          width: 20px;
          height: 20px;
          color: #10B981;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .bank-detail-benefit-icon {
          width: 20px;
          height: 20px;
          color: #3B82F6;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .bank-detail-feature-item span {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 15px;
          color: #374151;
          line-height: 1.6;
        }

        /* Requirements List */
        .bank-detail-requirements-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .bank-detail-requirement-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px;
          background: #FEF3C7;
          border-radius: 8px;
          border: 1px solid #FDE68A;
        }

        .bank-detail-requirement-icon {
          width: 18px;
          height: 18px;
          color: #D97706;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .bank-detail-requirement-item span {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 14px;
          color: #92400E;
          line-height: 1.5;
        }

        /* ============================================
           RIGHT COLUMN SIDEBAR
           ============================================ */
        .bank-detail-right {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        @media (max-width: 1023px) {
          .bank-detail-right {
            max-width: 500px;
          }
        }

        .bank-detail-sidebar-card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #E5E7EB;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .bank-detail-sidebar-title {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #111827;
          margin: 0 0 16px 0;
        }

        /* Price Box */
        .bank-detail-price-box {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%);
          border-radius: 10px;
          margin-bottom: 20px;
          border: 1px solid #BBF7D0;
        }

        .bank-detail-price-icon {
          width: 28px;
          height: 28px;
          color: #15803D;
          flex-shrink: 0;
        }

        .bank-detail-price-label {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 12px;
          color: #15803D;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .bank-detail-price-value {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #15803D;
        }

        /* Apply Button */
        .bank-detail-apply-button {
          width: 100%;
          padding: 14px 24px;
          background-color: #4B6E48;
          color: #FFFFFF;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 15px;
          font-weight: 500;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-bottom: 20px;
        }

        .bank-detail-apply-button:hover {
          background-color: #3d5a3a;
          transform: scale(1.02);
        }

        /* Contact Info */
        .bank-detail-contact-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .bank-detail-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          background: #F9FAFB;
          border-radius: 8px;
          color: #4B5563;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 14px;
        }

        .bank-detail-contact-icon {
          width: 16px;
          height: 16px;
          color: #6B7280;
          flex-shrink: 0;
        }

        /* Quick Info */
        .bank-detail-quick-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .bank-detail-quick-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 16px;
          border-bottom: 1px solid #F3F4F6;
        }

        .bank-detail-quick-item:last-child {
          padding-bottom: 0;
          border-bottom: none;
        }

        .bank-detail-quick-label {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 13px;
          color: #6B7280;
        }

        .bank-detail-quick-value {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #111827;
          text-align: right;
        }

        /* Help Card */
        .bank-detail-help-card {
          background: linear-gradient(135deg, #4B6E48 0%, #3d5a3a 100%);
          border-radius: 12px;
          padding: 24px;
        }

        .bank-detail-help-title {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #FFFFFF;
          margin: 0 0 12px 0;
        }

        .bank-detail-help-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin: 0 0 16px 0;
        }

        .bank-detail-help-button {
          width: 100%;
          padding: 12px 20px;
          background-color: #FFFFFF;
          color: #4B6E48;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 14px;
          font-weight: 500;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .bank-detail-help-button:hover {
          background-color: #F3F4F6;
        }
      `}</style>
    </div>
  );
}
