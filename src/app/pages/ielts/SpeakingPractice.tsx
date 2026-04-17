import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import {
  Mic,
  Clock,
  ArrowLeft,
  AlertCircle,
  Lightbulb,
  Play,
  Pause,
  RotateCcw,
  Circle
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { speakingTopics } from '@/app/data/ieltsData';

export default function SpeakingPractice() {
  const [selectedPart, setSelectedPart] = useState<1 | 2 | 3>(1);
  const currentTopic = speakingTopics.find(t => t.part === selectedPart)!;
  const [isRecording, setIsRecording] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isPreparation, setIsPreparation] = useState(false);
  const [preparationTime, setPreparationTime] = useState(currentTopic.preparationTime || 0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPreparation && preparationTime > 0) {
      interval = setInterval(() => {
        setPreparationTime(prev => {
          if (prev <= 1) {
            setIsPreparation(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPreparation, preparationTime]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startPreparation = () => {
    setIsPreparation(true);
    setPreparationTime(currentTopic.preparationTime || 0);
    setTimeElapsed(0);
  };

  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="mb-8">
            <Link to="/ielts" className="inline-flex items-center gap-2 text-[#4B6E48] hover:underline mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to IELTS Hub
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Speaking Practice</h1>
                <p className="text-gray-600">IELTS Speaking Test Simulation</p>
              </div>
            </div>

            {/* Part Selector */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[1, 2, 3].map(partNum => (
                <button
                  key={partNum}
                  onClick={() => {
                    setSelectedPart(partNum as 1 | 2 | 3);
                    setIsRecording(false);
                    setTimeElapsed(0);
                    setIsPreparation(false);
                  }}
                  className={`px-6 py-4 rounded-xl font-semibold transition-all ${
                    selectedPart === partNum
                      ? 'bg-orange-600 text-white shadow-lg'
                      : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-orange-600'
                  }`}
                >
                  Part {partNum}
                  <span className="block text-sm font-normal opacity-90">
                    {partNum === 1 && '4-5 minutes'}
                    {partNum === 2 && '3-4 minutes'}
                    {partNum === 3 && '4-5 minutes'}
                  </span>
                </button>
              ))}
            </div>

            {/* Instructions */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-orange-900">
                <p className="font-semibold mb-1">Instructions:</p>
                <p>{currentTopic.part === 1 && 'Answer questions about yourself and familiar topics.'}
                {currentTopic.part === 2 && 'You will have 1 minute to prepare before speaking for 1-2 minutes on a given topic.'}
                {currentTopic.part === 3 && 'Discuss abstract ideas and issues related to the Part 2 topic.'}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Area */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Topic Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold mb-6">{currentTopic.title}</h2>
                
                <div className="space-y-4">
                  {currentTopic.questions.map((question, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {index + 1}
                      </span>
                      <p className="text-lg text-gray-900">{question}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recording Interface */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="text-center">
                  {isPreparation ? (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4">Preparation Time</h3>
                      <div className="text-6xl font-bold text-orange-600 font-mono mb-2">
                        {formatTime(preparationTime)}
                      </div>
                      <p className="text-gray-600">Make notes and prepare your response</p>
                    </div>
                  ) : (
                    <div className="mb-8">
                      <div className="text-6xl font-bold text-gray-900 font-mono mb-2">
                        {formatTime(timeElapsed)}
                      </div>
                      <p className="text-gray-600">
                        {isRecording ? 'Recording in progress...' : 'Ready to record'}
                      </p>
                    </div>
                  )}

                  {/* Recording Button */}
                  <div className="flex items-center justify-center gap-4 mb-6">
                    {!isPreparation && (
                      <>
                        <button
                          onClick={() => {
                            setTimeElapsed(0);
                            setIsRecording(false);
                          }}
                          className="p-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                        >
                          <RotateCcw className="w-6 h-6 text-gray-700" />
                        </button>

                        <button
                          onClick={() => setIsRecording(!isRecording)}
                          className={`p-8 rounded-full transition-all ${
                            isRecording 
                              ? 'bg-red-600 hover:bg-red-700 animate-pulse' 
                              : 'bg-orange-600 hover:bg-orange-700'
                          }`}
                        >
                          {isRecording ? (
                            <Pause className="w-10 h-10 text-white" />
                          ) : (
                            <Mic className="w-10 h-10 text-white" />
                          )}
                        </button>

                        {currentTopic.preparationTime && currentTopic.preparationTime > 0 && (
                          <button
                            onClick={startPreparation}
                            className="p-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                          >
                            <Clock className="w-6 h-6 text-gray-700" />
                          </button>
                        )}
                      </>
                    )}
                  </div>

                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    {isRecording && (
                      <>
                        <Circle className="w-3 h-3 text-red-600 fill-red-600 animate-pulse" />
                        <span>Recording</span>
                      </>
                    )}
                  </div>

                  {/* Note */}
                  <div className="mt-8 p-4 bg-gray-50 rounded-xl text-sm text-gray-600 italic">
                    Note: This is a practice interface. In a real test, your response would be recorded and evaluated by an examiner.
                  </div>
                </div>
              </div>
            </div>

            {/* Tips Sidebar */}
            <div className="space-y-6">
              
              {/* Tips */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-orange-600" />
                  Speaking Tips
                </h3>
                <ul className="space-y-3">
                  {currentTopic.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-5 h-5 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Time Guidelines */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-4">Time Guidelines</h3>
                <div className="space-y-3 text-sm">
                  {currentTopic.preparationTime && currentTopic.preparationTime > 0 && (
                    <div className="flex items-center justify-between">
                      <span>Preparation:</span>
                      <span className="font-semibold">{currentTopic.preparationTime}s</span>
                    </div>
                  )}
                  {currentTopic.speakingTime && (
                    <div className="flex items-center justify-between">
                      <span>Speaking:</span>
                      <span className="font-semibold">{currentTopic.speakingTime}s</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between pt-3 border-t border-white/20">
                    <span>Total Duration:</span>
                    <span className="font-semibold">
                      {currentTopic.part === 1 && '4-5 min'}
                      {currentTopic.part === 2 && '3-4 min'}
                      {currentTopic.part === 3 && '4-5 min'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Assessment Criteria */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold mb-4">Assessment Criteria</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-1.5"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Fluency & Coherence</p>
                      <p className="text-gray-600 text-xs">Speak smoothly without long pauses</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-1.5"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Lexical Resource</p>
                      <p className="text-gray-600 text-xs">Use varied vocabulary</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-1.5"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Grammatical Range</p>
                      <p className="text-gray-600 text-xs">Use complex sentences correctly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-1.5"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Pronunciation</p>
                      <p className="text-gray-600 text-xs">Clear and easy to understand</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
