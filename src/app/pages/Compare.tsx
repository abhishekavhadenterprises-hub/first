import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { 
  GraduationCap, 
  User, 
  X, 
  Plus, 
  Info,
  DollarSign,
  BookOpen,
  Briefcase,
  Globe,
  Filter,
  Save,
  ChevronDown,
  Pin
} from 'lucide-react';
import { Footer } from '@/app/components/Footer';
import { Navigation } from '@/app/components/Navigation';
import { universityComparisonData } from '@/app/data/universityComparisonData';
import { CompareTabsAndFilters } from '@/app/components/CompareTabsAndFilters';
import { SelectedCountriesSection } from '@/app/components/SelectedCountriesSection';
import { CostsComparisonSection } from '@/app/components/CostsComparisonSection';
import { BasicInformationSection } from '@/app/components/BasicInformationSection';
import { ComparisonSection } from '@/app/components/ComparisonSection';

export default function Compare() {
  const [activeTab, setActiveTab] = useState<'countries' | 'universities'>('countries');
  const [selectedCountries, setSelectedCountries] = useState(['United States', 'United Kingdom']);
  const [selectedUniversities, setSelectedUniversities] = useState(['Harvard University', 'University of Oxford']);
  const [showFiltersDropdown, setShowFiltersDropdown] = useState(false);
  const [showAddCountryDropdown, setShowAddCountryDropdown] = useState(false);
  const [showAddUniversityDropdown, setShowAddUniversityDropdown] = useState(false);
  const [showCountryFilterDropdown, setShowCountryFilterDropdown] = useState(false);
  const [selectedCountryFilter, setSelectedCountryFilter] = useState<string>('All Countries');
  const [highlightDifferences, setHighlightDifferences] = useState(false);

  // Available countries to add
  const availableCountries = [
    { name: 'United Kingdom', code: 'GB' },
    { name: 'Canada', code: 'CA' },
    { name: 'Australia', code: 'AU' },
    { name: 'Germany', code: 'DE' },
    { name: 'Singapore', code: 'SG' }
  ];

  // Country data with recommendations
  const countryData: Record<string, { code: string; recommendation: string }> = {
    'United States': { code: 'US', recommendation: 'Best for top-ranked universities' },
    'United Kingdom': { code: 'GB', recommendation: 'Best for shorter degree duration' },
    'Canada': { code: 'CA', recommendation: 'Best for post-study work visa' },
    'Australia': { code: 'AU', recommendation: 'Best for lifestyle & climate' },
    'Germany': { code: 'DE', recommendation: 'Best for low tuition costs' },
    'Singapore': { code: 'SG', recommendation: 'Best for Asian business hub' }
  };

  // Available universities
  const availableUniversities = [
    { name: 'Harvard University', code: 'HAR', country: 'United States' },
    { name: 'Stanford University', code: 'STA', country: 'United States' },
    { name: 'MIT', code: 'MIT', country: 'United States' },
    { name: 'University of Oxford', code: 'OXF', country: 'United Kingdom' },
    { name: 'University of Cambridge', code: 'CAM', country: 'United Kingdom' },
    { name: 'Imperial College London', code: 'IMP', country: 'United Kingdom' },
    { name: 'University of Toronto', code: 'UTO', country: 'Canada' },
    { name: 'McGill University', code: 'MCG', country: 'Canada' },
    { name: 'University of Melbourne', code: 'UME', country: 'Australia' },
    { name: 'Australian National University', code: 'ANU', country: 'Australia' },
    { name: 'Technical University of Munich', code: 'TUM', country: 'Germany' },
    { name: 'LMU Munich', code: 'LMU', country: 'Germany' },
    { name: 'National University of Singapore', code: 'NUS', country: 'Singapore' },
    { name: 'Nanyang Technological University', code: 'NTU', country: 'Singapore' }
  ];

  // University data with recommendations
  const universityData: Record<string, { code: string; country: string; recommendation: string }> = {
    'Harvard University': { code: 'HAR', country: 'United States', recommendation: 'Best for overall prestige & networking' },
    'Stanford University': { code: 'STA', country: 'United States', recommendation: 'Best for tech & entrepreneurship' },
    'MIT': { code: 'MIT', country: 'United States', recommendation: 'Best for STEM excellence' },
    'University of Oxford': { code: 'OXF', country: 'United Kingdom', recommendation: 'Best for humanities & tradition' },
    'University of Cambridge': { code: 'CAM', country: 'United Kingdom', recommendation: 'Best for research & sciences' },
    'Imperial College London': { code: 'IMP', country: 'United Kingdom', recommendation: 'Best for engineering & medicine' },
    'University of Toronto': { code: 'UTO', country: 'Canada', recommendation: 'Best for diverse programs' },
    'McGill University': { code: 'MCG', country: 'Canada', recommendation: 'Best for international students' },
    'University of Melbourne': { code: 'UME', country: 'Australia', recommendation: 'Best for arts & culture' },
    'Australian National University': { code: 'ANU', country: 'Australia', recommendation: 'Best for public policy' },
    'Technical University of Munich': { code: 'TUM', country: 'Germany', recommendation: 'Best for affordable engineering' },
    'LMU Munich': { code: 'LMU', country: 'Germany', recommendation: 'Best for liberal arts in Germany' },
    'National University of Singapore': { code: 'NUS', country: 'Singapore', recommendation: 'Best for Asian business' },
    'Nanyang Technological University': { code: 'NTU', country: 'Singapore', recommendation: 'Best for technology in Asia' }
  };

  // Comprehensive country comparison data
  const comparisonData: Record<string, Record<string, Record<string, string>>> = {
    'United States': {
      'Basic Information': {
        'Capital City': 'Washington, D.C.',
        'Official Language(s)': 'English',
        'Climate': 'Varies (Continental, Subtropical)',
        'Safety Rating': '4/5'
      },
      'Costs': {
        'Tuition Range (Annual)': '$25,000 - $60,000',
        'Living Costs (Annual)': '$12,000 - $18,000',
        'Total Cost Range': '$37,000 - $78,000',
        'Health Insurance': '$1,500 - $2,500/year'
      },
      'Academic System': {
        'Academic System': 'Credit-based, GPA (4.0 scale)',
        'Degree Length': '4-year Bachelor\'s, 2-year Master\'s',
        'Intake Seasons': 'Fall (Aug/Sep) & Spring (Jan)',
        'Language Requirement': 'TOEFL 80+ or IELTS 6.5+'
      },
      'Visa & Work Rights': {
        'Student Visa Type': 'F-1 Visa',
        'Visa Processing Time': '2-4 weeks',
        'Work While Studying': 'Up to 20 hrs/week on-campus',
        'Post-Study Work Rights': 'OPT: 12 months (36 for STEM)'
      },
      'Opportunities': {
        'Top Universities': 'Harvard, MIT, Stanford, Yale',
        'Popular Cities': 'Boston, NYC, San Francisco, LA',
        'Job Market Strengths': 'Tech, Finance, Healthcare',
        'Permanent Residency': 'H-1B → Green Card pathway'
      }
    },
    'United Kingdom': {
      'Basic Information': {
        'Capital City': 'London',
        'Official Language(s)': 'English',
        'Climate': 'Temperate Maritime',
        'Safety Rating': '4.5/5'
      },
      'Costs': {
        'Tuition Range (Annual)': '£15,000 - £40,000',
        'Living Costs (Annual)': '£12,000 - £15,000',
        'Total Cost Range': '£27,000 - £55,000',
        'Health Insurance': 'IHS fee: £470/year'
      },
      'Academic System': {
        'Academic System': 'Module-based, Honours classification',
        'Degree Length': '3-year Bachelor\'s, 1-year Master\'s',
        'Intake Seasons': 'September/October',
        'Language Requirement': 'IELTS 6.0-7.0 or TOEFL 80-100'
      },
      'Visa & Work Rights': {
        'Student Visa Type': 'Student Visa (Tier 4)',
        'Visa Processing Time': '3 weeks',
        'Work While Studying': 'Up to 20 hrs/week',
        'Post-Study Work Rights': 'Graduate Route: 2 years (3 for PhD)'
      },
      'Opportunities': {
        'Top Universities': 'Oxford, Cambridge, Imperial, LSE',
        'Popular Cities': 'London, Edinburgh, Manchester',
        'Job Market Strengths': 'Finance, Tech, Creative Industries',
        'Permanent Residency': 'Skilled Worker visa pathway'
      }
    },
    'Canada': {
      'Basic Information': {
        'Capital City': 'Ottawa',
        'Official Language(s)': 'English & French',
        'Climate': 'Continental (Cold winters)',
        'Safety Rating': '5/5'
      },
      'Costs': {
        'Tuition Range (Annual)': 'CAD $15,000 - $35,000',
        'Living Costs (Annual)': 'CAD $12,000 - $15,000',
        'Total Cost Range': 'CAD $27,000 - $50,000',
        'Health Insurance': 'CAD $600 - $900/year'
      },
      'Academic System': {
        'Academic System': 'Credit-based, GPA (4.0 scale)',
        'Degree Length': '4-year Bachelor\'s, 2-year Master\'s',
        'Intake Seasons': 'September (main), January, May',
        'Language Requirement': 'IELTS 6.5+ or TOEFL 90+'
      },
      'Visa & Work Rights': {
        'Student Visa Type': 'Study Permit',
        'Visa Processing Time': '4-6 weeks',
        'Work While Studying': 'Up to 20 hrs/week off-campus',
        'Post-Study Work Rights': 'PGWP: up to 3 years'
      },
      'Opportunities': {
        'Top Universities': 'Toronto, UBC, McGill, Waterloo',
        'Popular Cities': 'Toronto, Vancouver, Montreal',
        'Job Market Strengths': 'Tech, Healthcare, Engineering',
        'Permanent Residency': 'Express Entry, PNP pathways'
      }
    },
    'Australia': {
      'Basic Information': {
        'Capital City': 'Canberra',
        'Official Language(s)': 'English',
        'Climate': 'Varies (Tropical to Temperate)',
        'Safety Rating': '4.5/5'
      },
      'Costs': {
        'Tuition Range (Annual)': 'AUD $20,000 - $45,000',
        'Living Costs (Annual)': 'AUD $18,000 - $21,000',
        'Total Cost Range': 'AUD $38,000 - $66,000',
        'Health Insurance': 'OSHC: AUD $500 - $700/year'
      },
      'Academic System': {
        'Academic System': 'Credit-based, HD/D/C/P/F grading',
        'Degree Length': '3-4 year Bachelor\'s, 2-year Master\'s',
        'Intake Seasons': 'February (main), July',
        'Language Requirement': 'IELTS 6.5+ or TOEFL 79+'
      },
      'Visa & Work Rights': {
        'Student Visa Type': 'Subclass 500',
        'Visa Processing Time': '4-6 weeks',
        'Work While Studying': 'Up to 48 hrs/fortnight',
        'Post-Study Work Rights': 'PSW: 2-4 years (degree dependent)'
      },
      'Opportunities': {
        'Top Universities': 'Melbourne, ANU, Sydney, UNSW',
        'Popular Cities': 'Melbourne, Sydney, Brisbane',
        'Job Market Strengths': 'Mining, Healthcare, Tech',
        'Permanent Residency': 'Skilled migration pathways'
      }
    },
    'Germany': {
      'Basic Information': {
        'Capital City': 'Berlin',
        'Official Language(s)': 'German (English programs available)',
        'Climate': 'Temperate Continental',
        'Safety Rating': '4.5/5'
      },
      'Costs': {
        'Tuition Range (Annual)': '€0 - €20,000',
        'Living Costs (Annual)': '€10,000 - €12,000',
        'Total Cost Range': '€10,000 - €32,000',
        'Health Insurance': '€110/month (~€1,320/year)'
      },
      'Academic System': {
        'Academic System': 'ECTS credits, 1.0-5.0 grading',
        'Degree Length': '3-year Bachelor\'s, 2-year Master\'s',
        'Intake Seasons': 'October (Winter), April (Summer)',
        'Language Requirement': 'German: TestDaF/DSH or English: IELTS 6.0+'
      },
      'Visa & Work Rights': {
        'Student Visa Type': 'National Visa (Student)',
        'Visa Processing Time': '6-12 weeks',
        'Work While Studying': 'Up to 120 full days/year',
        'Post-Study Work Rights': '18 months job seeker visa'
      },
      'Opportunities': {
        'Top Universities': 'TUM, LMU, Heidelberg, RWTH',
        'Popular Cities': 'Berlin, Munich, Frankfurt',
        'Job Market Strengths': 'Engineering, Automotive, Tech',
        'Permanent Residency': 'EU Blue Card pathway'
      }
    },
    'Singapore': {
      'Basic Information': {
        'Capital City': 'Singapore (City-State)',
        'Official Language(s)': 'English, Malay, Mandarin, Tamil',
        'Climate': 'Tropical (Hot & Humid)',
        'Safety Rating': '5/5'
      },
      'Costs': {
        'Tuition Range (Annual)': 'SGD $15,000 - $35,000',
        'Living Costs (Annual)': 'SGD $12,000 - $18,000',
        'Total Cost Range': 'SGD $27,000 - $53,000',
        'Health Insurance': 'Included in student fees'
      },
      'Academic System': {
        'Academic System': 'CAP (5.0 scale), modular credits',
        'Degree Length': '3-4 year Bachelor\'s, 1-2 year Master\'s',
        'Intake Seasons': 'August (main)',
        'Language Requirement': 'IELTS 6.5+ or TOEFL 90+'
      },
      'Visa & Work Rights': {
        'Student Visa Type': 'Student\'s Pass',
        'Visa Processing Time': '2-4 weeks',
        'Work While Studying': 'Up to 16 hrs/week (with approval)',
        'Post-Study Work Rights': '1-year job search pass (eligible grads)'
      },
      'Opportunities': {
        'Top Universities': 'NUS, NTU, SMU',
        'Popular Cities': 'Singapore (City-State)',
        'Job Market Strengths': 'Finance, Tech, Logistics',
        'Permanent Residency': 'Employment Pass → PR pathway'
      }
    }
  };

  const removeCountry = (country: string) => {
    if (selectedCountries.length > 1) {
      setSelectedCountries(selectedCountries.filter(c => c !== country));
    }
  };

  const addCountry = (countryName: string) => {
    if (!selectedCountries.includes(countryName)) {
      setSelectedCountries([...selectedCountries, countryName]);
    }
    setShowAddCountryDropdown(false);
  };

  const removeUniversity = (university: string) => {
    if (selectedUniversities.length > 1) {
      setSelectedUniversities(selectedUniversities.filter(u => u !== university));
    }
  };

  const addUniversity = (universityName: string) => {
    if (!selectedUniversities.includes(universityName)) {
      setSelectedUniversities([...selectedUniversities, universityName]);
    }
    setShowAddUniversityDropdown(false);
  };

  const handleSaveComparison = () => {
    // Placeholder for save functionality
    alert('Comparison saved! (This is a placeholder - feature coming soon)');
  };

  // Filtered universities based on country filter
  const filteredUniversities = selectedCountryFilter === 'All Countries'
    ? availableUniversities
    : availableUniversities.filter(u => u.country === selectedCountryFilter);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Header removed - using Navigation component instead */}

      <main className="flex-1 bg-[#FAFAFA] px-4 md:px-8 lg:px-12">
        
        {/* Top Bar with Filters and Save Comparison */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1"></div>
          <div className="flex items-center gap-3">
            {/* Filters Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowFiltersDropdown(!showFiltersDropdown)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#475569] bg-white border border-[#E2E8F0] rounded-lg hover:border-[#CBD5E1] transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filters
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {showFiltersDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-64 bg-white border border-[#E2E8F0] rounded-lg shadow-lg z-50"
                  >
                    <div className="p-4 space-y-3">
                      <div>
                        <label className="text-xs font-medium text-[#64748B] uppercase tracking-wide">Budget Range</label>
                        <div className="mt-2 space-y-2">
                          <label className="flex items-center gap-2 text-sm text-[#475569] cursor-pointer">
                            <input type="checkbox" className="rounded border-[#CBD5E1]" />
                            Under $20k/year
                          </label>
                          <label className="flex items-center gap-2 text-sm text-[#475569] cursor-pointer">
                            <input type="checkbox" className="rounded border-[#CBD5E1]" />
                            $20k - $40k/year
                          </label>
                          <label className="flex items-center gap-2 text-sm text-[#475569] cursor-pointer">
                            <input type="checkbox" className="rounded border-[#CBD5E1]" />
                            Over $40k/year
                          </label>
                        </div>
                      </div>
                      <div className="border-t border-[#F1F5F9] pt-3">
                        <label className="text-xs font-medium text-[#64748B] uppercase tracking-wide">Work Rights</label>
                        <div className="mt-2 space-y-2">
                          <label className="flex items-center gap-2 text-sm text-[#475569] cursor-pointer">
                            <input type="checkbox" className="rounded border-[#CBD5E1]" />
                            Post-study work visa
                          </label>
                          <label className="flex items-center gap-2 text-sm text-[#475569] cursor-pointer">
                            <input type="checkbox" className="rounded border-[#CBD5E1]" />
                            PR pathway
                          </label>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Save Comparison Button */}
            <button
              onClick={handleSaveComparison}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#4B6E48] rounded-lg hover:bg-[#3d5a3a] transition-colors"
            >
              <Save className="w-4 h-4" />
              Save Comparison
            </button>
          </div>
        </div>

        {/* Page Title & Intro */}
        <div className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="text-[32px] font-semibold text-[#0F172A] mb-2"
          >
            Compare your options
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.08 }}
            className="text-base text-[#64748B] leading-relaxed max-w-2xl"
          >
            Make informed decisions by comparing countries and universities side by side. 
            See differences in costs, academic systems, work rights, and career opportunities.
          </motion.p>
        </div>

        {/* Compare Toggle & Filters */}
        <CompareTabsAndFilters
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Selected Countries Section */}
        {activeTab === 'countries' && (
          <>
        <SelectedCountriesSection
          selectedCountries={selectedCountries}
          highlightDifferences={highlightDifferences}
          setHighlightDifferences={setHighlightDifferences}
          removeCountry={removeCountry}
          addCountry={addCountry}
          availableCountries={availableCountries}
          countryData={countryData}
          showAddCountryDropdown={showAddCountryDropdown}
          setShowAddCountryDropdown={setShowAddCountryDropdown}
        />

        {/* Basic Information Comparison Card */}
        <BasicInformationSection
          selectedCountries={selectedCountries}
          countryData={countryData}
          comparisonData={comparisonData}
        />

        {/* Costs Comparison Card */}
        <CostsComparisonSection
          selectedCountries={selectedCountries}
          countryData={countryData}
          comparisonData={comparisonData}
        />

        {/* Academic System Comparison Card */}
        <ComparisonSection
          title="Academic System"
          icon={BookOpen}
          categoryKey="Academic System"
          labels={['Academic System', 'Degree Length', 'Intake Seasons', 'Language Requirement']}
          selectedCountries={selectedCountries}
          countryData={countryData}
          comparisonData={comparisonData}
        />

        {/* Visa & Work Rights Comparison Card */}
        <ComparisonSection
          title="Visa & Work Rights"
          icon={Briefcase}
          categoryKey="Visa & Work Rights"
          labels={['Student Visa Type', 'Visa Processing Time', 'Work While Studying', 'Post-Study Work Rights']}
          selectedCountries={selectedCountries}
          countryData={countryData}
          comparisonData={comparisonData}
        />

        {/* Opportunities Comparison Card */}
        <ComparisonSection
          title="Opportunities"
          icon={GraduationCap}
          categoryKey="Opportunities"
          labels={['Top Universities', 'Popular Cities', 'Job Market Strengths', 'Permanent Residency']}
          selectedCountries={selectedCountries}
          countryData={countryData}
          comparisonData={comparisonData}
        />

        {/* About This Comparison Info Box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          className="mt-8 bg-[#EEF5FF] border border-[#BFDBFE] rounded-xl p-6 flex gap-4"
        >
          <Info className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-[#1E40AF] mb-2">About this comparison</h4>
            <p className="text-sm text-[#475569] leading-relaxed">
              Data is compiled from official government sources, university websites, and verified student reports. 
              Costs and requirements may vary by institution and individual circumstances. Always verify specific details 
              with the university and relevant authorities before making decisions.
            </p>
          </div>
        </motion.div>
        </>
        )}

        {/* Selected Universities Section */}
        {activeTab === 'universities' && (
          <>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.24, ease: "easeOut", delay: 0.18 }}
          className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6 mb-6"
        >
          {/* Header with Highlight Differences & Filter by Country */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <h3 className="text-lg font-semibold text-[#0F172A]">Selected Universities</h3>
              
              {/* Filter by Country Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowCountryFilterDropdown(!showCountryFilterDropdown)}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-[#475569] bg-white border border-[#E2E8F0] rounded-lg hover:border-[#CBD5E1] transition-colors"
                >
                  {selectedCountryFilter}
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {showCountryFilterDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full mt-2 w-56 bg-white border border-[#E2E8F0] rounded-lg shadow-lg z-50"
                    >
                      <div className="p-2">
                        <button
                          onClick={() => {
                            setSelectedCountryFilter('All Countries');
                            setShowCountryFilterDropdown(false);
                          }}
                          className={`w-full px-3 py-2 text-left text-sm rounded-md transition-colors ${
                            selectedCountryFilter === 'All Countries'
                              ? 'bg-[#F0F7F0] text-[#4B6E48] font-medium'
                              : 'text-[#475569] hover:bg-[#F8FAFC]'
                          }`}
                        >
                          All Countries
                        </button>
                        {['United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'Singapore'].map((country) => (
                          <button
                            key={country}
                            onClick={() => {
                              setSelectedCountryFilter(country);
                              setShowCountryFilterDropdown(false);
                            }}
                            className={`w-full px-3 py-2 text-left text-sm rounded-md transition-colors ${
                              selectedCountryFilter === country
                                ? 'bg-[#F0F7F0] text-[#4B6E48] font-medium'
                                : 'text-[#475569] hover:bg-[#F8FAFC]'
                            }`}
                          >
                            {country}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={highlightDifferences}
                onChange={(e) => setHighlightDifferences(e.target.checked)}
                className="rounded border-[#CBD5E1]"
              />
              <span className="text-sm text-[#475569]">
                Highlight Differences
                <span className="ml-1 text-[#94A3B8]">
                  (Comparing {selectedUniversities.length} of {availableUniversities.length})
                </span>
              </span>
            </label>
          </div>

          {/* University Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedUniversities.map((university, index) => {
              const data = universityData[university];
              return (
                <motion.div
                  key={university}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut", delay: 0.22 + index * 0.05 }}
                  className="bg-white border border-[#E2E8F0] rounded-lg p-4 relative group hover:shadow-md transition-shadow"
                >
                  {/* Remove Button */}
                  <button
                    onClick={() => removeUniversity(university)}
                    disabled={selectedUniversities.length === 1}
                    className={`absolute top-3 right-3 text-[#94A3B8] hover:text-[#64748B] transition-colors ${
                      selectedUniversities.length === 1 ? 'opacity-30 cursor-not-allowed' : ''
                    }`}
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* University Code & Pin */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-[#F1F5F9] rounded-lg">
                      <span className="text-sm font-bold text-[#475569]">{data?.code || 'XX'}</span>
                    </div>
                    <Pin className="w-4 h-4 text-[#94A3B8]" />
                  </div>

                  {/* University Name */}
                  <h4 className="text-base font-semibold text-[#0F172A] mb-2">{university}</h4>

                  {/* Recommendation */}
                  {data?.recommendation && (
                    <p className="text-sm text-[#3B82F6] font-medium">{data.recommendation}</p>
                  )}
                </motion.div>
              );
            })}

            {/* Add University Dropdown */}
            <div className="relative">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
                onClick={() => setShowAddUniversityDropdown(!showAddUniversityDropdown)}
                className="w-full h-full min-h-[140px] flex flex-col items-center justify-center gap-2 text-sm font-medium text-[#4B6E48] border-2 border-dashed border-[#CBD5E1] rounded-lg hover:border-[#4B6E48] hover:bg-[#F0F7F0] transition-colors"
              >
                <Plus className="w-5 h-5" />
                Add University
              </motion.button>

              <AnimatePresence>
                {showAddUniversityDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full mt-2 w-72 bg-white border border-[#E2E8F0] rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
                  >
                    <div className="p-2">
                      {filteredUniversities
                        .filter(u => !selectedUniversities.includes(u.name))
                        .map((university) => (
                          <button
                            key={university.name}
                            onClick={() => addUniversity(university.name)}
                            className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm text-[#475569] hover:bg-[#F8FAFC] rounded-md transition-colors"
                          >
                            <div className="flex items-center justify-center w-8 h-8 bg-[#F1F5F9] rounded flex-shrink-0">
                              <span className="text-xs font-bold text-[#475569]">{university.code}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium truncate">{university.name}</div>
                              <div className="text-xs text-[#94A3B8]">{university.country}</div>
                            </div>
                          </button>
                        ))}
                      {filteredUniversities.filter(u => !selectedUniversities.includes(u.name)).length === 0 && (
                        <div className="px-3 py-2 text-sm text-[#94A3B8]">
                          {selectedCountryFilter === 'All Countries' ? 'All universities added' : `No more universities from ${selectedCountryFilter}`}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* University Comparison Tables */}
        <div className="space-y-8">
          {Object.keys(universityComparisonData[selectedUniversities[0]] || {}).map((category) => {
            const icon = 
              category === 'Basic Information' ? <Globe className="w-5 h-5" /> :
              category === 'Admissions' ? <User className="w-5 h-5" /> :
              category === 'Academic & Career' ? <BookOpen className="w-5 h-5" /> :
              category === 'Student Body' ? <GraduationCap className="w-5 h-5" /> :
              <DollarSign className="w-5 h-5" />;

            return (
              <UniversityComparisonSection
                key={category}
                icon={icon}
                title={category}
                category={category}
                selectedUniversities={selectedUniversities}
                comparisonData={universityComparisonData}
                highlightDifferences={highlightDifferences}
                universityData={universityData}
              />
            );
          })}
        </div>

        {/* About This Comparison Info Box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          className="mt-8 bg-[#EEF5FF] border border-[#BFDBFE] rounded-xl p-6 flex gap-4"
        >
          <Info className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-[#1E40AF] mb-2">About this comparison</h4>
            <p className="text-sm text-[#475569] leading-relaxed">
              Data is compiled from official university websites, rankings agencies, and verified sources. 
              Admission requirements, costs, and statistics may vary by program and year. Always verify specific details 
              directly with the universities before making final decisions.
            </p>
          </div>
        </motion.div>
        </>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          className="mt-16 text-center bg-gradient-to-b from-[#F8FAFC] to-white rounded-2xl p-12 border border-[#E2E8F0]"
        >
          <h2 className="text-2xl font-semibold text-[#0F172A] mb-3">
            Need help making a decision?
          </h2>
          <p className="text-base text-[#64748B] mb-8 max-w-2xl mx-auto">
            Our expert concierge team can provide personalized guidance based on your goals, 
            budget, and preferences. Get matched with the best options for your unique situation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 text-sm font-medium text-white bg-[#4B6E48] rounded-lg hover:bg-[#3d5a3a] transition-colors"
            >
              Talk to Concierge Team
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 text-sm font-medium text-[#475569] bg-white border border-[#E2E8F0] rounded-lg hover:border-[#CBD5E1] transition-colors"
            >
              View All Options
            </motion.button>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// University Comparison Section Component
interface UniversityComparisonSectionProps {
  icon: React.ReactNode;
  title: string;
  category: string;
  selectedUniversities: string[];
  comparisonData: Record<string, Record<string, Record<string, string>>>;
  highlightDifferences: boolean;
  universityData: Record<string, { code: string; country: string; recommendation: string }>;
}

function UniversityComparisonSection({ icon, title, category, selectedUniversities, comparisonData, highlightDifferences, universityData }: UniversityComparisonSectionProps) {
  // Get all unique row labels from the first selected university
  const rowLabels = Object.keys(comparisonData[selectedUniversities[0]]?.[category] || {});

  // Special styling for Basic Information
  const isBasicInfo = category === 'Basic Information';

  // Return blank component for Basic Information
  if (isBasicInfo) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm"
      >
        {/* Header */}
        <div className="bg-[#F8FAFC] px-8 py-6 flex items-center justify-center gap-3 border-b border-[#E2E8F0]">
          <div className="text-[#4B6E48]">{icon}</div>
          <h3 className="text-xl font-semibold text-[#0F172A]">{title}</h3>
        </div>

        {/* Comparison Grid */}
        <div className="px-8 py-8">
          <div className="grid gap-6" style={{ gridTemplateColumns: `200px repeat(${selectedUniversities.length}, 1fr)` }}>
            {/* Row Labels Column */}
            <div className="space-y-6 mx-[-1px] my-[0px] px-[4px] py-[27px]">
              {/* Spacer to align with university card headers */}
              <div className="mb-4 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10"></div>
                  <div>
                    <div className="text-sm h-[20px]"></div>
                    <div className="text-xs h-[16px]"></div>
                  </div>
                </div>
              </div>

              {rowLabels.map((label, index) => (
                <div key={index} className="h-12 flex items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full border-2 border-[#4B6E48] flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#4B6E48]"></div>
                    </div>
                    <span className="text-sm text-[#64748B] font-medium">{label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* University Cards Columns */}
            {selectedUniversities.map((university) => {
              const uniData = universityData[university];
              return (
                <div key={university} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-6 space-y-6">
                  {/* University Header */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#E2E8F0]">
                    <div className="flex items-center justify-center w-10 h-10 bg-white border border-[#E2E8F0] rounded shadow-sm">
                      <span className="text-sm font-bold text-[#4B6E48]">{uniData?.code || 'XX'}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#0F172A]">{university}</h4>
                      <p className="text-xs text-[#64748B]">{uniData?.country}</p>
                    </div>
                  </div>

                  {/* Values */}
                  {rowLabels.map((label, index) => (
                    <div key={index} className="h-12 flex items-center">
                      <span className="text-sm text-[#0F172A]">
                        {comparisonData[university]?.[category]?.[label] || 'N/A'}
                      </span>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    );
  }

  // Apply same white card styling to all other sections
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm"
    >
      {/* Header */}
      <div className="bg-[#F8FAFC] px-8 py-6 flex items-center justify-center gap-3 border-b border-[#E2E8F0]">
        <div className="text-[#4B6E48]">{icon}</div>
        <h3 className="text-xl font-semibold text-[#0F172A]">{title}</h3>
      </div>

      {/* Comparison Grid */}
      <div className="px-8 py-8">
        <div className="grid gap-6" style={{ gridTemplateColumns: `200px repeat(${selectedUniversities.length}, 1fr)` }}>
          {/* Row Labels Column */}
          <div className="space-y-6 mx-[-1px] my-[0px] px-[4px] py-[27px]">
            {/* Spacer to align with university card headers */}
            <div className="mb-4 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10"></div>
                <div>
                  <div className="text-sm h-[20px]"></div>
                  <div className="text-xs h-[16px]"></div>
                </div>
              </div>
            </div>

            {rowLabels.map((label, index) => (
              <div key={index} className="h-12 flex items-center">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border-2 border-[#4B6E48] flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#4B6E48]"></div>
                  </div>
                  <span className="text-sm text-[#64748B] font-medium">{label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* University Cards Columns */}
          {selectedUniversities.map((university) => {
            const uniData = universityData[university];
            return (
              <div key={university} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-6 space-y-6">
                {/* University Header */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#E2E8F0]">
                  <div className="flex items-center justify-center w-10 h-10 bg-white border border-[#E2E8F0] rounded shadow-sm">
                    <span className="text-sm font-bold text-[#4B6E48]">{uniData?.code || 'XX'}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0F172A]">{university}</h4>
                    <p className="text-xs text-[#64748B]">{uniData?.country}</p>
                  </div>
                </div>

                {/* Values */}
                {rowLabels.map((label, index) => (
                  <div key={index} className="h-12 flex items-center">
                    <span className="text-sm text-[#0F172A]">
                      {comparisonData[university]?.[category]?.[label] || 'N/A'}
                    </span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}