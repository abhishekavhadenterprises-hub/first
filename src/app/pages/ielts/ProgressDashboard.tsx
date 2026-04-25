import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Footer } from '@/app/components/Footer';
import {
  BarChart3,
  ArrowLeft,
  TrendingUp,
  Target,
  Clock,
  Award,
  Calendar,
  Headphones,
  BookOpen,
  PenTool,
  Mic,
  CheckCircle,
  Flame
} from 'lucide-react';

export default function ProgressDashboard() {
  const stats = [
    { label: 'Current Average', value: '6.5', icon: Award, color: 'from-blue-500 to-blue-600', change: '+0.5' },
    { label: 'Tests Completed', value: '12', icon: CheckCircle, color: 'from-green-500 to-green-600', change: '+3' },
    { label: 'Study Hours', value: '45', icon: Clock, color: 'from-purple-500 to-purple-600', change: '+8' },
    { label: 'Current Streak', value: '7 days', icon: Flame, color: 'from-orange-500 to-orange-600', change: 'Active' },
  ];

  const sectionScores = [
    { section: 'Listening', current: 7.0, target: 7.5, progress: 85, color: 'blue', icon: Headphones },
    { section: 'Reading', current: 6.5, target: 7.0, progress: 75, color: 'green', icon: BookOpen },
    { section: 'Writing', current: 6.0, target: 7.0, progress: 65, color: 'purple', icon: PenTool },
    { section: 'Speaking', current: 6.5, target: 7.5, progress: 70, color: 'orange', icon: Mic },
  ];

  const recentActivity = [
    { date: '2026-02-04', activity: 'Completed Reading Practice', score: '7.0', type: 'reading' },
    { date: '2026-02-03', activity: 'Completed Listening Practice', score: '7.5', type: 'listening' },
    { date: '2026-02-02', activity: 'Completed Writing Task 2', score: '6.0', type: 'writing' },
    { date: '2026-02-01', activity: 'Completed Speaking Part 2', score: '6.5', type: 'speaking' },
    { date: '2026-01-31', activity: 'Completed Full Mock Test', score: '6.5', type: 'general' },
  ];

  const weeklyProgress = [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 3.0 },
    { day: 'Wed', hours: 1.5 },
    { day: 'Thu', hours: 2.0 },
    { day: 'Fri', hours: 3.5 },
    { day: 'Sat', hours: 4.0 },
    { day: 'Sun', hours: 2.5 },
  ];

  const maxHours = Math.max(...weeklyProgress.map(d => d.hours));

  return (
    <>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="mb-8">
            <Link to="/ielts" className="inline-flex items-center gap-2 text-[#4B6E48] hover:underline mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to IELTS Hub
            </Link>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold">Progress Dashboard</h1>
                  <p className="text-gray-600">Track your IELTS preparation journey</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-600">Target Band Score</p>
                <p className="text-3xl font-bold text-[#4B6E48]">7.5</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                    {stat.change}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            
            {/* Section Performance */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold mb-6">Section Performance</h2>
              
              <div className="space-y-6">
                {sectionScores.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <section.icon className={`w-5 h-5 text-${section.color}-600`} />
                        <span className="font-semibold text-gray-900">{section.section}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-gray-600">Current: <span className="font-bold text-gray-900">{section.current}</span></span>
                        <span className="text-gray-600">Target: <span className="font-bold text-[#4B6E48]">{section.target}</span></span>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`bg-gradient-to-r from-${section.color}-500 to-${section.color}-600 h-3 rounded-full transition-all duration-500`}
                          style={{ width: `${section.progress}%` }}
                        ></div>
                      </div>
                      <span className="absolute right-0 -top-6 text-sm font-semibold text-gray-600">
                        {section.progress}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Weekly Study Hours */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold mb-6">Weekly Activity</h2>
              
              <div className="space-y-4">
                {weeklyProgress.map((day, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="w-12 text-sm font-medium text-gray-600">{day.day}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#4B6E48] to-[#3d5a3a] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(day.hours / maxHours) * 100}%` }}
                      ></div>
                    </div>
                    <span className="w-12 text-right text-sm font-semibold text-gray-900">{day.hours}h</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total this week</span>
                  <span className="text-2xl font-bold text-[#4B6E48]">
                    {weeklyProgress.reduce((sum, d) => sum + d.hours, 0)}h
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            
            <div className="space-y-4">
              {recentActivity.map((item, index) => {
                const getTypeColor = (type: string) => {
                  switch (type) {
                    case 'listening': return 'bg-blue-100 text-blue-700';
                    case 'reading': return 'bg-green-100 text-green-700';
                    case 'writing': return 'bg-purple-100 text-purple-700';
                    case 'speaking': return 'bg-orange-100 text-orange-700';
                    default: return 'bg-gray-100 text-gray-700';
                  }
                };

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200">
                        <Calendar className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{item.activity}</p>
                        <p className="text-sm text-gray-600">{new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-4 py-2 rounded-lg font-semibold ${getTypeColor(item.type)}`}>
                        {item.score}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Goals & Recommendations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Current Goals */}
            <div className="bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Current Goals</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Achieve 7.5 Overall Band</p>
                    <p className="text-sm text-white/90">Target date: March 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Improve Writing to 7.0</p>
                    <p className="text-sm text-white/90">Focus area for next 2 weeks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Practice 4 hours daily</p>
                    <p className="text-sm text-white/90">Maintain consistency</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold mb-6">Recommendations</h2>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl">
                  <p className="font-semibold text-purple-900 mb-1">Focus on Writing</p>
                  <p className="text-sm text-purple-800">Your writing score needs the most improvement. Practice Task 2 essays daily.</p>
                  <Link to="/ielts/writing" className="text-sm text-purple-600 hover:underline font-medium mt-2 inline-block">
                    Start Writing Practice â†’
                  </Link>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <p className="font-semibold text-blue-900 mb-1">Great Progress in Listening!</p>
                  <p className="text-sm text-blue-800">You're close to your target. Keep practicing Section 4 to reach 7.5.</p>
                </div>
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="font-semibold text-green-900 mb-1">Take a Mock Test</p>
                  <p className="text-sm text-green-800">It's been a week since your last full test. Time for another assessment.</p>
                  <Link to="/ielts/mock-test" className="text-sm text-green-600 hover:underline font-medium mt-2 inline-block">
                    Start Mock Test â†’
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
