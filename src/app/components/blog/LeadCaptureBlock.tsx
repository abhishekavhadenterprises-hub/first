import { StandardButton } from '@/app/components/ui/standard-button';
import { Link } from 'react-router';
import { Sparkles, MessageCircle, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface LeadCaptureBlockProps {
  variant?: 'default' | 'consultation' | 'profile';
}

export function LeadCaptureBlock({ variant = 'default' }: LeadCaptureBlockProps) {
  const variants = {
    default: {
      title: 'Ready to Start Your Study Abroad Journey?',
      description: 'Get personalized guidance from our expert counselors and turn your dreams into reality.',
      icon: Sparkles,
      ctas: [
        { label: 'Get Started Free', href: '/profile', primary: true },
        { label: 'Book Consultation', href: '/contact', primary: false }
      ]
    },
    consultation: {
      title: 'Need Expert Guidance?',
      description: 'Talk to our study abroad experts and get answers to all your questions.',
      icon: MessageCircle,
      ctas: [
        { label: 'Free Consultation', href: '/contact', primary: true },
        { label: 'Explore Services', href: '/services', primary: false }
      ]
    },
    profile: {
      title: 'Check Your Eligibility',
      description: 'Create your profile and discover universities that match your profile perfectly.',
      icon: CheckCircle,
      ctas: [
        { label: 'Create Profile', href: '/profile', primary: true },
        { label: 'View Universities', href: '/universities', primary: false }
      ]
    }
  };

  const config = variants[variant];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className="relative bg-[#0F172A] rounded-[3rem] p-10 md:p-16 lg:p-20 text-white overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.2)] my-16 border border-white/5"
    >
      {/* Cinematic Background Elements */}
      <div className="absolute -top-[50%] -right-[10%] w-[80%] h-[200%] bg-[#4EA62F]/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute -bottom-[50%] -left-[10%] w-[80%] h-[200%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/5 border border-white/10 rounded-3xl mb-8 backdrop-blur-md shadow-2xl"
          >
            <Icon className="w-10 h-10 text-[#4EA62F]" />
          </motion.div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[1000] mb-6 leading-tight tracking-tighter uppercase font-['Outfit',sans-serif]">
            {config.title.split(' ').map((word, i, arr) => 
               i === arr.length - 1 ? <span key={i} className="text-[#4EA62F] italic font-light lowercase inline-block">{word}</span> : <span key={i}>{word} </span>
            )}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/60 font-medium mb-12 max-w-2xl mx-auto tracking-tight leading-relaxed">
            {config.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md">
            {config.ctas.map((cta, index) => (
              <Link key={index} to={cta.href} className="w-full sm:w-auto flex-1">
                <button
                  className={`w-full py-4 px-8 rounded-full font-black uppercase tracking-widest text-[11px] transition-all duration-300 ${
                    cta.primary 
                    ? 'bg-white text-[#0F172A] shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:bg-[#4EA62F] hover:text-white hover:shadow-[0_0_40px_rgba(78,166,47,0.4)] hover:scale-105' 
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105'
                  }`}
                >
                  {cta.label}
                </button>
              </Link>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8 w-full max-w-2xl">
            {['Free consultation', 'Expert guidance', 'No obligations'].map((text, i) => (
               <div key={i} className="flex items-center gap-2">
                 <div className="w-4 h-4 rounded-full bg-[#4EA62F]/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4EA62F]" />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-white/50">{text}</span>
               </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}