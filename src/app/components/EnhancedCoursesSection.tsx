import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Search, 
  GraduationCap, 
  Clock, 
  Calendar, 
  MapPin, 
  DollarSign, 
  ArrowRight, 
  CheckCircle, 
  BookOpen,
  Users,
  Globe,
  TrendingUp,
  Star,
  Filter,
  X,
  Heart,
  Share2,
  Download
} from 'lucide-react';
import { Link } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

interface Course {
  id: string;
  title: string;
  university: string;
  level: string;
  duration: string;
  intake: string[];
  location: string;
  tuition: string;
  discipline: string;
  ranking: number;
  students: string;
  employability: string;
  description: string;
  featured?: boolean;
  popular?: boolean;
}

const coursesData: Course[] = [
  {
    id: 'cs-101',
    title: 'Bachelor of Computer Science',
    university: 'Stanford University',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: ['September', 'January'],
    location: 'Stanford, California',
    tuition: '$55,473 USD',
    discipline: 'Computer Science',
    ranking: 1,
    students: '1,800+',
    employability: '98%',
    description: 'World-leading program in computer science and artificial intelligence with cutting-edge research opportunities.',
    featured: true,
    popular: true
  },
  {
    id: 'ba-102',
    title: 'Master of Business Administration',
    university: 'Stanford University',
    level: 'Postgraduate',
    duration: '2 Years',
    intake: ['September'],
    location: 'Stanford, California',
    tuition: '$74,706 USD',
    discipline: 'Business',
    ranking: 1,
    students: '850+',
    employability: '99%',
    description: 'Elite MBA program with focus on innovation, entrepreneurship, and global business leadership.',
    featured: true,
    popular: true
  },
  {
    id: 'eng-103',
    title: 'Bachelor of Engineering Science',
    university: 'Stanford University',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: ['September'],
    location: 'Stanford, California',
    tuition: '$56,169 USD',
    discipline: 'Engineering',
    ranking: 2,
    students: '2,200+',
    employability: '97%',
    description: 'Comprehensive engineering program with specializations in mechanical, electrical, and biomedical engineering.',
    featured: true,
    popular: false
  },
  {
    id: 'data-104',
    title: 'Master of Data Science',
    university: 'Stanford University',
    level: 'Postgraduate',
    duration: '1.5 Years',
    intake: ['September', 'January'],
    location: 'Stanford, California',
    tuition: '$52,800 USD',
    discipline: 'Computer Science',
    ranking: 1,
    students: '650+',
    employability: '98%',
    description: 'Advanced program combining statistics, machine learning, and big data analytics.',
    featured: false,
    popular: true
  },
  {
    id: 'med-105',
    title: 'Bachelor of Medicine',
    university: 'Stanford University',
    level: 'Undergraduate',
    duration: '6 Years',
    intake: ['September'],
    location: 'Stanford, California',
    tuition: '$62,145 USD',
    discipline: 'Medicine',
    ranking: 3,
    students: '500+',
    employability: '100%',
    description: 'Renowned medical program with clinical training at world-class hospitals.',
    featured: false,
    popular: true
  },
  {
    id: 'law-106',
    title: 'Juris Doctor (JD)',
    university: 'Stanford University',
    level: 'Postgraduate',
    duration: '3 Years',
    intake: ['September'],
    location: 'Stanford, California',
    tuition: '$66,396 USD',
    discipline: 'Law',
    ranking: 2,
    students: '550+',
    employability: '95%',
    description: 'Premier law school with focus on constitutional law, intellectual property, and corporate law.',
    featured: false,
    popular: false
  },
  {
    id: 'econ-107',
    title: 'Bachelor of Economics',
    university: 'Stanford University',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: ['September', 'January'],
    location: 'Stanford, California',
    tuition: '$54,315 USD',
    discipline: 'Economics',
    ranking: 4,
    students: '900+',
    employability: '94%',
    description: 'Strong foundation in economic theory, econometrics, and policy analysis.',
    featured: false,
    popular: false
  },
  {
    id: 'bio-108',
    title: 'Master of Biotechnology',
    university: 'Stanford University',
    level: 'Postgraduate',
    duration: '2 Years',
    intake: ['September'],
    location: 'Stanford, California',
    tuition: '$58,920 USD',
    discipline: 'Life Sciences',
    ranking: 1,
    students: '420+',
    employability: '96%',
    description: 'Interdisciplinary program at the intersection of biology, technology, and medicine.',
    featured: false,
    popular: true
  },
  {
    id: 'psy-109',
    title: 'Bachelor of Psychology',
    university: 'Stanford University',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: ['September', 'January'],
    location: 'Stanford, California',
    tuition: '$53,890 USD',
    discipline: 'Psychology',
    ranking: 2,
    students: '750+',
    employability: '91%',
    description: 'Comprehensive study of human behavior, cognition, and mental processes.',
    featured: false,
    popular: false
  }
];

