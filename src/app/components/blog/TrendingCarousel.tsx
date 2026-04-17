import { Link } from 'react-router';
import { TrendingUp, ChevronUp, ChevronDown, Eye } from 'lucide-react';
import { BlogPost } from '@/app/data/blogData';
import { useState, useEffect } from 'react';

interface TrendingCarouselProps {
  trendingPosts: BlogPost[];
}

export function TrendingCarousel({ trendingPosts }: TrendingCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trendingPosts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [trendingPosts.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + trendingPosts.length) % trendingPosts.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % trendingPosts.length);
  };

  if (trendingPosts.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-sm sticky top-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#4B6E48] to-[#5a8456] px-6 py-4">
        <div className="flex items-center gap-2 text-white">
          <TrendingUp className="w-5 h-5" />
          <h3 className="font-bold text-lg">Trending Now</h3>
        </div>
      </div>

      {/* Carousel Content */}
      <div className="relative">
        {/* Current Post */}
        <div className="p-6">
          <Link
            to={`/resources/blog/${trendingPosts[currentIndex].slug}`}
            className="group block"
          >
            {/* Featured Image */}
            <div className="relative h-48 rounded-xl overflow-hidden mb-4">
              <img
                src={trendingPosts[currentIndex].featuredImage}
                alt={trendingPosts[currentIndex].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Trending Badge */}
              <div className="absolute top-3 left-3 px-3 py-1 bg-[#4B6E48] text-white rounded-full text-xs font-medium flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                #{currentIndex + 1}
              </div>

              {/* Views Badge */}
              {trendingPosts[currentIndex].views && (
                <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full text-xs font-medium flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {trendingPosts[currentIndex].views.toLocaleString()}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                {trendingPosts[currentIndex].category}
              </span>
              
              <h4 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-[#4B6E48] transition-colors leading-snug">
                {trendingPosts[currentIndex].title}
              </h4>
              
              <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                {trendingPosts[currentIndex].excerpt}
              </p>

              <div className="flex items-center gap-3 text-xs text-gray-500 pt-2">
                <div className="flex items-center gap-1.5">
                  <img
                    src={trendingPosts[currentIndex].author.avatar}
                    alt={trendingPosts[currentIndex].author.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span>{trendingPosts[currentIndex].author.name}</span>
                </div>
                <span>•</span>
                <span>{trendingPosts[currentIndex].readTime}</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          <button
            onClick={handlePrevious}
            className="w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-[#4B6E48] hover:bg-[#4B6E48] hover:text-white transition-all shadow-md bg-[#000000]"
            aria-label="Previous trending post"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-[#4B6E48] hover:bg-[#4B6E48] hover:text-white transition-all shadow-md bg-[#000000]"
            aria-label="Next trending post"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-1.5 px-6 pb-6">
        {trendingPosts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentIndex 
                ? 'w-8 bg-[#4B6E48]' 
                : 'w-1.5 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to trending post ${index + 1}`}
          />
        ))}
      </div>

      {/* All Trending List */}
      <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
        <h4 className="text-sm font-bold text-gray-900 mb-3">All Trending</h4>
        <div className="space-y-2">
          {trendingPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/resources/blog/${post.slug}`}
              className={`flex items-center gap-3 p-2 rounded-lg transition-all group ${
                index === currentIndex 
                  ? 'bg-[#4B6E48]/10 border border-[#4B6E48]/30' 
                  : 'hover:bg-white'
              }`}
            >
              <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                index === currentIndex
                  ? 'bg-[#4B6E48] text-white'
                  : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'
              }`}>
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-900 line-clamp-1 group-hover:text-[#4B6E48] transition-colors">
                  {post.title}
                </p>
              </div>
              {post.views && (
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Eye className="w-3 h-3" />
                  <span className="hidden sm:inline">{(post.views / 1000).toFixed(1)}k</span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
