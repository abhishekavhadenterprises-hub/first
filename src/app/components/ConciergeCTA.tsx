'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, Globe, ShieldCheck, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function ConciergeCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleCTAClick = () => {
    const formSection = document.getElementById('request-concierge-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
    
    if (dist < 200) {
      setMousePos({
        x: (e.clientX - centerX) * 0.2,
        y: (e.clientY - centerY) * 0.2
      });
    } else {
      setMousePos({ x: 0, y: 0 });
    }
  };

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.from(".cta-title-line", {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".cta-title-line",
        start: "top 90%",
      }
    });

    gsap.from(".cta-metric-node", {
      opacity: 0,
      scale: 0.8,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cta-metric-node",
        start: "top 90%",
      }
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-24 lg:py-48 bg-[#FDFDFC] overflow-hidden"
    >
      {/* Background Kinetic Canvas */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border-[1px] border-black rounded-full" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border-[1px] border-dotted border-black rounded-full animate-[spin_120s_linear_infinite]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Floating HUD Metrics */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
           {[
             { icon: Globe, label: "Global Reach", val: "140+ Nodes" },
             { icon: ShieldCheck, label: "Protocol", val: "Verified" },
             { icon: Zap, label: "Execution", val: "Real-time" }
           ].map((node, i) => (
             <div 
               key={i}
               className="cta-metric-node flex items-center gap-3 px-6 py-3 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.02)] border border-black/5 rounded-2xl"
             >
                <node.icon size={14} className="text-[#4EA62F]" />
                <div className="flex flex-col items-start leading-none">
                   <span className="text-[8px] font-black uppercase tracking-widest text-black/30 mb-1">{node.label}</span>
                   <span className="text-[10px] font-black uppercase text-[#0F172A]">{node.val}</span>
                </div>
             </div>
           ))}
        </div>

        {/* Cinematic Heading */}
        <div className="mb-16">
           <h2 className="cta-title-line text-5xl lg:text-[9rem] font-[1000] text-[#0F172A] leading-[0.85] tracking-tighter uppercase font-['Outfit',sans-serif]">
             Structure <br />
             <span className="text-black/10">your next</span> <br />
             <span className="text-[#4EA62F] italic font-light lowercase px-4">era.</span>
           </h2>
        </div>

        <p className="cta-title-line max-w-2xl mx-auto text-xl lg:text-2xl font-bold text-black/40 leading-tight mb-20 font-['Outfit',sans-serif]">
           Shift from exploration to enrollment. Initiate your premium strategy track today.
        </p>

        {/* Magnetic CTA Button */}
        <div className="flex justify-center">
           <motion.button
             ref={buttonRef}
             onClick={handleCTAClick}
             animate={{ x: mousePos.x, y: mousePos.y }}
             transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
             className="group relative px-12 py-6 bg-[#0F172A] text-white rounded-[2rem] text-[12px] font-black uppercase tracking-[0.3em] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)] active:scale-95 transition-shadow duration-500 hover:shadow-[0_40px_100px_rgba(78,166,47,0.2)]"
           >
              <div className="absolute inset-0 bg-[#4EA62F] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              <div className="relative z-10 flex items-center gap-4">
                 Request Support Protocol
                 <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
              </div>
           </motion.button>
        </div>

        {/* Footer Protocol Node */}
        <div className="mt-32 pt-16 border-t border-black/5 opacity-20">
           <div className="flex items-center justify-center gap-8">
              <span className="text-[9px] font-black uppercase tracking-[0.5em]">System Ready</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#4EA62F] animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.5em]">Senior Strategists Available</span>
           </div>
        </div>

      </div>
    </section>
  );
}