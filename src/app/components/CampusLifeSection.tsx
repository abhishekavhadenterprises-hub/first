import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

interface StatCardProps {
  value: string;
  label: string;
  index: number;
}

const campusStats = [
  { value: '650+', label: 'Student Organizations' },
  { value: '36', label: 'Varsity Sports' },
  { value: '97%', label: 'Live on Campus' },
  { value: '120+', label: 'Countries Represented' }
];

const campusContent = [
  {
    title: 'Student Organizations',
    items: [
      'Academic & Professional Groups',
      'Cultural & Identity Organizations',
      'Community Service & Activism',
      'Arts, Media & Performance',
      'Sports & Recreation Clubs'
    ],
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    title: 'Housing & Dining',
    items: [
      '8 undergraduate housing neighborhoods',
      'Graduate residences & apartments',
      '18 dining halls & cafes',
      'Diverse cuisine options',
      'Late-night dining available'
    ],
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    title: 'Athletics & Recreation',
    items: [
      '135 NCAA Championships (most in history)',
      'State-of-the-art fitness centers',
      'Olympic-size swimming pools',
      'Intramural & club sports',
      'Outdoor adventure programs'
    ],
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    title: 'Arts & Culture',
    items: [
      'Cantor Arts Center',
      'Bing Concert Hall',
      'Theater & dance performances',
      'Film screenings & festivals',
      'Student exhibitions & showcases'
    ],
    image: 'https://images.unsplash.com/photo-1499364615650-ec38552f4f34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  }
];

export function CampusLifeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const particlesRef = useRef<HTMLDivElement>(null);

  // Thumbnail state for 3D flip animation
  const [thumbnail, setThumbnail] = useState({
    front: campusContent[0],
    back: campusContent[0]
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const updateThumbnail = (content: typeof campusContent[0], i: number) => {
    const isBack = Boolean(i % 2);
    const pos = isBack ? 'back' : 'front';
    setThumbnail(prev => ({ ...prev, [pos]: content }));
    setActiveIndex(i);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1) SECTION ENTRY: Spotlight Sweep + Underline Draw + Word Reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
          once: true
        }
      });

      // Spotlight sweep
      if (spotlightRef.current) {
        tl.fromTo(
          spotlightRef.current,
          { x: '-100%', opacity: 0 },
          {
            x: '100%',
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
          },
          0
        );
      }

      // Heading underline draw
      if (underlineRef.current) {
        tl.fromTo(
          underlineRef.current,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 0.5,
            ease: 'power2.out'
          },
          0.2
        );
      }

      // Subtitle word-by-word reveal
      if (subtitleRef.current) {
        const words = subtitleRef.current.querySelectorAll('.word');
        tl.fromTo(
          words,
          { opacity: 0, y: 8 },
          {
            opacity: 1,
            y: 0,
            duration: 0.15,
            stagger: 0.05,
            ease: 'power2.out'
          },
          0.3
        );
      }

      // 2) MAGNETIC STAT CARDS
      statsRef.current.forEach((card, index) => {
        if (!card) return;

        const number = card.querySelector('[data-stat-number]');
        const shimmer = card.querySelector('[data-shimmer]');

        // Magnetic snap entrance
        gsap.fromTo(
          card,
          {
            x: gsap.utils.random(-4, 4),
            y: gsap.utils.random(-4, 4),
            rotation: gsap.utils.random(-2, 2),
            opacity: 0,
            scale: 0.95
          },
          {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true
            },
            delay: index * 0.1,
            onComplete: () => {
              // Count-up animation
              if (number) {
                const text = number.textContent || '';
                const isPercentage = text.includes('%');
                const hasPlus = text.includes('+');
                const numValue = parseInt(text.replace(/[^0-9]/g, ''));

                if (!isNaN(numValue)) {
                  const obj = { val: 0 };
                  gsap.to(obj, {
                    val: numValue,
                    duration: 0.8,
                    ease: 'power2.out',
                    onUpdate: () => {
                      let displayText = Math.round(obj.val).toString();
                      if (isPercentage) displayText += '%';
                      if (hasPlus) displayText += '+';
                      number.textContent = displayText;
                    },
                    onComplete: () => {
                      // Shimmer pass
                      if (shimmer) {
                        gsap.fromTo(
                          shimmer,
                          { x: '-100%', opacity: 0 },
                          {
                            x: '100%',
                            opacity: 1,
                            duration: 0.3,
                            ease: 'power1.inOut',
                            onComplete: () => {
                              gsap.to(shimmer, { opacity: 0, duration: 0.1 });
                            }
                          }
                        );
                      }
                    }
                  });
                }
              }
            }
          }
        );

        // Magnetic hover effect
        card.addEventListener('mouseenter', (e) => {
          gsap.to(card, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            x: 0,
            y: 0,
            rotation: 0,
            duration: 0.4,
            ease: 'power2.out'
          });
        });

        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(card, {
            x: x * 0.05,
            y: y * 0.05,
            rotation: (x * 0.01),
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });

      // 5) AMBIENT BACKGROUND: Particles + Gradient Drift
      if (particlesRef.current) {
        // Create floating particles
        const particleCount = 20;
        const particles: HTMLDivElement[] = [];

        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.className = 'absolute rounded-full bg-[#4B6E48] opacity-[0.02]';
          particle.style.width = `${gsap.utils.random(2, 6)}px`;
          particle.style.height = particle.style.width;
          particle.style.left = `${gsap.utils.random(0, 100)}%`;
          particle.style.top = `${gsap.utils.random(0, 100)}%`;
          particlesRef.current.appendChild(particle);
          particles.push(particle);

          // Animate particle float
          gsap.to(particle, {
            y: gsap.utils.random(-30, 30),
            x: gsap.utils.random(-30, 30),
            duration: gsap.utils.random(8, 15),
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: gsap.utils.random(0, 3)
          });
        }

        // Gradient drift
        const gradient = particlesRef.current;
        gsap.to(gradient, {
          backgroundPosition: '100% 100%',
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-white overflow-hidden"
      data-campus-life-section
    >
      {/* Ambient Background Layer */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(251,252,250,0) 0%, rgba(245,241,232,0.3) 50%, rgba(251,252,250,0) 100%)',
          backgroundSize: '200% 200%',
          backgroundPosition: '0% 0%'
        }}
      />

      {/* Circular Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(75, 110, 72, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 70%, rgba(75, 110, 72, 0.12) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(75, 110, 72, 0.08) 0%, transparent 60%),
                           repeating-radial-gradient(circle at 50% 50%, transparent 0px, transparent 40px, rgba(75, 110, 72, 0.05) 40px, rgba(75, 110, 72, 0.05) 41px)`,
          backgroundSize: '100% 100%, 100% 100%, 100% 100%, 80px 80px',
          backgroundPosition: '0 0, 0 0, 0 0, 0 0'
        }}
      />

      {/* Spotlight Sweep */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none opacity-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(75, 110, 72, 0.08) 50%, transparent 100%)',
          width: '50%'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-8 relative">
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl font-semibold text-[#0F172A] mb-2 relative inline-block"
          >
            Campus Life
            {/* Animated Underline */}
            <div
              ref={underlineRef}
              className="absolute bottom-0 left-0 w-full h-[2px] bg-[#4B6E48] origin-left"
              style={{ transform: 'scaleX(0)' }}
            />
          </h2>
          <p ref={subtitleRef} className="text-base text-[#6B7280] mt-3">
            {/* Split into words for animation */}
            {['Experience', 'a', 'vibrant,', 'diverse', 'community', 'with', 'over', '600', 'student', 'organizations'].map((word, i) => (
              <span key={i} className="word inline-block mr-[0.3em]">
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {campusStats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => {
                statsRef.current[index] = el;
              }}
              className="relative bg-[#FDFCFA] border border-gray-200 rounded-xl p-6 text-center cursor-pointer transition-all overflow-hidden group"
              style={{
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}
            >
              {/* Shimmer effect */}
              <div
                data-shimmer
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 pointer-events-none"
              />

              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-[#4B6E48] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

              <p
                data-stat-number
                className="text-3xl font-bold text-[#4B6E48] mb-2 relative z-10"
              >
                {stat.value}
              </p>
              <p className="text-sm text-[#6B7280] relative z-10">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Hover List with 3D Flip Thumbnail */}
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center min-h-[600px]">
          {/* List Container */}
          <div className="w-full lg:w-1/2 max-w-[720px] mx-auto flex flex-col items-stretch text-2xl md:text-4xl font-medium relative text-[#555]" style={{ perspective: '1000px' }}>
            {campusContent.map((content, i) => (
              <div 
                key={content.title} 
                className="h-20 px-6 md:h-28 md:px-12 flex items-center cursor-pointer border-b border-b-current group hover:text-[#0F172A] transition-colors duration-300 relative" 
                onMouseEnter={() => updateThumbnail(content, i)}
              >
                <div className="transition-all duration-300 group-hover:translate-x-4">{content.title}</div>
                
                {/* Mobile/Tablet Thumbnail - shows on smaller screens */}
                <div className="lg:hidden absolute right-6 md:right-12 h-16 md:h-20 aspect-[4/3] pointer-events-none overflow-hidden rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src={content.image} 
                    alt={content.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}

            {/* Desktop 3D Flip Thumbnail - only visible on large screens */}
            {thumbnail.front && thumbnail.back && (
              <motion.div 
                className="hidden lg:block absolute top-0 right-6 md:right-12 h-20 md:h-28 aspect-[4/3] pointer-events-none"
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
                transition={{ 
                  duration: 0.3,
                }}
                animate={{ 
                  translateY: `${activeIndex * 100}%`,
                  rotateX: activeIndex * -180,
                }}
              >
                <img 
                  data-pos="front"
                  src={thumbnail.front.image} 
                  alt={thumbnail.front.title} 
                  className="w-full h-full object-cover rounded-lg absolute top-0 left-0"
                  style={{ backfaceVisibility: 'hidden' }}
                />
                <img 
                  data-pos="back"
                  src={thumbnail.back.image} 
                  alt={thumbnail.back.title} 
                  className="w-full h-full object-cover rounded-lg absolute top-0 left-0"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateX(180deg)'
                  }}
                />
              </motion.div>
            )}
          </div>

          {/* Details Panel */}
          <div className="w-full lg:w-1/2 bg-white border border-gray-200 rounded-xl p-8 shadow-sm min-h-[400px]">
            <h3 className="text-2xl font-semibold text-[#0F172A] mb-6 pb-3 border-b border-gray-200">
              {campusContent[activeIndex].title}
            </h3>
            
            <div className="relative">
              <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-[#4B6E48] to-transparent" />
              
              <div className="space-y-4 pl-6">
                {campusContent[activeIndex].items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#4B6E48] mt-2 flex-shrink-0" />
                    <p className="text-base text-[#6B7280] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Category indicator */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-[#6B7280] uppercase tracking-widest">
                Category {activeIndex + 1} of {campusContent.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
