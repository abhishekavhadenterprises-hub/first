import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export function HobbitonBanner() {
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroCoverRef = useRef<HTMLDivElement>(null);
  const heroCoverImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Hero section animation
    const heroTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: heroContainerRef.current,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: 1,
      },
    });

    // Image zoom with 3D effect
    heroTimeline.to(heroCoverImgRef.current, {
      scale: 2,
      z: 350,
      transformOrigin: 'center center',
      ease: 'power1.inOut',
    });

    // Fade out the overlay
    heroTimeline.to(
      heroCoverRef.current,
      {
        '--overlay-opacity': 0,
        ease: 'power1.inOut',
      },
      '<'
    );

    // Clear the background blur and brighten
    heroTimeline.to(
      heroBgRef.current,
      {
        scale: 1.1,
        filter: 'blur(0px) brightness(1)',
        ease: 'power1.inOut',
      },
      '<'
    );

    // Reveal the title
    heroTimeline.to(
      heroTitleRef.current,
      {
        scale: 1,
        xPercent: -50,
        yPercent: -50,
        opacity: 1,
        filter: 'blur(0px)',
        ease: 'power1.inOut',
      },
      '<'
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main>
      <div ref={heroContainerRef} className="hero-container relative">
        <section className="hero">
          <div className="hero__content">
            <div
              ref={heroBgRef}
              className="hero__bg"
              style={{
                backgroundImage: 'url(https://assets.codepen.io/204808/hobbiton.jpg)',
              }}
            />
            <h1 ref={heroTitleRef} className="hero__title font-bold">
              Hobbiton
            </h1>
          </div>
          <div ref={heroCoverRef} className="hero__cover">
            <img
              ref={heroCoverImgRef}
              className="hero__cover-img"
              src="https://assets.codepen.io/204808/hobbit-hole.png"
              alt=""
            />
          </div>
        </section>
      </div>
    </main>
  );
}