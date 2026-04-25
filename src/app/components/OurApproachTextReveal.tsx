'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Sparkles, ShieldCheck, Target, Eye, Lock, Navigation, MousePointer2 } from 'lucide-react';

const philosophySteps = [
  {
    text: "We provide transparent information and process-driven guidance.",
    label: "TRANSPARENCY",
    icon: <Eye className="w-16 h-16" />,
    color: "#4EA62F"
  },
  {
    text: "This platform does not guarantee admissions or visa approvals.",
    label: "LIMITATIONS",
    icon: <ShieldCheck className="w-16 h-16" />,
    color: "#0F172A"
  },
  {
    text: "All decisions about your journey remain exclusively with you.",
    label: "AUTONOMY",
    icon: <MousePointer2 className="w-16 h-16" />,
    color: "#4EA62F"
  },
  {
    text: "Our role is to provide elite clarity, structure, and support.",
    label: "MISSION",
    icon: <Navigation className="w-16 h-16" />,
    color: "#0F172A"
  }
];

export function OurApproachTextReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-24 lg:py-32 bg-[#020203] overflow-hidden z-40"
    >
      {/* Cinematic Background Atmosphere */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
         <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              rotate: [0, 60, 0]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-30%] right-[-20%] w-[100vw] h-[100vw] bg-[#4EA62F]/10 rounded-full blur-[250px] mix-blend-screen" 
         />
         <div className="absolute inset-0 bg-[#020203]/40 backdrop-blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
         {/* Section Header */}
         <div className="flex flex-col items-center justify-center text-center mb-20 lg:mb-32">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/5 rounded-full backdrop-blur-md mb-8"
            >
               <Navigation size={14} className="text-[#4EA62F]" />
               <span className="text-[10px] font-black tracking-[0.4em] text-white/50 uppercase">Operational Framework</span>
            </motion.div>
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-4xl lg:text-6xl xl:text-7xl font-[1000] text-white leading-[0.9] tracking-tighter uppercase font-['Outfit',sans-serif]"
            >
               Guiding <span className="text-[#4EA62F] italic font-light lowercase">Principles</span>
            </motion.h2>
         </div>

         {/* Bento Grid Layout */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {philosophySteps.map((step, index) => (
               <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                  className="group relative p-10 lg:p-14 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[360px]"
               >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4EA62F]/0 to-[#4EA62F]/0 group-hover:from-[#4EA62F]/10 group-hover:to-transparent transition-colors duration-700 pointer-events-none" />

                  <div className="relative z-10 flex flex-col items-start gap-8">
                     <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-[#4EA62F] shadow-xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                        {step.icon}
                     </div>
                     
                     <div className="flex items-center gap-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#4EA62F]">{step.label}</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-[#4EA62F]/30 to-transparent" />
                     </div>
                  </div>

                  <div className="relative z-10 mt-8">
                     <h3 className="text-2xl lg:text-3xl font-[1000] text-white leading-snug tracking-tight uppercase max-w-[400px]">
                        {step.text}
                     </h3>
                  </div>
               </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
}
