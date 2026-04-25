'use client';

import { useRef, useState, useEffect } from 'react';
import {
  Smartphone, Building2, Shield, UtensilsCrossed,
  Plane, Calendar, Briefcase, Receipt, CreditCard,
  TrendingUp, Home, GraduationCap, DollarSign,
  ArrowRight, CheckCircle2, Cpu, Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, useInView } from 'motion/react';


const toolkitItems = [
  { id: '01', title: 'SIM & eSIM', icon: Smartphone, color: '#4EA62F', desc: 'Pre-activated global data with eSIM.', side: 'left', image: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?w=1200&q=80' },
  { id: '02', title: 'Banking', icon: Building2, color: '#3b82f6', desc: 'Zero-fee international accounts.', side: 'left', image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=1200' },
  { id: '03', title: 'Insurance', icon: Shield, color: '#6366f1', desc: 'Comprehensive health coverage.', side: 'left', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200' },
  { id: '04', title: 'Visas', icon: Plane, color: '#8b5cf6', desc: 'Expert immigration assistance.', side: 'left', image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200' },
  { id: '05', title: 'Housing', icon: Home, color: '#10b981', desc: 'Verified luxury student stays.', side: 'right', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200' },
  { id: '06', title: 'Forex', icon: DollarSign, color: '#f43f5e', desc: 'Real-time currency exchange.', side: 'right', image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?w=1200' },
  { id: '07', title: 'Taxes', icon: Receipt, color: '#06b6d4', desc: 'Simplified financial compliance.', side: 'right', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200' },
  { id: '08', title: 'Credit', icon: TrendingUp, color: '#f59e0b', desc: 'Build your financial score.', side: 'right', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200' },
];

export function StudentToolkitShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState(toolkitItems[0]);
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  // Auto-Cycle Effect perfectly aligned with performance
  useEffect(() => {
    if (isHovered || !isInView) return;
    const interval = setInterval(() => {
      setActiveItem((prev) => {
        const currentIndex = toolkitItems.findIndex(i => i.id === prev.id);
        const nextIndex = (currentIndex + 1) % toolkitItems.length;
        return toolkitItems[nextIndex];
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [isHovered, isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 bg-white overflow-hidden flex flex-col items-center justify-center z-30"
    >
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-[#4EA62F]/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-indigo-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="text-center mb-16 px-6 relative z-10 w-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4EA62F]/10 bg-[#4EA62F]/5 mb-6">
          <Zap size={12} className="text-[#4EA62F]" />
          <span className="text-[10px] font-black tracking-[0.5em] text-[#4EA62F] uppercase">Student Service Hub</span>
        </div>
        <h2 className="text-3xl lg:text-[4rem] font-[1000] tracking-tighter text-[#0F172A] leading-[1.1] uppercase max-w-5xl mx-auto">
          Start Your Life <span className="text-[#4EA62F] italic font-light">Abroad.</span><br /> Properly.
        </h2>
        <p className="mt-8 text-lg lg:text-xl text-[#0F172A]/60 font-medium max-w-2xl mx-auto tracking-tight">
          Everything you need to get set up, sorted, and functioning from day one.
        </p>
      </div>

      <div className="relative w-full max-w-[1700px] flex justify-center items-center z-20 px-10">

        {/* Left Wings */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          className="hidden lg:flex flex-col gap-3 flex-1 items-end pr-10"
        >
          {toolkitItems.filter(i => i.side === 'left').map((item) => (
            <Pill 
              key={item.id} 
              item={item} 
              isActive={activeItem.id === item.id} 
              onMouseEnter={() => {
                setActiveItem(item);
                setIsHovered(true);
              }} 
              onMouseLeave={() => setIsHovered(false)}
              side="left" 
            />
          ))}
        </motion.div>

        {/* Central Dashboard Mirror (Laptop) */}
        <motion.div
          ref={laptopRef}
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="relative shrink-0 flex flex-col items-center group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Lid (Screen) */}
          <div className="w-[850px] aspect-[16/10] bg-[#1a1a1b] rounded-t-[2.5rem] p-3 pb-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-white/10 relative hover:shadow-[0_80px_120px_-30px_rgba(78,166,47,0.15)] transition-shadow duration-1000 z-10 border-b-black/40">
            {/* Camera Bezel */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white/20 rounded-full z-50 shadow-[0_0_2px_rgba(0,0,0,1)]"></div>

            {/* Internal Screen */}
            <div className="w-full h-full bg-[#121214] rounded-t-[2rem] rounded-b-sm overflow-hidden relative border border-white/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
                  transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                  className="absolute inset-0"
                >
                  <img src={activeItem.image} className="w-full h-full object-cover opacity-90" alt={activeItem.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/40 to-transparent" />

                  {/* Telemetry Layer */}
                  <div className="absolute inset-0 p-12 flex flex-col justify-end gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-[#4EA62F]/20 backdrop-blur-3xl border border-[#4EA62F]/30 flex items-center justify-center text-[#4EA62F] shadow-[0_0_30px_rgba(78,166,47,0.2)]">
                        <activeItem.icon size={32} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-[#4EA62F] tracking-[0.5em] uppercase">Service {activeItem.id}</span>
                        <h3 className="text-3xl font-black text-white uppercase">{activeItem.title}</h3>
                      </div>
                    </div>
                    <p className="text-white/50 text-lg font-medium max-w-md leading-relaxed">{activeItem.desc}</p>

                    <div className="flex items-center gap-4 pt-4">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative h-12 px-8 rounded-full bg-white text-[#0A0A0B] text-xs font-black uppercase tracking-widest transition-all flex items-center gap-3 overflow-hidden transform"
                      >
                        <span className="relative z-20 flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                          Explore Service <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-10" />
                      </motion.button>
                      <div className="px-6 h-12 rounded-full border border-white/10 flex items-center gap-2 text-[10px] font-black text-white/40 tracking-widest uppercase bg-white/5 backdrop-blur-xl">
                        <CheckCircle2 size={12} className="text-[#4EA62F]" /> Verified Status
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>


            </div>

            {/* Reflection Highlight */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-[-15deg] pointer-events-none translate-x-[10%] group-hover:translate-x-[-50%] transition-transform duration-[2s] ease-in-out" />
          </div>

          {/* Laptop Base */}
          <div className="w-[105%] h-5 bg-gradient-to-b from-[#2a2a2b] to-[#121214] rounded-b-[2rem] rounded-t-sm shadow-2xl relative flex items-start justify-center border border-white/5 z-20">
            <div className="w-32 h-1 bg-[#0f0f11] rounded-b-lg shadow-inner"></div>
          </div>

          {/* Laptop Shadow underneath */}
          <div className="w-[90%] h-4 bg-black/40 blur-xl rounded-[100%] mt-2"></div>
        </motion.div>

        {/* Right Wings */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          className="hidden lg:flex flex-col gap-3 flex-1 items-start pl-10"
        >
          {toolkitItems.filter(i => i.side === 'right').map((item) => (
            <Pill 
              key={item.id} 
              item={item} 
              isActive={activeItem.id === item.id} 
              onMouseEnter={() => {
                setActiveItem(item);
                setIsHovered(true);
              }} 
              onMouseLeave={() => setIsHovered(false)}
              side="right" 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Pill({ item, isActive, onMouseEnter, onMouseLeave, side }: { item: any, isActive: boolean, onMouseEnter: () => void, onMouseLeave: () => void, side: 'left' | 'right' }) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "toolkit-pill group flex items-center gap-5 px-8 py-5 rounded-[2rem] border transition-all duration-700 cursor-pointer overflow-hidden",
        side === 'left' ? "toolkit-pill-l flex-row" : "toolkit-pill-r flex-row-reverse",
        isActive
          ? "bg-white border-black/5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] scale-105 z-10"
          : "bg-white/50 border-transparent hover:bg-white hover:border-black/5 hover:scale-105"
      )}
    >
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500",
        isActive ? "bg-[#4EA62F] text-white" : "bg-white text-[#0F172A] shadow-sm group-hover:bg-[#4EA62F] group-hover:text-white"
      )}>
        <item.icon size={22} />
      </div>
      <div className={cn("flex flex-col", side === 'right' && "items-end")}>
        <span className={cn("text-[9px] font-black tracking-widest uppercase", isActive ? "text-[#4EA62F]" : "text-black/20")}>Service {item.id}</span>
        <span className={cn("text-lg font-black uppercase tracking-tighter", isActive ? "text-[#0F172A]" : "text-[#0F172A]/40")}>{item.title}</span>
      </div>
    </div>
  );
}

export default StudentToolkitShowcase;
