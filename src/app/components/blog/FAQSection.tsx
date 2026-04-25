'use client';

import { useState } from 'react';
import { Plus, Minus, HelpCircle, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
  category?: string;
}

export function FAQSection({ 
  faqs = [], 
  title = "Frequently Asked Questions", 
  subtitle = "Everything you need to know about our services and process.",
  category = "KNOWLEDGE BASE"
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-[#FDFDFC]">
      {/* Cinematic Background Accents */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#4EA62F]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Side: Editorial Header */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-black/[0.04] rounded-full shadow-sm"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#4EA62F]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">{category}</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-[1000] text-[#0F172A] leading-[0.95] tracking-tighter uppercase"
            >
              {title}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-black/40 font-bold leading-relaxed max-w-md"
            >
              {subtitle}
            </motion.p>

            {/* Premium CTA Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 lg:p-10 bg-white border border-black/[0.04] rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Sparkles className="w-16 h-16 text-[#4EA62F]" />
              </div>
              
              <h4 className="text-xl font-black text-[#0F172A] uppercase tracking-tighter mb-4 flex items-center gap-3">
                Still have questions?
              </h4>
              <p className="text-sm font-bold text-black/40 mb-8 max-w-[240px]">
                Our dedicated student success team is available 24/7 to guide you.
              </p>
              
              <motion.button 
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.95 }}
                className="group/btn flex items-center justify-between w-full h-16 bg-[#0F172A] text-white rounded-2xl transition-all duration-500 overflow-hidden relative shadow-xl shadow-black/5"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] relative z-20 px-8 group-hover/btn:text-white transition-colors">Contact Specialist</span>
                <div className="relative z-20 mr-4 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-[#0F172A] transition-all duration-500">
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </div>
                {/* Premium Background Slide */}
                <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-700 z-10" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side: Accordion Grid */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "group rounded-[2.5rem] border transition-all duration-700 overflow-hidden",
                    openIndex === index 
                      ? "bg-white border-[#4EA62F]/20 shadow-[0_20px_50px_rgba(78,166,47,0.08)]" 
                      : "bg-white border-black/[0.04] hover:border-[#4EA62F]/30 hover:shadow-lg"
                  )}
                >
                  <motion.button
                    whileHover={{ x: 4 }}
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-8 lg:p-10 flex items-center justify-between text-left gap-8 relative z-10"
                  >
                    <span className={cn(
                      "text-lg lg:text-2xl font-[1000] uppercase tracking-tighter transition-all duration-500 leading-tight",
                      openIndex === index ? "text-[#0F172A]" : "text-black/60 group-hover:text-[#0F172A]"
                    )}>
                      {faq.question}
                    </span>
                    <motion.div 
                      animate={{ 
                        rotate: openIndex === index ? 180 : 0,
                        backgroundColor: openIndex === index ? "#4EA62F" : "rgba(255, 255, 255, 0.5)",
                        borderColor: openIndex === index ? "#4EA62F" : "rgba(0, 0, 0, 0.05)"
                      }}
                      className={cn(
                        "w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 flex-shrink-0 shadow-sm",
                        openIndex === index ? "shadow-[0_0_30px_rgba(78,166,47,0.3)]" : ""
                      )}
                    >
                      {openIndex === index 
                        ? <Minus className="w-5 h-5 text-white" /> 
                        : <Plus className="w-5 h-5 text-black/20 group-hover:text-[#4EA62F]" />
                      }
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        key={`faq-content-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-8 pb-10 lg:px-10 lg:pb-12 border-t border-black/[0.02]">
                          <p className="text-lg lg:text-xl text-black/50 font-bold leading-relaxed tracking-tight max-w-2xl pt-8">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}
