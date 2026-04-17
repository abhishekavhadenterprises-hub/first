'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldAlert, XCircle, Ban, Lock, Info, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const boundaries = [
  {
    title: "Admissions Guarantees",
    description: "Final admission decisions rest entirely with university committees. We provide strategy, not certainty.",
    icon: Lock,
    code: "NODE_S_01"
  },
  {
    title: "Visa Promises",
    description: "Immigration authorities are the sole arbitrators of visa approvals. No unauthorized intermediary role is played.",
    icon: Ban,
    code: "NODE_S_02"
  },
  {
    title: "Outcome Assurances",
    description: "Success rates are non-guaranteed. We architect the journey, but the effort remains student-central.",
    icon: XCircle,
    code: "NODE_S_03"
  }
];

export default function WhatWeDontDoSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Header staggered reveal
    gsap.from(".dont-header > *", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".dont-header",
        start: "top 85%",
      }
    });

    // Grid nodes reveal
    gsap.from(".boundary-node", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      stagger: 0.15,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".boundary-grid",
        start: "top 80%",
      }
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative py-24 lg:py-48 bg-[#FDFDFC] overflow-hidden"
    >
      {/* Background HUD Decor */}
      <div className="absolute top-0 left-0 p-12 opacity-[0.03] pointer-events-none hidden lg:block">
         <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black">Boundary Protocol v4.0</span>
            <div className="w-48 h-px bg-black" />
            <ShieldAlert size={24} className="text-black" />
         </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="dont-header mb-20 lg:mb-32 max-w-4xl">
           <div className="inline-flex items-center gap-3 px-5 py-2 bg-white shadow-sm border border-black/5 rounded-full mb-8">
              <AlertTriangle className="w-4 h-4 text-rose-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40 text-rose-500/60">Functional Boundaries</span>
           </div>
           
           <h2 className="text-5xl lg:text-[8rem] font-[1000] text-[#0F172A] leading-[0.85] tracking-tighter uppercase mb-10 font-['Outfit',sans-serif]">
             What we <br />
             <span className="text-rose-500 italic font-light lowercase">don't</span> do.
           </h2>

           <p className="max-w-xl text-xl font-bold text-black/40 leading-tight tracking-tight font-['Outfit',sans-serif]">
              Absolute transparency through documented non-service roles. We define where our architecture ends.
           </p>
        </div>

        {/* Boundary Grid */}
        <div className="boundary-grid grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
           {boundaries.map((node, idx) => (
             <motion.div 
               key={idx}
               whileHover={{ y: -12 }}
               className="boundary-node group relative p-10 lg:p-14 bg-white rounded-[3rem] border border-black/5 shadow-[0_40px_100px_rgba(0,0,0,0.02)] transition-all duration-700 hover:shadow-[0_40px_120px_rgba(244,63,94,0.06)]"
             >
                {/* Protocol Header */}
                <div className="flex justify-between items-start mb-12">
                   <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500">
                      <node.icon size={28} />
                   </div>
                   <span className="text-[8px] font-black uppercase tracking-[0.4em] text-black/20 font-mono">{node.code}</span>
                </div>

                {/* Content */}
                <div className="space-y-6">
                   <h3 className="text-2xl lg:text-3xl font-black text-[#0F172A] uppercase tracking-tighter leading-tight font-['Outfit',sans-serif]">
                      {node.title}
                   </h3>
                   <p className="text-lg font-bold text-black/40 group-hover:text-black transition-colors duration-500 leading-snug tracking-tight">
                      {node.description}
                   </p>
                </div>

                {/* Scope Metadata */}
                <div className="mt-12 pt-8 border-t border-black/5 flex items-center gap-4">
                   <div className="w-2 h-2 rounded-full bg-rose-500" />
                   <span className="text-[9px] font-black uppercase tracking-widest text-rose-500/40">Scope Protocol Final</span>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Global Footer Identifier */}
        <div className="mt-32 pt-20 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-8 opacity-20">
           <div className="flex items-center gap-6">
              <Info size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Full Disclosure Documentation Available Upon Request</span>
           </div>
           <div className="w-24 h-[1px] bg-black hidden md:block" />
        </div>

      </div>

    </section>
  );
}