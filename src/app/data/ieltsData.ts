export interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'matching' | 'short-answer';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
}

export interface ListeningSection {
  id: string;
  title: string;
  audioUrl: string;
  duration: number; // in seconds
  description: string;
  questions: Question[];
}

export interface ReadingPassage {
  id: string;
  title: string;
  content: string;
  wordCount: number;
  timeLimit: number; // in minutes
  questions: Question[];
}

export interface WritingTask {
  id: string;
  taskNumber: 1 | 2;
  title: string;
  prompt: string;
  imageUrl?: string;
  minWords: number;
  timeLimit: number; // in minutes
  tips: string[];
  sampleAnswer?: string;
}

export interface SpeakingTopic {
  id: string;
  part: 1 | 2 | 3;
  title: string;
  questions: string[];
  preparationTime?: number; // in seconds
  speakingTime?: number; // in seconds
  tips: string[];
}

// Mock Listening Practice Data
export const listeningPractice: ListeningSection[] = [
  {
    id: 'listening-1',
    title: 'Section 1: Social Conversation',
    audioUrl: 'https://example.com/ielts-listening-1.mp3',
    duration: 180,
    description: 'A conversation between two people in a social context',
    questions: [
      {
        id: 'l1-q1',
        type: 'fill-blank',
        question: 'The woman is calling to book a _____ for her family.',
        correctAnswer: 'vacation',
        explanation: 'The conversation starts with booking a family vacation.'
      },
      {
        id: 'l1-q2',
        type: 'multiple-choice',
        question: 'How many people will be traveling?',
        options: ['2', '3', '4', '5'],
        correctAnswer: '4',
        explanation: 'She mentions two adults and two children.'
      },
      {
        id: 'l1-q3',
        type: 'fill-blank',
        question: 'They plan to travel in _____.',
        correctAnswer: 'July',
        explanation: 'The travel month is mentioned mid-conversation.'
      }
    ]
  }
];

// Mock Reading Practice Data
export const readingPractice: ReadingPassage[] = [
  {
    id: 'reading-1',
    title: 'The Impact of Technology on Education',
    wordCount: 850,
    timeLimit: 20,
    content: `The digital revolution has fundamentally transformed the landscape of education over the past two decades. From interactive whiteboards to online learning platforms, technology has become an integral part of modern classrooms worldwide. This transformation has brought both opportunities and challenges that educators, students, and policymakers continue to navigate.

One of the most significant advantages of educational technology is its ability to personalize learning experiences. Adaptive learning software can assess a student's strengths and weaknesses, then adjust the difficulty and pace of content accordingly. This individualized approach allows students to learn at their own speed, revisiting difficult concepts while advancing quickly through material they grasp easily. Research has shown that personalized learning can improve student outcomes by up to 30% compared to traditional one-size-fits-all instruction.

Moreover, technology has democratized access to education on an unprecedented scale. Online courses and digital resources have made high-quality educational content available to anyone with an internet connection, regardless of their geographic location or socioeconomic background. Platforms like Khan Academy, Coursera, and edX offer courses from world-renowned institutions, often at little to no cost. This accessibility has been particularly transformative in developing countries, where traditional educational infrastructure may be limited.

However, the integration of technology in education is not without its drawbacks. Critics argue that excessive screen time can negatively impact students' attention spans and social skills. Studies have indicated that students who spend more than four hours per day on digital devices for educational purposes may experience decreased face-to-face communication skills and reduced ability to focus on non-digital tasks. Additionally, the digital divide remains a significant concern, as students from low-income families may lack access to the necessary devices and reliable internet connections.

Another challenge is the potential for technology to create distractions rather than enhance learning. Social media, games, and other non-educational content are often just a click away, making it difficult for students to maintain focus on their studies. Teachers report that classroom management has become more complex in technology-rich environments, as they must monitor both student engagement and appropriate device usage.

Despite these challenges, the future of educational technology appears promising. Emerging technologies like artificial intelligence, virtual reality, and augmented reality are opening new possibilities for immersive and interactive learning experiences. Virtual reality, for instance, can transport students to historical events, distant planets, or inside the human body, providing experiential learning opportunities that were previously impossible in a traditional classroom setting.

The key to successful technology integration lies in finding the right balance. Technology should complement, not replace, effective teaching practices and human interaction. Educators must be properly trained to use these tools effectively and thoughtfully, always keeping student learning outcomes as the primary goal. As we move forward, the focus should remain on using technology to enhance education while being mindful of its limitations and potential pitfalls.`,
    questions: [
      {
        id: 'r1-q1',
        type: 'multiple-choice',
        question: 'According to the passage, personalized learning can improve student outcomes by:',
        options: ['10%', '20%', '30%', '40%'],
        correctAnswer: '30%',
        explanation: 'The passage states "Research has shown that personalized learning can improve student outcomes by up to 30%"'
      },
      {
        id: 'r1-q2',
        type: 'true-false',
        question: 'TRUE/FALSE: The passage suggests that technology has made education less accessible to people in developing countries.',
        options: ['True', 'False', 'Not Given'],
        correctAnswer: 'False',
        explanation: 'The passage states technology has been "particularly transformative in developing countries"'
      },
      {
        id: 'r1-q3',
        type: 'multiple-choice',
        question: 'What is mentioned as a negative effect of excessive screen time?',
        options: [
          'Improved multitasking abilities',
          'Decreased face-to-face communication skills',
          'Better academic performance',
          'Increased physical activity'
        ],
        correctAnswer: 'Decreased face-to-face communication skills',
        explanation: 'The passage mentions "decreased face-to-face communication skills" as a negative effect.'
      },
      {
        id: 'r1-q4',
        type: 'fill-blank',
        question: 'The passage mentions that _____, _____, and _____ are emerging technologies with educational potential.',
        correctAnswer: ['artificial intelligence', 'virtual reality', 'augmented reality'],
        explanation: 'These three technologies are specifically listed in the sixth paragraph.'
      },
      {
        id: 'r1-q5',
        type: 'short-answer',
        question: 'What does the author suggest is the key to successful technology integration in education?',
        correctAnswer: 'finding the right balance',
        explanation: 'The final section states "The key to successful technology integration lies in finding the right balance."'
      }
    ]
  }
];

