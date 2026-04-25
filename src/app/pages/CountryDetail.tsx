import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { Footer } from '@/app/components/Footer';
import { CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import AnimatedCardStack from '@/app/components/ui/animate-card-animation';
import ctaImage from 'figma:asset/7ac2a1ffa5bc33b8ea80d61dafadf2ede4e3a2e5.png';

gsap.registerPlugin(ScrollTrigger);

// Card data for the slider
const cardData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1639654655546-68bc1f21e9e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTIxODQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Academic Excellence and Diversity',
    description: 'The US is home to many of the world\'s top-ranked universities, offering a wide range of programs and degrees. Its diverse academic environment fosters innovation and critical thinking.',
    city: 'Boston, MA'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1663162550938-60f70fab5d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwc3R1ZHl8ZW58MXx8fHwxNzcxMzA0ODQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Research and Innovation',
    description: 'American universities are at the forefront of research and technological advancement, providing students with opportunities to work on groundbreaking projects.',
    city: 'San Francisco, CA'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1651421479704-470a78eef530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudCUyMGRpdmVyc2V8ZW58MXx8fHwxNzcxMzA0ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Career Opportunities',
    description: 'Studying in the US opens doors to a global network of professionals and industries, enhancing career prospects and providing valuable work experience through OPT and CPT programs.',
    city: 'New York, NY'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1577036421869-7c8d388d2123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGUlMjBzdWNjZXNzfGVufDF8fHx8MTc3MTMwNDg0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Campus Experience',
    description: 'US universities offer a vibrant campus life with numerous extracurricular activities, clubs, and events that enrich the overall student experience and promote personal growth.',
    city: 'Chicago, IL'
  }
];

// Process Timeline Steps
const processSteps = [
  {
    id: "01",
    title: "Research & Preparation",
    subtitle: "Planning Your Journey",
    description: "Begin by researching universities, programs, and requirements. Prepare for standardized tests like TOEFL, IELTS, GRE, or GMAT based on your target programs.",
    details: ["University Research", "Test Preparation", "Budget Planning", "Document Collection"],
    duration: "3-6 months",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80"
  },
  {
    id: "02",
    title: "Application Process",
    subtitle: "Submit Your Applications",
    description: "Complete university applications with all required documents including transcripts, recommendation letters, statement of purpose, and test scores.",
    details: ["Online Applications", "Essay Writing", "Recommendation Letters", "Portfolio Preparation"],
    duration: "2-4 months",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&q=80"
  },
  {
    id: "03",
    title: "Visa Application",
    subtitle: "Securing Your Student Visa",
    description: "After receiving admission, apply for your student visa. Prepare financial documents, complete visa forms, and schedule your embassy interview.",
    details: ["I-20 Form", "SEVIS Fee Payment", "DS-160 Form", "Visa Interview"],
    duration: "1-2 months",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80"
  },
  {
    id: "04",
    title: "Pre-Departure",
    subtitle: "Getting Ready to Travel",
    description: "Finalize travel arrangements, accommodation, health insurance, and attend pre-departure orientations. Connect with fellow students and prepare for your new journey.",
    details: ["Book Flights", "Arrange Housing", "Health Insurance", "Orientation Sessions"],
    duration: "1 month",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80"
  },
  {
    id: "05",
    title: "Arrival & Settling In",
    subtitle: "Beginning Your Academic Journey",
    description: "Complete arrival procedures, attend orientation sessions, and settle into your new environment. This is when you'll start building your network and preparing for classes.",
    details: ["International Student Orientation", "Campus Registration", "Open Bank Account", "Start Classes"],
    duration: "2-4 weeks",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80"
  }
];

