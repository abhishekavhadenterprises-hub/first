import { Linkedin, Mail } from 'lucide-react';
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
    <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8">
      <div className="flex items-start gap-6">
        {/* Author Avatar */}
        <img
          src={author.avatar}
          alt={author.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg flex-shrink-0"
        />

        {/* Author Info */}
        <div className="flex-1">
          <div className="mb-3">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {author.name}
            </h3>
            <p className="text-[#4B6E48] font-medium">
              {author.role}
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            {author.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-2">
              {author.linkedin && (
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#006399] transition-colors text-sm font-medium"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect</span>
                </a>
              )}
              {author.email && (
                <a
                  href={`mailto:${author.email}`}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              )}
            </div>

            {/* Article Count */}
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">{articleCount}</span> articles published
            </div>
          </div>

          {/* More Articles Link */}
          <Link
            to={`/resources/blog?author=${encodeURIComponent(author.name)}`}
            className="inline-block mt-4 text-[#4B6E48] hover:text-[#3a5638] font-medium text-sm hover:underline"
          >
            View all articles by {author.name} →
          </Link>
        </div>
      </div>
    </div>
  );
}