'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe, Network, X, ChevronRight, ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Import all icons for proper Vite bundling
import simIcon from '@/app/pages/icons/(Updated) Inflatable with no background/sim and esim.png';
import housingIcon from '@/app/pages/icons/(Updated) Inflatable with no background/housing.png';
import bankingIcon from '@/app/pages/icons/(Updated) Inflatable with no background/banking.png';
import visaIcon from '@/app/pages/icons/(Updated) Inflatable with no background/visa.png';
import jobsIcon from '@/app/pages/icons/(Updated) Inflatable with no background/employment.png';
import insuranceIcon from '@/app/pages/icons/(Updated) Inflatable with no background/insurance.png';
import eventsIcon from '@/app/pages/icons/(Updated) Inflatable with no background/social event.png';
import foodIcon from '@/app/pages/icons/(Updated) Inflatable with no background/food.png';
import creditIcon from '@/app/pages/icons/(Updated) Inflatable with no background/credit.png';

interface ModuleItem {
  id: number;
  title: string;
  category: string;
  content: string;
  icon: string;
  status: 'active' | 'upcoming' | 'locked';
  energy: number;
  metric: string;
}

const moduleData: ModuleItem[] = [
  { id: 1, title: 'SIM & eSIM', category: 'CONNECTIVITY', content: 'Instant local data activation to keep you connected from day one.', icon: simIcon, status: 'active', energy: 98, metric: '5G Active' },
  { id: 2, title: 'Housing', category: 'LIFESTYLE', content: 'Verified student apartments near your campus with flexible lease terms.', icon: housingIcon, status: 'active', energy: 95, metric: 'Verified' },
  { id: 3, title: 'Banking', category: 'FINANCE', content: 'Zero-fee international student accounts with instant mobile access.', icon: bankingIcon, status: 'active', energy: 92, metric: 'Direct Pay' },
  { id: 4, title: 'Visa', category: 'LOGISTICS', content: 'Step-by-step renewal and compliance tracking for your student visa.', icon: visaIcon, status: 'active', energy: 88, metric: 'Priority' },
  { id: 5, title: 'Jobs', category: 'CAREER', content: 'Part-time roles and internships vetted for international student compliance.', icon: jobsIcon, status: 'active', energy: 85, metric: 'Vetted' },
  { id: 6, title: 'Insurance', category: 'SECURITY', content: 'Comprehensive health and travel coverage tailored for students.', icon: insuranceIcon, status: 'active', energy: 90, metric: 'Full Guard' },
  { id: 7, title: 'Events', category: 'NETWORK', content: 'Exclusive mixers and cultural festivals to build your global network.', icon: eventsIcon, status: 'active', energy: 82, metric: 'Live Now' },
  { id: 8, title: 'Food', category: 'LIFESTYLE', content: 'Curated meal delivery and groceries optimized for student budgets.', icon: foodIcon, status: 'active', energy: 78, metric: '24/7' },
  { id: 9, title: 'Credit', category: 'FINANCE', content: 'Build your local credit score instantly with specialized student tools.', icon: creditIcon, status: 'active', energy: 80, metric: 'Elite Tier' }
];

