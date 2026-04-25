import { useParams, Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Footer } from '@/app/components/Footer';
import { 
  ArrowLeft,
  MapPin,
  GraduationCap,
  Globe,
  BookOpen,
  Award,
  MessageCircle,
  UserPlus,
  MoreHorizontal,
  CheckCircle,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Calendar,
  Languages,
  Target,
  TrendingUp,
  Users
} from 'lucide-react';
import { getStudentByUsername } from '@/app/data/studentDirectoryData';
import { useState } from 'react';
import { StandardButton } from '@/app/components/ui/standard-button';

export default function StudentProfile() {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const student = getStudentByUsername(username || '');

  const [isConnected, setIsConnected] = useState(false);

  if (!student) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Student Not Found</h1>
            <Link to="/community/students" className="text-[#4B6E48] hover:underline">
              â† Back to Directory
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const memberSinceDate = new Date(student.memberSince).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });

  const statusColors = {
    'Researching': 'bg-gray-100 text-gray-700 border-gray-300',
    'Applied': 'bg-blue-100 text-blue-700 border-blue-300',
    'Admitted': 'bg-green-100 text-green-700 border-green-300',
    'Enrolled': 'bg-purple-100 text-purple-700 border-purple-300',
    'Alumni': 'bg-amber-100 text-amber-700 border-amber-300'
  };

  const universityStatusColors = {
    'Interested': 'text-gray-600',
    'Applied': 'text-blue-600',
    'Admitted': 'text-green-600',
    'Enrolled': 'text-purple-600',
    'Graduated': 'text-amber-600'
  };

  return (
    <>

      {/* Cover and Profile Header */}
      <section className="pt-20">
        {/* Cover Image */}
        <div className="relative h-80 overflow-hidden bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a]">
          <img
            src={student.coverImage}
            alt={`${student.firstName}'s cover`}
            className="w-full h-full object-cover opacity-40"
          />
          
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>

        {/* Profile Info Bar */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              {/* Profile Picture and Basic Info */}
              <div className="flex items-end gap-6 -mt-16">
                <div className="relative">
                  <img
                    src={student.avatar}
                    alt={student.firstName}
                    className="w-32 h-32 rounded-2xl border-4 border-white object-cover shadow-lg"
                  />
                  {student.isVerified && (
                    <div className="absolute -top-2 -right-2 bg-[#4B6E48] rounded-full p-2">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  )}
                  {student.isOpenToConnect && (
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
                  )}
                </div>

                <div className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold">
                      {student.firstName} {student.lastName}
                    </h1>
                  </div>
                  <p className="text-gray-600 mb-2">@{student.username}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{student.location.flag} {student.location.city}, {student.location.country}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>Member since {memberSinceDate}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pb-4">
                {student.isOpenToConnect && (
                  <StandardButton
                    onClick={() => setIsConnected(!isConnected)}
                    className={isConnected ? 'bg-gray-600' : ''}
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    {isConnected ? 'Connected' : 'Connect'}
                  </StandardButton>
                )}
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  Message
                </button>
                <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* About */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">About</h2>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium border-2 ${statusColors[student.currentStatus]}`}>
                    <TrendingUp className="w-4 h-4 inline mr-2" />
                    {student.currentStatus}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{student.bio}</p>
              </div>

              {/* Academic Information */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-[#4B6E48]" />
                  Academic Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Field of Study</p>
                    <p className="font-semibold text-gray-900">{student.academicInfo.field}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Study Level</p>
                    <p className="font-semibold text-gray-900">{student.academicInfo.level}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Target Year</p>
                    <p className="font-semibold text-gray-900">{student.academicInfo.targetYear}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Study Destinations</p>
                    <div className="flex flex-wrap gap-2">
                      {student.studyDestinations.map((dest, i) => (
                        <span key={i} className="px-3 py-1 bg-[#4B6E48]/10 text-[#4B6E48] rounded-full text-sm font-medium">
                          {dest.flag} {dest.country}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Universities */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Target className="w-6 h-6 text-[#4B6E48]" />
                  Universities
                </h2>
                <div className="space-y-4">
                  {student.universities.map((uni, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                          <BookOpen className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{uni.name}</p>
                          <p className={`text-sm font-medium ${universityStatusColors[uni.status]}`}>
                            {uni.status}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Test Scores */}
              {student.testScores && student.testScores.length > 0 && (
                <div className="bg-white rounded-2xl p-8 border border-gray-200">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Award className="w-6 h-6 text-[#4B6E48]" />
                    Test Scores
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {student.testScores.map((test, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gradient-to-br from-[#4B6E48]/5 to-[#4B6E48]/10 rounded-xl border border-[#4B6E48]/20"
                      >
                        <p className="text-sm text-gray-600 mb-1">{test.type}</p>
                        <p className="text-2xl font-bold text-[#4B6E48]">{test.score}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Interests */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold mb-6">Interests</h2>
                <div className="flex flex-wrap gap-2">
                  {student.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              
              {/* Languages */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Languages className="w-5 h-5 text-[#4B6E48]" />
                  Languages
                </h3>
                <div className="space-y-3">
                  {student.languages.map((lang, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-700">{lang.name}</span>
                      <span className="text-sm px-3 py-1 bg-[#4B6E48]/10 text-[#4B6E48] rounded-full font-medium">
                        {lang.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#4B6E48]" />
                  Activity
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Connections</span>
                    <span className="font-bold text-[#4B6E48]">{student.connections}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Posts</span>
                    <span className="font-bold text-[#4B6E48]">{student.posts}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Member Since</span>
                    <span className="font-semibold text-gray-900">{memberSinceDate}</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              {student.socialLinks && (
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold mb-4">Social Links</h3>
                  <div className="space-y-3">
                    {student.socialLinks.linkedin && (
                      <a
                        href={student.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="font-medium">LinkedIn</span>
                      </a>
                    )}
                    {student.socialLinks.twitter && (
                      <a
                        href={student.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-sky-50 text-sky-700 rounded-lg hover:bg-sky-100 transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                        <span className="font-medium">Twitter</span>
                      </a>
                    )}
                    {student.socialLinks.instagram && (
                      <a
                        href={student.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-pink-50 text-pink-700 rounded-lg hover:bg-pink-100 transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                        <span className="font-medium">Instagram</span>
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Want to connect?</h3>
                <p className="text-sm text-white/90 mb-4">
                  Send {student.firstName} a message to start networking
                </p>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-[#4B6E48] rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  <Mail className="w-4 h-4" />
                  Send Message
                </button>
              </div>

              {/* Back to Directory */}
              <Link
                to="/community/students"
                className="flex items-center justify-center gap-2 text-[#4B6E48] hover:gap-3 transition-all font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Directory
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
