import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { Toaster } from '@/app/components/ui/sonner';
import { NavigationProvider } from '@/app/contexts/NavigationContext';

import Home from '@/app/pages/Home';
import Countries from '@/app/pages/Countries';
import CountryDetail from '@/app/pages/CountryDetail';
import Universities from '@/app/pages/Universities';
import UniversityDetail from '@/app/pages/UniversityDetail';
import CourseDetail from '@/app/pages/CourseDetail';
import Concierge from '@/app/pages/Concierge';
import Compare from '@/app/pages/Compare';
import About from '@/app/pages/About';
import Products from '@/app/pages/Products';
import Blog from '@/app/pages/Blog';
import Contact from '@/app/pages/Contact';
import ContactSuccess from '@/app/pages/ContactSuccess';
import HelpCenter from '@/app/pages/HelpCenter';
import Profile from '@/app/pages/Profile';
import ProfilePublicView from '@/app/pages/ProfilePublicView';
import Services from '@/app/pages/Services';
import ModernBannerDemo from '@/app/pages/ModernBannerDemo';
import SignIn from '@/app/pages/SignIn';
import SignUp from '@/app/pages/SignUp';
import ScrollAnimations from '@/app/pages/ScrollAnimations';

// Service Pages
import SimCards from '@/app/pages/services/SimCards';
import Banks from '@/app/pages/services/Banks';
import BankDetail from '@/app/pages/services/BankDetail';
import Insurance from '@/app/pages/services/Insurance';
import Food from '@/app/pages/services/Food';
import Visas from '@/app/pages/services/Visas';
import Events from '@/app/pages/services/Events';
import Employment from '@/app/pages/services/Employment';
import Taxes from '@/app/pages/services/Taxes';
import Loans from '@/app/pages/services/Loans';
import BuildCredit from '@/app/pages/services/BuildCredit';
import Housing from '@/app/pages/services/Housing';
import Courses from '@/app/pages/services/Courses';
import Forex from '@/app/pages/services/Forex';

// Resource Pages
import BlogResource from '@/app/pages/resources/Blog';
import BlogCategory from '@/app/pages/resources/BlogCategory';
import BlogDetail from '@/app/pages/resources/BlogDetail';
import Newsletter from '@/app/pages/resources/Newsletter';
import Sonia from '@/app/pages/resources/Sonia';
import Connect from '@/app/pages/resources/Connect';
import Bundle from '@/app/pages/resources/Bundle';

// Legal Pages
import Privacy from '@/app/pages/legal/Privacy';
import Terms from '@/app/pages/legal/Terms';
import Refund from '@/app/pages/legal/Refund';
import Cookies from '@/app/pages/legal/Cookies';

// Community Pages
import StudentDirectory from '@/app/pages/community/StudentDirectory';
import StudentProfile from '@/app/pages/community/StudentProfile';
import StudentConnections from '@/app/pages/community/StudentConnections';
import SoniaAI from '@/app/pages/SoniaAI';

// IELTS Pages
import IELTSHub from '@/app/pages/ielts/IELTSHub';
import ListeningPractice from '@/app/pages/ielts/ListeningPractice';
import ReadingPractice from '@/app/pages/ielts/ReadingPractice';
import WritingPractice from '@/app/pages/ielts/WritingPractice';
import SpeakingPractice from '@/app/pages/ielts/SpeakingPractice';
import MockTest from '@/app/pages/ielts/MockTest';
import ScoreCalculator from '@/app/pages/ielts/ScoreCalculator';
import StudyResources from '@/app/pages/ielts/StudyResources';
import ProgressDashboard from '@/app/pages/ielts/ProgressDashboard';

// AI Assistant Pages
import AIAssistantDashboard from '@/app/pages/ai-assistant/AIAssistantDashboard';
import AIReadingPractice from '@/app/pages/ai-assistant/ReadingPractice';
import AIWritingPractice from '@/app/pages/ai-assistant/WritingPractice';
import AISpeakingPractice from '@/app/pages/ai-assistant/SpeakingPractice';
import AIListeningPractice from '@/app/pages/ai-assistant/ListeningPractice';
import MockTests from '@/app/pages/ai-assistant/MockTests';
import ResultsAnalytics from '@/app/pages/ai-assistant/ResultsAnalytics';
import ImprovementPlan from '@/app/pages/ai-assistant/ImprovementPlan';
import ProgressLog from '@/app/pages/ai-assistant/ProgressLog';

import ComingSoon from '@/app/pages/ComingSoon';
import GuideTool from '@/app/pages/GuideTool';
import ToolsPage from '@/app/pages/ToolsPage';

