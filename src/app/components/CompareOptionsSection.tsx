'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, DollarSign, Globe, Award, GraduationCap, TrendingUp, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const comparisonData = [
  {
    id: 'usa',
    name: 'United States',
    initial: 'U',
    tagline: 'Leading Global Research',
    tuition: '$45K+',
    acceptance: '8.5%',
    workRights: '3 Years OPT',
    salary: '$82K+',
    color: '#4EA62F',
    features: ['Ivy League Pedigree', 'STEM Extension', 'Global HQ Hubs']
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    initial: 'K',
    tagline: 'Academic Heritage',
    tuition: '£28K+',
    acceptance: '16%',
    workRights: '2 Years Graduate',
    salary: '£38K+',
    color: '#4EA62F',
    features: ['1-Year Masters', 'Global Recognition', 'Cultural Capital']
  },
  {
    id: 'canada',
    name: 'Canada',
    initial: 'C',
    tagline: 'Pathway to Residency',
    tuition: 'C$35K+',
    acceptance: '42%',
    workRights: '3 Years PGWP',
    salary: 'C$65K+',
    color: '#4EA62F',
    features: ['Immigration Focus', 'Safe Environment', 'Lower Living Costs']
  }
];

export function CompareOptionsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section className="relative w-full bg-background min-h-screen flex flex-col pt-32 pb-20 overflow-hidden font-['Outfit',sans-serif]">

      {/* Cinematic Header */}
      <div className="px-6 lg:px-20 mb-20 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-[#4EA62F] mb-6"
          >
            <TrendingUp className="w-5 h-5" />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Precision Comparison</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[56px] md:text-[80px] lg:text-[110px] font-bold leading-[0.9] tracking-[-0.04em] text-foreground"
            >
              Compare <br />
              <span className="text-[#4EA62F]">Outcomes.</span>
            </motion.h2>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/compare')}
              className="group flex flex-col items-end gap-4"
            >
              <div className="flex items-center gap-6 px-10 py-6 rounded-full bg-foreground text-background font-bold text-lg hover:bg-[#4EA62F] transition-all duration-500">
                <span>View Full Matrix</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
              <p className="text-sm text-muted-foreground font-medium pr-4">32 Countries • 500+ Universities</p>
            </motion.button>
          </div>
        </div>
      </div>

      {/* "Award-Winning" Expansion Comparison */}
      <div className="flex-1 flex flex-col lg:flex-row w-full h-full min-h-[600px] border-t border-foreground/5">
        {comparisonData.map((item, index) => (
          <ComparisonColumn
            key={item.id}
            item={item}
            isHovered={hoveredIndex === index}
            onHover={() => setHoveredIndex(index)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>

    </section>
  );
}

function ComparisonColumn({ item, isHovered, onHover, onLeave }: any) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      animate={{
        flex: isHovered ? 2.8 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 70,
        damping: 18,
        mass: 1.2,
        restDelta: 0.001
      }}
      className="relative flex-1 group flex flex-col p-10 lg:p-16 border-r border-foreground/5 overflow-hidden"
    >
      {/* Background Kinetic Character */}
      <motion.div
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.08 : 0.03,
          y: isHovered ? -50 : 0
        }}
        className="absolute inset-0 flex items-center justify-center font-black text-[300px] lg:text-[500px] pointer-events-none select-none text-foreground mix-blend-difference"
      >
        {item.initial}
      </motion.div>

      {/* Top Meta & Branding */}
      <div className="relative z-10 mb-auto">
        <motion.p
          animate={{ opacity: isHovered ? 1 : 0.4 }}
          className="text-[#4EA62F] text-[10px] font-black uppercase tracking-[0.5em] mb-4"
        >
          {item.tagline}
        </motion.p>
        <h3 className={`font-bold transition-all duration-700 leading-[0.9] text-foreground ${isHovered ? 'text-5xl lg:text-7xl' : 'text-3xl lg:text-4xl'
          }`}>
          {item.name}
        </h3>
      </div>

      {/* Centered Large Stats (Visible on Hover) or Minimal Stats (Visible on Unhover) */}
      <div className="flex-1 flex flex-col justify-center relative z-10 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          {isHovered ? (
            <motion.div
              key="full-stats"
              initial={{ opacity: 0, y: 30, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, scale: 0.95, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-[600px]"
            >
              <ColumnStat icon={<DollarSign />} label="Avg. Tuition" value={item.tuition} />
              <ColumnStat icon={<Award />} label="Top Acceptance" value={item.acceptance} />
              <ColumnStat icon={<Globe />} label="Work Post-Study" value={item.workRights} />
              <ColumnStat icon={<Building2 />} label="Starting Range" value={item.salary} />
            </motion.div>
          ) : (
            <motion.div
              key="minimal-stats"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="flex flex-col gap-8"
            >
               <div className="flex flex-col gap-6 border-l border-black/10 pl-6">
                  <div className="group/stat">
                     <span className="text-[8px] font-black uppercase tracking-[0.4em] text-black/40 group-hover/stat:text-[#4EA62F] transition-colors">Avg. Tuition</span>
                     <p className="text-xl font-bold text-black group-hover/stat:translate-x-1 transition-transform">{item.tuition}</p>
                  </div>
                  <div className="group/stat">
                     <span className="text-[8px] font-black uppercase tracking-[0.4em] text-black/40 group-hover/stat:text-[#4EA62F] transition-colors">Yield Range</span>
                     <p className="text-xl font-bold text-black group-hover/stat:translate-x-1 transition-transform">{item.salary}</p>
                  </div>
                  <div className="group/stat">
                     <span className="text-[8px] font-black uppercase tracking-[0.4em] text-black/40 group-hover/stat:text-[#4EA62F] transition-colors">Acceptance</span>
                     <p className="text-xl font-bold text-black group-hover/stat:translate-x-1 transition-transform">{item.acceptance}</p>
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Features & Brand Promise */}
      <div className="relative z-10 mt-12">
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex flex-wrap gap-3"
            >
              {item.features.map((f: string, i: number) => (
                <motion.span
                  key={f}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="px-4 py-2 rounded-lg bg-foreground/5 border border-foreground/10 text-foreground text-[11px] font-bold uppercase tracking-widest"
                >
                  {f}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Active Glow */}
      <motion.div
        animate={{ opacity: isHovered ? 0.05 : 0 }}
        className="absolute inset-0 bg-[#4EA62F] pointer-events-none"
      />
    </motion.div>
  );
}

function ColumnStat({ icon, label, value }: any) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 text-[#4EA62F]">
        <div className="opacity-60">{icon}</div>
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{label}</span>
      </div>
      <p className="text-4xl lg:text-5xl font-bold text-foreground tracking-tighter tabular-nums">{value}</p>
    </div>
  );
}
