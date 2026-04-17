'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, ShoppingBag, ArrowRight, ExternalLink, Wifi, Building, Shield, Zap } from 'lucide-react';
import { toast } from 'sonner';

interface Provider {
  id: string;
  name: string;
  Icon: React.ElementType;
  accentColor: string;
  type: 'direct' | 'referral' | 'buy';
  category: string;
  tagline: string;
  description: string;
  referralCode?: string;
  buyUrl?: string;
  officialUrl: string;
  badge: string;
  stats: { label: string; value: string }[];
}

const BRAND_GREEN = '#4EA62F';

const providers: Provider[] = [
  {
    id: '1',
    name: 'Giffgaff UK',
    Icon: Wifi,
    accentColor: BRAND_GREEN,
    type: 'referral',
    category: 'Connectivity',
    tagline: 'Zero-contract student data.',
    description:
      'Special student data bundles with no long-term contracts. Stay connected across the UK on a budget.',
    referralCode: 'STUDENT2026_GF',
    officialUrl: 'https://www.giffgaff.com',
    badge: 'Best Value',
    stats: [
      { label: 'Coverage', value: '99.4%' },
      { label: 'Contract', value: 'None' },
      { label: 'Speed', value: '5G' },
    ],
  },
  {
    id: '2',
    name: 'Monzo Global',
    Icon: Building,
    accentColor: BRAND_GREEN,
    type: 'direct',
    category: 'Banking',
    tagline: 'Instant UK banking. Zero friction.',
    description:
      'Instant UK account opening without a physical address proof. No fees on international transfers.',
    officialUrl: 'https://www.monzo.com',
    badge: 'Top Rated',
    stats: [
      { label: 'Setup', value: 'Instant' },
      { label: 'FX Fees', value: '£0' },
      { label: 'Support', value: '24/7' },
    ],
  },
  {
    id: '3',
    name: 'EduSafe Premium',
    Icon: Shield,
    accentColor: BRAND_GREEN,
    type: 'buy',
    category: 'Insurance',
    tagline: 'Total health & travel coverage.',
    description:
      'Comprehensive health & travel coverage tailored for students. Accepted at major hospitals worldwide.',
    buyUrl: '/checkout/insurance-premium',
    officialUrl: 'https://www.edusafe.io',
    badge: 'Recommended',
    stats: [
      { label: 'Coverage', value: 'Global' },
      { label: 'Hospitals', value: '2400+' },
      { label: 'Claims', value: '<48H' },
    ],
  },
];

