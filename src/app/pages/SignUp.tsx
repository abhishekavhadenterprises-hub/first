import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Eye, EyeOff, Sparkles, Target, Fingerprint } from 'lucide-react';
import { Link } from 'react-router';
import { cn } from '@/lib/utils';
import { VismeFormSection } from '@/app/components/VismeFormSection';

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export default function SignUp() {
  const [isFocused, setIsFocused] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen bg-[#FDFDFC] overflow-y-auto flex flex-col items-center selection:bg-[#4EA62F]/20 selection:text-[#0F172A] pt-40 pb-20"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* ── CINEMATIC AMBIENT BACKGROUND ── */}
      <div className="absolute top-0 right-[-10%] w-[50vw] h-[50vw] bg-[#4EA62F]/4 rounded-full blur-[150px] pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-[-5%] w-[35vw] h-[35vw] bg-violet-400/3 rounded-full blur-[120px] pointer-events-none" />

      {/* ── CENTRAL LOGO (Navigation-style) ── */}
      <nav className="fixed top-0 left-0 w-full px-10 py-10 z-50 flex justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="pointer-events-auto"
        >
          <Link to="/" className="flex flex-col items-center group relative">
            <span className="font-black uppercase flex items-baseline gap-0.5 font-['Outfit',sans-serif] text-[20px] tracking-[0.3em] text-[#0F172A] transition-colors">
              EDUP<span className="text-[#4EA62F]">ATH</span>
            </span>
          </Link>
        </motion.div>
      </nav>

      {/* ── NEW VISME FORM SECTION ── */}
      <VismeFormSection />

      {/* ── PREMIUM CENTERED CARD (Legacy Form) ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[440px] mx-4 bg-white border border-black/5 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.06)] p-10 space-y-8"
      >
        {/* Header Section */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#4EA62F]/8 border border-[#4EA62F]/15 rounded-full">
            <Sparkles size={10} className="text-[#4EA62F]" />
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#4EA62F]">Student Registration</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-[#0F172A] uppercase leading-tight">
            Join the elite.
          </h1>
          <p className="text-black/35 text-base font-semibold leading-relaxed tracking-tight">
            Secure your global academic sovereignty with thousands of others.
          </p>
        </div>

        {/* Social Authentication */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'Google', icon: <GoogleIcon /> },
            { name: 'LinkedIn', icon: <LinkedInIcon /> }
          ].map((p) => (
            <button
              key={p.name}
              type="button"
              className="flex items-center justify-center gap-3 py-4 rounded-2xl border border-black/5 bg-white hover:border-[#4EA62F] hover:bg-[#4EA62F]/2 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="transition-transform group-hover:scale-110">{p.icon}</div>
              <span className="text-[9px] font-black uppercase tracking-widest text-black/40 group-hover:text-[#0F172A] transition-colors">{p.name}</span>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center">
          <div className="flex-1 h-px bg-black/5" />
          <span className="px-5 text-[8px] font-black tracking-[0.5em] text-black/15 uppercase">Or use email</span>
          <div className="flex-1 h-px bg-black/5" />
        </div>

        {/* Enrollment Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-5">
            <div className="space-y-1.5">
              <label className={cn("block text-[10px] font-black tracking-[0.4em] uppercase transition-colors", isFocused === 'n' ? "text-[#4EA62F]" : "text-black/30")}>Legal Name</label>
              <input
                type="text"
                required
                onFocus={() => setIsFocused('n')}
                onBlur={() => setIsFocused(null)}
                className={cn(
                  "w-full bg-transparent border-b-2 pb-2.5 text-lg font-bold text-[#0F172A]",
                  "focus:outline-none transition-all duration-300 placeholder:text-black/10",
                  isFocused === 'n' ? "border-[#4EA62F]" : "border-black/5"
                )}
                placeholder="Theodore Edupath"
              />
            </div>

            <div className="space-y-1.5">
              <label className={cn("block text-[10px] font-black tracking-[0.4em] uppercase transition-colors", isFocused === 'e' ? "text-[#4EA62F]" : "text-black/30")}>Email Address</label>
              <input
                type="email"
                required
                onFocus={() => setIsFocused('e')}
                onBlur={() => setIsFocused(null)}
                className={cn(
                  "w-full bg-transparent border-b-2 pb-2.5 text-lg font-bold text-[#0F172A]",
                  "focus:outline-none transition-all duration-300 placeholder:text-black/10",
                  isFocused === 'e' ? "border-[#4EA62F]" : "border-black/5"
                )}
                placeholder="join@edu.path"
              />
            </div>

            <div className="space-y-1.5">
              <label className={cn("block text-[10px] font-black tracking-[0.4em] uppercase transition-colors", isFocused === 'p' ? "text-[#4EA62F]" : "text-black/30")}>Account Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  onFocus={() => setIsFocused('p')}
                  onBlur={() => setIsFocused(null)}
                  className={cn(
                    "w-full bg-transparent border-b-2 pb-2.5 text-lg font-bold text-[#0F172A] pr-10",
                    "focus:outline-none transition-all duration-300 placeholder:text-black/10",
                    isFocused === 'p' ? "border-[#4EA62F]" : "border-black/5"
                  )}
                  placeholder="••••••••"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-0 top-1 text-black/10 hover:text-[#4EA62F] transition-colors p-2">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="group relative w-full h-15 py-4 bg-[#0F172A] text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-2xl flex items-center justify-center gap-4 transition-all duration-500 overflow-hidden shadow-xl shadow-black/10 transform"
          >
            <span className="relative z-20 flex items-center gap-4 transition-colors duration-500 group-hover:text-white">
              Create Account <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
            </span>
            <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-10" />
          </button>
        </form>

        <p className="text-center text-[10px] font-black uppercase tracking-wider text-black/25">
          Already active?{' '}
          <Link to="/signin" className="text-[#0F172A] hover:text-[#4EA62F] transition-colors font-black ml-2 underline underline-offset-4 decoration-black/5">
            Sign In
          </Link>
        </p>
      </motion.div>

      {/* Floating System HUD Footer */}
      <footer className="fixed bottom-0 left-0 w-full p-10 pointer-events-none opacity-[0.12] flex justify-between items-end mix-blend-multiply">
         <div className="text-[9px] font-black tracking-[0.4em] uppercase text-black">EDUPATH CORE // 2026</div>
         <div className="flex items-center gap-3">
            <ShieldCheck size={14} className="text-[#4EA62F]" />
            <span className="text-[9px] font-black tracking-[0.4em] uppercase text-black">E2E ENCRYPTED</span>
         </div>
      </footer>
    </div>
  );
}
