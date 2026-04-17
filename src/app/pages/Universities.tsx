import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { FeatureCard } from '@/app/components/ui/feature-card';
import { Footer } from '@/app/components/Footer';
import { Navigation } from '@/app/components/Navigation';
import { GraduationCap, Info, Search, BookOpen, Users, TrendingUp, DollarSign, Calendar, Award, MapPin, Building2, Globe, ChevronDown, Laptop, ArrowRight, Clock } from 'lucide-react';
import { StandardButton } from '@/app/components/ui/standard-button';
import { UniversityCTASection } from '@/app/components/UniversityCTASection';
import { AvailableServiceProviders } from '@/app/components/AvailableServiceProviders';

// Data for "Need help" section
const helpFeatures = [
  {
    icon: (
      <img 
        src="https://images.unsplash.com/photo-1740908900846-4bbd4f22c975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwaW1wcm92ZW1lbnQlMjByZXNlYXJjaHxlbnwxfHx8fDE3Njk2ODE0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
        alt="Experience Icon" 
        className="h-12 w-12 object-cover rounded-lg"
      />
    ),
    title: "Help us to Improve",
    description: "In order to provide a better service we would like to collect your data for research purposes, you can decline it anytime!",
  },
  {
    icon: (
       <img 
        src="https://images.unsplash.com/photo-1606495813362-8efff01b8573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbm90aWZpY2F0aW9uJTIwYWxlcnR8ZW58MXx8fHwxNzY5NjgxNDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
        alt="Notification Icon" 
        className="h-12 w-12 object-cover rounded-lg"
      />
    ),
    title: "Get Notified",
    description: "Enhance your user experience by ensuring a seamless flow through the activation of notifications.",
  },
  {
    icon: (
       <img 
        src="https://images.unsplash.com/photo-1754299096126-9d69cde326c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhdGlvbiUyMHBpbiUyMG1hcCUyMG5hdmlnYXRpb258ZW58MXx8fHwxNzY5NjgxNDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
        alt="Location Icon" 
        className="h-12 w-12 object-cover rounded-lg"
      />
    ),
    title: "Allow Location Access",
    description: "Your company needs it and Personalised recommendations of service providers.",
  },
];

// University data
const universityList = [
  {
    name: "Harvard University",
    country: "United States",
    rankBadge: "#1",
    description: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts, with about 6,700 undergraduate students and about 15,250 postgraduate students.",
    tuitionRange: "$54,000 - $75,000/year",
    acceptance: "3.4%",
    applicationDeadline: "January 1, 2026",
    rankings: "QS #5, THE #2",
    campusSize: "209 acres",
    studentsEnrolled: "31,000+",
    popularPrograms: ["Business", "Law", "Medicine", "Engineering", "Computer Science"],
    keyHighlights: [
      "World-renowned faculty including Nobel laureates and Pulitzer Prize winners",
      "Extensive library system with over 17 million volumes",
      "Strong alumni network with global influence",
      "Need-blind admission policy for all applicants"
    ]
  },
  {
    name: "University of Oxford",
    country: "United Kingdom",
    rankBadge: "#2",
    description: "The University of Oxford is a collegiate research university in Oxford, England. There is evidence of teaching as early as 1096, making it the oldest university in the English-speaking world.",
    tuitionRange: "£9,250 - £28,000/year",
    acceptance: "17.5%",
    applicationDeadline: "October 15, 2025",
    rankings: "QS #2, THE #1",
    campusSize: "Collegiate system",
    studentsEnrolled: "24,000+",
    popularPrograms: ["Philosophy", "Law", "Medicine", "History", "Literature"],
    keyHighlights: [
      "Tutorial system providing personalized learning experience",
      "38 constituent colleges with unique characteristics",
      "One of the world's greatest research libraries",
      "Excellent graduate employment outcomes"
    ]
  },
  {
    name: "Stanford University",
    country: "United States",
    rankBadge: "#3",
    description: "Stanford University is a private research university in Stanford, California. Known for its entrepreneurship and proximity to Silicon Valley, Stanford has produced numerous tech industry leaders.",
    tuitionRange: "$57,000 - $80,000/year",
    acceptance: "3.9%",
    applicationDeadline: "January 5, 2026",
    rankings: "QS #3, THE #4",
    campusSize: "8,180 acres",
    studentsEnrolled: "17,000+",
    popularPrograms: ["Computer Science", "Engineering", "Business", "Medicine", "Law"],
    keyHighlights: [
      "Located in the heart of Silicon Valley with strong industry connections",
      "Generous financial aid covering full tuition for families earning under $150K",
      "World-class entrepreneurship and innovation programs",
      "Beautiful campus with Mediterranean-style architecture"
    ]
  }
];

