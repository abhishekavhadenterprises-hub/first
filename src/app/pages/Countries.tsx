import { CountriesBanner } from '@/app/components/CountriesBanner';
import { KeyFactorsSection } from '@/app/components/KeyFactorsSection';
import { PopularStudyDestinations } from '@/app/components/PopularStudyDestinations';
import { ImportantNoteSection } from '@/app/components/ImportantNoteSection';
import { HowWeHelpSection } from '@/app/components/HowWeHelpSection';
import { CountryConciergeSection } from '@/app/components/CountryConciergeSection';
import { UniversityComparisonSection } from '@/app/components/UniversityComparisonSection';
import { Footer } from '@/app/components/Footer';

export default function Countries() {
  return (
    <>
      <CountriesBanner />
      <KeyFactorsSection />
      <PopularStudyDestinations />
      <ImportantNoteSection />
      <HowWeHelpSection />
      <UniversityComparisonSection />
      <CountryConciergeSection />
      <Footer />
    </>
  );
}
