'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Footer } from '@/app/components/Footer';
import { 
  FileText, 
  ShieldCheck, 
  Scale, 
  AlertCircle, 
  ArrowRight, 
  ChevronRight, 
  Globe, 
  UserCheck, 
  Lock, 
  MessageSquare, 
  Sparkles, 
  Activity,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router';

const TechnicalBadge = ({ text, className = "" }: { text: string; className?: string }) => (
   <div className={`inline-flex items-center gap-3 px-5 py-2 bg-white/50 backdrop-blur-xl border border-black/5 rounded-full ${className}`}>
      <div className="w-1.5 h-1.5 rounded-full bg-[#4EA62F] animate-pulse" />
      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40 font-mono italic">
         {text}
      </span>
   </div>
);

export default function Terms() {
  const lastUpdated = "April 24, 2026";

  const sections = [
    { id: 'acceptance', title: 'Service Acceptance', icon: UserCheck, desc: 'Operational framework initiation.' },
    { id: 'eligibility', title: 'Eligibility Protocol', icon: ShieldCheck, desc: 'User validation standards.' },
    { id: 'intellectual', title: 'Intellectual Assets', icon: Scale, desc: 'Proprietary platform protection.' },
    { id: 'conduct', title: 'Platform Conduct', icon: AlertCircle, desc: 'Ecosystem engagement rules.' },
    { id: 'ai-usage', title: 'AI Intelligence', icon: MessageSquare, desc: 'Neural guidance operations.' },
    { id: 'liability', title: 'Liability Framework', icon: Lock, desc: 'Accountability boundaries.' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFC] selection:bg-[#4EA62F] selection:text-white font-['Outfit',sans-serif] overflow-x-hidden">
      {/* ── CINEMATIC AMBIENT BACKGROUND ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#4EA62F]/5 rounded-full blur-[150px] opacity-40" />
        <div className="absolute bottom-0 right-0 p-12 opacity-[0.02]">
           <div className="flex flex-col gap-4 items-end">
              <span className="text-[14px] font-black uppercase tracking-[1em] text-black">LEGAL_PROTOCOL v2.04</span>
              <div className="w-96 h-px bg-black" />
           </div>
        </div>
      </div>

      {/* ── TITANIC HERO (CENTERED & ONE LINE) ── */}
      <header className="relative pt-48 pb-24 px-6 z-10 border-b border-black/5">
        <div className="container mx-auto flex flex-col items-center text-center">
          <TechnicalBadge text="Legal Framework" className="mb-10" />
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[4rem] md:text-[6.5rem] lg:text-[7.5rem] font-black text-[#0F172A] uppercase tracking-[-0.06em] leading-none mb-12 whitespace-nowrap"
          >
            Terms <span className="text-[#4EA62F] italic font-light lowercase px-2">&</span> Conditions.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <p className="max-w-2xl text-xl md:text-2xl text-black/40 font-bold leading-tight tracking-tighter">
              Defining the operational framework for global student excellence. <br />
              <span className="text-[#0F172A]">Architecture of engagement.</span>
            </p>
            <span className="text-[9px] font-black uppercase tracking-[0.6em] text-black/20">Protocol Updated: {lastUpdated}</span>
          </motion.div>
        </div>
      </header>

      {/* ── NARRATIVE GRID ARCHITECTURE ── */}
      <main className="relative z-10 container mx-auto px-6 py-24 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: NAVIGATION HUB */}
          <div className="lg:col-span-12 xl:col-span-4 space-y-8 sticky lg:top-32">
             <div className="p-10 rounded-[3rem] bg-white border border-black/5 shadow-[0_40px_100px_rgba(0,0,0,0.03)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4EA62F]/5 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30 mb-8 border-b border-black/5 pb-4">Digital Index</h3>
                <nav className="space-y-1">
                   {sections.map((s, i) => (
                      <a 
                        key={s.id} 
                        href={`#${s.id}`}
                        className="group flex flex-col p-4 rounded-2xl hover:bg-[#4EA62F]/5 transition-all duration-300 border border-transparent hover:border-[#4EA62F]/10"
                      >
                         <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-black uppercase tracking-tight text-[#0F172A] group-hover:text-[#4EA62F] transition-colors">{s.title}</span>
                            <span className="text-[10px] font-black text-black/10 group-hover:text-[#4EA62F]/40 transition-colors">0{i+1}</span>
                         </div>
                         <p className="text-[10px] font-bold text-black/30 group-hover:text-black/50 transition-colors">{s.desc}</p>
                      </a>
                   ))}
                </nav>
             </div>

             <div className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                   <div className="h-px flex-1 bg-black/5" />
                   <span className="text-[8px] font-black uppercase tracking-[1em] text-black/20">Operational Intel</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="flex flex-col gap-2 p-5 rounded-3xl bg-gray-50 border border-black/[0.02]">
                      <Activity size={14} className="text-[#4EA62F]" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-black/40">Real-time Sync</span>
                   </div>
                   <div className="flex flex-col gap-2 p-5 rounded-3xl bg-gray-50 border border-black/[0.02]">
                      <ShieldCheck size={14} className="text-[#4EA62F]" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-black/40">Verified Data</span>
                   </div>
                </div>
             </div>
          </div>

          {/* RIGHT COLUMN: HIGH-DENSITY CONTENT */}
          <div className="lg:col-span-12 xl:col-span-8 space-y-32">
             
             {/* Acceptance */}
             <motion.section 
               id="acceptance"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.8 }}
               className="group scroll-mt-32"
             >
                <div className="flex gap-8 lg:gap-12 pb-16 border-b border-black/5">
                   <div className="flex-shrink-0 w-20 h-20 rounded-[2.5rem] bg-white border border-black/5 shadow-xl flex items-center justify-center text-[#4EA62F] group-hover:bg-[#4EA62F] group-hover:text-white transition-all duration-700">
                      <UserCheck size={32} />
                   </div>
                   <div className="space-y-6 pt-4">
                      <h2 className="text-4xl font-black tracking-tighter text-[#0F172A] uppercase leading-none">01. Service Acceptance</h2>
                      <div className="prose prose-slate max-w-none text-xl text-black/40 font-bold leading-[1.3] font-['Outfit',sans-serif]">
                         <p className="mb-4">By engaging with the EDUPATH platform, you enter into a binding digital covenant. This framework governs all interactions, data processing, and student success protocols.</p>
                         <p>If you do not align with our operational protocols, immediate session termination is required.</p>
                      </div>
                   </div>
                </div>
             </motion.section>

             {/* Eligibility */}
             <motion.section 
               id="eligibility"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.8, delay: 0.1 }}
               className="group scroll-mt-32"
             >
                <div className="flex gap-8 lg:gap-12 pb-16 border-b border-black/5">
                   <div className="flex-shrink-0 w-20 h-20 rounded-[2.5rem] bg-white border border-black/5 shadow-xl flex items-center justify-center text-[#4EA62F] group-hover:bg-[#4EA62F] group-hover:text-white transition-all duration-700">
                      <ShieldCheck size={32} />
                   </div>
                   <div className="space-y-8 pt-4 w-full">
                      <h2 className="text-4xl font-black tracking-tighter text-[#0F172A] uppercase leading-none">02. Eligibility Protocol</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="p-8 rounded-[2.5rem] bg-gray-50 border border-black/5 hover:border-[#4EA62F]/30 transition-colors">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4EA62F] mb-4">Age Threshold</h4>
                            <p className="text-sm font-bold text-[#0F172A]/60 leading-relaxed">Users must be at least 16 years of age to initiate an account protocol. Minor accounts require secondary validation from guardians.</p>
                         </div>
                         <div className="p-8 rounded-[2.5rem] bg-gray-50 border border-black/5 hover:border-[#4EA62F]/30 transition-colors">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4EA62F] mb-4">Verification</h4>
                            <p className="text-sm font-bold text-[#0F172A]/60 leading-relaxed">EDUPATH reserves the right to request identification validation to maintain ecosystem integrity.</p>
                         </div>
                      </div>
                   </div>
                </div>
             </motion.section>

             {/* Intellectual Assets */}
             <motion.section 
               id="intellectual"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="group scroll-mt-32"
             >
                <div className="flex gap-8 lg:gap-12 pb-16 border-b border-black/5">
                   <div className="flex-shrink-0 w-20 h-20 rounded-[2.5rem] bg-white border border-black/5 shadow-xl flex items-center justify-center text-[#4EA62F] group-hover:bg-[#4EA62F] group-hover:text-white transition-all duration-700">
                      <Scale size={32} />
                   </div>
                   <div className="space-y-6 pt-4">
                      <h2 className="text-4xl font-black tracking-tighter text-[#0F172A] uppercase leading-none">03. Intellectual Assets</h2>
                      <p className="text-xl text-black/40 font-bold leading-[1.3] font-['Outfit',sans-serif]">The EDUPATH ecosystem—including proprietary algorithms and interfaces—constitutes high-value intellectual property.</p>
                      <div className="grid grid-cols-1 gap-3 pt-4">
                        {[
                          "Zero extraction of platform source code.",
                          "No unauthorized utilization of branding.",
                          "Strict prohibition of automated scraping."
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-black/5 shadow-sm group/item hover:border-[#4EA62F]/20 transition-all">
                            <Sparkles size={14} className="text-[#4EA62F]" />
                            <span className="text-sm text-[#0F172A] font-black uppercase tracking-tight">{item}</span>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
             </motion.section>

             {/* AI Intelligence */}
             <motion.section 
               id="ai-usage"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.8 }}
               className="group scroll-mt-32"
             >
                <div className="flex gap-8 lg:gap-12 pb-16 border-b border-black/5">
                   <div className="flex-shrink-0 w-20 h-20 rounded-[2.5rem] bg-white border border-black/5 shadow-xl flex items-center justify-center text-[#4EA62F] group-hover:bg-[#4EA62F] group-hover:text-white transition-all duration-700">
                      <MessageSquare size={32} />
                   </div>
                   <div className="space-y-8 pt-4 w-full">
                      <h2 className="text-4xl font-black tracking-tighter text-[#0F172A] uppercase leading-none">04. AI Intelligence</h2>
                      <div className="p-10 rounded-[3rem] bg-[#0F172A] text-white relative overflow-hidden shadow-2xl">
                         <div className="absolute top-0 right-0 p-12 opacity-[0.05]">
                            <Cpu size={140} className="text-[#4EA62F]" />
                         </div>
                         <p className="text-xl font-bold text-white/60 mb-10 relative z-10 leading-tight">Sonia AI provides student relocation guidance subject to strict protocol.</p>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                            <div className="space-y-2">
                               <span className="text-[10px] font-black tracking-[0.4em] text-[#4EA62F]">Protocol_01</span>
                               <p className="text-xs font-bold text-white/40 leading-relaxed uppercase">AI generated guidance is assistive and does not constitute legal or immigration advice.</p>
                            </div>
                            <div className="space-y-2">
                               <span className="text-[10px] font-black tracking-[0.4em] text-[#4EA62F]">Protocol_02</span>
                               <p className="text-xs font-bold text-white/40 leading-relaxed uppercase">Anonymized interactions may be utilized for ecosystem intelligence refinement.</p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </motion.section>

             {/* Liability */}
             <motion.section 
               id="liability"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.8 }}
               className="group scroll-mt-32 pb-40"
             >
                <div className="flex gap-8 lg:gap-12">
                   <div className="flex-shrink-0 w-20 h-20 rounded-[2.5rem] bg-white border border-black/5 shadow-xl flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-700">
                      <Lock size={32} />
                   </div>
                   <div className="space-y-6 pt-4">
                      <h2 className="text-4xl font-black tracking-tighter text-[#0F172A] uppercase leading-none">05. Liability Framework</h2>
                      <div className="bg-red-50/50 border border-red-100 rounded-[3rem] p-10 md:p-16">
                         <p className="text-lg md:text-xl font-black text-red-900/60 leading-[1.2] uppercase italic">
                           TO THE MAXIMUM EXTENT PERMITTED BY LAW, EDUPATH SHALL NOT BE LIABLE FOR ANY ADMISSION REJECTIONS, VISA FAILURES, OR FINANCIAL LOSSES. THE STUDENT RETAINS FINAL ACCOUNTABILITY FOR ALL DECISIONS.
                         </p>
                      </div>
                   </div>
                </div>
             </motion.section>

          </div>
        </div>
      </main>

      {/* ── FINAL ACTION SECTION ── */}
      <section className="relative z-10 py-32 bg-[#0F172A] text-white overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-[#4EA62F]/20 to-transparent pointer-events-none" />
         <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-6 text-center md:text-left">
               <TechnicalBadge text="Deployment Phase" className="bg-white/10 border-white/5" />
               <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                  READY TO <span className="text-[#4EA62F] italic font-light lowercase">redefine</span> ACCESS?
               </h2>
            </div>
            <Link to="/contact" className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#4EA62F] hover:border-[#4EA62F] transition-all duration-700 shadow-2xl group">
               <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
            </Link>
         </div>
      </section>

      <Footer />
    </div>
  );
}