// After Studies Carousel Component
function AfterStudiesCarousel() {
  const [currentCard, setCurrentCard] = useState(0);

  const cardsData = [
    {
      id: 0,
      icon: 'ðŸŽ“',
      title: 'Post-Graduation Work',
      description: 'OPT allows F-1 students to work (off-campus) after graduation, providing them to gain experience and potentially secure long-term employment.',
      items: [
        { label: 'CPT (for all fields of study)', value: '12-month OPT for part-time or full-time; up to 12 month total' },
        { label: 'Additional STEM extension for STEM degree holders', value: '24-month total' },
        { label: 'Can be used either for part-time or full-time employment', value: '' },
        { label: 'Can work for multiple employers utilizing OPT', value: '' }
      ]
    },
    {
      id: 1,
      icon: 'ðŸ ',
      title: 'Long-term Immigration Options',
      description: 'While most students are temporarily visiting, options exist for those seeking to remain in the US Long-term:',
      sections: [
        {
          title: 'H-1B Visa',
          description: 'Employment-sponsored visa for specialty occupations; annual lottery system; 3-year initial period (renewable).'
        },
        {
          title: 'Employment-Based Green Card',
          description: 'Permanent residency through employer sponsorship (usually EB2/EB3 categories).'
        },
        {
          title: 'Other Visa Categories',
          description: 'O-1 (extraordinary ability), L-1 (intra-company transfer), etc.'
        }
      ],
      warning: 'We are not guaranteeing sponsorship or immigration outcomes. Consult immigration advice for legal advice.'
    }
  ];

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % cardsData.length);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  };

  return (
    <div className="carousel-wrapper">
      {/* Previous Button */}
      <button 
        onClick={handlePrev}
        className="carousel-nav-btn carousel-nav-prev"
        aria-label="Previous card"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {/* Card Container */}
      <div className="carousel-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="carousel-card"
          >
            {/* Card Icon */}
            <div className="card-icon-badge">{cardsData[currentCard].icon}</div>

            {/* Card Title */}
            <h3 className="card-title">{cardsData[currentCard].title}</h3>

            {/* Card Description */}
            <p className="card-description">{cardsData[currentCard].description}</p>

            {/* Card Content */}
            {currentCard === 0 ? (
              <div className="card-items">
                {cardsData[0].items.map((item, index) => (
                  <div key={index} className="card-item">
                    <div className="item-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="item-content">
                      <span className="item-label">{item.label}</span>
                      {item.value && <span className="item-value">: {item.value}</span>}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="card-sections">
                {cardsData[1].sections.map((section, index) => (
                  <div key={index} className="section-item">
                    <h4 className="section-title">{section.title}</h4>
                    <p className="section-description">{section.description}</p>
                  </div>
                ))}
                {/* Warning */}
                <div className="warning-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <span>{cardsData[1].warning}</span>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Next Button */}
      <button 
        onClick={handleNext}
        className="carousel-nav-btn carousel-nav-next"
        aria-label="Next card"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <style>{`
        /* Carousel Wrapper */
        .carousel-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }

        /* Navigation Buttons */
        .carousel-nav-btn {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1.5px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: #64748B;
          z-index: 10;
        }

        .carousel-nav-btn:hover {
          background: #F8FAFC;
          border-color: #4B6E48;
          color: #4B6E48;
          transform: scale(1.05);
        }

        .carousel-nav-btn:active {
          transform: scale(0.95);
        }

        /* Carousel Container */
        .carousel-container {
          flex: 1;
          overflow: hidden;
          position: relative;
          min-height: 400px;
        }

        /* Carousel Card */
        .carousel-card {
          background: #FFFFFF;
          border: 1.5px solid #E2E8F0;
          border-radius: 16px;
          padding: 40px;
          width: 100%;
        }

        /* Card Icon Badge */
        .card-icon-badge {
          width: 56px;
          height: 56px;
          background: #F1F5F9;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin-bottom: 24px;
        }

        /* Card Title */
        .card-title {
          font-size: 24px;
          font-weight: 700;
          color: #1E293B;
          margin: 0 0 12px 0;
        }

        /* Card Description */
        .card-description {
          font-size: 15px;
          color: #64748B;
          line-height: 1.6;
          margin: 0 0 28px 0;
        }

        /* Card Items (First Card) */
        .card-items {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .card-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .item-icon {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #E8F5E7;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4B6E48;
          margin-top: 2px;
        }

        .item-content {
          flex: 1;
          font-size: 14px;
          color: #475569;
          line-height: 1.5;
        }

        .item-label {
          font-weight: 500;
          color: #1E293B;
        }

        .item-value {
          color: #64748B;
        }

        /* Card Sections (Second Card) */
        .card-sections {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .section-item {
          padding-bottom: 20px;
          border-bottom: 1px solid #F1F5F9;
        }

        .section-item:last-of-type {
          border-bottom: none;
        }

        .section-title {
          font-size: 16px;
          font-weight: 600;
          color: #1E293B;
          margin: 0 0 8px 0;
        }

        .section-description {
          font-size: 14px;
          color: #64748B;
          line-height: 1.6;
          margin: 0;
        }

        /* Warning Box */
        .warning-box {
          background: #FEF3C7;
          border: 1px solid #FDE68A;
          border-radius: 10px;
          padding: 16px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
          margin-top: 8px;
        }

        .warning-box svg {
          flex-shrink: 0;
          color: #D97706;
          margin-top: 2px;
        }

        .warning-box span {
          font-size: 13px;
          color: #92400E;
          line-height: 1.5;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .carousel-wrapper {
            gap: 12px;
          }

          .carousel-nav-btn {
            width: 40px;
            height: 40px;
          }

          .carousel-nav-btn svg {
            width: 20px;
            height: 20px;
          }

          .carousel-card {
            padding: 28px 24px;
          }

          .card-title {
            font-size: 20px;
          }

          .carousel-container {
            min-height: 450px;
          }
        }

        @media (max-width: 640px) {
          .carousel-nav-btn {
            width: 36px;
            height: 36px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }

          .carousel-nav-prev {
            left: -8px;
          }

          .carousel-nav-next {
            right: -8px;
          }

          .carousel-wrapper {
            gap: 0;
          }

          .carousel-container {
            padding: 0 8px;
          }
        }
      `}</style>
    </div>
  );
}

export default function CountryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [activeStep, setActiveStep] = useState(processSteps[0]?.id);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const cards = cardsRef.current;
    if (cards && cards.length >= 4) {
      let cardArray = [...cards];
      
      const startAnim = () => {
        const tl = gsap.timeline();
        
        // Animate the first card out
        tl.fromTo(
          cardArray[0],
          { x: 0, y: 0, opacity: 0.75 },
          { 
            x: 0, 
            y: -120, 
            opacity: 0, 
            zIndex: 0, 
            duration: 0.5,
            ease: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
          }
        );
        
        // Animate card 2 to position 1
        tl.fromTo(
          cardArray[1],
          { x: 79, y: 125, opacity: 1, zIndex: 2 },
          { 
            x: 0, 
            y: 0, 
            opacity: 0.75, 
            zIndex: 1,
            duration: 0.5,
            ease: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
          },
          '<'
        );
        
        // Animate card 3 to position 2
        tl.to(
          cardArray[2],
          { 
            x: 79, 
            y: 125,
            opacity: 1,
            zIndex: 2,
            duration: 0.5,
            ease: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
          },
          '<'
        );
        
        // Animate card 4 to position 3
        tl.fromTo(
          cardArray[3],
          { x: 0, y: 400, opacity: 0.75, zIndex: 1 },
          { 
            x: 0, 
            y: 250, 
            opacity: 1,
            zIndex: 3,
            duration: 0.5,
            ease: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
          },
          '<'
        );
        
        // After animation completes, rotate the array
        tl.call(() => {
          const firstCard = cardArray.shift();
          if (firstCard) {
            cardArray.push(firstCard);
            // Reset the first card's position
            gsap.set(firstCard, { x: 0, y: 550, opacity: 0, zIndex: 0 });
          }
          setTimeout(startAnim, 3000);
        });
      };
      
      // Start the animation after a short delay
      const timeout = setTimeout(startAnim, 1000);
      
      return () => {
        clearTimeout(timeout);
      };
    }
  }, []);

  // Education System Scroll Animations
  useEffect(() => {
    // Animate degree cards
    const degreeCards = document.querySelectorAll('[data-degree]');
    degreeCards.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'top 65%',
          toggleActions: 'play none none none',
        },
        delay: index * 0.15,
      });
    });

    // Animate info cards
    const infoCards = document.querySelectorAll('[data-info]');
    infoCards.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'top 65%',
          toggleActions: 'play none none none',
        },
        delay: index * 0.1,
      });
    });

    // Animate blocks - expanding images on scroll
    const blockImages = document.querySelectorAll('.block-img');
    blockImages.forEach(box => {
      gsap.to(box, { 
        duration: 1.2,
        ease: "expo.out",
        width: '20%',
        scrollTrigger: {
          trigger: box,
          toggleActions: "play none none reverse",
          start: 'top 80%',
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* Hero Banner Section */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-br from-[#F5F1E8] via-[#FDFCFA] to-white overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[500px]">
            
            {/* Left Side - Country Image */}
            <div className="lg:col-span-4 flex items-center justify-center relative z-10">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Country Landmark"
                  className="w-full max-w-md h-auto object-contain drop-shadow-2xl rounded-lg"
                />
              </div>
            </div>

            {/* Center - Vertical Text "EXPLORE" */}
            <div className="hidden lg:block lg:col-span-3 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 
                  className="text-[80px] font-bold tracking-wider origin-center"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    color: '#E8E1D5',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.05em',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.05)'
                  }}
                >
                  EXPLORE
                </h2>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:col-span-5 space-y-6 relative z-10">
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                <span className="text-[#0F172A]">Discover Your </span>
                <span className="text-[#4B6E48]">Study</span>
                <span className="text-[#0F172A]"> Destination</span>
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg text-[#6B7280] leading-relaxed max-w-xl">
                Explore comprehensive information about studying in this country, from top universities to visa requirements and living costs.
              </p>

              {/* Circular Button */}
              <div className="pt-4">
                <button
                  onClick={() => navigate('/countries')}
                  className="group relative inline-flex items-center justify-center"
                >
                  {/* Circular Background */}
                  <div className="w-36 h-36 rounded-full bg-[#4B6E48] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-xl">
                    <div className="text-center">
                      <span className="block text-white font-semibold text-base mb-1.5 m-[0px]">
                        Explore
                      </span>
                      <span className="block text-white font-semibold text-base">
                        Countries
                      </span>
                      <ArrowRight className="w-5 h-5 text-white mx-auto mt-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#4B6E48] opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-[#4B6E48] opacity-5 blur-3xl"></div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="overview-container">
          <h2 className="overview-heading">Overview</h2>
          <p className="overview-text">
            The United States hosts over 1 million international students annually, offering diverse universities, 
            extensive research opportunities, and strong connections to global industries. Students choose the US 
            for academic excellence, career opportunities, and exposure to innovation.
          </p>
        </div>

        <style>{`
          /* ============================================
             OVERVIEW SECTION
             ============================================ */
          .overview-section {
            position: relative;
            width: 100%;
            background: linear-gradient(to bottom, #F9FAFB 0%, white 100%);
          }

          .overview-container {
            margin: 0 auto;
            width: 100%;
            display: flex;
            flex-direction: column;
          }

          /* Mobile (â‰¤767px): 18px padding */
          @media (max-width: 767px) {
            .overview-container {
              padding: 48px 18px;
              gap: 16px;
              max-width: 100%;
            }
          }

          /* Tablet (768-991px): 32px padding */
          @media (min-width: 768px) and (max-width: 991px) {
            .overview-container {
              padding: 64px 32px;
              gap: 20px;
              max-width: 100%;
            }
          }

          /* Mid-desktop (992-1199px): Contained width */
          @media (min-width: 992px) and (max-width: 1199px) {
            .overview-container {
              max-width: 1100px;
              padding: 80px 40px;
              gap: 24px;
            }
          }

          /* Desktop (â‰¥1200px): max-width 1200px centered */
          @media (min-width: 1200px) {
            .overview-container {
              max-width: 1200px;
              padding: 96px 40px;
              gap: 24px;
            }
          }

          /* ============================================
             OVERVIEW HEADING
             ============================================ */
          .overview-heading {
            font-weight: 700;
            color: #0F172A;
            letter-spacing: -0.02em;
            margin: 0;
            line-height: 1.2;
          }

          /* Mobile: 28px */
          @media (max-width: 767px) {
            .overview-heading {
              font-size: 28px;
            }
          }

          /* Tablet: 36px */
          @media (min-width: 768px) and (max-width: 991px) {
            .overview-heading {
              font-size: 36px;
            }
          }

          /* Desktop: 44-48px */
          @media (min-width: 992px) {
            .overview-heading {
              font-size: 46px;
            }
          }

          /* ============================================
             OVERVIEW TEXT
             ============================================ */
          .overview-text {
            color: #475569;
            font-weight: 400;
            margin: 0;
            max-width: 900px;
          }

          /* Mobile: 15px */
          @media (max-width: 767px) {
            .overview-text {
              font-size: 15px;
              line-height: 1.7;
            }
          }

          /* Tablet: 16px */
          @media (min-width: 768px) and (max-width: 991px) {
            .overview-text {
              font-size: 16px;
              line-height: 1.7;
            }
          }

          /* Desktop: 17-18px */
          @media (min-width: 992px) {
            .overview-text {
              font-size: 18px;
              line-height: 1.65;
            }
          }
        `}</style>
      </section>

      {/* Animated Card Slider Section */}
      <section className="slider-section">
        <div className="slider-wrap">
          <div className="slider" ref={sliderRef}>
            {cardData.map((card, index) => (
              <div
                key={card.id}
                className="slider-item"
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
              >
                <div className="animation-card_image">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="animation-card_content">
                  <h4 className="animation-card_content_title">{card.title}</h4>
                  <p className="animation-card_content_description">{card.description}</p>
                  <p className="animation-card_content_city">{card.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          /* ============================================
             SLIDER SECTION
             ============================================ */
          .slider-section {
            position: relative;
            width: 100%;
            min-height: 600px;
            padding: 80px 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            overflow: hidden;
          }

          .slider-wrap {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding-top: 40px;
          }

          .slider {
            position: relative;
            width: 100%;
            max-width: 600px;
            height: auto;
            margin: 0 auto;
            padding: 0 20px;
          }

          .slider-item {
            width: 100%;
            max-width: 530px;
            padding: 20px 0 25px 30px;
            border-radius: 10px;
            background-color: #ffffff;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
            z-index: 0;
            box-shadow: 0 4px 9px rgba(0, 0, 0, 0.1);
            transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
          }

          /* Position cards in stack */
          .slider-item:nth-child(1) {
            opacity: 0.75;
            z-index: 1;
            transform: translate(0, 0);
          }

          .slider-item:nth-child(2) {
            opacity: 1;
            z-index: 2;
            transform: translate(79px, 125px);
            box-shadow: -5px 8px 8px 0 rgba(82, 89, 129, 0.15);
          }

          .slider-item:nth-child(3) {
            opacity: 1;
            z-index: 3;
            transform: translate(0, 250px);
            box-shadow: -5px 8px 8px 0 rgba(82, 89, 129, 0.15);
          }

          .slider-item:nth-child(4) {
            opacity: 0.75;
            z-index: 1;
            transform: translate(0, 400px);
          }

          .animation-card_image {
            min-width: 60px;
            max-width: 60px;
            max-height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            box-shadow: 0 4px 9px rgba(241, 241, 244, 0.72);
            background-color: #ffffff;
            overflow: hidden;
          }

          .animation-card_image img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
          }

          .animation-card_content {
            width: 100%;
            max-width: 374px;
            margin-left: 26px;
            font-family: 'Inter', sans-serif;
          }

          .animation-card_content_title {
            color: #4a4545;
            font-size: 16px;
            font-weight: 600;
            letter-spacing: -0.18px;
            line-height: 24px;
            margin: 0;
          }

          .animation-card_content_description {
            color: #696d74;
            font-size: 15px;
            font-weight: 400;
            letter-spacing: normal;
            line-height: 24px;
            margin: 10px 0 0 0;
          }

          .animation-card_content_city {
            font-size: 12px;
            margin: 10px 0 0 0;
            font-weight: 500;
            text-transform: uppercase;
            color: #4B6E48;
            letter-spacing: 0.5px;
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .slider-item {
              max-width: calc(100vw - 40px);
              padding: 15px 0 20px 20px;
            }

            .slider-item:nth-child(2) {
              transform: translate(40px, 100px);
            }

            .slider-item:nth-child(3) {
              transform: translate(0, 200px);
            }

            .slider-item:nth-child(4) {
              transform: translate(0, 320px);
            }

            .animation-card_content {
              max-width: calc(100% - 86px);
              margin-left: 16px;
            }
          }
        `}</style>
      </section>

      {/* Education System Section */}
      <section className="education-system-section">
        <div className="education-container">
          {/* Header */}
          <div className="education-header">
            <h2 className="education-title">Education System</h2>
            <p className="education-description">
              The US higher education system emphasizes liberal arts education alongside specialized study.
            </p>
          </div>

          {/* Degree Cards */}
          <div className="degree-cards">
            {/* Bachelor's Degree */}
            <div className="degree-card" data-degree="bachelor">
              <div className="degree-card-header">
                <h3 className="degree-card-title">Bachelor's Degree</h3>
                <div className="degree-duration">
                  <span className="duration-label">Duration</span>
                  <span className="duration-value">4 years</span>
                </div>
              </div>
              <p className="degree-card-description">
                Undergraduate programs combining general education with major-specific courses. Students typically declare major in second year.
              </p>
              <div className="degree-structure">
                <span className="structure-label">Structure:</span>
                <span className="structure-text">General education (2 years) + Major courses (2 years)</span>
              </div>
            </div>

            {/* Master's Degree */}
            <div className="degree-card" data-degree="master">
              <div className="degree-card-header">
                <h3 className="degree-card-title">Master's Degree</h3>
                <div className="degree-duration">
                  <span className="duration-label">Duration</span>
                  <span className="duration-value">1-2 years</span>
                </div>
              </div>
              <p className="degree-card-description">
                Graduate programs with coursework, research, or professional focus. MBA programs typically 2 years.
              </p>
              <div className="degree-structure">
                <span className="structure-label">Structure:</span>
                <span className="structure-text">Coursework + Thesis/Capstone project</span>
              </div>
            </div>

            {/* Doctoral Degree */}
            <div className="degree-card" data-degree="doctoral">
              <div className="degree-card-header">
                <h3 className="degree-card-title">Doctoral Degree (PhD)</h3>
                <div className="degree-duration">
                  <span className="duration-label">Duration</span>
                  <span className="duration-value">4-7 years</span>
                </div>
              </div>
              <p className="degree-card-description">
                Research-intensive programs culminating in dissertation. Often funded through assistantships.
              </p>
              <div className="degree-structure">
                <span className="structure-label">Structure:</span>
                <span className="structure-text">Coursework (2 years) + Research + Dissertation</span>
              </div>
            </div>
          </div>

          {/* Bottom Info Cards */}
          <div className="info-cards-grid">
            {/* Grading System */}
            <div className="info-card" data-info="grading">
              <h4 className="info-card-title">Grading System</h4>
              <p className="info-card-text">
                GPA scale of 0-4.0, with A=4.0, B=3.0, C=2.0, D=1.0, F=0.0
              </p>
            </div>

            {/* Academic Calendar */}
            <div className="info-card" data-info="calendar">
              <h4 className="info-card-title">Academic Calendar</h4>
              <p className="info-card-text">
                Semester system (Fall: August-December, Spring: January-May) or Quarter system
              </p>
            </div>
          </div>
        </div>

        <style>{`
          /* ============================================
             EDUCATION SYSTEM SECTION
             ============================================ */
          .education-system-section {
            position: relative;
            width: 100%;
            background: #FFFFFF;
            padding: 80px 0 100px;
          }

          .education-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 40px;
          }

          /* Header */
          .education-header {
            margin-bottom: 60px;
          }

          .education-title {
            font-size: 42px;
            font-weight: 700;
            color: #0F172A;
            margin: 0 0 16px 0;
            letter-spacing: -0.02em;
          }

          .education-description {
            font-size: 17px;
            color: #4B6E48;
            margin: 0;
            font-weight: 500;
            line-height: 1.6;
          }

          /* Degree Cards */
          .degree-cards {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 30px;
          }

          .degree-card {
            background: #FFFFFF;
            border: 1.5px solid #E5E7EB;
            border-radius: 12px;
            padding: 32px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0;
            transform: translateY(30px);
          }

          .degree-card:hover {
            border-color: #4B6E48;
            box-shadow: 0 8px 24px rgba(75, 110, 72, 0.12);
            transform: translateY(-2px);
          }

          .degree-card-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 16px;
            gap: 20px;
          }

          .degree-card-title {
            font-size: 22px;
            font-weight: 600;
            color: #0F172A;
            margin: 0;
            letter-spacing: -0.01em;
          }

          .degree-duration {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 4px;
            flex-shrink: 0;
          }

          .duration-label {
            font-size: 12px;
            color: #6B7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-weight: 500;
          }

          .duration-value {
            font-size: 18px;
            color: #0F172A;
            font-weight: 600;
          }

          .degree-card-description {
            font-size: 15px;
            color: #475569;
            line-height: 1.7;
            margin: 0 0 20px 0;
          }

          .degree-structure {
            display: flex;
            align-items: baseline;
            gap: 8px;
            padding-top: 16px;
            border-top: 1px solid #F1F5F9;
          }

          .structure-label {
            font-size: 13px;
            font-weight: 600;
            color: #4B6E48;
            flex-shrink: 0;
          }

          .structure-text {
            font-size: 14px;
            color: #64748B;
            line-height: 1.6;
          }

          /* Info Cards Grid */
          .info-cards-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-top: 30px;
          }

          .info-card {
            background: #F9FAFB;
            border: 1.5px solid #E5E7EB;
            border-radius: 12px;
            padding: 28px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0;
            transform: translateY(30px);
          }

          .info-card:hover {
            background: #FFFFFF;
            border-color: #4B6E48;
            box-shadow: 0 4px 16px rgba(75, 110, 72, 0.1);
          }

          .info-card-title {
            font-size: 18px;
            font-weight: 600;
            color: #0F172A;
            margin: 0 0 12px 0;
            letter-spacing: -0.01em;
          }

          .info-card-text {
            font-size: 14px;
            color: #64748B;
            line-height: 1.7;
            margin: 0;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .education-system-section {
              padding: 60px 0 80px;
            }

            .education-container {
              padding: 0 20px;
            }

            .education-title {
              font-size: 32px;
            }

            .education-description {
              font-size: 15px;
            }

            .degree-card {
              padding: 24px;
            }

            .degree-card-header {
              flex-direction: column;
              align-items: flex-start;
            }

            .degree-duration {
              align-items: flex-start;
            }

            .info-cards-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      {/* Animated Info Blocks Section */}
      <section className="animated-blocks-section">
        <div className="blocks-container">
          
          {/* Section Header */}
          <div className="blocks-header">
            <h2 className="blocks-title">Visa Requirements and Process</h2>
            <div className="blocks-meta">
              <div className="meta-item">
                <span className="meta-label">Primary Visa:</span>
                <span className="meta-value">F-1 Student Visa</span>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                <span className="meta-label">Processing Time:</span>
                <span className="meta-value">2-12 weeks (varies by country)</span>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                <span className="meta-label">Validity:</span>
                <span className="meta-value">Duration of studies plus grace period</span>
              </div>
            </div>
          </div>

          <div className="block block-first" data-block="1">
            <div className="block-img">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="Visa Requirements" />
            </div>
            <div className="block-textcon">
              <h3>Visa Requirements</h3>
              <div className="requirements-list">
                <div className="requirement-item">
                  <CheckCircle2 className="requirement-icon" size={16} />
                  <span>I-20 form from SEVP-certified US university</span>
                </div>
                <div className="requirement-item">
                  <CheckCircle2 className="requirement-icon" size={16} />
                  <span>Proof of financial support covering tuition and living expenses</span>
                </div>
                <div className="requirement-item">
                  <CheckCircle2 className="requirement-icon" size={16} />
                  <span>SEVIS fee payment ($350)</span>
                </div>
                <div className="requirement-item">
                  <CheckCircle2 className="requirement-icon" size={16} />
                  <span>Valid passport (valid 6 months beyond intended stay)</span>
                </div>
                <div className="requirement-item">
                  <CheckCircle2 className="requirement-icon" size={16} />
                  <span>Visa application form (DS-160)</span>
                </div>
                <div className="requirement-item">
                  <CheckCircle2 className="requirement-icon" size={16} />
                  <span>Visa interview at US Embassy/Consulate</span>
                </div>
                <div className="requirement-item">
                  <CheckCircle2 className="requirement-icon" size={16} />
                  <span>Academic transcripts and test scores</span>
                </div>
                <div className="requirement-item">
                  <CheckCircle2 className="requirement-icon" size={16} />
                  <span>Proof of intent to return to home country</span>
                </div>
              </div>
            </div>
            <div className="block-number">01</div>
          </div>

          <div className="block" data-block="2">
            <div className="block-img">
              <img src="https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80" alt="Application Process" />
            </div>
            <div className="block-textcon">
              <h3>Receive I-20 from university</h3>
              <p>University issues I-20 after confirming enrollment and financial capacity</p>
              <div className="block-timeline">After admission and financial documents submitted</div>
            </div>
            <div className="block-number">02</div>
          </div>

          <div className="block" data-block="3">
            <div className="block-img">
              <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Pay SEVIS fee" />
            </div>
            <div className="block-textcon">
              <h3>Pay SEVIS fee</h3>
              <p>Pay $350 SEVIS I-901 fee online at fmjfee.com</p>
              <div className="block-timeline">Before visa interview</div>
            </div>
            <div className="block-number">03</div>
          </div>

          <div className="block" data-block="4">
            <div className="block-img">
              <img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="Complete DS-160 form" />
            </div>
            <div className="block-textcon">
              <h3>Complete DS-160 form</h3>
              <p>Online nonimmigrant visa application with photo upload</p>
              <div className="block-timeline">1-2 weeks before interview</div>
            </div>
            <div className="block-number">04</div>
          </div>

          <div className="block" data-block="5">
            <div className="block-img">
              <img src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Schedule visa interview" />
            </div>
            <div className="block-textcon">
              <h3>Schedule visa interview</h3>
              <p>Book appointment at US Embassy/Consulate in home country</p>
              <div className="block-timeline">2-12 weeks wait time</div>
            </div>
            <div className="block-number">05</div>
          </div>

          <div className="block" data-block="6">
            <div className="block-img">
              <img src="https://images.unsplash.com/photo-1552083974-186346191183?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Attend visa interview" />
            </div>
            <div className="block-textcon">
              <h3>Attend visa interview</h3>
              <p>Bring all required documents and be prepared to explain study plans</p>
              <div className="block-timeline">15-30 minutes</div>
            </div>
            <div className="block-number">06</div>
          </div>

          <div className="block" data-block="7">
            <div className="block-img">
              <img src="https://images.unsplash.com/photo-1513346940221-6f673d962e97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Receive visa decision" />
            </div>
            <div className="block-textcon">
              <h3>Receive visa decision</h3>
              <p>Passport returned with visa if approved; may require administrative processing</p>
              <div className="block-timeline">Same day to 2 weeks</div>
            </div>
            <div className="block-number">07</div>
          </div>

        </div>

        <style>{`
          /* ============================================
             ANIMATED BLOCKS SECTION
             ============================================ */
          .animated-blocks-section {
            position: relative;
            width: 100%;
            background: #1A1A1A;
            padding: 100px 50px 50px;
          }

          .blocks-container {
            max-width: 1000px;
            margin: 0 auto;
            display: flex;
            width: 100%;
            flex-direction: column;
            gap: 1rem;
          }

          .blocks-header {
            margin-bottom: 20px;
          }

          .blocks-title {
            font-size: 2.5rem;
            font-weight: 600;
            color: #efefef;
            letter-spacing: -00.04em;
            margin: 0;
          }

          .blocks-meta {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 10px;
            flex-wrap: wrap;
          }

          .meta-item {
            display: flex;
            align-items: center;
            gap: 5px;
          }

          .meta-label {
            font-size: 0.85rem;
            color: #929295;
            font-weight: 500;
          }

          .meta-value {
            font-size: 0.85rem;
            color: #efefef;
            font-weight: 600;
          }

          .meta-divider {
            width: 1px;
            height: 10px;
            background-color: #6b6b6e;
          }

          .block {
            position: relative;
            display: flex;
            width: 100%;
            height: 12rem;
            padding: 6px;
            background-color: #161618;
            border-radius: 4px;
          }

          /* First block with visa requirements needs more height */
          .block-first {
            height: auto;
            min-height: 22rem;
            padding: 24px 6px 24px 6px;
          }

          .block-img {
            position: relative;
            z-index: 1;
            display: flex;
            overflow: hidden;
            width: 0;
            height: 100%;
            align-items: center;
            flex: 0 0 auto;
            border-radius: 0.3em;
            background-color: #1c1c1e;
          }

          .block-img img {
            width: 100%;
            height: 100%;
            margin: 0 auto;
            object-fit: cover;
          }

          .block-textcon {
            position: relative;
            z-index: 1;
            display: flex;
            margin-left: 2rem;
            flex-direction: column;
            justify-content: center;
            font-family: 'Inter', sans-serif;
          }

          .block-textcon h3 {
            font-size: 2rem;
            line-height: 1em;
            font-weight: 300;
            letter-spacing: -0.04em;
            color: #efefef;
            margin-bottom: 1.2rem;
            margin-top: 0;
          }

          .block-textcon p {
            color: #929295;
            margin-bottom: 0px;
            font-size: 1rem;
            line-height: 1.3em;
            font-weight: 300;
            margin-top: 0;
          }

          .block-number {
            position: absolute;
            left: 0%;
            top: 0%;
            right: auto;
            bottom: auto;
            margin-left: -2rem;
            color: #6b6b6e;
            font-family: 'Inconsolata', monospace;
            font-size: 0.85rem;
            line-height: 1.2em;
            font-weight: 400;
            letter-spacing: 0.05em;
            text-decoration: none;
            text-transform: uppercase;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .animated-blocks-section {
              padding: 60px 20px 40px;
            }

            .block {
              height: auto;
              min-height: 10rem;
              padding: 12px;
            }

            .block-textcon {
              margin-left: 1rem;
            }

            .block-textcon h3 {
              font-size: 1.5rem;
              margin-bottom: 0.8rem;
            }

            .block-textcon p {
              font-size: 0.9rem;
            }

            .block-number {
              margin-left: -1.5rem;
              font-size: 0.75rem;
            }
          }

          /* Requirements List */
          .requirements-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .requirement-item {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
          }

          .requirement-icon {
            color: #4B6E48;
          }

          /* Timeline */
          .block-timeline {
            font-size: 0.85rem;
            color: #929295;
            margin-top: 5px;
          }
        `}</style>
      </section>

      {/* Card Grid Section with SVG Filters */}
      <section className="card-grid-section">
        {/* Section Header */}
        <div className="card-grid-header">
          <h2 className="card-grid-title">Cost of Studying</h2>
          <p className="card-grid-description">
            Comprehensive breakdown of tuition, living expenses, and other costs
          </p>
        </div>

        {/* SVG Filters */}
        <svg aria-hidden="true" width="0" height="0" style={{ position: 'fixed' }}>
          <defs>
            <filter id="shape">
              <feComponentTransfer>
                <feFuncA type="table" tableValues="0 5 0" />
              </feComponentTransfer>
            </filter>
            <filter id="round">
              <feGaussianBlur stdDeviation="5" />
              <feComponentTransfer>
                <feFuncA type="table" tableValues="-5 6" />
              </feComponentTransfer>
              <feComposite in="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>

        <div className="card-grid-wrapper">
          <div className="card-grid" style={{ '--m': 10 } as React.CSSProperties}>
            
            {/* Card 1 - Top Left */}
            <div className="card-wrap card-wrap-1">
              <div className="card-back"></div>
              <div className="grid-card" style={{ '--img': 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80)' } as React.CSSProperties}>
                <h2>Campus Life</h2>
              </div>
            </div>

            {/* Card 2 - Right Side */}
            <div className="card-wrap card-wrap-2">
              <div className="card-back"></div>
              <div className="grid-card" style={{ '--img': 'url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80)' } as React.CSSProperties}>
                <h2>Student Events</h2>
              </div>
            </div>

            {/* Card 3 - Bottom Left */}
            <div className="card-wrap card-wrap-3">
              <div className="card-back"></div>
              <div className="grid-card" style={{ '--img': 'url(https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&q=80)' } as React.CSSProperties}>
                <h2>Study Abroad Experience</h2>
                <span className="card-heart" data-ico="ðŸ’•"></span>
                <div className="card-tags">
                  <span className="card-tag">international</span>
                  <span className="card-tag">culture</span>
                </div>
              </div>
            </div>

            {/* Button 1 - Map */}
            <button className="grid-button grid-button-1" data-ico="ðŸ“"></button>

            {/* Button 2 - Aurora */}
            <button className="grid-button grid-button-2">explore</button>

          </div>
        </div>

        <style>{`
          /* ============================================
             CARD GRID SECTION
             ============================================ */
          .card-grid-section {
            position: relative;
            width: 100%;
            background: #F9FAFB;
            padding: 100px 0;
          }

          /* Section Header */
          .card-grid-header {
            max-width: 1200px;
            margin: 0 auto 60px;
            padding: 0 40px;
          }

          .card-grid-title {
            font-size: 42px;
            font-weight: 700;
            color: #0F172A;
            margin: 0 0 16px 0;
            letter-spacing: -0.02em;
          }

          .card-grid-description {
            font-size: 17px;
            color: #4B6E48;
            margin: 0;
            font-weight: 500;
            line-height: 1.6;
          }

          .card-grid-wrapper {
            display: grid;
            place-content: center;
            grid-template: min(100%, 100vw) / min(100%, 40em);
            padding: 0.5em;
          }

          /* Main Grid */
          .card-grid, .grid-card {
            display: grid;
            gap: 0.5em;
          }

          .card-grid {
            grid-template: 
              auto 4fr auto 3fr / 
              4fr repeat(3, minmax(1.5lh, auto)) 4fr;
            color: #ededed;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
            filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));
          }

          /* Card Wraps */
          .card-wrap, .card-back {
            display: grid;
            grid-template: subgrid / subgrid;
          }

          .card-wrap {
            clip-path: inset(-2em);
            filter: url(#shape) url(#round);
            isolation: isolate;
          }

          /* Card 1 - Top Left */
          .card-wrap-1 {
            grid-area: 1 / 1 / span 2 / span 3;
          }

          .card-wrap-1 .card-back::before,
          .card-wrap-1 .grid-card {
            grid-area: inherit;
            margin: 0.5em 0 0 2.5em;
          }

          /* Card 2 - Right Side */
          .card-wrap-2 {
            grid-area: 2 / 2 / span 2 / -1;
          }

          .card-wrap-2 .card-back::before,
          .card-wrap-2 .grid-card {
            grid-area: 1 / 3 / -2 / -1;
            margin-bottom: -2.5em;
          }

          .card-wrap-2 .card-back::after {
            grid-area: 2 / 1 / -1 / -2;
          }

          .card-wrap-2 h2 {
            place-self: start end;
            text-align: right;
          }

          /* Card 3 - Bottom Left */
          .card-wrap-3 {
            grid-area: 3 / 1 / -1 / -2;
          }

          .card-wrap-3 .card-back::before,
          .card-wrap-3 .grid-card {
            grid-area: 1 / 1 / -1 / -2;
            margin-right: -1.5em;
          }

          .card-wrap-3 .card-back::after {
            grid-area: 1 / 2 / span 1 / -1;
          }

          .card-wrap-3 .grid-card {
            grid-template-rows: auto 1fr auto;
          }

          .card-wrap-3 h2 {
            grid-row: 2;
          }

          /* Card Back Elements */
          .card-back {
            grid-area: 1 / 1 / -1 / -1;
          }

          .card-back::before,
          .card-back::after {
            content: '';
          }

          .card-back::before {
            outline: solid 9em #000;
            border-radius: 0.75em;
          }

          .card-back::after {
            margin: calc(-1 * 0.5em);
            background: #000;
            border-radius: 3lh;
          }

          .card-wrap-1 .card-back::after {
            grid-area: 1 / 3;
          }

          /* Grid Cards */
          .grid-card {
            z-index: 1;
            padding: 0.5em;
            opacity: calc(1 - 1 / var(--m));
            background: var(--img) 50% / cover;
            mix-blend-mode: lighten;
          }

          .grid-card h2 {
            align-self: end;
            font: 700 1.5em 'Inter', sans-serif;
            margin: 0;
          }

          /* Buttons */
          .grid-button {
            z-index: 2;
            border: none;
            padding: 0.1875em 0 0;
            background: #4B6E48;
            color: inherit;
            font: 1.5em / 2 'Inter', sans-serif;
            border-radius: 3lh;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .grid-button:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 12px rgba(75, 110, 72, 0.4);
          }

          .grid-button-1 {
            grid-area: 1 / 3;
            aspect-ratio: 1;
          }

          .grid-button-2 {
            grid-area: 3 / 2 / span 1 / span 3;
            aspect-ratio: 3;
            background: linear-gradient(#e36414, #fbab24);
            text-transform: uppercase;
            letter-spacing: 0.1em;
            font-weight: 600;
          }

          /* Card Decorations */
          [data-ico]::before {
            text-shadow: none;
            filter: brightness(0) invert(1) drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.6));
            content: attr(data-ico);
          }

          .card-heart {
            place-self: start;
            line-height: 2;
            font-size: 1.5em;
          }

          .card-tags {
            display: flex;
            gap: 0.5em;
          }

          .card-tag {
            border: solid 2px #4B6E48;
            padding: 2px 0.5em;
            border-radius: 5px;
            box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.8), 1px 1px 3px rgba(0, 0, 0, 0.6);
            background: rgba(75, 110, 72, 0.75);
            font-size: 0.875rem;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .card-grid-section {
              padding: 60px 0;
            }

            .card-grid {
              font-size: 0.85rem;
            }

            .grid-card h2 {
              font-size: 1.25em;
            }

            .grid-button {
              font-size: 1.25em;
            }
          }
        `}</style>
      </section>

      {/* Living Expenses Section */}
      <section className="living-expenses-section">
        <div className="living-expenses-container">
          {/* Header */}
          <div className="living-expenses-header">
            <h3 className="living-expenses-title">Living Expenses</h3>
            <p className="living-expenses-subtitle">Living costs vary significantly by location</p>
          </div>

          {/* Expense Items */}
          <div className="expense-items">
            {/* Housing */}
            <div className="expense-item">
              <div className="expense-item-content">
                <h4 className="expense-item-title">Housing</h4>
                <p className="expense-item-description">On-campus housing or shared apartments; varies by city</p>
              </div>
              <div className="expense-item-pricing">
                <span className="expense-range-primary">$6,000-$10,000/year</span>
                <span className="expense-range-secondary">to $15,000-$25,000/year</span>
              </div>
            </div>

            {/* Food */}
            <div className="expense-item">
              <div className="expense-item-content">
                <h4 className="expense-item-title">Food</h4>
                <p className="expense-item-description">Meal plans, groceries, and occasional dining out</p>
              </div>
              <div className="expense-item-pricing">
                <span className="expense-range-primary">$3,000-$4,000/year</span>
                <span className="expense-range-secondary">to $6,000-$8,000/year</span>
              </div>
            </div>

            {/* Transportation */}
            <div className="expense-item">
              <div className="expense-item-content">
                <h4 className="expense-item-title">Transportation</h4>
                <p className="expense-item-description">Public transit in cities; car expenses in suburban areas</p>
              </div>
              <div className="expense-item-pricing">
                <span className="expense-range-primary">$500-$1,000/year</span>
                <span className="expense-range-secondary">to $2,000-$4,000/year</span>
              </div>
            </div>

            {/* Books & Supplies */}
            <div className="expense-item">
              <div className="expense-item-content">
                <h4 className="expense-item-title">Books & Supplies</h4>
                <p className="expense-item-description">Textbooks, course materials, lab supplies</p>
              </div>
              <div className="expense-item-pricing">
                <span className="expense-range-primary">$500-$800/year</span>
                <span className="expense-range-secondary">to $1,000-$1,500/year</span>
              </div>
            </div>

            {/* Health Insurance */}
            <div className="expense-item">
              <div className="expense-item-content">
                <h4 className="expense-item-title">Health Insurance</h4>
                <p className="expense-item-description">Mandatory health insurance for international students</p>
              </div>
              <div className="expense-item-pricing">
                <span className="expense-range-primary">$1,500-$2,500/year</span>
                <span className="expense-range-secondary">to $3,000-$4,000/year</span>
              </div>
            </div>

            {/* Personal Expenses */}
            <div className="expense-item">
              <div className="expense-item-content">
                <h4 className="expense-item-title">Personal Expenses</h4>
                <p className="expense-item-description">Clothing, entertainment, phone, miscellaneous</p>
              </div>
              <div className="expense-item-pricing">
                <span className="expense-range-primary">$1,500-$2,000/year</span>
                <span className="expense-range-secondary">to $3,000-$5,000/year</span>
              </div>
            </div>

            {/* Total Summary */}
            <div className="expense-total">
              <div className="expense-total-content">
                <h4 className="expense-total-title">Estimated Total Living Expenses:</h4>
              </div>
              <div className="expense-total-pricing">
                <span className="expense-total-amount">$15,000-$30,000 per year</span>
                <span className="expense-total-note">(varies significantly by location)</span>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          /* ============================================
             LIVING EXPENSES SECTION
             ============================================ */
          .living-expenses-section {
            position: relative;
            width: 100%;
            background: #FFFFFF;
            padding: 80px 0 100px;
          }

          .living-expenses-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 40px;
          }

          /* Header */
          .living-expenses-header {
            margin-bottom: 32px;
          }

          .living-expenses-title {
            font-size: 28px;
            font-weight: 600;
            color: #0F172A;
            margin: 0 0 8px 0;
            letter-spacing: -0.01em;
          }

          .living-expenses-subtitle {
            font-size: 15px;
            color: #64748B;
            margin: 0;
            font-weight: 400;
          }

          /* Expense Items */
          .expense-items {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .expense-item {
            background: #FFFFFF;
            border: 1.5px solid #E5E7EB;
            border-radius: 12px;
            padding: 24px 28px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 24px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .expense-item:hover {
            border-color: #4B6E48;
            box-shadow: 0 4px 16px rgba(75, 110, 72, 0.1);
          }

          .expense-item-content {
            flex: 1;
          }

          .expense-item-title {
            font-size: 18px;
            font-weight: 600;
            color: #0F172A;
            margin: 0 0 6px 0;
            letter-spacing: -0.01em;
          }

          .expense-item-description {
            font-size: 14px;
            color: #64748B;
            line-height: 1.6;
            margin: 0;
          }

          .expense-item-pricing {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 4px;
            flex-shrink: 0;
          }

          .expense-range-primary {
            font-size: 16px;
            font-weight: 700;
            color: #4B6E48;
            white-space: nowrap;
          }

          .expense-range-secondary {
            font-size: 13px;
            font-weight: 500;
            color: #64748B;
            white-space: nowrap;
          }

          /* Total Summary */
          .expense-total {
            background: linear-gradient(135deg, #4B6E48 0%, #6B8E68 100%);
            border-radius: 12px;
            padding: 24px 28px;
            margin-top: 16px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 24px;
          }

          .expense-total-content {
            flex: 1;
          }

          .expense-total-title {
            font-size: 18px;
            font-weight: 600;
            color: #FFFFFF;
            margin: 0;
            letter-spacing: -0.01em;
          }

          .expense-total-pricing {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 4px;
            flex-shrink: 0;
          }

          .expense-total-amount {
            font-size: 18px;
            font-weight: 700;
            color: #FFFFFF;
            white-space: nowrap;
          }

          .expense-total-note {
            font-size: 13px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.9);
            white-space: nowrap;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .living-expenses-section {
              padding: 60px 0 80px;
            }

            .living-expenses-container {
              padding: 0 20px;
            }

            .living-expenses-title {
              font-size: 24px;
            }

            .expense-item,
            .expense-total {
              flex-direction: column;
              gap: 12px;
            }

            .expense-item-pricing,
            .expense-total-pricing {
              align-items: flex-start;
            }

            .expense-item {
              padding: 20px 24px;
            }

            .expense-total {
              padding: 20px 24px;
            }
          }
        `}</style>
      </section>

      {/* Other Costs Section */}
      <section className="other-costs-section">
        <div className="other-costs-container">
          {/* Section Header */}
          <div className="other-costs-header">
            <h3 className="other-costs-title">Other Costs</h3>
          </div>

          {/* Cost Items Grid */}
          <div className="other-costs-grid">
            {/* Visa Application Fee */}
            <div className="other-cost-item">
              <span className="other-cost-label">Visa application fee</span>
              <span className="other-cost-value">$185</span>
            </div>

            {/* SEVIS Fee */}
            <div className="other-cost-item">
              <span className="other-cost-label">SEVIS fee</span>
              <span className="other-cost-value">$350</span>
            </div>

            {/* Flight Tickets */}
            <div className="other-cost-item other-cost-item-highlight">
              <span className="other-cost-label">Flight tickets</span>
              <span className="other-cost-value">$500-$2,000+ <span className="other-cost-note">(varies by origin)</span></span>
            </div>

            {/* Initial Setup Costs */}
            <div className="other-cost-item other-cost-item-highlight">
              <span className="other-cost-label">Initial setup costs</span>
              <span className="other-cost-value">$1,000-$3,000 <span className="other-cost-note">(bedding, kitchen, etc.)</span></span>
            </div>
          </div>

          {/* Total Annual Cost Estimate */}
          <div className="total-estimate-box">
            <div className="total-estimate-header">
              <span className="total-estimate-label">Total Annual Cost Estimate:</span>
              <span className="total-estimate-amount">$25,000-$70,000+<span className="total-estimate-period"> per year (total for tuition, living, and expenses)</span></span>
            </div>
            <p className="total-estimate-note">
              This includes tuition, living expenses, and miscellaneous costs. Actual costs vary by university, city, and lifestyle.
            </p>
          </div>

          {/* Managing Costs */}
          <div className="managing-costs-box">
            <h4 className="managing-costs-title">Managing Costs</h4>
            <ul className="managing-costs-list">
              <li className="managing-cost-item">Compare costs between public and private universities</li>
              <li className="managing-cost-item">Consider universities in lower cost of living areas</li>
              <li className="managing-cost-item">Apply for scholarships and graduate assistantships</li>
              <li className="managing-cost-item">On-campus employment can help cover living expenses</li>
              <li className="managing-cost-item">Budget carefully and track expenses</li>
            </ul>
          </div>
        </div>

        <style>{`
          /* ============================================
             OTHER COSTS SECTION
             ============================================ */
          .other-costs-section {
            position: relative;
            width: 100%;
            background: #F9FAFB;
            padding: 80px 0 100px;
          }

          .other-costs-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 40px;
          }

          /* Section Header */
          .other-costs-header {
            margin-bottom: 24px;
          }

          .other-costs-title {
            font-size: 28px;
            font-weight: 600;
            color: #0F172A;
            margin: 0;
            letter-spacing: -0.01em;
          }

          /* Cost Items Grid */
          .other-costs-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            margin-bottom: 32px;
          }

          .other-cost-item {
            background: #FFFFFF;
            border: 1.5px solid #E5E7EB;
            border-radius: 8px;
            padding: 16px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .other-cost-item:hover {
            border-color: #4B6E48;
            box-shadow: 0 2px 8px rgba(75, 110, 72, 0.08);
          }

          .other-cost-item-highlight {
            border-color: #4B6E48;
            background: #FAFDFB;
          }

          .other-cost-label {
            font-size: 15px;
            color: #0F172A;
            font-weight: 500;
          }

          .other-cost-value {
            font-size: 15px;
            color: #4B6E48;
            font-weight: 700;
            text-align: right;
            white-space: nowrap;
          }

          .other-cost-note {
            font-size: 13px;
            color: #64748B;
            font-weight: 500;
          }

          /* Total Annual Cost Estimate */
          .total-estimate-box {
            background: linear-gradient(135deg, #FEF3F2 0%, #FEE2E2 100%);
            border: 1.5px solid #FCA5A5;
            border-radius: 12px;
            padding: 24px 28px;
            margin-bottom: 24px;
          }

          .total-estimate-header {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 12px;
          }

          .total-estimate-label {
            font-size: 16px;
            font-weight: 600;
            color: #0F172A;
          }

          .total-estimate-amount {
            font-size: 22px;
            font-weight: 700;
            color: #DC2626;
            letter-spacing: -0.01em;
          }

          .total-estimate-period {
            font-size: 14px;
            font-weight: 500;
            color: #64748B;
          }

          .total-estimate-note {
            font-size: 13px;
            color: #64748B;
            line-height: 1.6;
            margin: 0;
            font-style: italic;
          }

          /* Managing Costs */
          .managing-costs-box {
            background: #FFFFFF;
            border: 1.5px solid #E5E7EB;
            border-radius: 12px;
            padding: 24px 28px;
          }

          .managing-costs-title {
            font-size: 18px;
            font-weight: 600;
            color: #0F172A;
            margin: 0 0 16px 0;
            letter-spacing: -0.01em;
          }

          .managing-costs-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .managing-cost-item {
            font-size: 14px;
            color: #4B6E48;
            line-height: 1.6;
            padding-left: 20px;
            position: relative;
          }

          .managing-cost-item::before {
            content: 'â€¢';
            position: absolute;
            left: 0;
            font-size: 18px;
            font-weight: 700;
            color: #4B6E48;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .other-costs-section {
              padding: 60px 0 80px;
            }

            .other-costs-container {
              padding: 0 20px;
            }

            .other-costs-title {
              font-size: 24px;
            }

            .other-costs-grid {
              grid-template-columns: 1fr;
              gap: 12px;
            }

            .other-cost-item {
              flex-direction: column;
              align-items: flex-start;
              gap: 8px;
            }

            .other-cost-value {
              text-align: left;
              white-space: normal;
            }

            .total-estimate-box {
              padding: 20px 24px;
            }

            .total-estimate-amount {
              font-size: 18px;
            }

            .total-estimate-period {
              font-size: 13px;
            }

            .managing-costs-box {
              padding: 20px 24px;
            }
          }
        `}</style>
      </section>

      {/* Work Rights and Opportunities Section */}
      <section className="work-rights-section">
        <div className="work-rights-container">
          {/* Section Header */}
          <div className="work-rights-header">
            <h2 className="work-rights-title">Work Rights and Opportunities</h2>
            <p className="work-rights-subtitle">Understanding employment authorization during and after studies</p>
          </div>

          {/* During Your Studies */}
          <div className="work-subsection">
            <h3 className="work-subsection-title">During Your Studies</h3>

            <div className="work-cards-grid">
              {/* On-Campus Employment Card */}
              <div className="work-card">
                <div className="work-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h4 className="work-card-title">On-Campus Employment</h4>
                <div className="work-card-details">
                  <div className="work-detail-item">
                    <span className="work-detail-label">Hours:</span>
                    <span className="work-detail-value">Up to 20 hours/week during semester, full-time during breaks</span>
                  </div>
                  <div className="work-detail-item">
                    <span className="work-detail-label">Eligibility:</span>
                    <span className="work-detail-value">All F-1 students after program begins</span>
                  </div>
                  <div className="work-detail-item">
                    <span className="work-detail-label">Authorization:</span>
                    <span className="work-detail-value">No separate work authorization required</span>
                  </div>
                </div>
                <div className="work-examples">
                  <span className="work-examples-label">Examples:</span>
                  <div className="work-tags">
                    <span className="work-tag">Library assistant</span>
                    <span className="work-tag">Dining hall worker</span>
                    <span className="work-tag">Research assistant</span>
                    <span className="work-tag">IT support</span>
                  </div>
                </div>
              </div>

              {/* Off-Campus Employment (CPT) Card */}
              <div className="work-card">
                <div className="work-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h4 className="work-card-title">Off-Campus Employment (CPT)</h4>
                <div className="work-card-details">
                  <div className="work-detail-item">
                    <span className="work-detail-label">Hours:</span>
                    <span className="work-detail-value">Part-time or full-time based on program requirements</span>
                  </div>
                  <div className="work-detail-item">
                    <span className="work-detail-label">Eligibility:</span>
                    <span className="work-detail-value">After completing one academic year</span>
                  </div>
                  <div className="work-detail-item">
                    <span className="work-detail-label">Authorization:</span>
                    <span className="work-detail-value">Requires CPT authorization from DSO</span>
                  </div>
                </div>
                <div className="work-requirements">
                  <span className="work-requirements-label">Requirements:</span>
                  <ul className="work-requirements-list">
                    <li>Must be integral to curriculum</li>
                    <li>Requires university approval</li>
                    <li>Job must relate to field of study</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* After Graduation */}
          <div className="work-subsection">
            <h3 className="work-subsection-title">After Graduation</h3>

            {/* OPT Card */}
            <div className="opt-card">
              <div className="opt-header">
                <div className="opt-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h4 className="opt-title">Optional Practical Training (OPT)</h4>
              </div>

              <div className="opt-details-grid">
                <div className="opt-detail">
                  <span className="opt-detail-label">Duration:</span>
                  <span className="opt-detail-value">12 months standard, 24 months STEM extension</span>
                </div>
                <div className="opt-detail">
                  <span className="opt-detail-label">Eligibility:</span>
                  <span className="opt-detail-value">Available to F-1 students who complete degree</span>
                </div>
                <div className="opt-detail">
                  <span className="opt-detail-label">Application:</span>
                  <span className="opt-detail-value">Apply to USCIS 90 days before to 60 days after completion</span>
                </div>
              </div>

              <div className="opt-requirements">
                <span className="opt-requirements-label">Requirements:</span>
                <ul className="opt-requirements-list">
                  <li className="opt-requirement-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Work must relate to field of study</span>
                  </li>
                  <li className="opt-requirement-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Maximum 90 days unemployment during 12-month period</span>
                  </li>
                  <li className="opt-requirement-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Maintain records and report employment to university</span>
                  </li>
                </ul>
              </div>

              {/* STEM Extension */}
              <div className="stem-extension">
                <div className="stem-header">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                  <span className="stem-title">STEM Extension</span>
                </div>
                <div className="stem-details">
                  <div className="stem-detail">
                    <span className="stem-label">Available for:</span>
                    <span className="stem-value">For degrees in STEM fields</span>
                  </div>
                  <div className="stem-detail">
                    <span className="stem-label">Duration:</span>
                    <span className="stem-value">24 additional months (36 months total)</span>
                  </div>
                  <div className="stem-detail">
                    <span className="stem-label">Requirement:</span>
                    <span className="stem-value">Employer must use E-Verify</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Critical Work Authorization Notes */}
          <div className="critical-notes">
            <div className="critical-notes-header">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <h4 className="critical-notes-title">Critical Work Authorization Notes</h4>
            </div>
            <ul className="critical-notes-list">
              <li>Working without authorization violates F-1 status</li>
              <li>Always verify work authorization before accepting employment</li>
              <li>Track work hours carefully to avoid exceeding limits</li>
              <li>CPT application must be submitted while in valid F-1 status</li>
            </ul>
          </div>
        </div>

        <style>{`
          /* ============================================
             WORK RIGHTS AND OPPORTUNITIES SECTION
             ============================================ */
          .work-rights-section {
            position: relative;
            width: 100%;
            background: #FFFFFF;
            padding: 100px 0;
          }

          .work-rights-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 40px;
          }

          /* Header */
          .work-rights-header {
            margin-bottom: 48px;
          }

          .work-rights-title {
            font-size: 38px;
            font-weight: 700;
            color: #0F172A;
            margin: 0 0 12px 0;
            letter-spacing: -0.02em;
          }

          .work-rights-subtitle {
            font-size: 16px;
            color: #4B6E48;
            margin: 0;
            font-weight: 500;
          }

          /* Subsections */
          .work-subsection {
            margin-bottom: 48px;
          }

          .work-subsection-title {
            font-size: 22px;
            font-weight: 600;
            color: #0F172A;
            margin: 0 0 24px 0;
            letter-spacing: -0.01em;
          }

          /* Work Cards Grid */
          .work-cards-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-bottom: 32px;
          }

          .work-card {
            background: #FFFFFF;
            border: 1.5px solid #E5E7EB;
            border-radius: 12px;
            padding: 24px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .work-card:hover {
            border-color: #4B6E48;
            box-shadow: 0 4px 16px rgba(75, 110, 72, 0.08);
          }

          .work-card-icon {
            width: 40px;
            height: 40px;
            background: #F0F4F0;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #4B6E48;
            margin-bottom: 16px;
          }

          .work-card-title {
            font-size: 18px;
            font-weight: 600;
            color: #0F172A;
            margin: 0 0 16px 0;
            letter-spacing: -0.01em;
          }

          .work-card-details {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 16px;
          }

          .work-detail-item {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .work-detail-label {
            font-size: 13px;
            font-weight: 600;
            color: #64748B;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .work-detail-value {
            font-size: 14px;
            color: #0F172A;
            line-height: 1.6;
          }

          /* Work Examples */
          .work-examples {
            padding-top: 16px;
            border-top: 1px solid #E5E7EB;
          }

          .work-examples-label {
            font-size: 13px;
            font-weight: 600;
            color: #64748B;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            display: block;
            margin-bottom: 8px;
          }

          .work-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }

          .work-tag {
            font-size: 13px;
            color: #4B6E48;
            background: #F0F4F0;
            padding: 4px 10px;
            border-radius: 6px;
            font-weight: 500;
          }

          /* Work Requirements */
          .work-requirements {
            padding-top: 16px;
            border-top: 1px solid #E5E7EB;
          }

          .work-requirements-label {
            font-size: 13px;
            font-weight: 600;
            color: #64748B;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            display: block;
            margin-bottom: 8px;
          }

          .work-requirements-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .work-requirements-list li {
            font-size: 13px;
            color: #0F172A;
            padding-left: 16px;
            position: relative;
            line-height: 1.6;
          }

          .work-requirements-list li::before {
            content: 'â€¢';
            position: absolute;
            left: 0;
            color: #4B6E48;
            font-weight: 700;
          }

          /* OPT Card */
          .opt-card {
            background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%);
            border: 1.5px solid #86EFAC;
            border-radius: 12px;
            padding: 28px;
          }

          .opt-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
          }

          .opt-icon {
            width: 36px;
            height: 36px;
            background: #4B6E48;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
          }

          .opt-title {
            font-size: 20px;
            font-weight: 600;
            color: #0F172A;
            margin: 0;
            letter-spacing: -0.01em;
          }

          .opt-details-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 20px;
          }

          .opt-detail {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .opt-detail-label {
            font-size: 13px;
            font-weight: 600;
            color: #64748B;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .opt-detail-value {
            font-size: 14px;
            color: #0F172A;
            line-height: 1.6;
          }

          .opt-requirements {
            margin-bottom: 20px;
          }

          .opt-requirements-label {
            font-size: 13px;
            font-weight: 600;
            color: #64748B;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            display: block;
            margin-bottom: 12px;
          }

          .opt-requirements-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .opt-requirement-item {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            font-size: 14px;
            color: #0F172A;
            line-height: 1.6;
          }

          .opt-requirement-item svg {
            color: #4B6E48;
            flex-shrink: 0;
            margin-top: 2px;
          }

          /* STEM Extension */
          .stem-extension {
            background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
            border: 1.5px solid #93C5FD;
            border-radius: 10px;
            padding: 20px;
          }

          .stem-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 16px;
          }

          .stem-header svg {
            color: #3B82F6;
          }

          .stem-title {
            font-size: 16px;
            font-weight: 600;
            color: #0F172A;
          }

          .stem-details {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .stem-detail {
            display: flex;
            gap: 8px;
          }

          .stem-label {
            font-size: 13px;
            font-weight: 600;
            color: #64748B;
            flex-shrink: 0;
          }

          .stem-value {
            font-size: 13px;
            color: #0F172A;
            line-height: 1.6;
          }

          /* Critical Notes */
          .critical-notes {
            background: linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%);
            border: 1.5px solid #FCA5A5;
            border-radius: 12px;
            padding: 24px 28px;
          }

          .critical-notes-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 16px;
          }

          .critical-notes-header svg {
            color: #DC2626;
            flex-shrink: 0;
          }

          .critical-notes-title {
            font-size: 18px;
            font-weight: 600;
            color: #0F172A;
            margin: 0;
            letter-spacing: -0.01em;
          }

          .critical-notes-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .critical-notes-list li {
            font-size: 14px;
            color: #DC2626;
            padding-left: 20px;
            position: relative;
            line-height: 1.6;
          }

          .critical-notes-list li::before {
            content: 'â€¢';
            position: absolute;
            left: 0;
            font-weight: 700;
          }

          /* Responsive Design */
          @media (max-width: 968px) {
            .work-cards-grid {
              grid-template-columns: 1fr;
            }

            .opt-details-grid {
              grid-template-columns: 1fr;
              gap: 16px;
            }
          }

          @media (max-width: 768px) {
            .work-rights-section {
              padding: 60px 0 80px;
            }

            .work-rights-container {
              padding: 0 20px;
            }

            .work-rights-title {
              font-size: 28px;
            }

            .work-rights-subtitle {
              font-size: 15px;
            }

            .work-subsection-title {
              font-size: 20px;
            }

            .work-card {
              padding: 20px;
            }

            .opt-card {
              padding: 20px;
            }

            .stem-extension {
              padding: 16px;
            }

            .critical-notes {
              padding: 20px 24px;
            }
          }
        `}</style>
      </section>

      {/* Study Abroad Process Timeline Section */}
      <section className="process-timeline-section">
        <div className="process-timeline-container">
          {/* Top Navigation */}
          <div className="timeline-header-nav">
            <div className="timeline-brand">
              <div className="timeline-brand-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <span className="timeline-brand-text">Study Abroad Process</span>
            </div>
            <div className="timeline-step-pills">
              {processSteps.map(step => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`timeline-pill ${activeStep === step.id ? 'timeline-pill-active' : ''}`}
                >
                  {step.id}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <AnimatePresence mode="wait">
            {processSteps.map(step => {
              if (step.id !== activeStep) return null;
              const activeIndex = processSteps.findIndex(s => s.id === activeStep);
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="timeline-content-grid"
                >
                  {/* Left Content */}
                  <div className="timeline-content-left">
                    <span className="timeline-step-badge">{step.id}</span>
                    <h2 className="timeline-step-title">{step.title}</h2>
                    <p className="timeline-step-subtitle">{step.subtitle}</p>
                    <p className="timeline-step-description">{step.description}</p>
                    
                    <div className="timeline-details-grid">
                      {step.details.map((detail, i) => (
                        <div key={i} className="timeline-detail-item">
                          <div className="timeline-check-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span className="timeline-detail-text">{detail}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="timeline-duration-box">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span className="timeline-duration-text">Duration: {step.duration}</span>
                    </div>
                  </div>

                  {/* Right Image Mockup */}
                  <div className="timeline-image-wrapper">
                    <div className="timeline-phone-mockup">
                      <div className="timeline-phone-screen">
                        <img src={step.image} alt={step.title} className="timeline-phone-image" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Bottom Timeline Progress */}
          <div className="timeline-progress-section">
            <div className="timeline-progress-track">
              <motion.div
                className="timeline-progress-fill"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${(processSteps.findIndex(s => s.id === activeStep) / (processSteps.length - 1)) * 100}%` 
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <motion.div
                className="timeline-progress-dot"
                initial={{ left: '0%' }}
                animate={{ 
                  left: `calc(${(processSteps.findIndex(s => s.id === activeStep) / (processSteps.length - 1)) * 100}% - 8px)` 
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
            
            <div className="timeline-progress-labels">
              {processSteps.map((step, i) => (
                <button 
                  key={step.id} 
                  onClick={() => setActiveStep(step.id)}
                  className="timeline-progress-label"
                >
                  <span className={`timeline-label-id ${i <= processSteps.findIndex(s => s.id === activeStep) ? 'timeline-label-active' : ''}`}>
                    {step.id}
                  </span>
                  <p className={`timeline-label-title ${i <= processSteps.findIndex(s => s.id === activeStep) ? 'timeline-label-title-active' : ''}`}>
                    {step.title.split(' ')[0]}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Application Requirements Cards */}
          <div className="application-requirements-cards">
            <div className="requirements-card">
              <div className="requirements-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="requirements-title">Academic Requirements</h3>
              <ul className="requirements-list">
                <li>High school diploma (undergraduate) or Bachelor's degree (graduate)</li>
                <li>Transcripts with good academic standing</li>
                <li>Standardized test scores (SAT/ACT for undergrad, GRE/GMAT for grad)</li>
                <li>English proficiency test (TOEFL min 80-100 or IELTS min 6.5-7.0)</li>
              </ul>
            </div>

            <div className="requirements-card">
              <div className="requirements-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="requirements-title">Supporting Documents</h3>
              <ul className="requirements-list">
                <li>Statement of Purpose/Personal Statement</li>
                <li>2-3 letters of recommendation</li>
                <li>Resume/CV (especially for graduate programs)</li>
                <li>Portfolio (for arts, architecture, design programs)</li>
              </ul>
            </div>

            <div className="requirements-card">
              <div className="requirements-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="requirements-title">Financial Documents</h3>
              <ul className="requirements-list">
                <li>Bank statements showing funds for first year</li>
                <li>Scholarship letters (if applicable)</li>
                <li>Sponsor affidavit of support (if sponsored)</li>
              </ul>
            </div>
          </div>
        </div>

        <style>{`
          /* ============================================
             PROCESS TIMELINE SECTION
             ============================================ */
          .process-timeline-section {
            position: relative;
            width: 100%;
            background: #F9FAFB;
            padding: 100px 0;
          }

          .process-timeline-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 48px;
            background: #FFFFFF;
            border-radius: 16px;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
          }

          /* Header Navigation */
          .timeline-header-nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 48px;
          }

          .timeline-brand {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .timeline-brand-icon {
            width: 40px;
            height: 40px;
            background: rgba(75, 110, 72, 0.1);
            color: #4B6E48;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .timeline-brand-text {
            font-size: 20px;
            font-weight: 700;
            color: #0F172A;
          }

          .timeline-step-pills {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 4px;
            background: #F1F5F9;
            border-radius: 12px;
          }

          .timeline-pill {
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            color: #64748B;
            background: transparent;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .timeline-pill:hover {
            background: rgba(255, 255, 255, 0.5);
          }

          .timeline-pill-active {
            background: #FFFFFF;
            color: #0F172A;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          }

          /* Content Grid */
          .timeline-content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            margin-bottom: 64px;
          }

          .timeline-content-left {
            display: flex;
            flex-direction: column;
          }

          .timeline-step-badge {
            display: inline-block;
            font-size: 13px;
            font-weight: 700;
            color: #4B6E48;
            margin-bottom: 12px;
          }

          .timeline-step-title {
            font-size: 32px;
            font-weight: 700;
            color: #0F172A;
            margin: 0 0 8px 0;
            letter-spacing: -0.02em;
          }

          .timeline-step-subtitle {
            font-size: 16px;
            color: #64748B;
            margin: 0 0 16px 0;
          }

          .timeline-step-description {
            font-size: 15px;
            color: #475569;
            line-height: 1.7;
            margin: 0 0 24px 0;
          }

          .timeline-details-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            margin-bottom: 24px;
          }

          .timeline-detail-item {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .timeline-check-icon {
            width: 20px;
            height: 20px;
            background: rgba(34, 197, 94, 0.1);
            color: #22C55E;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .timeline-detail-text {
            font-size: 14px;
            color: #475569;
          }

          .timeline-duration-box {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 16px 20px;
            background: #F1F5F9;
            border-radius: 10px;
            margin-top: 8px;
          }

          .timeline-duration-box svg {
            color: #4B6E48;
          }

          .timeline-duration-text {
            font-size: 14px;
            font-weight: 600;
            color: #475569;
          }

          /* Image Mockup */
          .timeline-image-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .timeline-phone-mockup {
            width: 280px;
            height: 560px;
            background: #1E293B;
            border-radius: 36px;
            padding: 12px;
            border: 4px solid #334155;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          }

          .timeline-phone-screen {
            width: 100%;
            height: 100%;
            background: #000000;
            border-radius: 28px;
            overflow: hidden;
          }

          .timeline-phone-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          /* Progress Timeline */
          .timeline-progress-section {
            margin-top: 48px;
          }

          .timeline-progress-track {
            position: relative;
            width: 100%;
            height: 4px;
            background: #E2E8F0;
            border-radius: 2px;
            margin-bottom: 16px;
          }

          .timeline-progress-fill {
            position: absolute;
            height: 4px;
            background: #4B6E48;
            border-radius: 2px;
          }

          .timeline-progress-dot {
            position: absolute;
            width: 16px;
            height: 16px;
            top: -6px;
            border-radius: 50%;
            background: #4B6E48;
            box-shadow: 0 0 0 4px rgba(75, 110, 72, 0.2);
          }

          .timeline-progress-labels {
            display: flex;
            justify-content: space-between;
          }

          .timeline-progress-label {
            text-align: center;
            flex: 1;
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px;
          }

          .timeline-label-id {
            display: block;
            font-size: 14px;
            font-weight: 600;
            color: #94A3B8;
            transition: color 0.3s ease;
            margin-bottom: 4px;
          }

          .timeline-label-active {
            color: #4B6E48;
          }

          .timeline-label-title {
            font-size: 12px;
            color: #CBD5E1;
            transition: color 0.3s ease;
            margin: 0;
          }

          .timeline-label-title-active {
            color: #475569;
          }

          /* Application Requirements Cards */
          .application-requirements-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 48px;
            padding-top: 48px;
            border-top: 1px solid #E2E8F0;
          }

          .requirements-card {
            background: #FFFFFF;
            border: 1px solid #E2E8F0;
            border-radius: 12px;
            padding: 32px 24px;
            transition: all 0.3s ease;
          }

          .requirements-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(75, 110, 72, 0.08);
            border-color: #4B6E48;
          }

          .requirements-icon {
            width: 48px;
            height: 48px;
            background: rgba(75, 110, 72, 0.1);
            color: #4B6E48;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
          }

          .requirements-title {
            font-size: 18px;
            font-weight: 600;
            color: #1E293B;
            margin: 0 0 16px 0;
          }

          .requirements-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .requirements-list li {
            font-size: 14px;
            line-height: 1.6;
            color: #64748B;
            padding-left: 20px;
            margin-bottom: 12px;
            position: relative;
          }

          .requirements-list li:before {
            content: "â€¢";
            position: absolute;
            left: 0;
            color: #4B6E48;
            font-weight: bold;
          }

          .requirements-list li:last-child {
            margin-bottom: 0;
          }

          /* Responsive Design */
          @media (max-width: 968px) {
            .timeline-content-grid {
              grid-template-columns: 1fr;
              gap: 32px;
            }

            .timeline-phone-mockup {
              width: 240px;
              height: 480px;
            }

            .timeline-step-pills {
              display: none;
            }

            .application-requirements-cards {
              grid-template-columns: 1fr;
              gap: 20px;
            }
          }

          @media (max-width: 768px) {
            .process-timeline-section {
              padding: 60px 0;
            }

            .process-timeline-container {
              padding: 32px 24px;
            }

            .timeline-brand-text {
              font-size: 18px;
            }

            .timeline-step-title {
              font-size: 26px;
            }

            .timeline-details-grid {
              grid-template-columns: 1fr;
              gap: 12px;
            }

            .timeline-phone-mockup {
              width: 200px;
              height: 400px;
            }

            .timeline-progress-label {
              padding: 4px;
            }

            .timeline-label-id {
              font-size: 13px;
            }

            .timeline-label-title {
              font-size: 11px;
            }
          }
        `}</style>
      </section>

      {/* Popular Student Cities Section */}
      <section className="popular-cities-section">
        <div className="popular-cities-container">
          <div className="popular-cities-header">
            <span className="popular-cities-label">Top Destinations</span>
            <h2 className="popular-cities-title">Popular Student Cities</h2>
            <p className="popular-cities-subtitle">
              Discover the most vibrant cities for international students, each offering unique academic excellence and cultural experiences.
            </p>
          </div>

          <AnimatedCardStack />
        </div>

        <style>{`
          /* ============================================
             POPULAR STUDENT CITIES SECTION
             ============================================ */
          .popular-cities-section {
            position: relative;
            width: 100%;
            background: #FFFFFF;
            padding: 100px 0;
          }

          .popular-cities-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 48px;
          }

          .popular-cities-header {
            text-align: center;
            margin-bottom: 64px;
          }

          .popular-cities-label {
            display: inline-block;
            font-size: 14px;
            font-weight: 600;
            color: #4B6E48;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 12px;
          }

          .popular-cities-title {
            font-size: 42px;
            font-weight: 700;
            color: #1E293B;
            margin: 0 0 16px 0;
            line-height: 1.2;
          }

          .popular-cities-subtitle {
            font-size: 18px;
            color: #64748B;
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.6;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .popular-cities-section {
              padding: 60px 0;
            }

            .popular-cities-container {
              padding: 0 24px;
            }

            .popular-cities-title {
              font-size: 32px;
            }

            .popular-cities-subtitle {
              font-size: 16px;
            }

            .popular-cities-header {
              margin-bottom: 48px;
            }
          }
        `}</style>
      </section>

      {/* Student Life Section */}
      <section className="student-life-section">
        <div className="student-life-container">
          {/* Header */}
          <div className="student-life-header">
            <h2 className="student-life-title">Student Life</h2>
            <p className="student-life-subtitle">What to expect as an international student</p>
          </div>

          {/* Main Cards */}
          <div className="student-life-cards">
            {/* Campus Culture Card */}
            <div className="student-life-card">
              <div className="student-life-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="student-life-card-title">Campus Culture and Environment</h3>
              <ul className="student-life-card-list">
                <li>Diverse, multicultural campus environments at most universities</li>
                <li>Strong emphasis on extracurricular activities and student organizations</li>
                <li>Undergraduate students often live on campus; graduate students typically off-campus</li>
                <li>Academic culture values participation, discussion, and independent thinking</li>
              </ul>
            </div>

            {/* International Student Support Card */}
            <div className="student-life-card">
              <div className="student-life-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="student-life-card-title">International Student Support</h3>
              <ul className="student-life-card-list">
                <li>Dedicated international student offices at all universities</li>
                <li>Orientation programs for new international students</li>
                <li>Academic advising and career counseling services</li>
                <li>English language support and tutoring</li>
                <li>Cultural adjustment resources and counseling</li>
              </ul>
            </div>
          </div>

          {/* Practical Considerations */}
          <div className="practical-considerations">
            <h3 className="practical-considerations-title">Practical Considerations</h3>
            <div className="practical-considerations-grid">
              {/* Healthcare */}
              <div className="practical-item">
                <h4 className="practical-item-title">Healthcare</h4>
                <p className="practical-item-text">Mandatory health insurance; university health centers available; healthcare is expensive</p>
              </div>

              {/* Transportation */}
              <div className="practical-item">
                <h4 className="practical-item-title">Transportation</h4>
                <p className="practical-item-text">Public transit in cities; car may be necessary in suburban areas; campus shuttles common</p>
              </div>

              {/* Banking */}
              <div className="practical-item">
                <h4 className="practical-item-title">Banking</h4>
                <p className="practical-item-text">Can open bank account with passport and I-20; major banks have student accounts</p>
              </div>

              {/* Phone/Internet */}
              <div className="practical-item">
                <h4 className="practical-item-title">Phone/Internet</h4>
                <p className="practical-item-text">Major carriers: AT&T, Verizon, T-Mobile; prepaid options available; campus WiFi</p>
              </div>

              {/* Weather */}
              <div className="practical-item">
                <h4 className="practical-item-title">Weather</h4>
                <p className="practical-item-text">Varies dramatically by region; prepare for extreme cold in northern states, heat in south</p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          /* ============================================
             STUDENT LIFE SECTION
             ============================================ */
          .student-life-section {
            position: relative;
            width: 100%;
            background: #F9FAFB;
            padding: 100px 0;
          }

          .student-life-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 40px;
          }

          /* Header */
          .student-life-header {
            margin-bottom: 48px;
          }

          .student-life-title {
            font-size: 32px;
            font-weight: 700;
            color: #1E293B;
            margin: 0 0 8px 0;
            letter-spacing: -0.01em;
          }

          .student-life-subtitle {
            font-size: 16px;
            color: #64748B;
            margin: 0;
          }

          /* Main Cards */
          .student-life-cards {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-bottom: 48px;
          }

          .student-life-card {
            background: #FFFFFF;
            border: 1px solid #E2E8F0;
            border-radius: 12px;
            padding: 32px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .student-life-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          }

          .student-life-card-icon {
            width: 48px;
            height: 48px;
            background: #F1F5F9;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
          }

          .student-life-card-icon svg {
            color: #4B6E48;
          }

          .student-life-card-title {
            font-size: 18px;
            font-weight: 600;
            color: #1E293B;
            margin: 0 0 16px 0;
          }

          .student-life-card-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .student-life-card-list li {
            font-size: 14px;
            color: #64748B;
            line-height: 1.6;
            padding-left: 20px;
            position: relative;
            margin-bottom: 12px;
          }

          .student-life-card-list li:last-child {
            margin-bottom: 0;
          }

          .student-life-card-list li::before {
            content: "â€¢";
            position: absolute;
            left: 0;
            color: #4B6E48;
            font-weight: bold;
          }

          /* Practical Considerations */
          .practical-considerations {
            background: #FFFFFF;
            border: 1px solid #E2E8F0;
            border-radius: 12px;
            padding: 32px;
          }

          .practical-considerations-title {
            font-size: 20px;
            font-weight: 600;
            color: #1E293B;
            margin: 0 0 24px 0;
          }

          .practical-considerations-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .practical-item {
            padding-bottom: 24px;
            border-bottom: 1px solid #F1F5F9;
          }

          .practical-item:nth-last-child(-n+3) {
            border-bottom: none;
            padding-bottom: 0;
          }

          .practical-item-title {
            font-size: 14px;
            font-weight: 600;
            color: #1E293B;
            margin: 0 0 8px 0;
          }

          .practical-item-text {
            font-size: 13px;
            color: #64748B;
            line-height: 1.6;
            margin: 0;
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .practical-considerations-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .practical-item:nth-last-child(-n+3) {
              border-bottom: 1px solid #F1F5F9;
              padding-bottom: 24px;
            }

            .practical-item:nth-last-child(-n+2) {
              border-bottom: none;
              padding-bottom: 0;
            }
          }

          @media (max-width: 768px) {
            .student-life-section {
              padding: 60px 0;
            }

            .student-life-container {
              padding: 0 24px;
            }

            .student-life-title {
              font-size: 28px;
            }

            .student-life-cards {
              grid-template-columns: 1fr;
              gap: 20px;
              margin-bottom: 32px;
            }

            .student-life-card {
              padding: 24px;
            }

            .practical-considerations {
              padding: 24px;
            }

            .practical-considerations-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .practical-item {
              border-bottom: 1px solid #F1F5F9;
              padding-bottom: 20px;
            }

            .practical-item:last-child {
              border-bottom: none;
              padding-bottom: 0;
            }
          }
        `}</style>
      </section>

      {/* After Your Studies Section */}
      <section className="after-studies-section">
        <div className="after-studies-container">
          {/* Header */}
          <div className="after-studies-header">
            <h2 className="after-studies-title">After Your Studies</h2>
            <p className="after-studies-subtitle">Explore work and immigration after completing your degree</p>
          </div>

          {/* Carousel */}
          <AfterStudiesCarousel />
        </div>

        <style>{`
          /* ============================================
             AFTER YOUR STUDIES SECTION
             ============================================ */
          .after-studies-section {
            position: relative;
            width: 100%;
            background: #FFFFFF;
            padding: 100px 0;
          }

          .after-studies-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 40px;
          }

          /* Header */
          .after-studies-header {
            margin-bottom: 48px;
          }

          .after-studies-title {
            font-size: 32px;
            font-weight: 700;
            color: #1E293B;
            margin: 0 0 8px 0;
            letter-spacing: -0.01em;
          }

          .after-studies-subtitle {
            font-size: 16px;
            color: #64748B;
            margin: 0;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .after-studies-section {
              padding: 60px 0;
            }

            .after-studies-container {
              padding: 0 24px;
            }

            .after-studies-title {
              font-size: 28px;
            }
          }
        `}</style>
      </section>

      {/* CTA Section - Ready to Explore */}
      <section className="cta-explore-section">
        <div className="cta-explore-container">
          <div className="cta-content-wrapper">
            {/* Left Side - Image */}
            <div className="cta-image-wrapper">
              <img src={ctaImage} alt="Students studying" className="cta-image" />
            </div>

            {/* Right Side - Content */}
            <div className="cta-content">
              <h2 className="cta-title">Ready to explore studying in United States?</h2>
              <p className="cta-description">
                Our open-source platform provides <span className="highlight">personalized guidance</span> on universities and <span className="highlight">application strategies</span>, helping you <span className="highlight">make informed decisions</span> about your study abroad journey.
              </p>

              {/* Buttons */}
              <div className="cta-buttons">
                <button 
                  className="cta-btn cta-btn-primary"
                  onClick={() => navigate('/universities')}
                >
                  See Coverage Tools
                </button>
                <button 
                  className="cta-btn cta-btn-secondary"
                  onClick={() => navigate('/compare')}
                >
                  Compare Countries
                </button>
              </div>

              {/* Footer Note */}
              <p className="cta-footer-note">
                Country information and university search available for free for all users
              </p>
            </div>
          </div>
        </div>

        <style>{`
          /* ============================================
             CTA EXPLORE SECTION
             ============================================ */
          .cta-explore-section {
            position: relative;
            width: 100%;
            background: #F9FAFB;
            padding: 100px 0;
          }

          .cta-explore-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 40px;
          }

          .cta-content-wrapper {
            background: #FFFFFF;
            border: 1.5px solid #E2E8F0;
            border-radius: 20px;
            padding: 48px;
            display: flex;
            align-items: center;
            gap: 48px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          }

          /* Image Wrapper */
          .cta-image-wrapper {
            flex-shrink: 0;
            width: 280px;
            height: 240px;
            border-radius: 16px;
            overflow: hidden;
            background: #F1F5F9;
          }

          .cta-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          /* Content */
          .cta-content {
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          .cta-title {
            font-size: 28px;
            font-weight: 700;
            color: #1E293B;
            margin: 0 0 16px 0;
            line-height: 1.3;
          }

          .cta-description {
            font-size: 15px;
            color: #64748B;
            line-height: 1.7;
            margin: 0 0 28px 0;
          }

          .cta-description .highlight {
            color: #4B6E48;
            font-weight: 600;
            background: #E8F5E7;
            padding: 2px 6px;
            border-radius: 4px;
          }

          /* Buttons */
          .cta-buttons {
            display: flex;
            gap: 12px;
            margin-bottom: 20px;
          }

          .cta-btn {
            padding: 12px 24px;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: none;
            outline: none;
          }

          .cta-btn-primary {
            background: #1E293B;
            color: #FFFFFF;
          }

          .cta-btn-primary:hover {
            background: #334155;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(30, 41, 59, 0.2);
          }

          .cta-btn-secondary {
            background: transparent;
            color: #1E293B;
            border: 1.5px solid #E2E8F0;
          }

          .cta-btn-secondary:hover {
            background: #F8FAFC;
            border-color: #CBD5E1;
            transform: translateY(-2px);
          }

          .cta-btn:active {
            transform: translateY(0);
          }

          /* Footer Note */
          .cta-footer-note {
            font-size: 12px;
            color: #94A3B8;
            margin: 0;
            line-height: 1.5;
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .cta-content-wrapper {
              gap: 32px;
            }

            .cta-image-wrapper {
              width: 220px;
              height: 200px;
            }

            .cta-title {
              font-size: 24px;
            }
          }

          @media (max-width: 768px) {
            .cta-explore-section {
              padding: 60px 0;
            }

            .cta-explore-container {
              padding: 0 24px;
            }

            .cta-content-wrapper {
              flex-direction: column;
              padding: 32px 28px;
              gap: 28px;
            }

            .cta-image-wrapper {
              width: 100%;
              height: 180px;
            }

            .cta-title {
              font-size: 22px;
            }

            .cta-description {
              font-size: 14px;
            }

            .cta-buttons {
              flex-direction: column;
              width: 100%;
            }

            .cta-btn {
              width: 100%;
              justify-content: center;
            }
          }

          @media (max-width: 480px) {
            .cta-content-wrapper {
              padding: 24px 20px;
            }

            .cta-title {
              font-size: 20px;
            }

            .cta-buttons {
              gap: 10px;
            }

            .cta-btn {
              padding: 11px 20px;
              font-size: 13px;
            }
          }
        `}</style>
      </section>

      {/* Main Content Area - Blank/Ready for Content */}
      <main className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {id && (
            <div className="text-center text-gray-400 py-20">
              <p className="text-lg">
                Country Profile for: {decodeURIComponent(id).split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </p>
              <p className="text-sm mt-2">
                (Content area ready for country information sections)
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
