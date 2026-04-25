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
    <div className="py-24 border-t border-black/5 mt-16 relative">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
        <div className="flex items-center gap-4">
           <div className="w-1.5 h-8 bg-[#4EA62F] rounded-full" />
           <h2 className="text-4xl lg:text-5xl font-[1000] text-[#0F172A] tracking-tighter uppercase font-['Outfit',sans-serif]">
              {title}
           </h2>
        </div>
        <Link
          to="/resources/blog"
          className="flex items-center gap-3 px-6 py-3 bg-white border border-black/5 rounded-full hover:border-[#4EA62F]/30 hover:shadow-[0_10px_20px_rgba(78,166,47,0.05)] transition-all group"
        >
          <span className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]">Knowledge Collection</span>
          <ArrowRight className="w-4 h-4 text-[#4EA62F] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#4EA62F]/20 transition-all duration-500"
          >
            {/* Thumbnail */}
            <Link to={`/resources/blog/${article.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-black p-2 isolate">
               <div className="absolute inset-0 z-10 pointer-events-none rounded-[1.5rem]" />
              <img
                src={article.featuredImage}
                alt={article.title}
                className="w-full h-full object-cover rounded-[1.5rem] opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-[1200ms] ease-out relative z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-0 pointer-events-none rounded-[1.5rem]" />
              
              <div className="absolute top-6 left-6 z-20 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-[#0F172A] shadow-sm">
                {article.category}
              </div>
            </Link>

            {/* Content */}
            <div className="flex flex-col flex-1 p-8">
              <Link to={`/resources/blog/${article.slug}`} className="focus:outline-none flex-1">
                <h3 className="font-[1000] text-2xl text-[#0F172A] mb-4 leading-tight tracking-tight line-clamp-2 group-hover:text-[#4EA62F] transition-colors font-['Outfit',sans-serif]">
                  {article.title}
                </h3>
              </Link>
              
              <p className="text-black/50 font-medium text-sm mb-8 line-clamp-2 leading-relaxed">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-6 border-t border-black/5">
                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-[#4EA62F]" />
                  <span className="text-xs font-bold text-[#0F172A]">{article.author.name}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-black/30">
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