import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageCircle, Smartphone, Bell, CheckCircle2 } from 'lucide-react';
import { showToast } from '@/app/components/ui/toast';
import { StandardButton } from '@/app/components/ui/standard-button';

interface NotificationChannels {
  email: boolean;
  whatsapp: boolean;
  sms: boolean;
  push: boolean;
}

interface NotificationCategories {
  academicDeadlines: boolean;
  academicResults: boolean;
  academicOffers: boolean;
  financialPayments: boolean;
  financialLoans: boolean;
  financialScholarships: boolean;
  visaAppointments: boolean;
  visaStatus: boolean;
  marketingOffers: boolean;
  marketingEvents: boolean;
  aiInsights: boolean;
  aiReports: boolean;
}

interface QuietHours {
  enabled: boolean;
  start: string;
  end: string;
}

export function NotificationsTab() {
  const [channels, setChannels] = useState<NotificationChannels>(() => {
    const saved = localStorage.getItem('notificationChannels');
    return saved ? JSON.parse(saved) : {
      email: true,
      whatsapp: true,
      sms: false,
      push: true
    };
  });

  const [categories, setCategories] = useState<NotificationCategories>(() => {
    const saved = localStorage.getItem('notificationCategories');
    return saved ? JSON.parse(saved) : {
      academicDeadlines: true,
      academicResults: true,
      academicOffers: true,
      financialPayments: true,
      financialLoans: true,
      financialScholarships: true,
      visaAppointments: true,
      visaStatus: true,
      marketingOffers: false,
      marketingEvents: true,
      aiInsights: true,
      aiReports: true
    };
  });

  const [quietHours, setQuietHours] = useState<QuietHours>(() => {
    const saved = localStorage.getItem('quietHours');
    return saved ? JSON.parse(saved) : {
      enabled: true,
      start: '22:00',
      end: '08:00'
    };
  });

  const [notificationHistory, setNotificationHistory] = useState(() => {
    const saved = localStorage.getItem('notificationHistory');
    return saved ? JSON.parse(saved) : [
      { 
        id: '1',
        title: 'Application Deadline Reminder',
        detail: 'MIT application due in 5 days',
        time: '2 hours ago',
        read: false,
        category: 'academic'
      },
      {
        id: '2',
        title: 'Payment Confirmation',
        detail: 'Stanford application fee received',
        time: '1 day ago',
        read: true,
        category: 'financial'
      },
      {
        id: '3',
        title: 'Visa Appointment Scheduled',
        detail: 'US Embassy - Feb 20, 2026',
        time: '2 days ago',
        read: true,
        category: 'visa'
      },
      {
        id: '4',
        title: 'New Scholarship Available',
        detail: 'Merit scholarship opportunity for Fall 2026',
        time: '3 days ago',
        read: true,
        category: 'financial'
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('notificationChannels', JSON.stringify(channels));
  }, [channels]);

  useEffect(() => {
    localStorage.setItem('notificationCategories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('quietHours', JSON.stringify(quietHours));
  }, [quietHours]);

  useEffect(() => {
    localStorage.setItem('notificationHistory', JSON.stringify(notificationHistory));
  }, [notificationHistory]);

  const toggleChannel = (channel: keyof NotificationChannels) => {
    setChannels({ ...channels, [channel]: !channels[channel] });
    showToast(`${channel} notifications ${!channels[channel] ? 'enabled' : 'disabled'}`, 'success');
  };

  const toggleCategory = (category: keyof NotificationCategories) => {
    setCategories({ ...categories, [category]: !categories[category] });
    showToast(`${category} ${!categories[category] ? 'enabled' : 'disabled'}`, 'success');
  };

  const markAsRead = (id: string) => {
    setNotificationHistory(notificationHistory.map((n: any) => 
      n.id === id ? { ...n, read: true } : n
    ));
    showToast('Notification marked as read', 'success');
  };

  const markAllAsRead = () => {
    setNotificationHistory(notificationHistory.map((n: any) => ({ ...n, read: true })));
    showToast('All notifications marked as read', 'success');
  };

  const testNotification = () => {
    showToast('Test notification sent successfully!', 'success');
  };

  return (
    <div className="space-y-6 md:space-y-8 max-w-[1440px] mx-auto overflow-visible">
      {/* Channel Settings */}
      <section className="overflow-visible">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#0F172A]">Notification Channels</h2>
          <StandardButton
            className="!h-11 !px-4 !text-sm md:!h-12 md:!px-6 md:!text-base whitespace-nowrap w-full sm:w-auto min-h-[44px]"
            onClick={testNotification}
          >
            Test Notification
          </StandardButton>
        </div>
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {[
            { key: 'email' as keyof NotificationChannels, icon: Mail, label: 'Email', desc: 'Receive notifications via email' },
            { key: 'whatsapp' as keyof NotificationChannels, icon: MessageCircle, label: 'WhatsApp', desc: 'Get updates on WhatsApp' },
            { key: 'sms' as keyof NotificationChannels, icon: Smartphone, label: 'SMS', desc: 'Text message notifications' },
            { key: 'push' as keyof NotificationChannels, icon: Bell, label: 'App Push', desc: 'In-app push notifications' }
          ].map((channel) => {
            const Icon = channel.icon;
            const isEnabled = channels[channel.key];
            return (
              <motion.button
                key={channel.key}
                onClick={() => toggleChannel(channel.key)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative overflow-hidden rounded-lg p-4 md:p-5 lg:p-6 border-2 transition-all text-left shadow-sm min-h-[44px] ${
                  isEnabled 
                    ? 'bg-white border-[#4B6E48]' 
                    : 'bg-gray-50 border-gray-300 opacity-60'
                }`}
              >
                {/* Glassmorphic overlay for active state */}
                {isEnabled && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4B6E48]/5 to-transparent pointer-events-none" />
                )}
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <Icon className={`w-5 h-5 md:w-6 md:h-6 ${isEnabled ? 'text-[#4B6E48]' : 'text-gray-400'}`} />
                    <div className="relative">
                      <div className={`w-2.5 h-2.5 rounded-full ${isEnabled ? 'bg-green-500' : 'bg-gray-400'}`} />
                      {isEnabled && (
                        <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-75" />
                      )}
                    </div>
                  </div>
                  <h3 className={`font-bold text-sm md:text-base mb-1 ${isEnabled ? 'text-gray-900' : 'text-gray-500'}`}>
                    {channel.label}
                  </h3>
                  <p className={`text-xs md:text-sm ${isEnabled ? 'text-gray-600' : 'text-gray-400'}`}>
                    {channel.desc}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* Category Settings */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Notification Categories</h2>
        <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm space-y-6">
          {/* Academic */}
          <div>
            <h3 className="font-bold text-base md:text-lg text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              Academic
            </h3>
            <div className="space-y-3 pl-0 sm:pl-4">
              <NotificationToggle
                label="Deadlines"
                description="Application and submission deadlines"
                enabled={categories.academicDeadlines}
                onToggle={() => toggleCategory('academicDeadlines')}
              />
              <NotificationToggle
                label="Results"
                description="Test scores and application results"
                enabled={categories.academicResults}
                onToggle={() => toggleCategory('academicResults')}
              />
              <NotificationToggle
                label="Offers"
                description="University admission offers"
                enabled={categories.academicOffers}
                onToggle={() => toggleCategory('academicOffers')}
              />
            </div>
          </div>

          {/* Financial */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="font-bold text-base md:text-lg text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Financial
            </h3>
            <div className="space-y-3 pl-0 sm:pl-4">
              <NotificationToggle
                label="Payments"
                description="Payment confirmations and reminders"
                enabled={categories.financialPayments}
                onToggle={() => toggleCategory('financialPayments')}
              />
              <NotificationToggle
                label="Loans"
                description="Loan application updates"
                enabled={categories.financialLoans}
                onToggle={() => toggleCategory('financialLoans')}
              />
              <NotificationToggle
                label="Scholarships"
                description="Scholarship opportunities and updates"
                enabled={categories.financialScholarships}
                onToggle={() => toggleCategory('financialScholarships')}
              />
            </div>
          </div>

          {/* Visa */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="font-bold text-base md:text-lg text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              Visa
            </h3>
            <div className="space-y-3 pl-0 sm:pl-4">
              <NotificationToggle
                label="Appointments"
                description="Visa appointment reminders"
                enabled={categories.visaAppointments}
                onToggle={() => toggleCategory('visaAppointments')}
              />
              <NotificationToggle
                label="Status Updates"
                description="Visa application status changes"
                enabled={categories.visaStatus}
                onToggle={() => toggleCategory('visaStatus')}
              />
            </div>
          </div>

          {/* Marketing */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="font-bold text-base md:text-lg text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              Marketing
            </h3>
            <div className="space-y-3 pl-0 sm:pl-4">
              <NotificationToggle
                label="Promotional Offers"
                description="Special deals and discounts"
                enabled={categories.marketingOffers}
                onToggle={() => toggleCategory('marketingOffers')}
              />
              <NotificationToggle
                label="Events"
                description="Webinars, workshops, and community events"
                enabled={categories.marketingEvents}
                onToggle={() => toggleCategory('marketingEvents')}
              />
            </div>
          </div>

          {/* AI */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="font-bold text-base md:text-lg text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-pink-500" />
              AI Insights
            </h3>
            <div className="space-y-3 pl-0 sm:pl-4">
              <NotificationToggle
                label="Profile Insights"
                description="AI-powered profile recommendations"
                enabled={categories.aiInsights}
                onToggle={() => toggleCategory('aiInsights')}
              />
              <NotificationToggle
                label="Weekly Reports"
                description="Progress and activity summaries"
                enabled={categories.aiReports}
                onToggle={() => toggleCategory('aiReports')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quiet Hours */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Quiet Hours</h2>
        <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 md:gap-4 mb-6">
            <div className="flex-1">
              <h3 className="font-bold text-base md:text-lg text-gray-900 mb-1">Do Not Disturb</h3>
              <p className="text-xs md:text-sm text-gray-600">Silence notifications during specific hours</p>
            </div>
            <button
              onClick={() => {
                setQuietHours({ ...quietHours, enabled: !quietHours.enabled });
                showToast(`Quiet hours ${!quietHours.enabled ? 'enabled' : 'disabled'}`, 'success');
              }}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors min-h-[36px] min-w-[44px] flex-shrink-0 ${
                quietHours.enabled ? 'bg-[#4B6E48]' : 'bg-gray-300'
              }`}
              aria-label="Toggle quiet hours"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  quietHours.enabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {quietHours.enabled && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs md:text-sm font-semibold text-gray-600 mb-2 block">Start Time</label>
                <input
                  type="time"
                  value={quietHours.start}
                  onChange={(e) => {
                    setQuietHours({ ...quietHours, start: e.target.value });
                    showToast('Quiet hours updated', 'success');
                  }}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent outline-none text-sm md:text-base text-gray-900 bg-white font-medium min-h-[44px]"
                />
              </div>
              <div>
                <label className="text-xs md:text-sm font-semibold text-gray-600 mb-2 block">End Time</label>
                <input
                  type="time"
                  value={quietHours.end}
                  onChange={(e) => {
                    setQuietHours({ ...quietHours, end: e.target.value });
                    showToast('Quiet hours updated', 'success');
                  }}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent outline-none text-sm md:text-base text-gray-900 bg-white font-medium min-h-[44px]"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Notification History */}
      <section className="overflow-visible">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#0F172A]">Notification History</h2>
          <button
            onClick={markAllAsRead}
            className="text-xs md:text-sm text-[#4B6E48] hover:bg-[#4B6E48]/10 px-3 py-2 rounded-lg transition-colors font-medium w-fit min-h-[36px]"
          >
            Mark all as read
          </button>
        </div>

        <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm">
          <div className="space-y-3">
            {notificationHistory.map((notification: any, index: number) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`flex items-start gap-3 md:gap-4 p-3 md:p-4 border rounded-lg cursor-pointer hover:border-[#4B6E48] transition-colors ${
                  notification.read ? 'border-gray-200 bg-white' : 'border-blue-200 bg-blue-50'
                }`}
              >
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${notification.read ? 'bg-gray-300' : 'bg-blue-500'}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <h4 className="font-bold text-sm md:text-base text-gray-900">{notification.title}</h4>
                    <span className="text-xs md:text-sm text-gray-500 whitespace-nowrap">{notification.time}</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">{notification.detail}</p>
                </div>
                {!notification.read && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="text-xs md:text-sm text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-colors whitespace-nowrap flex-shrink-0"
                  >
                    Mark read
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs md:text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span>{notificationHistory.length} notifications total</span>
              </div>
              <button
                onClick={() => showToast('Opening full notification history...', 'info')}
                className="text-[#4B6E48] hover:bg-[#4B6E48]/10 px-3 py-2 rounded-lg transition-colors font-medium w-fit"
              >
                View all
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function NotificationToggle({ label, description, enabled, onToggle }: {
  label: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex-1 pr-4">
        <p className="font-medium text-sm text-gray-900 mb-0.5">{label}</p>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
      <button
        onClick={onToggle}
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors flex-shrink-0 ${
          enabled ? 'bg-[#4B6E48]' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
            enabled ? 'translate-x-5' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}