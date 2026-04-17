import { Navigation } from '@/app/components/Navigation';
import { ModernBanner } from '@/app/components/ModernBanner';
import { AvailableServiceProviders } from '@/app/components/AvailableServiceProviders';
import { HowToGetStartedSection } from '@/app/components/HowToGetStartedSection';
import { ServiceComparisonSection } from '@/app/components/ServiceComparisonSection';
import { TotalSavingsSection } from '@/app/components/TotalSavingsSection';
import { ServiceFAQSection } from '@/app/components/ServiceFAQSection';
import { WhenYouNeedThisSection } from '@/app/components/WhenYouNeedThisSection';
import { ServiceOverviewCompare } from '@/app/components/ServiceOverviewCompare';
import { Footer } from '@/app/components/Footer';

export default function Food() {
  return (
    <div className="relative min-h-screen bg-[#FDFDFC]">
      <Navigation />

      <ModernBanner
        title="Student Food & Sustenance"
        description="Maximize your nutritional budget. Compare top-tier grocer logistics, delivery hubs, and student-exclusive meal plans."
        ctaText="View Food Options"
        ctaLink="#providers"
        imageUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80"
        showSocialLinks={false}
      />

      <AvailableServiceProviders />
      <HowToGetStartedSection serviceId="food" />
      <ServiceComparisonSection serviceId="food" />
      <TotalSavingsSection serviceId="food" />
      <ServiceFAQSection serviceId="food" />
      <WhenYouNeedThisSection serviceId="food" />
      <ServiceOverviewCompare />
      
      <Footer />
    </div>
  );
}