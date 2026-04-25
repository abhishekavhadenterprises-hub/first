import { ModernBanner } from '@/app/components/ModernBanner';
import { AvailableServiceProviders } from '@/app/components/AvailableServiceProviders';
import { HowToGetStartedSection } from '@/app/components/HowToGetStartedSection';
import { ServiceComparisonSection } from '@/app/components/ServiceComparisonSection';
import { TotalSavingsSection } from '@/app/components/TotalSavingsSection';
import { ServiceFAQSection } from '@/app/components/ServiceFAQSection';
import { WhenYouNeedThisSection } from '@/app/components/WhenYouNeedThisSection';
import { ServiceOverviewCompare } from '@/app/components/ServiceOverviewCompare';
import { Footer } from '@/app/components/Footer';

export default function Taxes() {
  return (
    <div className="relative min-h-screen bg-[#FDFDFC]">
      
      <ModernBanner
        title="Fiscal & Tax Compliance"
        description="Master your UK tax obligations. Reclaim overpaid National Insurance and manage your NI Number applications with ease."
        ctaText="Check Tax Status"
        ctaLink="#providers"
        imageUrl="https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1200&q=80"
        showSocialLinks={false}
      />

      <AvailableServiceProviders />
      <HowToGetStartedSection serviceId="taxes" />
      <ServiceComparisonSection serviceId="taxes" />
      <TotalSavingsSection serviceId="taxes" />
      <ServiceFAQSection serviceId="taxes" />
      <WhenYouNeedThisSection serviceId="taxes" />
      <ServiceOverviewCompare />
      
      <Footer />
    </div>
  );
}
