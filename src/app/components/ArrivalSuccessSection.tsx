'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Activity, Zap, Sparkles } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function ArrivalSuccessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    // 1. Headline Reveal
    gsap.from(headlineRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
      },
      opacity: 0,
      y: 40,
      duration: 1.5,
      ease: "power4.out"
    });

    // 2. Subtle Ghost Parallax
    gsap.to(".success-watermark", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
      },
      x: 50,
    });

    // 3. Unified Card Reveal
    gsap.from(".premium-card", {
      scrollTrigger: {
        trigger: ".premium-card",
        start: 'top 90%',
      },
      opacity: 0,
      y: 30,
      scale: 0.98,
      duration: 1.8,
      ease: "power3.out"
    });

  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-24 flex flex-col items-center justify-center bg-[#FDFDFC] overflow-hidden border-y border-black/[0.03] font-['Outfit',sans-serif]"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(78,166,47,0.02)_0%,transparent_70%)]" />
        <div className="absolute top-[20%] right-[15%] w-[40vw] h-[40vw] bg-[#4EA62F]/5 rounded-full blur-[150px] opacity-20 animate-pulse" />
        <div className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] bg-indigo-500/5 rounded-full blur-[130px] opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-[1200px] flex flex-col items-center justify-center">
        
        {/* COMPACT HEADLINE */}
        <div className="text-center mb-12 lg:mb-20 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4EA62F]/10 bg-[#4EA62F]/5 mb-4 mx-auto"
          >
            <Zap size={12} className="text-[#4EA62F]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#4EA62F]">Success Module</span>
          </motion.div>
          
          <h2
            ref={headlineRef}
            className="text-[clamp(2.2rem,5vw,4.5rem)] font-[1000] leading-[1.1] tracking-[-0.05em] uppercase text-[#0F172A]"
          >
            Set up before you land. <br />
            <span className="text-[#4EA62F] italic font-light lowercase tracking-normal">succeed</span> after you arrive.
          </h2>
        </div>

        {/* REFINED DESCRIPTION CARD */}
        <div className="w-full max-w-[900px] relative">
          {/* Decorative Element */}
          <div className="absolute -top-6 -left-6 opacity-[0.03] lg:block hidden">
            <Activity size={60} strokeWidth={1} className="text-[#4EA62F]" />
          </div>

          <div className="premium-card bg-white/60 backdrop-blur-2xl border border-black/[0.05] rounded-[2.5rem] p-10 lg:p-16 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.03)] relative overflow-hidden group hover:border-[#4EA62F]/20 transition-all duration-1000">
            {/* Inner Gradient Bloom */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#4EA62F]/5 blur-[100px] rounded-full translate-x-1/4 -translate-y-1/4 group-hover:bg-[#4EA62F]/10 transition-colors duration-1000" />
            
            <p
              ref={subtextRef}
              className="relative z-10 text-lg md:text-xl lg:text-[1.35rem] text-[#0F172A]/70 leading-[1.6] font-medium tracking-tight text-left"
            >
              <span className="block mb-6">Moving abroad means handling a lot — visas, accommodation, banking, and everything in between.</span>
              <span className="block text-[#0F172A] font-black text-2xl lg:text-3xl mb-6 leading-tight">
                We bring it all into one place, structured in the right order, so you can get set up properly before you land.
              </span>
              <span className="block">
                And once you&apos;re here, it doesn&apos;t stop there. Through our opportunities, events, and community, we help you settle in, connect, and move forward with confidence towards success.
              </span>
            </p>


          </div>
        </div>

      </div>

      {/* Background Watermark */}
      <div className="success-watermark absolute bottom-12 left-12 opacity-[0.015] select-none pointer-events-none">
        <h3 className="text-[12vw] font-black uppercase text-black tracking-[-0.05em]">SUCCESS</h3>
      </div>
    </section>
  );
}
