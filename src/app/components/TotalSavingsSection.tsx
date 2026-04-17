'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Wallet, TrendingUp, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { totalSavingsSectionData } from '@/app/data/totalSavingsData';

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
  if (!data) return null;

  useGSAP(() => {
    if (!containerRef.current || !isMounted) return;

    // Number Counter Animation
    const totalAmount = parseInt(data.totalAnnualSavings.replace('£', ''));
    
    gsap.from({}, {
      duration: 2,
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

    // Staggered Entrance
    gsap.from(".savings-card-light", {
      opacity: 0,
      scale: 0.95,
      y: 40,
      stagger: 0.15,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".savings-grid-light",
        start: "top 80%",
      }
    });

  }, { scope: containerRef, dependencies: [isMounted, data] });

  if (!isMounted) return <div className="h-[600px] w-full bg-white" />;

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-[#fcfcfc] py-24 lg:py-48 overflow-hidden border-t border-black/5"
    >
      {/* Premium Light Textures */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#4EA62F]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[-10%] text-[25vw] font-[1000] text-black/[0.01] select-none uppercase tracking-tighter italic">
          Economy
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-40">
          
          {/* Left Side: Summary and Total */}
          <div className="w-full lg:w-1/3">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8 px-5 py-2 bg-white shadow-sm border border-black/5 rounded-full w-fit"
            >
               <TrendingUp className="w-4 h-4 text-[#4EA62F]" />
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Fiscal Advantage</span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-7xl font-[1000] text-[#0F172A] uppercase tracking-tighter leading-[0.85] mb-12">
              Potential <br/> <span className="text-[#4EA62F]">Annual Savings</span>
            </h2>

            <div className="relative mb-14">
               <span 
                ref={counterRef}
                className="text-8xl lg:text-[11rem] font-[1000] tracking-tighter text-[#0F172A] leading-none block"
               >
                 {data.totalAnnualSavings}
               </span>
               <div className="flex items-center gap-3 mt-6 text-[#4EA62F]">
                  <div className="w-8 h-8 rounded-full bg-[#4EA62F]/10 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/50">Verified Efficiency Yield</span>
               </div>
            </div>

            <p className="text-xl text-black/40 font-bold leading-relaxed mb-14 max-w-sm">
              We've optimized the {data.serviceName} ecosystem to minimize your overhead and maximize your liquidity.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-14 py-7 bg-[#0F172A] text-white rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] hover:bg-[#4EA62F] transition-all duration-500"
            >
              {data.ctaText} <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Right Side: Detailed Breakdown Grid */}
          <div className="w-full lg:w-2/3 savings-grid-light grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.breakdown.map((item, idx) => (
              <div 
                key={idx}
                className="savings-card-light group relative p-12 bg-white border border-black/[0.04] rounded-[3.5rem] hover:bg-white hover:border-[#4EA62F]/20 transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700">
                  <Wallet className="w-16 h-16 text-[#4EA62F]" />
                </div>

                <div className="relative z-10">
                  <span className="block text-[4.5rem] font-[1000] text-[#4EA62F] tracking-tighter leading-none mb-8">{item.amount}</span>
                  
                  <h4 className="text-2xl font-[1000] text-[#0F172A] uppercase tracking-tighter mb-6">{item.label}</h4>
                  
                  <p className="text-black/40 font-bold text-sm lg:text-base leading-relaxed mb-10">
                    {item.description}
                  </p>
                  
                  {/* Progress Visualization */}
                  <div className="h-2 w-full bg-black/[0.03] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 2.5, delay: 0.5 + (idx * 0.2), ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#4EA62F] to-emerald-300" 
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Total Efficiency Reward Card */}
            <div className="savings-card-light flex flex-col justify-center items-center p-12 bg-[#F8FAFC] border border-[#4EA62F]/10 rounded-[3.5rem] text-center shadow-inner group">
               <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-700">
                  <Sparkles className="w-10 h-10 text-[#4EA62F]" />
               </div>
               <h4 className="text-2xl lg:text-3xl font-[1000] text-[#0F172A] uppercase tracking-tighter leading-none mb-4">Maximum Yield <br/> Initialized</h4>
               <p className="font-black uppercase tracking-widest text-[10px] text-black/30">Verified Academic Strategy</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
