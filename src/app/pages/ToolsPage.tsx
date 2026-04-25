'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Footer } from '@/app/components/Footer';
import {
  Calculator, CheckSquare, DollarSign, Clock,
  Globe, FileText, ArrowRight, ArrowUpRight
} from 'lucide-react';
import { HowItWorksSection } from '@/app/components/HowItWorksSection';

/* ── Tool definitions ────────────────────────────────────────────────────────── */

const tools = [
  {
    id: 'budget',
    index: '01',
    title: 'Budget Calculator',
    subtitle: 'Monthly cost planner',
    icon: Calculator,
    description: 'Estimate your total monthly spend — rent, food, transport, and subscriptions — tailored to your UK city.',
    tag: 'Finance',
    status: 'live' as const,
  },
  {
    id: 'checklist',
    index: '02',
    title: 'Pre-Departure Checklist',
    subtitle: 'Essential document tracker',
    icon: CheckSquare,
    description: 'A comprehensive, phase-based checklist covering every document, booking, and task before you fly.',
    tag: 'Planning',
    status: 'live' as const,
  },
  {
    id: 'forex',
    index: '03',
    title: 'Forex Rate Tracker',
    subtitle: 'Live currency comparisons',
    icon: DollarSign,
    description: 'Compare live exchange rates across Wise, Revolut, and major banks. Set alerts for your target rate.',
    tag: 'Finance',
    status: 'soon' as const,
  },
  {
    id: 'timezone',
    index: '04',
    title: 'Timezone Planner',
    subtitle: 'Home vs UK time sync',
    icon: Clock,
    description: 'Easily convert times between your home country and the UK. Never miss a family call or deadline.',
    tag: 'Utility',
    status: 'live' as const,
  },
  {
    id: 'visa',
    index: '05',
    title: 'Visa Eligibility Check',
    subtitle: 'Quick requirement scan',
    icon: Globe,
    description: 'Answer a few questions and instantly see which UK student visa category applies to your situation.',
    tag: 'Immigration',
    status: 'soon' as const,
  },
  {
    id: 'cover',
    index: '06',
    title: 'Cover Letter Builder',
    subtitle: 'AI-powered drafts',
    icon: FileText,
    description: 'Generate tailored cover letters for UK part-time jobs and graduate placements in seconds.',
    tag: 'Career',
    status: 'soon' as const,
  },
];

const tags = ['All', 'Finance', 'Planning', 'Utility', 'Immigration', 'Career'];

/* ── Budget Calculator ───────────────────────────────────────────────────────── */

const cities: Record<string, { rent: number; food: number; transport: number; misc: number }> = {
  London:      { rent: 1200, food: 280, transport: 160, misc: 120 },
  Manchester:  { rent: 780,  food: 230, transport: 90,  misc: 90  },
  Birmingham:  { rent: 700,  food: 220, transport: 80,  misc: 80  },
  Edinburgh:   { rent: 850,  food: 240, transport: 70,  misc: 90  },
  Bristol:     { rent: 900,  food: 250, transport: 75,  misc: 85  },
};

