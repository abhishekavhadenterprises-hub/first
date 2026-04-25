import { ModernBanner } from '@/app/components/ModernBanner';
import { AvailableServiceProviders } from '@/app/components/AvailableServiceProviders';
import { HowToGetStartedSection } from '@/app/components/HowToGetStartedSection';
import { ServiceComparisonSection } from '@/app/components/ServiceComparisonSection';
import { TotalSavingsSection } from '@/app/components/TotalSavingsSection';
import { FAQSection } from '@/app/components/blog/FAQSection';
import { serviceFAQData } from '@/app/data/faqData';
import { WhenYouNeedThisSection } from '@/app/components/WhenYouNeedThisSection';
import { ServiceOverviewCompare } from '@/app/components/ServiceOverviewCompare';
import { Footer } from '@/app/components/Footer';

export default function SimCards() {
  const faq = serviceFAQData['sim-cards'];

  return (
    <div className="relative min-h-screen bg-[#FDFDFC]">

      <ModernBanner
        title="SIM Cards for Students"
        description="Affordable SIM plans with fast 5G data and institutional coverage. Stay connected with the best mobile networks globally."
        ctaText="Compare Plans"
        ctaLink="#providers"
        imageUrl="https://images.unsplash.com/photo-1633454301558-0adccf60386c?w=1200&q=80"
        showSocialLinks={false}
      />

      <AvailableServiceProviders />
      <HowToGetStartedSection serviceId="sim-cards" />
      <ServiceComparisonSection serviceId="sim-cards" />
      <TotalSavingsSection serviceId="sim-cards" />
      <FAQSection
        faqs={faq.items}
        title={faq.title}
        subtitle={faq.subtitle}
        category="CONNECTIVITY HUD"
      />
      <ServiceOverviewCompare />

      <Footer />
    </div>
  );
}
