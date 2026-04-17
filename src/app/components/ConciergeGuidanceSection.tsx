'use client';

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { Target, Globe, Briefcase, ArrowUpRight } from 'lucide-react';

const supportCards = [
  {
    id: 'strategy',
    icon: Target,
    title: 'Strategic Entry',
    description: 'Personalized roadmap mapping your academic profile to global targets.',
  },
  {
    id: 'navigation',
    icon: Globe,
    title: 'Visa Navigation',
    description: 'Expert coordination of complex visa requirements and local compliance.',
  },
  {
    id: 'arrival',
    icon: Briefcase,
    title: 'Arrival Logic',
    description: 'Structured support for housing, banking, and cultural orientation.',
  },
];

export function ConciergeGuidanceSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yRaw = useTransform(scrollYProgress, [0, 0.45], [50, 0]);
  const y = useSpring(yRaw, { stiffness: 55, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const display = hoveredCard !== null ? hoveredCard : activeCard;

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white py-28 lg:py-40 border-t border-black/[0.06] font-['Outfit',sans-serif]"
    >
      {/* Subtle grid texture (matches HowToGetStarted) */}
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
          style={{ opacity, y }}
          className="flex items-end justify-between mb-16 lg:mb-20"
        >
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-5 h-px bg-[#4EA62F]" />
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#4EA62F]">
                Elite Strategic Support
              </span>
            </div>
            <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-[1000] text-[#0F172A] leading-[0.88] tracking-[-0.04em] uppercase">
              Strategic.<br />
              <span className="text-[#4EA62F] italic font-light lowercase">Personalized.</span>
            </h2>
          </div>

          {/* Live card indicator */}
          <div className="hidden lg:block text-right">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-black/20 mb-1">Focus</p>
            <p className="text-5xl font-[1000] text-black/[0.06] leading-none tabular-nums">
              {display !== null ? `0${display + 1}` : '—'}
            </p>
          </div>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* LEFT — descriptor */}
          <motion.div style={{ opacity, y }}>
            <p className="text-base lg:text-lg text-black/40 font-bold leading-[1.5] tracking-tight max-w-[420px]">
              We handle the complex coordination of your study abroad journey so you can
              focus on academic success.
            </p>
          </motion.div>

          {/* RIGHT — card rows + CTA */}
          <div className="flex flex-col">

            {/* Service rows */}
            <div className="flex flex-col divide-y divide-black/[0.06]">
              {supportCards.map((card, i) => {
                const isActive = display === i;
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={`group relative flex items-start gap-6 py-8 px-6 rounded-2xl cursor-pointer select-none transition-all duration-500 ${
                      isActive ? 'bg-[#0F172A]' : 'bg-transparent hover:bg-black/[0.02]'
                    }`}
                    onHoverStart={() => setHoveredCard(i)}
                    onHoverEnd={() => setHoveredCard(null)}
                    onClick={() => setActiveCard(activeCard === i ? null : i)}
                  >
                    {/* Step number */}
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
                      <div className="flex items-center justify-between gap-4">
                        <h3
                          className={`text-[15px] lg:text-[17px] font-black uppercase tracking-[-0.02em] leading-tight transition-colors duration-400 ${
                            isActive ? 'text-white' : 'text-[#0F172A]'
                          }`}
                        >
                          {card.title}
                        </h3>

                        {/* Icon circle */}
                        <div
                          className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-500 ${
                            isActive
                              ? 'bg-[#4EA62F] border-[#4EA62F] rotate-0'
                              : 'border-black/10 rotate-[-135deg] group-hover:rotate-0 group-hover:border-black/30'
                          }`}
                        >
                          <Icon
                            className={`w-3 h-3 transition-colors ${
                              isActive ? 'text-white' : 'text-black/30'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Description — animates open on active */}
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
                            {card.description}
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
            </div>

            {/* CTA */}
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
                onClick={() => console.log('Access Concierge clicked')}
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#0F172A] text-white rounded-xl font-black uppercase tracking-[0.2em] text-[9px] hover:bg-[#4EA62F] transition-colors duration-500 group/cta"
              >
                Access Concierge
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform duration-300" />
              </motion.button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
