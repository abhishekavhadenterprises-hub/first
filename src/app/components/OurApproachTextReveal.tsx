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
  
  const { scrollYProgress: rawProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // BUTTERY SMOOTH SPRING PHYSICS
  // This is what makes the animation feel like an award-winning site.
  // It adds momentum and damping to the scroll input.
  const scrollYProgress = useSpring(rawProgress, {
    stiffness: 40,
    damping: 25,
    mass: 0.8,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef}
      className="relative h-[550vh] bg-white overflow-visible"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Living Background Atmosphere */}
        <div className="absolute inset-0 z-0 opacity-40">
           <motion.div 
              animate={{ 
                scale: [1, 1.15, 1],
                rotate: [0, 60, 0]
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-[-30%] right-[-20%] w-[100vw] h-[100vw] bg-[#4EA62F]/5 rounded-full blur-[250px]" 
           />
           <div className="absolute inset-0 bg-white/20 backdrop-blur-[120px]" />
        </div>

        {/* Narrative Flow Track */}
        <div className="relative w-full max-w-[1400px] h-[70vh] flex items-center justify-center z-10 font-['Outfit',sans-serif]">
          {philosophySteps.map((step, i) => (
             <ZAxisStep 
                key={i} 
                step={step} 
                index={i} 
                total={philosophySteps.length} 
                scrollYProgress={scrollYProgress} 
             />
          ))}
        </div>

        {/* Cinematic Scroll Indicator */}
        <div className="absolute bottom-16 flex flex-col items-center gap-4 z-20">
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#94A3B8] opacity-50">Precision Navigation</span>
           <div className="flex gap-5">
              {philosophySteps.map((_, i) => (
                <ProgressBox key={i} index={i} total={philosophySteps.length} scrollYProgress={scrollYProgress} />
              ))}
           </div>
        </div>

        {/* Floating Kinetic Detail */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden lg:flex flex-col gap-6 opacity-[0.05] pointer-events-none">
           {[...Array(8)].map((_, i) => (
             <div key={i} className="w-1 h-px bg-[#4EA62F]" />
           ))}
        </div>
      </div>
    </section>
  );
}

function ZAxisStep({ step, index, total, scrollYProgress }: any) {
  const start = index / total;
  const end = (index + 1) / total;
  
  // High-End Z-Axis Immersion Animation with Spring Physics
  const z = useTransform(scrollYProgress, [start, start + 0.12, end - 0.12, end], [-800, 0, 0, 800]);
  const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [start, start + 0.12, end - 0.12, end], [0.6, 1, 1, 1.6]);
  const blur = useTransform(scrollYProgress, [start, start + 0.08, end - 0.08, end], [10, 0, 0, 10]);
  
  // Individual icon parallax
  const iconY = useTransform(scrollYProgress, [start, end], [60, -60]);

  return (
    <motion.div
      style={{ 
        z, 
        opacity, 
        scale,
        filter: `blur(${blur}px)`,
        perspective: '2000px'
      }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
    >
      <motion.div 
        style={{ y: iconY }}
        className="mb-14 w-28 h-28 rounded-[3rem] bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] flex items-center justify-center text-[#4EA62F] border border-black/[0.03]"
      >
        {step.icon}
      </motion.div>
      
      <div className="flex items-center gap-6 mb-10 overflow-hidden">
         <motion.div initial={{ width: 0 }} whileInView={{ width: 40 }} className="h-px bg-[#4EA62F]/30" />
         <span className="text-xs font-black uppercase tracking-[0.5em] text-[#4EA62F]">{step.label}</span>
         <motion.div initial={{ width: 0 }} whileInView={{ width: 40 }} className="h-px bg-[#4EA62F]/30" />
      </div>

      <h3 className="text-[44px] md:text-[60px] lg:text-[80px] font-black text-[#0F172A] leading-[0.9] tracking-[-0.06em] max-w-[1200px] uppercase">
        {step.text}
      </h3>
    </motion.div>
  );
}

function ProgressBox({ index, total, scrollYProgress }: any) {
  const start = index / total;
  const end = (index + 1) / total;
  
  const width = useTransform(scrollYProgress, [start, end], [12, 60]);
  const color = useTransform(scrollYProgress, [start, end], ["#F1F5F9", "#4EA62F"]);
  const opacity = useTransform(scrollYProgress, [start, end], [0.5, 1]);

  return (
    <motion.div 
      className="h-1 rounded-full"
      style={{ width, backgroundColor: color, opacity }}
    />
  );
}
