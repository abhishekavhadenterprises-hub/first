import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { ProfileHeader } from '@/app/components/profile/ProfileHeader';
import { OverviewTab } from '@/app/components/profile/OverviewTab';
import { AcademicTab } from '@/app/components/profile/AcademicTab';
import { PreferencesTab } from '@/app/components/profile/PreferencesTab';
import { ServicesTab } from '@/app/components/profile/ServicesTab';
import { PublicProfileTab } from '@/app/components/profile/PublicProfileTab';
import { PrivacyTab } from '@/app/components/profile/PrivacyTab';
import { AccountTab } from '@/app/components/profile/AccountTab';
import { NotificationsTab } from '@/app/components/profile/NotificationsTab';
import { ToastContainer } from '@/app/components/ui/toast';
import {
  LayoutDashboard,
  GraduationCap,
  Settings,
  Globe,
  Lock,
  User,
  Bell,
  Briefcase
} from 'lucide-react';

const tabs = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'academic', label: 'Academic & Career', icon: GraduationCap },
  { id: 'preferences', label: 'Preferences', icon: Settings },
  { id: 'services', label: 'Services', icon: Briefcase },
  { id: 'public', label: 'Public Profile', icon: Globe },
  { id: 'privacy', label: 'Privacy', icon: Lock },
  { id: 'account', label: 'Account', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell }
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState('overview');

  // Scroll direction detection for sticky header
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Scroll active tab into view
  useEffect(() => {
    const activeButton = document.querySelector(`button[data-tab="${activeTab}"]`);
    if (activeButton) {
      activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeTab]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'academic':
        return <AcademicTab />;
      case 'preferences':
        return <PreferencesTab />;
      case 'services':
        return <ServicesTab />;
      case 'public':
        return <PublicProfileTab />;
      case 'privacy':
        return <PrivacyTab />;
      case 'account':
        return <AccountTab />;
      case 'notifications':
        return <NotificationsTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Profile Header - Scrolls with page */}
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <ProfileHeader />
        </div>

        {/* Tab Navigation - Enhanced with Horizontal Scroll & Fade Gradient */}
        <div className={`
          w-full px-3 sm:px-4 md:px-6 sticky z-30
          transition-all duration-300 ease-in-out
          ${scrollDirection === 'down' ? 'top-0' : 'top-20'}
        `}>
          <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl px-3 sm:px-4 md:px-6 lg:px-8 shadow-sm border border-[#E2E8F0] relative">
            {/* Right-side fade gradient mask */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white/95 via-white/50 to-transparent pointer-events-none z-10 rounded-r-2xl" />
            
            <div 
              className="flex overflow-x-auto overflow-y-hidden scroll-smooth" 
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    data-tab={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-xs sm:text-sm font-normal whitespace-nowrap border-b-2 transition-all flex-shrink-0 ${
                      isActive
                        ? 'border-[#4B6E48] text-[#4B6E48] font-medium'
                        : 'border-transparent text-[#64748B] hover:text-[#0F172A]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content - No Inner Overflow */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 pb-24">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-visible"
          >
            {renderTabContent()}
          </motion.div>
        </div>
      </div>

      <Footer />
      <ToastContainer />
    </>
  );
}