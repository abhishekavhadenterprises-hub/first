import { motion } from 'motion/react';
import { useRef } from 'react';
import { Code, Share2, Zap, BookOpen, GraduationCap, Globe, ArrowUpRight, Sparkles } from 'lucide-react';
import { WorkflowBuilderCard } from '@/app/components/ui/workflow-builder-card';
const stanfordImage = 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?w=800&q=80';
const harvardImage = 'https://images.unsplash.com/photo-1576043005963-f4b2a8d1195d?w=800&q=80';
const oxfordImage = 'https://images.unsplash.com/photo-1541119638723-c51cbe5ad79a?w=800&q=80';
const torontoImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80';
const melbourneImage = 'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=800&q=80';
const cambridgeImage = 'https://images.unsplash.com/photo-1512411930264-e74be88f6236?w=800&q=80';

const workflowCards = [
  {
    imageUrl: stanfordImage,
    status: 'Active' as const,
    lastUpdated: '2 days ago',
    title: 'Stanford University',
    description: 'United States',
    tags: ['Applications', 'Documents'],
    users: [
      { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', fallback: 'JD' },
      { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150', fallback: 'SM' },
    ],
    actions: [{ Icon: Zap, bgColor: 'bg-[#4EA62F]' }, { Icon: Share2, bgColor: 'bg-black' }],
  },
  {
    imageUrl: harvardImage,
    status: 'Active' as const,
    lastUpdated: '1 day ago',
    title: 'Harvard University',
    description: 'United States',
    tags: ['Virtual Tour', 'Research'],
    users: [{ src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150', fallback: 'AB' }],
    actions: [{ Icon: Globe, bgColor: 'bg-[#4EA62F]' }, { Icon: Zap, bgColor: 'bg-black' }],
  },
  {
    imageUrl: oxfordImage,
    status: 'Active' as const,
    lastUpdated: '3 days ago',
    title: 'University of Oxford',
    description: 'United Kingdom',
    tags: ['Scholarships', 'Finance'],
    users: [{ src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150', fallback: 'GH' }],
    actions: [{ Icon: BookOpen, bgColor: 'bg-[#4EA62F]' }, { Icon: Share2, bgColor: 'bg-black' }],
  },
  {
    imageUrl: torontoImage,
    status: 'Active' as const,
    lastUpdated: '1 week ago',
    title: 'University of Toronto',
    description: 'Canada',
    tags: ['Career', 'Planning'],
    users: [{ src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150', fallback: 'MN' }],
    actions: [{ Icon: GraduationCap, bgColor: 'bg-[#4EA62F]' }, { Icon: Code, bgColor: 'bg-black' }],
  },
  {
    imageUrl: melbourneImage,
    status: 'Active' as const,
    lastUpdated: '4 days ago',
    title: 'University of Melbourne',
    description: 'Australia',
    tags: ['Programs', 'Matching'],
    users: [{ src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=150', fallback: 'ST' }],
    actions: [{ Icon: Zap, bgColor: 'bg-[#4EA62F]' }, { Icon: Globe, bgColor: 'bg-black' }],
  },
  {
    imageUrl: cambridgeImage,
    status: 'Active' as const,
    lastUpdated: '5 days ago',
    title: 'University of Cambridge',
    description: 'United Kingdom',
    tags: ['Visa', 'Immigration'],
    users: [{ src: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150', fallback: 'YZ' }],
    actions: [{ Icon: Globe, bgColor: 'bg-[#4EA62F]' }, { Icon: Code, bgColor: 'bg-black' }],
  },
];

export function WorkflowSection() {
  const title = "Discover Universities";
  
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white font-['Outfit',sans-serif] relative overflow-hidden">
      {/* Precision Grid Layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      {/* Top Transition Mask */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-10" />
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,#4EA62F_0%,transparent_50%)]"
        />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-[#4EA62F] mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Institutional Directory</span>
          </motion.div>
          <h2 className="text-[44px] md:text-[80px] font-black text-black leading-[0.85] uppercase tracking-tighter flex flex-wrap gap-x-4 mb-8">
            {title.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ opacity: 0, y: 40, filter: 'blur(10px)', scale: 1.2 }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: (wordIndex * 0.1) + (charIndex * 0.03), 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-black/5 decoration-[#4EA62F]/20 underline decoration-8 underline-offset-[-10px] italic"
            >
              Hubs.
            </motion.span>
          </h2>

          <div className="overflow-hidden">
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-[#64748B] text-lg md:text-xl max-w-2xl font-medium tracking-tight"
             >
               Powerful assistants to help you navigate your international education journey with confidence.
             </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workflowCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 1, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
            >
              <WorkflowBuilderCard
                imageUrl={card.imageUrl}
                status={card.status}
                lastUpdated={card.lastUpdated}
                title={card.title}
                description={card.description}
                tags={card.tags}
                users={card.users}
                actions={card.actions}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

