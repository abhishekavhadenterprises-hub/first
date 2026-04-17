import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Download, Trash2, X, AlertTriangle } from 'lucide-react';
import { StandardButton } from '@/app/components/ui/standard-button';
import { showToast } from '@/app/components/ui/toast';

interface PrivacySettings {
  profilePublic: boolean;
  profileVisibility: string;
  shareWithUniversities: boolean;
  shareWithBanks: boolean;
  shareWithVisa: boolean;
  shareWithInsurance: boolean;
  emailVisible: boolean;
  phoneVisible: boolean;
  messagingOpen: boolean;
  aiAnalysis: boolean;
  aiTraining: boolean;
  aiRecommendations: boolean;
  twoFactorEnabled: boolean;
}

export function PrivacyTab() {
  const [settings, setSettings] = useState<PrivacySettings>(() => {
    const saved = localStorage.getItem('privacySettings');
    return saved ? JSON.parse(saved) : {
      profilePublic: true,
      profileVisibility: 'Everyone',
      shareWithUniversities: true,
      shareWithBanks: false,
      shareWithVisa: true,
      shareWithInsurance: false,
      emailVisible: false,
      phoneVisible: false,
      messagingOpen: true,
      aiAnalysis: true,
      aiTraining: false,
      aiRecommendations: true,
      twoFactorEnabled: false
    };
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [show2FAModal, setShow2FAModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('privacySettings', JSON.stringify(settings));
  }, [settings]);

  const toggleSetting = (key: keyof PrivacySettings) => {
    setSettings({ ...settings, [key]: !settings[key] });
    showToast(`${key} ${!settings[key] ? 'enabled' : 'disabled'}`, 'success');
  };

  const handleDownloadData = () => {
    const allData = {
      profile: localStorage.getItem('profileUserData'),
      academic: localStorage.getItem('academicDetails'),
      preferences: localStorage.getItem('preferences'),
      services: localStorage.getItem('applicationServices'),
      privacy: localStorage.getItem('privacySettings'),
      exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(allData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `profile-data-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    showToast('Your data has been downloaded', 'success');
  };

  const handleDeleteAccount = () => {
    // Clear all localStorage data
    localStorage.clear();
    setShowDeleteModal(false);
    showToast('Account deleted successfully', 'success');
    setTimeout(() => {
      window.location.href = '/';
    }, 2000);
  };

  const handleEnable2FA = () => {
    setSettings({ ...settings, twoFactorEnabled: true });
    setShow2FAModal(false);
    showToast('Two-factor authentication enabled!', 'success');
  };

  return (
    <div className="space-y-6 md:space-y-8 max-w-[1440px] mx-auto overflow-visible">
      {/* Profile Visibility */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Profile Visibility</h2>
        <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm space-y-4">
          <ToggleSetting
            label="Public Profile"
            description="Allow others to view your public profile"
            enabled={settings.profilePublic}
            onToggle={() => toggleSetting('profilePublic')}
          />
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs md:text-sm text-gray-600 mb-3 font-medium">Who can view your profile?</p>
            <div className="space-y-2 md:space-y-2.5">
              {['Everyone', 'Only Counselors', 'Only Partners', 'Private'].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors min-h-[44px]">
                  <input
                    type="radio"
                    name="visibility"
                    className="w-4 h-4 md:w-5 md:h-5 text-[#4B6E48] border-gray-300 focus:ring-[#4B6E48] flex-shrink-0"
                    checked={settings.profileVisibility === option}
                    onChange={() => {
                      setSettings({ ...settings, profileVisibility: option });
                      showToast(`Profile visibility set to ${option}`, 'success');
                    }}
                  />
                  <span className="text-sm md:text-base text-gray-900 font-medium">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Data Sharing</h2>
        <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm space-y-4">
          <p className="text-xs md:text-sm text-gray-600 mb-4">Control who can access your data</p>
          <ToggleSetting
            label="Universities"
            description="Share profile with universities for applications"
            enabled={settings.shareWithUniversities}
            onToggle={() => toggleSetting('shareWithUniversities')}
          />
          <ToggleSetting
            label="Banking Partners"
            description="Share financial info for loan processing"
            enabled={settings.shareWithBanks}
            onToggle={() => toggleSetting('shareWithBanks')}
          />
          <ToggleSetting
            label="Visa Partners"
            description="Share documents for visa assistance"
            enabled={settings.shareWithVisa}
            onToggle={() => toggleSetting('shareWithVisa')}
          />
          <ToggleSetting
            label="Insurance Providers"
            description="Share details for insurance quotes"
            enabled={settings.shareWithInsurance}
            onToggle={() => toggleSetting('shareWithInsurance')}
          />
        </div>
      </section>

      {/* Contact Privacy */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Contact Privacy</h2>
        <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm space-y-4">
          <ToggleSetting
            label="Email Visibility"
            description="Show email on public profile"
            enabled={settings.emailVisible}
            onToggle={() => toggleSetting('emailVisible')}
          />
          <ToggleSetting
            label="Phone Visibility"
            description="Show phone number on public profile"
            enabled={settings.phoneVisible}
            onToggle={() => toggleSetting('phoneVisible')}
          />
          <ToggleSetting
            label="Direct Messaging"
            description="Allow other students to message you"
            enabled={settings.messagingOpen}
            onToggle={() => toggleSetting('messagingOpen')}
          />
        </div>
      </section>

      {/* Security */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Security</h2>
        <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">Two-Factor Authentication</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-4">
                Add an extra layer of security to your account
              </p>
              {settings.twoFactorEnabled ? (
                <div className="flex items-center gap-2 text-xs md:text-sm text-green-600">
                  <Shield className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="font-semibold">Enabled</span>
                </div>
              ) : (
                <StandardButton
                  className="!h-11 !px-4 !text-sm md:!h-12 md:!px-6 md:!text-base min-h-[44px] w-full sm:w-auto"
                  onClick={() => setShow2FAModal(true)}
                >
                  Enable 2FA
                </StandardButton>
              )}
            </div>
            {settings.twoFactorEnabled && (
              <button
                onClick={() => {
                  setSettings({ ...settings, twoFactorEnabled: false });
                  showToast('Two-factor authentication disabled', 'success');
                }}
                className="text-xs md:text-sm text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors font-medium min-h-[36px] whitespace-nowrap"
              >
                Disable
              </button>
            )}
          </div>
        </div>
      </section>

      {/* AI Permissions */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">AI Permissions</h2>
        <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm space-y-4">
          <ToggleSetting
            label="Profile Analysis"
            description="Allow AI to analyze your profile for insights"
            enabled={settings.aiAnalysis}
            onToggle={() => toggleSetting('aiAnalysis')}
          />
          <ToggleSetting
            label="Data Training"
            description="Use my data to improve AI recommendations (anonymized)"
            enabled={settings.aiTraining}
            onToggle={() => toggleSetting('aiTraining')}
          />
          <ToggleSetting
            label="AI Recommendations"
            description="Receive personalized recommendations from AI"
            enabled={settings.aiRecommendations}
            onToggle={() => toggleSetting('aiRecommendations')}
          />
        </div>
      </section>

      {/* Download / Delete */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Data Control</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDownloadData}
            className="bg-white rounded-lg p-5 md:p-6 border border-gray-200 hover:border-[#4B6E48] transition-all text-left shadow-sm hover:shadow-md min-h-[44px]"
          >
            <Download className="w-7 h-7 md:w-8 md:h-8 text-[#4B6E48] mb-3" />
            <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">Download Your Data</h3>
            <p className="text-xs md:text-sm text-gray-600">Get a copy of all your profile data in JSON format</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowDeleteModal(true)}
            className="bg-white rounded-lg p-5 md:p-6 border border-red-200 hover:border-red-500 transition-all text-left shadow-sm hover:shadow-md min-h-[44px]"
          >
            <Trash2 className="w-7 h-7 md:w-8 md:h-8 text-red-500 mb-3" />
            <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">Delete Profile</h3>
            <p className="text-xs md:text-sm text-gray-600">Permanently delete your account and all data</p>
          </motion.button>
        </div>
      </section>

      {/* Consent History */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Consent History</h2>
        <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm">
          <div className="space-y-3">
            {[
              { action: 'Privacy Policy Accepted', date: 'Jan 1, 2026' },
              { action: 'Data Sharing with Universities', date: 'Jan 5, 2026' },
              { action: 'AI Recommendations Enabled', date: 'Jan 10, 2026' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 p-3 md:p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-xs md:text-sm font-semibold text-gray-900">{item.action}</span>
                </div>
                <span className="text-xs md:text-sm text-gray-500 font-medium whitespace-nowrap">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowDeleteModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Delete Account?</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                This action cannot be undone. All your data, documents, and progress will be permanently deleted.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-900 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteAccount}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Delete Forever
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {show2FAModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShow2FAModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Enable 2FA</h3>
                <button
                  onClick={() => setShow2FAModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <div className="w-32 h-32 bg-white rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Shield className="w-16 h-16 text-[#4B6E48]" />
                  </div>
                  <p className="text-sm text-gray-600">Scan this QR code with your authenticator app</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Verification Code</label>
                  <input
                    type="text"
                    placeholder="Enter 6-digit code"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => setShow2FAModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-900 font-medium"
                  >
                    Cancel
                  </button>
                  <StandardButton
                    onClick={handleEnable2FA}
                    className="flex-1 !h-10"
                  >
                    Enable 2FA
                  </StandardButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ToggleSetting({ label, description, enabled, onToggle }: {
  label: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-start justify-between gap-3 p-3 md:p-4 border border-gray-200 rounded-lg hover:border-[#4B6E48]/30 transition-colors">
      <div className="flex-1 pr-2 md:pr-4 min-w-0">
        <p className="font-semibold text-sm md:text-base text-gray-900 mb-1">{label}</p>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
      <button
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 md:h-7 md:w-12 items-center rounded-full transition-all duration-300 flex-shrink-0 shadow-inner min-h-[36px] min-w-[44px] ${
          enabled ? 'bg-[#4B6E48]' : 'bg-gray-300'
        }`}
        style={{
          boxShadow: enabled ? '0 2px 8px rgba(75, 110, 72, 0.3)' : '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}
        aria-label={`Toggle ${label}`}
      >
        <span
          className={`inline-block h-4 w-4 md:h-5 md:w-5 transform rounded-full bg-white transition-all duration-300 shadow-md ${
            enabled ? 'translate-x-6 md:translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}