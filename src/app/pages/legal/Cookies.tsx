import { motion } from 'motion/react';
import { Footer } from '@/app/components/Footer';
import { Cookie, Mail, Settings, Shield, Eye, ToggleLeft } from 'lucide-react';
import { useState } from 'react';

export default function Cookies() {
  const lastUpdated = "February 5, 2026";
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    preferences: true
  });

  const sections = [
    { id: 'what-are', title: 'What Are Cookies?' },
    { id: 'how-we-use', title: 'How We Use Cookies' },
    { id: 'types', title: 'Types of Cookies We Use' },
    { id: 'third-party', title: 'Third-Party Cookies' },
    { id: 'manage', title: 'How to Manage Cookies' },
    { id: 'your-choices', title: 'Your Choices' },
    { id: 'updates', title: 'Updates to This Policy' },
    { id: 'contact', title: 'Contact Us' }
  ];

  const cookieTypes = [
    {
      type: 'Essential Cookies',
      purpose: 'Required for basic site functionality',
      examples: 'Login authentication, shopping cart, security features',
      duration: 'Session or up to 1 year',
      canDisable: false,
      icon: Shield,
      color: 'green'
    },
    {
      type: 'Analytics Cookies',
      purpose: 'Help us understand how visitors use our site',
      examples: 'Google Analytics, page views, user behavior tracking',
      duration: 'Up to 2 years',
      canDisable: true,
      icon: Eye,
      color: 'blue'
    },
    {
      type: 'Marketing Cookies',
      purpose: 'Track visitors across websites for advertising',
      examples: 'Facebook Pixel, Google Ads, retargeting campaigns',
      duration: 'Up to 90 days',
      canDisable: true,
      icon: ToggleLeft,
      color: 'purple'
    },
    {
      type: 'Preference Cookies',
      purpose: 'Remember your preferences and settings',
      examples: 'Language selection, region, display preferences',
      duration: 'Up to 1 year',
      canDisable: true,
      icon: Settings,
      color: 'amber'
    }
  ];

  const handleToggle = (key: string) => {
    if (key !== 'essential') { // Essential cookies cannot be disabled
      setCookiePreferences(prev => ({
        ...prev,
        [key]: !prev[key as keyof typeof prev]
      }));
    }
  };

  return (
    <>

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-[#4B6E48]/5 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#4B6E48]/10 rounded-full text-[#4B6E48] text-sm font-medium mb-6"
          >
            <Cookie className="w-4 h-4" />
            Legal
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-gray-900"
          >
            Cookie Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Last updated: {lastUpdated}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Table of Contents - Sticky Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-500">Contents</h3>
                  <nav className="space-y-2">
                    {sections.map((section, index) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-sm text-gray-600 hover:text-[#4B6E48] transition-colors py-1"
                      >
                        {index + 1}. {section.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Cookie Preferences Panel */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-500">
                    Cookie Preferences
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(cookiePreferences).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700 capitalize">{key}</span>
                        <button
                          onClick={() => handleToggle(key)}
                          disabled={key === 'essential'}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            value ? 'bg-[#4B6E48]' : 'bg-gray-300'
                          } ${key === 'essential' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              value ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 py-2 px-4 bg-[#4B6E48] text-white rounded-lg text-sm font-medium hover:bg-[#3d5a3a] transition-colors">
                    Save Preferences
                  </button>
                </div>
              </div>
            </motion.aside>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 space-y-12">
                
                {/* Introduction */}
                <div className="pb-8 border-b border-gray-200">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This Cookie Policy explains how we use cookies and similar tracking technologies on our website. By using our services, you consent to the use of cookies as described in this policy.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
                    <Cookie className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-blue-900 font-medium mb-1">Quick Summary</p>
                      <p className="text-sm text-blue-700">
                        We use cookies to improve your experience, analyze site usage, and deliver personalized content. You can manage your cookie preferences at any time.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 1. What Are Cookies */}
                <div id="what-are" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Cookie className="w-6 h-6 text-[#4B6E48]" />
                    1. What Are Cookies?
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience.
                  </p>
                  <p className="text-gray-700">
                    Cookies help websites remember your actions and preferences (such as login details, language, font size, and other display preferences) over a period of time, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.
                  </p>
                </div>

                {/* 2. How We Use Cookies */}
                <div id="how-we-use" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
                  <p className="text-gray-700 mb-4">We use cookies for the following purposes:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">â€¢</span>
                      <span><strong>Authentication:</strong> To recognize you when you log in and keep you signed in</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">â€¢</span>
                      <span><strong>Security:</strong> To protect your account and detect fraudulent activity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">â€¢</span>
                      <span><strong>Preferences:</strong> To remember your settings, language, and customizations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">â€¢</span>
                      <span><strong>Analytics:</strong> To understand how you use our site and improve our services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">â€¢</span>
                      <span><strong>Advertising:</strong> To show you relevant ads and measure campaign effectiveness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">â€¢</span>
                      <span><strong>Performance:</strong> To monitor and improve site speed and functionality</span>
                    </li>
                  </ul>
                </div>

                {/* 3. Types of Cookies */}
                <div id="types" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-6">3. Types of Cookies We Use</h2>
                  
                  <div className="space-y-6">
                    {cookieTypes.map((cookie, index) => {
                      const Icon = cookie.icon;
                      const colorClasses = {
                        green: 'bg-green-100 text-green-800 border-green-200',
                        blue: 'bg-blue-100 text-blue-800 border-blue-200',
                        purple: 'bg-purple-100 text-purple-800 border-purple-200',
                        amber: 'bg-amber-100 text-amber-800 border-amber-200'
                      };

                      return (
                        <div key={index} className={`border rounded-xl p-6 ${colorClasses[cookie.color as keyof typeof colorClasses]}`}>
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                              cookie.color === 'green' ? 'bg-green-200' :
                              cookie.color === 'blue' ? 'bg-blue-200' :
                              cookie.color === 'purple' ? 'bg-purple-200' :
                              'bg-amber-200'
                            }`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="text-lg font-semibold">{cookie.type}</h3>
                                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                                  cookie.canDisable 
                                    ? 'bg-white/50 text-gray-700' 
                                    : 'bg-white/50 text-gray-900'
                                }`}>
                                  {cookie.canDisable ? 'Optional' : 'Required'}
                                </span>
                              </div>
                              <p className="text-sm mb-3">{cookie.purpose}</p>
                              <div className="grid grid-cols-2 gap-3 text-xs">
                                <div>
                                  <p className="font-medium mb-1">Examples:</p>
                                  <p className="opacity-80">{cookie.examples}</p>
                                </div>
                                <div>
                                  <p className="font-medium mb-1">Duration:</p>
                                  <p className="opacity-80">{cookie.duration}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Third-Party Cookies */}
                <div id="third-party" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">4. Third-Party Cookies</h2>
                  <p className="text-gray-700 mb-4">
                    We use third-party services that may set cookies on your device. These include:
                  </p>

                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Google Analytics</h4>
                      <p className="text-sm text-gray-700">Tracks website usage and visitor behavior to help us improve our services.</p>
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-xs text-[#4B6E48] hover:underline mt-1 inline-block">
                        View Google's Privacy Policy â†’
                      </a>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Facebook Pixel</h4>
                      <p className="text-sm text-gray-700">Measures ad campaign effectiveness and creates custom audiences.</p>
                      <a href="https://www.facebook.com/privacy" target="_blank" rel="noopener noreferrer" className="text-xs text-[#4B6E48] hover:underline mt-1 inline-block">
                        View Facebook's Privacy Policy â†’
                      </a>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Payment Processors</h4>
                      <p className="text-sm text-gray-700">Stripe, Razorpay, and other payment gateways use cookies for secure transactions.</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Live Chat Services</h4>
                      <p className="text-sm text-gray-700">Intercom, Drift, or similar services for customer support chat functionality.</p>
                    </div>
                  </div>
                </div>

                {/* 5. How to Manage Cookies */}
                <div id="manage" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Settings className="w-6 h-6 text-[#4B6E48]" />
                    5. How to Manage Cookies
                  </h2>
                  
                  <h3 className="text-lg font-semibold mb-3">Browser Settings</h3>
                  <p className="text-gray-700 mb-4">
                    Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. Here's how:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Google Chrome</h4>
                      <p className="text-sm text-gray-700">Settings â†’ Privacy and security â†’ Cookies and other site data</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Mozilla Firefox</h4>
                      <p className="text-sm text-gray-700">Preferences â†’ Privacy & Security â†’ Cookies and Site Data</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Safari</h4>
                      <p className="text-sm text-gray-700">Preferences â†’ Privacy â†’ Manage Website Data</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Microsoft Edge</h4>
                      <p className="text-sm text-gray-700">Settings â†’ Privacy, search, and services â†’ Cookies</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-3">Cookie Preference Center</h3>
                  <p className="text-gray-700">
                    You can also manage your cookie preferences using our Cookie Preference Center (see sidebar). This allows you to enable or disable specific categories of cookies.
                  </p>
                </div>

                {/* 6. Your Choices */}
                <div id="your-choices" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">6. Your Choices</h2>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <h4 className="font-semibold text-amber-900 mb-3">Important Note</h4>
                    <p className="text-sm text-amber-800 mb-4">
                      Blocking or deleting cookies may impact your experience on our site. Some features may not function properly if essential cookies are disabled.
                    </p>
                    <ul className="space-y-2 text-sm text-amber-900">
                      <li className="flex items-start gap-2">
                        <span className="mt-1">âš ï¸</span>
                        <span>You may not be able to log in or use personalized features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1">âš ï¸</span>
                        <span>Your preferences and settings won't be saved</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1">âš ï¸</span>
                        <span>Some services may not work correctly</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 7. Updates */}
                <div id="updates" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">7. Updates to This Policy</h2>
                  <p className="text-gray-700">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any significant changes by posting a notice on our website or sending you an email. Please check this page periodically for updates.
                  </p>
                </div>

                {/* 8. Contact */}
                <div id="contact" className="scroll-mt-24 pt-8 border-t border-gray-200">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Mail className="w-6 h-6 text-[#4B6E48]" />
                    8. Contact Us
                  </h2>
                  <p className="text-gray-700 mb-4">If you have questions about our use of cookies, please contact us:</p>
                  
                  <div className="bg-[#4B6E48]/5 rounded-xl p-6 border border-[#4B6E48]/20">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-[#4B6E48] mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <a href="mailto:privacy@example.com" className="font-medium text-[#4B6E48] hover:underline">
                            privacy@example.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mt-6">
                    For more information on how we handle your personal data, please see our <a href="/privacy" className="text-[#4B6E48] hover:underline">Privacy Policy</a>.
                  </p>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
