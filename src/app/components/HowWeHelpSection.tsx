import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export function HowWeHelpSection() {
  return (
    <section className="help-section">
      <div className="help-container">
        {/* Header */}
        <div className="help-header">
          <h2 className="help-heading">
            How we help with country selection
          </h2>
          <p className="help-subtitle">
            We provide information and comparison tools to help you evaluate different study destinations
          </p>
        </div>

        {/* Cards Slider */}
        <div className="help-slider-wrapper">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="help-swiper"
          >
            <SwiperSlide className="help-slide">
              <article className="help-card">
                <div className="help-badge">
                  1
                </div>
                <div className="help-card-content">
                  <div className="help-card-text">
                    <h3 className="help-card-title">
                      Detailed Country Profiles
                    </h3>
                    <p className="help-card-description">
                      In-depth information about education systems, visa processes, costs, and student life in different countries
                    </p>
                  </div>
                  <figure className="help-card-image">
                    <img
                      className="help-card-img"
                      src="https://images.unsplash.com/photo-1565688420536-11a4ddfa246f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwZ3VpZGFuY2UlMjBjb3Vuc2VsaW5nJTIwbWVudG9yfGVufDF8fHx8MTc2OTQ5NjcwNXww&ixlib=rb-4.1.0&q=80&w=600"
                      alt="Personalized Counseling"
                    />
                  </figure>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide className="help-slide">
              <article className="help-card">
                <div className="help-badge">
                  2
                </div>
                <div className="help-card-content">
                  <div className="help-card-text">
                    <h3 className="help-card-title">
                      Comparison Tools
                    </h3>
                    <p className="help-card-description">
                      Side-by-side comparison of costs, requirements, work rights, and timelines across multiple countries
                    </p>
                  </div>
                  <figure className="help-card-image">
                    <img
                      className="help-card-img"
                      src="https://images.unsplash.com/photo-1764096535068-0e9f652e03f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGFuYWx5c2lzJTIwZGF0YSUyMHN0dWRlbnR8ZW58MXx8fHwxNzY5NDk2NzA1fDA&ixlib=rb-4.1.0&q=80&w=600"
                      alt="Detailed Research & Analysis"
                    />
                  </figure>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide className="help-slide">
              <article className="help-card">
                <div className="help-badge">
                  3
                </div>
                <div className="help-card-content">
                  <div className="help-card-text">
                    <h3 className="help-card-title">
                      Personalized Guidance
                    </h3>
                    <p className="help-card-description">
                      Concierge support to help evaluate countries based on your specific academic goals, budget, and preferences
                    </p>
                  </div>
                  <figure className="help-card-image">
                    <img
                      className="help-card-img"
                      src="https://images.unsplash.com/photo-1764231467852-b609a742e082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsaWNhdGlvbiUyMGZvcm0lMjBkb2N1bWVudHxlbnwxfHx8fDE3Njk0OTY3MDV8MA&ixlib=rb-4.1.0&q=80&w=600"
                      alt="Application Support"
                    />
                  </figure>
                </div>
              </article>
            </SwiperSlide>
          </Swiper>

          <div className="swiper-pagination-custom"></div>
        </div>
      </div>

      {/* Comprehensive Responsive Styles */}
      <style>{`
        /* ============================================
           SECTION BASE
           ============================================ */
        .help-section {
          width: 100%;
          background-color: #F9FAFB;
        }

        /* ============================================
           CONTAINER - Precise Width Control
           ============================================ */
        .help-container {
          margin: 0 auto;
          width: 100%;
        }

        /* Mobile (≤767px): 16-20px padding */
        @media (max-width: 767px) {
          .help-container {
            padding: 56px 18px;
          }
        }

        /* Tablet (768-991px): 32px padding */
        @media (min-width: 768px) and (max-width: 991px) {
          .help-container {
            padding: 72px 32px;
          }
        }

        /* Mid-desktop (992-1199px): Contained width */
        @media (min-width: 992px) and (max-width: 1199px) {
          .help-container {
            max-width: 1200px;
            padding: 92px 40px;
          }
        }

        /* Desktop (≥1200px): max-width 1200px centered */
        @media (min-width: 1200px) {
          .help-container {
            max-width: 1200px;
            padding: 96px 40px;
          }
        }

        /* ============================================
           HEADER
           ============================================ */
        .help-header {
          text-align: center;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media (max-width: 767px) {
          .help-header {
            margin-bottom: 32px;
            gap: 10px;
          }
        }

        @media (min-width: 768px) and (max-width: 991px) {
          .help-header {
            margin-bottom: 40px;
            gap: 12px;
          }
        }

        @media (min-width: 992px) {
          .help-header {
            margin-bottom: 48px;
            gap: 14px;
          }
        }

        /* ============================================
           HEADING - Responsive Typography
           ============================================ */
        .help-heading {
          font-weight: 600;
          color: #0F172A;
          letter-spacing: -0.02em;
          margin: 0;
          line-height: 1.25;
        }

        /* Mobile: 24-26px */
        @media (max-width: 767px) {
          .help-heading {
            font-size: 25px;
            line-height: 1.3;
          }
        }

        /* Tablet: 32px */
        @media (min-width: 768px) and (max-width: 991px) {
          .help-heading {
            font-size: 32px;
            line-height: 1.25;
          }
        }

        /* Desktop: 40px */
        @media (min-width: 992px) {
          .help-heading {
            font-size: 40px;
            line-height: 1.2;
          }
        }

        /* ============================================
           SUBTITLE - Controlled Max-Width
           ============================================ */
        .help-subtitle {
          color: #64748B;
          font-weight: 400;
          margin: 0;
        }

        /* Mobile: 14px, 90% width */
        @media (max-width: 767px) {
          .help-subtitle {
            font-size: 14px;
            line-height: 1.6;
            max-width: 90%;
          }
        }

        /* Tablet: 15px, 500px max-width */
        @media (min-width: 768px) and (max-width: 991px) {
          .help-subtitle {
            font-size: 15px;
            line-height: 1.6;
            max-width: 500px;
          }
        }

        /* Desktop: 16px, 600px max-width */
        @media (min-width: 992px) {
          .help-subtitle {
            font-size: 16px;
            line-height: 1.55;
            max-width: 600px;
          }
        }

        /* ============================================
           SLIDER WRAPPER
           ============================================ */
        .help-slider-wrapper {
          position: relative;
        }

        /* ============================================
           SWIPER CONFIGURATION
           ============================================ */
        .help-swiper {
          padding-bottom: 48px;
        }

        .help-slide {
          height: auto;
          display: flex;
        }

        /* ============================================
           CARD - Structure & Styling
           ============================================ */
        .help-card {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
        }

        .help-card-content {
          background-color: white;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .help-card:hover .help-card-content {
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
          transform: translateY(-4px);
        }

        /* Mobile: 20px padding */
        @media (max-width: 767px) {
          .help-card-content {
            padding: 20px;
            gap: 16px;
            border-radius: 20px;
          }
        }

        /* Tablet: 28px padding */
        @media (min-width: 768px) and (max-width: 991px) {
          .help-card-content {
            padding: 24px;
            gap: 18px;
          }
        }

        /* Desktop: 32px padding */
        @media (min-width: 992px) {
          .help-card-content {
            padding: 28px;
            gap: 20px;
          }
        }

        /* ============================================
           NUMBER BADGE
           ============================================ */
        .help-badge {
          position: absolute;
          top: 0;
          right: 0;
          background-color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #0F172A;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          z-index: 10;
        }

        /* Mobile: 36px */
        @media (max-width: 767px) {
          .help-badge {
            width: 36px;
            height: 36px;
            font-size: 18px;
          }
        }

        /* Tablet: 40px */
        @media (min-width: 768px) and (max-width: 991px) {
          .help-badge {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }
        }

        /* Desktop: 48px */
        @media (min-width: 992px) {
          .help-badge {
            width: 48px;
            height: 48px;
            font-size: 22px;
          }
        }

        /* ============================================
           CARD TEXT SECTION
           ============================================ */
        .help-card-text {
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 767px) {
          .help-card-text {
            padding-right: 44px;
            gap: 8px;
          }
        }

        @media (min-width: 768px) {
          .help-card-text {
            padding-right: 54px;
            gap: 10px;
          }
        }

        /* ============================================
           CARD TITLE
           ============================================ */
        .help-card-title {
          font-weight: 700;
          color: #0F172A;
          margin: 0;
          line-height: 1.3;
        }

        /* Mobile: 18px */
        @media (max-width: 767px) {
          .help-card-title {
            font-size: 18px;
          }
        }

        /* Tablet & Desktop: 20-22px */
        @media (min-width: 768px) {
          .help-card-title {
            font-size: 20px;
          }
        }

        /* ============================================
           CARD DESCRIPTION
           ============================================ */
        .help-card-description {
          color: #64748B;
          font-weight: 400;
          margin: 0;
        }

        /* Mobile: 14px */
        @media (max-width: 767px) {
          .help-card-description {
            font-size: 13px;
            line-height: 1.6;
          }
        }

        /* Tablet: 14px */
        @media (min-width: 768px) and (max-width: 991px) {
          .help-card-description {
            font-size: 14px;
            line-height: 1.6;
          }
        }

        /* Desktop: 16px */
        @media (min-width: 992px) {
          .help-card-description {
            font-size: 15px;
            line-height: 1.55;
          }
        }

        /* ============================================
           CARD IMAGE - Responsive Heights
           ============================================ */
        .help-card-image {
          margin: 0;
          border-radius: 16px;
          overflow: hidden;
          background-color: #E5E7EB;
          flex-shrink: 0;
        }

        .help-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Mobile: 180px */
        @media (max-width: 767px) {
          .help-card-image {
            height: 180px;
            border-radius: 14px;
          }
        }

        /* Tablet: 200px */
        @media (min-width: 768px) and (max-width: 991px) {
          .help-card-image {
            height: 200px;
          }
        }

        /* Desktop: 220px */
        @media (min-width: 992px) {
          .help-card-image {
            height: 220px;
          }
        }

        /* ============================================
           PAGINATION DOTS
           ============================================ */
        .swiper-pagination-custom {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 24px;
        }

        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
          border-radius: 50%;
          cursor: pointer;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: #4B6E48;
          transform: scale(1.2);
        }

        /* ============================================
           ACCESSIBILITY
           ============================================ */
        @media (prefers-reduced-motion: no-preference) {
          .help-card-content {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .help-card-content {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
