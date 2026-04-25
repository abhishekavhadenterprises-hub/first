import { useState, useEffect } from 'react';
import { Footer } from '@/app/components/Footer';
import { AIAssistantNav } from '@/app/components/AIAssistantNav';
import { StandardButton } from '@/app/components/ui/standard-button';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Mic,
  MicOff,
  Play,
  Square,
  RotateCcw,
  ArrowLeft,
  Clock,
  Volume2,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Target,
  Sparkles,
  SkipForward,
  HelpCircle,
  User,
  Bot
} from 'lucide-react';
import { toast } from 'sonner';

const speakingQuestions = {
  part1: [
    "Let's talk about your hometown. Where are you from?",
    "What do you like most about living there?",
    "Has your hometown changed much since you were a child?",
    "Would you like to live there in the future?"
  ],
  part2: [
    "Describe a memorable trip you have taken. You should say:\nâ€¢ Where you went\nâ€¢ Who you went with\nâ€¢ What you did there\nAnd explain why it was memorable."
  ],
  part3: [
    "How has tourism changed in your country over the past decade?",
    "What are the advantages and disadvantages of international travel?",
    "Do you think virtual tourism could replace physical travel in the future?"
  ],
  visa: [
    "Why do you want to study in this country?",
    "How will this degree help your career goals?",
    "What are your plans after graduation?",
    "How will you fund your education?"
  ]
};

