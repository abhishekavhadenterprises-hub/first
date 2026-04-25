import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { Footer } from '@/app/components/Footer';
import { motion } from 'motion/react';
import {
  ChevronRight,
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Bookmark
} from 'lucide-react';
import { getBlogPostBySlug, getRelatedPosts, getCategoryBySlug } from '@/app/data/blogData';
import { blogPostComponents } from './blog-posts';
import { BlogPostFooter } from '@/app/components/blog/BlogPostFooter';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getBlogPostBySlug(slug || '');
  const relatedPosts = post ? getRelatedPosts(post.id) : [];
  const category = post ? getCategoryBySlug(post.categorySlug) : null;

  const BlogPostContent = slug ? blogPostComponents[slug] : null;

  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <Link to="/resources/blog" className="text-[#4EA62F] hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const publishedDate = new Date(post.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post.title;

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
  };

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800 border-blue-200',
    green: 'bg-green-100 text-green-800 border-green-200',
    purple: 'bg-purple-100 text-purple-800 border-purple-200',
    amber: 'bg-amber-100 text-amber-800 border-amber-200',
    emerald: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    red: 'bg-red-100 text-red-800 border-red-200'
  };

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-32 pb-8 px-4 bg-white">
        <div className={`mx-auto ${BlogPostContent ? 'max-w-7xl' : 'max-w-4xl'}`}>
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-[#4EA62F] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/resources/blog" className="hover:text-[#4EA62F] transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              to={`/resources/blog/category/${post.categorySlug}`}
              className="hover:text-[#4EA62F] transition-colors"
            >
              {post.category}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium truncate max-w-[200px]">{post.title}</span>
          </nav>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-[#4EA62F] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        </div>
      </section>

      {/* Article Hero - Only shown for standard blog posts */}
      {!BlogPostContent && (
        <section className="pb-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Category Badge */}
              {category && (
                <Link
                  to={`/resources/blog/category/${post.categorySlug}`}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium mb-6 hover:opacity-80 transition-opacity ${colorClasses[category.color as keyof typeof colorClasses]}`}
                >
                  <span className="text-xl">{category.icon}</span>
                  {post.category}
                </Link>
              )}

              {/* Title */}
              <h1 className="mb-6 text-[#000000]">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{publishedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{post.author.name}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded-lg transition-colors bg-[#000000] text-white"
                  >
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Share</span>
                  </button>

                  {showShareMenu && (
                    <div className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-10 w-48">
                      <button
                        onClick={() => handleShare('facebook')}
                        className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Facebook className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Facebook</span>
                      </button>
                      <button
                        onClick={() => handleShare('twitter')}
                        className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Twitter className="w-4 h-4 text-sky-500" />
                        <span className="text-sm">Twitter</span>
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-blue-700" />
                        <span className="text-sm">LinkedIn</span>
                      </button>
                    </div>
                  )}
                </div>

                <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded-lg transition-colors bg-[#000000] text-white">
                  <Bookmark className="w-4 h-4" />
                  <span className="text-sm font-medium">Save</span>
                </button>
              </div>

              {/* Featured Image */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80';
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className={`${BlogPostContent ? 'pb-0' : 'pb-16'} px-0 bg-white`}>
        <div className={`mx-auto ${BlogPostContent ? 'max-w-none' : 'max-w-4xl px-4'}`}>
          {BlogPostContent ? (
            <BlogPostContent />
          ) : (
            <article className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
                {post.content.introduction}
              </p>

              {post.content.sections.map((section, index) => (
                <div key={index} className="mb-10" id={`section-${index}`}>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    {section.heading}
                  </h2>

                  {section.type === 'text' && (
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {section.content}
                    </p>
                  )}

                  {section.type === 'list' && (
                    <>
                      {section.content && (
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {section.content}
                        </p>
                      )}
                      <ul className="space-y-3 mb-4">
                        {section.items?.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-[#4EA62F] rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {section.type === 'quote' && (
                    <blockquote className="border-l-4 border-[#4EA62F] pl-6 py-4 my-6 bg-gray-50 rounded-r-lg">
                      <p className="text-lg italic text-gray-800">
                        {section.content}
                      </p>
                    </blockquote>
                  )}

                  {section.type === 'tips' && (
                    <div className="bg-[#4EA62F]/5 border border-[#4EA62F]/20 rounded-xl p-6 mb-4">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-[#4EA62F] rounded-lg flex items-center justify-center">
                          <span className="text-white text-xl">💡</span>
                        </div>
                        <h3 className="text-lg font-semibold text-[#4EA62F]">Pro Tips</h3>
                      </div>
                      <ul className="space-y-3">
                        {section.items?.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-[#4EA62F] font-bold">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </article>
          )}
        </div>
      </section>

      {/* Premium Meta, Author, Feedback & Comments Footer */}
      <BlogPostFooter post={post} />

      <Footer />
    </>
  );
}
