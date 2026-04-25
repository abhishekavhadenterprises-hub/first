'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function TextRevealSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  const sentences = [
    {
      text: "Guidance-based assistance designed for informed decisions.",
      highlight: "Guidance-based"
    },
    {
      text: "Structure, clarity, and coordination throughout your planning.",
      highlight: "Clarity"
    },
    {
      text: "Admissions are decided by universities, not by this service.",
      highlight: "Universities"
    },
    {
      text: "Visa outcomes remain the sole authority of government bodies.",
      highlight: "Visa outcomes"
    },
    {
      text: "Your role is central; all final decisions Elite advisory designed to replace uncertainty with",
      highlight: "Your role"
    }
  ];

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray('.perspective-card');
    
    // Header reveal (separate from scrub)
    gsap.from(".perspective-header > *", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      }
    });

    // Main Scroll Timeline for the 3D Stack
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3500",
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    });

    cards.forEach((card: any, i) => {
      // Set initial state - First card starts more visible
      gsap.set(card, { 
        opacity: i === 0 ? 0.3 : 0, 
        z: -500, 
        scale: 0.8, 
        pointerEvents: 'none' 
      });

      // In from the back
      tl.to(card, 
        { 
          opacity: 1, 
          scale: 1,
          z: 0,
          y: 0,
          rotationX: 0,
          pointerEvents: 'auto',
          duration: 1,
          ease: "power2.out"
        },
        i * 1.2
      )
      // Out to the front
      .to(card, 
        { 
          opacity: 0, 
          scale: 1.1,
          z: 500,
          y: -20,
          pointerEvents: 'none',
          duration: 1,
          ease: "power2.in"
        },
        (i + 0.8) * 1.2
      );
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="perspective-section relative min-h-screen bg-white overflow-hidden"
    >
      {/* Dynamic Background HUD */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
         <div className="w-[150vw] h-[150vw] border-[1px] border-black rounded-full animate-[spin_60s_linear_infinite]" />
         <div className="absolute text-[15vw] font-black tracking-tighter uppercase whitespace-nowrap">
            Transparency • Protocol • Liability • Disclosure
         </div>
      </div>

      {/* Floating Meta Indices */}
      <div className="absolute top-12 left-12 flex flex-col gap-4">
         <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-[#4EA62F]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Status: Regulatory Compliance</span>
         </div>
         <div className="text-[8px] font-mono text-black/20 leading-none">
            REF_CODE: CNCRG_X_091 <br />
            TIMESTAMP: {new Date().getFullYear()}.04.14
         </div>
      </div>

      {/* 3D Stack Container */}
      <div className="relative w-full h-screen flex items-center justify-center perspective-[2000px]">
         <div ref={stackRef} className="relative w-full max-w-4xl px-6">
            
            {/* Cards Wrapper */}
            <div className="relative w-full aspect-[21/9] flex items-center justify-center text-center">
               {sentences.map((item, idx) => (
                 <div 
                   key={idx}
                   className="perspective-card absolute inset-0 flex flex-col items-center justify-center bg-white rounded-[4rem] border border-black/5 shadow-[0_60px_150px_rgba(0,0,0,0.1)] p-8 lg:p-20"
                 >
                    <div className="mb-10 flex items-center gap-4">
                       <span className="w-12 h-[1px] bg-[#4EA62F]" />
                       <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#4EA62F]">Clause 0{idx + 1}</span>
                       <span className="w-12 h-[1px] bg-[#4EA62F]" />
                    </div>

                    <h3 className="text-4xl lg:text-7xl font-black text-[#0F172A] leading-[1.05] tracking-tighter uppercase font-['Outfit',sans-serif]">
                       {item.text.split(item.highlight).map((part, i) => (
                         <React.Fragment key={i}>
                            {part}
                            {i === 0 && <span className="text-[#4EA62F] italic font-light lowercase px-4">{item.highlight}</span>}
                         </React.Fragment>
                       ))}
                    </h3>

                    <div className="mt-12 flex items-center gap-6 opacity-20">
                       <ShieldCheck size={20} />
                       <p className="text-[10px] font-black uppercase tracking-widest leading-none">Verified Transparency Protocol</p>
                    </div>
                 </div>
               ))}
            </div>

            {/* Scroll Indicator HUD */}
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
               <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center animate-bounce">
                  <ArrowRight className="rotate-90 text-black/20" size={16} />
               </div>
               <span className="text-[8px] font-black uppercase tracking-[0.5em] text-black/20">Scroll to Navigate Protocols</span>
            </div>

         </div>
      </div>

      {/* Side Decorative Arch */}
      <div className="absolute right-0 top-0 h-full w-24 border-l border-black/[0.03] hidden lg:block" />
      <div className="absolute left-0 top-0 h-full w-24 border-r border-black/[0.03] hidden lg:block" />
    </section>
  );
}