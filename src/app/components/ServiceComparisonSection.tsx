'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight, Sparkles, Trophy, Plus } from 'lucide-react';
import { serviceComparisonData } from '@/app/data/serviceComparisonData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const fallbackData = {
  title: "Network Comparison",
  subtitle: "Compare the leading UK spectrum holders based on student-critical metrics.",
  providers: [
    { id: 'ee', name: 'EE', logo: '/ee_logo.png', highlight: true },
    { id: 'o2', name: 'O2', logo: '/o2_logo.png' },
    { id: 'three', name: 'Three', logo: '/three_logo.png' },
    { id: 'vodafone', name: 'Vodafone', logo: '/vodafone_logo.png' }
  ],
  metrics: [
    { label: "5G Coverage", values: { ee: "99% Cities", o2: "92% Cities", three: "95% Cities", vodafone: "98% Cities" } },
    { label: "Student Perks", values: { ee: "Apple Music", o2: "Priority", three: "Roaming", vodafone: "VeryMe" } },
    { label: "Contract", values: { ee: "12M", o2: "Rolling", three: "None", vodafone: "12M" } },
    { label: "Data Limits", values: { ee: "Unlimited+", o2: "Unlimited", three: "Unlimited", vodafone: "Unlimited" } }
  ]
};

export function ServiceComparisonSection({ serviceId }: { serviceId?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const data = (serviceId && serviceComparisonData[serviceId]) || fallbackData;

  useGSAP(() => {
    if (!containerRef.current || !isMounted) return;

    // Advanced reveal: Staggered Fade & Slide
    gsap.from(".reveal-premium", {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

  }, { scope: containerRef, dependencies: [isMounted, data] });

  const handleMouseMove = (e: React.MouseEvent) => {
    const col = e.currentTarget as HTMLElement;
    const { left, top, width, height } = col.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.01;
    const y = (e.clientY - top - height / 2) * 0.01;
    gsap.to(col, { rotateY: x, rotateX: -y, transformPerspective: 1000, duration: 0.5 });
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const col = e.currentTarget as HTMLElement;
    gsap.to(col, { rotateY: 0, rotateX: 0, duration: 1, ease: 'power2.out' });
  };

  if (!isMounted) return <div className="h-[800px] w-full bg-[#fcfcfc]" />;

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-[#fcfcfc] py-32 lg:py-48 overflow-hidden"
    >
      {/* Cinematic Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[40vw] h-[40vw] bg-[#4EA62F]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[0%] right-[-5%] w-[35vw] h-[35vw] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] left-[5%] text-[15vw] font-[1000] text-black/[0.01] uppercase select-none tracking-tighter">
          Analysis
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-24 lg:mb-40">
          <div className="reveal-premium max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-[#4EA62F]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#4EA62F]">Comparison intelligence</span>
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-[1000] text-[#0F172A] leading-[0.85] tracking-[-0.05em] uppercase">
              {data.title}
            </h2>
          </div>
          <div className="reveal-premium lg:max-w-md pb-4">
             <p className="text-xl text-black/40 font-bold leading-relaxed tracking-tight">
               {data.subtitle}
             </p>
          </div>
        </div>

        {/* Matrix Container */}
        <div className="reveal-premium overflow-x-auto lg:overflow-visible pb-12 scrollbar-none">
          <div className="min-w-[1100px] lg:min-w-full">
            
            {/* Providers Row */}
            <div className="grid grid-cols-[320px_repeat(4,1fr)] gap-6 mb-12 px-4">
              <div className="flex flex-col justify-end pb-8">
                 <Trophy className="w-8 h-8 text-[#4EA62F] mb-4 opacity-20" />
                 <span className="text-[9px] font-black uppercase tracking-[0.4em] text-black/20">Metric Parameter</span>
              </div>
              {data.providers.map((p) => (
                <div 
                  key={p.id} 
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className={`provider-card-premium relative p-10 rounded-[3rem] transition-all duration-700 flex flex-col items-center gap-6 ${p.highlight ? 'bg-[#0F172A] text-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] z-50 scale-105' : 'bg-white border border-black/5'}`}
                >
                  {p.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-2 bg-[#4EA62F] rounded-full text-[9px] font-black uppercase tracking_widest flex items-center gap-2 border-4 border-[#fcfcfc] shadow-xl">
                       <Sparkles className="w-3 h-3" /> Recommended
                    </div>
                  )}
                  <div className="w-20 h-20 rounded-2xl bg-white border border-black/5 p-4 shadow-inner">
                    <img src={p.logo} alt={p.name} className="w-full h-full object-contain" />
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tighter">{p.name}</h4>
                </div>
              ))}
            </div>

            {/* Metrics Rows */}
            <div className="space-y-4 px-4">
              {data.metrics.map((m, i) => (
                <div 
                  key={i} 
                  className="group grid grid-cols-[320px_repeat(4,1fr)] gap-6 items-center p-8 bg-white border border-black/[0.03] rounded-[2.5rem] hover:bg-[#F8FAFC] hover:border-[#4EA62F]/10 transition-all duration-500 hover:shadow-xl"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-2xl bg-black/5 flex items-center justify-center group-hover:bg-[#4EA62F]/10 transition-all">
                       <Check className={`w-5 h-5 transition-colors ${i % 2 === 0 ? 'text-[#4EA62F]' : 'text-black/30 group-hover:text-[#4EA62F]'}`} />
                    </div>
                    <span className="text-[13px] font-black uppercase tracking-[0.15em] text-black/40 group-hover:text-[#0F172A] transition-colors">{m.label}</span>
                  </div>
                  {data.providers.map((p) => (
                    <div 
                      key={p.id} 
                      className={`text-center font-[1000] text-sm lg:text-lg uppercase tracking-tighter transition-all duration-500 ${p.highlight ? 'text-[#4EA62F]' : 'text-black/60 group-hover:text-[#0F172A]'}`}
                    >
                      {m.values[p.id] || "—"}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Action Buttons Row */}
            <div className="grid grid-cols-[320px_repeat(4,1fr)] gap-6 mt-16 px-4">
               <div />
               {data.providers.map((p) => (
                 <div key={p.id} className="flex justify-center px-4">
                   <motion.button 
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className={`group w-full py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 transition-all duration-700 shadow-xl ${p.highlight ? 'bg-[#4EA62F] text-white shadow-[#4EA62F]/30' : 'bg-[#0F172A] text-white hover:bg-[#4EA62F]'}`}
                   >
                     Initialize <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                   </motion.button>
                 </div>
               ))}
            </div>

          </div>
        </div>

        {/* Professional Footer Layer */}
        <div className="mt-32 pt-12 border-t border-black/5 flex flex-col lg:flex-row justify-between items-center gap-12 opacity-30 hover:opacity-100 transition-opacity duration-700">
           <div className="flex items-center gap-10">
              <div className="flex flex-col">
                 <span className="text-[8px] font-black uppercase tracking-widest text-black/40">Market Integrity</span>
                 <span className="text-xs font-bold">Consolidated Data Pool 2026/27</span>
              </div>
              <div className="w-px h-10 bg-black/10" />
              <div className="flex flex-col">
                 <span className="text-[8px] font-black uppercase tracking-widest text-black/40">Update Status</span>
                 <span className="text-xs font-bold text-[#4EA62F]">Real-time Verification Active</span>
              </div>
           </div>
           <p className="max-w-md text-center lg:text-right text-[9px] font-black uppercase leading-relaxed tracking-widest">
             Comparison data is sourced from institutional partners. Student verification is required for final contractual engagement.
           </p>
        </div>

      </div>
    </section>
  );
}
