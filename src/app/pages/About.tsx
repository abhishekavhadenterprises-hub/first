import { Footer } from '@/app/components/Footer';
import WhatWeDontDoSection from '@/app/components/WhatWeDontDoSection';
import { Navigation } from '@/app/components/Navigation';
import AboutBanner from '@/app/components/AboutBanner';
import { OurJourneyTimeline } from '@/app/components/OurJourneyTimeline';
import { OurMissionSection } from '@/app/components/OurMissionSection';
import { OurTeamSection } from '@/app/components/OurTeamSection';
import { GetInTouchSection } from '@/app/components/GetInTouchSection';

export default function About() {
  return (
    <div className="relative">
      <Navigation />
      <AboutBanner />
      <OurMissionSection />
      <OurJourneyTimeline />
      <WhatWeDontDoSection />
      <OurTeamSection />
      <GetInTouchSection />
      <Footer />
    </div>
  );
}