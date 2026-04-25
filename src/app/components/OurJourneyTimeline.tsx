"use client";

import React, { useRef } from "react";
import { Timeline } from "@/app/components/ui/timeline";
import { ShieldCheck, Target, Zap, Activity, Info } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

const ParallaxImage = ({ src, alt }: { src: string; alt: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Create a beautiful, subtle 15% inner-parallax movement on scroll
  const yTransform = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/5 bg-black aspect-video lg:aspect-[21/9] group w-full isolate">
      <div className="absolute inset-0 z-10 rounded-[2.5rem] shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none" />
      <motion.img
        src={src}
        alt={alt}
        style={{ y: yTransform }}
        className="w-full h-[125%] object-cover scale-105 group-hover:scale-100 transition-all duration-[1200ms] ease-[0.25,1,0.5,1] opacity-70 group-hover:opacity-100 origin-center absolute top-[-12.5%]"
      />
    </div>
  );
};

export function OurJourneyTimeline() {
  const data = [
    {
      title: "CLARITY FIRST",
      content: (
        <div className="space-y-10 group">
          <div className="space-y-4">
            <div className="flex items-center gap-2 opacity-40">
              <Target size={12} className="text-[#4EA62F]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Operational Focus</span>
            </div>
            <p className="text-[#0F172A]/70 text-base lg:text-xl font-bold leading-snug tracking-tight font-['Outfit',sans-serif]">
              We prioritise clear, reliable information over volume. No conflicting advice, no hidden incentives, and no unnecessary complexity.
            </p>
          </div>

          <div className="relative">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1769284008279-46e4c97959db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Clarity First"
            />
            {/* Hud Watermark */}
            <div className="absolute top-6 right-6 flex items-center gap-3 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 z-20">
              <ShieldCheck size={12} className="text-[#4EA62F]" />
              <span className="text-[8px] font-black uppercase tracking-widest text-white">Protocol Verified</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "STUDENT-FIRST, ALWAYS",
      content: (
        <div className="space-y-10 group">
          <div className="space-y-4">
            <div className="flex items-center gap-2 opacity-40">
              <Activity size={12} className="text-[#4EA62F]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Sovereignty Node</span>
            </div>
            <p className="text-[#0F172A]/70 text-base lg:text-xl font-bold leading-snug tracking-tight font-['Outfit',sans-serif]">
              Decisions stay with you. We provide structure, support, and access, but without taking control or pushing outcomes that don’t serve your interests.
            </p>
          </div>
          <ParallaxImage
            src="https://images.unsplash.com/photo-1758413355194-353da4fa09c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Student-first approach"
          />
        </div>
      ),
    },
    {
      title: "STRUCTURED SUPPORT",
      content: (
        <div className="space-y-10 group">
          <div className="space-y-4">
            <div className="flex items-center gap-2 opacity-40">
              <Zap size={12} className="text-[#4EA62F]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">System Architecture</span>
            </div>
            <p className="text-[#0F172A]/70 text-base lg:text-xl font-bold leading-snug tracking-tight font-['Outfit',sans-serif]">
              Everything is designed to work in sequence. From getting set up to moving forward, each step is clear, connected, and built to reduce mistakes.
            </p>
          </div>
          <ParallaxImage
            src="https://images.unsplash.com/photo-1716337563114-365568c4db60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Structured Support"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#FDFDFC]">
      <Timeline data={data} />
    </div>
  );
}