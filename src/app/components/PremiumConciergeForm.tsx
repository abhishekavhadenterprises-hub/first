'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Send, 
  User, 
  Mail, 
  GraduationCap, 
  Target, 
  Sparkles,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  { id: 1, label: 'Academic Profile', icon: GraduationCap },
  { id: 2, label: 'Target Strategy', icon: Target },
  { id: 3, label: 'Personal Intel', icon: User },
];

export const PremiumConciergeForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    education: 'Undergraduate',
    intake: 'Fall 2026',
    universities: '',
    budget: '',
    requirements: '',
    name: '',
    email: ''
  });

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.from(".form-header > *", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".form-header",
        start: "top 85%",
      }
    });

    gsap.from(".form-main-card", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".form-main-card",
        start: "top 85%",
      }
    });

  }, { scope: containerRef });

  const validateStep = (step: number) => {
    if (step === 1) return true; // Universities is optional
    if (step === 2) {
      if (!formData.budget) {
        toast.error("Please select a budget range");
        return false;
      }
      if (!formData.requirements.trim()) {
        toast.error("Please describe your requirements");
        return false;
      }
      return true;
    }
    if (step === 3) {
      if (!formData.name.trim()) {
        toast.error("Name is required");
        return false;
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        toast.error("Valid email is required");
        return false;
      }
      return true;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      setIsSubmitted(true);
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section 
      ref={containerRef}
      id="concierge-form"
      className="relative py-8 lg:py-12 bg-[#FDFDFC] overflow-hidden"
    >
      {/* Decorative HUD Elements */}
      <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none hidden lg:block">
         <div className="flex flex-col gap-4 items-end">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black">Inquiry Node 42.1</span>
            <div className="w-64 h-px bg-black" />
            <Cpu size={24} className="text-black" />
         </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="form-header mb-12 text-center mx-auto max-w-4xl">
           <div className="inline-flex items-center gap-3 px-5 py-2 bg-white shadow-sm border border-black/5 rounded-full mb-8">
              <ShieldCheck className="w-4 h-4 text-[#4EA62F]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Secure Submission Protocol</span>
           </div>
           
           <h2 className="text-5xl lg:text-7xl font-[1000] text-[#0F172A] leading-tight tracking-tighter uppercase mb-6 font-['Outfit',sans-serif]">
             Request <span className="text-[#4EA62F] italic font-light lowercase ml-2">Concierge</span>
           </h2>

           <p className="max-w-xl mx-auto text-xl font-bold text-black/40 leading-tight tracking-tight font-['Outfit',sans-serif]">
              Initiate your premium strategy track. Our advisors require the following metrics to evaluate compatibility.
           </p>
        </div>

        {/* Main Form Interface */}
        <div className="form-main-card max-w-6xl mx-auto flex flex-col lg:flex-row bg-white rounded-[4rem] border border-black/5 shadow-[0_60px_120px_rgba(0,0,0,0.04)] overflow-hidden min-h-[700px]">
           
           {/* Step Navigation Rail (Left) */}
           <div className="w-full lg:w-[320px] bg-gray-50/50 p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-black/5 flex flex-col justify-between">
              <div className="space-y-12">
                 <div className="flex items-center gap-4 mb-16">
                    <Sparkles size={20} className="text-[#4EA62F]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30">Admissions Core</span>
                 </div>

                 <div className="space-y-10">
                    {steps.map((step) => (
                      <div 
                        key={step.id}
                        className={cn(
                          "flex items-center gap-6 group transition-all duration-500",
                          currentStep === step.id ? "opacity-100" : "opacity-30 blur-[1px] grayscale"
                        )}
                      >
                         <div className={cn(
                           "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-700",
                           currentStep === step.id ? "bg-[#4EA62F] text-white shadow-lg shadow-[#4EA62F]/20" : "bg-white text-black/20 border border-black/5"
                         )}>
                            {currentStep > step.id ? <CheckCircle2 size={18} /> : <step.icon size={18} />}
                         </div>
                         <div className="flex flex-col">
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#4EA62F]/60">Step 0{step.id}</span>
                            <span className="text-sm font-black uppercase tracking-tighter text-[#0F172A]">{step.label}</span>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="pt-20 hidden lg:block">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#4EA62F] animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Status: Connection Hub Active</span>
                 </div>
              </div>
           </div>

           {/* Form Area (Right) */}
           <div className="flex-1 p-10 lg:p-24 relative flex flex-col justify-center">
              <AnimatePresence mode="wait">
                 {!isSubmitted ? (
                   <motion.div
                     key={currentStep}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.6, ease: "circOut" }}
                     className="w-full"
                   >
                      <form onSubmit={handleSubmit} className="space-y-12">
                         {currentStep === 1 && (
                           <div className="space-y-10">
                              <h4 className="text-3xl lg:text-5xl font-black text-[#0F172A] uppercase tracking-tighter leading-none mb-4 font-['Outfit',sans-serif]">Educational <span className="text-black/10">Base</span></h4>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                 <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-black/30">Current Education Level</label>
                                    <select 
                                      value={formData.education}
                                      onChange={(e) => updateField('education', e.target.value)}
                                      className="w-full bg-gray-50 border-none rounded-2xl p-5 text-sm font-bold text-[#0F172A] focus:ring-2 focus:ring-[#4EA62F]/20 outline-none transition-all appearance-none cursor-pointer"
                                    >
                                       <option>High School</option>
                                       <option>Undergraduate</option>
                                       <option>Graduate</option>
                                       <option>Professional</option>
                                    </select>
                                 </div>
                                 <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-black/30">Intended Intake Period</label>
                                    <select 
                                      value={formData.intake}
                                      onChange={(e) => updateField('intake', e.target.value)}
                                      className="w-full bg-gray-50 border-none rounded-2xl p-5 text-sm font-bold text-[#0F172A] focus:ring-2 focus:ring-[#4EA62F]/20 outline-none transition-all appearance-none cursor-pointer"
                                    >
                                       <option>Spring 2026</option>
                                       <option>Fall 2026</option>
                                       <option>Spring 2027</option>
                                       <option>Fall 2027</option>
                                    </select>
                                 </div>
                              </div>

                              <div className="space-y-4">
                                 <label className="text-[11px] font-black uppercase tracking-widest text-black/30">Target Universities (Optional)</label>
                                 <input 
                                   type="text" 
                                   value={formData.universities}
                                   onChange={(e) => updateField('universities', e.target.value)}
                                   placeholder="e.g. Oxford, Stanford, NUS..."
                                   className="w-full bg-gray-50 border-none rounded-2xl p-6 text-sm font-bold text-[#0F172A] focus:ring-2 focus:ring-[#4EA62F]/20 outline-none transition-all placeholder:text-black/10"
                                 />
                              </div>
                           </div>
                         )}

                         {currentStep === 2 && (
                           <div className="space-y-10">
                              <h4 className="text-3xl lg:text-5xl font-black text-[#0F172A] uppercase tracking-tighter leading-none mb-4 font-['Outfit',sans-serif]">Growth <span className="text-black/10">Strategy</span></h4>
                              
                              <div className="space-y-4">
                                 <label className="text-[11px] font-black uppercase tracking-widest text-black/30">Estimated Budget Range</label>
                                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {['$10k-$30k', '$30k-$60k', '$60k-$100k', '$100k+'].map((range) => (
                                      <button 
                                        type="button" 
                                        key={range} 
                                        onClick={() => updateField('budget', range)}
                                        className={cn(
                                          "p-6 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all border cursor-pointer relative z-10",
                                          formData.budget === range 
                                            ? "bg-[#4EA62F] text-white border-[#4EA62F] shadow-xl" 
                                            : "bg-[#FAFBFC] text-[#0F172A] border-black/10 hover:border-[#4EA62F]/30"
                                        )}
                                      >
                                         {range}
                                      </button>
                                    ))}
                                 </div>
                              </div>

                              <div className="space-y-4">
                                 <label className="text-[11px] font-black uppercase tracking-widest text-black/30">Primary Support Requirements</label>
                                 <textarea 
                                   rows={4}
                                   value={formData.requirements}
                                   onChange={(e) => updateField('requirements', e.target.value)}
                                   placeholder="Describe your goals and where you need elite guidance..."
                                   className="w-full bg-gray-50 border-none rounded-2xl p-6 text-sm font-bold text-[#0F172A] focus:ring-2 focus:ring-[#4EA62F]/20 outline-none transition-all placeholder:text-black/10 resize-none"
                                 />
                              </div>
                           </div>
                         )}

                         {currentStep === 3 && (
                           <div className="space-y-10">
                              <h4 className="text-3xl lg:text-5xl font-black text-[#0F172A] uppercase tracking-tighter leading-none mb-4 font-['Outfit',sans-serif]">Identity <span className="text-black/10">Lock</span></h4>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                 <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-black/30">Full Legal Name</label>
                                    <div className="relative">
                                       <User size={16} className="absolute left-6 top-6 text-black/20" />
                                       <input 
                                         type="text" 
                                         value={formData.name}
                                         onChange={(e) => updateField('name', e.target.value)}
                                         className="w-full bg-gray-50 border-none rounded-2xl py-6 pl-14 pr-6 text-sm font-bold text-[#0F172A] focus:ring-2 focus:ring-[#4EA62F]/20 outline-none transition-all"
                                       />
                                    </div>
                                 </div>
                                 <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-black/30">Academic Email</label>
                                    <div className="relative">
                                       <Mail size={16} className="absolute left-6 top-6 text-black/20" />
                                       <input 
                                         type="email" 
                                         value={formData.email}
                                         onChange={(e) => updateField('email', e.target.value)}
                                         className="w-full bg-gray-50 border-none rounded-2xl py-6 pl-14 pr-6 text-sm font-bold text-[#0F172A] focus:ring-2 focus:ring-[#4EA62F]/20 outline-none transition-all"
                                       />
                                    </div>
                                 </div>
                              </div>

                              <div className="p-8 bg-[#4EA62F]/5 rounded-3xl border border-[#4EA62F]/10">
                                 <div className="flex gap-4">
                                    <ShieldCheck className="text-[#4EA62F] shrink-0" size={24} />
                                    <p className="text-sm font-bold text-[#4EA62F]/80 leading-relaxed">
                                       Your data is end-to-end encrypted and used strictly for advisor profiling. No third-party data distribution is permitted.
                                    </p>
                                 </div>
                              </div>
                           </div>
                         )}

                         {/* Footer Navigation */}
                         <div className="pt-12 flex items-center justify-between border-t border-black/5">
                            {currentStep > 1 && (
                              <button 
                                type="button" 
                                onClick={prevStep}
                                className="group flex items-center gap-4 px-8 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest text-black/40 hover:text-black transition-all border border-black/5 hover:border-black/10 hover:bg-white shadow-sm"
                              >
                                <div className="w-6 h-6 rounded-full border border-black/10 flex items-center justify-center group-hover:border-black/30 transition-all">
                                   <ChevronLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                                </div>
                                Previous Phase
                              </button>
                            )}
                            <div className="flex-1" />
                            {currentStep < 3 ? (
                              <button 
                                type="button" 
                                onClick={nextStep}
                                className="group flex items-center gap-4 bg-[#0F172A] text-white px-8 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-[#4EA62F] transition-all duration-700 active:scale-95 shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                              >
                                Next Phase
                                <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#4EA62F] transition-all duration-500">
                                   <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </button>
                            ) : (
                              <button 
                                type="submit"
                                className="group flex items-center gap-4 bg-[#4EA62F] text-white px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-[0_20px_40px_rgba(78,166,47,0.2)] hover:scale-105 active:scale-95 transition-all duration-700"
                              >
                                Complete Protocol
                                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                              </button>
                            )}
                         </div>
                      </form>
                   </motion.div>
                 ) : (
                   <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.8, ease: "easeOut" }}
                     className="text-center space-y-10"
                   >
                      <div className="w-24 h-24 bg-[#4EA62F] rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl shadow-[#4EA62F]/30 overflow-hidden relative group">
                         <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                         <ShieldCheck size={40} className="text-white relative z-10" />
                      </div>
                      
                      <div className="space-y-4">
                         <h3 className="text-4xl lg:text-6xl font-black text-[#0F172A] uppercase tracking-tighter leading-none font-['Outfit',sans-serif]">Submission <span className="text-[#4EA62F]">Locked</span></h3>
                         <p className="text-xl font-bold text-black/40 max-w-md mx-auto">
                            Inquiry Protocol #8192 initialized. A Senior Strategist will review your metrics and contact you within 24 operational hours.
                         </p>
                      </div>

                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="text-[11px] font-black uppercase tracking-widest text-[#4EA62F] hover:underline"
                      >
                         Initialize New Inquiry
                      </button>
                   </motion.div>
                 )}
              </AnimatePresence>
           </div>

        </div>

        {/* Global Footer Node */}
        <div className="mt-24 pt-20 border-t border-black/5 flex flex-wrap gap-12 lg:gap-32 justify-center lg:justify-start">
           {[
             { label: "Global Coverage", val: "140+ Countries" },
             { label: "Success Quotient", val: "99.2% Verified" },
             { label: "Encryption", val: "AES-512 Standard" }
           ].map((metric, i) => (
             <div key={i} className="flex flex-col gap-2">
               <span className="text-[9px] font-black uppercase tracking-widest text-black/20">{metric.label}</span>
               <span className="text-xl font-black text-[#0F172A] tracking-tighter uppercase font-['Outfit',sans-serif]">{metric.val}</span>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
};
