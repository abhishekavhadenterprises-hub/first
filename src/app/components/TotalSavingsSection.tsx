'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Wallet, TrendingUp, Sparkles, ArrowRight, ShieldCheck, Calendar, CheckCircle2, Zap } from 'lucide-react';
import { totalSavingsSectionData } from '@/app/data/totalSavingsData';
import { whenYouNeedThisSectionData } from '@/app/data/whenYouNeedThisData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TotalSavingsSectionProps {
  serviceId?: string;
}

export function TotalSavingsSection({ serviceId }: TotalSavingsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const data = (serviceId && totalSavingsSectionData[serviceId]) || totalSavingsSectionData['sim-cards'];
  const timingData = (serviceId && whenYouNeedThisSectionData[serviceId]) || whenYouNeedThisSectionData['sim-cards'];
  
  if (!data || !timingData) return null;

  useGSAP(() => {
    if (!containerRef.current || !isMounted) return;

    // Number Counter Animation
    const totalAmount = parseInt(data.totalAnnualSavings.replace('£', ''));
    
    gsap.from({}, {
      duration: 2.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: counterRef.current,
        start: "top 90%",
      },
      onUpdate: function() {
        if (counterRef.current) {
          const val = Math.ceil(this.progress() * totalAmount);
          counterRef.current.textContent = `£${val}`;
        }
      }
    });

    // Award-winning Reveal Animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

    tl.from(".panel-reveal", {
      opacity: 0,
      scale: 0.98,
      duration: 1.4,
      ease: "power4.out",
      stagger: 0.2
    })
    .from(".content-reveal", {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=1");

  }, { scope: containerRef, dependencies: [isMounted, data] });

  if (!isMounted) return <div className="h-[90vh] w-full bg-white flex items-center justify-center"><div className="w-12 h-12 border-4 border-black/5 border-t-[#4EA62F] rounded-full animate-spin" /></div>;

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-[#FDFDFC] py-8 lg:py-12 overflow-hidden min-h-[85vh] flex items-center"
    >
      <div className="max-w-[1680px] mx-auto px-6 relative z-10 w-full">
        
        {/* Main Split-Screen Container */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          
          {/* ============================================
              LEFT PANEL: FINANCIAL INTELLIGENCE HUD
              Aesthetic: Dark, Data-Driven, High-Contrast
              ============================================ */}
          <div className="panel-reveal flex-1 relative overflow-hidden bg-[#0A0D12] rounded-[3.5rem] p-8 lg:p-12 flex flex-col justify-between shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
             {/* Dynamic Light Rays */}
             <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#4EA62F]/20 rounded-full blur-[120px] animate-pulse" />
             </div>
             
             {/* Header HUD */}
             <div className="relative z-10">
                <div className="content-reveal flex items-center gap-4 mb-8">
                   <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-3">
                      <Zap className="w-3 h-3 text-[#4EA62F]" />
                      <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/50">Efficiency Protocol 2026</span>
                   </div>
                   <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                </div>

                <h2 className="content-reveal text-[clamp(2rem,4vw,3.5rem)] font-[1000] text-white uppercase leading-[0.85] tracking-[-0.05em] mb-8">
                   Potential <br/> <span className="text-[#4EA62F]">Annual Savings</span>
                </h2>

                {/* Counter Visual */}
                <div className="content-reveal relative inline-block mb-10">
                   <span 
                    ref={counterRef}
                    className="text-[clamp(5rem,10vw,11rem)] font-[1000] tracking-tighter text-white leading-none block italic"
                   >
                     {data.totalAnnualSavings}
                   </span>
                   <div className="absolute -right-12 top-4 flex flex-col items-start gap-1">
                      <span className="text-[10px] font-black text-[#4EA62F] uppercase tracking-widest">Max</span>
                      <div className="w-8 h-1 bg-[#4EA62F] rounded-full" />
                   </div>
                </div>
             </div>

             {/* Footer Breakdown HUD */}
             <div className="relative z-10 mt-auto">
                <div className="content-reveal grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                   {data.breakdown.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="space-y-3">
                         <div className="flex items-center justify-between">
                            <span className="text-xl font-[1000] text-[#4EA62F] tracking-tighter">{item.amount}</span>
                            <div className="w-6 h-px bg-white/10" />
                         </div>
                         <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">{item.label}</h4>
                      </div>
                   ))}
                </div>
                
                <div className="content-reveal flex items-center justify-between mt-12">
                   <div className="flex items-center gap-4">
                      <ShieldCheck className="w-5 h-5 text-[#4EA62F]" />
                      <p className="text-[8px] font-black text-white/30 uppercase tracking-[0.3em] leading-relaxed">
                         Verified by Academic <br/> Logistics Engine
                      </p>
                   </div>
                   <motion.button 
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center gap-4 px-7 py-3.5 bg-[#4EA62F] text-white rounded-xl font-black uppercase tracking-widest text-[9px] shadow-lg shadow-[#4EA62F]/20"
                   >
                      {data.ctaText} <ArrowRight className="w-4 h-4" />
                   </motion.button>
                </div>
             </div>
          </div>

          {/* ============================================
              RIGHT PANEL: ARRIVAL LOGISTICS MATRIX
              Aesthetic: Light, Clean, Editorial Typography
              ============================================ */}
          <div className="panel-reveal flex-1 relative overflow-hidden bg-white rounded-[3.5rem] p-8 lg:p-12 flex flex-col justify-between border border-black/5 shadow-[0_30px_60px_rgba(0,0,0,0.03)]">
             {/* Minimal Grid Background */}
             <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                  style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '40px 40px' }} />
             
             <div className="relative z-10">
                <div className="content-reveal flex items-center gap-4 mb-8">
                   <div className="w-10 h-10 rounded-2xl bg-black/[0.03] flex items-center justify-center text-black/20">
                      <Calendar className="w-5 h-5" />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[8px] font-black uppercase tracking-[0.5em] text-[#4EA62F] mb-0.5">Temporal Guidance</span>
                      <h3 className="text-lg font-[1000] text-[#0F172A] uppercase tracking-tighter leading-none">Arrival Logistics</h3>
                   </div>
                </div>

                <div className="content-reveal space-y-6 mb-12">
                   <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-[1000] text-[#0F172A] leading-[0.9] tracking-[-0.05em] uppercase max-w-lg">
                      {timingData.title}
                   </h2>
                   <p className="text-lg lg:text-xl text-black/40 font-bold leading-relaxed tracking-tight max-w-xl">
                      {timingData.description}
                   </p>
                </div>

                {/* High-End Tag System */}
                <div className="content-reveal flex flex-col gap-3">
                   {timingData.tags.map((tag, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ x: 10 }}
                        className="group flex items-center justify-between p-4 bg-[#F8FAFC] hover:bg-[#4EA62F]/5 rounded-2xl border border-black/[0.02] transition-all duration-500"
                      >
                         <div className="flex items-center gap-5">
                            <div className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-[#4EA62F] group-hover:border-[#4EA62F] transition-all duration-500">
                               <CheckCircle2 className="w-3.5 h-3.5 text-black/20 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-[12px] font-black text-black/60 group-hover:text-[#0F172A] uppercase tracking-widest transition-colors">{tag}</span>
                         </div>
                         <ArrowRight className="w-4 h-4 text-black/10 group-hover:text-[#4EA62F] transition-colors" />
                      </motion.div>
                   ))}
                </div>
             </div>

             {/* HUD Status Bar */}
             <div className="content-reveal relative z-10 pt-10 mt-10 border-t border-black/5 flex items-center justify-between">
                <div className="flex items-center gap-8">
                   <div className="flex flex-col">
                      <span className="text-[7px] font-black text-black/30 uppercase tracking-widest mb-1">Live Status</span>
                      <div className="flex items-center gap-2">
                         <div className="w-1 h-1 rounded-full bg-[#4EA62F] animate-pulse" />
                         <span className="text-[9px] font-bold text-black/60">Guidance Active</span>
                      </div>
                   </div>
                   <div className="w-px h-6 bg-black/5" />
                   <div className="flex flex-col">
                      <span className="text-[7px] font-black text-black/30 uppercase tracking-widest mb-1">Priority</span>
                      <span className="text-[9px] font-bold text-black/60">Tier 1 Optimization</span>
                   </div>
                </div>
                <Sparkles className="w-5 h-5 text-black/[0.05]" />
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default TotalSavingsSection;
