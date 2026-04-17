'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Globe, 
  GraduationCap, 
  Files, 
  Wallet, 
  ArrowUpRight, 
  Sparkles,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const supportServices = [
  {
    icon: Globe,
    title: 'Country Shortlisting',
    description: 'Data-driven destination analysis based on academic fit, visa success rates, and post-study career opportunities.',
    tag: 'Strategic Planning'
  },
  {
    icon: GraduationCap,
    title: 'University Selection',
    description: 'Tailored institutional mapping to align your academic pedigree with global career aspirations.',
    tag: 'Academic fit'
  },
  {
    icon: Files,
    title: 'Visa & Compliance',
    description: 'Meticulous documentation oversight ensuring zero-friction processing across multiple jurisdictions.',
    tag: 'Priority Track'
  },
  {
    icon: Wallet,
    title: 'Financial Planning',
    description: 'Holistic cost-of-living projections and scholarship optimization for sustainable educational investment.',
    tag: 'Investment'
  },
];

export const ConciergeSupportShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Header reveal
    gsap.from(".showcase-header > *", {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".showcase-header",
        start: "top 85%",
      }
    });

    // Featured card reveal
    gsap.from(".showcase-featured", {
      opacity: 0,
      scale: 0.95,
      y: 60,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".showcase-featured",
        start: "top 85%",
      }
    });

    // Grid items staggered reveal
    gsap.from(".showcase-card", {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".showcase-grid",
        start: "top 85%",
      }
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative py-12 lg:py-16 bg-[#FDFDFC] overflow-hidden"
    >
      {/* Decorative Aura Background */}
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#4EA62F]/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[40vw] h-[40vw] bg-emerald-100/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="showcase-header mb-12 lg:mb-16 text-center lg:text-left">
           <div className="inline-flex items-center gap-3 px-5 py-2 bg-white shadow-sm border border-black/5 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-[#4EA62F]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Support Eco-system</span>
           </div>
           
           <h2 className="text-4xl lg:text-7xl font-[1000] text-[#0F172A] leading-[0.85] tracking-tighter uppercase mb-10 font-['Outfit',sans-serif]">
             What Our <br />
             <span className="text-[#4EA62F] italic font-light lowercase">Concierge</span> covers
           </h2>

           <p className="max-w-2xl text-xl lg:font-bold text-black/40 leading-tight tracking-tight font-['Outfit',sans-serif]">
              Elite support services architected to handle every friction point of your international journey.
           </p>
        </div>

        {/* Featured Service: Massive Horizontal Card */}
        <div className="showcase-featured group relative mb-16 lg:mb-20">
           <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden rounded-[3rem] lg:rounded-[5rem] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-black/5">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1440&auto=format&fit=crop" 
                alt="End-to-End Concierge Base"
                loading="lazy"
                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent p-10 lg:p-20 flex flex-col justify-end">
                 <div className="max-w-3xl">
                    <div className="flex items-center gap-4 mb-6">
                       <span className="px-5 py-2 bg-[#4EA62F] text-white text-[10px] font-black uppercase tracking-widest rounded-full">Primary Protocol</span>
                       <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">White-Glove Service</span>
                    </div>
                    
                    <h3 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8 font-['Outfit',sans-serif]">
                       End-to-End <br />
                       <span className="text-[#4EA62F]">Managed</span> Support
                    </h3>

                    <p className="text-lg lg:text-xl text-white/70 font-bold leading-relaxed tracking-tight max-w-2xl mb-10">
                       Experience white-glove service throughout your entire study abroad journey. From university selection to arrival support, our dedicated concierge team ensures a seamless transition.
                    </p>

                    <button className="flex items-center gap-5 text-white group/btn">
                       <span className="text-[11px] font-black uppercase tracking-[0.5em] group-hover/btn:text-[#4EA62F] transition-colors">Learn More</span>
                       <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-[#4EA62F] group-hover/btn:border-[#4EA62F] transition-all duration-700">
                          <ArrowUpRight className="w-5 h-5 group-hover/btn:rotate-45 transition-transform" />
                       </div>
                    </button>
                 </div>
              </div>
           </div>
        </div>

        {/* Support Services Grid */}
        <div className="showcase-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {supportServices.map((service, idx) => (
             <div 
               key={idx}
               className="showcase-card group p-10 bg-white border border-black/5 rounded-[3rem] hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] hover:border-[#4EA62F]/20 transition-all duration-700"
             >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-10 group-hover:bg-[#4EA62F]/5 transition-colors">
                   <service.icon className="w-6 h-6 text-black/20 group-hover:text-[#4EA62F] transition-colors" />
                </div>

                <div className="space-y-4">
                   <span className="text-[9px] font-black uppercase tracking-widest text-black/30 bg-gray-100/50 px-3 py-1 rounded-full group-hover:text-[#4EA62F] group-hover:bg-[#4EA62F]/10 transition-all">
                      {service.tag}
                   </span>
                   
                   <h4 className="text-2xl font-black text-[#0F172A] uppercase tracking-tighter leading-none pt-2 font-['Outfit',sans-serif]">
                      {service.title}
                   </h4>

                   <p className="text-sm font-bold text-black/40 leading-relaxed tracking-tight">
                      {service.description}
                   </p>
                </div>

                <div className="mt-10 pt-8 border-t border-black/[0.03] flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                   <span className="text-[9px] font-black uppercase tracking-widest text-black/20 group-hover:text-black transition-colors">Priority</span>
                   <ArrowUpRight className="w-4 h-4 text-[#4EA62F]" />
                </div>
             </div>
           ))}
        </div>

        {/* Technical Footer Node */}
        <div className="mt-24 lg:mt-32 pt-20 border-t border-black/5 flex flex-wrap gap-12 lg:gap-24">
           {[
             { icon: ShieldCheck, label: "Verification", val: "L1 Certified" },
             { icon: Zap, label: "Response", val: "Accelerated" },
             { icon: Globe, label: "Status", val: "Multi-Region" }
           ].map((metric, i) => (
             <div key={i} className="flex flex-col gap-3">
               <metric.icon size={18} className="text-[#4EA62F]" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30">{metric.label}</span>
               <span className="text-2xl font-[1000] text-[#0F172A] tracking-tighter italic leading-none">{metric.val}</span>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
};
