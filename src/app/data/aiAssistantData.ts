// AI Assistant Data Structures

export interface UserGoal {
  targetExam: 'IELTS' | 'TOEFL' | 'PTE' | 'Duolingo' | 'Visa Interview';
  targetScore: string;
  targetDate: string;
  focusAreas: {
    reading: boolean;
    writing: boolean;
    speaking: boolean;
    listening: boolean;
  };
}

export interface SkillLevel {
  skill: 'reading' | 'writing' | 'speaking' | 'listening';
  currentBand: number;
  weeklyPracticeTime: number; // in minutes
  lastScore: number;
  lastAttemptDate: string;
  weakestSubSkill: string;
}

export interface PracticeSession {
  id: string;
  skill: 'reading' | 'writing' | 'speaking' | 'listening';
  date: string;
  score: number;
  duration: number; // minutes
  type: string;
  feedback?: string;
}

export interface ProgressData {
  date: string;
  reading: number;
  writing: number;
  speaking: number;
  listening: number;
}

export interface TodayTask {
  id: string;
  title: string;
  skill: 'reading' | 'writing' | 'speaking' | 'listening';
  duration: number;
  completed: boolean;
}

export interface WeeklyPlan {
  day: string;
  tasks: string[];
}

// Mock Data
export const mockUserGoal: UserGoal = {
  targetExam: 'IELTS',
  targetScore: '7.5',
  targetDate: '2026-04-15',
  focusAreas: {
    reading: true,
    writing: true,
    speaking: true,
    listening: true
  }
};

export const mockSkillLevels: SkillLevel[] = [
  {
    skill: 'reading',
    currentBand: 6.5,
    weeklyPracticeTime: 180,
    lastScore: 7.0,
    lastAttemptDate: '2026-02-03',
    weakestSubSkill: 'True/False/Not Given questions'
  },
  {
    skill: 'writing',
    currentBand: 6.0,
    weeklyPracticeTime: 120,
    lastScore: 6.5,
    lastAttemptDate: '2026-02-02',
    weakestSubSkill: 'Task 2 coherence & cohesion'
  },
  {
    skill: 'speaking',
    currentBand: 7.0,
    weeklyPracticeTime: 90,
    lastScore: 7.0,
    lastAttemptDate: '2026-02-04',
    weakestSubSkill: 'Part 3 complex answers'
  },
  {
    skill: 'listening',
    currentBand: 6.5,
    weeklyPracticeTime: 150,
    lastScore: 6.5,
    lastAttemptDate: '2026-02-01',
    weakestSubSkill: 'Section 4 academic lectures'
  }
];

export const mockProgressData: ProgressData[] = [
  { date: '2026-01-29', reading: 6.0, writing: 5.5, speaking: 6.5, listening: 6.0 },
  { date: '2026-01-30', reading: 6.5, writing: 6.0, speaking: 6.5, listening: 6.0 },
  { date: '2026-01-31', reading: 6.5, writing: 6.0, speaking: 7.0, listening: 6.5 },
  { date: '2026-02-01', reading: 6.5, writing: 6.0, speaking: 7.0, listening: 6.5 },
  { date: '2026-02-02', reading: 6.5, writing: 6.5, speaking: 7.0, listening: 6.5 },
  { date: '2026-02-03', reading: 7.0, writing: 6.5, speaking: 7.0, listening: 6.5 },
  { date: '2026-02-04', reading: 7.0, writing: 6.5, speaking: 7.0, listening: 6.5 }
];

export const mockTodayTasks: TodayTask[] = [
  {
    id: '1',
    title: 'Complete 1 Reading passage (Academic)',
    skill: 'reading',
    duration: 20,
    completed: false
  },
  {
    id: '2',
    title: 'Write Task 2 Essay: Education topic',
    skill: 'writing',
    duration: 40,
    completed: false
  },
  {
    id: '3',
    title: 'Speaking Part 2: Describe a place',
    skill: 'speaking',
    duration: 15,
    completed: true
  },
  {
    id: '4',
    title: 'Listening Section 1: Everyday conversation',
    skill: 'listening',
    duration: 25,
    completed: false
  }
];

