import { useState, useEffect, useRef } from 'react';
import { Footer } from '@/app/components/Footer';
import { AIAssistantNav } from '@/app/components/AIAssistantNav';
import { StandardButton } from '@/app/components/ui/standard-button';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Headphones,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  ArrowLeft,
  Send,
  Save,
  CheckCircle,
  XCircle,
  FileText,
  TrendingUp,
  Target,
  Lightbulb,
  Clock,
  BookMarked
} from 'lucide-react';
import { toast } from 'sonner';

interface ListeningQuestion {
  id: string;
  type: 'MCQ' | 'Completion' | 'Matching' | 'Diagram';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  timestamp: number; // seconds into audio
}

const sampleQuestions: ListeningQuestion[] = [
  {
    id: 'q1',
    type: 'MCQ',
    question: 'What is the main topic of the conversation?',
    options: [
      'University application process',
      'Accommodation options',
      'Study visa requirements',
      'Course selection'
    ],
    correctAnswer: 'Study visa requirements',
    explanation: 'The speakers discuss various documents needed for visa application',
    timestamp: 15
  },
  {
    id: 'q2',
    type: 'Completion',
    question: 'The visa processing time is usually _____ weeks.',
    correctAnswer: '4-6',
    explanation: 'Mentioned at timestamp 1:30',
    timestamp: 90
  },
  {
    id: 'q3',
    type: 'MCQ',
    question: 'Which document is NOT required for the application?',
    options: [
      'Passport',
      'Bank statement',
      'Birth certificate',
      'Acceptance letter'
    ],
    correctAnswer: 'Birth certificate',
    explanation: 'Only passport, financial proof, and acceptance letter are mentioned as required',
    timestamp: 120
  },
  {
    id: 'q4',
    type: 'Completion',
    question: 'The application fee is $_____ .',
    correctAnswer: '185',
    explanation: 'Clearly stated in the audio',
    timestamp: 180
  },
  {
    id: 'q5',
    type: 'MCQ',
    question: 'When should applicants submit their documents?',
    options: [
      'At least 1 month before travel',
      'At least 2 months before travel',
      'At least 3 months before travel',
      'At least 6 months before travel'
    ],
    correctAnswer: 'At least 3 months before travel',
    explanation: 'Recommended timeline mentioned towards the end',
    timestamp: 220
  }
];