// Mock Writing Tasks
export const writingTasks: WritingTask[] = [
  {
    id: 'writing-task-1',
    taskNumber: 1,
    title: 'Academic Writing Task 1',
    prompt: 'The chart below shows the percentage of households in different income brackets in a European country from 1990 to 2020. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    minWords: 150,
    timeLimit: 20,
    tips: [
      'Start with an overview of the main trends',
      'Include specific data and figures',
      'Use comparative language (higher, lower, increased, decreased)',
      'Organize information logically by time period or category',
      'Avoid giving opinions - stick to describing the data'
    ],
    sampleAnswer: 'The chart illustrates changes in household income distribution across four income brackets in a European nation over a 30-year period from 1990 to 2020...'
  },
  {
    id: 'writing-task-2',
    taskNumber: 2,
    title: 'Academic Writing Task 2',
    prompt: 'Some people believe that unpaid community service should be a compulsory part of high school programs (for example, working for a charity, improving the neighborhood, or teaching sports to younger children). To what extent do you agree or disagree?',
    minWords: 250,
    timeLimit: 40,
    tips: [
      'State your position clearly in the introduction',
      'Develop 2-3 main arguments with supporting examples',
      'Consider counter-arguments to show balanced thinking',
      'Use formal academic language',
      'Include a clear conclusion that restates your position',
      'Manage your time: 5 min planning, 30 min writing, 5 min checking'
    ],
    sampleAnswer: 'The question of whether community service should be mandatory in high school curricula is a contentious one...'
  }
];

