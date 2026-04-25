'use client';

import React from 'react';
import { PremiumGetStartedForm } from '@/app/components/PremiumGetStartedForm';
import { Footer } from '@/app/components/Footer';

export default function GetStarted() {
  return (
    <div className="relative min-h-screen bg-[#FDFDFC] selection:bg-[#4EA62F] selection:text-white font-['Outfit',sans-serif]">
      {/* ── AMBIENT BACKGROUND ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#4EA62F]/5 rounded-full blur-[150px] opacity-40" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-blue-400/3 rounded-full blur-[120px] opacity-30" />
        
        {/* Technical HUD Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '48px 48px' }} />
      </div>

      {/* ── MAIN CONTENT ── */}
      <main className="relative z-10 pt-32 lg:pt-40">
        <div className="container mx-auto px-6 max-w-6xl">
          <PremiumGetStartedForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
