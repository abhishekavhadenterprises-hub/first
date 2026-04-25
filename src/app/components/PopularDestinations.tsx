import { motion } from 'motion/react';
import { ArrowUpRight, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

const destinations = [
  {
    location: 'United States',
    countryCode: 'USA',
    stats: '200+ universities',
    imageUrl: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=1200',
    href: '/countries/us',
    description: 'Leading global innovation and research hubs.',
    className: 'md:col-span-2 md:row-span-2 min-h-[500px]',
  },
  {
    location: 'United Kingdom',
    countryCode: 'UK',
    stats: '150+ universities',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200',
    href: '/countries/gb',
    description: 'Academic excellence and global prestige.',
    className: 'md:col-span-2 md:row-span-1 min-h-[300px]',
  },
  {
    location: 'Canada',
    countryCode: 'CAN',
    stats: '100+ universities',
    imageUrl: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200',
    href: '/countries/ca',
    description: 'Premier residency pathways.',
    className: 'md:col-span-1 md:row-span-1 min-h-[300px]',
  },
  {
    location: 'Australia',
    countryCode: 'AUS',
    stats: '80+ universities',
    imageUrl: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200',
    href: '/countries/au',
    description: 'Elite education standards.',
    className: 'md:col-span-1 md:row-span-1 min-h-[300px]',
  },
  {
    location: 'Germany',
    countryCode: 'GER',
    stats: '120+ universities',
    imageUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200',
    href: '/countries/de',
    description: 'Industrial research powerhouse.',
    className: 'md:col-span-2 md:row-span-1 min-h-[300px]',
  },
  {
    location: 'France',
    countryCode: 'FRA',
    stats: '90+ universities',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200',
    href: '/countries/fr',
    description: 'Historical cultural center.',
    className: 'md:col-span-2 md:row-span-1 min-h-[300px]',
  },
];

export function PopularDestinations() {
  return (
    <section className="py-24 px-6 lg:px-20 bg-white relative overflow-hidden selection:bg-[#4EA62F] selection:text-white font-['Outfit',sans-serif]">
      {/* Editorial Identity Layer */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#4EA62F]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* BENTO HEADER */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-[#4EA62F] mb-6"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">Global Elite Selection</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 40, rotateX: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-black uppercase"
          >
            Explore <span className="text-black/20">Hubs.</span>
          </motion.h2>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {destinations.map((dest, i) => (
            <BentoCard key={dest.location} dest={dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoCard({ dest, index }: { dest: any, index: number }) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        clipPath: 'inset(100% 0% 0% 0%)',
        y: 60,
        filter: 'blur(10px)'
      }}
      whileInView={{ 
        opacity: 1, 
        clipPath: 'inset(0% 0% 0% 0%)',
        y: 0,
        filter: 'blur(0px)'
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 1.2, 
        delay: index * 0.12, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={`relative group ${dest.className} rounded-[2.5rem] overflow-hidden cursor-pointer shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] bg-[#050505]`}
    >
      <Link to={dest.href} className="block w-full h-full">
        {/* BACKGROUND IMAGE WITH SCALE EFFECT */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.4 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
            src={dest.imageUrl} 
            alt={dest.location}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
        </div>

        {/* CONTENT OVERLAY */}
        <div className="relative z-10 w-full h-full p-10 flex flex-col justify-between">
           <div className="flex justify-between items-start">
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-black tracking-[0.3em] text-white uppercase">
                {dest.countryCode}
              </span>
              <div className="w-12 h-12 rounded-full bg-[#4EA62F] flex items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
                 <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
           </div>

           <div>
              <h3 className="text-white uppercase mb-4 group-hover:tracking-normal transition-all duration-700">
                {dest.location}
              </h3>
              <div className="flex items-center gap-4 overflow-hidden mb-2">
                 <div className="w-8 h-[1px] bg-[#4EA62F]" />
                 <span className="text-[#4EA62F] text-[10px] font-black tracking-widest uppercase">{dest.stats}</span>
              </div>
              <p className="text-white/60 text-sm font-medium leading-[1.4] max-w-[280px] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                {dest.description}
              </p>
           </div>
        </div>

        {/* HOVER GLOW FEATURE */}
        <div className="absolute inset-0 border-[3px] border-[#4EA62F]/0 group-hover:border-[#4EA62F]/30 rounded-[2.5rem] transition-all duration-700" />
      </Link>
    </motion.div>
  );
}


