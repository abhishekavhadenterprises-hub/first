import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { ArrowLeft, Clock, User, ChevronRight, Search } from 'lucide-react';
import { getCategoryBySlug, getBlogPostsByCategory, blogCategories } from '@/app/data/blogData';
import { useState } from 'react';

export default function BlogCategory() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  
  const category = getCategoryBySlug(categorySlug || '');
  const posts = getBlogPostsByCategory(categorySlug || '');

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (!category) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
            <Link to="/resources/blog" className="text-[#4B6E48] hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

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
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#4B6E48] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/resources/blog" className="hover:text-[#4B6E48] transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">{category.name}</span>
          </nav>
        </div>
      </section>

      {/* Category Hero */}
      <section className="pb-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${colorClasses[category.color as keyof typeof colorClasses]} text-4xl mb-6`}>
              {category.icon}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {category.name}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {category.description}
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-700">
              <span className="font-semibold">{filteredPosts.length}</span>
              <span>{filteredPosts.length === 1 ? 'Article' : 'Articles'}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* Search */}
                <div>
                  <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-500">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900"
                    />
                  </div>
                </div>

                {/* All Categories */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-500">
                    All Categories
                  </h3>
                  <div className="space-y-2">
                    {blogCategories.map((cat) => {
                      const isActive = cat.slug === categorySlug;
                      return (
                        <Link
                          key={cat.slug}
                          to={`/resources/blog/category/${cat.slug}`}
                          className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                            isActive
                              ? 'bg-[#4B6E48] text-white'
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          <span className="text-2xl">{cat.icon}</span>
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium truncate ${isActive ? 'text-white' : 'text-gray-900'}`}>
                              {cat.name}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Back to All Posts */}
                <Link
                  to="/resources/blog"
                  className="flex items-center gap-2 text-[#4B6E48] hover:gap-3 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-sm font-medium">View All Posts</span>
                </Link>
              </div>
            </aside>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-lg">No articles found matching your search.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                    >
                      <Link to={`/resources/blog/${post.slug}`}>
                        {/* Featured Image */}
                        <div className="relative h-48 overflow-hidden bg-gray-200">
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${colorClasses[category.color as keyof typeof colorClasses]}`}>
                            {post.category}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h2 className="text-xl font-bold mb-3 group-hover:text-[#4B6E48] transition-colors line-clamp-2">
                            {post.title}
                          </h2>
                          <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                            {post.excerpt}
                          </p>

                          {/* Meta Info */}
                          <div className="flex items-center gap-4 text-sm text-gray-500">
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
                          <div className="flex flex-wrap gap-2 mt-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Read More Link */}
                          <div className="mt-4 flex items-center gap-2 text-[#4B6E48] font-medium text-sm group-hover:gap-3 transition-all">
                            <span>Read Article</span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}