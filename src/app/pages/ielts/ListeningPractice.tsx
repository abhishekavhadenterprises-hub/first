import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import {
  Headphones,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  Clock,
  CheckCircle,
  XCircle,
  ArrowLeft,
  AlertCircle,
  Award
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { StandardButton } from '@/app/components/ui/standard-button';
import { listeningPractice } from '@/app/data/ieltsData';

export default function ListeningPractice() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [currentSection] = useState(listeningPractice[0]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentTime < currentSection.duration) {
      interval = setInterval(() => {
        setCurrentTime(prev => prev + 1);
      }, 1000);
    } else if (currentTime >= currentSection.duration) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTime, currentSection.duration]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    setShowResults(true);
    setIsPlaying(false);
  };

  const calculateScore = () => {
    let correct = 0;
    currentSection.questions.forEach(q => {
      const userAnswer = answers[q.id]?.toLowerCase().trim();
      const correctAnswer = Array.isArray(q.correctAnswer) 
        ? q.correctAnswer[0].toLowerCase().trim() 
        : q.correctAnswer.toLowerCase().trim();
      if (userAnswer === correctAnswer) correct++;
    });
    return correct;
  };

  const score = showResults ? calculateScore() : 0;
  const totalQuestions = currentSection.questions.length;

  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="mb-8">
            <Link to="/ielts" className="inline-flex items-center gap-2 text-[#4B6E48] hover:underline mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to IELTS Hub
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Listening Practice</h1>
                <p className="text-gray-600">Section 1: Social Conversation</p>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-900">
                <p className="font-semibold mb-1">Instructions:</p>
                <p>You will hear a recording once only. Listen carefully and answer the questions below. You can play, pause, and replay the audio using the controls.</p>
              </div>
            </div>
          </div>

          {/* Audio Player */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold mb-1">Audio Recording</h3>
                <p className="text-sm text-gray-600">Duration: {formatTime(currentSection.duration)}</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="font-mono">{formatTime(currentTime)} / {formatTime(currentSection.duration)}</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentTime / currentSection.duration) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setCurrentTime(0)}
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                title="Restart"
              >
                <RotateCcw className="w-5 h-5 text-gray-700" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-6 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-white" />
                ) : (
                  <Play className="w-8 h-8 text-white ml-1" />
                )}
              </button>

              <button
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                title="Volume"
              >
                <Volume2 className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Note: This is a simulation */}
            <div className="mt-6 text-center text-sm text-gray-500 italic">
              Note: This is a demo interface. In a real test, actual audio would play here.
            </div>
          </div>

          {/* Questions */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Questions {1}-{totalQuestions}</h3>

            <div className="space-y-6">
              {currentSection.questions.map((question, index) => (
                <div key={question.id} className="pb-6 border-b border-gray-200 last:border-0">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="font-bold text-lg text-gray-900">{index + 1}.</span>
                    <p className="text-lg text-gray-900 flex-1">{question.question}</p>
                  </div>

                  {question.type === 'fill-blank' && (
                    <input
                      type="text"
                      value={answers[question.id] || ''}
                      onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                      disabled={showResults}
                      className="ml-8 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed text-gray-900"
                      placeholder="Type your answer here"
                    />
                  )}

                  {question.type === 'multiple-choice' && question.options && (
                    <div className="ml-8 space-y-2">
                      {question.options.map((option, i) => (
                        <label
                          key={i}
                          className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                            showResults 
                              ? option === question.correctAnswer
                                ? 'bg-green-50 border-2 border-green-500'
                                : answers[question.id] === option
                                ? 'bg-red-50 border-2 border-red-500'
                                : 'bg-gray-50 border border-gray-200'
                              : 'hover:bg-gray-50 border border-gray-200'
                          }`}
                        >
                          <input
                            type="radio"
                            name={question.id}
                            value={option}
                            checked={answers[question.id] === option}
                            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                            disabled={showResults}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span className="text-gray-900">{option}</span>
                          {showResults && option === question.correctAnswer && (
                            <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />
                          )}
                          {showResults && answers[question.id] === option && option !== question.correctAnswer && (
                            <XCircle className="w-5 h-5 text-red-600 ml-auto" />
                          )}
                        </label>
                      ))}
                    </div>
                  )}

                  {/* Show explanation after submission */}
                  {showResults && question.explanation && (
                    <div className="ml-8 mt-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-900">
                        <span className="font-semibold">Explanation: </span>
                        {question.explanation}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Submit/Results */}
          {!showResults ? (
            <div className="flex justify-center">
              <StandardButton
                onClick={handleSubmit}
                disabled={Object.keys(answers).length !== totalQuestions}
                className="px-8 py-4 text-lg"
              >
                Submit Answers
              </StandardButton>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] rounded-2xl p-8 text-white">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Award className="w-12 h-12" />
                  <div>
                    <h3 className="text-2xl font-bold">Test Complete!</h3>
                    <p className="text-white/90">Here are your results</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-5xl font-bold">{score}/{totalQuestions}</div>
                  <div className="text-sm text-white/90">Correct Answers</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">{Math.round((score / totalQuestions) * 100)}%</div>
                  <div className="text-sm text-white/90">Accuracy</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">{totalQuestions - score}</div>
                  <div className="text-sm text-white/90">Incorrect</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">{formatTime(currentTime)}</div>
                  <div className="text-sm text-white/90">Time Taken</div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setShowResults(false);
                    setAnswers({});
                    setCurrentTime(0);
                    setIsPlaying(false);
                  }}
                  className="flex-1 px-6 py-3 bg-white text-[#4B6E48] rounded-xl font-medium hover:bg-gray-100 transition-colors"
                >
                  Try Again
                </button>
                <Link to="/ielts" className="flex-1">
                  <button className="w-full px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white rounded-xl font-medium hover:bg-white/20 transition-colors">
                    Back to Hub
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}