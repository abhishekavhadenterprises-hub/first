import { Copy, Check, Globe, Lock, Users, User, Mail, Phone, Linkedin, Github, Twitter, Edit2, Eye, EyeOff, X, Award, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { StandardButton } from '@/app/components/ui/standard-button';
import { showToast } from '@/app/components/ui/toast';
import { useNavigate } from 'react-router';

interface Bio {
  aboutMe: string;
  whyCourse: string;
  myJourney: string;
}

interface Visibility {
  bio: boolean;
  achievements: boolean;
  journey: boolean;
  testimonials: boolean;
}

export function PublicProfileTab() {
  const navigate = useNavigate();
  
  const [visibility, setVisibility] = useState<Visibility>(() => {
    const saved = localStorage.getItem('publicProfileVisibility');
    return saved ? JSON.parse(saved) : {
      bio: true,
      achievements: true,
      journey: true,
      testimonials: true
    };
  });

  const [bio, setBio] = useState<Bio>(() => {
    const saved = localStorage.getItem('publicProfileBio');
    return saved ? JSON.parse(saved) : {
      aboutMe: "Passionate software engineer with 2 years of experience, seeking to advance my career through a Master's in Computer Science. Excited to explore AI/ML and contribute to cutting-edge research.",
      whyCourse: "I want to deepen my understanding of artificial intelligence and machine learning to solve real-world problems and make a meaningful impact in the tech industry.",
      myJourney: "From exploring universities to receiving my first offer, this platform has been instrumental in guiding me through every step of the study abroad process."
    };
  });

  const [showBioModal, setShowBioModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('publicProfileVisibility', JSON.stringify(visibility));
  }, [visibility]);

  useEffect(() => {
    localStorage.setItem('publicProfileBio', JSON.stringify(bio));
  }, [bio]);

  const handleToggleVisibility = (key: keyof Visibility) => {
    setVisibility({ ...visibility, [key]: !visibility[key] });
    showToast(`${key} ${!visibility[key] ? 'shown' : 'hidden'} on public profile`, 'success');
  };

  const handleViewPublicProfile = () => {
    // Navigate to public profile view in same tab
    navigate('/profile/public-view');
  };

  return (
    <div className="space-y-6 md:space-y-8 max-w-[1440px] mx-auto overflow-visible">
      {/* Public Preview */}
      <section className="overflow-visible">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#0F172A]">Public Profile Preview</h2>
          <StandardButton
            className="!h-11 !px-4 !text-sm md:!h-12 md:!px-6 md:!text-base whitespace-nowrap w-full sm:w-auto min-h-[44px]"
            onClick={handleViewPublicProfile}
          >
            View as Others See You
          </StandardButton>
        </div>

        <div className="bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] rounded-lg p-5 md:p-6 lg:p-8 text-white">
          <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 flex items-center justify-center text-xl md:text-2xl font-bold flex-shrink-0">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">John Doe</h3>
              <p className="text-white/90 mb-1 text-sm md:text-base">MS in Computer Science</p>
              <p className="text-white/70 text-xs md:text-sm">Massachusetts Institute of Technology • Fall 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio & Story */}
      <section className="overflow-visible">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#0F172A]">Bio & Story</h2>
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={() => setShowBioModal(true)}
              className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-[#4B6E48] hover:bg-[#4B6E48]/10 px-3 py-2 rounded-lg transition-colors font-medium min-h-[36px]"
            >
              <Edit2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
              Edit Bio
            </button>
            <button
              onClick={() => handleToggleVisibility('bio')}
              className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-600 hover:text-[#4B6E48] hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors font-medium min-h-[36px]"
            >
              {visibility.bio ? <Eye className="w-3.5 h-3.5 md:w-4 md:h-4" /> : <EyeOff className="w-3.5 h-3.5 md:w-4 md:h-4" />}
              {visibility.bio ? 'Visible' : 'Hidden'}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm">
          <div className="space-y-5 md:space-y-6">
            <div>
              <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">About Me</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{bio.aboutMe}</p>
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">Why This Course</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{bio.whyCourse}</p>
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">My Journey</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{bio.myJourney}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="overflow-visible">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#0F172A]">Achievements</h2>
          <button
            onClick={() => handleToggleVisibility('achievements')}
            className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-600 hover:text-[#4B6E48] hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors font-medium w-fit min-h-[36px]"
          >
            {visibility.achievements ? <Eye className="w-3.5 h-3.5 md:w-4 md:h-4" /> : <EyeOff className="w-3.5 h-3.5 md:w-4 md:h-4" />}
            {visibility.achievements ? 'Visible' : 'Hidden'}
          </button>
        </div>

        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {[
            { title: 'Merit Scholarship', detail: '$15,000 from MIT', type: 'scholarship' },
            { title: 'Dean\'s List', detail: 'Academic Excellence Award 2023', type: 'award' },
            { title: 'AWS Certified', detail: 'Solutions Architect Associate', type: 'certification' }
          ].map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <Award className="w-7 h-7 md:w-8 md:h-8 text-[#4B6E48] mb-3" />
              <h3 className="font-bold text-base md:text-lg text-gray-900 mb-1">{achievement.title}</h3>
              <p className="text-xs md:text-sm text-gray-600">{achievement.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Social Proof</h2>
        <div className="space-y-3 md:space-y-4">
          {[
            { type: 'Counselor Review', name: 'Sarah Johnson', rating: 5, comment: 'Dedicated and focused student. Great to work with!' },
            { type: 'Peer Endorsement', name: 'Alex Kumar', rating: 5, comment: 'Helped me navigate the application process successfully.' }
          ].map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 uppercase mb-1 font-medium">{review.type}</p>
                  <p className="font-bold text-sm md:text-base text-gray-900">{review.name}</p>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{review.comment}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Badges */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Success Badges</h2>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {['Profile Complete', 'First Offer Received', 'Visa Approved', 'Community Helper'].map((badge, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-[#4B6E48] to-[#5d8a59] text-white rounded-full text-xs md:text-sm font-medium whitespace-nowrap"
            >
              🏆 {badge}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Visibility Controls */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Visibility Controls</h2>
        <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm">
          <p className="text-xs md:text-sm text-gray-600 mb-5 md:mb-6">Control what others can see on your public profile</p>
          <div className="space-y-3">
            {Object.entries(visibility).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between p-3 md:p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                <span className="font-semibold text-sm md:text-base text-gray-900 capitalize">{key.replace('_', ' ')}</span>
                <button
                  onClick={() => handleToggleVisibility(key as keyof Visibility)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors min-h-[36px] min-w-[44px] ${
                    value ? 'bg-[#4B6E48]' : 'bg-gray-300'
                  }`}
                  aria-label={`Toggle ${key} visibility`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      value ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Edit Modal */}
      <AnimatePresence>
        {showBioModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowBioModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Edit Bio & Story</h3>
                <button
                  onClick={() => setShowBioModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowBioModal(false);
                  showToast('Bio updated successfully!', 'success');
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">About Me</label>
                  <textarea
                    value={bio.aboutMe}
                    onChange={(e) => setBio({ ...bio, aboutMe: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Why This Course</label>
                  <textarea
                    value={bio.whyCourse}
                    onChange={(e) => setBio({ ...bio, whyCourse: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">My Journey</label>
                  <textarea
                    value={bio.myJourney}
                    onChange={(e) => setBio({ ...bio, myJourney: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
                    rows={3}
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowBioModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-900 font-medium"
                  >
                    Cancel
                  </button>
                  <StandardButton type="submit" className="flex-1 !h-10">
                    Save Bio
                  </StandardButton>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}