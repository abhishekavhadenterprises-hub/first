import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Eye, EyeOff, Activity, Sparkles, Target } from 'lucide-react';
import { Link } from 'react-router';
import { cn } from '@/lib/utils';

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const TechnicalBadge = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/50 backdrop-blur-xl border border-black/5 rounded-full">
    <div className="w-1.5 h-1.5 rounded-full bg-[#4EA62F] animate-pulse" />
    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40 font-mono italic">
      {text}
    </span>
  </div>
);

export default function SignIn() {
  const [isFocused, setIsFocused] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="h-screen bg-[#FDFDFC] overflow-hidden relative flex flex-col items-center justify-center selection:bg-[#4EA62F]/20 selection:text-[#0F172A]"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* ── CINEMATIC AMBIENT BACKGROUND ── */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#4EA62F]/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#4EA62F]/2 rounded-full blur-[120px] pointer-events-none" />

      {/* ── LOGO (Navigation-style, Floating Center) ── */}
      <nav className="absolute top-0 left-0 w-full px-10 py-10 z-50 flex justify-center pointer-events-none">
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

      {/* ── CENTRAL CONCENTRIC GRID (Bringing sides to center) ── */}
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Focused Brand Intelligence */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex flex-col space-y-8"
          >
            <TechnicalBadge text="Student Authentication" />
            
            <div className="space-y-4">
              <h1 className="text-[clamp(3rem,4.5vw,5rem)] font-black tracking-[-0.05em] uppercase leading-[0.85] text-[#0F172A]">
                Access <br />
                <span className="text-[#4EA62F] italic font-light lowercase tracking-normal">the</span> Global.
              </h1>
              <p className="text-xl text-black/40 font-bold leading-tight tracking-tighter max-w-sm">
                International education is broken. Log in and <span className="text-black">re-architect your journey.</span>
              </p>
            </div>

            <div className="flex items-center gap-12 pt-8 border-t border-black/5">
              <div className="space-y-1">
                <div className="text-xl font-black text-black">48K+</div>
                <div className="text-[9px] font-black uppercase tracking-widest text-black/20">Global Nodes</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl font-black text-black">30+</div>
                <div className="text-[9px] font-black uppercase tracking-widest text-black/20">Active Markets</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Auth Interface */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[420px] bg-white border border-black/5 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.06)] p-10 space-y-8">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.5em] text-[#4EA62F] uppercase">
                  <Target size={12} />
                  Secure Protocol
                </div>
                <h2 className="text-3xl font-black tracking-tight text-[#0F172A] uppercase leading-tight">
                  Welcome back.
                </h2>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Google', icon: <GoogleIcon /> },
                  { name: 'LinkedIn', icon: <LinkedInIcon /> }
                ].map((p) => (
                  <button
                    key={p.name}
                    type="button"
                    className="flex items-center justify-center gap-3 py-3.5 rounded-2xl border border-black/5 bg-white hover:border-[#4EA62F] hover:bg-[#4EA62F]/3 transition-all duration-300 group shadow-sm"
                  >
                    <div className="transition-transform group-hover:scale-110">{p.icon}</div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-black/40 group-hover:text-[#0F172A] transition-colors">{p.name}</span>
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="relative flex items-center justify-center">
                <div className="w-full h-px bg-black/5" />
                <span className="absolute px-5 bg-white text-[8px] font-black tracking-[0.5em] text-black/15 uppercase">or email</span>
              </div>

              {/* Form */}
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <label className={cn("block text-[10px] font-black tracking-[0.4em] uppercase transition-colors", isFocused === 'e' ? "text-[#4EA62F]" : "text-black/30")}>Email</label>
                    <input
                      type="email"
                      required
                      onFocus={() => setIsFocused('e')}
                      onBlur={() => setIsFocused(null)}
                      className={cn(
                        "w-full bg-transparent border-b-2 pb-3 text-lg font-bold text-[#0F172A]",
                        "focus:outline-none transition-all duration-300 placeholder:text-black/10",
                        isFocused === 'e' ? "border-[#4EA62F]" : "border-black/5"
                      )}
                      placeholder="name@edu.path"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between">
                      <label className={cn("block text-[10px] font-black tracking-[0.4em] uppercase transition-colors", isFocused === 'p' ? "text-[#4EA62F]" : "text-black/30")}>Password</label>
                      <button className="text-[8px] font-black uppercase text-black/15 hover:text-[#4EA62F]">Reset?</button>
                    </div>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        onFocus={() => setIsFocused('p')}
                        onBlur={() => setIsFocused(null)}
                        className={cn(
                          "w-full bg-transparent border-b-2 pb-3 text-lg font-bold text-[#0F172A] pr-10",
                          "focus:outline-none transition-all duration-300 placeholder:text-black/10",
                          isFocused === 'p' ? "border-[#4EA62F]" : "border-black/5"
                        )}
                        placeholder="••••••••"
                      />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-0 top-0 text-black/10 hover:text-[#4EA62F] transition-colors p-2">
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative w-full h-14 bg-[#0F172A] text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-2xl flex items-center justify-center gap-3 transition-all duration-500 overflow-hidden shadow-xl shadow-black/10 transform"
                >
                  <span className="relative z-20 flex items-center gap-3 transition-colors duration-500 group-hover:text-white">
                    Log In <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-10" />
                </button>
              </form>

              {/* Footer */}
              <div className="text-center">
                <Link to="/signup" className="text-[10px] font-black uppercase tracking-[0.1em] text-black/25 hover:text-[#4EA62F] transition-colors">
                  New to Edupath? <span className="text-[#0F172A] ml-1">Sign Up</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating System HUD */}
      <footer className="fixed bottom-0 left-0 w-full p-10 pointer-events-none opacity-[0.12] flex justify-between items-end">
         <div className="text-[9px] font-black tracking-[0.4em] uppercase text-black">V.204 // TERMINAL.ACTIVE</div>
         <div className="flex items-center gap-3">
            <ShieldCheck size={14} className="text-[#4EA62F]" />
            <span className="text-[9px] font-black tracking-[0.4em] uppercase text-black">AES-256 SECURED</span>
         </div>
      </footer>
    </div>
  );
}
