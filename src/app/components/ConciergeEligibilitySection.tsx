'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, X, ShieldCheck, UserCheck, AlertCircle, ArrowRight, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const suitabilityData = {
  ideal: {
    title: "Best Suited For",
    subtitle: "Premium Match",
    icon: UserCheck,
    color: "#4EA62F",
    items: [
      "Students planning enrollment within 6-18 months.",
      "Individuals seeking elite destination & program selection.",
      "Applicants prioritizing profile & strategy optimization.",
      "Those requiring absolute clarity on visa & residency paths.",
      "Students targeting high-value scholarships & financial aid."
    ]
  },
  notIdeal: {
    title: "Not Ideal For",
    subtitle: "Alternative Track",
    icon: AlertCircle,
    color: "#EF4444",
    items: [
      "Applicants who have already submitted final paperwork.",
      "Individuals seeking execution without advisory input.",
      "Expectations of guaranteed institutional admission.",
      "Last-minute interventions (under 14-day deadlines).",
      "Those unable to commit to strategic self-preparation."
    ]
  }
};

export const ConciergeEligibilitySection = () => {
  const [activeTab, setActiveTab] = useState<'ideal' | 'notIdeal'>('ideal');
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.from(".eligibility-header > *", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".eligibility-header",
        start: "top 85%",
      }
    });

    gsap.from(".eligibility-matrix", {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".eligibility-matrix",
        start: "top 85%",
      }
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-[#FDFDFC] overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="eligibility-header mb-16 lg:mb-24 text-center max-w-3xl mx-auto">
           <div className="inline-flex items-center gap-3 px-5 py-2 bg-white shadow-sm border border-black/5 rounded-full mb-8">
              <ShieldCheck className="w-4 h-4 text-[#4EA62F]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Compatibility Check</span>
           </div>
           
           <h2 className="text-4xl lg:text-7xl font-[1000] text-[#0F172A] leading-[0.85] tracking-tighter uppercase mb-10 font-['Outfit',sans-serif]">
             Who Is <br />
             <span className="text-black/20">this for?</span>
           </h2>

           <p className="text-xl font-bold text-black/40 leading-tight tracking-tight font-['Outfit',sans-serif]">
              Confirm your eligibility for our premium concierge track to ensure maximum impact and successful placement.
           </p>
        </div>

        {/* Matrix Container */}
        <div className="eligibility-matrix max-w-6xl mx-auto">
           {/* Tab Switcher */}
           <div className="flex justify-center mb-16">
              <div className="inline-flex p-2 bg-gray-100/50 backdrop-blur-md rounded-[2rem] border border-black/5">
                 <button 
                   onClick={() => setActiveTab('ideal')}
                   className={cn(
                     "px-10 py-4 rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest transition-all duration-500",
                     activeTab === 'ideal' ? "bg-white text-[#4EA62F] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-black/5" : "text-black/30 hover:text-black/60"
                   )}
                 >
                   Ideal For
                 </button>
                 <button 
                   onClick={() => setActiveTab('notIdeal')}
                   className={cn(
                     "px-10 py-4 rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest transition-all duration-500",
                     activeTab === 'notIdeal' ? "bg-white text-[#EF4444] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-black/5" : "text-black/30 hover:text-black/60"
                   )}
                 >
                   Alternative Track
                 </button>
              </div>
           </div>

           {/* Content Display */}
           <div className="relative min-h-[500px] lg:min-h-[600px] bg-white rounded-[4rem] border border-black/5 shadow-[0_50px_100px_rgba(0,0,0,0.03)] overflow-hidden">
              <AnimatePresence mode="wait">
                 <motion.div
                   key={activeTab}
                   initial={{ opacity: 0, x: activeTab === 'ideal' ? -30 : 30 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: activeTab === 'ideal' ? 30 : -30 }}
                   transition={{ duration: 0.8, ease: "circOut" }}
                   className="absolute inset-0 p-8 lg:p-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
                 >
                    {/* Visual Pillar */}
                    <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left">
                       <div 
                         className="w-24 h-24 rounded-3xl flex items-center justify-center mb-10 shadow-lg"
                         style={{ backgroundColor: `${suitabilityData[activeTab].color}10` }}
                       >
                          {React.createElement(suitabilityData[activeTab].icon, { 
                            size: 40, 
                            color: suitabilityData[activeTab].color 
                          })}
                       </div>
                       
                       <span 
                         className="text-[11px] font-black uppercase tracking-[0.3em] mb-4"
                         style={{ color: suitabilityData[activeTab].color }}
                       >
                          {suitabilityData[activeTab].subtitle}
                       </span>
                       
                       <h3 className="text-4xl lg:text-6xl font-black text-[#0F172A] uppercase tracking-tighter leading-[0.9] font-['Outfit',sans-serif]">
                          {suitabilityData[activeTab].title}
                       </h3>
                    </div>

                    {/* Matrix List */}
                    <div className="w-full lg:w-3/5 space-y-8">
                       {suitabilityData[activeTab].items.map((item, i) => (
                         <motion.div 
                           key={i}
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.1 * i, duration: 0.6 }}
                           className="flex items-start gap-6 group"
                         >
                            <div className="mt-1 flex-shrink-0">
                               {activeTab === 'ideal' ? (
                                 <Check className="w-6 h-6 text-[#4EA62F]" strokeWidth={3} />
                               ) : (
                                 <X className="w-6 h-6 text-[#EF4444]" strokeWidth={3} />
                               )}
                            </div>
                            <p className="text-lg lg:text-xl font-bold text-black/60 group-hover:text-black transition-colors leading-snug">
                               {item}
                            </p>
                         </motion.div>
                       ))}

                       <div className="pt-10 flex items-center gap-4">
                          <Zap size={16} className={activeTab === 'ideal' ? "text-[#4EA62F]" : "text-[#EF4444]"} />
                          <span className="text-[10px] font-black uppercase tracking-widest text-black/20">Protocol Verified</span>
                       </div>
                    </div>
                 </motion.div>
              </AnimatePresence>
           </div>
        </div>

      </div>
    </section>
  );
};
