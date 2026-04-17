import { Link } from 'react-router';
import { Clock, User, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface RelatedArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  author: {
    name: string;
  };
  readTime: string;
  featuredImage: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  title?: string;
}

export function RelatedArticles({ articles, title = "Related Articles" }: RelatedArticlesProps) {
  const colorClasses = {
    'study-abroad-tips': 'bg-blue-100 text-blue-800',
    'visa-guides': 'bg-green-100 text-green-800',
    'country-guides': 'bg-purple-100 text-purple-800',
    'student-life': 'bg-amber-100 text-amber-800',
    'financial-aid': 'bg-emerald-100 text-emerald-800',
    'career-advice': 'bg-red-100 text-red-800'
  };

  return (
    <div className="py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <Link
          to="/resources/blog"
          className="flex items-center gap-2 text-[#4B6E48] hover:text-[#3a5638] font-medium group"
        >
          <span>View all</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
          >
            {/* Thumbnail */}
            <Link to={`/resources/blog/${article.slug}`} className="block relative h-48 overflow-hidden bg-gray-200">
              <img
                src={article.featuredImage}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
                colorClasses[article.categorySlug as keyof typeof colorClasses] || 'bg-gray-100 text-gray-800'
              }`}>
                {article.category}
              </div>
            </Link>

            {/* Content */}
            <div className="p-5">
              <Link to={`/resources/blog/${article.slug}`}>
                <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-[#4B6E48] transition-colors">
                  {article.title}
                </h3>
              </Link>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5" />
                  <span>{article.author.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}