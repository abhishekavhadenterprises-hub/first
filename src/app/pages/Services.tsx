import { useState } from 'react';
import { motion } from 'motion/react';
import { Footer } from '@/app/components/Footer';
import {
  TrendingUp,
  Plane,
  Home,
  CreditCard,
  Shield,
  GraduationCap,
  FileText,
  Globe,
  Search,
  CheckCircle2,
  DollarSign,
  Clock
} from 'lucide-react';
import { StandardButton } from '@/app/components/ui/standard-button';
import { showToast } from '@/app/components/ui/toast';
import { AvailableServiceProviders } from '@/app/components/AvailableServiceProviders';

const services = [
  {
    id: 'university-shortlisting',
    title: 'University Shortlisting',
    category: 'Academic',
    icon: TrendingUp,
    price: 'Free',
    description: 'Comprehensive university selection based on your profile, budget, and preferences.',
    features: [
      'Personalized university recommendations',
      'Budget analysis and comparison',
      'Course matching with career goals',
      'Acceptance probability analysis',
      'Application timeline planning'
    ],
    duration: '2-3 weeks',
    popular: true
  },
  {
    id: 'visa-support',
    title: 'Visa Assistance',
    category: 'Documentation',
    icon: Plane,
    price: '$499',
    description: 'End-to-end visa application support with document preparation and interview coaching.',
    features: [
      'Document checklist and preparation',
      'Visa application form assistance',
      'Interview preparation sessions',
      'Appointment booking support',
      'Post-visa guidance'
    ],
    duration: '3-4 weeks',
    popular: true
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    category: 'Housing',
    icon: Home,
    price: '$199',
    description: 'Finding suitable on-campus or off-campus housing near your university.',
    features: [
      'On-campus housing applications',
      'Off-campus apartment search',
      'Roommate matching service',
      'Lease review and guidance',
      'Safety and budget considerations'
    ],
    duration: '1-2 weeks',
    popular: false
  },
  {
    id: 'banking',
    title: 'Banking Services',
    category: 'Financial',
    icon: CreditCard,
    price: 'Free',
    description: 'Assistance with opening international student bank accounts and financial planning.',
    features: [
      'Bank account setup',
      'Foreign exchange guidance',
      'International transfers',
      'Student credit card options',
      'Financial planning tools'
    ],
    duration: '1 week',
    popular: false
  },
  {
    id: 'insurance',
    title: 'Insurance Coverage',
    category: 'Protection',
    icon: Shield,
    price: '$299',
    description: 'Comprehensive health and travel insurance coverage for international students.',
    features: [
      'Health insurance comparison',
      'Travel insurance options',
      'Coverage analysis',
      'Claims assistance',
      'Policy management'
    ],
    duration: '3-5 days',
    popular: false
  },
  {
    id: 'application',
    title: 'Application Support',
    category: 'Academic',
    icon: FileText,
    price: '$799',
    description: 'Complete university application support including essays, recommendations, and more.',
    features: [
      'Application strategy planning',
      'Essay editing and review',
      'LOR coordination',
      'Resume optimization',
      'Application tracking'
    ],
    duration: '4-6 weeks',
    popular: true
  },
  {
    id: 'test-prep',
    title: 'Test Preparation',
    category: 'Academic',
    icon: GraduationCap,
    price: '$599',
    description: 'Comprehensive test preparation for IELTS, TOEFL, GRE, GMAT, and more.',
    features: [
      'Personalized study plans',
      'Practice tests and materials',
      'One-on-one coaching',
      'Score improvement guarantee',
      'Test registration support'
    ],
    duration: '6-12 weeks',
    popular: false
  },
  {
    id: 'scholarship',
    title: 'Scholarship Guidance',
    category: 'Financial',
    icon: DollarSign,
    price: 'Free',
    description: 'Find and apply for scholarships to fund your education abroad.',
    features: [
      'Scholarship database access',
      'Application essay support',
      'Eligibility assessment',
      'Application tracking',
      'Award negotiation tips'
    ],
    duration: '2-4 weeks',
    popular: false
  },
  {
    id: 'pre-departure',
    title: 'Pre-Departure Orientation',
    category: 'Support',
    icon: Globe,
    price: 'Free',
    description: 'Comprehensive orientation to prepare you for your journey and life abroad.',
    features: [
      'Country-specific guidance',
      'Cultural orientation',
      'Packing and travel tips',
      'Arrival support',
      'Student community connection'
    ],
    duration: '1 week',
    popular: false
  }
];

const categories = ['All', 'Academic', 'Documentation', 'Financial', 'Housing', 'Protection', 'Support'];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleRequestService = (serviceTitle: string) => {
    showToast(`Request submitted for ${serviceTitle}!`, 'success');
  };

  return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-20">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] text-white">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-2h-2c-2.2 0-4-1.8-4-4v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h-4v4h-2v2h-2v2h-2v2h-1v2h2v2h2v2h2v2h2v2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>

          <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/90 max-w-3xl mx-auto mb-8"
            >
              Comprehensive support for your study abroad journey, from university selection to arrival
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto relative"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </motion.div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Category Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${selectedCategory === category
                      ? 'bg-[#4B6E48] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:scale-105 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-[#4B6E48]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-[#4B6E48]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>

                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <p className="text-xs text-gray-500 ml-6">+{service.features.length - 3} more</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Price</p>
                      <p className="text-lg font-bold text-[#4B6E48]">{service.price}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Duration
                      </p>
                      <p className="text-sm font-medium text-gray-900">{service.duration}</p>
                    </div>
                  </div>

                  <StandardButton
                    className="w-full !h-11"
                    onClick={() => handleRequestService(service.title)}
                  >
                    Request Service
                  </StandardButton>
                </motion.div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 text-[#4B6E48] hover:underline font-medium"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Available Service Providers */}
          <AvailableServiceProviders />

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] rounded-3xl p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-2h-2c-2.2 0-4-1.8-4-4v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h-4v4h-2v2h-2v2h-2v2h-1v2h2v2h2v2h2v2h2v2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Our counselors are here to help you select the right services for your journey
              </p>
              <StandardButton
                className="!h-12 !px-8 !bg-white !text-[#4B6E48] hover:!bg-gray-100"
                onClick={() => window.location.href = '/contact'}
              >
                Talk to a Counselor
              </StandardButton>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
}
