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

export default function BuildCredit() {
  const faq = serviceFAQData['credit-builder'] || serviceFAQData['banks'];

  return (
    <div className="relative min-h-screen bg-[#FDFDFC]">
      
      <ModernBanner
        title="Credit Building Strategy"
        description="Establish your UK financial reputation. Build a powerful credit score starting from zero with specialized student tools."
        ctaText="Start Building Credit"
        ctaLink="#providers"
        imageUrl="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80"
        showSocialLinks={false}
      />

      <AvailableServiceProviders />
      <HowToGetStartedSection serviceId="credit-builder" />
      <ServiceComparisonSection serviceId="credit-builder" />
      <TotalSavingsSection serviceId="credit-builder" />
      {faq && (
        <FAQSection 
          faqs={faq.items} 
          title={faq.title} 
          subtitle={faq.subtitle} 
          category="FINANCIAL REPUTATION"
        />
      )}
      <WhenYouNeedThisSection serviceId="credit-builder" />
      <ServiceOverviewCompare />
      
      <Footer />
    </div>
  );
}
