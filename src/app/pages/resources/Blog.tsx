import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { Clock, User, Search, ChevronRight, Bookmark, Share2, TrendingUp, Star, MapPin, Play } from 'lucide-react';
import { blogPosts, blogCategories, getFeaturedPosts, getEditorPicks, getTrendingPosts } from '@/app/data/blogData';
import { NewsletterCTA } from '@/app/components/blog/NewsletterCTA';
import { TrendingCarousel } from '@/app/components/blog/TrendingCarousel';
import { useState, useEffect } from 'react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Carousel state
  const [carouselItems, setCarouselItems] = useState([
    {
      ix: '01',
      key: 'Study in Canada',
      loc: 'Toronto, Ontario',
      left: -25,
      image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1600&q=90',
    },
    {
      ix: '02',
      key: 'Study in UK',
      loc: 'London, England',
      left: 25,
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=90',
    },
    {
      ix: '03',
      key: 'Study in Australia',
      loc: 'Sydney, New South Wales',
      left: 75,
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=90',
    },
    {
      ix: '04',
      key: 'Study in USA',
      loc: 'New York City, USA',
      left: 125,
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=90',
    },
  ]);

  useEffect(() => {
    const next = () => {
      setCarouselItems((items) =>
        items.map((item, index) => ({
          ...item,
          left: item.left - 50,
        }))
      );

      setTimeout(() => {
        setCarouselItems((items) => {
          const [first, ...rest] = items;
          return [...rest, { ...first, left: 125 }];
        });
      }, 2200);
    };

    const interval = setInterval(next, 2700);
    return () => clearInterval(interval);
  }, []);

  const currentIndex = carouselItems.findIndex((item) => item.left === 25);

  const featuredPosts = getFeaturedPosts();
  const editorPicks = getEditorPicks(4);
  const trendingPosts = getTrendingPosts(5);
  const mainFeatured = featuredPosts[0];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.categorySlug === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200',
    green: 'bg-green-100 text-green-800 border-green-200 hover:bg-green-200',
    purple: 'bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200',
    amber: 'bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200',
    emerald: 'bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200',
    red: 'bg-red-100 text-red-800 border-red-200 hover:bg-red-200'
  };

  return (
    <>
      <Navigation />

      {/* Hero Carousel Section */}
      <section className="study-country-hero">
        {/* Background Images */}
        {carouselItems.map((item) => (
          <div
            key={item.image}
            className="hero-background-image"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.45)), url('${item.image}')`,
              opacity: item.left === 25 ? 1 : 0,
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        ))}

        {/* Hero Content Container */}
        <div className="hero-content-wrapper">
          {/* Location Cards */}
          {carouselItems.map((item, index) => (
            <div
              key={item.ix}
              className="hero-card"
              style={{
                left: `${item.left}%`,
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div className="hero-card-content">
                <motion.h2
                  className={`hero-title ${item.left === 25 ? 'hero-title-active' : 'hero-title-inactive'
                    }`}
                  style={{
                    textShadow: '2px 2px 20px rgba(0,0,0,0.8)',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {item.key}
                </motion.h2>
                <div className="hero-subtitle-wrapper">
                  <span
                    className={`hero-subtitle ${item.left === 25 ? 'hero-subtitle-active' : 'hero-subtitle-inactive'
                      }`}
                    style={{
                      textShadow: '1px 1px 10px rgba(0,0,0,0.6)',
                      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    {item.loc}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Top Navigation - Hidden */}
        <header className="fixed top-24 inset-x-0 z-50 flex h-24">
          <div className="w-2/5 flex items-center justify-end pr-10">
            <div className="hidden items-center gap-2">
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 text-white border-b-2 border-white bg-transparent placeholder:text-white/60 focus:outline-none w-64"
              />
              <Search className="w-6 h-6 text-white" />
            </div>
          </div>
        </header>

        {/* Bottom Progress Bar - Hidden */}
        <div className="fixed bottom-0 inset-x-0 h-20 flex justify-between items-center z-50">
          <div className="hidden items-center px-10 gap-4">
            {/* Number Counter */}
            <div className="w-10 h-10 relative overflow-hidden">
              {carouselItems.map((item, index) => (
                <div
                  key={item.ix}
                  className="absolute w-10 h-10 text-2xl left-0 flex items-center justify-center text-white font-bold transition-all duration-[2200ms]"
                  style={{ top: `${(index - 1) * 40}px` }}
                >
                  <span>{item.ix}</span>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="h-2 w-48 bg-white/30 mr-3 relative rounded-sm">
              <div
                className="absolute inset-y-0 w-4 bg-white rounded-sm transition-all duration-[2200ms]"
                style={{ left: `${currentIndex * 48}px` }}
              />
            </div>
            <div className="text-2xl text-white font-bold">04</div>
          </div>
        </div>

        {/* Comprehensive Mobile-First Responsive Styles */}
        <style>{`
          /* ============================================
             HERO CONTAINER
             Desktop: full-width hero with max-width 1200-1400px centered
             Tablet: full width with 32px side padding
             Mobile: 16-20px padding
             Prevent excessive empty space on large screens
             Avoid text touching screen edges on mobile
             Maintain consistent spacing with navigation and next section
             Ensure clean edge-to-edge background behaviour
             ============================================ */
          .study-country-hero {
            position: relative;
            width: 100vw;
            overflow: hidden;
          }

          /* Mobile (≤480px): 320-420px height, 16px padding */
          @media (max-width: 480px) {
            .study-country-hero {
              height: 360px;
            }
          }

          /* Mobile Large (481-767px): 380px height, 20px padding */
          @media (min-width: 481px) and (max-width: 767px) {
            .study-country-hero {
              height: 400px;
            }
          }

          /* Tablet (768-1199px): 420-520px height, 32px padding */
          @media (min-width: 768px) and (max-width: 1199px) {
            .study-country-hero {
              height: 480px;
            }
          }

          /* Desktop (≥1200px): 520-640px height */
          @media (min-width: 1200px) {
            .study-country-hero {
              height: 580px;
            }
          }

          /* ============================================
             BACKGROUND IMAGE BEHAVIOUR
             Maintain center crop focus on city skyline and river
             Prevent image distortion or stretching
             Keep dark overlay for text readability
             Ensure image remains visually clear on small screens
             ============================================ */
          .hero-background-image {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            transition: opacity 2500ms ease-out;
          }

          /* ============================================
             HERO CONTENT WRAPPER
             Desktop: max-width 1400px centered
             Prevent excessive empty space
             ============================================ */
          .hero-content-wrapper {
            position: relative;
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
            height: 100%;
          }

          /* Mobile: 16px padding to avoid text touching edges */
          @media (max-width: 480px) {
            .hero-content-wrapper {
              padding: 0 16px;
            }
          }

          /* Mobile Large: 20px padding */
          @media (min-width: 481px) and (max-width: 767px) {
            .hero-content-wrapper {
              padding: 0 20px;
            }
          }

          /* Tablet: 32px padding */
          @media (min-width: 768px) and (max-width: 1199px) {
            .hero-content-wrapper {
              padding: 0 32px;
            }
          }

          /* Desktop: centered with max-width */
          @media (min-width: 1200px) {
            .hero-content-wrapper {
              padding: 0 48px;
            }
          }

          /* ============================================
             HERO CARD POSITIONING
             Vertical Alignment: Center title and subtitle vertically within hero
             ============================================ */
          .hero-card {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            transition: all 2500ms;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .hero-card-content {
            text-align: center;
            width: 100%;
          }

          /* ============================================
             HERO TITLE - "Study in UK / Study in Canada"
             Desktop: 48-64px
             Tablet: 36-44px
             Mobile: 26-32px
             Line height: 1.1-1.2
             Keep title centered horizontally
             Prevent awkward word breaks
             Ensure strong contrast over background
             ============================================ */
          .hero-title {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            font-weight: 700;
            transition: all 2500ms;
            margin: 0;
            padding: 0;
            white-space: nowrap;
          }

          /* Mobile (≤480px): 28px (within 26-32px) */
          @media (max-width: 480px) {
            .hero-title {
              font-size: 28px;
              line-height: 1.2;
              margin-bottom: 10px;
            }
          }

          /* Mobile Large (481-767px): 34px */
          @media (min-width: 481px) and (max-width: 767px) {
            .hero-title {
              font-size: 34px;
              line-height: 1.15;
              margin-bottom: 12px;
            }
          }

          /* Tablet (768-1199px): 40px (within 36-44px) */
          @media (min-width: 768px) and (max-width: 1199px) {
            .hero-title {
              font-size: 40px;
              line-height: 1.15;
              margin-bottom: 14px;
            }
          }

          /* Desktop (≥1200px): 56px (within 48-64px) */
          @media (min-width: 1200px) {
            .hero-title {
              font-size: 56px;
              line-height: 1.1;
              margin-bottom: 16px;
            }
          }

          .hero-title-active {
            color: #FFFFFF;
            opacity: 1;
          }

          .hero-title-inactive {
            color: rgba(255, 255, 255, 0.3);
            opacity: 0;
          }

          /* ============================================
             LOCATION SUBTITLE (City / Country)
             Desktop: 18-20px
             Tablet: 16-18px
             Mobile: 14-16px
             Reduce line width for readability
             Maintain clear spacing below title (8-12px)
             Ensure consistent color contrast over overlay
             Title → subtitle: 12-16px (handled via margin-bottom on title)
             ============================================ */
          .hero-subtitle-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;
          }

          .hero-subtitle {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            font-weight: 400;
            transition: opacity 2500ms;
            max-width: 500px;
            display: inline-block;
          }

          /* Mobile (≤480px): 15px (within 14-16px) */
          @media (max-width: 480px) {
            .hero-subtitle {
              font-size: 15px;
              line-height: 1.4;
            }
          }

          /* Mobile Large (481-767px): 16px */
          @media (min-width: 481px) and (max-width: 767px) {
            .hero-subtitle {
              font-size: 16px;
              line-height: 1.4;
            }
          }

          /* Tablet (768-1199px): 17px (within 16-18px) */
          @media (min-width: 768px) and (max-width: 1199px) {
            .hero-subtitle {
              font-size: 17px;
              line-height: 1.3;
            }
          }

          /* Desktop (≥1200px): 19px (within 18-20px) */
          @media (min-width: 1200px) {
            .hero-subtitle {
              font-size: 19px;
              line-height: 1.3;
            }
          }

          .hero-subtitle-active {
            color: #FFFFFF;
            opacity: 1;
          }

          .hero-subtitle-inactive {
            color: #FFFFFF;
            opacity: 0;
          }

          /* ============================================
             OVERALL BEHAVIOR
             Layout should feel immersive and premium
             Smooth scaling from desktop → tablet → mobile
             No text overflow, clipping, or misalignment
             Maintain strong visual hierarchy and readability
             ============================================ */
          
          /* Smooth transitions */
          .hero-card {
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }

          /* Prevent text selection during animation */
          .hero-title,
          .hero-subtitle {
            user-select: none;
            -webkit-user-select: none;
          }

          /* Ensure proper stacking */
          .hero-background-image {
            z-index: 1;
          }

          .hero-content-wrapper {
            z-index: 2;
            position: relative;
          }
        `}</style>
      </section>

      {/* Featured Section */}
      {mainFeatured && (
        <section className="featured-section">
          <div className="featured-container">
            {/* Section Heading */}
            <div className="featured-section-heading">
              <Star className="featured-icon" />
              <h2 className="featured-section-title">Featured Article</h2>
            </div>

            <div className="featured-grid">
              {/* Main Featured Article */}
              <Link
                to={`/resources/blog/${mainFeatured.slug}`}
                className="featured-article-card"
              >
                <div className="featured-article-image-wrapper">
                  <img
                    src={mainFeatured.featuredImage}
                    alt={mainFeatured.title}
                    loading="eager"
                    className="featured-article-image"
                  />
                  <div className="featured-article-overlay" />
                  <div className="featured-badge">
                    <TrendingUp className="w-4 h-4" />
                    Featured
                  </div>
                </div>

                <div className="featured-article-content">
                  <h3 className="featured-article-title">
                    {mainFeatured.title}
                  </h3>
                  <p className="featured-article-description">
                    {mainFeatured.excerpt}
                  </p>

                  <div className="featured-article-meta">
                    <div className="featured-article-author">
                      <img
                        src={mainFeatured.author.avatar}
                        alt={mainFeatured.author.name}
                        className="featured-author-avatar"
                      />
                      <span className="featured-author-name">{mainFeatured.author.name}</span>
                    </div>
                    <div className="featured-article-readtime">
                      <Clock className="w-4 h-4" />
                      <span>{mainFeatured.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Editor Picks */}
              <div className="editor-picks-wrapper">
                <div className="editor-picks-heading">
                  <Star className="editor-picks-icon" />
                  <h3 className="editor-picks-title">Editor's Picks</h3>
                </div>

                <div className="editor-picks-list">
                  {editorPicks.map((post) => {
                    const category = blogCategories.find(c => c.slug === post.categorySlug);
                    return (
                      <Link
                        key={post.id}
                        to={`/resources/blog/${post.slug}`}
                        className="editor-pick-card"
                      >
                        <div className="editor-pick-thumbnail">
                          <img
                            src="https://images.unsplash.com/photo-1718327453695-4d32b94c90a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGxpYnJhcnl8ZW58MXx8fHwxNzcwNjY3ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                            alt={post.title}
                            loading="lazy"
                            className="editor-pick-image"
                          />
                        </div>
                        <div className="editor-pick-content">
                          {category && (
                            <div className={`editor-pick-category ${colorClasses[category.color as keyof typeof colorClasses]
                              }`}>
                              <span>{category.icon}</span>
                              {post.category}
                            </div>
                          )}
                          <h4 className="editor-pick-title">
                            {post.title}
                          </h4>
                          <div className="editor-pick-meta">
                            <span>{post.author.name}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Comprehensive Responsive Styles */}
          <style>{`
            /* ============================================
               1. SECTION CONTAINER
               Desktop: max-width 1200-1400px, centered
               Tablet: full width with 32px side padding
               Mobile: 16-20px side padding
               Prevent excessive empty space on large screens
               Avoid horizontal scroll
               ============================================ */
            .featured-section {
              background-color: #FFFFFF;
            }

            .featured-container {
              width: 100%;
              margin: 0 auto;
            }

            /* Mobile (≤480px): 16px padding, 40-48px vertical */
            @media (max-width: 480px) {
              .featured-section {
                padding: 40px 16px;
              }
              .featured-container {
                max-width: 100%;
              }
            }

            /* Mobile Large (481-767px): 20px padding, 48px vertical */
            @media (min-width: 481px) and (max-width: 767px) {
              .featured-section {
                padding: 48px 20px;
              }
              .featured-container {
                max-width: 100%;
              }
            }

            /* Tablet (768-1199px): 32px padding, 56px vertical */
            @media (min-width: 768px) and (max-width: 1199px) {
              .featured-section {
                padding: 56px 32px;
              }
              .featured-container {
                max-width: 100%;
              }
            }

            /* Desktop (≥1200px): centered with max-width 1280px (within 1200-1400px), 64-80px vertical */
            @media (min-width: 1200px) {
              .featured-section {
                padding: 72px 48px;
              }
              .featured-container {
                max-width: 1280px;
              }
            }

            /* ============================================
               SECTION HEADING ("Featured Article")
               Desktop: 22-24px
               Mobile: 18-20px
               Maintain consistent icon alignment
               Keep spacing below heading (16-24px)
               ============================================ */
            .featured-section-heading {
              display: flex;
              align-items: center;
              gap: 8px;
            }

            .featured-icon {
              color: #4B6E48;
              fill: #4B6E48;
            }

            .featured-section-title {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              font-weight: 700;
              color: #111827;
            }

            /* Mobile */
            @media (max-width: 767px) {
              .featured-section-heading {
                margin-bottom: 20px;
              }
              .featured-icon {
                width: 20px;
                height: 20px;
              }
              .featured-section-title {
                font-size: 20px;
              }
            }

            /* Tablet */
            @media (min-width: 768px) and (max-width: 1199px) {
              .featured-section-heading {
                margin-bottom: 24px;
              }
              .featured-icon {
                width: 22px;
                height: 22px;
              }
              .featured-section-title {
                font-size: 22px;
              }
            }

            /* Desktop */
            @media (min-width: 1200px) {
              .featured-section-heading {
                margin-bottom: 32px;
              }
              .featured-icon {
                width: 24px;
                height: 24px;
              }
              .featured-section-title {
                font-size: 24px;
              }
            }

            /* ============================================
               2. LAYOUT STRUCTURE
               Desktop: Two-column (60-65% / 35-40%)
               Tablet: Maintain ratio or stack
               Mobile: Stack vertically with 24-32px spacing
               ============================================ */
            .featured-grid {
              display: grid;
              gap: 32px;
            }

            /* Mobile: Stacked layout */
            @media (max-width: 767px) {
              .featured-grid {
                grid-template-columns: 1fr;
                gap: 32px;
              }
            }

            /* Tablet: Stacked or two-column */
            @media (min-width: 768px) and (max-width: 1023px) {
              .featured-grid {
                grid-template-columns: 1fr;
                gap: 32px;
              }
            }

            /* Desktop: Two-column 60/40 */
            @media (min-width: 1024px) {
              .featured-grid {
                grid-template-columns: 1.5fr 1fr;
                gap: 32px;
                align-items: start;
              }
            }

            /* ============================================
               3. FEATURED ARTICLE CARD
               Consistent card padding: Desktop 24-32px, Mobile 16-20px
               Rounded corners and shadow consistent
               Prevent content crowding on mobile
               ============================================ */
            .featured-article-card {
              position: relative;
              background-color: #FFFFFF;
              border: 2px solid #E5E7EB;
              border-radius: 16px;
              overflow: hidden;
              transition: all 300ms ease;
              display: block;
            }

            .featured-article-card:hover {
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
              border-color: #D1D5DB;
            }

            /* ============================================
               IMAGE BEHAVIOR
               Maintain proper aspect ratio (16:9 or consistent)
               Prevent image stretching
               Ensure image fills container width
               Maintain top crop focus
               ============================================ */
            .featured-article-image-wrapper {
              position: relative;
              width: 100%;
              overflow: hidden;
            }

            /* Mobile: 220px height */
            @media (max-width: 767px) {
              .featured-article-image-wrapper {
                height: 220px;
              }
            }

            /* Tablet: 280px height */
            @media (min-width: 768px) and (max-width: 1023px) {
              .featured-article-image-wrapper {
                height: 280px;
              }
            }

            /* Desktop: 320px height (16:9 ratio) */
            @media (min-width: 1024px) {
              .featured-article-image-wrapper {
                height: 320px;
              }
            }

            .featured-article-image {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center top;
              transition: transform 500ms ease;
            }

            .featured-article-card:hover .featured-article-image {
              transform: scale(1.1);
            }

            .featured-article-overlay {
              position: absolute;
              inset: 0;
              background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
            }

            .featured-badge {
              position: absolute;
              top: 16px;
              left: 16px;
              padding: 6px 12px;
              background-color: #4B6E48;
              color: #FFFFFF;
              border-radius: 9999px;
              font-size: 14px;
              font-weight: 500;
              display: flex;
              align-items: center;
              gap: 6px;
            }

            /* ============================================
               FEATURED ARTICLE CONTENT
               Card padding: Desktop 24-32px, Mobile 16-20px
               ============================================ */
            .featured-article-content {
              background-color: transparent;
            }

            /* Mobile: 16px padding */
            @media (max-width: 480px) {
              .featured-article-content {
                padding: 20px 16px;
              }
            }

            /* Mobile Large: 20px padding */
            @media (min-width: 481px) and (max-width: 767px) {
              .featured-article-content {
                padding: 24px 20px;
              }
            }

            /* Tablet: 24px padding */
            @media (min-width: 768px) and (max-width: 1023px) {
              .featured-article-content {
                padding: 28px 24px;
              }
            }

            /* Desktop: 32px padding */
            @media (min-width: 1024px) {
              .featured-article-content {
                padding: 32px;
              }
            }

            /* ============================================
               4. FEATURED ARTICLE TITLE
               Desktop: 28-32px
               Tablet: 24-28px
               Mobile: 20-24px
               Line height: 1.2-1.3
               Prevent awkward line breaks
               Maintain readable line width
               ============================================ */
            .featured-article-title {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              font-weight: 700;
              color: #000000;
              transition: color 300ms ease;
            }

            .featured-article-card:hover .featured-article-title {
              color: #4B6E48;
            }

            /* Mobile: 22px (within 20-24px) */
            @media (max-width: 480px) {
              .featured-article-title {
                font-size: 22px;
                line-height: 1.3;
                margin-bottom: 12px;
              }
            }

            /* Mobile Large: 24px */
            @media (min-width: 481px) and (max-width: 767px) {
              .featured-article-title {
                font-size: 24px;
                line-height: 1.25;
                margin-bottom: 14px;
              }
            }

            /* Tablet: 26px (within 24-28px) */
            @media (min-width: 768px) and (max-width: 1199px) {
              .featured-article-title {
                font-size: 26px;
                line-height: 1.25;
                margin-bottom: 16px;
              }
            }

            /* Desktop: 30px (within 28-32px) */
            @media (min-width: 1200px) {
              .featured-article-title {
                font-size: 30px;
                line-height: 1.2;
                margin-bottom: 16px;
              }
            }

            /* ============================================
               5. DESCRIPTION TEXT
               Desktop: 16-18px
               Mobile: 14-16px
               Limit text width for readability
               Maintain good contrast
               Prevent long unreadable lines
               ============================================ */
            .featured-article-description {
              color: #6B7280;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              overflow: hidden;
              line-height: 1.6;
            }

            /* Mobile: 15px (within 14-16px) */
            @media (max-width: 767px) {
              .featured-article-description {
                font-size: 15px;
                margin-bottom: 16px;
              }
            }

            /* Tablet: 16px */
            @media (min-width: 768px) and (max-width: 1199px) {
              .featured-article-description {
                font-size: 16px;
                margin-bottom: 20px;
              }
            }

            /* Desktop: 17px (within 16-18px) */
            @media (min-width: 1200px) {
              .featured-article-description {
                font-size: 17px;
                margin-bottom: 24px;
              }
            }

            /* ============================================
               6. AUTHOR + METADATA ROW
               Keep author avatar, name, and read time aligned
               Horizontal layout on desktop
               Stack or wrap neatly on mobile
               Consistent spacing (8-12px gap)
               ============================================ */
            .featured-article-meta {
              display: flex;
              align-items: center;
              gap: 12px;
              flex-wrap: wrap;
            }

            .featured-article-author {
              display: flex;
              align-items: center;
              gap: 8px;
            }

            .featured-author-avatar {
              width: 32px;
              height: 32px;
              border-radius: 9999px;
              object-fit: cover;
            }

            .featured-author-name {
              font-size: 14px;
              color: #6B7280;
            }

            .featured-article-readtime {
              display: flex;
              align-items: center;
              gap: 6px;
              font-size: 14px;
              color: #6B7280;
            }

            /* Mobile: Stack if needed */
            @media (max-width: 480px) {
              .featured-article-meta {
                gap: 10px;
              }
              .featured-author-avatar {
                width: 28px;
                height: 28px;
              }
              .featured-author-name,
              .featured-article-readtime {
                font-size: 13px;
              }
            }

            /* ============================================
               7. EDITOR'S PICKS LIST
               Consistent card height and spacing
               Desktop: vertical list with equal spacing (16-20px gap)
               Mobile: Full-width cards, maintain image + text alignment
               Prevent text overflow
               Fixed size thumbnails, no stretching
               ============================================ */
            .editor-picks-wrapper {
              display: flex;
              flex-direction: column;
            }

            .editor-picks-heading {
              display: flex;
              align-items: center;
              gap: 8px;
            }

            .editor-picks-icon {
              color: #F59E0B;
              fill: #F59E0B;
            }

            .editor-picks-title {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              font-weight: 700;
              color: #111827;
            }

            /* Mobile */
            @media (max-width: 767px) {
              .editor-picks-heading {
                margin-bottom: 16px;
              }
              .editor-picks-icon {
                width: 18px;
                height: 18px;
              }
              .editor-picks-title {
                font-size: 18px;
              }
            }

            /* Tablet & Desktop */
            @media (min-width: 768px) {
              .editor-picks-heading {
                margin-bottom: 20px;
              }
              .editor-picks-icon {
                width: 20px;
                height: 20px;
              }
              .editor-picks-title {
                font-size: 20px;
              }
            }

            .editor-picks-list {
              display: flex;
              flex-direction: column;
            }

            /* Mobile: 16px gap */
            @media (max-width: 767px) {
              .editor-picks-list {
                gap: 16px;
              }
            }

            /* Tablet & Desktop: 18px gap */
            @media (min-width: 768px) {
              .editor-picks-list {
                gap: 18px;
              }
            }

            /* ============================================
               EDITOR PICK CARD
               ============================================ */
            .editor-pick-card {
              display: flex;
              gap: 16px;
              background-color: #FFFFFF;
              border: 1px solid #E5E7EB;
              border-radius: 12px;
              padding: 16px;
              transition: all 300ms ease;
            }

            .editor-pick-card:hover {
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
              border-color: #D1D5DB;
            }

            /* ============================================
               THUMBNAIL IMAGES
               Fixed size thumbnails
               No stretching
               Maintain alignment with text
               ============================================ */
            .editor-pick-thumbnail {
              flex-shrink: 0;
              border-radius: 8px;
              overflow: hidden;
            }

            /* Mobile: 80x80 thumbnail */
            @media (max-width: 480px) {
              .editor-pick-thumbnail {
                width: 80px;
                height: 80px;
              }
            }

            /* Tablet & Desktop: 100x100 thumbnail */
            @media (min-width: 481px) {
              .editor-pick-thumbnail {
                width: 100px;
                height: 100px;
              }
            }

            .editor-pick-image {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 300ms ease;
            }

            .editor-pick-card:hover .editor-pick-image {
              transform: scale(1.1);
            }

            .editor-pick-content {
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
              gap: 8px;
              min-width: 0;
            }

            .editor-pick-category {
              display: inline-flex;
              align-items: center;
              gap: 4px;
              padding: 4px 8px;
              border-radius: 9999px;
              font-size: 11px;
              font-weight: 500;
              border: 1px solid;
              width: fit-content;
            }

            .editor-pick-title {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              font-weight: 700;
              color: #111827;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              transition: color 300ms ease;
            }

            .editor-pick-card:hover .editor-pick-title {
              color: #4B6E48;
            }

            /* Mobile */
            @media (max-width: 480px) {
              .editor-pick-title {
                font-size: 14px;
                line-height: 1.4;
              }
            }

            /* Tablet & Desktop */
            @media (min-width: 481px) {
              .editor-pick-title {
                font-size: 15px;
                line-height: 1.4;
              }
            }

            .editor-pick-meta {
              display: flex;
              align-items: center;
              gap: 8px;
              font-size: 12px;
              color: #6B7280;
            }

            /* ============================================
               10. OVERALL BEHAVIOR
               Layout should feel balanced and clean
               Smooth scaling from desktop → tablet → mobile
               No text overflow
               No image distortion
               No alignment shifts
               Maintain premium and structured layout
               ============================================ */

            /* Prevent text overflow */
            .featured-article-title,
            .featured-article-description,
            .editor-pick-title {
              word-wrap: break-word;
              overflow-wrap: break-word;
            }

            /* Smooth transitions */
            * {
              box-sizing: border-box;
            }
          `}</style>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Results count */}
          <div className="mb-8 text-gray-900">
            Showing <span className="font-semibold text-gray-900">{filteredPosts.length}</span> {filteredPosts.length === 1 ? 'article' : 'articles'}
            {searchQuery && <span> for "<span className="font-semibold text-gray-900">{searchQuery}</span>"</span>}
          </div>

          {/* 2-Column Layout: Blog Grid + Trending Carousel */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
            {/* Left: Articles Grid */}
            <div>
              {filteredPosts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-lg mb-4">No articles found.</p>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, index) => {
                    const category = blogCategories.find(c => c.slug === post.categorySlug);

                    return (
                      <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                      >
                        {/* Featured Image */}
                        <div className="relative h-56 overflow-hidden bg-gray-200">
                          <Link to={`/resources/blog/${post.slug}`}>
                            <img
                              src="https://images.unsplash.com/photo-1648301033733-44554c74ec50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzA3MjIyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </Link>
                          {category && (
                            <Link
                              to={`/resources/blog/category/${post.categorySlug}`}
                              className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium border ${colorClasses[category.color as keyof typeof colorClasses]} flex items-center gap-1.5`}
                            >
                              <span className="text-base">{category.icon}</span>
                              {post.category}
                            </Link>
                          )}

                          {/* Bookmark & Share */}
                          <div className="absolute top-4 right-4 flex gap-2">
                            <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors group/btn">
                              <Bookmark className="w-4 h-4 text-gray-700 group-hover/btn:fill-gray-700 transition-all" />
                            </button>
                            <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                              <Share2 className="w-4 h-4 text-gray-700" />
                            </button>
                          </div>
                        </div>

                        {/* Content */}
                        <Link to={`/resources/blog/${post.slug}`} className="block p-6">
                          <h2 className="text-xl font-bold mb-3 group-hover:text-[#4B6E48] transition-colors line-clamp-2 text-[rgb(0,0,0)]">
                            {post.title}
                          </h2>
                          <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                            {post.excerpt}
                          </p>

                          {/* Meta Info */}
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-1.5">
                              <User className="w-4 h-4" />
                              <span>{post.author.name}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>

                          {/* Read More Link */}
                          <div className="flex items-center gap-2 text-[#4B6E48] font-medium text-sm group-hover:gap-3 transition-all">
                            <span>Read Article</span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </Link>
                      </motion.article>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right: Trending Carousel */}
            <div className="hidden lg:block">
              <TrendingCarousel trendingPosts={trendingPosts} />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <NewsletterCTA />
        </div>
      </section>

      {/* Categories Overview - Study Abroad Resources */}
      <section className="resources-categories-section">
        <div className="resources-categories-container">
          <div className="resources-categories-header">
            <h2 className="resources-categories-title">Browse by Category</h2>
            <p className="resources-categories-subtitle">Explore our comprehensive collection of study abroad resources</p>
          </div>

          <div className="resources-categories-grid">
            {blogCategories.map((category) => {
              const postCount = blogPosts.filter(p => p.categorySlug === category.slug).length;

              return (
                <Link
                  key={category.slug}
                  to={`/resources/blog/category/${category.slug}`}
                  className="resources-category-card"
                >
                  <div className="resources-category-icon">{category.icon}</div>
                  <h3 className="resources-category-title">{category.name}</h3>
                  <p className="resources-category-description">{category.description}</p>
                  <div className="resources-category-footer">
                    <span className="resources-category-count">{postCount} {postCount === 1 ? 'article' : 'articles'}</span>
                    <ChevronRight className="resources-category-arrow" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Comprehensive Responsive Styles for Resources Categories Section */}
        <style>{`
          /* ============================================
             1. SECTION CONTAINER
             Desktop: max-width 1200-1400px centered
             Tablet: full width with 32px side padding
             Mobile: 16-20px padding
             Remove excessive empty side space
             Maintain alignment with other sections
             Prevent boxed or compressed layout on tablet
             ============================================ */
          .resources-categories-section {
            background-color: #FFFFFF;
          }

          .resources-categories-container {
            width: 100%;
            margin: 0 auto;
          }

          /* Mobile (≤480px): 16px padding, 48px vertical */
          @media (max-width: 480px) {
            .resources-categories-section {
              padding: 48px 16px;
            }
            .resources-categories-container {
              max-width: 100%;
            }
          }

          /* Mobile Large (481-767px): 20px padding, 56px vertical */
          @media (min-width: 481px) and (max-width: 767px) {
            .resources-categories-section {
              padding: 56px 20px;
            }
            .resources-categories-container {
              max-width: 100%;
            }
          }

          /* Tablet (768-1199px): 32px padding, 72px vertical - prevent boxed layout */
          @media (min-width: 768px) and (max-width: 1199px) {
            .resources-categories-section {
              padding: 72px 32px;
            }
            .resources-categories-container {
              max-width: 100%;
            }
          }

          /* Desktop (≥1200px): centered, 1280px max-width (within 1200-1400px), 80px vertical */
          @media (min-width: 1200px) {
            .resources-categories-section {
              padding: 80px 48px;
            }
            .resources-categories-container {
              max-width: 1280px;
            }
          }

          /* ============================================
             2. SECTION HEADER (Title + Subtitle)
             Desktop: 28-32px
             Tablet: 24-26px
             Mobile: 20-22px
             Center align text
             Reduce spacing below header by 16-24px
             Maintain consistent spacing with surrounding sections
             Prevent long line width for readability
             ============================================ */
          .resources-categories-header {
            text-align: center;
            max-width: 700px;
            margin: 0 auto;
          }

          .resources-categories-title {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            font-weight: 700;
            color: #111827;
            margin: 0;
          }

          .resources-categories-subtitle {
            color: #6B7280;
            margin: 0;
          }

          /* Mobile (≤480px): 20px title, 16px spacing below header */
          @media (max-width: 480px) {
            .resources-categories-header {
              margin-bottom: 24px;
            }
            .resources-categories-title {
              font-size: 20px;
              line-height: 1.3;
              margin-bottom: 8px;
            }
            .resources-categories-subtitle {
              font-size: 14px;
              line-height: 1.5;
            }
          }

          /* Mobile Large (481-767px): 22px title, 20px spacing below header */
          @media (min-width: 481px) and (max-width: 767px) {
            .resources-categories-header {
              margin-bottom: 28px;
            }
            .resources-categories-title {
              font-size: 22px;
              line-height: 1.3;
              margin-bottom: 10px;
            }
            .resources-categories-subtitle {
              font-size: 15px;
              line-height: 1.5;
            }
          }

          /* Tablet (768-1199px): 25px title (within 24-26px), 20px spacing below header */
          @media (min-width: 768px) and (max-width: 1199px) {
            .resources-categories-header {
              margin-bottom: 32px;
            }
            .resources-categories-title {
              font-size: 25px;
              line-height: 1.25;
              margin-bottom: 12px;
            }
            .resources-categories-subtitle {
              font-size: 16px;
              line-height: 1.5;
            }
          }

          /* Desktop (≥1200px): 30px (within 28-32px), 24px spacing below header */
          @media (min-width: 1200px) {
            .resources-categories-header {
              margin-bottom: 40px;
            }
            .resources-categories-title {
              font-size: 30px;
              line-height: 1.2;
              margin-bottom: 12px;
            }
            .resources-categories-subtitle {
              font-size: 16px;
              line-height: 1.5;
            }
          }

          /* ============================================
             3. CARDS GRID LAYOUT (Main Structure)
             Desktop (≥1200px): 3-column grid layout
             Tablet (768-1199px): 2-column layout, maintain equal card width
             Mobile (≤767px): Single column stacked layout, cards full width
             Ensure smooth transition between breakpoints
             Avoid horizontal scroll
             ============================================ */
          .resources-categories-grid {
            display: grid;
            width: 100%;
          }

          /* Mobile (≤767px): Single column, 16px gap */
          @media (max-width: 767px) {
            .resources-categories-grid {
              grid-template-columns: 1fr;
              gap: 16px;
            }
          }

          /* Tablet (768-1199px): 2 columns, 22px gap (within 20-24px) */
          @media (min-width: 768px) and (max-width: 1199px) {
            .resources-categories-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 22px;
            }
          }

          /* Desktop (≥1200px): 3 columns, 28px gap (within 24-32px) */
          @media (min-width: 1200px) {
            .resources-categories-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 28px;
            }
          }

          /* ============================================
             5. CARD WIDTH & ALIGNMENT
             Ensure cards maintain equal width
             Prevent overly stretched cards on tablet
             Prevent narrow cards on mobile
             Center grid inside container
             Maintain balanced left/right spacing
             ============================================ */
          .resources-category-card {
            background-color: #FFFFFF;
            border-radius: 12px;
            border: 1px solid #E5E7EB;
            transition: all 300ms ease;
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
          }

          .resources-category-card:hover {
            border-color: #4B6E48;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          }

          /* ============================================
             6. CARD INTERNAL SPACING
             Desktop padding: 24-28px
             Tablet padding: 20-24px
             Mobile padding: 16-20px
             Maintain consistent spacing between: icon → title → description → article count row
             Reduce vertical padding slightly on mobile
             ============================================ */
          
          /* Mobile (≤480px): 16px padding */
          @media (max-width: 480px) {
            .resources-category-card {
              padding: 16px;
            }
          }

          /* Mobile Large (481-767px): 18px padding */
          @media (min-width: 481px) and (max-width: 767px) {
            .resources-category-card {
              padding: 18px;
            }
          }

          /* Tablet (768-1199px): 22px padding (within 20-24px) */
          @media (min-width: 768px) and (max-width: 1199px) {
            .resources-category-card {
              padding: 22px;
            }
          }

          /* Desktop (≥1200px): 26px padding (within 24-28px) */
          @media (min-width: 1200px) {
            .resources-category-card {
              padding: 26px;
            }
          }

          /* ============================================
             7. CARD CONTENT LAYOUT
             Maintain vertical content alignment
             Keep icon aligned with title
             Ensure description text wraps properly
             Maintain consistent spacing between elements
             Prevent text overflow or clipping
             ============================================ */
          .resources-category-icon {
            font-size: 40px;
            line-height: 1;
            flex-shrink: 0;
          }

          /* Mobile: smaller icon, 12px spacing below */
          @media (max-width: 767px) {
            .resources-category-icon {
              font-size: 36px;
              margin-bottom: 12px;
            }
          }

          /* Tablet: medium icon, 14px spacing below */
          @media (min-width: 768px) and (max-width: 1199px) {
            .resources-category-icon {
              font-size: 38px;
              margin-bottom: 14px;
            }
          }

          /* Desktop: 40px icon, 16px spacing below */
          @media (min-width: 1200px) {
            .resources-category-icon {
              font-size: 40px;
              margin-bottom: 16px;
            }
          }

          /* ============================================
             8. TYPOGRAPHY
             Card title: Desktop 18px, Mobile 16px
             Description text: Desktop 14-15px, Mobile 13-14px
             Line height: 1.5-1.6
             Ensure readable but compact layout
             ============================================ */
          .resources-category-title {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            font-weight: 600;
            color: #111827;
            transition: color 300ms ease;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          .resources-category-card:hover .resources-category-title {
            color: #4B6E48;
          }

          /* Mobile: 16px */
          @media (max-width: 767px) {
            .resources-category-title {
              font-size: 16px;
              line-height: 1.4;
              margin-bottom: 8px;
            }
          }

          /* Tablet & Desktop: 18px */
          @media (min-width: 768px) {
            .resources-category-title {
              font-size: 18px;
              line-height: 1.3;
              margin-bottom: 10px;
            }
          }

          .resources-category-description {
            color: #6B7280;
            flex-grow: 1;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          /* Mobile: 13px (within 13-14px), line-height 1.6 */
          @media (max-width: 767px) {
            .resources-category-description {
              font-size: 13px;
              line-height: 1.6;
              margin-bottom: 12px;
            }
          }

          /* Tablet: 14px (within 14-15px), line-height 1.6 */
          @media (min-width: 768px) and (max-width: 1199px) {
            .resources-category-description {
              font-size: 14px;
              line-height: 1.6;
              margin-bottom: 14px;
            }
          }

          /* Desktop: 14px (within 14-15px), line-height 1.5 */
          @media (min-width: 1200px) {
            .resources-category-description {
              font-size: 14px;
              line-height: 1.5;
              margin-bottom: 16px;
            }
          }

          /* ============================================
             9. CARD HEIGHT CONSISTENCY
             Maintain equal card heights in each row
             Prevent uneven layout caused by different text lengths
             Ensure bottom article count aligns across cards
             ============================================ */
          .resources-category-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 12px;
            border-top: 1px solid #F3F4F6;
            margin-top: auto;
          }

          .resources-category-count {
            font-size: 13px;
            font-weight: 500;
            color: #6B7280;
          }

          .resources-category-arrow {
            width: 18px;
            height: 18px;
            color: #9CA3AF;
            transition: all 300ms ease;
            flex-shrink: 0;
          }

          .resources-category-card:hover .resources-category-arrow {
            color: #4B6E48;
            transform: translateX(4px);
          }

          /* ============================================
             11. OVERALL BEHAVIOR
             Layout should feel clean, balanced, and structured
             Smooth scaling from desktop → tablet → mobile
             No overflow, misalignment, or crowding
             Maintain consistent UI rhythm across breakpoints
             ============================================ */

          /* Prevent any text overflow */
          .resources-category-title,
          .resources-category-description {
            max-width: 100%;
          }

          /* Ensure smooth transitions */
          .resources-category-card {
            box-sizing: border-box;
          }
        `}</style>
      </section>

      <Footer />
    </>
  );
}