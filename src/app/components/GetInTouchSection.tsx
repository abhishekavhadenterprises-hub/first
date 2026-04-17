'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MessageSquare, MapPin, ArrowUpRight, Activity, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function GetInTouchSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  useGSAP(() => {
    if (!containerRef.current) return;

    // Header reveal
    gsap.from(".connect-header > *", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".connect-header",
        start: "top 85%",
      }
    });

    // Contact nodes reveal
    gsap.from(".contact-node", {
      opacity: 0,
      scale: 0.9,
      y: 30,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-grid",
        start: "top 80%",
      }
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative py-24 lg:py-48 bg-[#FDFDFC] overflow-hidden"
    >
      {/* Background Kinetic Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-black rounded-full" />
         <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
            <div className="h-full w-full border-[1px] border-black border-dashed opacity-20" />
         </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
           
           {/* Left: Brand Narrative */}
           <div className="connect-header space-y-12">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-white shadow-sm border border-black/5 rounded-full">
                 <Activity className="w-4 h-4 text-[#4EA62F]" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Real-time Connection</span>
              </div>

              <h2 className="text-6xl lg:text-[9rem] font-[1000] text-[#0F172A] leading-[0.85] tracking-tighter uppercase font-['Outfit',sans-serif]">
                Initiate <br />
                <span className="text-[#4EA62F] italic font-light lowercase px-4">Contact.</span>
              </h2>

              <p className="max-w-xl text-xl lg:text-2xl font-bold text-black/40 leading-tight tracking-tight font-['Outfit',sans-serif]">
                 Direct access to the senior guidance protocol. Redefining how students connect with institutional expertise.
              </p>

              <div className="flex items-center gap-8 pt-6">
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#4EA62F] animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/60">Support Desk Active</span>
                 </div>
                 <div className="w-px h-4 bg-black/10" />
                 <div className="flex items-center gap-3">
                    <Globe size={14} className="text-black/30" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/60">Global Coverage</span>
                 </div>
              </div>
           </div>

           {/* Right: Interactive Connection Nodes */}
           <div className="contact-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "Direct Intelligence", val: "consult@edupath.com", icon: Mail, color: "#4EA62F" },
                { label: "Instant Access", val: "Connect via WhatsApp", icon: MessageSquare, color: "#0F172A" },
                { label: "Audio Protocol", val: "+1 (800) EDU-CORE", icon: Phone, color: "#0F172A" },
                { label: "Global Presence", val: "London / New York / Dubai", icon: MapPin, color: "#0F172A" }
              ].map((node, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={handleContactClick}
                  className="contact-node group cursor-pointer p-8 bg-white rounded-[2.5rem] border border-black/5 shadow-[0_40px_100px_rgba(0,0,0,0.02)] transition-all duration-700 hover:shadow-[0_40px_120px_rgba(78,166,47,0.06)]"
                >
                   <div className="flex flex-col h-full justify-between gap-12">
                      <div className="flex justify-between items-start">
                         <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] flex items-center justify-center text-[#0F172A] group-hover:bg-[#4EA62F] group-hover:text-white transition-colors duration-500">
                            <node.icon size={20} />
                         </div>
                         <ArrowUpRight size={16} className="text-black/10 group-hover:text-[#4EA62F] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                      
                      <div className="space-y-2">
                         <div className="text-[9px] font-black uppercase tracking-[0.3em] text-black/30 leading-none">{node.label}</div>
                         <div className="text-lg font-black text-[#0F172A] tracking-tighter leading-tight uppercase font-['Outfit',sans-serif]">
                           {node.val}
                         </div>
                      </div>
                   </div>
                </motion.div>
              ))}

              <div className="sm:col-span-2 pt-8">
                 <button 
                   onClick={handleContactClick}
                   className="w-full py-8 bg-[#0F172A] text-white rounded-[2.5rem] text-[11px] font-black uppercase tracking-[0.4em] hover:bg-[#4EA62F] transition-colors duration-700 shadow-xl shadow-black/10"
                 >
                    Enter Connection Dashboard
                 </button>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}