export const mockWeeklyPlan: WeeklyPlan[] = [
  { day: 'Mon', tasks: ['Reading x2', 'Writing Task 1'] },
  { day: 'Tue', tasks: ['Listening x2', 'Speaking Part 1-2'] },
  { day: 'Wed', tasks: ['Reading x1', 'Writing Task 2'] },
  { day: 'Thu', tasks: ['Mock Test: Reading'] },
  { day: 'Fri', tasks: ['Listening x2', 'Speaking Part 3'] },
  { day: 'Sat', tasks: ['Full Mock Test'] },
  { day: 'Sun', tasks: ['Review mistakes', 'Vocabulary'] }
];

export const mockRecentSessions: PracticeSession[] = [
  {
    id: '1',
    skill: 'speaking',
    date: '2026-02-04',
    score: 7.0,
    duration: 15,
    type: 'Part 2: Describe a person',
    feedback: 'Good fluency, work on complex sentences'
  },
  {
    id: '2',
    skill: 'reading',
    date: '2026-02-03',
    score: 7.0,
    duration: 20,
    type: 'Academic passage: Science',
    feedback: 'Excellent comprehension'
  },
  {
    id: '3',
    skill: 'writing',
    date: '2026-02-02',
    score: 6.5,
    duration: 40,
    type: 'Task 2: Opinion essay',
    feedback: 'Improve paragraph transitions'
  },
  {
    id: '4',
    skill: 'listening',
    date: '2026-02-01',
    score: 6.5,
    duration: 30,
    type: 'Section 3: University discussion',
    feedback: 'Good note-taking skills'
  },
  {
    id: '5',
    skill: 'reading',
    date: '2026-01-31',
    score: 6.5,
    duration: 20,
    type: 'Academic passage: History',
    feedback: 'Watch out for True/False/Not Given'
  }
];

export const mockStrengths = [
  'Strong vocabulary range and appropriate word choice',
  'Consistent fluency in speaking with minimal hesitation',
  'Good comprehension of main ideas in reading passages'
];

export const mockWeaknesses = [
  'Coherence & cohesion in Task 2 writing needs improvement',
  'True/False/Not Given questions in reading need practice',
  'Section 4 academic listening requires more focus'
];

export const mockRecommendation = 'Focus on Writing Task 2 coherence today. Practice 1 Reading passage with True/False/Not Given questions. Spend 15 minutes on Listening Section 4.';

// Reading Practice Data
export interface ReadingPassage {
  id: string;
  title: string;
  topic: string;
  difficulty: 'Beginner' | 'Medium' | 'Hard';
  wordCount: number;
  text: string;
  questions: ReadingQuestion[];
}

export interface ReadingQuestion {
  id: string;
  type: 'MCQ' | 'TrueFalseNotGiven' | 'MatchHeadings' | 'FillBlanks';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
}

