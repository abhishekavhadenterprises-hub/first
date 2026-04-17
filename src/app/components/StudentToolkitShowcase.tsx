'use client';

import { useRef, useState } from 'react';
import {
  Smartphone, Building2, Shield, UtensilsCrossed,
  Plane, Calendar, Briefcase, Receipt, CreditCard,
  TrendingUp, Home, GraduationCap, DollarSign,
  ArrowRight, CheckCircle2, Globe, Cpu, Zap
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const toolkitItems = [
  { id: '01', title: 'SIM Cards', icon: Smartphone, color: '#4EA62F', desc: 'Pre-activated global data plans.', side: 'left', image: 'https://images.unsplash.com/photo-1556656793-062ff987b50c?w=1200' },
  { id: '02', title: 'Banking', icon: Building2, color: '#3b82f6', desc: 'Zero-fee international accounts.', side: 'left', image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=1200' },
  { id: '03', title: 'Insurance', icon: Shield, color: '#6366f1', desc: 'Comprehensive health coverage.', side: 'left', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200' },
  { id: '04', title: 'Dining', icon: UtensilsCrossed, color: '#ec4899', desc: 'Curated student meal plans.', side: 'left', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200' },
  { id: '05', title: 'Visas', icon: Plane, color: '#8b5cf6', desc: 'Expert immigration assistance.', side: 'left', image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200' },
  { id: '06', title: 'Events', icon: Calendar, color: '#f59e0b', desc: 'Networking & community mixers.', side: 'left', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200' },
  { id: '07', title: 'Career', icon: Briefcase, color: '#10b981', desc: 'Job placement & coaching.', side: 'right', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200' },
  { id: '08', title: 'Taxes', icon: Receipt, color: '#f43f5e', desc: 'Simplified financial compliance.', side: 'right', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200' },
  { id: '09', title: 'Loans', icon: CreditCard, color: '#06b6d4', desc: 'Low-interest student financing.', side: 'right', image: 'https://images.unsplash.com/photo-1579621970795-87fca3f66057?w=1200' },
  { id: '10', title: 'Credit', icon: TrendingUp, color: '#4EA62F', desc: 'Build your financial score.', side: 'right', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200' },
  { id: '11', title: 'Housing', icon: Home, color: '#3b82f6', desc: 'Verified luxury student stays.', side: 'right', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200' },
  { id: '12', title: 'Courses', icon: GraduationCap, color: '#6366f1', desc: 'Global university preparation.', side: 'right', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200' },
  { id: '13', title: 'Forex', icon: DollarSign, color: '#8b5cf6', desc: 'Real-time currency exchange.', side: 'right', image: 'https://images.unsplash.com/photo-1611974714851-48206139b7ea?w=1200' },
];

export function StudentToolkitShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState(toolkitItems[0]);

  useGSAP(() => {
    if (!sectionRef.current || !laptopRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=120%',
        pin: true,
        scrub: 1.5,
        anticipatePin: 1
      }
    });

    // 1. Initial State (Tighter & Cleaner)
    gsap.set('.toolkit-pill-l', { x: -60, opacity: 0, scale: 0.9, filter: 'blur(10px)' });
    gsap.set('.toolkit-pill-r', { x: 60, opacity: 0, scale: 0.9, filter: 'blur(10px)' });
    gsap.set(laptopRef.current, { scale: 1.3, y: 150, rotateX: 10, opacity: 0 });

    // 2. The Reveal sequence
    tl.to(laptopRef.current, {
      scale: 1,
      y: 0,
      rotateX: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'expo.out'
    })
      .to('.toolkit-pill-l', {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        stagger: 0.05,
        duration: 1,
        ease: 'back.out(1.2)'
      }, '-=1.2')
      .to('.toolkit-pill-r', {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        stagger: 0.05,
        duration: 1,
        ease: 'back.out(1.2)'
      }, '-=1.4');

    // 3. Floating 3D Micro-movement
    const handleMouseMove = (e: MouseEvent) => {
      const xRot = (e.clientX / window.innerWidth - 0.5) * 10;
      const yRot = (e.clientY / window.innerHeight - 0.5) * 6;
      gsap.to(laptopRef.current, {
        rotateY: xRot,
        rotateX: -yRot,
        duration: 0.8,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);

  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#F8FAFC] overflow-hidden flex flex-col items-center justify-center pt-32 pb-20"
    >
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-[#4EA62F]/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-indigo-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="text-center mb-12 px-6 relative z-10 w-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/5 bg-white shadow-sm mb-4">
          <Zap size={12} className="text-[#4EA62F]" />
          <span className="text-[10px] font-[1000] tracking-[0.5em] text-[#0F172A] uppercase">The Full Ecosystem</span>
        </div>
        <h2 className="text-5xl lg:text-[6.5rem] font-[1000] tracking-tighter text-[#0F172A] leading-[0.85] uppercase">
          START YOUR LIFE ABROAD
PROPERLY. <br />
          <span className="text-[#4EA62F] italic"></span>
        </h2>
      </div>

      <div className="relative w-full max-w-[1700px] flex justify-center items-center z-20 px-10">

        {/* Left Wings */}
        <div className="hidden lg:flex flex-col gap-3 flex-1 items-end pr-10">
          {toolkitItems.filter(i => i.side === 'left').map((item) => (
            <Pill key={item.id} item={item} isActive={activeItem.id === item.id} onHover={() => setActiveItem(item)} side="left" />
          ))}
        </div>

        {/* Central Dashboard Mirror */}
        <div ref={laptopRef} style={{ perspective: 1500, transformStyle: 'preserve-3d' }} className="relative shrink-0">
          <div className="w-[850px] aspect-[16/10] bg-[#1a1a1b] rounded-[3rem] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-white/5 relative group">

            {/* Internal Screen */}
            <div className="w-full h-full bg-[#121214] rounded-[2.5rem] overflow-hidden relative border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
                  transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                  className="absolute inset-0"
                >
                  <img src={activeItem.image} className="w-full h-full object-cover opacity-60 grayscale-[0.2]" alt={activeItem.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/40 to-transparent" />

                  {/* Telemetry Layer */}
                  <div className="absolute inset-0 p-12 flex flex-col justify-end gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-[#4EA62F]/20 backdrop-blur-3xl border border-[#4EA62F]/30 flex items-center justify-center text-[#4EA62F] shadow-[0_0_30px_rgba(78,166,47,0.2)]">
                        <activeItem.icon size={32} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-[#4EA62F] tracking-[0.5em] uppercase">Module {activeItem.id}</span>
                        <h3 className="text-5xl font-black text-white uppercase">{activeItem.title}</h3>
                      </div>
                    </div>
                    <p className="text-white/50 text-xl font-medium max-w-md leading-relaxed">{activeItem.desc}</p>

                    <div className="flex items-center gap-4 pt-4">
                      <button className="h-12 px-8 rounded-full bg-white text-[#0A0A0B] text-xs font-black uppercase tracking-widest hover:bg-[#4EA62F] transition-all flex items-center gap-3 group/btn">
                        Configure Module <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                      <div className="px-6 h-12 rounded-full border border-white/10 flex items-center gap-2 text-[10px] font-black text-white/40 tracking-widest uppercase bg-white/5 backdrop-blur-xl">
                        <CheckCircle2 size={12} className="text-[#4EA62F]" /> Verified Status
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Corner Decoration */}
              <div className="absolute top-8 right-8 flex items-center gap-6">
                <div className="flex flex-col items-end">
                  <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">Latency</span>
                  <span className="text-xs font-black text-[#4EA62F] tracking-widest">0.04 MS</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <Cpu size={20} className="text-white/10" />
              </div>
            </div>

            {/* Reflection Highlight */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-[-15deg] pointer-events-none translate-x-[10%] group-hover:translate-x-[-50%] transition-transform duration-[2s] ease-in-out" />
          </div>
        </div>

        {/* Right Wings */}
        <div className="hidden lg:flex flex-col gap-3 flex-1 items-start pl-10">
          {toolkitItems.filter(i => i.side === 'right').map((item) => (
            <Pill key={item.id} item={item} isActive={activeItem.id === item.id} onHover={() => setActiveItem(item)} side="right" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Pill({ item, isActive, onHover, side }: { item: any, isActive: boolean, onHover: () => void, side: 'left' | 'right' }) {
  return (
    <div
      onMouseEnter={onHover}
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
        <span className={cn("text-[9px] font-black tracking-widest uppercase", isActive ? "text-[#4EA62F]" : "text-black/20")}>SYS. {item.id}</span>
        <span className={cn("text-xl font-black uppercase tracking-tighter", isActive ? "text-[#0F172A]" : "text-[#0F172A]/40")}>{item.title}</span>
      </div>
    </div>
  );
}

export default StudentToolkitShowcase;
