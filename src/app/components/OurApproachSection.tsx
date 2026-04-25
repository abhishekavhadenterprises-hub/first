'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Users,
  Lightbulb,
  ShieldCheck,
  Zap,
  Compass,
  Anchor,
  Eye,
  Target
} from 'lucide-react';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const approaches = [
  {
    title: "Human-led guidance",
    description: "Work with elite advisors who understand the nuances of international education and provide absolute clarity.",
    icon: Users,
    color: "#4EA62F"
  },
  {
    title: "Process-driven planning",
    description: "Follow a structured framework for exploration, shortlisting, and final decision-making that eliminates risk.",
    icon: Target,
    color: "#0F172A"
  },
  {
    title: "Transparent communication",
    description: "Clear, unfiltered access to options, requirements, and realistic expectations at every milestone.",
    icon: Eye,
    color: "#4EA62F"
  },
  {
    title: "Student-controlled intent",
    description: "You maintain sovereign control over all decisions. We provide the architecture, you choose the path.",
    icon: Compass,
    color: "#0F172A"
  }
];

export function OurApproachSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Header reveal
    gsap.from(".approach-header > *", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".approach-header",
        start: "top 85%",
      }
    });

    // Grid items reveal
    gsap.from(".approach-pill", {
      opacity: 0,
      scale: 0.95,
      y: 40,
      stagger: 0.1,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".approach-grid",
        start: "top 80%",
      }
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative py-12 lg:py-20 bg-[#FDFDFC] overflow-hidden"
    >
      {/* Background HUD Decor */}
      <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none hidden lg:block">
        <div className="flex flex-col gap-4 items-end">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black">Philosophy Node 1.0</span>
          <div className="w-48 h-px bg-black" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="approach-header mb-20 lg:mb-32 text-center mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-gray-50 border border-black/5 rounded-full mb-8">
            <Anchor className="w-4 h-4 text-[#4EA62F]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Our Core Pillars</span>
          </div>

          <h2 className="text-[#0F172A] mb-10">
            Our <br />
            <span className="text-[#4EA62F] italic font-light lowercase">Approach</span> to guidance
          </h2>

          <p className="max-w-xl mx-auto text-lg font-bold text-black/40 leading-tight tracking-tight font-['Outfit',sans-serif]">
            Elite advisory designed to replace uncertainty with actionable strategy.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="approach-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {approaches.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="approach-pill group relative p-10 lg:p-16 bg-gray-50/50 rounded-[3rem] border border-black/5 transition-all duration-700 hover:bg-white hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] overflow-hidden"
            >
              {/* Hover Background Glow */}
              <div
                className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                style={{ backgroundColor: `${item.color}10` }}
              />

              <div className="relative z-10 space-y-8">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: `${item.color}10` }}
                >
                  {React.createElement(item.icon, {
                    size: 28,
                    color: item.color
                  })}
                </div>

                <div className="space-y-4">
                  <h3 className="text-[#0F172A] uppercase">
                    {item.title}
                  </h3>
                  <p className="text-base lg:text-lg font-bold text-black/40 group-hover:text-black transition-colors duration-500 leading-tight tracking-tight">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="w-12 h-px bg-black/10" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/20">Metric Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}