export const sampleReadingPassage: ReadingPassage = {
  id: 'passage-1',
  title: 'The Future of Renewable Energy',
  topic: 'Environment',
  difficulty: 'Medium',
  wordCount: 650,
  text: `The transition to renewable energy sources has become one of the most pressing challenges of the 21st century. As global temperatures rise and fossil fuel reserves diminish, countries worldwide are investing heavily in solar, wind, and hydroelectric power technologies.

Solar energy has seen remarkable growth in recent years. Photovoltaic panel efficiency has increased from around 15% in the early 2000s to over 22% today, while costs have dropped by more than 80%. This dramatic improvement has made solar power competitive with traditional energy sources in many regions.

Wind energy presents another promising avenue for sustainable power generation. Modern wind turbines can generate electricity even in low-wind conditions, and offshore wind farms have become increasingly viable. Countries like Denmark now generate over 40% of their electricity from wind power, demonstrating the technology's potential.

However, renewable energy faces significant challenges. The intermittent nature of solar and wind power requires advanced energy storage solutions. Battery technology is improving, but remains expensive and limited in capacity. Additionally, the infrastructure needed to transmit renewable energy from generation sites to consumers requires substantial investment.

Despite these obstacles, experts remain optimistic. Technological advancements continue to drive down costs and improve efficiency. Government policies and international agreements are creating favorable conditions for renewable energy adoption. Many analysts predict that renewables will become the dominant energy source globally within the next three decades.`,
  questions: [
    {
      id: 'q1',
      type: 'MCQ',
      question: 'According to the passage, solar panel efficiency has:',
      options: [
        'Decreased over time',
        'Remained constant',
        'Increased from 15% to over 22%',
        'Reached 50%'
      ],
      correctAnswer: 'Increased from 15% to over 22%',
      explanation: 'The passage clearly states that photovoltaic panel efficiency has increased from around 15% in the early 2000s to over 22% today.'
    },
    {
      id: 'q2',
      type: 'TrueFalseNotGiven',
      question: 'Denmark generates more than half of its electricity from wind power.',
      correctAnswer: 'False',
      explanation: 'The passage states Denmark generates over 40% from wind power, not more than 50%.'
    },
    {
      id: 'q3',
      type: 'MCQ',
      question: 'What is mentioned as a main challenge for renewable energy?',
      options: [
        'Lack of government support',
        'Intermittent nature requiring energy storage',
        'Too expensive to build',
        'Environmental concerns'
      ],
      correctAnswer: 'Intermittent nature requiring energy storage',
      explanation: 'The passage explicitly mentions that "The intermittent nature of solar and wind power requires advanced energy storage solutions" as a significant challenge.'
    },
    {
      id: 'q4',
      type: 'FillBlanks',
      question: 'Solar power costs have dropped by more than _____ percent.',
      correctAnswer: '80',
      explanation: 'The passage states that costs have dropped by more than 80%.'
    }
  ]
};

// Writing Prompts
export interface WritingPrompt {
  id: string;
  task: 'Task 1' | 'Task 2';
  type: string;
  prompt: string;
  wordCount: number;
  difficulty: 'Beginner' | 'Medium' | 'Hard';
  hints?: string[];
}

export const sampleWritingPrompts: WritingPrompt[] = [
  {
    id: 'w1',
    task: 'Task 2',
    type: 'Opinion Essay',
    prompt: 'Some people believe that universities should only offer subjects that are useful for the future, such as science and technology. Others believe that universities should offer a wide range of subjects, including arts and humanities. Discuss both views and give your opinion.',
    wordCount: 250,
    difficulty: 'Medium',
    hints: [
      'Introduction: Paraphrase question + your position',
      'Body 1: Practical subjects argument',
      'Body 2: Broad education argument',
      'Conclusion: Summarize + restate opinion'
    ]
  },
  {
    id: 'w2',
    task: 'Task 1',
    type: 'Letter - Formal',
    prompt: 'You recently attended a conference for work. Write a letter to your manager about it. In your letter: - Explain what the conference was about - Describe what you learned - Suggest how this knowledge can benefit your company',
    wordCount: 150,
    difficulty: 'Medium'
  }
];

// Mock Test Data
export interface MockTest {
  id: string;
  name: string;
  type: 'IELTS Academic' | 'IELTS General' | 'TOEFL' | 'PTE' | 'Visa Interview';
  duration: number; // in minutes
  sections: string[];
  difficulty: 'Beginner' | 'Medium' | 'Hard';
  attemptsTaken: number;
  bestScore?: number;
  description: string;
}

export interface MockTestAttempt {
  id: string;
  testId: string;
  date: string;
  overallScore: number;
  sectionScores: {
    reading: number;
    writing: number;
    speaking: number;
    listening: number;
  };
  duration: number;
  status: 'completed' | 'in-progress' | 'abandoned';
}

