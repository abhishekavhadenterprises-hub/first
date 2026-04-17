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

export default function Events() {
  return (
    <div className="relative min-h-screen bg-[#FDFDFC]">
      <Navigation />
      
      <ModernBanner
        title="Student Engagement & Events"
        description="Discover your social ecosystem. Join societies, attend welcome rituals, and explore community events across the UK."
        ctaText="Browse Local Events"
        ctaLink="#providers"
        imageUrl="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80"
        showSocialLinks={false}
      />

      <AvailableServiceProviders />
      <HowToGetStartedSection serviceId="social-events" />
      <ServiceComparisonSection serviceId="social-events" />
      <TotalSavingsSection serviceId="social-events" />
      <ServiceFAQSection serviceId="social-events" />
      <WhenYouNeedThisSection serviceId="social-events" />
      <ServiceOverviewCompare />
      
      <Footer />
    </div>
  );
}