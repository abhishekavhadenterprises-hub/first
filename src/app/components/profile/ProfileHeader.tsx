import { Eye, Edit2, Share2, Copy, Check, Camera } from 'lucide-react';
import { StandardButton } from '../ui/standard-button';
import { useState, useRef, useEffect } from 'react';
import { showToast } from '@/app/components/ui/toast';
import { useNavigate } from 'react-router';

export function ProfileHeader() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem('profileUserData');
    return saved ? JSON.parse(saved) : {
      name: 'John Doe',
      email: 'john.doe@example.com',
      studentId: 'STU2024001234',
      initials: 'JD',
      profilePhoto: null
    };
  });

  const [currentStage, setCurrentStage] = useState(() => {
    const savedStage = localStorage.getItem('journeyStage');
    const stageId = savedStage ? parseInt(savedStage) : 3;
    const stages = ['Exploration', 'Shortlisting', 'Applications', 'Acceptance', 'Pre-departure', 'Arrival'];
    return stages[stageId - 1] || 'Applications';
  });

  const [profileStrength, setProfileStrength] = useState(0);

  // Calculate profile strength dynamically
  useEffect(() => {
    const profileHealth = localStorage.getItem('profileHealth');
    const academicData = localStorage.getItem('academicDetails');
    const preferences = localStorage.getItem('preferences');
    
    let strength = 0;
    
    // Base data (25%)
    if (userData.name && userData.email) strength += 25;
    
    // Profile health (25%)
    if (profileHealth) {
      const health = JSON.parse(profileHealth);
      const completed = health.filter((item: any) => item.status === 'complete').length;
      strength += Math.round((completed / health.length) * 25);
    }
    
    // Academic data (25%)
    if (academicData) strength += 25;
    
    // Preferences (25%)
    if (preferences) strength += 25;
    
    setProfileStrength(strength);
  }, [userData]);

  // Listen for journey stage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const savedStage = localStorage.getItem('journeyStage');
      if (savedStage) {
        const stageId = parseInt(savedStage);
        const stages = ['Exploration', 'Shortlisting', 'Applications', 'Acceptance', 'Pre-departure', 'Arrival'];
        setCurrentStage(stages[stageId - 1] || 'Applications');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    const interval = setInterval(handleStorageChange, 500);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  // Save user data to localStorage
  useEffect(() => {
    localStorage.setItem('profileUserData', JSON.stringify(userData));
  }, [userData]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        showToast('File size must be less than 5MB', 'error');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData({ ...userData, profilePhoto: reader.result as string });
        showToast('Profile photo updated successfully!', 'success');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCompleteProfile = () => {
    showToast('Complete your profile by filling all sections', 'info');
    // Scroll to first incomplete section
    const tabs = document.querySelectorAll('[role="tab"]');
    if (tabs.length > 1) {
      (tabs[1] as HTMLElement).click();
    }
  };

  const handleViewPublicProfile = () => {
    // Navigate to public profile view in same tab
    navigate('/profile/public-view');
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        {/* Profile Photo */}
        <div className="relative group flex-shrink-0">
          {userData.profilePhoto ? (
            <img
              src={userData.profilePhoto}
              alt="Profile"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
            />
          ) : (
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] flex items-center justify-center text-white text-2xl md:text-3xl font-bold">
              {userData.initials}
            </div>
          )}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-0 right-0 w-7 h-7 md:w-8 md:h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100 hover:bg-gray-50 transition-colors"
            title="Upload profile photo"
            aria-label="Upload profile photo"
          >
            <Camera className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-600" />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
          />
        </div>

        {/* Profile Info - Stack on Mobile */}
        <div className="flex-1 w-full md:w-auto">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">{userData.name}</h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 w-fit">
              {currentStage}
            </span>
          </div>
          <p className="text-gray-600 text-sm md:text-base mb-1">{userData.email}</p>
          <p className="text-gray-500 text-xs md:text-sm">Student ID: {userData.studentId}</p>

          {/* Profile Strength - Enhanced Spacing */}
          <div className="mt-4 md:mt-5 max-w-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs md:text-sm font-medium text-gray-700">Profile Strength</span>
              <span className="text-sm md:text-base font-bold text-[#4B6E48]">{profileStrength}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 md:h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#4B6E48] to-[#5d8a59] h-2.5 md:h-3 rounded-full transition-all duration-500"
                style={{ width: `${profileStrength}%` }}
              />
            </div>
            <p className="text-xs md:text-sm text-gray-500 mt-1.5 md:mt-2">
              {profileStrength < 100 ? 'Complete your profile to unlock all features' : 'Your profile is complete!'}
            </p>
          </div>
        </div>

        {/* Action Buttons - Stack on Small Mobile, Horizontal on Larger */}
        <div className="flex flex-col min-[400px]:flex-row gap-2.5 md:gap-3 w-full md:w-auto mt-2 md:mt-0">
          <StandardButton
            className="!h-11 !px-4 !text-sm md:!h-12 md:!px-6 md:!text-base whitespace-nowrap w-full min-[400px]:w-auto min-h-[44px]"
            onClick={handleCompleteProfile}
          >
            Complete Profile
          </StandardButton>
          <button
            onClick={handleViewPublicProfile}
            className="h-11 md:h-12 px-4 md:px-6 rounded-xl border-2 border-gray-300 text-sm md:text-base font-medium hover:border-[#4B6E48] hover:text-[#4B6E48] transition-colors flex items-center justify-center gap-2 whitespace-nowrap text-gray-900 w-full min-[400px]:w-auto min-h-[44px]"
          >
            <Eye className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">View Public Profile</span>
            <span className="sm:hidden">View Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}