export const mockTests: MockTest[] = [
  {
    id: 'test-1',
    name: 'IELTS Academic Full Test',
    type: 'IELTS Academic',
    duration: 165, // 2h 45min
    sections: ['Reading', 'Writing', 'Listening', 'Speaking'],
    difficulty: 'Hard',
    attemptsTaken: 3,
    bestScore: 7.5,
    description: 'Complete IELTS Academic test with all 4 sections under exam conditions'
  },
  {
    id: 'test-2',
    name: 'IELTS General Training',
    type: 'IELTS General',
    duration: 165,
    sections: ['Reading', 'Writing', 'Listening', 'Speaking'],
    difficulty: 'Medium',
    attemptsTaken: 1,
    bestScore: 7.0,
    description: 'Full IELTS General Training test for immigration and work purposes'
  },
  {
    id: 'test-3',
    name: 'TOEFL iBT Practice',
    type: 'TOEFL',
    duration: 180, // 3 hours
    sections: ['Reading', 'Writing', 'Listening', 'Speaking'],
    difficulty: 'Hard',
    attemptsTaken: 2,
    bestScore: 95,
    description: 'Complete TOEFL iBT exam simulation for US universities'
  },
  {
    id: 'test-4',
    name: 'Visa Interview Assessment',
    type: 'Visa Interview',
    duration: 30,
    sections: ['Speaking'],
    difficulty: 'Medium',
    attemptsTaken: 5,
    bestScore: 8.0,
    description: 'Comprehensive visa interview preparation with common questions'
  }
];

export const mockTestAttempts: MockTestAttempt[] = [
  {
    id: 'attempt-1',
    testId: 'test-1',
    date: '2026-02-03',
    overallScore: 7.5,
    sectionScores: {
      reading: 8.0,
      writing: 7.0,
      speaking: 7.5,
      listening: 7.5
    },
    duration: 162,
    status: 'completed'
  },
  {
    id: 'attempt-2',
    testId: 'test-1',
    date: '2026-01-27',
    overallScore: 7.0,
    sectionScores: {
      reading: 7.5,
      writing: 6.5,
      speaking: 7.0,
      listening: 7.0
    },
    duration: 165,
    status: 'completed'
  },
  {
    id: 'attempt-3',
    testId: 'test-3',
    date: '2026-01-20',
    overallScore: 95,
    sectionScores: {
      reading: 28,
      writing: 24,
      speaking: 23,
      listening: 27
    },
    duration: 175,
    status: 'completed'
  }
];

// Results & Analytics Data
export interface PerformanceMetrics {
  overallBand: number;
  bestSection: string;
  weakestSection: string;
  improvementPercent: number;
  consistencyIndex: number;
}

export interface SkillBreakdown {
  skill: string;
  microSkills: {
    name: string;
    score: number;
    status: 'excellent' | 'good' | 'needs-work';
  }[];
  errorPatterns: string[];
  progressTrend: 'improving' | 'stable' | 'declining';
}

export const performanceMetrics: PerformanceMetrics = {
  overallBand: 7.5,
  bestSection: 'Reading',
  weakestSection: 'Writing',
  improvementPercent: 15,
  consistencyIndex: 85
};

export const skillBreakdowns: SkillBreakdown[] = [
  {
    skill: 'reading',
    microSkills: [
      { name: 'Skimming & Scanning', score: 85, status: 'excellent' },
      { name: 'True/False/Not Given', score: 70, status: 'needs-work' },
      { name: 'Vocabulary in Context', score: 80, status: 'good' },
      { name: 'Main Idea Identification', score: 90, status: 'excellent' }
    ],
    errorPatterns: ['Rushing through True/False questions', 'Missing context clues'],
    progressTrend: 'improving'
  },
  {
    skill: 'writing',
    microSkills: [
      { name: 'Task Response', score: 75, status: 'good' },
      { name: 'Coherence & Cohesion', score: 65, status: 'needs-work' },
      { name: 'Lexical Resource', score: 80, status: 'good' },
      { name: 'Grammar Accuracy', score: 85, status: 'excellent' }
    ],
    errorPatterns: ['Weak paragraph transitions', 'Limited linking words'],
    progressTrend: 'stable'
  }
];