export function ArrivalSuccessShowcase() {
  const [activeId, setActiveId] = useState<number | null>(moduleData[0].id);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-Cycle Effect
  React.useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveId((prev) => {
        const currentIndex = moduleData.findIndex(m => m.id === prev);
        const nextIndex = (currentIndex + 1) % moduleData.length;
        return moduleData[nextIndex].id;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const activeModule = useMemo(() => moduleData.find((m) => m.id === activeId), [activeId]);

  // Handle magnetic icon interaction
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen min-h-[700px] flex flex-col justify-center bg-[#FDFDFC] font-sans selection:bg-[#4EA62F] selection:text-white z-10 overflow-hidden"
    >
      {/* ── BACKGROUND OVERLAYS ── */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute inset-0 bg-[#FDFDFC]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(78,166,47,0.04)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #0F172A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Kinetic Globe Watermark */}
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: { duration: 120, repeat: Infinity, ease: "linear" },
            scale: { duration: 25, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02]"
        >
          <Globe size={1100} strokeWidth={0.2} className="text-[#0F172A]" />
        </motion.div>
      </div>

      {/* ── TOP NAV TELEMETRY ── */}
      <div className="absolute top-8 w-full px-8 lg:px-12 flex justify-between items-center opacity-30 z-50 pointer-events-none">
        <div className="flex flex-col gap-1">
          <span className="text-[8px] font-black tracking-[0.5em] text-[#0F172A] uppercase">Achievement Journey</span>
          <div className="h-0.5 w-16 bg-[#4EA62F]/50" />
        </div>
        <div className="hidden sm:flex text-[8px] font-mono text-[#0F172A] tracking-widest uppercase items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4EA62F] animate-pulse" />
            ACTIVE_SUPPORT
          </div>
          <span className="opacity-20">|</span>
          <div className="flex items-center gap-2">
            STATUS: <span className="text-[#4EA62F]">OPERATIONAL</span>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center max-w-[1400px] mx-auto w-full px-6 gap-6 lg:gap-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#4EA62F]/40" />
            <span className="text-[10px] font-black text-[#4EA62F] tracking-[0.5em] uppercase">Services</span>
            <div className="h-px w-8 bg-[#4EA62F]/40" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-[1000] text-[#0F172A] uppercase tracking-tighter leading-none mb-3">
            Everything you need, <span className="text-[#4EA62F] italic font-light lowercase">in one place</span>
          </h2>
          <p className="text-[#0F172A]/70 text-sm lg:text-base font-medium max-w-2xl">
            A comprehensive suite of critical student services, designed for your rapid global success.
          </p>
        </motion.div>

        {/* LINEAR ICONS ROW */}
        <div
          ref={scrollContainerRef}
          className="w-full flex flex-row items-center justify-start lg:justify-center gap-4 lg:gap-8 overflow-x-auto no-scrollbar pb-2 pt-2 px-4 mask-fade-edges"
        >
          {moduleData.map((item, index) => {
            const isActive = activeId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="flex flex-col items-center group cursor-pointer shrink-0"
                onMouseEnter={() => {
                  setActiveId(item.id);
                  setIsHovered(true);
                }}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="relative mb-3">
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="activeGlow"
                        className="absolute inset-[-20%] bg-[#4EA62F]/10 blur-2xl rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                      />
                    )}
                  </AnimatePresence>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={isActive ? {
                      y: [0, -5, 0],
                      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    } : {}}
                    className={cn(
                      "w-14 h-14 lg:w-20 lg:h-20 rounded-full flex items-center justify-center border transition-all duration-500 relative z-10",
                      isActive
                        ? "bg-[#4EA62F]/5 border-[#4EA62F] shadow-[0_10px_30px_rgba(78,166,47,0.15)]"
                        : "bg-[#0F172A]/[0.02] border-[#0F172A]/5 hover:border-[#0F172A]/20"
                    )}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className={cn(
                        "w-[75%] h-[75%] object-contain transition-all duration-700",
                        isActive ? "brightness-100 drop-shadow-[0_8px_16px_rgba(78,166,47,0.3)]" : "grayscale opacity-30"
                      )}
                    />
                  </motion.div>
                </div>

                <span className={cn(
                  "text-[8px] lg:text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300",
                  isActive ? "text-[#4EA62F]" : "text-[#0F172A]/40"
                )}>
                  {item.title}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* DETAILS CARD */}
        <div className="w-full max-w-[1100px] min-h-[350px] relative">
          <AnimatePresence mode="wait">
            {activeId && activeModule ? (
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="w-full bg-white border border-[#0F172A]/5 rounded-[2.5rem] p-8 lg:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#4EA62F]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center relative z-10">
                  <div className="w-40 lg:w-56 aspect-square flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-[#4EA62F]/10 blur-3xl rounded-full animate-pulse" />
                    <img
                      src={activeModule.icon}
                      alt={activeModule.title}
                      className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(78,166,47,0.25)]"
                    />
                  </div>

                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex flex-col items-center lg:items-start gap-3 mb-6">
                      <span className="text-[10px] font-black text-[#4EA62F] tracking-[0.4em] uppercase px-4 py-1.5 border border-[#4EA62F]/10 bg-[#4EA62F]/5 rounded-full">
                        {activeModule.category}
                      </span>
                      <h3 className="text-3xl lg:text-5xl font-[1000] text-[#0F172A] uppercase tracking-tighter">
                        {activeModule.title}
                      </h3>
                    </div>

                    <p className="text-[#0F172A]/70 text-base lg:text-lg font-medium leading-relaxed mb-8 max-w-2xl">
                      {activeModule.content}
                    </p>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-12 mb-8">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#0F172A]/30">Service Progress</span>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-black text-[#0F172A]">{activeModule.energy}%</span>
                          <div className="w-24 h-1 bg-[#0F172A]/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${activeModule.energy}%` }}
                              className="h-full bg-[#4EA62F]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="hidden sm:block w-px h-8 bg-[#0F172A]/10" />
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#0F172A]/30">Support Status</span>
                        <span className="text-lg font-black text-[#4EA62F] uppercase tracking-widest flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#4EA62F] animate-pulse" />
                          {activeModule.metric}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <motion.button 
                        whileHover={{ scale: 0.98 }}
                        whileTap={{ scale: 0.95 }}
                        className="h-12 px-8 rounded-2xl bg-[#0F172A] text-white font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 group/btn relative overflow-hidden shadow-xl shadow-[#0F172A]/10"
                      >
                        <span className="relative z-20">Access Module</span>
                        <ArrowRight size={16} className="relative z-20 transition-transform duration-500 group-hover/btn:translate-x-1" />
                        <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-700 z-10" />
                      </motion.button>

                      <motion.button 
                        whileHover={{ scale: 0.98 }}
                        whileTap={{ scale: 0.95 }}
                        className="h-12 px-8 rounded-2xl bg-[#0F172A]/5 border border-[#0F172A]/10 text-[#0F172A] font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 group/doc relative overflow-hidden"
                      >
                        <span className="relative z-20">Documentation</span>
                        <ChevronRight size={16} className="relative z-20 opacity-50 group-hover/doc:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-[#0F172A]/10 scale-x-0 group-hover/doc:scale-x-100 origin-left transition-transform duration-700 z-10" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-6 opacity-20"
              >
                <Globe size={80} strokeWidth={0.5} className="text-[#0F172A] animate-pulse" />
                <span className="text-[10px] font-black text-[#4EA62F] tracking-[0.8em] uppercase">Select a Service</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── BOTTOM NAV TELEMETRY ── */}
      <div className="absolute bottom-6 w-full px-8 lg:px-12 flex justify-between items-center opacity-20 z-20 pointer-events-none">
        <div className="flex items-center gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-[8px] font-black text-[#0F172A] uppercase tracking-[0.4em]">Service_Layer</span>
            <span className="text-[10px] font-mono text-[#4EA62F]">EDUPATH.OS_2026</span>
          </div>
          <div className="w-px h-6 bg-[#0F172A]/10" />
          <span className="text-[7px] font-black text-[#0F172A]/40 uppercase tracking-widest">Data Sync Active</span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span className="text-[7px] font-black text-[#0F172A]/40 uppercase tracking-widest">Global Status</span>
          <span className="text-[9px] font-black text-[#4EA62F] uppercase tracking-[0.3em]">Operational</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .mask-fade-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}} />
    </section>
  );
}

export default ArrivalSuccessShowcase;
