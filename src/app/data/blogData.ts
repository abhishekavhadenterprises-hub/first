export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
    role: string;
    linkedin?: string;
    email?: string;
  };
  publishedDate: string;
  updatedDate?: string;
  readTime: string;
  featuredImage: string;
  tags: string[];
  isFeatured?: boolean;
  isEditorPick?: boolean;
  views?: number;
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
      type?: 'text' | 'list' | 'quote' | 'tips';
      items?: string[];
    }[];
  };
  faqs?: {
    question: string;
    answer: string;
  }[];
  tableOfContents?: {
    id: string;
    title: string;
    level: number;
  }[];
}

export interface BlogCategory {
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
}

export const blogCategories: BlogCategory[] = [
  {
    name: 'Study Abroad Tips',
    slug: 'study-abroad-tips',
    description: 'Practical advice for international students planning their journey',
    icon: '🎓',
    color: 'blue'
  },
  {
    name: 'Visa Guides',
    slug: 'visa-guides',
    description: 'Everything you need to know about student visas worldwide',
    icon: '✈️',
    color: 'green'
  },
  {
    name: 'Country Guides',
    slug: 'country-guides',
    description: 'In-depth guides to studying in different countries',
    icon: '🌍',
    color: 'purple'
  },
  {
    name: 'Student Life',
    slug: 'student-life',
    description: 'Tips for thriving as an international student',
    icon: '🎉',
    color: 'amber'
  },
  {
    name: 'Financial Aid',
    slug: 'financial-aid',
    description: 'Scholarships, grants, and funding opportunities',
    icon: '💰',
    color: 'emerald'
  },
  {
    name: 'Career Advice',
    slug: 'career-advice',
    description: 'Building your career during and after studies',
    icon: '💼',
    color: 'red'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'complete-guide-studying-uk-2026',
    title: 'Complete Guide to Studying in the UK in 2026',
    excerpt: 'Everything you need to know about pursuing higher education in the United Kingdom, from choosing universities to settling in.',
    category: 'Country Guides',
    categorySlug: 'country-guides',
    isFeatured: true,
    isEditorPick: true,
    views: 15420,
    author: {
      name: 'Sarah Mitchell',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: 'Sarah is an education consultant with 10+ years of experience helping students study in the UK. She holds an MBA from Oxford University.',
      role: 'Senior Education Consultant',
      linkedin: 'https://linkedin.com',
      email: 'sarah.mitchell@example.com'
    },
    publishedDate: '2026-01-15',
    updatedDate: '2026-02-01',
    readTime: '12 min read',
    featuredImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200',
    tags: ['UK', 'Universities', 'Study Abroad', 'Europe'],
    tableOfContents: [
      { id: 'why-choose-uk', title: 'Why Choose the UK?', level: 2 },
      { id: 'top-universities', title: 'Top Universities in the UK', level: 2 },
      { id: 'application-process', title: 'Application Process', level: 2 },
      { id: 'cost-of-living', title: 'Cost of Living', level: 2 },
      { id: 'pro-tips', title: 'Pro Tips', level: 2 }
    ],
    faqs: [
      {
        question: 'How long does it take to complete a bachelor\'s degree in the UK?',
        answer: 'A bachelor\'s degree in the UK typically takes 3 years to complete (except Scotland where it\'s 4 years), compared to 4 years in most other countries. This shorter duration can save you both time and money.'
      },
      {
        question: 'Can I work while studying in the UK?',
        answer: 'Yes, international students on a Student visa can work up to 20 hours per week during term time and full-time during holidays. This helps offset living costs and gain valuable work experience.'
      },
      {
        question: 'What is the Graduate Route visa?',
        answer: 'The Graduate Route allows international students to stay in the UK for 2 years (3 years for PhD graduates) after completing their degree to work or look for work at any skill level, without requiring sponsorship.'
      },
      {
        question: 'How much does it cost to study in the UK?',
        answer: 'Tuition fees for international students range from £10,000 to £38,000 per year depending on the university and program. Living costs vary by city, with London being the most expensive at around £1,400/month and other cities averaging £900-1,200/month.'
      },
      {
        question: 'Do I need IELTS for UK universities?',
        answer: 'Most UK universities require proof of English language proficiency, typically IELTS Academic with a minimum score of 6.0-7.0 overall (varies by university and program). Some universities accept alternatives like TOEFL, PTE Academic, or Duolingo English Test.'
      }
    ],
    content: {
      introduction: 'The United Kingdom has been a top destination for international students for decades. With world-renowned universities, diverse culture, and excellent career opportunities, the UK offers an unparalleled educational experience.',
      sections: [
        {
          heading: 'Why Choose the UK?',
          content: 'The UK education system is recognized globally for its quality and rigor. Here are the top reasons students choose the UK:',
          type: 'list',
          items: [
            'Home to 4 of the world\'s top 10 universities (Oxford, Cambridge, Imperial, UCL)',
            'Shorter course duration - 3 years for undergraduate, 1 year for master\'s',
            'Post-study work visa allowing 2 years of work after graduation',
            'Rich cultural diversity with students from 200+ countries',
            'Gateway to Europe for travel and career opportunities'
          ]
        },
        {
          heading: 'Top Universities in the UK',
          content: 'The UK boasts some of the most prestigious universities in the world. The Russell Group universities are particularly renowned for research excellence.',
          type: 'text'
        },
        {
          heading: 'Application Process',
          content: 'Applying to UK universities requires careful planning:',
          type: 'list',
          items: [
            'Submit applications through UCAS (Universities and Colleges Admissions Service)',
            'UCAS deadline is typically January 15 for most courses',
            'Prepare a compelling personal statement (4,000 characters)',
            'Gather academic transcripts and references',
            'Meet English language requirements (IELTS 6.5+ typically)'
          ]
        },
        {
          heading: 'Cost of Living',
          content: 'Budget is a crucial consideration. London is more expensive than other cities, but offers more opportunities.',
          type: 'text'
        },
        {
          heading: 'Pro Tips',
          content: 'Based on our experience with 500+ students:',
          type: 'tips',
          items: [
            'Start your application at least 9-12 months before intake',
            'Apply for scholarships early - Chevening, Commonwealth, university-specific',
            'Consider cities outside London for lower living costs (Manchester, Birmingham, Edinburgh)',
            'Join university societies to make friends and build networks',
            'Utilize the careers service from day one'
          ]
        }
      ]
    }
  },
  {
    id: '2',
    slug: 'us-student-visa-f1-complete-guide',
    title: 'US Student Visa (F-1): Complete Application Guide',
    excerpt: 'Step-by-step guide to applying for and obtaining your F-1 student visa for studying in the United States.',
    category: 'Visa Guides',
    categorySlug: 'visa-guides',
    isEditorPick: true,
    views: 12850,
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      bio: 'Michael is a visa specialist who has helped over 1,000 students secure their US student visas. He previously worked at the US Embassy.',
      role: 'Visa Consultant'
    },
    publishedDate: '2026-01-20',
    readTime: '10 min read',
    featuredImage: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200',
    tags: ['USA', 'F-1 Visa', 'Student Visa', 'Immigration'],
    content: {
      introduction: 'The F-1 visa is the most common student visa for studying in the United States. This comprehensive guide walks you through every step of the application process.',
      sections: [
        {
          heading: 'F-1 Visa Requirements',
          content: 'Before applying, ensure you meet these basic requirements:',
          type: 'list',
          items: [
            'Acceptance to a SEVP-approved US institution',
            'Valid I-20 form issued by your university',
            'Proof of financial ability to cover tuition and living expenses',
            'Strong ties to your home country (to prove intent to return)',
            'Valid passport (must be valid for at least 6 months beyond intended stay)'
          ]
        },
        {
          heading: 'Application Steps',
          content: 'Follow these steps carefully for a successful application:',
          type: 'list',
          items: [
            'Receive I-20 from your university and pay SEVIS fee ($350)',
            'Complete DS-160 form online',
            'Pay visa application fee ($185)',
            'Schedule visa interview appointment',
            'Gather required documents',
            'Attend visa interview at US Embassy/Consulate',
            'Wait for visa processing (typically 3-5 business days)'
          ]
        },
        {
          heading: 'Interview Preparation',
          content: 'The visa interview is crucial. Be prepared to answer questions about your study plans, financial situation, and post-graduation intentions.',
          type: 'text'
        },
        {
          heading: 'Common Interview Questions',
          content: 'Practice answers to these frequently asked questions:',
          type: 'list',
          items: [
            'Why do you want to study in the US?',
            'Why this particular university and program?',
            'Who is funding your education?',
            'What are your plans after graduation?',
            'Do you have family in the US?'
          ]
        },
        {
          heading: 'Pro Tips for Success',
          content: 'Increase your chances of approval:',
          type: 'tips',
          items: [
            'Be honest and confident during the interview',
            'Organize all documents in a clear folder with tabs',
            'Demonstrate clear intent to return home after studies',
            'Show financial documents proving funds for entire program duration',
            'Dress professionally for the interview',
            'Arrive at the embassy 30 minutes early'
          ]
        }
      ]
    }
  },
  {
    id: '3',
    slug: '10-scholarships-international-students',
    title: '10 Fully-Funded Scholarships for International Students',
    excerpt: 'Discover top scholarship opportunities that cover full tuition, living expenses, and more for international students in 2026.',
    category: 'Financial Aid',
    categorySlug: 'financial-aid',
    isEditorPick: true,
    views: 11200,
    author: {
      name: 'Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      bio: 'Priya specializes in scholarship guidance and has helped students secure over $5M in scholarships. She holds a degree in International Relations.',
      role: 'Scholarship Advisor'
    },
    publishedDate: '2026-01-10',
    readTime: '8 min read',
    featuredImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200',
    tags: ['Scholarships', 'Financial Aid', 'Funding', 'Education'],
    content: {
      introduction: 'Studying abroad can be expensive, but numerous scholarships can help make your dreams a reality. Here are 10 prestigious fully-funded scholarships for international students.',
      sections: [
        {
          heading: '1. Chevening Scholarships (UK)',
          content: 'The UK government\'s global scholarship program. Covers tuition, living expenses, and flights. Open to students from 160+ countries pursuing master\'s degrees.',
          type: 'text'
        },
        {
          heading: '2. Fulbright Foreign Student Program (USA)',
          content: 'One of the most prestigious scholarships worldwide. Covers full tuition, airfare, living stipend, and health insurance for graduate studies in the US.',
          type: 'text'
        },
        {
          heading: '3. DAAD Scholarships (Germany)',
          content: 'German Academic Exchange Service offers scholarships for undergraduate, master\'s, and PhD students. Many programs taught in English.',
          type: 'text'
        },
        {
          heading: 'Application Tips',
          content: 'Successfully securing scholarships requires strategic planning:',
          type: 'tips',
          items: [
            'Start researching scholarships 12-18 months before your intended start date',
            'Tailor each application to the specific scholarship criteria',
            'Highlight leadership experience and community involvement',
            'Get strong recommendation letters from professors or employers',
            'Proofread essays multiple times and get feedback',
            'Apply to multiple scholarships to increase chances'
          ]
        },
        {
          heading: 'What Scholarship Committees Look For',
          content: 'Understanding evaluation criteria helps strengthen your application:',
          type: 'list',
          items: [
            'Academic excellence (strong GPA and test scores)',
            'Leadership potential and extracurricular involvement',
            'Clear career goals and how the scholarship helps achieve them',
            'Commitment to giving back to home country/community',
            'Unique perspective or overcoming challenges'
          ]
        }
      ]
    }
  },
  {
    id: '4',
    slug: 'cultural-adjustment-international-students',
    title: 'Cultural Adjustment: Thriving as an International Student',
    excerpt: 'Overcome culture shock and thrive in your new environment with these proven strategies for international students.',
    category: 'Student Life',
    categorySlug: 'student-life',
    author: {
      name: 'James Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      bio: 'James is a student counselor specializing in international student support. He has worked with students from 50+ countries.',
      role: 'Student Counselor'
    },
    publishedDate: '2026-01-25',
    readTime: '7 min read',
    featuredImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200',
    tags: ['Student Life', 'Culture', 'Mental Health', 'Adjustment'],
    content: {
      introduction: 'Moving to a new country for studies is exciting but can also be challenging. Culture shock is normal, but with the right strategies, you can adapt successfully and thrive.',
      sections: [
        {
          heading: 'Understanding Culture Shock',
          content: 'Culture shock typically happens in stages:',
          type: 'list',
          items: [
            'Honeymoon phase - Everything is exciting and new (weeks 1-4)',
            'Frustration phase - Differences become irritating (months 2-3)',
            'Adjustment phase - You start adapting (months 4-6)',
            'Acceptance phase - You feel comfortable and integrated (6+ months)'
          ]
        },
        {
          heading: 'Common Challenges',
          content: 'International students often face these challenges:',
          type: 'list',
          items: [
            'Language barriers and communication difficulties',
            'Different teaching styles and academic expectations',
            'Homesickness and missing family/friends',
            'Food and dietary differences',
            'Social norms and making friends',
            'Weather and climate adjustment'
          ]
        },
        {
          heading: 'Strategies for Success',
          content: 'Practical tips to ease your transition:',
          type: 'tips',
          items: [
            'Join international student clubs and societies',
            'Find a study buddy or mentor from your home country',
            'Attend orientation events and campus activities',
            'Learn about local customs and cultural norms',
            'Stay connected with family (but don\'t overdo it)',
            'Maintain routines from home while embracing new ones',
            'Seek help from university counseling services when needed'
          ]
        },
        {
          heading: 'Making Friends',
          content: 'Building a social network is crucial for your well-being and success abroad.',
          type: 'text'
        }
      ]
    }
  },
  {
    id: '5',
    slug: 'ielts-preparation-complete-guide',
    title: 'IELTS Preparation: Complete Guide to Score 7+',
    excerpt: 'Master the IELTS exam with our comprehensive preparation guide covering all four sections and proven strategies.',
    category: 'Study Abroad Tips',
    categorySlug: 'study-abroad-tips',
    isEditorPick: true,
    views: 9680,
    author: {
      name: 'Emma Watson',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
      bio: 'Emma is an IELTS instructor with 8 years of experience. She has helped 500+ students achieve their target band scores.',
      role: 'IELTS Instructor'
    },
    publishedDate: '2026-02-01',
    readTime: '15 min read',
    featuredImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200',
    tags: ['IELTS', 'English Test', 'Test Prep', 'Language'],
    content: {
      introduction: 'IELTS (International English Language Testing System) is required by most universities worldwide. This guide provides comprehensive strategies to help you achieve your target score.',
      sections: [
        {
          heading: 'Understanding IELTS Format',
          content: 'The test has four sections:',
          type: 'list',
          items: [
            'Listening (30 minutes) - 40 questions',
            'Reading (60 minutes) - 40 questions',
            'Writing (60 minutes) - 2 tasks',
            'Speaking (11-14 minutes) - 3 parts'
          ]
        },
        {
          heading: 'Listening Section Strategies',
          content: 'Tips to excel in the listening test:',
          type: 'tips',
          items: [
            'Read questions before the audio starts',
            'Predict the type of answer expected',
            'Watch for paraphrasing - answers are rarely word-for-word',
            'Don\'t panic if you miss an answer - move on quickly',
            'Use the 10-minute transfer time wisely'
          ]
        },
        {
          heading: 'Reading Section Strategies',
          content: 'The reading section is time-pressured. Effective time management is crucial.',
          type: 'text'
        },
        {
          heading: 'Writing Task 2 Tips',
          content: 'Task 2 carries more weight (66% of writing score):',
          type: 'list',
          items: [
            'Spend 40 minutes on Task 2 (vs 20 on Task 1)',
            'Write at least 250 words (ideally 270-290)',
            'Use a clear structure: Introduction, Body Paragraphs, Conclusion',
            'Include topic-specific vocabulary',
            'Avoid memorized phrases - examiners can spot them'
          ]
        },
        {
          heading: 'Speaking Test Success',
          content: 'Build confidence and fluency:',
          type: 'tips',
          items: [
            'Practice speaking English daily, even to yourself',
            'Record yourself and identify areas for improvement',
            'Expand answers beyond yes/no - give reasons and examples',
            'Use discourse markers (however, moreover, in addition)',
            'Don\'t worry about accent - clarity matters more',
            'Stay calm and confident during the test'
          ]
        }
      ]
    }
  },
  {
    id: '6',
    slug: 'part-time-jobs-international-students',
    title: 'Part-Time Jobs for International Students: Ultimate Guide',
    excerpt: 'Learn about work rights, job opportunities, and how to balance work and studies as an international student.',
    category: 'Career Advice',
    categorySlug: 'career-advice',
    author: {
      name: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      bio: 'Alex is a career counselor specializing in international student employment. He has 12 years of experience in career services.',
      role: 'Career Counselor'
    },
    publishedDate: '2026-01-28',
    readTime: '9 min read',
    featuredImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200',
    tags: ['Jobs', 'Work', 'Part-time', 'Career'],
    content: {
      introduction: 'Many international students work part-time to support themselves financially and gain valuable work experience. This guide covers everything you need to know about working while studying abroad.',
      sections: [
        {
          heading: 'Work Rights by Country',
          content: 'Understanding your legal right to work is crucial:',
          type: 'list',
          items: [
            'UK: Up to 20 hours/week during term, unlimited during breaks',
            'USA: On-campus only in first year, CPT/OPT later',
            'Canada: Up to 20 hours/week during term, full-time during breaks',
            'Australia: Up to 48 hours per fortnight during term',
            'Germany: 120 full days or 240 half days per year'
          ]
        },
        {
          heading: 'Popular Student Jobs',
          content: 'Common part-time jobs for international students:',
          type: 'list',
          items: [
            'Campus jobs (library, admin, student ambassador)',
            'Retail and hospitality (shops, cafes, restaurants)',
            'Tutoring (your native language or subjects you excel in)',
            'Freelancing (writing, design, coding)',
            'Research assistant positions',
            'Delivery services (food, groceries)'
          ]
        },
        {
          heading: 'Balancing Work and Studies',
          content: 'Time management tips for working students:',
          type: 'tips',
          items: [
            'Prioritize academics - studies come first',
            'Create a weekly schedule blocking study and work hours',
            'Choose flexible jobs that understand student commitments',
            'Don\'t exceed legal work hour limits',
            'Communicate with employers about exam periods',
            'Use university career services for job search support'
          ]
        },
        {
          heading: 'Building Professional Experience',
          content: 'Make your part-time job count towards your career:',
          type: 'text'
        }
      ]
    }
  },
  {
    id: '7',
    slug: 'canada-study-permit-guide-2026',
    title: 'Canada Study Permit: Application Guide for 2026',
    excerpt: 'Everything you need to know about applying for a Canadian study permit, including new changes for 2026.',
    category: 'Visa Guides',
    categorySlug: 'visa-guides',
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      bio: 'Michael is a visa specialist who has helped over 1,000 students secure their US student visas. He previously worked at the US Embassy.',
      role: 'Visa Consultant'
    },
    publishedDate: '2026-01-18',
    readTime: '11 min read',
    featuredImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200',
    tags: ['Canada', 'Study Permit', 'Visa', 'Immigration'],
    content: {
      introduction: 'Canada is increasingly popular among international students due to its quality education, multicultural environment, and post-graduation work opportunities. This guide covers the study permit application process.',
      sections: [
        {
          heading: 'Study Permit Requirements',
          content: 'Basic requirements for a Canadian study permit:',
          type: 'list',
          items: [
            'Letter of acceptance from a Designated Learning Institution (DLI)',
            'Proof of financial support (CAD 10,000+ per year)',
            'No criminal record',
            'Good health (medical exam if required)',
            'Intent to leave Canada after studies'
          ]
        },
        {
          heading: 'Application Process',
          content: 'Step-by-step application guide:',
          type: 'list',
          items: [
            'Get acceptance letter from DLI',
            'Gather required documents',
            'Apply online through IRCC portal',
            'Pay application fee (CAD 150)',
            'Submit biometrics (CAD 85)',
            'Await decision (processing time varies by country)',
            'Receive Port of Entry Letter of Introduction if approved'
          ]
        },
        {
          heading: 'Financial Proof Requirements',
          content: 'You must demonstrate sufficient funds for:',
          type: 'list',
          items: [
            'First year tuition fees',
            'CAD 10,000 for living expenses (or CAD 11,000 in Quebec)',
            'Additional CAD 4,000 for spouse and CAD 3,000 per child if applicable',
            'Return transportation costs'
          ]
        }
      ]
    }
  },
  {
    id: '8',
    slug: 'masters-vs-phd-which-choose',
    title: 'Master\'s vs PhD: Which Should You Choose?',
    excerpt: 'Understand the key differences between Master\'s and PhD programs to make the right decision for your academic career.',
    category: 'Study Abroad Tips',
    categorySlug: 'study-abroad-tips',
    author: {
      name: 'Dr. Lisa Anderson',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      bio: 'Dr. Anderson holds a PhD in Education and has advised hundreds of students on graduate program selection.',
      role: 'Academic Advisor'
    },
    publishedDate: '2026-01-22',
    readTime: '10 min read',
    featuredImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200',
    tags: ['Graduate Studies', 'Masters', 'PhD', 'Career Planning'],
    content: {
      introduction: 'Choosing between a Master\'s and PhD is a significant decision that impacts your career trajectory. This guide helps you understand the differences and make an informed choice.',
      sections: [
        {
          heading: 'Master\'s Degree Overview',
          content: 'Key characteristics of Master\'s programs:',
          type: 'list',
          items: [
            'Duration: 1-2 years typically',
            'Focus: Specialized knowledge in a specific field',
            'Outcome: Career advancement or prerequisite for PhD',
            'Research: May include thesis or capstone project',
            'Funding: Often self-funded, some scholarships available'
          ]
        },
        {
          heading: 'PhD Degree Overview',
          content: 'Key characteristics of PhD programs:',
          type: 'list',
          items: [
            'Duration: 4-6 years typically',
            'Focus: Original research and contribution to knowledge',
            'Outcome: Academic career or high-level research positions',
            'Research: Dissertation required with original findings',
            'Funding: Often funded through assistantships or fellowships'
          ]
        },
        {
          heading: 'Which is Right for You?',
          content: 'Consider these factors when deciding:',
          type: 'tips',
          items: [
            'Career goals - Industry positions often need Master\'s; academic careers need PhD',
            'Time commitment - Can you dedicate 4-6 years to a PhD?',
            'Research interest - Do you have a burning research question?',
            'Financial situation - PhD programs often offer better funding',
            'Career trajectory - Some fields value PhD, others value experience'
          ]
        }
      ]
    }
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter(post => post.categorySlug === categorySlug);
}

export function getRelatedPosts(currentPostId: string, limit: number = 3): BlogPost[] {
  const currentPost = blogPosts.find(post => post.id === currentPostId);
  if (!currentPost) return [];
  
  return blogPosts
    .filter(post => 
      post.id !== currentPostId && 
      post.categorySlug === currentPost.categorySlug
    )
    .slice(0, limit);
}

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find(cat => cat.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.isFeatured);
}

export function getEditorPicks(limit: number = 3): BlogPost[] {
  return blogPosts.filter(post => post.isEditorPick).slice(0, limit);
}

export function getTrendingPosts(limit: number = 5): BlogPost[] {
  return blogPosts
    .filter(post => post.views && post.views > 0)
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, limit);
}