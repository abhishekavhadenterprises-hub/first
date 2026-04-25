import { Link } from 'react-router';
import { TrendingUp, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { BlogPost } from '@/app/data/blogData';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

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

  if (trendingPosts.length === 0) return null;

  return (
    <div className="bg-white rounded-[2rem] border border-black/5 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.02)] sticky top-32 group flex flex-col">
      {/* Header */}
      <div className="px-8 py-6 border-b border-black/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#4EA62F]/10 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-[#4EA62F]" />
          </div>
          <h3 className="font-black text-xl text-[#0F172A] tracking-tight uppercase font-['Outfit',sans-serif]">
            Trending <span className="text-[#4EA62F] font-light italic lowercase">Now</span>
          </h3>
        </div>
      </div>

      {/* Carousel Content */}
      <div className="relative p-8 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(4px)' }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            <Link
              to={`/resources/blog/${trendingPosts[currentIndex].slug}`}
              className="block group/card"
            >
              {/* Featured Image */}
              <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 bg-black isolate">
                <img
                  src={trendingPosts[currentIndex].featuredImage}
                  alt={trendingPosts[currentIndex].title}
                  className="w-full h-full object-cover opacity-80 group-hover/card:scale-105 group-hover/card:opacity-100 transition-all duration-1000 ease-out"
                />

                {/* Visual Flair */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-white/50 text-[10px] font-black uppercase tracking-widest text-[#0F172A] z-10">
                  <Sparkles size={12} className="text-[#4EA62F]" />
                  <span>Top Story</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-black/40">
                  <span className="text-[#4EA62F] bg-[#4EA62F]/10 px-2.5 py-1 rounded-sm">
                    {trendingPosts[currentIndex].category}
                  </span>
                  {trendingPosts[currentIndex].views && (
                    <span className="flex items-center gap-1">
                      <Eye size={12} />
                      {(trendingPosts[currentIndex].views / 1000).toFixed(1)}k Views
                    </span>
                  )}
                </div>

                <h4 className="text-2xl font-black text-[#0F172A] leading-tight tracking-tight group-hover/card:text-[#4EA62F] transition-colors duration-300 font-['Outfit',sans-serif]">
                  {trendingPosts[currentIndex].title}
                </h4>

                <p className="text-sm font-medium text-black/50 line-clamp-2 leading-relaxed">
                  {trendingPosts[currentIndex].excerpt}
                </p>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={trendingPosts[currentIndex].author.avatar}
                      alt={trendingPosts[currentIndex].author.name}
                      className="w-7 h-7 rounded-full shadow-inner"
                    />
                    <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wide">
                      {trendingPosts[currentIndex].author.name}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 px-8 pb-8">
        {trendingPosts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex
                ? 'w-10 bg-[#4EA62F]'
                : 'w-2 bg-black/10 hover:bg-black/20'
              }`}
            aria-label={`Go to trending post ${index + 1}`}
          />
        ))}
      </div>

      {/* All Trending List */}
      <div className="px-8 py-6 bg-[#F8FAFC]">
        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 mb-4 flex items-center justify-between">
          <span>The Digest</span>
          <div className="w-12 h-px bg-black/10" />
        </h4>
        <div className="space-y-4">
          {trendingPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/resources/blog/${post.slug}`}
              className="group/item flex items-start gap-4"
              onMouseEnter={() => setCurrentIndex(index)}
            >
              <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 ${index === currentIndex
                  ? 'bg-[#0F172A] text-white rotate-12 scale-110 shadow-md'
                  : 'bg-white border border-black/5 text-black/40 group-hover/item:border-[#4EA62F]/30 group-hover/item:text-[#4EA62F]'
                }`}>
                {index + 1}
              </div>
              <div className="flex-1 min-w-0 pt-1">
                <p className={`text-sm font-bold leading-snug line-clamp-2 transition-colors duration-300 ${index === currentIndex ? 'text-[#4EA62F]' : 'text-[#0F172A] group-hover/item:text-[#4EA62F]'
                  }`}>
                  {post.title}
                </p>
                <div className="flex items-center gap-2 mt-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 text-[10px] font-black uppercase tracking-widest text-[#4EA62F]">
                  Read More <ArrowRight size={10} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
