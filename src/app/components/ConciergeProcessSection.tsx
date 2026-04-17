'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: '01',
    title: 'Share your background',
    description: 'Submit your academic profile, preferences, and goals through a structured request form.',
    image: 'https://images.unsplash.com/photo-1758691461932-d0aa0ebf6b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Personalized', 'Swift']
  },
  {
    number: '02',
    title: 'Profile review',
    description: 'A concierge advisor reviews your information and assesses where guidance would be most valuable.',
    image: 'https://images.unsplash.com/photo-1758928807847-ed94f9ed3cad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Expert Analysis', 'Detail-Oriented']
  },
  {
    number: '03',
    title: 'Structured guidance',
    description: 'Receive personalized recommendations, planning support, and resources based on your profile.',
    image: 'https://images.unsplash.com/photo-1574085745147-652f7d6bcefb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Actionable', 'Curated']
  },
  {
    number: '04',
    title: 'Plan next steps',
    description: 'Work together to clarify decisions, coordinate actions, and establish a clear path forward.',
    image: 'https://images.unsplash.com/photo-1768767099805-4b07e76094d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Launch-Ready', 'Strategic']
  },
];

export const ConciergeProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Header reveal
    gsap.from(".process-header > *", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".process-header",
        start: "top 85%",
      }
    });

    // Step items reveal
    const stepItems = gsap.utils.toArray(".process-step-item");
    stepItems.forEach((step: any, i) => {
      const isEven = i % 2 === 0;
      
      gsap.from(step, {
        opacity: 0,
        x: isEven ? -50 : 50,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: step,
          start: "top 80%",
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Kinetic Typography */}
      <div className="absolute top-0 right-[-5%] text-[20vw] font-black text-black/[0.01] select-none tracking-tighter leading-none pointer-events-none">
        PROCESS
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="process-header mb-24 lg:mb-40 max-w-4xl">
           <div className="inline-flex items-center gap-3 px-5 py-2 bg-gray-50 border border-black/5 rounded-full mb-8">
              <Clock className="w-4 h-4 text-[#4EA62F]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">The Roadmap</span>
           </div>
           
           <h2 className="text-5xl lg:text-8xl font-[1000] text-[#0F172A] leading-[0.85] tracking-tighter uppercase mb-10 font-['Outfit',sans-serif]">
             How It <br />
             <span className="text-[#4EA62F] italic font-light lowercase">Works</span>
           </h2>

           <p className="max-w-xl text-xl font-bold text-black/40 leading-tight tracking-tight font-['Outfit',sans-serif]">
              A precision-engineered workflow from global ambition to local enrollment.
           </p>
        </div>

        {/* Steps Journey */}
        <div className="space-y-32 lg:space-y-64">
           {steps.map((step, idx) => {
             const isEven = idx % 2 === 0;
             return (
               <div 
                 key={idx}
                 className={cn(
                   "process-step-item flex flex-col lg:flex-row items-center gap-16 lg:gap-32",
                   !isEven && "lg:flex-row-reverse"
                 )}
               >
                  {/* Image Part */}
                  <div className="w-full lg:w-1/2 group">
                     <div className="relative aspect-square lg:aspect-[4/3] overflow-hidden rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.06)] border border-black/5">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        {/* Glass Overlay Number */}
                        <div className="absolute top-8 left-8 w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 text-white font-black text-3xl">
                           {step.number}
                        </div>
                     </div>
                  </div>

                  {/* Content Part */}
                  <div className="w-full lg:w-1/2 space-y-8">
                     <div className="flex flex-wrap gap-2">
                        {step.tags.map((tag, i) => (
                          <span key={i} className="px-4 py-1.5 bg-[#4EA62F]/10 text-[#4EA62F] text-[10px] font-black uppercase tracking-widest rounded-full">
                            {tag}
                          </span>
                        ))}
                     </div>

                     <h3 className="text-4xl lg:text-6xl font-black text-[#0F172A] uppercase tracking-tighter leading-[0.9] font-['Outfit',sans-serif]">
                        {step.title}
                     </h3>

                     <p className="text-xl lg:text-2xl text-black/40 font-bold leading-tight tracking-tight max-w-lg">
                        {step.description}
                     </p>

                     <div className="flex items-center gap-4 pt-4">
                        <div className="w-12 h-px bg-black/10" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/20">Phase Verified</span>
                        <CheckCircle2 className="w-4 h-4 text-[#4EA62F]" />
                     </div>
                  </div>
               </div>
             );
           })}
        </div>
      </div>

      {/* Connection SVG Line (Optional visual flourish) */}
      <div className="absolute top-0 left-1/2 -ml-[1px] w-[2px] h-full bg-gradient-to-b from-[#4EA62F]/0 via-[#4EA62F]/10 to-[#4EA62F]/0 hidden lg:block pointer-events-none" />
    </section>
  );
};
