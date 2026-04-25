import { ModernBanner } from '@/app/components/ModernBanner';
import { AvailableServiceProviders } from '@/app/components/AvailableServiceProviders';
import { HowToGetStartedSection } from '@/app/components/HowToGetStartedSection';
import { ServiceComparisonSection } from '@/app/components/ServiceComparisonSection';
import { TotalSavingsSection } from '@/app/components/TotalSavingsSection';
import { ServiceFAQSection } from '@/app/components/ServiceFAQSection';
import { WhenYouNeedThisSection } from '@/app/components/WhenYouNeedThisSection';
import { ServiceOverviewCompare } from '@/app/components/ServiceOverviewCompare';
import { Footer } from '@/app/components/Footer';

export default function Forex() {
  return (
    <div className="relative min-h-screen bg-[#FDFDFC]">
      
      <ModernBanner
        title="Global Wealth Transfer"
        description="Optimize your currency exchange. Access interbank rates for high-volume tuition and maintenance transfers."
        ctaText="Check Daily Rates"
        ctaLink="#providers"
        imageUrl="https://images.unsplash.com/photo-1611974714025-a8a2ad53b836?w=1200&q=80"
        showSocialLinks={false}
      />

      <AvailableServiceProviders />
      <HowToGetStartedSection serviceId="forex" />
      <ServiceComparisonSection serviceId="forex" />
      <TotalSavingsSection serviceId="forex" />
      <ServiceFAQSection serviceId="forex" />
      <WhenYouNeedThisSection serviceId="forex" />
      <ServiceOverviewCompare />
      
      <Footer />
    </div>
  );
}
