import { useState, useEffect } from 'react';
import { Footer } from '@/app/components/Footer';
import { AIAssistantNav } from '@/app/components/AIAssistantNav';
import { StandardButton } from '@/app/components/ui/standard-button';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  BookOpen,
  Clock,
  Play,
  Pause,
  Save,
  Send,
  ArrowLeft,
  Highlighter,
  BookMarked,
  Search,
  CheckCircle,
  XCircle,
  TrendingUp,
  Target,
  BookOpenCheck,
  Lightbulb,
  RotateCcw,
  ChevronRight
} from 'lucide-react';
import { toast } from 'sonner';

interface Question {
  id: string;
  type: 'MCQ' | 'TrueFalse' | 'MatchHeading' | 'FillBlank';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

const samplePassage = {
  title: "The Impact of Climate Change on Global Agriculture",
  wordCount: 847,
  content: `Climate change poses significant challenges to global agriculture, threatening food security and livelihoods worldwide. Rising temperatures, shifting precipitation patterns, and increased frequency of extreme weather events are already affecting crop yields and farming practices across diverse regions.

Research indicates that average global temperatures have increased by approximately 1.1Â°C since pre-industrial times, with projections suggesting further increases of 1.5Â°C to 4Â°C by 2100 depending on greenhouse gas emission scenarios. These temperature changes have profound implications for agricultural productivity.

In tropical and subtropical regions, even modest temperature increases can reduce yields of staple crops such as rice, maize, and wheat. Studies show that for each degree Celsius increase in temperature, wheat yields decline by approximately 6%, while rice and maize yields decrease by 3-4%. This is particularly concerning given that these three crops provide over 50% of global caloric intake.

Water availability represents another critical concern. Climate models predict more variable precipitation patterns, with some regions experiencing increased rainfall while others face prolonged droughts. The Mediterranean region, parts of Africa, and southwestern Australia are expected to see reduced precipitation, potentially limiting agricultural production in areas already facing water stress.

However, climate change impacts are not uniformly negative. Higher-latitude regions may experience extended growing seasons and improved conditions for certain crops. Canada, Russia, and Scandinavia could potentially expand agricultural production, though this may be offset by challenges such as soil quality limitations and infrastructure requirements.

Adaptation strategies are essential for building resilience in agricultural systems. These include developing drought-resistant crop varieties, implementing efficient irrigation technologies, diversifying crop selection, and adopting sustainable farming practices. International cooperation and knowledge sharing will be crucial in supporting farmers worldwide to navigate these unprecedented challenges.`,
};

const sampleQuestions: Question[] = [
  {
    id: 'q1',
    type: 'MCQ',
    question: 'According to the passage, what is the projected temperature increase by 2100?',
    options: ['0.5Â°C to 2Â°C', '1.5Â°C to 4Â°C', '2Â°C to 5Â°C', '3Â°C to 6Â°C'],
    correctAnswer: '1.5Â°C to 4Â°C',
    explanation: 'The passage states "projections suggesting further increases of 1.5Â°C to 4Â°C by 2100"'
  },
  {
    id: 'q2',
    type: 'TrueFalse',
    question: 'Climate change will have uniformly negative effects on all global agricultural regions.',
    options: ['True', 'False', 'Not Given'],
    correctAnswer: 'False',
    explanation: 'The passage mentions that higher-latitude regions may experience improved conditions and extended growing seasons.'
  },
  {
    id: 'q3',
    type: 'MCQ',
    question: 'Which crop experiences the greatest yield decline per degree Celsius?',
    options: ['Rice', 'Maize', 'Wheat', 'All equally'],
    correctAnswer: 'Wheat',
    explanation: 'The passage states wheat yields decline by approximately 6%, while rice and maize decrease by 3-4%.'
  },
  {
    id: 'q4',
    type: 'FillBlank',
    question: 'Rice, maize, and wheat provide over _____% of global caloric intake.',
    correctAnswer: '50',
    explanation: 'The passage clearly states "these three crops provide over 50% of global caloric intake"'
  },
  {
    id: 'q5',
    type: 'MCQ',
    question: 'Which adaptation strategy is NOT mentioned in the passage?',
    options: [
      'Developing drought-resistant crops',
      'Implementing efficient irrigation',
      'Using genetically modified organisms',
      'Diversifying crop selection'
    ],
    correctAnswer: 'Using genetically modified organisms',
    explanation: 'GMOs are not mentioned in the passage as an adaptation strategy.'
  },
];

export default function ReadingPractice() {
  const [mode, setMode] = useState<'Practice' | 'Exam' | 'Review'>('Practice');
  const [difficulty, setDifficulty] = useState<'Beginner' | 'Medium' | 'Hard'>('Medium');
  const [topic, setTopic] = useState('Environment');
  const [passageLength, setPassageLength] = useState<'Short' | 'Standard' | 'Long'>('Standard');
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [highlightedWords, setHighlightedWords] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  const [unknownWords, setUnknownWords] = useState<string[]>([]);

  useEffect(() => {
    let interval: number;
    if (isTimerRunning && timeLeft > 0 && timerEnabled) {
      interval = window.setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft, timerEnabled]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = () => {
    setShowResults(true);
    setIsTimerRunning(false);
    toast.success('Answers submitted! Review your performance below.');
  };

  const calculateScore = () => {
    let correct = 0;
    sampleQuestions.forEach((q) => {
      if (answers[q.id]?.toLowerCase() === q.correctAnswer.toLowerCase()) {
        correct++;
      }
    });
    return { correct, total: sampleQuestions.length, percentage: Math.round((correct / sampleQuestions.length) * 100) };
  };

  const handleRetry = () => {
    setAnswers({});
    setShowResults(false);
    setTimeLeft(1200);
    setIsTimerRunning(false);
    toast.success('Ready to try again!');
  };

  if (showResults) {
    const score = calculateScore();
    const timeTaken = 1200 - timeLeft;

    return (
      <>
        <AIAssistantNav />
        <div className="min-h-screen bg-gray-50 pt-24 pb-16">
          <div className="max-w-5xl mx-auto px-4">
            {/* Results Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-6"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Reading Practice Complete!</h1>
                <p className="text-gray-600">Here's your performance summary</p>
              </div>

              {/* Score Cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-blue-700">{score.percentage}%</div>
                  <div className="text-sm text-gray-600">Score</div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-purple-700">{score.correct}/{score.total}</div>
                  <div className="text-sm text-gray-600">Correct Answers</div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-amber-700">{formatTime(timeTaken)}</div>
                  <div className="text-sm text-gray-600">Time Taken</div>
                </div>
              </div>
            </motion.div>

            {/* Detailed Feedback */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Question Review</h2>
              <div className="space-y-6">
                {sampleQuestions.map((question, idx) => {
                  const isCorrect = answers[question.id]?.toLowerCase() === question.correctAnswer.toLowerCase();
                  return (
                    <div key={question.id} className={`p-4 rounded-xl border-2 ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                      <div className="flex items-start gap-3 mb-3">
                        {isCorrect ? (
                          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                        )}
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 mb-2">
                            Question {idx + 1}: {question.question}
                          </div>
                          <div className="space-y-1 text-sm">
                            <div className="text-gray-700">
                              <span className="font-medium">Your answer:</span> {answers[question.id] || 'Not answered'}
                            </div>
                            {!isCorrect && (
                              <div className="text-green-700">
                                <span className="font-medium">Correct answer:</span> {question.correctAnswer}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="ml-9 bg-white/70 rounded-lg p-3 border border-gray-200">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <div className="text-sm text-gray-700">
                            <span className="font-medium">Explanation:</span> {question.explanation}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Vocabulary & Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid md:grid-cols-2 gap-6 mb-6"
            >
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookMarked className="w-5 h-5 text-[#4B6E48]" />
                  Key Vocabulary
                </h3>
                <div className="space-y-2">
                  {['Precipitation', 'Resilience', 'Adaptation', 'Subtropical', 'Infrastructure'].map((word) => (
                    <div key={word} className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-medium text-gray-900">{word}</div>
                      <div className="text-sm text-gray-600">Click to see definition</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#4B6E48] to-[#3a5638] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-4">Recommendations</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Great work on True/False questions!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Practice more fill-in-the-blank questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Try a harder passage next time</span>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <StandardButton variant="outline" size="sm" className="flex-1 bg-white/10 border-white/30 text-white hover:bg-white/20 flex items-center justify-center gap-2" onClick={handleRetry}>
                    <RotateCcw className="w-4 h-4" />
                    <span>Retry Similar</span>
                  </StandardButton>
                  <Link to="/ai-assistant/dashboard" className="flex-1">
                    <StandardButton variant="outline" size="sm" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 flex items-center justify-center gap-2">
                      <span>Dashboard</span>
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

  return (
    <>
      <AIAssistantNav />
      
      {/* Main Container - Auto Layout Vertical */}
      <div className="reading-practice-root">
        <div className="reading-practice-content">
          
          {/* Header Section - Auto Layout Vertical */}
          <div className="reading-header-section">
            <div className="reading-header-row">
              <Link to="/ai-assistant/dashboard">
                <button className="reading-back-btn">
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </Link>
              <div className="reading-title-area">
                <h1 className="reading-page-title">
                  <BookOpen className="reading-title-icon" />
                  Reading Practice
                </h1>
                <p className="reading-subtitle">Improve your reading comprehension skills</p>
              </div>
            </div>

            {/* Timer (if enabled) */}
            {timerEnabled && (
              <div className="reading-timer-section">
                <div className={`reading-timer-display ${timeLeft < 300 ? 'reading-timer-warning' : ''}`}>
                  <Clock className="w-5 h-5" />
                  {formatTime(timeLeft)}
                </div>
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="reading-timer-btn"
                >
                  {isTimerRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
              </div>
            )}
          </div>

          {/* Filter Controls - Auto Layout with Wrap */}
          <div className="reading-filters-card">
            <div className="reading-filters-grid">
              {/* Mode */}
              <div className="reading-filter-item">
                <label className="reading-filter-label">Mode</label>
                <div className="reading-mode-buttons">
                  {(['Practice', 'Exam', 'Review'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMode(m)}
                      className={`reading-mode-btn ${mode === m ? 'active' : ''}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div className="reading-filter-item">
                <label className="reading-filter-label">Difficulty</label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value as any)}
                  className="reading-select"
                >
                  <option>Beginner</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>

              {/* Topic */}
              <div className="reading-filter-item">
                <label className="reading-filter-label">Topic</label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="reading-select"
                >
                  <option>Environment</option>
                  <option>Education</option>
                  <option>Technology</option>
                  <option>Health</option>
                  <option>Travel</option>
                </select>
              </div>

              {/* Length */}
              <div className="reading-filter-item">
                <label className="reading-filter-label">Length</label>
                <select
                  value={passageLength}
                  onChange={(e) => setPassageLength(e.target.value as any)}
                  className="reading-select"
                >
                  <option>Short</option>
                  <option>Standard</option>
                  <option>Long</option>
                </select>
              </div>

              {/* Timer Toggle */}
              <div className="reading-filter-item reading-timer-toggle">
                <input
                  type="checkbox"
                  id="timer"
                  checked={timerEnabled}
                  onChange={(e) => setTimerEnabled(e.target.checked)}
                  className="reading-checkbox"
                />
                <label htmlFor="timer" className="reading-checkbox-label">
                  Timer
                </label>
              </div>
            </div>
          </div>

          {/* Main Workspace - Auto Layout 2-Column/Stacked */}
          <div className="reading-workspace">
            {/* Passage Panel */}
            <div className="reading-passage-panel">
              <div className="reading-panel-header">
                <div className="reading-passage-info">
                  <h2 className="reading-panel-title">{samplePassage.title}</h2>
                  <p className="reading-word-count">{samplePassage.wordCount} words</p>
                </div>
                <div className="reading-toolbar">
                  <button className="reading-tool-btn" title="Highlight">
                    <Highlighter className="w-5 h-5" />
                  </button>
                  <button className="reading-tool-btn" title="Dictionary">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="reading-passage-content">
                {samplePassage.content}
              </div>

              {/* Notes */}
              <div className="reading-notes-section">
                <label className="reading-notes-label">Quick Notes</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Jot down key points..."
                  className="reading-notes-textarea"
                />
              </div>
            </div>

            {/* Questions Panel */}
            <div className="reading-questions-panel">
              <div className="reading-panel-header">
                <h2 className="reading-panel-title">Questions</h2>
                <span className="reading-progress-badge">
                  {Object.keys(answers).length}/{sampleQuestions.length} answered
                </span>
              </div>

              <div className="reading-questions-list">
                {sampleQuestions.map((question, idx) => (
                  <div key={question.id} className="reading-question-item">
                    <div className="reading-question-header">
                      <div className="reading-question-number">{idx + 1}</div>
                      <p className="reading-question-text">{question.question}</p>
                    </div>

                    {question.type === 'MCQ' || question.type === 'TrueFalse' ? (
                      <div className="reading-options-list">
                        {question.options?.map((option) => (
                          <label
                            key={option}
                            className={`reading-option ${answers[question.id] === option ? 'selected' : ''}`}
                          >
                            <input
                              type="radio"
                              name={question.id}
                              value={option}
                              checked={answers[question.id] === option}
                              onChange={(e) =>
                                setAnswers({ ...answers, [question.id]: e.target.value })
                              }
                              className="reading-radio"
                            />
                            <span className="reading-option-text">{option}</span>
                          </label>
                        ))}
                      </div>
                    ) : (
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        value={answers[question.id] || ''}
                        onChange={(e) =>
                          setAnswers({ ...answers, [question.id]: e.target.value })
                        }
                        className="reading-text-input"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="reading-actions">
                <StandardButton variant="outline" size="sm" className="reading-action-btn">
                  <Save className="w-4 h-4" />
                  <span>Save & Exit</span>
                </StandardButton>
                <StandardButton
                  size="sm"
                  className="reading-action-btn reading-submit-btn"
                  onClick={handleSubmit}
                  disabled={Object.keys(answers).length === 0}
                >
                  <Send className="w-4 h-4" />
                  <span>Submit</span>
                </StandardButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Auto Layout Responsive Styles */}
      <style>{`
        /* === ROOT CONTAINER - AUTO LAYOUT VERTICAL === */
        .reading-practice-root {
          min-height: 100vh;
          background: #F9FAFB;
          display: flex;
          flex-direction: column;
          width: 100%;
          overflow-x: hidden;
        }
        @media (max-width: 767px) {
          .reading-practice-root { padding-top: 140px; padding-bottom: 40px; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .reading-practice-root { padding-top: 160px; padding-bottom: 48px; }
        }
        @media (min-width: 1024px) {
          .reading-practice-root { padding-top: 160px; padding-bottom: 64px; }
        }

        /* === CONTENT WRAPPER - AUTO LAYOUT VERTICAL === */
        .reading-practice-content {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @media (max-width: 767px) {
          .reading-practice-content { 
            padding: 0 16px;
            gap: 16px;
          }
        }
        @media (min-width: 768px) and (max-width: 1439px) {
          .reading-practice-content { 
            padding: 0 24px;
            gap: 20px;
          }
        }
        @media (min-width: 1440px) {
          .reading-practice-content { 
            padding: 0 32px;
            max-width: 1440px;
            gap: 24px;
          }
        }

        /* === HEADER SECTION - AUTO LAYOUT === */
        .reading-header-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .reading-header-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          width: 100%;
        }

        .reading-back-btn {
          min-width: 44px;
          min-height: 44px;
          padding: 8px;
          background: transparent;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .reading-back-btn:hover { background: #E5E7EB; }

        .reading-title-area {
          flex: 1;
          min-width: 0;
        }

        .reading-page-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin: 0 0 4px 0;
        }
        @media (max-width: 767px) {
          .reading-page-title { font-size: 22px; gap: 8px; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .reading-page-title { font-size: 28px; }
        }
        @media (min-width: 1024px) {
          .reading-page-title { font-size: 32px; }
        }

        .reading-title-icon {
          flex-shrink: 0;
          color: #2563EB;
        }
        @media (max-width: 767px) {
          .reading-title-icon { width: 24px; height: 24px; }
        }
        @media (min-width: 768px) {
          .reading-title-icon { width: 28px; height: 28px; }
        }
        @media (min-width: 1024px) {
          .reading-title-icon { width: 32px; height: 32px; }
        }

        .reading-subtitle {
          color: #6B7280;
          line-height: 1.5;
          margin: 0;
        }
        @media (max-width: 767px) {
          .reading-subtitle { font-size: 14px; }
        }
        @media (min-width: 768px) {
          .reading-subtitle { font-size: 16px; }
        }

        /* Timer Section */
        .reading-timer-section {
          display: flex;
          align-items: center;
          gap: 12px;
          align-self: flex-end;
        }
        @media (max-width: 767px) {
          .reading-timer-section { align-self: flex-start; }
        }

        .reading-timer-display {
          padding: 8px 16px;
          border-radius: 8px;
          font-family: monospace;
          font-size: 18px;
          font-weight: 700;
          background: #F3F4F6;
          color: #111827;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        @media (max-width: 767px) {
          .reading-timer-display { 
            padding: 6px 12px;
            font-size: 16px;
          }
        }
        .reading-timer-warning {
          background: #FEE2E2;
          color: #B91C1C;
        }

        .reading-timer-btn {
          min-width: 44px;
          min-height: 44px;
          padding: 8px;
          background: #E5E7EB;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .reading-timer-btn:hover { background: #D1D5DB; }

        /* === FILTERS CARD - AUTO LAYOUT WITH WRAP === */
        .reading-filters-card {
          background: #fff;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          width: 100%;
          box-sizing: border-box;
        }
        @media (max-width: 767px) {
          .reading-filters-card { padding: 16px; }
        }
        @media (min-width: 768px) {
          .reading-filters-card { padding: 20px; }
        }

        .reading-filters-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          align-items: flex-end;
        }
        @media (max-width: 767px) {
          .reading-filters-grid {
            flex-direction: column;
            gap: 12px;
            align-items: stretch;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .reading-filters-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
        }

        .reading-filter-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        @media (max-width: 767px) {
          .reading-filter-item { width: 100%; }
        }
        @media (min-width: 1024px) {
          .reading-filter-item { min-width: 140px; }
        }

        .reading-filter-label {
          font-size: 12px;
          font-weight: 500;
          color: #6B7280;
          margin: 0;
        }

        .reading-mode-buttons {
          display: flex;
          gap: 6px;
        }
        @media (max-width: 767px) {
          .reading-mode-buttons { width: 100%; }
        }

        .reading-mode-btn {
          padding: 8px 12px;
          font-size: 14px;
          border: none;
          border-radius: 8px;
          background: #F3F4F6;
          color: #374151;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
          min-height: 44px;
        }
        @media (max-width: 767px) {
          .reading-mode-btn { flex: 1; }
        }
        .reading-mode-btn:hover { background: #E5E7EB; }
        .reading-mode-btn.active {
          background: #4B6E48;
          color: #fff;
        }

        .reading-select {
          padding: 10px 12px;
          font-size: 14px;
          color: #111827;
          background: #fff;
          border: 1px solid #D1D5DB;
          border-radius: 8px;
          cursor: pointer;
          min-height: 44px;
        }
        @media (max-width: 767px) {
          .reading-select { width: 100%; }
        }
        .reading-select:focus {
          outline: none;
          border-color: #4B6E48;
          ring: 2px #4B6E48;
        }

        .reading-timer-toggle {
          flex-direction: row;
          align-items: center;
          gap: 8px;
          min-height: 44px;
        }

        .reading-checkbox {
          width: 16px;
          height: 16px;
          cursor: pointer;
        }

        .reading-checkbox-label {
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          cursor: pointer;
          margin: 0;
        }

        /* === WORKSPACE - AUTO LAYOUT 2-COL/STACK === */
        .reading-workspace {
          display: flex;
          width: 100%;
          gap: 24px;
        }
        @media (max-width: 767px) {
          .reading-workspace {
            flex-direction: column;
            gap: 16px;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .reading-workspace {
            flex-direction: column;
            gap: 20px;
          }
        }
        @media (min-width: 1024px) {
          .reading-workspace {
            flex-direction: row;
          }
        }

        /* === PANELS - AUTO LAYOUT VERTICAL === */
        .reading-passage-panel,
        .reading-questions-panel {
          background: #fff;
          border: 2px solid #E5E7EB;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          overflow: hidden;
        }
        @media (max-width: 767px) {
          .reading-passage-panel,
          .reading-questions-panel { 
            padding: 16px;
            gap: 12px;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .reading-passage-panel,
          .reading-questions-panel { 
            padding: 20px;
            gap: 16px;
          }
        }
        @media (min-width: 1024px) {
          .reading-passage-panel,
          .reading-questions-panel { 
            padding: 24px;
            gap: 16px;
          }
        }

        /* Desktop: 60/40 split */
        @media (min-width: 1024px) {
          .reading-passage-panel { flex: 0 0 60%; }
          .reading-questions-panel { flex: 0 0 40%; }
        }

        /* === PANEL HEADERS === */
        .reading-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-shrink: 0;
        }
        @media (max-width: 767px) {
          .reading-panel-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }

        .reading-passage-info {
          flex: 1;
          min-width: 0;
        }

        .reading-panel-title {
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin: 0;
          line-height: 1.3;
        }
        @media (min-width: 768px) {
          .reading-panel-title { font-size: 20px; }
        }

        .reading-word-count {
          font-size: 13px;
          color: #6B7280;
          margin: 2px 0 0 0;
        }

        .reading-progress-badge {
          font-size: 13px;
          color: #6B7280;
        }

        .reading-toolbar {
          display: flex;
          gap: 6px;
          flex-shrink: 0;
        }

        .reading-tool-btn {
          min-width: 40px;
          min-height: 40px;
          padding: 8px;
          background: transparent;
          border: none;
          border-radius: 8px;
          color: #6B7280;
          cursor: pointer;
          transition: background 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .reading-tool-btn:hover { background: #F3F4F6; }

        /* === PASSAGE CONTENT === */
        .reading-passage-content {
          flex: 1;
          overflow-y: auto;
          color: #1F2937;
          font-size: 15px;
          line-height: 1.7;
          white-space: pre-line;
          user-select: text;
          padding-right: 8px;
        }
        @media (max-width: 767px) {
          .reading-passage-content { 
            font-size: 14px;
            line-height: 1.8;
          }
        }

        /* === NOTES SECTION === */
        .reading-notes-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 16px;
          border-top: 1px solid #E5E7EB;
          flex-shrink: 0;
        }

        .reading-notes-label {
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          margin: 0;
        }

        .reading-notes-textarea {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #D1D5DB;
          border-radius: 8px;
          font-size: 14px;
          color: #111827;
          background: #fff;
          resize: vertical;
          min-height: 80px;
          box-sizing: border-box;
        }
        .reading-notes-textarea:focus {
          outline: none;
          border-color: #4B6E48;
          ring: 2px #4B6E48;
        }

        /* === QUESTIONS LIST === */
        .reading-questions-list {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        @media (max-width: 767px) {
          .reading-questions-list { gap: 16px; }
        }

        .reading-question-item {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-bottom: 20px;
          border-bottom: 1px solid #E5E7EB;
        }
        .reading-question-item:last-child { border-bottom: none; }

        .reading-question-header {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .reading-question-number {
          min-width: 32px;
          min-height: 32px;
          background: #DBEAFE;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          color: #1E40AF;
          flex-shrink: 0;
        }

        .reading-question-text {
          flex: 1;
          font-size: 15px;
          font-weight: 500;
          color: #111827;
          line-height: 1.5;
          margin: 4px 0 0 0;
        }
        @media (max-width: 767px) {
          .reading-question-text { font-size: 14px; }
        }

        /* === OPTIONS === */
        .reading-options-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .reading-option {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          border-radius: 8px;
          background: #F9FAFB;
          cursor: pointer;
          transition: all 0.2s;
          min-height: 44px;
        }
        .reading-option:hover { background: #F3F4F6; }
        .reading-option.selected {
          background: #4B6E48;
          color: #fff;
        }

        .reading-radio {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
          cursor: pointer;
        }

        .reading-option-text {
          font-size: 14px;
          line-height: 1.4;
        }

        .reading-text-input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #D1D5DB;
          border-radius: 8px;
          font-size: 14px;
          min-height: 44px;
          box-sizing: border-box;
        }
        .reading-text-input:focus {
          outline: none;
          border-color: #4B6E48;
          ring: 2px #4B6E48;
        }

        /* === ACTIONS === */
        .reading-actions {
          display: flex;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid #E5E7EB;
          flex-shrink: 0;
        }
        @media (max-width: 767px) {
          .reading-actions {
            flex-direction: column;
            gap: 8px;
          }
        }

        .reading-action-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-center;
          gap: 8px;
        }

        .reading-submit-btn {
          background: #4B6E48;
          color: #fff;
        }

        /* === PREVENT OVERFLOW === */
        .reading-practice-root,
        .reading-practice-content,
        .reading-filters-card,
        .reading-workspace,
        .reading-passage-panel,
        .reading-questions-panel {
          max-width: 100%;
          overflow-x: hidden;
        }

        /* Smooth scrolling within panels */
        .reading-passage-content,
        .reading-questions-list {
          scrollbar-width: thin;
          scrollbar-color: #D1D5DB transparent;
        }
        .reading-passage-content::-webkit-scrollbar,
        .reading-questions-list::-webkit-scrollbar {
          width: 6px;
        }
        .reading-passage-content::-webkit-scrollbar-thumb,
        .reading-questions-list::-webkit-scrollbar-thumb {
          background: #D1D5DB;
          border-radius: 3px;
        }
      `}</style>

      <Footer />
    </>
  );
}