export default function SpeakingPractice() {
  const [mode, setMode] = useState<'IELTS Part 1' | 'IELTS Part 2' | 'IELTS Part 3' | 'Visa Interview'>('IELTS Part 1');
  const [topic, setTopic] = useState('Hometown');
  const [difficulty, setDifficulty] = useState<'Beginner' | 'Medium' | 'Hard'>('Medium');
  const [sessionLength, setSessionLength] = useState(10);
  const [isRecording, setIsRecording] = useState(false);
  const [sessionStarted, setSessionStarted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [micTested, setMicTested] = useState(false);
  const [showFillers, setShowFillers] = useState(true);
  const [showPacing, setShowPacing] = useState(true);

  const questions = mode.includes('Part 1') ? speakingQuestions.part1 
    : mode.includes('Part 2') ? speakingQuestions.part2
    : mode.includes('Part 3') ? speakingQuestions.part3
    : speakingQuestions.visa;

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    let interval: number;
    if (sessionStarted && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    }
    if (timeLeft === 0) {
      handleEndSession();
    }
    return () => clearInterval(interval);
  }, [sessionStarted, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartSession = () => {
    if (!micTested) {
      toast.error('Please test your microphone first');
      return;
    }
    setSessionStarted(true);
    setIsRecording(true);
    toast.success('Session started! Good luck!');
  };

  const handleEndSession = () => {
    setSessionStarted(false);
    setIsRecording(false);
    setShowFeedback(true);
    toast.success('Session complete! Generating feedback...');
  };

  const handleMicTest = () => {
    setMicTested(true);
    toast.success('Microphone test successful!');
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      toast.success('Next question');
    }
  };

  const handleSkip = () => {
    handleNextQuestion();
    toast.info('Question skipped');
  };

  if (showFeedback) {
    const overallScore = 7.5;
    const scores = {
      fluency: 7.5,
      lexical: 7.0,
      grammar: 8.0,
      pronunciation: 7.0
    };

    return (
      <>
        <AIAssistantNav />
        <div className="min-h-screen bg-gray-50 pt-40 pb-16">
          <div className="max-w-5xl mx-auto px-4">
            {/* Feedback Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-6"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-10 h-10 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Speaking Session Complete!</h1>
                <p className="text-gray-600">AI-powered feedback on your performance</p>
              </div>

              {/* Overall Score */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white text-center mb-6">
                <div className="text-sm mb-2 opacity-90">Overall Fluency Rating</div>
                <div className="text-6xl font-bold mb-2">{overallScore}</div>
                <div className="text-sm opacity-90">Band Score Estimate</div>
              </div>

              {/* Score Breakdown */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-700">{scores.fluency}</div>
                  <div className="text-xs text-gray-600 mt-1">Fluency & Coherence</div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-purple-700">{scores.lexical}</div>
                  <div className="text-xs text-gray-600 mt-1">Lexical Resource</div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-700">{scores.grammar}</div>
                  <div className="text-xs text-gray-600 mt-1">Grammar Range</div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-amber-700">{scores.pronunciation}</div>
                  <div className="text-xs text-gray-600 mt-1">Pronunciation</div>
                </div>
              </div>
            </motion.div>

            {/* Detailed Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid md:grid-cols-2 gap-6 mb-6"
            >
              {/* Strengths */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  What You Did Well
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-700">
                      <div className="font-medium text-gray-900">Natural Fluency</div>
                      Maintained smooth flow with minimal hesitation
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-700">
                      <div className="font-medium text-gray-900">Grammar Accuracy</div>
                      Excellent use of complex sentence structures
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-700">
                      <div className="font-medium text-gray-900">Clear Pronunciation</div>
                      Words were clearly enunciated and easy to understand
                    </div>
                  </div>
                </div>
              </div>

              {/* Areas for Improvement */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-red-600" />
                  Areas to Improve
                </h2>
                <div className="space-y-3">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="font-medium text-red-900 mb-1 text-sm">Filler Words</div>
                    <div className="text-xs text-red-700">Reduce use of "um", "like", "you know" - detected 12 times</div>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="font-medium text-red-900 mb-1 text-sm">Vocabulary Range</div>
                    <div className="text-xs text-red-700">Try using more advanced synonyms and topic-specific vocabulary</div>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="font-medium text-red-900 mb-1 text-sm">Answer Length</div>
                    <div className="text-xs text-red-700">Expand your answers with more details and examples</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Playback Timeline & Mistake Bank */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">Playback Timeline</h2>
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <button className="p-2 bg-[#4B6E48] text-white rounded-lg hover:bg-[#3a5638] transition-colors">
                    <Play className="w-5 h-5" />
                  </button>
                  <div className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-[#4B6E48]"></div>
                  </div>
                  <span className="text-sm font-mono text-gray-600">2:15 / 8:30</span>
                </div>
                <div className="space-y-2">
                  <button className="w-full text-left p-2 bg-white border border-red-200 rounded-lg text-sm hover:bg-red-50 transition-colors">
                    <span className="font-medium text-red-700">1:23</span> - Filler word detected: "um, like"
                  </button>
                  <button className="w-full text-left p-2 bg-white border border-amber-200 rounded-lg text-sm hover:bg-amber-50 transition-colors">
                    <span className="font-medium text-amber-700">3:45</span> - Consider: "beneficial" instead of "good"
                  </button>
                  <button className="w-full text-left p-2 bg-white border border-red-200 rounded-lg text-sm hover:bg-red-50 transition-colors">
                    <span className="font-medium text-red-700">6:12</span> - Grammar: "has" should be "have"
                  </button>
                </div>
              </div>

              {/* Mistake Bank */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="text-xs text-red-600 mb-2">Repeated Fillers</div>
                  <div className="text-sm font-medium text-gray-900">um (7x), like (5x)</div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="text-xs text-amber-600 mb-2">Grammar Patterns</div>
                  <div className="text-sm font-medium text-gray-900">Subject-verb agreement</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="text-xs text-blue-600 mb-2">Vocabulary Gaps</div>
                  <div className="text-sm font-medium text-gray-900">Academic synonyms</div>
                </div>
              </div>
            </motion.div>

            {/* Suggested Answer & Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#4B6E48]" />
                  Sample Improved Response
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-800 leading-relaxed">
                  "I'm from a vibrant city in the northern region of my country. What I appreciate most about living there is the perfect blend of modern infrastructure and rich cultural heritage. The city has transformed significantly since my childhood, with new metro systems and tech hubs emerging rapidly. While I'm excited about career opportunities abroad, I would definitely consider returning in the future to contribute to my hometown's continued development."
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#4B6E48] to-[#3a5638] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-4">Recommended Next Drills</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Practice Part 2 (long turn) responses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Work on reducing filler words</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Vocabulary building: Academic words</span>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <StandardButton variant="outline" size="sm" className="flex-1 bg-white/10 border-white/30 text-white hover:bg-white/20" onClick={() => window.location.reload()}>
                    <div className="flex items-center justify-center gap-2">
                      <RotateCcw className="w-4 h-4" />
                      <span>New Session</span>
                    </div>
                  </StandardButton>
                  <Link to="/ai-assistant/dashboard" className="flex-1">
                    <StandardButton variant="outline" size="sm" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20">
                      Dashboard
                    </StandardButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!sessionStarted) {
    return (
      <>
        <AIAssistantNav />
        <div className="speaking-setup-container">
          <div className="speaking-setup-wrapper">
            {/* Header */}
            <div className="speaking-header-section">
              <div className="speaking-header-row">
                <Link to="/ai-assistant/dashboard">
                  <button className="speaking-back-btn">
                    <ArrowLeft className="w-5 h-5 text-gray-900" />
                  </button>
                </Link>
                <div className="speaking-title-group">
                  <h1 className="speaking-page-title">
                    <Mic className="speaking-title-icon" />
                    Speaking Practice
                  </h1>
                  <p className="speaking-subtitle">Practice with AI interviewer</p>
                </div>
              </div>
            </div>

            {/* Mode Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="speaking-mode-card"
            >
              <h2 className="speaking-card-title">Choose Mode</h2>
              <div className="speaking-mode-grid">
                {(['IELTS Part 1', 'IELTS Part 2', 'IELTS Part 3', 'Visa Interview'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`speaking-mode-button ${mode === m ? 'speaking-mode-active' : ''}`}
                  >
                    <div className="speaking-mode-label">{m}</div>
                    <div className="speaking-mode-desc">
                      {m.includes('Part 1') && 'Introduction & Interview (4-5 min)'}
                      {m.includes('Part 2') && 'Long Turn (3-4 min)'}
                      {m.includes('Part 3') && 'Discussion (4-5 min)'}
                      {m === 'Visa Interview' && 'Common visa questions'}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Session Setup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="speaking-setup-card"
            >
              <h2 className="speaking-card-title">Session Setup</h2>

              <div className="speaking-setup-grid">
                <div className="speaking-setup-field">
                  <label className="speaking-field-label">Topic</label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="speaking-select"
                  >
                    <option>Hometown</option>
                    <option>Work/Study</option>
                    <option>Family</option>
                    <option>Hobbies</option>
                    <option>Random</option>
                  </select>
                </div>

                <div className="speaking-setup-field">
                  <label className="speaking-field-label">Difficulty</label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value as any)}
                    className="speaking-select"
                  >
                    <option>Beginner</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </div>

                <div className="speaking-setup-field">
                  <label className="speaking-field-label">Length (minutes)</label>
                  <select
                    value={sessionLength}
                    onChange={(e) => {
                      const len = Number(e.target.value);
                      setSessionLength(len);
                      setTimeLeft(len * 60);
                    }}
                    className="speaking-select"
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                  </select>
                </div>
              </div>

              {/* Microphone Test */}
              <div className="speaking-mic-test-box">
                <div className="speaking-mic-test-header">
                  <div>
                    <h3 className="speaking-mic-test-title">Microphone Test</h3>
                    <p className="speaking-mic-test-desc">Ensure your microphone is working properly</p>
                  </div>
                  {micTested && (
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  )}
                </div>
                <StandardButton
                  size="sm"
                  variant="outline"
                  onClick={handleMicTest}
                  className={micTested ? 'bg-green-50 border-green-600 text-green-700' : ''}
                >
                  <div className="flex items-center gap-2">
                    <Mic className="w-4 h-4" />
                    <span>{micTested ? 'Test Complete âœ“' : 'Test Microphone'}</span>
                  </div>
                </StandardButton>
              </div>

              {/* Environment Checklist */}
              <div className="speaking-checklist-box">
                <h3 className="speaking-checklist-title">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  Environment Checklist
                </h3>
                <div className="speaking-checklist-list">
                  <div className="speaking-checklist-item">
                    <CheckCircle className="w-4 h-4 text-amber-600" />
                    <span>Quiet environment</span>
                  </div>
                  <div className="speaking-checklist-item">
                    <CheckCircle className="w-4 h-4 text-amber-600" />
                    <span>Good internet connection</span>
                  </div>
                  <div className="speaking-checklist-item">
                    <CheckCircle className="w-4 h-4 text-amber-600" />
                    <span>Microphone permissions granted</span>
                  </div>
                </div>
              </div>

              {/* Real-time Coaching Options */}
              <div className="speaking-coaching-section">
                <h3 className="speaking-coaching-title">Real-time Coaching (Optional)</h3>
                <div className="speaking-coaching-options">
                  <label className="speaking-coaching-option">
                    <input
                      type="checkbox"
                      checked={showFillers}
                      onChange={(e) => setShowFillers(e.target.checked)}
                      className="speaking-checkbox"
                    />
                    <span>Show filler word detection</span>
                  </label>
                  <label className="speaking-coaching-option">
                    <input
                      type="checkbox"
                      checked={showPacing}
                      onChange={(e) => setShowPacing(e.target.checked)}
                      className="speaking-checkbox"
                    />
                    <span>Show pacing feedback</span>
                  </label>
                </div>
              </div>

              <StandardButton
                size="lg"
                className="w-full bg-[#4B6E48] text-white flex items-center justify-center gap-2"
                onClick={handleStartSession}
              >
                <Play className="w-5 h-5" />
                <span>Begin Practice Session</span>
              </StandardButton>
            </motion.div>
          </div>
        </div>

        {/* Comprehensive Responsive Styles */}
        <style>{`
          /* === RESPONSIVE GRID SYSTEM === */
          .speaking-setup-container {
            min-height: 100vh;
            background: #F9FAFB;
            padding-bottom: 64px;
          }
          @media (max-width: 767px) {
            .speaking-setup-container { 
              padding-top: 140px;
              padding-bottom: 40px;
            }
          }
          @media (min-width: 768px) and (max-width: 1279px) {
            .speaking-setup-container { padding-top: 160px; }
          }
          @media (min-width: 1280px) {
            .speaking-setup-container { padding-top: 160px; }
          }

          /* 12-column Desktop / 8-column Tablet / 4-column Mobile */
          .speaking-setup-wrapper {
            margin: 0 auto;
            box-sizing: border-box;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
          }
          @media (max-width: 767px) {
            .speaking-setup-wrapper { 
              padding: 0 16px;
              gap: 16px;
            }
          }
          @media (min-width: 768px) and (max-width: 1279px) {
            .speaking-setup-wrapper { 
              padding: 0 20px;
              grid-template-columns: repeat(8, 1fr);
              gap: 20px;
            }
          }
          @media (min-width: 1280px) {
            .speaking-setup-wrapper { 
              padding: 0 24px;
              max-width: 1200px;
              grid-template-columns: repeat(12, 1fr);
              gap: 24px;
            }
          }

          /* === HEADER SECTION === */
          .speaking-header-section {
            grid-column: 1 / -1;
            margin-bottom: 8px;
          }

          .speaking-header-row {
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }
          @media (max-width: 767px) {
            .speaking-header-row { gap: 8px; }
          }

          .speaking-back-btn {
            padding: 8px;
            background: transparent;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background 0.2s;
            flex-shrink: 0;
            min-height: 44px;
            min-width: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .speaking-back-btn:hover { background: #E5E7EB; }

          .speaking-title-group {
            flex: 1;
            min-width: 0;
          }

          /* === RESPONSIVE TYPOGRAPHY === */
          .speaking-page-title {
            font-weight: 700;
            color: #111827;
            display: flex;
            align-items: center;
            gap: 12px;
            line-height: 1.2;
            margin: 0 0 4px 0;
          }
          @media (max-width: 767px) {
            .speaking-page-title { 
              font-size: 24px;
              gap: 8px;
            }
          }
          @media (min-width: 768px) and (max-width: 1279px) {
            .speaking-page-title { font-size: 28px; }
          }
          @media (min-width: 1280px) {
            .speaking-page-title { font-size: 32px; }
          }

          .speaking-title-icon {
            flex-shrink: 0;
            color: #16A34A;
          }
          @media (max-width: 767px) {
            .speaking-title-icon { width: 24px; height: 24px; }
          }
          @media (min-width: 768px) {
            .speaking-title-icon { width: 28px; height: 28px; }
          }
          @media (min-width: 1280px) {
            .speaking-title-icon { width: 32px; height: 32px; }
          }

          .speaking-subtitle {
            color: #6B7280;
            line-height: 1.5;
            margin: 0;
          }
          @media (max-width: 767px) {
            .speaking-subtitle { font-size: 14px; }
          }
          @media (min-width: 768px) and (max-width: 1279px) {
            .speaking-subtitle { font-size: 15px; }
          }
          @media (min-width: 1280px) {
            .speaking-subtitle { font-size: 16px; }
          }

          /* === MODE SELECTION CARD === */
          .speaking-mode-card {
            grid-column: 1 / -1;
            background: #fff;
            border: 2px solid #E5E7EB;
            border-radius: 16px;
            box-sizing: border-box;
          }
          @media (max-width: 767px) {
            .speaking-mode-card { padding: 16px; }
          }
          @media (min-width: 768px) and (max-width: 1279px) {
            .speaking-mode-card { padding: 20px; }
          }
          @media (min-width: 1280px) {
            .speaking-mode-card { padding: 24px; }
          }

          .speaking-card-title {
            font-weight: 700;
            color: #111827;
            margin: 0 0 16px 0;
          }
          @media (max-width: 767px) {
            .speaking-card-title { 
              font-size: 18px;
              margin-bottom: 12px;
            }
          }
          @media (min-width: 768px) and (max-width: 1279px) {
            .speaking-card-title { font-size: 19px; }
          }
          @media (min-width: 1280px) {
            .speaking-card-title { font-size: 20px; }
          }

          /* === SPEAKING MODE GRID === */
          .speaking-mode-grid {
            display: grid;
            gap: 16px;
          }
          @media (max-width: 767px) {
            .speaking-mode-grid { 
              grid-template-columns: 1fr;
              gap: 12px;
            }
          }
          @media (min-width: 768px) {
            .speaking-mode-grid { 
              grid-template-columns: repeat(2, 1fr);
            }
          }

          .speaking-mode-button {
            padding: 16px;
            border-radius: 12px;
            border: 2px solid;
            cursor: pointer;
            background: transparent;
            text-align: left;
            transition: all 0.2s;
            min-height: 44px;
          }
          @media (max-width: 767px) {
            .speaking-mode-button { 
              padding: 14px;
              min-height: 48px;
            }
          }
          .speaking-mode-button:not(.speaking-mode-active) {
            border-color: #E5E7EB;
          }
          .speaking-mode-button:not(.speaking-mode-active):hover {
            border-color: #D1D5DB;
          }
          .speaking-mode-active {
            border-color: #4B6E48;
            background: rgba(75,110,72,0.05);
          }

          .speaking-mode-label {
            font-weight: 700;
            color: #111827;
            margin-bottom: 4px;
            font-size: 15px;
          }
          @media (max-width: 767px) {
            .speaking-mode-label { font-size: 14px; }
          }

          .speaking-mode-desc {
            font-size: 12px;
            color: #6B7280;
            line-height: 1.4;
          }

          /* === SESSION SETUP CARD === */
          .speaking-setup-card {
            grid-column: 1 / -1;
            background: #fff;
            border: 2px solid #E5E7EB;
            border-radius: 16px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            gap: 24px;
          }
          @media (max-width: 767px) {
            .speaking-setup-card { 
              padding: 16px;
              gap: 16px;
            }
          }
          @media (min-width: 768px) and (max-width: 1279px) {
            .speaking-setup-card { 
              padding: 20px;
              gap: 20px;
            }
          }
          @media (min-width: 1280px) {
            .speaking-setup-card { padding: 24px; }
          }

          /* === SETUP GRID === */
          .speaking-setup-grid {
            display: grid;
            gap: 16px;
          }
          @media (max-width: 767px) {
            .speaking-setup-grid { 
              grid-template-columns: 1fr;
              gap: 12px;
            }
          }
          @media (min-width: 768px) {
            .speaking-setup-grid { 
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .speaking-setup-field {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .speaking-field-label {
            font-size: 14px;
            font-weight: 500;
            color: #374151;
            margin: 0;
          }

          .speaking-select {
            width: 100%;
            padding: 10px 12px;
            font-size: 14px;
            color: #111827;
            background: #fff;
            border: 1px solid #D1D5DB;
            border-radius: 8px;
            cursor: pointer;
            min-height: 44px;
          }
          .speaking-select:focus {
            outline: none;
            border-color: #4B6E48;
            ring: 2px;
            ring-color: #4B6E48;
          }

          /* === MIC TEST BOX === */
          .speaking-mic-test-box {
            background: #DBEAFE;
            border: 1px solid #BFDBFE;
            border-radius: 12px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          @media (max-width: 767px) {
            .speaking-mic-test-box { 
              padding: 16px;
              gap: 12px;
            }
          }

          .speaking-mic-test-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
          }

          .speaking-mic-test-title {
            font-weight: 700;
            color: #111827;
            font-size: 16px;
            margin: 0 0 4px 0;
          }
          @media (max-width: 767px) {
            .speaking-mic-test-title { font-size: 15px; }
          }

          .speaking-mic-test-desc {
            font-size: 14px;
            color: #6B7280;
            margin: 0;
          }
          @media (max-width: 767px) {
            .speaking-mic-test-desc { font-size: 13px; }
          }

          /* === CHECKLIST BOX === */
          .speaking-checklist-box {
            background: #FEF3C7;
            border: 1px solid #FDE68A;
            border-radius: 12px;
            padding: 20px;
          }
          @media (max-width: 767px) {
            .speaking-checklist-box { padding: 16px; }
          }

          .speaking-checklist-title {
            font-weight: 700;
            color: #111827;
            font-size: 16px;
            margin: 0 0 12px 0;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          @media (max-width: 767px) {
            .speaking-checklist-title { 
              font-size: 15px;
              margin-bottom: 10px;
            }
          }

          .speaking-checklist-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .speaking-checklist-item {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            color: #374151;
          }
          @media (max-width: 767px) {
            .speaking-checklist-item { font-size: 13px; }
          }

          /* === COACHING SECTION === */
          .speaking-coaching-section {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .speaking-coaching-title {
            font-weight: 700;
            color: #111827;
            font-size: 16px;
            margin: 0;
          }
          @media (max-width: 767px) {
            .speaking-coaching-title { font-size: 15px; }
          }

          .speaking-coaching-options {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .speaking-coaching-option {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px;
            background: #F9FAFB;
            border-radius: 8px;
            cursor: pointer;
            transition: background 0.2s;
            font-size: 14px;
            color: #374151;
            min-height: 44px;
          }
          .speaking-coaching-option:hover { background: #F3F4F6; }
          @media (max-width: 767px) {
            .speaking-coaching-option { 
              font-size: 13px;
              padding: 10px;
            }
          }

          .speaking-checkbox {
            width: 16px;
            height: 16px;
            cursor: pointer;
            flex-shrink: 0;
          }

          /* === PREVENT OVERFLOW === */
          .speaking-setup-container,
          .speaking-setup-wrapper,
          .speaking-mode-card,
          .speaking-setup-card {
            overflow-x: hidden;
            max-width: 100%;
          }
        `}</style>

        <Footer />
      </>
    );
  }

  return (
    <>
      <AIAssistantNav />
      <div className="min-h-screen bg-gray-50 pt-40 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Active Session Header */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isRecording ? 'bg-red-100 animate-pulse' : 'bg-gray-100'}`}>
                  {isRecording ? <Mic className="w-6 h-6 text-red-600" /> : <MicOff className="w-6 h-6 text-gray-400" />}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{mode}</div>
                  <div className="text-sm text-gray-500">
                    {isRecording ? 'Recording...' : 'Paused'}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-mono font-bold text-gray-900">{formatTime(timeLeft)}</div>
                <div className="text-xs text-gray-500">Time Remaining</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#4B6E48] transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
          </div>

          {/* AI Interviewer Panel */}
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8 mb-6"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900 mb-2">AI Interviewer</div>
                <div className="text-lg text-gray-800 leading-relaxed whitespace-pre-line">
                  {currentQuestion}
                </div>
              </div>
              <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors">
                <Volume2 className="w-5 h-5 text-blue-600" />
              </button>
            </div>

            {showFillers && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm">
                <span className="font-medium text-amber-900">Live coaching:</span>
                <span className="text-amber-700 ml-2">Try to minimize filler words like "um", "uh", "like"</span>
              </div>
            )}
          </motion.div>

          {/* Action Buttons */}
          <div className="grid grid-cols-4 gap-4">
            <StandardButton
              variant="outline"
              size="sm"
              onClick={() => setIsRecording(!isRecording)}
              className="bg-white"
            >
              <div className="flex items-center justify-center gap-2">
                {isRecording ? <Square className="w-4 h-4 text-red-600" /> : <Mic className="w-4 h-4" />}
                <span>{isRecording ? 'Pause' : 'Resume'}</span>
              </div>
            </StandardButton>

            <StandardButton
              variant="outline"
              size="sm"
              onClick={() => toast.info('Repeating question...')}
              className="bg-white"
            >
              <div className="flex items-center justify-center gap-2">
                <RotateCcw className="w-4 h-4" />
                <span>Repeat</span>
              </div>
            </StandardButton>

            <StandardButton
              variant="outline"
              size="sm"
              onClick={handleSkip}
              className="bg-white"
            >
              <div className="flex items-center justify-center gap-2">
                <SkipForward className="w-4 h-4" />
                <span>Skip</span>
              </div>
            </StandardButton>

            <StandardButton
              size="sm"
              className="bg-[#4B6E48] text-white"
              onClick={handleEndSession}
            >
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Finish</span>
              </div>
            </StandardButton>
          </div>

          {/* Help Button */}
          <button
            onClick={() => toast.info("Need help? Take a deep breath and organize your thoughts before speaking.")}
            className="w-full mt-4 p-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors flex items-center justify-center gap-2 text-gray-700"
          >
            <HelpCircle className="w-5 h-5" />
            <span className="text-sm font-medium">I don't know - Get a hint</span>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
