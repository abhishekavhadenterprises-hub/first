import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { StandardButton } from '@/app/components/ui/standard-button';
import { 
  CheckCircle2, 
  Clock, 
  MessageCircle, 
  Calendar,
  ArrowRight,
  Sparkles,
  Users,
  BookOpen
} from 'lucide-react';
import { useNavigate } from 'react-router';

export default function ContactSuccess() {
  const navigate = useNavigate();
  const ticketId = `CS${Date.now().toString().slice(-8)}`; // Generate simple ticket ID

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const suggestedActions = [
    {
      icon: BookOpen,
      title: 'Explore Our Services',
      description: 'Discover all the ways we can help with your study abroad journey',
      buttonText: 'View Services',
      onClick: () => navigate('/services')
    },
    {
      icon: Sparkles,
      title: 'Try AI Visa Assistant',
      description: 'Get instant answers about visa requirements and documents',
      buttonText: 'Try Now',
      onClick: () => navigate('/services/visas')
    },
    {
      icon: Users,
      title: 'Join Our Community',
      description: 'Connect with 10,000+ students who are also planning to study abroad',
      buttonText: 'Join Community',
      onClick: () => navigate('/resources/connect')
    }
  ];

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Success Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl"
              />
              <div className="relative w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-14 h-14 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Thank You for Reaching Out!
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              We've received your message and will get back to you shortly.
            </p>
            
            {/* Ticket ID */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-full"
            >
              <span className="text-sm text-gray-600">Reference ID:</span>
              <span className="font-mono font-bold text-[#4B6E48]">{ticketId}</span>
            </motion.div>
          </motion.div>

          {/* Response Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#4B6E48] rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">What Happens Next?</h2>
                <p className="text-gray-600">Here's what you can expect from our team</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                </div>
                <div className="pb-6">
                  <h3 className="font-semibold mb-1">Message Received ✓</h3>
                  <p className="text-sm text-gray-600">
                    Your enquiry has been logged and assigned a reference ID
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Just now</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                </div>
                <div className="pb-6">
                  <h3 className="font-semibold mb-1">Smart Routing in Progress</h3>
                  <p className="text-sm text-gray-600">
                    Your query is being routed to the most relevant specialist
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Within 30 minutes</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Expert Response</h3>
                  <p className="text-sm text-gray-600">
                    You'll receive a detailed response via your preferred contact method
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-2 rounded-lg">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-900">
                      Expected: Within 4 hours (during business hours)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Email Confirmation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12 text-center"
          >
            <p className="text-sm text-blue-900">
              <strong>📧 Confirmation email sent!</strong> Check your inbox (and spam folder) for a copy of your submission.
            </p>
          </motion.div>

          {/* Suggested Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              While You Wait...
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {suggestedActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#4B6E48] transition-all hover:shadow-lg group"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#4B6E48] transition-colors">
                    <action.icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold mb-2">{action.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 min-h-[40px]">
                    {action.description}
                  </p>
                  <button
                    onClick={action.onClick}
                    className="w-full py-2.5 px-4 bg-gray-100 hover:bg-[#4B6E48] hover:text-white rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 group"
                  >
                    {action.buttonText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Need Urgent Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-3">Need Immediate Assistance?</h3>
            <p className="text-white/90 mb-6">
              For urgent queries, reach out to us directly via WhatsApp or book an immediate call
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="flex items-center justify-center gap-2 bg-white text-[#4B6E48] hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Chat
              </button>
              <button
                onClick={() => window.open('https://calendly.com/example', '_blank')}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Book Quick Call
              </button>
            </div>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-[#4B6E48] transition-colors inline-flex items-center gap-2 group"
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
}