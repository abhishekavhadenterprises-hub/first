'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import {
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  ArrowUpRight,
  Mail,
  MapPin,
} from 'lucide-react';

/* ─── Live Clock ──────────────────────────────────────────────── */
const LiveClock = ({ city, timezone }: { city: string; timezone: string }) => {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat('en-GB', {
          timeZone: timezone,
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, [timezone]);
  return (
    <div>
      <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 mb-1">{city}</p>
      <p className="text-lg font-mono font-bold text-white/70 tabular-nums tracking-tight">{time}</p>
    </div>
  );
};

/* ─── Magnetic link ────────────────────────────────────────────── */
const MagLink = ({
  href,
  children,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    setPos({
      x: (e.clientX - (left + width / 2)) * 0.3,
      y: (e.clientY - (top + height / 2)) * 0.3,
    });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      animate={{ x: pos.x, y: pos.y }}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      transition={{ type: 'spring', stiffness: 200, damping: 18, mass: 0.1 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.a>
  );
};

/* ─── Ticker ───────────────────────────────────────────────────── */
const TICKER_ITEMS = [
  'Solare International',
  '·',
  'Est. 2024',
  '·',
  'Global Student Platform',
  '·',
  'Expert Concierge',
  '·',
  'LDN · NYC · SYD · DXB',
  '·',
  'Architecting Excellence',
  '·',
];

const Ticker = () => (
  <div className="overflow-hidden whitespace-nowrap flex border-t border-white/[0.06] py-3">
    {[0, 1].map((k) => (
      <motion.div
        key={k}
        animate={{ x: ['0%', '-100%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear', delay: k * -14 }}
        className="flex gap-10 mr-10 shrink-0"
      >
        {TICKER_ITEMS.map((item, i) => (
          <span
            key={i}
            className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20"
          >
            {item}
          </span>
        ))}
      </motion.div>
    ))}
  </div>
);

/* ─── Nav data ─────────────────────────────────────────────────── */
const NAV = [
  {
    label: 'Services',
    links: [
      { name: 'SIM Cards', href: '/services/sim-cards' },
      { name: 'Banking', href: '/services/banks' },
      { name: 'Insurance', href: '/services/insurance' },
      { name: 'Housing', href: '/services/housing' },
      { name: 'Forex', href: '/services/forex' },
    ],
  },
  {
    label: 'Platform',
    links: [
      { name: 'Concierge', href: '/concierge' },
      { name: 'Sonia AI', href: '/sonia-ai' },
      { name: 'Universities', href: '/universities' },
      { name: 'Countries', href: '/countries' },
      { name: 'Compare', href: '/compare' },
    ],
  },
  {
    label: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy', href: '/legal/privacy' },
      { name: 'Terms', href: '/legal/terms' },
    ],
  },
];

const SOCIALS = [
  { Icon: Instagram, href: '#' },
  { Icon: Twitter, href: '#' },
  { Icon: Linkedin, href: '#' },
  { Icon: Youtube, href: '#' },
];

const OFFICES = [
  { city: 'London', tz: 'Europe/London' },
  { city: 'New York', tz: 'America/New_York' },
  { city: 'Sydney', tz: 'Australia/Sydney' },
];

/* ─── Main Footer ──────────────────────────────────────────────── */
export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: footerRef, offset: ['start end', 'end end'] });
  const headlineY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#050508] text-white overflow-hidden font-['Outfit',sans-serif] select-none"
    >
      {/* ── Noise texture overlay ── */}
      <div
        className="absolute inset-0 z-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* ── Ambient green glow ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] bg-[#4EA62F]/8 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* ── HERO HEADLINE ── */}
        <div className="pt-14 pb-12 border-b border-white/[0.06]">
          <motion.div style={{ y: headlineY, opacity: headlineOpacity }}>
            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-[#4EA62F]" />
              <span className="text-[8px] font-black uppercase tracking-[0.55em] text-[#4EA62F]">
                Architecting Excellence
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[clamp(2.4rem,6vw,6rem)] font-[1000] leading-[0.84] uppercase tracking-[-0.05em] mb-8">
              <span className="text-white">Redefine </span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.12)' }}
              >
                your
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4EA62F] to-[#86efac]">
                Future.
              </span>
            </h2>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04, backgroundColor: '#4EA62F', color: '#fff' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-black rounded-lg font-black uppercase tracking-[0.18em] text-[9px]"
              >
                Start Your Journey
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>

              <a
                href="/concierge"
                className="text-[9px] font-black uppercase tracking-[0.3em] text-[#4EA62F]/60 hover:text-[#4EA62F] transition-colors flex items-center gap-1.5"
              >
                Meet Our Concierge
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── MIDDLE GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 py-12 border-b border-white/[0.06]">

          {/* Left — brand block */}
          <div className="flex flex-col justify-between gap-8">
            {/* Logo */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-md bg-[#4EA62F] flex items-center justify-center">
                  <span className="text-white text-[10px] font-black">S</span>
                </div>
                <span className="text-sm font-black uppercase tracking-widest text-white">
                  Solare
                </span>
              </div>
              <p className="text-[13px] font-medium text-white/30 leading-relaxed max-w-xs">
                The world's most advanced student platform. Visa, housing, banking — all architected for you.
              </p>
            </div>

            {/* Clocks — compact row */}
            <div className="flex flex-row gap-8 flex-wrap">
              {OFFICES.map((o) => (
                <LiveClock key={o.city} city={o.city} timezone={o.tz} />
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:hello@solare.co"
                className="inline-flex items-center gap-2 text-[11px] font-bold text-white/30 hover:text-[#4EA62F] transition-colors"
              >
                <Mail className="w-3 h-3 flex-shrink-0 text-[#4EA62F]" />
                hello@solare.co
              </a>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold text-white/30">
                <MapPin className="w-3 h-3 flex-shrink-0 text-[#4EA62F]" />
                London, United Kingdom
              </span>
            </div>
          </div>

          {/* Right — nav columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {NAV.map((section, si) => (
              <motion.div
                key={section.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: si * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <h5 className="text-[8px] font-black uppercase tracking-[0.5em] text-[#4EA62F]/60 mb-5 flex items-center gap-2">
                  <span className="w-3 h-px bg-[#4EA62F]/40" />
                  {section.label}
                </h5>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <MagLink
                        href={link.href}
                        className="text-[13px] font-bold text-white/40 hover:text-[#4EA62F] transition-colors duration-300"
                      >
                        {link.name}
                      </MagLink>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          {/* Socials */}
          <div className="flex items-center gap-1.5">
            {SOCIALS.map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, backgroundColor: 'rgba(78,166,47,0.1)', borderColor: 'rgba(78,166,47,0.4)' }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-lg border border-white/[0.07] flex items-center justify-center text-white/30 hover:text-[#4EA62F] transition-colors"
              >
                <Icon className="w-3 h-3" />
              </motion.a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex items-center gap-4 text-[8px] font-black uppercase tracking-[0.35em] text-white/20">
            <span>© 2024 Solare International</span>
            <span className="w-px h-3 bg-white/10" />
            <a href="/legal/privacy" className="hover:text-[#4EA62F] transition-colors">Privacy</a>
            <span className="w-px h-3 bg-white/10" />
            <a href="/legal/terms" className="hover:text-[#4EA62F] transition-colors">Terms</a>
          </div>

          {/* Status badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#4EA62F]/20 bg-[#4EA62F]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4EA62F] animate-pulse" />
            <span className="text-[7px] font-black uppercase tracking-widest text-[#4EA62F]/70">
              All Systems Operational
            </span>
          </div>
        </div>
      </div>

      {/* ── MARQUEE TICKER ── */}
      <Ticker />

      {/* ── LARGE GHOST WORDMARK ── */}
      <div className="relative overflow-hidden h-10 lg:h-16 pointer-events-none">
        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[6vw] font-[1000] uppercase tracking-[-0.08em] text-white/[0.03] whitespace-nowrap">
          Solare International
        </p>
      </div>
    </footer>
  );
}