'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Sparkles, ShieldCheck, Zap, ArrowRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function OurMissionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Left title reveal
    gsap.from(".mission-title-line", {
      opacity: 0,
      x: -50,
      stagger: 0.2,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".mission-title-line",
        start: "top 90%",
      }
    });

    // Right narrative reveal
    gsap.from(".mission-narrative-block > *", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".mission-narrative-block",
        start: "top 85%",
      }
    });

    // Metric nodes reveal
    gsap.from(".mission-metric-node", {
      opacity: 0,
      scale: 0.8,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".mission-metric-node",
        start: "top 90%",
      }
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative py-24 lg:py-48 bg-[#FDFDFC] overflow-hidden"
    >
      {/* Background HUD Decor */}
      <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none hidden lg:block">
         <div className="flex flex-col gap-4 items-end">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black">Mission Node v1.2</span>
            <div className="w-48 h-px bg-black" />
            <Target size={24} className="text-black" />
         </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-32">
           
           {/* Left Column: Heading Branding */}
           <div className="w-full lg:w-2/5 sticky top-32">
              <div className="space-y-8">
                 <div className="inline-flex items-center gap-3 px-5 py-2 bg-white shadow-sm border border-black/5 rounded-full mb-8">
                    <Sparkles className="w-4 h-4 text-[#4EA62F]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">The Ambition</span>
                 </div>

                 <h2 className="mission-title-line text-5xl lg:text-[7rem] font-[1000] text-[#0F172A] leading-[0.85] tracking-tighter uppercase font-['Outfit',sans-serif]">
                   Our <br />
                   <span className="text-[#4EA62F] italic font-light lowercase px-4">Mission</span> <br />
                   & Vision
                 </h2>

                 <div className="mission-metric-node flex flex-col gap-2 pt-12 border-t border-black/5">
                    <span className="text-[9px] font-black uppercase tracking-[0.6em] text-black/20 text-center lg:text-left">Operational Target</span>
                    <div className="flex items-center gap-4 justify-center lg:justify-start">
                       <ShieldCheck size={18} className="text-[#4EA62F]" />
                       <span className="text-2xl font-black text-[#0F172A] uppercase tracking-tighter font-['Outfit',sans-serif]">Systemic Clarity</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Right Column: High-End Narrative */}
           <div className="w-full lg:w-3/5 space-y-16">
              <div className="mission-narrative-block space-y-12">
                 <div className="relative group p-10 lg:p-16 bg-white rounded-[4rem] border border-black/5 shadow-[0_40px_100px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_120px_rgba(0,0,0,0.06)] transition-all duration-1000">
                    <Quote className="absolute top-10 right-10 w-12 h-12 text-black/[0.03]" />
                    
                    <p className="text-2xl lg:text-3xl font-bold text-[#0F172A]/80 leading-tight tracking-tight font-['Outfit',sans-serif]">
                       "International education planning can be overwhelming. Students face countless options, complex requirements, and confusing processes. We created this platform to bring <span className="text-[#4EA62F] hover:bg-[#4EA62F]/5 px-2 rounded-lg transition-colors">clarity and structure</span> to this journey."
                    </p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-6 p-8 lg:p-0">
                       <h4 className="text-xl font-black uppercase tracking-widest text-[#0F172A] flex items-center gap-4">
                          <Zap size={16} className="text-[#4EA62F]" />
                          Transparency
                       </h4>
                       <p className="text-lg font-bold text-black/40 leading-snug tracking-tight">
                          Our platform provides unfiltered information about study destinations, universities, and pathways. No hidden agendas, only elite metrics.
                       </p>
                    </div>

                    <div className="space-y-6 p-8 lg:p-0">
                       <h4 className="text-xl font-black uppercase tracking-widest text-[#0F172A] flex items-center gap-4">
                          <Zap size={16} className="text-[#4EA62F]" />
                          Empowerment
                       </h4>
                       <p className="text-lg font-bold text-black/40 leading-snug tracking-tight">
                          We don’t just provide answers; we provide the architecture for you to build your own success story on a global stage.
                       </p>
                    </div>
                 </div>

                 <div className="p-10 bg-[#0F172A] rounded-[3rem] text-white overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4EA62F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                       <div className="space-y-4 text-center md:text-left">
                          <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">The Bottom Line</h5>
                          <h4 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter font-['Outfit',sans-serif]">We focus on results, not promises.</h4>
                       </div>
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-px bg-white/20" />
                          <ShieldCheck className="text-[#4EA62F]" />
                       </div>
                    </div>
                 </div>
              </div>

              {/* Secondary Supporting Metrics */}
              <div className="grid grid-cols-3 gap-8">
                 {[
                   { val: "100%", label: "Honesty Protocol" },
                   { val: "24/7", label: "Advisor Uptime" },
                   { val: "Elite", label: "Guidance Track" }
                 ].map((stat, i) => (
                   <div key={i} className="mission-metric-node space-y-2">
                      <div className="text-3xl lg:text-5xl font-[1000] text-[#0F172A] tracking-tighter uppercase font-['Outfit',sans-serif]">{stat.val}</div>
                      <div className="text-[8px] font-black uppercase tracking-widest text-black/20 leading-none">{stat.label}</div>
                   </div>
                 ))}
              </div>
           </div>

        </div>
      </div>

    </section>
  );
}
