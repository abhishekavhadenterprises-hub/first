import { HomeBanner } from '@/app/components/HomeBanner';
import { ArrivalSuccessSection } from '@/app/components/ArrivalSuccessSection';
import { StudentToolkitShowcase } from '@/app/components/StudentToolkitShowcase';
import { CompareOptionsSection } from '@/app/components/CompareOptionsSection';
import { ConciergeGuidanceSection } from '@/app/components/ConciergeGuidanceSection';
import { WhoThisIsForSection } from '@/app/components/WhoThisIsForSection';
import { OurApproachTextReveal } from '@/app/components/OurApproachTextReveal';
import { PopularDestinations } from '@/app/components/PopularDestinations';
import { WorkflowSection } from '@/app/components/WorkflowSection';
import { ReadyToStartSection } from '@/app/components/ReadyToStartSection';
import { Footer } from '@/app/components/Footer';
import { Navigation } from '@/app/components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="relative">
        <HomeBanner />
        <ArrivalSuccessSection />
        <StudentToolkitShowcase />
        <PopularDestinations />
        <WorkflowSection />
        <CompareOptionsSection />
        <ConciergeGuidanceSection />
        {/* <WhoThisIsForSection /> */}
        <OurApproachTextReveal />
        <ReadyToStartSection />
        <Footer />
      </div>
    </>
  );
}