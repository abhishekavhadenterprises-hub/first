import { useState } from 'react';
import { Search, GraduationCap, Clock, Calendar, MapPin, DollarSign, ArrowRight, CheckCircle, SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

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
  statusChips: string[];
}

const courses: Course[] = [
  {
    id: 'bachelor-computer-science',
    title: 'Bachelor of Computer Science',
    university: 'Western University',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: ['September'],
    location: 'London, Ontario',
    tuition: '$48,699 CAD',
    discipline: 'Computer Science',
    statusChips: ['PGWP Available', 'Co-op Available', 'Work While Studying']
  },
  {
    id: 'bachelor-business-administration',
    title: 'Bachelor of Business Administration',
    university: 'Western University',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: ['September'],
    location: 'London, Ontario',
    tuition: '$46,299 CAD',
    discipline: 'Business',
    statusChips: ['PGWP Available', 'International Students']
  },
  {
    id: 'bachelor-mechanical-engineering',
    title: 'Bachelor of Mechanical Engineering',
    university: 'Western University',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: ['September'],
    location: 'London, Ontario',
    tuition: '$52,450 CAD',
    discipline: 'Engineering',
    statusChips: ['PGWP Available', 'Co-op Available']
  },
  {
    id: 'bachelor-data-science',
    title: 'Bachelor of Data Science',
    university: 'Western University',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: ['September', 'January'],
    location: 'London, Ontario',
    tuition: '$49,899 CAD',
    discipline: 'Computer Science',
    statusChips: ['PGWP Available', 'Work While Studying']
  },
  {
    id: 'bachelor-health-sciences',
    title: 'Bachelor of Health Sciences',
    university: 'Western University',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: ['September'],
    location: 'London, Ontario',
    tuition: '$47,550 CAD',
    discipline: 'Health Sciences',
    statusChips: ['PGWP Available', 'International Students']
  },
  {
    id: 'bachelor-economics',
    title: 'Bachelor of Economics',
    university: 'Western University',
    level: 'Undergraduate',
    duration: '3 Years',
    intake: ['September', 'January'],
    location: 'London, Ontario',
    tuition: '$43,299 CAD',
    discipline: 'Social Sciences',
    statusChips: ['PGWP Available']
  },
  {
    id: 'bachelor-civil-engineering',
    title: 'Bachelor of Civil Engineering',
    university: 'Western University',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: ['September'],
    location: 'London, Ontario',
    tuition: '$51,850 CAD',
    discipline: 'Engineering',
    statusChips: ['PGWP Available', 'Co-op Available']
  },
  {
    id: 'bachelor-nursing',
    title: 'Bachelor of Nursing',
    university: 'Western University',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: ['September'],
    location: 'London, Ontario',
    tuition: '$50,299 CAD',
    discipline: 'Health Sciences',
    statusChips: ['PGWP Available', 'International Students', 'Work While Studying']
  },
  {
    id: 'bachelor-psychology',
    title: 'Bachelor of Psychology',
    university: 'Western University',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: ['September', 'January'],
    location: 'London, Ontario',
    tuition: '$44,699 CAD',
    discipline: 'Social Sciences',
    statusChips: ['PGWP Available']
  },
  {
    id: 'bachelor-media-information-technoculture',
    title: 'Bachelor of Media, Information and Technoculture',
    university: 'Western University',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: ['September'],
    location: 'London, Ontario',
    tuition: '$45,899 CAD',
    discipline: 'Media',
    statusChips: ['PGWP Available', 'Work While Studying']
  },
  {
    id: 'bachelor-software-engineering',
    title: 'Bachelor of Software Engineering',
    university: 'Western University',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: ['September'],
    location: 'London, Ontario',
    tuition: '$53,299 CAD',
    discipline: 'Engineering',
    statusChips: ['PGWP Available', 'Co-op Available', 'Work While Studying']
  },
  {
    id: 'bachelor-biology',
    title: 'Bachelor of Biology',
    university: 'Western University',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: ['September', 'January'],
    location: 'London, Ontario',
    tuition: '$46,799 CAD',
    discipline: 'Science',
    statusChips: ['PGWP Available', 'International Students']
  },
  {
    id: 'master-business-analytics',
    title: 'Master of Business Analytics',
    university: 'Western University',
    level: 'Postgraduate',
    duration: '1 Year',
    intake: ['September', 'January'],
    location: 'London, Ontario',
    tuition: '$38,500 CAD',
    discipline: 'Business',
    statusChips: ['PGWP Available', 'Work While Studying']
  },
  {
    id: 'master-computer-science',
    title: 'Master of Computer Science',
    university: 'Western University',
    level: 'Postgraduate',
    duration: '2 Years',
    intake: ['September', 'January', 'May'],
    location: 'London, Ontario',
    tuition: '$22,450 CAD',
    discipline: 'Computer Science',
    statusChips: ['PGWP Available', 'Co-op Available']
  },
  {
    id: 'master-engineering',
    title: 'Master of Engineering',
    university: 'Western University',
    level: 'Postgraduate',
    duration: '2 Years',
    intake: ['September', 'January'],
    location: 'London, Ontario',
    tuition: '$24,850 CAD',
    discipline: 'Engineering',
    statusChips: ['PGWP Available', 'International Students']
  },
  {
    id: 'mba-full-time',
    title: 'MBA - Full Time',
    university: 'Western University',
    level: 'Postgraduate',
    duration: '2 Years',
    intake: ['September'],
    location: 'London, Ontario',
    tuition: '$89,500 CAD',
    discipline: 'Business',
    statusChips: ['PGWP Available', 'Work While Studying']
  },
  {
    id: 'master-public-health',
    title: 'Master of Public Health',
    university: 'Western University',
    level: 'Postgraduate',
    duration: '2 Years',
    intake: ['September'],
    location: 'London, Ontario',
    tuition: '$26,300 CAD',
    discipline: 'Health Sciences',
    statusChips: ['PGWP Available']
  },
  {
    id: 'master-law',
    title: 'Master of Law',
    university: 'Western University',
    level: 'Postgraduate',
    duration: '1 Year',
    intake: ['September'],
    location: 'London, Ontario',
    tuition: '$32,150 CAD',
    discipline: 'Law',
    statusChips: ['PGWP Available', 'International Students']
  },
  {
    id: 'diploma-digital-marketing',
    title: 'Diploma in Digital Marketing',
    university: 'Western University',
    level: 'Diploma',
    duration: '1 Year',
    intake: ['September', 'January', 'May'],
    location: 'London, Ontario',
    tuition: '$16,500 CAD',
    discipline: 'Business',
    statusChips: ['PGWP Available']
  },
  {
    id: 'certificate-project-management',
    title: 'Certificate in Project Management',
    university: 'Western University',
    level: 'Certificate',
    duration: '1 Year',
    intake: ['September', 'January'],
    location: 'London, Ontario',
    tuition: '$14,200 CAD',
    discipline: 'Business',
    statusChips: ['Work While Studying']
  },
  {
    id: 'bachelor-education',
    title: 'Bachelor of Education',
    university: 'Western University',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: ['September'],
    location: 'London, Ontario',
    tuition: '$44,850 CAD',
    discipline: 'Education',
    statusChips: ['PGWP Available', 'International Students']
  },
  {
    id: 'bachelor-arts-english',
    title: 'Bachelor of Arts in English',
    university: 'Western University',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: ['September', 'January'],
    location: 'London, Ontario',
    tuition: '$42,699 CAD',
    discipline: 'Arts',
    statusChips: ['PGWP Available']
  }
];