const courseStats = [
  { value: '200+', label: 'Programs Available', icon: BookOpen },
  { value: '15K+', label: 'Students Enrolled', icon: Users },
  { value: '50+', label: 'Countries', icon: Globe },
  { value: '96%', label: 'Avg. Employability', icon: TrendingUp }
];

export function EnhancedCoursesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedDiscipline, setSelectedDiscipline] = useState('all');
  const [selectedIntake, setSelectedIntake] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [savedCourses, setSavedCourses] = useState<string[]>([]);

  // Filter courses
  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.discipline.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesDiscipline = selectedDiscipline === 'all' || course.discipline === selectedDiscipline;
    const matchesIntake = selectedIntake === 'all' || course.intake.includes(selectedIntake);

    return matchesSearch && matchesLevel && matchesDiscipline && matchesIntake;
  });

  // Get unique values for filters
  const levels = [...new Set(coursesData.map(c => c.level))];
  const disciplines = [...new Set(coursesData.map(c => c.discipline))];
  const intakes = [...new Set(coursesData.flatMap(c => c.intake))];

  // Save/unsave course
  const toggleSaveCourse = (courseId: string) => {
    setSavedCourses(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
              once: true
            }
          }
        );
      }

      // Stats animations
      statsRef.current.forEach((stat, index) => {
        if (!stat) return;
        
        gsap.fromTo(
          stat,
          { opacity: 0, y: 20, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stat,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true
            },
            delay: index * 0.1
          }
        );
      });

      // Course cards stagger animation
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none none',
              once: true
            },
            delay: (index % 3) * 0.1
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredCourses]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-white overflow-hidden"
      data-enhanced-courses-section
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(75, 110, 72, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 70%, rgba(75, 110, 72, 0.12) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(75, 110, 72, 0.08) 0%, transparent 60%),
                           repeating-radial-gradient(circle at 50% 50%, transparent 0px, transparent 40px, rgba(75, 110, 72, 0.05) 40px, rgba(75, 110, 72, 0.05) 41px)`,
          backgroundSize: '100% 100%, 100% 100%, 100% 100%, 80px 80px',
          backgroundPosition: '0 0, 0 0, 0 0, 0 0'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div ref={headingRef} className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A] mb-4">
            Courses & Programs
          </h2>
          <p className="text-base text-[#6B7280] max-w-2xl mx-auto">
            Discover world-class programs across diverse disciplines. Filter by level, field of study, and intake to find your perfect match.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {courseStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                ref={(el) => { statsRef.current[index] = el; }}
                className="relative bg-[#FDFCFA] border border-gray-200 rounded-xl p-6 text-center group hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#4B6E48] bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-[#4B6E48]" />
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-[#4B6E48] mb-1">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-[#6B7280]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Search & Filters */}
        <div className="mb-8">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
            <input
              type="text"
              placeholder="Search courses by name or discipline..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent transition-all"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all"
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </span>
            </button>

            <div className="text-sm text-[#6B7280]">
              Showing <span className="font-semibold text-[#4B6E48]">{filteredCourses.length}</span> of {coursesData.length} programs
            </div>
          </div>

          {/* Filters Grid */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-[#FDFCFA] border border-gray-200 rounded-xl">
              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-2">
                  Program Level
                </label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent"
                >
                  <option value="all">All Levels</option>
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-2">
                  Discipline
                </label>
                <select
                  value={selectedDiscipline}
                  onChange={(e) => setSelectedDiscipline(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent"
                >
                  <option value="all">All Disciplines</option>
                  {disciplines.map(discipline => (
                    <option key={discipline} value={discipline}>{discipline}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-2">
                  Intake
                </label>
                <select
                  value={selectedIntake}
                  onChange={(e) => setSelectedIntake(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent"
                >
                  <option value="all">All Intakes</option>
                  {intakes.map(intake => (
                    <option key={intake} value={intake}>{intake}</option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              <div className="md:col-span-3 flex justify-end">
                <button
                  onClick={() => {
                    setSelectedLevel('all');
                    setSelectedDiscipline('all');
                    setSelectedIntake('all');
                    setSearchQuery('');
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-[#4B6E48] hover:bg-white rounded-lg transition-all"
                >
                  <X className="w-4 h-4" />
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Featured Badge */}
              {course.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 bg-[#4B6E48] text-white text-xs font-semibold rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                </div>
              )}

              {/* Popular Badge */}
              {course.popular && !course.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Popular
                  </div>
                </div>
              )}

              {/* Card Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-lg bg-[#4B6E48] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-[#4B6E48]" />
                  </div>
                  
                  {/* Save Button */}
                  <button
                    onClick={() => toggleSaveCourse(course.id)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Heart 
                      className={`w-5 h-5 transition-all ${
                        savedCourses.includes(course.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                </div>

                <h3 className="text-lg font-semibold text-[#0F172A] mb-2 group-hover:text-[#4B6E48] transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-sm text-[#6B7280] mb-3 line-clamp-2">
                  {course.description}
                </p>

                {/* Ranking Badge */}
                <div className="inline-flex items-center gap-1 px-2 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded">
                  <Star className="w-3 h-3 fill-current" />
                  #{course.ranking} Ranking
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <Clock className="w-4 h-4 text-[#4B6E48]" />
                  <span>{course.duration}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <Calendar className="w-4 h-4 text-[#4B6E48]" />
                  <span>Intake: {course.intake.join(', ')}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <MapPin className="w-4 h-4 text-[#4B6E48]" />
                  <span>{course.location}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <DollarSign className="w-4 h-4 text-[#4B6E48]" />
                  <span className="font-semibold text-[#0F172A]">{course.tuition}</span>
                </div>

                {/* Stats Row */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[#6B7280]">Students: </span>
                    <span className="font-semibold text-[#0F172A]">{course.students}</span>
                  </div>
                  <div>
                    <span className="text-[#6B7280]">Employability: </span>
                    <span className="font-semibold text-[#4B6E48]">{course.employability}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <Link
                  to={`/courses/${course.id}`}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#4B6E48] text-white rounded-lg hover:bg-[#3d5a3a] transition-all group/btn"
                >
                  <span className="text-sm font-medium">View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
              No courses found
            </h3>
            <p className="text-[#6B7280] mb-4">
              Try adjusting your filters or search query
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLevel('all');
                setSelectedDiscipline('all');
                setSelectedIntake('all');
              }}
              className="px-6 py-2 bg-[#4B6E48] text-white rounded-lg hover:bg-[#3d5a3a] transition-all"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* View All Button */}
        {filteredCourses.length > 0 && (
          <div className="mt-12 text-center">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#4B6E48] text-[#4B6E48] rounded-lg hover:bg-[#4B6E48] hover:text-white transition-all group"
            >
              <span className="font-medium">Explore All Programs</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
