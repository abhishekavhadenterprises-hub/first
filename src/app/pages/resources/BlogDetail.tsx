import { useState } from 'react';
import { StandardButton } from '@/app/components/ui/standard-button';
import { useParams, useNavigate, Link } from 'react-router';
import { Navigation } from '@/app/components/Navigation';
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
  Bookmark,
  ThumbsUp,
  ThumbsDown,
  MessageCircle
} from 'lucide-react';
import { getBlogPostBySlug, getRelatedPosts, getCategoryBySlug } from '@/app/data/blogData';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getBlogPostBySlug(slug || '');
  const relatedPosts = post ? getRelatedPosts(post.id) : [];
  const category = post ? getCategoryBySlug(post.categorySlug) : null;

  const [feedbackGiven, setFeedbackGiven] = useState<'helpful' | 'not-helpful' | null>(null);
  const [showShareMenu, setShowShareMenu] = useState(false);

  if (!post) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <Link to="/resources/blog" className="text-[#4B6E48] hover:underline">
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
      <Navigation />

      {/* Breadcrumb */}
      <section className="pt-32 pb-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-[#4B6E48] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/resources/blog" className="hover:text-[#4B6E48] transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link 
              to={`/resources/blog/category/${post.categorySlug}`}
              className="hover:text-[#4B6E48] transition-colors"
            >
              {post.category}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium truncate max-w-[200px]">{post.title}</span>
          </nav>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-[#4B6E48] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        </div>
      </section>

      {/* Article Hero */}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#000000]">
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
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded-lg transition-colors bg-[#000000]"
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

              <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded-lg transition-colors bg-[#000000]">
                <Bookmark className="w-4 h-4" />
                <span className="text-sm font-medium">Save</span>
              </button>
            </div>

            {/* Featured Image */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
              <img
                src="https://images.unsplash.com/photo-1547817651-7fb0cc360536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzA3MTI4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
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

      {/* Article Content */}
      <section className="pb-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            {/* Introduction */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
              {post.content.introduction}
            </p>

            {/* Content Sections */}
            {post.content.sections.map((section, index) => (
              <div key={index} className="mb-10" id={`section-${index}`}>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
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
                          <span className="w-2 h-2 bg-[#4B6E48] rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {section.type === 'quote' && (
                  <blockquote className="border-l-4 border-[#4B6E48] pl-6 py-4 my-6 bg-gray-50 rounded-r-lg">
                    <p className="text-lg italic text-gray-800">
                      {section.content}
                    </p>
                  </blockquote>
                )}

                {section.type === 'tips' && (
                  <>
                    {section.content && (
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {section.content}
                      </p>
                    )}
                    <div className="bg-[#4B6E48]/5 border border-[#4B6E48]/20 rounded-xl p-6 mb-4">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-[#4B6E48] rounded-lg flex items-center justify-center">
                          <span className="text-white text-xl">💡</span>
                        </div>
                        <h3 className="text-lg font-semibold text-[#4B6E48]">Pro Tips</h3>
                      </div>
                      <ul className="space-y-3">
                        {section.items?.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-[#4B6E48] font-bold">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Author Bio */}
      <section className="pb-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#4B6E48]/5 to-[#4B6E48]/10 rounded-2xl p-8 border border-[#4B6E48]/20">
            <div className="flex items-start gap-6">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-bold mb-1 text-[16px] text-[#000000]">{post.author.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{post.author.role}</p>
                <p className="text-gray-700 leading-relaxed">{post.author.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="pb-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
            <h3 className="text-2xl font-bold mb-4 text-[#000000]">Was this article helpful?</h3>
            <p className="text-gray-600 mb-6">Your feedback helps us improve our content</p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setFeedbackGiven('helpful')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  feedbackGiven === 'helpful'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <ThumbsUp className="w-5 h-5" />
                <span>Yes, helpful!</span>
              </button>
              <button
                onClick={() => setFeedbackGiven('not-helpful')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  feedbackGiven === 'not-helpful'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <ThumbsDown className="w-5 h-5" />
                <span>Not really</span>
              </button>
            </div>
            {feedbackGiven && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-[#4B6E48] font-medium"
              >
                Thank you for your feedback!
              </motion.p>
            )}
          </div>
        </div>
      </section>

      {/* Comments Section (UI Only) */}
      <section className="pb-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-[#4B6E48]" />
              <h3 className="text-2xl font-bold text-[#000000]">Comments (3)</h3>
            </div>

            {/* Comment Form */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <textarea
                placeholder="Share your thoughts..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent resize-none"
              />
              <div className="mt-3 flex justify-end">
                <StandardButton onClick={() => {}}>Post Comment</StandardButton>
              </div>
            </div>

            {/* Sample Comments */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400"
                  alt="Commenter"
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold">John Doe</span>
                    <span className="text-sm text-gray-500">2 days ago</span>
                  </div>
                  <p className="text-gray-700">
                    This is exactly what I needed! The visa application process seemed so daunting, but this guide made everything clear. Thank you!
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
                  alt="Commenter"
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold">Maria Garcia</span>
                    <span className="text-sm text-gray-500">3 days ago</span>
                  </div>
                  <p className="text-gray-700">
                    Great article! Could you also cover the application process for Canadian universities? That would be really helpful.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400"
                  alt="Commenter"
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold">Ahmed Khan</span>
                    <span className="text-sm text-gray-500">5 days ago</span>
                  </div>
                  <p className="text-gray-700">
                    Very informative! I'm sharing this with my friends who are planning to study abroad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="pb-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/resources/blog/${relatedPost.slug}`}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={relatedPost.featuredImage}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#4B6E48] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="pb-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Study Abroad Journey?</h2>
            <p className="text-lg mb-8 text-white/90">
              Get personalized guidance from our expert counselors
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <StandardButton 
                  onClick={() => {}}
                  className="bg-white hover:bg-gray-100 text-[#000000]"
                >
                  Contact Us
                </StandardButton>
              </Link>
              <Link to="/services">
                <StandardButton 
                  onClick={() => {}}
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10"
                >
                  Explore Services
                </StandardButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}