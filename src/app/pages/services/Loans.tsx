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

export default function Loans() {
  const faq = serviceFAQData['loans'] || serviceFAQData['banks']; // Fallback to banks if loans missing
  
  return (
    <div className="relative min-h-screen bg-[#FDFDFC]">
      <Navigation />
      
      <ModernBanner
        title="Student Funding & Loans"
        description="Fuel your academic ambition. Secure specialized international student loans with competitive rates and flexible repayment."
        ctaText="View Funding Options"
        ctaLink="#providers"
        imageUrl="https://images.unsplash.com/photo-1579621970795-87faff2f9050?w=1200&q=80"
        showSocialLinks={false}
      />

      <AvailableServiceProviders />
      <HowToGetStartedSection serviceId="loans" />
      <ServiceComparisonSection serviceId="loans" />
      <TotalSavingsSection serviceId="loans" />
      {faq && (
        <FAQSection 
          faqs={faq.items} 
          title={faq.title} 
          subtitle={faq.subtitle} 
          category="FINANCE HUD"
        />
      )}
      <WhenYouNeedThisSection serviceId="loans" />
      <ServiceOverviewCompare />
      
      <Footer />
    </div>
  );
}