import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import {
  BookOpen,
  Clock,
  CheckCircle,
  XCircle,
  ArrowLeft,
  AlertCircle,
  Award,
  Play,
  Pause
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { StandardButton } from '@/app/components/ui/standard-button';
import { readingPractice } from '@/app/data/ieltsData';

export default function ReadingPractice() {
  const [currentPassage] = useState(readingPractice[0]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(currentPassage.timeLimit * 60); // Convert to seconds
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setTimerActive(false);
      handleSubmit();
    }
    return () => clearInterval(interval);
  }, [timerActive, timeRemaining]);

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
    setTimerActive(false);
  };

  const calculateScore = () => {
    let correct = 0;
    currentPassage.questions.forEach(q => {
      const userAnswer = answers[q.id]?.toLowerCase().trim();
      if (Array.isArray(q.correctAnswer)) {
        // For fill-blank with multiple answers
        const allCorrect = q.correctAnswer.every(ans => 
          userAnswer?.includes(ans.toLowerCase().trim())
        );
        if (allCorrect) correct++;
      } else {
        const correctAnswer = q.correctAnswer.toLowerCase().trim();
        if (userAnswer === correctAnswer) correct++;
      }
    });
    return correct;
  };

  const score = showResults ? calculateScore() : 0;
  const totalQuestions = currentPassage.questions.length;

  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="mb-8">
            <Link to="/ielts" className="inline-flex items-center gap-2 text-[#4B6E48] hover:underline mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to IELTS Hub
            </Link>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold">Reading Practice</h1>
                  <p className="text-gray-600">{currentPassage.wordCount} words</p>
                </div>
              </div>

              {/* Timer */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setTimerActive(!timerActive)}
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                >
                  {timerActive ? (
                    <Pause className="w-5 h-5 text-gray-700" />
                  ) : (
                    <Play className="w-5 h-5 text-gray-700" />
                  )}
                </button>
                <div className={`flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-lg font-bold ${
                  timeRemaining < 300 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                }`}>
                  <Clock className="w-5 h-5" />
                  {formatTime(timeRemaining)}
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-green-900">
                <p className="font-semibold mb-1">Instructions:</p>
                <p>Read the passage carefully and answer the questions. You have {currentPassage.timeLimit} minutes to complete this section. Click the play button to start the timer.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Passage */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 h-fit sticky top-24">
              <h2 className="text-2xl font-bold mb-6">{currentPassage.title}</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                {currentPassage.content}
              </div>
            </div>

            {/* Questions */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold mb-6">Questions {1}-{totalQuestions}</h3>

              <div className="space-y-6">
                {currentPassage.questions.map((question, index) => (
                  <div key={question.id} className="pb-6 border-b border-gray-200 last:border-0">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="font-bold text-lg text-gray-900">{index + 1}.</span>
                      <p className="text-lg text-gray-900 flex-1">{question.question}</p>
                    </div>

                    {/* Multiple Choice */}
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
                              className="w-4 h-4 text-green-600"
                            />
                            <span className="text-gray-900 flex-1">{option}</span>
                            {showResults && option === question.correctAnswer && (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            )}
                            {showResults && answers[question.id] === option && option !== question.correctAnswer && (
                              <XCircle className="w-5 h-5 text-red-600" />
                            )}
                          </label>
                        ))}
                      </div>
                    )}

                    {/* True/False/Not Given */}
                    {question.type === 'true-false' && question.options && (
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
                              className="w-4 h-4 text-green-600"
                            />
                            <span className="text-gray-900 flex-1">{option}</span>
                            {showResults && option === question.correctAnswer && (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            )}
                            {showResults && answers[question.id] === option && option !== question.correctAnswer && (
                              <XCircle className="w-5 h-5 text-red-600" />
                            )}
                          </label>
                        ))}
                      </div>
                    )}

                    {/* Fill in the Blank / Short Answer */}
                    {(question.type === 'fill-blank' || question.type === 'short-answer') && (
                      <div className="ml-8">
                        <input
                          type="text"
                          value={answers[question.id] || ''}
                          onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                          disabled={showResults}
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed text-gray-900"
                          placeholder="Type your answer here"
                        />
                        {showResults && (
                          <div className="mt-2 flex items-center gap-2">
                            {answers[question.id]?.toLowerCase().trim() === (Array.isArray(question.correctAnswer) ? question.correctAnswer[0] : question.correctAnswer).toLowerCase().trim() ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-600" />
                            )}
                            <span className="text-sm text-gray-600">
                              Correct answer: <span className="font-semibold">
                                {Array.isArray(question.correctAnswer) ? question.correctAnswer.join(', ') : question.correctAnswer}
                              </span>
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Show explanation after submission */}
                    {showResults && question.explanation && (
                      <div className="ml-8 mt-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-sm text-green-900">
                          <span className="font-semibold">Explanation: </span>
                          {question.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Submit Button */}
              {!showResults && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <StandardButton
                    onClick={handleSubmit}
                    disabled={Object.keys(answers).length !== totalQuestions}
                    className="w-full py-4 text-lg"
                  >
                    Submit Answers
                  </StandardButton>
                  <p className="text-sm text-gray-500 text-center mt-3">
                    {Object.keys(answers).length} of {totalQuestions} questions answered
                  </p>
                </div>
              )}

              {/* Results */}
              {showResults && (
                <div className="mt-8 pt-6 border-t border-gray-200">
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

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold">{Math.round((score / totalQuestions) * 100)}%</div>
                        <div className="text-sm text-white/90">Accuracy</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold">{formatTime((currentPassage.timeLimit * 60) - timeRemaining)}</div>
                        <div className="text-sm text-white/90">Time Taken</div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={() => {
                          setShowResults(false);
                          setAnswers({});
                          setTimeRemaining(currentPassage.timeLimit * 60);
                          setTimerActive(false);
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
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}