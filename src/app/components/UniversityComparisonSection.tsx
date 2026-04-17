import { useState } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  User, 
  X, 
  Plus, 
  Info,
  DollarSign,
  BookOpen,
  Globe,
  ChevronDown,
  Pin,
  MapPin,
  Building2,
  Trophy,
  GraduationCap as CapIcon,
  Users,
  Calendar,
  CheckCircle2,
  FileText,
  TrendingUp,
  Briefcase,
  DollarSign as CostIcon
} from 'lucide-react';
import { universityComparisonData } from '@/app/data/universityComparisonData';

// University data with recommendations
const universityData: Record<string, { code: string; recommendation?: string }> = {
  'Harvard University': { code: 'HU', recommendation: 'Best for research & prestige' },
  'Stanford University': { code: 'SU', recommendation: 'Best for tech & innovation' },
  'MIT': { code: 'MIT', recommendation: 'Best for engineering' },
  'University of Oxford': { code: 'OX', recommendation: 'Best for UK education' },
  'University of Cambridge': { code: 'CB', recommendation: 'Best for traditional excellence' },
  'University of Toronto': { code: 'UT', recommendation: 'Best for Canadian education' },
  'McGill University': { code: 'MG', recommendation: 'Best for international students' },
  'Australian National University': { code: 'ANU', recommendation: 'Best for research in Australia' },
  'Technical University of Munich': { code: 'TUM', recommendation: 'Best for engineering in Europe' },
  'National University of Singapore': { code: 'NUS', recommendation: 'Best for Asia-Pacific region' },
};

// Available universities
const availableUniversities = [
  { name: 'Harvard University', code: 'HU', country: 'United States' },
  { name: 'Stanford University', code: 'SU', country: 'United States' },
  { name: 'MIT', code: 'MIT', country: 'United States' },
  { name: 'University of Oxford', code: 'OX', country: 'United Kingdom' },
  { name: 'University of Cambridge', code: 'CB', country: 'United Kingdom' },
  { name: 'University of Toronto', code: 'UT', country: 'Canada' },
  { name: 'McGill University', code: 'MG', country: 'Canada' },
  { name: 'Australian National University', code: 'ANU', country: 'Australia' },
  { name: 'Technical University of Munich', code: 'TUM', country: 'Germany' },
  { name: 'National University of Singapore', code: 'NUS', country: 'Singapore' },
];

// Comparison Section Component
interface ComparisonSectionProps {
  icon: React.ReactNode;
  title: string;
  category: string;
  selectedUniversities: string[];
  comparisonData: Record<string, Record<string, Record<string, string>>>;
  highlightDifferences: boolean;
  universityData: Record<string, { code: string; recommendation?: string }>;
}

// Field icon mapping
const getFieldIcon = (field: string) => {
  const fieldLower = field.toLowerCase();
  
  if (fieldLower.includes('country')) return <Globe className="w-4 h-4" />;
  if (fieldLower.includes('location')) return <MapPin className="w-4 h-4" />;
  if (fieldLower.includes('type')) return <Building2 className="w-4 h-4" />;
  if (fieldLower.includes('ranking')) return <Trophy className="w-4 h-4" />;
  if (fieldLower.includes('acceptance')) return <CheckCircle2 className="w-4 h-4" />;
  if (fieldLower.includes('gpa') || fieldLower.includes('requirement')) return <FileText className="w-4 h-4" />;
  if (fieldLower.includes('english')) return <Globe className="w-4 h-4" />;
  if (fieldLower.includes('deadline')) return <Calendar className="w-4 h-4" />;
  if (fieldLower.includes('students')) return <Users className="w-4 h-4" />;
  if (fieldLower.includes('ratio')) return <Users className="w-4 h-4" />;
  if (fieldLower.includes('programs')) return <BookOpen className="w-4 h-4" />;
  if (fieldLower.includes('tuition') || fieldLower.includes('cost')) return <DollarSign className="w-4 h-4" />;
  if (fieldLower.includes('aid')) return <DollarSign className="w-4 h-4" />;
  if (fieldLower.includes('research') || fieldLower.includes('funding')) return <TrendingUp className="w-4 h-4" />;
  if (fieldLower.includes('campus')) return <Building2 className="w-4 h-4" />;
  if (fieldLower.includes('employment') || fieldLower.includes('salary')) return <Briefcase className="w-4 h-4" />;
  
  return <Info className="w-4 h-4" />;
};

