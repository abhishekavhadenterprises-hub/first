import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Smile, MessageCircle } from 'lucide-react';
import { showToast } from '@/app/components/ui/toast';
import { StudentProfile } from '@/app/data/studentDirectoryData';

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: StudentProfile | null;
}

export function MessageModal({ isOpen, onClose, student }: MessageModalProps) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'me' | 'them'; time: string }>>([]);

  if (!student) return null;

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = {
        text: message,
        sender: 'me' as const,
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      showToast('Message sent!', 'success');

      // Simulate response after 2 seconds
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "Thanks for reaching out! I'd love to connect and share study abroad experiences.",
          sender: 'them',
          time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
        }]);
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#4B6E48] to-[#5a8456] px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={student.avatar}
                  alt={`${student.firstName} ${student.lastName}`}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <div>
                  <h3 className="font-bold text-white">{student.firstName} {student.lastName}</h3>
                  <p className="text-xs text-white/80">@{student.username}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="h-80 overflow-y-auto p-6 bg-gray-50">
              {messages.length === 0 ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500 text-sm">Start a conversation with {student.firstName}</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[75%] ${msg.sender === 'me' ? 'order-2' : 'order-1'}`}>
                        <div
                          className={`px-4 py-2.5 rounded-2xl ${
                            msg.sender === 'me'
                              ? 'bg-[#4B6E48] text-white rounded-br-sm'
                              : 'bg-white border border-gray-200 text-gray-900 rounded-bl-sm'
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{msg.text}</p>
                        </div>
                        <p className={`text-xs text-gray-500 mt-1 ${msg.sender === 'me' ? 'text-right' : 'text-left'}`}>
                          {msg.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-end gap-2">
                <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors flex-shrink-0">
                  <Smile className="w-5 h-5 text-gray-500" />
                </button>
                <div className="flex-1 relative">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={`Message ${student.firstName}...`}
                    rows={1}
                    className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent resize-none text-gray-900"
                    style={{ minHeight: '42px', maxHeight: '120px' }}
                  />
                </div>
                <button
                  onClick={handleSend}
                  disabled={!message.trim()}
                  className="w-10 h-10 flex items-center justify-center bg-[#4B6E48] hover:bg-[#3d5a3a] text-white rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 shadow-md hover:shadow-lg"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">Press Enter to send, Shift + Enter for new line</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}