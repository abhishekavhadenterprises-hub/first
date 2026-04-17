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
        whileHover={{
          y: -2,
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#1a1f2e",
        }}
        whileTap={{ scale: 0.97 }}
        className={`h-12 rounded-xl bg-[#020617] px-6 text-sm font-medium text-white transition-colors ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

StandardButton.displayName = 'StandardButton';
