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

export default function Insurance() {
  const faq = serviceFAQData['insurance'];

  return (
    <div className="relative min-h-screen bg-[#FDFDFC]">
      
      <ModernBanner
        title="Insurance & Health Coverage"
        description="Protect your assets and health. Access specialized student insurance for medical, housing, and travel needs."
        ctaText="Explore Coverage"
        ctaLink="#providers"
        imageUrl="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
        showSocialLinks={false}
      />

      <AvailableServiceProviders />
      <HowToGetStartedSection serviceId="insurance" />
      <ServiceComparisonSection serviceId="insurance" />
      <TotalSavingsSection serviceId="insurance" />
      <FAQSection 
        faqs={faq.items} 
        title={faq.title} 
        subtitle={faq.subtitle} 
        category="INSURANCE HUD"
      />
      <WhenYouNeedThisSection serviceId="insurance" />
      <ServiceOverviewCompare />
      
      <Footer />
    </div>
  );
}
