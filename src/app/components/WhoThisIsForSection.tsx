'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { GraduationCap, Briefcase, Zap, Target, CheckCircle2, ArrowRight } from 'lucide-react';

const targets = [
  {
    icon: <GraduationCap className="w-16 h-16" />,
    title: 'The Explorer',
    role: 'Student Journey',
    description: 'Students planning to study abroad who need clarity on the global landscape and a structured strategy.',
    highlights: ['Strategy Mapping', 'Uni Matching', 'Path Clarity'],
    color: '#D4EFD0'
  },
  {
    icon: <Target className="w-16 h-16" />,
    title: 'The Decider',
    role: 'Comparison Phase',
    description: 'Students comparing multiple top-tier destinations who require data-driven support for final choices.',
    highlights: ['ROI Analysis', 'Outcome Comparison', 'Support Desk'],
    color: '#E8F5E9'
  },
  {
    icon: <Zap className="w-16 h-16" />,
    title: 'The Visionary',
    role: 'Elite Success',
    description: 'Students seeking high-touch, structured guidance for world-class outcomes and direct placement.',
    highlights: ['Concierge Access', 'Direct Placement', 'Elite Mentorship'],
    color: '#F0F4EF'
  }
];

export function WhoThisIsForSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Slowed down to 400vh for premium readability
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  // Mathematically derived to center the 3rd card exactly:
  // (Padding + 2.5*CardWidth + 2*Gap) - 50vw 
  // For the current track, -60% is much closer to the true center than -66%.
  const xTranslate = useTransform(
    smoothProgress,
    [0, 0.45, 0.9, 1],
    ["0%", "-30%", "-60%", "-60%"]
  );

  // Background Ambience Morphing
  const bgColor = useTransform(
    smoothProgress,
    [0.1, 0.4, 0.7, 1],
    ["#FFFFFF", "#C7EABB", "#E8F5E9", "#F0F4EF"]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[450vh] bg-white antialiased overflow-visible z-[50]"
    >
      <motion.div
        style={{ backgroundColor: bgColor }}
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center"
      >
        {/* Kinetic Background Ticker */}
        <div className="absolute inset-x-0 top-[20%] opacity-[0.03] select-none pointer-events-none z-0">
          <h2 className="text-[15vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap animate-ticker">THE AMBITIOUS • THE AMBITIOUS • THE AMBITIOUS •</h2>
        </div>

        {/* Section Header */}
        <div className="absolute top-[12vh] left-6 lg:left-20 z-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-[#4EA62F]" />
            <span className="text-[11px] font-[900] uppercase tracking-[0.5em] text-[#4EA62F]/80">Who is this for</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[48px] lg:text-[90px] font-black leading-[0.8] tracking-[-0.07em] text-[#0F172A] uppercase"
          >
            THE <span className="text-[#4EA62F]">FIT.</span>
          </motion.h2>
        </div>

        {/* The Horizontal Track - Precise centering logic */}
        <div className="relative w-full z-10 px-0">
          <motion.div
            style={{ x: xTranslate }}
            className="flex gap-16 lg:gap-32 w-max px-[20vw]"
          >
            {targets.map((target, i) => (
              <WhoCard key={target.title} target={target} index={i} total={targets.length} scrollYProgress={smoothProgress} />
            ))}
          </motion.div>
        </div>

        {/* Visual Progress Ribbon */}
        <div className="absolute bottom-16 left-6 lg:left-20 flex items-center gap-6 z-30">
          {targets.map((_, i) => (
            <ProgressRibbon key={i} index={i} total={targets.length} scrollYProgress={smoothProgress} />
          ))}
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 60s linear infinite;
        }
      `}} />
    </section>
  );
}

function WhoCard({ target, index, total, scrollYProgress }: any) {
  // Intra-card parallax (Scale and Skew as they pass center)
  // For 3 cards centered at 0, 0.5, 1
  const cardActivePoint = index / (total - 1);

  const contentSkew = useTransform(scrollYProgress, [cardActivePoint - 0.25, cardActivePoint, cardActivePoint + 0.25], [5, 0, -5]);
  const contentScale = useTransform(scrollYProgress, [cardActivePoint - 0.25, cardActivePoint, cardActivePoint + 0.25], [0.95, 1, 0.95]);

  return (
    <motion.div
      style={{ skewX: contentSkew, scale: contentScale }}
      className="w-[85vw] md:w-[70vw] lg:w-[60vw] h-[60vh] lg:h-[65vh] rounded-[4rem] bg-white border border-black/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] p-12 lg:p-24 relative flex flex-col items-start overflow-hidden group"
    >
      <div className="relative z-10 w-full h-full flex flex-col">
        <div className="flex justify-between items-start mb-auto">
          <div className="w-24 h-24 rounded-[2.5rem] bg-[#4EA62F]/5 flex items-center justify-center text-[#4EA62F] group-hover:bg-[#4EA62F] group-hover:text-white transition-all duration-700">
            {target.icon}
          </div>
          <span className="text-[120px] font-black text-black/[0.04] leading-none select-none absolute top-[-30px] right-[-20px]">0{index + 1}</span>
        </div>

        <div className="mb-10">
          <span className="text-[12px] font-black tracking-[0.3em] text-[#4EA62F] uppercase mb-4 block">{target.role}</span>
          <h3 className="text-[40px] lg:text-[64px] font-black text-[#0F172A] leading-[0.85] tracking-tighter uppercase mb-6">{target.title}</h3>
          <p className="text-lg lg:text-2xl text-[#0F172A]/70 font-semibold leading-tight max-w-[600px]">{target.description}</p>
        </div>

        <div className="flex flex-wrap gap-4 mt-auto">
          {target.highlights.map(h => (
            <div key={h} className="flex items-center gap-4 px-8 py-5 bg-[#FAFBFC] rounded-3xl border border-black/5 group-hover:border-[#4EA62F]/30 transition-all">
              <CheckCircle2 className="w-6 h-6 text-[#4EA62F]" />
              <span className="text-[11px] font-black uppercase tracking-widest text-[#0F172A]">{h}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProgressRibbon({ index, total, scrollYProgress }: any) {
  const start = index / total;
  const end = (index + 1) / total;

  const width = useTransform(scrollYProgress, [start, end], [12, 80]);
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
  const color = useTransform(scrollYProgress, [start, end], ["#CBD5E1", "#4EA62F"]);

  return (
    <motion.div
      className="h-1 rounded-full px-2"
      style={{ width, opacity, backgroundColor: color }}
    />
  );
}
