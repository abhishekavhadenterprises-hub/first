import { Navigation } from '@/app/components/Navigation';
import { ConciergeBanner } from '@/app/components/ConciergeBanner';
import { ConciergeSupportShowcase } from '@/app/components/ConciergeSupportShowcase';
import { ConciergeProcessSection } from '@/app/components/ConciergeProcessSection';
import { ConciergeEligibilitySection } from '@/app/components/ConciergeEligibilitySection';
import { PremiumConciergeForm } from '@/app/components/PremiumConciergeForm';
import { TextRevealSection } from '@/app/components/TextRevealSection';
import { OurApproachSection } from '@/app/components/OurApproachSection';
import { ConciergeCTA } from '@/app/components/ConciergeCTA';
import { Footer } from '@/app/components/Footer';
import { motion } from 'motion/react';







export default function Concierge() {
  return (
    <div className="relative bg-[#FDFDFC]">
      <Navigation />
      
      <ConciergeBanner />

      <ConciergeSupportShowcase />

      <ConciergeProcessSection />

      <ConciergeEligibilitySection />

      <PremiumConciergeForm />

      {/* Text Reveal Section */}
      <TextRevealSection />

      {/* Our Approach Section */}
      <OurApproachSection />

      {/* Concierge CTA Section */}
      <ConciergeCTA />

      <Footer />
    </div>
  );
}