function BudgetTool() {
  const [city, setCity] = useState('London');
  const [rent, setRent] = useState(cities.London.rent);
  const [food, setFood] = useState(cities.London.food);
  const [transport, setTransport] = useState(cities.London.transport);
  const [misc, setMisc] = useState(cities.London.misc);

  const handleCityChange = (c: string) => {
    setCity(c);
    setRent(cities[c].rent);
    setFood(cities[c].food);
    setTransport(cities[c].transport);
    setMisc(cities[c].misc);
  };

  const total = rent + food + transport + misc;

  const rows = [
    { label: 'Rent / Accommodation', value: rent, setter: setRent, max: 2000 },
    { label: 'Food & Groceries', value: food, setter: setFood, max: 600 },
    { label: 'Transport', value: transport, setter: setTransport, max: 300 },
    { label: 'Misc / Subscriptions', value: misc, setter: setMisc, max: 400 },
  ];

  return (
    <div className="space-y-6">
      {/* City selector */}
      <div className="flex flex-wrap gap-2">
        {Object.keys(cities).map((c) => (
          <button
            key={c}
            onClick={() => handleCityChange(c)}
            className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-300 ${
              city === c
                ? 'bg-[#0F172A] text-white'
                : 'bg-black/[0.04] text-black/40 hover:text-[#4EA62F] hover:border-[#4EA62F]/30'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Sliders */}
      <div className="space-y-5">
        {rows.map(({ label, value, setter, max }) => (
          <div key={label}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-black uppercase tracking-widest text-black/40">{label}</span>
              <span className="text-[15px] font-[1000] text-[#0F172A] tracking-tighter">£{value}</span>
            </div>
            <input
              type="range"
              min={0}
              max={max}
              value={value}
              onChange={(e) => setter(Number(e.target.value))}
              className="w-full h-1 rounded-full appearance-none cursor-pointer accent-[#4EA62F] bg-black/[0.06]"
            />
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="flex items-center justify-between p-6 bg-[#0F172A] rounded-2xl">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Est. Monthly Total</span>
        <span className="text-3xl font-[1000] text-[#4EA62F] tracking-tighter">£{total}</span>
      </div>
    </div>
  );
}

/* ── Checklist Tool ─────────────────────────────────────────────────────────── */

const checklistItems = [
  { phase: 'Documents', items: ['Valid passport (6+ months)', 'CAS letter from university', 'Financial proof (bank statement)', 'Accommodation letter', 'Travel insurance docs'] },
  { phase: 'Finance', items: ['Open UK bank account (online)', 'Inform home bank of travel', 'Set up international transfer', 'Budget for first month upfront', 'Save emergency fund (£500+)'] },
  { phase: 'On Arrival', items: ['Collect BRP within 10 days', 'Register with a GP (NHS)', 'Apply for NI number', 'Get a local SIM card', 'Set up University student ID'] },
];

function ChecklistTool() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const total = checklistItems.reduce((acc, g) => acc + g.items.length, 0);
  const done = checked.size;

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-[9px] font-black uppercase tracking-widest text-black/30">Progress</span>
          <span className="text-[11px] font-black text-[#4EA62F]">{done} / {total}</span>
        </div>
        <div className="h-1.5 w-full bg-black/[0.06] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#4EA62F] rounded-full"
            animate={{ width: `${(done / total) * 100}%` }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      {/* Groups */}
      {checklistItems.map((group) => (
        <div key={group.phase}>
          <p className="text-[8px] font-black uppercase tracking-[0.4em] text-[#4EA62F] mb-3">{group.phase}</p>
          <div className="space-y-2">
            {group.items.map((item) => {
              const id = `${group.phase}-${item}`;
              const isDone = checked.has(id);
              return (
                <button
                  key={item}
                  onClick={() => toggle(id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border ${
                    isDone
                      ? 'bg-[#4EA62F]/8 border-[#4EA62F]/20'
                      : 'bg-black/[0.02] border-black/[0.04] hover:border-black/10'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex-shrink-0 border-2 flex items-center justify-center transition-all duration-300 ${
                    isDone ? 'bg-[#4EA62F] border-[#4EA62F]' : 'border-black/15'
                  }`}>
                    {isDone && <span className="text-white text-[10px]">✓</span>}
                  </div>
                  <span className={`text-sm font-bold transition-colors ${isDone ? 'text-black/30 line-through' : 'text-black/60'}`}>
                    {item}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Timezone Tool ──────────────────────────────────────────────────────────── */

const timezones: Record<string, { offset: number; label: string }> = {
  India:      { offset: 5.5,  label: 'IST' },
  Nigeria:    { offset: 1,    label: 'WAT' },
  Pakistan:   { offset: 5,    label: 'PKT' },
  China:      { offset: 8,    label: 'CST' },
  Bangladesh: { offset: 6,    label: 'BST' },
  Ghana:      { offset: 0,    label: 'GMT' },
  Kenya:      { offset: 3,    label: 'EAT' },
};

function TimezoneTool() {
  const [homeCountry, setHomeCountry] = useState('India');
  const [ukHour, setUkHour] = useState(9);

  const tz = timezones[homeCountry];
  const homeHour = (ukHour + tz.offset + 24) % 24;
  const fmt = (h: number) => {
    const hh = Math.floor(h);
    const mm = h % 1 === 0.5 ? '30' : '00';
    const ampm = hh >= 12 ? 'PM' : 'AM';
    return `${hh % 12 === 0 ? 12 : hh % 12}:${mm} ${ampm}`;
  };

  return (
    <div className="space-y-6">
      {/* Country selector */}
      <div>
        <p className="text-[9px] font-black uppercase tracking-widest text-black/30 mb-3">Your Home Country</p>
        <div className="flex flex-wrap gap-2">
          {Object.keys(timezones).map((c) => (
            <button
              key={c}
              onClick={() => setHomeCountry(c)}
              className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-300 ${
                homeCountry === c
                  ? 'bg-[#0F172A] text-white'
                  : 'bg-black/[0.04] text-black/40 hover:text-[#4EA62F]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* UK time slider */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-black uppercase tracking-widest text-black/40">UK Time</span>
          <span className="text-[15px] font-[1000] text-[#0F172A]">{fmt(ukHour)}</span>
        </div>
        <input
          type="range" min={0} max={23} value={ukHour}
          onChange={(e) => setUkHour(Number(e.target.value))}
          className="w-full h-1 rounded-full appearance-none cursor-pointer accent-[#4EA62F] bg-black/[0.06]"
        />
      </div>

      {/* Result */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-6 bg-[#0F172A] rounded-2xl text-center">
          <p className="text-[8px] font-black uppercase tracking-widest text-white/30 mb-2">UK (GMT)</p>
          <p className="text-2xl font-[1000] text-[#4EA62F] tracking-tighter">{fmt(ukHour)}</p>
        </div>
        <div className="p-6 bg-black/[0.03] border border-black/[0.05] rounded-2xl text-center">
          <p className="text-[8px] font-black uppercase tracking-widest text-black/30 mb-2">{homeCountry} ({tz.label})</p>
          <p className="text-2xl font-[1000] text-[#0F172A] tracking-tighter">{fmt(homeHour)}</p>
        </div>
      </div>
    </div>
  );
}

/* ── Coming Soon Tool placeholder ───────────────────────────────────────────── */

function ComingSoonTool({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 rounded-2xl bg-[#4EA62F]/10 flex items-center justify-center mb-6">
        <Clock className="w-7 h-7 text-[#4EA62F]" />
      </div>
      <h4 className="text-xl font-[1000] text-[#0F172A] uppercase tracking-tighter mb-2">{title}</h4>
      <p className="text-sm text-black/30 font-bold max-w-xs leading-relaxed">
        This tool is currently in development. We're finalizing it for launch.
      </p>
      <span className="mt-6 px-4 py-2 bg-[#0F172A]/5 rounded-full text-[9px] font-black uppercase tracking-widest text-black/30">
        Coming Soon
      </span>
    </div>
  );
}

const liveTools: Record<string, JSX.Element> = {
  budget: <BudgetTool />,
  checklist: <ChecklistTool />,
  timezone: <TimezoneTool />,
};

/* ── Main Page ───────────────────────────────────────────────────────────────── */

export default function ToolsPage() {
  const [activeTag, setActiveTag] = useState('All');
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const filtered = activeTag === 'All' ? tools : tools.filter(t => t.tag === activeTag);
  const openTool = activeTool ? tools.find(t => t.id === activeTool) : null;

  return (
    <>
      <div className="min-h-screen bg-[#FDFDFC] font-['Outfit',sans-serif]">

        {/* ── Hero ── */}
        <section className="relative pt-48 pb-10 overflow-hidden border-b border-black/5">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#4EA62F]/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-[-10%] left-[-5%] text-[20vw] font-[1000] text-black/[0.015] select-none uppercase tracking-tighter italic">
              Utilities
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
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Student Utilities</span>
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.5rem,6vw,5.5rem)] font-[1000] text-[#0F172A] uppercase tracking-[-0.05em] leading-[0.85]"
              >
                Essential UK <br />
                <span className="text-[#4EA62F]">Student Utilities</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="lg:max-w-sm text-xl text-black/40 font-bold leading-relaxed tracking-tight pb-2"
              >
                Calculators, checklists, and utilities built specifically for international students in the UK.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── Tools Grid ── */}
        <section className="py-24 lg:py-32">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
            
            {/* Tag filters (Moved here to be just above the tools) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 mb-16"
            >
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-6 py-3 rounded-full font-black uppercase tracking-widest text-[9px] transition-all duration-500 ${
                    activeTag === tag
                      ? 'bg-[#0F172A] text-white shadow-[0_20px_40px_rgba(0,0,0,0.15)]'
                      : 'bg-white border border-black/[0.06] text-black/40 hover:border-[#4EA62F]/30 hover:text-[#4EA62F]'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </motion.div>

            {/* Active tool panel */}
            {openTool && (
              <motion.div
                key={openTool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mb-16 bg-white border border-black/[0.06] rounded-[3.5rem] p-10 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <span className="block text-[9px] font-black uppercase tracking-[0.4em] text-[#4EA62F] mb-1">{openTool.tag}</span>
                    <h2 className="text-3xl font-[1000] text-[#0F172A] uppercase tracking-tighter">{openTool.title}</h2>
                  </div>
                  <button
                    onClick={() => setActiveTool(null)}
                    className="px-5 py-2.5 rounded-full border border-black/[0.06] text-[9px] font-black uppercase tracking-widest text-black/30 hover:border-black/20 hover:text-black transition-all"
                  >
                    Close
                  </button>
                </div>
                {liveTools[openTool.id] ?? <ComingSoonTool title={openTool.title} />}
              </motion.div>
            )}

            {/* Tool cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, y: 40, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative bg-white border border-black/[0.04] rounded-[3rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:border-[#4EA62F]/20 transition-all duration-700 flex flex-col"
                  >
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-8">
                       <span className="text-[10px] font-black tabular-nums tracking-widest text-black/15">{tool.index}</span>
                       <div className="flex items-center gap-2">
                         {tool.status === 'soon' ? (
                           <span className="px-3 py-1 rounded-full bg-black/[0.04] text-[8px] font-black uppercase tracking-widest text-black/30">
                             Soon
                           </span>
                         ) : (
                           <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4EA62F]/10 text-[8px] font-black uppercase tracking-widest text-[#4EA62F]">
                             <span className="w-1.5 h-1.5 rounded-full bg-[#4EA62F] animate-pulse" />
                             Live
                           </span>
                         )}
                       </div>
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-[#4EA62F]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-6 h-6 text-[#4EA62F]" />
                    </div>

                    {/* Text */}
                    <span className="block text-[9px] font-black uppercase tracking-[0.3em] text-black/30 mb-1">{tool.tag}</span>
                    <h3 className="text-xl font-[1000] text-[#0F172A] uppercase tracking-tighter leading-tight mb-1">{tool.title}</h3>
                    <p className="text-[12px] font-black uppercase tracking-wider text-[#4EA62F] mb-4">{tool.subtitle}</p>
                    <p className="text-sm text-black/40 font-medium leading-relaxed flex-grow mb-8">{tool.description}</p>

                    {/* CTA */}
                    <button
                      onClick={() => setActiveTool(activeTool === tool.id ? null : tool.id)}
                      className={`w-full py-4 rounded-full font-black uppercase tracking-widest text-[9px] flex items-center justify-center gap-3 transition-all duration-500 ${
                        activeTool === tool.id
                          ? 'bg-[#4EA62F] text-[#0F172A]'
                          : 'bg-[#0F172A] text-white hover:bg-[#4EA62F] hover:text-[#0F172A]'
                      }`}
                    >
                      {activeTool === tool.id ? 'Close Tool' : tool.status === 'soon' ? 'Preview' : 'Open Tool'}
                      {activeTool !== tool.id && <ArrowRight size={13} />}
                    </button>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-40">
              <HowItWorksSection />
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-24 relative overflow-hidden bg-[#0F172A] rounded-[3.5rem] p-14 lg:p-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10"
            >
              <div className="absolute top-0 right-0 w-[60%] h-full bg-[#4EA62F]/5 rounded-full blur-[100px]" />
              <div className="relative z-10">
                <p className="text-[9px] font-black uppercase tracking-[0.5em] text-[#4EA62F] mb-4">Full Roadmap</p>
                <h3 className="text-4xl lg:text-6xl font-[1000] text-white uppercase tracking-tighter leading-[0.88]">
                  Need a step-by-step <br />
                  <span className="text-[#4EA62F]">Guide?</span>
                </h3>
              </div>
              <div className="relative z-10 flex flex-col gap-4">
                <p className="text-white/40 font-bold text-base leading-relaxed max-w-xs">
                  Our structured Guide walks you through every phase — from pre-departure to settled life.
                </p>
                <a
                  href="/guide"
                  className="group inline-flex items-center gap-4 px-10 py-5 rounded-full bg-[#4EA62F] text-[#0F172A] font-black uppercase tracking-[0.2em] text-[10px] hover:scale-105 transition-all duration-500 shadow-[0_20px_40px_rgba(78,166,47,0.25)] w-fit"
                >
                  View Full Guide
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
