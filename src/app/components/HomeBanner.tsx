'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowDown, Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function HomeBanner() {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Parallax Values
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  useGSAP(() => {
    if (!headingRef.current) return;
    const tl = gsap.timeline();

    tl.from(headingRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: 'expo.out',
    })
    .from('.banner-paragraph', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.8')
    .from('.cta-group', {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')
    .from('.badge-top', {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=1.2');

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen min-h-[850px] flex items-center overflow-hidden bg-[#0A0A0B]"
    >
      {/* 1. YOUTUBE BACKGROUND ENGINE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: videoY }}
          className="absolute inset-[ -10%] w-[120%] h-[120%]" // Oversized to hide YT UI
        >
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/LlCwHnp3kL4?autoplay=1&mute=1&loop=1&playlist=LlCwHnp3kL4&controls=0&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1"
            title="Background Video"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
        </motion.div>

        {/* 2. CINEMATIC OVERLAYS */}
        <div className="absolute inset-0 bg-[#0A0A0B]/40 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/60 to-transparent z-20" />
      </div>

      {/* 3. CONTENT LAYER */}
      <div className="relative z-30 w-full px-6 lg:px-24 max-w-[1900px] mx-auto">
        <motion.div 
          style={{ y: contentY }}
          className="max-w-[1100px] space-y-12"
        >
          {/* Top Badge */}
          <div className="badge-top inline-flex items-center gap-4 px-6 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
            <div className="relative w-3 h-3">
              <span className="absolute inset-0 rounded-full bg-[#4EA62F] animate-ping opacity-75" />
              <span className="relative block w-3 h-3 rounded-full bg-[#4EA62F]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80">Support beyond arrival</span>
          </div>

          {/* Main Title */}
          <h1 
            ref={headingRef}
            className="font-['Outfit',sans-serif] font-[1000] text-[clamp(4rem,9vw,9rem)] leading-[0.82] tracking-[-0.07em] text-white uppercase"
          >
            Start life <br /> 
            <span className="text-[#4EA62F] italic">abroad.</span> <br /> 
            <span className="text-white/20">Simplified.</span>
          </h1>

          {/* Core Description */}
          <p className="banner-paragraph font-['Outfit',sans-serif] font-medium text-[20px] lg:text-[26px] leading-[1.3] text-white/60 max-w-[700px] tracking-tight">
            Support for students moving to a new country, from arrival to achievement
          </p>

          {/* CTA Group */}
          <div className="cta-group flex gap-8 items-center flex-wrap pt-4">
             <button 
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth'
                  });
                }}
                className="group relative h-20 px-14 bg-white text-[#0A0A0B] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-white/5"
             >
                <span className="relative z-10 font-black uppercase tracking-widest text-sm flex items-center gap-3">
                   Explore <ArrowDown size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
             </button>

             <Link 
                to="/signup"
                className="group h-20 px-14 border border-white/20 rounded-full backdrop-blur-md flex items-center gap-4 hover:bg-white hover:text-black hover:border-white transition-all duration-500"
             >
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-black/10 transition-colors">
                   <ArrowRight size={16} />
                </div>
                <span className="font-black uppercase tracking-widest text-sm">Get Started</span>
             </Link>
          </div>
        </motion.div>
      </div>

      {/* 4. TELEMETRY FOOTER */}
      <div className="absolute bottom-16 right-24 hidden lg:flex items-center gap-16 z-40">
        <div className="flex flex-col items-end gap-1 text-white">
           <span className="text-[12px] font-black tracking-[0.4em] uppercase text-[#4EA62F]">Arrival</span>
           <span className="text-3xl font-[1000] tracking-tighter uppercase whitespace-nowrap">Housing, banking, essentials</span>
        </div>
        <div className="w-px h-20 bg-white/20" />
        <div className="flex flex-col items-end gap-1 text-white">
           <span className="text-[12px] font-black tracking-[0.4em] uppercase text-[#4EA62F]">Achievement</span>
           <span className="text-3xl font-[1000] tracking-tighter uppercase whitespace-nowrap">Community, events, jobs</span>
        </div>
      </div>

      {/* 5. SCROLL INDICATOR */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 flex flex-col items-center gap-4 z-40 opacity-20"
      >
         <span className="text-[10px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] text-white">Scroll</span>
         <div className="w-[2px] h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}

export default HomeBanner;
