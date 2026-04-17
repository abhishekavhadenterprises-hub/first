'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Globe, ShieldCheck, ArrowDownRight, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Header staggered reveal
    gsap.from(".about-banner-title line", {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 1.2,
      ease: "expo.out",
    });

    // Image reveal with parallax
    gsap.from(".about-banner-img-container", {
      opacity: 0,
      scale: 0.9,
      duration: 1.5,
      ease: "power3.out",
    });

    // Floating HUD elements
    gsap.from(".about-banner-hud", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[85vh] flex items-center bg-[#FDFDFC] overflow-hidden pt-32 pb-20 selection:bg-[#4EA62F] selection:text-white"
    >
      {/* Background Kinetic Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-[10%] right-[-5%] w-[60vw] h-[60vw] bg-[#4EA62F]/3 rounded-full blur-[120px] animate-pulse" />
         <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-emerald-100/10 rounded-full blur-[100px]" />
         
         {/* Grid HUD lines */}
         <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]">
            <div className="h-full w-full border-[1px] border-black border-dashed" />
         </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
           
           {/* Left Content - Master Typography */}
           <div className="w-full lg:w-3/5 space-y-12">
              <div className="space-y-6">
                 <div className="about-banner-hud inline-flex items-center gap-3 px-5 py-2 bg-white shadow-sm border border-black/5 rounded-full">
                    <Layers className="w-4 h-4 text-[#4EA62F]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Our Identity Protocol</span>
                 </div>

                 <h1 className="about-banner-title text-6xl lg:text-[10rem] font-[1000] text-[#0F172A] leading-[0.82] tracking-tighter uppercase font-['Outfit',sans-serif]">
                   The <br />
                   <span className="text-[#4EA62F] italic font-light lowercase px-4">Standard</span> <br />
                   of guidance.
                 </h1>
              </div>

              <div className="max-w-xl space-y-8">
                 <p className="about-banner-hud text-xl lg:text-2xl font-bold text-black/40 leading-tight tracking-tight font-['Outfit',sans-serif]">
                   Architecting a world where international education is accessible through clarity, structure, and uncompromising honesty.
                 </p>
                 
                 <div className="about-banner-hud flex flex-wrap gap-8 pt-4">
                    {[
                      { icon: Globe, val: "Global Network" },
                      { icon: ShieldCheck, val: "Strategic Pillar" }
                    ].map((metric, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <metric.icon size={16} className="text-[#4EA62F]" />
                         <span className="text-[10px] font-black uppercase tracking-widest text-black">{metric.val}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Right Content - Visual Narrative */}
           <div className="w-full lg:w-2/5 relative">
              <div className="about-banner-img-container relative group">
                 <div className="absolute -inset-4 bg-[#4EA62F]/5 rounded-[3rem] blur-2xl group-hover:bg-[#4EA62F]/10 transition-colors duration-700" />
                 
                 <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-black/5">
                    <img 
                      src="https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                      alt="The Standard of Guidance"
                      className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                    />
                    
                    {/* Glass HUD Overlay */}
                    <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 text-white">
                       <div className="flex justify-between items-end">
                          <div className="space-y-1">
                             <div className="text-[8px] font-black uppercase tracking-widest opacity-60">MISSION_CODE: 2026.ALPHA</div>
                             <div className="text-lg font-black uppercase tracking-tighter font-['Outfit',sans-serif]">Redefining Access</div>
                          </div>
                          <ArrowDownRight className="w-6 h-6 rotate-[-90deg] opacity-60" />
                       </div>
                    </div>
                 </div>
              </div>

              {/* Decorative side token */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden xl:block">
                 <div className="about-banner-hud [writing-mode:vertical-lr] text-[8px] font-black text-black/20 tracking-[0.8em]">
                    ESTABLISHED IN 2026 • GLOBAL CORE
                 </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}