export function AvailableServiceProviders() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    toast.success('Code copied!', { description: `Use ${code} at checkout for exclusive benefits.` });
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!isMounted) return <div className="h-[800px] w-full bg-[#fcfcfc]" />;

  return (
    <section
      className="relative w-full bg-[#fcfcfc] py-24 lg:py-48 overflow-hidden border-t border-black/5"
    >
      {/* Ambient glow + ghost watermark */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#4EA62F]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[-5%] text-[22vw] font-[1000] text-black/[0.015] select-none uppercase tracking-tighter italic">
          Providers
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">

        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-16 mb-24 lg:mb-40">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-8 px-5 py-2 bg-white shadow-sm border border-black/5 rounded-full w-fit"
            >
              <Zap className="w-4 h-4 text-[#4EA62F]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">
                Available Service Providers
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl lg:text-7xl font-[1000] text-[#0F172A] uppercase tracking-tighter leading-[0.85]"
            >
              Available <br />
              <span className="text-[#4EA62F]">Service</span> Providers
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:max-w-md text-xl text-black/40 font-bold leading-relaxed tracking-tight pb-4"
          >
            Seamlessly access global services through our direct integrations and exclusive
            student-only protocols.
          </motion.p>
        </div>

        {/* ── Provider Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {providers.map((provider, i) => {
            const Icon = provider.Icon;
            return (
              <motion.div
                key={provider.id}
                initial={{ opacity: 0, y: 50, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.8, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white border border-black/[0.04] rounded-[3.5rem] p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:border-[#4EA62F]/20 transition-all duration-700 overflow-hidden flex flex-col"
              >
                {/* Watermark icon */}
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-15 group-hover:scale-110 transition-all duration-700">
                  <Icon className="w-20 h-20" style={{ color: provider.accentColor }} />
                </div>

                <div className="relative z-10 flex flex-col flex-1">

                  {/* Category + Badge */}
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-2 px-4 py-1.5 bg-black/[0.03] rounded-full">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: provider.accentColor }}
                      />
                      <span className="text-[9px] font-black uppercase tracking-[0.4em] text-black/40">
                        {provider.category}
                      </span>
                    </div>
                    <span
                      className="px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-[0.3em]"
                      style={{ backgroundColor: `${provider.accentColor}15`, color: provider.accentColor }}
                    >
                      {provider.badge}
                    </span>
                  </div>

                  {/* Icon + Name */}
                  <div className="flex items-center gap-5 mb-8">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundColor: `${provider.accentColor}15` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: provider.accentColor }} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-[1000] text-[#0F172A] uppercase tracking-tighter leading-none mb-1">
                        {provider.name}
                      </h3>
                      <p className="text-[11px] font-black uppercase tracking-[0.2em] text-black/30">
                        {provider.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-black/40 font-bold text-base leading-relaxed mb-10 flex-grow">
                    {provider.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    {provider.stats.map((stat) => (
                      <div key={stat.label} className="flex flex-col gap-1">
                        <span
                          className="text-2xl font-[1000] tracking-tighter leading-none"
                          style={{ color: provider.accentColor }}
                        >
                          {stat.value}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-widest text-black/30">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Progress bar */}
                  <div className="h-px w-full bg-black/[0.04] mb-10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
                      className="h-full"
                      style={{ backgroundColor: provider.accentColor }}
                    />
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">

                    {/* Referral code row */}
                    {provider.type === 'referral' && provider.referralCode && (
                      <div className="flex items-center justify-between gap-3 p-5 bg-black/[0.02] border border-dashed border-black/10 rounded-2xl hover:bg-[#4EA62F]/5 hover:border-[#4EA62F]/20 transition-all duration-300">
                        <div>
                          <span className="block text-[8px] font-black uppercase tracking-[0.25em] text-black/30 mb-0.5">
                            Referral Code
                          </span>
                          <span className="font-mono text-[15px] font-black text-[#0F172A] tracking-widest">
                            {provider.referralCode}
                          </span>
                        </div>
                        <button
                          onClick={() => handleCopy(provider.referralCode!, provider.id)}
                          className="w-11 h-11 rounded-xl flex items-center justify-center bg-white border border-black/5 shadow-sm hover:bg-[#4EA62F] hover:text-white hover:border-[#4EA62F] transition-all duration-300"
                        >
                          {copiedId === provider.id ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                      </div>
                    )}

                    {/* Buy CTA */}
                    {provider.type === 'buy' && (
                      <a
                        href={provider.buyUrl}
                        className="group/btn relative w-full py-5 rounded-full font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-4 overflow-hidden bg-[#0F172A] text-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] hover:bg-[#4EA62F] transition-all duration-500"
                      >
                        <ShoppingBag size={14} />
                        Buy From Platform
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>
                    )}

                    {/* Direct portal CTA */}
                    {provider.type === 'direct' && (
                      <a
                        href={provider.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-5 rounded-full font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-4 bg-[#0F172A] text-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] hover:bg-[#4EA62F] transition-all duration-500"
                      >
                        Visit Official Portal
                        <ExternalLink size={14} />
                      </a>
                    )}

                    {/* Secondary: partner website */}
                    {provider.type !== 'direct' && (
                      <a
                        href={provider.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 rounded-full font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 border border-black/[0.06] text-black/40 hover:text-black hover:border-black/20 transition-all duration-300"
                      >
                        Partner Website
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Footer row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-20 pt-12 border-t border-black/5 opacity-50 hover:opacity-100 transition-opacity duration-700"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4EA62F] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4EA62F]" />
            </span>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-black/40">
              All providers are independently verified
            </span>
          </div>
          <p className="text-[9px] font-black uppercase tracking-widest text-black/30">
            Data sourced from institutional partners · 2026 / 27
          </p>
        </motion.div>

      </div>
    </section>
  );
}