// Improvement Plan Data
export interface WeeklyPlanItem {
  week: number;
  tasks: string[];
  mockTests: string[];
  practiceSets: number;
  reviewSessions: number;
  status: 'completed' | 'current' | 'upcoming';
}

export const improvementRoadmap: WeeklyPlanItem[] = [
  {
    week: 1,
    tasks: ['Focus on Reading T/F/NG', 'Writing coherence drills', 'Daily vocabulary'],
    mockTests: [],
    practiceSets: 5,
    reviewSessions: 2,
    status: 'completed'
  },
  {
    week: 2,
    tasks: ['Speaking fluency practice', 'Listening accent training', 'Grammar review'],
    mockTests: ['Mini Mock Test'],
    practiceSets: 7,
    reviewSessions: 2,
    status: 'current'
  },
  {
    week: 3,
    tasks: ['Full mock test', 'Weak area focus', 'Intensive writing practice'],
    mockTests: ['Full IELTS Mock'],
    practiceSets: 8,
    reviewSessions: 3,
    status: 'upcoming'
  },
  {
    week: 4,
    tasks: ['Final review', 'Confidence building', 'Test strategies'],
    mockTests: ['Final Mock Test'],
    practiceSets: 5,
    reviewSessions: 4,
    status: 'upcoming'
  }
];

export const dailyActionPlan = [
  { id: '1', task: 'Complete 1 Reading passage (Academic)', completed: true, duration: 20 },
  { id: '2', task: 'Write Task 2 Essay on Education', completed: false, duration: 40 },
  { id: '3', task: 'Speaking Part 2 practice', completed: false, duration: 15 },
  { id: '4', task: 'Review 20 vocabulary words', completed: true, duration: 10 }
];

// History / Timeline Data
export interface TimelineEntry {
  id: string;
  type: 'practice' | 'mock-test' | 'feedback' | 'plan-update' | 'milestone' | 'review';
  date: string;
  title: string;
  description: string;
  result?: string;
  score?: number;
  link?: string;
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: 'timeline-1',
    type: 'mock-test',
    date: '2026-02-03',
    title: 'IELTS Academic Full Test',
    description: 'Completed full mock test under exam conditions',
    result: 'Excellent performance',
    score: 7.5,
    link: '/ai-assistant/results-analytics'
  },
  {
    id: 'timeline-2',
    type: 'milestone',
    date: '2026-02-01',
    title: 'Target Score Achieved',
    description: 'Reached 7.0 overall band score',
    result: 'Milestone reached',
    score: 7.0
  },
  {
    id: 'timeline-3',
    type: 'practice',
    date: '2026-01-30',
    title: 'Reading Practice Session',
    description: 'Academic passages with T/F/NG questions',
    result: 'Good progress',
    score: 8.0
  },
  {
    id: 'timeline-4',
    type: 'feedback',
    date: '2026-01-28',
    title: 'Writing Feedback Received',
    description: 'Task 2 essay evaluation and improvement suggestions',
    result: 'Focus on coherence'
  },
  {
    id: 'timeline-5',
    type: 'plan-update',
    date: '2026-01-25',
    title: 'Study Plan Updated',
    description: 'Adjusted plan to focus on writing and speaking',
    result: 'Plan optimized'
  },
  {
    id: 'timeline-6',
    type: 'review',
    date: '2026-01-23',
    title: 'Counselor Review Session',
    description: 'Discussed progress and next steps',
    result: 'On track'
  }
];