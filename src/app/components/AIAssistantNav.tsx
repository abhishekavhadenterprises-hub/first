import { Link, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { Home, BookOpen, PenTool, Mic, Headphones, ClipboardCheck, BarChart3, Brain, History, User, Settings } from 'lucide-react';
import { useNavigation } from '@/app/contexts/NavigationContext';

export function AIAssistantNav() {
  const location = useLocation();
  const { isMainNavDropdownOpen } = useNavigation();
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const [preservedNavbarState, setPreservedNavbarState] = useState(false);

  // Detect location changes (tab clicks) and preserve navbar state
  useEffect(() => {
    setPreservedNavbarState(isNavbarHidden); // Save current navbar state
    setIsNavigating(true);
    
    // Scroll to top when navigating to a new tab
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    const timer = setTimeout(() => {
      setIsNavigating(false);
      setLastScrollY(window.scrollY);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (isNavigating) {
        // During navigation, maintain the preserved state
        setIsNavbarHidden(preservedNavbarState);
        return;
      }
      
      const currentScrollY = window.scrollY;
      
      // Match main navbar behavior: hide when scrolling down, show when scrolling up
      if (currentScrollY < 10) {
        setIsNavbarHidden(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsNavbarHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsNavbarHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isNavigating, preservedNavbarState]);

  const navItems = [
    { path: '/ai-assistant/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/ai-assistant/reading', icon: BookOpen, label: 'Reading' },
    { path: '/ai-assistant/writing', icon: PenTool, label: 'Writing' },
    { path: '/ai-assistant/speaking', icon: Mic, label: 'Speaking' },
    { path: '/ai-assistant/listening', icon: Headphones, label: 'Listening' },
    { path: '/ai-assistant/mock-tests', icon: ClipboardCheck, label: 'Mock Tests' },
    { path: '/ai-assistant/results-analytics', icon: BarChart3, label: 'Results' },
    { path: '/ai-assistant/improvement-plan', icon: Brain, label: 'Plan' },
    { path: '/ai-assistant/progress-log', icon: History, label: 'History' },
  ];

  return (
    <div className={`w-full px-6 py-3 fixed left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
      isMainNavDropdownOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
    } ${isNavbarHidden ? 'top-0' : 'top-[80px]'}`}>
      <div className={`max-w-7xl mx-auto bg-[#E8EBE4] rounded-[20px] px-8 shadow-sm ${location.pathname.includes('/resources') ? 'hidden' : ''}`}>
        <div className="flex items-center justify-between h-14">
          {/* Main Navigation */}
          <div className="flex items-center gap-1 overflow-x-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-3 text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${
                    isActive
                      ? 'text-[#4B6E48] border-[#4B6E48]'
                      : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden lg:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <Link to="/profile">
              <button className="p-2 hover:bg-white/50 rounded-lg transition-colors" title="Profile">
                <User className="w-5 h-5 text-gray-700" />
              </button>
            </Link>
            <Link to="/profile">
              <button className="p-2 hover:bg-white/50 rounded-lg transition-colors" title="Settings">
                <Settings className="w-5 h-5 text-gray-700" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}