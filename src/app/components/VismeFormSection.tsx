import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function VismeFormSection() {
  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-[1200px]"
      >
        <iframe
          src="https://forms.visme.co/formsPlayer/7vgegzv7-sample-custom-form"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="Custom Assessment Form"
          allow="autoplay; fullscreen"
        />
      </motion.div>
    </section>
  );
}
