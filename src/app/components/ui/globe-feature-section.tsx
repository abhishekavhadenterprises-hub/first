'use client';

import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { X, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';

const regions = [
  { id: 'london', title: 'LONDON', name: 'London', phi: 1.5, theta: 0.3 },
  { id: 'manchester', title: 'MANCHESTER', name: 'Manchester', phi: 1.52, theta: 0.33 },
  { id: 'birmingham', title: 'BIRMINGHAM', name: 'Birmingham', phi: 1.51, theta: 0.32 },
  { id: 'edinburgh', title: 'EDINBURGH', name: 'Edinburgh', phi: 1.53, theta: 0.36 },
  { id: 'glasgow', title: 'GLASGOW', name: 'Glasgow', phi: 1.54, theta: 0.37 },
  { id: 'cardiff', title: 'CARDIFF', name: 'Cardiff', phi: 1.49, theta: 0.31 },
];

export function GlobeFeatureSection() {
  const [activeRegion, setActiveRegion] = useState(regions[0]);
  const [showCard, setShowCard] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mapPhi = useRef(1.5);
  const mapTheta = useRef(0.3);

  useEffect(() => {
    let currentPhi = 0;
    let currentTheta = 0.4;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: (width || 800) * 2,
      height: (width || 800) * 2,
      phi: 1.5,
      theta: 0.3,
      dark: 0,
      diffuse: 1.5, // Increased diffuse for better visibility on white
      mapSamples: 22000,
      mapBrightness: 1.5,
      baseColor: [1, 1, 1],
      markerColor: [78 / 255, 166 / 255, 47 / 255],
      glowColor: [1, 1, 1],
      markers: [
        { location: [51.5074, -0.1278], size: 0.1 }, // London
        { location: [53.4808, -2.2426], size: 0.08 }, // Manchester
        { location: [52.4862, -1.8904], size: 0.08 }, // Birmingham
        { location: [55.9533, -3.1883], size: 0.09 }, // Edinburgh
        { location: [55.8642, -4.2518], size: 0.09 }, // Glasgow
        { location: [51.4816, -3.1791], size: 0.08 }, // Cardiff
      ],
      onRender: (state) => {
        state.phi = currentPhi + mapPhi.current;
        state.theta = currentTheta + mapTheta.current;
        currentPhi += 0.003;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const handleRegionClick = (region: typeof regions[0]) => {
    setActiveRegion(region);
    mapPhi.current = region.phi;
    mapTheta.current = region.theta;
    setShowCard(true);
  };

  return (
    <section
      className="relative w-full lg:w-[100vw] h-[90vh] lg:h-[100vh] lg:left-1/2 lg:ml-[-50vw] bg-[#FFFFFF] overflow-hidden font-['Outfit',sans-serif] selection:bg-[#4EA62F] selection:text-white z-50 text-black"
    >
      {/* Noise Grain Backdrop */}
      <div className="absolute inset-0 opacity-[0.05] z-[200] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http:/www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />



      {/* Region Selector - SOLID VISIBILITY */}
      <aside className="absolute left-[6vw] top-1/2 -translate-y-1/2 z-[500]">
        <ul className="list-none p-0 flex flex-col gap-6 lg:gap-10 font-[900]">
          {regions.map((region) => (
            <li
              key={region.id}
              onClick={() => handleRegionClick(region)}
              className={cn(
                "text-[13px] lg:text-[15px] uppercase cursor-pointer transition-all duration-500 tracking-[0.3em]",
                activeRegion.id === region.id ? "text-[#4EA62F] lg:translate-x-[25px] scale-110" : "text-black/50 hover:text-black"
              )}
            >
              {region.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* PERSPECTIVE GLOBE ENGINE - Darkened for better presence on White */}
      <div className="absolute left-[-20vw] lg:left-[-15vw] bottom-[-20vh] w-[130vh] h-[130vh] z-10 pointer-events-none opacity-[0.65]">
        <canvas
          ref={canvasRef}
          className="w-full h-full opacity-0 animate-fade-in"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="absolute inset-0 rounded-full border-[3px] border-[#4EA62F]/[0.15] shadow-[0_0_150px_rgba(78,166,47,0.1)] scale-[0.82] pointer-events-none" />
      </div>

      {/* PREMIUM HORIZONTAL CARD - HIGH DENSITY COLOURS */}
      <AnimatePresence>
        {showCard && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: {
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              },
              exit: {
                opacity: 0,
                scale: 0.9,
                y: 20,
                filter: 'blur(10px)',
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            className="absolute left-[340px] lg:left-[450px] bottom-[100px] w-[500px] lg:w-[600px] bg-[#C7EABB] rounded-[2.5rem] z-[600] shadow-[0_60px_150px_rgba(0,0,0,0.2)] overflow-hidden border border-white/20 backdrop-blur-md"
          >
            <div className="flex justify-between items-center px-10 pt-12 pb-8">
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <span className="text-[11px] font-black uppercase tracking-[0.5em] text-black/60 mb-2 block italic">Strategic Location Hub</span>
                <h4 className="text-black text-3xl lg:text-4xl font-[900] m-0 tracking-[-0.06em] uppercase leading-none">{activeRegion.name}</h4>
              </motion.div>
              <button onClick={() => setShowCard(false)} className="w-14 h-14 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-all hover:rotate-90">
                <X className="w-6 h-6 text-black" />
              </button>
            </div>

            <div className="px-10 pb-12 flex gap-12">
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    transition: { type: 'spring', damping: 15 }
                  }
                }}
                className="w-[180px] lg:w-[240px] h-[160px] lg:h-[200px] rounded-3xl overflow-hidden shadow-2xl shrink-0 border-8 border-white group relative"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  alt="Operations"
                />
              </motion.div>

              <div className="flex flex-col justify-between py-2">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 text-[11px] font-black text-black uppercase tracking-widest">
                    <ShieldCheck className="w-5 h-5 text-[#4EA62F]" />
                    <span>Operations Verified</span>
                  </div>
                  <p className="text-black text-lg lg:text-xl font-bold leading-tight tracking-tight italic">
                    Managing elite hubs with rapid-response localized staff.
                  </p>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                  }}
                  className="flex items-center justify-between border-t border-black/[0.1] pt-8"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-black/80" />
                    <span className="text-[11px] font-black text-black/80 uppercase tracking-widest">ID: {activeRegion.id.toUpperCase()}</span>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-xl hover:bg-[#4EA62F] transition-all cursor-pointer group/btn overflow-hidden relative isolate"
                  >
                    <ArrowUpRight className="w-6 h-6 text-[#C7EABB] group-hover/btn:text-white transition-colors relative z-20" />
                    <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 z-10" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO Content - ULTIMATE VISIBILITY */}
      <section className="absolute right-0 top-[18%] text-right z-[5] pr-[8vw] pointer-events-none max-w-[95vw]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRegion.id}
            initial={{ opacity: 0, x: 100, filter: 'blur(20px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -100, filter: 'blur(20px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="text-[11vw] font-[900] leading-[0.7] m-0 tracking-[-0.08em] text-black/40 whitespace-nowrap uppercase italic"
              dangerouslySetInnerHTML={{ __html: activeRegion.title }}
            />
            <div className="flex flex-col items-end mt-14 pr-4">
              <span className="text-[14px] font-black uppercase tracking-[0.6em] text-[#4EA62F] mb-8">World-Wide Global Presence</span>
              <p className="text-black max-w-[480px] leading-[1.4] text-2xl font-[700] uppercase tracking-tighter italic">
                Leading <span className="bg-[#4EA62F] text-white px-3 py-1 inline-block">Tactical Strategy</span> across multiple nations with rapid response staff.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Global Tactical Legend - SOLID BLACK */}
      <div className="absolute bottom-[60px] left-[6vw] z-[500] text-[11px] text-black flex flex-col gap-4 font-black uppercase tracking-[0.4em]">
        <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-[#4EA62F] mr-4 shadow-xl" /> Strategic Hub</div>
        <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-[#C7EABB] mr-4 shadow-xl border border-black/10" /> Partner UNIV</div>
        <div className="flex items-center"><span className="w-8 h-px bg-black mr-4" /> staff coordination</div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 0.65; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}

export default GlobeFeatureSection;
