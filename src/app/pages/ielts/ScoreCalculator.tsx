import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import {
  Calculator,
  ArrowLeft,
  TrendingUp,
  Award,
  AlertCircle,
  Headphones,
  BookOpen,
  PenTool,
  Mic
} from 'lucide-react';
import { useState } from 'react';
import { bandScores } from '@/app/data/ieltsData';
import { StandardButton } from '@/app/components/ui/standard-button';

export default function ScoreCalculator() {
  const [listeningScore, setListeningScore] = useState('');
  const [readingScore, setReadingScore] = useState('');
  const [writingScore, setWritingScore] = useState('');
  const [speakingScore, setSpeakingScore] = useState('');
  const [showResult, setShowResult] = useState(false);

  const calculateBand = (rawScore: string, type: 'listening' | 'reading') => {
    const score = parseInt(rawScore);
    if (isNaN(score) || score < 0 || score > 40) return null;
    
    const scoreTable = bandScores[type];
    for (const entry of scoreTable) {
      const [min, max] = entry.raw.split('-').map(Number);
      if (score >= min && score <= max) {
        return entry.band;
      }
    }
    return null;
  };

  const calculateOverallBand = () => {
    const listeningBand = calculateBand(listeningScore, 'listening');
    const readingBand = calculateBand(readingScore, 'reading');
    const writingBand = parseFloat(writingScore);
    const speakingBand = parseFloat(speakingScore);

    if (!listeningBand || !readingBand || isNaN(writingBand) || isNaN(speakingBand)) {
      return null;
    }

    const average = (parseFloat(listeningBand) + parseFloat(readingBand) + writingBand + speakingBand) / 4;
    
    // IELTS rounding rules
    const decimal = average - Math.floor(average);
    if (decimal < 0.25) return Math.floor(average).toFixed(1);
    if (decimal < 0.75) return (Math.floor(average) + 0.5).toFixed(1);
    return Math.ceil(average).toFixed(1);
  };

  const handleCalculate = () => {
    setShowResult(true);
  };

  const overallBand = showResult ? calculateOverallBand() : null;
  const listeningBand = showResult ? calculateBand(listeningScore, 'listening') : null;
  const readingBand = showResult ? calculateBand(readingScore, 'reading') : null;

  const getBandDescription = (band: string) => {
    const score = parseFloat(band);
    if (score >= 8.5) return { label: 'Very Good User', color: 'text-green-600' };
    if (score >= 7.5) return { label: 'Good User', color: 'text-green-600' };
    if (score >= 6.5) return { label: 'Competent User', color: 'text-blue-600' };
    if (score >= 5.5) return { label: 'Modest User', color: 'text-yellow-600' };
    return { label: 'Limited User', color: 'text-orange-600' };
  };

  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="mb-8">
            <Link to="/ielts" className="inline-flex items-center gap-2 text-[#4B6E48] hover:underline mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to IELTS Hub
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] rounded-2xl flex items-center justify-center">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Band Score Calculator</h1>
                <p className="text-gray-600">Estimate your IELTS band score</p>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-900">
                <p className="font-semibold mb-1">How to use:</p>
                <p>Enter your raw scores for Listening and Reading (out of 40), and estimated band scores for Writing and Speaking (0.0 to 9.0). The calculator will estimate your overall band score.</p>
              </div>
            </div>
          </div>

          {/* Calculator Form */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Enter Your Scores</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Listening */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                  <Headphones className="w-5 h-5 text-blue-600" />
                  Listening (Raw Score)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    max="40"
                    value={listeningScore}
                    onChange={(e) => setListeningScore(e.target.value)}
                    placeholder="0-40"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                    / 40
                  </span>
                </div>
                {listeningBand && showResult && (
                  <p className="mt-2 text-sm text-green-600 font-semibold">
                    Band Score: {listeningBand}
                  </p>
                )}
              </div>

              {/* Reading */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  Reading (Raw Score)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    max="40"
                    value={readingScore}
                    onChange={(e) => setReadingScore(e.target.value)}
                    placeholder="0-40"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                    / 40
                  </span>
                </div>
                {readingBand && showResult && (
                  <p className="mt-2 text-sm text-green-600 font-semibold">
                    Band Score: {readingBand}
                  </p>
                )}
              </div>

              {/* Writing */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                  <PenTool className="w-5 h-5 text-purple-600" />
                  Writing (Band Score)
                </label>
                <select
                  value={writingScore}
                  onChange={(e) => setWritingScore(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent"
                >
                  <option value="">Select band...</option>
                  {[9.0, 8.5, 8.0, 7.5, 7.0, 6.5, 6.0, 5.5, 5.0, 4.5, 4.0].map(score => (
                    <option key={score} value={score}>{score}</option>
                  ))}
                </select>
              </div>

              {/* Speaking */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                  <Mic className="w-5 h-5 text-orange-600" />
                  Speaking (Band Score)
                </label>
                <select
                  value={speakingScore}
                  onChange={(e) => setSpeakingScore(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent"
                >
                  <option value="">Select band...</option>
                  {[9.0, 8.5, 8.0, 7.5, 7.0, 6.5, 6.0, 5.5, 5.0, 4.5, 4.0].map(score => (
                    <option key={score} value={score}>{score}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-8">
              <StandardButton
                onClick={handleCalculate}
                disabled={!listeningScore || !readingScore || !writingScore || !speakingScore}
                className="w-full py-4 text-lg"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Overall Band Score
              </StandardButton>
            </div>
          </div>

          {/* Results */}
          {showResult && overallBand && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] rounded-2xl p-8 text-white mb-8"
            >
              <div className="text-center mb-8">
                <Award className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2">Your Estimated Overall Band Score</h2>
                <div className="text-7xl font-bold mb-4">{overallBand}</div>
                <p className={`text-2xl font-semibold ${getBandDescription(overallBand).color.replace('text-', 'text-white/')}`}>
                  {getBandDescription(overallBand).label}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Headphones className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm text-white/80 mb-1">Listening</p>
                  <p className="text-2xl font-bold">{listeningBand}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <BookOpen className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm text-white/80 mb-1">Reading</p>
                  <p className="text-2xl font-bold">{readingBand}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <PenTool className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm text-white/80 mb-1">Writing</p>
                  <p className="text-2xl font-bold">{writingScore}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Mic className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm text-white/80 mb-1">Speaking</p>
                  <p className="text-2xl font-bold">{speakingScore}</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl text-sm">
                <p className="font-semibold mb-2">Note:</p>
                <p className="text-white/90">
                  This is an estimated score based on raw scores and self-assessment. Your actual IELTS score may vary. 
                  Writing and Speaking scores should be evaluated by a certified examiner for accurate results.
                </p>
              </div>
            </motion.div>
          )}

          {/* Band Score Guide */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h3 className="text-2xl font-bold mb-6">Band Score Descriptions</h3>
            <div className="space-y-4">
              {[
                { band: '9.0', desc: 'Expert User', detail: 'Fully operational command of the language' },
                { band: '8.0-8.5', desc: 'Very Good User', detail: 'Fully operational with occasional inaccuracies' },
                { band: '7.0-7.5', desc: 'Good User', detail: 'Operational command, though with occasional inaccuracies' },
                { band: '6.0-6.5', desc: 'Competent User', detail: 'Effective command despite some inaccuracies' },
                { band: '5.0-5.5', desc: 'Modest User', detail: 'Partial command, handles overall meaning' },
                { band: '4.0-4.5', desc: 'Limited User', detail: 'Basic competence in familiar situations' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-16 h-16 bg-[#4B6E48]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-[#4B6E48]">{item.band}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.desc}</h4>
                    <p className="text-sm text-gray-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
