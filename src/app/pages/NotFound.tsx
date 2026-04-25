'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Link } from 'react-router';
import { 
  ArrowLeft, Search, RefreshCw, Command, Activity, Layers
} from 'lucide-react';

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState('');
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const gridRotateX = useTransform(smoothY, [-500, 500], [10, -10]);
  const gridRotateY = useTransform(smoothX, [-500, 500], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main 
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] bg-[#FDFDFC] overflow-hidden flex flex-col items-center justify-center selection:bg-[#4EA62F]/10 isolate"
    >
      {/* 1. MINIMALIST GRID SYSTEM */}
      <div className="absolute inset-0 z-0 pointer-events-none perspective-[2000px]">
        <motion.div 
          style={{ rotateX: gridRotateX, rotateY: gridRotateY }}
          className="absolute inset-[-10%] opacity-[0.03]"
          style={{ 
            backgroundImage: `linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)`,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Dynamic Light Bloom */}
        <motion.div 
          style={{ x: useTransform(smoothX, [-500, 500], [50, -50]), y: useTransform(smoothY, [-500, 500], [50, -50]) }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(78,166,47,0.04)_0%,transparent_60%)]" 
        />
      </div>

      {/* 2. CORE NARRATIVE */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
        
        {/* MASSIVE 404 INDICATOR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="relative mb-4 lg:mb-0 select-none pointer-events-none"
        >
          <h1 className="text-[18rem] md:text-[28rem] lg:text-[40rem] font-[1000] tracking-[-0.08em] leading-none text-[#0F172A] opacity-[0.07] uppercase">
            404
          </h1>
          
          {/* Headline Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-12 lg:pt-24">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5, duration: 1 }}
            >
              <h2 className="text-6xl md:text-8xl lg:text-[11rem] font-[1000] tracking-[-0.05em] text-[#0F172A] leading-[0.85] uppercase">
                NOT ON <br />
                <span className="text-[#4EA62F] italic font-light lowercase tracking-[-0.04em]">the map.</span>
              </h2>
            </motion.div>
          </div>
        </motion.div>

        {/* Utility Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full max-w-2xl space-y-12"
        >
          <div className="space-y-4">
             <p className="text-black/40 text-lg lg:text-xl font-bold leading-tight tracking-tight max-w-xl mx-auto">
               The sector you requested is currently outside our synchronized global index. 
               Please re-verify your coordinates or re-sync with the primary node.
             </p>
          </div>

          {/* Premium Search Node */}
          <div className="relative group max-w-lg mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4EA62F]/20 to-transparent blur opacity-0 group-hover:opacity-100 transition duration-1000" />
            <div className="relative flex items-center bg-white border border-black/5 rounded-3xl p-2 shadow-sm">
              <div className="flex-1 px-6 flex items-center gap-4">
                <Search size={18} className="text-black/20" />
                <input 
                  type="text" 
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Enter Missing Protocol..."
                  className="w-full bg-transparent border-none focus:ring-0 text-sm font-bold placeholder:text-black/10 text-[#0F172A]"
                />
              </div>
              <button className="px-8 py-4 bg-[#0F172A] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#4EA62F] transition-all">
                Search
              </button>
            </div>
          </div>

          {/* Primary Action */}
          <div className="flex justify-center pt-4">
            <Link to="/">
              <motion.button 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-20 py-8 bg-[#0F172A] text-white rounded-[2.5rem] font-black text-[11px] uppercase tracking-[0.5em] shadow-[0_40px_80px_-15px_rgba(15,23,42,0.25)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#4EA62F] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                <span className="relative z-10 flex items-center gap-4">
                  <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-700 text-[#4EA62F]" />
                  Reconstruct Path
                </span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 3. PERIPHERAL TELEMETRY */}
      <div className="absolute bottom-12 left-12 flex items-center gap-6 opacity-30">
        <Command size={20} className="text-[#4EA62F]" />
        <div className="flex flex-col">
          <span className="text-[8px] font-black uppercase tracking-widest text-black/20">Active_Protocol</span>
          <span className="text-[10px] font-mono font-bold text-[#0F172A]">NODE_SYNC_ERR_404</span>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 flex flex-col items-end gap-3 opacity-30">
        <div className="flex items-center gap-4">
           <span className="text-[9px] font-black uppercase tracking-widest text-black/40">Network_Health</span>
           <div className="flex gap-1">
              {[1,2,3,4].map(i => <div key={i} className={`w-3 h-1 ${i < 4 ? 'bg-[#4EA62F]' : 'bg-red-500 animate-pulse'}`} />)}
           </div>
        </div>
        <div className="flex items-center gap-2">
           <Activity size={12} className="text-[#4EA62F]" />
           <span className="text-[8px] font-mono font-bold text-[#0F172A]">PACKET_LOSS_CRITICAL</span>
        </div>
      </div>

      <div className="absolute top-12 left-12 lg:flex hidden items-center gap-4 opacity-10">
        <Layers size={20} />
        <span className="text-[9px] font-black uppercase tracking-[0.8em]">Index_Recovery_Active</span>
      </div>

    </main>
  );
}
