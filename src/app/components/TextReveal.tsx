import { ReactNode, useEffect, useRef, useState, createContext, useContext } from 'react';
import { cn } from '@/lib/utils';

interface TextRevealContextValue {
  activeIndex: number;
  totalTokens: number;
}

const TextRevealContext = createContext<TextRevealContextValue>({
  activeIndex: 0,
  totalTokens: 0,
});

interface TextRevealProps {
  body: string;
  className?: string;
  children: (tokens: string[]) => ReactNode;
}

export function TextReveal({ body, className, children }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Split text into tokens (words)
  const tokens = body.split(' ').map((word, index, array) => 
    index < array.length - 1 ? word + ' ' : word
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through the container
      // Progress goes from 0 to 1 as user scrolls through the section
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const containerTop = container.offsetTop;
      const scrollStart = scrollTop - containerTop;
      const scrollRange = containerHeight - windowHeight;
      
      // Clamp between 0 and 1
      const scrollProgress = Math.max(0, Math.min(1, scrollStart / scrollRange));
      
      // Map scroll progress to token index
      const newActiveIndex = Math.floor(scrollProgress * (tokens.length - 1));
      setActiveIndex(Math.min(newActiveIndex, tokens.length - 1));
    };

    // Initial check
    handleScroll();

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [tokens.length]);

  return (
    <TextRevealContext.Provider value={{ activeIndex, totalTokens: tokens.length }}>
      <div ref={containerRef} className={cn('relative', className)}>
        {children(tokens)}
      </div>
    </TextRevealContext.Provider>
  );
}

interface TokenProps {
  index: number;
  children: (isActive: boolean) => ReactNode;
}

TextReveal.Token = function Token({ index, children }: TokenProps) {
  const { activeIndex } = useContext(TextRevealContext);
  const isActive = index <= activeIndex;
  
  return <>{children(isActive)}</>;
};