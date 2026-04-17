'use client';

import { Link, useLocation } from 'react-router';
import {
  ChevronDown, ArrowUpRight, User, ArrowRight,
  Smartphone, Building2, Shield, UtensilsCrossed,
  Plane, Calendar, Briefcase, Receipt, CreditCard,
  TrendingUp, Home, GraduationCap, DollarSign,
  BookOpen, Sparkles, Users, Activity
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const products = [
  { id: '01', title: 'SIM Cards', icon: Smartphone, path: '/services/sim-cards', description: 'High-speed local data plans with instant activation and wide global coverage.', image: 'https://images.unsplash.com/photo-1512428559083-a40113dbb92c?w=1000' },
  { id: '02', title: 'Banking', icon: Building2, path: '/services/banks', description: 'Global checking accounts with zero monthly fees and no SSN requirements.', image: 'https://images.unsplash.com/photo-1550565118-3d1428df732f?w=1000' },
  { id: '03', title: 'Insurance', icon: Shield, path: '/services/insurance', description: 'Comprehensive student health and travel insurance starting at $0 premiums.', image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=1000' },
  { id: '04', title: 'Food Delivery', icon: UtensilsCrossed, path: '/services/food', description: 'Curated meal kits and restaurant delivery optimized for busy student schedules.', image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?w=1000' },
  { id: '05', title: 'Visa Services', icon: Plane, path: '/services/visas', description: 'Expert-led immigration support and document management for all student visas.', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1000' },
  { id: '06', title: 'Social Events', icon: Calendar, path: '/services/events', description: 'Networking, cultural, and community mixers organized by university hubs.', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1000' },
  { id: '07', title: 'Employment', icon: Briefcase, path: '/services/employment', description: 'Career coaching and placement services within the student visa regulations.', image: 'https://images.unsplash.com/photo-1454165833767-027508496b4c?w=1000' },
  { id: '08', title: 'Tax Filing', icon: Receipt, path: '/services/taxes', description: 'Simplified tax returns and financial compliance for international residents.', image: 'https://images.unsplash.com/photo-1554224155-12b2e8637568?w=1000' },
  { id: '09', title: 'Student Loans', icon: CreditCard, path: '/services/loans', description: 'Flexible financing and low-interest rates from specialized student lenders.', image: 'https://images.unsplash.com/photo-1589758438368-2103f6f36c5d?w=1000' },
  { id: '10', title: 'Credit Builder', icon: TrendingUp, path: '/services/build-credit', description: 'Establish your financial pedigree with tools designed to boost credit scores.', image: 'https://images.unsplash.com/photo-1611974714851-48206139b7ea?w=1000' },
  { id: '11', title: 'Housing', icon: Home, path: '/services/housing', description: 'Verified student apartments and luxury residences near major campus transit.', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000' },
  { id: '12', title: 'Courses', icon: GraduationCap, path: '/services/courses', description: 'Transferable credits and online prep courses for global university entrance.', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1000' },
  { id: '13', title: 'Forex Exchange', icon: DollarSign, path: '/services/forex', description: 'Real-time currency exchange with RBI-authorized protection and best rates.', image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=1000' },
];

const resourceLinks = [
  { title: 'Blog', icon: BookOpen, path: '/resources/blog', description: 'In-depth articles on planning, visas, and student life' },
  { title: 'Guide', icon: Sparkles, path: '/guide', description: 'Phase-by-phase roadmap for your study abroad journey' },
  { title: 'Tools', icon: GraduationCap, path: '/tools', description: 'Calculators, checklists & utilities for students' },
  { title: 'Community', icon: Users, path: '/coming-soon', description: 'Connect, share & grow with students worldwide' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState(products[0]);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  const isDarkPage = location.pathname === '/';
  const isLightPage = !isDarkPage;

  // 4. TEXT COLOR & THEME LOGIC
  const isPillMode = isScrolled || activeMenu;
  
  // Dynamic theme detection based on both path AND scroll
  const isOverLightsection = isScrolled && isDarkPage; // On home, we scroll from dark hero to light sections
  const navTextColor = (isPillMode || isLightPage) ? (isOverLightsection ? "#0F172A" : "#FFFFFF") : "#FFFFFF";
  const navBgColor = isPillMode 
    ? "rgba(10, 10, 11, 0.96)" 
    : (isLightPage ? "rgba(255, 255, 255, 0.8)" : "rgba(10, 10, 11, 0.0)");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
        <motion.nav
          onMouseLeave={() => setActiveMenu(null)}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            width: isScrolled ? (activeMenu ? "95%" : "85%") : "100%",
            marginTop: isScrolled ? "1.5rem" : "0px",
            height: isScrolled ? (activeMenu ? "84px" : "68px") : "110px",
            borderRadius: isScrolled ? "9999px" : "0px",
            backgroundColor: isScrolled || activeMenu ? "rgba(10, 10, 11, 0.96)" : (isLightPage ? "rgba(255, 255, 255, 0.8)" : "rgba(10, 10, 11, 0.0)"),
            paddingLeft: isScrolled ? "2rem" : "3rem",
            paddingRight: isScrolled ? "2rem" : "3rem",
            backdropFilter: isScrolled || activeMenu || isLightPage ? "blur(20px)" : "blur(0px)",
            boxShadow: isScrolled ? "0 20px 50px rgba(0,0,0,0.3)" : "none",
            borderColor: isScrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
            borderWidth: isScrolled ? "1px" : "0px",
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            mass: 1
          }}
          className="pointer-events-auto relative flex items-center overflow-visible"
        >
          {/* 1. LEFT SECTION */}
          <div className="flex-1 flex items-center gap-2 xl:gap-4 min-w-0">
            {[
              { label: 'HOME', path: '/' },
              { label: 'ABOUT US', path: '/about' },
              { label: 'STEPS', id: 'steps' }
            ].map((link, i) => (
              <div 
                key={link.label}
                onMouseEnter={() => {
                  setHoveredItem(link.label);
                  if (link.id) setActiveMenu(link.id);
                }}
                className="relative h-12 flex items-center px-4"
              >
                {hoveredItem === link.label && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Link 
                  to={link.path || '#'} 
                  className={cn(
                    "relative z-10 text-[10px] xl:text-[11px] font-black tracking-[0.3em] transition-all whitespace-nowrap", 
                    (isPillMode || isLightPage) ? (isOverLightsection ? "text-[#0F172A]" : "text-white") : "text-white",
                    (activeMenu === link.id || location.pathname === link.path) && "text-[#4EA62F]"
                  )}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (i * 0.1) }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
                {link.id && <ChevronDown size={11} className={cn("relative z-10 ml-2 transition-transform duration-500", navTextColor, activeMenu === link.id && "rotate-180 text-[#4EA62F]")} />}
              </div>
            ))}
          </div>

          {/* 2. CENTER SECTION (LOGO) */}
          <div className="shrink-0 flex justify-center px-10">
            <Link to="/" className="flex flex-col items-center group relative">
              <motion.span 
                animate={{
                  fontSize: isScrolled ? "18px" : "22px",
                  letterSpacing: isScrolled ? "0.15em" : "0.3em",
                  color: (isPillMode || isLightPage) ? (isOverLightsection ? "#0F172A" : "#FFFFFF") : "#FFFFFF"
                }}
                className="font-black uppercase flex items-baseline gap-0.5 font-['Outfit',sans-serif]"
              >
                EDUP<span className="text-[#4EA62F]">ATH</span>
              </motion.span>
              <motion.div 
                animate={{
                  width: activeMenu ? "100%" : "0%",
                  opacity: activeMenu ? 1 : 0
                }}
                className="absolute -bottom-2 h-[2.5px] bg-[#4EA62F] blur-[0.5px]" 
              />
            </Link>
          </div>

          {/* 3. RIGHT SECTION */}
          <div className="flex-1 flex items-center justify-end gap-2 xl:gap-4 min-w-0">
            <div className="hidden xl:flex items-center gap-2 xl:gap-4">
              {[
                { label: 'RESOURCES', id: 'resources' },
                { label: 'CONCIERGE', path: '/concierge' }
              ].map((link, i) => (
                <div 
                  key={link.label}
                  onMouseEnter={() => {
                    setHoveredItem(link.label);
                    if (link.id) setActiveMenu(link.id);
                  }}
                  className="relative h-12 flex items-center px-4"
                >
                  {hoveredItem === link.label && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Link 
                    to={link.path || '#'} 
                    className={cn(
                      "relative z-10 text-[10px] xl:text-[11px] font-black tracking-[0.3em] transition-all whitespace-nowrap", 
                      (isPillMode || isLightPage) ? (isOverLightsection ? "text-[#0F172A]" : "text-white") : "text-white",
                      (activeMenu === link.id || location.pathname === link.path) && "text-[#4EA62F]"
                    )}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                  {link.id && <ChevronDown size={11} className={cn("relative z-10 ml-2 transition-transform duration-500", navTextColor, activeMenu === link.id && "rotate-180 text-[#4EA62F]")} />}
                </div>
              ))}
            </div>

            <div className={cn(
                "flex items-center flex-nowrap gap-6 xl:gap-8 pl-6 xl:pl-8 transition-all duration-500 border-l",
                isPillMode ? "border-white/10" : (isLightPage ? "border-black/5" : "border-white/10")
              )}>
              <Link to="/signin" className={cn("group flex items-center gap-2 text-[10px] xl:text-[11px] font-black tracking-[0.3em] hover:text-[#4EA62F] transition-all whitespace-nowrap", isPillMode ? "text-white" : (isLightPage ? "text-[#0F172A]" : "text-white"))}>
                <User size={13} className="group-hover:text-[#4EA62F] transition-transform group-hover:scale-110" />
                SIGN IN
              </Link>
              <Link 
                to="/signup"
                className={cn(
                "group relative h-10 xl:h-11 px-6 xl:px-8 rounded-full bg-[#4EA62F] text-[#0A0A0B] text-[10px] font-black tracking-[0.2em] uppercase overflow-hidden hover:scale-105 transition-all duration-500 shadow-[0_10px_30px_rgba(78,166,47,0.3)] flex items-center justify-center whitespace-nowrap",
                (!isScrolled && !activeMenu) && "h-12 bg-[#0A0A0B] text-white"
              )}>
                <span className="relative z-10 flex items-center gap-2">
                  GET STARTED <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </Link>
            </div>
          </div>

          {/* MEGA MENU: STEPS */}
          <AnimatePresence>
            {activeMenu === 'steps' && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.98 }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-[98vw] max-w-[1400px] pt-6"
              >
                <div className="bg-[#0A0A0B]/98 backdrop-blur-3xl rounded-[3rem] p-16 border border-white/5 shadow-2xl overflow-hidden">
                  <div className="relative z-10 grid grid-cols-12 gap-12 max-w-[1300px] mx-auto">
                  <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
                    {products.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.id}
                          to={item.path}
                          onMouseEnter={() => setHoveredProduct(item)}
                          className={cn(
                            "group flex items-center gap-6 py-4 border-b border-white/5 transition-all duration-500",
                            hoveredProduct?.id === item.id ? "opacity-100 translate-x-1" : "opacity-40"
                          )}
                        >
                          <span className="text-[11px] font-black text-[#4EA62F]/50">{item.id}</span>
                          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#4EA62F] transition-all duration-500">
                            <Icon size={18} className="group-hover:text-[#0A0A0B] transition-colors" />
                          </div>
                          <h3 className="text-xl font-[1000] text-white uppercase tracking-wider group-hover:text-[#4EA62F] transition-colors">
                            {item.title}
                          </h3>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="hidden lg:block lg:col-span-5 relative">
                    <div className="h-full rounded-[3.5rem] overflow-hidden border border-white/10 bg-[#121214] flex flex-col shadow-2xl relative">
                       <AnimatePresence mode="wait">
                          <motion.img
                            key={hoveredProduct.id}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 0.4, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 0.8 }}
                            src={hoveredProduct.image}
                            loading="eager"
                            fetchPriority="high"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                       </AnimatePresence>
                       <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/60 to-transparent" />
                      
                       <div className="relative p-12 mt-auto space-y-6">
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
                               <Activity className="w-3.5 h-3.5 text-[#4EA62F]" />
                               <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">System Node {hoveredProduct.id}</span>
                            </div>
                            <h4 className="text-4xl font-[1000] text-white uppercase leading-none tracking-tighter font-['Outfit',sans-serif]">
                              {hoveredProduct.title}
                            </h4>
                            <p className="text-white/40 text-[15px] font-medium leading-relaxed max-w-sm">
                              {hoveredProduct.description}
                            </p>
                            <div className="pt-6">
                               <button className="flex items-center gap-4 text-white hover:text-[#4EA62F] transition-all group/deploy">
                                 <span className="text-[12px] font-black uppercase tracking-widest border-b border-white/10 pb-1 group-hover/deploy:border-[#4EA62F]">Deploy Intelligence</span>
                                 <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center group-hover/deploy:border-[#4EA62F] group-hover/deploy:rotate-45 transition-all">
                                   <ArrowUpRight size={18} />
                                 </div>
                               </button>
                            </div>
                       </div>
                    </div>
                  </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* MEGA MENU: RESOURCES */}
          <AnimatePresence>
            {activeMenu === 'resources' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-[98vw] max-w-[1200px] pt-6"
              >
                <div className="bg-[#0A0A0B]/98 backdrop-blur-3xl rounded-[3rem] p-12 border border-white/5 shadow-2xl overflow-hidden">
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                   
                   {/* Left Component Grid */}
                   <div className="grid grid-cols-1 gap-4">
                      {resourceLinks.map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={i}
                            to={item.path}
                            className="group flex items-center gap-6 p-6 rounded-[2rem] hover:bg-white/[0.03] transition-all duration-500 border border-transparent hover:border-white/5"
                          >
                             <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#4EA62F] transition-all duration-500 shadow-inner">
                                <Icon size={24} className="text-white group-hover:text-[#0A0A0B]" />
                             </div>
                             <div className="space-y-1">
                                <h4 className="text-lg font-black text-white uppercase tracking-wider group-hover:text-[#4EA62F] transition-colors">
                                   {item.title}
                                </h4>
                                <p className="text-white/30 text-xs font-medium tracking-tight">
                                   {item.description}
                                </p>
                             </div>
                          </Link>
                        );
                      })}
                   </div>

                   {/* Right: Brand Visual */}
                   <div className="hidden lg:block relative h-full min-h-[500px] rounded-[2.5rem] overflow-hidden group/visual">
                      <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80" 
                        alt="Resources" 
                        loading="eager"
                        fetchPriority="high"
                        className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover/visual:grayscale-0 group-hover/visual:scale-105 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-12 space-y-4">
                         <div className="text-[12px] font-black uppercase tracking-[0.5em] text-[#4EA62F]">Academy Core</div>
                         <h3 className="text-5xl font-[1000] text-white uppercase tracking-tighter leading-none font-['Outfit',sans-serif]">
                            Global <br /> Intelligence
                         </h3>
                         <p className="text-white/40 text-[14px] font-medium leading-relaxed max-w-xs">
                            Access the definitive repository for international student relocation and academic success.
                         </p>
                      </div>
                   </div>

                </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.nav>
      </header>

      {/* MOUSE LEAVE HANDLER FOR SHARED PILL */}
      <div 
        className="fixed inset-0 z-[99] pointer-events-none" 
        onMouseEnter={() => setHoveredItem(null)} 
      />

      {/* OVERLAY FOR MEGA MENU */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[90]"
            onMouseEnter={() => setActiveMenu(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;