import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, Calculator, Award, MapPin, X, ChevronDown } from 'lucide-react';
import { StandardButton } from '@/app/components/ui/standard-button';
import { showToast } from '@/app/components/ui/toast';

interface Preferences {
  countries: string[];
  cities: string[];
  specializations: string[];
  courseType: string;
  duration: string;
  budgetMin: string;
  budgetMax: string;
  fundingSource: string;
  loanRequired: string;
  loanAmount: string;
  scholarshipInterest: string;
  preferredIntake: string;
  backupIntake: string;
  flexibility: string;
  climate: string;
  workWhileStudy: string;
  citySize: string;
  culture: string;
}

export function PreferencesTab() {
  const [preferences, setPreferences] = useState<Preferences>(() => {
    const saved = localStorage.getItem('preferences');
    return saved ? JSON.parse(saved) : {
      countries: ['United States', 'United Kingdom', 'Canada'],
      cities: ['Boston', 'London', 'Toronto', 'San Francisco'],
      specializations: ['Computer Science', 'Data Science', 'AI/ML'],
      courseType: 'Master\'s Degree',
      duration: '1-2 years',
      budgetMin: '$40,000',
      budgetMax: '$60,000',
      fundingSource: 'Self-funded + Loan',
      loanRequired: 'Yes',
      loanAmount: '$30,000',
      scholarshipInterest: 'High',
      preferredIntake: 'Fall 2026',
      backupIntake: 'Spring 2027',
      flexibility: 'Flexible',
      climate: 'Temperate',
      workWhileStudy: 'Yes (Part-time)',
      citySize: 'Large Metropolitan',
      culture: 'Diverse & Multicultural'
    };
  });

  const [showPreferencesModal, setShowPreferencesModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('preferences', JSON.stringify(preferences));
  }, [preferences]);

  const smartTools = [
    { icon: TrendingUp, title: 'Compare Universities', desc: 'Side-by-side comparison tool', action: () => showToast('Opening University Comparison...', 'info') },
    { icon: Calculator, title: 'ROI Calculator', desc: 'Calculate return on investment', action: () => showToast('Opening ROI Calculator...', 'info') },
    { icon: Award, title: 'Ranking Explorer', desc: 'Explore university rankings', action: () => showToast('Opening Rankings...', 'info') },
    { icon: MapPin, title: 'Course Matcher', desc: 'Find your perfect course', action: () => showToast('Opening Course Matcher...', 'info') }
  ];

  return (
    <div className="space-y-8 max-w-[1440px] mx-auto overflow-visible" style={{ '--field-gap-mobile': '14px', '--field-gap-desktop': '24px' } as React.CSSProperties}>
      {/* Study Preferences - Enhanced Responsive Header */}
      <section className="overflow-visible">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Study Preferences</h2>
          <StandardButton
            className="!h-11 !px-4 !text-sm md:!h-12 md:!px-6 md:!text-base whitespace-nowrap w-full sm:w-auto min-h-[44px] flex-shrink-0"
            onClick={() => setShowPreferencesModal(true)}
          >
            Update Preferences
          </StandardButton>
        </div>

        <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm space-y-5 md:space-y-6">
          {/* Preferred Countries - Improved Chip Layout */}
          <div>
            <label className="text-xs md:text-sm font-medium text-gray-500 mb-3 block">Preferred Countries</label>
            <div className="flex flex-wrap gap-2 md:gap-2.5">
              {preferences.countries.map((country) => (
                <span 
                  key={country} 
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-[#4B6E48] text-white rounded-lg text-xs md:text-sm font-medium whitespace-nowrap"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>

          {/* Preferred Cities - Improved Chip Layout */}
          <div>
            <label className="text-xs md:text-sm font-medium text-gray-500 mb-3 block">Preferred Cities</label>
            <div className="flex flex-wrap gap-2 md:gap-2.5">
              {preferences.cities.map((city) => (
                <span 
                  key={city} 
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 rounded-lg text-xs md:text-sm text-gray-900 font-medium whitespace-nowrap"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Specializations - Improved Chip Layout */}
          <div>
            <label className="text-xs md:text-sm font-medium text-gray-500 mb-3 block">Specializations</label>
            <div className="flex flex-wrap gap-2 md:gap-2.5">
              {preferences.specializations.map((spec) => (
                <span 
                  key={spec} 
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 text-blue-800 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Course Type & Duration - Responsive Grid */}
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-3.5 min-[480px]:gap-6 pt-3 md:pt-4 border-t border-gray-100">
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-1.5">Course Type</label>
              <p className="text-sm md:text-base font-bold text-[#0F172A]">{preferences.courseType}</p>
            </div>
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-1.5">Duration</label>
              <p className="text-sm md:text-base font-bold text-[#0F172A]">{preferences.duration}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Preferences - Fix 1: 2-col at ≥480px */}
      <section className="overflow-visible mt-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#0F172A]">Financial Preferences</h2>
          <StandardButton
            className="!h-11 !px-4 max-[399px]:!px-2.5 !text-sm max-[399px]:!text-xs whitespace-nowrap w-full sm:w-auto min-h-[44px] flex-shrink-0"
            onClick={() => setShowPreferencesModal(true)}
          >
            Edit Preferences
          </StandardButton>
        </div>
        <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-3.5 min-[480px]:gap-6">
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-1.5">Budget Range</label>
              <p className="text-sm md:text-base font-bold text-[#0F172A]">{preferences.budgetMin} - {preferences.budgetMax} / year</p>
            </div>
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-1.5">Funding Source</label>
              <p className="text-sm md:text-base font-bold text-[#0F172A]">{preferences.fundingSource}</p>
            </div>
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-1.5">Loan Required</label>
              <p className="text-sm md:text-base font-bold text-[#0F172A]">{preferences.loanRequired} ({preferences.loanAmount})</p>
            </div>
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-1.5">Scholarship Interest</label>
              <p className="text-sm md:text-base font-bold text-[#0F172A]">{preferences.scholarshipInterest}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intake Planning - Fix 2: 3 responsive states */}
      <section className="overflow-visible mt-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#0F172A]">Intake Planning</h2>
          <StandardButton
            className="!h-11 !px-4 max-[399px]:!px-2.5 !text-sm max-[399px]:!text-xs whitespace-nowrap w-full sm:w-auto min-h-[44px] flex-shrink-0"
            onClick={() => setShowPreferencesModal(true)}
          >
            Edit Planning
          </StandardButton>
        </div>
        <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 min-[700px]:grid-cols-3 gap-3.5 min-[480px]:gap-6">
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-1.5">Preferred Intake</label>
              <p className="text-sm md:text-base font-bold text-[#0F172A]">{preferences.preferredIntake}</p>
            </div>
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-1.5">Backup Intake</label>
              <p className="text-sm md:text-base font-bold text-[#0F172A]">{preferences.backupIntake}</p>
            </div>
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-1.5">Flexibility</label>
              <p className="text-sm md:text-base font-bold text-[#0F172A]">{preferences.flexibility}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Preferences - Fix 4: Proper spacing */}
      <section className="overflow-visible mt-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] overflow-visible">Lifestyle Preferences</h2>
          <StandardButton
            className="!h-11 !px-4 max-[399px]:!px-2.5 !text-sm max-[399px]:!text-xs whitespace-nowrap w-full sm:w-auto min-h-[44px] flex-shrink-0"
            onClick={() => setShowPreferencesModal(true)}
          >
            Edit Lifestyle
          </StandardButton>
        </div>
        <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-3.5 min-[480px]:gap-6">
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-1.5">Climate</label>
              <p className="text-sm md:text-base font-bold text-[#0F172A]">{preferences.climate}</p>
            </div>
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-1.5">Work While Study</label>
              <p className="text-sm md:text-base font-bold text-[#0F172A]">{preferences.workWhileStudy}</p>
            </div>
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-1.5">City Size</label>
              <p className="text-sm md:text-base font-bold text-[#0F172A]">{preferences.citySize}</p>
            </div>
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-1.5">Culture</label>
              <p className="text-sm md:text-base font-bold text-[#0F172A]">{preferences.culture}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Tools - Fix 7: Auto height & natural flow */}
      <section className="overflow-visible mt-8">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Smart Tools</h2>
        <div className="grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {smartTools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-5 md:p-6 border border-gray-200 hover:border-[#4B6E48] transition-all hover:shadow-lg cursor-pointer group h-auto min-h-0 flex flex-col gap-3"
                onClick={tool.action}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-100 group-hover:bg-[#4B6E48] rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                  {Icon ? (
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-gray-600 group-hover:text-white transition-colors" />
                  ) : (
                    <div className="w-6 h-6 md:w-7 md:h-7 bg-gray-300 rounded" />
                  )}
                </div>
                <h3 className="font-bold text-base md:text-lg text-[#0F172A]">{tool.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{tool.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showPreferencesModal && (
          <PreferencesModal
            preferences={preferences}
            onSave={(newPrefs) => {
              setPreferences(newPrefs);
              setShowPreferencesModal(false);
              showToast('Preferences updated successfully!', 'success');
            }}
            onClose={() => setShowPreferencesModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function PreferencesModal({ preferences, onSave, onClose }: { preferences: Preferences; onSave: (prefs: Preferences) => void; onClose: () => void }) {
  const [formData, setFormData] = useState(preferences);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Update Preferences</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onSave(formData); }} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Countries (comma-separated)</label>
              <input
                type="text"
                value={formData.countries.join(', ')}
                onChange={(e) => setFormData({ ...formData, countries: e.target.value.split(',').map(c => c.trim()) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Cities (comma-separated)</label>
              <input
                type="text"
                value={formData.cities.join(', ')}
                onChange={(e) => setFormData({ ...formData, cities: e.target.value.split(',').map(c => c.trim()) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Course Type</label>
              <CustomSelect
                value={formData.courseType}
                onChange={(value) => setFormData({ ...formData, courseType: value })}
                options={["Bachelor's Degree", "Master's Degree", "PhD", "Diploma"]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Duration</label>
              <input
                type="text"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Budget Min</label>
              <input
                type="text"
                value={formData.budgetMin}
                onChange={(e) => setFormData({ ...formData, budgetMin: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Budget Max</label>
              <input
                type="text"
                value={formData.budgetMax}
                onChange={(e) => setFormData({ ...formData, budgetMax: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Preferred Intake</label>
              <input
                type="text"
                value={formData.preferredIntake}
                onChange={(e) => setFormData({ ...formData, preferredIntake: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Work While Study</label>
              <CustomSelect
                value={formData.workWhileStudy}
                onChange={(value) => setFormData({ ...formData, workWhileStudy: value })}
                options={["Yes (Part-time)", "Yes (Full-time)", "No"]}
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-900 font-medium"
            >
              Cancel
            </button>
            <StandardButton type="submit" className="flex-1 !h-10">
              Save Preferences
            </StandardButton>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

// Custom Dropdown Component with Glassmorphic Design
function CustomSelect({ value, onChange, options }: { value: string; onChange: (value: string) => void; options: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white flex items-center justify-between hover:border-[#4B6E48] transition-colors"
      >
        <span>{value}</span>
        <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg overflow-hidden"
          >
            {options.map((option, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`w-full px-3 py-2 text-left hover:bg-[#4B6E48]/10 transition-colors ${
                  value === option ? 'bg-[#4B6E48]/20 text-[#4B6E48] font-medium' : 'text-gray-900'
                }`}
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}