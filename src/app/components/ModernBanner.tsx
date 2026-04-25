'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Facebook, Instagram, Twitter, Youtube, ArrowRight, Play, Cpu, Signal, Globe, Zap, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ModernBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl?: string;
  showSocialLinks?: boolean;
}

export const ModernBanner = ({
  title = "Absolute Connection. Zero Friction.",
  description = "High-performance UK student SIM plans. Pre-activated and ready for your international journey.",
  ctaText = "Compare Plans",
  ctaLink = "/services/sim-cards",
  imageUrl = "https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMHN0dWR5aW5nJTIwYWJyb2FkJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2OTY2NzY0OXww&ixlib=rb-4.1.0&q=80&w=1080",
  showSocialLinks = true,
}: ModernBannerProps) => {
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
      y: 100,
      duration: 1.8,
      delay: 0.4
    })
      .from('.banner-subheadline', {
        opacity: 0,
        y: 30,
        filter: 'blur(10px)',
        duration: 1.5,
      }, "-=1.5")
      .from('.banner-node', {
        opacity: 0,
        y: 40,
        stagger: 0.08,
        duration: 1.2,
      }, "-=1.2");

    // 2. IMAGE REVEAL & PARALLAX (Pattern 5 from skill.md)
    gsap.from(imageContainerRef.current, {
      clipPath: 'inset(100% 0% 0% 0%)',
      duration: 1.8,
      ease: 'power4.inOut',
      delay: 0.6
    });

    gsap.to('.hero-parallax-img', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // 3. CURSOR SENSITIVE DEPTH (Kinetic Aura)
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 60;
      const yPos = (clientY / window.innerHeight - 0.5) * 60;

      gsap.to('.aura-layer', {
        x: xPos,
        y: yPos,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);

  }, { scope: containerRef });

  // 4. MAGNETIC CTA INTERACTION (Pattern 2 from skill.md)
  const onMagneticMove = (e: React.MouseEvent) => {
    if (!magneticBtnRef.current) return;
    const { left, top, width, height } = magneticBtnRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.35;
    const y = (e.clientY - top - height / 2) * 0.35;
    gsap.to(magneticBtnRef.current, { x, y, duration: 0.6, ease: "power2.out" });
  };

  const onMagneticLeave = () => {
    gsap.to(magneticBtnRef.current, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-[#FDFDFC] overflow-hidden selection:bg-[#4EA62F] selection:text-white pt-20"
    >
      {/* CINEMATIC BACKGROUND ENGINE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="aura-layer absolute top-[-30%] right-[-10%] w-[100vw] h-[100vw] bg-gradient-to-br from-[#4EA62F]/5 via-[#DEEED7]/3 to-transparent rounded-full blur-[200px] animate-pulse" />
        <div className="aura-layer absolute bottom-[-10%] left-[-20%] w-[80vw] h-[80vw] bg-gradient-to-tr from-[#4EA62F]/2 via-white to-transparent rounded-full blur-[160px]" />

        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <pattern id="premium-grid" width="120" height="120" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#premium-grid)" />
        </svg>

        {/* Global Education Ghost Text */}
        <div className="absolute top-[35%] left-0 w-full overflow-hidden opacity-[0.015] select-none">
          <div className="text-[15vw] font-[1000] tracking-tighter uppercase whitespace-nowrap animate-marquee">
            ABSOLUTE CONNECTION ABSOLUTE CONNECTION
          </div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">

          {/* TEXT CONTENT COLUMN */}
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="lg:col-span-7 space-y-14"
          >
            <div className="banner-node inline-flex items-center gap-5 px-6 py-2 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.04)] border border-black/[0.03] rounded-full group cursor-default">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4EA62F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4EA62F]"></span>
              </span>
              <span className="text-[11px] font-[1000] uppercase tracking-[0.5em] text-black/40 group-hover:text-[#4EA62F] transition-colors duration-500">Premium Global Mobility</span>
            </div>

            <h1
              ref={headlineRef}
              className="banner-headline text-[clamp(2rem,6vw,5.5rem)] font-[1000] tracking-[-0.08em] text-[#0F172A] leading-[0.82] uppercase perspective-[2000px]"
            >
              {title.split(' ').map((word, i) => (
                <span key={i} className={cn(i === 2 && "text-[#4EA62F] italic font-light")}>{word} </span>
              ))}
            </h1>

            <p ref={subheadlineRef} className="banner-subheadline max-w-xl text-[16px] md:text-[20px] text-black/40 font-bold leading-tight tracking-tight">
              {description}
            </p>

            <div className="banner-node flex flex-wrap items-center gap-10 pt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                ref={magneticBtnRef}
                onMouseMove={onMagneticMove}
                onMouseLeave={onMagneticLeave}
              >
                <Link to={ctaLink} className="group relative h-26 px-18 bg-white text-[#0F172A] rounded-full overflow-hidden shadow-[0_40px_80px_rgba(255,255,255,0.05)] flex items-center transition-all duration-500">
                  <span className="relative z-20 font-[1000] uppercase tracking-[0.6em] text-[13px] flex items-center gap-6 group-hover:text-white transition-colors duration-500">
                    {ctaText} <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-700" />
                  </span>

                  {/* Background Hover Effect (White to Green) - Left to Right */}
                  <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-10" />
                </Link>
              </motion.div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-8 py-4 px-6 rounded-full overflow-hidden transition-all duration-500 transform"
              >
                <div className="relative z-20 flex items-center gap-8">
                  <div className="w-18 h-18 bg-white border border-black/[0.04] rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white group-hover:text-[#4EA62F] transition-all duration-700">
                    <Play size={22} fill="currentColor" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#4EA62F] group-hover:text-white transition-colors">New Protocol</span>
                    <span className="text-[13px] font-[1000] uppercase tracking-[0.3em] text-black/30 group-hover:text-white transition-colors">Watch Introduction</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-10" />
              </motion.button>
            </div>

            {/* Technical Node Metrics */}
            <div className="banner-node flex gap-16 pt-16 opacity-30">
              {[
                { icon: Signal, label: "Throughput", val: "950 MBPS" },
                { icon: Globe, label: "Coverage", val: "99.9% SL_A" },
                { icon: Zap, label: "Latency", val: "2MS" }
              ].map((metric, i) => (
                <div key={metric.label} className="flex flex-col gap-3">
                  <metric.icon size={20} className="text-[#4EA62F]" />
                  <span className="text-[10px] font-[1000] uppercase tracking-[0.4em] text-black/50">{metric.label}</span>
                  <span className="text-xl font-[1000] text-black tracking-tighter italic leading-none">{metric.val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* IMAGE COLUMN WITH PARALLAX & REVEAL */}
          <div className="lg:col-span-5 relative group perspective-[2500px]">
            <div
              ref={imageContainerRef}
              className="relative aspect-[3/4] w-full max-w-[550px] mx-auto overflow-hidden rounded-[5rem] shadow-[0_120px_200px_rgba(0,0,0,0.1)] border border-black/[0.03]"
            >
              <img
                src={imageUrl}
                alt={title}
                className="hero-parallax-img h-[130%] w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] scale-110 group-hover:scale-100 absolute top-[-15%]"
              />

              {/* Glass Metadata HUD badge */}
              <div className="absolute inset-x-12 bottom-12 p-12 bg-white/60 backdrop-blur-3xl border border-white/50 rounded-[4rem] shadow-3xl translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[1200ms] ease-[0.16, 1, 0.3, 1]">
                <div className="flex items-center gap-4 mb-5">
                  <Cpu size={22} className="text-[#4EA62F]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#4EA62F]">Core System_V5</span>
                </div>
                <p className="text-xl font-[1000] text-[#0F172A] leading-[0.9] tracking-[-0.08em] uppercase italic">
                  Instant Tech Validation
                </p>
              </div>
            </div>

            {/* Social Rail Sidebar */}
            {showSocialLinks && (
              <div className="absolute top-1/2 -right-32 -translate-y-1/2 hidden xl:flex flex-col gap-14 items-center">
                <div className="w-px h-40 bg-gradient-to-b from-transparent via-[#4EA62F]/30 to-transparent" />
                {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="text-black/10 hover:text-[#4EA62F] hover:scale-150 transition-all duration-700">
                    <Icon size={20} />
                  </a>
                ))}
                <div className="w-px h-40 bg-gradient-to-t from-transparent via-[#4EA62F]/30 to-transparent" />
              </div>
            )}
          </div>

        </div>
      </div>

      {/* PROGRESSIVE SCROLL DRIVER */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-10 opacity-20"
      >
        <span className="text-[10px] font-[1000] uppercase tracking-[1.2rem] [writing-mode:vertical-lr] text-black">EXPLORE</span>
        <div className="w-px h-32 bg-gradient-to-b from-black to-transparent" />
      </motion.div>
    </section>
  );
};