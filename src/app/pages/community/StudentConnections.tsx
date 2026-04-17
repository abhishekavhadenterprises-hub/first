import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { StandardButton } from '@/app/components/ui/standard-button';
import { showToast, ToastContainer } from '@/app/components/ui/toast';
import cardBanner from 'figma:asset/a5adf48d464412dc45ed3144f2058d9d14c77a80.png';
import {
  Users,
  UserPlus,
  MessageCircle,
  Search,
  Filter,
  MapPin,
  BookOpen,
  GraduationCap,
  Globe,
  Check,
  X,
  MoreVertical,
  Send,
  Smile,
  Paperclip,
  CheckCheck,
  TrendingUp,
  RefreshCw,
  Download,
  Settings
} from 'lucide-react';
import {
  mockConnections,
  mockReceivedRequests,
  mockSentRequests,
  mockSuggestions,
  mockConversations,
  ConnectionStudent,
  ConnectionRequest,
  Conversation,
  Message
} from '@/app/data/studentConnectionsData';

type TabType = 'network' | 'requests' | 'suggestions' | 'messages';

// Array of different banner images for variety
const bannerImages = [
  'https://images.unsplash.com/photo-1655543274920-06de452d0d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NzA3MDE1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1674653760708-f521366e5cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWJyYXJ5JTIwYm9va3N8ZW58MXx8fHwxNzcwNjY4OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzA3Mjk0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1706402716204-494c637ab257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2FwJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzcwNzI5NDU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1717185358815-870a1f963465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudCUyMGRpdmVyc2V8ZW58MXx8fHwxNzcwNzI5NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1646400592074-85592294304e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcwNzE0NzIxfDA&ixlib=rb-4.1.0&q=80&w=1080'
];

// Helper function to get a banner image based on index
const getBannerImage = (index: number): string => {
  return bannerImages[index % bannerImages.length];
};

