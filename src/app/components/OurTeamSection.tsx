'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UserCheck, Code, BookOpen, Sparkles, Fingerprint, Command } from 'lucide-react';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const teamNodes = [
  {
    name: 'Education Advisors',
    role: 'Strategic Support',
    description: 'Experienced professionals who understand international education systems, visa protocols, and institution requirements.',
    icon: UserCheck,
    image: 'https://images.unsplash.com/photo-1758691463084-17ed846d4a50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    color: "#4EA62F"
  },
  {
    name: 'Platform Architects',
    role: 'Infrastructure',
    description: 'Designers and engineers focused on creating high-performance, accessible digital tools for education planning.',
    icon: Code,
    image: 'https://images.unsplash.com/photo-1690383921891-3f0a7567d815?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    color: "#0F172A"
  },
  {
    name: 'Content Strategists',
    role: 'Data Resilience',
    description: 'Researchers who maintain absolute accuracy and real-time updates for destinations, global universities, and requirements.',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1653038417404-1ae1f38c373e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    color: "#4EA62F"
  }
];

export function OurTeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Header staggered reveal
    gsap.from(".team-header > *", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".team-header",
        start: "top 85%",
      }
    });

    // Team capsules reveal
    gsap.from(".team-capsule", {
      opacity: 0,
      y: 60,
      stagger: 0.15,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".team-grid",
        start: "top 80%",
      }
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative py-24 lg:py-48 bg-[#FDFDFC] overflow-hidden"
    >
      {/* Background HUD Decor */}
      <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none hidden lg:block">
         <div className="flex flex-col gap-4 items-end">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black">Talent Hub v9.0</span>
            <div className="w-48 h-px bg-black" />
            <Fingerprint size={24} className="text-black" />
         </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="team-header mb-20 lg:mb-32 max-w-4xl">
           <div className="inline-flex items-center gap-3 px-5 py-2 bg-white shadow-sm border border-black/5 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-[#4EA62F]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">The Architects</span>
           </div>
           
           <h2 className="text-5xl lg:text-[8rem] font-[1000] text-[#0F172A] leading-[0.85] tracking-tighter uppercase mb-10 font-['Outfit',sans-serif]">
             The minds <br />
             <span className="text-[#4EA62F] italic font-light lowercase px-4">behind</span> the track.
           </h2>

           <p className="max-w-xl text-xl font-bold text-black/40 leading-tight tracking-tight font-['Outfit',sans-serif]">
              A collaborative matrix of advisors, engineers, and researchers dedicated to your global enrollment.
           </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
           {teamNodes.map((node, idx) => (
             <motion.div 
               key={idx}
               whileHover={{ y: -15 }}
               className="team-capsule group relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border border-black/5 shadow-[0_40px_100px_rgba(0,0,0,0.03)] transition-all duration-1000"
             >
                {/* Visual Base */}
                <div className="absolute inset-0 z-0">
                   <img 
                     src={node.image} 
                     alt={node.name}
                     loading="lazy"
                     className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>

                {/* Floating HUD Meta */}
                <div className="absolute top-8 left-8 z-10">
                   <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center gap-4 text-white">
                      <node.icon size={16} />
                   </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 z-20 space-y-6">
                   <div className="space-y-2 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                      <div className="text-[9px] font-black uppercase tracking-[0.4em] text-[#4EA62F]">Expertise Node</div>
                      <h3 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter font-['Outfit',sans-serif]">
                        {node.name}
                      </h3>
                   </div>

                   <p className="text-white/60 text-sm font-bold leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      {node.description}
                   </p>

                   <div className="flex items-center gap-4 pt-4 border-t border-white/5 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="w-2 h-2 rounded-full bg-[#4EA62F] animate-pulse" />
                      <span className="text-[8px] font-black uppercase tracking-widest text-white">Status: Verified</span>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Global Network Invite */}
        <div className="mt-32 pt-20 border-t border-black/5 flex flex-col items-center text-center space-y-8">
           <div className="flex -space-x-4 mb-4">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="team" loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-white bg-[#0F172A] flex items-center justify-center text-[10px] font-black text-white">
                +42
              </div>
           </div>
           
           <h4 className="text-xl font-black uppercase tracking-tighter text-[#0F172A] font-['Outfit',sans-serif]">
              Join our growing network of international education specialists.
           </h4>
           
           <button className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#4EA62F] hover:text-[#0F172A] transition-colors">
              <Command size={14} />
              View Open Opportunities
           </button>
        </div>

      </div>

    </section>
  );
}