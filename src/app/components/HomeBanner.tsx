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

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  useGSAP(() => {
    if (!headingRef.current) return;
    const tl = gsap.timeline();

    tl.from(headingRef.current, {
      opacity: 0,
      y: 80,
      duration: 1.4,
      ease: 'expo.out',
    })
      .from('.banner-paragraph', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
      }, '-=1')
      .from('.cta-group', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.8')
      .from('.badge-top', {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: 'back.out(1.7)'
      }, '-=1.4');

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[750px] lg:min-h-[850px] flex items-center overflow-hidden bg-[#0A0A0B] z-[5]"
    >
      {/* 1. YOUTUBE BACKGROUND ENGINE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: videoY }}
          className="absolute inset-[-10%] w-[120%] h-[120%]"
        >
          <iframe
            src="https://www.youtube.com/embed/LlCwHnp3kL4?autoplay=1&mute=1&loop=1&playlist=LlCwHnp3kL4&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
            className="w-full h-full pointer-events-none grayscale-[0.2] brightness-[0.9] contrast-[1.1]"
            allow="autoplay; fullscreen"
            title="Background Video"
            frameBorder="0"
          />
        </motion.div>

        {/* 2. CINEMATIC OVERLAYS */}
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B]/40 via-[#0A0A0B]/10 to-transparent z-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/40 via-transparent to-transparent z-20" />
      </div>

      {/* 3. CONTENT LAYER */}
      <div className="relative z-30 w-full px-6 lg:px-24 max-w-[1900px] mx-auto pt-24 lg:pt-32">
        <motion.div
          style={{ y: contentY }}
          className="max-w-[1150px] flex flex-col gap-8 lg:gap-12"
        >
          {/* Top Badge */}
          <div className="badge-top inline-flex items-center gap-4 px-5 py-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full w-fit">
            <div className="relative w-2.5 h-2.5">
              <span className="absolute inset-0 rounded-full bg-[#4EA62F] animate-ping opacity-75" />
              <span className="relative block w-2.5 h-2.5 rounded-full bg-[#4EA62F]" />
            </div>
            <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-white/80 whitespace-nowrap">Support beyond arrival</span>
          </div>

          {/* Main Title - Responsive Typography */}
          <div className="space-y-6">
            <h1
              ref={headingRef}
              className="text-5xl lg:text-[7.5rem] font-[1000] tracking-tighter text-white uppercase leading-[0.85]"
            >
              Start <span className="text-[#4EA62F] italic font-light lowercase">and</span> <br />
              Succeed <br />
              <span className="text-white/20">Abroad.</span>
            </h1>
          </div>

          {/* Core Description */}
          <p className="banner-paragraph font-['Outfit',sans-serif] font-medium text-[15px] lg:text-[20px] leading-[1.4] text-white/50 max-w-[650px] tracking-tight">
            Support for students moving to a new country, <br className="hidden lg:block" /> from arrival to achievement
          </p>

          {/* CTA Group */}
          <div className="cta-group flex gap-4 lg:gap-8 items-center flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth'
                });
              }}
              className="group relative h-16 lg:h-20 px-10 lg:px-14 bg-white text-[#0A0A0B] rounded-full overflow-hidden transition-all duration-500 shadow-xl shadow-white/5"
            >
              <span className="relative z-20 font-black uppercase tracking-widest text-xs lg:text-sm flex items-center gap-3 transition-colors duration-500 group-hover:text-white">
                Explore <ArrowDown size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </span>
              <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-10" />
            </motion.button>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/get-started"
                className="group relative h-16 lg:h-20 px-10 lg:px-14 border border-white/20 rounded-full backdrop-blur-md flex items-center gap-4 transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-20 flex items-center gap-4 transition-colors duration-500 group-hover:text-white">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
                    <ArrowRight size={16} className="rotate-0 group-hover:-rotate-45 transition-transform duration-500" />
                  </div>
                  <span className="font-black uppercase tracking-widest text-xs lg:text-sm">Get Started</span>
                </span>
                <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-10" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 4. TELEMETRY FOOTER */}
      <div className="absolute bottom-16 right-24 hidden lg:flex items-center gap-16 z-40">
        <div className="flex flex-col items-end gap-1 text-white">
          <span className="text-[12px] font-black tracking-[0.4em] uppercase text-[#4EA62F]">Arrival</span>
          <span className="text-2xl font-[1000] tracking-tighter uppercase whitespace-nowrap">Housing, banking, essentials</span>
        </div>
        <div className="w-px h-20 bg-white/20" />
        <div className="flex flex-col items-end gap-1 text-white">
          <span className="text-[12px] font-black tracking-[0.4em] uppercase text-[#4EA62F]">Achievement</span>
          <span className="text-2xl font-[1000] tracking-tighter uppercase whitespace-nowrap">Community, events, jobs</span>
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
