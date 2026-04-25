import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useInView } from 'motion/react';
import { 
  Compass, 
  MapPin, 
  GraduationCap, 
  BookOpen, 
  Wallet, 
  Lightbulb, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Award,
  Globe,
  Sparkles,
  Zap,
  Target,
  ShieldCheck,
  Search
} from 'lucide-react';

const RevealText = ({ children, className = "" }: { children: string, className?: string }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </div>
  );
};

export const CompleteGuideUK2026 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <div ref={containerRef} className="relative bg-white text-[#0f172a] selection:bg-[#4EA62F]/20 selection:text-[#4EA62F]">
      {/* Dynamic HUD reading bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gray-100 z-[100]">
        <motion.div
          className="h-full bg-[#4EA62F] rounded-r-full shadow-[0_0_15px_rgba(75,110,72,0.5)]"
          style={{ scaleX }}
        />
      </div>

      {/* Background Telemetry Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#4EA62F_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <article className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        {/* Kinetic Hero Summary */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: 60 }} 
                transition={{ duration: 1, ease: "circOut" }}
                className="h-[2px] bg-[#4EA62F]" 
              />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#4EA62F]/60 flex items-center gap-2">
                <Search className="w-3 h-3" /> Briefing Type: Strategic Insight / UK-2026
              </span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-12">
              <RevealText>THE BRITISH</RevealText>
              <RevealText className="text-[#4EA62F]">BLUEPRINT</RevealText>
            </h1>

            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-3xl font-light text-gray-500 leading-relaxed max-w-3xl border-l-2 border-gray-100 pl-8"
            >
              Mastering the United Kingdom's educational ecosystem requires more than ambition—it requires <span className="text-gray-900 font-medium">precision and strategic alignment</span> with world-class institutions.
            </motion.p>
          </div>
          
          <div className="lg:col-span-4 lg:sticky lg:top-32">
             <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="p-8 rounded-[32px] bg-gray-50 border border-gray-100 relative overflow-hidden group shadow-2xl shadow-gray-200/50"
             >
                <div className="absolute top-0 right-0 p-4">
                  <Zap className="w-5 h-5 text-[#4EA62F]/20 group-hover:text-[#4EA62F] transition-colors" />
                </div>
                <h4 className="text-[10px] font-bold tracking-widest uppercase mb-6 text-gray-400">At a Glance</h4>
                <div className="space-y-6">
                  {['World Rank: #1 (Education)', 'Post-Study: 2 Years', 'Visa Success rate: 98%'].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-gray-200/50 pb-2">
                      <span className="text-xs text-gray-500">{stat.split(':')[0]}</span>
                      <span className="text-xs font-black text-gray-900 uppercase tracking-tighter">{stat.split(':')[1]}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200/50">
                  <div className="flex -space-x-2 mb-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-[#4EA62F] flex items-center justify-center text-[8px] text-white font-bold">+12k</div>
                  </div>
                  <p className="text-[10px] text-gray-400 font-medium tracking-wide">Elite applicants joined the 2026 cohort</p>
                </div>
             </motion.div>
          </div>
        </section>

        {/* Bento Grid - Why Choose UK */}
        <section className="mb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#4EA62F]/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#4EA62F]" />
                </div>
                Core Advantages
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                The UK education system is recognized globally for its rigor. We've distilled the key benefits for elite global students.
              </p>
            </div>
            <motion.div style={{ x: textX }} className="hidden md:block">
              <span className="text-[120px] font-black text-gray-50 tracking-tighter leading-none select-none">ADVANTAGE</span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            {/* Main Feature Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-8 bg-[#0f172a] rounded-[40px] p-12 text-white relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#4EA62F]/30 to-transparent pointer-events-none" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <Award className="w-12 h-12 text-[#4EA62F] mb-8" />
                <div>
                   <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Academic Sovereignty</h3>
                   <p className="text-gray-400 text-lg font-light max-w-xl leading-relaxed">
                     Home to 4 of the world's top 10 universities, Oxford and Cambridge remain the pinnacle of global intellectual achievement.
                   </p>
                </div>
                <div className="mt-12 flex items-center gap-6">
                  <div className="h-[1px] flex-1 bg-white/10" />
                  <span className="text-[10px] font-bold tracking-widest text-[#4EA62F] uppercase">01 / GLOBAL RANKING</span>
                </div>
              </div>
            </motion.div>

            {/* Secondary Column */}
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
               <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 rounded-[40px] p-8 border border-gray-100 flex flex-col justify-between group cursor-pointer"
               >
                  <TrendingUp className="w-8 h-8 text-[#4EA62F] group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-xl font-black mb-2 tracking-tight">Temporal Efficiency</h4>
                    <p className="text-sm text-gray-500 font-medium">3-year Bachelor's / 1-year Master's programs.</p>
                  </div>
               </motion.div>
               <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-[#4EA62F] rounded-[40px] p-8 text-white flex flex-col justify-between shadow-xl shadow-[#4EA62F]/20 group cursor-pointer"
               >
                  <Globe className="w-8 h-8 text-white/50 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-xl font-black mb-2 tracking-tight underline decoration-white/20 underline-offset-4">Career Mobility</h4>
                    <p className="text-sm text-white/70 font-medium italic">2-Year Post-Study Work Visas as standard.</p>
                  </div>
               </motion.div>
            </div>
          </div>
        </section>

        {/* Institutions Showdown - Parallax Section */}
        <section className="mb-40">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative group">
                 <motion.div 
                  style={{ y: backgroundY }}
                  className="rounded-[48px] overflow-hidden shadow-2xl relative aspect-[4/5]"
                 >
                    <img 
                      src="https://images.unsplash.com/photo-1547817651-7fb0cc360536?w=1200" 
                      alt="University Architecture" 
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-12 left-12">
                       <ShieldCheck className="w-10 h-10 text-[#4EA62F] mb-4" />
                       <h3 className="text-3xl font-black text-white tracking-tighter">THE RUSSELL GROUP</h3>
                       <p className="text-gray-400 font-light">Global research powerhouses.</p>
                    </div>
                 </motion.div>
                 {/* Floating Ornament */}
                 <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 w-40 h-40 bg-white shadow-2xl rounded-3xl p-8 hidden lg:flex items-center justify-center flex-col text-center border border-gray-100"
                 >
                    <span className="text-4xl font-black text-[#4EA62F]">24</span>
                    <span className="text-[10px] font-bold text-gray-400 mt-2 tracking-widest uppercase">Elite Institutions</span>
                 </motion.div>
              </div>

              <div>
                 <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none">
                    Top Tier <br/><span className="text-[#4EA62F]">Institutions</span>
                 </h2>
                 <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
                    The UK boasts some of the most prestigious universities in the world. The Russell Group universities are particularly renowned for research excellence and are the primary targets for global employers.
                 </p>
                 <div className="space-y-4">
                    {['Oxford & Cambridge', 'Imperial College London', 'LSE & UCL', 'Edinburgh & Manchester'].map((uni, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ x: 15 }}
                        className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl group transition-all"
                      >
                         <div className="w-2 h-2 rounded-full bg-[#4EA62F]/20 group-hover:bg-[#4EA62F]" />
                         <span className="text-lg font-bold text-gray-900">{uni}</span>
                         <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-[#4EA62F]" />
                      </motion.div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* The Pipeline - Large Number Interaction */}
        <section className="mb-40 bg-[#0f172a] rounded-[64px] p-12 md:p-24 text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
           
           <div className="relative z-10 mb-20 text-center max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Application Pipeline</h2>
              <p className="text-lg text-gray-400 font-light">
                A surgical approach to the British application process ensures institutional victory.
              </p>
           </div>

           <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { n: "01", t: "UCAS HUB", d: "Centralized entry portal." },
                { n: "02", t: "DEADLINE", d: "Target January 15." },
                { n: "03", t: "STATEMENT", d: "4,000 characters of impact." },
                { n: "04", t: "CREDENTIALS", d: "Pristine academic audit." },
                { n: "05", t: "ENGLISH", d: "IELTS 6.5+ Benchmark." }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md"
                >
                   <span className="text-4xl font-black text-[#4EA62F] mb-4">{step.n}</span>
                   <h4 className="text-sm font-black tracking-widest uppercase mb-2">{step.t}</h4>
                   <p className="text-xs text-gray-500 font-medium leading-relaxed">{step.d}</p>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Pro Deployment Section */}
        <section className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
           <div className="lg:col-span-12 md:col-span-12">
             <div className="bg-[#4EA62F]/10 rounded-[48px] p-12 md:p-20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#4EA62F]/5 -skew-x-12 translate-x-1/2" />
                
                <div className="relative z-10 flex flex-col md:flex-row gap-16 items-start">
                   <div className="max-w-xl">
                      <div className="w-16 h-16 rounded-2xl bg-[#4EA62F] flex items-center justify-center shadow-lg shadow-[#4EA62F]/20 mb-10">
                        <Lightbulb className="text-white w-8 h-8" />
                      </div>
                      <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-gray-900">
                        Pro <br/>Deployment <span className="text-[#4EA62F]">Strategies</span>
                      </h2>
                      <div className="space-y-6">
                        {[
                          'Commence applications 12 months prior to intake.',
                          'Sustain scholarship monitoring at weekly intervals.',
                          'Prioritize Tier-2 cities for superior cost-efficiency.'
                        ].map((tip, i) => (
                          <div key={i} className="flex items-center gap-4">
                            <div className="w-5 h-5 rounded-full border-2 border-[#4EA62F] flex items-center justify-center">
                               <CheckCircle2 className="w-3 h-3 text-[#4EA62F]" />
                            </div>
                            <p className="text-gray-600 font-bold text-sm uppercase tracking-wide">{tip}</p>
                          </div>
                        ))}
                      </div>
                   </div>

                   <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                      {[
                        { t: "Success", v: "98%", i: <Sparkles /> },
                        { t: "Alumni", v: "140k+", i: <Compass /> },
                        { t: "Revenue", v: "$3.4b+", i: <Wallet /> },
                        { t: "Growth", v: "12% YoY", i: <GraduationCap /> }
                      ].map((card, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/20 group hover:bg-[#0f172a] hover:text-white transition-all duration-500">
                           <div className="text-[#4EA62F] mb-6 group-hover:scale-110 transition-transform">{card.i}</div>
                           <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{card.t}</h5>
                           <span className="text-3xl font-black">{card.v}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="mt-20 flex justify-center relative z-10">
                   <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(75, 110, 72, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-16 py-6 bg-[#0f172a] text-white rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-2xl transition-all"
                   >
                     Initiate Strategic Consultation
                   </motion.button>
                </div>
             </div>
           </div>
        </section>

      </article>
    </div>
  );
};

export default CompleteGuideUK2026;
