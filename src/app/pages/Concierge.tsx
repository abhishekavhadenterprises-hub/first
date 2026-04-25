import { ConciergeBanner } from '@/app/components/ConciergeBanner';
import { ConciergeSupportShowcase } from '@/app/components/ConciergeSupportShowcase';
import { ConciergeProcessSection } from '@/app/components/ConciergeProcessSection';
import { ConciergeEligibilitySection } from '@/app/components/ConciergeEligibilitySection';
import { PremiumConciergeForm } from '@/app/components/PremiumConciergeForm';
import { Footer } from '@/app/components/Footer';
import { motion } from 'motion/react';

export default function Concierge() {
  return (
    <div className="relative bg-[#FDFDFC]">
      <ConciergeBanner />
      <ConciergeSupportShowcase />
      <ConciergeProcessSection />
      <ConciergeEligibilitySection />
      <PremiumConciergeForm />
      <Footer />
    </div>
  );
}
