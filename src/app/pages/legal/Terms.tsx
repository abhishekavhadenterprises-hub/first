import { motion } from 'motion/react';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { FileText, Mail, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

export default function Terms() {
  const lastUpdated = "February 5, 2026";

  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'services', title: 'Description of Services' },
    { id: 'eligibility', title: 'Eligibility & Account Registration' },
    { id: 'user-responsibilities', title: 'User Responsibilities' },
    { id: 'intellectual-property', title: 'Intellectual Property Rights' },
    { id: 'payment', title: 'Payment & Fees' },
    { id: 'prohibited', title: 'Prohibited Conduct' },
    { id: 'disclaimers', title: 'Disclaimers & Limitations' },
    { id: 'indemnification', title: 'Indemnification' },
    { id: 'termination', title: 'Termination' },
    { id: 'dispute', title: 'Dispute Resolution' },
    { id: 'general', title: 'General Provisions' }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-[#4B6E48]/5 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#4B6E48]/10 rounded-full text-[#4B6E48] text-sm font-medium mb-6"
          >
            <Scale className="w-4 h-4" />
            Legal
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-gray-900"
          >
            Terms & Conditions
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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Table of Contents - Sticky Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="lg:sticky lg:top-24">
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
              </div>
            </motion.aside>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-4"
            >
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 space-y-12">
                
                {/* Introduction */}
                <div className="pb-8 border-b border-gray-200">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Welcome to our platform. These Terms and Conditions ("Terms") govern your access to and use of our study abroad services, website, and related applications.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-amber-900 font-medium mb-1">Important</p>
                      <p className="text-sm text-amber-700">
                        By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 1. Acceptance of Terms */}
                <div id="acceptance" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 mb-4">
                    By creating an account, accessing our website, or using any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our <a href="/privacy" className="text-[#4B6E48] hover:underline">Privacy Policy</a>.
                  </p>
                  <p className="text-gray-700">
                    These Terms constitute a legally binding agreement between you and our company. If you are using our services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
                  </p>
                </div>

                {/* 2. Description of Services */}
                <div id="services" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-[#4B6E48]" />
                    2. Description of Services
                  </h2>
                  <p className="text-gray-700 mb-4">We provide the following services:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#4B6E48] flex-shrink-0 mt-0.5" />
                      <span><strong>University Search & Matching:</strong> Tools to discover and compare universities globally</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#4B6E48] flex-shrink-0 mt-0.5" />
                      <span><strong>Application Assistance:</strong> Guidance on application processes, essay reviews, document preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#4B6E48] flex-shrink-0 mt-0.5" />
                      <span><strong>Visa Support:</strong> Information and assistance with visa applications (not legal advice)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#4B6E48] flex-shrink-0 mt-0.5" />
                      <span><strong>Concierge Services:</strong> Housing, insurance, banking, SIM cards, travel arrangements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#4B6E48] flex-shrink-0 mt-0.5" />
                      <span><strong>Financial Services:</strong> Loan referrals, forex services, scholarship information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#4B6E48] flex-shrink-0 mt-0.5" />
                      <span><strong>AI-Powered Tools:</strong> Virtual assistant, test preparation, personalized recommendations</span>
                    </li>
                  </ul>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-6">
                    <p className="text-sm text-blue-900 font-medium mb-2">Important Disclaimer</p>
                    <p className="text-sm text-blue-700">
                      We are <strong>not</strong> immigration lawyers, visa consultants, or education agents. We provide guidance and support services only. Final decisions on admissions, visas, and legal matters rest with relevant authorities.
                    </p>
                  </div>
                </div>

                {/* 3. Eligibility */}
                <div id="eligibility" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">3. Eligibility & Account Registration</h2>
                  
                  <h3 className="text-lg font-semibold mb-3">Eligibility</h3>
                  <p className="text-gray-700 mb-4">To use our services, you must:</p>
                  <ul className="space-y-2 text-gray-700 ml-4 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Be at least 16 years of age</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Have the legal capacity to enter into binding agreements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Not be prohibited from using our services under applicable laws</span>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold mb-3">Account Registration</h3>
                  <p className="text-gray-700 mb-4">When creating an account, you agree to:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Provide accurate, current, and complete information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Maintain and update your information to keep it accurate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Keep your password secure and confidential</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Notify us immediately of any unauthorized account access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Accept responsibility for all activities under your account</span>
                    </li>
                  </ul>
                </div>

                {/* 4. User Responsibilities */}
                <div id="user-responsibilities" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">4. User Responsibilities</h2>
                  <p className="text-gray-700 mb-4">As a user, you are responsible for:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Ensuring all information you provide is truthful and accurate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Conducting your own due diligence on universities and programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Meeting application deadlines and requirements independently</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Verifying all third-party services before using them</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Complying with all applicable laws and regulations</span>
                    </li>
                  </ul>
                </div>

                {/* 5. Intellectual Property */}
                <div id="intellectual-property" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">5. Intellectual Property Rights</h2>
                  <p className="text-gray-700 mb-4">
                    All content, features, and functionality of our platform, including but not limited to text, graphics, logos, icons, images, audio clips, data compilations, and software, are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <p className="text-gray-700 mb-4">You may not:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Copy, modify, distribute, or create derivative works</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Reverse engineer or decompile any software</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Remove or alter any copyright, trademark, or proprietary notices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Use our content for commercial purposes without permission</span>
                    </li>
                  </ul>
                </div>

                {/* 6. Payment & Fees */}
                <div id="payment" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">6. Payment & Fees</h2>
                  <p className="text-gray-700 mb-4">
                    Certain services require payment. By purchasing services, you agree to:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-4 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Pay all fees and charges at the prices then in effect</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Provide accurate and complete billing information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Authorize us to charge your payment method</span>
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    For refund and cancellation policies, please see our <a href="/refund" className="text-[#4B6E48] hover:underline">Refund Policy</a>.
                  </p>
                </div>

                {/* 7. Prohibited Conduct */}
                <div id="prohibited" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                    7. Prohibited Conduct
                  </h2>
                  <p className="text-gray-700 mb-4">You may not:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✕</span>
                      <span>Provide false or misleading information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✕</span>
                      <span>Impersonate any person or entity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✕</span>
                      <span>Use the service for illegal or unauthorized purposes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✕</span>
                      <span>Upload viruses, malware, or harmful code</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✕</span>
                      <span>Attempt to gain unauthorized access to our systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✕</span>
                      <span>Scrape, harvest, or collect user information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✕</span>
                      <span>Interfere with or disrupt the service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✕</span>
                      <span>Create multiple accounts to abuse promotions</span>
                    </li>
                  </ul>
                </div>

                {/* 8. Disclaimers */}
                <div id="disclaimers" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">8. Disclaimers & Limitations of Liability</h2>
                  
                  <div className="bg-gray-50 rounded-xl p-6 mb-4">
                    <p className="text-sm text-gray-900 font-semibold mb-2 uppercase">No Guarantees</p>
                    <p className="text-sm text-gray-700">
                      We do not guarantee university admissions, visa approvals, scholarship awards, or any specific outcomes. Results depend on individual qualifications and decisions by third parties.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-4">
                    <p className="text-sm text-gray-900 font-semibold mb-2 uppercase">Service Availability</p>
                    <p className="text-sm text-gray-700">
                      Our services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind. We do not guarantee uninterrupted, secure, or error-free service.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-4">
                    <p className="text-sm text-gray-900 font-semibold mb-2 uppercase">Third-Party Services</p>
                    <p className="text-sm text-gray-700">
                      We are not responsible for third-party services, websites, or content linked from our platform. Use of third-party services is at your own risk.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <p className="text-sm text-gray-900 font-semibold mb-2 uppercase">Limitation of Liability</p>
                    <p className="text-sm text-gray-700">
                      To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
                    </p>
                  </div>
                </div>

                {/* 9. Indemnification */}
                <div id="indemnification" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">9. Indemnification</h2>
                  <p className="text-gray-700">
                    You agree to indemnify, defend, and hold harmless our company, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including legal fees) arising from your use of our services, violation of these Terms, or infringement of any rights of another party.
                  </p>
                </div>

                {/* 10. Termination */}
                <div id="termination" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
                  <p className="text-gray-700 mb-4">
                    We reserve the right to suspend or terminate your account and access to our services at any time, without notice, for:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-4 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Violation of these Terms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Fraudulent, abusive, or illegal activity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Extended period of inactivity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Request from law enforcement or government agencies</span>
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    You may also terminate your account at any time through your account settings or by contacting us.
                  </p>
                </div>

                {/* 11. Dispute Resolution */}
                <div id="dispute" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">11. Dispute Resolution</h2>
                  
                  <h3 className="text-lg font-semibold mb-3">Governing Law</h3>
                  <p className="text-gray-700 mb-6">
                    These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                  </p>

                  <h3 className="text-lg font-semibold mb-3">Dispute Resolution Process</h3>
                  <ol className="space-y-3 text-gray-700 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-[#4B6E48] flex-shrink-0">1.</span>
                      <div>
                        <strong>Informal Resolution:</strong> Contact us first at <a href="mailto:legal@example.com" className="text-[#4B6E48] hover:underline">legal@example.com</a> to attempt resolution
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-[#4B6E48] flex-shrink-0">2.</span>
                      <div>
                        <strong>Mediation:</strong> If informal resolution fails, parties agree to mediation
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-[#4B6E48] flex-shrink-0">3.</span>
                      <div>
                        <strong>Arbitration:</strong> Final disputes shall be resolved through binding arbitration in Mumbai, India
                      </div>
                    </li>
                  </ol>
                </div>

                {/* 12. General Provisions */}
                <div id="general" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">12. General Provisions</h2>
                  
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h4 className="font-semibold mb-2">Amendments</h4>
                      <p className="text-sm">We may modify these Terms at any time. Continued use after changes constitutes acceptance.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Severability</h4>
                      <p className="text-sm">If any provision is found unenforceable, the remaining provisions remain in effect.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Entire Agreement</h4>
                      <p className="text-sm">These Terms constitute the entire agreement between you and us regarding our services.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Waiver</h4>
                      <p className="text-sm">Failure to enforce any provision does not constitute a waiver of that provision.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Assignment</h4>
                      <p className="text-sm">You may not transfer your rights under these Terms. We may assign our rights without restriction.</p>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="pt-8 border-t border-gray-200">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Mail className="w-6 h-6 text-[#4B6E48]" />
                    Questions About These Terms?
                  </h2>
                  <p className="text-gray-700 mb-4">If you have questions about these Terms, please contact us:</p>
                  
                  <div className="bg-[#4B6E48]/5 rounded-xl p-6 border border-[#4B6E48]/20">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-[#4B6E48] mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <a href="mailto:legal@example.com" className="font-medium text-[#4B6E48] hover:underline">
                            legal@example.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-[#4B6E48] mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600">Mailing Address</p>
                          <p className="text-sm text-gray-900">
                            Legal Department<br />
                            123 Education Street<br />
                            Mumbai, Maharashtra 400001<br />
                            India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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