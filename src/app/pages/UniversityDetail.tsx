import { ArrowRight, Globe, MapPin, Award, GraduationCap, FileText, CheckCircle, Briefcase, TrendingUp, Rocket, Lightbulb, Microscope, FlaskConical, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { TextReveal } from '@/app/components/TextReveal';
import { CampusLifeSection } from '@/app/components/CampusLifeSection';
import { CoursesSection } from '@/app/components/CoursesSection';
import { EnhancedCoursesSection } from '@/app/components/EnhancedCoursesSection';
import { AdmissionScrollPanel } from '@/app/components/AdmissionScrollPanel';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { CreditCardHero } from '@/app/components/ui/credit-card-hero';

gsap.registerPlugin(ScrollTrigger);

export default function UniversityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Admission carousel state
  const [currentAdmissionIndex, setCurrentAdmissionIndex] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      {/* Hero Banner Section - Inspired by Bakery Design */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-br from-[#F5F1E8] via-[#FDFCFA] to-white overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[500px]">
            
            {/* Left Side - University Building Image */}
            <div className="lg:col-span-4 flex items-center justify-center relative z-10">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1646724340319-4bbf6322402a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcxMjM1Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="University Building"
                  className="w-full max-w-md h-auto object-contain drop-shadow-2xl rounded-lg"
                />
              </div>
            </div>

            {/* Center - Vertical Text "EDUCATION" */}
            <div className="hidden lg:block lg:col-span-3 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 
                  className="text-[80px] font-bold tracking-wider origin-center"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    color: '#E8E1D5',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.05em',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.05)'
                  }}
                >
                  EDUCATION
                </h2>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:col-span-5 space-y-6 relative z-10">
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                <span className="text-[#0F172A]">Your Gateway to </span>
                <span className="text-[#4B6E48]">Global</span>
                <span className="text-[#0F172A]"> Education</span>
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg text-[#6B7280] leading-relaxed max-w-xl">
                Explore world-class universities and find your perfect match. We guide you through every step of your educational journey abroad.
              </p>

              {/* Circular Button */}
              <div className="pt-4">
                <button
                  onClick={() => navigate('/universities')}
                  className="group relative inline-flex items-center justify-center"
                >
                  {/* Circular Background */}
                  <div className="w-36 h-36 rounded-full bg-[#4B6E48] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-xl">
                    <div className="text-center">
                      <span className="block text-white font-semibold text-base mb-1.5">
                        Start Your
                      </span>
                      <span className="block text-white font-semibold text-base">
                        Journey
                      </span>
                      <ArrowRight className="w-5 h-5 text-white mx-auto mt-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#4B6E48] opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-[#4B6E48] opacity-5 blur-3xl"></div>
      </section>

      {/* Main Content Area - Currently Empty/Blank */}
      <main className="flex-1 bg-white">
        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Overview Heading */}
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A] mb-6">
              Overview
            </h2>

            {/* Text Reveal Animation */}
            <TextReveal 
              body="Stanford University, officially Leland Stanford Junior University, is a private research university in Stanford, California. The campus occupies 8,180 acres, among the largest in the United States, and enrolls over 17,000 students. Stanford is ranked among the top universities in the world by major education publications and is considered one of the most prestigious institutions globally."
              className="relative h-[200vh] mb-12 max-w-4xl"
            >
              {(tokens) => (
                <div className="sticky left-0 top-[30vh] flex items-center">
                  <p className="text-base md:text-lg leading-relaxed">
                    {tokens.map((token, index) => (
                      <TextReveal.Token key={index} index={index}>
                        {(isActive) => (
                          <span
                            className={`transition-all duration-300 ${
                              isActive ? 'text-[#0F172A]' : 'text-[#6B7280] opacity-20'
                            }`}
                          >
                            {token}
                          </span>
                        )}
                      </TextReveal.Token>
                    ))}
                  </p>
                </div>
              )}
            </TextReveal>

            {/* Rankings Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#0F172A] mb-6">
                Rankings
              </h3>

              {/* Rankings Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Global Ranking Card */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#4B6E48] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-[#4B6E48]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[#6B7280] mb-2">Global Ranking</p>
                      <p className="text-2xl md:text-3xl font-semibold text-[#4B6E48]">
                        Top 5 worldwide
                      </p>
                    </div>
                  </div>
                </div>

                {/* National Ranking Card */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#4B6E48] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#4B6E48]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[#6B7280] mb-2">National Ranking</p>
                      <p className="text-2xl md:text-3xl font-semibold text-[#4B6E48]">
                        #3 in United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subject Rankings Table */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-[#FDFCFA]">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#4B6E48]" />
                    <h4 className="text-lg font-semibold text-[#0F172A]">
                      Subject Rankings
                    </h4>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {/* Computer Science */}
                  <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-base text-[#6B7280] font-medium">
                      Computer Science
                    </span>
                    <span className="text-lg font-semibold text-[#4B6E48]">
                      #1 globally
                    </span>
                  </div>

                  {/* Engineering */}
                  <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-base text-[#6B7280] font-medium">
                      Engineering
                    </span>
                    <span className="text-lg font-semibold text-[#4B6E48]">
                      #2 globally
                    </span>
                  </div>

                  {/* Business & Management */}
                  <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-base text-[#6B7280] font-medium">
                      Business & Management
                    </span>
                    <span className="text-lg font-semibold text-[#4B6E48]">
                      Top 3 globally
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Programs Section */}
        <section className="py-16 bg-[#FDFCFA]">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Heading */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A] mb-3">
                Academic Programs
              </h2>
              <p className="text-base text-[#6B7280]">
                Stanford offers world-class programs across undergraduate and graduate levels
              </p>
            </div>

            {/* Programs Cards */}
            <div className="space-y-6">
              {/* Undergraduate Programs Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
                {/* Card Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-[#0F172A]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#0F172A] mb-2">
                      Undergraduate Programs
                    </h3>
                    <p className="text-sm text-[#6B7280]">
                      Stanford offers a liberal arts education with <span className="text-[#4B6E48] font-medium">65+ majors</span> across seven schools
                    </p>
                  </div>
                </div>

                {/* Program Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 pb-6 border-b border-gray-200">
                  <div>
                    <p className="text-sm font-medium text-[#0F172A] mb-1">Duration</p>
                    <p className="text-base text-[#6B7280]">4 years</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0F172A] mb-1">Credits Required</p>
                    <p className="text-base text-[#6B7280]">180 quarter units</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0F172A] mb-1">General Education</p>
                    <p className="text-base text-[#6B7280]">Ways of Thinking/Ways of Doing requirements</p>
                  </div>
                </div>

                {/* Popular Majors */}
                <div className="mb-6">
                  <h4 className="text-base font-semibold text-[#0F172A] mb-3">Popular Majors</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Computer Science', 'Engineering (Various)', 'Biology', 'Economics', 'Political Science', 'Psychology', 'Human Biology', 'Management Science & Engineering'].map((major, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-[#4B6E48] bg-opacity-10 text-sm font-medium rounded-full hover:bg-opacity-20 transition-colors duration-200 text-[#fefefe]"
                      >
                        {major}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Unique Programs */}
                <div>
                  <h4 className="text-base font-semibold text-[#0F172A] mb-3">Unique Programs</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4B6E48] mt-1.5 flex-shrink-0"></span>
                      <span>Product Design</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4B6E48] mt-1.5 flex-shrink-0"></span>
                      <span>Symbolic Systems (CS + Philosophy + Psychology)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4B6E48] mt-1.5 flex-shrink-0"></span>
                      <span>Science, Technology & Society</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Graduate Programs Card - Blank/Empty */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm min-h-[400px]">
                {/* Card Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-8 h-8 text-[#0F172A]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#0F172A] mb-2">
                      Graduate Programs
                    </h3>
                    <p className="text-sm text-[#6B7280]">
                      Stanford has world-renowned graduate and professional schools
                    </p>
                  </div>
                </div>

                {/* Graduate Schools Section */}
                <div className="mb-8">
                  <h4 className="text-base font-semibold text-[#0F172A] mb-4">
                    Graduate Schools
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#4B6E48] flex-shrink-0" />
                      <span className="text-sm text-[#475569]">School of Engineering</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#4B6E48] flex-shrink-0" />
                      <span className="text-sm text-[#475569]">Graduate School of Business (MBA)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#4B6E48] flex-shrink-0" />
                      <span className="text-sm text-[#475569]">School of Medicine</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#4B6E48] flex-shrink-0" />
                      <span className="text-sm text-[#475569]">Law School</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#4B6E48] flex-shrink-0" />
                      <span className="text-sm text-[#475569]">School of Education</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#4B6E48] flex-shrink-0" />
                      <span className="text-sm text-[#475569]">School of Earth, Energy & Environmental Sciences</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#4B6E48] flex-shrink-0" />
                      <span className="text-sm text-[#475569]">School of Humanities and Sciences</span>
                    </div>
                  </div>
                </div>

                {/* Popular Graduate Programs Section */}
                <div>
                  <h4 className="text-base font-semibold text-[#0F172A] mb-4">
                    Popular Graduate Programs
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-[#E8F5E7] text-[#4B6E48] text-sm rounded-md border border-[#4B6E48]/20">
                      MS in Computer Science
                    </span>
                    <span className="px-3 py-1.5 bg-[#E8F5E7] text-[#4B6E48] text-sm rounded-md border border-[#4B6E48]/20">
                      MBA (2-year)
                    </span>
                    <span className="px-3 py-1.5 bg-[#E8F5E7] text-[#4B6E48] text-sm rounded-md border border-[#4B6E48]/20">
                      MS in Electrical Engineering
                    </span>
                    <span className="px-3 py-1.5 bg-[#E8F5E7] text-[#4B6E48] text-sm rounded-md border border-[#4B6E48]/20">
                      MS in Data Science
                    </span>
                    <span className="px-3 py-1.5 bg-[#E8F5E7] text-[#4B6E48] text-sm rounded-md border border-[#4B6E48]/20">
                      MS in Management Science & Engineering
                    </span>
                    <span className="px-3 py-1.5 bg-[#E8F5E7] text-[#4B6E48] text-sm rounded-md border border-[#4B6E48]/20">
                      PhD programs across all disciplines
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Information Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Carousel Container */}
            <div className="relative">
              {/* Left Navigation Button */}
              <button
                onClick={() => setCurrentAdmissionIndex(currentAdmissionIndex === 0 ? 1 : 0)}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border-2 border-[#4B6E48] flex items-center justify-center hover:bg-[#4B6E48] hover:text-white transition-all duration-300 shadow-lg group"
                aria-label="Previous admission card"
              >
                <ChevronLeft className="w-6 h-6 text-[#4B6E48] group-hover:text-white" />
              </button>

              {/* Right Navigation Button */}
              <button
                onClick={() => setCurrentAdmissionIndex(currentAdmissionIndex === 0 ? 1 : 0)}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border-2 border-[#4B6E48] flex items-center justify-center hover:bg-[#4B6E48] hover:text-white transition-all duration-300 shadow-lg group"
                aria-label="Next admission card"
              >
                <ChevronRight className="w-6 h-6 text-[#4B6E48] group-hover:text-white" />
              </button>

              {/* Cards Container */}
              <div className="overflow-hidden px-16">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentAdmissionIndex * 100}%)` }}
                >
              
              {/* Undergraduate Admission */}
              <div className="w-full flex-shrink-0">
                <div className="bg-[#F5F1E8] rounded-2xl overflow-hidden shadow-lg max-w-2xl mx-auto">
                {/* Image Placeholder */}
                <div className="h-40 bg-gray-200"></div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-[#0F172A] mb-6">
                    Undergraduate Admission
                  </h3>

                  {/* Academic Requirements */}
                  <div className="mb-6">
                    <h4 className="text-base font-semibold text-[#0F172A] mb-3">
                      Academic Requirements
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                        <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                        <span>4 years of English</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                        <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                        <span>Mathematics through Calculus</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                        <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                        <span>3+ years of History/Social Studies</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                        <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                        <span>3+ years of Laboratory Science</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                        <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                        <span>3+ years of Foreign Language</span>
                      </li>
                    </ul>
                  </div>

                  {/* Test Scores */}
                  <div className="mb-6">
                    <h4 className="text-base font-semibold text-[#0F172A] mb-3">
                      Test Scores
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-[#6B7280] mb-1">SAT Middle 50%</p>
                        <p className="text-lg font-semibold text-[#0F172A]">1470-1570</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6B7280] mb-1">ACT Middle 50%</p>
                        <p className="text-lg font-semibold text-[#0F172A]">33-35</p>
                      </div>
                    </div>
                  </div>

                  {/* Acceptance Rate */}
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-semibold text-[#0F172A]">
                        Acceptance Rate
                      </h4>
                      <p className="text-3xl font-bold text-[#4B6E48]">3.9%</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>

              {/* Graduate Admission */}
              <div className="w-full flex-shrink-0">
                <div className="bg-[#F5F1E8] rounded-2xl overflow-hidden shadow-lg max-w-2xl mx-auto">
                {/* Image */}
                <div className="h-40 bg-gray-200 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Graduate students studying"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-[#0F172A] mb-6">
                    Graduate Admission
                  </h3>

                  {/* Application Components */}
                  <div className="mb-6">
                    <h4 className="text-base font-semibold text-[#0F172A] mb-3">
                      Application Components
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                        <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                        <span>Bachelor's degree from accredited institution</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                        <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                        <span>GRE scores (program dependent)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                        <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                        <span>3 Letters of Recommendation</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                        <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                        <span>Statement of Purpose</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                        <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                        <span>TOEFL/IELTS (international students)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Program Requirements */}
                  <div className="mb-6">
                    <h4 className="text-base font-semibold text-[#0F172A] mb-3">
                      Program Requirements
                    </h4>
                    <p className="text-sm text-[#6B7280] mb-3">
                      Varies by program. Common requirements include:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-[#4B6E48] text-white text-xs font-medium rounded-full">
                        Research Experience
                      </span>
                      <span className="px-4 py-2 bg-[#4B6E48] text-white text-xs font-medium rounded-full">
                        Publications
                      </span>
                      <span className="px-4 py-2 bg-[#4B6E48] text-white text-xs font-medium rounded-full">
                        Relevant Coursework
                      </span>
                    </div>
                  </div>

                  {/* Application Deadlines */}
                  <div>
                    <h4 className="text-base font-semibold text-[#0F172A] mb-2">
                      Application Deadlines
                    </h4>
                    <p className="text-sm text-[#6B7280]">
                      Vary by program (typically December - January)
                    </p>
                  </div>
                </div>
              </div>
              </div>

                </div>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                <button
                  onClick={() => setCurrentAdmissionIndex(0)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentAdmissionIndex === 0 ? 'bg-[#4B6E48] w-8' : 'bg-[#4B6E48]/30'
                  }`}
                  aria-label="Show undergraduate admission"
                />
                <button
                  onClick={() => setCurrentAdmissionIndex(1)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentAdmissionIndex === 1 ? 'bg-[#4B6E48] w-8' : 'bg-[#4B6E48]/30'
                  }`}
                  aria-label="Show graduate admission"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cost and Financial Aid Section */}
        <section className="py-16 bg-[#FDFCFA]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A] mb-3">
                Cost & Financial Aid
              </h2>
              <p className="text-base text-[#6B7280]">
                Stanford is committed to making education affordable for all admitted students
              </p>
            </div>

            {/* Cost Breakdown Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm mb-6">
              <h3 className="text-xl md:text-2xl font-semibold text-[#0F172A] mb-6">
                Estimated Cost of Attendance (2024-25)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Undergraduate Costs */}
                <div>
                  <h4 className="text-base font-semibold text-[#0F172A] mb-4 pb-2 border-b border-gray-200">
                    Undergraduate (Per Year)
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#6B7280]">Tuition</span>
                      <span className="text-sm font-semibold text-[#0F172A]">$61,731</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#6B7280]">Room & Board</span>
                      <span className="text-sm font-semibold text-[#0F172A]">$19,922</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#6B7280]">Books & Supplies</span>
                      <span className="text-sm font-semibold text-[#0F172A]">$1,275</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#6B7280]">Personal Expenses</span>
                      <span className="text-sm font-semibold text-[#0F172A]">$3,015</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                      <span className="text-base font-semibold text-[#0F172A]">Total</span>
                      <span className="text-lg font-bold text-[#4B6E48]">$85,943</span>
                    </div>
                  </div>
                </div>

                {/* Graduate Costs */}
                <div>
                  <h4 className="text-base font-semibold text-[#0F172A] mb-4 pb-2 border-b border-gray-200">
                    Graduate (Per Year)
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#6B7280]">Tuition</span>
                      <span className="text-sm font-semibold text-[#0F172A]">$58,746</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#6B7280]">Room & Board</span>
                      <span className="text-sm font-semibold text-[#0F172A]">$21,630</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#6B7280]">Books & Supplies</span>
                      <span className="text-sm font-semibold text-[#0F172A]">$1,425</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#6B7280]">Personal Expenses</span>
                      <span className="text-sm font-semibold text-[#0F172A]">$3,195</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                      <span className="text-base font-semibold text-[#0F172A]">Total</span>
                      <span className="text-lg font-bold text-[#4B6E48]">$84,996</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Aid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Need-Based Aid */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-[#4B6E48] bg-opacity-10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-[#4B6E48]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                  Need-Based Aid
                </h3>
                <p className="text-sm text-[#6B7280] mb-4">
                  Families earning less than $150,000 pay no tuition. No loans required.
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-[#6B7280] mb-1">Students Receiving Aid</p>
                  <p className="text-2xl font-bold text-[#4B6E48]">58%</p>
                </div>
              </div>

              {/* Merit Scholarships */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-[#4B6E48] bg-opacity-10 flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-[#4B6E48]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                  Scholarships
                </h3>
                <p className="text-sm text-[#6B7280] mb-4">
                  External scholarships welcomed and integrated into financial aid packages.
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-[#6B7280] mb-1">Average Grant</p>
                  <p className="text-2xl font-bold text-[#4B6E48]">$57,000</p>
                </div>
              </div>

              {/* Work-Study */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-[#4B6E48] bg-opacity-10 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-[#4B6E48]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                  Work-Study
                </h3>
                <p className="text-sm text-[#6B7280] mb-4">
                  On-campus employment opportunities for eligible students.
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-[#6B7280] mb-1">Avg. Earnings/Year</p>
                  <p className="text-2xl font-bold text-[#4B6E48]">$3,500</p>
                </div>
              </div>
            </div>

            {/* Financial Aid Highlights */}
            <div className="bg-gradient-to-br from-[#4B6E48] to-[#5F8A4E] rounded-xl p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Financial Aid Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">100% of demonstrated financial need met</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">No loans in financial aid packages</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Need-blind admission for US citizens</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Flexible payment plans available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Campus Life Section */}
        <CampusLifeSection />

        {/* Career Outcomes Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A] mb-3">
                Career Outcomes
              </h2>
              <p className="text-base text-[#6B7280]">
                Stanford graduates are highly sought-after by top employers across industries
              </p>
            </div>

            {/* Employment Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Employment Rate */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-sm font-semibold text-[#0F172A] mb-2">Employment Rate</h4>
                <p className="text-4xl font-bold text-[#4B6E48] mb-1">95%</p>
                <p className="text-xs text-[#6B7280]">within 6 months of graduation</p>
              </div>

              {/* Median Starting Salary */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-sm font-semibold text-[#0F172A] mb-2">Median Starting Salary</h4>
                <p className="text-4xl font-bold text-[#4B6E48] mb-1">$91,540</p>
                <p className="text-xs text-[#6B7280]">$91,540-$125,000 (varies by field)</p>
              </div>

              {/* Graduate School */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-sm font-semibold text-[#0F172A] mb-2">Graduate School</h4>
                <p className="text-4xl font-bold text-[#4B6E48] mb-1">25-40%</p>
                <p className="text-xs text-[#6B7280]">pursue advanced degrees within 5 years</p>
              </div>
            </div>

            {/* Top Employers */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#0F172A] mb-4">Top Employers</h3>
              <div className="flex flex-wrap gap-3">
                {['Google', 'Microsoft', 'Amazon', 'Goldman Sachs', 'Apple', 'McKinsey & Company', 'Goldman Sachs', 'Deloitte and PricewaterhouseCoopers'].map((employer, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-[#0F172A] hover:border-[#4B6E48] hover:text-[#4B6E48] transition-colors duration-200"
                  >
                    {employer}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Support Services & Entrepreneurship Support */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Career Support Services */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#4B6E48] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-[#4B6E48]"/>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172A] mt-1">
                    Career Support Services
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                    <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                    <span>Career Exploration Center with specialized advisors</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                    <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                    <span>Resume and interview preparation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                    <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                    <span>Networking events and career fairs</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                    <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                    <span>Alumni mentorship program</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                    <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                    <span>Internship and job database</span>
                  </li>
                </ul>
              </div>

              {/* Entrepreneurship Support */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#4B6E48] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#4B6E48]"/>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172A] mt-1">
                    Entrepreneurship Support
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                    <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                    <span>Start accelerator for Stanford startups</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                    <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                    <span>Funding opportunities and VC of Design</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                    <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                    <span>Hasso Plattner Institute of Design</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                    <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                    <span>Pitch competitions and business plan contests</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                    <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                    <span>Tech incubator and funding opportunities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* For International Students */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* OPT Information */}
              <div className="bg-[#EBF5FF] border border-blue-200 rounded-xl p-6">
                <div className="flex items-start gap-2 mb-2">
                  <Globe className="w-5 h-5 text-[#2563EB] mt-0.5 flex-shrink-0" />
                  <h4 className="text-base font-semibold text-[#0F172A]">For International Students</h4>
                </div>
                <p className="text-sm text-[#6B7280]">
                  <span className="font-medium text-[#0F172A]">OPT:</span> Available for curricular and/or training during studies
                </p>
              </div>

              {/* Note */}
              <div className="bg-[#FFF7ED] border border-orange-200 rounded-xl p-6">
                <div className="flex items-start gap-2 mb-2">
                  <Lightbulb className="w-5 h-5 text-[#EA580C] mt-0.5 flex-shrink-0" />
                  <h4 className="text-base font-semibold text-[#0F172A]">Note</h4>
                </div>
                <p className="text-sm text-[#6B7280]">
                  Completion of an online or partnership can be challenging
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section className="py-16 bg-[#FDFCFA]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A] mb-3">
                Research
              </h2>
              <p className="text-base text-[#6B7280]">
                Stanford is at the forefront of the world's leading research universities with $1.8+ billion in research funding
              </p>
            </div>

            {/* Research Strengths & Major Research Facilities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Research Strengths */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#4B6E48] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <Microscope className="w-5 h-5 text-[#4B6E48]"/>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172A] mt-1">
                    Research Strengths
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                    <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                    <span>Artificial Intelligence and Machine Learning</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                    <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                    <span>Biotechnology and Genomics</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                    <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                    <span>Energy and Environmental Sciences</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                    <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                    <span>Human-Computer Interaction</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                    <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                    <span>Physics and Quantum Computing</span>
                  </li>
                </ul>
              </div>

              {/* Major Research Facilities */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#4B6E48] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <FlaskConical className="w-5 h-5 text-[#4B6E48]"/>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172A] mt-1">
                    Major Research Facilities
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                    <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                    <span>SLAC National Accelerator Laboratory</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                    <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                    <span>Bio-X Interdisciplinary Biosciences Institute</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                    <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                    <span>Woods Institute for the Environment</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                    <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                    <span>Freeman Spogli Institute for International Studies</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Research Opportunities for Students */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#4B6E48] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-5 h-5 text-[#4B6E48]"/>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mt-1">
                  Research Opportunities for Students
                </h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
                <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                  <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                  <span>Undergraduate research assistants with faculty</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                  <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                  <span>Summer research programs</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                  <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                  <span>Honors thesis programs</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#6B7280]">
                  <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0" />
                  <span>PhD research option at graduation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <EnhancedCoursesSection />
      </main>

      <Footer />
    </div>
  );
}