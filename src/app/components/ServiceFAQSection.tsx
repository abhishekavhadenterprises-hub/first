'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus, HelpCircle, Sparkles } from 'lucide-react';
import { serviceFAQData } from '@/app/data/faqData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceFAQSectionProps {
  serviceId?: string;
}

export function ServiceFAQSection({ serviceId }: ServiceFAQSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const data = (serviceId && serviceFAQData[serviceId]) || serviceFAQData['sim-cards'];
  if (!data) return null;

  useGSAP(() => {
    if (!containerRef.current || !isMounted) return;

    // Header reveal
    gsap.from(".faq-header-item", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      }
    });

    // Accordion items reveal
    gsap.from(".faq-item-premium", {
      opacity: 0,
      x: -20,
      stagger: 0.05,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".faq-list-container",
        start: "top 85%",
      }
    });

  }, { scope: containerRef, dependencies: [isMounted, data] });

  if (!isMounted) return <div className="h-[600px] w-full bg-[#fcfcfc]" />;

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#fcfcfc] py-24 lg:py-40 overflow-hidden"
    >
      {/* Premium Background Orbs */}
      <div className="absolute top-[10%] right-[-5%] w-[40vw] h-[40vw] bg-[#4EA62F]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[0%] left-[-5%] w-[30vw] h-[30vw] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">

        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">

          {/* Left Side: Sidebar Header */}
          <div className="w-full lg:w-1/3">
            <div className="faq-header-item flex items-center gap-3 mb-8 px-5 py-2 bg-white shadow-sm border border-black/5 rounded-full w-fit">
              <HelpCircle className="w-4 h-4 text-[#4EA62F]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Knowledge Base</span>
            </div>

            <h2 className="faq-header-item text-4xl lg:text-7xl font-[1000] text-[#0F172A] leading-[0.85] tracking-tighter uppercase mb-10">
              {data.title}
            </h2>

            <p className="faq-header-item text-xl text-black/40 font-bold leading-relaxed mb-12 max-w-sm">
              Transparent answers to clarify your student journey and optimize your UK experience.
            </p>

            <div className="faq-header-item p-10 bg-white border border-black/[0.04] rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]">
              <Sparkles className="w-8 h-8 text-[#4EA62F] mb-6" />
              <h4 className="text-xl font-black text-[#0F172A] uppercase tracking-tighter mb-4">Need personalized support?</h4>
              <p className="text-sm font-bold text-black/40 mb-8">Our institutional partners are available for a detailed consultation.</p>
              <button className="relative w-full h-16 bg-white text-[#0F172A] rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] overflow-hidden group shadow-xl shadow-white/5 transition-all">
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">Contact Consultant</span>
                <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-0" />
              </button>
            </div>
          </div>

          {/* Right Side: Accordion List */}
          <div className="w-full lg:w-2/3 faq-list-container">
            <div className="space-y-4">
              {data.items.map((item, idx) => (
                <div
                  key={idx}
                  className="faq-item-premium group"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className={`w-full text-left p-10 rounded-[2.5rem] border transition-all duration-700 flex items-center justify-between gap-6 ${openIndex === idx ? 'bg-white border-[#4EA62F]/20 shadow-xl' : 'bg-white border-black/[0.04] hover:border-[#4EA62F]/30 hover:shadow-lg'}`}
                  >
                    <span className={`text-lg lg:text-2xl font-[1000] uppercase tracking-tighter transition-all duration-500 ${openIndex === idx ? 'text-[#0F172A]' : 'text-black/60 group-hover:text-[#0F172A]'}`}>
                      {item.question}
                    </span>
                    <div className={`w-12 h-12 rounded-full border border-black/5 flex items-center justify-center transition-all duration-700 ${openIndex === idx ? 'bg-[#4EA62F] border-[#4EA62F] rotate-180 shadow-[0_0_30px_rgba(78,166,47,0.3)]' : 'bg-gray-50'}`}>
                      {openIndex === idx ? <Minus className="w-5 h-5 text-white" /> : <Plus className="w-5 h-5 text-black/20 group-hover:text-[#4EA62F]" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        key={`service-faq-content-${idx}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="p-10 text-lg lg:text-xl text-black/50 font-bold leading-relaxed tracking-tight border-t border-black/[0.01]">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
