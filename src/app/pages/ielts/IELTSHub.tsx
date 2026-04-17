import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import {
  Headphones,
  BookOpen,
  PenTool,
  Mic,
  Clock,
  Target,
  TrendingUp,
  Award,
  PlayCircle,
  Calculator,
  FileText,
  BarChart3,
  CheckCircle,
  Zap,
  Users,
  Globe
} from 'lucide-react';
import { StandardButton } from '@/app/components/ui/standard-button';

export default function IELTSHub() {
  const sections = [
    {
      icon: Headphones,
      title: 'Listening',
      description: 'Practice with authentic audio recordings and improve your comprehension',
      duration: '30 minutes',
      questions: '40 questions',
      color: 'from-blue-500 to-blue-600',
      path: '/ielts/listening'
    },
    {
      icon: BookOpen,
      title: 'Reading',
      description: 'Enhance your reading speed and accuracy with varied passages',
      duration: '60 minutes',
      questions: '40 questions',
      color: 'from-green-500 to-green-600',
      path: '/ielts/reading'
    },
    {
      icon: PenTool,
      title: 'Writing',
      description: 'Master Task 1 and Task 2 with expert tips and sample answers',
      duration: '60 minutes',
      questions: '2 tasks',
      color: 'from-purple-500 to-purple-600',
      path: '/ielts/writing'
    },
    {
      icon: Mic,
      title: 'Speaking',
      description: 'Prepare for all three parts with topic prompts and strategies',
      duration: '11-14 minutes',
      questions: '3 parts',
      color: 'from-orange-500 to-orange-600',
      path: '/ielts/speaking'
    }
  ];

  const tools = [
    {
      icon: PlayCircle,
      title: 'Full Mock Test',
      description: 'Take a complete practice test under real exam conditions',
      path: '/ielts/mock-test',
      badge: 'Popular'
    },
    {
      icon: Calculator,
      title: 'Band Score Calculator',
      description: 'Estimate your IELTS band score based on practice results',
      path: '/ielts/score-calculator',
      badge: null
    },
    {
      icon: FileText,
      title: 'Study Resources',
      description: 'Access guides, tips, and vocabulary lists',
      path: '/ielts/resources',
      badge: null
    },
    {
      icon: BarChart3,
      title: 'Progress Dashboard',
      description: 'Track your performance and see improvement over time',
      path: '/ielts/progress',
      badge: 'New'
    }
  ];

  const stats = [
    { label: 'Practice Tests', value: '50+', icon: Target },
    { label: 'Study Hours', value: '200+', icon: Clock },
    { label: 'Success Rate', value: '92%', icon: TrendingUp },
    { label: 'Active Learners', value: '10K+', icon: Users }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Instant Feedback',
      description: 'Get immediate results and detailed explanations for each answer'
    },
    {
      icon: Target,
      title: 'Targeted Practice',
      description: 'Focus on your weak areas with personalized recommendations'
    },
    {
      icon: Award,
      title: 'Expert Content',
      description: 'Practice materials created by certified IELTS instructors'
    },
    {
      icon: Globe,
      title: 'Anytime, Anywhere',
      description: 'Access all materials 24/7 from any device'
    }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-[#4B6E48]/5 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4B6E48]/10 rounded-full text-[#4B6E48] text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              IELTS Preparation
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Master the IELTS Exam
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Comprehensive preparation for all four sections with practice tests, expert tips, and detailed feedback
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/ielts/mock-test">
                <StandardButton className="px-8 py-4 text-lg">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Start Practice Test
                </StandardButton>
              </Link>
              <Link to="/ielts/resources">
                <button className="px-8 py-4 bg-white border-2 border-gray-300 hover:border-[#4B6E48] rounded-xl font-medium transition-all text-gray-900">
                  View Study Resources
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200"
                >
                  <stat.icon className="w-8 h-8 text-[#4B6E48] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Four Sections */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Practice by Section</h2>
            <p className="text-xl text-gray-600">Master each component of the IELTS exam</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section, index) => (
              <Link key={index} to={section.path}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border-2 border-gray-200 hover:border-[#4B6E48] hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Header with Gradient */}
                  <div className={`bg-gradient-to-br ${section.color} p-6 text-white`}>
                    <section.icon className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {section.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{section.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Target className="w-4 h-4" />
                        <span>{section.questions}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[#4B6E48] font-medium group-hover:gap-3 transition-all">
                      Start Practice
                      <span className="text-xl">→</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Preparation Tools</h2>
            <p className="text-xl text-gray-600">Everything you need to achieve your target band score</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <Link key={index} to={tool.path}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 relative group"
                >
                  {tool.badge && (
                    <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                      tool.badge === 'Popular' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {tool.badge}
                    </span>
                  )}

                  <tool.icon className="w-12 h-12 text-[#4B6E48] mb-4" />
                  <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>

                  <div className="flex items-center gap-2 text-[#4B6E48] font-medium group-hover:gap-3 transition-all">
                    Access Now
                    <span className="text-xl">→</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-gray-600">Designed to help you succeed in your IELTS journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#4B6E48]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-[#4B6E48]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your IELTS Journey?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of successful test-takers who achieved their target scores
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/ielts/mock-test">
              <button className="px-8 py-4 bg-white text-[#4B6E48] rounded-xl font-medium hover:bg-gray-100 transition-colors">
                Start Free Practice Test
              </button>
            </Link>
            <Link to="/ielts/progress">
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white rounded-xl font-medium hover:bg-white/20 transition-colors text-white">
                View My Progress
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}