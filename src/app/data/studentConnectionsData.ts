export interface ConnectionStudent {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  avatar: string;
  coverImage: string;
  bio: string;
  location: {
    city: string;
    country: string;
    flag: string;
  };
  studyDestination: string;
  field: string;
  level: string;
  targetYear: string;
  isOnline: boolean;
  lastActive: string;
  connectionDate?: string;
  mutualConnections?: number;
  matchScore?: number;
  matchReason?: string;
}

export interface ConnectionRequest {
  id: string;
  student: ConnectionStudent;
  requestDate: string;
  message?: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  student: ConnectionStudent;
  messages: Message[];
  unreadCount: number;
  lastMessage: string;
  lastMessageTime: string;
}

// Mock Connected Students
export const mockConnections: ConnectionStudent[] = [
  {
    id: 'conn1',
    firstName: 'Emma',
    lastName: 'Watson',
    username: 'emmaw',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    coverImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
    bio: 'Aspiring software engineer passionate about AI and machine learning',
    location: { city: 'London', country: 'United Kingdom', flag: '🇬🇧' },
    studyDestination: '🇺🇸 USA',
    field: 'Computer Science',
    level: 'Graduate',
    targetYear: '2026',
    isOnline: true,
    lastActive: 'Online now',
    connectionDate: '2024-01-15',
    mutualConnections: 5
  },
  {
    id: 'conn2',
    firstName: 'Michael',
    lastName: 'Chen',
    username: 'michaelc',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    coverImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
    bio: 'Business student exploring MBA opportunities in Europe',
    location: { city: 'Singapore', country: 'Singapore', flag: '🇸🇬' },
    studyDestination: '🇬🇧 UK',
    field: 'Business Administration',
    level: 'Graduate',
    targetYear: '2026',
    isOnline: false,
    lastActive: '2 hours ago',
    connectionDate: '2024-02-20',
    mutualConnections: 3
  },
  {
    id: 'conn3',
    firstName: 'Sarah',
    lastName: 'Johnson',
    username: 'sarahj',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    coverImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
    bio: 'Medical student interested in research opportunities abroad',
    location: { city: 'Toronto', country: 'Canada', flag: '🇨🇦' },
    studyDestination: '🇺🇸 USA',
    field: 'Medicine',
    level: 'PhD',
    targetYear: '2026',
    isOnline: true,
    lastActive: 'Online now',
    connectionDate: '2024-01-10',
    mutualConnections: 8
  },
  {
    id: 'conn4',
    firstName: 'David',
    lastName: 'Kumar',
    username: 'davidk',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    coverImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
    bio: 'Engineering student passionate about sustainable technology',
    location: { city: 'Mumbai', country: 'India', flag: '🇮🇳' },
    studyDestination: '🇩🇪 Germany',
    field: 'Mechanical Engineering',
    level: 'Graduate',
    targetYear: '2026',
    isOnline: false,
    lastActive: '1 day ago',
    connectionDate: '2024-03-01',
    mutualConnections: 4
  },
  {
    id: 'conn5',
    firstName: 'Lisa',
    lastName: 'Anderson',
    username: 'lisaa',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    coverImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
    bio: 'Psychology major exploring neuroscience research programs',
    location: { city: 'Sydney', country: 'Australia', flag: '🇦🇺' },
    studyDestination: '🇬🇧 UK',
    field: 'Psychology',
    level: 'PhD',
    targetYear: '2026',
    isOnline: true,
    lastActive: 'Online now',
    connectionDate: '2024-02-05',
    mutualConnections: 6
  },
  {
    id: 'conn6',
    firstName: 'Ahmed',
    lastName: 'Hassan',
    username: 'ahmedh',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    coverImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
    bio: 'Architecture student interested in sustainable urban design',
    location: { city: 'Dubai', country: 'UAE', flag: '🇦🇪' },
    studyDestination: '🇳🇱 Netherlands',
    field: 'Architecture',
    level: 'Graduate',
    targetYear: '2026',
    isOnline: false,
    lastActive: '3 hours ago',
    connectionDate: '2024-01-25',
    mutualConnections: 2
  }
];

