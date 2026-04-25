'use client';

import { useRef, useEffect } from 'react';
import { motion } from "motion/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Award, Star, ShieldCheck, Zap, Globe, Cpu, ArrowUpRight, Signal } from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: "Global Connect",
    category: "Connectivity Hub",
    description: "Experience absolute connectivity with our premium UK student SIM plans. Zero contract binding. Ultimate 5G bandwidth.",
    src: "https://images.unsplash.com/photo-1556656793-062ff2770a3d?w=1200&q=80",
    rating: 4.9,
    node: "EDGE_NODE_UK",
    perks: ["Unlimited 5G", "eSIM Activation", "Global Roaming", "24/7 Support"]
  },
  {
    title: "Elite Pass",
    category: "Immigration Protocol",
    description: "Navigate complex immigration protocols with our expert legal partners. Fast-track your arrival with precision accuracy.",
    src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&q=80",
    rating: 4.8,
    node: "VISA_LOG_ALPHA",
    perks: ["Doc Review", "Interview Prep", "Live Tracker", "Legal Counsel"]
  },
  {
    title: "Scholar Fund",
    category: "Financial Engine",
    description: "Unlock international funding opportunities with our strategic scholarship matching system. Secure your academic future.",
    src: "https://images.unsplash.com/photo-1523050337458-5c56d759f9b4?w=1200&q=80",
    rating: 4.7,
    node: "FIN_AID_GRID",
    perks: ["Grant Search", "Essay Hub", "Deadline Guard", "Expert Coaches"]
  },
  {
    title: "Academic Core",
    category: "Readiness System",
    description: "High-performance study resources and international library access. Optimized for global scholars entering the UK.",
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    rating: 4.6,
    node: "ACAD_CORE_UK",
    perks: ["Library Proxy", "Research Tools", "AI Buddy", "Peer Network"]
  }
];

const HorizontalCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cardRef.current) return;

    // Kinetic Typography for Heading
    const title = cardRef.current.querySelector('.card-heading');
    if (title) {
      gsap.from(title, {
        opacity: 0,
        y: 60,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "left 80%",
        }
      });
    }

    // Kinetic Reveal for Subtext
    const subtext = cardRef.current.querySelector('.card-subtext');
    if (subtext) {
      gsap.from(subtext, {
        opacity: 0,
        y: 20,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "left 80%",
        }
      });
    }
  }, { scope: cardRef });

  return (
    <div className="horizontal-card-item flex-shrink-0 w-[90vw] md:w-[750px] h-[650px] px-8 py-10">
      <div 
        ref={cardRef}
        className="relative h-full w-full rounded-[4.5rem] overflow-hidden group shadow-[0_80px_160px_rgba(0,0,0,0.1)] border border-white/10"
      >
        {/* Full Card Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={project.src}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
          />
          {/* Cinematic Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 transition-opacity duration-1000 group-hover:opacity-80" />
        </div>

        {/* Floating HUD Elements */}
        <div className="absolute top-12 left-12 right-12 flex justify-between items-start z-20">
          <div className="flex flex-col gap-4">
             <div className="p-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] w-16 h-16 flex items-center justify-center shadow-2xl">
                <ShieldCheck className="w-7 h-7 text-[#4EA62F]" strokeWidth={1.5} />
             </div>
             <div className="flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full">
                <Signal size={12} className="text-[#4EA62F]" />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">{project.node}</span>
             </div>
          </div>
          
          <div className="flex flex-col items-end gap-3">
             <div className="px-5 py-2 bg-[#4EA62F] text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl">
                <Star size={11} fill="currentColor" className="inline mr-2" /> {project.rating}
             </div>
             <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.5em]">Auth Proc v3</span>
          </div>
        </div>

        {/* Bottom Immersive Content */}
        <div className="absolute bottom-0 left-0 right-0 p-16 z-20">
          <div className="max-w-xl space-y-8">
             <div className="space-y-4">
                <div className="inline-flex items-center gap-4">
                   <div className="w-10 h-px bg-[#4EA62F]" />
                   <span className="text-[11px] font-black text-[#4EA62F] tracking-[0.5em] uppercase">{project.category}</span>
                </div>
                <h3 className="card-heading text-[4.5rem] lg:text-[7rem] font-[1000] text-white tracking-[-0.08em] uppercase leading-[0.8] perspective-[1000px]">
                  {project.title}
                </h3>
                <p className="card-subtext text-[18px] lg:text-[22px] text-white/50 font-semibold leading-relaxed tracking-tight max-w-lg">
                  {project.description}
                </p>
             </div>

             {/* Dynamic Perks Matrix */}
             <div className="flex flex-wrap gap-3 pt-4">
                {project.perks.map((p, i) => (
                  <span key={i} className="px-5 py-2.5 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full text-[11px] font-black text-white uppercase tracking-widest hover:bg-[#4EA62F] transition-all duration-500 cursor-default">
                    {p}
                  </span>
                ))}
             </div>
          </div>

          {/* Action Gateway */}
          <button className="absolute bottom-16 right-16 w-24 h-24 rounded-[3.5rem] bg-white text-black flex items-center justify-center transition-all duration-700 shadow-2xl group/btn overflow-hidden transform">
             <ArrowUpRight size={28} className="relative z-20 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform group-hover/btn:text-white" />
             <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-700 z-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const ImagesScrollingAnimation = () => {
  const horizontalSectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!horizontalSectionRef.current || !triggerRef.current) return;

    const totalWidth = horizontalSectionRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const xMove = -(totalWidth - viewportWidth);

    gsap.to(horizontalSectionRef.current, {
      x: xMove,
      ease: 'none',
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

  }, { scope: triggerRef });

  return (
    <div ref={triggerRef} className="relative overflow-hidden bg-transparent">
      <div 
        ref={horizontalSectionRef} 
        className="relative flex items-center h-screen px-[5vw] flex-nowrap will-change-transform"
      >
        {projects.map((project, i) => (
          <HorizontalCard key={i} project={project} index={i} />
        ))}
        
        {/* Cinematic End Space */}
        <div className="flex-shrink-0 w-[40vw]" />
      </div>
    </div>
  );
};