'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Link as LinkIcon, Activity } from 'lucide-react';
import { serviceOverviewData } from '@/app/data/serviceOverviewData';
import { cn } from '@/lib/utils';
import { Link } from 'react-router';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function ServiceOverviewCompare() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useGSAP(() => {
    if (!containerRef.current || !isMounted) return;

    gsap.from(".reveal-overview", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      }
    });

  }, { scope: containerRef, dependencies: [isMounted] });

  if (!isMounted) return <div className="h-[800px] w-full bg-[#fdfdfc]" />;

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-[#fdfdfc] py-32 lg:py-56 overflow-hidden border-t border-black/5"
    >
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4EA62F]/20 to-transparent" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#4EA62F]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1800px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-5xl mb-24 lg:mb-40 reveal-overview">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-white border border-black/[0.04] rounded-full shadow-sm">
                <Activity className="w-3.5 h-3.5 text-[#4EA62F]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Ecosystem Architecture</span>
            </div>
          </div>
          <h2 className="text-[clamp(3.5rem,8vw,8rem)] font-[1000] text-[#0F172A] leading-[0.85] tracking-[-0.04em] uppercase perspective-[1000px]">
            Master Your <br/> 
            <span className="inline-block relative">
                Academic <span className="text-[#4EA62F]">Ecosystem.</span>
                <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                    className="absolute -bottom-4 left-0 w-full h-2 bg-[#4EA62F] origin-left"
                />
            </span>
          </h2>
        </div>

        {/* Comparison Interactive Deck */}
        <div className="reveal-overview flex flex-col lg:flex-row w-full h-[700px] lg:h-[900px] border border-black/[0.06] rounded-[4.5rem] overflow-hidden bg-white shadow-[0_50px_100px_-30px_rgba(0,0,0,0.08)]">
          {(serviceOverviewData || []).map((service, idx) => (
            <div
              key={service.id || idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative flex-1 group flex flex-col p-12 lg:p-20 border-r last:border-r-0 border-black/[0.04] overflow-hidden transition-all duration-[800ms] cubic-bezier(0.16, 1, 0.3, 1)"
              style={{
                flex: hoveredIndex === idx ? 3.5 : 1,
              }}
            >
              {/* [NEW] Background Imagery & Overlays */}
              <AnimatePresence mode="wait">
                 {hoveredIndex === idx ? (
                    <motion.div 
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute inset-0 z-0 bg-[#0F172A]"
                    >
                        <img 
                            src={service.image} 
                            alt={service.name}
                            className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
                    </motion.div>
                 ) : (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-0 flex items-center justify-center bg-white"
                    >
                        <span className="text-[25vw] font-[1000] text-black/[0.02] uppercase leading-none select-none tracking-[-0.1em]">
                            {service.initial}
                        </span>
                    </motion.div>
                 )}
              </AnimatePresence>

              {/* [NEW] Premium HUD Metadata (Visible on unhover) */}
              <div className={cn(
                  "absolute top-20 right-10 rotate-90 origin-right transition-all duration-700",
                  hoveredIndex === idx ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"
              )}>
                  <span className="text-[10px] font-black tracking-[0.6em] text-black/10 uppercase">Node {idx + 1}</span>
              </div>

              {/* Branding Info */}
              <div className="relative z-10 mb-auto">
                <span className={cn(
                    "text-[10px] font-black uppercase tracking-[0.5em] mb-6 block transition-all duration-700",
                    hoveredIndex === idx ? "text-[#4EA62F] translate-y-0" : "text-black/20 translate-y-4"
                )}>
                  {service.tagline}
                </span>
                <h3 className={cn(
                    "font-[1000] uppercase tracking-[-0.04em] leading-[0.9] transition-all duration-[900ms] ease-out",
                    hoveredIndex === idx 
                        ? "text-white text-5xl lg:text-8xl scale-100" 
                        : "text-[#0F172A] text-2xl lg:text-4xl scale-95 origin-left"
                )}>
                  {service.name.split(' ')[0]} <br/> 
                  <span className={hoveredIndex === idx ? "text-[#4EA62F]" : ""}>
                    {service.name.split(' ').slice(1).join(' ')}
                  </span>
                </h3>
              </div>

              {/* Center Floating Icon Prompt (Visual Guide) */}
              <div className={cn(
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-700 flex flex-col items-center gap-6",
                  hoveredIndex === idx ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 rotate-45 pointer-events-none"
              )}>
                  <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-3xl shadow-2xl">
                      <LinkIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">Explore Module</div>
              </div>

              {/* Dynamic Benefits & Action Area */}
              <div className="relative z-10 mt-10">
                 <div className={cn(
                     "space-y-10 transition-all duration-[800ms] cubic-bezier(0.16, 1, 0.3, 1)",
                     hoveredIndex === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
                 )}>
                    <div className="flex flex-wrap gap-3">
                       {(service.benefits || []).map((b, i) => (
                         <div key={i} className="group/benefit px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-[#4EA62F]/40 transition-colors">
                            <span className="text-[11px] font-[1000] uppercase text-white/60 group-hover/benefit:text-[#4EA62F] tracking-widest whitespace-nowrap">
                                {b}
                            </span>
                         </div>
                       ))}
                    </div>
                    
                    <Link 
                        to={service.ctaLink}
                        className="inline-flex items-center gap-8 group/btn"
                    >
                        <div className="h-[1px] w-12 bg-[#4EA62F] group-hover/btn:w-20 transition-all duration-500" />
                        <span className="text-[12px] font-black uppercase tracking-[0.4em] text-white group-hover/btn:text-[#4EA62F] transition-colors">
                           Access Protocol
                        </span>
                        <div className="w-16 h-16 rounded-full bg-white text-[#0F172A] flex items-center justify-center group-hover/btn:bg-[#4EA62F] group-hover/btn:scale-110 transition-all duration-500 shadow-2xl">
                           <ArrowRight className="w-7 h-7" />
                        </div>
                    </Link>
                 </div>
              </div>

              {/* Hover Decorative Line */}
              <motion.div 
                className="absolute right-0 top-0 w-[1px] h-full bg-white/10"
                animate={{ opacity: hoveredIndex === idx ? 1 : 0 }}
              />
            </div>
          ))}
        </div>

        {/* Global Stats/Footer for Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-10 reveal-overview px-10">
             <div className="flex items-center gap-12">
                 <div className="flex flex-col">
                    <span className="text-4xl font-[1000] text-[#0F172A]">98%</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/20">Success Rate</span>
                 </div>
                 <div className="w-px h-12 bg-black/[0.06]" />
                 <div className="flex flex-col">
                    <span className="text-4xl font-[1000] text-[#0F172A]">24/7</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/20">Network Uptime</span>
                 </div>
             </div>
             <p className="text-sm font-bold text-black/30 max-w-sm text-right leading-relaxed">
                Our institutional ecosystem is monitored in real-time to ensure zero-latency support for all arriving students.
             </p>
        </div>

      </div>
    </section>
  );
}
