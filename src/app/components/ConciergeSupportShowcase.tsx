'use client';

import React, { useRef, useEffect } from 'react';
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
  Zap,
  Target,
  Trophy,
  Briefcase,
  Compass,
  Search,
  PieChart,
  UserCheck,
  MessageSquare,
  Activity
} from 'lucide-react';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const supportServices = [
  {
    icon: Search,
    title: 'Country Shortlisting',
    description: 'Data-driven destination analysis based on academic fit, visa success rates, and post-study career opportunities.',
    tag: 'Strategic Planning',
    img: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=400&auto=format&fit=crop'
  },
  {
    icon: Target,
    title: 'University Selection',
    description: 'Tailored institutional mapping to align your academic pedigree with global career aspirations.',
    tag: 'Academic fit',
    img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=400&auto=format&fit=crop'
  },
  {
    icon: Files,
    title: 'Visa & Compliance',
    description: 'Meticulous documentation oversight ensuring zero-friction processing across multiple jurisdictions.',
    tag: 'Priority Track',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c29596ad?q=80&w=400&auto=format&fit=crop'
  },
  {
    icon: PieChart,
    title: 'Financial Planning',
    description: 'Holistic cost-of-living projections and scholarship optimization for sustainable educational investment.',
    tag: 'Investment',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&auto=format&fit=crop'
  },
  {
    icon: UserCheck,
    title: 'Profile Optimization',
    description: 'Refining your academic narrative and CV to present a high-impact profile to admission committees.',
    tag: 'Consultancy',
    img: 'https://images.unsplash.com/photo-1507679799987-c7377f323b8d?q=80&w=400&auto=format&fit=crop'
  },
  {
    icon: MessageSquare,
    title: 'Interview Coaching',
    description: 'Personalized mock sessions to sharpen your responses for institutional and visa interviews.',
    tag: 'Performance',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop'
  },
  {
    icon: Briefcase,
    title: 'Career Alignment',
    description: 'Mapping your education to high-growth global markets and post-study work opportunities.',
    tag: 'Future-Proof',
    img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=400&auto=format&fit=crop'
  },
  {
    icon: Compass,
    title: 'Landing Support',
    description: 'Comprehensive transition support including accommodation assistance and local orientation.',
    tag: 'Arrival Success',
    img: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=400&auto=format&fit=crop'
  },
];

export const ConciergeSupportShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Refresh ScrollTrigger to account for any dynamic heights or pinned spacers above
    ScrollTrigger.refresh();

    // Reveal Grid immediately with fallback
    gsap.fromTo(".showcase-card", 
      { opacity: 0, y: 30 },
      {
        opacity: 1, 
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".showcase-grid",
          start: "top 95%", // Trigger as soon as the grid enters the near-viewport
          toggleActions: "play none none none"
        }
      }
    );

    // Reveal headers
    gsap.from(".showcase-header > *", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 1,
      scrollTrigger: {
        trigger: ".showcase-header",
        start: "top 90%",
      }
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative py-10 lg:py-16 bg-white overflow-hidden shadow-sm"
    >
      {/* Subtle Ambient HUD Elements */}
      <div className="absolute top-[5%] right-0 w-[50vw] h-[50vw] bg-[#4EA62F]/2 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-5%] w-[40vw] h-[40vw] bg-emerald-50/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Modular Top Header */}
        <div className="showcase-header mb-12 lg:mb-16 text-center mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-gray-50 border border-black/5 rounded-full mb-8">
            <Activity className="w-3.5 h-3.5 text-[#4EA62F]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Resource Ecosystem</span>
          </div>

          <p className="max-w-2xl mx-auto text-xl font-bold text-black/40 leading-tight tracking-tight font-['Outfit',sans-serif]">
            Elite support services architected to handle every friction point of your international journey.
          </p>
        </div>

        {/* Featured Hero Card - Optimized for Visibility */}
        <div className="showcase-featured group relative mb-20 lg:mb-24">
          <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden rounded-[3rem] lg:rounded-[4rem] shadow-2xl border border-black/5 bg-[#0F172A]">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1440&auto=format&fit=crop"
              alt="End-to-End Concierge Base"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-[3000ms] group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent p-10 lg:p-20 flex flex-col justify-end">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-[#4EA62F] rounded-full">
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-white text-[9px] font-black uppercase tracking-widest">Active Services</span>
                  </div>
                </div>

                <h2 className="text-white uppercase mb-8">
                  End-to-End <br />
                  <span className="text-[#4EA62F]">Managed</span> Support
                </h2>

                <p className="text-base lg:text-lg text-white/50 font-bold leading-relaxed tracking-tight max-w-xl mb-10">
                  Experience white-glove service throughout your study abroad journey. From university selection to arrival support, we handle everything.
                </p>

                <button className="flex items-center gap-6 text-white group/btn hover:text-[#4EA62F] transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">Explore Roadmap</span>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-[#4EA62F] group-hover/btn:border-[#4EA62F] group-hover/btn:text-white transition-all duration-700">
                    <ArrowUpRight className="w-5 h-5 group-hover/btn:rotate-45 transition-transform" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Global Catalog Heading */}
        <div className="mb-12 lg:mb-16 text-center mx-auto max-w-4xl">
          <h2 className="text-[#0F172A] mb-6">
            What Our <br />
            <span className="text-[#4EA62F] italic font-light lowercase">Concierge</span> Covers
          </h2>
          <div className="w-24 h-1 bg-[#4EA62F]/20 mx-auto rounded-full" />
        </div>

        {/* Service Catalog Grid - RESOLVED BLANK SPACE */}
        <div className="showcase-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 min-h-[400px]">
          {supportServices.map((service, idx) => (
            <div
              key={idx}
              className="showcase-card group relative p-10 bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-white hover:border-[#4EA62F]/40 rounded-[3rem] transition-all duration-700 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center mb-8 group-hover:bg-[#4EA62F] group-hover:border-[#4EA62F] transition-all shadow-sm">
                  <service.icon className="w-5 h-5 text-[#94A3B8] group-hover:text-white transition-colors" />
                </div>

                <div className="space-y-4">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#4EA62F] bg-[#4EA62F]/5 px-3 py-1 rounded-full">
                    {service.tag}
                  </span>

                  <h3 className="text-[#0F172A] uppercase pt-1">
                    {service.title}
                  </h3>

                  <p className="text-[13px] font-bold text-black/40 leading-relaxed tracking-tight group-hover:text-black/60 transition-colors">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-black/[0.05] flex items-center justify-between">
                  <span className="text-[8px] font-black uppercase tracking-widest text-black/20">Module.0{idx + 1}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#4EA62F] opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </div>

              {/* Hover Texture */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-all duration-1000 pointer-events-none scale-110 group-hover:scale-100">
                <img src={service.img} alt="" className="w-full h-full object-cover grayscale" />
              </div>
            </div>
          ))}
        </div>

        {/* Core Verification Node */}
        <div className="pt-16 border-t border-black/5 flex flex-wrap gap-12 lg:gap-24 opacity-60">
          {[
            { icon: ShieldCheck, label: "Verification", val: "L1 Priority" },
            { icon: Zap, label: "Response", val: "Immediate" },
            { icon: Globe, label: "Availability", val: "Global 24/7" }
          ].map((metric, i) => (
            <div key={i} className="flex flex-col gap-2">
              <metric.icon size={16} className="text-[#4EA62F]" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black/30">{metric.label}</span>
              <span className="text-xl font-[1000] text-[#0F172A] tracking-tighter italic leading-none">{metric.val}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
