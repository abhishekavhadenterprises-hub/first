'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  ArrowUpRight,
  Globe,
  ArrowUp
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ─────────────────────────────────────────────────────────────────────────────
   HELPER COMPONENTS
   ───────────────────────────────────────────────────────────────────────────── */

const PremiumLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <Link to={href} className={cn(
      "group relative text-sm font-semibold transition-all duration-300",
      "text-white/30 hover:text-white"
    )}>
      <span className="relative z-10 flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-500">
        {children}
        <ArrowUpRight size={12} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-[#4EA62F]" />
      </span>
    </Link>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   DATA CONSTANTS
   ───────────────────────────────────────────────────────────────────────────── */

const NAV_GRID = [
  {
    label: 'RESOURCES',
    links: [
      { name: 'Universities', href: '/universities' },
      { name: 'Comparison', href: '/compare' },
      { name: 'Tools Hub', href: '/tools' },
      { name: 'Course Search', href: '/courses' },
    ],
  },
  {
    label: 'SERVICES',
    links: [
      { name: 'Concierge', href: '/contact' },
      { name: 'Sonia AI', href: '/sonia-ai' },
      { name: 'Visa Support', href: '/services/visas' },
      { name: 'About Edupath', href: '/about' },
    ],
  },
  {
    label: 'COMMUNITY',
    links: [
      { name: 'Student Directory', href: '/community/students' },
      { name: 'Our Vision', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Service Hub', href: '/services' },
    ],
  },
  {
    label: 'LEGAL',
    links: [
      { name: 'Terms', href: '/terms' },
      { name: 'Privacy', href: '/privacy' },
      { name: 'Refunds', href: '/refund' },
      { name: 'Cookies', href: '/cookies' },
    ],
  },
];

const HUB_NODES = [
  { city: 'India', code: 'IND' },
  { city: 'United Kingdom', code: 'UK' },
  { city: 'United Arab Emirates', code: 'UAE' },
];

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────────────────────── */

export function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020203] text-white overflow-hidden border-t border-white/5 selection:bg-[#4EA62F] selection:text-black flex flex-col">
      {/* ── BACKGROUND AMBIENCE ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#4EA62F]/5 rounded-full blur-[150px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 py-10 lg:py-16 w-full">
        
        {/* ── HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-10">
          <div className="space-y-4 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="h-px w-10 bg-[#4EA62F]/40" />
              <span className="text-[10px] font-black tracking-[0.4em] text-[#4EA62F] uppercase italic">Global Excellence</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-7xl font-black italic tracking-tighter uppercase leading-[0.85] flex flex-col"
            >
              <span>Redefine</span>
              <span className="text-[#4EA62F]">your Future.</span>
            </motion.h2>
          </div>

          <div className="flex items-center gap-8">
            <div className="text-right">
              <span className="text-[8px] font-bold tracking-[0.4em] text-white/20 uppercase block mb-1">Live Support</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black italic text-white/10 tabular-nums tracking-tighter">{time}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#4EA62F] animate-pulse shadow-[0_0_10px_#4EA62F]" />
              </div>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] hover:bg-[#4EA62F] hover:border-[#4EA62F] transition-all duration-700 cursor-pointer overflow-hidden relative"
            >
              <ArrowUp size={20} className="text-white group-hover:text-black transition-all duration-500 z-10" />
            </button>
          </div>
        </div>

        {/* ── GRID SYSTEM ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-10 border-t border-white/5 mb-10">
          
          {/* Left: Regions */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h5 className="text-[9px] font-black tracking-[0.5em] text-white/20 uppercase">Our Regions</h5>
              <div className="grid grid-cols-1 gap-2">
                {HUB_NODES.map((hub) => (
                  <div key={hub.city} className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.01] border border-white/5 hover:border-[#4EA62F]/20 transition-all duration-500 group">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-[#4EA62F]" />
                      <span className="text-sm font-black italic tracking-tighter text-white/40 group-hover:text-white transition-colors uppercase">{hub.city}</span>
                    </div>
                    <span className="text-[8px] font-mono tracking-widest text-white/10 group-hover:text-[#4EA62F] transition-colors">{hub.code}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Nav */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {NAV_GRID.map((section, idx) => (
              <motion.div 
                key={section.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <h5 className="text-[9px] font-black tracking-[0.4em] text-[#4EA62F]/60 uppercase">{section.label}</h5>
                  <div className="h-0.5 w-3 bg-[#4EA62F]/20" />
                </div>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <PremiumLink href={link.href}>{link.name}</PremiumLink>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── FOOTER FOOTNOTE ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/5">
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <Link 
                  key={i} 
                  to="#" 
                  className="w-10 h-10 rounded-lg bg-white/[0.01] border border-white/5 flex items-center justify-center text-white/20 hover:text-black hover:bg-[#4EA62F] hover:border-[#4EA62F] transition-all duration-500 group"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/5">
              <Globe size={10} className="text-[#4EA62F]" />
              <span className="text-[8px] font-black tracking-[0.3em] text-white/30 uppercase">Global Hub Connected</span>
            </div>
          </div>

          <div className="text-center md:text-right space-y-1">
            <span className="text-[9px] font-black tracking-[0.5em] text-[#4EA62F] uppercase">Solare International</span>
            <p className="text-[7px] font-medium tracking-[0.3em] text-white/10 uppercase">
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;