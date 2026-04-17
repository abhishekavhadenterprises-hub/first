'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Play, Cpu, Globe, Zap, Sparkles, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ConciergeBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const magneticBtnRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useGSAP(() => {
    if (!headlineRef.current || !subheadlineRef.current || !imageContainerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.from('.banner-headline', {
      opacity: 0,
      y: 120,
      duration: 2,
      delay: 0.5
    })
      .from('.banner-subheadline', {
        opacity: 0,
        y: 40,
        filter: 'blur(15px)',
        duration: 1.8,
      }, "-=1.6")
      .from('.banner-node', {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 1.5,
      }, "-=1.4");

    // 2. IMAGE REVEAL & PARALLAX
    gsap.from(imageContainerRef.current, {
      clipPath: 'inset(100% 0% 0% 0%)',
      duration: 2,
      ease: 'power4.inOut',
      delay: 0.8
    });

    gsap.to('.hero-parallax-img', {
      yPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // 3. KINETIC AURA
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 80;
      const yPos = (clientY / window.innerHeight - 0.5) * 80;

      gsap.to('.aura-layer', {
        x: xPos,
        y: yPos,
        duration: 2,
        ease: "power3.out",
        stagger: 0.15
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);

  }, { scope: containerRef });

  const onMagneticMove = (e: React.MouseEvent) => {
    if (!magneticBtnRef.current) return;
    const { left, top, width, height } = magneticBtnRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.4;
    const y = (e.clientY - top - height / 2) * 0.4;
    gsap.to(magneticBtnRef.current, { x, y, duration: 0.6, ease: "power2.out" });
  };

  const onMagneticLeave = () => {
    gsap.to(magneticBtnRef.current, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] flex items-center justify-center bg-[#FDFDFC] overflow-hidden selection:bg-[#4EA62F] selection:text-white pt-24 pb-0"
    >
      {/* CINEMATIC BACKGROUND ENGINE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="aura-layer absolute top-[-25%] right-[-5%] w-[90vw] h-[90vw] bg-gradient-to-br from-[#4EA62F]/8 via-[#DEEED7]/4 to-transparent rounded-full blur-[180px] animate-pulse" />
        <div className="aura-layer absolute bottom-[-15%] left-[-15%] w-[70vw] h-[70vw] bg-gradient-to-tr from-[#4EA62F]/3 via-white to-transparent rounded-full blur-[140px]" />

        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <pattern id="concierge-grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#concierge-grid)" />
        </svg>

        {/* Floating Kinetic Text */}
        <div className="absolute top-[40%] left-0 w-full overflow-hidden opacity-[0.01] select-none pointer-events-none">
          <div className="text-[22vw] font-[1000] tracking-tighter uppercase whitespace-nowrap animate-marquee">
            PREMIUM CONCIERGE PREMIUM CONCIERGE 
          </div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

          {/* TEXT CONTENT COLUMN */}
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="lg:col-span-7 space-y-12"
          >
            <div className="banner-node inline-flex items-center gap-4 px-6 py-2.5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-black/[0.04] rounded-full group cursor-default">
              <Sparkles className="w-4 h-4 text-[#4EA62F]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/50 group-hover:text-[#4EA62F] transition-colors duration-500">Flagship Concierge</span>
            </div>

            <h1
              ref={headlineRef}
              className="banner-headline text-[clamp(2.5rem,8vw,7.5rem)] font-[1000] tracking-[-0.07em] text-[#0F172A] leading-[0.82] uppercase perspective-[2000px] font-['Outfit',sans-serif]"
            >
               Premium <br />
               Concierge <br />
               <span className="text-[#4EA62F] italic font-light lowercase">Services.</span>
            </h1>

            <p ref={subheadlineRef} className="banner-subheadline max-w-xl text-[20px] md:text-[28px] text-black/40 font-bold leading-[1.15] tracking-tight">
               Your dedicated partner for a seamless study abroad experience. From selection to arrival, we manage every detail.
            </p>

            <div className="banner-node flex flex-wrap items-center gap-10 pt-6">
              <div
                ref={magneticBtnRef}
                onMouseMove={onMagneticMove}
                onMouseLeave={onMagneticLeave}
              >
                <button 
                  onClick={() => document.getElementById('concierge-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative h-24 px-16 bg-[#0F172A] text-white rounded-full overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.2)] flex items-center transition-transform active:scale-95"
                >
                  <span className="relative z-10 font-black uppercase tracking-[0.5em] text-[12px] flex items-center gap-6">
                    Request Concierge <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-700" />
                  </span>
                  <div className="absolute inset-0 bg-[#4EA62F] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
                </button>
              </div>

              <button className="group flex items-center gap-6 py-4">
                <div className="w-16 h-16 bg-white border border-black/[0.05] rounded-full flex items-center justify-center shadow-xl group-hover:bg-[#0F172A] group-hover:text-white transition-all duration-700">
                  <Play size={20} fill="currentColor" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#4EA62F]">Process Reel</span>
                  <span className="text-[13px] font-black uppercase tracking-[0.2em] text-black/30 group-hover:text-black transition-colors">Watch Introduction</span>
                </div>
              </button>
            </div>

            {/* Status Metrics */}
            <div className="banner-node flex gap-14 pt-12 opacity-40">
              {[
                { icon: ShieldCheck, label: "Assurance", val: "Tier 1 Verified" },
                { icon: Globe, label: "Global Hubs", val: "24/7 Presence" },
                { icon: Zap, label: "Response", val: "< 2H Priority" }
              ].map((metric, i) => (
                <div key={metric.label} className="flex flex-col gap-3">
                  <metric.icon size={18} className="text-[#4EA62F]" />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black/50">{metric.label}</span>
                  <span className="text-xl font-black text-[#0F172A] tracking-tighter italic leading-none">{metric.val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* IMAGE COLUMN WITH CLIP REVEAL */}
          <div className="lg:col-span-5 relative group perspective-[2500px]">
             <div
               ref={imageContainerRef}
               className="relative aspect-[4/5] w-full max-w-[500px] mx-auto overflow-hidden rounded-[4rem] shadow-[0_100px_180px_rgba(0,0,0,0.08)] border border-black/[0.03]"
             >
               <img
                 src="https://images.unsplash.com/photo-1759038085950-1234ca8f5fed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                 alt="Concierge Service"
                 className="hero-parallax-img h-[125%] w-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-[2500ms] scale-110 group-hover:scale-100 absolute top-[-10%]"
               />

               {/* Glass Metadata Badge */}
               <div className="absolute inset-x-8 bottom-8 p-10 bg-white/40 backdrop-blur-3xl border border-white/40 rounded-[3rem] shadow-2xl translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[1500ms] ease-[0.16, 1, 0.3, 1]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#4EA62F]/20 flex items-center justify-center text-[#4EA62F]">
                        <Cpu size={14} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4EA62F]">Institutional_Link</span>
                  </div>
                  <p className="text-2xl font-[1000] text-[#0F172A] leading-[0.9] tracking-tighter uppercase italic">
                    Real-time <br/> Expert Access
                  </p>
               </div>
             </div>

             {/* Functional Scroll Indicator */}
             <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-20">
                <span className="text-[8px] font-black uppercase tracking-[1em] [writing-mode:vertical-lr] text-black">SCROLL</span>
                <div className="w-[1px] h-20 bg-gradient-to-b from-black to-transparent" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
