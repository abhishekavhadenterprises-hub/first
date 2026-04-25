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

export default function Housing() {
  const faq = serviceFAQData['housing'];
  
  if (!faq) return null;

  return (
    <div className="relative min-h-screen bg-[#FDFDFC]">
      
      <ModernBanner
        title="Student Housing Solutions"
        description="Find verified housing near campus. Browse premium dorms, studio apartments, and shared residential hubs."
        ctaText="Search Housing"
        ctaLink="#providers"
        imageUrl="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80"
        showSocialLinks={false}
      />

      <AvailableServiceProviders />
      <HowToGetStartedSection serviceId="housing" />
      <ServiceComparisonSection serviceId="housing" />
      <TotalSavingsSection serviceId="housing" />
      <FAQSection 
        faqs={faq.items} 
        title={faq.title} 
        subtitle={faq.subtitle} 
        category="HOUSING HUD"
      />
      <WhenYouNeedThisSection serviceId="housing" />
      <ServiceOverviewCompare />
      
      <Footer />
    </div>
  );
}
