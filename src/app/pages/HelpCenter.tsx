import { useState } from 'react';
import { motion } from 'motion/react';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { StandardButton } from '@/app/components/ui/standard-button';
import {
  Search,
  BookOpen,
  GraduationCap,
  FileText,
  Globe,
  CreditCard,
  Home,
  Shield,
  Plane,
  MessageCircle,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Lightbulb,
  Video
} from 'lucide-react';
import { useNavigate } from 'react-router';

// FAQ Category Card
function CategoryCard({
  icon: Icon,
  title,
  description,
  articlesCount,
  onClick
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  articlesCount: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:border-[#4B6E48] transition-all duration-300 hover:shadow-lg cursor-pointer group"
    >
      <div className="w-12 h-12 rounded-xl bg-[#4B6E48]/10 flex items-center justify-center mb-4 group-hover:bg-[#4B6E48] transition-colors">
        <Icon className="w-6 h-6 text-[#4B6E48] group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">{articlesCount} articles</span>
        <ArrowRight className="w-4 h-4 text-[#4B6E48] opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
}

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover:text-[#4B6E48] transition-colors group"
      >
        <span className="font-medium text-base text-gray-900 pr-4 group-hover:text-[#4B6E48]">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
            isOpen ? 'rotate-180 text-[#4B6E48]' : ''
          }`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="pb-5 text-gray-600 text-sm leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </motion.div>
  );
}

export default function HelpCenter() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      icon: GraduationCap,
      title: 'University Admissions',
      description: 'Application process, requirements, and deadlines',
      articlesCount: 24,
      slug: 'admissions'
    },
    {
      icon: FileText,
      title: 'Visa & Immigration',
      description: 'Visa applications, documents, and procedures',
      articlesCount: 18,
      slug: 'visa'
    },
    {
      icon: Home,
      title: 'Accommodation',
      description: 'Finding and securing student housing',
      articlesCount: 15,
      slug: 'housing'
    },
    {
      icon: CreditCard,
      title: 'Financial Aid & Loans',
      description: 'Scholarships, loans, and funding options',
      articlesCount: 20,
      slug: 'financial'
    },
    {
      icon: Globe,
      title: 'Study Destinations',
      description: 'Country guides and university information',
      articlesCount: 32,
      slug: 'destinations'
    },
    {
      icon: Plane,
      title: 'Pre-Departure',
      description: 'Packing, travel, and arrival preparation',
      articlesCount: 12,
      slug: 'pre-departure'
    },
    {
      icon: BookOpen,
      title: 'Test Preparation',
      description: 'IELTS, TOEFL, GRE, GMAT guidance',
      articlesCount: 28,
      slug: 'test-prep'
    },
    {
      icon: Shield,
      title: 'Insurance & Safety',
      description: 'Health insurance and safety abroad',
      articlesCount: 10,
      slug: 'insurance'
    }
  ];

  const popularFAQs = [
    {
      question: 'How do I start my study abroad journey?',
      answer:
        'Start by researching countries and universities that match your academic goals. Create a profile on our platform, explore our university database, and use our comparison tool. Connect with our counselors for personalized guidance on choosing programs, understanding requirements, and planning your timeline.'
    },
    {
      question: 'What are the general admission requirements?',
      answer:
        'Common requirements include: academic transcripts, standardized test scores (IELTS/TOEFL for English proficiency, GRE/GMAT for graduate programs), letters of recommendation, statement of purpose, CV/resume, and passport. Requirements vary by country, university, and program level.'
    },
    {
      question: 'How long does the visa process take?',
      answer:
        'Visa processing times vary by country: USA (F-1): 2-8 weeks, UK (Student): 3-6 weeks, Canada (Study Permit): 4-12 weeks, Australia (Student): 4-8 weeks. Apply early and ensure all documents are complete to avoid delays.'
    },
    {
      question: 'Do I need IELTS/TOEFL? What scores are required?',
      answer:
        'Most English-speaking countries require proof of English proficiency. Typical minimum scores: IELTS 6.0-7.0 (undergraduate), 6.5-7.5 (graduate); TOEFL iBT 80-100. Some universities waive this if you studied in English previously. Check our IELTS preparation resources.'
    },
    {
      question: 'How much does it cost to study abroad?',
      answer:
        'Costs vary significantly: USA ($20,000-$60,000/year), UK (£10,000-£38,000/year), Canada (CAD 15,000-35,000/year), Australia (AUD 20,000-45,000/year). This includes tuition and living expenses. Explore scholarships and financial aid options to reduce costs.'
    },
    {
      question: 'Can I work while studying?',
      answer:
        'Most countries allow part-time work: USA (20 hrs/week on-campus), UK (20 hrs/week during term), Canada (20 hrs/week), Australia (48 hrs/fortnight during term). Work rights vary by visa type and country regulations.'
    },
    {
      question: 'What scholarships are available?',
      answer:
        'Options include university-specific scholarships, government scholarships (Fulbright, Chevening, DAAD), merit-based awards, need-based aid, and subject-specific funding. Our counselors can help identify opportunities matching your profile.'
    },
    {
      question: 'How do I find accommodation?',
      answer:
        'Options include on-campus housing (dormitories), off-campus apartments, homestays, and private student housing. Most universities offer housing assistance. Book early (3-6 months before arrival) for better options. Check our housing service for verified listings.'
    },
    {
      question: 'What is a Statement of Purpose (SOP)?',
      answer:
        'An SOP is a personal essay explaining your academic background, career goals, why you chose this program/university, and how it aligns with your aspirations. It should be authentic, well-structured (500-1000 words), and tailored to each university.'
    },
    {
      question: 'When should I apply?',
      answer:
        'Timeline varies by intake: Fall (August/September): Apply 8-12 months before; Spring (January): Apply 6-8 months before. Early applications improve admission and scholarship chances. Some programs have rolling admissions.'
    },
    {
      question: 'Do I need health insurance?',
      answer:
        'Yes, most countries mandate health insurance for international students. Some universities include it in fees; others require separate purchase. USA students need comprehensive coverage; UK/Australia/Canada students may access public healthcare with additional insurance.'
    },
    {
      question: 'How can Sonia AI help me?',
      answer:
        'Sonia is your 24/7 AI study abroad assistant. She can answer questions, suggest universities, help with test preparation, review documents, provide timeline guidance, and connect you with the right services. Access Sonia through our platform anytime.'
    }
  ];

  const filteredFAQs = searchQuery
    ? popularFAQs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : popularFAQs;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-[#4B6E48] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back</span>
          </motion.button>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#4B6E48]/10 px-4 py-2 rounded-full mb-6">
                <Lightbulb className="w-4 h-4 text-[#4B6E48]" />
                <span className="text-sm font-medium text-[#4B6E48]">Help Center</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                How can we help you today?
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Search our knowledge base or browse categories to find answers
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for help articles, FAQs, guides..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-[#4B6E48] focus:ring-2 focus:ring-[#4B6E48]/20 outline-none transition-all text-gray-900 bg-white"
                />
              </div>

              {searchQuery && (
                <p className="mt-4 text-sm text-gray-600">
                  Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} for "{searchQuery}"
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-gray-600">Find help articles organized by topic</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                {...category}
                onClick={() => setSelectedCategory(category.slug)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular FAQs */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </motion.div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => <FAQItem key={index} {...faq} />)
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No FAQs found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Tutorials</h2>
            <p className="text-gray-600">Step-by-step guides to help you succeed</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Getting Started with Applications',
                duration: '8:45',
                views: '12K'
              },
              {
                title: 'Complete Visa Application Guide',
                duration: '15:30',
                views: '18K'
              },
              {
                title: 'IELTS Preparation Tips',
                duration: '12:20',
                views: '25K'
              }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="aspect-video bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] flex items-center justify-center">
                  <Video className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{video.duration}</span>
                    <span>•</span>
                    <span>{video.views} views</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] rounded-3xl p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
            
            <div className="relative z-10">
              <MessageCircle className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to assist you
                with personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <StandardButton onClick={() => navigate('/contact')} variant="secondary">
                  Contact Support
                </StandardButton>
                <StandardButton onClick={() => navigate('/sonia-ai')} variant="secondary">
                  Chat with Sonia AI
                </StandardButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, label: 'Help Articles', value: '150+' },
              { icon: Video, label: 'Video Guides', value: '45+' },
              { icon: CheckCircle2, label: 'Questions Answered', value: '10K+' },
              { icon: MessageCircle, label: 'Avg Response Time', value: '2 hrs' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-[#4B6E48] mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}