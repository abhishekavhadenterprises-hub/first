'use client';

import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    // Simulate subscription
    setSubscribed(true);
    toast.success('Successfully subscribed to our newsletter!');
    setEmail('');

    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-[3.5rem] p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-black/5 flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
    >
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-full h-[500px] pointer-events-none z-0">
        <div className="absolute -top-[40%] -right-[10%] w-[80%] h-[120%] bg-[#4EA62F]/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 flex-1 w-full max-w-xl mx-auto lg:mx-0">
        <div className="inline-flex items-center gap-3 px-5 py-2 bg-black/5 border border-black/5 rounded-full mb-10">
          <Mail className="w-4 h-4 text-[#4EA62F]" />
          <span className="text-[10px] font-[1000] uppercase tracking-[0.4em] text-black whitespace-nowrap">Weekly Briefing</span>
        </div>

        <h3 className="text-5xl lg:text-7xl font-[1000] text-[#0F172A] leading-[0.9] tracking-tighter uppercase font-['Outfit',sans-serif] mb-8">
          Global <br /> <span className="text-[#4EA62F] italic font-light lowercase">Insights.</span>
        </h3>

        <p className="text-xl lg:text-2xl text-black/30 font-bold mb-12 max-w-md tracking-tight leading-tight">
          Join leading minds exploring exclusive intelligence on international academic pathways.
        </p>

        {!subscribed ? (
          <div className="relative w-full group">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-center bg-[#F8FAFC] border border-black/5 rounded-[2rem] sm:rounded-full p-2 gap-2 group transition-all duration-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-[#4EA62F]/5 focus-within:border-[#4EA62F]/20">
              <div className="flex-1 flex items-center min-w-0 pl-1 sm:pl-4">
                <Mail className="w-6 h-6 text-black/10 group-focus-within:text-[#4EA62F] transition-colors shrink-0 ml-4" strokeWidth={2} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-transparent px-5 py-5 text-base font-bold text-[#0F172A] placeholder:text-black/20 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="px-10 py-5 sm:py-0 h-full sm:h-14 bg-[#0A0A0B] text-white font-black uppercase tracking-widest text-[10px] rounded-[1.5rem] sm:rounded-full hover:bg-[#4EA62F] transition-all duration-500 shadow-lg shadow-black/10 hover:shadow-[#4EA62F]/30"
              >
                Subscribe
              </button>
            </form>

            <p className="text-[11px] font-bold text-black/20 mt-6 tracking-wide ml-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4EA62F]" /> No spam. Unsubscribe anytime.
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-start gap-4 p-8 bg-[#4EA62F]/5 border border-[#4EA62F]/10 rounded-[2rem]"
          >
            <div className="flex items-center gap-4">
              <CheckCircle className="w-8 h-8 text-[#4EA62F]" />
              <span className="text-2xl font-black text-[#0F172A] tracking-tighter uppercase font-['Outfit',sans-serif]">Verified</span>
            </div>
            <p className="text-lg font-bold text-black/40">Subscription sequence engaged. Await the next intelligence module.</p>
          </motion.div>
        )}
      </div>

      {/* Visual Graphical Element */}
      <div className="hidden lg:flex flex-col items-center justify-center flex-1 relative min-h-[400px]">
        <div className="absolute inset-0 bg-[#FDFDFC] rounded-[3rem] border border-black/5 flex flex-col justify-between overflow-hidden shadow-[inset_0_2px_20px_rgba(0,0,0,0.02)] p-12">
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <div className="w-4 h-4 rounded-full bg-[#0F172A]/10 animate-pulse" />
              <div className="w-4 h-4 rounded-full bg-[#4EA62F]/20" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.8em] text-[#0F172A]/10 [writing-mode:vertical-rl] leading-none">
              Intelligence
            </span>
          </div>

          <div className="w-full flex items-end gap-3 h-48">
            {[40, 65, 35, 85, 55, 95, 45, 75, 50, 80].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: `${height}%`, opacity: 0.05 }}
                transition={{ duration: 1.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="bg-black rounded-t-xl"
                style={{ flex: 1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}