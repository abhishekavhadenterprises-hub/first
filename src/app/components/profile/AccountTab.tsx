import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Lock, Globe, Clock, Monitor, Trash2, X, AlertTriangle, ChevronDown } from 'lucide-react';
import { StandardButton } from '@/app/components/ui/standard-button';
import { showToast } from '@/app/components/ui/toast';

interface AccountData {
  email: string;
  phone: string;
  otpEnabled: boolean;
  language: string;
  timezone: string;
  currency: string;
  theme: string;
}

interface ActiveSession {
  id: string;
  device: string;
  location: string;
  lastActive: string;
  current: boolean;
}

export function AccountTab() {
  const [accountData, setAccountData] = useState<AccountData>(() => {
    const saved = localStorage.getItem('accountData');
    return saved ? JSON.parse(saved) : {
      email: 'john.doe@example.com',
      phone: '+1 (234) 567-8900',
      otpEnabled: true,
      language: 'English',
      timezone: 'PST (UTC-8)',
      currency: 'USD ($)',
      theme: 'Light'
    };
  });

  const [activeSessions, setActiveSessions] = useState<ActiveSession[]>(() => {
    const saved = localStorage.getItem('activeSessions');
    return saved ? JSON.parse(saved) : [
      { id: '1', device: 'MacBook Pro', location: 'San Francisco, US', lastActive: '2 minutes ago', current: true },
      { id: '2', device: 'iPhone 14', location: 'San Francisco, US', lastActive: '1 hour ago', current: false },
      { id: '3', device: 'Chrome on Windows', location: 'Mumbai, India', lastActive: '2 days ago', current: false }
    ];
  });

  const [connectedAccounts, setConnectedAccounts] = useState(() => {
    const saved = localStorage.getItem('connectedAccounts');
    return saved ? JSON.parse(saved) : [
      { provider: 'Google', connected: true, email: 'john.doe@gmail.com' },
      { provider: 'Apple', connected: false, email: null },
      { provider: 'LinkedIn', connected: true, email: 'john-doe' }
    ];
  });

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);

  const loginHistory = [
    { date: 'Feb 5, 2026 10:30 AM', location: 'San Francisco, US', device: 'MacBook Pro', status: 'success' },
    { date: 'Feb 4, 2026 08:15 PM', location: 'San Francisco, US', device: 'iPhone 14', status: 'success' },
    { date: 'Feb 3, 2026 02:45 PM', location: 'Mumbai, India', device: 'Chrome', status: 'failed' }
  ];

  useEffect(() => {
    localStorage.setItem('accountData', JSON.stringify(accountData));
  }, [accountData]);

  useEffect(() => {
    localStorage.setItem('activeSessions', JSON.stringify(activeSessions));
  }, [activeSessions]);

  useEffect(() => {
    localStorage.setItem('connectedAccounts', JSON.stringify(connectedAccounts));
  }, [connectedAccounts]);

  const handleRevokeSession = (sessionId: string) => {
    setActiveSessions(activeSessions.filter(s => s.id !== sessionId));
    showToast('Session revoked successfully', 'success');
  };

  const handleConnectAccount = (provider: string) => {
    setConnectedAccounts(connectedAccounts.map(acc => 
      acc.provider === provider ? { ...acc, connected: true, email: `connected@${provider.toLowerCase()}.com` } : acc
    ));
    showToast(`${provider} account connected!`, 'success');
  };

  const handleDisconnectAccount = (provider: string) => {
    setConnectedAccounts(connectedAccounts.map(acc => 
      acc.provider === provider ? { ...acc, connected: false, email: null } : acc
    ));
    showToast(`${provider} account disconnected`, 'success');
  };

  const handleDeactivateAccount = () => {
    showToast('Account deactivated. You can reactivate anytime.', 'info');
    setShowDeactivateModal(false);
  };

  return (
    <div className="space-y-6 md:space-y-8 max-w-[1440px] mx-auto overflow-visible">
      {/* Login Details */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Login Details</h2>
        <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm space-y-4">
          <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center min-[500px]:justify-between gap-3 p-3 md:p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
            <div className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs md:text-sm text-gray-600 mb-0.5">Email</p>
                <p className="font-semibold text-sm md:text-base text-gray-900 truncate">{accountData.email}</p>
              </div>
            </div>
            <button
              onClick={() => setShowEmailModal(true)}
              className="text-xs md:text-sm text-[#4B6E48] hover:bg-[#4B6E48]/10 px-3 py-2 rounded-lg transition-colors font-medium whitespace-nowrap min-h-[36px]"
            >
              Change
            </button>
          </div>

          <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center min-[500px]:justify-between gap-3 p-3 md:p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
            <div className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs md:text-sm text-gray-600 mb-0.5">Phone</p>
                <p className="font-semibold text-sm md:text-base text-gray-900 truncate">{accountData.phone}</p>
              </div>
            </div>
            <button
              onClick={() => setShowPhoneModal(true)}
              className="text-xs md:text-sm text-[#4B6E48] hover:bg-[#4B6E48]/10 px-3 py-2 rounded-lg transition-colors font-medium whitespace-nowrap min-h-[36px]"
            >
              Change
            </button>
          </div>

          <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center min-[500px]:justify-between gap-3 p-3 md:p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
            <div className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
              <Lock className="w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs md:text-sm text-gray-600 mb-0.5">Password</p>
                <p className="font-semibold text-sm md:text-base text-gray-900">••••••••</p>
              </div>
            </div>
            <button
              onClick={() => setShowPasswordModal(true)}
              className="text-xs md:text-sm text-[#4B6E48] hover:bg-[#4B6E48]/10 px-3 py-2 rounded-lg transition-colors font-medium whitespace-nowrap min-h-[36px]"
            >
              Change
            </button>
          </div>

          <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-start min-[500px]:justify-between gap-3 md:gap-4 p-3 md:p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm md:text-base text-gray-900 mb-1">OTP Settings</p>
              <p className="text-xs md:text-sm text-gray-600">Receive one-time passwords via SMS</p>
            </div>
            <button
              onClick={() => {
                setAccountData({ ...accountData, otpEnabled: !accountData.otpEnabled });
                showToast(`OTP ${!accountData.otpEnabled ? 'enabled' : 'disabled'}`, 'success');
              }}
              className={`relative inline-flex h-6 w-11 items-center rounded-full min-h-[36px] min-w-[44px] transition-colors ${
                accountData.otpEnabled ? 'bg-[#4B6E48]' : 'bg-gray-300'
              }`}
              aria-label="Toggle OTP"
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                accountData.otpEnabled ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Security</h2>
        <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm space-y-6">
          <div>
            <h3 className="font-bold text-base md:text-lg text-gray-900 mb-4">Active Sessions</h3>
            <div className="space-y-3">
              {activeSessions.map((session) => (
                <div key={session.id} className="flex flex-col min-[500px]:flex-row min-[500px]:items-center min-[500px]:justify-between gap-3 p-3 md:p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <div className="flex items-start gap-3 min-w-0 flex-1">
                    <Monitor className="w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-sm md:text-base text-gray-900 flex flex-wrap items-center gap-2 mb-1">
                        <span className="truncate">{session.device}</span>
                        {session.current && (
                          <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full whitespace-nowrap">
                            This device
                          </span>
                        )}
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">{session.location} • {session.lastActive}</p>
                    </div>
                  </div>
                  {!session.current && (
                    <button
                      onClick={() => handleRevokeSession(session.id)}
                      className="text-xs md:text-sm text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors font-medium whitespace-nowrap min-h-[36px] w-fit"
                    >
                      Revoke
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg text-gray-900 mb-4">Login History</h3>
            <div className="space-y-2">
              {loginHistory.map((log, index) => (
                <div key={index} className="flex flex-col min-[500px]:flex-row min-[500px]:items-center min-[500px]:justify-between gap-2 p-3 md:p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-xs md:text-sm text-gray-900 mb-0.5">{log.date}</p>
                    <p className="text-xs md:text-sm text-gray-600">{log.location} • {log.device}</p>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap w-fit ${
                    log.status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {log.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connected Accounts */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Connected Accounts</h2>
        <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm space-y-4">
          {connectedAccounts.map((account: any, index: number) => (
            <div key={index} className="flex flex-col min-[500px]:flex-row min-[500px]:items-center min-[500px]:justify-between gap-3 p-3 md:p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-sm md:text-base text-gray-900 mb-0.5">{account.provider}</p>
                {account.connected && account.email && (
                  <p className="text-xs md:text-sm text-gray-600 truncate">{account.email}</p>
                )}
              </div>
              {account.connected ? (
                <button
                  onClick={() => handleDisconnectAccount(account.provider)}
                  className="text-xs md:text-sm text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors font-medium whitespace-nowrap min-h-[36px] w-fit"
                >
                  Disconnect
                </button>
              ) : (
                <StandardButton
                  className="!h-10 !px-4 !text-sm md:!h-11 md:!px-5 md:!text-base min-h-[44px] whitespace-nowrap w-full min-[500px]:w-auto"
                  onClick={() => handleConnectAccount(account.provider)}
                >
                  Connect
                </StandardButton>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Preferences */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Preferences</h2>
        <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
            <div>
              <label className="text-xs md:text-sm font-semibold text-gray-600 mb-2 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 md:w-4 md:h-4" />
                Language
              </label>
              <select
                value={accountData.language}
                onChange={(e) => {
                  setAccountData({ ...accountData, language: e.target.value });
                  showToast('Language updated', 'success');
                }}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent outline-none text-sm md:text-base text-gray-900 bg-white font-medium min-h-[44px]"
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>

            <div>
              <label className="text-xs md:text-sm font-semibold text-gray-600 mb-2 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
                Timezone
              </label>
              <select
                value={accountData.timezone}
                onChange={(e) => {
                  setAccountData({ ...accountData, timezone: e.target.value });
                  showToast('Timezone updated', 'success');
                }}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent outline-none text-sm md:text-base text-gray-900 bg-white font-medium min-h-[44px]"
              >
                <option>PST (UTC-8)</option>
                <option>EST (UTC-5)</option>
                <option>IST (UTC+5:30)</option>
              </select>
            </div>

            <div>
              <label className="text-xs md:text-sm font-semibold text-gray-600 mb-2 block">Currency</label>
              <select
                value={accountData.currency}
                onChange={(e) => {
                  setAccountData({ ...accountData, currency: e.target.value });
                  showToast('Currency updated', 'success');
                }}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent outline-none text-sm md:text-base text-gray-900 bg-white font-medium min-h-[44px]"
              >
                <option>USD ($)</option>
                <option>GBP (£)</option>
                <option>INR (₹)</option>
              </select>
            </div>

            <div>
              <label className="text-xs md:text-sm font-semibold text-gray-600 mb-2 block">Theme</label>
              <select
                value={accountData.theme}
                onChange={(e) => {
                  setAccountData({ ...accountData, theme: e.target.value });
                  showToast('Theme updated', 'success');
                }}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent outline-none text-sm md:text-base text-gray-900 bg-white font-medium min-h-[44px]"
              >
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Account Control */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Account Control</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowDeactivateModal(true)}
            className="bg-white rounded-lg p-5 md:p-6 border border-gray-200 hover:border-amber-500 transition-all text-left shadow-sm hover:shadow-md min-h-[44px]"
          >
            <Lock className="w-7 h-7 md:w-8 md:h-8 text-amber-500 mb-3" />
            <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">Deactivate Account</h3>
            <p className="text-xs md:text-sm text-gray-600">Temporarily disable your account</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = '/profile?tab=privacy'}
            className="bg-white rounded-lg p-5 md:p-6 border border-red-200 hover:border-red-500 transition-all text-left shadow-sm hover:shadow-md min-h-[44px]"
          >
            <Trash2 className="w-7 h-7 md:w-8 md:h-8 text-red-500 mb-3" />
            <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">Delete Account</h3>
            <p className="text-xs md:text-sm text-gray-600">Permanently delete your account</p>
          </motion.button>
        </div>
      </section>

      {/* Modals */}
      <AnimatePresence>
        {showPasswordModal && (
          <SimpleModal title="Change Password" onClose={() => setShowPasswordModal(false)}>
            <form onSubmit={(e) => { e.preventDefault(); setShowPasswordModal(false); showToast('Password changed successfully!', 'success'); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Current Password</label>
                <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">New Password</label>
                <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Confirm New Password</label>
                <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white" />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowPasswordModal(false)} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-900 font-medium">Cancel</button>
                <StandardButton type="submit" className="flex-1 !h-10">Update Password</StandardButton>
              </div>
            </form>
          </SimpleModal>
        )}

        {showEmailModal && (
          <SimpleModal title="Change Email" onClose={() => setShowEmailModal(false)}>
            <form onSubmit={(e) => { e.preventDefault(); setShowEmailModal(false); showToast('Email updated successfully!', 'success'); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">New Email</label>
                <input type="email" defaultValue={accountData.email} onChange={(e) => setAccountData({...accountData, email: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white" />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowEmailModal(false)} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-900 font-medium">Cancel</button>
                <StandardButton type="submit" className="flex-1 !h-10">Update Email</StandardButton>
              </div>
            </form>
          </SimpleModal>
        )}

        {showPhoneModal && (
          <SimpleModal title="Change Phone" onClose={() => setShowPhoneModal(false)}>
            <form onSubmit={(e) => { e.preventDefault(); setShowPhoneModal(false); showToast('Phone updated successfully!', 'success'); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">New Phone Number</label>
                <input type="tel" defaultValue={accountData.phone} onChange={(e) => setAccountData({...accountData, phone: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white" />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowPhoneModal(false)} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-900 font-medium">Cancel</button>
                <StandardButton type="submit" className="flex-1 !h-10">Update Phone</StandardButton>
              </div>
            </form>
          </SimpleModal>
        )}

        {showDeactivateModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowDeactivateModal(false)}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-white rounded-2xl p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Deactivate Account?</h3>
              </div>
              <p className="text-gray-600 mb-6">Your account will be temporarily disabled. You can reactivate it anytime by logging in.</p>
              <div className="flex gap-3">
                <button onClick={() => setShowDeactivateModal(false)} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-900 font-medium">Cancel</button>
                <button onClick={handleDeactivateAccount} className="flex-1 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium">Deactivate</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SimpleModal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-white rounded-2xl p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
}