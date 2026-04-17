import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Mail, Lock, ArrowRight, Eye, EyeOff, Sparkles, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { Navigation } from '@/app/components/Navigation';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen flex flex-col lg:flex-row bg-[#FAF8F5] selection:bg-[#4EA62F]/20">
        
        {/* LEFT COLUMN: Form */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-24 xl:px-32 relative z-10 pt-32 pb-12 lg:py-0">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[440px] mx-auto lg:mx-0"
          >
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-4xl lg:text-5xl font-[1000] text-[#0A0A0B] uppercase tracking-tighter leading-none mb-4 font-['Outfit',sans-serif]">
                Welcome <br/><span className="text-[#4EA62F]">Back</span>
              </h1>
              <p className="text-[#64748B] text-sm lg:text-base font-medium">
                Enter your credentials to access your global intelligence dashboard.
              </p>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="group flex items-center justify-center gap-3 h-12 bg-white border border-[#E2E8F0] rounded-xl hover:bg-[#F8FAFC] hover:border-[#CBD5E1] transition-all font-bold text-xs tracking-wide uppercase text-[#0F172A] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              <button className="group flex items-center justify-center gap-3 h-12 bg-white border border-[#E2E8F0] rounded-xl hover:bg-[#F8FAFC] hover:border-[#CBD5E1] transition-all font-bold text-xs tracking-wide uppercase text-[#0F172A] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.78 1.18-.19 2.29-.88 3.57-.84 1.58.12 2.81.74 3.65 1.88-3.21 1.88-2.68 5.89.5 7.06-.7 1.8-1.57 3.33-2.8 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Apple
              </button>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E2E8F0]" />
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-black">
                <span className="bg-[#FAF8F5] px-4 text-[#94A3B8]">Or continue with</span>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-6">
              
              <div className="space-y-2 group">
                <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#0F172A] group-focus-within:text-[#4EA62F] transition-colors">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-[#94A3B8] group-focus-within:text-[#4EA62F] transition-colors" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="w-full pl-12 pr-4 py-4 bg-white border border-[#E2E8F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4EA62F]/20 focus:border-[#4EA62F] text-[#0F172A] placeholder:text-[#94A3B8] font-medium transition-all shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]"
                    placeholder="name@university.edu"
                  />
                </div>
              </div>

              <div className="space-y-2 group">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#0F172A] group-focus-within:text-[#4EA62F] transition-colors">
                    Password
                  </label>
                  <a href="#" className="text-[10px] font-black uppercase tracking-widest text-[#4EA62F] hover:text-[#0A0A0B] transition-colors">
                    Forgot?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-[#94A3B8] group-focus-within:text-[#4EA62F] transition-colors" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full pl-12 pr-12 py-4 bg-white border border-[#E2E8F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4EA62F]/20 focus:border-[#4EA62F] text-[#0F172A] placeholder:text-[#94A3B8] font-medium transition-all shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]"
                    placeholder="••••••••"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#94A3B8] hover:text-[#0F172A] focus:outline-none transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button className="group relative w-full h-14 rounded-xl bg-[#0A0A0B] text-white text-[11px] font-[1000] tracking-[0.2em] uppercase overflow-hidden hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-[0_20px_40px_-15px_rgba(10,10,11,0.3)] hover:shadow-[0_20px_40px_-15px_rgba(78,166,47,0.4)]">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    ACCESS PORTAL <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </button>
              </div>

            </form>

            <p className="mt-10 text-center text-sm font-medium text-[#64748B]">
              New to EduPath?{' '}
              <Link to="/signup" className="text-[#0A0A0B] font-bold hover:text-[#4EA62F] transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-[#4EA62F] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Create an account
              </Link>
            </p>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Visual Elements */}
        <div className="hidden lg:flex flex-1 relative bg-[#0A0A0B] overflow-hidden p-4 lg:p-6">
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden group">
            
            {/* Immersive Image */}
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
              className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[20s] ease-linear grayscale group-hover:grayscale-0"
              alt="Students"
            />
            
            {/* Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/40 to-transparent opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B]/80 via-[#0A0A0B]/20 to-transparent mix-blend-multiply" />
            
            {/* Cinematic overlay UI */}
            <div className="absolute inset-0 flex flex-col justify-end p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
                  <Sparkles className="w-4 h-4 text-[#4EA62F]" />
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] shadow-sm">Global Network</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-[1000] text-white tracking-tighter leading-[1.1] mb-6 font-['Outfit',sans-serif]">
                  YOUR JOURNEY TO <br className="hidden xl:block" />
                  <span className="text-white/50">WORLD-CLASS</span> EDUCATION.
                </h2>
                
                <p className="text-lg text-white/70 font-medium max-w-lg mb-12 leading-relaxed">
                  Join thousands of international students securing their visas, housing, and essentials before even landing.
                </p>

                <div className="grid grid-cols-3 border-t border-white/10 pt-8 gap-8">
                   <div>
                     <div className="text-3xl font-[1000] text-white mb-1 tracking-tighter">150+</div>
                     <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Countries</div>
                   </div>
                   <div>
                     <div className="text-3xl font-[1000] text-white mb-1 tracking-tighter">10k+</div>
                     <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Students</div>
                   </div>
                   <div>
                     <div className="text-3xl font-[1000] text-white mb-1 tracking-tighter">24/7</div>
                     <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">AI Support</div>
                   </div>
                </div>
              </motion.div>
            </div>

            {/* Floating verification badge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute top-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center gap-4 shadow-2xl"
            >
              <div className="w-10 h-10 bg-[#4EA62F]/20 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#4EA62F]" />
              </div>
              <div>
                <div className="text-white font-[1000] text-sm tracking-tight">Secure Portal</div>
                <div className="text-white/50 text-[10px] font-black uppercase tracking-widest mt-0.5">End-to-end encrypted</div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
}