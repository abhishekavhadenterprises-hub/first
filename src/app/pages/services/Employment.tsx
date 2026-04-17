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

export default function Employment() {
  return (
    <div className="relative min-h-screen bg-[#FDFDFC]">
      <Navigation />
      
      <ModernBanner
        title="Student Employment Pathways"
        description="Launch your career in the UK. Find part-time roles, internships, and graduate placements via student-exclusive hubs."
        ctaText="View Job Opportunities"
        ctaLink="#providers"
        imageUrl="https://images.unsplash.com/photo-1512418490979-92798ccc1380?w=1200&q=80"
        showSocialLinks={false}
      />

      <AvailableServiceProviders />
      <HowToGetStartedSection serviceId="employment" />
      <ServiceComparisonSection serviceId="employment" />
      <TotalSavingsSection serviceId="employment" />
      <ServiceFAQSection serviceId="employment" />
      <WhenYouNeedThisSection serviceId="employment" />
      <ServiceOverviewCompare />
      
      <Footer />
    </div>
  );
}