'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Target, Sparkles, ShieldCheck, Quote, Activity, Zap, ArrowRight } from 'lucide-react';

const TechnicalBadge = ({ text, className = "" }: { text: string; className?: string }) => (
   <div className={`about-hero-item inline-flex items-center gap-3 px-5 py-2 bg-white/50 backdrop-blur-xl border border-black/5 rounded-full ${className}`}>
      <div className="w-1.5 h-1.5 rounded-full bg-[#4EA62F] animate-pulse" />
      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40 font-mono italic">
         {text}
      </span>
   </div>
);

export const OurMissionSection = () => {
   const containerRef = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
   });

   const headerY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
   const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

   return (
      <section
         ref={containerRef}
         className="relative pt-4 pb-24 lg:pt-8 lg:pb-32 bg-[#FDFDFC] overflow-hidden selection:bg-[#4EA62F]/20"
      >
         {/* Cinematic Background Elements */}
         <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-[#4EA62F]/3 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-0 p-12 opacity-[0.02]">
               <div className="flex flex-col gap-4 items-end">
                  <span className="text-[14px] font-black uppercase tracking-[1em] text-black">MISSION_LOG v2.04</span>
                  <div className="w-96 h-px bg-black" />
                  <Activity size={48} className="text-black" />
               </div>
            </div>
         </div>

         <div className="container mx-auto px-6 relative z-10">

            {/* Cinematic Header - CENTERED & ONE LINE */}
            <motion.div
               style={{ y: headerY, opacity }}
               className="max-w-7xl mx-auto mb-24 lg:mb-32 text-center flex flex-col items-center"
            >
               <TechnicalBadge text="Core Protocol" className="mb-10" />
               <h2 className="h2 text-[#0F172A] uppercase mb-12 whitespace-nowrap">
                  DECONSTRUCTING <span className="text-[#4EA62F] italic font-light lowercase px-1.5">the</span> BARRIER.
               </h2>
               <p className="text-xl md:text-2xl text-black/40 font-bold leading-tight tracking-tighter max-w-3xl mx-auto font-['Outfit',sans-serif]">
                  International education is broken. We aren't just facilitating study abroad; <span className="text-black">we're re-architecting the experience.</span>
               </p>
            </motion.div>

            {/* Narrative Grid System */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

               {/* Left Column: The Problem Context */}
               <div className="lg:col-span-12 xl:col-span-5 space-y-12">
                  <div className="p-10 lg:p-16 rounded-[4rem] bg-white border border-black/5 shadow-[0_40px_100px_rgba(0,0,0,0.03)] relative group isolate">
                     <div className="absolute top-10 right-10 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                        <Quote size={80} />
                     </div>
                     <p className="text-2xl font-bold text-[#0F172A] leading-tight tracking-tight font-['Outfit',sans-serif] relative z-10">
                        "Support usually stops at arrival. We believe that's exactly where the <span className="text-[#4EA62F]">real journey</span> begins."
                     </p>
                     <div className="mt-12 flex items-center gap-4 pt-8 border-t border-black/5">
                        <div className="w-12 h-12 rounded-2xl bg-[#4EA62F]/10 flex items-center justify-center">
                           <Target className="text-[#4EA62F] w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Directional Alignment</span>
                     </div>
                  </div>

                  <div className="px-8 space-y-8">
                     <div className="flex items-center gap-6">
                        <div className="h-px flex-1 bg-black/5" />
                        <span className="text-[8px] font-black uppercase tracking-[1em] text-black/20">Operational Intel</span>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        {[
                           { icon: ShieldCheck, label: "Verified Data" },
                           { icon: Activity, label: "Real-time Sync" }
                        ].map((m, i) => (
                           <div key={i} className="flex flex-col gap-3 p-6 rounded-3xl bg-gray-50 border border-black/[0.02]">
                              <m.icon size={16} className="text-[#4EA62F]" />
                              <span className="text-[9px] font-black uppercase tracking-widest text-black/40">{m.label}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Right Column: High-Density Narrative */}
               <div className="lg:col-span-12 xl:col-span-7 space-y-24">
                  <div className="space-y-12">
                     {[
                        {
                           title: "The Misinformation Matrix",
                           content: "Global education is flooded with bad actors and second-hand research. What fills the gap is a mix of online noise and a system that isn't transparent about its incentives.",
                           icon: <Zap size={24} />
                        },
                        {
                           title: "Decentralized Sovereignty",
                           content: "We believe decisions should stay with you. We provide the architecture, the structure, and the support, but we never push outcomes that don't serve your ultimate goals.",
                           icon: <Sparkles size={24} />
                        },
                        {
                           title: "Architectural Integrity",
                           content: "Everything is designed to work in sequence. From initial planning to professional deployment, every touchpoint is structured to eliminate operational mistakes.",
                           icon: <Activity size={24} />
                        }
                     ].map((node, i) => (
                        <motion.div
                           key={i}
                           initial={{ opacity: 0, x: 50 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true, margin: "-10%" }}
                           transition={{ duration: 0.8, delay: i * 0.1 }}
                           className="group"
                        >
                           <div className="flex gap-8 lg:gap-12 pb-16 border-b border-black/5 group-last:border-0">
                              <div className="flex-shrink-0 w-16 h-16 rounded-[2rem] bg-white border border-black/5 shadow-xl flex items-center justify-center text-[#4EA62F] group-hover:bg-[#4EA62F] group-hover:text-white transition-all duration-700">
                                 {node.icon}
                              </div>
                              <div className="space-y-4 pt-2">
                                 <h4 className="text-3xl font-black tracking-tighter text-[#0F172A] uppercase leading-none">{node.title}</h4>
                                 <p className="text-lg text-black/40 font-bold leading-[1.3] font-['Outfit',sans-serif]">
                                    {node.content}
                                 </p>
                              </div>
                           </div>
                        </motion.div>
                     ))}
                  </div>

                  {/* Bottom Action Node */}
                  <div className="mt-12">
                     <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="p-12 lg:p-16 bg-[#0F172A] rounded-[5rem] text-white overflow-hidden relative group cursor-pointer shadow-2xl"
                     >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#4EA62F]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                           <div className="space-y-6 text-center md:text-left">
                              <TechnicalBadge text="Deployment Phase" className="bg-white/10 border-white/5" />
                              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                                 READY TO <span className="text-[#4EA62F] italic font-light lowercase">redefine</span> ACCESS?
                              </h3>
                           </div>
                           <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#4EA62F] shadow-2xl transition-all duration-700">
                              <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                           </div>
                        </div>
                     </motion.div>
                  </div>
               </div>

            </div>
         </div>

      </section>
   );
};
