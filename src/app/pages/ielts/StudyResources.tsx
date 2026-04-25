import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Footer } from '@/app/components/Footer';
import {
  FileText,
  ArrowLeft,
  Headphones,
  BookOpen,
  PenTool,
  Mic,
  Download,
  Play,
  Book,
  Target,
  Search,
  Filter
} from 'lucide-react';
import { useState } from 'react';
import { studyResources } from '@/app/data/ieltsData';

export default function StudyResources() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Resources', icon: FileText },
    { id: 'listening', label: 'Listening', icon: Headphones },
    { id: 'reading', label: 'Reading', icon: BookOpen },
    { id: 'writing', label: 'Writing', icon: PenTool },
    { id: 'speaking', label: 'Speaking', icon: Mic },
    { id: 'general', label: 'General', icon: Target },
  ];

  const filteredResources = studyResources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Play;
      case 'pdf': return FileText;
      case 'article': return Book;
      case 'practice': return Target;
      default: return FileText;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-700';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

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

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] rounded-2xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Study Resources</h1>
                <p className="text-gray-600">Guides, tips, and materials to boost your score</p>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search resources..."
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
                        selectedCategory === category.id
                          ? 'bg-[#4B6E48] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">{filteredResources.length}</span> {filteredResources.length === 1 ? 'resource' : 'resources'} found
            </p>
          </div>

          {/* Resources Grid */}
          {filteredResources.length === 0 ? (
            <div className="text-center py-20">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-[#4B6E48] hover:underline font-medium"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource, index) => {
                const TypeIcon = getTypeIcon(resource.type);
                return (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    {/* Header with gradient based on category */}
                    <div className={`p-6 ${
                      resource.category === 'listening' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                      resource.category === 'reading' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                      resource.category === 'writing' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                      resource.category === 'speaking' ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                      'bg-gradient-to-br from-gray-500 to-gray-600'
                    } text-white`}>
                      <div className="flex items-center justify-between mb-3">
                        <TypeIcon className="w-8 h-8" />
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)} bg-white/90`}>
                          {resource.difficulty}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                      {resource.duration && (
                        <p className="text-sm text-white/90">{resource.duration}</p>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {resource.description}
                      </p>

                      <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#4B6E48] text-white rounded-xl font-medium hover:bg-[#3d5a3a] transition-colors group-hover:shadow-lg">
                        <Download className="w-4 h-4" />
                        Access Resource
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Additional Resources Section */}
          <div className="mt-16 bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Need More Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Practice Tests</h3>
                <p className="text-white/90 text-sm mb-4">
                  Take full-length mock tests to assess your current level
                </p>
                <Link to="/ielts/mock-test" className="text-sm font-medium underline hover:no-underline">
                  Start Practice Test â†’
                </Link>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Score Calculator</h3>
                <p className="text-white/90 text-sm mb-4">
                  Estimate your band score based on practice results
                </p>
                <Link to="/ielts/score-calculator" className="text-sm font-medium underline hover:no-underline">
                  Calculate Score â†’
                </Link>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Track Progress</h3>
                <p className="text-white/90 text-sm mb-4">
                  Monitor your improvement over time with analytics
                </p>
                <Link to="/ielts/progress" className="text-sm font-medium underline hover:no-underline">
                  View Dashboard â†’
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