// Mock Received Connection Requests
export const mockReceivedRequests: ConnectionRequest[] = [
  {
    id: 'req1',
    student: {
      id: 'req_student1',
      firstName: 'Jessica',
      lastName: 'Martinez',
      username: 'jessicam',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
      coverImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      bio: 'Data science enthusiast looking to connect with fellow students pursuing AI programs',
      location: { city: 'Barcelona', country: 'Spain', flag: '🇪🇸' },
      studyDestination: '🇺🇸 USA',
      field: 'Data Science',
      level: 'Graduate',
      targetYear: '2026',
      isOnline: true,
      lastActive: 'Online now',
      mutualConnections: 4
    },
    requestDate: '2024-03-10',
    message: "Hi! I saw we're both interested in studying CS in the USA. Would love to connect!"
  },
  {
    id: 'req3',
    student: {
      id: 'req_student3',
      firstName: 'Yuki',
      lastName: 'Tanaka',
      username: 'yukit',
      avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400',
      coverImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      bio: 'International relations student passionate about global diplomacy',
      location: { city: 'Tokyo', country: 'Japan', flag: '🇯🇵' },
      studyDestination: '🇬🇧 UK',
      field: 'International Relations',
      level: 'Graduate',
      targetYear: '2026',
      isOnline: false,
      lastActive: '5 hours ago',
      mutualConnections: 1
    },
    requestDate: '2024-03-13'
  }
];

// Mock Sent Connection Requests
export const mockSentRequests: ConnectionRequest[] = [
  {
    id: 'sent1',
    student: {
      id: 'sent_student1',
      firstName: 'Carlos',
      lastName: 'Rodriguez',
      username: 'carlosr',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
      coverImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
      bio: 'Economics student exploring graduate programs in Europe',
      location: { city: 'Madrid', country: 'Spain', flag: '🇪🇸' },
      studyDestination: '🇬🇧 UK',
      field: 'Economics',
      level: 'Graduate',
      targetYear: '2026',
      isOnline: false,
      lastActive: '2 days ago',
      mutualConnections: 3
    },
    requestDate: '2024-03-08'
  },
  {
    id: 'sent2',
    student: {
      id: 'sent_student2',
      firstName: 'Nina',
      lastName: 'Petrova',
      username: 'ninap',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
      coverImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      bio: 'Environmental science researcher looking for PhD opportunities',
      location: { city: 'Moscow', country: 'Russia', flag: '🇷🇺' },
      studyDestination: '🇨🇦 Canada',
      field: 'Environmental Science',
      level: 'PhD',
      targetYear: '2026',
      isOnline: false,
      lastActive: '1 week ago',
      mutualConnections: 0
    },
    requestDate: '2024-03-05'
  }
];