function UniversityComparisonTable({
  icon,
  title,
  category,
  selectedUniversities,
  comparisonData,
  highlightDifferences,
  universityData
}: ComparisonSectionProps) {
  // Get all fields in this category
  const firstUniversity = selectedUniversities[0];
  const fields = Object.keys(comparisonData[firstUniversity]?.[category] || {});

  // Check if values differ across universities for highlighting
  const hasValueDifference = (field: string) => {
    const values = selectedUniversities.map(
      (uni) => comparisonData[uni]?.[category]?.[field] || 'N/A'
    );
    return new Set(values).size > 1;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className="bg-white rounded-xl overflow-hidden"
    >
      {/* Section Header */}
      <div className="bg-[#F8FAFC] px-6 py-4 flex items-center gap-3 border-b border-[#E2E8F0]">
        <div className="w-5 h-5 text-[#64748B]">{icon}</div>
        <h3 className="font-semibold text-[#0F172A]">{title}</h3>
      </div>

      {/* Horizontal Card Layout */}
      <div className="p-6">
        <div className="grid gap-4" style={{ gridTemplateColumns: `200px repeat(${selectedUniversities.length}, 1fr)` }}>
          {/* Empty top-left cell */}
          <div></div>
          
          {/* University Headers */}
          {selectedUniversities.map((university) => {
            const data = universityData[university];
            return (
              <div key={university} className="bg-[#FAFBFC] border border-[#E2E8F0] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-[#F1F5F9] px-2 py-1 rounded">
                    <span className="text-xs font-bold text-[#64748B]">{data?.code || 'XX'}</span>
                  </div>
                </div>
                <h4 className="font-semibold text-[#0F172A] text-sm mb-1">{university}</h4>
                {data?.recommendation && (
                  <p className="text-xs text-[#3B82F6] font-medium">{data.recommendation}</p>
                )}
              </div>
            );
          })}

          {/* Field Rows */}
          {fields.map((field) => {
            const isDifferent = hasValueDifference(field);
            return (
              <React.Fragment key={field}>
                {/* Field Label with Icon */}
                <div className="flex items-center gap-3 py-4">
                  <div className="w-8 h-8 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center flex-shrink-0">
                    <div className="text-[#64748B]">
                      {getFieldIcon(field)}
                    </div>
                  </div>
                  <span className="text-sm text-[#475569]">{field}</span>
                </div>

                {/* University Values */}
                {selectedUniversities.map((university) => {
                  const value = comparisonData[university]?.[category]?.[field] || 'N/A';
                  return (
                    <div
                      key={university}
                      className={`py-4 px-4 rounded-lg text-sm text-[#0F172A] ${
                        highlightDifferences && isDifferent
                          ? 'bg-[#FEF3C7]'
                          : 'bg-[#FAFBFC]'
                      }`}
                    >
                      {value}
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export function UniversityComparisonSection() {
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>([
    'Harvard University',
    'Stanford University',
    'MIT'
  ]);

  const [highlightDifferences, setHighlightDifferences] = useState(false);
  const [showAddUniversityDropdown, setShowAddUniversityDropdown] = useState(false);
  const [showCountryFilterDropdown, setShowCountryFilterDropdown] = useState(false);
  const [selectedCountryFilter, setSelectedCountryFilter] = useState<string>('All Countries');

  const filteredUniversities = selectedCountryFilter === 'All Countries'
    ? availableUniversities
    : availableUniversities.filter(u => u.country === selectedCountryFilter);

  const addUniversity = (name: string) => {
    if (selectedUniversities.length < 4) {
      setSelectedUniversities([...selectedUniversities, name]);
      setShowAddUniversityDropdown(false);
    }
  };

  const removeUniversity = (name: string) => {
    if (selectedUniversities.length > 1) {
      setSelectedUniversities(selectedUniversities.filter(u => u !== name));
    }
  };

  return null;
}