// Data for "Tips for university research" section
const researchTips = [
  {
    icon: <Globe className="h-12 w-12 text-primary" />,
    title: "Research Multiple Universities",
    description: "Consider 8-12 universities across different selectivity levels (reach, target, safety)",
  },
  {
    icon: <DollarSign className="h-12 w-12 text-primary" />,
    title: "Understand Total Costs",
    description: "Factor in tuition, living expenses, travel, and health insurance for accurate budgeting",
  },
  {
    icon: <Laptop className="h-12 w-12 text-primary" />,
    title: "Check Program Requirements",
    description: "Each program has specific prerequisites, test scores, and application requirements",
  },
  {
    icon: <TrendingUp className="h-12 w-12 text-primary" />,
    title: "Consider Post-Study Options",
    description: "Research work rights, industry connections, and career support services",
  },
];

// Animation variants for the container and items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Universities() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section with Asymmetric Grid */}
      <div className="max-w-[1440px] mx-auto px-8 my-20">
        <div className="flex flex-col-reverse lg:flex-row gap-8 justify-between items-center">
          {/* Text Section - Left Side */}
          <div className="w-full lg:w-[40%] h-auto lg:h-[500px] flex flex-col justify-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="uppercase text-xs tracking-wider text-[rgb(255,251,251)] mb-2">
                Find Your Perfect Match
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Discover Your Dream University
              </h1>
              <p className="text-base md:text-lg leading-relaxed font-light text-[rgb(255,255,255)] mb-6">
                Explore thousands of universities worldwide and find the perfect fit for your academic journey with our comprehensive database and expert guidance
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 mx-auto lg:mx-0 text-gray-900 bg-white rounded-lg hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
              >
                Learn more
              </a>
            </motion.div>
          </div>

          {/* Grid Container - Right Side */}
          <div className="w-full lg:min-w-[60%] grid grid-cols-8 gap-2 h-[400px] lg:h-[500px]">
            {/* Grid Item One */}
            <div
              className="col-start-1 col-end-2 row-start-2 row-end-3 bg-gray-300 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzY5NDc4MjMwfDA&ixlib=rb-4.1.0&q=80&w=400')`
              }}
            />

            {/* Grid Item Two - Large Center */}
            <div
              className="col-start-2 col-end-5 row-start-1 row-end-4 bg-gray-300 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMHN0dWR5fGVufDF8fHx8MTc2OTQ4MTgxMXww&ixlib=rb-4.1.0&q=80&w=900')`
              }}
            />

            {/* Grid Item Three */}
            <div
              className="col-start-5 col-end-6 row-start-1 row-end-2 bg-gray-300 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1738949538943-e54722a44ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255fGVufDF8fHx8MTc2OTQ5NjYxN3ww&ixlib=rb-4.1.0&q=80&w=500')`
              }}
            />

            {/* Grid Item Four - Colored Block */}
            <div
              className="col-start-6 col-end-7 row-start-1 row-end-2 bg-[#FDF5DD] rounded-lg"
              style={{ borderRadius: '0 0 100px 0' }}
            />

            {/* Grid Item Five */}
            <div
              className="col-start-5 col-end-7 row-start-2 row-end-4 bg-gray-300 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1757192420329-39acf20a12b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2xhc3Nyb29tJTIwbGVjdHVyZXxlbnwxfHx8fDE3Njk1ODYzNTh8MA&ixlib=rb-4.1.0&q=80&w=400')`
              }}
            />

            {/* Grid Item Six - Colored Block */}
            <div
              className="col-start-7 col-end-8 row-start-2 row-end-3 bg-[#D3F0EE] rounded-lg"
              style={{ borderRadius: '0 100px 0 0' }}
            />

            {/* Grid Item Seven */}
            <div
              className="col-start-7 col-end-8 row-start-3 row-end-4 bg-gray-300 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1713721332588-122f666e2525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3Njk1NzQ2NTh8MA&ixlib=rb-4.1.0&q=80&w=500')`
              }}
            />

            {/* Grid Item Eight - Circle */}
            <div className="col-start-8 col-end-9 row-start-3 row-end-4 bg-[#CED7ED] rounded-full" />

            {/* Grid Item Nine - Colored Block */}
            <div
              className="col-start-1 col-end-2 row-start-4 row-end-5 bg-[#FADEE0] rounded-lg"
              style={{ borderRadius: '100px 0 0 0' }}
            />

            {/* Grid Item Ten */}
            <div
              className="col-start-2 col-end-3 row-start-4 row-end-5 bg-gray-300 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1520569495996-b5e1219cb625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzY5NDc5ODYxfDA&ixlib=rb-4.1.0&q=80&w=300')`
              }}
            />

            {/* Grid Item Eleven - Large Bottom */}
            <div
              className="col-start-3 col-end-5 row-start-4 row-end-6 bg-gray-300 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzY5NDc4MjMwfDA&ixlib=rb-4.1.0&q=80&w=700')`
              }}
            />

            {/* Grid Item Twelve */}
            <div
              className="col-start-5 col-end-6 row-start-4 row-end-5 bg-gray-300 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMHN0dWR5fGVufDF8fHx8MTc2OTQ4MTgxMXww&ixlib=rb-4.1.0&q=80&w=300')`
              }}
            />
          </div>
        </div>
      </div>

      {/* Featured Universities Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center box-border px-[32px] py-[27px] bg-white">
        {/* Search and Filter Bar */}
        <div className="w-full max-w-[1000px] mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-3 items-center">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search universities or cities..."
                className="w-full pl-11 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {/* Country Filter */}
            <div className="relative w-full md:w-44">
              <select className="w-full appearance-none px-3.5 py-2.5 pr-9 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-700 bg-white cursor-pointer">
                <option>All Countries</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>Germany</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Type Filter */}
            <div className="relative w-full md:w-44">
              <select className="w-full appearance-none px-3.5 py-2.5 pr-9 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-700 bg-white cursor-pointer">
                <option>All Types</option>
                <option>Public</option>
                <option>Private</option>
                <option>Research</option>
                <option>Liberal Arts</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Results Counter */}
          <div className="mt-3 text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{universityList.length}</span> of <span className="font-semibold text-gray-900">{universityList.length}</span> universities
          </div>
        </div>

        {/* University Cards */}
        {universityList.map((university, index) => (
          <div
            key={index}
            className="relative w-full max-w-[1000px] mx-auto my-6 text-gray-900 bg-white rounded-xl shadow-lg border border-gray-200 transition-all duration-300 ease-out hover:shadow-xl"
          >
            {/* Card Contents */}
            <div className="p-6 flex flex-col gap-4">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#4B6E48] rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg font-bold">{university.rankBadge}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {university.name}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {university.description}
                  </p>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <DollarSign className="w-5 h-5 text-[#4B6E48] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Tuition Range</p>
                    <p className="text-sm text-gray-900 font-semibold">{university.tuitionRange}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Users className="w-5 h-5 text-[#4B6E48] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Acceptance Rate</p>
                    <p className="text-sm text-gray-900 font-semibold">{university.acceptance}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-[#4B6E48] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Application Deadline</p>
                    <p className="text-sm text-gray-900 font-semibold">{university.applicationDeadline}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Award className="w-5 h-5 text-[#4B6E48] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Rankings</p>
                    <p className="text-sm text-gray-900 font-semibold">{university.rankings}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Building2 className="w-5 h-5 text-[#4B6E48] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Campus Size</p>
                    <p className="text-sm text-gray-900 font-semibold">{university.campusSize}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Globe className="w-5 h-5 text-[#4B6E48] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Students Enrolled</p>
                    <p className="text-sm text-gray-900 font-semibold">{university.studentsEnrolled}</p>
                  </div>
                </div>
              </div>

              {/* Popular Programs */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-[#4B6E48]" />
                  <h3 className="text-sm font-semibold text-gray-900">Popular Programs</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {university.popularPrograms.map((program, programIndex) => (
                    <span
                      key={programIndex}
                      className="px-3 py-1.5 bg-[#4B6E48]/10 text-[#4B6E48] text-sm font-medium rounded-full"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Key Highlights</h3>
                <ul className="space-y-2">
                  {university.keyHighlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#4B6E48] mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="flex justify-end pt-2">
                <StandardButton
                  className="px-6"
                  onClick={() => navigate(`/universities/${university.name.toLowerCase().replace(/\s+/g, '-')}`)}
                >
                  View University Details →
                </StandardButton>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Featured Courses Section */}
      <section className="relative w-full py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Popular Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover trending programs and courses offered by top universities worldwide
            </p>
          </motion.div>

          {/* Courses Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {/* Course Card 1 */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#4B6E48]/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-[#4B6E48]" />
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Undergraduate
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Bachelor of Computer Science
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <GraduationCap className="w-4 h-4 text-[#4B6E48]" />
                    <span>Western University</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-[#4B6E48]" />
                    <span>4 Years</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 text-[#4B6E48]" />
                    <span>$48,699 CAD/year</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-[#4B6E48]" />
                    <span>London, Ontario</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">PGWP Available</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Co-op</span>
                </div>
                <StandardButton
                  className="w-full"
                  onClick={() => navigate('/courses/bachelor-computer-science')}
                >
                  View Course Details <ArrowRight className="w-4 h-4 ml-2 inline" />
                </StandardButton>
              </div>
            </motion.div>

            {/* Course Card 2 */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#4B6E48]/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-[#4B6E48]" />
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Undergraduate
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Bachelor of Business Administration
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <GraduationCap className="w-4 h-4 text-[#4B6E48]" />
                    <span>Western University</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-[#4B6E48]" />
                    <span>4 Years</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 text-[#4B6E48]" />
                    <span>$46,299 CAD/year</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-[#4B6E48]" />
                    <span>London, Ontario</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">PGWP Available</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">International</span>
                </div>
                <StandardButton
                  className="w-full"
                  onClick={() => navigate('/courses/bachelor-business-administration')}
                >
                  View Course Details <ArrowRight className="w-4 h-4 ml-2 inline" />
                </StandardButton>
              </div>
            </motion.div>

            {/* Course Card 3 */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#4B6E48]/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-[#4B6E48]" />
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Undergraduate
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Bachelor of Mechanical Engineering
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <GraduationCap className="w-4 h-4 text-[#4B6E48]" />
                    <span>Western University</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-[#4B6E48]" />
                    <span>4 Years</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 text-[#4B6E48]" />
                    <span>$52,450 CAD/year</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-[#4B6E48]" />
                    <span>London, Ontario</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">PGWP Available</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Co-op</span>
                </div>
                <StandardButton
                  className="w-full"
                  onClick={() => navigate('/courses/bachelor-mechanical-engineering')}
                >
                  View Course Details <ArrowRight className="w-4 h-4 ml-2 inline" />
                </StandardButton>
              </div>
            </motion.div>
          </motion.div>

          {/* View All Courses CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <StandardButton
              className="px-8"
              onClick={() => navigate('/services/courses')}
            >
              Browse All Courses <ArrowRight className="w-4 h-4 ml-2 inline" />
            </StandardButton>
          </motion.div>
        </div>
      </section>

      {/* Tips for university research Section */}
      <div className="w-full bg-background text-foreground p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.h2
            className="text-[40px] font-semibold text-[#0F172A] text-center mb-3 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Tips for university research
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p
            className="text-base text-gray-600 text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            Important considerations when exploring and comparing universities
          </motion.p>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {researchTips.map((tip, index) => (
              <motion.div key={index} variants={itemVariants} className="h-full flex">
                <FeatureCard
                  icon={tip.icon}
                  title={tip.title}
                  description={tip.description}
                  className="w-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Important Information Section */}
      <div className="w-full py-16 px-8 md:px-24" style={{ backgroundColor: '#EEF5FF' }}>
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="bg-white rounded-2xl p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Info className="w-8 h-8 mb-4" style={{ color: '#2563EB' }} />
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="font-semibold mb-4"
              style={{ fontSize: '22px', color: '#0F172A' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
            >
              Important information about university listings
            </motion.h2>

            {/* Body Paragraphs */}
            <div className="space-y-3">
              <motion.p
                style={{ fontSize: '15px', lineHeight: '1.6', color: '#334155' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.18 }}
              >
                All university information displayed on this platform is provided for informational purposes only. While we strive to maintain accurate and up-to-date listings, we recommend verifying all details directly with the respective universities before making any decisions.
              </motion.p>

              <motion.p
                style={{ fontSize: '15px', lineHeight: '1.6', color: '#334155' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.26 }}
              >
                Tuition fees, admission requirements, and program availability may change without notice. Scholarship opportunities and application deadlines should be confirmed through official university channels to ensure you have the most current information.
              </motion.p>

              <motion.p
                style={{ fontSize: '15px', lineHeight: '1.6', color: '#334155' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.34 }}
              >
                We are not affiliated with any of the listed universities and do not guarantee admission or scholarship awards. Our platform serves as a resource to help you discover and compare options, but final decisions and applications remain your responsibility.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Available Service Providers */}
      <AvailableServiceProviders />

      {/* Call to Action Section */}
      <UniversityCTASection />

      <Footer />
    </div>
  );
}