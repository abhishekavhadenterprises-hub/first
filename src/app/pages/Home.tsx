import { HomeBanner } from '@/app/components/HomeBanner';
import { ArrivalSuccessSection } from '@/app/components/ArrivalSuccessSection';
import { StudentToolkitShowcase } from '@/app/components/StudentToolkitShowcase';
import { ArrivalSuccessShowcase } from '@/app/components/ArrivalSuccessShowcase';
import { HomeCTA } from '@/app/components/HomeCTA';
import { ResourceHubSection } from '@/app/components/ResourceHubSection';
// import { ConciergeGuidanceSection } from '@/app/components/ConciergeGuidanceSection';
import { WhoThisIsForSection } from '@/app/components/WhoThisIsForSection';
// import { PopularDestinations } from '@/app/components/PopularDestinations';
// import { WorkflowSection } from '@/app/components/WorkflowSection';
// import { ReadyToStartSection } from '@/app/components/ReadyToStartSection';
import { Footer } from '@/app/components/Footer';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  useEffect(() => {
    // Refresh ScrollTrigger to ensure pinned offsets are correct after paint
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="relative">
        <HomeBanner />
        <ArrivalSuccessSection />
        <StudentToolkitShowcase />
        <ArrivalSuccessShowcase />
        <HomeCTA />
        <ResourceHubSection />
        <Footer />
      </div>
    </>
  );
}
