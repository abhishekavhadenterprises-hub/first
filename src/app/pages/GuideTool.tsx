'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Footer } from '@/app/components/Footer';
import { PopularDestinations } from '@/app/components/PopularDestinations';
import { WorkflowSection } from '@/app/components/WorkflowSection';
import {
  CheckCircle2, ArrowRight, ChevronDown,
  Plane, Building2, Shield, Home, Smartphone,
  DollarSign, Briefcase, GraduationCap, CreditCard,
  ArrowUpRight
} from 'lucide-react';
import { CompareOptionsSection } from '@/app/components/CompareOptionsSection';

const steps = [
  {
    id: '01',
    phase: 'Pre-Departure',
    title: 'University & Course Selection',
    icon: GraduationCap,
    color: '#4EA62F',
    description: 'Research universities, compare courses, and shortlist based on your profile, budget, and career goals.',
    tasks: [
      'Research target universities and rankings',
      'Compare course curriculums and entry requirements',
      'Assess tuition fees and cost of living',
      'Check scholarship and funding options',
      'Review visa requirements per destination',
    ],
    link: '/countries',
    linkLabel: 'Explore Destinations',
  },
  {
    id: '02',
    phase: 'Pre-Departure',
    title: 'Visa & Immigration',
    icon: Plane,
    color: '#4EA62F',
    description: 'Navigate the student visa application process, document preparation, and immigration compliance.',
    tasks: [
      'Identify the correct visa category',
      'Gather required documents (CAS, finances)',
      'Complete the visa application form',
      'Book your biometric appointment',
      'Prepare for potential interview',
    ],
    link: '/services/visas',
    linkLabel: 'Visa Services',
  },
  {
    id: '03',
    phase: 'Pre-Departure',
    title: 'Housing & Accommodation',
    icon: Home,
    color: '#4EA62F',
    description: 'Secure verified student housing — from on-campus halls to luxury private residences near campus.',
    tasks: [
      'Apply for on-campus accommodation early',
      'Research off-campus student housing',
      'Understand tenancy agreements and rights',
      'Plan for initial deposit and utility setup',
      'Connect with future flatmates',
    ],
    link: '/services/housing',
    linkLabel: 'Find Housing',
  },
  {
    id: '04',
    phase: 'On Arrival',
    title: 'Banking & Finance',
    icon: Building2,
    color: '#4EA62F',
    description: 'Open a UK bank account, manage international transfers, and build your financial foundation.',
    tasks: [
      'Open a student bank account (Monzo, Starling)',
      'Set up international money transfers',
      'Register for online banking',
      'Understand UK banking regulations',
      'Plan your monthly budget',
    ],
    link: '/services/banks',
    linkLabel: 'Banking Options',
  },
  {
    id: '05',
    phase: 'On Arrival',
    title: 'SIM Card & Connectivity',
    icon: Smartphone,
    color: '#4EA62F',
    description: 'Stay connected from day one with the right student SIM plan — no long-term contracts required.',
    tasks: [
      'Compare student SIM plans (Giffgaff, EE, O2)',
      'Activate your SIM before or on arrival',
      'Set up your UK number and data plan',
      'Enable international roaming if needed',
      'Download essential student apps',
    ],
    link: '/services/sim-cards',
    linkLabel: 'Compare SIM Plans',
  },
  {
    id: '06',
    phase: 'On Arrival',
    title: 'Health Insurance & NHS',
    icon: Shield,
    color: '#4EA62F',
    description: 'Understand the NHS, register with a GP, and ensure you have the right health coverage in place.',
    tasks: [
      'Confirm IHS (Immigration Health Surcharge) payment',
      'Register with a local GP within first week',
      'Get a National Insurance (NI) number',
      'Explore supplemental dental & optical cover',
      'Save emergency healthcare contacts',
    ],
    link: '/services/insurance',
    linkLabel: 'Insurance Options',
  },
  {
    id: '07',
    phase: 'Settled Life',
    title: 'Credit Building',
    icon: CreditCard,
    color: '#4EA62F',
    description: 'Establish your UK credit history from scratch to unlock financial services, contracts, and rentals.',
    tasks: [
      'Apply for a student credit builder card',
      'Set up direct debits and standing orders',
      'Register on the electoral roll',
      'Monitor your credit score monthly',
      'Avoid common credit pitfalls',
    ],
    link: '/services/build-credit',
    linkLabel: 'Build Credit',
  },
  {
    id: '08',
    phase: 'Settled Life',
    title: 'Employment & Earnings',
    icon: Briefcase,
    color: '#4EA62F',
    description: 'Find part-time work within your visa limits, manage taxes, and build your professional profile.',
    tasks: [
      'Understand work hours allowed on your visa',
      'Apply for a National Insurance number',
      'Register with job platforms (Handshake, Indeed)',
      'Set up payroll and understand PAYE tax',
      'Explore internship and placement options',
    ],
    link: '/services/employment',
    linkLabel: 'Career Tools',
  },
  {
    id: '09',
    phase: 'Settled Life',
    title: 'Forex & Money Transfers',
    icon: DollarSign,
    color: '#4EA62F',
    description: 'Optimize international transfers and get the best exchange rates for tuition and living costs.',
    tasks: [
      'Compare Wise, Revolut, and bank transfers',
      'Schedule transfers for best exchange rates',
      'Set rate alerts for major currencies',
      'Understand transfer limits and fees',
      'Plan tuition payment deadlines',
    ],
    link: '/services/forex',
    linkLabel: 'Forex Exchange',
  },
];

