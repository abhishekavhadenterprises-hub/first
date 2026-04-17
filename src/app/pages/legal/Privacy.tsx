import { motion } from 'motion/react';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { Shield, Mail, Lock, Eye, FileText, AlertCircle, Bot, Users, Cookie, Globe, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

export default function Privacy() {
  const lastUpdated = "February 6, 2026";

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: Shield },
    { id: 'collection', title: 'Information We Collect', icon: FileText },
    { id: 'usage', title: 'How We Use Information', icon: Eye },
    { id: 'ai-services', title: 'AI Services & Data Usage', icon: Bot },
    { id: 'student-profiles', title: 'Student Profiles & Visibility', icon: Users },
    { id: 'cookies', title: 'Cookies & Tracking', icon: Cookie },
    { id: 'sharing', title: 'Third-Party Services', icon: Globe },
    { id: 'security', title: 'Data Security', icon: Lock },
    { id: 'rights', title: 'User Rights', icon: Shield },
    { id: 'international', title: 'International Data Transfers', icon: Globe },
    { id: 'changes', title: 'Policy Updates', icon: AlertCircle },
    { id: 'contact', title: 'Contact Information', icon: Mail }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-4 bg-gradient-to-b from-[#4B6E48]/5 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-gray-600 mb-6"
          >
            <Link to="/" className="hover:text-[#4B6E48] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">Privacy Policy</span>
          </motion.div>

          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#4B6E48]/10 rounded-full text-[#4B6E48] text-sm font-medium mb-6"
            >
              <Shield className="w-4 h-4" />
              Legal
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-4 text-gray-900"
            >
              Privacy Policy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-2"
            >
              Your privacy is our priority. We are committed to protecting your personal data.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-sm text-gray-500"
            >
              Last updated: {lastUpdated}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Table of Contents - Sticky Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="lg:sticky lg:top-24">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-500">Contents</h3>
                  <nav className="space-y-1">
                    {sections.map((section, index) => {
                      const Icon = section.icon;
                      return (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#4B6E48] hover:bg-[#4B6E48]/5 transition-colors py-2 px-3 rounded-lg group"
                        >
                          <Icon className="w-4 h-4 flex-shrink-0 group-hover:text-[#4B6E48]" />
                          <span className="text-xs">{section.title}</span>
                        </a>
                      );
                    })}
                  </nav>
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
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm space-y-12">
                
                {/* Introduction */}
                <div id="introduction" className="scroll-mt-24 pb-8 border-b border-gray-200">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Welcome to Roam.College</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    At Roam.College, we understand that trust is the foundation of helping students achieve their dreams of studying abroad. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our international education platform, AI-powered tools, student community features, learning resources, and related services.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-blue-900 font-semibold mb-2">Important Commitment</p>
                      <p className="text-sm text-blue-800 leading-relaxed">
                        We are committed to protecting your privacy and ensuring the security of your personal information. By using our platform, you agree to the collection and use of information in accordance with this policy. We will never sell your personal data to third parties.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 1. Information We Collect */}
                <div id="collection" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#4B6E48]/10 rounded-xl flex items-center justify-center">
                      <FileText className="w-5 h-5 text-[#4B6E48]" />
                    </div>
                    Information We Collect
                  </h2>
                  
                  <h3 className="text-lg font-semibold mb-4 mt-6 text-gray-900">Information You Provide to Us</h3>
                  <ul className="space-y-3 text-gray-700 ml-4 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Account Information:</strong> Name, email address, phone number, date of birth, profile photo, country of residence</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Academic Information:</strong> Educational background, transcripts, test scores (IELTS, TOEFL, GRE, GMAT, SAT), degrees, certificates, academic achievements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Application Materials:</strong> Essays, statements of purpose, letters of recommendation, resumes/CVs, portfolio work</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Financial Information:</strong> Payment details, loan applications, scholarship applications (processed securely through third-party payment providers)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Communication Data:</strong> Messages with our AI assistant (Sonia), chat conversations, support tickets, feedback, blog comments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Student Profile Data:</strong> Bio, interests, study destinations, connection preferences, visibility settings</span>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold mb-4 mt-6 text-gray-900">Information Collected Automatically</h3>
                  <ul className="space-y-3 text-gray-700 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Device & Browser Information:</strong> IP address, browser type and version, operating system, device identifiers, screen resolution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Usage Data:</strong> Pages viewed, time spent on pages, click patterns, search queries, feature usage, navigation paths</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Learning Analytics:</strong> IELTS/TOEFL practice test results, study progress, performance metrics, learning patterns</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Cookies & Tracking:</strong> See our <a href="/cookies" className="text-[#4B6E48] hover:underline font-medium">Cookie Policy</a> for comprehensive details</span>
                    </li>
                  </ul>
                </div>

                {/* 2. How We Use Your Information */}
                <div id="usage" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#4B6E48]/10 rounded-xl flex items-center justify-center">
                      <Eye className="w-5 h-5 text-[#4B6E48]" />
                    </div>
                    How We Use Your Information
                  </h2>
                  <p className="text-gray-700 mb-4">We use your information to provide, maintain, and improve our services:</p>
                  <ul className="space-y-3 text-gray-700 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong>Provide core services:</strong> University matching, application assistance, visa guidance, test preparation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong>Personalize your experience:</strong> Tailor content, recommendations, and AI responses to your profile and goals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong>Communication:</strong> Send updates about applications, services, new features, and respond to inquiries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong>Match opportunities:</strong> Connect you with relevant universities, scholarships, and student peers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong>Process transactions:</strong> Handle payments, refunds, and financial operations securely</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong>Analytics & improvement:</strong> Analyze usage patterns to enhance user experience and develop new features</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong>Marketing communications:</strong> Send newsletters, webinar invites, and promotional content (opt-out available)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong>Security & fraud prevention:</strong> Detect and prevent abuse, fraud, and security incidents</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong>Legal compliance:</strong> Fulfill legal obligations and respond to lawful requests</span>
                    </li>
                  </ul>
                </div>

                {/* 3. AI Services & Data Usage - NEW SECTION */}
                <div id="ai-services" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Bot className="w-5 h-5 text-purple-600" />
                    </div>
                    AI Services & Data Usage
                  </h2>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 mb-6">
                    <p className="text-sm text-purple-900 font-semibold mb-2">Our AI-Powered Features</p>
                    <p className="text-sm text-purple-800">
                      We use artificial intelligence to enhance your learning experience, including Sonia AI Assistant, IELTS/TOEFL practice systems, personalized recommendations, and automated feedback on writing and speaking.
                    </p>
                  </div>

                  <h3 className="text-lg font-semibold mb-4 text-gray-900">How AI Uses Your Data</h3>
                  <ul className="space-y-3 text-gray-700 ml-4 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Conversation History:</strong> Your chats with Sonia AI are stored to provide context-aware responses and improve assistance quality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Practice Test Data:</strong> Your IELTS/TOEFL mock tests, answers, and performance metrics are analyzed to generate personalized improvement plans</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Writing Samples:</strong> Essays and writing tasks are processed by AI to provide grammar corrections, coherence feedback, and scoring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Speech Recordings:</strong> Speaking practice recordings may be analyzed for pronunciation, fluency, and vocabulary assessment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Recommendation Engine:</strong> Your profile, preferences, and behavior data help our AI suggest relevant universities, courses, and resources</span>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold mb-4 text-gray-900">AI Data Protection</h3>
                  <ul className="space-y-3 text-gray-700 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span>AI processing is conducted on secure servers with encryption</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span>Your data is not used to train general AI models shared with other companies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span>You can delete your AI conversation history and practice data at any time from your account settings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span>AI-generated feedback is provided for educational purposes and should not replace professional assessment</span>
                    </li>
                  </ul>
                </div>

                {/* 4. Student Profiles & Visibility - NEW SECTION */}
                <div id="student-profiles" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    Student Profiles & Visibility
                  </h2>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
                    <p className="text-sm text-green-900 font-semibold mb-2">Student Directory & Community</p>
                    <p className="text-sm text-green-800">
                      Our Student Directory allows you to connect with peers pursuing similar study abroad goals. You have full control over what information is visible to other students.
                    </p>
                  </div>

                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Profile Visibility Controls</h3>
                  <ul className="space-y-3 text-gray-700 ml-4 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Public Profile (Default):</strong> Your first name, profile photo, destination country/city, university interests, and "looking for" tags are visible to logged-in students</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Private Information:</strong> Your full name, email, phone number, exact address, financial details, and application documents are never shown publicly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Connection-Based Visibility:</strong> Additional details (like course specifics, intake dates, detailed bio) are only visible after you accept a connection request</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Privacy Settings:</strong> You can make your profile completely private, hide from directory searches, or limit visibility to specific groups</span>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold mb-4 text-gray-900">What Other Students Can See</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">✓ Visible by Default</h4>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• First name + last initial</li>
                        <li>• Profile photo</li>
                        <li>• Destination country & city</li>
                        <li>• Study level (UG/PG/PhD)</li>
                        <li>• General interests & tags</li>
                        <li>• "Looking for" preferences</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">✗ Always Private</h4>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Full name (unless you choose to share)</li>
                        <li>• Email address & phone number</li>
                        <li>• Home address & location</li>
                        <li>• Academic documents & scores</li>
                        <li>• Financial information</li>
                        <li>• Application status details</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Safety Features</h3>
                  <ul className="space-y-3 text-gray-700 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Report & Block:</strong> You can report inappropriate profiles or messages and block users at any time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Message Filtering:</strong> Our system monitors messages for spam, harassment, or suspicious content</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Verified Badges:</strong> We verify student accounts through email and institution confirmation when possible</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4B6E48] mt-1.5 text-lg">•</span>
                      <span><strong className="text-gray-900">Data Deletion:</strong> You can permanently delete your profile and all associated data from your account settings</span>
                    </li>
                  </ul>
                </div>

                {/* 5. Cookies */}
                <div id="cookies" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#4B6E48]/10 rounded-xl flex items-center justify-center">
                      <Cookie className="w-5 h-5 text-[#4B6E48]" />
                    </div>
                    Cookies & Tracking
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We use cookies and similar technologies to enhance your experience. For detailed information, please see our <a href="/cookies" className="text-[#4B6E48] hover:underline font-medium">Cookie Policy</a>.
                  </p>
                  <p className="text-sm text-gray-600">
                    You can control cookies through your browser settings, but disabling certain cookies may limit functionality.
                  </p>
                </div>

                {/* 6. Third-Party Services */}
                <div id="sharing" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#4B6E48]/10 rounded-xl flex items-center justify-center">
                      <Globe className="w-5 h-5 text-[#4B6E48]" />
                    </div>
                    Third-Party Services
                  </h2>
                  <p className="text-gray-700 mb-4">We may share your information with:</p>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Universities & Educational Institutions</h4>
                      <p className="text-sm text-gray-700">With your explicit consent, we share application materials with universities you're applying to.</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Service Providers</h4>
                      <p className="text-sm text-gray-700">Third-party vendors who help us operate our platform (payment processors, email services, cloud storage, analytics).</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Partner Organizations</h4>
                      <p className="text-sm text-gray-700">Visa consultants, housing providers, loan agencies, insurance companies - only when you request these services.</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Legal Requirements</h4>
                      <p className="text-sm text-gray-700">When required by law, court order, or to protect our rights and safety.</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mt-4 italic">We never sell your personal information to third parties.</p>
                </div>

                {/* 7. Data Security */}
                <div id="security" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#4B6E48]/10 rounded-xl flex items-center justify-center">
                      <Lock className="w-5 h-5 text-[#4B6E48]" />
                    </div>
                    Data Security
                  </h2>
                  <p className="text-gray-700 mb-4">We implement industry-standard security measures to protect your information:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Encryption of data in transit (SSL/TLS) and at rest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Regular security audits and vulnerability assessments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Access controls and authentication mechanisms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>Employee training on data protection and privacy</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4 italic">
                    However, no method of transmission over the Internet is 100% secure. We strive to protect your data but cannot guarantee absolute security.
                  </p>
                </div>

                {/* 8. User Rights */}
                <div id="rights" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#4B6E48]/10 rounded-xl flex items-center justify-center">
                      <Shield className="w-5 h-5 text-[#4B6E48]" />
                    </div>
                    User Rights
                  </h2>
                  <p className="text-gray-700 mb-4">You have the right to:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span><strong>Access:</strong> Request a copy of your personal information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span><strong>Correction:</strong> Update or correct inaccurate information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span><strong>Portability:</strong> Receive your data in a structured, machine-readable format</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span><strong>Opt-out:</strong> Unsubscribe from marketing communications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span><strong>Object:</strong> Object to processing of your information for certain purposes</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    To exercise these rights, please contact us at <a href="mailto:privacy@example.com" className="text-[#4B6E48] hover:underline">privacy@example.com</a>
                  </p>
                </div>

                {/* 9. International Data Transfers */}
                <div id="international" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#4B6E48]/10 rounded-xl flex items-center justify-center">
                      <Globe className="w-5 h-5 text-[#4B6E48]" />
                    </div>
                    International Data Transfers
                  </h2>
                  <p className="text-gray-700">
                    Your information may be transferred to and processed in countries outside your residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
                  </p>
                </div>

                {/* 10. Policy Updates */}
                <div id="changes" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#4B6E48]/10 rounded-xl flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-[#4B6E48]" />
                    </div>
                    Policy Updates
                  </h2>
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time. We will notify you of significant changes via email or a prominent notice on our platform. Your continued use of our services after changes constitutes acceptance of the updated policy.
                  </p>
                </div>

                {/* 11. Contact Information */}
                <div id="contact" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#4B6E48]/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#4B6E48]" />
                    </div>
                    Contact Information
                  </h2>
                  <p className="text-gray-700 mb-4">If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                  
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
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-[#4B6E48] mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600">Mailing Address</p>
                          <p className="text-sm text-gray-900">
                            Data Protection Officer<br />
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