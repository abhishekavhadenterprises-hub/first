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

export default function Courses() {
  return (
    <div className="relative min-h-screen bg-[#FDFDFC]">
      <Navigation />
      
      <ModernBanner
        title="Academic Course Selection"
        description="Design your academic destiny. Compare premium UK university programs and specialized vocational certifications."
        ctaText="Browse Programs"
        ctaLink="#providers"
        imageUrl="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80"
        showSocialLinks={false}
      />

      <AvailableServiceProviders />
      <HowToGetStartedSection serviceId="courses" />
      <ServiceComparisonSection serviceId="courses" />
      <TotalSavingsSection serviceId="courses" />
      <ServiceFAQSection serviceId="courses" />
      <WhenYouNeedThisSection serviceId="courses" />
      <ServiceOverviewCompare />
      
      <Footer />
    </div>
  );
}