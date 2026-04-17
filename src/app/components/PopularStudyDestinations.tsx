import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StandardButton } from '@/app/components/ui/standard-button';
import { FileText, Clock, Calendar, DollarSign, Briefcase, Globe, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const cardList = [
  {
    countryCode: 'IE',
    title: 'Ireland',
    description: 'Known for its world-class universities, vibrant culture, and English-speaking environment, Ireland offers excellent opportunities for international students.',
    visaType: 'Student Visa',
    duration: 'Up to 2 years',
    intakes: 'Sept, Jan',
    costRange: '€10,000-25,000/year',
    workRights: '20 hrs/week during term',
    language: 'English (IELTS 6.0+)',
    cities: ['Dublin', 'Cork', 'Galway', 'Limerick'],
    considerations: [
      'High quality of education with globally recognized degrees',
      'Post-study work visa allows up to 2 years stay',
      'Vibrant tech industry with major companies based in Dublin',
      'Relatively high cost of living, especially in Dublin'
    ]
  },
  {
    countryCode: 'US',
    title: 'United States',
    description: 'Home to many of the world\'s top universities, the US offers diverse academic programs, cutting-edge research opportunities, and a multicultural environment.',
    visaType: 'F-1 Student Visa',
    duration: 'Program length',
    intakes: 'Aug, Jan',
    costRange: '$20,000-60,000/year',
    workRights: '20 hrs/week on-campus',
    language: 'English (TOEFL 80+)',
    cities: ['New York', 'Boston', 'San Francisco', 'Los Angeles'],
    considerations: [
      'Access to world-leading universities and research facilities',
      'Optional Practical Training (OPT) available post-graduation',
      'High tuition fees but extensive scholarship opportunities',
      'Competitive job market with excellent career prospects'
    ]
  },
  {
    countryCode: 'UK',
    title: 'United Kingdom',
    description: 'With prestigious universities dating back centuries, the UK combines traditional academic excellence with modern innovation in a historic setting.',
    visaType: 'Student Visa (Tier 4)',
    duration: 'Course length',
    intakes: 'Sept, Jan',
    costRange: '£10,000-38,000/year',
    workRights: '20 hrs/week during term',
    language: 'English (IELTS 6.5+)',
    cities: ['London', 'Edinburgh', 'Manchester', 'Oxford'],
    considerations: [
      'Shorter degree programs (3 years undergraduate)',
      'Graduate Route visa allows 2-3 years post-study work',
      'Rich cultural heritage and historical significance',
      'High living costs especially in London'
    ]
  },
  {
    countryCode: 'CA',
    title: 'Canada',
    description: 'Canada is renowned for its welcoming attitude toward international students, affordable tuition, and pathways to permanent residency after graduation.',
    visaType: 'Study Permit',
    duration: 'Program length',
    intakes: 'Sept, Jan, May',
    costRange: 'CAD 15,000-35,000/year',
    workRights: '20 hrs/week off-campus',
    language: 'English/French (IELTS 6.0+)',
    cities: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'],
    considerations: [
      'Post-Graduation Work Permit (PGWP) up to 3 years',
      'Clear pathways to permanent residency',
      'High quality of life and safe environment',
      'Cold climate in most regions during winter'
    ]
  }
];

export function PopularStudyDestinations() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize ScrollTrigger animations for each card
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const direction = index % 2 === 1 ? 200 : -200;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: direction
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            toggleActions: 'play complete none none'
          }
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Key Factors Section */}
      <section className="key-factors-section">
        <div className="key-factors-container">
          {/* Header */}
          <div className="key-factors-header">
            <h2 className="key-factors-heading">Key factors in choosing a country</h2>
            <p className="key-factors-subtitle">
              Consider these essential aspects when selecting your ideal study abroad destination to ensure a fulfilling academic journey.
            </p>
          </div>

          {/* Feature cards grid */}
          <div className="key-factors-grid">
            <div className="key-factors-card">
              <img
                className="key-factors-card-image"
                src="https://images.unsplash.com/photo-1648301033733-44554c74ec50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwaW50ZXJuYXRpb25hbCUyMHN0dWRlbnRzfGVufDF8fHx8MTc2OTQ5NDUzNHww&ixlib=rb-4.1.0&q=80&w=600"
                alt="University Rankings"
              />
              <div className="key-factors-card-content">
                <h3 className="key-factors-card-title">University Rankings</h3>
                <p className="key-factors-card-description">
                  Explore globally recognized institutions with strong academic reputations, cutting-edge research facilities, and excellent career prospects.
                </p>
              </div>
            </div>

            <div className="key-factors-card">
              <img
                className="key-factors-card-image"
                src="https://images.unsplash.com/photo-1595315343110-9b445a960442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBsaWJyYXJ5JTIwYWNhZGVtaWN8ZW58MXx8fHwxNzY5NDk0NTM0fDA&ixlib=rb-4.1.0&q=80&w=600"
                alt="Cost of Living & Education"
              />
              <div className="key-factors-card-content">
                <h3 className="key-factors-card-title">Cost of Living & Education</h3>
                <p className="key-factors-card-description">
                  Compare tuition fees, accommodation costs, and daily expenses to find a destination that matches your budget and financial plans.
                </p>
              </div>
            </div>

            <div className="key-factors-card">
              <img
                className="key-factors-card-image"
                src="https://images.unsplash.com/photo-1760907218396-6a8fb1a2fcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMGdsb2JhbCUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3Njk0OTQ1MzR8MA&ixlib=rb-4.1.0&q=80&w=600"
                alt="Post-Study Work Opportunities"
              />
              <div className="key-factors-card-content">
                <h3 className="key-factors-card-title">Post-Study Work Opportunities</h3>
                <p className="key-factors-card-description">
                  Discover countries with favorable immigration policies, work permits, and pathways to permanent residency after graduation.
                </p>
              </div>
            </div>

            <div className="key-factors-card">
              <img
                className="key-factors-card-image"
                src="https://images.unsplash.com/photo-1724018305000-616597f21304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGRpdmVyc2l0eSUyMGludGVybmF0aW9uYWwlMjBzdHVkZW50cyUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3Njk4NTczNDd8MA&ixlib=rb-4.1.0&q=80&w=600"
                alt="Cultural Experience & Lifestyle"
              />
              <div className="key-factors-card-content">
                <h3 className="key-factors-card-title">Cultural Experience & Lifestyle</h3>
                <p className="key-factors-card-description">
                  Explore countries that offer diverse cultural experiences, welcoming communities, and quality of life that aligns with your personal preferences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive Responsive Styles */}
        <style>{`
          /* ============================================
             SECTION BASE
             ============================================ */
          .key-factors-section {
            position: relative;
            width: 100%;
            background-color: #F9FAFB;
          }

          /* ============================================
             CONTAINER - Precise Width Control
             ============================================ */
          .key-factors-container {
            margin: 0 auto;
            width: 100%;
          }

          /* Mobile (≤767px): 16-20px padding */
          @media (max-width: 767px) {
            .key-factors-container {
              padding: 64px 18px;
            }
          }

          /* Tablet (768-991px): 32px padding */
          @media (min-width: 768px) and (max-width: 991px) {
            .key-factors-container {
              padding: 84px 32px;
            }
          }

          /* Mid-desktop (992-1199px): Contained width */
          @media (min-width: 992px) and (max-width: 1199px) {
            .key-factors-container {
              max-width: 1200px;
              padding: 104px 40px;
            }
          }

          /* Desktop (≥1200px): max-width 1200px centered */
          @media (min-width: 1200px) {
            .key-factors-container {
              max-width: 1200px;
              padding: 110px 40px;
            }
          }

          /* ============================================
             HEADER
             ============================================ */
          .key-factors-header {
            text-align: center;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          @media (max-width: 767px) {
            .key-factors-header {
              margin-bottom: 40px;
              gap: 12px;
            }
          }

          @media (min-width: 768px) and (max-width: 991px) {
            .key-factors-header {
              margin-bottom: 48px;
              gap: 14px;
            }
          }

          @media (min-width: 992px) {
            .key-factors-header {
              margin-bottom: 56px;
              gap: 16px;
            }
          }

          /* ============================================
             HEADING - Responsive Typography
             ============================================ */
          .key-factors-heading {
            font-weight: 600;
            color: #0F172A;
            letter-spacing: -0.02em;
            margin: 0;
            line-height: 1.25;
          }

          /* Mobile: 24-26px */
          @media (max-width: 767px) {
            .key-factors-heading {
              font-size: 25px;
              line-height: 1.3;
            }
          }

          /* Tablet: 32px */
          @media (min-width: 768px) and (max-width: 991px) {
            .key-factors-heading {
              font-size: 32px;
              line-height: 1.25;
            }
          }

          /* Desktop: 40px */
          @media (min-width: 992px) {
            .key-factors-heading {
              font-size: 40px;
              line-height: 1.2;
            }
          }

          /* ============================================
             SUBTITLE - Controlled Max-Width
             ============================================ */
          .key-factors-subtitle {
            color: #64748B;
            font-weight: 400;
            margin: 0;
          }

          /* Mobile: 14px, 90% width */
          @media (max-width: 767px) {
            .key-factors-subtitle {
              font-size: 14px;
              line-height: 1.6;
              max-width: 90%;
            }
          }

          /* Tablet: 15px, 500px max-width */
          @media (min-width: 768px) and (max-width: 991px) {
            .key-factors-subtitle {
              font-size: 15px;
              line-height: 1.6;
              max-width: 500px;
            }
          }

          /* Desktop: 16px, 600px max-width */
          @media (min-width: 992px) {
            .key-factors-subtitle {
              font-size: 16px;
              line-height: 1.55;
              max-width: 600px;
            }
          }

          /* ============================================
             GRID - Responsive Layout
             ============================================ */
          .key-factors-grid {
            display: grid;
            justify-items: center;
            width: 100%;
          }

          /* Mobile (≤767px): 1 column, 24px gap */
          @media (max-width: 767px) {
            .key-factors-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }
          }

          /* Tablet (768-991px): 2 columns, 32px gap */
          @media (min-width: 768px) and (max-width: 991px) {
            .key-factors-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 32px;
            }
          }

          /* Mid-desktop (992-1199px): 2 columns, balanced gaps */
          @media (min-width: 992px) and (max-width: 1199px) {
            .key-factors-grid {
              grid-template-columns: repeat(2, 1fr);
              column-gap: 40px;
              row-gap: 46px;
            }
          }

          /* Desktop (≥1200px): 2 columns, optimal gaps */
          @media (min-width: 1200px) {
            .key-factors-grid {
              grid-template-columns: repeat(2, 1fr);
              column-gap: 40px;
              row-gap: 48px;
            }
          }

          /* ============================================
             CARD - Width & Alignment
             ============================================ */
          .key-factors-card {
            width: 100%;
            background: white;
            border-radius: 16px;
            overflow: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          }

          .key-factors-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
          }

          /* Mobile: Full width within constraints */
          @media (max-width: 767px) {
            .key-factors-card {
              max-width: 100%;
            }
          }

          /* Tablet & Desktop: Max-width 540-580px */
          @media (min-width: 768px) {
            .key-factors-card {
              max-width: 560px;
            }
          }

          /* ============================================
             CARD IMAGE - Responsive Heights
             ============================================ */
          .key-factors-card-image {
            width: 100%;
            object-fit: cover;
            display: block;
          }

          /* Mobile: 180-200px */
          @media (max-width: 767px) {
            .key-factors-card-image {
              height: 190px;
            }
          }

          /* Tablet: 220px */
          @media (min-width: 768px) and (max-width: 991px) {
            .key-factors-card-image {
              height: 220px;
            }
          }

          /* Mid-desktop: 240px */
          @media (min-width: 992px) and (max-width: 1199px) {
            .key-factors-card-image {
              height: 240px;
            }
          }

          /* Desktop: 240-260px */
          @media (min-width: 1200px) {
            .key-factors-card-image {
              height: 250px;
            }
          }

          /* ============================================
             CARD CONTENT - Internal Spacing
             ============================================ */
          .key-factors-card-content {
            display: flex;
            flex-direction: column;
          }

          /* Mobile: 16px padding */
          @media (max-width: 767px) {
            .key-factors-card-content {
              padding: 20px;
              gap: 10px;
            }
          }

          /* Tablet: 20px padding */
          @media (min-width: 768px) and (max-width: 991px) {
            .key-factors-card-content {
              padding: 22px;
              gap: 10px;
            }
          }

          /* Desktop: 24px padding */
          @media (min-width: 992px) {
            .key-factors-card-content {
              padding: 24px;
              gap: 12px;
            }
          }

          /* ============================================
             CARD TITLE
             ============================================ */
          .key-factors-card-title {
            font-weight: 600;
            color: #111827;
            letter-spacing: -0.02em;
            margin: 0;
            line-height: 1.4;
          }

          /* Mobile: 18px */
          @media (max-width: 767px) {
            .key-factors-card-title {
              font-size: 18px;
            }
          }

          /* Tablet & Desktop: 20-22px */
          @media (min-width: 768px) {
            .key-factors-card-title {
              font-size: 21px;
            }
          }

          /* ============================================
             CARD DESCRIPTION
             ============================================ */
          .key-factors-card-description {
            color: #6B7280;
            font-weight: 400;
            margin: 0;
          }

          /* Mobile: 14px */
          @media (max-width: 767px) {
            .key-factors-card-description {
              font-size: 14px;
              line-height: 1.6;
            }
          }

          /* Tablet & Desktop: 16px */
          @media (min-width: 768px) and (max-width: 991px) {
            .key-factors-card-description {
              font-size: 15px;
              line-height: 1.6;
            }
          }

          @media (min-width: 992px) {
            .key-factors-card-description {
              font-size: 16px;
              line-height: 1.55;
            }
          }

          /* ============================================
             ACCESSIBILITY
             ============================================ */
          @media (prefers-reduced-motion: no-preference) {
            .key-factors-card {
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .key-factors-card {
              transition: none;
            }
          }
        `}</style>
      </section>

      {/* Main Cards Section */}
      <section className="destinations-section">
        <div className="destinations-container">
          {/* Section Header */}
          <div className="destinations-header">
            <h2 className="destinations-heading">
              Popular study destinations
            </h2>
            <p className="destinations-subtitle">
              Overview of countries commonly chosen by international students. Information is general—specific requirements vary by university and program.
            </p>
          </div>

          {/* Country Cards */}
          <div className="destinations-cards">
            {cardList.map((card, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                data-animation-direction={index % 2 === 1 ? 'left' : 'right'}
                className="destination-card"
              >
                {/* Card Contents */}
                <div className="destination-card-inner">
                  {/* Header */}
                  <div className="destination-header">
                    <div className="destination-badge">
                      <span className="destination-badge-text">{card.countryCode}</span>
                    </div>
                    <div className="destination-title-wrapper">
                      <h2 className="destination-title">
                        {card.title}
                      </h2>
                      <p className="destination-description">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Info Grid */}
                  <div className="destination-info-grid">
                    <div className="destination-info-block">
                      <FileText className="destination-info-icon" />
                      <div>
                        <p className="destination-info-label">Visa Type</p>
                        <p className="destination-info-value">{card.visaType}</p>
                      </div>
                    </div>

                    <div className="destination-info-block">
                      <Clock className="destination-info-icon" />
                      <div>
                        <p className="destination-info-label">Duration</p>
                        <p className="destination-info-value">{card.duration}</p>
                      </div>
                    </div>

                    <div className="destination-info-block">
                      <Calendar className="destination-info-icon" />
                      <div>
                        <p className="destination-info-label">Popular Intakes</p>
                        <p className="destination-info-value">{card.intakes}</p>
                      </div>
                    </div>

                    <div className="destination-info-block">
                      <DollarSign className="destination-info-icon" />
                      <div>
                        <p className="destination-info-label">Cost of Study</p>
                        <p className="destination-info-value">{card.costRange}</p>
                      </div>
                    </div>

                    <div className="destination-info-block">
                      <Briefcase className="destination-info-icon" />
                      <div>
                        <p className="destination-info-label">Work Rights</p>
                        <p className="destination-info-value">{card.workRights}</p>
                      </div>
                    </div>

                    <div className="destination-info-block">
                      <Globe className="destination-info-icon" />
                      <div>
                        <p className="destination-info-label">Language Requirements</p>
                        <p className="destination-info-value">{card.language}</p>
                      </div>
                    </div>
                  </div>

                  {/* Popular Cities */}
                  <div className="destination-cities-section">
                    <div className="destination-cities-header">
                      <MapPin className="destination-cities-icon" />
                      <h3 className="destination-cities-title">Popular Cities</h3>
                    </div>
                    <div className="destination-cities-tags">
                      {card.cities.map((city, cityIndex) => (
                        <span
                          key={cityIndex}
                          className="destination-city-tag"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Considerations */}
                  <div className="destination-considerations">
                    <h3 className="destination-considerations-title">Key Considerations</h3>
                    <ul className="destination-considerations-list">
                      {card.considerations.map((point, pointIndex) => (
                        <li key={pointIndex} className="destination-consideration-item">
                          <span className="destination-consideration-bullet">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <div className="destination-cta-wrapper">
                    <StandardButton
                      className="destination-cta-button"
                      onClick={() => navigate(`/countries/${card.title.toLowerCase().replace(/\s+/g, '-')}`)}
                    >
                      <span className="destination-cta-content">
                        <span>View Detailed Country Profile</span>
                        <svg 
                          className="destination-cta-arrow" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 16 16" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            d="M6 3L11 8L6 13" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </StandardButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comprehensive Responsive Styles */}
        <style>{`
          /* ============================================
             SECTION BASE
             ============================================ */
          .destinations-section {
            position: relative;
            width: 100%;
            background-color: white;
          }

          /* ============================================
             CONTAINER - Precise Width Control
             ============================================ */
          .destinations-container {
            margin: 0 auto;
            width: 100%;
          }

          /* Mobile (≤767px): 16-20px padding */
          @media (max-width: 767px) {
            .destinations-container {
              padding: 56px 18px;
            }
          }

          /* Tablet (768-991px): 32px padding */
          @media (min-width: 768px) and (max-width: 991px) {
            .destinations-container {
              padding: 76px 32px;
            }
          }

          /* Mid-desktop (992-1199px): Contained width */
          @media (min-width: 992px) and (max-width: 1199px) {
            .destinations-container {
              max-width: 1150px;
              padding: 96px 40px;
            }
          }

          /* Desktop (≥1200px): max-width 1200px centered */
          @media (min-width: 1200px) {
            .destinations-container {
              max-width: 1200px;
              padding: 100px 40px;
            }
          }

          /* ============================================
             HEADER
             ============================================ */
          .destinations-header {
            text-align: center;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          @media (max-width: 767px) {
            .destinations-header {
              margin-bottom: 36px;
              gap: 12px;
            }
          }

          @media (min-width: 768px) and (max-width: 991px) {
            .destinations-header {
              margin-bottom: 44px;
              gap: 14px;
            }
          }

          @media (min-width: 992px) {
            .destinations-header {
              margin-bottom: 52px;
              gap: 16px;
            }
          }

          /* ============================================
             HEADING - Responsive Typography
             ============================================ */
          .destinations-heading {
            font-weight: 600;
            color: #0F172A;
            letter-spacing: -0.02em;
            margin: 0;
            line-height: 1.25;
          }

          /* Mobile: 24-26px */
          @media (max-width: 767px) {
            .destinations-heading {
              font-size: 25px;
              line-height: 1.3;
            }
          }

          /* Tablet: 32px */
          @media (min-width: 768px) and (max-width: 991px) {
            .destinations-heading {
              font-size: 32px;
              line-height: 1.25;
            }
          }

          /* Desktop: 40px */
          @media (min-width: 992px) {
            .destinations-heading {
              font-size: 40px;
              line-height: 1.2;
            }
          }

          /* ============================================
             SUBTITLE - Controlled Max-Width
             ============================================ */
          .destinations-subtitle {
            color: #64748B;
            font-weight: 400;
            margin: 0;
          }

          /* Mobile: 14px, 90% width */
          @media (max-width: 767px) {
            .destinations-subtitle {
              font-size: 14px;
              line-height: 1.6;
              max-width: 90%;
            }
          }

          /* Tablet: 15px, 500px max-width */
          @media (min-width: 768px) and (max-width: 991px) {
            .destinations-subtitle {
              font-size: 15px;
              line-height: 1.6;
              max-width: 500px;
            }
          }

          /* Desktop: 16px, 600px max-width */
          @media (min-width: 992px) {
            .destinations-subtitle {
              font-size: 16px;
              line-height: 1.55;
              max-width: 600px;
            }
          }

          /* ============================================
             CARDS CONTAINER
             ============================================ */
          .destinations-cards {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          @media (max-width: 767px) {
            .destinations-cards {
              gap: 24px;
            }
          }

          @media (min-width: 768px) and (max-width: 991px) {
            .destinations-cards {
              gap: 28px;
            }
          }

          @media (min-width: 992px) {
            .destinations-cards {
              gap: 32px;
            }
          }

          /* ============================================
             CARD - Width & Styling
             ============================================ */
          .destination-card {
            width: 100%;
            background-color: white;
            border-radius: 16px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
            border: 1px solid #E5E7EB;
            transition: all 0.3s ease;
          }

          .destination-card:hover {
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
            transform: translateY(-2px);
          }

          /* Mobile: Full width with padding constraints */
          @media (max-width: 767px) {
            .destination-card {
              max-width: 100%;
            }
          }

          /* Tablet: Constrained to avoid edge-touching */
          @media (min-width: 768px) and (max-width: 991px) {
            .destination-card {
              max-width: 720px;
            }
          }

          /* Mid-desktop: Standard width */
          @media (min-width: 992px) and (max-width: 1199px) {
            .destination-card {
              max-width: 950px;
            }
          }

          /* Desktop: Max-width 900-1000px */
          @media (min-width: 1200px) {
            .destination-card {
              max-width: 1000px;
            }
          }

          /* ============================================
             CARD INNER - Padding
             ============================================ */
          .destination-card-inner {
            display: flex;
            flex-direction: column;
          }

          /* Mobile: 20px padding */
          @media (max-width: 767px) {
            .destination-card-inner {
              padding: 20px;
              gap: 20px;
            }
          }

          /* Tablet: 28px padding */
          @media (min-width: 768px) and (max-width: 991px) {
            .destination-card-inner {
              padding: 28px;
              gap: 22px;
            }
          }

          /* Desktop: 32px padding */
          @media (min-width: 992px) {
            .destination-card-inner {
              padding: 32px;
              gap: 24px;
            }
          }

          /* ============================================
             DESTINATION HEADER
             ============================================ */
          .destination-header {
            display: flex;
            gap: 16px;
            align-items: flex-start;
          }

          @media (max-width: 767px) {
            .destination-header {
              gap: 14px;
            }
          }

          /* ============================================
             DESTINATION BADGE - Country Icon
             ============================================ */
          .destination-badge {
            flex-shrink: 0;
            background-color: #4B6E48;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          /* Mobile: 40px */
          @media (max-width: 767px) {
            .destination-badge {
              width: 40px;
              height: 40px;
              border-radius: 10px;
            }
          }

          /* Tablet: 44px */
          @media (min-width: 768px) and (max-width: 991px) {
            .destination-badge {
              width: 44px;
              height: 44px;
            }
          }

          /* Desktop: 48-56px */
          @media (min-width: 992px) {
            .destination-badge {
              width: 50px;
              height: 50px;
            }
          }

          .destination-badge-text {
            color: white;
            font-weight: 700;
          }

          @media (max-width: 767px) {
            .destination-badge-text {
              font-size: 15px;
            }
          }

          @media (min-width: 768px) {
            .destination-badge-text {
              font-size: 17px;
            }
          }

          /* ============================================
             DESTINATION TITLE WRAPPER
             ============================================ */
          .destination-title-wrapper {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          @media (max-width: 767px) {
            .destination-title-wrapper {
              gap: 6px;
            }
          }

          /* ============================================
             DESTINATION TITLE
             ============================================ */
          .destination-title {
            font-weight: 700;
            color: #111827;
            margin: 0;
            line-height: 1.3;
          }

          @media (max-width: 767px) {
            .destination-title {
              font-size: 22px;
            }
          }

          @media (min-width: 768px) and (max-width: 991px) {
            .destination-title {
              font-size: 24px;
            }
          }

          @media (min-width: 992px) {
            .destination-title {
              font-size: 26px;
            }
          }

          /* ============================================
             DESTINATION DESCRIPTION
             ============================================ */
          .destination-description {
            color: #6B7280;
            font-weight: 400;
            margin: 0;
            line-height: 1.5;
          }

          @media (max-width: 767px) {
            .destination-description {
              font-size: 13px;
              line-height: 1.6;
            }
          }

          @media (min-width: 768px) {
            .destination-description {
              font-size: 14px;
            }
          }

          /* ============================================
             INFO GRID - Responsive Columns
             ============================================ */
          .destination-info-grid {
            display: grid;
          }

          /* Mobile (≤767px): 1 column, 14-16px gap */
          @media (max-width: 767px) {
            .destination-info-grid {
              grid-template-columns: 1fr;
              gap: 12px;
            }
          }

          /* Tablet (768-1199px): 2 columns, 18-20px gap */
          @media (min-width: 768px) and (max-width: 1199px) {
            .destination-info-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 16px;
            }
          }

          /* Desktop (≥1200px): 3 columns, 20-24px gap */
          @media (min-width: 1200px) {
            .destination-info-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 18px;
            }
          }

          /* ============================================
             INFO BLOCK
             ============================================ */
          .destination-info-block {
            display: flex;
            align-items: flex-start;
            background-color: #F9FAFB;
            border-radius: 10px;
          }

          @media (max-width: 767px) {
            .destination-info-block {
              padding: 12px;
              gap: 10px;
            }
          }

          @media (min-width: 768px) {
            .destination-info-block {
              padding: 14px;
              gap: 12px;
            }
          }

          .destination-info-icon {
            flex-shrink: 0;
            color: #4B6E48;
            margin-top: 2px;
          }

          @media (max-width: 767px) {
            .destination-info-icon {
              width: 18px;
              height: 18px;
            }
          }

          @media (min-width: 768px) {
            .destination-info-icon {
              width: 20px;
              height: 20px;
            }
          }

          .destination-info-label {
            font-size: 11px;
            color: #6B7280;
            font-weight: 500;
            margin: 0 0 4px 0;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .destination-info-value {
            font-weight: 600;
            color: #111827;
            margin: 0;
            line-height: 1.4;
          }

          @media (max-width: 767px) {
            .destination-info-value {
              font-size: 13px;
            }
          }

          @media (min-width: 768px) {
            .destination-info-value {
              font-size: 14px;
            }
          }

          /* ============================================
             CITIES SECTION
             ============================================ */
          .destination-cities-section {
            display: flex;
            flex-direction: column;
          }

          @media (max-width: 767px) {
            .destination-cities-section {
              gap: 10px;
            }
          }

          @media (min-width: 768px) {
            .destination-cities-section {
              gap: 12px;
            }
          }

          .destination-cities-header {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .destination-cities-icon {
            width: 16px;
            height: 16px;
            color: #4B6E48;
          }

          .destination-cities-title {
            font-size: 14px;
            font-weight: 600;
            color: #111827;
            margin: 0;
          }

          /* ============================================
             CITY TAGS - Proper Wrapping
             ============================================ */
          .destination-cities-tags {
            display: flex;
            flex-wrap: wrap;
          }

          @media (max-width: 767px) {
            .destination-cities-tags {
              gap: 8px;
            }
          }

          @media (min-width: 768px) {
            .destination-cities-tags {
              gap: 10px;
            }
          }

          .destination-city-tag {
            display: inline-block;
            padding: 8px 14px;
            background-color: rgba(75, 110, 72, 0.1);
            color: #4B6E48;
            font-weight: 500;
            border-radius: 20px;
            white-space: nowrap;
          }

          @media (max-width: 767px) {
            .destination-city-tag {
              font-size: 12px;
              padding: 6px 12px;
            }
          }

          @media (min-width: 768px) {
            .destination-city-tag {
              font-size: 13px;
            }
          }

          /* ============================================
             CONSIDERATIONS SECTION
             ============================================ */
          .destination-considerations {
            display: flex;
            flex-direction: column;
          }

          @media (max-width: 767px) {
            .destination-considerations {
              gap: 10px;
            }
          }

          @media (min-width: 768px) {
            .destination-considerations {
              gap: 12px;
            }
          }

          .destination-considerations-title {
            font-size: 14px;
            font-weight: 600;
            color: #111827;
            margin: 0;
          }

          /* ============================================
             CONSIDERATIONS LIST
             ============================================ */
          .destination-considerations-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
          }

          @media (max-width: 767px) {
            .destination-considerations-list {
              gap: 8px;
            }
          }

          @media (min-width: 768px) {
            .destination-considerations-list {
              gap: 10px;
            }
          }

          .destination-consideration-item {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: #6B7280;
            line-height: 1.5;
          }

          @media (max-width: 767px) {
            .destination-consideration-item {
              font-size: 13px;
              gap: 8px;
            }
          }

          @media (min-width: 768px) {
            .destination-consideration-item {
              font-size: 14px;
            }
          }

          .destination-consideration-bullet {
            color: #4B6E48;
            font-weight: 700;
            flex-shrink: 0;
            margin-top: 2px;
          }

          /* ============================================
             CTA WRAPPER & BUTTON
             ============================================ */
          .destination-cta-wrapper {
            display: flex;
            padding-top: 4px;
          }

          /* Mobile: Centered */
          @media (max-width: 767px) {
            .destination-cta-wrapper {
              justify-content: center;
            }
          }

          /* Tablet: Centered */
          @media (min-width: 768px) and (max-width: 991px) {
            .destination-cta-wrapper {
              justify-content: center;
            }
          }

          /* Desktop: Right aligned */
          @media (min-width: 992px) {
            .destination-cta-wrapper {
              justify-content: flex-end;
            }
          }

          .destination-cta-button {
            padding-left: 24px;
            padding-right: 24px;
          }

          @media (max-width: 767px) {
            .destination-cta-button {
              font-size: 13px;
              padding-left: 20px;
              padding-right: 20px;
            }
          }

          /* ============================================
             BUTTON CONTENT - Icon & Text Alignment
             ============================================ */
          .destination-cta-content {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }

          .destination-cta-arrow {
            flex-shrink: 0;
            margin-top: 1px;
          }

          @media (max-width: 767px) {
            .destination-cta-content {
              gap: 6px;
            }

            .destination-cta-arrow {
              width: 14px;
              height: 14px;
            }
          }

          /* ============================================
             ACCESSIBILITY
             ============================================ */
          @media (prefers-reduced-motion: no-preference) {
            .destination-card {
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .destination-card {
              transition: none;
            }
          }
        `}</style>
      </section>
    </>
  );
}