export default function ListeningPractice() {
  const [mode, setMode] = useState<'Practice' | 'Exam' | 'Review'>('Practice');
  const [difficulty, setDifficulty] = useState<'Beginner' | 'Medium' | 'Hard'>('Medium');
  const [accent, setAccent] = useState<'US' | 'UK' | 'AU'>('UK');
  const [speed, setSpeed] = useState<0.8 | 1.0 | 1.2>(1.0);
  const [topic, setTopic] = useState('Visa Process');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(240); // 4 minutes
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [notes, setNotes] = useState('');
  const [replaysRemaining, setReplaysRemaining] = useState(mode === 'Exam' ? 1 : 999);
  const [showTranscript, setShowTranscript] = useState(false);

  const audioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: number;
    if (isPlaying && currentTime < duration) {
      interval = window.setInterval(() => {
        setCurrentTime((time) => Math.min(time + 1, duration));
      }, 1000);
    }
    if (currentTime >= duration) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTime, duration]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    if (!isPlaying && currentTime === 0 && replaysRemaining > 0) {
      setReplaysRemaining(replaysRemaining - 1);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReplay = () => {
    if (replaysRemaining > 0 || mode !== 'Exam') {
      setCurrentTime(0);
      setIsPlaying(false);
      if (mode === 'Exam') setReplaysRemaining(replaysRemaining - 1);
      toast.success('Audio reset');
    } else {
      toast.error('No replays remaining in exam mode');
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
    setIsPlaying(false);
    toast.success('Answers submitted! Review your performance.');
  };

  const calculateScore = () => {
    let correct = 0;
    sampleQuestions.forEach((q) => {
      if (answers[q.id]?.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim()) {
        correct++;
      }
    });
    return { correct, total: sampleQuestions.length, percentage: Math.round((correct / sampleQuestions.length) * 100) };
  };

  const transcript = `Student: Hi, I'm calling to inquire about the student visa requirements for international students.

Officer: Of course! I'd be happy to help you with that. First, you'll need to have an acceptance letter from your university.

Student: Yes, I already have that. What other documents do I need?

Officer: You'll need a valid passport, proof of financial support like a bank statement, and you'll have to pay an application fee of $185.

Student: How long does the processing usually take?

Officer: The typical processing time is 4 to 6 weeks, but I recommend submitting your documents at least 3 months before your intended travel date, just to be safe.

Student: That's helpful. And do I need to provide a birth certificate?

Officer: No, that's not required. Just the passport, financial documents, and your acceptance letter should be sufficient.

Student: Perfect. Thank you so much for your help!`;

  if (showResults) {
    const score = calculateScore();
    const timeTaken = currentTime;

    return (
      <>
        <AIAssistantNav />
        <div className="min-h-screen bg-gray-50 pt-40 pb-16">
          <div className="max-w-5xl mx-auto px-4">
            {/* Results Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-6"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-10 h-10 text-amber-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Listening Practice Complete!</h1>
                <p className="text-gray-600">Here's your performance summary</p>
              </div>

              {/* Score Cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-amber-700">{score.percentage}%</div>
                  <div className="text-sm text-gray-600">Overall Score</div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-green-700">{score.correct}/{score.total}</div>
                  <div className="text-sm text-gray-600">Correct Answers</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-blue-700">{formatTime(timeTaken)}</div>
                  <div className="text-sm text-gray-600">Time Taken</div>
                </div>
              </div>
            </motion.div>

            {/* Question Review */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Review</h2>
              <div className="space-y-6">
                {sampleQuestions.map((question, idx) => {
                  const isCorrect = answers[question.id]?.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
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
                            <div className="text-gray-600 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>Mentioned at: {formatTime(question.timestamp)}</span>
                            </div>
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

            {/* Transcript & Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid md:grid-cols-2 gap-6 mb-6"
            >
              {/* Transcript */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#4B6E48]" />
                  Audio Transcript
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 max-h-80 overflow-y-auto">
                  <div className="text-sm text-gray-800 leading-relaxed whitespace-pre-line font-mono">
                    {transcript}
                  </div>
                </div>
              </div>

              {/* Vocabulary & Recommendations */}
              <div className="space-y-6">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <BookMarked className="w-5 h-5 text-purple-600" />
                    Key Vocabulary
                  </h3>
                  <div className="space-y-2">
                    {['Inquire', 'Processing', 'Sufficient', 'Intended', 'Financial support'].map((word) => (
                      <div key={word} className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                        <div className="font-medium text-gray-900">{word}</div>
                        <div className="text-xs text-gray-600">Click to hear pronunciation</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#4B6E48] to-[#3a5638] rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-4">Recommendations</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Strong number recognition skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Practice note-taking during audio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Headphones className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Try Australian accent next</span>
                    </li>
                  </ul>
                  <div className="flex gap-3">
                    <StandardButton variant="outline" size="sm" className="flex-1 bg-white/10 border-white/30 text-white hover:bg-white/20" onClick={() => window.location.reload()}>
                      <div className="flex items-center justify-center gap-2">
                        <RotateCcw className="w-4 h-4" />
                        <span>New Exercise</span>
                      </div>
                    </StandardButton>
                    <Link to="/ai-assistant/dashboard" className="flex-1">
                      <StandardButton variant="outline" size="sm" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20">
                        Dashboard
                      </StandardButton>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Replay Wrong Segments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6"
            >
              <h3 className="font-bold text-gray-900 mb-4">Practice Wrong Segments</h3>
              <div className="space-y-2">
                {sampleQuestions
                  .filter((q) => answers[q.id]?.toLowerCase().trim() !== q.correctAnswer.toLowerCase().trim())
                  .map((q) => (
                    <button
                      key={q.id}
                      className="w-full p-3 bg-red-50 border border-red-200 rounded-lg text-left hover:bg-red-100 transition-colors flex items-center justify-between"
                    >
                      <div className="text-sm text-gray-900">
                        Play segment: <span className="font-medium">{q.question}</span>
                      </div>
                      <Play className="w-4 h-4 text-red-600" />
                    </button>
                  ))}
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
      
      {/* Main Container */}
      <div className="listening-practice-root">
        <div className="listening-practice-container">
          
          {/* Header Section */}
          <div className="listening-header-section">
            <div className="listening-header-row">
              <Link to="/ai-assistant/dashboard">
                <button className="listening-back-btn">
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </Link>
              <div className="listening-title-area">
                <h1 className="listening-page-title">
                  <Headphones className="listening-title-icon" />
                  Listening Practice
                </h1>
                <p className="listening-subtitle">Sharpen your listening comprehension skills</p>
              </div>
            </div>
          </div>

          {/* Mode + Filters Section */}
          <div className="listening-filters-card">
            <div className="listening-filters-grid">
              {/* Mode */}
              <div className="listening-filter-group">
                <label className="listening-filter-label">Mode</label>
                <div className="listening-mode-buttons">
                  {(['Practice', 'Exam', 'Review'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => {
                        setMode(m);
                        setReplaysRemaining(m === 'Exam' ? 1 : 999);
                      }}
                      className={`listening-mode-btn ${mode === m ? 'active' : ''}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div className="listening-filter-group">
                <label className="listening-filter-label">Difficulty</label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value as any)}
                  className="listening-select"
                >
                  <option>Beginner</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>

              {/* Accent */}
              <div className="listening-filter-group">
                <label className="listening-filter-label">Accent</label>
                <select
                  value={accent}
                  onChange={(e) => setAccent(e.target.value as any)}
                  className="listening-select"
                >
                  <option value="US">US</option>
                  <option value="UK">UK</option>
                  <option value="AU">Australian</option>
                </select>
              </div>

              {/* Speed */}
              <div className="listening-filter-group">
                <label className="listening-filter-label">Speed</label>
                <select
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value) as any)}
                  className="listening-select"
                >
                  <option value={0.8}>0.8x</option>
                  <option value={1.0}>1.0x</option>
                  <option value={1.2}>1.2x</option>
                </select>
              </div>

              {/* Topic */}
              <div className="listening-filter-group">
                <label className="listening-filter-label">Topic</label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="listening-select"
                >
                  <option>Visa Process</option>
                  <option>Academic Lecture</option>
                  <option>Conversation</option>
                  <option>News Report</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Workspace */}
          <div className="listening-workspace">
            {/* Left Column: Audio Player + Notes */}
            <div className="listening-left-column">
              {/* Audio Player */}
              <div className="listening-audio-card">
                <h2 className="listening-card-title">
                  <Headphones className="listening-card-icon" />
                  Audio Player
                </h2>

                {/* Waveform Visual */}
                <div className="listening-waveform-container">
                  <div className="listening-waveform">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <div
                        key={i}
                        className={`listening-waveform-bar ${
                          isPlaying && i <= (currentTime / duration) * 40
                            ? 'active'
                            : ''
                        }`}
                        style={{
                          height: `${20 + Math.random() * 60}%`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Time Display */}
                <div className="listening-time-display">
                  <span className="listening-time">{formatTime(currentTime)}</span>
                  <span className="listening-time">{formatTime(duration)}</span>
                </div>

                {/* Progress Bar */}
                <div className="listening-progress-bar">
                  <div
                    className="listening-progress-fill"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  />
                </div>

                {/* Controls */}
                <div className="listening-controls">
                  <StandardButton
                    size="sm"
                    variant="outline"
                    onClick={handleReplay}
                    className="listening-control-btn"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Replay</span>
                  </StandardButton>
                  <button
                    onClick={handlePlayPause}
                    className="listening-play-btn"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>
                </div>

                {/* Replay Allowance */}
                {mode === 'Exam' && (
                  <div className="listening-exam-notice">
                    Replays remaining: {replaysRemaining}
                  </div>
                )}
              </div>

              {/* Notes Area */}
              <div className="listening-notes-card">
                <h3 className="listening-notes-title">Quick Notes</h3>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Take notes while listening..."
                  className="listening-notes-textarea"
                />
              </div>
            </div>

            {/* Right Column: Questions */}
            <div className="listening-questions-card">
              <div className="listening-questions-header">
                <h2 className="listening-card-title">Questions</h2>
                <span className="listening-progress-badge">
                  {Object.keys(answers).length}/{sampleQuestions.length} answered
                </span>
              </div>

              <div className="listening-questions-list">
                {sampleQuestions.map((question, idx) => (
                  <div key={question.id} className="listening-question-item">
                    <div className="listening-question-header">
                      <div className="listening-question-number">{idx + 1}</div>
                      <p className="listening-question-text">{question.question}</p>
                    </div>

                    {question.type === 'MCQ' ? (
                      <div className="listening-options-list">
                        {question.options?.map((option) => (
                          <label
                            key={option}
                            className={`listening-option ${
                              answers[question.id] === option ? 'selected' : ''
                            }`}
                          >
                            <input
                              type="radio"
                              name={question.id}
                              value={option}
                              checked={answers[question.id] === option}
                              onChange={(e) =>
                                setAnswers({ ...answers, [question.id]: e.target.value })
                              }
                              className="listening-radio"
                            />
                            <span className="listening-option-text">{option}</span>
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
                        className="listening-text-input"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="listening-actions">
                <StandardButton variant="outline" size="sm" className="listening-action-btn">
                  <Save className="w-4 h-4" />
                  <span>Save & Exit</span>
                </StandardButton>
                <StandardButton
                  size="sm"
                  className="listening-action-btn listening-submit-btn"
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

      {/* Comprehensive Responsive Styles */}
      <style>{`
        /* === ROOT CONTAINER === */
        .listening-practice-root {
          min-height: 100vh;
          background: #F9FAFB;
          width: 100%;
          overflow-x: hidden;
        }
        /* Mobile: Reduced header height */
        @media (max-width: 479px) {
          .listening-practice-root { padding-top: 130px; padding-bottom: 40px; }
        }
        @media (min-width: 480px) and (max-width: 767px) {
          .listening-practice-root { padding-top: 140px; padding-bottom: 48px; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .listening-practice-root { padding-top: 160px; padding-bottom: 56px; }
        }
        @media (min-width: 1024px) and (max-width: 1279px) {
          .listening-practice-root { padding-top: 160px; padding-bottom: 64px; }
        }
        @media (min-width: 1280px) {
          .listening-practice-root { padding-top: 160px; padding-bottom: 64px; }
        }

        /* === MAIN CONTAINER === */
        .listening-practice-container {
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        /* Mobile: 20px side padding */
        @media (max-width: 767px) {
          .listening-practice-container { 
            padding: 0 20px;
            gap: 20px;
            max-width: 100%;
          }
        }
        /* Tablet: 32px side padding */
        @media (min-width: 768px) and (max-width: 1279px) {
          .listening-practice-container { 
            padding: 0 32px;
            gap: 24px;
            max-width: 100%;
          }
        }
        /* Desktop: max-width 1200px */
        @media (min-width: 1280px) {
          .listening-practice-container { 
            padding: 0 32px;
            gap: 32px;
            max-width: 1200px;
          }
        }

        /* === HEADER SECTION === */
        .listening-header-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .listening-header-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        @media (max-width: 479px) {
          .listening-header-row { gap: 8px; }
        }

        .listening-back-btn {
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
        .listening-back-btn:hover { background: #E5E7EB; }

        .listening-title-area {
          flex: 1;
          min-width: 0;
        }

        /* === RESPONSIVE TYPOGRAPHY === */
        .listening-page-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 4px 0;
        }
        /* Mobile: 22px, increased line-height */
        @media (max-width: 479px) {
          .listening-page-title { 
            font-size: 22px;
            line-height: 1.3;
            gap: 8px;
          }
        }
        @media (min-width: 480px) and (max-width: 767px) {
          .listening-page-title { 
            font-size: 24px;
            line-height: 1.3;
          }
        }
        /* Tablet: 26px */
        @media (min-width: 768px) and (max-width: 1279px) {
          .listening-page-title { 
            font-size: 26px;
            line-height: 1.2;
          }
        }
        /* Desktop: 32px */
        @media (min-width: 1280px) {
          .listening-page-title { 
            font-size: 32px;
            line-height: 1.2;
          }
        }

        .listening-title-icon {
          flex-shrink: 0;
          color: #D97706;
        }
        @media (max-width: 479px) {
          .listening-title-icon { width: 22px; height: 22px; }
        }
        @media (min-width: 480px) and (max-width: 767px) {
          .listening-title-icon { width: 24px; height: 24px; }
        }
        @media (min-width: 768px) and (max-width: 1279px) {
          .listening-title-icon { width: 26px; height: 26px; }
        }
        @media (min-width: 1280px) {
          .listening-title-icon { width: 32px; height: 32px; }
        }

        .listening-subtitle {
          color: #6B7280;
          line-height: 1.5;
          margin: 0;
        }
        @media (max-width: 767px) {
          .listening-subtitle { font-size: 14px; }
        }
        @media (min-width: 768px) {
          .listening-subtitle { font-size: 16px; }
        }

        /* === MODE + FILTERS SECTION === */
        .listening-filters-card {
          background: #fff;
          border: 1px solid #E5E7EB;
          box-sizing: border-box;
        }
        /* Reduced border radius on mobile */
        @media (max-width: 767px) {
          .listening-filters-card { 
            padding: 16px;
            border-radius: 12px;
          }
        }
        @media (min-width: 768px) {
          .listening-filters-card { 
            padding: 20px;
            border-radius: 16px;
          }
        }

        .listening-filters-grid {
          display: flex;
          align-items: flex-end;
        }
        /* Mobile (480px): stack vertically with 16px spacing */
        @media (max-width: 479px) {
          .listening-filters-grid {
            flex-direction: column;
            align-items: stretch;
            gap: 16px;
          }
        }
        /* Small Tablet (768px): 2-column grid */
        @media (min-width: 480px) and (max-width: 767px) {
          .listening-filters-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
        }
        /* Tablet (1024px): 2 clean rows */
        @media (min-width: 768px) and (max-width: 1023px) {
          .listening-filters-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
        }
        /* Desktop (1280px+): one row with equal spacing */
        @media (min-width: 1024px) {
          .listening-filters-grid {
            flex-wrap: wrap;
            gap: 16px;
          }
        }

        .listening-filter-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        @media (max-width: 479px) {
          .listening-filter-group { width: 100%; }
        }
        @media (min-width: 1024px) {
          .listening-filter-group { flex: 1; min-width: 140px; }
        }

        /* Labels align properly above dropdowns */
        .listening-filter-label {
          font-size: 12px;
          font-weight: 500;
          color: #6B7280;
          margin: 0;
        }

        .listening-mode-buttons {
          display: flex;
          gap: 6px;
        }
        @media (max-width: 479px) {
          .listening-mode-buttons { width: 100%; }
        }

        .listening-mode-btn {
          padding: 10px 12px;
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
        @media (max-width: 479px) {
          .listening-mode-btn { flex: 1; }
        }
        .listening-mode-btn:hover { background: #E5E7EB; }
        .listening-mode-btn.active {
          background: #4B6E48;
          color: #fff;
        }

        /* Equal input widths */
        .listening-select {
          padding: 10px 12px;
          font-size: 14px;
          color: #111827;
          background: #fff;
          border: 1px solid #D1D5DB;
          border-radius: 8px;
          cursor: pointer;
          min-height: 44px;
          width: 100%;
          box-sizing: border-box;
        }
        .listening-select:focus {
          outline: none;
          border-color: #4B6E48;
          ring: 2px #4B6E48;
        }

        /* === MAIN WORKSPACE === */
        .listening-workspace {
          display: flex;
          gap: 24px;
        }
        @media (max-width: 1023px) {
          .listening-workspace {
            flex-direction: column;
            gap: 20px;
          }
        }

        /* === LEFT COLUMN === */
        .listening-left-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        @media (min-width: 1024px) {
          .listening-left-column { flex: 0 0 35%; }
        }

        /* === AUDIO PLAYER CARD === */
        .listening-audio-card {
          background: #fff;
          border: 2px solid #E5E7EB;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        /* Proper 24px internal padding maintained, reduced border radius on mobile */
        @media (max-width: 767px) {
          .listening-audio-card { 
            padding: 20px;
            border-radius: 12px;
            gap: 16px;
          }
        }
        @media (min-width: 768px) {
          .listening-audio-card { 
            padding: 24px;
            border-radius: 16px;
            gap: 16px;
          }
        }

        .listening-card-title {
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        @media (min-width: 768px) {
          .listening-card-title { font-size: 20px; }
        }

        .listening-card-icon {
          flex-shrink: 0;
          color: #D97706;
        }
        @media (max-width: 767px) {
          .listening-card-icon { width: 20px; height: 20px; }
        }
        @media (min-width: 768px) {
          .listening-card-icon { width: 24px; height: 24px; }
        }

        /* Waveform centered with consistent spacing */
        .listening-waveform-container {
          background: #FEF3C7;
          border: 1px solid #FDE68A;
          border-radius: 12px;
          padding: 24px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .listening-waveform {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2px;
          height: 80px;
          width: 100%;
          max-width: 400px;
        }

        .listening-waveform-bar {
          width: 3px;
          border-radius: 2px;
          background: #FCD34D;
          transition: all 0.3s;
        }
        .listening-waveform-bar.active {
          background: #D97706;
        }

        .listening-time-display {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .listening-time {
          font-family: monospace;
          font-size: 14px;
          color: #111827;
          font-weight: 500;
        }

        /* Proper margin between progress bar and buttons */
        .listening-progress-bar {
          height: 8px;
          background: #E5E7EB;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .listening-progress-fill {
          height: 100%;
          background: #D97706;
          transition: width 0.3s;
        }

        /* Controls */
        .listening-controls {
          display: flex;
          gap: 12px;
        }
        /* Desktop: buttons side by side */
        @media (min-width: 768px) {
          .listening-controls {
            flex-direction: row;
          }
        }
        /* Tablet: buttons 50% width each */
        @media (min-width: 480px) and (max-width: 767px) {
          .listening-controls {
            flex-direction: row;
          }
        }
        /* Mobile: stack buttons full width */
        @media (max-width: 479px) {
          .listening-controls {
            flex-direction: column;
            gap: 8px;
          }
        }

        .listening-control-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .listening-play-btn {
          flex: 1;
          padding: 12px;
          background: #4B6E48;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 44px;
        }
        .listening-play-btn:hover { background: #3a5638; }

        .listening-exam-notice {
          background: #FEE2E2;
          border: 1px solid #FCA5A5;
          border-radius: 8px;
          padding: 12px;
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          color: #991B1B;
        }

        /* === NOTES CARD === */
        .listening-notes-card {
          background: #fff;
          border: 2px solid #E5E7EB;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-sizing: border-box;
        }
        @media (max-width: 767px) {
          .listening-notes-card { 
            padding: 20px;
            border-radius: 12px;
          }
        }
        @media (min-width: 768px) {
          .listening-notes-card { 
            padding: 24px;
            border-radius: 16px;
          }
        }

        .listening-notes-title {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin: 0;
        }

        .listening-notes-textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #D1D5DB;
          border-radius: 8px;
          font-size: 14px;
          color: #111827;
          background: #fff;
          resize: vertical;
          min-height: 140px;
          box-sizing: border-box;
          line-height: 1.6;
        }
        .listening-notes-textarea:focus {
          outline: none;
          border-color: #4B6E48;
          ring: 2px #4B6E48;
        }
        .listening-notes-textarea::placeholder {
          color: #9CA3AF;
        }

        /* === QUESTIONS CARD === */
        .listening-questions-card {
          background: #fff;
          border: 2px solid #E5E7EB;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        @media (max-width: 767px) {
          .listening-questions-card { 
            padding: 20px;
            border-radius: 12px;
            gap: 16px;
          }
        }
        @media (min-width: 768px) {
          .listening-questions-card { 
            padding: 24px;
            border-radius: 16px;
            gap: 20px;
          }
        }
        @media (min-width: 1024px) {
          .listening-questions-card { flex: 1; }
        }

        .listening-questions-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        @media (max-width: 479px) {
          .listening-questions-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }

        .listening-progress-badge {
          font-size: 13px;
          color: #6B7280;
        }

        .listening-questions-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex: 1;
        }
        @media (max-width: 767px) {
          .listening-questions-list { gap: 16px; }
        }

        .listening-question-item {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-bottom: 20px;
          border-bottom: 1px solid #E5E7EB;
        }
        .listening-question-item:last-child { border-bottom: none; }

        .listening-question-header {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .listening-question-number {
          min-width: 32px;
          min-height: 32px;
          background: #FEF3C7;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          color: #D97706;
          flex-shrink: 0;
        }

        .listening-question-text {
          flex: 1;
          font-size: 15px;
          font-weight: 500;
          color: #111827;
          line-height: 1.5;
          margin: 4px 0 0 0;
        }
        @media (max-width: 767px) {
          .listening-question-text { 
            font-size: 14px;
            line-height: 1.6;
          }
        }

        .listening-options-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .listening-option {
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
        .listening-option:hover { background: #F3F4F6; }
        .listening-option.selected {
          background: #4B6E48;
          color: #fff;
        }

        .listening-radio {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
          cursor: pointer;
        }

        .listening-option-text {
          font-size: 14px;
          line-height: 1.4;
        }

        .listening-text-input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #D1D5DB;
          border-radius: 8px;
          font-size: 14px;
          min-height: 44px;
          box-sizing: border-box;
          color: #111827;
        }
        .listening-text-input:focus {
          outline: none;
          border-color: #4B6E48;
          ring: 2px #4B6E48;
        }
        .listening-text-input::placeholder {
          color: #9CA3AF;
        }

        /* === ACTION BUTTONS === */
        .listening-actions {
          display: flex;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid #E5E7EB;
        }
        @media (max-width: 479px) {
          .listening-actions {
            flex-direction: column;
            gap: 8px;
          }
        }

        .listening-action-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .listening-submit-btn {
          background: #4B6E48;
          color: #fff;
        }

        /* === PREVENT OVERFLOW === */
        .listening-practice-root,
        .listening-practice-container,
        .listening-filters-card,
        .listening-workspace,
        .listening-audio-card,
        .listening-notes-card,
        .listening-questions-card {
          max-width: 100%;
          overflow-x: hidden;
        }
      `}</style>

      <Footer />
    </>
  );
}
