'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { 
  ArrowRight, BookOpen, Workflow, Users, Star, 
  Clock, Compass, ArrowUpRight 
} from 'lucide-react';
import { getFeaturedPosts, getEditorPicks } from '@/app/data/blogData';
import { cn } from '@/lib/utils';

/* ── Tab Content Components ────────────────────────────────────────────────── */

const BlogBriefing = () => {
  const mainFeatured = getFeaturedPosts()[0];
  const editorPicks = getEditorPicks(3);

  if (!mainFeatured) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full"
    >
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 lg:mb-16 gap-4">
        <div className="inline-flex items-center gap-3 px-5 py-2 bg-white shadow-sm border border-black/5 rounded-full">
          <BookOpen size={14} className="text-[#4EA62F]" />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/40">Articles & Guides</span>
        </div>
        <h2 className="text-4xl lg:text-6xl font-[1000] text-[#0F172A] tracking-tighter uppercase leading-[0.85] font-['Outfit',sans-serif]">
          The <span className="text-[#4EA62F] italic font-light lowercase">Intelligence.</span>
        </h2>
        <p className="text-black/50 text-base lg:text-xl font-medium tracking-tight max-w-2xl leading-tight">
          Essential guides and insights curated by our global desk to accelerate your international transition.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-[1200px] mx-auto">
        <div className="lg:col-span-7">
          <Link to={`/resources/blog/${mainFeatured.slug}`} className="group relative block w-full h-[400px] lg:h-[450px] rounded-[3rem] overflow-hidden bg-[#0F172A] shadow-2xl border border-black/5">
            <img src={mainFeatured.featuredImage} alt={mainFeatured.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 w-full p-8 lg:p-10 space-y-4">
              <h3 className="text-xl lg:text-3xl font-black text-white leading-none tracking-tight font-['Outfit',sans-serif] group-hover:text-[#4EA62F] transition-colors">
                {mainFeatured.title}
              </h3>
              <p className="text-white/70 text-sm lg:text-base font-medium max-w-xl line-clamp-2">{mainFeatured.excerpt}</p>
            </div>
          </Link>
        </div>
        <div className="lg:col-span-5 flex flex-col h-full justify-center">
          <div className="flex flex-col border-t border-black/5 divide-y divide-black/5">
            {editorPicks.map((post) => (
              <Link key={post.id} to={`/resources/blog/${post.slug}`} className="group relative flex items-center gap-6 py-6 transition-colors duration-500">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-gray-100 shadow-inner">
                  <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                </div>
                <div className="flex-1 space-y-1">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#4EA62F]">{post.category}</span>
                  <h4 className="text-base lg:text-lg font-black text-[#0F172A] leading-tight group-hover:text-[#4EA62F] transition-colors line-clamp-2">{post.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <Link to="/resources/blog">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 rounded-full bg-[#0F172A] text-white text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-4 group shadow-xl"
          >
            View More Guides
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

const ToolsBriefing = () => {
  const tools = [
    {
      id: 'budget',
      index: '01',
      title: 'Budget Calculator',
      subtitle: 'Monthly cost planner',
      description: 'Estimate your total monthly spend — rent, food, transport, and subscriptions — tailored to your UK city.',
      tag: 'Finance',
    },
    {
      id: 'checklist',
      index: '02',
      title: 'Pre-Departure Checklist',
      subtitle: 'Essential document tracker',
      description: 'A comprehensive, phase-based checklist covering every document, booking, and task before you fly.',
      tag: 'Planning',
    },
    {
      id: 'forex',
      index: '03',
      title: 'Forex Rate Tracker',
      subtitle: 'Live currency comparisons',
      description: 'Compare live exchange rates across Wise, Revolut, and major banks. Set alerts for your target rate.',
      tag: 'Finance',
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full"
    >
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 lg:mb-16 gap-4">
        <div className="inline-flex items-center gap-3 px-5 py-2 bg-white shadow-sm border border-black/5 rounded-full">
          <Workflow size={14} className="text-[#4EA62F]" />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/40">Student Utilities</span>
        </div>
        <h2 className="text-4xl lg:text-6xl font-[1000] text-[#0F172A] tracking-tighter uppercase leading-[0.85] font-['Outfit',sans-serif]">
          Tactical <span className="text-[#4EA62F] italic font-light lowercase">Tools.</span>
        </h2>
        <p className="text-black/50 text-base lg:text-xl font-medium tracking-tight max-w-2xl leading-tight">
          Precision-engineered calculators and checklists built specifically for international students.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1200px] mx-auto">
        {tools.map((tool, i) => (
          <div
            key={tool.id}
            className="group relative bg-white border border-black/[0.04] rounded-[2.5rem] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:border-[#4EA62F]/20 transition-all duration-700 flex flex-col text-left"
          >
            <div className="flex items-center justify-between mb-8">
               <span className="text-[10px] font-black tabular-nums tracking-widest text-black/15">{tool.index}</span>
               <div className="px-3 py-1 rounded-full bg-[#4EA62F]/10 text-[8px] font-black uppercase tracking-widest text-[#4EA62F]">Live</div>
            </div>
            <span className="block text-[9px] font-black uppercase tracking-[0.3em] text-black/30 mb-1">{tool.tag}</span>
            <h3 className="text-xl lg:text-2xl font-[1000] text-[#0F172A] uppercase tracking-tighter leading-tight mb-1">{tool.title}</h3>
            <p className="text-[11px] font-black uppercase tracking-wider text-[#4EA62F] mb-4">{tool.subtitle}</p>
            <p className="text-sm text-black/40 font-medium leading-relaxed mb-8">{tool.description}</p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-auto"
            >
              <Link to="/tools" className="group relative w-full py-4 rounded-full bg-[#0F172A] text-white font-black uppercase tracking-widest text-[9px] flex items-center justify-center gap-3 overflow-hidden transition-all duration-500">
                <span className="relative z-20 group-hover:text-white transition-colors duration-500">Open Tool</span>
                <ArrowRight size={13} className="relative z-20 transition-transform duration-500 group-hover:translate-x-1.5" />
                <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-10" />
              </Link>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link to="/tools">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 rounded-full bg-[#0F172A] text-white text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-4 group shadow-xl"
          >
            View All Tools
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

const CommunityBriefing = () => {
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

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full"
    >
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 lg:mb-16 gap-6">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white shadow-sm border border-black/5 rounded-full">
          <div className="w-1 h-1 rounded-full bg-[#4EA62F] animate-pulse" />
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#0F172A]/40 font-mono">INTELLIGENCE_LOCKED</span>
        </div>
        <h2 className="text-5xl lg:text-8xl font-black text-[#0F172A] uppercase tracking-[-0.05em] leading-[0.8] font-['Outfit',sans-serif]">
          Coming <span className="text-[#4EA62F] italic font-light lowercase">soon.</span>
        </h2>
        <p className="max-w-xl text-lg lg:text-xl text-black/30 font-bold leading-tight tracking-tight">
          The global student ecosystem is under construction. <br />
          <span className="text-[#0F172A]">Defining the future of education.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1200px] mx-auto">
        {discoveryCards.map((card, i) => (
          <Link key={i} to={card.link} className="group">
            <div className="h-full flex flex-col items-center bg-white border border-black/[0.08] rounded-[2.5rem] p-10 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] hover:border-[#4EA62F]/30 hover:-translate-y-2 text-center relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-[#F8FAFC] flex items-center justify-center border border-black/[0.04] mb-6 group-hover:bg-[#4EA62F] group-hover:text-white transition-all duration-500 shadow-sm relative z-10">
                <card.icon size={22} className="transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-black text-[#0F172A] uppercase tracking-tighter leading-tight mb-3 relative z-10">{card.title}</h3>
              <p className="text-black/40 font-bold text-xs leading-relaxed max-w-[180px] relative z-10 mb-6">{card.description}</p>
              <div className="mt-auto flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.4em] text-[#4EA62F] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 relative z-10">
                Explore <ArrowRight size={12} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

/* ── Main Section Component ────────────────────────────────────────────────── */

export function ResourceHubSection() {
  const [activeTab, setActiveTab] = useState<'blog' | 'tools' | 'community'>('blog');

  const tabs = [
    { id: 'blog', label: 'ARTICLES & GUIDES', icon: BookOpen },
    { id: 'tools', label: 'TOOLS', icon: Workflow },
    { id: 'community', label: 'COMMUNITY', icon: Users },
  ] as const;

  return (
    <section className="relative min-h-screen flex items-center py-24 lg:py-32 bg-[#FDFDFC] overflow-hidden border-t border-black/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-[40vw] h-[40vw] bg-[#4EA62F]/5 rounded-full blur-[140px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-blue-500/5 rounded-full blur-[160px] opacity-40" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] contrast-150" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-[1440px]">
        
        {/* Resources Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#4EA62F]/40" />
            <span className="text-[10px] font-black text-[#4EA62F] tracking-[0.5em] uppercase">Knowledge Center</span>
            <div className="h-px w-8 bg-[#4EA62F]/40" />
          </div>
          <h2 className="text-4xl lg:text-7xl font-[1000] text-[#0F172A] tracking-tighter uppercase leading-[0.85] font-['Outfit',sans-serif]">
            Resources <span className="text-[#4EA62F] italic font-light lowercase">hub.</span>
          </h2>
        </div>

        {/* Tab Controls (High Contrast) */}
        <div className="flex justify-center mb-16 lg:mb-24">
          <div className="inline-flex items-center p-2 bg-[#0F172A] rounded-full shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] relative border border-white/5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-8 lg:px-14 py-4 rounded-full flex items-center gap-4 transition-all duration-700 z-10 ${
                  activeTab === tab.id ? 'text-[#0F172A]' : 'text-white/40 hover:text-white hover:scale-105'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-pill-premium"
                    className="absolute inset-0 bg-white rounded-full shadow-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <tab.icon size={16} className={cn("relative z-10 transition-colors duration-500", activeTab === tab.id ? 'text-[#4EA62F]' : '')} />
                <span className="relative z-10 text-[10px] lg:text-[11px] font-[1000] uppercase tracking-[0.3em] font-['Outfit',sans-serif]">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {activeTab === 'blog' && <BlogBriefing key="blog" />}
            {activeTab === 'tools' && <ToolsBriefing key="tools" />}
            {activeTab === 'community' && <CommunityBriefing key="community" />}
          </AnimatePresence>
        </div>

        {/* Footer Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 lg:mt-24 pt-8 border-t border-black/5 flex justify-center"
        >
          <Link to={activeTab === 'blog' ? '/resources/blog' : activeTab === 'tools' ? '/tools' : '/coming-soon'} 
                className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-black/20 hover:text-[#4EA62F] transition-all">
            Browse Entire Ecosystem 
            <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:border-[#4EA62F]/30 group-hover:scale-110 transition-all">
              <ArrowUpRight size={14} />
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
