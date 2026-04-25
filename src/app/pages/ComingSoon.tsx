'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles, ArrowRight, BookOpen, Compass, Workflow, ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router';
import { Footer } from '@/app/components/Footer';

// Local Image Assets
import simImg from '@/app/pages/icons/(Updated) Inflatable with no background/sim and esim.png';
import bankImg from '@/app/pages/icons/(Updated) Inflatable with no background/banking.png';
import insuranceImg from '@/app/pages/icons/(Updated) Inflatable with no background/insurance.png';
import foodImg from '@/app/pages/icons/(Updated) Inflatable with no background/food.png';
import visaImg from '@/app/pages/icons/(Updated) Inflatable with no background/visa.png';
import socialImg from '@/app/pages/icons/(Updated) Inflatable with no background/social event.png';
import employmentImg from '@/app/pages/icons/(Updated) Inflatable with no background/employment.png';
import taxImg from '@/app/pages/icons/(Updated) Inflatable with no background/tax filing.png';
import loanImg from '@/app/pages/icons/(Updated) Inflatable with no background/loan.png';
import creditImg from '@/app/pages/icons/(Updated) Inflatable with no background/credit.png';
import housingImg from '@/app/pages/icons/(Updated) Inflatable with no background/housing.png';
import courseImg from '@/app/pages/icons/(Updated) Inflatable with no background/course.png';
import forexImg from '@/app/pages/icons/(Updated) Inflatable with no background/forex.png';

const services = [
  { id: '01', title: 'SIM & eSIM', image: simImg, href: '/services/sim-cards' },
  { id: '02', title: 'Banking', image: bankImg, href: '/services/banks' },
  { id: '03', title: 'Insurance', image: insuranceImg, href: '/services/insurance' },
  { id: '04', title: 'Food Delivery', image: foodImg, href: '/services/food' },
  { id: '05', title: 'Visa Services', image: visaImg, href: '/services/visas' },
  { id: '06', title: 'Social Events', image: socialImg, href: '/services/events' },
  { id: '07', title: 'Employment', image: employmentImg, href: '/services/employment' },
  { id: '08', title: 'Tax Filing', image: taxImg, href: '/services/taxes' },
  { id: '09', title: 'Student Loans', image: loanImg, href: '/services/loans' },
  { id: '10', title: 'Credit Builder', image: creditImg, href: '/services/build-credit' },
  { id: '11', title: 'Housing', image: housingImg, href: '/services/housing' },
  { id: '12', title: 'Courses', image: courseImg, href: '/services/courses' },
  { id: '13', title: 'Forex Exchange', image: forexImg, href: '/services/forex' },
];

const discoveryCards = [
  {
    title: 'Student Roadmap',
    description: 'Relocation framework.',
    link: '/guide',
    icon: Compass,
  },
  {
    title: 'The Journal',
    description: 'Academic insights.',
    link: '/resources/blog',
    icon: BookOpen,
  },
  {
    title: 'Utility Hub',
    description: 'Tactical tools.',
    link: '/tools',
    icon: Workflow,
  }
];

const ServiceTag = ({ image, title, href }: { image: string, title: string, href: string }) => (
  <Link
    to={href}
    className="flex flex-col items-center gap-2 group/tag transition-transform hover:scale-110 pointer-events-auto cursor-pointer"
  >
    <div className="w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center p-2">
      <img src={image} alt={title} className="w-full h-full object-contain filter drop-shadow-xl" />
    </div>
    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#0F172A] opacity-60 group-hover/tag:opacity-100 transition-opacity text-center whitespace-nowrap">
      {title}
    </span>
  </Link>
);

