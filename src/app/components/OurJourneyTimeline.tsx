"use client";

import React from "react";
import { Timeline } from "@/app/components/ui/timeline";
import { ShieldCheck, Target, Zap, Activity, Info } from "lucide-react";

export function OurJourneyTimeline() {
  const data = [
    {
      title: "Clarity over complexity",
      content: (
        <div className="space-y-10 group">
          <div className="space-y-4">
             <div className="flex items-center gap-2 opacity-40">
                <Target size={12} className="text-[#4EA62F]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Operational Focus</span>
             </div>
             <p className="text-[#0F172A]/70 text-lg lg:text-2xl font-bold leading-snug tracking-tight font-['Outfit',sans-serif]">
               We simplify international education planning by providing structured information and transparent guidance, eliminating the "noise" of traditional agency models.
             </p>
          </div>
          
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/5 bg-gray-50 aspect-video lg:aspect-[21/9]">
             <img
               src="https://images.unsplash.com/photo-1769284008279-46e4c97959db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
               alt="Strategic Planning"
               className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale hover:grayscale-0"
             />
             {/* Hud Watermark */}
             <div className="absolute top-6 right-6 flex items-center gap-3 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                <ShieldCheck size={12} className="text-[#4EA62F]" />
                <span className="text-[8px] font-black uppercase tracking-widest text-white">Protocol Verified</span>
             </div>
          </div>
        </div>
      ),
    },
    {
      title: "Student-first approach",
      content: (
        <div className="space-y-10 group">
          <div className="space-y-4">
             <div className="flex items-center gap-2 opacity-40">
                <Activity size={12} className="text-[#4EA62F]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Sovereignty Node</span>
             </div>
             <p className="text-[#0F172A]/70 text-lg lg:text-2xl font-bold leading-snug tracking-tight font-['Outfit',sans-serif]">
                All decisions remain with students. We provide the architecture and defensive support, but you maintain full sovereign control over your academic lineage.
             </p>
          </div>
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/5 bg-gray-50 aspect-video lg:aspect-[21/9]">
             <img
               src="https://images.unsplash.com/photo-1758413355194-353da4fa09c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
               alt="Student Sovreignty"
               className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale hover:grayscale-0"
             />
          </div>
        </div>
      ),
    },
    {
      title: "Process-driven guidance",
      content: (
        <div className="space-y-10 group">
          <div className="space-y-4">
             <div className="flex items-center gap-2 opacity-40">
                <Zap size={12} className="text-[#4EA62F]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">System Architecture</span>
             </div>
             <p className="text-[#0F172A]/70 text-lg lg:text-2xl font-bold leading-snug tracking-tight font-['Outfit',sans-serif]">
                Our approach is methodical and educational, treating the enrollment journey as a high-stakes engineering project with defined milestones and checks.
             </p>
          </div>
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/5 bg-gray-50 aspect-video lg:aspect-[21/9]">
             <img
               src="https://images.unsplash.com/photo-1716337563114-365568c4db60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
               alt="Process Engineering"
               className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale hover:grayscale-0"
             />
          </div>
        </div>
      ),
    },
    {
      title: "Honest expectations",
      content: (
        <div className="space-y-10 group">
          <div className="space-y-4">
             <div className="flex items-center gap-2 opacity-40">
                <Info size={12} className="text-[#4EA62F]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Full Disclosure Protocol</span>
             </div>
             <p className="text-[#0F172A]/70 text-lg lg:text-2xl font-bold leading-snug tracking-tight font-['Outfit',sans-serif]">
                Transparency is our primary metric. We communicate clearly about what we provide, and more importantly, what we do not. No false promises, just results.
             </p>
          </div>
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/5 bg-gray-50 aspect-video lg:aspect-[21/9]">
             <img
               src="https://images.unsplash.com/photo-1758525225856-d837707cb13f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
               alt="Full Disclosure"
               className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale hover:grayscale-0"
             />
          </div>
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