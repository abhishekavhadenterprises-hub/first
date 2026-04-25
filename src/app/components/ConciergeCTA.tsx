'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Sparkles, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Activity,
  ArrowUpRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function ConciergeCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleCTAClick = () => {
    const formSection = document.getElementById('request-concierge-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const onMagneticMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.35;
    const y = (e.clientY - top - height / 2) * 0.35;
    setMousePos({ x, y });
  };

  const onMagneticLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  useGSAP(() => {
    if (!containerRef.current) return;

    // Header Character Reveal
    const chars = gsap.utils.toArray(".cta-char");
    gsap.from(chars, {
      y: 100,
      opacity: 0,
      rotateX: -30,
      stagger: 0.02,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".cta-heading",
        start: "top 85%",
      }
    });

    // Reveal Subtext
    gsap.from(".cta-subtext", {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      duration: 1.2,
      delay: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".cta-heading",
        start: "top 85%",
      }
    });

    // Decorative HUD Nodes
    gsap.from(".cta-hud-node", {
      opacity: 0,
      scale: 0.9,
      y: 15,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cta-hud-container",
        start: "top 90%",
      }
    });

    // Infinite parallax for background nodes
    gsap.to(".cta-bg-node", {
      y: -50,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-48 bg-white overflow-hidden selection:bg-[#4EA62F] selection:text-white"
    >
      {/* PREMIUM BACKGROUND ENGINE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Kinetic Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        {/* Abstract Geometry Layers */}
        <div className="cta-bg-node absolute top-[10%] left-[-5%] w-[40vw] h-[40vw] bg-[#4EA62F]/[0.03] rounded-full blur-[140px]" />
        <div className="cta-bg-node absolute bottom-[5%] right-[-10%] w-[50vw] h-[50vw] bg-gray-50 rounded-full blur-[100px]" />

        {/* Ambient HUD Ticker */}
        <div className="absolute top-[20%] left-0 w-full opacity-[0.02] select-none text-[20vw] font-black uppercase whitespace-nowrap tracking-tighter">
          ELITE SUCCESS • STRATEGIC GROWTH • ELITE SUCCESS •
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center">
        
        {/* Top Protocol Status */}
        <div className="cta-hud-container flex flex-wrap justify-center gap-4 lg:gap-8 mb-20 lg:mb-32">
          {[
            { icon: Globe, label: "Network_Status", val: "Operational" },
            { icon: ShieldCheck, label: "Security_Rank", val: "L1 Priority" },
            { icon: Activity, label: "Sync_Ready", val: "Immediate" }
          ].map((hud, i) => (
            <div 
              key={i} 
              className="cta-hud-node flex items-center gap-4 px-6 py-3 bg-white/40 backdrop-blur-2xl border border-black/[0.04] rounded-2xl shadow-xl shadow-black/5"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                <hud.icon size={14} className="text-[#4EA62F]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-black/30 leading-none mb-1">{hud.label}</span>
                <span className="text-[10px] font-black uppercase text-[#0F172A] leading-none">{hud.val}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic Header Engine */}
        <div className="cta-heading max-w-6xl text-center mb-16 lg:mb-24">
           <h2 className="perspective-[2000px] flex flex-col items-center">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 overflow-hidden">
                 {["STRUCTURE", "YOUR", "NEXT"].map((word, i) => (
                    <span key={i} className="flex">
                       {word.split("").map((char, j) => (
                          <span key={j} className="cta-char inline-block text-[15vw] lg:text-[10rem] font-[1000] text-[#0F172A] leading-[0.82] tracking-[-0.05em] uppercase">
                             {char}
                          </span>
                       ))}
                    </span>
                 ))}
              </div>
              <div className="flex items-baseline gap-6 overflow-hidden mt-4">
                 <span className="cta-char inline-block text-[15vw] lg:text-[10rem] font-light italic text-[#4EA62F] leading-[0.82] tracking-[-0.05em] lowercase">
                    era.
                 </span>
                 <div className="cta-char hidden lg:flex w-24 h-24 rounded-full bg-[#4EA62F]/5 border-2 border-[#4EA62F]/10 flex items-center justify-center animate-pulse">
                    <Sparkles className="text-[#4EA62F]" size={32} />
                 </div>
              </div>
           </h2>
        </div>


        {/* High-Impact Magnetic Button */}
        <div 
          className="relative group pt-4"
          onMouseMove={onMagneticMove}
          onMouseLeave={onMagneticLeave}
        >
           <motion.div
             ref={buttonRef}
             animate={{ x: mousePos.x, y: mousePos.y }}
             transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.1 }}
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
           >
              <button
                onClick={handleCTAClick}
                className="group relative h-24 lg:h-32 px-16 lg:px-24 bg-[#0F172A] text-white rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] transition-all duration-700 isolate"
              >
                 {/* Premium Background Slide */}
                 <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-1000 ease-[0.16,1,0.3,1] z-10" />
                 
                 <div className="relative z-20 flex items-center gap-8">
                    <span className="text-[12px] lg:text-[14px] font-black uppercase tracking-[0.5em]">Request Support Protocol</span>
                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#4EA62F] transition-all duration-700">
                       <ArrowRight size={20} className="group-hover:translate-x-1 lg:group-hover:translate-x-2 transition-transform" />
                    </div>
                 </div>
              </button>
           </motion.div>
           
           {/* Decorative Orbit Path */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] border border-black/[0.03] rounded-full scale-150 pointer-events-none group-hover:scale-110 group-hover:border-[#4EA62F]/10 transition-all duration-1000" />
        </div>

        {/* Global Terminal Pulse */}
        <div className="mt-40 lg:mt-64 flex flex-col lg:flex-row items-center gap-12 lg:gap-32 w-full pt-16 border-t border-black/5">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center">
                 <Cpu size={24} className="text-[#4EA62F]" />
              </div>
              <div className="flex flex-col">
                 <span className="text-[9px] font-black uppercase tracking-[0.4em] text-black/30 leading-none mb-1">Architecture Node</span>
                 <span className="text-xl font-black text-[#0F172A] tracking-tighter uppercase leading-none italic">System_Verified.OS</span>
              </div>
           </div>

           <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-60">
              {[
                { label: "Available slots", val: "Priority Track ACTIVE" },
                { label: "Global sync", val: "L5 Verified" }
              ].map((m, i) => (
                <div key={i} className="flex flex-col gap-1 text-center lg:text-left">
                   <span className="text-[8px] font-black uppercase tracking-widest text-[#0F172A]/40 leading-none">{m.label}</span>
                   <span className="text-sm lg:text-base font-black text-[#0F172A] uppercase tracking-tighter leading-none">{m.val}</span>
                </div>
              ))}
           </div>
           
           <div className="lg:ml-auto flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4EA62F] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-black/30 italic">L1 Strategists Online</span>
           </div>
        </div>

      </div>
    </section>
  );
}

export default ConciergeCTA;