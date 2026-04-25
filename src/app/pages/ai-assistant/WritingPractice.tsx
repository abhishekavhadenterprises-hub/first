import { useState, useEffect } from 'react';
import { Footer } from '@/app/components/Footer';
import { AIAssistantNav } from '@/app/components/AIAssistantNav';
import { StandardButton } from '@/app/components/ui/standard-button';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  PenTool,
  Clock,
  Send,
  ArrowLeft,
  Lightbulb,
  CheckCircle,
  FileText,
  TrendingUp,
  Target,
  Sparkles,
  AlertCircle,
  BookOpen,
  RotateCcw
} from 'lucide-react';
import { toast } from 'sonner';

const writingPrompts = {
  task1: {
    report: {
      title: 'Bar Chart Analysis',
      prompt: 'The chart below shows the percentage of households in owned and rented accommodation in England and Wales between 1918 and 2011.',
      requirements: [
        'Write at least 150 words',
        'Summarize the main features',
        'Make comparisons where relevant',
        'Do not give your opinion'
      ],
      wordCount: 150,
    },
    letter: {
      title: 'Formal Letter',
      prompt: 'You recently attended a conference and would like to give a presentation about the information you gained. Write a letter to your manager asking for permission.',
      requirements: [
        'Explain what you learned at the conference',
        'Why you want to give a presentation',
        'When you would like to present',
        'Write at least 150 words'
      ],
      wordCount: 150,
    }
  },
  task2: {
    title: 'Opinion Essay',
    prompt: 'Some people think that universities should provide graduates with the knowledge and skills needed in the workplace. Others think that the true function of a university should be to give access to knowledge for its own sake, regardless of whether the course is useful to an employer. What, in your opinion, should be the main function of a university?',
    requirements: [
      'Write at least 250 words',
      'Give reasons for your answer',
      'Include relevant examples',
      'Present a clear position'
    ],
    wordCount: 250,
  }
};

