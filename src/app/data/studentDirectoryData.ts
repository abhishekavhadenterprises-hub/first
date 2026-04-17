export interface StudentProfile {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  coverImage: string;
  bio: string;
  location: {
    city: string;
    country: string;
    flag: string;
  };
  currentStatus: 'Researching' | 'Applied' | 'Admitted' | 'Enrolled' | 'Alumni';
  studyDestinations: {
    country: string;
    flag: string;
  }[];
  academicInfo: {
    field: string;
    level: 'Undergraduate' | 'Graduate' | 'PhD' | 'Postdoctoral';
    targetYear: string;
  };
  universities: {
    name: string;
    status: 'Interested' | 'Applied' | 'Admitted' | 'Enrolled' | 'Graduated';
  }[];
  languages: {
    name: string;
    proficiency: 'Native' | 'Fluent' | 'Advanced' | 'Intermediate' | 'Basic';
  }[];
  interests: string[];
  testScores?: {
    type: 'IELTS' | 'TOEFL' | 'GRE' | 'GMAT' | 'SAT';
    score: string;
  }[];
  memberSince: string;
  connections: number;
  posts: number;
  isVerified: boolean;
  isOpenToConnect: boolean;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export const mockStudents: StudentProfile[] = [
  {
    id: '1',
    username: 'sarah_uk_bound',
    firstName: 'Sarah',
    lastName: 'Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    coverImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200',
    bio: 'Aspiring computer scientist passionate about AI and machine learning. Currently preparing for graduate studies in the UK. Always happy to connect with fellow students!',
    location: {
      city: 'Singapore',
      country: 'Singapore',
      flag: '🇸🇬'
    },
    currentStatus: 'Applied',
    studyDestinations: [
      { country: 'United Kingdom', flag: '🇬🇧' },
      { country: 'United States', flag: '🇺🇸' }
    ],
    academicInfo: {
      field: 'Computer Science',
      level: 'Graduate',
      targetYear: '2026'
    },
    universities: [
      { name: 'Imperial College London', status: 'Applied' },
      { name: 'University of Cambridge', status: 'Applied' },
      { name: 'Stanford University', status: 'Interested' }
    ],
    languages: [
      { name: 'English', proficiency: 'Fluent' },
      { name: 'Mandarin', proficiency: 'Native' },
      { name: 'Spanish', proficiency: 'Basic' }
    ],
    interests: ['Machine Learning', 'Data Science', 'Photography', 'Travel', 'Coding'],
    testScores: [
      { type: 'IELTS', score: '8.0' },
      { type: 'GRE', score: '330' }
    ],
    memberSince: '2025-08-15',
    connections: 247,
    posts: 34,
    isVerified: true,
    isOpenToConnect: true,
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: '2',
    username: 'raj_med_student',
    firstName: 'Raj',
    lastName: 'Patel',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200',
    bio: 'Medical student interested in neuroscience research. Looking to pursue MD-PhD in the US. Love hiking and playing guitar in my free time.',
    location: {
      city: 'Mumbai',
      country: 'India',
      flag: '🇮🇳'
    },
    currentStatus: 'Researching',
    studyDestinations: [
      { country: 'United States', flag: '🇺🇸' },
      { country: 'Canada', flag: '🇨🇦' }
    ],
    academicInfo: {
      field: 'Medicine',
      level: 'PhD',
      targetYear: '2027'
    },
    universities: [
      { name: 'Johns Hopkins University', status: 'Interested' },
      { name: 'Harvard Medical School', status: 'Interested' },
      { name: 'University of Toronto', status: 'Interested' }
    ],
    languages: [
      { name: 'English', proficiency: 'Fluent' },
      { name: 'Hindi', proficiency: 'Native' },
      { name: 'Gujarati', proficiency: 'Native' }
    ],
    interests: ['Neuroscience', 'Research', 'Hiking', 'Guitar', 'Meditation'],
    testScores: [
      { type: 'TOEFL', score: '115' }
    ],
    memberSince: '2025-11-20',
    connections: 156,
    posts: 18,
    isVerified: true,
    isOpenToConnect: true
  },
  {
    id: '3',
    username: 'emma_business',
    firstName: 'Emma',
    lastName: 'Johnson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200',
    bio: 'MBA candidate with 3 years of consulting experience. Passionate about entrepreneurship and sustainable business practices.',
    location: {
      city: 'Toronto',
      country: 'Canada',
      flag: '🇨🇦'
    },
    currentStatus: 'Admitted',
    studyDestinations: [
      { country: 'United Kingdom', flag: '🇬🇧' },
      { country: 'France', flag: '🇫🇷' }
    ],
    academicInfo: {
      field: 'Business Administration',
      level: 'Graduate',
      targetYear: '2026'
    },
    universities: [
      { name: 'London Business School', status: 'Admitted' },
      { name: 'INSEAD', status: 'Admitted' },
      { name: 'Oxford Saïd Business School', status: 'Applied' }
    ],
    languages: [
      { name: 'English', proficiency: 'Native' },
      { name: 'French', proficiency: 'Intermediate' }
    ],
    interests: ['Entrepreneurship', 'Sustainability', 'Consulting', 'Yoga', 'Reading'],
    testScores: [
      { type: 'GMAT', score: '740' }
    ],
    memberSince: '2025-06-10',
    connections: 389,
    posts: 52,
    isVerified: true,
    isOpenToConnect: true,
    socialLinks: {
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: '4',
    username: 'carlos_engineer',
    firstName: 'Carlos',
    lastName: 'Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    coverImage: 'https://images.unsplash.com/photo-1581093458791-9d42e85e9ddf?w=1200',
    bio: 'Mechanical engineering graduate seeking masters in renewable energy. Passionate about climate solutions and sustainable technology.',
    location: {
      city: 'Barcelona',
      country: 'Spain',
      flag: '🇪🇸'
    },
    currentStatus: 'Applied',
    studyDestinations: [
      { country: 'Germany', flag: '🇩🇪' },
      { country: 'Netherlands', flag: '🇳🇱' }
    ],
    academicInfo: {
      field: 'Renewable Energy Engineering',
      level: 'Graduate',
      targetYear: '2026'
    },
    universities: [
      { name: 'TU Munich', status: 'Applied' },
      { name: 'Delft University of Technology', status: 'Applied' },
      { name: 'ETH Zurich', status: 'Interested' }
    ],
    languages: [
      { name: 'Spanish', proficiency: 'Native' },
      { name: 'English', proficiency: 'Fluent' },
      { name: 'German', proficiency: 'Intermediate' },
      { name: 'Catalan', proficiency: 'Native' }
    ],
    interests: ['Renewable Energy', 'Climate Tech', 'Football', 'Surfing', 'Innovation'],
    testScores: [
      { type: 'IELTS', score: '7.5' }
    ],
    memberSince: '2025-09-05',
    connections: 198,
    posts: 27,
    isVerified: true,
    isOpenToConnect: true
  },
  {
    id: '5',
    username: 'yuki_designer',
    firstName: 'Yuki',
    lastName: 'Tanaka',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    coverImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200',
    bio: 'UI/UX designer exploring graduate programs in interaction design. Love creating beautiful, user-centered experiences.',
    location: {
      city: 'Tokyo',
      country: 'Japan',
      flag: '🇯🇵'
    },
    currentStatus: 'Researching',
    studyDestinations: [
      { country: 'United States', flag: '🇺🇸' },
      { country: 'United Kingdom', flag: '🇬🇧' }
    ],
    academicInfo: {
      field: 'Interaction Design',
      level: 'Graduate',
      targetYear: '2027'
    },
    universities: [
      { name: 'MIT Media Lab', status: 'Interested' },
      { name: 'Royal College of Art', status: 'Interested' },
      { name: 'Carnegie Mellon University', status: 'Interested' }
    ],
    languages: [
      { name: 'Japanese', proficiency: 'Native' },
      { name: 'English', proficiency: 'Advanced' }
    ],
    interests: ['UI/UX Design', 'Typography', 'Illustration', 'Anime', 'Gaming'],
    testScores: [
      { type: 'TOEFL', score: '108' }
    ],
    memberSince: '2026-01-12',
    connections: 134,
    posts: 41,
    isVerified: false,
    isOpenToConnect: true,
    socialLinks: {
      instagram: 'https://instagram.com'
    }
  },
  {
    id: '6',
    username: 'ahmed_economics',
    firstName: 'Ahmed',
    lastName: 'Hassan',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200',
    bio: 'Economics researcher interested in development economics and policy. Currently enrolled at LSE.',
    location: {
      city: 'Cairo',
      country: 'Egypt',
      flag: '🇪🇬'
    },
    currentStatus: 'Enrolled',
    studyDestinations: [
      { country: 'United Kingdom', flag: '🇬🇧' }
    ],
    academicInfo: {
      field: 'Economics',
      level: 'PhD',
      targetYear: '2026'
    },
    universities: [
      { name: 'London School of Economics', status: 'Enrolled' }
    ],
    languages: [
      { name: 'Arabic', proficiency: 'Native' },
      { name: 'English', proficiency: 'Fluent' },
      { name: 'French', proficiency: 'Intermediate' }
    ],
    interests: ['Development Economics', 'Policy Research', 'Chess', 'History', 'Writing'],
    testScores: [
      { type: 'IELTS', score: '8.5' },
      { type: 'GRE', score: '335' }
    ],
    memberSince: '2025-03-22',
    connections: 412,
    posts: 68,
    isVerified: true,
    isOpenToConnect: false
  },
  {
    id: '7',
    username: 'maria_bio',
    firstName: 'Maria',
    lastName: 'Silva',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    coverImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200',
    bio: 'Biotechnology graduate passionate about genetic research and personalized medicine. Seeking PhD opportunities.',
    location: {
      city: 'São Paulo',
      country: 'Brazil',
      flag: '🇧🇷'
    },
    currentStatus: 'Applied',
    studyDestinations: [
      { country: 'United States', flag: '🇺🇸' },
      { country: 'Switzerland', flag: '🇨🇭' }
    ],
    academicInfo: {
      field: 'Biotechnology',
      level: 'PhD',
      targetYear: '2026'
    },
    universities: [
      { name: 'MIT', status: 'Applied' },
      { name: 'ETH Zurich', status: 'Applied' },
      { name: 'UC Berkeley', status: 'Interested' }
    ],
    languages: [
      { name: 'Portuguese', proficiency: 'Native' },
      { name: 'English', proficiency: 'Fluent' },
      { name: 'Spanish', proficiency: 'Advanced' }
    ],
    interests: ['Genetics', 'Biotech', 'Running', 'Cooking', 'Salsa Dancing'],
    testScores: [
      { type: 'TOEFL', score: '112' },
      { type: 'GRE', score: '328' }
    ],
    memberSince: '2025-07-18',
    connections: 223,
    posts: 39,
    isVerified: true,
    isOpenToConnect: true
  },
  {
    id: '8',
    username: 'david_law',
    firstName: 'David',
    lastName: 'Kim',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400',
    coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200',
    bio: 'International law enthusiast with focus on human rights. Alumni of Oxford University, now working at the UN.',
    location: {
      city: 'Seoul',
      country: 'South Korea',
      flag: '🇰🇷'
    },
    currentStatus: 'Alumni',
    studyDestinations: [
      { country: 'United Kingdom', flag: '🇬🇧' }
    ],
    academicInfo: {
      field: 'International Law',
      level: 'Graduate',
      targetYear: '2024'
    },
    universities: [
      { name: 'University of Oxford', status: 'Graduated' }
    ],
    languages: [
      { name: 'Korean', proficiency: 'Native' },
      { name: 'English', proficiency: 'Fluent' },
      { name: 'French', proficiency: 'Advanced' }
    ],
    interests: ['Human Rights', 'International Law', 'Basketball', 'K-pop', 'Travel'],
    memberSince: '2023-09-01',
    connections: 567,
    posts: 94,
    isVerified: true,
    isOpenToConnect: true,
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  }
];

export function getStudentByUsername(username: string): StudentProfile | undefined {
  return mockStudents.find(student => student.username === username);
}

export function filterStudents(filters: {
  searchQuery?: string;
  destination?: string;
  field?: string;
  level?: string;
  status?: string;
}): StudentProfile[] {
  return mockStudents.filter(student => {
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const matchesSearch = 
        student.firstName.toLowerCase().includes(query) ||
        student.lastName.toLowerCase().includes(query) ||
        student.username.toLowerCase().includes(query) ||
        student.bio.toLowerCase().includes(query) ||
        student.academicInfo.field.toLowerCase().includes(query) ||
        student.interests.some(i => i.toLowerCase().includes(query));
      
      if (!matchesSearch) return false;
    }

    if (filters.destination && filters.destination !== 'all') {
      const matchesDestination = student.studyDestinations.some(
        d => d.country === filters.destination
      );
      if (!matchesDestination) return false;
    }

    if (filters.field && filters.field !== 'all') {
      if (!student.academicInfo.field.includes(filters.field)) return false;
    }

    if (filters.level && filters.level !== 'all') {
      if (student.academicInfo.level !== filters.level) return false;
    }

    if (filters.status && filters.status !== 'all') {
      if (student.currentStatus !== filters.status) return false;
    }

    return true;
  });
}
