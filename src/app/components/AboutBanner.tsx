'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, ShieldCheck, Layers, ArrowUpRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const TelemetryNode = ({ text, className = "" }: { text: string; className?: string }) => (
  <div className={`about-hero-item inline-flex items-center gap-3 px-5 py-2 bg-white/50 backdrop-blur-xl border border-black/5 rounded-full ${className}`}>
    <div className="w-1.5 h-1.5 rounded-full bg-[#4EA62F] animate-pulse" />
    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40 font-mono italic">
      {text}
    </span>
  </div>
);

export default function AboutBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    gsap.from(".about-hero-item", {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 1.5,
      ease: "expo.out",
    });

    // Subtle floating animation for visual accents
    gsap.to(".hud-accent", {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center bg-[#FDFDFC] pt-32 pb-4 overflow-hidden selection:bg-[#4EA62F] selection:text-white"
    >
      {/* ── CINEMATIC AMBIENT BACKGROUND ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-[#4EA62F]/5 rounded-full blur-[150px] opacity-40" />
        <div className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] bg-violet-400/3 rounded-full blur-[120px] opacity-30" />
        
        {/* Technical HUD Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div style={{ scale: titleScale, y: textY, opacity }} className="w-full flex flex-col items-center text-center">
           <TelemetryNode text="Access Protocol // v2.08" className="about-hero-item mb-12" />
           
           <h1 className="about-hero-item text-[clamp(2.5rem,7vw,7.5rem)] font-[1000] text-[#0F172A] uppercase mb-12 max-w-7xl leading-[0.85] tracking-[-0.06em]">
             Most Support <span className="text-[#4EA62F] italic font-light lowercase px-1.5">gets you</span> there. <br className="hidden md:block" /> We don't stop.
           </h1>

           <div className="about-hero-item max-w-3xl space-y-16">
             <div className="relative inline-block">
                <p className="text-xl lg:text-3xl font-bold text-black/40 leading-[1.2] tracking-tighter font-['Outfit',sans-serif]">
                  We don't stop at arrival. We are building the definitive architecture for global students to <span className="text-[#0F172A]">thrive beyond the terminal.</span>
                </p>
                <div className="absolute -inset-x-6 -inset-y-4 bg-[#4EA62F]/5 rounded-3xl -z-10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
             </div>

             <div className="space-y-12">
                <div className="flex flex-col items-center gap-12">
                  <div className="flex items-center justify-center gap-6 opacity-20">
                    <div className="h-px w-12 bg-black" />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#0F172A]">Initialize Mission</span>
                    <div className="h-px w-12 bg-black" />
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      window.scrollTo({
                        top: window.innerHeight,
                        behavior: 'smooth'
                      });
                    }}
                    className="group relative h-16 lg:h-20 px-12 lg:px-16 bg-[#0F172A] text-white rounded-full overflow-hidden shadow-2xl transition-all duration-700 isolate"
                  >
                    <span className="relative z-20 font-[1000] uppercase tracking-[0.4em] text-xs lg:text-sm flex items-center gap-4 transition-colors duration-500">
                      Explore Mission <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                    </span>
                    <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-10" />
                  </motion.button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
                  {[
                    { icon: Globe, val: "500+ Universities", label: "Global Network" },
                    { icon: ShieldCheck, val: "10k+ Students", label: "Success Protocol" },
                    { icon: Layers, val: "15+ Nodes", label: "Global Presence" }
                  ].map((metric, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -8 }}
                      className="flex flex-col items-center gap-4 group cursor-default"
                    >
                      <div className="w-16 h-16 rounded-[2rem] bg-white border border-black/5 shadow-xl shadow-black/5 flex items-center justify-center text-[#4EA62F] group-hover:bg-[#4EA62F] group-hover:text-white transition-all duration-700 relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <metric.icon size={24} className="relative z-10 transition-transform group-hover:scale-110" />
                      </div>
                      <div className="text-center space-y-1">
                        <div className="text-lg font-black uppercase text-[#0F172A] tracking-tighter leading-none">{metric.val}</div>
                        <div className="text-[9px] font-black uppercase tracking-[0.3em] text-black/30 group-hover:text-[#4EA62F] transition-colors">{metric.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
             </div>
           </div>
        </motion.div>

        {/* Cinematic Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="absolute bottom-16 flex flex-col items-center gap-6"
        >
           <div className="w-px h-16 relative overflow-hidden bg-black/5">
              <motion.div 
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-[#4EA62F] to-transparent"
              />
           </div>
        </motion.div>
      </div>

      {/* Floating Vertical HUD Accent */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden 2xl:block opacity-20 pointer-events-none hud-accent">
         <div className="[writing-mode:vertical-lr] text-[10px] font-black uppercase tracking-[1.2em] text-[#0F172A] flex items-center gap-8">
            <div className="w-px h-32 bg-black/20" />
            <span>Global Architecture // Success Node 01</span>
            <div className="w-px h-32 bg-black/20" />
         </div>
      </div>

      {/* Edge Gradients for Depth */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#FDFDFC] to-transparent z-10" />
    </section>
  );
}