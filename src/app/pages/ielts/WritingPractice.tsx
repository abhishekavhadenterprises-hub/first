import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Footer } from '@/app/components/Footer';
import {
  PenTool,
  Clock,
  ArrowLeft,
  AlertCircle,
  Lightbulb,
  FileText,
  CheckCircle
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { StandardButton } from '@/app/components/ui/standard-button';
import { writingTasks } from '@/app/data/ieltsData';

export default function WritingPractice() {
  const [selectedTask, setSelectedTask] = useState<1 | 2>(1);
  const currentTask = writingTasks.find(t => t.taskNumber === selectedTask)!;
  const [answer, setAnswer] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(currentTask.timeLimit * 60);
  const [timerActive, setTimerActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeRemaining]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const wordCount = answer.trim().split(/\s+/).filter(word => word.length > 0).length;

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

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <PenTool className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold">Writing Practice</h1>
                  <p className="text-gray-600">Academic Writing</p>
                </div>
              </div>

              {/* Timer */}
              <div className={`flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-lg font-bold ${
                timeRemaining < 300 ? 'bg-red-100 text-red-700' : 'bg-purple-100 text-purple-700'
              }`}>
                <Clock className="w-5 h-5" />
                {formatTime(timeRemaining)}
              </div>
            </div>

            {/* Task Selector */}
            <div className="flex gap-4 mb-6">
              {[1, 2].map(taskNum => (
                <button
                  key={taskNum}
                  onClick={() => {
                    setSelectedTask(taskNum as 1 | 2);
                    setAnswer('');
                    setSubmitted(false);
                    const task = writingTasks.find(t => t.taskNumber === taskNum)!;
                    setTimeRemaining(task.timeLimit * 60);
                    setTimerActive(false);
                  }}
                  className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all ${
                    selectedTask === taskNum
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-purple-600'
                  }`}
                >
                  Task {taskNum}
                  <span className="block text-sm font-normal opacity-90">
                    {taskNum === 1 ? '150 words min' : '250 words min'} â€¢ {taskNum === 1 ? '20' : '40'} minutes
                  </span>
                </button>
              ))}
            </div>

            {/* Instructions */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-purple-900">
                <p className="font-semibold mb-1">Instructions:</p>
                <p>Read the task carefully and write your response. Aim for at least {currentTask.minWords} words. You have {currentTask.timeLimit} minutes to complete this task.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Writing Area */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Task Prompt */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold mb-4">Task {selectedTask}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">{currentTask.prompt}</p>
                
                {currentTask.imageUrl && (
                  <img 
                    src={currentTask.imageUrl} 
                    alt="Task visualization" 
                    className="w-full h-64 object-cover rounded-xl border border-gray-200"
                  />
                )}

                <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Minimum {currentTask.minWords} words</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{currentTask.timeLimit} minutes</span>
                  </div>
                </div>
              </div>

              {/* Writing Area */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Your Response</h3>
                  <div className="flex items-center gap-4">
                    <span className={`text-sm font-semibold ${
                      wordCount >= currentTask.minWords ? 'text-green-600' : 'text-gray-600'
                    }`}>
                      {wordCount} / {currentTask.minWords} words
                    </span>
                    {!timerActive && !submitted && (
                      <button
                        onClick={() => setTimerActive(true)}
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                      >
                        Start Timer
                      </button>
                    )}
                  </div>
                </div>

                <textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  disabled={submitted}
                  placeholder="Start typing your response here..."
                  className="w-full h-96 px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none disabled:bg-gray-50 disabled:cursor-not-allowed text-gray-900 leading-relaxed"
                />

                {!submitted ? (
                  <div className="mt-4">
                    <StandardButton
                      onClick={() => setSubmitted(true)}
                      disabled={wordCount < currentTask.minWords}
                      className="w-full py-3"
                    >
                      Submit Response
                    </StandardButton>
                  </div>
                ) : (
                  <div className="mt-4 p-6 bg-green-50 border-2 border-green-500 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <h4 className="font-bold text-green-900">Response Submitted!</h4>
                    </div>
                    <p className="text-sm text-green-800 mb-4">
                      In a real test, your response would be evaluated by an examiner. Word count: <span className="font-semibold">{wordCount}</span>
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setAnswer('');
                        setTimeRemaining(currentTask.timeLimit * 60);
                        setTimerActive(false);
                      }}
                      className="px-6 py-2 bg-white text-green-700 border-2 border-green-700 rounded-lg hover:bg-green-50 transition-colors font-medium"
                    >
                      Start Over
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Tips Sidebar */}
            <div className="space-y-6">
              
              {/* Tips */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-purple-600" />
                  Writing Tips
                </h3>
                <ul className="space-y-3">
                  {currentTask.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress */}
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-4">Writing Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2 text-sm">
                      <span>Word Count</span>
                      <span className="font-semibold">{Math.round((wordCount / currentTask.minWords) * 100)}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-white h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min((wordCount / currentTask.minWords) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2 text-sm">
                      <span>Time Used</span>
                      <span className="font-semibold">{Math.round(((currentTask.timeLimit * 60 - timeRemaining) / (currentTask.timeLimit * 60)) * 100)}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-white h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentTask.timeLimit * 60 - timeRemaining) / (currentTask.timeLimit * 60)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sample Answer Preview */}
              {currentTask.sampleAnswer && (
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold mb-3">Sample Answer</h3>
                  <p className="text-sm text-gray-600 italic">
                    {currentTask.sampleAnswer}...
                  </p>
                  <button className="mt-4 text-sm text-purple-600 hover:underline font-medium">
                    View Full Sample â†’
                  </button>
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
