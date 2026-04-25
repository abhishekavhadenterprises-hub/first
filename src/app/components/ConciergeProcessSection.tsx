'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: '01',
    title: 'Share your background',
    description: 'Submit your academic profile, preferences, and goals through a structured request form.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop',
    tags: ['Personalized', 'Swift']
  },
  {
    number: '02',
    title: 'Profile review',
    description: 'A concierge advisor reviews your information and assesses where guidance would be most valuable.',
    image: 'https://images.unsplash.com/photo-1454165833762-026d7d9b3d4?q=80&w=2070&auto=format&fit=crop',
    tags: ['Expert Analysis', 'Detail-Oriented']
  },
  {
    number: '03',
    title: 'Structured guidance',
    description: 'Receive personalized recommendations, planning support, and resources based on your profile.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    tags: ['Actionable', 'Curated']
  },
  {
    number: '04',
    title: 'Plan next steps',
    description: 'Work together to clarify decisions, coordinate actions, and establish a clear path forward.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop',
    tags: ['Launch-Ready', 'Strategic']
  },
];

export const ConciergeProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Background text parallax
    gsap.to(bgTextRef.current, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Heading Reveal
    const headingLines = gsap.utils.toArray(".heading-line");
    headingLines.forEach((line: any) => {
      gsap.from(line, {
        y: 100,
        opacity: 0,
        rotateX: -15,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: line,
          start: "top 90%",
        }
      });
    });

    // Step items reveal with staggered content
    const stepItems = gsap.utils.toArray(".process-step-item");
    stepItems.forEach((step: any, i) => {
      const q = gsap.utils.selector(step);
      const isEven = i % 2 === 0;

      // Image Reveal
      gsap.from(q(".image-container"), {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 50,
        opacity: 0,
        duration: 1.8,
        ease: "expo.out",
        scrollTrigger: {
          trigger: step,
          start: "top 75%",
        }
      });

      // Content Reveal
      gsap.from(q(".content-element"), {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: step,
          start: "top 70%",
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative py-16 lg:py-24 bg-white overflow-hidden"
      id="process-section"
    >
      {/* Background Kinetic Typography - Centered and Parallax */}
      <div
        ref={bgTextRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-black/[0.02] select-none tracking-tighter leading-none pointer-events-none z-0 whitespace-nowrap"
      >
        PROCESS
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="process-header mb-32 lg:mb-56 text-center mx-auto max-w-5xl">
          <div className="heading-line inline-flex items-center gap-3 px-6 py-2 bg-gray-50 border border-black/5 rounded-full mb-10 overflow-hidden">
            <Clock className="w-4 h-4 text-[#4EA62F]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">The Roadmap</span>
          </div>

          <div className="overflow-hidden mb-10">
            <h2 className="heading-line text-4xl lg:text-7xl font-[1000] text-[#0F172A] leading-[1] tracking-tighter uppercase font-['Outfit',sans-serif]">
              How it <span className="text-[#4EA62F] italic font-light lowercase">works</span>
            </h2>
          </div>

          <div className="overflow-hidden">
            <p className="heading-line max-w-2xl mx-auto text-lg lg:text-xl font-bold text-black/30 leading-tight tracking-tight font-['Outfit',sans-serif]">
              A precision-engineered workflow from global ambition <br className="hidden lg:block" /> to local enrollment.
            </p>
          </div>
        </div>

        {/* Steps Journey */}
        <div className="space-y-32 lg:space-y-64 pb-10">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={cn(
                  "process-step-item flex flex-col lg:flex-row items-center gap-16 lg:gap-40",
                  !isEven && "lg:flex-row-reverse"
                )}
              >
                {/* Image Part */}
                <div className="w-full lg:w-1/2 group">
                  <div className="image-container relative aspect-[4/5] lg:aspect-[4/3] overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] shadow-[0_60px_120px_rgba(0,0,0,0.07)] border border-black/5 bg-gray-100">
                    <img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                    />
                    {/* Glass Overlay Number */}
                    <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 backdrop-blur-2xl rounded-3xl flex items-center justify-center border border-white/20 text-white font-black text-4xl shadow-2xl">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content Part */}
                <div className="w-full lg:w-1/2 space-y-10 lg:pl-10">
                  <div className="content-element flex flex-wrap gap-2">
                    {step.tags.map((tag, i) => (
                      <span key={i} className="px-5 py-2 bg-[#4EA62F]/5 text-[#4EA62F] text-[10px] font-black uppercase tracking-widest rounded-full border border-[#4EA62F]/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="content-element text-3xl lg:text-5xl font-black text-[#0F172A] uppercase tracking-tighter leading-[0.9] font-['Outfit',sans-serif]">
                    {step.title}
                  </h3>

                  <p className="content-element text-lg lg:text-xl text-black/40 font-bold leading-relaxed tracking-tight max-w-lg">
                    {step.description}
                  </p>

                  <div className="content-element flex items-center gap-6 pt-6">
                    <div className="w-16 h-px bg-black/10" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/20">Phase Verified</span>
                    <div className="w-10 h-10 rounded-full bg-[#4EA62F]/10 flex items-center justify-center border border-[#4EA62F]/20">
                      <CheckCircle2 className="w-5 h-5 text-[#4EA62F]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative center line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-black/[0.03] to-transparent z-0 hidden lg:block" />
    </section>
  );
};
