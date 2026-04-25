import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Footer } from '@/app/components/Footer';
import { 
  Search, 
  Filter, 
  MapPin, 
  GraduationCap, 
  Users, 
  CheckCircle,
  Globe,
  BookOpen,
  TrendingUp,
  Heart,
  MessageCircle,
  UserPlus,
  Grid3X3,
  List,
  ArrowUpDown,
  UserCheck
} from 'lucide-react';
import { useState } from 'react';
import { mockStudents, filterStudents, StudentProfile } from '@/app/data/studentDirectoryData';
import { showToast, ToastContainer } from '@/app/components/ui/toast';
import { MessageModal } from '@/app/components/community/MessageModal';
import { StandardButton } from '@/app/components/ui/standard-button';

export default function StudentDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'connections' | 'newest'>('name');
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('favoriteStudents');
    return saved ? JSON.parse(saved) : [];
  });
  const [connectedStudents, setConnectedStudents] = useState<string[]>(() => {
    const saved = localStorage.getItem('connectedStudents');
    return saved ? JSON.parse(saved) : [];
  });
  const [messageModalOpen, setMessageModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<StudentProfile | null>(null);

  const filteredStudents = filterStudents({
    searchQuery,
    destination: selectedDestination,
    level: selectedLevel,
    status: selectedStatus
  });

  // Sort students
  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortBy === 'name') {
      return a.firstName.localeCompare(b.firstName);
    } else if (sortBy === 'connections') {
      return b.connections - a.connections;
    } else {
      return 0; // newest - would need timestamp in data
    }
  });

  const toggleFavorite = (studentId: string) => {
    const newFavorites = favorites.includes(studentId)
      ? favorites.filter(id => id !== studentId)
      : [...favorites, studentId];
    
    setFavorites(newFavorites);
    localStorage.setItem('favoriteStudents', JSON.stringify(newFavorites));
    showToast(
      favorites.includes(studentId) ? 'Removed from favorites' : 'Added to favorites',
      'success'
    );
  };

  const handleConnect = (studentId: string) => {
    const newConnectedStudents = connectedStudents.includes(studentId)
      ? connectedStudents.filter(id => id !== studentId)
      : [...connectedStudents, studentId];
    
    setConnectedStudents(newConnectedStudents);
    localStorage.setItem('connectedStudents', JSON.stringify(newConnectedStudents));
    showToast(
      connectedStudents.includes(studentId) ? 'Disconnected' : 'Connected',
      'success'
    );
  };

  const handleMessage = (student: StudentProfile) => {
    setSelectedStudent(student);
    setMessageModalOpen(true);
  };

  const destinations = Array.from(
    new Set(mockStudents.flatMap(s => s.studyDestinations.map(d => d.country)))
  );

  const levels = ['Undergraduate', 'Graduate', 'PhD', 'Postdoctoral'];
  const statuses = ['Researching', 'Applied', 'Admitted', 'Enrolled', 'Alumni'];

  const statusColors = {
    'Researching': 'bg-gray-100 text-gray-700',
    'Applied': 'bg-blue-100 text-blue-700',
    'Admitted': 'bg-green-100 text-green-700',
    'Enrolled': 'bg-purple-100 text-purple-700',
    'Alumni': 'bg-amber-100 text-amber-700'
  };

  return (
    <>

      {/* Search and Filters - Glassmorphic Sticky Bar */}
      <section className="relative py-4 sm:py-6 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-20 z-10 shadow-sm">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Search Bar - Glassmorphic */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, field, interests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 shadow-sm text-sm sm:text-base"
              />
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-[#4B6E48] rounded-xl transition-all font-medium text-gray-900 shadow-sm text-sm sm:text-base"
            >
              <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
              Filters
              {(selectedDestination !== 'all' || selectedLevel !== 'all' || selectedStatus !== 'all') && (
                <span className="w-2 h-2 bg-[#4B6E48] rounded-full"></span>
              )}
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {/* Destination Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Study Destination
                </label>
                <select
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 shadow-sm"
                >
                  <option value="all">All Destinations</option>
                  {destinations.map(dest => (
                    <option key={dest} value={dest}>{dest}</option>
                  ))}
                </select>
              </div>

              {/* Level Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Study Level
                </label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 shadow-sm"
                >
                  <option value="all">All Levels</option>
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Status
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 shadow-sm"
                >
                  <option value="all">All Statuses</option>
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="relative py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1200px] mx-auto">
          {/* Results Count */}
          <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-sm sm:text-base text-gray-600">
              <span className="font-semibold text-gray-900">{filteredStudents.length}</span> {filteredStudents.length === 1 ? 'student' : 'students'} found
            </p>
            {(searchQuery || selectedDestination !== 'all' || selectedLevel !== 'all' || selectedStatus !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDestination('all');
                  setSelectedLevel('all');
                  setSelectedStatus('all');
                }}
                className="text-sm text-[#4B6E48] hover:underline font-medium self-start sm:self-auto"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* View Mode and Sort */}
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-xl p-3 shadow-sm">
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-[#4B6E48] text-white' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                <Grid3X3 className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-[#4B6E48] text-white' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                <List className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'connections' | 'newest')}
                className="flex-1 sm:flex-initial px-3 sm:px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 text-sm"
              >
                <option value="name">Name</option>
                <option value="connections">Connections</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Students Grid */}
          {filteredStudents.length === 0 ? (
            <div className="text-center py-16 sm:py-20">
              <Users className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No students found</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDestination('all');
                  setSelectedLevel('all');
                  setSelectedStatus('all');
                }}
                className="text-sm sm:text-base text-[#4B6E48] hover:underline font-medium"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6' : 'space-y-4 sm:space-y-6'}>
              {sortedStudents.map((student, index) => (
                <StudentCard key={student.id} student={student} index={index} statusColors={statusColors} toggleFavorite={toggleFavorite} handleConnect={handleConnect} handleMessage={handleMessage} favorites={favorites} connectedStudents={connectedStudents} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <ToastContainer />
      <MessageModal
        isOpen={messageModalOpen}
        onClose={() => setMessageModalOpen(false)}
        student={selectedStudent}
      />
    </>
  );
}

function StudentCard({ 
  student, 
  index,
  statusColors,
  toggleFavorite,
  handleConnect,
  handleMessage,
  favorites,
  connectedStudents
}: { 
  student: StudentProfile; 
  index: number;
  statusColors: Record<string, string>;
  toggleFavorite: (studentId: string) => void;
  handleConnect: (studentId: string) => void;
  handleMessage: (student: StudentProfile) => void;
  favorites: string[];
  connectedStudents: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/60 hover:border-[#4B6E48]/30 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full w-full"
    >
      <Link to={`/community/students/${student.username}`} className="flex-1 flex flex-col">
        {/* Cover Image - Glassmorphic Overlay */}
        <div className="relative h-24 sm:h-28 md:h-32 lg:h-36 overflow-hidden bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a]">
          <img
            src={student.coverImage}
            alt={`${student.firstName}'s cover`}
            className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-500"
          />
          {/* Glassmorphic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20"></div>
          {student.isVerified && (
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/90 backdrop-blur-md rounded-full p-1 sm:p-1.5 shadow-md">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#4B6E48]"/>
            </div>
          )}
        </div>

        {/* Profile Info */}
        <div className="p-4 sm:p-5 lg:p-6 pt-0 flex-1 flex flex-col">
          {/* Avatar */}
          <div className="relative -mt-10 sm:-mt-12 mb-3 sm:mb-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-1 shadow-lg">
              <img
                src={student.avatar}
                alt={student.firstName}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {student.isOpenToConnect && (
              <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 border-2 sm:border-3 border-white rounded-full shadow-md"></div>
            )}
          </div>

          {/* Name and Username */}
          <h3 className="text-lg sm:text-xl font-bold mb-1 text-gray-900 group-hover:text-[#4B6E48] transition-colors">
            {student.firstName} {student.lastName}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">@{student.username}</p>

          {/* Status Badge - Glassmorphic */}
          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/60 backdrop-blur-sm border border-[#4B6E48]/20 rounded-full text-xs font-medium mb-3 sm:mb-4 text-[#4B6E48] self-start">
            <TrendingUp className="w-3 h-3" />
            <span className="whitespace-nowrap">{student.currentStatus}</span>
          </div>

          {/* Bio */}
          <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
            {student.bio}
          </p>

          {/* Info */}
          <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 text-[#4B6E48]" />
              <span className="truncate">{student.location.flag} {student.location.city}, {student.location.country}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 text-[#4B6E48]" />
              <span className="truncate">{student.academicInfo.field}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 text-[#4B6E48]" />
              <span className="truncate">{student.academicInfo.level} â€¢ {student.academicInfo.targetYear}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 text-[#4B6E48]" />
              <span className="truncate">
                {student.studyDestinations.map(d => d.flag).join(' ')} {student.studyDestinations.length} {student.studyDestinations.length === 1 ? 'destination' : 'destinations'}
              </span>
            </div>
          </div>

          {/* Connections - Glassmorphic Divider */}
          <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-gray-200/50 flex items-center justify-between text-xs sm:text-sm text-gray-600">
            <span className="font-medium">{student.connections} connections</span>
            <span className="font-medium">{student.posts} posts</span>
          </div>
        </div>
      </Link>

      {/* Actions - Glassmorphic Footer */}
      <div className="p-3 sm:p-4 bg-gradient-to-br from-gray-50/80 to-white/80 backdrop-blur-sm border-t border-gray-200/50 flex items-center gap-2">
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(student.id);
          }}
          className={`flex items-center justify-center p-2 sm:p-2.5 rounded-xl transition-all shadow-sm hover:shadow-md flex-shrink-0 ${
            favorites.includes(student.id) 
              ? 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-200' 
              : 'bg-white text-gray-600 hover:text-red-500 border border-gray-200 hover:border-red-300'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${favorites.includes(student.id) ? 'fill-red-500' : ''}`} />
        </button>
        
        {/* Connect Button with StandardButton Style */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleConnect(student.id);
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl transition-all font-medium text-xs sm:text-sm shadow-sm hover:shadow-md min-w-0 ${ connectedStudents.includes(student.id) ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-[#234c34] hover:bg-[#1a3726] text-white' }`}
        >
          {connectedStudents.includes(student.id) ? (
            <>
              <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="truncate">Connected</span>
            </>
          ) : (
            <>
              <UserPlus className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="truncate">Connect</span>
            </>
          )}
        </button>
        
        {/* Message Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleMessage(student);
          }}
          className="flex items-center justify-center p-2 sm:p-2.5 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 hover:border-[#4B6E48] rounded-xl transition-all shadow-sm hover:shadow-md flex-shrink-0"
        >
          <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>
    </motion.div>
  );
}
