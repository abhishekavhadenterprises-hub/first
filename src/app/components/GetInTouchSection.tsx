'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, MapPin, ArrowUpRight, Activity, Command } from 'lucide-react';
import { useNavigate } from 'react-router';

const contactNodes = [
   {
      label: "Direct Intelligence",
      val: "consult@edupath.com",
      icon: Mail,
      desc: "24/7 dedicated support protocol"
   },
   {
      label: "Instant Access",
      val: "Global WhatsApp Hub",
      icon: MessageSquare,
      desc: "Real-time query resolution"
   },
   {
      label: "Audio Protocol",
      val: "+1 (800) EDU-CORE",
      icon: Phone,
      desc: "Direct advisory line"
   },
   {
      label: "Global Presence",
      val: "London / NYC / Dubai",
      icon: MapPin,
      desc: "Operational physical nodes"
   }
];

export function GetInTouchSection() {
   const navigate = useNavigate();

   const handleContactClick = () => {
      navigate('/contact');
   };

   return (
      <section className="relative py-24 lg:py-32 bg-[#FDFDFC] isolate overflow-hidden">
         {/* ── BACKGROUND KINETIC MESH ── */}
         <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] opacity-[0.03]">
               <div className="absolute inset-0 rounded-full border border-black animate-pulse" style={{ animationDuration: '4s' }} />
               <div className="absolute inset-[10%] rounded-full border border-dashed border-black/30" />
               <div className="absolute inset-[20%] rounded-full border border-black/10" />
            </div>
         </div>

         <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">

            {/* ── CENTERED: MASTER BRANDING ── */}
            <div className="max-w-4xl mx-auto mb-20 lg:mb-24 text-center flex flex-col items-center">
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-3 px-5 py-2 bg-white shadow-sm border border-black/5 rounded-full mb-10"
               >
                  <Activity className="w-4 h-4 text-[#4EA62F]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Network Integrated</span>
               </motion.div>

               <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "circOut" }}
                  className="h2 text-[#0F172A] uppercase mb-10"
               >
                  Get <span className="text-[#4EA62F] italic font-light lowercase px-1.5">Started.</span>
               </motion.h2>

               <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="max-w-2xl mx-auto text-lg lg:text-xl font-bold text-black/30 leading-tight tracking-tight font-['Outfit',sans-serif]"
               >
                  Architecting your international student journey with precision, clarity, and absolute success protocol.
               </motion.p>
            </div>

            {/* ── PREMIUM CONNECTION TILES ── */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
               {contactNodes.map((node, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-5%" }}
                     transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                     whileHover={{ y: -5 }}
                     onClick={handleContactClick}
                     className="group cursor-pointer relative p-10 bg-white rounded-[3rem] border border-black/5 shadow-[0_40px_100px_rgba(0,0,0,0.02)] transition-all duration-700 hover:shadow-[0_40px_120px_rgba(78,166,47,0.08)] hover:border-[#4EA62F]/20"
                  >
                     {/* Active Glow Accent */}
                     <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4EA62F] shadow-[0_0_15px_#4EA62F]" />
                     </div>

                     <div className="flex flex-col h-full justify-between gap-16 relative z-10">
                        <div className="flex justify-between items-start">
                           <div className="w-14 h-14 rounded-2xl bg-black/[0.02] flex items-center justify-center text-[#0F172A] group-hover:bg-[#4EA62F] group-hover:text-white transition-all duration-700 shadow-inner">
                              <node.icon size={22} strokeWidth={1.5} />
                           </div>
                           <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                              <span className="text-[8px] font-black uppercase text-[#4EA62F]">Secure Link</span>
                              <ArrowUpRight size={14} className="text-[#4EA62F]" />
                           </div>
                        </div>

                        <div className="space-y-3">
                           <div className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-[#4EA62F] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                              <div className="text-[10px] font-[1000] uppercase tracking-[0.4em] text-black/20 group-hover:text-black/40 transition-colors">{node.label}</div>
                           </div>
                           <h3 className="text-[#0F172A] uppercase">
                              {node.val}
                           </h3>
                           <p className="text-[11px] font-bold text-black/20 group-hover:text-black/40 transition-colors uppercase tracking-widest">
                              {node.desc}
                           </p>
                        </div>
                     </div>
                  </motion.div>
               ))}

               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="sm:col-span-2 pt-8"
               >
                  <motion.button
                     whileHover={{ scale: 0.99, y: -2 }}
                     whileTap={{ scale: 0.97 }}
                     onClick={handleContactClick}
                     className="group relative w-full h-24 bg-[#0F172A] text-white rounded-[3.5rem] overflow-hidden shadow-2xl shadow-black/5 transition-all duration-700 isolate"
                  >
                     <div className="relative z-20 flex items-center justify-center gap-6 group-hover:text-white transition-colors duration-500">
                        <Command size={20} className="animate-pulse text-[#4EA62F] group-hover:text-white transition-colors" />
                        <span className="text-[13px] font-[1000] uppercase tracking-[0.6em] relative">Initialize Support Protocol</span>
                        <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                     </div>
                     {/* Premium Background Slide */}
                     <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-1000 z-10 ease-[0.16,1,0.3,1]" />
                  </motion.button>
               </motion.div>
            </div>
         </div>
      </section>
   );
}

export default GetInTouchSection;