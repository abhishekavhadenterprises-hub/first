'use client';

import { Link } from 'react-router';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Footer } from '@/app/components/Footer';
import { 
  Clock, User, Search, ChevronRight, Bookmark, Share2, TrendingUp, Star, MapPin, Play, 
  ChevronLeft, ChevronRight as ChevronRightIcon, ArrowRight,
  GraduationCap, Plane, Globe, Sparkles, Wallet, Briefcase, BookOpen 
} from 'lucide-react';
import { blogPosts, blogCategories, getFeaturedPosts, getEditorPicks, getTrendingPosts } from '@/app/data/blogData';
import { NewsletterCTA } from '@/app/components/blog/NewsletterCTA';
import { TrendingCarousel } from '@/app/components/blog/TrendingCarousel';
import { useState, useEffect, useMemo, useRef } from 'react';
import { cn } from '@/lib/utils';

const POSTS_PER_PAGE = 6;

const categoryIcons: Record<string, React.ReactNode> = {
  'study-abroad-tips': <GraduationCap className="w-7 h-7" />,
  'visa-guides': <Plane className="w-7 h-7" />,
  'country-guides': <Globe className="w-7 h-7" />,
  'student-life': <Sparkles className="w-7 h-7" />,
  'financial-aid': <Wallet className="w-7 h-7" />,
  'career-advice': <Briefcase className="w-7 h-7" />,
};

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Hero logic
  const carouselItems = [
    { ix: '01', key: 'Study in Canada', loc: 'Toronto, Ontario', image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1600&q=90' },
    { ix: '02', key: 'Study in UK', loc: 'London, England', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=90' },
    { ix: '03', key: 'Study in Australia', loc: 'Sydney, New South Wales', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=90' },
    { ix: '04', key: 'Study in USA', loc: 'New York City, USA', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=90' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [carouselItems.length]);

  const featuredPosts = getFeaturedPosts();
  const editorPicks = getEditorPicks(4);
  const trendingPosts = getTrendingPosts(5);
  const mainFeatured = featuredPosts[0];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'all' || post.categorySlug === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FDFDFC] selection:bg-[#4EA62F] selection:text-white">
      {/* ── 01: HERO: THE JOURNAL ── */}
      <section className="relative w-full min-h-[90vh] pt-32 pb-24 lg:pt-40 lg:pb-24 overflow-hidden flex flex-col justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-full flex justify-center pointer-events-none select-none z-0">
          <h1 className="text-[clamp(4rem,10vw,12rem)] font-[1000] text-[#0F172A]/[0.02] tracking-tighter uppercase whitespace-nowrap font-['Outfit',sans-serif] leading-none">
            THE JOURNAL
          </h1>
        </div>

        <div className="container mx-auto px-6 relative z-10 space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 relative z-20">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-white shadow-sm border border-black/5 rounded-full">
                <Bookmark className="w-4 h-4 text-[#4EA62F]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Editorial Desk</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tighter uppercase leading-[0.9] font-['Outfit',sans-serif] whitespace-nowrap">
                Global <span className="text-[#4EA62F] italic font-light lowercase">Intelligence.</span>
              </h2>
            </div>
            <div className="w-full md:w-[400px]">
              <div className="relative group">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none opacity-100 text-black/60 group-focus-within:text-[#4EA62F] transition-colors duration-500">
                  <Search size={22} strokeWidth={2.5} />
                </div>
                <input
                  type="text"
                  placeholder="Search global topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-8 py-5 bg-white border border-black/10 rounded-full text-sm font-bold text-[#0F172A] placeholder:text-black/30 transition-all shadow-xl shadow-black/5 focus:outline-none focus:ring-4 focus:ring-[#4EA62F]/5"
                />
              </div>
            </div>
          </div>

          <div className="w-full h-[500px] lg:h-[600px] flex gap-4 lg:gap-6 group">
            {carouselItems.map((item, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={item.ix}
                  onMouseEnter={() => setCurrentIndex(index)}
                  className={`relative h-full rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] flex-shrink-0 border border-black/5 ${isActive ? 'flex-[5] shadow-2xl scale-[1.02]' : 'flex-[1] opacity-60 hover:opacity-100 scale-100'
                    }`}
                >
                  <img src={item.image} alt={item.key} className="absolute inset-0 w-full h-full object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-60'}`} />
                  <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                    <motion.div animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }} className="flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <span className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest text-white border border-white/20">{item.ix}</span>
                        <span className="text-sm font-black uppercase tracking-[0.3em] text-white/80">{item.loc}</span>
                      </div>
                      <h3 className="text-2xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none font-['Outfit',sans-serif]">{item.key}</h3>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 02: CATEGORY KINETIC CAROUSEL ── */}
      <section className="py-20 lg:py-32 relative overflow-hidden bg-white border-y border-black/5">
        <div className="container mx-auto px-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6"
          >
            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.5em] text-[#4EA62F]">
              <div className="w-2 h-2 rounded-full bg-[#4EA62F] animate-pulse" />
              Knowledge Clusters
            </div>
            <h2 className="text-4xl lg:text-6xl font-[1000] text-[#0F172A] tracking-tighter uppercase font-['Outfit',sans-serif] text-center">
              Browse by <span className="text-[#4EA62F] italic font-light lowercase">Sector.</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative group/rail max-w-[1600px] mx-auto">
          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20 pointer-events-none opacity-0 group-hover/rail:opacity-100 transition-opacity">
            <button
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-xl border border-black/5 flex items-center justify-center text-black shadow-xl pointer-events-auto hover:bg-[#4EA62F] hover:text-white transition-all scale-90 hover:scale-100"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20 pointer-events-none opacity-0 group-hover/rail:opacity-100 transition-opacity">
            <button
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-xl border border-black/5 flex items-center justify-center text-black shadow-xl pointer-events-auto hover:bg-[#4EA62F] hover:text-white transition-all scale-90 hover:scale-100"
            >
              <ChevronRightIcon size={24} />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 lg:gap-8 px-8 lg:px-20 overflow-x-auto no-scrollbar scroll-smooth pb-12 snap-x snap-mandatory"
          >
            {blogCategories.map((category, index) => {
              const postCount = blogPosts.filter(p => p.categorySlug === category.slug).length;
              const IconComponent = categoryIcons[category.slug] || <BookOpen className="w-7 h-7" />;
              
              return (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                  className="flex-shrink-0 w-[280px] lg:w-[340px] snap-start"
                >
                  <Link
                    to={`/resources/blog/category/${category.slug}`}
                    className="group relative flex flex-col h-[420px] bg-[#F8FAFC] rounded-[3rem] p-10 border border-black/5 overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(78,166,47,0.15)] hover:bg-white hover:-translate-y-3"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#4EA62F]/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#4EA62F]/[0.03] rounded-full transition-transform duration-1000 group-hover:scale-150" />

                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#4EA62F] shadow-xl shadow-black/[0.03] border border-black/5 mb-10 group-hover:bg-[#4EA62F] group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <motion.div
                        animate={{ 
                          y: [0, -4, 0],
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      >
                        {IconComponent}
                      </motion.div>
                    </div>

                    <div className="relative z-10 space-y-4">
                      <h3 className="text-xl lg:text-2xl font-black text-[#0F172A] tracking-tighter uppercase font-['Outfit',sans-serif] group-hover:text-[#4EA62F] transition-colors leading-[1.1]">
                        {category.name}
                      </h3>
                      <p className="text-black/40 font-bold leading-relaxed transition-colors text-base line-clamp-3">
                        {category.description}
                      </p>
                    </div>

                    <div className="mt-auto relative z-10 flex items-center justify-between pt-8 border-t border-black/[0.05]">
                      <div className="flex flex-col">
                        <span className="text-2xl font-black text-[#0F172A] leading-none group-hover:text-[#4EA62F] transition-colors">{postCount}</span>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/20">Articles</span>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-[#0F172A]/5 group-hover:bg-[#4EA62F] flex items-center justify-center transition-all group-hover:text-white group-hover:scale-110">
                        <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
               );
            })}
          </div>
        </div>
      </section>

      {/* ── 03: THE BRIEFING ── */}
      {mainFeatured && (
        <section className="relative w-full py-24 lg:py-32 border-b border-black/5">
          <div className="container mx-auto px-6 max-w-[1400px]">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24 gap-6">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-white shadow-sm border border-black/5 rounded-full">
                <Star size={14} className="text-[#4EA62F]" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/40">Knowledge Spotlight</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-[1000] text-[#0F172A] tracking-tighter uppercase leading-[0.85] font-['Outfit',sans-serif]">
                The <span className="text-[#4EA62F] italic font-light lowercase">Briefing.</span>
              </h2>
              <p className="text-black/50 text-lg lg:text-2xl font-medium tracking-tight mt-2 max-w-2xl leading-tight">
                Essential reads curated by our global desk to accelerate your international transition.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-8">
                <Link to={`/resources/blog/${mainFeatured.slug}`} className="group relative block w-full h-[500px] lg:h-[700px] rounded-[3.5rem] overflow-hidden bg-[#0F172A] shadow-2xl">
                  <img src={mainFeatured.featuredImage} alt={mainFeatured.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 w-full p-8 lg:p-12 space-y-6">
                    <h3 className="text-2xl lg:text-[3rem] font-black text-white leading-none tracking-tight font-['Outfit',sans-serif] group-hover:text-[#4EA62F] transition-colors">
                      {mainFeatured.title}
                    </h3>
                    <p className="text-white/70 text-base lg:text-lg font-medium max-w-2xl line-clamp-2">{mainFeatured.excerpt}</p>
                  </div>
                </Link>
              </div>
              <div className="lg:col-span-4 flex flex-col">
                <div className="flex flex-col border-t border-black/5">
                  {editorPicks.map((post) => (
                    <Link key={post.id} to={`/resources/blog/${post.slug}`} className="group relative flex items-center gap-6 py-8 border-b border-black/5 transition-colors duration-500">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-gray-100 shadow-inner">
                        <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4EA62F]">{post.category}</span>
                        <h4 className="text-lg lg:text-xl font-black text-[#0F172A] leading-tight group-hover:text-[#4EA62F] transition-colors">{post.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 04: THE COLLECTION ── */}
      <section className="py-24 px-6 relative border-b border-black/5">
        <div className="container mx-auto max-w-[1400px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6 relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-5xl lg:text-7xl font-[1000] text-[#0F172A] tracking-tighter uppercase font-['Outfit',sans-serif] leading-none">
                The <span className="text-[#4EA62F] italic font-light lowercase">Collection.</span>
              </h2>
              <p className="mt-6 text-black/50 font-bold text-lg lg:text-xl tracking-tighter max-w-xl">
                Explore our full catalog of research, frameworks, and global insights.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-white border border-black/5 rounded-full px-8 py-5 shadow-sm">
              <span className="text-[10px] font-[1000] uppercase tracking-widest text-[#0F172A]">Current Catalog</span>
              <div className="w-px h-6 bg-black/10" />
              <span className="text-sm font-black text-[#4EA62F]">
                {filteredPosts.length} <span className="text-black/40">Dossiers</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-16 relative z-10">
            <div className="space-y-16">
              {currentPosts.length === 0 ? (
                <div className="text-center py-40 bg-white rounded-[3rem] border border-black/5 border-dashed">
                  <p className="text-black/40 text-xl font-bold">No results matching your criteria.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {currentPosts.map((post, index) => (
                      <motion.article key={post.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} className="group flex flex-col bg-white rounded-[3rem] overflow-hidden border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] transition-all duration-700">
                        <div className="relative aspect-[16/10] overflow-hidden p-4">
                          <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                            <Link to={`/resources/blog/${post.slug}`} className="absolute inset-0 z-10" />
                            <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                          </div>
                          <div className="absolute top-10 left-10 z-20 px-4 py-2 rounded-full text-[9px] font-[1000] tracking-widest bg-white/90 backdrop-blur-md shadow-sm border border-black/5 text-[#0F172A] uppercase">
                            {post.category}
                          </div>
                        </div>
                        <div className="p-10 pt-4 flex flex-col flex-1">
                          <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-black/30 mb-6">
                            <div className="flex items-center gap-1.5 text-[#4EA62F]">
                              <Clock size={12} />
                              <span>{post.readTime}</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-black/10" />
                            <span>{post.date}</span>
                          </div>
                          <Link to={`/resources/blog/${post.slug}`} className="flex flex-col flex-1">
                            <h3 className="text-3xl font-[1000] text-[#0F172A] tracking-tighter mb-4 group-hover:text-[#4EA62F] transition-colors leading-tight font-['Outfit',sans-serif]">{post.title}</h3>
                            <p className="text-black/50 font-bold leading-snug line-clamp-2 text-base">{post.excerpt}</p>
                          </Link>
                          <div className="mt-8 pt-8 border-t border-black/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <img src={post.author.avatar} className="w-9 h-9 rounded-full border border-black/5 object-cover" alt="" />
                              <span className="text-[11px] font-[1000] uppercase text-black">{post.author.name}</span>
                            </div>
                            <Link to={`/resources/blog/${post.slug}`} className="w-11 h-11 rounded-full bg-black/5 flex items-center justify-center text-[#0F172A] group-hover:bg-[#4EA62F] group-hover:text-white transition-all transform group-hover:rotate-[-45deg]"><ChevronRightIcon size={18} /></Link>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-4 pt-16">
                      <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all disabled:opacity-20"><ChevronLeft size={20} /></button>
                      <div className="flex gap-3">
                        {Array.from({ length: totalPages }).map((_, i) => (
                          <button key={i} onClick={() => setCurrentPage(i + 1)} className={cn("w-14 h-14 rounded-full text-xs font-[1000] transition-all", currentPage === i + 1 ? "bg-[#0F172A] text-white shadow-xl scale-110" : "bg-white border border-black/5 text-black/40 hover:bg-black/5")}>{i + 1}</button>
                        ))}
                      </div>
                      <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all disabled:opacity-20"><ChevronRightIcon size={20} /></button>
                    </div>
                  )}
                </>
              )}
            </div>
            <aside className="hidden xl:block">
              <div className="sticky top-40 space-y-12">
                <TrendingCarousel trendingPosts={trendingPosts} />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── 05: SUBSCRIPTION ── */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-[1400px]">
          <NewsletterCTA />
        </div>
      </section>

      <Footer />
    </div>
  );
}
