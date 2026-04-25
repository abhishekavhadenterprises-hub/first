import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
   ThumbsUp,
   ThumbsDown,
   MessageCircle,
   Share2,
   Bookmark,
   Sparkles,
   ArrowRight,
   User,
   ShieldCheck,
   Send,
   Globe,
   Command,
   Activity,
   Heart,
   ExternalLink
} from 'lucide-react';
import { Link } from 'react-router';

interface BlogAuthor {
   name: string;
   role: string;
   bio: string;
   avatar: string;
}

interface BlogPostFooterProps {
   post: {
      tags: string[];
      author: BlogAuthor;
   };
}

const TelemetryMarker = ({ text }: { text: string }) => (
   <div className="flex items-center gap-2">
      <div className="w-1 h-1 rounded-full bg-[#4EA62F] animate-pulse" />
      <span className="text-[7px] font-black uppercase tracking-[0.5em] text-black/20 font-mono italic">{text}</span>
   </div>
);

export const BlogPostFooter = ({ post }: BlogPostFooterProps) => {
   const [feedbackGiven, setFeedbackGiven] = useState<'helpful' | 'not-helpful' | null>(null);

   return (
      <div className="bg-white border-t border-black/[0.03] overflow-hidden selection:bg-[#4EA62F]/10">

         {/* COMPACT BENTO BRIEFING (Tags, Author, Feedback) */}
         <section className="py-12 lg:py-20">
            <div className="max-w-[1400px] mx-auto px-6">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                  {/* Left Bento: Classification & Origin */}
                  <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

                     {/* Author Node (Compact) */}
                     <motion.div
                        whileHover={{ y: -4 }}
                        className="p-8 rounded-[2.5rem] bg-gray-50/50 border border-black/5 flex flex-col justify-between group h-full transition-all"
                     >
                        <div className="flex items-center gap-6">
                           <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-2xl relative">
                              <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                           </div>
                           <div className="space-y-1">
                              <TelemetryMarker text="Intellectual Origin" />
                              <h4 className="text-2xl font-black tracking-tighter text-[#0F172A]">{post.author.name}</h4>
                              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#4EA62F]">{post.author.role}</p>
                           </div>
                        </div>
                        <p className="mt-8 text-sm text-black/40 font-bold leading-relaxed line-clamp-3">
                           {post.author.bio}
                        </p>
                        <div className="mt-8 pt-6 border-t border-black/[0.03] flex items-center gap-4">
                           <button className="text-black/20 hover:text-[#4EA62F] transition-colors"><Share2 size={16} /></button>
                           <button className="text-black/20 hover:text-[#4EA62F] transition-colors"><Bookmark size={16} /></button>
                           <span className="ml-auto text-[8px] font-black uppercase tracking-widest text-black/10">Auth: Ver_2026</span>
                        </div>
                     </motion.div>

                     {/* Tags & Meta Node (Compact) */}
                     <motion.div
                        whileHover={{ y: -4 }}
                        className="p-8 rounded-[2.5rem] bg-white border border-black/5 shadow-sm flex flex-col h-full"
                     >
                        <TelemetryMarker text="Classification matrix" />
                        <h4 className="text-xl font-black tracking-tighter text-[#0F172A] mt-2 mb-8 uppercase">Indexed <span className="text-[#4EA62F]">Core</span></h4>
                        <div className="flex flex-wrap gap-2 mb-8">
                           {post.tags.map(tag => (
                              <span key={tag} className="px-3 py-1.5 bg-gray-50 border border-black/[0.03] rounded-xl text-[9px] font-black uppercase tracking-widest text-black/40 hover:bg-[#4EA62F]/5 hover:text-[#4EA62F] transition-all cursor-pointer">
                                 #{tag}
                              </span>
                           ))}
                        </div>
                        <div className="mt-auto p-4 bg-gray-50 rounded-2xl border border-black/[0.02] flex items-center justify-between">
                           <span className="text-[8px] font-black uppercase tracking-[0.2em] text-black/30">Strategic Distribution</span>
                           <div className="flex -space-x-2">
                              {[1, 2, 3].map(i => <div key={i} className="w-5 h-5 rounded-full border border-white bg-[#0F172A]/10" />)}
                           </div>
                        </div>
                     </motion.div>
                  </div>

                  {/* Right Bento: Sentiment Matrix (Compact) */}
                  <div className="lg:col-span-4 h-full">
                     <div className="p-8 rounded-[2.5rem] bg-[#0F172A] text-white flex flex-col justify-between h-full relative overflow-hidden group shadow-2xl">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                           <Activity size={80} />
                        </div>

                        <div>
                           <TelemetryMarker text="Sentiment protocol" />
                           <h4 className="text-2xl font-black tracking-tighter mt-2">WAS THIS INTEL <br /><span className="text-[#4EA62F] italic font-light lowercase">impactful?</span></h4>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mt-12 py-3 border-t border-white/5">
                           <button
                              onClick={() => setFeedbackGiven('helpful')}
                              className={`py-4 rounded-2xl flex flex-col items-center gap-2 transition-all ${feedbackGiven === 'helpful' ? 'bg-[#4EA62F] text-[#0F172A]' : 'bg-white/5 hover:bg-white/10'}`}
                           >
                              <ThumbsUp size={18} />
                              <span className="text-[7px] font-black uppercase tracking-widest">Affirm</span>
                           </button>
                           <button
                              onClick={() => setFeedbackGiven('not-helpful')}
                              className={`py-4 rounded-2xl flex flex-col items-center gap-2 transition-all ${feedbackGiven === 'not-helpful' ? 'bg-red-500 text-white' : 'bg-white/5 hover:bg-white/10'}`}
                           >
                              <ThumbsDown size={18} />
                              <span className="text-[7px] font-black uppercase tracking-widest">Refine</span>
                           </button>
                        </div>

                        <AnimatePresence>
                           {feedbackGiven && (
                              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} className="text-center pt-4 text-[7px] font-black uppercase tracking-[0.8em]">
                                 Protocol Captured
                              </motion.div>
                           )}
                        </AnimatePresence>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* COMPACT DIALOGUE SECTION (Comments) */}
         <section className="py-12 border-t border-black/[0.03] bg-[#FDFDFC]/50">
            <div className="max-w-[1400px] mx-auto px-6">
               <div className="flex flex-col lg:flex-row gap-12">

                  <div className="lg:w-1/3">
                     <TelemetryMarker text="External Commms" />
                     <h4 className="text-3xl font-black tracking-tighter text-[#0F172A] mt-2 mb-4">DIALOGUE <span className="text-[#4EA62F]">NODE</span></h4>
                     <p className="text-xs text-black/40 font-bold leading-relaxed max-w-xs">Contribute your tactical perspective to the active cohort intelligence feed.</p>

                     <div className="mt-8 flex items-center gap-4">
                        <div className="flex -space-x-3">
                           {[1, 2, 3, 4].map(i => (
                              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                                 <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="avatar" />
                              </div>
                           ))}
                        </div>
                        <span className="text-[8px] font-black uppercase tracking-widest text-[#4EA62F]">+42 Syncing</span>
                     </div>
                  </div>

                  <div className="lg:w-2/3 space-y-4">
                     <div className="relative group">
                        <textarea
                           placeholder="Deploy your transmission..."
                           rows={3}
                           className="w-full bg-white border border-black/5 p-6 rounded-[2rem] text-sm font-bold placeholder:text-black/10 focus:ring-1 focus:ring-[#4EA62F]/30 focus:border-[#4EA62F]/20 transition-all shadow-sm"
                        />
                        <button className="absolute bottom-4 right-4 p-3 bg-[#0F172A] text-white rounded-2xl hover:bg-[#4EA62F] transition-all group/btn">
                           <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                           { name: 'John Doe', date: '2d ago', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400', content: 'The visa process seemed daunting, but this clarified everything.' },
                           { name: 'Maria Garcia', date: '3d ago', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400', content: 'Great insights! Can you cover Canadian university timelines next?' },
                        ].map((comment, i) => (
                           <div key={i} className="p-5 bg-white border border-black/[0.02] rounded-3xl flex gap-4 hover:border-[#4EA62F]/10 transition-all group">
                              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform">
                                 <img src={comment.avatar} alt={comment.name} className="w-full h-full object-cover" />
                              </div>
                              <div className="space-y-1">
                                 <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-black text-[#0F172A] uppercase">{comment.name}</span>
                                    <span className="text-[8px] font-bold text-black/20">{comment.date}</span>
                                 </div>
                                 <p className="text-[11px] text-black/40 font-bold leading-tight line-clamp-2 italic">"{comment.content}"</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* REFINED TERMINAL ACTION (Compact CTA) */}
         <section className="py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-6">
               <div className="relative bg-[#0F172A] rounded-[3.5rem] p-12 md:p-20 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-12 text-center md:text-left isolate">
                  {/* Background VFX (Subtle) */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(78,166,47,0.1),transparent)] z-0" />
                  <div className="absolute bottom-[-50%] left-[-10%] w-[60vw] h-[60vw] bg-blue-500/[0.02] rounded-full blur-[100px]" />

                  <div className="relative z-10 flex-1 space-y-6">
                     <TelemetryMarker text="Terminal Active" />
                     <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-none">
                        UNFOLD YOUR <br />
                        <span className="text-[#4EA62F] italic font-light lowercase">global</span> STORY.
                     </h2>
                  </div>

                  <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
                     <Link to="/contact">
                        <motion.button
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                           className="px-12 py-6 bg-[#4EA62F] text-[#0F172A] rounded-full font-black text-[10px] uppercase tracking-[0.4em] shadow-xl relative"
                        >
                           INITIATE MISSION
                        </motion.button>
                     </Link>

                     <Link to="/services">
                        <motion.button
                           className="group flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all"
                        >
                           Explore Protocol <ExternalLink size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.button>
                     </Link>
                  </div>

                  {/* Technical ID Watermark */}
                  <div className="absolute bottom-4 right-8 text-[6px] font-black uppercase tracking-[1em] text-white/10 hidden md:block">
                     DEPLOY_REF: UK2026_ALPHA_V.01
                  </div>
               </div>
            </div>
         </section>

      </div>
   );
};
