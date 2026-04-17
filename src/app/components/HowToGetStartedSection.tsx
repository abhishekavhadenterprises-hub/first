'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { howToGetStartedSectionData } from '@/app/data/howToGetStartedData';

export function HowToGetStartedSection({ serviceId }: { serviceId?: string }) {
  const [isMounted, setIsMounted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const display = hoveredStep !== null ? hoveredStep : activeStep;

  const data =
    (serviceId && howToGetStartedSectionData[serviceId]) ||
    howToGetStartedSectionData['sim-cards'];

  if (!isMounted || !data) return <div className="h-[600px] w-full bg-white" />;

  return (
    <section className="relative w-full bg-white overflow-hidden py-24 lg:py-32">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">

        {/* ── Section header ── */}
        <motion.div
          className="flex items-end justify-between mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-5 h-px bg-[#4EA62F]" />
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#4EA62F]">
                Guided Process
              </span>
            </div>
            <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-[1000] text-[#0F172A] leading-[0.88] tracking-[-0.04em] uppercase">
              {data.title}
            </h2>
          </div>

          {/* Live step indicator */}
          <div className="hidden lg:block text-right">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-black/20 mb-1">
              Step
            </p>
            <p className="text-5xl font-[1000] text-black/[0.06] leading-none tabular-nums">
              0{display + 1}
            </p>
          </div>
        </motion.div>

        {/* ── Main split layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_480px] gap-6 lg:gap-8 items-start">

          {/* LEFT — step list */}
          <div className="flex flex-col divide-y divide-black/[0.06]">
            {data.steps.map((step, i) => {
              const isActive = display === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative flex items-start gap-6 py-8 lg:py-9 px-6 rounded-2xl cursor-pointer select-none transition-all duration-500 ${
                    isActive ? 'bg-[#0F172A]' : 'bg-transparent hover:bg-black/[0.02]'
                  }`}
                  onHoverStart={() => setHoveredStep(i)}
                  onHoverEnd={() => setHoveredStep(null)}
                  onClick={() => setActiveStep(i)}
                >
                  {/* Number */}
                  <div className="flex-shrink-0 pt-0.5">
                    <span
                      className={`text-[11px] font-black tabular-nums tracking-widest transition-colors duration-400 ${
                        isActive ? 'text-[#4EA62F]' : 'text-black/20 group-hover:text-black/40'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4 mb-0">
                      <h3
                        className={`text-[15px] lg:text-[17px] font-black uppercase tracking-[-0.02em] leading-tight transition-colors duration-400 ${
                          isActive ? 'text-white' : 'text-[#0F172A]'
                        }`}
                      >
                        {step.title}
                      </h3>

                      {/* Arrow */}
                      <div
                        className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-500 ${
                          isActive
                            ? 'bg-[#4EA62F] border-[#4EA62F] rotate-0'
                            : 'border-black/10 rotate-[-135deg] group-hover:rotate-0 group-hover:border-black/30'
                        }`}
                      >
                        <ArrowUpRight
                          className={`w-3 h-3 transition-colors ${
                            isActive ? 'text-white' : 'text-black/30'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Description — animates open */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          key="desc"
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className="text-white/50 text-sm font-medium leading-relaxed overflow-hidden"
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {/* Progress bar */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          key="bar"
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          exit={{ opacity: 0, scaleX: 0 }}
                          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                          className="origin-left h-px bg-[#4EA62F]/40 mt-5"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA row */}
            <motion.div
              className="pt-8 px-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#0F172A] text-white rounded-xl font-black uppercase tracking-[0.2em] text-[9px] hover:bg-[#4EA62F] transition-colors duration-500 group/cta"
              >
                Consult an Expert
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT — sticky image panel */}
          <div className="hidden lg:block lg:sticky lg:top-28">
            <motion.div
              className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-[#0F172A]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Cross-fading images */}
              <AnimatePresence mode="crossfade">
                <motion.img
                  key={data.steps[display].image}
                  src={data.steps[display].image}
                  alt={data.steps[display].title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={display}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.5em] text-[#4EA62F] mb-2">
                      Phase 0{display + 1}
                    </p>
                    <h4 className="text-white font-black uppercase text-xl tracking-tighter leading-tight">
                      {data.steps[display].title}
                    </h4>
                  </motion.div>
                </AnimatePresence>

                {/* Step dots */}
                <div className="flex items-center gap-2 mt-5">
                  {data.steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`transition-all duration-500 rounded-full ${
                        display === i
                          ? 'w-5 h-1.5 bg-[#4EA62F]'
                          : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Corner badge */}
              <div className="absolute top-5 right-5 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full">
                <span className="text-[8px] font-black text-white/70 uppercase tracking-widest">
                  {data.steps.length} Steps
                </span>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
