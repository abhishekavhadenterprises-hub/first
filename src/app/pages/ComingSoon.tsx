import { motion } from 'motion/react';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#4EA62F]/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-[#4EA62F]" />
          <span className="text-xs font-black text-white/70 uppercase tracking-[0.2em]">In Development</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-[1000] text-white uppercase tracking-tighter leading-none mb-6 font-['Outfit',sans-serif]">
          Coming <span className="text-[#4EA62F]">Soon</span>
        </h1>

        <p className="text-lg md:text-xl text-white/40 font-medium mb-12 max-w-xl leading-relaxed">
          We are currently crafting a premium experience for this section. Our intelligence engines are finalizing the deployment.
        </p>

        <Link 
          to="/" 
          className="group relative h-14 px-10 rounded-full bg-white/5 border border-white/10 text-white font-[1000] tracking-[0.2em] uppercase overflow-hidden hover:scale-105 transition-all duration-700 flex items-center gap-4"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="relative z-10 text-sm mt-0.5">Return Home</span>
          <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500" />
        </Link>
      </motion.div>
    </div>
  );
}