export default function WritingPractice() {
  const [mode, setMode] = useState<'Task 1' | 'Task 2' | 'SOP'>('Task 2');
  const [task1Type, setTask1Type] = useState<'report' | 'letter'>('report');
  const [difficulty, setDifficulty] = useState<'Beginner' | 'Medium' | 'Hard'>('Medium');
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(2400); // 40 minutes for Task 2
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [essay, setEssay] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [showStructureHints, setShowStructureHints] = useState(false);

  const currentPrompt = mode === 'Task 1' ? writingPrompts.task1[task1Type] : writingPrompts.task2;
  const wordCount = essay.trim().split(/\s+/).filter(word => word.length > 0).length;
  const targetWords = currentPrompt.wordCount;

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
    if (wordCount < targetWords * 0.8) {
      toast.error(`Your essay is too short. Aim for at least ${targetWords} words.`);
      return;
    }
    setShowFeedback(true);
    setIsTimerRunning(false);
    toast.success('Submitted for AI evaluation!');
  };

  const handleRetry = () => {
    setEssay('');
    setShowFeedback(false);
    setTimeLeft(2400);
    setIsTimerRunning(false);
  };

  if (showFeedback) {
    const bandScore = 7.0;
    const scores = {
      taskResponse: 7.5,
      coherence: 7.0,
      lexical: 6.5,
      grammar: 7.0
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
                <div className="w-20 h-20 bg-[#4B6E48]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-10 h-10 text-[#4B6E48]" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Feedback Ready!</h1>
                <p className="text-gray-600">Detailed analysis of your writing</p>
              </div>

              {/* Band Score */}
              <div className="bg-gradient-to-br from-[#4B6E48] to-[#3a5638] rounded-2xl p-6 text-white text-center mb-6">
                <div className="text-sm mb-2 opacity-90">Estimated Band Score</div>
                <div className="text-6xl font-bold mb-2">{bandScore}</div>
                <div className="text-sm opacity-90">High Confidence (85%)</div>
              </div>

              {/* Score Breakdown */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-700">{scores.taskResponse}</div>
                  <div className="text-xs text-gray-600 mt-1">Task Response</div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-purple-700">{scores.coherence}</div>
                  <div className="text-xs text-gray-600 mt-1">Coherence</div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-amber-700">{scores.lexical}</div>
                  <div className="text-xs text-gray-600 mt-1">Lexical Resource</div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-700">{scores.grammar}</div>
                  <div className="text-xs text-gray-600 mt-1">Grammar</div>
                </div>
              </div>
            </motion.div>

            {/* Your Essay with Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-[#4B6E48]" />
                Your Essay with AI Highlights
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-4">
                <div className="prose prose-sm max-w-none text-gray-800 leading-relaxed whitespace-pre-line">
                  {essay}
                </div>
              </div>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-200 rounded"></div>
                  <span className="text-gray-600">Strong phrasing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-200 rounded"></div>
                  <span className="text-gray-600">Could improve</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-200 rounded"></div>
                  <span className="text-gray-600">Grammar error</span>
                </div>
              </div>
            </motion.div>

            {/* Detailed Feedback */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid md:grid-cols-2 gap-6 mb-6"
            >
              {/* Improvements */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-red-600" />
                  Areas to Improve
                </h3>
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="font-medium text-red-900 mb-1">Vocabulary Variety</div>
                    <div className="text-sm text-red-700">Use more synonyms for "important" - try "crucial", "vital", "significant"</div>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="font-medium text-red-900 mb-1">Grammar Pattern</div>
                    <div className="text-sm text-red-700">Watch subject-verb agreement in complex sentences</div>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="font-medium text-red-900 mb-1">Paragraph Structure</div>
                    <div className="text-sm text-red-700">Add more linking words between paragraphs</div>
                  </div>
                </div>
              </div>

              {/* Strengths & Vocabulary */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  What You Did Well
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-700">Clear thesis statement and position</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-700">Good use of examples to support arguments</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-700">Proper essay structure with intro, body, conclusion</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="font-medium text-gray-900 mb-3">Vocabulary Upgrades</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                      <span className="text-gray-600">"very important"</span>
                      <span className="text-blue-700 font-medium">â†’ "paramount"</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                      <span className="text-gray-600">"a lot of"</span>
                      <span className="text-blue-700 font-medium">â†’ "numerous"</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                      <span className="text-gray-600">"get better"</span>
                      <span className="text-blue-700 font-medium">â†’ "enhance"</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Action Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-2xl p-6"
            >
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-600" />
                Your Personal Improvement Plan
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white border border-purple-200 rounded-lg p-4">
                  <div className="text-xs text-purple-600 mb-2">Next Practice</div>
                  <div className="text-sm font-medium text-gray-900">Focus on vocabulary variety exercises</div>
                </div>
                <div className="bg-white border border-purple-200 rounded-lg p-4">
                  <div className="text-xs text-purple-600 mb-2">Grammar Focus</div>
                  <div className="text-sm font-medium text-gray-900">Practice complex sentence structures</div>
                </div>
                <div className="bg-white border border-purple-200 rounded-lg p-4">
                  <div className="text-xs text-purple-600 mb-2">Structure Work</div>
                  <div className="text-sm font-medium text-gray-900">Study transition words and phrases</div>
                </div>
              </div>
              <div className="flex gap-3">
                <StandardButton variant="outline" size="sm" className="flex-1 flex items-center justify-center gap-2" onClick={handleRetry}>
                  <RotateCcw className="w-4 h-4" />
                  <span>Try Another Topic</span>
                </StandardButton>
                <Link to="/ai-assistant/dashboard" className="flex-1">
                  <StandardButton size="sm" className="w-full bg-[#4B6E48] text-white flex items-center justify-center gap-2">
                    <span>Back to Dashboard</span>
                  </StandardButton>
                </Link>
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
      <div className="writing-practice-container">
        <div className="writing-practice-wrapper">
          {/* Header */}
          <div className="writing-header-section">
            <div className="writing-header-row">
              <div className="writing-header-content">
                <Link to="/ai-assistant/dashboard">
                  <button className="writing-back-btn">
                    <ArrowLeft className="w-5 h-5 text-gray-900" />
                  </button>
                </Link>
                <div className="writing-title-group">
                  <h1 className="writing-page-title">
                    <PenTool className="writing-title-icon" />
                    Writing Practice
                  </h1>
                  <p className="writing-subtitle">Develop your writing skills with AI-powered feedback</p>
                </div>
              </div>

              {timerEnabled && (
                <div className="writing-timer-wrapper">
                  <div className={`writing-timer ${timeLeft < 300 ? 'writing-timer-warning' : ''}`}>
                    <Clock className="w-5 h-5 inline mr-2" />
                    {formatTime(timeLeft)}
                  </div>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="writing-controls-card">
              <div className="writing-filter-group">
                <label className="writing-filter-label">Mode</label>
                <div className="writing-mode-buttons">
                  {(['Task 1', 'Task 2', 'SOP'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMode(m)}
                      className={`writing-mode-btn ${mode === m ? 'writing-mode-btn-active' : ''}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {mode === 'Task 1' && (
                <div className="writing-filter-group">
                  <label className="writing-filter-label">Type</label>
                  <div className="writing-type-buttons">
                    <button
                      onClick={() => setTask1Type('report')}
                      className={`writing-type-btn ${task1Type === 'report' ? 'writing-type-btn-active' : ''}`}
                    >
                      Report/Chart
                    </button>
                    <button
                      onClick={() => setTask1Type('letter')}
                      className={`writing-type-btn ${task1Type === 'letter' ? 'writing-type-btn-active' : ''}`}
                    >
                      Letter
                    </button>
                  </div>
                </div>
              )}

              <div className="writing-filter-group">
                <label className="writing-filter-label">Difficulty</label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value as any)}
                  className="writing-difficulty-select"
                >
                  <option>Beginner</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>

              <div className="writing-timer-toggle">
                <input
                  type="checkbox"
                  id="timer"
                  checked={timerEnabled}
                  onChange={(e) => {
                    setTimerEnabled(e.target.checked);
                    if (e.target.checked) setIsTimerRunning(true);
                  }}
                  className="writing-checkbox"
                />
                <label htmlFor="timer" className="writing-checkbox-label">
                  Timer
                </label>
              </div>
            </div>
          </div>

          <div className="writing-main-grid">
            {/* Prompt Panel */}
            <div className="writing-prompt-card">
              <h2 className="writing-prompt-title">{currentPrompt.title}</h2>
              
              <div className="writing-prompt-box">
                <p className="writing-prompt-text">{currentPrompt.prompt}</p>
              </div>

              <div className="writing-requirements-section">
                <h3 className="writing-requirements-heading">Requirements:</h3>
                <ul className="writing-requirements-list">
                  {currentPrompt.requirements.map((req, idx) => (
                    <li key={idx} className="writing-requirement-item">
                      <CheckCircle className="writing-requirement-icon" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="writing-criteria-box">
                <div className="writing-criteria-header">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span className="writing-criteria-title">Band Criteria</span>
                </div>
                <ul className="writing-criteria-list">
                  <li>â€¢ Task Response</li>
                  <li>â€¢ Coherence & Cohesion</li>
                  <li>â€¢ Lexical Resource</li>
                  <li>â€¢ Grammatical Range</li>
                </ul>
              </div>

              <button
                onClick={() => setShowStructureHints(!showStructureHints)}
                className="writing-hint-toggle"
              >
                {showStructureHints ? 'Hide' : 'Show'} Structure Hints
              </button>

              {showStructureHints && (
                <div className="writing-hints-box">
                  <div className="writing-hints-heading">Suggested Structure:</div>
                  <div className="writing-hints-list">
                    <div>1. Introduction (paraphrase question)</div>
                    <div>2. Body Paragraph 1 (main argument)</div>
                    <div>3. Body Paragraph 2 (counter/support)</div>
                    <div>4. Conclusion (summarize position)</div>
                  </div>
                </div>
              )}
            </div>

            {/* Writing Editor */}
            <div className="writing-editor-card">
              <div className="writing-editor-header">
                <h2 className="writing-editor-title">Your Essay</h2>
                <div className={`writing-word-count ${wordCount >= targetWords ? 'writing-word-count-success' : wordCount >= targetWords * 0.8 ? 'writing-word-count-warning' : 'writing-word-count-danger'}`}>
                  {wordCount} / {targetWords} words
                </div>
              </div>

              <textarea
                value={essay}
                onChange={(e) => setEssay(e.target.value)}
                placeholder="Start writing your essay here..."
                className="writing-textarea"
              />

              {/* Writing Checklist */}
              <div className="writing-checklist-section">
                <h3 className="writing-checklist-heading">Writing Checklist:</h3>
                <div className="writing-checklist-grid">
                  {[
                    { label: 'Clear structure', checked: wordCount > 100 },
                    { label: 'Coherence', checked: wordCount > 150 },
                    { label: 'Vocabulary range', checked: wordCount > 200 },
                    { label: 'Task completion', checked: wordCount >= targetWords }
                  ].map((item, idx) => (
                    <div key={idx} className="writing-checklist-item">
                      <div className={`writing-checklist-box ${item.checked ? 'writing-checklist-checked' : ''}`}>
                        {item.checked && <CheckCircle className="w-3 h-3 text-white" />}
                      </div>
                      <span className={item.checked ? 'writing-checklist-label-active' : 'writing-checklist-label'}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="writing-action-buttons">
                <StandardButton variant="outline" size="sm" className="flex-1 flex items-center justify-center gap-2">
                  <span>Save Draft</span>
                </StandardButton>
                <StandardButton
                  size="sm"
                  className="flex-1 bg-[#4B6E48] text-white flex items-center justify-center gap-2"
                  onClick={handleSubmit}
                  disabled={wordCount < 50}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get AI Feedback</span>
                </StandardButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Responsive Styles */}
      <style>{`
        /* === 1. PAGE CONTAINER === */
        .writing-practice-container {
          min-height: 100vh;
          background: #F9FAFB;
          padding-bottom: 64px;
        }
        @media (max-width: 767px) {
          .writing-practice-container { 
            padding-top: 140px;
            padding-bottom: 40px;
          }
        }
        @media (min-width: 768px) and (max-width: 1279px) {
          .writing-practice-container { padding-top: 160px; }
        }
        @media (min-width: 1280px) {
          .writing-practice-container { padding-top: 160px; }
        }

        .writing-practice-wrapper {
          margin: 0 auto;
          box-sizing: border-box;
        }
        @media (max-width: 767px) {
          .writing-practice-wrapper { 
            padding: 0 16px;
            max-width: 100%;
          }
        }
        @media (min-width: 768px) and (max-width: 1279px) {
          .writing-practice-wrapper { 
            padding: 0 32px;
            max-width: 100%;
          }
        }
        @media (min-width: 1280px) {
          .writing-practice-wrapper { 
            padding: 0 40px;
            max-width: 1200px;
          }
        }

        /* === 2. HEADER SECTION === */
        .writing-header-section {
          margin-bottom: 32px;
        }
        @media (max-width: 767px) {
          .writing-header-section { margin-bottom: 20px; }
        }

        .writing-header-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
          gap: 16px;
        }
        @media (max-width: 767px) {
          .writing-header-row {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 16px;
            gap: 12px;
          }
        }

        .writing-header-content {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          flex: 1;
        }
        @media (max-width: 767px) {
          .writing-header-content { gap: 8px; width: 100%; }
        }

        .writing-back-btn {
          padding: 8px;
          background: transparent;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s;
          flex-shrink: 0;
        }
        .writing-back-btn:hover { background: #E5E7EB; }

        .writing-title-group {
          flex: 1;
          min-width: 0;
        }

        /* === 3. PAGE TITLE === */
        .writing-page-title {
          font-weight: 700;
          color: #111827;
          display: flex;
          align-items: center;
          gap: 12px;
          line-height: 1.2;
          margin: 0 0 4px 0;
        }
        @media (max-width: 767px) {
          .writing-page-title { 
            font-size: 24px;
            gap: 8px;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .writing-page-title { font-size: 32px; }
        }
        @media (min-width: 1024px) {
          .writing-page-title { font-size: 40px; }
        }

        .writing-title-icon {
          flex-shrink: 0;
          color: #9333EA;
        }
        @media (max-width: 767px) {
          .writing-title-icon { width: 24px; height: 24px; }
        }
        @media (min-width: 768px) {
          .writing-title-icon { width: 32px; height: 32px; }
        }

        .writing-subtitle {
          color: #6B7280;
          line-height: 1.5;
          margin: 0;
        }
        @media (max-width: 767px) {
          .writing-subtitle { font-size: 14px; }
        }
        @media (min-width: 768px) {
          .writing-subtitle { 
            font-size: 16px;
            max-width: 600px;
          }
        }
        @media (min-width: 1024px) {
          .writing-subtitle { font-size: 18px; }
        }

        /* Timer */
        .writing-timer-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        @media (max-width: 767px) {
          .writing-timer-wrapper { width: 100%; justify-content: flex-start; }
        }

        .writing-timer {
          padding: 8px 16px;
          border-radius: 8px;
          font-family: 'Courier New', monospace;
          font-weight: 700;
          background: #F3F4F6;
          color: #111827;
        }
        @media (max-width: 767px) {
          .writing-timer { 
            padding: 6px 12px;
            font-size: 16px;
          }
        }
        @media (min-width: 768px) {
          .writing-timer { font-size: 20px; }
        }
        .writing-timer-warning {
          background: #FEE2E2;
          color: #B91C1C;
        }

        /* === 4. FILTER CARD === */
        .writing-controls-card {
          background: #fff;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          flex-wrap: wrap;
        }
        @media (max-width: 767px) {
          .writing-controls-card {
            flex-direction: column;
            padding: 16px;
            gap: 16px;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .writing-controls-card {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
        }
        @media (min-width: 1024px) {
          .writing-controls-card {
            padding: 16px;
            flex-direction: row;
            align-items: center;
          }
        }

        .writing-filter-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        @media (max-width: 767px) {
          .writing-filter-group { width: 100%; }
        }

        .writing-filter-label {
          font-size: 12px;
          font-weight: 500;
          color: #6B7280;
          display: block;
          margin: 0;
        }

        .writing-mode-buttons,
        .writing-type-buttons {
          display: flex;
          gap: 8px;
        }
        @media (max-width: 767px) {
          .writing-mode-buttons,
          .writing-type-buttons { width: 100%; }
        }

        .writing-mode-btn,
        .writing-type-btn {
          padding: 8px 16px;
          font-size: 14px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          background: #F3F4F6;
          color: #374151;
          transition: all 0.2s;
          white-space: nowrap;
        }
        @media (max-width: 767px) {
          .writing-mode-btn,
          .writing-type-btn {
            flex: 1;
            padding: 10px 12px;
            font-size: 13px;
          }
        }
        .writing-mode-btn:hover,
        .writing-type-btn:hover { background: #E5E7EB; }

        .writing-mode-btn-active {
          background: #4B6E48;
          color: #fff;
        }
        .writing-type-btn-active {
          background: #9333EA;
          color: #fff;
        }

        .writing-difficulty-select {
          padding: 8px 12px;
          font-size: 14px;
          color: #111827;
          background: #fff;
          border: 1px solid #D1D5DB;
          border-radius: 8px;
          cursor: pointer;
        }
        @media (max-width: 767px) {
          .writing-difficulty-select { 
            width: 100%;
            padding: 10px 12px;
          }
        }
        .writing-difficulty-select:focus {
          outline: none;
          ring: 2px;
          ring-color: #4B6E48;
        }

        .writing-timer-toggle {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        @media (max-width: 767px) {
          .writing-timer-toggle { width: 100%; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .writing-timer-toggle { grid-column: span 2; }
        }

        .writing-checkbox {
          width: 16px;
          height: 16px;
          cursor: pointer;
          color: #4B6E48;
        }

        .writing-checkbox-label {
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          cursor: pointer;
          margin: 0;
        }

        /* === 5. MAIN LAYOUT === */
        .writing-main-grid {
          display: grid;
          gap: 24px;
        }
        @media (max-width: 1023px) {
          .writing-main-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
        @media (min-width: 1024px) {
          .writing-main-grid {
            grid-template-columns: 1fr 2fr;
            gap: 40px;
          }
        }

        /* === 6. PROMPT CARD === */
        .writing-prompt-card {
          background: #fff;
          border: 2px solid #E5E7EB;
          border-radius: 16px;
          padding: 24px;
          height: fit-content;
        }
        @media (max-width: 767px) {
          .writing-prompt-card { 
            padding: 16px;
            order: 1;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .writing-prompt-card { padding: 20px; }
        }

        .writing-prompt-title {
          font-weight: 700;
          color: #111827;
          margin: 0 0 16px 0;
        }
        @media (max-width: 767px) {
          .writing-prompt-title { font-size: 18px; margin-bottom: 12px; }
        }
        @media (min-width: 768px) {
          .writing-prompt-title { font-size: 20px; }
        }

        .writing-prompt-box {
          background: #DBEAFE;
          border: 1px solid #BFDBFE;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 16px;
        }
        @media (max-width: 767px) {
          .writing-prompt-box { padding: 12px; margin-bottom: 12px; }
        }

        .writing-prompt-text {
          font-size: 14px;
          color: #1F2937;
          line-height: 1.6;
          margin: 0;
        }
        @media (max-width: 767px) {
          .writing-prompt-text { 
            font-size: 13px;
            line-height: 1.7;
          }
        }

        .writing-requirements-section {
          margin-bottom: 16px;
        }

        .writing-requirements-heading {
          font-weight: 600;
          color: #111827;
          font-size: 14px;
          margin: 0 0 8px 0;
        }

        .writing-requirements-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .writing-requirement-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 14px;
          color: #374151;
          line-height: 1.5;
        }
        @media (max-width: 767px) {
          .writing-requirement-item { font-size: 13px; }
        }

        .writing-requirement-icon {
          width: 16px;
          height: 16px;
          color: #16A34A;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .writing-criteria-box {
          background: #FEF3C7;
          border: 1px solid #FDE68A;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 16px;
        }
        @media (max-width: 767px) {
          .writing-criteria-box { padding: 12px; }
        }

        .writing-criteria-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .writing-criteria-title {
          font-weight: 600;
          font-size: 14px;
          color: #111827;
        }

        .writing-criteria-list {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 12px;
          color: #374151;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .writing-hint-toggle {
          width: 100%;
          padding: 12px;
          background: #F3F4F6;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          cursor: pointer;
          transition: background 0.2s;
        }
        .writing-hint-toggle:hover { background: #E5E7EB; }

        .writing-hints-box {
          margin-top: 16px;
          background: #F5F3FF;
          border: 1px solid #E9D5FF;
          border-radius: 8px;
          padding: 16px;
        }
        @media (max-width: 767px) {
          .writing-hints-box { padding: 12px; margin-top: 12px; }
        }

        .writing-hints-heading {
          font-size: 14px;
          font-weight: 500;
          color: #7C3AED;
          margin: 0 0 8px 0;
        }

        .writing-hints-list {
          font-size: 12px;
          color: #6B21A8;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        /* === 7. EDITOR CARD === */
        .writing-editor-card {
          background: #fff;
          border: 2px solid #E5E7EB;
          border-radius: 16px;
          padding: 24px;
        }
        @media (max-width: 767px) {
          .writing-editor-card { 
            padding: 16px;
            order: 2;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .writing-editor-card { padding: 20px; }
        }

        .writing-editor-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          gap: 12px;
        }
        @media (max-width: 767px) {
          .writing-editor-header { 
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }

        .writing-editor-title {
          font-weight: 700;
          color: #111827;
          margin: 0;
        }
        @media (max-width: 767px) {
          .writing-editor-title { font-size: 18px; }
        }
        @media (min-width: 768px) {
          .writing-editor-title { font-size: 20px; }
        }

        .writing-word-count {
          font-size: 14px;
          font-weight: 500;
        }
        @media (max-width: 767px) {
          .writing-word-count { 
            align-self: flex-end;
            font-size: 13px;
          }
        }
        .writing-word-count-success { color: #16A34A; }
        .writing-word-count-warning { color: #D97706; }
        .writing-word-count-danger { color: #DC2626; }

        /* === 8. TEXTAREA === */
        .writing-textarea {
          width: 100%;
          padding: 16px;
          border: 1px solid #D1D5DB;
          border-radius: 8px;
          resize: none;
          color: #1F2937;
          line-height: 1.7;
          font-size: 15px;
          font-family: inherit;
        }
        @media (max-width: 767px) {
          .writing-textarea { 
            height: 260px;
            padding: 12px;
            font-size: 14px;
            line-height: 1.8;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .writing-textarea { height: 400px; }
        }
        @media (min-width: 1024px) {
          .writing-textarea { height: 500px; }
        }
        .writing-textarea:focus {
          outline: none;
          border-color: #4B6E48;
          ring: 2px;
          ring-color: #4B6E48;
        }

        /* Checklist */
        .writing-checklist-section {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid #E5E7EB;
        }
        @media (max-width: 767px) {
          .writing-checklist-section { 
            margin-top: 20px;
            padding-top: 20px;
          }
        }

        .writing-checklist-heading {
          font-weight: 600;
          color: #111827;
          font-size: 14px;
          margin: 0 0 12px 0;
        }

        .writing-checklist-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }
        @media (max-width: 767px) {
          .writing-checklist-grid { 
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }

        .writing-checklist-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }

        .writing-checklist-box {
          width: 16px;
          height: 16px;
          border-radius: 2px;
          border: 2px solid #D1D5DB;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .writing-checklist-checked {
          background: #16A34A;
          border-color: #16A34A;
        }

        .writing-checklist-label { color: #6B7280; }
        .writing-checklist-label-active { color: #111827; }

        /* === 9. ACTION BUTTONS === */
        .writing-action-buttons {
          margin-top: 24px;
          display: flex;
          gap: 12px;
        }
        @media (max-width: 767px) {
          .writing-action-buttons { 
            margin-top: 20px;
            flex-direction: column;
          }
        }

        /* === 10. PREVENT OVERFLOW === */
        .writing-practice-container,
        .writing-practice-wrapper,
        .writing-controls-card,
        .writing-prompt-card,
        .writing-editor-card {
          overflow-x: hidden;
          max-width: 100%;
          box-sizing: border-box;
        }
      `}</style>

      <Footer />
    </>
  );
}
