'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Map, BookOpen, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface StepCardProps {
  phase: string;
  title: string;
  subtitle: string;
  description?: string;
  pills: string[];
  index: number;
  icon: React.ReactNode;
  isLast?: boolean;
}

function StepCard({ phase, title, subtitle, description, pills, index, icon, isLast }: StepCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className={cn(
        "step-card-wrapper sticky top-[12vh] w-full flex items-center justify-center",
        isLast ? "mb-0" : "mb-[25vh]"
      )}
      style={{ zIndex: index + 1 }}
    >
      <div
        className="card-content relative w-full h-[70vh] rounded-[4rem] overflow-hidden flex items-center px-12 lg:px-20 border border-black/5 transition-all duration-500 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)]"
        style={{
          background: 'linear-gradient(135deg, #C7EABB 0%, #D8F2D0 100%)'
        }}
      >
        {/* Cinematic Illustration */}
        <div className="absolute right-[-5%] bottom-[-5%] opacity-10 text-[#4EA62F] rotate-[-12deg] pointer-events-none scale-[1.5]">
          {icon}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[800px] pointer-events-none">
          <span className="block text-[#4EA62F] text-[11px] tracking-[6px] mb-8 uppercase font-[900] opacity-80 decoration-[#4EA62F]/30 decoration-2 underline-offset-8">
            {phase}
          </span>
          <h3 className="text-[clamp(2rem,6vw,4rem)] font-[1000] text-[#0F172A] mb-4 leading-[0.85] uppercase tracking-tighter">
            {title}
          </h3>
          <p className="text-[18px] lg:text-[22px] text-[#0F172A] mb-8 font-bold leading-tight tracking-tight">
            {subtitle}
          </p>
          {description && (
            <p className="text-base lg:text-lg text-[#0F172A]/50 mb-12 leading-relaxed font-medium max-w-[500px]">
              {description}
            </p>
          )}
          <div className="flex gap-4 flex-wrap pointer-events-auto">
            {pills.map((pill, i) => (
              <div
                key={i}
                className="px-8 py-3 rounded-full border border-black/5 text-[9px] uppercase tracking-[0.2em] font-black
                         text-[#0F172A] bg-white/40 backdrop-blur-md shadow-sm"
              >
                {pill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray<HTMLElement>('.step-card-wrapper');
    
    // Create the overlapping animation
    // Each card scales down and fades slightly as the next one comes up
    cards.forEach((card, i) => {
      if (i === cards.length - 1) return; // Don't animate the last card

      const content = card.querySelector('.card-content');
      if (!content) return;

      gsap.to(content, {
        scale: 0.94,
        opacity: 0.6,
        filter: "blur(2px)",
        scrollTrigger: {
          trigger: cards[i + 1], // Trigger when the NEXT card starts coming in
          start: "top 85%",
          end: "top 15%",
          scrub: true,
          invalidateOnRefresh: true
        }
      });
    });

  }, { scope: containerRef });

  const steps = [
    {
      phase: 'Phase 01',
      title: 'Explore',
      subtitle: 'Discover universities worldwide',
      description: 'Browse thousands of courses, compare universities, and find the perfect match for your academic goals.',
      pills: ['Search', 'Compare', 'Shortlist'],
      icon: <Map className="w-[500px] h-[500px]" />
    },
    {
      phase: 'Phase 02',
      title: 'Prepare',
      subtitle: 'Global Readiness',
      description: 'Access guides, checklists, and resources to prepare a winning application and secure your spot.',
      pills: ['Documents', 'Tests', 'Funding'],
      icon: <BookOpen className="w-[500px] h-[500px]" />
    },
    {
      phase: 'Phase 03',
      title: 'Succeed',
      subtitle: 'Arrival & Beyond',
      description: 'Connect with peers, access support services, and thrive in your new academic environment.',
      pills: ['Community', 'Support', 'Resources'],
      icon: <Rocket className="w-[500px] h-[500px]" />
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 lg:py-40 bg-white overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24 gap-6">
           <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.5em] text-[#4EA62F]">
              <div className="w-2 h-2 rounded-full bg-[#4EA62F] animate-pulse" />
              Relocation Journey
           </div>
           <h2 className="text-3xl lg:text-5xl font-[1000] text-[#0F172A] tracking-tighter uppercase whitespace-nowrap">
              Explore. Prepare. <span className="text-[#4EA62F] italic font-light lowercase">Succeed.</span>
           </h2>
           <p className="text-black/40 text-lg lg:text-xl font-bold tracking-tight leading-tight max-w-xl">
             A comprehensive framework designed to maximize your international academic potential, from first search to final arrival.
           </p>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative">
          {steps.map((step, index) => (
            <StepCard 
              key={index} 
              {...step} 
              index={index} 
              isLast={index === steps.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
