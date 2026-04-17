import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { StandardButton } from '@/app/components/ui/standard-button';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  Calendar, 
  HelpCircle, 
  Users,
  Clock,
  MapPin,
  Send,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';
import { useNavigate } from 'react-router';

// Contact option card component
function ContactOptionCard({
  icon: Icon,
  label,
  description,
  buttonText,
  onClick,
  isPrimary = false
}: {
  icon: React.ElementType;
  label: string;
  description: string;
  buttonText: string;
  onClick: () => void;
  isPrimary?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 sm:p-7 md:p-8 hover:border-[#4B6E48] transition-all duration-300 hover:shadow-lg shadow-sm h-full flex flex-col"
    >
      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${isPrimary ? 'bg-[#4B6E48]' : 'bg-gray-100'} flex items-center justify-center mb-4 sm:mb-5`}>
        <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${isPrimary ? 'text-white' : 'text-gray-600'}`} />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{label}</h3>
      <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 leading-relaxed flex-grow">{description}</p>
      <StandardButton 
        onClick={onClick}
        variant={isPrimary ? "default" : "secondary"}
        className="w-full mt-auto"
      >
        {buttonText}
      </StandardButton>
    </motion.div>
  );
}

// FAQ Item component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full min-h-[44px] py-5 sm:py-6 md:py-6 px-4 sm:px-5 md:px-6 flex items-start sm:items-center justify-between text-left hover:bg-gray-50 transition-colors group"
      >
        <span className="font-medium text-[15px] sm:text-base md:text-[17px] text-gray-900 pr-4 sm:pr-6 leading-[1.5] sm:leading-[1.6] group-hover:text-[#4B6E48] transition-colors flex-1">
          {question}
        </span>
        <ChevronDown className={`w-5 h-5 sm:w-5 sm:h-5 text-gray-400 group-hover:text-[#4B6E48] transition-all flex-shrink-0 mt-0.5 sm:mt-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="px-4 sm:px-5 md:px-6 pb-5 sm:pb-6 md:pb-6 text-gray-600 text-sm sm:text-[15px] md:text-base leading-[1.7] sm:leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    userType: '',
    country: '',
    stage: '',
    helpWith: [] as string[],
    message: '',
    consent: false
  });

  // Scroll direction detection for sticky section
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checkbox.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleMultiSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      helpWith: prev.helpWith.includes(value)
        ? prev.helpWith.filter(item => item !== value)
        : [...prev.helpWith, value]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to success page
    navigate('/contact/success');
  };

  const contactOptions = [
    {
      icon: MessageCircle,
      label: 'WhatsApp Chat',
      description: 'Quick replies to your questions. Available 24/7 for instant support.',
      buttonText: 'Start Chat',
      onClick: () => window.open('https://wa.me/1234567890', '_blank'),
      isPrimary: true
    },
    {
      icon: Mail,
      label: 'Email Support',
      description: 'Detailed queries and documentation. Response within 4 hours.',
      buttonText: 'Send Email',
      onClick: () => window.location.href = 'mailto:support@example.com'
    },
    {
      icon: Calendar,
      label: 'Book a Call',
      description: 'Personal consultation with our experts. 15 or 30 min slots.',
      buttonText: 'Choose Time',
      onClick: () => window.open('https://calendly.com/example', '_blank')
    },
    {
      icon: HelpCircle,
      label: 'Help Center',
      description: 'Browse FAQs and guides. Get instant answers to common questions.',
      buttonText: 'Visit Help Center',
      onClick: () => navigate('/help-center')
    },
    {
      icon: Users,
      label: 'Partner Enquiry',
      description: 'Collaboration and partnership opportunities for institutions.',
      buttonText: 'Partner With Us',
      onClick: () => window.location.href = 'mailto:partners@example.com'
    }
  ];

  const countries = ['United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'Ireland', 'New Zealand'];
  const stages = ['Exploring', 'Applying', 'Offer Received', 'Visa', 'Pre-departure', 'Arrived'];
  const helpOptions = ['Admissions', 'Loans/Forex', 'Visa', 'Housing', 'SIM', 'Insurance', 'Flights', 'Events', 'Other'];

  const faqs = [
    {
      question: 'How fast do you respond?',
      answer: 'We typically respond within 4 hours during business hours (9 AM - 6 PM IST). For urgent queries, use WhatsApp chat for immediate assistance.'
    },
    {
      question: 'Do you charge for consultation?',
      answer: 'Initial consultations are completely free. We only charge for specialized services like visa assistance, housing support, or premium concierge packages.'
    },
    {
      question: 'Can parents contact you on behalf of students?',
      answer: 'Absolutely! We welcome enquiries from both students and parents. Select "Parent" in the form, and we\'ll tailor our communication accordingly.'
    },
    {
      question: 'What documents should I keep ready?',
      answer: 'For initial consultation: academic transcripts, test scores (IELTS/TOEFL/GRE/GMAT if available), passport copy, and university offer letter (if received).'
    },
    {
      question: 'Do you support my country/intake?',
      answer: 'We support students heading to US, UK, Canada, Australia, Germany, Ireland, and New Zealand for Fall, Spring, and Summer intakes. Contact us for specific details.'
    },
    {
      question: 'How do you route my query to the right team?',
      answer: 'Based on your selected user type and needs, we automatically route your query to the relevant specialist (admissions, visa, housing, etc.) for faster resolution.'
    },
    {
      question: 'Is my information secure?',
      answer: 'Yes, we follow strict data protection policies. Your information is encrypted and used only for providing you with relevant support. Read our Privacy Policy for details.'
    },
    {
      question: 'Can I schedule a call outside business hours?',
      answer: 'Yes! Our calendar booking system shows available slots including evenings and weekends to accommodate different time zones and schedules.'
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Header - Responsive Fix */}
      <section className="relative overflow-hidden bg-white">
        {/* Background Image with Enhanced Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1759684546919-5124743bc31f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBpbnRlcm5hdGlvbmFsJTIwc3R1ZHl8ZW58MXx8fHwxNzcwMjg5MDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)' 
          }} 
        />
        
        {/* Improved Gradient Overlay - Better Text Contrast on Mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/95 sm:from-white/90 sm:via-white/80 sm:to-white/90" />
        
        {/* Hero Content - Responsive Spacing & Alignment */}
        <div className="relative z-10 max-w-5xl mx-auto px-5 py-16 sm:px-8 sm:py-20 md:py-24 lg:py-28 text-center">
          
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ backgroundColor: 'rgba(75, 110, 72, 0.12)' }}
            className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full text-[#4B6E48] text-xs sm:text-sm font-medium mb-5 sm:mb-6"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="whitespace-nowrap">We're Here to Help</span>
          </motion.div>

          {/* Hero Title - Optimized Typography Scaling */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl leading-tight sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight font-bold mb-5 sm:mb-6 text-gray-900"
          >
            Get in Touch
          </motion.h1>
          
          {/* Subtitle - Responsive Typography */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-4 sm:mb-5 leading-relaxed max-w-3xl mx-auto"
          >
            Tell us what you need — we'll reply within 4 hours.
          </motion.p>
          
          {/* Trust Badge Line - Improved Wrapping & Alignment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base text-gray-700"
          >
            <div className="flex items-center gap-2 whitespace-nowrap">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#4B6E48] flex-shrink-0" />
              <span className="font-medium">Trusted by 10,000+ students</span>
            </div>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span className="text-center sm:text-left">
              moving to US, UK, Canada & beyond
            </span>
          </motion.div>
        </div>
      </section>

      {/* Contact Options Section - Sticky Section Heading */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 py-8 sm:px-8 sm:py-12 md:py-16 lg:py-20">
          
          {/* Sticky Section Heading - Responsive to Scroll Direction */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`
              sticky z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200
              transition-all duration-300 ease-in-out
              ${scrollDirection === 'down' ? 'top-0' : 'top-20'}
              -mx-5 px-5 sm:-mx-8 sm:px-8
              py-4 sm:py-5 md:py-6
              mb-8 sm:mb-10 md:mb-12
            `}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center max-w-7xl mx-auto">
              Choose Your Preferred Way to Connect
            </h2>
          </motion.div>
          
          {/* Card Grid - 1 Mobile / 2 Tablet / 3 Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ContactOptionCard {...option} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form - Responsive Fix */}
      <section className="bg-gray-50 px-5 py-12 sm:px-8 sm:py-14 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* 2-Column Desktop, Stack Tablet/Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-10 xl:gap-12">
            
            {/* Form Column - 70% Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm border border-gray-200">
                
                {/* Form Heading - Responsive Scaling */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                  Send us a Message
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-7 md:mb-8 leading-relaxed">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  
                  {/* Full Name Field */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent outline-none transition-all text-sm sm:text-base text-gray-900"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email & Phone - 2 Columns Desktop, Stack Mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent outline-none transition-all text-sm sm:text-base text-gray-900"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                        Phone Number <span className="text-gray-400">(with country code)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent outline-none transition-all text-sm sm:text-base text-gray-900"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  {/* User Type & Country - 2 Columns Desktop, Stack Mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label htmlFor="userType" className="block text-sm font-medium text-gray-900 mb-2">
                        I am a <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="userType"
                        name="userType"
                        required
                        value={formData.userType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent outline-none transition-all bg-white text-sm sm:text-base text-gray-900"
                      >
                        <option value="">Select...</option>
                        <option value="student">Student</option>
                        <option value="parent">Parent</option>
                        <option value="partner">Partner/Institution</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-900 mb-2">
                        Destination Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent outline-none transition-all bg-white text-sm sm:text-base text-gray-900"
                      >
                        <option value="">Select country...</option>
                        {countries.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Current Stage - Full Width */}
                  <div>
                    <label htmlFor="stage" className="block text-sm font-medium text-gray-900 mb-2">
                      Current Stage
                    </label>
                    <select
                      id="stage"
                      name="stage"
                      value={formData.stage}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent outline-none transition-all bg-white text-sm sm:text-base text-gray-900"
                    >
                      <option value="">Select stage...</option>
                      {stages.map(stage => (
                        <option key={stage} value={stage}>{stage}</option>
                      ))}
                    </select>
                  </div>

                  {/* Checkbox Group - 3 Cols Desktop / 2 Cols Tablet / 1 Col Mobile */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-3">
                      What do you need help with? <span className="text-gray-500">(Select all that apply)</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {helpOptions.map(option => (
                        <label
                          key={option}
                          className="flex items-center space-x-2 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={formData.helpWith.includes(option)}
                            onChange={() => handleMultiSelectChange(option)}
                            className="w-4 h-4 text-[#4B6E48] border-gray-300 rounded focus:ring-[#4B6E48] cursor-pointer"
                          />
                          <span className="text-sm text-gray-900 group-hover:text-[#4B6E48] transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent outline-none transition-all resize-none text-sm sm:text-base text-gray-900"
                      placeholder="Tell us more about what you need help with..."
                    />
                  </div>

                  {/* Smart Routing Indicator */}
                  {formData.userType && formData.helpWith.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-green-900">Smart Routing Enabled</p>
                        <p className="text-xs text-green-700 mt-1">
                          Your query will be routed to our {formData.helpWith[0]} specialist for faster resolution.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Consent Checkbox */}
                  <div>
                    <label className="flex items-start space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="consent"
                        required
                        checked={formData.consent}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#4B6E48] border-gray-300 rounded focus:ring-[#4B6E48] mt-1 cursor-pointer"
                      />
                      <span className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-900 transition-colors leading-relaxed">
                        I agree to be contacted via email, phone, or WhatsApp regarding my enquiry. View our{' '}
                        <a href="/privacy" className="text-[#4B6E48] hover:underline font-medium">Privacy Policy</a>.
                      </span>
                    </label>
                  </div>

                  {/* Submit Buttons - Responsive Stack */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                    <StandardButton type="submit" className="flex-1 flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </StandardButton>
                    <button
                      type="button"
                      onClick={() => window.open('https://calendly.com/example', '_blank')}
                      className="flex-1 py-3 px-6 border-2 border-gray-300 rounded-xl text-sm font-medium text-gray-900 hover:border-[#4B6E48] hover:text-[#4B6E48] transition-colors"
                    >
                      Book a Call Instead
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Sidebar Column - 30% Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5 sm:space-y-6"
            >
              
              {/* Support Hours Card */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#4B6E48] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Support Hours</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium text-gray-900">9 AM - 6 PM IST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-gray-900">10 AM - 4 PM IST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-gray-900">Closed</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      <span className="font-medium text-[#4B6E48]">WhatsApp:</span> Available 24/7 for urgent queries
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details Card */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-5">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#4B6E48] flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500 mb-1">Email</p>
                      <a href="mailto:support@example.com" className="text-sm font-medium text-gray-900 hover:text-[#4B6E48] transition-colors break-words">
                        support@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-[#4B6E48] flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500 mb-1">WhatsApp</p>
                      <a href="https://wa.me/1234567890" className="text-sm font-medium text-gray-900 hover:text-[#4B6E48] transition-colors break-words">
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#4B6E48] flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500 mb-1">Office</p>
                      <p className="text-sm text-gray-900 leading-relaxed">
                        123 Education Street<br />
                        Mumbai, Maharashtra 400001<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="bg-gradient-to-br from-[#4B6E48] to-[#3d5a3a] rounded-2xl p-5 sm:p-6 text-white">
                <h3 className="text-base sm:text-lg font-semibold mb-2">⚡ Quick Response</h3>
                <p className="text-sm text-white/95 mb-4 leading-relaxed">
                  Average response time: <span className="font-bold">Under 4 hours</span>
                </p>
                <p className="text-xs text-white/85 leading-relaxed">
                  90% of queries resolved in first response. Our dedicated team ensures you get the help you need, fast.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Book a Call Block */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-12"
          >
            <Calendar className="w-16 h-16 text-[#4B6E48] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prefer to Talk?</h2>
            <p className="text-gray-600 mb-2">
              Schedule a free consultation call with our expert advisors
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Choose from 15-minute quick calls or 30-minute detailed sessions
            </p>
            <StandardButton onClick={() => window.open('https://calendly.com/example', '_blank')}>
              Choose a Time Slot
            </StandardButton>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Fully Responsive with Centered Max-Width Container */}
      <section className="bg-gray-50 px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16 lg:py-20">
        
        {/* Centered Container - Max-Width 720-800px */}
        <div className="max-w-[780px] mx-auto">
          
          {/* Section Heading - Optimized Typography Scaling */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-14"
          >
            <h2 className="text-[26px] sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-5 leading-[1.2] px-2">
              Frequently Asked Questions
            </h2>
            <p className="text-[15px] sm:text-base md:text-lg text-gray-600 leading-[1.6] px-2">
              Quick answers to common questions about contacting us
            </p>
          </motion.div>

          {/* FAQ Accordion Container - Consistent Styling */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer Compliance */}
      <section className="py-8 px-4 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm text-gray-500">
            <p className="mb-3">
              <strong className="text-gray-700">Important:</strong> We do not provide legal advice, immigration services, or guaranteed university admissions. 
              We offer guidance, support, and concierge services to make your study abroad journey smoother.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/privacy" className="hover:text-[#4B6E48] transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="/terms" className="hover:text-[#4B6E48] transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="/cookies" className="hover:text-[#4B6E48] transition-colors">Cookie Policy</a>
              <span>•</span>
              <a href="/refund" className="hover:text-[#4B6E48] transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}