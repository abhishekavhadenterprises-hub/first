import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Upload, CheckCircle2, Clock, FileText, Edit2, Trash2, X, Download } from 'lucide-react';
import { StandardButton } from '@/app/components/ui/standard-button';
import { showToast } from '@/app/components/ui/toast';

interface AcademicDetails {
  qualification: string;
  university: string;
  passingYear: string;
  gpa: string;
  major: string;
  gradingSystem: string;
}

interface TestScore {
  id: string;
  test: string;
  score: string;
  date: string;
  validity: string;
  status: 'verified' | 'pending';
  proof?: string;
}

interface WorkExperience {
  id: string;
  company: string;
  role: string;
  duration: string;
  industry: string;
  skills: string;
}

interface Document {
  id: string;
  name: string;
  status: 'approved' | 'pending' | 'rejected';
  version: string;
  date: string;
  file?: string;
}

export function AcademicTab() {
  const [academicDetails, setAcademicDetails] = useState<AcademicDetails>(() => {
    const saved = localStorage.getItem('academicDetails');
    return saved ? JSON.parse(saved) : {
      qualification: 'Bachelor of Technology',
      university: 'University of California',
      passingYear: '2023',
      gpa: '3.8 / 4.0',
      major: 'Computer Science',
      gradingSystem: '4.0 Scale'
    };
  });

  const [testScores, setTestScores] = useState<TestScore[]>(() => {
    const saved = localStorage.getItem('testScores');
    return saved ? JSON.parse(saved) : [
      { id: '1', test: 'IELTS', score: '7.5', date: 'Jan 2025', validity: 'Valid', status: 'verified' },
      { id: '2', test: 'GRE', score: '325', date: 'Dec 2024', validity: 'Valid', status: 'verified' },
      { id: '3', test: 'TOEFL', score: '-', date: '-', validity: '-', status: 'pending' }
    ];
  });

  const [workExperience, setWorkExperience] = useState<WorkExperience[]>(() => {
    const saved = localStorage.getItem('workExperience');
    return saved ? JSON.parse(saved) : [
      {
        id: '1',
        company: 'Tech Corp',
        role: 'Software Engineer',
        duration: '2 years',
        industry: 'Technology',
        skills: 'React, Node.js, AWS'
      }
    ];
  });

  const [documents, setDocuments] = useState<Document[]>(() => {
    const saved = localStorage.getItem('documents');
    return saved ? JSON.parse(saved) : [
      { id: '1', name: 'Resume', status: 'approved', version: 'v3', date: '2 days ago' },
      { id: '2', name: 'SOP', status: 'pending', version: 'v2', date: '1 week ago' },
      { id: '3', name: 'LOR 1', status: 'approved', version: 'v1', date: '3 weeks ago' },
      { id: '4', name: 'LOR 2', status: 'pending', version: 'v1', date: '1 week ago' },
      { id: '5', name: 'Transcripts', status: 'approved', version: 'v1', date: '1 month ago' }
    ];
  });

  const [careerGoals, setCareerGoals] = useState(() => {
    const saved = localStorage.getItem('careerGoals');
    return saved ? JSON.parse(saved) : {
      goal: 'Become a Senior Software Engineer at a leading tech company',
      roles: ['Software Engineer', 'Full Stack Developer', 'Cloud Architect'],
      industries: ['Technology', 'FinTech', 'SaaS']
    };
  });

  // Modals
  const [showAcademicModal, setShowAcademicModal] = useState(false);
  const [showTestScoreModal, setShowTestScoreModal] = useState(false);
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const [showGoalsModal, setShowGoalsModal] = useState(false);
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  
  const [editingTest, setEditingTest] = useState<TestScore | null>(null);
  const [editingExperience, setEditingExperience] = useState<WorkExperience | null>(null);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('academicDetails', JSON.stringify(academicDetails));
  }, [academicDetails]);

  useEffect(() => {
    localStorage.setItem('testScores', JSON.stringify(testScores));
  }, [testScores]);

  useEffect(() => {
    localStorage.setItem('workExperience', JSON.stringify(workExperience));
  }, [workExperience]);

  useEffect(() => {
    localStorage.setItem('documents', JSON.stringify(documents));
  }, [documents]);

  useEffect(() => {
    localStorage.setItem('careerGoals', JSON.stringify(careerGoals));
  }, [careerGoals]);

  const handleUploadProof = (testId: string, file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      showToast('File size must be less than 5MB', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setTestScores(testScores.map(test =>
        test.id === testId ? { ...test, proof: reader.result as string, status: 'verified' } : test
      ));
      showToast('Proof uploaded successfully!', 'success');
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteTest = (id: string) => {
    setTestScores(testScores.filter(test => test.id !== id));
    showToast('Test score deleted', 'success');
  };

  const handleDeleteExperience = (id: string) => {
    setWorkExperience(workExperience.filter(exp => exp.id !== id));
    showToast('Work experience deleted', 'success');
  };

  const handleDeleteDocument = (id: string) => {
    setDocuments(documents.filter(doc => doc.id !== id));
    showToast('Document deleted', 'success');
  };

  return (
    <div className="space-y-6 md:space-y-8 lg:space-y-12 max-w-[1440px] mx-auto">
      {/* Academic Details - Enhanced Responsive */}
      <section>
        <div className="flex items-center justify-between mb-4 md:mb-6 flex-nowrap gap-3">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 flex-shrink-0">Academic Details</h2>
          <StandardButton
            className="!h-11 !px-4 !text-sm md:!h-12 md:!px-6 md:!text-base whitespace-nowrap flex-shrink-0 min-h-[44px]"
            onClick={() => setShowAcademicModal(true)}
          >
            Edit Details
          </StandardButton>
        </div>

        <div className="bg-white rounded-2xl p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-1.5">Highest Qualification</label>
              <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 break-words">{academicDetails.qualification}</p>
            </div>
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-1.5">University</label>
              <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 break-words">{academicDetails.university}</p>
            </div>
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-1.5">Passing Year</label>
              <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-900">{academicDetails.passingYear}</p>
            </div>
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-1.5">GPA / CGPA</label>
              <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-900">{academicDetails.gpa}</p>
            </div>
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-1.5">Major</label>
              <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 break-words">{academicDetails.major}</p>
            </div>
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-1.5">Grading System</label>
              <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-900">{academicDetails.gradingSystem}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Test Scores - Enhanced Responsive Grid */}
      <section>
        <div className="flex items-center justify-between mb-4 md:mb-6 flex-nowrap gap-3">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 flex-shrink-0">Test Scores</h2>
          <button
            onClick={() => {
              setEditingTest({
                id: Date.now().toString(),
                test: '',
                score: '',
                date: '',
                validity: '',
                status: 'pending'
              });
              setShowTestScoreModal(true);
            }}
            className="flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 text-sm md:text-base font-medium text-[#4B6E48] hover:bg-[#4B6E48] hover:text-white rounded-lg transition-all whitespace-nowrap flex-shrink-0 min-h-[44px] shadow-sm border border-[#4B6E48]"
          >
            <Plus className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Add Test Score</span>
            <span className="sm:hidden">Add Test</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {testScores.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm hover:shadow-md group relative flex flex-col transition-all"
            >
              {/* Header with Status Badge */}
              <div className="flex items-start justify-between mb-4 md:mb-5">
                <h3 className="font-bold text-base md:text-lg lg:text-xl text-gray-900 flex-1 mr-2 break-words">{test.test}</h3>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {test.status === 'verified' ? (
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-100">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                      <span className="hidden md:inline text-xs font-medium text-green-700">Verified</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
                      <span className="hidden md:inline text-xs font-medium text-amber-700">Pending</span>
                    </div>
                  )}
                  <button
                    onClick={() => handleDeleteTest(test.id)}
                    className="opacity-0 group-hover:opacity-100 p-2 hover:bg-red-50 rounded-lg transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="Delete test score"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </div>

              {/* Test Details */}
              <div className="space-y-3 text-sm md:text-base flex-grow">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">Score</span>
                  <span className="font-bold text-gray-900">{test.score}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">Date</span>
                  <span className="font-semibold text-gray-900">{test.date}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-500 font-medium">Validity</span>
                  <span className={`font-semibold ${test.validity === 'Valid' ? 'text-green-600' : 'text-gray-600'}`}>
                    {test.validity}
                  </span>
                </div>
              </div>

              {/* Upload Action */}
              {test.status === 'pending' && (
                <label className="w-full mt-4 py-3 md:py-3.5 bg-gray-50 hover:bg-[#4B6E48] hover:text-white rounded-xl text-sm md:text-base font-semibold transition-all flex items-center justify-center gap-2 text-gray-900 cursor-pointer border-2 border-dashed border-gray-300 hover:border-[#4B6E48] min-h-[44px]">
                  <Upload className="w-4 h-4 md:w-5 md:h-5" />
                  Upload Proof
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleUploadProof(test.id, file);
                    }}
                    className="hidden"
                  />
                </label>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section>
        <div className="flex items-center justify-between mb-5 sm:mb-6 flex-nowrap gap-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 flex-shrink-0">Work Experience</h2>
          <button
            onClick={() => {
              setEditingExperience({
                id: Date.now().toString(),
                company: '',
                role: '',
                duration: '',
                industry: '',
                skills: ''
              });
              setShowExperienceModal(true);
            }}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-[#4B6E48] hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap flex-shrink-0"
          >
            <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Add Experience</span>
            <span className="xs:hidden">Add Exp</span>
          </button>
        </div>

        <div className="space-y-4">
          {workExperience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-4 sm:p-5 md:p-6 border border-gray-200 group relative"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{exp.role}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">{exp.duration}</span>
                  <button
                    onClick={() => {
                      setEditingExperience(exp);
                      setShowExperienceModal(true);
                    }}
                    className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded transition-opacity"
                  >
                    <Edit2 className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => handleDeleteExperience(exp.id)}
                    className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-100 rounded transition-opacity"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Industry:</span>
                  <span className="ml-2 font-medium text-gray-900">{exp.industry}</span>
                </div>
                <div>
                  <span className="text-gray-600">Skills:</span>
                  <span className="ml-2 font-medium text-gray-900">{exp.skills}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Career Profile */}
      <section>
        <div className="flex items-center justify-between mb-5 sm:mb-6 flex-nowrap gap-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 flex-shrink-0">Career Profile</h2>
          <StandardButton
            className="!h-11 !px-4 !text-sm md:!h-12 md:!px-6 md:!text-base whitespace-nowrap flex-shrink-0 min-h-[44px]"
            onClick={() => setShowGoalsModal(true)}
          >
            Update Goals
          </StandardButton>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-200 shadow-sm">
          <div className="space-y-5 md:space-y-6">
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-2">Career Goal</label>
              <p className="text-sm md:text-base text-gray-900 leading-relaxed">{careerGoals.goal}</p>
            </div>
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-2">Preferred Roles</label>
              <div className="flex flex-wrap gap-2">
                {careerGoals.roles.map((role: string) => (
                  <span 
                    key={role} 
                    className="px-3 py-1.5 bg-gray-100 rounded-full text-xs md:text-sm text-gray-900 font-medium min-[360px]:px-3 min-[360px]:py-1.5 max-[359px]:px-2.5 max-[359px]:py-1 max-[359px]:text-[11px]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs md:text-sm font-medium text-gray-500 block mb-2">Industry Interest</label>
              <div className="flex flex-wrap gap-2">
                {careerGoals.industries.map((industry: string) => (
                  <span 
                    key={industry} 
                    className="px-3 py-1.5 bg-gray-100 rounded-full text-xs md:text-sm text-gray-900 font-medium min-[360px]:px-3 min-[360px]:py-1.5 max-[359px]:px-2.5 max-[359px]:py-1 max-[359px]:text-[11px]"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Vault - Comprehensive Responsive Redesign */}
      <section>
        <div className="flex items-center justify-between mb-5 sm:mb-6 flex-nowrap gap-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 flex-shrink-0">Documents Vault</h2>
          <label className="flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 text-sm md:text-base font-medium text-[#4B6E48] hover:bg-[#4B6E48] hover:text-white rounded-lg transition-all cursor-pointer whitespace-nowrap flex-shrink-0 min-h-[44px] shadow-sm border border-[#4B6E48]" aria-label="Upload Document">
            <Upload className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="hidden md:inline">Upload Document</span>
            <span className="hidden min-[400px]:inline md:hidden">Upload Doc</span>
            <input
              type="file"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    const newDoc: Document = {
                      id: Date.now().toString(),
                      name: file.name,
                      status: 'pending',
                      version: 'v1',
                      date: 'Just now',
                      file: reader.result as string
                    };
                    setDocuments([...documents, newDoc]);
                    showToast('Document uploaded successfully!', 'success');
                  };
                  reader.readAsDataURL(file);
                }
              }}
              className="hidden"
            />
          </label>
        </div>

        <div className="bg-[#F8F9FA] rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-200">
          <div className="space-y-3">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg border border-gray-200 hover:border-[#4B6E48] transition-colors group"
              >
                {/* Responsive Layout: Flex on ≥500px, Grid on <500px */}
                <div className="min-[500px]:flex min-[500px]:items-center min-[500px]:justify-between p-3.5 md:p-4 max-[499px]:grid max-[499px]:grid-cols-[1fr_auto] max-[499px]:gap-x-3 max-[499px]:gap-y-0">
                  
                  {/* Left: Icon + Text Block */}
                  <div className="flex items-center gap-3 flex-1 min-w-0 max-[499px]:col-start-1 max-[499px]:row-span-2">
                    <FileText className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm md:text-base text-gray-900 truncate">{doc.name}</p>
                      <span className="text-xs md:text-sm text-gray-500 block mt-0.5">
                        {doc.version} •<wbr /> Uploaded {doc.date}
                      </span>
                    </div>
                  </div>

                  {/* Right: Badge + Actions */}
                  <div className="flex items-center gap-2 flex-shrink-0 pr-3 min-[400px]:pr-3 max-[399px]:pr-2 max-[499px]:col-start-2 max-[499px]:row-start-1 max-[499px]:flex-col max-[499px]:items-end max-[499px]:gap-1.5 max-[499px]:pr-0">
                    <span
                      className={`text-xs md:text-sm px-2.5 py-1 rounded-md whitespace-nowrap font-medium ${
                        doc.status === 'approved'
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : doc.status === 'pending'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}
                    >
                      {doc.status}
                    </span>
                    {doc.file && (
                      <a
                        href={doc.file}
                        download={doc.name}
                        className="text-xs md:text-sm text-[#4B6E48] hover:underline font-medium max-[499px]:hidden"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Download
                      </a>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteDocument(doc.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 p-2 hover:bg-red-50 rounded-lg transition-all min-h-[36px] min-w-[36px] flex items-center justify-center"
                      aria-label="Delete document"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>

                {/* Download link for mobile (below card on <500px) */}
                {doc.file && (
                  <div className="min-[500px]:hidden border-t border-gray-100 px-4 py-2.5">
                    <a
                      href={doc.file}
                      download={doc.name}
                      className="text-xs text-[#4B6E48] hover:underline font-medium flex items-center gap-1.5"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Upload className="w-3.5 h-3.5" />
                      Download
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modals */}
      <AnimatePresence>
        {showAcademicModal && (
          <AcademicModal
            data={academicDetails}
            onSave={(data) => {
              setAcademicDetails(data);
              setShowAcademicModal(false);
              showToast('Academic details updated!', 'success');
            }}
            onClose={() => setShowAcademicModal(false)}
          />
        )}

        {showTestScoreModal && editingTest && (
          <TestScoreModal
            test={editingTest}
            onSave={(test) => {
              if (testScores.find(t => t.id === test.id)) {
                setTestScores(testScores.map(t => t.id === test.id ? test : t));
              } else {
                setTestScores([...testScores, test]);
              }
              setShowTestScoreModal(false);
              setEditingTest(null);
              showToast('Test score saved!', 'success');
            }}
            onClose={() => {
              setShowTestScoreModal(false);
              setEditingTest(null);
            }}
          />
        )}

        {showExperienceModal && editingExperience && (
          <ExperienceModal
            experience={editingExperience}
            onSave={(exp) => {
              if (workExperience.find(e => e.id === exp.id)) {
                setWorkExperience(workExperience.map(e => e.id === exp.id ? exp : e));
              } else {
                setWorkExperience([...workExperience, exp]);
              }
              setShowExperienceModal(false);
              setEditingExperience(null);
              showToast('Work experience saved!', 'success');
            }}
            onClose={() => {
              setShowExperienceModal(false);
              setEditingExperience(null);
            }}
          />
        )}

        {showGoalsModal && (
          <GoalsModal
            goals={careerGoals}
            onSave={(goals) => {
              setCareerGoals(goals);
              setShowGoalsModal(false);
              showToast('Career goals updated!', 'success');
            }}
            onClose={() => setShowGoalsModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Modal Components
function Modal({ children, onClose, title }: { children: React.ReactNode; onClose: () => void; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
}

function AcademicModal({ data, onSave, onClose }: { data: AcademicDetails; onSave: (data: AcademicDetails) => void; onClose: () => void }) {
  const [formData, setFormData] = useState(data);

  return (
    <Modal onClose={onClose} title="Edit Academic Details">
      <form onSubmit={(e) => { e.preventDefault(); onSave(formData); }} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Highest Qualification</label>
            <input
              type="text"
              value={formData.qualification}
              onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">University</label>
            <input
              type="text"
              value={formData.university}
              onChange={(e) => setFormData({ ...formData, university: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Passing Year</label>
            <input
              type="text"
              value={formData.passingYear}
              onChange={(e) => setFormData({ ...formData, passingYear: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">GPA / CGPA</label>
            <input
              type="text"
              value={formData.gpa}
              onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Major</label>
            <input
              type="text"
              value={formData.major}
              onChange={(e) => setFormData({ ...formData, major: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Grading System</label>
            <input
              type="text"
              value={formData.gradingSystem}
              onChange={(e) => setFormData({ ...formData, gradingSystem: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
            />
          </div>
        </div>
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-900 font-medium"
          >
            Cancel
          </button>
          <StandardButton type="submit" className="flex-1 !h-10">
            Save Changes
          </StandardButton>
        </div>
      </form>
    </Modal>
  );
}

function TestScoreModal({ test, onSave, onClose }: { test: TestScore; onSave: (test: TestScore) => void; onClose: () => void }) {
  const [formData, setFormData] = useState(test);

  return (
    <Modal onClose={onClose} title={test.test ? 'Edit Test Score' : 'Add Test Score'}>
      <form onSubmit={(e) => { e.preventDefault(); onSave(formData); }} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Test Name</label>
            <input
              type="text"
              value={formData.test}
              onChange={(e) => setFormData({ ...formData, test: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
              placeholder="e.g., IELTS, GRE, TOEFL"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Score</label>
            <input
              type="text"
              value={formData.score}
              onChange={(e) => setFormData({ ...formData, score: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
              placeholder="e.g., 7.5, 325"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Date</label>
            <input
              type="text"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
              placeholder="e.g., Jan 2025"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Validity</label>
            <select
              value={formData.validity}
              onChange={(e) => setFormData({ ...formData, validity: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
            >
              <option value="Valid">Valid</option>
              <option value="Expiring Soon">Expiring Soon</option>
              <option value="Expired">Expired</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-900 font-medium"
          >
            Cancel
          </button>
          <StandardButton type="submit" className="flex-1 !h-10">
            Save Test Score
          </StandardButton>
        </div>
      </form>
    </Modal>
  );
}

function ExperienceModal({ experience, onSave, onClose }: { experience: WorkExperience; onSave: (exp: WorkExperience) => void; onClose: () => void }) {
  const [formData, setFormData] = useState(experience);

  return (
    <Modal onClose={onClose} title={experience.company ? 'Edit Experience' : 'Add Experience'}>
      <form onSubmit={(e) => { e.preventDefault(); onSave(formData); }} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Company</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Role</label>
            <input
              type="text"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Duration</label>
            <input
              type="text"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
              placeholder="e.g., 2 years"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Industry</label>
            <input
              type="text"
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-900 mb-2">Skills</label>
            <input
              type="text"
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
              placeholder="e.g., React, Node.js, AWS"
            />
          </div>
        </div>
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-900 font-medium"
          >
            Cancel
          </button>
          <StandardButton type="submit" className="flex-1 !h-10">
            Save Experience
          </StandardButton>
        </div>
      </form>
    </Modal>
  );
}

function GoalsModal({ goals, onSave, onClose }: { goals: any; onSave: (goals: any) => void; onClose: () => void }) {
  const [formData, setFormData] = useState(goals);

  return (
    <Modal onClose={onClose} title="Update Career Goals">
      <form onSubmit={(e) => { e.preventDefault(); onSave(formData); }} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Career Goal</label>
          <textarea
            value={formData.goal}
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
            rows={3}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Preferred Roles (comma-separated)</label>
          <input
            type="text"
            value={formData.roles.join(', ')}
            onChange={(e) => setFormData({ ...formData, roles: e.target.value.split(',').map((r: string) => r.trim()) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Industry Interest (comma-separated)</label>
          <input
            type="text"
            value={formData.industries.join(', ')}
            onChange={(e) => setFormData({ ...formData, industries: e.target.value.split(',').map((i: string) => i.trim()) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
          />
        </div>
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-900 font-medium"
          >
            Cancel
          </button>
          <StandardButton type="submit" className="flex-1 !h-10">
            Save Goals
          </StandardButton>
        </div>
      </form>
    </Modal>
  );
}