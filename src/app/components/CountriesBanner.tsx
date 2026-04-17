import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function CountriesBanner() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    // Only apply parallax on desktop (≥1200px)
    if (window.innerWidth < 1200) return;

    const gridItems = Array.from(gridRef.current.children);

    // Set will-change for performance
    gridItems.forEach(item => {
      (item as HTMLElement).style.willChange = 'transform';
    });

    // Background layer (slowest) - Large images
    const bgLayer = gsap.to([gridItems[1], gridItems[10]], {
      y: -80,
      ease: 'none',
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
        invalidateOnRefresh: true,
      },
    });

    // Middle layer (medium) - Medium images
    const midLayer = gsap.to([gridItems[4], gridItems[6], gridItems[9], gridItems[11]], {
      y: -120,
      ease: 'none',
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    // Foreground layer (fastest) - Small images & decorative
    const fgLayer = gsap.to([gridItems[0], gridItems[2], gridItems[3], gridItems[5], gridItems[7], gridItems[8]], {
      y: -160,
      ease: 'none',
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });

    // Refresh ScrollTrigger after a brief delay
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timeout);
      bgLayer.scrollTrigger?.kill();
      midLayer.scrollTrigger?.kill();
      fgLayer.scrollTrigger?.kill();
      bgLayer.kill();
      midLayer.kill();
      fgLayer.kill();
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Text Section */}
        <div className="hero-content">
          {/* Label */}
          <p className="hero-label">
            Explore Your Future
          </p>

          {/* Heading */}
          <h1 className="hero-heading">
            Study Abroad Destinations
          </h1>

          {/* Paragraph */}
          <p className="hero-paragraph">
            Discover world-class universities and vibrant cultures across the globe. 
            Find the perfect destination to pursue your academic dreams and create 
            unforgettable memories.
          </p>

          {/* CTA Button */}
          <a 
            href="#destinations" 
            className="hero-cta"
          >
            Learn more
          </a>
        </div>

        {/* Grid Section - Image Collage */}
        <div className="hero-collage-wrapper">
          <div className="hero-collage" ref={gridRef}>
            {/* Grid Item 1 - Eiffel Tower */}
            <div 
              className="grid-item grid-item-1"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1570097703229-b195d6dd291f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFaWZmZWwlMjBUb3dlciUyMFBhcmlzfGVufDF8fHx8MTc2OTc2MjAwM3ww&ixlib=rb-4.1.0&q=80&w=400)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
              aria-label="Eiffel Tower, Paris"
            />

            {/* Grid Item 2 - Big Ben */}
            <div 
              className="grid-item grid-item-2"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1665573456818-67a4c48110c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCaWclMjBCZW4lMjBMb25kb258ZW58MXx8fHwxNzY5NjcyNDE1fDA&ixlib=rb-4.1.0&q=80&w=600)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
              aria-label="Big Ben, London"
            />

            {/* Grid Item 3 - Taj Mahal */}
            <div 
              className="grid-item grid-item-3"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1564507592333-c60657eea523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYWolMjBNYWhhbCUyMEluZGlhfGVufDF8fHx8MTc2OTY4MjUwOHww&ixlib=rb-4.1.0&q=80&w=400)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
              aria-label="Taj Mahal, India"
            />

            {/* Grid Item 4 - Yellow rounded corner */}
            <div 
              className="grid-item grid-item-4 decorative-shape"
              style={{
                backgroundColor: '#FDF5DD',
                borderRadius: '0 0 100px 0'
              }}
            />

            {/* Grid Item 5 - Statue of Liberty */}
            <div 
              className="grid-item grid-item-5"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1575574657922-6de2aa2e6937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdGF0dWUlMjBMaWJlcnR5JTIwVVNBfGVufDF8fHx8MTc2OTc2MjAwNXww&ixlib=rb-4.1.0&q=80&w=600)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
              aria-label="Statue of Liberty, USA"
            />

            {/* Grid Item 6 - Blue rounded corner */}
            <div 
              className="grid-item grid-item-6 decorative-shape"
              style={{
                backgroundColor: '#D3F0EE',
                borderRadius: '0 100px 0 0'
              }}
            />

            {/* Grid Item 7 - Sydney Opera House */}
            <div 
              className="grid-item grid-item-7"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTeWRuZXklMjBPcGVyYSUyMEhvdXNlfGVufDF8fHx8MTc2OTc2MjAwNHww&ixlib=rb-4.1.0&q=80&w=400)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
              aria-label="Sydney Opera House, Australia"
            />

            {/* Grid Item 8 - Purple circle */}
            <div 
              className="grid-item grid-item-8 decorative-shape"
              style={{
                backgroundColor: '#CED7ED',
                borderRadius: '50%'
              }}
            />

            {/* Grid Item 9 - Pink rounded corner */}
            <div 
              className="grid-item grid-item-9 decorative-shape"
              style={{
                backgroundColor: '#FADEE0',
                borderRadius: '100px 0 0 0'
              }}
            />

            {/* Grid Item 10 - Colosseum */}
            <div 
              className="grid-item grid-item-10"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1668882565110-317edcfa0ee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvc3NldW0lMjBSb21lJTIwSXRhbHl8ZW58MXx8fHwxNzY5NzYyMDA2fDA&ixlib=rb-4.1.0&q=80&w=400)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
              aria-label="Colosseum, Rome"
            />

            {/* Grid Item 11 - Great Wall of China */}
            <div 
              className="grid-item grid-item-11"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1583405584623-58f4b7d1380f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHcmVhdCUyMFdhbGwlMjBDaGluYXxlbnwxfHx8fDE3Njk2OTE0OTF8MA&ixlib=rb-4.1.0&q=80&w=600)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
              aria-label="Great Wall, China"
            />

            {/* Grid Item 12 - Christ the Redeemer */}
            <div 
              className="grid-item grid-item-12"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1548963670-aaaa8f73a5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaHJpc3QlMjBSZWRlZW1lciUyMEJyYXpplxlbnwxfHx8fDE3Njk3NjIwMDV8MA&ixlib=rb-4.1.0&q=80&w=400)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
              aria-label="Christ the Redeemer, Brazil"
            />
          </div>
        </div>
      </div>

      {/* Comprehensive Responsive Styles */}
      <style>{`
        /* ============================================
           HERO SECTION BASE
           ============================================ */
        .hero-section {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
        }

        /* ============================================
           CONTAINER - Responsive Width & Padding
           Desktop: max-width 1200px centered
           Tablet: full width with 32px side padding
           Mobile: 16-20px padding
           ============================================ */
        .hero-container {
          position: relative;
          margin: 0 auto;
          width: 100%;
        }

        /* Mobile (≤480px): 16-18px padding, 60px vertical */
        @media (max-width: 480px) {
          .hero-container {
            padding: 60px 18px;
          }
        }

        /* Mobile-Large (481-767px): 20px padding */
        @media (min-width: 481px) and (max-width: 767px) {
          .hero-container {
            padding: 60px 20px;
          }
        }

        /* Small Tablet (768-900px): full width with 32px side padding, 80px vertical */
        @media (min-width: 768px) and (max-width: 900px) {
          .hero-container {
            padding: 80px 32px;
          }
        }

        /* Large Tablet (901-1199px): full width with 32px side padding */
        @media (min-width: 901px) and (max-width: 1199px) {
          .hero-container {
            padding: 90px 32px;
          }
        }

        /* Desktop (≥1200px): max-width 1200px centered, 110px vertical */
        @media (min-width: 1200px) {
          .hero-container {
            max-width: 1200px;
            padding: 110px 40px;
          }
        }

        /* ============================================
           LAYOUT STRUCTURE - Text + Image Composition
           Desktop: 2-column (42% / 58%)
           Tablet (901-1024px): scale images proportionally (reduce 20-30%)
           Small Tablet (≤900px): 2-column mini grid
           Mobile: 2-column stacked layout
           Maintain aspect ratio, equal spacing
           ============================================ */
        
        /* Mobile (≤767px): Single column, text stacked above images */
        @media (max-width: 767px) {
          .hero-container {
            display: flex;
            flex-direction: column;
            gap: 36px;
          }
        }

        /* Small Tablet (768-900px): Stack vertically, text first, images below */
        @media (min-width: 768px) and (max-width: 900px) {
          .hero-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 44px;
          }
        }

        /* Large Tablet (901-1024px): Maintain 2-column but reduce image size */
        @media (min-width: 901px) and (max-width: 1024px) {
          .hero-container {
            display: grid;
            grid-template-columns: 48% 52%;
            align-items: center;
            gap: 40px;
          }
        }

        /* Tablet-Desktop Transition (1025-1199px): 2-column layout */
        @media (min-width: 1025px) and (max-width: 1199px) {
          .hero-container {
            display: grid;
            grid-template-columns: 45% 55%;
            align-items: center;
            gap: 56px;
          }
        }

        /* Desktop (≥1200px): 2-column layout, text left (42%), images right (58%) */
        @media (min-width: 1200px) {
          .hero-container {
            display: grid;
            grid-template-columns: 42% 58%;
            align-items: center;
            gap: 72px;
          }
        }

        /* ============================================
           CONTENT SECTION
           ============================================ */
        .hero-content {
          display: flex;
          flex-direction: column;
        }

        /* Mobile & Small Tablet (≤900px): Center aligned */
        @media (max-width: 900px) {
          .hero-content {
            text-align: center;
            align-items: center;
            gap: 12px;
          }
        }

        /* Large Tablet & Desktop (≥901px): Left aligned */
        @media (min-width: 901px) {
          .hero-content {
            text-align: left;
            align-items: flex-start;
            gap: 16px;
          }
        }

        /* ============================================
           LABEL
           ============================================ */
        .hero-label {
          text-transform: uppercase;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
          margin: 0;
          letter-spacing: 1.5px;
          font-size: 12px;
        }

        /* ============================================
           HEADING - Responsive Typography
           Desktop: 40px
           Tablet: 32px
           Mobile: 24-26px
           Reduce spacing below heading by 12-16px
           ============================================ */
        .hero-heading {
          font-weight: 700;
          color: white;
          margin: 0 0 6px 0;
          line-height: 1.25;
        }

        /* Mobile (≤480px): 24px */
        @media (max-width: 480px) {
          .hero-heading {
            font-size: 24px;
            line-height: 1.3;
          }
        }

        /* Mobile-Large (481-767px): 26px */
        @media (min-width: 481px) and (max-width: 767px) {
          .hero-heading {
            font-size: 26px;
            line-height: 1.3;
          }
        }

        /* Small Tablet (768-900px): 30px */
        @media (min-width: 768px) and (max-width: 900px) {
          .hero-heading {
            font-size: 30px;
            line-height: 1.25;
          }
        }

        /* Large Tablet (901-1199px): 32px */
        @media (min-width: 901px) and (max-width: 1199px) {
          .hero-heading {
            font-size: 32px;
            line-height: 1.25;
          }
        }

        /* Desktop (≥1200px): 40px */
        @media (min-width: 1200px) {
          .hero-heading {
            font-size: 40px;
            line-height: 1.2;
          }
        }

        /* ============================================
           DESCRIPTION TEXT
           Desktop max-width: 520-600px, 16px
           Tablet: 480px, 15px
           Mobile: 90% width, 14px
           Line-height: 1.5-1.6
           ============================================ */
        .hero-paragraph {
          color: rgba(255, 255, 255, 0.87);
          font-weight: 400;
          margin: 0;
          line-height: 1.6;
        }

        /* Mobile (≤480px): 14px, 90% width */
        @media (max-width: 480px) {
          .hero-paragraph {
            font-size: 14px;
            max-width: 90%;
            line-height: 1.65;
          }
        }

        /* Mobile-Large (481-767px): 14px, 100% width */
        @media (min-width: 481px) and (max-width: 767px) {
          .hero-paragraph {
            font-size: 14px;
            max-width: 100%;
            line-height: 1.6;
          }
        }

        /* Small Tablet (768-900px): 15px, 480px max-width */
        @media (min-width: 768px) and (max-width: 900px) {
          .hero-paragraph {
            font-size: 15px;
            max-width: 480px;
            line-height: 1.6;
          }
        }

        /* Large Tablet (901-1199px): 15px, 520px max-width */
        @media (min-width: 901px) and (max-width: 1199px) {
          .hero-paragraph {
            font-size: 15px;
            max-width: 520px;
            line-height: 1.55;
          }
        }

        /* Desktop (≥1200px): 16px, 600px max-width */
        @media (min-width: 1200px) {
          .hero-paragraph {
            font-size: 16px;
            max-width: 600px;
            line-height: 1.5;
          }
        }

        /* ============================================
           CTA BUTTON (Learn More)
           Aligned with text block
           Mobile: centered
           Desktop: left-aligned with text
           Spacing from description: 20-24px
           ============================================ */
        .hero-cta {
          display: inline-block;
          background-color: white;
          color: #0F172A;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          text-align: center;
          font-size: 15px;
          min-height: 46px;
          line-height: 46px;
        }

        .hero-cta:hover {
          background-color: rgba(255, 255, 255, 0.93);
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
        }

        /* Mobile (≤767px): Centered, 20px spacing from description */
        @media (max-width: 767px) {
          .hero-cta {
            padding: 0 36px;
            margin-top: 20px;
            max-width: 240px;
          }
        }

        /* Small Tablet (768-900px): Centered, 22px spacing */
        @media (min-width: 768px) and (max-width: 900px) {
          .hero-cta {
            padding: 0 38px;
            margin-top: 22px;
            max-width: 260px;
          }
        }

        /* Large Tablet & Desktop (≥901px): Left-aligned, 24px spacing */
        @media (min-width: 901px) {
          .hero-cta {
            padding: 0 40px;
            margin-top: 24px;
          }
        }

        /* ============================================
           COLLAGE WRAPPER
           Center image block on tablet/mobile
           Prevent large empty gaps when layout stacks
           ============================================ */
        .hero-collage-wrapper {
          position: relative;
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        /* Mobile & Small Tablet: Center and constrain */
        @media (max-width: 900px) {
          .hero-collage-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        /* ============================================
           IMAGE COLLAGE - KEEP ALL IMAGES
           Desktop: layered collage layout
           Tablet (901-1024px): scale images proportionally (reduce 20-30%)
           Small Tablet (≤900px): 2-column mini grid
           Mobile: 2-column stacked layout
           Maintain aspect ratio, equal spacing
           ============================================ */
        .hero-collage {
          position: relative;
          display: grid;
          width: 100%;
        }

        /* Mobile (≤480px): 2-column compact grid, 12px gap */
        @media (max-width: 480px) {
          .hero-collage {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            max-width: 100%;
          }

          .grid-item {
            min-height: 100px;
          }
        }

        /* Mobile-Large (481-767px): 2-column grid, 14px gap */
        @media (min-width: 481px) and (max-width: 767px) {
          .hero-collage {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
            max-width: 100%;
          }

          .grid-item {
            min-height: 110px;
          }
        }

        /* Small Tablet (768-900px): 2-column mini grid, 16px gap, max-width 500px */
        @media (min-width: 768px) and (max-width: 900px) {
          .hero-collage {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            max-width: 500px;
            margin: 0 auto;
          }

          .grid-item {
            min-height: 140px;
          }
        }

        /* Large Tablet (901-1024px): Maintain collage but scale down 25%, 3-column base */
        @media (min-width: 901px) and (max-width: 1024px) {
          .hero-collage {
            grid-template-columns: repeat(6, 1fr);
            grid-template-rows: repeat(4, 70px);
            gap: 6px;
            max-width: 480px;
          }

          /* Simplified layout for tablet */
          .grid-item-1 { grid-column: 1 / 2; grid-row: 2 / 3; }
          .grid-item-2 { grid-column: 2 / 4; grid-row: 1 / 3; }
          .grid-item-3 { grid-column: 4 / 5; grid-row: 1 / 2; }
          .grid-item-4 { grid-column: 5 / 6; grid-row: 1 / 2; }
          .grid-item-5 { grid-column: 4 / 6; grid-row: 2 / 4; }
          .grid-item-6 { grid-column: 6 / 7; grid-row: 2 / 3; }
          .grid-item-7 { grid-column: 6 / 7; grid-row: 3 / 4; }
          .grid-item-8 { grid-column: 1 / 2; grid-row: 3 / 4; }
          .grid-item-9 { grid-column: 1 / 2; grid-row: 4 / 5; }
          .grid-item-10 { grid-column: 2 / 3; grid-row: 4 / 5; }
          .grid-item-11 { grid-column: 3 / 5; grid-row: 3 / 5; }
          .grid-item-12 { grid-column: 5 / 6; grid-row: 4 / 5; }
        }

        /* Tablet-Desktop Transition (1025-1199px): Scale down 15% */
        @media (min-width: 1025px) and (max-width: 1199px) {
          .hero-collage {
            grid-template-columns: repeat(8, 1fr);
            grid-template-rows: repeat(5, 78px);
            gap: 7px;
            max-width: 580px;
          }

          /* Desktop layout but smaller */
          .grid-item-1 { grid-column: 1 / 2; grid-row: 2 / 3; }
          .grid-item-2 { grid-column: 2 / 5; grid-row: 1 / 4; }
          .grid-item-3 { grid-column: 5 / 6; grid-row: 1 / 2; }
          .grid-item-4 { grid-column: 6 / 7; grid-row: 1 / 2; }
          .grid-item-5 { grid-column: 5 / 7; grid-row: 2 / 4; }
          .grid-item-6 { grid-column: 7 / 8; grid-row: 2 / 3; }
          .grid-item-7 { grid-column: 7 / 8; grid-row: 3 / 4; }
          .grid-item-8 { grid-column: 8 / 9; grid-row: 3 / 4; }
          .grid-item-9 { grid-column: 1 / 2; grid-row: 4 / 5; }
          .grid-item-10 { grid-column: 2 / 3; grid-row: 4 / 5; }
          .grid-item-11 { grid-column: 3 / 5; grid-row: 4 / 6; }
          .grid-item-12 { grid-column: 5 / 6; grid-row: 4 / 5; }
        }

        /* Desktop (≥1200px): Full layered collage layout */
        @media (min-width: 1200px) {
          .hero-collage {
            grid-template-columns: repeat(8, 1fr);
            grid-template-rows: repeat(5, 90px);
            gap: 8px;
          }

          /* Item 1 - Eiffel Tower */
          .grid-item-1 {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
          }

          /* Item 2 - Big Ben (Main focal point - large featured) */
          .grid-item-2 {
            grid-column: 2 / 5;
            grid-row: 1 / 4;
          }

          /* Item 3 - Taj Mahal */
          .grid-item-3 {
            grid-column: 5 / 6;
            grid-row: 1 / 2;
          }

          /* Item 4 - Yellow decorative shape */
          .grid-item-4 {
            grid-column: 6 / 7;
            grid-row: 1 / 2;
          }

          /* Item 5 - Statue of Liberty (large featured) */
          .grid-item-5 {
            grid-column: 5 / 7;
            grid-row: 2 / 4;
          }

          /* Item 6 - Blue decorative shape */
          .grid-item-6 {
            grid-column: 7 / 8;
            grid-row: 2 / 3;
          }

          /* Item 7 - Sydney Opera House */
          .grid-item-7 {
            grid-column: 7 / 8;
            grid-row: 3 / 4;
          }

          /* Item 8 - Purple circle */
          .grid-item-8 {
            grid-column: 8 / 9;
            grid-row: 3 / 4;
          }

          /* Item 9 - Pink decorative shape */
          .grid-item-9 {
            grid-column: 1 / 2;
            grid-row: 4 / 5;
          }

          /* Item 10 - Colosseum */
          .grid-item-10 {
            grid-column: 2 / 3;
            grid-row: 4 / 5;
          }

          /* Item 11 - Great Wall (prominent - large featured) */
          .grid-item-11 {
            grid-column: 3 / 5;
            grid-row: 4 / 6;
          }

          /* Item 12 - Christ Redeemer */
          .grid-item-12 {
            grid-column: 5 / 6;
            grid-row: 4 / 5;
          }
        }

        /* ============================================
           GRID ITEMS - Base Styles
           Maintain consistent border radius
           Prevent stretched or distorted images
           Equal spacing between image cards
           ============================================ */
        .grid-item {
          border-radius: 12px;
          background-color: #e5e7eb;
          overflow: hidden;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }

        /* Smaller border radius on mobile */
        @media (max-width: 767px) {
          .grid-item {
            border-radius: 8px;
          }
        }

        /* Medium border radius on tablet */
        @media (min-width: 768px) and (max-width: 1199px) {
          .grid-item {
            border-radius: 10px;
          }
        }

        /* ============================================
           PERFORMANCE OPTIMIZATION
           ============================================ */
        @media (max-width: 1199px) {
          .grid-item {
            will-change: auto;
          }
        }

        @media (min-width: 1200px) {
          .grid-item {
            will-change: transform;
          }
        }

        /* ============================================
           ACCESSIBILITY & FOCUS STATES
           ============================================ */
        .hero-cta:focus-visible {
          outline: 3px solid rgba(255, 255, 255, 0.85);
          outline-offset: 4px;
        }

        .grid-item[aria-label] {
          position: relative;
        }

        /* ============================================
           SMOOTH TRANSITIONS - Prevent layout shift
           ============================================ */
        @media (prefers-reduced-motion: no-preference) {
          .hero-heading,
          .hero-paragraph,
          .hero-cta {
            transition: all 0.3s ease-out;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-cta {
            transition: none;
          }
          
          .grid-item {
            will-change: auto;
          }
        }

        /* ============================================
           REMOVE EXCESSIVE EMPTY SPACE ON TABLET
           Ensure content stays centered
           Visual weight balance between text and images
           ============================================ */
        @media (min-width: 768px) and (max-width: 1024px) {
          .hero-section {
            min-height: auto;
          }
          
          .hero-container {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}