export default function App() {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <Toaster richColors />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:id" element={<CountryDetail />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/universities/:id" element={<UniversityDetail />} />
          <Route path="/universities/:id/courses/:courseId" element={<CourseDetail />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/concierge" element={<Concierge />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/success" element={<ContactSuccess />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/public-view" element={<ProfilePublicView />} />
          <Route path="/services" element={<Services />} />
          <Route path="/modern-banner-demo" element={<ModernBannerDemo />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/scroll-animations" element={<ScrollAnimations />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/guide" element={<GuideTool />} />
          <Route path="/tools" element={<ToolsPage />} />

          {/* Individual Service Routes */}
          <Route path="/services/sim-cards" element={<SimCards />} />
          <Route path="/services/banks" element={<Banks />} />
          <Route path="/services/banks/:id" element={<BankDetail />} />
          <Route path="/services/insurance" element={<Insurance />} />
          <Route path="/services/food" element={<Food />} />
          <Route path="/services/visas" element={<Visas />} />
          <Route path="/services/events" element={<Events />} />
          <Route path="/services/employment" element={<Employment />} />
          <Route path="/services/taxes" element={<Taxes />} />
          <Route path="/services/loans" element={<Loans />} />
          <Route path="/services/build-credit" element={<BuildCredit />} />
          <Route path="/services/housing" element={<Housing />} />
          <Route path="/services/courses" element={<Courses />} />
          <Route path="/services/forex" element={<Forex />} />

          {/* Resource Routes */}
          <Route path="/resources" element={<Navigate to="/resources/blog" replace />} />
          <Route path="/resources/blog" element={<BlogResource />} />
          <Route path="/resources/blog/category/:categorySlug" element={<BlogCategory />} />
          <Route path="/resources/blog/:slug" element={<BlogDetail />} />
          <Route path="/resources/newsletter" element={<Newsletter />} />
          <Route path="/resources/sonia" element={<Sonia />} />
          <Route path="/resources/connect" element={<Connect />} />
          <Route path="/resources/bundle" element={<Bundle />} />

          {/* Legal Routes */}
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/refund" element={<Refund />} />
          <Route path="/legal/cookies" element={<Cookies />} />

          {/* Legal Routes - Shorthand URLs */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/cookies" element={<Cookies />} />

          {/* Community Routes */}
          <Route path="/community/students" element={<StudentDirectory />} />
          <Route path="/community/students/:username" element={<StudentProfile />} />
          <Route path="/community/profile/:id" element={<StudentProfile />} />
          <Route path="/community/student-connections" element={<StudentConnections />} />
          <Route path="/sonia-ai" element={<SoniaAI />} />

          {/* IELTS Routes */}
          <Route path="/ielts" element={<IELTSHub />} />
          <Route path="/ielts/listening" element={<ListeningPractice />} />
          <Route path="/ielts/reading" element={<ReadingPractice />} />
          <Route path="/ielts/writing" element={<WritingPractice />} />
          <Route path="/ielts/speaking" element={<SpeakingPractice />} />
          <Route path="/ielts/mock-test" element={<MockTest />} />
          <Route path="/ielts/score-calculator" element={<ScoreCalculator />} />
          <Route path="/ielts/resources" element={<StudyResources />} />
          <Route path="/ielts/progress" element={<ProgressDashboard />} />

          {/* AI Assistant Routes */}
          <Route path="/ai-assistant" element={<Navigate to="/ai-assistant/dashboard" replace />} />
          <Route path="/ai-assistant/dashboard" element={<AIAssistantDashboard />} />
          <Route path="/ai-assistant/reading" element={<AIReadingPractice />} />
          <Route path="/ai-assistant/writing" element={<AIWritingPractice />} />
          <Route path="/ai-assistant/speaking" element={<AISpeakingPractice />} />
          <Route path="/ai-assistant/listening" element={<AIListeningPractice />} />
          <Route path="/ai-assistant/mock-tests" element={<MockTests />} />
          {/* Redirect old results URL to new results-analytics URL */}
          <Route path="/ai-assistant/results" element={<Navigate to="/ai-assistant/results-analytics" replace />} />
          <Route path="/ai-assistant/results-analytics" element={<ResultsAnalytics />} />
          <Route path="/ai-assistant/improvement-plan" element={<ImprovementPlan />} />
          <Route path="/ai-assistant/progress-log" element={<ProgressLog />} />
        </Routes>
      </NavigationProvider>
    </BrowserRouter>
  );
}