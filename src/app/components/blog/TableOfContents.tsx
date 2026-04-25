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
    <div className={`${isSticky ? 'sticky top-32' : ''} transition-all duration-300`}>
      <div className="bg-white border border-black/5 rounded-[2rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.02)]">
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-black/5">
          <div className="w-8 h-8 rounded-full bg-[#4EA62F]/10 flex items-center justify-center">
             <List className="w-4 h-4 text-[#4EA62F]" />
          </div>
          <h3 className="font-black text-lg text-[#0F172A] tracking-tight uppercase font-['Outfit',sans-serif]">Index</h3>
        </div>

        <nav>
          <ul className="space-y-1 relative">
            {/* Custom active line tracking */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-black/5" />
            
            {items.map((item) => (
              <li key={item.id} style={{ paddingLeft: `${Math.max(0, (item.level - 2) * 12)}px` }} className="relative z-10">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left w-full py-2.5 px-4 rounded-xl text-sm font-medium transition-all group border-l-2 ${
                    activeId === item.id
                      ? 'border-[#4EA62F] bg-[#4EA62F]/5 text-[#0F172A]'
                      : 'border-transparent text-black/40 hover:bg-black/5 hover:text-[#0F172A]'
                  }`}
                >
                  <span className={`block truncate ${activeId === item.id ? 'font-bold' : ''}`}>
                    {item.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Quick Actions (Feedback) */}
      <div className="mt-6 bg-[#F8FAFC] border border-black/5 rounded-[1.5rem] p-6 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0F172A] mb-4">Did you find this helpful?</p>
        <div className="flex items-center justify-center gap-3">
          <button className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-xl hover:scale-110 hover:border-[#4EA62F] hover:text-[#4EA62F] transition-all shadow-sm">
            👍
          </button>
          <button className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-xl hover:scale-110 hover:border-red-400 hover:text-red-400 transition-all shadow-sm">
            👎
          </button>
        </div>
      </div>
    </div>
  );
}