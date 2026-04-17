import { useState } from 'react';
import { Search, Building2, CreditCard, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

interface BankProvider {
  id: string;
  name: string;
  accountType: string;
  monthlyFee: string;
  features: string[];
  benefits: string[];
  requirements: string[];
  rating: number;
  logo: string;
}

const bankProviders: BankProvider[] = [
  {
    id: 'chase-student',
    name: 'Chase College Checking',
    accountType: 'Student Checking',
    monthlyFee: '$0 for 5 years',
    features: [
      'No monthly service fee for up to 5 years',
      'No minimum balance required',
      'Mobile check deposit',
      'Access to 16,000+ ATMs nationwide'
    ],
    benefits: [
      'No overdraft fees on first 4 transactions',
      '$100 welcome bonus available',
      'Free money transfers',
      '24/7 customer support'
    ],
    requirements: [
      'Valid student ID',
      'Proof of enrollment',
      'Government-issued ID',
      'Social Security Number (or ITIN)'
    ],
    rating: 4.6,
    logo: 'https://images.unsplash.com/photo-1541354329998-d3c1f9b5c564?w=400&q=80'
  },
  {
    id: 'bank-of-america-student',
    name: 'Bank of America Advantage SafeBalance',
    accountType: 'Student Banking',
    monthlyFee: '$0 with student status',
    features: [
      'No overdraft fees',
      'Mobile and online banking',
      'Debit card with contactless payment',
      'Free financial education resources'
    ],
    benefits: [
      'Access to 4,000+ branches',
      'Preferred Rewards program',
      'Student credit card eligibility',
      'International wire transfers available'
    ],
    requirements: [
      'Valid passport or driver\'s license',
      'University acceptance letter',
      'Proof of address',
      'Student visa (for international students)'
    ],
    rating: 4.5,
    logo: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=400&q=80'
  },
  {
    id: 'wells-fargo-student',
    name: 'Wells Fargo Student Checking',
    accountType: 'Student Account',
    monthlyFee: '$0 up to age 24',
    features: [
      'Waived monthly fee for students',
      'Free checks and money orders',
      'Online bill pay',
      'Zelle for instant transfers'
    ],
    benefits: [
      'Overdraft protection options',
      'Savings account linking',
      'Cash deposit at 12,000+ ATMs',
      'Financial planning tools'
    ],
    requirements: [
      'Age 17-24 with student status',
      'Valid identification',
      'Enrollment verification',
      'Initial deposit of $25'
    ],
    rating: 4.4,
    logo: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=80'
  },
  {
    id: 'capital-one-student',
    name: 'Capital One 360 Checking',
    accountType: 'Digital Checking',
    monthlyFee: '$0 forever',
    features: [
      'No fees, no minimums',
      'Early direct deposit access',
      'Free digital and physical checks',
      'Access to 70,000+ fee-free ATMs'
    ],
    benefits: [
      'High-yield savings options',
      'Automatic savings tools',
      'Credit builder programs',
      'No foreign transaction fees'
    ],
    requirements: [
      'Valid ID (passport accepted)',
      'U.S. address',
      'Online application only',
      'No SSN required (uses ITIN)'
    ],
    rating: 4.7,
    logo: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&q=80'
  },
  {
    id: 'discover-student',
    name: 'Discover Cashback Debit',
    accountType: 'Cashback Checking',
    monthlyFee: '$0 monthly fee',
    features: [
      '1% cashback on up to $3,000/month',
      'No minimum balance or overdraft fees',
      'Free ATM withdrawals at 60,000+ locations',
      'FDIC insured up to $250,000'
    ],
    benefits: [
      'Earn cashback on debit purchases',
      '24/7 U.S.-based customer service',
      'Mobile app with budgeting tools',
      'Linked savings account available'
    ],
    requirements: [
      'U.S. Social Security Number',
      'Valid government ID',
      'Must be 18 or older',
      'U.S. mailing address'
    ],
    rating: 4.8,
    logo: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&q=80'
  },
  {
    id: 'citibank-student',
    name: 'Citibank Access Account',
    accountType: 'Basic Checking',
    monthlyFee: '$10 (waivable)',
    features: [
      'Fee waived with $1,500 balance',
      'Global presence in 90+ countries',
      'Multi-currency account options',
      'Branch and ATM access worldwide'
    ],
    benefits: [
      'International student-friendly',
      'Credit card upgrade paths',
      'Investment account integration',
      'Premium banking services available'
    ],
    requirements: [
      'Valid passport with student visa',
      'University enrollment letter',
      'Proof of international address',
      'Minimum opening deposit $100'
    ],
    rating: 4.3,
    logo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80'
  }
];

export function BankProvidersSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAccountType, setSelectedAccountType] = useState('all');
  const [selectedFeature, setSelectedFeature] = useState('all');
  const [selectedFeeRange, setSelectedFeeRange] = useState('all');

  // Debug log
  console.log('BankProvidersSection is rendering');

  // Filter banks based on search and filters
  const filteredBanks = bankProviders.filter(bank => {
    const matchesSearch = bank.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          bank.accountType.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesAccountType = selectedAccountType === 'all' || 
                                bank.accountType.toLowerCase().includes(selectedAccountType.toLowerCase());
    
    const matchesFeature = selectedFeature === 'all' || 
                           bank.features.some(f => f.toLowerCase().includes(selectedFeature.toLowerCase()));
    
    const matchesFeeRange = selectedFeeRange === 'all' || 
                            (selectedFeeRange === 'free' && bank.monthlyFee.includes('$0'));
    
    return matchesSearch && matchesAccountType && matchesFeature && matchesFeeRange;
  });

  return (
    <section className="bank-providers-section" id="providers">
      <div className="bank-providers-container">
        {/* Section Title */}
        <div className="bank-section-header">
          <h2 className="bank-section-title">
            Available Banking Partners
          </h2>
          <p className="bank-section-subtitle">
            Explore student-friendly banking options with no or low fees. Click on any bank to see detailed information including account features, requirements, and benefits.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="bank-search-filters-wrapper">
          {/* Search Bar */}
          <div className="bank-search-container">
            <Search className="bank-search-icon" />
            <input
              type="text"
              placeholder="Search banks (e.g., Chase, Bank of America)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bank-search-input"
            />
          </div>

          {/* Filters */}
          <div className="bank-filters-grid">
            {/* Account Type Filter */}
            <div className="bank-filter-item">
              <label className="bank-filter-label">Account Type</label>
              <select
                value={selectedAccountType}
                onChange={(e) => setSelectedAccountType(e.target.value)}
                className="bank-filter-select"
              >
                <option value="all">All Types</option>
                <option value="student">Student Account</option>
                <option value="checking">Checking</option>
                <option value="digital">Digital Banking</option>
              </select>
            </div>

            {/* Features Filter */}
            <div className="bank-filter-item">
              <label className="bank-filter-label">Key Feature</label>
              <select
                value={selectedFeature}
                onChange={(e) => setSelectedFeature(e.target.value)}
                className="bank-filter-select"
              >
                <option value="all">All Features</option>
                <option value="mobile">Mobile Banking</option>
                <option value="atm">ATM Access</option>
                <option value="overdraft">Overdraft Protection</option>
                <option value="cashback">Cashback Rewards</option>
              </select>
            </div>

            {/* Fee Range Filter */}
            <div className="bank-filter-item">
              <label className="bank-filter-label">Monthly Fee</label>
              <select
                value={selectedFeeRange}
                onChange={(e) => setSelectedFeeRange(e.target.value)}
                className="bank-filter-select"
              >
                <option value="all">All Fee Ranges</option>
                <option value="free">$0 - Free</option>
                <option value="low">Low Fee (&lt; $10)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="bank-results-count">
          Showing {filteredBanks.length} of {bankProviders.length} banking options
        </div>

        {/* Bank Cards Grid */}
        <div className="bank-cards-grid">
          {filteredBanks.map((bank, index) => (
            <motion.div
              key={bank.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bank-card"
            >
              {/* Bank Logo */}
              <div className="bank-card-logo-wrapper">
                <img 
                  src={bank.logo} 
                  alt={bank.name}
                  className="bank-card-logo"
                />
              </div>

              {/* Bank Name */}
              <h3 className="bank-card-title">{bank.name}</h3>

              {/* Account Information Row */}
              <div className="bank-card-info-row">
                <div className="bank-card-info-item">
                  <Building2 className="bank-card-info-icon" />
                  <span className="bank-card-info-text">{bank.accountType}</span>
                </div>
                <div className="bank-card-rating">
                  <span className="bank-card-rating-star">⭐</span>
                  <span className="bank-card-rating-text">{bank.rating}/5</span>
                </div>
              </div>

              {/* Monthly Fee */}
              <div className="bank-card-fee">
                <DollarSign className="bank-card-fee-icon" />
                <div>
                  <div className="bank-card-fee-label">Monthly Fee</div>
                  <div className="bank-card-fee-value">{bank.monthlyFee}</div>
                </div>
              </div>

              {/* Key Features Preview (first 3) */}
              <div className="bank-card-features">
                {bank.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="bank-card-feature">
                    <CheckCircle className="bank-card-feature-icon" />
                    <span className="bank-card-feature-text">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link to={`/services/banks/${bank.id}`} className="bank-card-cta">
                View Bank Details
                <ArrowRight className="bank-card-cta-icon" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredBanks.length === 0 && (
          <div className="bank-no-results">
            <p>No banking options match your search criteria.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedAccountType('all');
                setSelectedFeature('all');
                setSelectedFeeRange('all');
              }}
              className="bank-reset-button"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <style>{`
        /* ============================================
           SECTION CONTAINER
           ============================================ */
        .bank-providers-section {
          position: relative;
          width: 100%;
          background: linear-gradient(to bottom, #ffffff 0%, #f9fafb 100%);
          padding: 96px 24px;
        }

        @media (max-width: 767px) {
          .bank-providers-section {
            padding: 64px 18px;
          }
        }

        .bank-providers-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ============================================
           SECTION HEADER
           ============================================ */
        .bank-section-header {
          text-align: center;
          margin-bottom: 48px;
        }

        @media (max-width: 767px) {
          .bank-section-header {
            margin-bottom: 32px;
          }
        }

        .bank-section-title {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 38px;
          font-weight: 600;
          color: #111827;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }

        @media (max-width: 1199px) {
          .bank-section-title {
            font-size: 31px;
          }
        }

        @media (max-width: 767px) {
          .bank-section-title {
            font-size: 25px;
            margin-bottom: 12px;
          }
        }

        .bank-section-subtitle {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 18px;
          font-weight: 400;
          color: #6B7280;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        @media (max-width: 1199px) {
          .bank-section-subtitle {
            font-size: 16px;
            max-width: 600px;
          }
        }

        @media (max-width: 767px) {
          .bank-section-subtitle {
            font-size: 15px;
            max-width: 95%;
          }
        }

        /* ============================================
           SEARCH + FILTERS
           ============================================ */
        .bank-search-filters-wrapper {
          margin-bottom: 32px;
        }

        @media (max-width: 767px) {
          .bank-search-filters-wrapper {
            margin-bottom: 24px;
          }
        }

        /* Search Bar */
        .bank-search-container {
          position: relative;
          margin-bottom: 24px;
        }

        .bank-search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          color: #9CA3AF;
          pointer-events: none;
        }

        .bank-search-input {
          width: 100%;
          padding: 14px 16px 14px 48px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 16px;
          color: #111827;
          background-color: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          outline: none;
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .bank-search-input:focus {
          border-color: #4B6E48;
          box-shadow: 0 0 0 3px rgba(75, 110, 72, 0.1);
        }

        .bank-search-input::placeholder {
          color: #9CA3AF;
        }

        /* Filters Grid */
        .bank-filters-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        @media (max-width: 767px) {
          .bank-filters-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }

        .bank-filter-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .bank-filter-label {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #374151;
        }

        .bank-filter-select {
          padding: 10px 14px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 14px;
          color: #111827;
          background-color: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 10px;
          outline: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .bank-filter-select:focus {
          border-color: #4B6E48;
          box-shadow: 0 0 0 3px rgba(75, 110, 72, 0.1);
        }

        /* Results Count */
        .bank-results-count {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 14px;
          color: #6B7280;
          margin-bottom: 24px;
          text-align: center;
        }

        /* ============================================
           BANK CARDS GRID
           ============================================ */
        .bank-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 1199px) {
          .bank-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 767px) {
          .bank-cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        /* ============================================
           BANK CARD DESIGN
           ============================================ */
        .bank-card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          border: 1px solid #F3F4F6;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .bank-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
          border-color: #4B6E48;
        }

        /* Bank Logo */
        .bank-card-logo-wrapper {
          width: 100%;
          height: 120px;
          border-radius: 8px;
          overflow: hidden;
          background-color: #F9FAFB;
        }

        .bank-card-logo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Bank Name */
        .bank-card-title {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #111827;
          margin: 0;
          line-height: 1.3;
        }

        /* Info Row */
        .bank-card-info-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .bank-card-info-item {
          display: flex;
          align-items: center;
          gap: 6px;
          flex: 1;
          min-width: 0;
        }

        .bank-card-info-icon {
          width: 16px;
          height: 16px;
          color: #6B7280;
          flex-shrink: 0;
        }

        .bank-card-info-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 13px;
          color: #4B5563;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Rating */
        .bank-card-rating {
          display: flex;
          align-items: center;
          gap: 4px;
          background-color: #F9FAFB;
          padding: 4px 10px;
          border-radius: 6px;
          flex-shrink: 0;
        }

        .bank-card-rating-star {
          font-size: 12px;
        }

        .bank-card-rating-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #374151;
        }

        /* Monthly Fee */
        .bank-card-fee {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          background-color: #F0FDF4;
          border-radius: 8px;
          border: 1px solid #BBF7D0;
        }

        .bank-card-fee-icon {
          width: 20px;
          height: 20px;
          color: #15803D;
          flex-shrink: 0;
        }

        .bank-card-fee-label {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 11px;
          color: #15803D;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .bank-card-fee-value {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #15803D;
        }

        /* Features */
        .bank-card-features {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .bank-card-feature {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .bank-card-feature-icon {
          width: 16px;
          height: 16px;
          color: #10B981;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .bank-card-feature-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 13px;
          color: #4B5563;
          line-height: 1.5;
        }

        /* CTA Button */
        .bank-card-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          background-color: #4B6E48;
          color: #FFFFFF;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 14px;
          font-weight: 500;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          margin-top: auto;
        }

        .bank-card-cta:hover {
          background-color: #3d5a3a;
          transform: scale(1.02);
        }

        .bank-card-cta-icon {
          width: 16px;
          height: 16px;
          transition: transform 0.2s ease;
        }

        .bank-card-cta:hover .bank-card-cta-icon {
          transform: translateX(4px);
        }

        /* ============================================
           NO RESULTS
           ============================================ */
        .bank-no-results {
          text-align: center;
          padding: 64px 24px;
        }

        .bank-no-results p {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 16px;
          color: #6B7280;
          margin: 0 0 24px 0;
        }

        .bank-reset-button {
          padding: 12px 24px;
          background-color: #4B6E48;
          color: #FFFFFF;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 14px;
          font-weight: 500;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .bank-reset-button:hover {
          background-color: #3d5a3a;
        }
      `}</style>
    </section>
  );
}

export { bankProviders };