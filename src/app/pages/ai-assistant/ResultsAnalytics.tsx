import { useState } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { AIAssistantNav } from '@/app/components/AIAssistantNav';
import { StandardButton } from '@/app/components/ui/standard-button';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Download,
  Award,
  Target,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Filter,
  Sparkles
} from 'lucide-react';
import {
  performanceMetrics,
  skillBreakdowns,
  mockProgressData
} from '@/app/data/aiAssistantData';

export default function ResultsAnalytics() {
  const [dateRange, setDateRange] = useState('30');
  const [examType, setExamType] = useState('all');
  const [skillFilter, setSkillFilter] = useState('all');
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const [scoreTrendView, setScoreTrendView] = useState<'Weekly' | 'Monthly'>('Weekly');

  const getReadinessStatus = () => {
    const score = performanceMetrics.overallBand;
    if (score >= 7.5) return { status: 'Ready', color: 'green', icon: CheckCircle };
    if (score >= 6.5) return { status: 'Almost Ready', color: 'amber', icon: AlertTriangle };
    return { status: 'Needs Focus', color: 'red', icon: AlertTriangle };
  };

  const readiness = getReadinessStatus();

  // Generate monthly aggregated data
  const getMonthlyData = () => {
    return [
      { month: 'Oct', reading: 5.5, writing: 5.0, speaking: 6.0, listening: 5.5 },
      { month: 'Nov', reading: 6.0, writing: 5.5, speaking: 6.5, listening: 6.0 },
      { month: 'Dec', reading: 6.5, writing: 6.0, speaking: 7.0, listening: 6.5 },
      { month: 'Jan', reading: 7.0, writing: 6.5, speaking: 7.0, listening: 6.5 }
    ];
  };

  const monthlyData = getMonthlyData();
  const displayData = scoreTrendView === 'Weekly' ? mockProgressData : monthlyData;

  return (
    <>
      <Navigation />
      <AIAssistantNav />

      <div className="min-h-screen bg-gray-50 pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex flex-col max-[640px]:gap-4 md:flex-row items-start justify-between mb-6">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Results & Analytics</h1>
                <p className="text-gray-600 text-base max-[640px]:text-sm max-[640px]:max-w-full">Comprehensive performance intelligence and insights</p>
              </div>
              {/* Download button - desktop/tablet: right aligned, mobile: full width below */}
              <StandardButton variant="outline" className="max-[640px]:w-full max-[640px]:order-last">
                <div className="flex items-center gap-2 justify-center">
                  <Download className="w-5 h-5" />
                  <span>Download Report</span>
                </div>
              </StandardButton>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2.5 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4B6E48]/30 focus:border-[#4B6E48] text-gray-900 hover:bg-white/80 transition-all duration-200 cursor-pointer shadow-sm text-sm font-['Inter']"
              >
                <option value="7">Last 7 days</option>
                <option value="30">Last 30 days</option>
                <option value="90">Last 3 months</option>
              </select>

              <select
                value={examType}
                onChange={(e) => setExamType(e.target.value)}
                className="px-4 py-2.5 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4B6E48]/30 focus:border-[#4B6E48] text-gray-900 hover:bg-white/80 transition-all duration-200 cursor-pointer shadow-sm text-sm font-['Inter']"
              >
                <option value="all">All Exams</option>
                <option value="ielts">IELTS</option>
                <option value="toefl">TOEFL</option>
                <option value="pte">PTE</option>
              </select>

              <select
                value={skillFilter}
                onChange={(e) => setSkillFilter(e.target.value)}
                className="px-4 py-2.5 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4B6E48]/30 focus:border-[#4B6E48] text-gray-900 hover:bg-white/80 transition-all duration-200 cursor-pointer shadow-sm text-sm font-['Inter']"
              >
                <option value="all">All Skills</option>
                <option value="reading">Reading</option>
                <option value="writing">Writing</option>
                <option value="speaking">Speaking</option>
                <option value="listening">Listening</option>
              </select>
            </div>
          </motion.div>

          {/* Performance Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-[#4B6E48] to-[#3a5638] rounded-2xl p-6 text-white col-span-2 md:col-span-1 md:row-span-2 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer min-w-[180px]"
            >
              <div className="text-sm text-white/80 mb-2 whitespace-nowrap max-[900px]:text-[11px]">Overall Score</div>
              <div className="text-5xl font-bold mb-4">{performanceMetrics.overallBand}</div>
              <div className="flex items-center gap-2 text-sm text-white/90 max-[900px]:text-xs">
                <TrendingUp className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">+{performanceMetrics.improvementPercent}% this month</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:border-[#4B6E48]/30 min-h-[90px] max-[640px]:min-h-[90px]"
            >
              <div className="text-sm text-[#64748B] mb-2 whitespace-nowrap max-[900px]:text-[11px]">Best Section</div>
              <div className="text-2xl font-bold text-[#4B6E48]">{performanceMetrics.bestSection}</div>
              <div className="text-xs text-[#94A3B8] mt-1">8.0 average</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:border-[#4B6E48]/30 min-h-[90px] max-[640px]:min-h-[90px]"
            >
              <div className="text-sm text-[#64748B] mb-2 whitespace-nowrap max-[900px]:text-[11px]">Weakest Section</div>
              <div className="text-2xl font-bold text-[#4B6E48]">{performanceMetrics.weakestSection}</div>
              <div className="text-xs text-[#94A3B8] mt-1">6.5 average</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:border-[#4B6E48]/30 min-h-[90px] max-[640px]:min-h-[90px]"
            >
              <div className="text-sm text-[#64748B] mb-2 whitespace-nowrap max-[900px]:text-[11px]">Improvement</div>
              <div className="text-2xl font-bold text-[#4B6E48]">+{performanceMetrics.improvementPercent}%</div>
              <div className="text-xs text-[#94A3B8] mt-1">Last 30 days</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:border-[#4B6E48]/30 min-h-[90px] max-[640px]:min-h-[90px]"
            >
              <div className="text-sm text-[#64748B] mb-2 whitespace-nowrap max-[900px]:text-[11px]">Consistency</div>
              <div className="text-2xl font-bold text-[#4B6E48]">{performanceMetrics.consistencyIndex}%</div>
              <div className="text-xs text-[#94A3B8] mt-1">Excellent</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:border-[#4B6E48]/30 min-h-[90px] max-[640px]:min-h-[90px]"
            >
              <div className="text-sm text-[#64748B] mb-2 whitespace-nowrap max-[900px]:text-[11px]">Tests Taken</div>
              <div className="text-2xl font-bold text-[#4B6E48]">12</div>
              <div className="text-xs text-[#94A3B8] mt-1">This month</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:border-[#4B6E48]/30 min-h-[90px] max-[640px]:min-h-[90px]"
            >
              <div className="text-sm text-[#64748B] mb-2 whitespace-nowrap max-[900px]:text-[11px]">Practice Time</div>
              <div className="text-2xl font-bold text-[#4B6E48]">42h</div>
              <div className="text-xs text-[#94A3B8] mt-1">Last 30 days</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:border-[#4B6E48]/30 min-h-[90px] max-[640px]:min-h-[90px]"
            >
              <div className="text-sm text-[#64748B] mb-2 whitespace-nowrap max-[900px]:text-[11px]">Streak</div>
              <div className="text-2xl font-bold text-[#4B6E48]">14</div>
              <div className="text-xs text-[#94A3B8] mt-1">days</div>
            </motion.div>
          </div>

          {/* Trend Analysis */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 pb-10"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Score Trend</h3>
                <div className="flex gap-2">
                  <button
                    className={`px-3 py-1 text-sm ${
                      scoreTrendView === 'Weekly' ? 'bg-[#4B6E48] text-white' : 'bg-gray-100 text-gray-700'
                    } rounded-lg`}
                    onClick={() => setScoreTrendView('Weekly')}
                  >
                    Weekly
                  </button>
                  <button
                    className={`px-3 py-1 text-sm ${
                      scoreTrendView === 'Monthly' ? 'bg-[#4B6E48] text-white' : 'bg-gray-100 text-gray-700'
                    } rounded-lg`}
                    onClick={() => setScoreTrendView('Monthly')}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Chart */}
              <div className="h-64 flex items-end justify-between gap-2 overflow-visible">
                {displayData.map((data, i) => {
                  const avgScore = (data.reading + data.writing + data.speaking + data.listening) / 4;
                  const label = scoreTrendView === 'Weekly' 
                    ? new Date((data as any).date).getDate()
                    : (data as any).month;
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-gray-100 rounded-t relative" style={{ height: '200px' }}>
                        <div
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#4B6E48] to-[#3a5638] rounded-t transition-all"
                          style={{ height: `${(avgScore / 9) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">{label}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">
                    {scoreTrendView === 'Weekly' ? 'Average improvement per week' : 'Average improvement per month'}
                  </span>
                  <span className="font-semibold text-green-600">
                    {scoreTrendView === 'Weekly' ? '+0.3 bands' : '+0.4 bands'}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Section-wise Performance</h3>

              <div className="space-y-4">
                {['Reading', 'Writing', 'Speaking', 'Listening'].map((skill, i) => {
                  const scores = [8.0, 6.5, 7.0, 7.5];
                  const colors = ['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-amber-500'];
                  return (
                    <div key={skill}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{skill}</span>
                        <span className="text-sm font-bold text-gray-900">{scores[i]}</span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${colors[i]} rounded-full transition-all bg-[#4b6e48]`}
                          style={{ width: `${(scores[i] / 9) * 100}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600 mb-2">Performance Balance</div>
                <div className="text-sm text-gray-900">
                  Your scores are <span className="font-semibold text-green-600">well-balanced</span> across all sections
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skill Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-6 mb-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Detailed Skill Analysis</h3>

            <div className="space-y-4">
              {skillBreakdowns.map((breakdown) => (
                <div key={breakdown.skill} className="border-2 border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedSkill(expandedSkill === breakdown.skill ? null : breakdown.skill)}
                    className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-lg font-bold text-gray-900 capitalize">{breakdown.skill}</div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        breakdown.progressTrend === 'improving' ? 'bg-green-100 text-green-700' :
                        breakdown.progressTrend === 'stable' ? 'bg-blue-100 text-blue-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {breakdown.progressTrend === 'improving' && <TrendingUp className="w-3 h-3 inline mr-1" />}
                        {breakdown.progressTrend === 'declining' && <TrendingDown className="w-3 h-3 inline mr-1" />}
                        {breakdown.progressTrend}
                      </span>
                    </div>
                    {expandedSkill === breakdown.skill ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>

                  {expandedSkill === breakdown.skill && (
                    <div className="p-4 bg-gray-50 border-t-2 border-gray-200">
                      <div className="mb-4">
                        <div className="font-semibold text-gray-900 mb-3">Micro-Skills</div>
                        <div className="grid md:grid-cols-2 gap-3">
                          {breakdown.microSkills.map((microSkill) => (
                            <div key={microSkill.name} className="p-3 bg-white rounded-lg border border-gray-200">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">{microSkill.name}</span>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  microSkill.status === 'excellent' ? 'bg-green-100 text-green-700' :
                                  microSkill.status === 'good' ? 'bg-blue-100 text-blue-700' :
                                  'bg-red-100 text-red-700'
                                }`}>
                                  {microSkill.score}%
                                </span>
                              </div>
                              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${
                                    microSkill.status === 'excellent' ? 'bg-green-500' :
                                    microSkill.status === 'good' ? 'bg-blue-500' :
                                    'bg-red-500'
                                  }`}
                                  style={{ width: `${microSkill.score}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="font-semibold text-gray-900 mb-3">Error Patterns</div>
                        <ul className="space-y-2">
                          {breakdown.errorPatterns.map((pattern, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                              <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                              <span>{pattern}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Risk & Readiness Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4B6E48] to-[#3a5638] rounded-xl flex items-center justify-center shadow-md">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Exam Readiness Assessment</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <readiness.icon className="w-6 h-6 text-[#4B6E48]" />
                  <div className="font-semibold text-gray-700">Status</div>
                </div>
                <div className="text-3xl font-bold text-[#4B6E48]">{readiness.status}</div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="font-semibold text-gray-700 mb-3">Preparation Days</div>
                <div className="text-3xl font-bold text-gray-900">14</div>
                <div className="text-sm text-gray-600 mt-2">Recommended practice duration</div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="font-semibold text-gray-700 mb-3">Confidence Score</div>
                <div className="text-3xl font-bold text-gray-900">82%</div>
                <div className="text-sm text-gray-600 mt-2">Based on recent performance</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#4B6E48]/10 backdrop-blur-sm border border-[#4B6E48]/20 rounded-xl">
              <div className="font-semibold text-[#4B6E48] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                AI Recommendation
              </div>
              <p className="text-gray-700 text-sm">
                You're on track to achieve your target score. Focus on improving Writing coherence and complete 2 more full mock tests before your exam date. Your Reading and Speaking are excellent - maintain current practice levels.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}