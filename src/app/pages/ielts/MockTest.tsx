import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Footer } from '@/app/components/Footer';
import {
  PlayCircle,
  Headphones,
  BookOpen,
  PenTool,
  Mic,
  Clock,
  Target,
  AlertCircle,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { StandardButton } from '@/app/components/ui/standard-button';

export default function MockTest() {
  const testSections = [
    {
      icon: Headphones,
      title: 'Listening',
      duration: '30 minutes',
      questions: '40 questions',
      description: '4 sections with increasing difficulty',
      color: 'from-blue-500 to-blue-600',
      status: 'ready'
    },
    {
      icon: BookOpen,
      title: 'Reading',
      duration: '60 minutes',
      questions: '40 questions',
      description: '3 passages with varied question types',
      color: 'from-green-500 to-green-600',
      status: 'ready'
    },
    {
      icon: PenTool,
      title: 'Writing',
      duration: '60 minutes',
      questions: '2 tasks',
      description: 'Task 1 (150 words) and Task 2 (250 words)',
      color: 'from-purple-500 to-purple-600',
      status: 'ready'
    },
    {
      icon: Mic,
      title: 'Speaking',
      duration: '11-14 minutes',
      questions: '3 parts',
      description: 'Interview, long turn, and discussion',
      color: 'from-orange-500 to-orange-600',
      status: 'ready'
    }
  ];

  return (
    <>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4B6E48]/10 rounded-full text-[#4B6E48] text-sm font-medium mb-6">
              <PlayCircle className="w-4 h-4" />
              Full Practice Test
            </div>

            <h1 className="text-5xl font-bold mb-4">IELTS Mock Test</h1>
            <p className="text-xl text-gray-600 mb-8">
              Take a complete practice test under real exam conditions
            </p>

            {/* Total Duration */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-xl">
              <Clock className="w-5 h-5 text-gray-600" />
              <div className="text-left">
                <p className="text-sm text-gray-500">Total Duration</p>
                <p className="font-bold text-gray-900">2 hours 45 minutes</p>
              </div>
            </div>
          </motion.div>

          {/* Important Information */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Before You Begin</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Find a quiet space with no distractions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Have pen, paper, and a timer ready</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Complete all sections in one sitting for best practice</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Time yourself strictly for each section</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Test Sections */}
          <div className="space-y-6 mb-12">
            {testSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[#4B6E48] transition-all duration-300 group"
              >
                <div className="p-6 flex items-center gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <section.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">{section.title}</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        Ready
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{section.description}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{section.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        <span>{section.questions}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full border-4 border-gray-200 flex items-center justify-center mb-2">
                      <span className="text-2xl font-bold text-gray-400">0%</span>
                    </div>
                    <p className="text-xs text-gray-500">Not Started</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Test Modes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <h3 className="text-xl font-bold mb-3">Full Test Mode</h3>
              <p className="text-gray-600 mb-6">
                Take all four sections in sequence under timed conditions, just like the real exam.
              </p>
              <StandardButton className="w-full py-3">
                <PlayCircle className="w-5 h-5 mr-2" />
                Start Full Test
              </StandardButton>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <h3 className="text-xl font-bold mb-3">Section Practice</h3>
              <p className="text-gray-600 mb-6">
                Practice individual sections at your own pace to focus on specific skills.
              </p>
              <Link to="/ielts">
                <button className="w-full px-6 py-3 bg-white border-2 border-gray-300 hover:border-[#4B6E48] rounded-xl font-medium transition-all flex items-center justify-center gap-2 text-gray-900">
                  Choose Section
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

          {/* Test Tips */}
          <div className="bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Mock Test Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">During the Test:</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>â€¢ Read instructions carefully</li>
                  <li>â€¢ Manage your time wisely</li>
                  <li>â€¢ Answer all questions</li>
                  <li>â€¢ Check your answers if time permits</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">After the Test:</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>â€¢ Review correct answers and explanations</li>
                  <li>â€¢ Identify your weak areas</li>
                  <li>â€¢ Calculate your estimated band score</li>
                  <li>â€¢ Plan focused practice sessions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
