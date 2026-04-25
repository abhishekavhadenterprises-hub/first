'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Footer } from '@/app/components/Footer';
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  Globe, 
  Cpu, 
  Users,
  ChevronRight,
  ArrowRight,
  Mail,
  Zap,
  Fingerprint,
  Activity,
  Sparkles
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

export default function Privacy() {
  const lastUpdated = "April 24, 2026";

  const sections = [
    { id: 'collection', title: 'Data Acquisition', icon: Database, desc: 'High-fidelity telemetry intake.' },
    { id: 'usage', title: 'Intelligence usage', icon: Cpu, desc: 'Neural processing frameworks.' },
    { id: 'student-profiles', title: 'Profile Ecosystem', icon: Users, desc: 'Community visibility controls.' },
    { id: 'third-party', title: 'Network Partners', icon: Globe, desc: 'Global service integration.' },
    { id: 'security', title: 'Defense Protocols', icon: Shield, desc: 'E2E encryption standards.' },
    { id: 'rights', title: 'User Autonomy', icon: Zap, desc: 'Data sovereignty management.' },
    { id: 'contact', title: 'Data Sovereignty', icon: Mail, desc: 'Compliance & support node.' }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFC] selection:bg-[#4EA62F] selection:text-white font-['Outfit',sans-serif] overflow-x-hidden">
      {/* ── CINEMATIC AMBIENT BACKGROUND ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#4EA62F]/5 rounded-full blur-[150px] opacity-40" />
        <div className="absolute bottom-0 right-0 p-12 opacity-[0.02]">
           <div className="flex flex-col gap-4 items-end">
              <span className="text-[14px] font-black uppercase tracking-[1em] text-black">PRIVACY_SHIELD v2.04</span>
              <div className="w-96 h-px bg-black" />
           </div>
        </div>
      </div>

      {/* ── TITANIC HERO (CENTERED & ONE LINE) ── */}
      <header className="relative pt-48 pb-24 px-6 z-10 border-b border-black/5">
        <div className="container mx-auto flex flex-col items-center text-center">
          <TechnicalBadge text="Security Protocol" className="mb-10" />
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[4rem] md:text-[6.5rem] lg:text-[7.5rem] font-black text-[#0F172A] uppercase tracking-[-0.06em] leading-none mb-12 whitespace-nowrap"
          >
            Privacy <span className="text-[#4EA62F] italic font-light lowercase px-2">&</span> Policy.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <p className="max-w-2xl text-xl md:text-2xl text-black/40 font-bold leading-tight tracking-tighter">
              Your data is your legacy. We architect the systems that protect it. <br />
              <span className="text-[#0F172A]">Defining the future of trust.</span>
            </p>
            <span className="text-[9px] font-black uppercase tracking-[0.6em] text-black/20">Shield Updated: {lastUpdated}</span>
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
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30 mb-8 border-b border-black/5 pb-4">Security Nodes</h3>
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
                   <span className="text-[8px] font-black uppercase tracking-[1em] text-black/20">Security Clearance</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="flex flex-col gap-2 p-5 rounded-3xl bg-gray-50 border border-black/[0.02]">
                      <Fingerprint size={14} className="text-[#4EA62F]" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-black/40">Biometric Sync</span>
                   </div>
                   <div className="flex flex-col gap-2 p-5 rounded-3xl bg-gray-50 border border-black/[0.02]">
                      <Lock size={14} className="text-[#4EA62F]" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-black/40">E2E Secure</span>
                   </div>
                </div>
             </div>
          </div>

          {/* RIGHT COLUMN: HIGH-DENSITY CONTENT */}
          <div className="lg:col-span-12 xl:col-span-8 space-y-32">
             
             {/* Data Acquisition */}
             <motion.section 
               id="collection"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.8 }}
               className="group scroll-mt-32"
             >
                <div className="flex gap-8 lg:gap-12 pb-16 border-b border-black/5">
                   <div className="flex-shrink-0 w-20 h-20 rounded-[2.5rem] bg-white border border-black/5 shadow-xl flex items-center justify-center text-[#4EA62F] group-hover:bg-[#4EA62F] group-hover:text-white transition-all duration-700">
                      <Database size={32} />
                   </div>
                   <div className="space-y-8 pt-4 w-full">
                      <h2 className="text-4xl font-black tracking-tighter text-[#0F172A] uppercase leading-none">01. Data Acquisition</h2>
                      <p className="text-xl text-black/40 font-bold leading-[1.3] font-['Outfit',sans-serif]">EDUPATH collects high-fidelity data to architect your international student journey.</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          { label: "Identity", desc: "Full legal naming and biometric profile photos.", icon: Fingerprint },
                          { label: "Academic", desc: "Validated transcripts and global test scores.", icon: Zap },
                          { label: "Financial", desc: "Secure payment tokens and loan eligibility data.", icon: Globe },
                          { label: "Behavioral", desc: "Interface interactions and tool utilization.", icon: Cpu }
                        ].map((item, i) => (
                          <div key={i} className="p-8 rounded-[2.5rem] bg-gray-50 border border-black/5 hover:border-[#4EA62F]/30 hover:-translate-y-1 transition-all">
                            <item.icon size={18} className="text-[#4EA62F] mb-4" />
                            <div className="space-y-1">
                              <span className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]">{item.label}</span>
                              <p className="text-xs font-bold text-[#0F172A]/40 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
             </motion.section>

             {/* Intelligence Usage */}
             <motion.section 
               id="usage"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.8, delay: 0.1 }}
               className="group scroll-mt-32"
             >
                <div className="flex gap-8 lg:gap-12 pb-16 border-b border-black/5">
                   <div className="flex-shrink-0 w-20 h-20 rounded-[2.5rem] bg-white border border-black/5 shadow-xl flex items-center justify-center text-[#4EA62F] group-hover:bg-[#4EA62F] group-hover:text-white transition-all duration-700">
                      <Cpu size={32} />
                   </div>
                   <div className="space-y-8 pt-4 w-full">
                      <h2 className="text-4xl font-black tracking-tighter text-[#0F172A] uppercase leading-none">02. Intelligence Usage</h2>
                      <p className="text-xl text-black/40 font-bold leading-[1.3] font-['Outfit',sans-serif]">We leverage advanced neural processing to transform raw data into actionable relocation intelligence.</p>
                      <div className="p-10 rounded-[3rem] bg-[#0F172A] text-white relative overflow-hidden shadow-2xl">
                         <div className="absolute top-0 right-0 p-12 opacity-[0.1]">
                            <Zap size={140} className="text-[#4EA62F]" />
                         </div>
                         <div className="flex items-start gap-8 relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-[#4EA62F]/20 flex items-center justify-center shrink-0">
                               <Zap className="text-[#4EA62F]" size={24} />
                            </div>
                            <div className="space-y-4">
                               <h4 className="text-2xl font-black uppercase tracking-tight text-white">Sonia AI Integration</h4>
                               <p className="text-sm md:text-base font-bold text-white/40 leading-relaxed">Your interactions are siloed and encrypted at the highest military grade (AES-256).</p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </motion.section>

             {/* Defense Protocols */}
             <motion.section 
               id="security"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="group scroll-mt-32"
             >
                <div className="flex gap-8 lg:gap-12 pb-16 border-b border-black/5">
                   <div className="flex-shrink-0 w-20 h-20 rounded-[2.5rem] bg-white border border-black/5 shadow-xl flex items-center justify-center text-[#4EA62F] group-hover:bg-[#4EA62F] group-hover:text-white transition-all duration-700">
                      <Shield size={32} />
                   </div>
                   <div className="space-y-8 pt-4 w-full">
                      <h2 className="text-4xl font-black tracking-tighter text-[#0F172A] uppercase leading-none">03. Defense Protocols</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="space-y-6">
                            <div className="space-y-2">
                               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#4EA62F]">Protocol_01</span>
                               <h4 className="text-xl font-black text-[#0F172A] uppercase tracking-tight">E2E Encryption</h4>
                               <p className="text-sm font-bold text-[#0F172A]/40 leading-relaxed">All data in transit is protected using SSL/TLS 1.3 architecture.</p>
                            </div>
                            <div className="space-y-2">
                               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#4EA62F]">Protocol_02</span>
                               <h4 className="text-xl font-black text-[#0F172A] uppercase tracking-tight">Zero-Knowledge</h4>
                               <p className="text-sm font-bold text-[#0F172A]/40 leading-relaxed">Critical identifiers are hashed and salted for maximum isolation.</p>
                            </div>
                         </div>
                         <div className="bg-[#F8FAFC] rounded-[2.5rem] p-10 flex flex-col justify-center items-center text-center space-y-6 border border-black/5">
                            <div className="w-20 h-20 rounded-full bg-white border border-black/5 flex items-center justify-center shadow-sm">
                               <Lock size={32} className="text-[#0F172A]" />
                            </div>
                            <div className="space-y-1">
                               <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/20">Baseline</p>
                               <p className="text-2xl font-black text-[#0F172A] uppercase tracking-tight italic">Grade-A Secure</p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </motion.section>

             {/* User Autonomy */}
             <motion.section 
               id="rights"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.8 }}
               className="group scroll-mt-32 pb-40"
             >
                <div className="flex gap-8 lg:gap-12">
                   <div className="flex-shrink-0 w-20 h-20 rounded-[2.5rem] bg-white border border-black/5 shadow-xl flex items-center justify-center text-[#4EA62F] group-hover:bg-[#4EA62F] group-hover:text-white transition-all duration-700">
                      <Zap size={32} />
                   </div>
                   <div className="space-y-8 pt-4 w-full">
                      <h2 className="text-4xl font-black tracking-tighter text-[#0F172A] uppercase leading-none">04. User Autonomy</h2>
                      <p className="text-xl text-black/40 font-bold leading-[1.3] font-['Outfit',sans-serif]">You retain absolute sovereignty over your digital footprint.</p>
                      <div className="flex flex-wrap gap-4">
                        {["Access", "Portability", "Deletion", "Rectification"].map((item, i) => (
                          <div key={i} className="px-6 py-3 bg-white border border-black/5 rounded-2xl shadow-sm text-[10px] font-black uppercase tracking-widest text-[#0F172A] hover:border-[#4EA62F] transition-all">
                            {item}
                          </div>
                        ))}
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
               <TechnicalBadge text="Security Protocol" className="bg-white/10 border-white/5" />
               <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                  SOVEREIGNTY <span className="text-[#4EA62F] italic font-light lowercase">is</span> YOURS.
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
