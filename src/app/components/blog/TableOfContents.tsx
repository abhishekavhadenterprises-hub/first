import { useState, useEffect } from 'react';
import { List } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    // Sticky behavior
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`${isSticky ? 'sticky top-24' : ''} transition-all duration-300`}>
      <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
          <List className="w-5 h-5 text-[#4B6E48]" />
          <h3 className="font-bold text-gray-900">Table of Contents</h3>
        </div>

        <nav>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 12}px` }}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left w-full py-2 px-3 rounded-lg text-sm transition-all ${
                    activeId === item.id
                      ? 'bg-[#4B6E48] text-white font-medium'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Quick Actions */}
      <div className="mt-4 bg-gradient-to-br from-[#4B6E48]/5 to-transparent border border-[#4B6E48]/20 rounded-xl p-4">
        <p className="text-sm text-gray-600 mb-3">Was this article helpful?</p>
        <div className="flex gap-2">
          <button className="flex-1 py-2 px-4 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-900 hover:border-[#4B6E48] hover:text-[#4B6E48] transition-colors">
            👍 Yes
          </button>
          <button className="flex-1 py-2 px-4 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-900 hover:border-gray-400 transition-colors">
            👎 No
          </button>
        </div>
      </div>
    </div>
  );
}