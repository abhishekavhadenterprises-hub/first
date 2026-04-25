'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, CheckCircle2, Info } from 'lucide-react';
import { whenYouNeedThisSectionData } from '@/app/data/whenYouNeedThisData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface WhenYouNeedThisSectionProps {
  serviceId?: string;
  title?: string;
  description?: string;
  tags?: string[];
}

export function WhenYouNeedThisSection({ 
  serviceId, 
  title: propTitle, 
  description: propDescription, 
  tags: propTags 
}: WhenYouNeedThisSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Get data from centralized source if serviceId is provided, otherwise use props
  const data = (serviceId && whenYouNeedThisSectionData[serviceId]) || whenYouNeedThisSectionData['sim-cards'];
  const title = propTitle || data?.title || "When You'll Need This";
  const description = propDescription || data?.description || "";
  const tags = propTags || data?.tags || [];

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.from(containerRef.current.querySelectorAll('.animate-item'), {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-6 py-8 pb-4">
      <motion.div 
        whileHover={{ y: -5 }}
        className="relative overflow-hidden bg-gradient-to-br from-[#FDFDFC] to-[#F1F5F0] rounded-[2.5rem] p-10 md:p-14 shadow-[0_30px_60px_rgba(0,0,0,0.03)] border border-black/[0.03] group"
      >
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4EA62F]/5 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 space-y-8">
            <div className="animate-item flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#4EA62F]/10 flex items-center justify-center text-[#4EA62F]">
                <Calendar className="w-6 h-6" />
              </div>
              <h2 className="text-[32px] md:text-[42px] font-[1000] text-[#0F172A] leading-none tracking-tighter uppercase">
                {title}
              </h2>
            </div>
            
            <p className="animate-item text-xl md:text-2xl text-black/40 font-bold leading-relaxed tracking-tight max-w-2xl">
              {description}
            </p>

            {/* Tags */}
            <div className="animate-item flex flex-wrap gap-4 pt-4">
              {tags.map((tag, i) => (
                <div 
                  key={i} 
                  className="px-6 py-3 bg-white border border-black/[0.04] rounded-2xl text-[13px] font-black text-black/60 uppercase tracking-[0.2em] shadow-sm hover:border-[#4EA62F]/30 hover:text-[#4EA62F] transition-all duration-300 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#4EA62F]" />
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Side Insight Card */}
          <div className="animate-item w-full md:w-80 bg-white/50 backdrop-blur-xl border border-white/20 rounded-[2rem] p-8 shadow-xl">
             <div className="flex items-center gap-3 mb-4">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4EA62F] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4EA62F]"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4EA62F]">Quick Tip</span>
             </div>
             <p className="text-sm font-bold text-black/60 leading-relaxed">
                Most students prefer arriving with these ready to ensure a smooth transition into UK life.
             </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
