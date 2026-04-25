import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export const HomeCTA = () => {
   return (
      <section className="py-20 bg-white">
         <div className="max-w-[1400px] mx-auto px-6">
            <div className="relative bg-[#0F172A] rounded-[3.5rem] p-12 md:p-20 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left isolate">
               {/* Background VFX (Subtle) */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(78,166,47,0.1),transparent)] z-0" />
               <div className="absolute bottom-[-50%] left-[-10%] w-[60vw] h-[60vw] bg-blue-500/[0.02] rounded-full blur-[100px]" />

               <div className="relative z-10 flex-1 space-y-6">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-[1000] tracking-tighter text-white leading-none uppercase">
                     Level up your <br />
                     <span className="text-[#4EA62F] italic font-light lowercase">life</span> abroad.
                  </h2>
               </div>

               <div className="relative z-10">
                  <Link to="/get-started">
                     <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-6 bg-[#4EA62F] text-[#0F172A] rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-[0_20px_50px_rgba(78,166,47,0.3)] group relative overflow-hidden flex items-center gap-3"
                     >
                        <span className="relative z-20">Get Started</span>
                        <ArrowRight size={18} className="relative z-20 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-10" />
                     </motion.button>
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
};

export default HomeCTA;
