import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }
    
    // Simulate subscription
    setSubscribed(true);
    toast.success('Successfully subscribed to our newsletter!');
    setEmail('');
    
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-[#4B6E48] to-[#3a5638] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4B6E48] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4B6E48] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
          <Mail className="w-8 h-8" />
        </div>
        
        <h3 className="text-3xl font-bold mb-4">
          Get Weekly Study Abroad Insights
        </h3>
        
        <p className="text-lg text-white/90 mb-8">
          Join 10,000+ students receiving expert tips, guides, and opportunities delivered to your inbox
        </p>

        {!subscribed ? (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl text-[rgb(0,0,0)] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-[#4B6E48] font-semibold rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center justify-center gap-2 text-lg"
          >
            <CheckCircle className="w-6 h-6" />
            <span>You're subscribed! Check your inbox.</span>
          </motion.div>
        )}

        <p className="text-sm text-white/70 mt-4">
          No spam. Unsubscribe anytime. Your data is safe with us.
        </p>
      </div>
    </motion.div>
  );
}