const phases = ['All', 'Pre-Departure', 'On Arrival', 'Settled Life'];

export default function GuideTool() {
  const [activePhase, setActivePhase] = useState('All');
  const [expandedStep, setExpandedStep] = useState<string | null>('01');

  const filtered = activePhase === 'All' ? steps : steps.filter(s => s.phase === activePhase);

  return (
    <>
      <div className="min-h-screen bg-[#FDFDFC] font-['Outfit',sans-serif]">

        {/* ── Hero ── */}
        <section className="relative pt-48 pb-40 overflow-hidden border-b border-black/5">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#4EA62F]/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-[-10%] left-[-5%] text-[20vw] font-[1000] text-black/[0.04] select-none uppercase tracking-tighter italic">
              Roadmap
            </div>
          </div>

          <div className="max-w-[1320px] mx-auto px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-8 px-5 py-2 bg-white shadow-sm border border-black/5 rounded-full w-fit"
            >
              <div className="w-2 h-2 rounded-full bg-[#4EA62F] relative">
                <span className="absolute inset-0 rounded-full bg-[#4EA62F] animate-ping opacity-40" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">
                Study Abroad Roadmap
              </span>
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.5rem,6vw,5.5rem)] font-[1000] text-[#0F172A] uppercase tracking-[-0.05em] leading-[0.85]"
              >
                Your Journey, <br />
                <span className="text-[#4EA62F]">Step by Step</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="lg:max-w-sm text-xl text-black/40 font-bold leading-relaxed tracking-tight pb-2"
              >
                A structured, phase-by-phase roadmap covering every critical step — from visa to settlement.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── Steps Accordion (2nd Section) ── */}
        <section className="py-24 lg:py-40 border-b border-black/5">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-white shadow-sm border border-black/5 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-[#4EA62F]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Execution Protocol</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-[1000] text-[#0F172A] uppercase tracking-tighter leading-[0.9] whitespace-nowrap">
                Tactical <span className="text-[#4EA62F] italic font-light lowercase px-2">Navigation.</span>
              </h2>
              <p className="mt-6 text-xl font-bold text-black/40 leading-relaxed max-w-xl mx-auto">
                Our proprietary framework for international relocation, organized into nine high-impact modules.
              </p>
            </div>

            <div className="flex flex-col divide-y divide-black/[0.06]">
              <AnimatePresence initial={false}>
                {filtered.map((step, i) => {
                  const Icon = step.icon;
                  const isOpen = expandedStep === step.id;
                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <button
                        onClick={() => setExpandedStep(isOpen ? null : step.id)}
                        className={`w-full group flex items-start gap-6 py-8 lg:py-10 px-6 rounded-2xl text-left transition-all duration-500 ${
                          isOpen ? 'bg-[#0F172A]' : 'hover:bg-black/[0.02]'
                        }`}
                      >
                        {/* Step number */}
                        <span className={`text-[11px] font-black tabular-nums tracking-widest pt-1 flex-shrink-0 transition-colors ${
                          isOpen ? 'text-[#4EA62F]' : 'text-black/20 group-hover:text-black/40'
                        }`}>
                          {step.id}
                        </span>

                        {/* Icon */}
                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                          isOpen ? 'bg-[#4EA62F]' : 'bg-black/[0.04] group-hover:bg-[#4EA62F]/10'
                        }`}>
                          <Icon className={`w-5 h-5 transition-colors ${isOpen ? 'text-white' : 'text-black/40'}`} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-4 mb-1">
                            <div>
                              <span className={`block text-[8px] font-black uppercase tracking-[0.4em] mb-1 transition-colors ${
                                isOpen ? 'text-[#4EA62F]/70' : 'text-black/25'
                              }`}>
                                {step.phase}
                              </span>
                              <h3 className={`text-[17px] lg:text-[20px] font-[1000] uppercase tracking-[-0.02em] leading-tight transition-colors ${
                                isOpen ? 'text-white' : 'text-[#0F172A]'
                              }`}>
                                {step.title}
                              </h3>
                            </div>
                            <ChevronDown className={`flex-shrink-0 w-5 h-5 transition-all duration-500 ${
                              isOpen ? 'text-[#4EA62F] rotate-180' : 'text-black/20 group-hover:text-black/40'
                            }`} />
                          </div>

                          {/* Expanded content */}
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                key="content"
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                              >
                                <p className="text-white/50 text-base font-medium leading-relaxed mb-6">
                                  {step.description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                                  {step.tasks.map((task, t) => (
                                    <div key={t} className="flex items-start gap-3">
                                      <CheckCircle2 className="w-4 h-4 text-[#4EA62F] flex-shrink-0 mt-0.5" />
                                      <span className="text-sm text-white/50 font-medium">{task}</span>
                                    </div>
                                  ))}
                                </div>

                                <a
                                  href={step.link}
                                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#4EA62F] text-[#0F172A] font-black uppercase tracking-widest text-[9px] hover:scale-105 transition-transform duration-300"
                                >
                                  {step.linkLabel}
                                  <ArrowRight size={13} />
                                </a>

                                {/* Progress bar */}
                                <motion.div
                                  initial={{ scaleX: 0 }}
                                  animate={{ scaleX: 1 }}
                                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                  className="origin-left h-px bg-[#4EA62F]/30 mt-8"
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </button>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ── Workflow & Compare Sections ── */}
        <WorkflowSection />
        <CompareOptionsSection />

        {/* ── Popular Destinations (Explore Hubs) ── */}
        <PopularDestinations />

        {/* ── Bottom CTA ── */}
        <section className="pb-32">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden bg-[#0F172A] rounded-[3.5rem] p-14 lg:p-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)]"
            >
              <div className="absolute top-0 right-0 w-[60%] h-full bg-[#4EA62F]/5 rounded-full blur-[100px]" />
              <div className="relative z-10">
                <p className="text-[9px] font-black uppercase tracking-[0.5em] text-[#4EA62F] mb-4">Personalised Support</p>
                <h3 className="text-4xl lg:text-6xl font-[1000] text-white uppercase tracking-tighter leading-[0.88]">
                  Need help with <br />
                  <span className="text-[#4EA62F]">your journey?</span>
                </h3>
              </div>
              <div className="relative z-10 flex flex-col gap-4">
                <p className="text-white/40 font-bold text-base lg:text-lg leading-relaxed max-w-xs">
                  Our concierge team handles every step — so you can focus on what matters.
                </p>
                <a
                  href="/concierge"
                  className="group inline-flex items-center gap-4 px-10 py-5 rounded-full bg-[#4EA62F] text-[#0F172A] font-black uppercase tracking-[0.2em] text-[10px] hover:scale-105 transition-all duration-500 shadow-[0_20px_40px_rgba(78,166,47,0.25)] w-fit"
                >
                  Access Concierge
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
