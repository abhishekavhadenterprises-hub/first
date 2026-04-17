import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { ArrowLeft, Award, Star, MapPin, Calendar, BookOpen, Globe, Mail } from 'lucide-react';
import { StandardButton } from '@/app/components/ui/standard-button';
import { useState, useEffect } from 'react';

export default function ProfilePublicView() {
  const navigate = useNavigate();

  // Load profile data from localStorage
  const [userData] = useState(() => {
    const saved = localStorage.getItem('profileUserData');
    return saved ? JSON.parse(saved) : {
      name: 'John Doe',
      email: 'john.doe@example.com',
      studentId: 'STU2024001234',
      initials: 'JD',
      profilePhoto: null
    };
  });

  const [visibility] = useState(() => {
    const saved = localStorage.getItem('publicProfileVisibility');
    return saved ? JSON.parse(saved) : {
      bio: true,
      achievements: true,
      journey: true,
      testimonials: true
    };
  });

  const [bio] = useState(() => {
    const saved = localStorage.getItem('publicProfileBio');
    return saved ? JSON.parse(saved) : {
      aboutMe: "Passionate software engineer with 2 years of experience, seeking to advance my career through a Master's in Computer Science. Excited to explore AI/ML and contribute to cutting-edge research.",
      whyCourse: "I want to deepen my understanding of artificial intelligence and machine learning to solve real-world problems and make a meaningful impact in the tech industry.",
      myJourney: "From exploring universities to receiving my first offer, this platform has been instrumental in guiding me through every step of the study abroad process."
    };
  });

  const [academicData] = useState(() => {
    const saved = localStorage.getItem('academicDetails');
    return saved ? JSON.parse(saved) : {
      degree: 'MS in Computer Science',
      university: 'Massachusetts Institute of Technology',
      term: 'Fall 2026',
      country: 'United States'
    };
  });

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Back Button */}
        <div className="max-w-5xl mx-auto px-4 py-6">
          <button
            onClick={() => navigate('/profile')}
            className="flex items-center gap-2 text-gray-600 hover:text-[#4B6E48] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Profile</span>
          </button>
        </div>

        {/* Hero Section with glassmorphic design */}
        <div className="max-w-5xl mx-auto px-4 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          >
            {/* Decorative background circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
              {/* Profile Photo */}
              <div className="shrink-0">
                {userData.profilePhoto ? (
                  <img
                    src={userData.profilePhoto}
                    alt={userData.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white/20"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl font-bold border-4 border-white/20">
                    {userData.initials}
                  </div>
                )}
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-3">{userData.name}</h1>
                <p className="text-xl text-white/90 mb-2">{academicData.degree}</p>
                <div className="flex flex-wrap gap-4 text-white/70 text-sm">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>{academicData.university}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{academicData.term}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{academicData.country}</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/20">
                  <div>
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-sm text-white/70">Achievements</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">2</div>
                    <div className="text-sm text-white/70">Endorsements</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">4</div>
                    <div className="text-sm text-white/70">Badges</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content Sections */}
        <div className="max-w-5xl mx-auto px-4 pb-16 space-y-8">
          {/* Bio & Story */}
          {visibility.bio && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About Me</h2>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#4B6E48]" />
                    About Me
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{bio.aboutMe}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#4B6E48]" />
                    Why This Course
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{bio.whyCourse}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#4B6E48]" />
                    My Journey
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{bio.myJourney}</p>
                </div>
              </div>
            </motion.section>
          )}

          {/* Achievements */}
          {visibility.achievements && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Merit Scholarship', detail: '$15,000 from MIT', type: 'scholarship' },
                  { title: "Dean's List", detail: 'Academic Excellence Award 2023', type: 'award' },
                  { title: 'AWS Certified', detail: 'Solutions Architect Associate', type: 'certification' }
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#4B6E48]/10 flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-[#4B6E48]" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.detail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Testimonials / Social Proof */}
          {visibility.testimonials && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Testimonials</h2>
              <div className="space-y-4">
                {[
                  { type: 'Counselor Review', name: 'Sarah Johnson', rating: 5, comment: 'Dedicated and focused student. Great to work with!' },
                  { type: 'Peer Endorsement', name: 'Alex Kumar', rating: 5, comment: 'Helped me navigate the application process successfully.' }
                ].map((review, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-xs text-gray-500 uppercase mb-1 font-medium">{review.type}</p>
                        <p className="font-semibold text-gray-900">{review.name}</p>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Success Badges */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Badges</h2>
            <div className="flex flex-wrap gap-3">
              {['Profile Complete', 'First Offer Received', 'Visa Approved', 'Community Helper'].map((badge, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#4B6E48] to-[#5d8a59] text-white rounded-full text-sm font-medium shadow-lg"
                >
                  🏆 {badge}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* Contact CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg text-center"
          >
            <Mail className="w-12 h-12 text-[#4B6E48] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Want to Connect?</h2>
            <p className="text-gray-600 mb-6">
              Feel free to reach out for collaboration, mentorship, or just to chat about your study abroad journey!
            </p>
            <StandardButton 
              className="!h-12 !px-8"
              onClick={() => navigate('/contact')}
            >
              Get in Touch
            </StandardButton>
          </motion.section>
        </div>
      </div>

      <Footer />
    </>
  );
}