// Mock Suggested Connections
export const mockSuggestions: ConnectionStudent[] = [
  {
    id: 'sug1',
    firstName: 'Oliver',
    lastName: 'Thompson',
    username: 'olivert',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400',
    coverImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
    bio: 'Computer science student specializing in cybersecurity',
    location: { city: 'Melbourne', country: 'Australia', flag: '🇦🇺' },
    studyDestination: '🇺🇸 USA',
    field: 'Computer Science',
    level: 'Graduate',
    targetYear: '2026',
    isOnline: true,
    lastActive: 'Online now',
    mutualConnections: 7,
    matchScore: 92,
    matchReason: 'Both interested in USA • Computer Science • Fall 2026'
  },
  {
    id: 'sug2',
    firstName: 'Sophie',
    lastName: 'Laurent',
    username: 'sophiel',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
    coverImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
    bio: 'Fashion design student exploring international design schools',
    location: { city: 'Paris', country: 'France', flag: '🇫🇷' },
    studyDestination: '🇮🇹 Italy',
    field: 'Fashion Design',
    level: 'Graduate',
    targetYear: '2026',
    isOnline: false,
    lastActive: '30 minutes ago',
    mutualConnections: 5,
    matchScore: 78,
    matchReason: 'Both interested in Creative Arts • Europe • Fall 2026'
  },
  {
    id: 'sug3',
    firstName: 'Marcus',
    lastName: 'Williams',
    username: 'marcusw',
    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400',
    coverImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
    bio: 'Biology student researching marine conservation programs',
    location: { city: 'Cape Town', country: 'South Africa', flag: '🇿🇦' },
    studyDestination: '🇦🇺 Australia',
    field: 'Marine Biology',
    level: 'PhD',
    targetYear: '2026',
    isOnline: false,
    lastActive: '6 hours ago',
    mutualConnections: 3,
    matchScore: 85,
    matchReason: 'Both interested in Research • STEM • Fall 2026'
  },
  {
    id: 'sug4',
    firstName: 'Priya',
    lastName: 'Sharma',
    username: 'priyas',
    avatar: 'https://images.unsplash.com/photo-1502767089025-6572583495f9?w=400',
    coverImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
    bio: 'MBA candidate interested in tech entrepreneurship',
    location: { city: 'Bangalore', country: 'India', flag: '🇮🇳' },
    studyDestination: '🇺🇸 USA',
    field: 'Business Administration',
    level: 'Graduate',
    targetYear: '2026',
    isOnline: true,
    lastActive: 'Online now',
    mutualConnections: 6,
    matchScore: 88,
    matchReason: 'Both interested in USA • Business • Fall 2026'
  },
  {
    id: 'sug5',
    firstName: 'Hans',
    lastName: 'Müller',
    username: 'hansm',
    avatar: 'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=400',
    coverImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
    bio: 'Mechanical engineering student focused on automotive innovation',
    location: { city: 'Munich', country: 'Germany', flag: '🇩🇪' },
    studyDestination: '🇩🇪 Germany',
    field: 'Mechanical Engineering',
    level: 'Graduate',
    targetYear: '2026',
    isOnline: false,
    lastActive: '1 day ago',
    mutualConnections: 4,
    matchScore: 81,
    matchReason: 'Both interested in Engineering • Germany • Fall 2026'
  }
];

// Mock Conversations
export const mockConversations: Conversation[] = [
  {
    id: 'conv1',
    student: mockConnections[0], // Emma Watson
    messages: [
      {
        id: 'msg1',
        senderId: 'conn1',
        receiverId: 'current_user',
        content: "Hey! I saw you're also applying to MIT. How's your application going?",
        timestamp: '2024-03-14T10:30:00',
        isRead: true
      },
      {
        id: 'msg2',
        senderId: 'current_user',
        receiverId: 'conn1',
        content: "Hi Emma! It's going well, just finishing up my SOP. How about you?",
        timestamp: '2024-03-14T11:15:00',
        isRead: true
      },
      {
        id: 'msg3',
        senderId: 'conn1',
        receiverId: 'current_user',
        content: "Same here! Would you be interested in reviewing each other's statements?",
        timestamp: '2024-03-14T14:20:00',
        isRead: false
      }
    ],
    unreadCount: 1,
    lastMessage: "Same here! Would you be interested in reviewing each other's statements?",
    lastMessageTime: '2 hours ago'
  },
  {
    id: 'conv2',
    student: mockConnections[2], // Sarah Johnson
    messages: [
      {
        id: 'msg4',
        senderId: 'current_user',
        receiverId: 'conn3',
        content: "Thanks for connecting! I noticed you're in medicine too.",
        timestamp: '2024-03-13T09:00:00',
        isRead: true
      },
      {
        id: 'msg5',
        senderId: 'conn3',
        receiverId: 'current_user',
        content: 'Absolutely! Are you looking at research programs or clinical programs?',
        timestamp: '2024-03-13T10:30:00',
        isRead: true
      }
    ],
    unreadCount: 0,
    lastMessage: 'Absolutely! Are you looking at research programs or clinical programs?',
    lastMessageTime: '1 day ago'
  },
  {
    id: 'conv3',
    student: mockConnections[1], // Michael Chen
    messages: [
      {
        id: 'msg6',
        senderId: 'conn2',
        receiverId: 'current_user',
        content: 'Hey! Just got my GMAT results back - 720! So relieved 😅',
        timestamp: '2024-03-12T16:45:00',
        isRead: false
      }
    ],
    unreadCount: 1,
    lastMessage: 'Hey! Just got my GMAT results back - 720! So relieved 😅',
    lastMessageTime: '2 days ago'
  }
];