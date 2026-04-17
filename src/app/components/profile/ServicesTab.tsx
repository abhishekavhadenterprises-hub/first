import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Plane, Home, CreditCard, Shield, Briefcase, CheckCircle2, Clock, X } from 'lucide-react';
import { StandardButton } from '@/app/components/ui/standard-button';
import { showToast } from '@/app/components/ui/toast';

interface Service {
  id: string;
  name: string;
  status: 'completed' | 'active' | 'pending';
  price: string;
  description?: string;
}

interface VisaStep {
  id: string;
  step: string;
  status: 'completed' | 'active' | 'pending';
}

interface ServiceHistoryItem {
  id: string;
  service: string;
  date: string;
  status: 'completed' | 'active';
  rating: number | null;
}

export function ServicesTab() {
  const [applicationServices, setApplicationServices] = useState<Service[]>(() => {
    const saved = localStorage.getItem('applicationServices');
    return saved ? JSON.parse(saved) : [
      { id: '1', name: 'SOP Review', status: 'completed', price: '$99', description: 'Professional review of your Statement of Purpose' },
      { id: '2', name: 'LOR Assistance', status: 'active', price: '$149', description: 'Get help with Letter of Recommendation' },
      { id: '3', name: 'Form Filling', status: 'pending', price: '$79', description: 'Expert assistance with application forms' }
    ];
  });

  const [visaServices, setVisaServices] = useState<VisaStep[]>(() => {
    const saved = localStorage.getItem('visaServices');
    return saved ? JSON.parse(saved) : [
      { id: '1', step: 'Document Checklist', status: 'completed' },
      { id: '2', step: 'Visa Application', status: 'active' },
      { id: '3', step: 'Biometrics Appointment', status: 'pending' },
      { id: '4', step: 'Embassy Interview', status: 'pending' }
    ];
  });

  const [serviceHistory, setServiceHistory] = useState<ServiceHistoryItem[]>(() => {
    const saved = localStorage.getItem('serviceHistory');
    return saved ? JSON.parse(saved) : [
      { id: '1', service: 'SOP Review', date: 'Jan 15, 2026', status: 'completed', rating: 5 },
      { id: '2', service: 'University Shortlist', date: 'Jan 10, 2026', status: 'completed', rating: 5 },
      { id: '3', service: 'LOR Assistance', date: 'Jan 5, 2026', status: 'active', rating: null }
    ];
  });

  const [showServiceModal, setShowServiceModal] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    localStorage.setItem('applicationServices', JSON.stringify(applicationServices));
  }, [applicationServices]);

  useEffect(() => {
    localStorage.setItem('visaServices', JSON.stringify(visaServices));
  }, [visaServices]);

  useEffect(() => {
    localStorage.setItem('serviceHistory', JSON.stringify(serviceHistory));
  }, [serviceHistory]);

  const settlementServices = [
    { icon: Home, name: 'Housing', status: 'Available', price: 'From $50', action: () => showToast('Opening Housing Services...', 'info') },
    { icon: CreditCard, name: 'SIM Card', status: 'Available', price: '$25', action: () => showToast('Opening SIM Card Services...', 'info') },
    { icon: Shield, name: 'Banking', status: 'Available', price: 'Free', action: () => showToast('Opening Banking Services...', 'info') },
    { icon: CreditCard, name: 'Forex', status: 'Available', price: 'Best Rates', action: () => showToast('Opening Forex Services...', 'info') },
    { icon: Shield, name: 'Insurance', status: 'Available', price: 'From $100', action: () => showToast('Opening Insurance Services...', 'info') }
  ];

  const employmentServices = [
    { name: 'Part-time Jobs', desc: 'Find part-time opportunities', action: () => showToast('Opening Job Portal...', 'info') },
    { name: 'Internships', desc: 'Explore internship programs', action: () => showToast('Opening Internship Portal...', 'info') },
    { name: 'Work Visa Support', desc: 'Get work visa assistance', action: () => showToast('Opening Visa Support...', 'info') },
    { name: 'Career Counseling', desc: 'Professional career guidance', action: () => showToast('Opening Career Counseling...', 'info') }
  ];

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setShowServiceModal(true);
  };

  const handleBookService = (serviceId: string) => {
    setApplicationServices(applicationServices.map(s => 
      s.id === serviceId ? { ...s, status: 'active' } : s
    ));
    setShowServiceModal(false);
    showToast('Service booked successfully!', 'success');
  };

  const handleVisaStepUpdate = (stepId: string, newStatus: 'completed' | 'active' | 'pending') => {
    setVisaServices(visaServices.map(s => 
      s.id === stepId ? { ...s, status: newStatus } : s
    ));
    showToast('Visa step updated!', 'success');
  };

  const handleRateService = (historyId: string, rating: number) => {
    setServiceHistory(serviceHistory.map(h => 
      h.id === historyId ? { ...h, rating } : h
    ));
    showToast('Thank you for your rating!', 'success');
  };

  return (
    <div className="space-y-6 md:space-y-8 max-w-[1440px] mx-auto overflow-visible">
      {/* Application Services */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Application Services</h2>
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {applicationServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-base md:text-lg text-gray-900 flex-1 mr-2">{service.name}</h3>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 font-medium ${
                    service.status === 'completed'
                      ? 'bg-green-100 text-green-700'
                      : service.status === 'active'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {service.status}
                </span>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-[#4B6E48] mb-4">{service.price}</p>
              <button
                onClick={() => handleServiceClick(service)}
                className="w-full py-2.5 md:py-3 bg-gray-100 hover:bg-[#4B6E48] hover:text-white text-gray-900 rounded-lg text-sm md:text-base font-medium transition-all min-h-[44px]"
              >
                {service.status === 'completed' ? 'View Details' : service.status === 'active' ? 'Continue' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Visa & Compliance */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Visa & Compliance</h2>
        <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm">
          <div className="space-y-3">
            {visaServices.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col min-[500px]:flex-row min-[500px]:items-center min-[500px]:justify-between gap-3 p-3 md:p-4 border border-gray-200 rounded-lg"
              >
                <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                  {step.status === 'completed' ? (
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0" />
                  ) : step.status === 'active' ? (
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-4 border-blue-500 border-t-transparent animate-spin flex-shrink-0" />
                  ) : (
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-gray-300 flex-shrink-0" />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm md:text-base text-gray-900 truncate">{step.step}</p>
                    <p className="text-xs md:text-sm text-gray-500 capitalize">{step.status}</p>
                  </div>
                </div>
                <div className="flex gap-2 justify-end flex-shrink-0">
                  {step.status === 'active' && (
                    <button
                      onClick={() => handleVisaStepUpdate(step.id, 'completed')}
                      className="text-xs md:text-sm px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors font-medium min-h-[36px] whitespace-nowrap"
                    >
                      Mark Complete
                    </button>
                  )}
                  {step.status !== 'pending' && (
                    <button
                      onClick={() => showToast('Opening visa step details...', 'info')}
                      className="text-xs md:text-sm px-3 py-2 text-[#4B6E48] hover:bg-[#4B6E48]/10 rounded-lg transition-colors font-medium min-h-[36px] whitespace-nowrap"
                    >
                      {step.status === 'completed' ? 'View' : 'Continue'}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Settlement Services */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Settlement Services</h2>
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {settlementServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 hover:border-[#4B6E48] transition-all cursor-pointer group shadow-sm hover:shadow-md"
                onClick={service.action}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-100 group-hover:bg-[#4B6E48] rounded-lg flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">{service.name}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 font-medium">{service.price}</p>
                <span className="text-xs md:text-sm px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium inline-block">
                  {service.status}
                </span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Employment Support */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Employment Support</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
          {employmentServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 hover:border-[#4B6E48] transition-all cursor-pointer shadow-sm hover:shadow-md"
              onClick={service.action}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-sm md:text-base text-gray-600">{service.desc}</p>
                </div>
                <Briefcase className="w-6 h-6 md:w-7 md:h-7 text-gray-400 flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service History */}
      <section className="overflow-visible">
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Service History</h2>
        <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm">
          <div className="space-y-3">
            {serviceHistory.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col min-[600px]:flex-row min-[600px]:items-center min-[600px]:justify-between gap-3 p-3 md:p-4 border border-gray-200 rounded-lg"
              >
                <div className="min-w-0">
                  <p className="font-semibold text-sm md:text-base text-gray-900">{item.service}</p>
                  <p className="text-xs md:text-sm text-gray-500">{item.date}</p>
                </div>
                <div className="flex items-center gap-3 md:gap-4 justify-between min-[600px]:justify-end flex-shrink-0">
                  {item.rating ? (
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <button
                          key={i}
                          onClick={() => handleRateService(item.id, i + 1)}
                          className="text-amber-400 hover:scale-110 transition-transform text-lg md:text-xl"
                        >
                          {i < item.rating ? '★' : '☆'}
                        </button>
                      ))}
                    </div>
                  ) : item.status === 'completed' ? (
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <button
                          key={i}
                          onClick={() => handleRateService(item.id, i + 1)}
                          className="text-gray-300 hover:text-amber-400 hover:scale-110 transition-all text-lg md:text-xl"
                        >
                          ☆
                        </button>
                      ))}
                    </div>
                  ) : null}
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap font-medium ${
                      item.status === 'completed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      <AnimatePresence>
        {showServiceModal && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowServiceModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{selectedService.name}</h3>
                <button
                  onClick={() => setShowServiceModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-bold text-[#4B6E48] mb-2">{selectedService.price}</p>
                  <p className="text-gray-600">{selectedService.description}</p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Status:</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      selectedService.status === 'completed'
                        ? 'bg-green-100 text-green-700'
                        : selectedService.status === 'active'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {selectedService.status}
                  </span>
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    onClick={() => setShowServiceModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-900 font-medium"
                  >
                    Close
                  </button>
                  {selectedService.status === 'pending' && (
                    <StandardButton
                      onClick={() => handleBookService(selectedService.id)}
                      className="flex-1 !h-10"
                    >
                      Book Service
                    </StandardButton>
                  )}
                  {selectedService.status === 'active' && (
                    <StandardButton
                      onClick={() => showToast('Opening service dashboard...', 'info')}
                      className="flex-1 !h-10"
                    >
                      Continue
                    </StandardButton>
                  )}
                  {selectedService.status === 'completed' && (
                    <StandardButton
                      onClick={() => showToast('Downloading service report...', 'info')}
                      className="flex-1 !h-10"
                    >
                      Download Report
                    </StandardButton>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}