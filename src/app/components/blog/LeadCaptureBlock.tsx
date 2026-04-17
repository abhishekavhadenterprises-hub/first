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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-[#4B6E48] via-[#3a5638] to-[#2d4429] rounded-2xl p-8 md:p-12 text-white overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 backdrop-blur-sm"
          >
            <Icon className="w-8 h-8" />
          </motion.div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {config.title}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {config.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {config.ctas.map((cta, index) => (
              <Link key={index} to={cta.href}>
                <StandardButton
                  variant={cta.primary ? 'default' : 'outline'}
                  size="lg"
                  className={cta.primary ? 'bg-white text-[#4B6E48] hover:bg-gray-100' : 'border-2 border-white text-white hover:bg-white hover:text-[#4B6E48]'}
                >
                  {cta.label}
                </StandardButton>
              </Link>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Expert guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>No obligations</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}