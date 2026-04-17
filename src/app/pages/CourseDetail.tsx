import { useParams, useNavigate, Link } from 'react-router';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { courses } from '@/app/components/CoursesSection';
import { 
  ArrowLeft, 
  Home,
  GraduationCap,
  Clock,
  DollarSign,
  Calendar,
  MapPin,
  FileText,
  BookOpen,
  CheckCircle,
  Award,
  Briefcase,
  ChevronRight,
  Save,
  GitCompare
} from 'lucide-react';
import { motion } from 'motion/react';

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the course by ID
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">Course Not Found</h1>
            <p className="text-gray-600 mb-6">The course you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 bg-[#4B6E48] text-white rounded-lg hover:bg-[#3d5a3a] transition-colors"
            >
              Go Back
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Sample data for course details
  const courseDetails = {
    overview: `This program provides students with a comprehensive understanding of ${course.discipline.toLowerCase()}, combining theoretical knowledge with practical application. Students will develop critical thinking skills, engage in hands-on learning experiences, and prepare for successful careers in their chosen field.`,
    degree: course.title,
    applicationFee: '$150 CAD',
    campus: 'Main Campus',
    admissionRequirements: [
      'High school diploma with minimum 75% average',
      'English Language Proficiency: IELTS 6.5 (no band less than 6.0) or TOEFL iBT 83',
      'Official transcripts from all post-secondary institutions attended',
      'Statement of purpose (500-750 words)',
      'Two letters of recommendation',
      'Resume/CV (for graduate programs)'
    ],
    careerOpportunities: getCareersForDiscipline(course.discipline)
  };

  // Related programs (filter by same discipline, exclude current)
  const relatedPrograms = courses
    .filter(c => c.discipline === course.discipline && c.id !== course.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Breadcrumbs */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-gray-600 hover:text-[#4B6E48] transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link to="/universities" className="text-gray-600 hover:text-[#4B6E48] transition-colors">
                Universities
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link to="/universities/western-university" className="text-gray-600 hover:text-[#4B6E48] transition-colors">
                Western University
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-900 font-medium">Course Detail</span>
            </nav>
          </div>
        </div>

        {/* Hero / Header Area */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600 hover:text-[#4B6E48] transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Programs
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
                {course.title}
              </h1>
              <div className="flex items-center gap-4 flex-wrap text-gray-600">
                <span className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  {course.university}
                </span>
                <span className="text-gray-300">•</span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {course.location}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Summary Strip */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-center"
              >
                <Clock className="w-8 h-8 text-[#4B6E48] mx-auto mb-2" />
                <div className="text-sm text-gray-500 mb-1">Duration</div>
                <div className="font-semibold text-gray-900">{course.duration}</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-center"
              >
                <DollarSign className="w-8 h-8 text-[#4B6E48] mx-auto mb-2" />
                <div className="text-sm text-gray-500 mb-1">Tuition Fee</div>
                <div className="font-semibold text-gray-900">{course.tuition}</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-center"
              >
                <Calendar className="w-8 h-8 text-[#4B6E48] mx-auto mb-2" />
                <div className="text-sm text-gray-500 mb-1">Intake</div>
                <div className="font-semibold text-gray-900">{course.intake.join(', ')}</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-center"
              >
                <GraduationCap className="w-8 h-8 text-[#4B6E48] mx-auto mb-2" />
                <div className="text-sm text-gray-500 mb-1">Program Level</div>
                <div className="font-semibold text-gray-900">{course.level}</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="text-center"
              >
                <MapPin className="w-8 h-8 text-[#4B6E48] mx-auto mb-2" />
                <div className="text-sm text-gray-500 mb-1">Campus</div>
                <div className="font-semibold text-gray-900">{courseDetails.campus}</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="text-center"
              >
                <FileText className="w-8 h-8 text-[#4B6E48] mx-auto mb-2" />
                <div className="text-sm text-gray-500 mb-1">Application Fee</div>
                <div className="font-semibold text-gray-900">{courseDetails.applicationFee}</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Course Overview */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-6 h-6 text-[#4B6E48]" />
                  <h2 className="text-2xl font-semibold text-gray-900">Course Overview</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {courseDetails.overview}
                </p>
              </motion.section>

              {/* Key Information */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-[#4B6E48]" />
                  <h2 className="text-2xl font-semibold text-gray-900">Key Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Degree</div>
                    <div className="font-medium text-gray-900">{courseDetails.degree}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Duration</div>
                    <div className="font-medium text-gray-900">{course.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Tuition Fee</div>
                    <div className="font-medium text-gray-900">{course.tuition} / First Year</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Application Fee</div>
                    <div className="font-medium text-gray-900">{courseDetails.applicationFee}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Intake</div>
                    <div className="font-medium text-gray-900">{course.intake.join(', ')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Study Level</div>
                    <div className="font-medium text-gray-900">{course.level}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Campus Location</div>
                    <div className="font-medium text-gray-900">{course.location}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Discipline</div>
                    <div className="font-medium text-gray-900">{course.discipline}</div>
                  </div>
                </div>
              </motion.section>

              {/* Admission Requirements */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-[#4B6E48]" />
                  <h2 className="text-2xl font-semibold text-gray-900">Admission Requirements</h2>
                </div>
                <div className="space-y-4">
                  {courseDetails.admissionRequirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{req}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Career Opportunities */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-6 h-6 text-[#4B6E48]" />
                  <h2 className="text-2xl font-semibold text-gray-900">Career Opportunities</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {courseDetails.careerOpportunities.map((career, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg text-sm font-medium text-blue-900"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Apply CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] rounded-xl p-6 text-white shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-4">Ready to Apply?</h3>
                  <p className="text-sm text-white/90 mb-6">
                    Start your application today and take the first step toward your educational goals.
                  </p>
                  <button className="w-full bg-white text-[#4B6E48] font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors mb-3">
                    Apply Now
                  </button>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                      <Save className="w-4 h-4" />
                      Save
                    </button>
                    <button className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                      <GitCompare className="w-4 h-4" />
                      Compare
                    </button>
                  </div>
                </motion.div>

                {/* Program Highlights */}
                {course.statusChips.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Highlights</h3>
                    <div className="space-y-3">
                      {course.statusChips.map((chip, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{chip}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Programs */}
        {relatedPrograms.length > 0 && (
          <section className="bg-gray-50 border-t border-gray-200 py-16">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                Similar Programs You May Also Like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPrograms.map((relatedCourse, index) => (
                  <motion.div
                    key={relatedCourse.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link
                      to={`/courses/${relatedCourse.id}`}
                      className="block bg-white rounded-xl p-6 border border-gray-200 hover:border-[#4B6E48] hover:shadow-lg transition-all group"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#4B6E48] transition-colors">
                        {relatedCourse.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <Clock className="w-4 h-4" />
                        {relatedCourse.duration}
                        <span className="text-gray-300">•</span>
                        {relatedCourse.level}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#4B6E48] font-semibold">{relatedCourse.tuition}</span>
                        <ArrowLeft className="w-4 h-4 text-[#4B6E48] transform rotate-180 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

// Helper function to get careers based on discipline
function getCareersForDiscipline(discipline: string): string[] {
  const careerMap: { [key: string]: string[] } = {
    'Computer Science': [
      'Software Developer',
      'Data Scientist',
      'Machine Learning Engineer',
      'Web Developer',
      'Cybersecurity Analyst',
      'Cloud Architect'
    ],
    'Engineering': [
      'Mechanical Engineer',
      'Civil Engineer',
      'Project Manager',
      'Design Engineer',
      'Quality Assurance Engineer',
      'Technical Consultant'
    ],
    'Business': [
      'Business Analyst',
      'Financial Analyst',
      'Marketing Manager',
      'Consultant',
      'Operations Manager',
      'Entrepreneur'
    ],
    'Health Sciences': [
      'Nurse Practitioner',
      'Health Administrator',
      'Research Assistant',
      'Clinical Coordinator',
      'Public Health Specialist',
      'Healthcare Consultant'
    ],
    'Social Sciences': [
      'Research Analyst',
      'Policy Advisor',
      'Social Worker',
      'Human Resources Specialist',
      'Market Researcher',
      'Community Outreach Coordinator'
    ],
    'Science': [
      'Research Scientist',
      'Laboratory Technician',
      'Environmental Consultant',
      'Biotechnology Specialist',
      'Data Analyst',
      'Quality Control Analyst'
    ],
    'Arts': [
      'Content Creator',
      'Copywriter',
      'Editor',
      'Communications Specialist',
      'Cultural Program Coordinator',
      'Arts Administrator'
    ],
    'Law': [
      'Legal Advisor',
      'Corporate Counsel',
      'Policy Analyst',
      'Compliance Officer',
      'Legal Researcher',
      'Paralegal'
    ],
    'Media': [
      'Media Producer',
      'Digital Content Manager',
      'UX Researcher',
      'Social Media Strategist',
      'Communications Specialist',
      'Brand Manager'
    ],
    'Education': [
      'Teacher',
      'Education Consultant',
      'Curriculum Developer',
      'Academic Advisor',
      'Educational Program Coordinator',
      'Learning Specialist'
    ]
  };

  return careerMap[discipline] || [
    'Industry Professional',
    'Consultant',
    'Researcher',
    'Manager',
    'Analyst',
    'Specialist'
  ];
}
