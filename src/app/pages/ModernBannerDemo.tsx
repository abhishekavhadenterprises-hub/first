import { ModernNavigation } from '@/app/components/ModernNavigation';
import { ModernBanner } from '@/app/components/ModernBanner';
import { Footer } from '@/app/components/Footer';

export default function ModernBannerDemo() {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <ModernNavigation brandName="Biometic" />
      
      <main className="w-full">
        <ModernBanner
          title="Experience Study Abroad Like Never Before"
          description="Discover world-class universities with personalized guidance, streamlined applications, and comprehensive support throughout your international education journey."
          ctaText="Get Started"
          ctaLink="/contact"
          imageUrl="https://i.imghippo.com/files/gJf9722OfM.png"
          showSocialLinks={true}
        />

        {/* Additional content sections can go here */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              We provide comprehensive support for students pursuing international education opportunities.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
