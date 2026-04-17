"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  AnimatePresence
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { Zap, ShieldCheck, Sparkles, Target, Activity } from "lucide-react";
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
    offset: ["start 20%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section
      className="relative w-full bg-[#FDFDFC] overflow-hidden py-24 lg:py-48"
      ref={containerRef}
    >
      {/* Background Kinetic Decor */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-black border-dashed border-l" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Elite Header */}
        <div className="max-w-4xl mb-32 lg:mb-56">
           <div className="inline-flex items-center gap-3 px-5 py-2 bg-white shadow-sm border border-black/5 rounded-full mb-8">
              <Activity className="w-4 h-4 text-[#4EA62F]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">The Evolution Core</span>
           </div>
           
           <h2 className="text-5xl lg:text-[7rem] font-[1000] text-[#0F172A] leading-[0.85] tracking-tighter uppercase mb-10 font-['Outfit',sans-serif]">
             Our <br />
             <span className="text-[#4EA62F] italic font-light lowercase px-4">Values</span> & Lineage
           </h2>

           <p className="max-w-xl text-xl font-bold text-black/40 leading-tight tracking-tight font-['Outfit',sans-serif]">
              A definitive timeline of standards. Architectural honesty in a global educational landscape.
           </p>
        </div>

        {/* Timeline Hub */}
        <div className="relative">
           {data.map((item, index) => (
             <TimelineItem key={index} item={item} index={index} />
           ))}
           
           {/* The Infinite Lineage (Progress Bar) */}
           <div
             className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gray-100/50 rounded-full overflow-hidden"
           >
             <motion.div
               style={{
                 height: heightTransform,
                 opacity: opacityTransform,
               }}
               className="w-full bg-gradient-to-b from-[#4EA62F] via-[#A8E6CF] to-transparent shadow-[0_0_20px_#4EA62F50] relative"
             >
                {/* Glass Beam Sweep Effect */}
                <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-white/40 to-transparent animate-[shimmer_3s_infinite]" />
             </motion.div>
           </div>

        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item, index }: { item: TimelineEntry; index: number }) => {
  const itemRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  // Unique Scroll-based transformations
  const rotateY = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [-15, 0, 0, 15]);
  const x = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const nodeScale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.5, 1.2, 0.5]);

  return (
    <div
      ref={itemRef}
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-32 lg:mb-64 last:mb-0 perspective-[2000px]"
    >
      {/* Left Side: Temporal Markers */}
      <motion.div 
        style={{ opacity, scale }}
        className="order-1 lg:text-right flex flex-col items-center lg:items-end justify-center"
      >
         <div className="space-y-4">
            <div className="text-[10px] font-black uppercase tracking-[0.6em] text-[#4EA62F]/60">PHASE 0{index + 1}</div>
            <h3 className="text-4xl lg:text-7xl font-black text-[#0F172A] uppercase tracking-tighter font-['Outfit',sans-serif]">
              {item.title}
            </h3>
         </div>
      </motion.div>

      {/* Right Side: Narrative Content */}
      <motion.div 
        style={{ opacity, x, rotateY, scale }}
        className="order-2 flex items-center transform-gpu"
      >
         <div className="relative p-10 lg:p-14 bg-white rounded-[3rem] border border-black/5 shadow-[0_40px_100px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_120px_rgba(0,0,0,0.06)] transition-all duration-1000 group w-full">
            <div className="absolute top-10 right-10 opacity-[0.05] group-hover:opacity-10 transition-opacity">
               <Zap size={40} />
            </div>
            
            <div className="text-lg lg:text-2xl font-bold text-black/50 leading-snug tracking-tight font-['Outfit',sans-serif]">
               {item.content}
            </div>

            <div className="mt-12 flex items-center gap-4 opacity-20">
               <div className="w-8 h-px bg-black" />
               <span className="text-[9px] font-black uppercase tracking-widest text-black">Protocol Documentation Verified</span>
            </div>
         </div>
      </motion.div>

      {/* Central Kinetic Connector (Dot) */}
      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
         <motion.div 
           style={{ scale: nodeScale, opacity }}
           className="w-16 h-16 rounded-full bg-white border border-[#4EA62F]/20 flex items-center justify-center shadow-xl shadow-[#4EA62F]/5"
         >
            <div className="w-4 h-4 rounded-full bg-[#4EA62F]" />
            <div className="absolute inset-0 rounded-full border border-[#4EA62F] animate-[ping_3s_linear_infinite] opacity-10" />
         </motion.div>
      </div>
    </div>
  );
};