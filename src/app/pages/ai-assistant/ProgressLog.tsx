import { useState } from 'react';
import { AIAssistantNav } from '@/app/components/AIAssistantNav';
import { StandardButton } from '@/app/components/ui/standard-button';
import { motion } from 'motion/react';
import {
  History,
  Download,
  Filter,
  Calendar,
  Award,
  BookOpen,
  PenTool,
  Mic,
  Headphones,
  TrendingUp,
  MessageSquare,
  Target,
  Trophy,
  Clock,
  BarChart3
} from 'lucide-react';
import { timelineEntries, mockRecentSessions } from '@/app/data/aiAssistantData';
import { toast } from 'sonner';

export default function ProgressLog() {
  const [viewMode, setViewMode] = useState<'timeline' | 'table'>('timeline');
  const [activityFilter, setActivityFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('30');
  const [skillFilter, setSkillFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(true);

  const handleExportData = () => {
    toast.success('Exporting your progress data...');
    // Simulate export
    setTimeout(() => {
      toast.success('Progress data exported successfully!');
    }, 1500);
  };

  const handleToggleFilters = () => {
    setShowFilters(!showFilters);
    toast.info(showFilters ? 'Filters hidden' : 'Filters shown');
  };

  const getActivityIcon = (type: string) => {
    const icons = {
      'practice': BookOpen,
      'mock-test': Award,
      'feedback': MessageSquare,
      'plan-update': Target,
      'milestone': Trophy,
      'review': BarChart3
    };
    return icons[type as keyof typeof icons] || BookOpen;
  };

  const getActivityColor = (type: string) => {
    const colors = {
      'practice': 'bg-blue-100 text-blue-700 border-blue-200',
      'mock-test': 'bg-purple-100 text-purple-700 border-purple-200',
      'feedback': 'bg-amber-100 text-amber-700 border-amber-200',
      'plan-update': 'bg-green-100 text-green-700 border-green-200',
      'milestone': 'bg-red-100 text-red-700 border-red-200',
      'review': 'bg-gray-100 text-gray-700 border-gray-200'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const getSkillIcon = (skill: string) => {
    const icons = {
      'reading': BookOpen,
      'writing': PenTool,
      'speaking': Mic,
      'listening': Headphones
    };
    return icons[skill as keyof typeof icons] || BookOpen;
  };

  const getSkillColor = (skill: string) => {
    const colors = {
      'reading': 'text-blue-600',
      'writing': 'text-purple-600',
      'speaking': 'text-green-600',
      'listening': 'text-amber-600'
    };
    return colors[skill as keyof typeof colors] || 'text-gray-600';
  };

  const behaviourAnalytics = {
    practiceConsistency: 85,
    dropOffDays: ['Sunday'],
    peakHours: '7-9 PM',
    avgFocusDuration: 45,
    totalSessions: 42,
    totalHours: 38
  };

  return (
    <>
      <AIAssistantNav />

      <div className="min-h-screen bg-gray-50 pt-40 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4B6E48] to-[#3a5638] rounded-xl flex items-center justify-center shadow-sm">
                    <History className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900">Learning History</h1>
                    <p className="text-[#64748B] mt-1">Complete audit trail of your learning journey</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <StandardButton variant="outline" onClick={handleToggleFilters}>
                  <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    <span>Filters</span>
                  </div>
                </StandardButton>
                <StandardButton variant="outline" onClick={handleExportData}>
                  <div className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    <span>Export Data</span>
                  </div>
                </StandardButton>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white border border-[#E2E8F0] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:border-[#4B6E48]/30"
              >
                <div className="text-sm text-[#64748B] mb-1">Total Sessions</div>
                <div className="text-2xl font-bold text-[#0F172A]">{behaviourAnalytics.totalSessions}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white border border-[#E2E8F0] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:border-[#4B6E48]/30"
              >
                <div className="text-sm text-[#64748B] mb-1">Total Hours</div>
                <div className="text-2xl font-bold text-[#0F172A]">{behaviourAnalytics.totalHours}h</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white border border-[#E2E8F0] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:border-[#4B6E48]/30"
              >
                <div className="text-sm text-[#64748B] mb-1">Consistency</div>
                <div className="text-2xl font-bold text-[#4B6E48]">{behaviourAnalytics.practiceConsistency}%</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white border border-[#E2E8F0] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:border-[#4B6E48]/30"
              >
                <div className="text-sm text-[#64748B] mb-1">Avg Focus</div>
                <div className="text-2xl font-bold text-[#4B6E48]">{behaviourAnalytics.avgFocusDuration}m</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white border border-[#E2E8F0] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:border-[#4B6E48]/30"
              >
                <div className="text-sm text-[#64748B] mb-1">Peak Time</div>
                <div className="text-xl font-bold text-[#4B6E48]">{behaviourAnalytics.peakHours}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white border border-[#E2E8F0] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:border-[#4B6E48]/30"
              >
                <div className="text-sm text-[#64748B] mb-1">Streak</div>
                <div className="text-2xl font-bold text-[#4B6E48]">14d</div>
              </motion.div>
            </div>

            {/* Filters Row */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap gap-4 items-center"
              >
                <select
                  value={activityFilter}
                  onChange={(e) => setActivityFilter(e.target.value)}
                  className="px-3 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-[#4B6E48] text-[#0F172A] text-sm font-['Inter'] bg-white hover:border-[#4B6E48]/50 transition-colors"
                >
                  <option value="all">All Activities</option>
                  <option value="practice">Practice</option>
                  <option value="mock-test">Mock Tests</option>
                  <option value="feedback">Feedback</option>
                  <option value="milestone">Milestones</option>
                </select>

                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="px-3 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-[#4B6E48] text-[#0F172A] text-sm font-['Inter'] bg-white hover:border-[#4B6E48]/50 transition-colors"
                >
                  <option value="7">Last 7 days</option>
                  <option value="30">Last 30 days</option>
                  <option value="90">Last 3 months</option>
                  <option value="all">All time</option>
                </select>

                <select
                  value={skillFilter}
                  onChange={(e) => setSkillFilter(e.target.value)}
                  className="px-3 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-[#4B6E48] text-[#0F172A] text-sm font-['Inter'] bg-white hover:border-[#4B6E48]/50 transition-colors"
                >
                  <option value="all">All Skills</option>
                  <option value="reading">Reading</option>
                  <option value="writing">Writing</option>
                  <option value="speaking">Speaking</option>
                  <option value="listening">Listening</option>
                </select>

                <div className="ml-auto flex gap-2">
                  <button
                    onClick={() => setViewMode('timeline')}
                    className={`px-3 py-2 rounded-lg text-sm font-medium font-['Inter'] transition-all duration-300 ${
                      viewMode === 'timeline'
                        ? 'bg-[#4B6E48] text-white shadow-sm'
                        : 'bg-gray-100 text-[#64748B] hover:bg-gray-200'
                    }`}
                  >
                    Timeline
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`px-3 py-2 rounded-lg text-sm font-medium font-['Inter'] transition-all duration-300 ${
                      viewMode === 'table'
                        ? 'bg-[#4B6E48] text-white shadow-sm'
                        : 'bg-gray-100 text-[#64748B] hover:bg-gray-200'
                    }`}
                  >
                    Table
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>

          {viewMode === 'timeline' ? (
            /* Timeline View */
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4B6E48] via-[#4B6E48]/30 to-gray-200" />

              <div className="space-y-6">
                {timelineEntries.map((entry, i) => {
                  const Icon = getActivityIcon(entry.type);
                  return (
                    <motion.div
                      key={entry.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                      className="relative pl-20"
                    >
                      {/* Date Badge */}
                      <div className="absolute left-0 w-16 h-16 bg-white border-4 border-[#4B6E48] rounded-full flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6 text-[#4B6E48]" />
                      </div>

                      <motion.div
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className="bg-white border border-[#E2E8F0] rounded-xl p-5 hover:shadow-lg hover:border-[#4B6E48]/30 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getActivityColor(entry.type)}`}>
                                {entry.type.replace('-', ' ')}
                              </span>
                              <span className="text-sm text-[#94A3B8]">{entry.date}</span>
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A]">{entry.title}</h3>
                            <p className="text-[#64748B] mt-1">{entry.description}</p>
                          </div>
                          {entry.score && (
                            <div className="ml-4">
                              <div className="text-3xl font-bold text-[#4B6E48]">{entry.score}</div>
                              <div className="text-xs text-[#94A3B8]">Score</div>
                            </div>
                          )}
                        </div>

                        {entry.result && (
                          <div className="flex items-center gap-2 text-sm">
                            <TrendingUp className="w-4 h-4 text-[#4B6E48]" />
                            <span className="font-medium text-[#64748B]">Result:</span>
                            <span className="text-[#64748B]">{entry.result}</span>
                          </div>
                        )}

                        {entry.link && (
                          <div className="mt-3">
                            <a href={entry.link} className="text-[#4B6E48] hover:underline text-sm font-medium transition-colors">
                              View Details â†’
                            </a>
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Table View */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#64748B] uppercase">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#64748B] uppercase">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#64748B] uppercase">Skill</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#64748B] uppercase">Duration</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#64748B] uppercase">Score</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#64748B] uppercase">Improvement</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#64748B] uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0]">
                    {mockRecentSessions.map((session) => {
                      const SkillIcon = getSkillIcon(session.skill);
                      return (
                        <motion.tr
                          key={session.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                          className="hover:bg-[#F8FAFC] transition-colors duration-200 cursor-pointer"
                        >
                          <td className="px-6 py-4 text-sm text-[#0F172A]">{session.date}</td>
                          <td className="px-6 py-4 text-sm font-medium text-[#0F172A]">{session.type}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <SkillIcon className={`w-4 h-4 ${getSkillColor(session.skill)}`} />
                              <span className="text-sm font-medium text-[#0F172A] capitalize">{session.skill}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-[#64748B]">{session.duration} min</td>
                          <td className="px-6 py-4">
                            <span className="text-lg font-bold text-[#4B6E48]">{session.score}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-[#4B6E48] font-medium">+0.5</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#4B6E48]/10 text-[#4B6E48] border border-[#4B6E48]/20">
                              Completed
                            </span>
                          </td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* Behaviour Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-8 bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4B6E48] to-[#3a5638] rounded-xl flex items-center justify-center shadow-sm">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#0F172A]">Behaviour Analytics</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-[#4B6E48]/5 to-[#4B6E48]/10 border border-[#4B6E48]/20 rounded-xl p-5 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="text-sm text-[#64748B] mb-2">Practice Consistency</div>
                <div className="text-4xl font-bold mb-2 text-[#0F172A]">{behaviourAnalytics.practiceConsistency}%</div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${behaviourAnalytics.practiceConsistency}%` }}
                    transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#4B6E48] to-[#3a5638] rounded-full"
                  />
                </div>
                <div className="text-xs text-[#64748B] mt-2">Excellent consistency!</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-[#4B6E48]/5 to-[#4B6E48]/10 border border-[#4B6E48]/20 rounded-xl p-5 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="text-sm text-[#64748B] mb-2">Drop-off Days</div>
                <div className="text-2xl font-bold mb-1 text-[#0F172A]">{behaviourAnalytics.dropOffDays.join(', ')}</div>
                <div className="text-xs text-[#64748B] mt-2">Try scheduling practice on Sundays</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-[#4B6E48]/5 to-[#4B6E48]/10 border border-[#4B6E48]/20 rounded-xl p-5 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="text-sm text-[#64748B] mb-2">Peak Hours</div>
                <div className="text-2xl font-bold mb-1 text-[#0F172A]">{behaviourAnalytics.peakHours}</div>
                <div className="text-xs text-[#64748B] mt-2">Most productive time</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-[#4B6E48]/5 to-[#4B6E48]/10 border border-[#4B6E48]/20 rounded-xl p-5 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="text-sm text-[#64748B] mb-2">Avg Focus Duration</div>
                <div className="text-4xl font-bold mb-1 text-[#0F172A]">{behaviourAnalytics.avgFocusDuration}</div>
                <div className="text-xs text-[#64748B] mt-2">minutes per session</div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="mt-6 p-6 bg-gradient-to-br from-[#4B6E48]/5 to-white border border-[#4B6E48]/20 rounded-xl hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-[#4B6E48] rounded-lg flex items-center justify-center shadow-sm">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <div className="font-bold text-[#0F172A]">AI Insights</div>
              </div>
              <ul className="space-y-2 text-sm text-[#64748B]">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B6E48] font-bold">â€¢</span>
                  <span>You practice most effectively between 7-9 PM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B6E48] font-bold">â€¢</span>
                  <span>Consider adding Sunday sessions to maintain 7-day streak</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B6E48] font-bold">â€¢</span>
                  <span>Your focus duration is above average - great concentration!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B6E48] font-bold">â€¢</span>
                  <span>Reading practice shows highest consistency (95%)</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Attempt Archive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-8 bg-white border border-[#E2E8F0] rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-4 sm:mb-6">Attempt Archive</h2>

            <div className="space-y-3 sm:space-y-4">
              {['Reading', 'Writing', 'Speaking'].map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                  className="border border-[#E2E8F0] rounded-xl p-4 hover:border-[#4B6E48]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="font-bold text-[#0F172A]">{skill}</h3>
                    <span className="text-sm text-[#94A3B8] whitespace-nowrap">{5 + i} attempts</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[...Array(5 + i)].map((_, j) => (
                      <button
                        key={j}
                        className="px-3 py-2 bg-gray-50 hover:bg-[#4B6E48] hover:text-white border border-[#E2E8F0] rounded-lg text-sm font-medium text-[#64748B] hover:border-[#4B6E48] transition-all duration-300"
                      >
                        V{j + 1}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Export Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6"
          >
            <StandardButton 
              variant="outline" 
              className="flex-1 flex items-center justify-center gap-2 hover:bg-[#4B6E48]/5 hover:border-[#4B6E48] transition-all duration-300 min-h-[44px] sm:min-h-[48px]"
              onClick={() => {
                toast.success('Generating PDF report...');
                setTimeout(() => toast.success('PDF report downloaded successfully!'), 1500);
              }}
            >
              <Download className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">Download PDF Report</span>
            </StandardButton>
            <StandardButton 
              variant="outline" 
              className="flex-1 flex items-center justify-center gap-2 hover:bg-[#4B6E48]/5 hover:border-[#4B6E48] transition-all duration-300 min-h-[44px] sm:min-h-[48px]"
              onClick={() => {
                toast.success('Exporting to Excel...');
                setTimeout(() => toast.success('Excel file downloaded successfully!'), 1500);
              }}
            >
              <Download className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">Export to Excel</span>
            </StandardButton>
            <StandardButton 
              variant="outline" 
              className="flex-1 flex items-center justify-center gap-2 hover:bg-[#4B6E48]/5 hover:border-[#4B6E48] transition-all duration-300 min-h-[44px] sm:min-h-[48px]"
              onClick={() => {
                toast.success('Sharing with counselor...');
                setTimeout(() => toast.success('Progress shared successfully!'), 1500);
              }}
            >
              <Download className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">Share with Counselor</span>
            </StandardButton>
          </motion.div>
        </div>
      </div>
    </>
  );
}
