import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Paperclip, 
  Sparkles, 
  MessageCircle, 
  Clock, 
  Zap,
  FileText,
  GraduationCap,
  MapPin,
  DollarSign,
  Calendar,
  CheckCircle,
  Bot,
  User,
  MoreVertical,
  Trash2,
  Plus,
  ChevronRight
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { StandardButton } from '@/app/components/ui/standard-button';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
  messageCount: number;
}

export default function SoniaAI() {
  const initialMessage: Message = {
    id: '1',
    type: 'ai',
    content: "Hi! I'm Sonia, your AI study abroad assistant. I'm here to help you with university research, visa requirements, application deadlines, and much more. How can I assist you today?",
    timestamp: new Date(),
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: '1',
      title: 'UK University Requirements',
      lastMessage: 'What are the IELTS requirements for...',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      messageCount: 12
    },
    {
      id: '2',
      title: 'Student Visa Process',
      lastMessage: 'Can you explain the visa timeline?',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      messageCount: 8
    },
    {
      id: '3',
      title: 'Scholarship Opportunities',
      lastMessage: 'Are there scholarships for international...',
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      messageCount: 15
    }
  ]);

  // Store conversation messages
  const [conversationMessages, setConversationMessages] = useState<Record<string, Message[]>>({});

  const quickActions = [
    {
      icon: GraduationCap,
      title: 'Find Universities',
      description: 'Discover programs that match your goals',
      prompt: 'Help me find universities for Computer Science in the UK'
    },
    {
      icon: FileText,
      title: 'Review My SOP',
      description: 'Get feedback on your application essay',
      prompt: 'Can you review my Statement of Purpose?'
    },
    {
      icon: MapPin,
      title: 'Visa Requirements',
      description: 'Learn about student visa processes',
      prompt: 'What are the student visa requirements for the US?'
    },
    {
      icon: DollarSign,
      title: 'Scholarship Search',
      description: 'Find funding opportunities',
      prompt: 'Show me scholarship options for international students'
    },
    {
      icon: Calendar,
      title: 'Application Timeline',
      description: 'Plan your application deadlines',
      prompt: 'Create a timeline for Fall 2026 applications'
    },
    {
      icon: CheckCircle,
      title: 'Eligibility Check',
      description: 'See if you meet requirements',
      prompt: 'Am I eligible for graduate programs in Computer Science?'
    }
  ];

  const suggestedPrompts = [
    "What's the difference between UK and US university systems?",
    "How much does it cost to study in Canada?",
    "When should I start preparing for IELTS?",
    "Compare Masters programs in Data Science",
    "What documents do I need for university applications?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: generateAIResponse(inputValue),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('university') || input.includes('universities')) {
      return "I'd be happy to help you find universities! To give you the most relevant recommendations, could you tell me:\n\n1. What field of study are you interested in?\n2. Which countries are you considering?\n3. What's your preferred study level (Bachelors, Masters, PhD)?\n4. Do you have any specific preferences (rankings, location, cost)?\n\nOnce I have these details, I can provide personalized university suggestions with admission requirements, deadlines, and scholarship opportunities.";
    }
    
    if (input.includes('visa')) {
      return "Student visa requirements vary by country, but I can guide you through the process! Here are the general steps:\n\n**Common Requirements:**\n• Valid passport\n• University acceptance letter\n• Proof of financial support\n• English language proficiency\n• Health insurance\n• Visa application fee\n\n**Timeline:**\n• Apply 3-4 months before departure\n• Processing time: 2-8 weeks depending on country\n\nWhich country's visa process would you like detailed information about?";
    }
    
    if (input.includes('scholarship')) {
      return "Great question! There are many scholarship opportunities for international students. Here are some popular options:\n\n**Merit-Based Scholarships:**\n• Fulbright Program (US)\n• Chevening Scholarships (UK)\n• DAAD Scholarships (Germany)\n• Erasmus+ (Europe)\n\n**University-Specific:**\n• Most universities offer partial to full tuition waivers\n• Research assistantships for graduate students\n\n**Application Tips:**\n✓ Start early (6-12 months before)\n✓ Maintain strong academic records\n✓ Write compelling essays\n✓ Get strong recommendation letters\n\nWould you like me to find scholarships specific to your field and destination?";
    }
    
    if (input.includes('ielts') || input.includes('toefl') || input.includes('english test')) {
      return "English proficiency tests are crucial for studying abroad! Here's what you need to know:\n\n**IELTS vs TOEFL:**\n• IELTS: More popular in UK, Australia, Canada\n• TOEFL: Preferred in the US\n• Both are accepted by most universities\n\n**Typical Requirements:**\n• Undergraduate: 6.0-6.5 IELTS / 80-90 TOEFL\n• Graduate: 6.5-7.5 IELTS / 90-100 TOEFL\n\n**Preparation Timeline:**\n• 3-6 months for serious preparation\n• Take practice tests first\n• Focus on your weakest section\n\n**Tips:**\n✓ Practice all 4 sections equally\n✓ Take official practice tests\n✓ Consider prep courses if needed\n\nWould you like study resources or practice materials?";
    }
    
    if (input.includes('cost') || input.includes('expensive') || input.includes('afford')) {
      return "Understanding costs is crucial for planning! Here's a breakdown:\n\n**Tuition Fees (per year):**\n• UK: £10,000 - £38,000\n• US: $20,000 - $60,000\n• Canada: CAD 15,000 - 35,000\n• Germany: Free - €3,000 (many public universities are free!)\n• Australia: AUD 20,000 - 45,000\n\n**Living Expenses (per year):**\n• Accommodation: $8,000 - $15,000\n• Food: $3,000 - $5,000\n• Transportation: $1,000 - $2,000\n• Books & supplies: $500 - $1,000\n\n**Ways to Reduce Costs:**\n✓ Apply for scholarships\n✓ Look for countries with lower tuition\n✓ Consider part-time work (if visa allows)\n✓ Choose universities in smaller cities\n\nWhich country would you like detailed cost information for?";
    }

    // Default response
    return "That's a great question! I'm here to help with:\n\n• University and program recommendations\n• Visa and immigration guidance\n• Scholarship and funding opportunities\n• Application requirements and deadlines\n• English test preparation\n• Cost estimation and budgeting\n• Statement of Purpose review\n• Country comparisons\n\nCould you provide more details about what you'd like to know? The more specific you are, the better I can assist you!";
  };

  const handleQuickAction = (prompt: string) => {
    setInputValue(prompt);
    inputRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatConversationTime = (date: Date) => {
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${Math.floor(diffInHours)}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return 'Yesterday';
    return `${diffInDays} days ago`;
  };

  // Generate conversation title from first user message
  const generateConversationTitle = (messages: Message[]): string => {
    const firstUserMessage = messages.find(m => m.type === 'user');
    if (!firstUserMessage) return 'New Conversation';
    
    // Get first 50 characters and add ellipsis if needed
    const title = firstUserMessage.content.substring(0, 50);
    return title.length < firstUserMessage.content.length ? `${title}...` : title;
  };

  // Save current conversation and start new one
  const handleNewConversation = () => {
    // Only save if there are user messages (more than just the initial AI greeting)
    if (messages.length > 1) {
      const newConversationId = Date.now().toString();
      const userMessages = messages.filter(m => m.type === 'user');
      const lastMessage = userMessages.length > 0 
        ? userMessages[userMessages.length - 1].content.substring(0, 50)
        : 'New conversation';
      
      const newConversation: Conversation = {
        id: newConversationId,
        title: generateConversationTitle(messages),
        lastMessage: lastMessage,
        timestamp: new Date(),
        messageCount: messages.length
      };

      // Save current messages to storage
      setConversationMessages(prev => ({
        ...prev,
        [newConversationId]: messages
      }));

      // Add conversation to list at the beginning
      setConversations(prev => [newConversation, ...prev]);
    }

    // Reset to new conversation
    setMessages([initialMessage]);
    setActiveConversationId(null);
    setInputValue('');
  };

  // Load a saved conversation
  const handleLoadConversation = (conversationId: string) => {
    const savedMessages = conversationMessages[conversationId];
    if (savedMessages) {
      setMessages(savedMessages);
      setActiveConversationId(conversationId);
    }
  };

  // Delete a conversation
  const handleDeleteConversation = (conversationId: string) => {
    setConversations(prev => prev.filter(c => c.id !== conversationId));
    setConversationMessages(prev => {
      const newMessages = { ...prev };
      delete newMessages[conversationId];
      return newMessages;
    });
    
    // If deleted conversation was active, start new
    if (activeConversationId === conversationId) {
      setMessages([initialMessage]);
      setActiveConversationId(null);
    }
  };

  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
        <div className="max-w-[1800px] mx-auto px-4 py-8">
          
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] rounded-2xl flex items-center justify-center">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold flex items-center gap-3 text-[rgb(27,25,25)]">
                  AI Visa Assistant
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Online
                  </span>
                </h1>
                <p className="text-gray-600 mt-1">Your intelligent study abroad companion</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Sidebar - Conversation History */}
            {showSidebar && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-3 space-y-4"
              >
                {/* New Chat Button */}
                <button 
                  onClick={handleNewConversation}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#4B6E48] text-white rounded-xl hover:bg-[#3d5a3a] transition-colors font-medium"
                >
                  <Plus className="w-5 h-5" />
                  New Conversation
                </button>

                {/* Conversations List */}
                <div className="bg-white rounded-2xl border border-gray-200 p-4">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Recent Chats</h3>
                  <div className="space-y-2">
                    {conversations.map((conv) => (
                      <div
                        key={conv.id}
                        onClick={() => handleLoadConversation(conv.id)}
                        className={`w-full text-left p-3 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer ${
                          activeConversationId === conv.id ? 'bg-[#4B6E48]/10 border border-[#4B6E48]/20' : ''
                        }`}
                      >
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="font-semibold text-sm text-gray-900 line-clamp-1 flex-1">
                            {conv.title}
                          </h4>
                          <button 
                            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-50 rounded"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (confirm('Delete this conversation?')) {
                                handleDeleteConversation(conv.id);
                              }
                            }}
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 line-clamp-1 mb-2">
                          {conv.lastMessage}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{formatConversationTime(conv.timestamp)}</span>
                          <span>{conv.messageCount} messages</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Capabilities */}
                <div className="bg-gradient-to-br from-[#4B6E48]/10 to-[#4B6E48]/5 rounded-2xl border border-[#4B6E48]/20 p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#4B6E48]" />
                    What I Can Do
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#4B6E48] flex-shrink-0" />
                      University matching
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#4B6E48] flex-shrink-0" />
                      Visa guidance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#4B6E48] flex-shrink-0" />
                      Document review
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#4B6E48] flex-shrink-0" />
                      Deadline tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#4B6E48] flex-shrink-0" />
                      Cost estimation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#4B6E48] flex-shrink-0" />
                      24/7 availability
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Main Chat Area */}
            <div className={`${showSidebar ? 'lg:col-span-9' : 'lg:col-span-12'} flex flex-col`}>
              
              {/* Quick Actions - Show when no messages */}
              {messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <h2 className="text-2xl font-bold mb-4">How can I help you today?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {quickActions.map((action, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleQuickAction(action.prompt)}
                        className="p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#4B6E48] hover:shadow-lg transition-all duration-300 text-left group"
                      >
                        <action.icon className="w-8 h-8 text-[#4B6E48] mb-3 group-hover:scale-110 transition-transform" />
                        <h3 className="font-bold text-gray-900 mb-2">{action.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{action.description}</p>
                        <div className="flex items-center gap-2 text-sm text-[#4B6E48] font-medium">
                          Try it
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Chat Messages */}
              <div className="flex-1 bg-white rounded-2xl border border-gray-200 flex flex-col" style={{ height: messages.length === 1 ? '500px' : '600px' }}>
                
                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  <AnimatePresence>
                    {messages.map((message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`flex gap-4 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
                      >
                        {/* Avatar */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.type === 'ai' 
                            ? 'bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a]' 
                            : 'bg-gray-200'
                        }`}>
                          {message.type === 'ai' ? (
                            <Bot className="w-5 h-5 text-white" />
                          ) : (
                            <User className="w-5 h-5 text-gray-600" />
                          )}
                        </div>

                        {/* Message Content */}
                        <div className={`flex-1 ${message.type === 'user' ? 'flex justify-end' : ''}`}>
                          <div className={`max-w-[80%] ${
                            message.type === 'ai'
                              ? 'bg-gray-50 border border-gray-200 text-gray-900'
                              : 'bg-[#4B6E48] text-white'
                          } rounded-2xl p-4`}>
                            <p className="text-sm leading-relaxed whitespace-pre-line">
                              {message.content}
                            </p>
                            <p className={`text-xs mt-2 ${
                              message.type === 'ai' ? 'text-gray-500' : 'text-white/70'
                            }`}>
                              {formatTime(message.timestamp)}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Suggested Prompts - Show when few messages */}
                {messages.length <= 2 && (
                  <div className="px-6 py-3 border-t border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-500 font-medium">Suggested questions:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {suggestedPrompts.slice(0, 3).map((prompt, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickAction(prompt)}
                          className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs text-gray-700 transition-colors"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input Area */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-end gap-3">
                    <button className="p-3 hover:bg-gray-100 rounded-xl transition-colors">
                      <Paperclip className="w-5 h-5 text-gray-400" />
                    </button>
                    
                    <div className="flex-1 relative">
                      <textarea
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Ask me anything about studying abroad..."
                        rows={1}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent resize-none text-gray-900 placeholder:text-gray-500"
                        style={{ minHeight: '48px', maxHeight: '120px' }}
                      />
                    </div>

                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="p-3 bg-[#4B6E48] text-white rounded-xl hover:bg-[#3d5a3a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Press Enter to send • Shift + Enter for new line
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}