export default function StudentConnections() {
  const [activeTab, setActiveTab] = useState<TabType>(() => {
    const savedTab = localStorage.getItem('studentConnectionsActiveTab');
    return (savedTab as TabType) || 'network';
  });
  const [connections, setConnections] = useState<ConnectionStudent[]>([]);
  const [receivedRequests, setReceivedRequests] = useState<ConnectionRequest[]>([]);
  const [sentRequests, setSentRequests] = useState<ConnectionRequest[]>([]);
  const [suggestions, setSuggestions] = useState<ConnectionStudent[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messageInput, setMessageInput] = useState('');
  
  // Refs for GSAP animations
  const heroRef = useRef<HTMLDivElement>(null);
  const networkNodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);

  // Save active tab to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('studentConnectionsActiveTab', activeTab);
  }, [activeTab]);

  // Load data from localStorage or use mock data
  useEffect(() => {
    const savedConnections = localStorage.getItem('studentConnections');
    const savedReceivedRequests = localStorage.getItem('receivedRequests');
    const savedSentRequests = localStorage.getItem('sentRequests');
    const savedSuggestions = localStorage.getItem('suggestions');
    const savedConversations = localStorage.getItem('conversations');

    setConnections(savedConnections ? JSON.parse(savedConnections) : mockConnections);
    setReceivedRequests(savedReceivedRequests ? JSON.parse(savedReceivedRequests) : mockReceivedRequests);
    setSentRequests(savedSentRequests ? JSON.parse(savedSentRequests) : mockSentRequests);
    setSuggestions(savedSuggestions ? JSON.parse(savedSuggestions) : mockSuggestions);
    setConversations(savedConversations ? JSON.parse(savedConversations) : mockConversations);
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('studentConnections', JSON.stringify(connections));
  }, [connections]);

  useEffect(() => {
    localStorage.setItem('receivedRequests', JSON.stringify(receivedRequests));
  }, [receivedRequests]);

  useEffect(() => {
    localStorage.setItem('sentRequests', JSON.stringify(sentRequests));
  }, [sentRequests]);

  useEffect(() => {
    localStorage.setItem('suggestions', JSON.stringify(suggestions));
  }, [suggestions]);

  useEffect(() => {
    localStorage.setItem('conversations', JSON.stringify(conversations));
  }, [conversations]);

  // GSAP Banner Animation
  useEffect(() => {
    if (heroRef.current && networkNodesRef.current.length > 0) {
      gsap.registerPlugin(ScrollTrigger);
      
      // Animate network nodes floating
      networkNodesRef.current.forEach((node, index) => {
        if (node) {
          gsap.to(node, {
            y: Math.random() * 30 - 15,
            x: Math.random() * 20 - 10,
            duration: 2 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.1
          });
        }
      });

      // Parallax effect on scroll
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: 100,
        opacity: 0.8,
        ease: "none"
      });

      // Stats counter animation
      if (statsRef.current) {
        gsap.from(statsRef.current.querySelectorAll('.stat-number'), {
          textContent: 0,
          duration: 2,
          ease: "power1.inOut",
          snap: { textContent: 1 },
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            once: true
          }
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [connections.length, receivedRequests.length, suggestions.length]);

  // Accept connection request
  const handleAcceptRequest = (request: ConnectionRequest) => {
    setConnections([...connections, { ...request.student, connectionDate: new Date().toISOString() }]);
    setReceivedRequests(receivedRequests.filter(r => r.id !== request.id));
    
    // Add to conversations
    const newConversation: Conversation = {
      id: `conv_${Date.now()}`,
      student: request.student,
      messages: [],
      unreadCount: 0,
      lastMessage: '',
      lastMessageTime: 'Just now'
    };
    setConversations([...conversations, newConversation]);
    
    showToast(`You are now connected with ${request.student.firstName}!`, 'success');
  };

  // Decline connection request
  const handleDeclineRequest = (request: ConnectionRequest) => {
    setReceivedRequests(receivedRequests.filter(r => r.id !== request.id));
    showToast('Request declined', 'info');
  };

  // Cancel sent request
  const handleCancelRequest = (request: ConnectionRequest) => {
    setSentRequests(sentRequests.filter(r => r.id !== request.id));
    showToast('Request cancelled', 'info');
  };

  // Send connection request
  const handleConnect = (student: ConnectionStudent) => {
    const newRequest: ConnectionRequest = {
      id: `sent_${Date.now()}`,
      student,
      requestDate: new Date().toISOString()
    };
    setSentRequests([...sentRequests, newRequest]);
    setSuggestions(suggestions.filter(s => s.id !== student.id));
    showToast(`Connection request sent to ${student.firstName}!`, 'success');
  };

  // Remove connection
  const handleRemoveConnection = (studentId: string) => {
    const connection = connections.find(c => c.id === studentId);
    setConnections(connections.filter(c => c.id !== studentId));
    showToast(`Removed ${connection?.firstName} from your connections`, 'info');
  };

  // View profile handler
  const handleViewProfile = (studentId: string) => {
    // Navigate to student profile page
    window.location.href = `/community/profile/${studentId}`;
  };

  // Open message handler
  const handleOpenMessage = (student: ConnectionStudent) => {
    // Check if conversation already exists
    let conversation = conversations.find(conv => conv.student.id === student.id);
    
    // If no conversation exists, create one
    if (!conversation) {
      conversation = {
        id: `conv_${Date.now()}`,
        student: student,
        messages: [],
        unreadCount: 0,
        lastMessage: '',
        lastMessageTime: 'Just now'
      };
      setConversations([...conversations, conversation]);
    }
    
    // Switch to messages tab and select the conversation
    setActiveTab('messages');
    setSelectedConversation(conversation);
    showToast(`Opening chat with ${student.firstName}...`, 'success');
  };

  // Send message
  const handleSendMessage = () => {
    if (!messageInput.trim() || !selectedConversation) return;

    const newMessage: Message = {
      id: `msg_${Date.now()}`,
      senderId: 'current_user',
      receiverId: selectedConversation.student.id,
      content: messageInput,
      timestamp: new Date().toISOString(),
      isRead: false
    };

    const updatedConversations = conversations.map(conv => {
      if (conv.id === selectedConversation.id) {
        return {
          ...conv,
          messages: [...conv.messages, newMessage],
          lastMessage: messageInput,
          lastMessageTime: 'Just now'
        };
      }
      return conv;
    });

    setConversations(updatedConversations);
    setSelectedConversation({
      ...selectedConversation,
      messages: [...selectedConversation.messages, newMessage],
      lastMessage: messageInput,
      lastMessageTime: 'Just now'
    });
    setMessageInput('');
    showToast('Message sent!', 'success');
  };

  // Filter connections
  const filteredConnections = connections.filter(conn =>
    conn.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conn.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conn.field.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conn.location.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalUnread = conversations.reduce((sum, conv) => sum + conv.unreadCount, 0);

  return (
    <>
      <Navigation />

      {/* Animated Network Banner Hero */}
      <section ref={heroRef} className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#4B6E48]/10 via-white to-[#4B6E48]/5">
        {/* Animated Background Network */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Network Nodes */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              ref={el => networkNodesRef.current[i] = el}
              className="absolute w-3 h-3 bg-[#4B6E48] rounded-full opacity-20"
              style={{
                left: `${10 + (i % 4) * 25}%`,
                top: `${20 + Math.floor(i / 4) * 25}%`,
              }}
            />
          ))}
          
          {/* Connecting Lines SVG */}
          <svg className="absolute inset-0 w-full h-[60%] pointer-events-none opacity-60">
            <line x1="15%" y1="25%" x2="35%" y2="25%" stroke="#4B6E48" strokeWidth="1" />
            <line x1="35%" y1="25%" x2="60%" y2="25%" stroke="#4B6E48" strokeWidth="1" />
            <line x1="60%" y1="25%" x2="85%" y2="25%" stroke="#4B6E48" strokeWidth="1" />
            <line x1="15%" y1="50%" x2="35%" y2="50%" stroke="#4B6E48" strokeWidth="1" />
            <line x1="35%" y1="50%" x2="60%" y2="50%" stroke="#4B6E48" strokeWidth="1" />
            <line x1="60%" y1="50%" x2="85%" y2="50%" stroke="#4B6E48" strokeWidth="1" />
            <line x1="15%" y1="75%" x2="35%" y2="75%" stroke="#4B6E48" strokeWidth="1" />
            <line x1="35%" y1="75%" x2="60%" y2="75%" stroke="#4B6E48" strokeWidth="1" />
            <line x1="60%" y1="75%" x2="85%" y2="75%" stroke="#4B6E48" strokeWidth="1" />
            <line x1="15%" y1="25%" x2="15%" y2="50%" stroke="#4B6E48" strokeWidth="1" />
            <line x1="15%" y1="50%" x2="15%" y2="75%" stroke="#4B6E48" strokeWidth="1" />
            <line x1="35%" y1="25%" x2="35%" y2="50%" stroke="#4B6E48" strokeWidth="1" />
            <line x1="35%" y1="50%" x2="35%" y2="75%" stroke="#4B6E48" strokeWidth="1" />
            <line x1="60%" y1="25%" x2="60%" y2="50%" stroke="#4B6E48" strokeWidth="1" />
            <line x1="60%" y1="50%" x2="60%" y2="75%" stroke="#4B6E48" strokeWidth="1" />
            <line x1="85%" y1="25%" x2="85%" y2="50%" stroke="#4B6E48" strokeWidth="1" />
            <line x1="85%" y1="50%" x2="85%" y2="75%" stroke="#4B6E48" strokeWidth="1" />
          </svg>

          {/* Glassmorphic Orbs */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#4B6E48]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#4B6E48]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/80 backdrop-blur-sm border border-[#4B6E48]/20 rounded-full text-[#4B6E48] text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-lg"
            >
              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Global Student Network</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight"
            >
              Connect with{' '}
              <span className="bg-gradient-to-r from-[#4B6E48] to-[#3d5a3a] bg-clip-text text-transparent">
                Students
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Build your global network of study abroad peers, share experiences, and grow together
            </motion.p>

            {/* Glassmorphic Stats Cards */}
            <motion.div 
              ref={statsRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-3xl mx-auto"
            >
              <div className="group bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#4B6E48] to-[#3d5a3a] bg-clip-text text-transparent stat-number mb-2">
                  {connections.length}
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-600 flex items-center justify-center gap-2">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-[#4B6E48]" />
                  Connections
                </div>
                <div className="mt-3 w-full h-1 bg-gradient-to-r from-[#4B6E48] to-transparent rounded-full opacity-50" />
              </div>

              <div className="group bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#4B6E48] to-[#3d5a3a] bg-clip-text text-transparent stat-number mb-2">
                  {receivedRequests.length}
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-600 flex items-center justify-center gap-2">
                  <UserPlus className="w-3 h-3 sm:w-4 sm:h-4 text-[#4B6E48]" />
                  Requests
                </div>
                <div className="mt-3 w-full h-1 bg-gradient-to-r from-[#4B6E48] to-transparent rounded-full opacity-50" />
              </div>

              <div className="group bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#4B6E48] to-[#3d5a3a] bg-clip-text text-transparent stat-number mb-2">
                  {suggestions.length}
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-600 flex items-center justify-center gap-2">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#4B6E48]" />
                  Suggestions
                </div>
                <div className="mt-3 w-full h-1 bg-gradient-to-r from-[#4B6E48] to-transparent rounded-full opacity-50" />
              </div>
            </motion.div>

            {/* Floating Profile Avatars */}
            <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex -space-x-3 sm:-space-x-4"
              >
                {suggestions.slice(0, 5).map((student, i) => (
                  <img
                    key={i}
                    src={student.avatar}
                    alt={student.firstName}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-3 sm:border-4 border-white shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />
                ))}
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xs sm:text-sm text-gray-600"
              >
                <span className="font-semibold text-[#4B6E48]">2,500+</span> students already connected
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Tabs Navigation */}
      <section className="relative sticky top-20 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setActiveTab('network')}
              className={`px-4 sm:px-6 py-3 sm:py-4 font-medium transition-all border-b-2 whitespace-nowrap text-sm sm:text-base ${
                activeTab === 'network'
                  ? 'border-[#4B6E48] text-[#4B6E48]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">My Network</span>
                <span className="sm:hidden">Network</span>
                <span className="flex items-center justify-center min-w-[20px] h-[20px] px-1.5 bg-gray-100 text-gray-700 rounded-full text-[10px] sm:text-xs font-semibold">
                  {connections.length}
                </span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('requests')}
              className={`px-4 sm:px-6 py-3 sm:py-4 font-medium transition-all border-b-2 whitespace-nowrap text-sm sm:text-base ${
                activeTab === 'requests'
                  ? 'border-[#4B6E48] text-[#4B6E48]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <UserPlus className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Requests</span>
                {receivedRequests.length > 0 && (
                  <span className="flex items-center justify-center min-w-[20px] h-[20px] px-1.5 bg-red-500 text-white rounded-full text-[10px] sm:text-xs font-semibold">
                    {receivedRequests.length}
                  </span>
                )}
              </div>
            </button>

            <button
              onClick={() => setActiveTab('suggestions')}
              className={`px-4 sm:px-6 py-3 sm:py-4 font-medium transition-all border-b-2 whitespace-nowrap text-sm sm:text-base ${
                activeTab === 'suggestions'
                  ? 'border-[#4B6E48] text-[#4B6E48]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Suggestions</span>
                <span className="sm:hidden">Suggest</span>
                <span className="flex items-center justify-center min-w-[20px] h-[20px] px-1.5 bg-gray-100 text-gray-700 rounded-full text-[10px] sm:text-xs font-semibold">
                  {suggestions.length}
                </span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('messages')}
              className={`px-4 sm:px-6 py-3 sm:py-4 font-medium transition-all border-b-2 whitespace-nowrap text-sm sm:text-base ${
                activeTab === 'messages'
                  ? 'border-[#4B6E48] text-[#4B6E48]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Messages</span>
                {totalUnread > 0 && (
                  <span className="flex items-center justify-center min-w-[20px] h-[20px] px-1.5 bg-red-500 text-white rounded-full text-[10px] sm:text-xs font-semibold">
                    {totalUnread}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="relative py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-[1200px] mx-auto">
          {activeTab === 'network' && (
            <NetworkTab
              connections={filteredConnections}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              handleRemoveConnection={handleRemoveConnection}
              handleViewProfile={handleViewProfile}
              handleOpenMessage={handleOpenMessage}
            />
          )}

          {activeTab === 'requests' && (
            <RequestsTab
              receivedRequests={receivedRequests}
              sentRequests={sentRequests}
              handleAcceptRequest={handleAcceptRequest}
              handleDeclineRequest={handleDeclineRequest}
              handleCancelRequest={handleCancelRequest}
            />
          )}

          {activeTab === 'suggestions' && (
            <SuggestionsTab
              suggestions={suggestions}
              handleConnect={handleConnect}
            />
          )}

          {activeTab === 'messages' && (
            <MessagesTab
              conversations={conversations}
              selectedConversation={selectedConversation}
              setSelectedConversation={setSelectedConversation}
              messageInput={messageInput}
              setMessageInput={setMessageInput}
              handleSendMessage={handleSendMessage}
            />
          )}
        </div>
      </section>

      <Footer />
      <ToastContainer />
    </>
  );
}

// Network Tab Component
function NetworkTab({
  connections,
  searchQuery,
  setSearchQuery,
  showFilters,
  setShowFilters,
  handleRemoveConnection,
  handleViewProfile,
  handleOpenMessage
}: {
  connections: ConnectionStudent[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  handleRemoveConnection: (id: string) => void;
  handleViewProfile: (id: string) => void;
  handleOpenMessage: (student: ConnectionStudent) => void;
}) {
  const [showMenu, setShowMenu] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      {/* Search Bar */}
      <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search connections..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white text-sm sm:text-base"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <StandardButton
            onClick={() => setShowFilters(!showFilters)}
            variant="secondary"
            className="flex items-center justify-center gap-2 h-11 sm:h-auto w-full sm:w-auto"
          >
            <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Filters</span>
          </StandardButton>
          <StandardButton 
            variant="secondary" 
            className="flex items-center justify-center gap-2 h-11 sm:h-auto w-full sm:w-auto"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Export</span>
          </StandardButton>
        </div>
      </div>

      {/* Connections Grid */}
      {connections.length === 0 ? (
        <div className="text-center py-16 sm:py-20">
          <Users className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No connections yet</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6">Start building your network by exploring student suggestions</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {connections.map((student, index) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all pointer-events-none w-full"
            >
              {/* Cover with different banner */}
              <div className="relative h-20 sm:h-24 md:h-28 lg:h-32 bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a]">
                <img
                  src={getBannerImage(index)}
                  alt={student.firstName}
                  className="w-full h-full object-cover pointer-events-auto"
                />
                <button
                  onClick={() => setShowMenu(showMenu === student.id ? null : student.id)}
                  className="absolute top-2 right-2 p-1.5 sm:p-2 bg-white/90 rounded-full hover:bg-white transition-colors pointer-events-auto"
                >
                  <MoreVertical className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700" />
                </button>
                {showMenu === student.id && (
                  <div className="absolute top-10 sm:top-12 right-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[160px] z-10 pointer-events-auto">
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 pointer-events-auto">
                      View Profile
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 pointer-events-auto">
                      Send Message
                    </button>
                    <button
                      onClick={() => {
                        handleRemoveConnection(student.id);
                        setShowMenu(null);
                      }}
                      className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 pointer-events-auto"
                    >
                      Remove Connection
                    </button>
                  </div>
                )}
              </div>

              {/* Profile */}
              <div className="p-4 sm:p-5 lg:p-6 pt-0">
                {/* Avatar */}
                <div className="relative -mt-10 sm:-mt-12 mb-3 sm:mb-4">
                  <img
                    src={student.avatar}
                    alt={student.firstName}
                    className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full border-3 sm:border-4 border-white object-cover pointer-events-auto shadow-lg"
                  />
                  {student.isOnline && (
                    <div className="absolute bottom-0 right-0 sm:bottom-1 sm:right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>

                {/* Info */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 pointer-events-auto">
                  {student.firstName} {student.lastName}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-3 pointer-events-auto">@{student.username}</p>

                <div className="space-y-2 text-xs sm:text-sm mb-4">
                  <div className="flex items-center gap-2 text-gray-700 pointer-events-auto">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="truncate">{student.location.flag} {student.location.city}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 pointer-events-auto">
                    <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="truncate">{student.field}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 pointer-events-auto">
                    <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="truncate">{student.studyDestination}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-2">
                  <StandardButton 
                    size="sm" 
                    onClick={() => handleOpenMessage(student)}
                    className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 pointer-events-auto h-11 text-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Message</span>
                  </StandardButton>
                  <StandardButton 
                    size="sm" 
                    variant="secondary" 
                    onClick={() => handleViewProfile(student.id)}
                    className="flex-1 flex items-center justify-center pointer-events-auto h-11 text-sm"
                  >
                    <span>View Profile</span>
                  </StandardButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

// Requests Tab Component
function RequestsTab({
  receivedRequests,
  sentRequests,
  handleAcceptRequest,
  handleDeclineRequest,
  handleCancelRequest
}: {
  receivedRequests: ConnectionRequest[];
  sentRequests: ConnectionRequest[];
  handleAcceptRequest: (request: ConnectionRequest) => void;
  handleDeclineRequest: (request: ConnectionRequest) => void;
  handleCancelRequest: (request: ConnectionRequest) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      {/* Received Requests */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Received Requests
          {receivedRequests.length > 0 && (
            <span className="ml-3 text-lg text-gray-500">({receivedRequests.length})</span>
          )}
        </h2>

        {receivedRequests.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-2xl">
            <UserPlus className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-600">No pending requests at the moment</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {receivedRequests.map((request, index) => (
              <motion.div
                key={request.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all pointer-events-none"
              >
                {/* Cover Banner with different image */}
                <div className="relative h-24 bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a]">
                  <img
                    src={getBannerImage(index)}
                    alt={request.student.firstName}
                    className="w-full h-full object-cover pointer-events-auto"
                  />
                </div>

                {/* Profile Content */}
                <div className="p-6 pt-0">
                  {/* Avatar */}
                  <div className="relative -mt-12 mb-4">
                    <img
                      src={request.student.avatar}
                      alt={request.student.firstName}
                      className="w-20 h-20 rounded-full border-4 border-white object-cover pointer-events-auto"
                    />
                    {request.student.isOnline && (
                      <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full pointer-events-auto"></div>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-1 pointer-events-auto">
                    {request.student.firstName} {request.student.lastName}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 pointer-events-auto">@{request.student.username}</p>
                  
                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-3 pointer-events-auto">
                    <MapPin className="w-3 h-3" />
                    <span>{request.student.location.flag} {request.student.location.country}</span>
                    {request.student.mutualConnections && request.student.mutualConnections > 0 && (
                      <>
                        <span>•</span>
                        <span>{request.student.mutualConnections} mutual</span>
                      </>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-700 line-clamp-2 mb-4 pointer-events-auto">
                    {request.student.bio}
                  </p>
                  
                  {request.message && (
                    <div className="bg-gray-50 rounded-lg p-3 mb-4 pointer-events-auto">
                      <p className="text-sm text-gray-700 italic">"{request.message}"</p>
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    <StandardButton
                      size="sm"
                      onClick={() => handleAcceptRequest(request)}
                      className="flex-1 flex items-center justify-center gap-2 pointer-events-auto"
                    >
                      <Check className="w-4 h-4" />
                      Accept
                    </StandardButton>
                    <StandardButton
                      size="sm"
                      variant="secondary"
                      onClick={() => handleDeclineRequest(request)}
                      className="flex-1 flex items-center justify-center gap-2 pointer-events-auto"
                    >
                      <X className="w-4 h-4" />
                      Decline
                    </StandardButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Sent Requests */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Sent Requests
          {sentRequests.length > 0 && (
            <span className="ml-3 text-lg text-gray-500">({sentRequests.length})</span>
          )}
        </h2>

        {sentRequests.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-2xl">
            <UserPlus className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-600">You haven't sent any connection requests yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sentRequests.map((request, index) => (
              <motion.div
                key={request.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all pointer-events-none"
              >
                {/* Cover Banner with different image */}
                <div className="relative h-24 bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a]">
                  <img
                    src={getBannerImage(index + receivedRequests.length)}
                    alt={request.student.firstName}
                    className="w-full h-full object-cover pointer-events-auto"
                  />
                </div>

                {/* Profile Content */}
                <div className="p-6 pt-0">
                  {/* Avatar */}
                  <div className="relative -mt-12 mb-4">
                    <img
                      src={request.student.avatar}
                      alt={request.student.firstName}
                      className="w-20 h-20 rounded-full border-4 border-white object-cover pointer-events-auto"
                    />
                    {request.student.isOnline && (
                      <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-1 pointer-events-auto">
                    {request.student.firstName} {request.student.lastName}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 pointer-events-auto">@{request.student.username}</p>
                  
                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-3 pointer-events-auto">
                    <MapPin className="w-3 h-3" />
                    <span>{request.student.location.flag} {request.student.location.country}</span>
                    {request.student.mutualConnections && request.student.mutualConnections > 0 && (
                      <>
                        <span>•</span>
                        <span>{request.student.mutualConnections} mutual</span>
                      </>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-700 line-clamp-2 mb-4 pointer-events-auto">
                    {request.student.bio}
                  </p>
                  
                  {request.message && (
                    <div className="bg-gray-50 rounded-lg p-3 mb-4 pointer-events-auto">
                      <p className="text-sm text-gray-700 italic">"{request.message}"</p>
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    <StandardButton
                      size="sm"
                      onClick={() => handleCancelRequest(request)}
                      variant="secondary"
                      className="flex-1 flex items-center justify-center gap-2 pointer-events-auto"
                    >
                      <X className="w-4 h-4" />
                      Cancel Request
                    </StandardButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Suggestions Tab Component
function SuggestionsTab({
  suggestions,
  handleConnect
}: {
  suggestions: ConnectionStudent[];
  handleConnect: (student: ConnectionStudent) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Suggested Connections
        </h2>
        <StandardButton variant="secondary" className="flex items-center gap-2">
          <RefreshCw className="w-5 h-5" />
          Refresh
        </StandardButton>
      </div>

      {suggestions.length === 0 ? (
        <div className="text-center py-20">
          <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No suggestions available</h3>
          <p className="text-gray-600">Check back later for new connection suggestions</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suggestions.map((student, index) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all"
            >
              {/* Cover with different banner */}
              <div className="relative h-24 bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a]">
                <img
                  src={getBannerImage(index)}
                  alt={student.firstName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Profile */}
              <div className="p-6 pt-0">
                {/* Avatar */}
                <div className="relative -mt-12 mb-4">
                  <img
                    src={student.avatar}
                    alt={student.firstName}
                    className="w-20 h-20 rounded-full border-4 border-white object-cover"
                  />
                  {student.isOnline && (
                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {student.firstName} {student.lastName}
                </h3>
                <p className="text-sm text-gray-500 mb-3">@{student.username}</p>

                {student.matchReason && (
                  <div className="bg-[#4B6E48]/5 border border-[#4B6E48]/20 rounded-lg p-3 mb-4">
                    <p className="text-xs text-[#4B6E48] font-medium">{student.matchReason}</p>
                  </div>
                )}

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-4 h-4" />
                    <span>{student.location.flag} {student.location.city}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <BookOpen className="w-4 h-4" />
                    <span>{student.field}</span>
                  </div>
                  {student.mutualConnections && student.mutualConnections > 0 && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Users className="w-4 h-4" />
                      <span>{student.mutualConnections} mutual connections</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <StandardButton
                    size="sm"
                    onClick={() => handleConnect(student)}
                    className="flex-1 flex items-center justify-center gap-2"
                  >
                    <UserPlus className="w-4 h-4" />
                    Connect
                  </StandardButton>
                  <StandardButton size="sm" variant="secondary" className="flex-1">
                    View Profile
                  </StandardButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

// Messages Tab Component
function MessagesTab({
  conversations,
  selectedConversation,
  setSelectedConversation,
  messageInput,
  setMessageInput,
  handleSendMessage
}: {
  conversations: Conversation[];
  selectedConversation: Conversation | null;
  setSelectedConversation: (conv: Conversation | null) => void;
  messageInput: string;
  setMessageInput: (message: string) => void;
  handleSendMessage: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-2xl border border-gray-200 overflow-hidden"
      style={{ height: '600px' }}
    >
      {/* Conversations List */}
      <div className="md:col-span-1 border-r border-gray-200 overflow-y-auto">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-3 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4B6E48] text-gray-900"
            />
          </div>
        </div>

        {conversations.length === 0 ? (
          <div className="p-8 text-center">
            <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-sm text-gray-600">No conversations yet</p>
          </div>
        ) : (
          <div>
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedConversation(conv)}
                className={`w-full p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors text-left ${
                  selectedConversation?.id === conv.id ? 'bg-[#4B6E48]/5' : ''
                }`}
              >
                <div className="flex gap-3">
                  <div className="relative flex-shrink-0">
                    <img
                      src={conv.student.avatar}
                      alt={conv.student.firstName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {conv.student.isOnline && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-sm text-gray-900 truncate">
                        {conv.student.firstName} {conv.student.lastName}
                      </h4>
                      {conv.unreadCount > 0 && (
                        <span className="px-2 py-0.5 bg-red-500 text-white rounded-full text-xs">
                          {conv.unreadCount}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 truncate mb-1">{conv.lastMessage || 'No messages yet'}</p>
                    <p className="text-xs text-gray-400">{conv.lastMessageTime}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Chat Area */}
      <div className="md:col-span-2 flex flex-col">
        {!selectedConversation ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a conversation</h3>
              <p className="text-gray-600">Choose a connection to start chatting</p>
            </div>
          </div>
        ) : (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={selectedConversation.student.avatar}
                  alt={selectedConversation.student.firstName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {selectedConversation.student.firstName} {selectedConversation.student.lastName}
                  </h3>
                  <p className="text-xs text-gray-500">{selectedConversation.student.lastActive}</p>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {selectedConversation.messages.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No messages yet. Start the conversation!</p>
                </div>
              ) : (
                selectedConversation.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.senderId === 'current_user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                        message.senderId === 'current_user'
                          ? 'bg-[#4B6E48] text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <p className={`text-xs ${message.senderId === 'current_user' ? 'text-white/70' : 'text-gray-500'}`}>
                          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                        {message.senderId === 'current_user' && (
                          <CheckCheck className={`w-3 h-3 ${message.isRead ? 'text-blue-300' : 'text-white/70'}`} />
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-end gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Paperclip className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Smile className="w-5 h-5 text-gray-600" />
                </button>
                <div className="flex-1">
                  <textarea
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    placeholder="Type a message..."
                    rows={1}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4B6E48] resize-none text-gray-900 bg-white"
                  />
                </div>
                <StandardButton onClick={handleSendMessage} disabled={!messageInput.trim()}>
                  <Send className="w-5 h-5" />
                </StandardButton>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}