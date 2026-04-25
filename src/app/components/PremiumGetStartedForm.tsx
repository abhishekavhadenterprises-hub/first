'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { Link } from 'react-router';
import { 
  ArrowRight, 
  Calendar, 
  MapPin, 
  User, 
  Sparkles, 
  CheckCircle2,
  GraduationCap,
  BookOpen,
  Briefcase,
  FlaskConical,
  Zap,
  Mail,
  LucideIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

type FormData = {
  name: string;
  email: string;
  level: string;
  vision: string;
  budget: string;
  intake: string;
  destination: string;
};

const steps = [
  'Entry',
  'About You',
  'Contact',
  'What You Need',
  'Your Vision',
  'Budget',
  'Details',
  'Confirmation',
  'Success'
];

export function PremiumGetStartedForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    level: '',
    vision: '',
    budget: '',
    intake: '',
    destination: '',
  });

  const nextStep = () => {
    setDirection(1);
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const variants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      filter: 'blur(10px)',
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 50 : -50,
      opacity: 0,
      filter: 'blur(10px)',
    }),
  };

  const progress = ((currentStep) / (steps.length - 2)) * 100;

  // Helper to render step content
  const renderContent = () => {
    switch (currentStep) {
      case 0: // Entry Screen
        return (
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#4EA62F]/5 border border-[#4EA62F]/10 rounded-full mb-4">
                <Sparkles size={14} className="text-[#4EA62F]" />
                <span className="text-[10px] font-[1000] uppercase tracking-[0.5em] text-[#4EA62F]">New Beginning</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-[1000] text-[#0F172A] uppercase tracking-tighter leading-[0.9]">
                Let’s begin <br />
                <span className="text-[#4EA62F] italic font-light lowercase">your journey</span>
              </h1>
              <p className="text-xl text-black/30 font-bold tracking-tight">We’ll guide you step by step</p>
            </div>
            <button 
              onClick={nextStep}
              className="group relative h-20 px-14 bg-[#0F172A] text-white rounded-full overflow-hidden shadow-2xl transition-all duration-700 hover:scale-105 active:scale-95"
            >
              <span className="relative z-20 font-[1000] uppercase tracking-[0.4em] text-sm flex items-center gap-4">
                Start My Journey <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-10" />
            </button>
          </div>
        );

      case 1: // Step 1 — About You
        return (
          <div className="space-y-12 w-full">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] uppercase tracking-tighter">First, tell us about you</h2>
              <div className="relative max-w-md mx-auto">
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  placeholder="Your name"
                  className="w-full bg-transparent border-b-2 border-black/10 py-6 text-2xl lg:text-3xl font-bold text-center text-[#0F172A] focus:outline-none focus:border-[#4EA62F] transition-colors placeholder:text-black/20"
                  autoFocus
                />
                <User className="absolute right-0 top-1/2 -translate-y-1/2 text-black/10" size={24} />
              </div>
            </div>
            <AnimatePresence>
              {formData.name.length > 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <p className="text-[#4EA62F] text-xl font-bold italic">Nice to meet you, {formData.name}</p>
                  <button 
                    onClick={nextStep}
                    className="group relative h-16 px-12 bg-[#0F172A] text-white rounded-full overflow-hidden shadow-xl transition-all duration-700 hover:scale-105"
                  >
                    <span className="relative z-20 font-[1000] uppercase tracking-[0.4em] text-xs flex items-center gap-3">
                      Continue <ArrowRight size={16} />
                    </span>
                    <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-10" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );

      case 2: // Step 2 — Email
        return (
          <div className="space-y-12 w-full">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] uppercase tracking-tighter max-w-2xl mx-auto">
                Great to meet you, <span className="text-[#4EA62F] lowercase italic font-light">{formData.name}.</span> <br />
                What’s your email?
              </h2>
              <div className="relative max-w-md mx-auto">
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-transparent border-b-2 border-black/10 py-6 text-2xl lg:text-3xl font-bold text-center text-[#0F172A] focus:outline-none focus:border-[#4EA62F] transition-colors placeholder:text-black/20"
                  autoFocus
                />
                <Mail className="absolute right-0 top-1/2 -translate-y-1/2 text-black/10" size={24} />
              </div>
            </div>
            <AnimatePresence>
              {formData.email.includes('@') && formData.email.length > 5 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <p className="text-[#4EA62F] text-xl font-bold italic">Perfect, we'll keep you updated</p>
                  <button 
                    onClick={nextStep}
                    className="group relative h-16 px-12 bg-[#0F172A] text-white rounded-full overflow-hidden shadow-xl transition-all duration-700 hover:scale-105"
                  >
                    <span className="relative z-20 font-[1000] uppercase tracking-[0.4em] text-xs flex items-center gap-3">
                      Continue <ArrowRight size={16} />
                    </span>
                    <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-10" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );

      case 3: // Step 3 — Study Level
        const options: { label: string; icon: LucideIcon }[] = [
          { label: 'Undergrad', icon: GraduationCap },
          { label: 'Postgrad', icon: BookOpen },
          { label: 'MBA', icon: Briefcase },
          { label: 'PhD', icon: FlaskConical }
        ];
        return (
          <div className="space-y-12 w-full">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] uppercase tracking-tighter">What's your target level?</h2>
              <p className="text-lg text-black/30 font-bold">Choose your next academic milestone</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              {options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => updateFormData('level', opt.label)}
                  className={cn(
                    "p-8 rounded-[2rem] border transition-all duration-500 flex flex-col items-center gap-4 group",
                    formData.level === opt.label 
                      ? "bg-[#4EA62F]/5 border-[#4EA62F] shadow-[0_20px_40px_rgba(78,166,47,0.1)]" 
                      : "bg-white border-black/5 hover:border-black/20 hover:bg-gray-50 shadow-sm"
                  )}
                >
                  <opt.icon size={28} className={cn("transition-transform group-hover:scale-110", formData.level === opt.label ? "text-[#4EA62F]" : "text-black/20")} />
                  <span className="text-xs font-black uppercase tracking-widest text-[#0F172A]">{opt.label}</span>
                </button>
              ))}
            </div>
            <AnimatePresence>
              {formData.level && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <p className="text-[#4EA62F] text-xl font-bold italic">Excellent choice for your future</p>
                  <button 
                    onClick={nextStep}
                    className="group relative h-16 px-12 bg-[#0F172A] text-white rounded-full overflow-hidden shadow-xl transition-all duration-700 hover:scale-105"
                  >
                    <span className="relative z-20 font-[1000] uppercase tracking-[0.4em] text-xs flex items-center gap-3">
                      Continue <ArrowRight size={16} />
                    </span>
                    <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-10" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );

      case 4: // Step 4 — Your Vision
        return (
          <div className="space-y-12 w-full">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] uppercase tracking-tighter">Tell us about your dream</h2>
              <p className="text-lg text-black/30 font-bold">Share your preferred course, university, or career goals</p>
            </div>
            <div className="relative max-w-xl mx-auto">
              <textarea 
                value={formData.vision}
                onChange={(e) => updateFormData('vision', e.target.value)}
                placeholder="Describe your vision…"
                className="w-full bg-white border border-black/5 rounded-[2.5rem] p-10 text-xl font-bold text-[#0F172A] focus:outline-none focus:border-[#4EA62F] transition-all placeholder:text-black/20 min-h-[200px] shadow-sm resize-none"
                autoFocus
              />
            </div>
            <AnimatePresence>
              {formData.vision.length > 5 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <p className="text-[#4EA62F] text-xl font-bold italic">We can help you get there</p>
                  <button 
                    onClick={nextStep}
                    className="group relative h-16 px-12 bg-[#0F172A] text-white rounded-full overflow-hidden shadow-xl transition-all duration-700 hover:scale-105"
                  >
                    <span className="relative z-20 font-[1000] uppercase tracking-[0.4em] text-xs flex items-center gap-3">
                      Continue <ArrowRight size={16} />
                    </span>
                    <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-10" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );

      case 5: // Step 5 — Budget
        const budgets = ['Flexible', '₹50K–₹1L', '₹1L–₹3L', '₹3L+'];
        return (
          <div className="space-y-12 w-full">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] uppercase tracking-tighter">Let’s shape it within your range</h2>
              <p className="text-lg text-black/30 font-bold">Select a comfortable budget</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-xl mx-auto">
              {budgets.map((b) => (
                <button
                  key={b}
                  onClick={() => updateFormData('budget', b)}
                  className={cn(
                    "px-8 py-4 rounded-full border transition-all duration-500 font-black uppercase tracking-widest text-[11px]",
                    formData.budget === b 
                      ? "bg-[#4EA62F] border-[#4EA62F] text-white shadow-lg" 
                      : "bg-white border-black/5 text-[#0F172A] hover:border-black/20"
                  )}
                >
                  {b}
                </button>
              ))}
            </div>
            <AnimatePresence>
              {formData.budget && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <p className="text-[#4EA62F] text-xl font-bold italic">Perfect, we’ll tailor it accordingly</p>
                  <button 
                    onClick={nextStep}
                    className="group relative h-16 px-12 bg-[#0F172A] text-white rounded-full overflow-hidden shadow-xl transition-all duration-700 hover:scale-105"
                  >
                    <span className="relative z-20 font-[1000] uppercase tracking-[0.4em] text-xs flex items-center gap-3">
                      Continue <ArrowRight size={16} />
                    </span>
                    <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-10" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );

      case 6: // Step 6 — Details
        return (
          <div className="space-y-12 w-full">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] uppercase tracking-tighter">When and where?</h2>
            </div>
            <div className="space-y-6 max-w-md mx-auto">
              <div className="relative">
                <input 
                  type="date" 
                  value={formData.intake}
                  onChange={(e) => updateFormData('intake', e.target.value)}
                  className="w-full bg-white border border-black/5 rounded-3xl p-6 text-lg font-bold text-[#0F172A] focus:outline-none focus:border-[#4EA62F] transition-all shadow-sm"
                />
                <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 text-black/10 pointer-events-none" size={20} />
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  value={formData.destination}
                  onChange={(e) => updateFormData('destination', e.target.value)}
                  placeholder="Target Country (e.g. UK, USA)"
                  className="w-full bg-white border border-black/5 rounded-3xl p-6 text-lg font-bold text-[#0F172A] focus:outline-none focus:border-[#4EA62F] transition-all shadow-sm placeholder:text-black/20"
                />
                <MapPin className="absolute right-6 top-1/2 -translate-y-1/2 text-black/10" size={20} />
              </div>
            </div>
            <AnimatePresence>
              {formData.intake && formData.destination.length > 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <p className="text-[#4EA62F] text-xl font-bold italic">Global education is within reach</p>
                  <button 
                    onClick={nextStep}
                    className="group relative h-16 px-12 bg-[#0F172A] text-white rounded-full overflow-hidden shadow-xl transition-all duration-700 hover:scale-105"
                  >
                    <span className="relative z-20 font-[1000] uppercase tracking-[0.4em] text-xs flex items-center gap-3">
                      Continue <ArrowRight size={16} />
                    </span>
                    <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-10" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );

      case 7: // Final Step — Confirmation
        return (
          <div className="space-y-12 w-full">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] uppercase tracking-tighter">You’re all set</h2>
              <p className="text-lg text-black/30 font-bold">We’ll take it from here and get back to you shortly</p>
            </div>
            
            <div className="max-w-xl mx-auto bg-white border border-black/5 rounded-[3rem] p-10 shadow-xl shadow-black/5 text-left space-y-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/20 block mb-1">Visionary</span>
                  <p className="font-bold text-[#0F172A]">{formData.name}</p>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/20 block mb-1">Academic Level</span>
                  <p className="font-bold text-[#0F172A]">{formData.level}</p>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/20 block mb-1">Investment</span>
                  <p className="font-bold text-[#0F172A]">{formData.budget}</p>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/20 block mb-1">Intake</span>
                  <p className="font-bold text-[#0F172A]">{formData.intake}</p>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/20 block mb-1">Destination</span>
                  <p className="font-bold text-[#0F172A]">{formData.destination}</p>
                </div>
              </div>
              <div className="pt-6 border-t border-black/5">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/20 block mb-1">Brief</span>
                <p className="font-bold text-[#0F172A] line-clamp-3">{formData.vision}</p>
              </div>
            </div>

            <button 
              onClick={nextStep}
              className="group relative h-20 px-16 bg-[#4EA62F] text-white rounded-full overflow-hidden shadow-2xl transition-all duration-700 hover:scale-105 active:scale-95"
            >
              <span className="relative z-20 font-[1000] uppercase tracking-[0.4em] text-sm flex items-center gap-4">
                Submit & Begin <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-[#0F172A] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-10" />
            </button>
          </div>
        );

      case 8: // Success Screen
        return (
          <div className="space-y-12">
            <div className="w-24 h-24 bg-[#4EA62F]/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              <CheckCircle2 size={48} className="text-[#4EA62F]" />
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-[1000] text-[#0F172A] uppercase tracking-tighter leading-[0.9]">
                Your journey <br />
                <span className="text-[#4EA62F] italic font-light lowercase">has begun</span>
              </h1>
              <p className="text-xl text-black/30 font-bold tracking-tight">Our team will connect with you soon</p>
            </div>
            <div className="pt-12">
              <Link 
                to="/"
                className="text-[10px] font-black uppercase tracking-[0.6em] text-[#0F172A] hover:text-[#4EA62F] transition-colors border-b border-black/10 pb-2"
              >
                Return to Terminal
              </Link>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-[80vh] w-full flex flex-col items-center justify-center py-12 px-6">
      
      {/* ── PROGRESS INDICATOR ── */}
      {currentStep > 0 && currentStep < steps.length - 1 && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md pt-8 flex flex-col items-center gap-4 z-50">
          <div className="flex justify-between w-full px-2">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0F172A]/30">
              Step {currentStep} of {steps.length - 3} — {steps[currentStep]}
            </span>
          </div>
          <div className="w-full h-1 bg-black/[0.03] rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-[#4EA62F]"
              transition={{ duration: 0.8, ease: "circOut" }}
            />
          </div>
        </div>
      )}

      {/* ── FORM ENGINE ── */}
      <div className="w-full max-w-2xl relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              filter: { duration: 0.4 }
            }}
            className="flex flex-col items-center text-center"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── BACK BUTTON ── */}
      <AnimatePresence>
        {currentStep > 0 && currentStep < steps.length - 1 && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={prevStep}
            className="absolute bottom-12 text-[10px] font-black uppercase tracking-[0.4em] text-black/40 hover:text-black transition-colors"
          >
            ← Previous Chapter
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