const DiscoveryCard = ({ card, index }: { card: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    className="group h-full"
  >
    <Link to={card.link} className="block h-full">
      <div className="h-full flex flex-col items-center bg-white border border-black/[0.08] rounded-[3rem] p-12 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] hover:border-[#4EA62F]/30 hover:-translate-y-2 text-center group-hover:bg-white relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#4EA62F]/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

        <div className="w-16 h-16 rounded-2xl bg-[#F8FAFC] flex items-center justify-center border border-black/[0.04] mb-8 group-hover:bg-[#4EA62F] group-hover:text-white transition-all duration-500 shadow-sm relative z-10">
          <card.icon size={26} className="transition-transform group-hover:scale-110" />
        </div>

        <h3 className="text-2xl font-black text-[#0F172A] uppercase tracking-tighter leading-tight mb-4 relative z-10">
          {card.title}
        </h3>

        <p className="text-black/40 font-bold text-sm leading-relaxed max-w-[200px] relative z-10">
          {card.description}
        </p>

        <motion.div
          whileHover={{ x: 5 }}
          className="mt-auto pt-10 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-[#4EA62F] opacity-0 group-hover:opacity-100 transition-all transform relative z-10"
        >
          Explore <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
        </motion.div>
      </div>
    </Link>
  </motion.div>
);

export default function ComingSoon() {
  const tripledServices = [...services, ...services, ...services];

  return (
    <div className="h-screen bg-[#FDFDFC] selection:bg-[#4EA62F] selection:text-white font-['Outfit',sans-serif] overflow-hidden relative">

      {/* ── PROFESSIONAL AMBIENT BACKGROUND ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#4EA62F]/5 rounded-full blur-[150px] opacity-40" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] contrast-150 brightness-150" />
      </div>

      {/* ── CENTRAL LOGO (Redundant but kept for branding if nav is invisible) ── */}
      {/* ── HERO CANVAS (OPTIMIZED FOR NAV + SINGLE FRAME) ── */}
      <main className="relative h-full w-full flex flex-col items-center justify-center pt-20">

        {/* LEFT TICKER (INWARD ALIGNED) */}
        <div className="absolute left-0 lg:left-24 xl:left-40 top-0 bottom-0 w-40 hidden lg:flex flex-col z-20">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#FDFDFC] to-transparent z-20" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FDFDFC] to-transparent z-20" />

          <motion.div
            animate={{ y: [0, -2200] }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="flex flex-col gap-10 items-center opacity-80"
          >
            {tripledServices.map((s, i) => (
              <ServiceTag key={`left-${i}`} image={s.image} title={s.title} href={s.href} />
            ))}
          </motion.div>
        </div>

        {/* RIGHT TICKER (INWARD ALIGNED) */}
        <div className="absolute right-0 lg:right-24 xl:right-40 top-0 bottom-0 w-40 hidden lg:flex flex-col z-20">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#FDFDFC] to-transparent z-20" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FDFDFC] to-transparent z-20" />

          <motion.div
            animate={{ y: [-2200, 0] }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="flex flex-col gap-10 items-center opacity-80"
          >
            {tripledServices.map((s, i) => (
              <ServiceTag key={`right-${i}`} image={s.image} title={s.title} href={s.href} />
            ))}
          </motion.div>
        </div>

        {/* CONTENT HUB (STRICT SINGLE VIEWPORT) */}
        <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 bg-white shadow-sm border border-black/5 rounded-full mb-8"
          >
            <div className="w-1 h-1 rounded-full bg-[#4EA62F] animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#0F172A]/40 font-mono">INTELLIGENCE_LOCKED</span>
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-[9rem] font-black text-[#0F172A] uppercase tracking-[-0.05em] leading-[0.8] mb-8"
          >
            Coming <br />
            <span className="text-[#4EA62F] italic font-light lowercase px-2">soon.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-xl text-lg lg:text-xl text-black/30 font-bold leading-tight tracking-tight mb-12"
          >
            The global student ecosystem is under construction. <br />
            <span className="text-[#0F172A]">Defining the future of education.</span>
          </motion.p>

          {/* ── THE DISCOVERY GRID (PREMIUM & BIGGER) ── */}
          <div className="w-full max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {discoveryCards.map((card, i) => (
                <DiscoveryCard key={i} card={card} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.008] select-none pointer-events-none">
          <h2 className="text-[25vw] font-black uppercase tracking-tighter text-[#0F172A]">FUTURE</h2>
        </div>
      </main>

      {/* HUD FOOTER (DYNAMIC) */}
      <footer className="absolute bottom-0 left-0 w-full p-8 pointer-events-none flex justify-between items-end opacity-[0.2]">
        <div className="text-[9px] font-black tracking-[0.4em] uppercase text-black">TERMINAL V2.0 // SECURE</div>
        <div className="flex items-center gap-3">
          <ShieldCheck size={12} className="text-[#4EA62F]" />
          <span className="text-[9px] font-black tracking-[0.4em] uppercase text-black">AES-256</span>
        </div>
      </footer>
    </div>
  );
}
