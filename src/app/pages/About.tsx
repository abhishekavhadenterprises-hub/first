import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Footer } from '@/app/components/Footer';
import AboutBanner from '@/app/components/AboutBanner';
import { OurJourneyTimeline } from '@/app/components/OurJourneyTimeline';
import { OurMissionSection } from '@/app/components/OurMissionSection';
import { GetInTouchSection } from '@/app/components/GetInTouchSection';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  useEffect(() => {
    // Multi-stage refresh to catch all image and layout shifts
    const triggers = [100, 500, 1500];
    const timers = triggers.map(delay =>
      setTimeout(() => ScrollTrigger.refresh(), delay)
    );

    window.scrollTo(0, 0);

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="relative bg-[#FDFDFC] overflow-visible">
      <main className="flex flex-col">
        <AboutBanner />
        <OurMissionSection />
        <OurJourneyTimeline />
        <GetInTouchSection />
      </main>
      <Footer />
    </div>
  );
}