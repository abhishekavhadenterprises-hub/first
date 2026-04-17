import { useState, useEffect, useRef } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { AIAssistantNav } from '@/app/components/AIAssistantNav';
import { StandardButton } from '@/app/components/ui/standard-button';
import { Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  ClipboardCheck,
  Clock,
  Play,
  History,
  Award,
  CheckCircle,
  AlertCircle,
  Trophy,
  Target,
  ArrowLeft,
  X
} from 'lucide-react';
import { mockTests, mockTestAttempts } from '@/app/data/aiAssistantData';
import { toast } from 'sonner';

export default function MockTests() {
  const navigate = useNavigate();
  const [showConfig, setShowConfig] = useState(false);
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [timerMode, setTimerMode] = useState<'strict' | 'practice'>('strict');
  const [breaksEnabled, setBreaksEnabled] = useState(false);
  const [rulesAccepted, setRulesAccepted] = useState(false);
  const [micChecked, setMicChecked] = useState(false);
  const [cameraChecked, setCameraChecked] = useState(false);
  const navTabsRef = useRef<HTMLDivElement>(null);

  const selectedTestData = mockTests.find(t => t.id === selectedTest);

  // Auto-scroll active tab into view
  useEffect(() => {
    if (navTabsRef.current) {
      const activeTab = navTabsRef.current.querySelector('[data-active="true"]');
      if (activeTab) {
        activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, []);

  const handleSelectTest = (testId: string) => {
    setSelectedTest(testId);
    setShowConfig(true);
  };

  const handleBeginTest = () => {
    if (!rulesAccepted) {
      toast.error('Please accept the test rules to continue');
      return;
    }
    if (!micChecked || !cameraChecked) {
      toast.error('Please complete mic and camera checks');
      return;
    }
    toast.success('Starting mock test...');
    // Navigate to test interface
    navigate(`/ai-assistant/test/${selectedTest}`);
  };

  const getTestTypeColor = (type: string) => {
    const colors = {
      'IELTS Academic': 'bg-blue-100 text-blue-700 border-blue-200',
      'IELTS General': 'bg-green-100 text-green-700 border-green-200',
      'TOEFL': 'bg-purple-100 text-purple-700 border-purple-200',
      'PTE': 'bg-amber-100 text-amber-700 border-amber-200',
      'Visa Interview': 'bg-red-100 text-red-700 border-red-200'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <>
      <Navigation />
      <AIAssistantNav />

      <div className="mock-tests-root">
        <div className="mock-tests-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mock-tests-header"
          >
            <div className="mock-tests-title-section">
              {/* Icon + Title inline at 320px */}
              <div className="mock-tests-title-row">
                <div className="mock-tests-icon-wrapper">
                  <ClipboardCheck className="mock-tests-icon" />
                </div>
                <div className="mock-tests-title-content">
                  <h1 className="mock-tests-title">Mock Tests</h1>
                  <p className="mock-tests-subtitle">
                    Full-length exam simulations under real conditions
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Full width at 320px */}
            <div className="mock-tests-cta-buttons">
              <StandardButton className="mock-tests-cta-btn mock-tests-cta-primary" size="lg">
                <div className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  <span>Start New Mock Test</span>
                </div>
              </StandardButton>
              <Link to="/ai-assistant/progress-log" className="mock-tests-cta-link">
                <StandardButton variant="outline" size="lg" className="mock-tests-cta-btn">
                  <div className="flex items-center gap-2">
                    <History className="w-5 h-5" />
                    <span>View Past Tests</span>
                  </div>
                </StandardButton>
              </Link>
            </div>
          </motion.div>

          {!showConfig ? (
            /* Test Selection */
            <>
              {/* Green Score Banner - Restructured for Mobile */}
              <div className="mock-tests-score-banner">
                <div className="mock-tests-score-content">
                  {/* Row 1: Score on left */}
                  <div className="mock-tests-score-row-1">
                    <div className="mock-tests-score-left">
                      <div className="mock-tests-score-label">Latest Mock Test Score</div>
                      <div className="mock-tests-score-value">7.5</div>
                    </div>
                    {/* Desktop stats - hidden on mobile */}
                    <div className="mock-tests-score-stats-desktop">
                      <div className="mock-tests-stat">
                        <div className="mock-tests-stat-value">{mockTests.reduce((sum, t) => sum + t.attemptsTaken, 0)}</div>
                        <div className="mock-tests-stat-label">Tests Taken</div>
                      </div>
                      <div className="mock-tests-stat">
                        <div className="mock-tests-stat-value">85%</div>
                        <div className="mock-tests-stat-label">Avg Completion</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Row 2: Date as single unbroken line */}
                  <div className="mock-tests-score-row-2">
                    <div className="mock-tests-score-date">IELTS Academic • February 3, 2026</div>
                  </div>
                  
                  {/* Mobile stats row - only visible on mobile */}
                  <div className="mock-tests-score-stats-mobile">
                    <div className="mock-tests-stat-mobile">
                      <div className="mock-tests-stat-value-mobile">{mockTests.reduce((sum, t) => sum + t.attemptsTaken, 0)}</div>
                      <div className="mock-tests-stat-label-mobile">Tests Taken</div>
                    </div>
                    <div className="mock-tests-stat-mobile">
                      <div className="mock-tests-stat-value-mobile">85%</div>
                      <div className="mock-tests-stat-label-mobile">Avg Completion</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Test Cards - Single column at 586px */}
              <div className="mock-tests-grid">
                {mockTests.map((test, index) => (
                  <motion.div
                    key={test.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mock-test-card"
                  >
                    <div className="mock-test-card-header">
                      <div className="mock-test-card-content">
                        <div className={`mock-test-badge ${getTestTypeColor(test.type)}`}>
                          {test.type}
                        </div>
                        <h3 className="mock-test-name">{test.name}</h3>
                        <p className="mock-test-description">{test.description}</p>
                      </div>
                    </div>

                    <div className="mock-test-details">
                      <div className="mock-test-detail-row">
                        <span className="mock-test-detail-label">
                          <Clock className="w-4 h-4" />
                          Duration
                        </span>
                        <span className="mock-test-detail-value">{test.duration} min</span>
                      </div>

                      {/* Sections - label and value on same line at 586px */}
                      <div className="mock-test-detail-row">
                        <span className="mock-test-detail-label mock-test-sections-label">Sections</span>
                        <span className="mock-test-detail-value mock-test-sections-value">{test.sections.join(', ')}</span>
                      </div>

                      <div className="mock-test-detail-row">
                        <span className="mock-test-detail-label">Difficulty</span>
                        <span className={`mock-test-difficulty-badge ${
                          test.difficulty === 'Hard' ? 'bg-red-100 text-red-700' :
                          test.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {test.difficulty}
                        </span>
                      </div>

                      <div className="mock-test-detail-row">
                        <span className="mock-test-detail-label">Attempts</span>
                        <span className="mock-test-detail-value">{test.attemptsTaken}</span>
                      </div>

                      {test.bestScore && (
                        <div className="mock-test-detail-row">
                          <span className="mock-test-detail-label">
                            <Trophy className="w-4 h-4 text-amber-500" />
                            Best Score
                          </span>
                          <span className="mock-test-best-score">{test.bestScore}</span>
                        </div>
                      )}
                    </div>

                    <StandardButton
                      onClick={() => handleSelectTest(test.id)}
                      className="mock-test-start-btn"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Play className="w-4 h-4" />
                        <span>Start Test</span>
                      </div>
                    </StandardButton>
                  </motion.div>
                ))}
              </div>

              {/* Past Attempts */}
              <div className="mock-tests-attempts-section">
                <h2 className="mock-tests-attempts-title">Recent Attempts</h2>
                <div className="mock-tests-attempts-container">
                  {/* Desktop Table View - Above 496px */}
                  <div className="mock-tests-table-desktop">
                    <table className="mock-tests-table">
                      <thead className="mock-tests-table-head">
                        <tr>
                          <th className="mock-tests-th mock-tests-th-date">Date</th>
                          <th className="mock-tests-th mock-tests-th-test">Test</th>
                          <th className="mock-tests-th mock-tests-th-score">Score</th>
                          <th className="mock-tests-th mock-tests-th-status">Status</th>
                          <th className="mock-tests-th mock-tests-th-action">Action</th>
                        </tr>
                      </thead>
                      <tbody className="mock-tests-table-body">
                        {mockTestAttempts.map((attempt) => {
                          const test = mockTests.find(t => t.id === attempt.testId);
                          const date = new Date(attempt.date);
                          const shortDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' });
                          
                          return (
                            <tr key={attempt.id} className="mock-tests-table-row">
                              <td className="mock-tests-td mock-tests-td-date">
                                <span className="mock-tests-date-full">{attempt.date}</span>
                                <span className="mock-tests-date-short">{shortDate}</span>
                              </td>
                              <td className="mock-tests-td mock-tests-td-test">{test?.name}</td>
                              <td className="mock-tests-td mock-tests-td-score">
                                <span className="mock-tests-score-display">{attempt.overallScore}</span>
                              </td>
                              <td className="mock-tests-td mock-tests-td-status">
                                <span className={`mock-tests-status-badge ${
                                  attempt.status === 'completed' ? 'mock-tests-status-completed' :
                                  attempt.status === 'in-progress' ? 'mock-tests-status-progress' :
                                  'mock-tests-status-incomplete'
                                }`}>
                                  {attempt.status}
                                </span>
                              </td>
                              <td className="mock-tests-td mock-tests-td-action">
                                <Link to={`/ai-assistant/results-analytics?attempt=${attempt.id}`} className="mock-tests-action-link">
                                  <span className="mock-tests-action-text">View Details</span>
                                  <svg className="mock-tests-action-icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                  </svg>
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Card View - 496px and below */}
                  <div className="mock-tests-cards-mobile">
                    {mockTestAttempts.map((attempt) => {
                      const test = mockTests.find(t => t.id === attempt.testId);
                      return (
                        <div key={attempt.id} className="mock-tests-card-row">
                          <div className="mock-tests-card-header">
                            <div className="mock-tests-card-test-name">{test?.name}</div>
                            <div className="mock-tests-card-date">{attempt.date}</div>
                          </div>
                          <div className="mock-tests-card-footer">
                            <div className="mock-tests-card-score">{attempt.overallScore}</div>
                            <span className={`mock-tests-card-status-badge ${
                              attempt.status === 'completed' ? 'mock-tests-status-completed' :
                              attempt.status === 'in-progress' ? 'mock-tests-status-progress' :
                              'mock-tests-status-incomplete'
                            }`}>
                              {attempt.status}
                            </span>
                            <Link to={`/ai-assistant/results-analytics?attempt=${attempt.id}`} className="mock-tests-card-action">
                              <svg className="mock-tests-card-chevron" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Test Configuration Modal */
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8"
              >
                {/* Back Button - Top Left */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() => setShowConfig(false)}
                    className="flex items-center gap-2 text-[#64748B] hover:text-[#4B6E48] transition-colors group"
                  >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Back to Tests</span>
                  </button>
                  <button
                    onClick={() => setShowConfig(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5 text-[#64748B]" />
                  </button>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#4B6E48] rounded-xl flex items-center justify-center">
                    <ClipboardCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedTestData?.name}</h2>
                    <p className="text-gray-600">Configure your test settings</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  {/* Timer Mode */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Timer Mode</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => setTimerMode('strict')}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          timerMode === 'strict'
                            ? 'border-[#4B6E48] bg-[#4B6E48]/10'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-semibold text-gray-900 mb-1">Strict Mode</div>
                        <div className="text-sm text-gray-600">Real exam conditions, auto-submit when time expires</div>
                      </button>
                      <button
                        onClick={() => setTimerMode('practice')}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          timerMode === 'practice'
                            ? 'border-[#4B6E48] bg-[#4B6E48]/10'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-semibold text-gray-900 mb-1">Practice Mode</div>
                        <div className="text-sm text-gray-600">Flexible timing, continue after time expires</div>
                      </button>
                    </div>
                  </div>

                  {/* Breaks */}
                  <div>
                    <label className="flex items-center justify-between cursor-pointer">
                      <div>
                        <div className="font-medium text-gray-900">Enable Breaks</div>
                        <div className="text-sm text-gray-600">Allow 10-minute breaks between sections</div>
                      </div>
                      <button
                        onClick={() => setBreaksEnabled(!breaksEnabled)}
                        className={`relative w-14 h-7 rounded-full transition-colors ${
                          breaksEnabled ? 'bg-[#4B6E48]' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                          breaksEnabled ? 'translate-x-7' : ''
                        }`} />
                      </button>
                    </label>
                  </div>

                  {/* Equipment Check */}
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                    <div className="font-semibold text-blue-900 mb-3">Equipment Check</div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={micChecked}
                          onChange={(e) => setMicChecked(e.target.checked)}
                          className="w-5 h-5 text-[#4B6E48] rounded"
                        />
                        <span className="text-sm text-blue-900">Microphone tested and working</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={cameraChecked}
                          onChange={(e) => setCameraChecked(e.target.checked)}
                          className="w-5 h-5 text-[#4B6E48] rounded"
                        />
                        <span className="text-sm text-blue-900">Camera (if required) tested and working</span>
                      </label>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-amber-900 mb-2">Test Instructions</div>
                        <ul className="text-sm text-amber-800 space-y-1">
                          <li>• Complete all sections in order</li>
                          <li>• You cannot navigate back to previous sections once submitted</li>
                          <li>• Your progress is auto-saved every 2 minutes</li>
                          <li>• Ensure stable internet connection throughout</li>
                          <li>• Find a quiet environment without distractions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Rules Acceptance */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rulesAccepted}
                      onChange={(e) => setRulesAccepted(e.target.checked)}
                      className="w-5 h-5 text-[#4B6E48] rounded mt-1"
                    />
                    <div className="text-sm">
                      <span className="font-medium text-gray-900">I have read and accept the test rules and conditions</span>
                      <p className="text-gray-600 mt-1">
                        By checking this box, I confirm that I will follow all exam guidelines and complete the test honestly.
                      </p>
                    </div>
                  </label>
                </div>

                <div className="flex gap-4">
                  <StandardButton
                    variant="outline"
                    onClick={() => setShowConfig(false)}
                    className="flex-1"
                  >
                    Cancel
                  </StandardButton>
                  <StandardButton
                    onClick={handleBeginTest}
                    disabled={!rulesAccepted || !micChecked || !cameraChecked}
                    className="flex-1 bg-[#4B6E48] text-white"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      <span>Begin Test</span>
                    </div>
                  </StandardButton>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Comprehensive Responsive Styles */}
      <style>{`
        /* === ROOT CONTAINER === */
        .mock-tests-root {
          min-height: 100vh;
          background: #F9FAFB;
          padding-top: 160px;
          padding-bottom: 64px;
        }
        @media (max-width: 767px) {
          .mock-tests-root { padding-top: 140px; padding-bottom: 48px; }
        }

        .mock-tests-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
        }
        @media (max-width: 767px) {
          .mock-tests-container { padding: 0 20px; }
        }

        /* === HEADER === */
        .mock-tests-header {
          margin-bottom: 48px;
        }
        @media (max-width: 767px) {
          .mock-tests-header { margin-bottom: 32px; }
        }

        .mock-tests-title-section {
          margin-bottom: 24px;
        }

        /* Icon + Title inline at 320px */
        .mock-tests-title-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        @media (max-width: 320px) {
          .mock-tests-title-row { gap: 12px; align-items: center; }
        }

        .mock-tests-icon-wrapper {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #4B6E48 0%, #3a5638 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 767px) {
          .mock-tests-icon-wrapper { width: 40px; height: 40px; }
        }
        /* Icon size 32px at 320px */
        @media (max-width: 320px) {
          .mock-tests-icon-wrapper { width: 32px; height: 32px; border-radius: 8px; }
        }

        .mock-tests-icon {
          width: 24px;
          height: 24px;
          color: #fff;
        }
        @media (max-width: 767px) {
          .mock-tests-icon { width: 20px; height: 20px; }
        }
        @media (max-width: 320px) {
          .mock-tests-icon { width: 16px; height: 16px; }
        }

        .mock-tests-title-content {
          flex: 1;
          min-width: 0;
        }

        .mock-tests-title {
          font-size: 36px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 4px 0;
          line-height: 1.2;
        }
        @media (max-width: 767px) {
          .mock-tests-title { font-size: 28px; }
        }
        @media (max-width: 320px) {
          .mock-tests-title { font-size: 24px; }
        }

        .mock-tests-subtitle {
          font-size: 16px;
          color: #6B7280;
          margin: 0;
          line-height: 1.5;
        }
        @media (max-width: 767px) {
          .mock-tests-subtitle { font-size: 14px; }
        }

        /* === CTA BUTTONS - Full width at 320px === */
        .mock-tests-cta-buttons {
          display: flex;
          gap: 16px;
        }
        /* Stack vertically with 12px gap at 320px */
        @media (max-width: 320px) {
          .mock-tests-cta-buttons {
            flex-direction: column;
            gap: 12px;
          }
        }
        @media (min-width: 321px) and (max-width: 640px) {
          .mock-tests-cta-buttons {
            flex-wrap: wrap;
          }
        }

        .mock-tests-cta-link {
          flex: 1;
        }
        @media (max-width: 320px) {
          .mock-tests-cta-link { width: 100%; }
        }

        .mock-tests-cta-btn {
          border-radius: 9999px;
        }
        /* Full width (100%) at 320px */
        @media (max-width: 320px) {
          .mock-tests-cta-btn { width: 100%; }
        }

        .mock-tests-cta-primary {
          background: #4B6E48;
          color: #fff;
        }

        /* === GREEN SCORE BANNER - Restructured for Mobile === */
        .mock-tests-score-banner {
          background: linear-gradient(135deg, #4B6E48 0%, #3a5638 100%);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 32px;
          color: #fff;
        }
        @media (max-width: 767px) {
          .mock-tests-score-banner { padding: 20px; border-radius: 12px; margin-bottom: 24px; }
        }

        .mock-tests-score-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* Row 1: Score on left, Desktop stats on right */
        .mock-tests-score-row-1 {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        @media (max-width: 767px) {
          .mock-tests-score-row-1 { flex-direction: row; align-items: center; }
        }

        .mock-tests-score-left {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mock-tests-score-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
        }
        @media (max-width: 320px) {
          .mock-tests-score-label { font-size: 12px; }
        }

        .mock-tests-score-value {
          font-size: 48px;
          font-weight: 700;
          color: #fff;
          line-height: 1;
        }
        @media (max-width: 767px) {
          .mock-tests-score-value { font-size: 40px; }
        }
        @media (max-width: 320px) {
          .mock-tests-score-value { font-size: 36px; }
        }

        /* Desktop stats - hidden on mobile */
        .mock-tests-score-stats-desktop {
          display: flex;
          gap: 32px;
        }
        @media (max-width: 767px) {
          .mock-tests-score-stats-desktop { display: none; }
        }

        .mock-tests-stat {
          text-align: center;
        }

        .mock-tests-stat-value {
          font-size: 28px;
          font-weight: 700;
          color: #fff;
        }

        .mock-tests-stat-label {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
          white-space: nowrap;
        }

        /* Row 2: Date as single unbroken line with bullet */
        .mock-tests-score-row-2 {
          display: flex;
        }

        .mock-tests-score-date {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.9);
          white-space: nowrap;
        }
        @media (max-width: 767px) {
          .mock-tests-score-date { font-size: 14px; }
        }
        @media (max-width: 320px) {
          .mock-tests-score-date { font-size: 13px; }
        }

        /* Mobile stats row - only visible on mobile */
        .mock-tests-score-stats-mobile {
          display: none;
        }
        @media (max-width: 767px) {
          .mock-tests-score-stats-mobile {
            display: flex;
            justify-content: space-between;
            gap: 16px;
            padding-top: 12px;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
          }
        }

        .mock-tests-stat-mobile {
          flex: 1;
          text-align: center;
        }

        .mock-tests-stat-value-mobile {
          font-size: 24px;
          font-weight: 700;
          color: #fff;
        }
        @media (max-width: 320px) {
          .mock-tests-stat-value-mobile { font-size: 20px; }
        }

        .mock-tests-stat-label-mobile {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
        }
        @media (max-width: 320px) {
          .mock-tests-stat-label-mobile { font-size: 11px; }
        }

        /* === TEST CARDS - Single column at 586px === */
        .mock-tests-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        /* Single column at 586px */
        @media (max-width: 586px) {
          .mock-tests-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        .mock-test-card {
          background: #fff;
          border: 2px solid #E5E7EB;
          border-radius: 16px;
          padding: 24px;
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .mock-test-card:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        /* 16px horizontal padding at 586px */
        @media (max-width: 586px) {
          .mock-test-card { padding: 20px 16px; border-radius: 12px; }
        }

        .mock-test-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .mock-test-card-content {
          flex: 1;
        }

        .mock-test-badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 500;
          border: 2px solid;
          margin-bottom: 12px;
        }

        .mock-test-name {
          font-size: 20px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 8px 0;
        }
        @media (max-width: 586px) {
          .mock-test-name { font-size: 18px; }
        }

        .mock-test-description {
          font-size: 14px;
          color: #6B7280;
          margin: 0;
          line-height: 1.5;
        }
        @media (max-width: 586px) {
          .mock-test-description { font-size: 13px; }
        }

        .mock-test-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* Sections - label and value on same line */
        .mock-test-detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          gap: 12px;
        }
        @media (max-width: 586px) {
          .mock-test-detail-row { font-size: 13px; }
        }

        .mock-test-detail-label {
          color: #6B7280;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .mock-test-sections-label {
          flex-shrink: 1;
        }

        .mock-test-detail-value {
          font-weight: 600;
          color: #111827;
          text-align: right;
        }

        .mock-test-sections-value {
          flex: 1;
          text-align: right;
          word-wrap: break-word;
        }

        .mock-test-difficulty-badge {
          padding: 4px 10px;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 500;
        }

        .mock-test-best-score {
          font-size: 18px;
          font-weight: 700;
          color: #4B6E48;
        }

        .mock-test-start-btn {
          width: 100%;
          background: #4B6E48;
          color: #fff;
          margin-top: auto;
        }

        /* === PAST ATTEMPTS SECTION === */
        .mock-tests-attempts-section {
          margin-top: 48px;
        }

        .mock-tests-attempts-title {
          font-size: 24px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 16px;
        }

        .mock-tests-attempts-container {
          background: #fff;
          border: 2px solid #E5E7EB;
          border-radius: 16px;
          overflow: hidden;
        }
        @media (max-width: 680px) {
          .mock-tests-attempts-container { border-radius: 12px; }
        }

        /* Desktop Table View - Above 496px */
        .mock-tests-table-desktop {
          display: block;
          overflow-x: visible;
        }
        @media (max-width: 496px) {
          .mock-tests-table-desktop { display: none; }
        }

        .mock-tests-table {
          width: 100%;
          border-collapse: collapse;
        }

        .mock-tests-table-head {
          background: #F9FAFB;
        }

        .mock-tests-th {
          padding: 12px 16px;
          text-align: left;
          font-size: 12px;
          font-weight: 500;
          color: #6B7280;
          text-transform: uppercase;
          border-bottom: 1px solid #E5E7EB;
        }

        /* Column width rebalancing at 680px */
        .mock-tests-th-date {
          width: 20%;
          min-width: 90px;
        }

        .mock-tests-th-test {
          width: 40%;
        }

        .mock-tests-th-score {
          width: 15%;
        }

        .mock-tests-th-status {
          width: 15%;
        }

        .mock-tests-th-action {
          width: 10%;
        }

        .mock-tests-table-body {
          background: #fff;
        }

        .mock-tests-table-row {
          transition: background 0.2s;
          border-bottom: 1px solid #E5E7EB;
        }
        .mock-tests-table-row:hover {
          background: #F9FAFB;
        }
        .mock-tests-table-row:last-child {
          border-bottom: none;
        }

        .mock-tests-td {
          padding: 16px;
          text-align: left;
          font-size: 14px;
          color: #111827;
          vertical-align: middle;
        }
        @media (max-width: 680px) {
          .mock-tests-td { padding: 12px; font-size: 13px; }
        }

        /* Date column - nowrap at 680px */
        .mock-tests-td-date {
          white-space: nowrap;
          min-width: 90px;
        }

        /* Show full date above 680px */
        .mock-tests-date-full {
          display: inline;
          color: #111827;
          font-size: 14px;
        }
        @media (max-width: 680px) {
          .mock-tests-date-full { display: none; }
        }

        /* Show short date at 680px and below */
        .mock-tests-date-short {
          display: none;
          color: #111827;
          font-size: 13px;
        }
        @media (max-width: 680px) {
          .mock-tests-date-short { display: inline; }
        }

        /* TEST column truncation at 680px */
        .mock-tests-td-test {
          font-weight: 500;
          max-width: 200px;
        }
        @media (max-width: 680px) {
          .mock-tests-td-test {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 1.4;
            max-height: 2.8em;
          }
        }

        .mock-tests-td-score {
          text-align: left;
        }

        .mock-tests-score-display {
          font-size: 18px;
          font-weight: 700;
          color: #4B6E48;
        }
        @media (max-width: 680px) {
          .mock-tests-score-display { font-size: 16px; }
        }

        .mock-tests-td-status {
          text-align: left;
        }

        .mock-tests-status-badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 500;
          text-align: center;
        }
        @media (max-width: 680px) {
          .mock-tests-status-badge { padding: 4px 10px; font-size: 10px; }
        }

        .mock-tests-status-completed {
          background: #D1FAE5;
          color: #065F46;
        }

        .mock-tests-status-progress {
          background: #FEF3C7;
          color: #92400E;
        }

        .mock-tests-status-incomplete {
          background: #FEE2E2;
          color: #991B1B;
        }

        .mock-tests-td-action {
          text-align: right;
        }

        .mock-tests-action-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #4B6E48;
          text-decoration: none;
          transition: color 0.2s;
          font-weight: 500;
        }
        .mock-tests-action-link:hover {
          color: #3a5638;
          text-decoration: underline;
        }

        /* Show text above 496px */
        .mock-tests-action-text {
          display: inline;
          font-size: 14px;
        }
        @media (max-width: 496px) {
          .mock-tests-action-text { display: none; }
        }

        /* Show icon only at 496px and below, 20x20px */
        .mock-tests-action-icon {
          display: none;
        }
        @media (max-width: 496px) {
          .mock-tests-action-icon {
            display: block;
            width: 20px;
            height: 20px;
            color: #4B6E48;
          }
        }

        /* Mobile Card View - 496px and below */
        .mock-tests-cards-mobile {
          display: none;
        }
        @media (max-width: 496px) {
          .mock-tests-cards-mobile {
            display: flex;
            flex-direction: column;
            gap: 12px;
            padding: 16px;
          }
        }
        @media (max-width: 320px) {
          .mock-tests-cards-mobile { padding: 12px; gap: 10px; }
        }

        .mock-tests-card-row {
          background: #fff;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          padding: 12px;
          transition: all 0.2s;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .mock-tests-card-row:hover {
          background: #F9FAFB;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        }
        .mock-tests-card-row:last-child {
          margin-bottom: 0;
        }

        .mock-tests-card-header {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 12px;
        }

        /* TEST name bold, max 2 lines with ellipsis */
        .mock-tests-card-test-name {
          font-size: 15px;
          font-weight: 700;
          color: #111827;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media (max-width: 320px) {
          .mock-tests-card-test-name { font-size: 14px; }
        }

        /* DATE in small gray text */
        .mock-tests-card-date {
          font-size: 12px;
          color: #6B7280;
        }

        /* Footer row: SCORE left, STATUS center, chevron right */
        .mock-tests-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }

        .mock-tests-card-score {
          font-size: 18px;
          font-weight: 700;
          color: #4B6E48;
          flex-shrink: 0;
        }
        @media (max-width: 320px) {
          .mock-tests-card-score { font-size: 16px; }
        }

        .mock-tests-card-status-badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 9999px;
          font-size: 10px;
          font-weight: 500;
          text-align: center;
          flex-shrink: 0;
        }

        .mock-tests-card-action {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4B6E48;
          text-decoration: none;
          transition: color 0.2s;
          flex-shrink: 0;
          padding: 4px;
        }
        .mock-tests-card-action:hover {
          color: #3a5638;
        }

        /* Chevron 20x20px */
        .mock-tests-card-chevron {
          width: 20px;
          height: 20px;
          color: #4B6E48;
        }

        /* === PREVENT OVERFLOW === */
        .mock-tests-root,
        .mock-tests-container,
        .mock-tests-score-banner,
        .mock-test-card {
          max-width: 100%;
          overflow-x: hidden;
        }
      `}</style>

      <Footer />
    </>
  );
}