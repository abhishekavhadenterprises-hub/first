import { motion } from 'motion/react';
import { forwardRef } from 'react';

interface StandardButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

export const StandardButton = forwardRef<HTMLButtonElement, StandardButtonProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.22 }}
        whileTap={{ scale: 0.97 }}
        className={`relative h-12 rounded-xl bg-white px-6 text-sm font-black uppercase tracking-widest text-[#0A0A0B] shadow-xl shadow-white/5 transition-all overflow-hidden group transform ${className}`}
        {...props}
      >
        <span className="relative z-20 group-hover:text-white transition-colors duration-500">{children}</span>
        
        {/* Background Hover Effect (White to Green) - Left to Right */}
        <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-10" />
      </motion.button>
    );
  }
);

StandardButton.displayName = 'StandardButton';
