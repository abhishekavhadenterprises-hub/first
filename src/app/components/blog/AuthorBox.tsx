import { Linkedin, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

interface Author {
  name: string;
  avatar: string;
  bio: string;
  role: string;
  linkedin?: string;
  email?: string;
}

interface AuthorBoxProps {
  author: Author;
  articleCount?: number;
}

export function AuthorBox({ author, articleCount = 24 }: AuthorBoxProps) {
  return (
    <div className="bg-[#F8FAFC] border border-black/5 rounded-[2.5rem] p-10 lg:p-12 relative overflow-hidden group">
      {/* Decorative gradient */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#4EA62F]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#4EA62F]/10 transition-colors duration-700" />
      
      <div className="flex flex-col sm:flex-row items-start gap-8 relative z-10">
        {/* Author Avatar */}
        <div className="relative shrink-0">
           <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
             <img
               src={author.avatar}
               alt={author.name}
               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
             />
           </div>
           {/* Verified badge */}
           <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#0F172A] border-2 border-white flex items-center justify-center text-white">
              <Sparkles size={12} />
           </div>
        </div>

        {/* Author Info */}
        <div className="flex-1">
          <div className="mb-4">
            <h3 className="text-3xl font-[1000] text-[#0F172A] mb-1 tracking-tight font-['Outfit',sans-serif]">
              {author.name}
            </h3>
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#4EA62F]">
              {author.role}
            </p>
          </div>

          <p className="text-black/60 font-medium leading-relaxed mb-8 max-w-2xl">
            {author.bio}
          </p>

          <div className="flex flex-wrap items-center gap-6 border-t border-black/5 pt-6">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {author.linkedin && (
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black/50 hover:bg-[#0077B5] hover:border-[#0077B5] hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {author.email && (
                <a
                  href={`mailto:${author.email}`}
                  className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black/50 hover:bg-[#0F172A] hover:border-[#0F172A] hover:text-white transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
            
            <div className="w-px h-8 bg-black/5" />

            {/* Article Count */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4EA62F]" />
              <span className="text-[11px] font-black uppercase tracking-widest text-[#0F172A]">
                {articleCount} Articles Published
              </span>
            </div>

            {/* More Articles Link */}
            <Link
              to={`/resources/blog?author=${encodeURIComponent(author.name)}`}
              className="ml-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black/40 hover:text-[#4EA62F] transition-colors"
            >
              View Author Collection <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}