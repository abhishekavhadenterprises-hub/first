"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
  useSpring
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { Zap, ShieldCheck, Sparkles, Target, Activity, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 90%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heightTransform = useTransform(smoothProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(smoothProgress, [0, 0.1], [0, 1]);

  return (
    <section
      className="relative w-full bg-[#FDFDFC] overflow-visible py-16 lg:py-20"
      ref={containerRef}
    >
      {/* ── BACKGROUND KINETIC DECOR ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-black border-dashed border-l" />
         <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black to-transparent" />
         <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* ── ELITE HEADER (CENTERED) ── */}
        <div className="max-w-6xl mx-auto mb-20 lg:mb-32 text-center flex flex-col items-center">
           <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2 bg-white shadow-sm border border-black/5 rounded-full mb-10"
           >
              <Activity className="w-4 h-4 text-[#4EA62F]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/40">Temporal Architecture</span>
           </motion.div>
           
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
             className="h2 text-[#0F172A] uppercase mb-8"
           >
             What We Do <span className="text-[#4EA62F] italic font-light lowercase px-1.5">Differently</span>
           </motion.h2>

           <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="text-lg lg:text-xl font-bold text-black/20 max-w-2xl leading-tight tracking-tight uppercase"
           >
             A systematic breakdown of our global success protocol.
           </motion.p>
        </div>

        {/* ── TIMELINE HUB ── */}
        <div className="relative">
           {data.map((item, index) => (
             <TimelineItem key={index} item={item} index={index} />
           ))}
           
           {/* ── THE INFINITE LINEAGE (PROGRESS BAR) ── */}
           <div
             className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-black/[0.03] rounded-full overflow-hidden"
           >
             <motion.div
               style={{
                 height: heightTransform,
                 opacity: opacityTransform,
               }}
               className="w-full bg-gradient-to-b from-[#4EA62F] via-[#A8E6CF] to-transparent shadow-[0_0_30px_#4EA62F80] relative"
             >
                {/* Visual "Pulse" Tracker */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#4EA62F] shadow-[0_0_20px_#4EA62F]" />
             </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item, index }: { item: TimelineEntry; index: number }) => {
  const itemRef = useRef(null);

  return (
    <motion.div
      ref={itemRef}
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-24 lg:mb-32 last:mb-0"
    >
      {/* ── LEFT SIDE: TEMPORAL MARKERS ── */}
      <div className="order-1 lg:text-right flex flex-col items-center lg:items-end justify-center pointer-events-none">
         <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
         >
            <div className="flex items-center lg:justify-end gap-3 text-[10px] font-black uppercase tracking-[0.8em] text-[#4EA62F]">
               <span>Phase</span>
               <span className="w-8 h-[1px] bg-[#4EA62F]/30" />
               <span>0{index + 1}</span>
            </div>
            <h3 className="text-3xl lg:text-5xl font-[1000] text-[#0F172A] uppercase tracking-tighter leading-[0.85] font-['Outfit',sans-serif]">
              {item.title}
            </h3>
         </motion.div>
      </div>

      {/* ── RIGHT SIDE: NARRATIVE CONTENT ── */}
      <div className="order-2 flex items-center">
         <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative group w-full"
         >
            <div className="absolute -inset-2 bg-[#4EA62F]/5 rounded-[3.5rem] scale-95 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-700" />
            
            <div className="relative p-10 lg:p-16 bg-white rounded-[3.5rem] border border-black/5 shadow-[0_40px_100px_rgba(0,0,0,0.02)] group-hover:shadow-[0_40px_120px_rgba(78,166,47,0.08)] group-hover:border-[#4EA62F]/20 transition-all duration-700">
               <div className="absolute top-12 right-12 text-[#4EA62F]/10 group-hover:text-[#4EA62F]/30 transition-colors duration-700">
                  <ShieldCheck size={48} strokeWidth={1} />
               </div>
               
               <div className="text-xl lg:text-3xl font-bold text-black/40 group-hover:text-black/60 leading-tight tracking-tight font-['Outfit',sans-serif] transition-colors duration-500">
                  {item.content}
               </div>

               <div className="mt-12 pt-12 border-t border-black/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black/20 group-hover:bg-[#4EA62F] group-hover:text-white transition-all duration-700">
                        <Zap size={18} />
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/10 group-hover:text-black/30 transition-colors">Protocol Entry {index + 1}</span>
                  </div>
                  <ArrowRight className="text-black/5 group-hover:text-[#4EA62F] transition-colors translate-x-[-10px] group-hover:translate-x-0 transition-transform duration-700" />
               </div>
            </div>
         </motion.div>
      </div>

      {/* ── CENTRAL KINETIC CONNECTOR (DOT) ── */}
      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
         <motion.div 
           initial={{ scale: 0, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, type: 'spring', stiffness: 100, damping: 20 }}
           className="w-20 h-20 rounded-full bg-white border border-black/5 flex items-center justify-center shadow-xl relative"
         >
            <div className="w-4 h-4 rounded-full bg-[#4EA62F] shadow-[0_0_20px_#4EA62F]" />
            <motion.div 
               animate={{ scale: [1, 2.5, 1], opacity: [0.3, 0, 0.3] }} 
               transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
               className="absolute inset-0 rounded-full border border-[#4EA62F]" 
            />
            <div className="absolute inset-[-4px] rounded-full border border-black/5 opacity-50" />
         </motion.div>
      </div>
    </motion.div>
  );
};