// Mock Speaking Topics
export const speakingTopics: SpeakingTopic[] = [
  {
    id: 'speaking-part-1',
    part: 1,
    title: 'Part 1: Introduction and Interview',
    questions: [
      'What is your full name?',
      'Can I see your identification?',
      'Where are you from?',
      'Do you work or are you a student?',
      'What do you like most about your job/studies?',
      'Do you enjoy reading? What kinds of books do you like?',
      'How often do you use social media?',
      'What do you usually do in your free time?'
    ],
    preparationTime: 0,
    speakingTime: 300, // 4-5 minutes
    tips: [
      'Answer naturally and extend your responses',
      'Give reasons for your answers',
      'Use examples from your personal experience',
      'Speak clearly and at a moderate pace',
      'Don\'t memorize answers - be authentic'
    ]
  },
  {
    id: 'speaking-part-2',
    part: 2,
    title: 'Part 2: Individual Long Turn',
    questions: [
      'Describe a person who has had a significant influence on your life.',
      'You should say:',
      '- Who this person is',
      '- How you met them',
      '- What qualities they have',
      '- And explain why they have influenced you'
    ],
    preparationTime: 60,
    speakingTime: 120, // 1-2 minutes
    tips: [
      'Use all of your preparation time to make notes',
      'Cover all bullet points in the prompt',
      'Speak for the full 1-2 minutes',
      'Use a range of vocabulary and grammatical structures',
      'Organize your answer logically'
    ]
  },
  {
    id: 'speaking-part-3',
    part: 3,
    title: 'Part 3: Two-way Discussion',
    questions: [
      'How have relationships between people changed in recent years?',
      'Do you think social media has improved or damaged personal relationships?',
      'What qualities do you think make a good leader?',
      'How important is it for children to have role models?',
      'In what ways can famous people influence young people positively?'
    ],
    preparationTime: 0,
    speakingTime: 300, // 4-5 minutes
    tips: [
      'Give detailed, well-developed answers',
      'Discuss both sides of issues when appropriate',
      'Use examples to support your points',
      'Show you can analyze and evaluate ideas',
      'Use sophisticated vocabulary and complex sentences'
    ]
  }
];

// Band Score Descriptors
export const bandScores = {
  listening: [
    { raw: '39-40', band: '9.0' },
    { raw: '37-38', band: '8.5' },
    { raw: '35-36', band: '8.0' },
    { raw: '32-34', band: '7.5' },
    { raw: '30-31', band: '7.0' },
    { raw: '26-29', band: '6.5' },
    { raw: '23-25', band: '6.0' },
    { raw: '18-22', band: '5.5' },
    { raw: '16-17', band: '5.0' },
    { raw: '13-15', band: '4.5' },
    { raw: '10-12', band: '4.0' },
  ],
  reading: [
    { raw: '39-40', band: '9.0' },
    { raw: '37-38', band: '8.5' },
    { raw: '35-36', band: '8.0' },
    { raw: '33-34', band: '7.5' },
    { raw: '30-32', band: '7.0' },
    { raw: '27-29', band: '6.5' },
    { raw: '23-26', band: '6.0' },
    { raw: '19-22', band: '5.5' },
    { raw: '15-18', band: '5.0' },
    { raw: '13-14', band: '4.5' },
    { raw: '10-12', band: '4.0' },
  ]
};

// Study Resources
export interface StudyResource {
  id: string;
  category: 'listening' | 'reading' | 'writing' | 'speaking' | 'general';
  title: string;
  description: string;
  type: 'article' | 'video' | 'pdf' | 'practice';
  duration?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const studyResources: StudyResource[] = [
  {
    id: 'res-1',
    category: 'listening',
    title: 'Improving Note-Taking Skills',
    description: 'Learn effective strategies for capturing key information while listening',
    type: 'article',
    duration: '10 min read',
    difficulty: 'intermediate'
  },
  {
    id: 'res-2',
    category: 'reading',
    title: 'Skimming and Scanning Techniques',
    description: 'Master the art of quickly finding information in passages',
    type: 'video',
    duration: '15 min',
    difficulty: 'beginner'
  },
  {
    id: 'res-3',
    category: 'writing',
    title: 'Academic Vocabulary Builder',
    description: '500+ essential words for IELTS Writing with examples',
    type: 'pdf',
    difficulty: 'intermediate'
  },
  {
    id: 'res-4',
    category: 'speaking',
    title: 'Fluency Enhancement Exercises',
    description: 'Daily practice routines to improve speaking confidence',
    type: 'practice',
    duration: '20 min',
    difficulty: 'intermediate'
  },
  {
    id: 'res-5',
    category: 'general',
    title: 'Complete IELTS Study Plan',
    description: '12-week structured preparation guide for all sections',
    type: 'pdf',
    difficulty: 'beginner'
  },
  {
    id: 'res-6',
    category: 'writing',
    title: 'Task 2 Essay Templates',
    description: 'Proven structures for different essay types',
    type: 'article',
    duration: '12 min read',
    difficulty: 'intermediate'
  }
];
