import { Navigation } from '@/app/components/Navigation';
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

export default function Visas() {
  const faq = serviceFAQData['visas'];
  
  if (!faq) return null;

  return (
    <div className="relative min-h-screen bg-[#FDFDFC]">
      <Navigation />
      
      <ModernBanner
        title="Visa & Immigration Support"
        description="Navigate your legal residency with precision. Access guidance for Student Visas and Graduate Route applications."
        ctaText="View Visa Options"
        ctaLink="#providers"
        imageUrl="https://images.unsplash.com/photo-1592288151075-813f89e80205?w=1200&q=80"
        showSocialLinks={false}
      />

      <AvailableServiceProviders />
      <HowToGetStartedSection serviceId="visas" />
      <ServiceComparisonSection serviceId="visas" />
      <TotalSavingsSection serviceId="visas" />
      <FAQSection 
        faqs={faq.items} 
        title={faq.title} 
        subtitle={faq.subtitle} 
        category="IMMIGRATION HUD"
      />
      <WhenYouNeedThisSection serviceId="visas" />
      <ServiceOverviewCompare />
      
      <Footer />
    </div>
  );
}