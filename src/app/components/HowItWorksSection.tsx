import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Compass, GraduationCap, Map, Sparkles, BookOpen, Rocket } from 'lucide-react';

interface StepCardProps {
  phase: string;
  title: string;
  subtitle: string;
  description?: string;
  pills: string[];
  index: number;
  gradientColors: string[];
  icon: React.ReactNode;
  isLast?: boolean;
}

function StepCard({ phase, title, subtitle, description, pills, index, gradientColors, icon, isLast }: StepCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((e.clientY - rect.top - centerY) / centerY) * -4;
    const rotY = ((e.clientX - rect.left - centerX) / centerX) * 4;
    
    if (cardRef.current) {
      cardRef.current.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
    }
  };

  const onMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  };

  return (
    <div
      className={`sticky top-[12vh] h-[70vh] w-full ${isLast ? "mb-0" : "mb-[25vh]"}`}
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={onMouseLeave}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full rounded-[4rem] overflow-hidden flex items-center px-12 lg:px-20 bg-[#C7EABB] border border-black/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] transition-all duration-700 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          background: 'linear-gradient(135deg, #C7EABB 0%, #D8F2D0 100%)'
        }}
      >
        {/* Cinematic Illustration */}
        <div className="absolute right-[-5%] bottom-[-5%] opacity-10 text-[#4EA62F] rotate-[-12deg] pointer-events-none scale-[1.5]">
          {icon}
        </div>

        {/* Cursor Glow */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none opacity-100"
            style={{
              background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.4), transparent 40%)`,
            }}
          />
        )}

        {/* Content */}
        <div className="relative z-10 max-w-[800px] pointer-events-none">
          <span className="block text-[#4EA62F] text-[11px] tracking-[6px] mb-8 uppercase font-[900] opacity-80 decoration-[#4EA62F]/30 decoration-2 underline-offset-8">
            {phase}
          </span>
          <h3 className="text-[clamp(3rem,10vw,6rem)] font-[1000] text-[#0F172A] mb-4 leading-[0.85] uppercase tracking-tighter">
            {title}
          </h3>
          <p className="text-[22px] lg:text-[28px] text-[#0F172A] mb-8 font-bold leading-tight tracking-tight">
            {subtitle}
          </p>
          {description && (
            <p className="text-base lg:text-lg text-[#0F172A]/50 mb-12 leading-relaxed font-medium max-w-[500px]">
              {description}
            </p>
          )}
          <div className="flex gap-4 flex-wrap pointer-events-auto">
            {pills.map((pill, i) => (
              <div
                key={i}
                className="px-8 py-3 rounded-full border border-black/5 text-[9px] uppercase tracking-[0.2em] font-black
                         text-[#0F172A] bg-white/40 backdrop-blur-md shadow-sm"
              >
                {pill}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // High-performance Scroll Dynamics removed manual listener

  const steps: Omit<StepCardProps, 'index'>[] = [
    {
      phase: 'Phase 01',
      title: 'Explore',
      subtitle: 'Discover universities worldwide',
      description: 'Browse thousands of courses, compare universities, and find the perfect match for your academic goals.',
      pills: ['Search', 'Compare', 'Shortlist'],
      gradientColors: ['#ECF6E8', '#C7EABB'], // Light Mint Gradient
      icon: <Map className="w-[500px] h-[500px]" />
    },
    {
      phase: 'Phase 02',
      title: 'Prepare',
      subtitle: 'Global Readiness',
      description: 'Access guides, checklists, and resources to prepare a winning application and secure your spot.',
      pills: ['Documents', 'Tests', 'Funding'],
      gradientColors: ['#F2F7EF', '#D8F2D0'], // Very Light Green Gradient
      icon: <BookOpen className="w-[500px] h-[500px]" />
    },
    {
      phase: 'Phase 03',
      title: 'Succeed',
      subtitle: 'Arrival & Beyond',
      description: 'Connect with peers, access support services, and thrive in your new academic environment.',
      pills: ['Community', 'Support', 'Resources'],
      gradientColors: ['#FFFFFF', '#E8F5E1'], // White to Mint Gradient
      icon: <Rocket className="w-[500px] h-[500px]" />
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-[100px] lg:py-20 md:py-16 max-md:py-14 px-8 lg:px-8 md:px-6 max-md:px-4 bg-white"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Stacking Cards */}
        <div ref={cardsRef} className="pb-[4vh]">
          {steps.map((step, index) => (
            <StepCard 
              key={index} 
              {...step} 
              index={index} 
              isLast={index === steps.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
