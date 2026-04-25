'use client';

import { Link, useLocation } from 'react-router';
import {
  ChevronDown, ArrowUpRight, User, ArrowRight,
  Smartphone, Building2, Shield, UtensilsCrossed,
  Plane, Calendar, Briefcase, Receipt, CreditCard,
  TrendingUp, Home, GraduationCap, DollarSign,
  BookOpen, Sparkles, Users, Activity,
  Menu, X, Zap
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const products = [
  { id: '01', title: 'SIM & eSIM', icon: Smartphone, path: '/services/sim-cards', description: 'High-speed local data with instant eSIM activation and wide global coverage.', image: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?w=1200&q=80' },
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
  { id: '13', title: 'Forex Exchange', icon: DollarSign, path: '/services/forex', description: 'Real-time currency exchange with RBI-authorized protection and best rates.', image: 'https://images.unsplash.com/photo-1611974714851-48206139b7ea?w=1000&q=80' },
];

const resourceLinks = [
  { title: 'Blog', icon: BookOpen, path: '/resources/blog', description: 'In-depth articles on planning, visas, and student life' },
  { title: 'Guide', icon: Sparkles, path: '/guide', description: 'Phase-by-phase roadmap for your study abroad journey' },
  { title: 'Tools', icon: GraduationCap, path: '/tools', description: 'Calculators, checklists & utilities for students' },
  { title: 'Community', icon: Users, path: '/coming-soon', description: 'Connect, share & grow with students worldwide' },
];

export function Navigation() {
  const location = useLocation();
  const isAuthPage = ['/signup', '/sign-up', '/signin', '/sign-in'].includes(location.pathname);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(products[0]);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const lastScrollY = useRef(0);
  const scrollAccumulator = useRef(0);
  const activeMenuRef = useRef(activeMenu);

  useEffect(() => {
    activeMenuRef.current = activeMenu;
  }, [activeMenu]);

  useEffect(() => {
    if (isAuthPage) return;

    const handleScroll = () => {
      const latest = window.scrollY;
      const delta = latest - lastScrollY.current;

      if ((delta > 0 && scrollAccumulator.current < 0) || (delta < 0 && scrollAccumulator.current > 0)) {
        scrollAccumulator.current = 0;
      }
      scrollAccumulator.current += delta;

      if (latest > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(latest > 80);
      lastScrollY.current = latest;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAuthPage]);

  if (isAuthPage) return null;

  const navTextColor = "#FFFFFF";

  return (
    <>
      {/* Wrapper div handles onMouseLeave for the entire nav + dropdown area */}
      <div
        className="fixed top-0 left-0 right-0 z-[10000] flex flex-col items-center pointer-events-none"
        onMouseLeave={() => setActiveMenu(null)}
      >
        {/* NAV BAR */}
        <motion.nav
          animate={{
            y: isVisible ? 0 : -100,
            opacity: isVisible ? 1 : 0,
            width: isScrolled ? "94%" : "100%",
            marginTop: isScrolled ? "1.25rem" : "0px",
            height: isScrolled ? (activeMenu ? "80px" : "64px") : "90px",
            borderRadius: isScrolled ? "2rem" : "0px",
            background: isScrolled
              ? "rgba(10, 10, 10, 0.95)" 
              : "rgba(13, 13, 15, 0.85)", 
            backdropFilter: "blur(20px) saturate(180%)",
            paddingLeft: isScrolled ? "2.5rem" : "4rem",
            paddingRight: isScrolled ? "2.5rem" : "4rem",
            boxShadow: isScrolled
              ? "0 30px 60px -12px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.05)"
              : "0 1px 0 rgba(255, 255, 255, 0.05)", 
            borderColor: isScrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(78, 166, 47, 0.2)",
            borderWidth: isScrolled ? "1px" : "0px",
            borderBottomWidth: "1px", 
          }}
          transition={{
            type: "spring",
            stiffness: 150, // Slightly softer for more organic feel
            damping: 25,
          }}
          style={{
            willChange: "transform, opacity, width",
            transformOrigin: "top center",
          }}
          className="pointer-events-auto relative flex items-center"
        >
          {/* PREMIUM BORDER BEAM EFFECT (Visible at top - along bottom edge) */}
          <AnimatePresence>
            {!isScrolled && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 pointer-events-none overflow-hidden"
                style={{
                  maskImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0))',
                  WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0))',
                }}
              >
                <motion.div
                  animate={{
                    x: ["-100%", "250%"], // Wider range for more dynamic movement
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute bottom-0 left-0 w-[40%] h-[1.5px] bg-gradient-to-r from-transparent via-[#4EA62F] to-transparent"
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(78, 166, 47, 0.6))",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* 1. LEFT SECTION */}
          <div className="flex-1 hidden lg:flex items-center gap-2 xl:gap-4 min-w-0">
            {[
              { label: 'HOME', path: '/' },
              { label: 'ABOUT US', path: '/about' },
              { label: 'STEPS', id: 'steps' }
            ].map((link) => (
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
                    className="absolute inset-0 bg-white/[0.07] backdrop-blur-md rounded-full z-0 border border-white/5"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Link
                  to={link.path || '#'}
                  onClick={() => setActiveMenu(null)}
                  className={cn(
                    "relative z-10 text-[10px] xl:text-[11px] font-black tracking-[0.3em] transition-colors whitespace-nowrap",
                    (activeMenu === link.id || location.pathname === link.path) ? "text-[#4EA62F]" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                  )}
                >
                  {link.label}
                </Link>
                {link.id && (
                  <ChevronDown
                    size={11}
                    className={cn(
                      "relative z-10 ml-2 transition-all duration-500",
                      activeMenu === link.id ? "rotate-180 text-[#4EA62F]" : "text-white/40"
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          {/* 2. CENTER SECTION (LOGO) */}
          <div className="shrink-0 flex justify-center px-10">
            <Link to="/" className="flex flex-col items-center group relative">
              <motion.span
                animate={{
                  fontSize: isScrolled ? "16px" : "24px",
                  letterSpacing: isScrolled ? "0.2em" : "0.5em"
                }}
                className="font-black uppercase flex items-baseline gap-0.5 font-['Outfit',sans-serif] text-white transition-all duration-700 ease-out drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
              >
                EDUP<span className="text-[#4EA62F]">ATH</span>
              </motion.span>
            </Link>
          </div>

          {/* 3. RIGHT SECTION */}
          <div className="flex-1 flex items-center justify-end gap-2 xl:gap-4 min-w-0">
            <div className="hidden xl:flex items-center gap-2 xl:gap-4">
              {[
                { label: 'RESOURCES', id: 'resources' },
                { label: 'CONCIERGE', path: '/concierge' }
              ].map((link) => (
                <div
                  key={link.label}
                  onMouseEnter={() => {
                    setHoveredItem(link.label);
                    if (link.id) setActiveMenu(link.id);
                  }}
                  className="relative h-12 flex items-center px-4 cursor-pointer"
                >
                  {hoveredItem === link.label && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/[0.07] backdrop-blur-md rounded-full z-0 border border-white/5"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Link
                    to={link.path || '#'}
                    onClick={() => setActiveMenu(null)}
                    className={cn(
                      "relative z-10 text-[10px] xl:text-[11px] font-black tracking-[0.4em] transition-all duration-300 whitespace-nowrap uppercase",
                      (activeMenu === link.id || location.pathname === link.path) ? "text-[#4EA62F]" : "text-white/80 hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.id && (
                    <ChevronDown
                      size={11}
                      className={cn(
                        "relative z-10 ml-2 transition-all duration-500",
                        activeMenu === link.id ? "rotate-180 text-[#4EA62F]" : "text-white/40"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white hover:text-[#4EA62F] transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <div className="flex items-center flex-nowrap gap-6 xl:gap-8 pl-6 xl:pl-8 lg:border-l border-white/10">
              <Link to="/signin" className="hidden sm:flex group items-center gap-2 text-[10px] xl:text-[11px] font-black tracking-[0.4em] text-white/60 hover:text-white transition-all whitespace-nowrap">
                <User size={13} className="transition-transform group-hover:scale-110" />
                SIGN IN
              </Link>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link
                  to="/get-started"
                  className="group relative h-10 xl:h-12 px-8 xl:px-10 rounded-full bg-[#4EA62F] text-[#0A0A0B] text-[10px] font-black tracking-[0.3em] uppercase overflow-hidden transition-all duration-500 shadow-[0_15px_40px_rgba(78,166,47,0.3)] flex items-center justify-center whitespace-nowrap"
                >
                  <span className="relative z-20 flex items-center gap-2 font-[1000]">
                    GET STARTED <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform duration-500" />
                  </span>
                  {/* Premium Hover Slide */}
                  <div className="absolute inset-0 bg-[#0F172A] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-700 z-10" />
                  {/* Text Color Swap */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none px-8 xl:px-10">
                    <span className="flex items-center gap-2 text-white text-[10px] font-black tracking-[0.3em] uppercase">
                      GET STARTED <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.nav>

        {/* MEGA MENU DROPDOWNS - Outside motion.nav so parent transforms don't interfere */}
        <AnimatePresence>
          {activeMenu === 'steps' && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="pointer-events-auto w-[98vw] max-w-[1400px] pt-3"
            >
              <div className="bg-[#0A0A0B]/98 backdrop-blur-3xl rounded-[3rem] p-16 border border-white/5 shadow-2xl overflow-hidden relative">
                <div className="relative z-10 grid grid-cols-12 gap-12 max-w-[1300px] mx-auto">
                  <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
                    {products.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.id}
                          to={item.path}
                          onClick={() => setActiveMenu(null)}
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
                          animate={{ opacity: 0.8, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.1 }}
                          transition={{ duration: 0.8 }}
                          src={hoveredProduct.image}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </AnimatePresence>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/60 to-transparent" />

                      <div className="relative p-12 mt-auto space-y-6">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
                          <Activity className="w-3.5 h-3.5 text-[#4EA62F]" />
                          <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">Product Module {hoveredProduct.id}</span>
                        </div>
                        <h4 className="text-2xl font-[1000] text-white uppercase leading-none tracking-tighter">
                          {hoveredProduct.title}
                        </h4>
                        <p className="text-white/40 text-[15px] font-medium leading-relaxed max-w-sm">
                          {hoveredProduct.description}
                        </p>
                        <div className="pt-6">
                          <button className="flex items-center gap-4 text-white hover:text-[#4EA62F] transition-all group/deploy">
                            <span className="text-[12px] font-black uppercase tracking-widest border-b border-white/10 pb-1 group-hover/deploy:border-[#4EA62F]">Explore More</span>
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

        <AnimatePresence>
          {activeMenu === 'resources' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="pointer-events-auto w-[98vw] max-w-[1200px] pt-3"
            >
              <div className="bg-[#0A0A0B]/98 backdrop-blur-3xl rounded-[3rem] p-12 border border-white/5 shadow-2xl overflow-hidden relative">
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <div className="grid grid-cols-1 gap-4">
                    {resourceLinks.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={i}
                          to={item.path}
                          onClick={() => setActiveMenu(null)}
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

                  <div className="hidden lg:block relative h-full min-h-[500px] rounded-[2.5rem] overflow-hidden group/visual">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80"
                      alt="Resources"
                      className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover/visual:grayscale-0 group-hover/visual:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-12 space-y-4">
                      <div className="text-[12px] font-black uppercase tracking-[0.5em] text-[#4EA62F]">Academy Core</div>
                      <h3 className="text-3xl font-[1000] text-white uppercase tracking-tighter leading-none whitespace-nowrap">
                        Global Intelligence
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
      </div>

      {/* OVERLAY FOR MEGA MENU */}
      <AnimatePresence>
        {(activeMenu || isMobileMenuOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-3xl z-[9999] pointer-events-auto"
            onMouseEnter={() => setActiveMenu(null)}
            onClick={() => {
              setActiveMenu(null);
              setIsMobileMenuOpen(false);
            }}
          />
        )}
      </AnimatePresence>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-[#0A0A0B] z-[100000] border-l border-white/10 p-12 flex flex-col pointer-events-auto shadow-2xl"
          >
            <div className="flex flex-col gap-8">
              {[
                { label: 'HOME', path: '/' },
                { label: 'ABOUT US', path: '/about' },
                { label: 'CONCIERGE', path: '/concierge' },
                { label: 'RESOURCES', path: '/resources' },
                { label: 'SIGN IN', path: '/signin' }
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-[1000] text-white hover:text-[#4EA62F] transition-colors uppercase tracking-tighter"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-white/5 space-y-8">
              <p className="text-white/40 text-sm font-medium leading-relaxed">
                Start your journey abroad with Edupath. Simplified support from arrival to achievement.
              </p>
              <Link
                to="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex h-16 w-full items-center justify-center rounded-full bg-[#4EA62F] text-[#0A0A0B] text-sm font-black tracking-widest uppercase hover:scale-105 transition-all shadow-[0_10px_30px_rgba(78,166,47,0.3)]"
              >
                Get Started <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;