export function CoursesSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedDiscipline, setSelectedDiscipline] = useState('all');
  const [selectedIntake, setSelectedIntake] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Filter courses
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.discipline.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesDiscipline = selectedDiscipline === 'all' || course.discipline === selectedDiscipline;
    const matchesIntake = selectedIntake === 'all' || course.intake.includes(selectedIntake);
    const matchesDuration = selectedDuration === 'all' || course.duration === selectedDuration;

    return matchesSearch && matchesLevel && matchesDiscipline && matchesIntake && matchesDuration;
  });

  // Sort courses
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortOption === 'title-asc') return a.title.localeCompare(b.title);
    if (sortOption === 'tuition-low') {
      const aPrice = parseFloat(a.tuition.replace(/[^0-9.]/g, ''));
      const bPrice = parseFloat(b.tuition.replace(/[^0-9.]/g, ''));
      return aPrice - bPrice;
    }
    if (sortOption === 'tuition-high') {
      const aPrice = parseFloat(a.tuition.replace(/[^0-9.]/g, ''));
      const bPrice = parseFloat(b.tuition.replace(/[^0-9.]/g, ''));
      return bPrice - aPrice;
    }
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedCourses.length / itemsPerPage);
  const paginatedCourses = sortedCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedLevel('all');
    setSelectedDiscipline('all');
    setSelectedIntake('all');
    setSelectedDuration('all');
    setSortOption('default');
    setCurrentPage(1);
  };

  return (
    <section className="courses-section" id="courses">
      <div className="courses-container">
        {/* Section Header */}
        <div className="courses-header">
          <h2 className="courses-title">
            Available Courses at Western University
          </h2>
          <p className="courses-subtitle">
            Explore all available programs offered by this university. Browse by level, discipline, or intake, and click any course to view full details such as duration, tuition fees, eligibility, and intake information.
          </p>
        </div>

        {/* Search + Filters Bar */}
        <div className="courses-search-filter-wrapper">
          {/* Search Bar */}
          <div className="courses-search-container">
            <Search className="courses-search-icon" />
            <input
              type="text"
              placeholder="Search programs, degrees, or fields of study"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="courses-search-input"
            />
          </div>

          {/* Filters + Sort Grid */}
          <div className="courses-filters-grid">
            {/* Program Level */}
            <div className="courses-filter-item">
              <label className="courses-filter-label">Program Level</label>
              <select
                value={selectedLevel}
                onChange={(e) => {
                  setSelectedLevel(e.target.value);
                  setCurrentPage(1);
                }}
                className="courses-filter-select"
              >
                <option value="all">All Levels</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Postgraduate">Postgraduate</option>
                <option value="Diploma">Diploma</option>
                <option value="Certificate">Certificate</option>
              </select>
            </div>

            {/* Discipline */}
            <div className="courses-filter-item">
              <label className="courses-filter-label">Discipline</label>
              <select
                value={selectedDiscipline}
                onChange={(e) => {
                  setSelectedDiscipline(e.target.value);
                  setCurrentPage(1);
                }}
                className="courses-filter-select"
              >
                <option value="all">All Disciplines</option>
                <option value="Engineering">Engineering</option>
                <option value="Business">Business</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Health Sciences">Health Sciences</option>
                <option value="Arts">Arts</option>
                <option value="Social Sciences">Social Sciences</option>
                <option value="Science">Science</option>
                <option value="Law">Law</option>
                <option value="Media">Media</option>
                <option value="Education">Education</option>
              </select>
            </div>

            {/* Intake */}
            <div className="courses-filter-item">
              <label className="courses-filter-label">Intake</label>
              <select
                value={selectedIntake}
                onChange={(e) => {
                  setSelectedIntake(e.target.value);
                  setCurrentPage(1);
                }}
                className="courses-filter-select"
              >
                <option value="all">All Intakes</option>
                <option value="January">January</option>
                <option value="May">May</option>
                <option value="September">September</option>
              </select>
            </div>

            {/* Duration */}
            <div className="courses-filter-item">
              <label className="courses-filter-label">Duration</label>
              <select
                value={selectedDuration}
                onChange={(e) => {
                  setSelectedDuration(e.target.value);
                  setCurrentPage(1);
                }}
                className="courses-filter-select"
              >
                <option value="all">All Durations</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
                <option value="4 Years">4 Years</option>
              </select>
            </div>

            {/* Sort */}
            <div className="courses-filter-item">
              <label className="courses-filter-label">Sort By</label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="courses-filter-select"
              >
                <option value="default">Default</option>
                <option value="title-asc">Program Title (A–Z)</option>
                <option value="tuition-low">Tuition (Low to High)</option>
                <option value="tuition-high">Tuition (High to Low)</option>
              </select>
            </div>
          </div>

          {/* Results Count + Reset */}
          <div className="courses-results-bar">
            <p className="courses-results-text">
              {sortedCourses.length} program{sortedCourses.length !== 1 ? 's' : ''} found
            </p>
            {(searchQuery || selectedLevel !== 'all' || selectedDiscipline !== 'all' || 
              selectedIntake !== 'all' || selectedDuration !== 'all' || sortOption !== 'default') && (
              <button onClick={resetFilters} className="courses-reset-button">
                <SlidersHorizontal className="w-4 h-4" />
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Course Cards Grid */}
        {paginatedCourses.length > 0 ? (
          <div className="courses-grid">
            {paginatedCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="course-card"
              >
                {/* Course Title */}
                <h3 className="course-card-title">{course.title}</h3>

                {/* University Name */}
                <p className="course-card-university">{course.university}</p>

                {/* Metadata Row */}
                <div className="course-card-metadata">
                  <span className="course-card-meta-item">
                    <GraduationCap className="course-meta-icon" />
                    {course.level}
                  </span>
                  <span className="course-card-meta-separator">•</span>
                  <span className="course-card-meta-item">
                    <Clock className="course-meta-icon" />
                    {course.duration}
                  </span>
                  <span className="course-card-meta-separator">•</span>
                  <span className="course-card-meta-item">
                    <Calendar className="course-meta-icon" />
                    {course.intake.join(', ')}
                  </span>
                  <span className="course-card-meta-separator">•</span>
                  <span className="course-card-meta-item">
                    <MapPin className="course-meta-icon" />
                    {course.location}
                  </span>
                </div>

                {/* Tuition Fee */}
                <div className="course-card-tuition">
                  <DollarSign className="course-tuition-icon" />
                  <div>
                    <div className="course-tuition-label">Tuition Fee</div>
                    <div className="course-tuition-value">{course.tuition} / First Year</div>
                  </div>
                </div>

                {/* Status Chips */}
                {course.statusChips.length > 0 && (
                  <div className="course-card-chips">
                    {course.statusChips.map((chip, idx) => (
                      <span key={idx} className="course-chip">
                        <CheckCircle className="course-chip-icon" />
                        {chip}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA Button */}
                <Link to={`/courses/${course.id}`} className="course-card-cta">
                  View Course Details
                  <ArrowRight className="course-cta-icon" />
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="courses-no-results">
            <p className="courses-no-results-text">
              No programs match your search criteria.
            </p>
            <button onClick={resetFilters} className="courses-reset-button">
              <SlidersHorizontal className="w-4 h-4" />
              Reset All Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && paginatedCourses.length > 0 && (
          <div className="courses-pagination">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="courses-pagination-button"
            >
              Previous
            </button>
            
            <div className="courses-pagination-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`courses-pagination-number ${currentPage === page ? 'active' : ''}`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="courses-pagination-button"
            >
              Next
            </button>
          </div>
        )}
      </div>

      <style>{`
        /* ============================================
           SECTION CONTAINER
           ============================================ */
        .courses-section {
          position: relative;
          width: 100%;
          background: linear-gradient(to bottom, #FFFFFF 0%, #F9FAFB 100%);
          padding: 96px 24px;
        }

        @media (max-width: 767px) {
          .courses-section {
            padding: 64px 18px;
          }
        }

        .courses-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ============================================
           SECTION HEADER
           ============================================ */
        .courses-header {
          text-align: center;
          margin-bottom: 48px;
        }

        @media (max-width: 767px) {
          .courses-header {
            margin-bottom: 32px;
          }
        }

        .courses-title {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 38px;
          font-weight: 600;
          color: #111827;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }

        @media (max-width: 1199px) {
          .courses-title {
            font-size: 31px;
          }
        }

        @media (max-width: 767px) {
          .courses-title {
            font-size: 25px;
            margin-bottom: 12px;
          }
        }

        .courses-subtitle {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 18px;
          font-weight: 400;
          color: #6B7280;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        @media (max-width: 1199px) {
          .courses-subtitle {
            font-size: 16px;
            max-width: 700px;
          }
        }

        @media (max-width: 767px) {
          .courses-subtitle {
            font-size: 15px;
            max-width: 95%;
          }
        }

        /* ============================================
           SEARCH + FILTERS
           ============================================ */
        .courses-search-filter-wrapper {
          margin-bottom: 40px;
        }

        /* Search Bar */
        .courses-search-container {
          position: relative;
          margin-bottom: 24px;
        }

        .courses-search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          color: #9CA3AF;
          pointer-events: none;
        }

        .courses-search-input {
          width: 100%;
          padding: 14px 16px 14px 48px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 16px;
          color: #111827;
          background-color: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          outline: none;
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .courses-search-input:focus {
          border-color: #4B6E48;
          box-shadow: 0 0 0 3px rgba(75, 110, 72, 0.1);
        }

        .courses-search-input::placeholder {
          color: #9CA3AF;
        }

        /* Filters Grid */
        .courses-filters-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          margin-bottom: 20px;
        }

        @media (max-width: 1199px) {
          .courses-filters-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 767px) {
          .courses-filters-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }

        .courses-filter-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .courses-filter-label {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #374151;
        }

        .courses-filter-select {
          padding: 10px 14px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 14px;
          color: #111827;
          background-color: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 10px;
          outline: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .courses-filter-select:focus {
          border-color: #4B6E48;
          box-shadow: 0 0 0 3px rgba(75, 110, 72, 0.1);
        }

        /* Results Bar */
        .courses-results-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .courses-results-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 14px;
          color: #6B7280;
          margin: 0;
        }

        .courses-reset-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background-color: #F3F4F6;
          color: #374151;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 14px;
          font-weight: 500;
          border: 1px solid #E5E7EB;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .courses-reset-button:hover {
          background-color: #E5E7EB;
          border-color: #D1D5DB;
        }

        /* ============================================
           COURSE CARDS GRID
           ============================================ */
        .courses-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        @media (max-width: 1199px) {
          .courses-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 767px) {
          .courses-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        /* ============================================
           COURSE CARD DESIGN
           ============================================ */
        .course-card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          border: 1px solid #F3F4F6;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .course-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
          border-color: #4B6E48;
        }

        /* Course Title */
        .course-card-title {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #111827;
          margin: 0;
          line-height: 1.4;
        }

        /* University Name */
        .course-card-university {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 14px;
          color: #6B7280;
          margin: 0;
        }

        /* Metadata Row */
        .course-card-metadata {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 13px;
          color: #4B5563;
        }

        .course-card-meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .course-meta-icon {
          width: 14px;
          height: 14px;
          color: #6B7280;
        }

        .course-card-meta-separator {
          color: #D1D5DB;
        }

        /* Tuition Fee */
        .course-card-tuition {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          background-color: #F0FDF4;
          border-radius: 8px;
          border: 1px solid #BBF7D0;
        }

        .course-tuition-icon {
          width: 20px;
          height: 20px;
          color: #15803D;
          flex-shrink: 0;
        }

        .course-tuition-label {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 11px;
          color: #15803D;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .course-tuition-value {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #15803D;
        }

        /* Status Chips */
        .course-card-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .course-chip {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background-color: #EFF6FF;
          border: 1px solid #DBEAFE;
          border-radius: 6px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: #1E40AF;
        }

        .course-chip-icon {
          width: 12px;
          height: 12px;
          color: #1E40AF;
        }

        /* CTA Button */
        .course-card-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          background-color: #4B6E48;
          color: #FFFFFF;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 14px;
          font-weight: 500;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          margin-top: auto;
        }

        .course-card-cta:hover {
          background-color: #3d5a3a;
          transform: scale(1.02);
        }

        .course-cta-icon {
          width: 16px;
          height: 16px;
          transition: transform 0.2s ease;
        }

        .course-card-cta:hover .course-cta-icon {
          transform: translateX(4px);
        }

        /* ============================================
           NO RESULTS
           ============================================ */
        .courses-no-results {
          text-align: center;
          padding: 64px 24px;
        }

        .courses-no-results-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 16px;
          color: #6B7280;
          margin: 0 0 24px 0;
        }

        /* ============================================
           PAGINATION
           ============================================ */
        .courses-pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .courses-pagination-button {
          padding: 10px 20px;
          background-color: #FFFFFF;
          color: #374151;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 14px;
          font-weight: 500;
          border: 1px solid #E5E7EB;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .courses-pagination-button:hover:not(:disabled) {
          background-color: #F9FAFB;
          border-color: #4B6E48;
        }

        .courses-pagination-button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .courses-pagination-numbers {
          display: flex;
          gap: 6px;
        }

        .courses-pagination-number {
          width: 40px;
          height: 40px;
          background-color: #FFFFFF;
          color: #374151;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 14px;
          font-weight: 500;
          border: 1px solid #E5E7EB;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .courses-pagination-number:hover {
          background-color: #F9FAFB;
          border-color: #4B6E48;
        }

        .courses-pagination-number.active {
          background-color: #4B6E48;
          color: #FFFFFF;
          border-color: #4B6E48;
        }
      `}</style>
    </section>
  );
}

export { courses };
