'use client';

import React, { useRef, useState, useEffect } from 'react';
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
  const bgTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Background text parallax
    gsap.to(bgTextRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Heading Reveal
    const headingLines = gsap.utils.toArray(".eligibility-heading-line");
    headingLines.forEach((line: any) => {
      gsap.from(line, {
        y: 80,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: line,
          start: "top 95%",
        }
      });
    });

    // Matrix Fade In
    gsap.from(".eligibility-matrix", {
      opacity: 0,
      y: 40,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".eligibility-matrix",
        start: "top 80%",
      }
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative py-8 lg:py-12 bg-white overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Kinetic Typography - Centered and Parallax */}
      <div
        ref={bgTextRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-black/[0.02] select-none tracking-tighter leading-none pointer-events-none z-0 whitespace-nowrap"
      >
        ELIGIBILITY
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="eligibility-header mb-12 lg:mb-16 text-center max-w-5xl mx-auto">
          <div className="eligibility-heading-line inline-flex items-center gap-3 px-6 py-2 bg-gray-50 border border-black/5 rounded-full mb-6">
            <ShieldCheck className="w-4 h-4 text-[#4EA62F]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Compatibility Check</span>
          </div>

          <div className="overflow-hidden mb-6">
            <h2 className="eligibility-heading-line text-[clamp(2.5rem,6vw,5rem)] lg:text-[clamp(3.5rem,8vw,7.5rem)] font-[1000] text-[#0F172A] leading-[1] tracking-tighter uppercase font-['Outfit',sans-serif]">
              Who is <span className="text-[#4EA62F] italic font-light lowercase">this for?</span>
            </h2>
          </div>

          <div className="overflow-hidden">
            <p className="eligibility-heading-line max-w-2xl mx-auto text-lg lg:text-xl font-bold text-black/30 leading-tight tracking-tight font-['Outfit',sans-serif]">
              Confirm your eligibility for our premium concierge track to ensure <br className="hidden lg:block" /> maximum impact and successful placement.
            </p>
          </div>
        </div>

        {/* Matrix Container */}
        <div className="eligibility-matrix max-w-6xl mx-auto">
          {/* Tab Switcher */}
          <div className="flex justify-center mb-10 lg:mb-14">
            <div className="inline-flex p-2 bg-gray-100/40 backdrop-blur-3xl rounded-[2.5rem] border border-black/5">
              <button
                onClick={() => setActiveTab('ideal')}
                className={cn(
                  "px-12 py-5 rounded-[2rem] text-[11px] font-black uppercase tracking-widest transition-all duration-700 relative overflow-hidden",
                  activeTab === 'ideal' ? "bg-white text-[#4EA62F] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-black/5" : "text-black/30 hover:text-black/50"
                )}
              >
                <span className="relative z-10">Ideal For</span>
                {activeTab === 'ideal' && (
                  <motion.div layoutId="tab-bg" className="absolute inset-0 bg-white" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('notIdeal')}
                className={cn(
                  "px-12 py-5 rounded-[2rem] text-[11px] font-black uppercase tracking-widest transition-all duration-700 relative overflow-hidden",
                  activeTab === 'notIdeal' ? "bg-white text-[#EF4444] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-black/5" : "text-black/30 hover:text-black/50"
                )}
              >
                <span className="relative z-10">Alternative Track</span>
                {activeTab === 'notIdeal' && (
                  <motion.div layoutId="tab-bg" className="absolute inset-0 bg-white" />
                )}
              </button>
            </div>
          </div>

          {/* Content Display */}
          <div className="relative bg-white/50 backdrop-blur-xl rounded-[4rem] lg:rounded-[5rem] border border-black/5 shadow-[0_60px_120px_rgba(0,0,0,0.04)] p-1 lg:p-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: activeTab === 'ideal' ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: activeTab === 'ideal' ? 20 : -20 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="relative p-8 lg:p-14 flex flex-col lg:flex-row items-start gap-12 lg:gap-24"
              >
                {/* Visual Pillar */}
                <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div
                    className="w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl transition-transform duration-1000 rotate-[-5deg] hover:rotate-0"
                    style={{ backgroundColor: `${suitabilityData[activeTab].color}10`, border: `1px solid ${suitabilityData[activeTab].color}20` }}
                  >
                    {React.createElement(suitabilityData[activeTab].icon, {
                      size: 36,
                      color: suitabilityData[activeTab].color
                    })}
                  </div>

                  <span
                    className="text-[11px] font-[1000] uppercase tracking-[0.4em] mb-6"
                    style={{ color: suitabilityData[activeTab].color }}
                  >
                    {suitabilityData[activeTab].subtitle}
                  </span>

                  <h3 className="text-4xl lg:text-6xl font-black text-[#0F172A] uppercase tracking-tighter leading-[0.9] font-['Outfit',sans-serif]">
                    {suitabilityData[activeTab].title}
                  </h3>
                </div>

                {/* Matrix List */}
                <div className="w-full lg:w-3/5 space-y-6">
                  {suitabilityData[activeTab].items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.8 }}
                      className="flex items-start gap-8 group"
                    >
                      <div className="mt-1.5 flex-shrink-0">
                        {activeTab === 'ideal' ? (
                          <div className="w-8 h-8 rounded-full bg-[#4EA62F]/5 flex items-center justify-center border border-[#4EA62F]/10">
                            <Check className="w-4 h-4 text-[#4EA62F]" strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-[#EF4444]/5 flex items-center justify-center border border-[#EF4444]/10">
                            <X className="w-4 h-4 text-[#EF4444]" strokeWidth={3} />
                          </div>
                        )}
                      </div>
                      <p className="text-lg lg:text-xl font-bold text-black/30 group-hover:text-black/80 transition-all duration-500 leading-[1.3] tracking-tight">
                        {item}
                      </p>
                    </motion.div>
                  ))}

                  <div className="pt-8 flex items-center gap-6 border-t border-black/5">
                    <Zap size={16} className={activeTab === 'ideal' ? "text-[#4EA62F]" : "text-[#EF4444]"} />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/20">Protocol Verified</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Decorative center line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-black/[0.03] to-transparent z-0 hidden lg:block" />
    </section>
  );
};
