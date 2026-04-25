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

export default function Banks() {
  const faq = serviceFAQData['banks'];

  return (
    <div className="relative min-h-screen bg-[#FDFDFC]">

      <ModernBanner
        title="Student Banking & Finance"
        description="Master your global wealth. Secure high-speed student accounts with zero FX fees and advanced asset management tools."
        ctaText="View Bank Options"
        ctaLink="#providers"
        imageUrl="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=1200&q=80"
        showSocialLinks={false}
      />

      <AvailableServiceProviders />
      <HowToGetStartedSection serviceId="banks" />
      <ServiceComparisonSection serviceId="banks" />
      <TotalSavingsSection serviceId="banks" />
      <FAQSection 
        faqs={faq.items} 
        title={faq.title} 
        subtitle={faq.subtitle} 
        category="FINANCIAL HUD"
      />
      <WhenYouNeedThisSection serviceId="banks" />
      <ServiceOverviewCompare />
      
      <Footer />
    </div>
  );
}
