import { motion } from 'motion/react';
import { Footer } from '@/app/components/Footer';
import { RefreshCw, Mail, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export default function Refund() {
  const lastUpdated = "February 5, 2026";

  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'eligibility', title: 'Refund Eligibility' },
    { id: 'services', title: 'Service-Specific Policies' },
    { id: 'non-refundable', title: 'Non-Refundable Services' },
    { id: 'process', title: 'Refund Request Process' },
    { id: 'timeline', title: 'Processing Timeline' },
    { id: 'cancellation', title: 'Cancellation Policy' },
    { id: 'exceptions', title: 'Exceptions & Special Cases' },
    { id: 'contact', title: 'Contact Us' }
  ];

  const serviceRefunds = [
    {
      service: 'University Application Assistance',
      refundable: 'Partial',
      conditions: 'Full refund before work begins. 50% refund if cancelled before submission. No refund after submission.',
      timeline: '5-7 business days'
    },
    {
      service: 'Visa Assistance',
      refundable: 'Partial',
      conditions: 'Full refund if cancelled before document review begins. No refund after application submitted.',
      timeline: '7-10 business days'
    },
    {
      service: 'Housing Services',
      refundable: 'Yes',
      conditions: 'Full refund if property not confirmed. Booking fees non-refundable after confirmation.',
      timeline: '10-14 business days'
    },
    {
      service: 'Loan Processing',
      refundable: 'Partial',
      conditions: 'Processing fees non-refundable. Other fees refundable if loan not sanctioned.',
      timeline: '14-21 business days'
    },
    {
      service: 'Insurance Plans',
      refundable: 'Yes',
      conditions: 'Full refund within 14 days if policy not activated. Pro-rated refund after activation.',
      timeline: '7-14 business days'
    },
    {
      service: 'Concierge Packages',
      refundable: 'Partial',
      conditions: 'Unused services refunded on pro-rata basis. Setup fees non-refundable.',
      timeline: '5-10 business days'
    }
  ];

  return (
    <>

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-[#4B6E48]/5 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#4B6E48]/10 rounded-full text-[#4B6E48] text-sm font-medium mb-6"
          >
            <RefreshCw className="w-4 h-4" />
            Legal
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-gray-900"
          >
            Refund & Cancellation Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Last updated: {lastUpdated}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Table of Contents - Sticky Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="lg:sticky lg:top-24">
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-500">Contents</h3>
                  <nav className="space-y-2">
                    {sections.map((section, index) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-sm text-gray-600 hover:text-[#4B6E48] transition-colors py-1"
                      >
                        {index + 1}. {section.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </motion.aside>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-4"
            >
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 space-y-12">
                
                {/* Overview */}
                <div id="overview" className="scroll-mt-24 pb-8 border-b border-gray-200">
                  <h2 className="text-2xl font-bold mb-4">Overview</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We strive to provide exceptional services to all our users. This Refund and Cancellation Policy outlines the terms under which refunds may be requested and processed for our various services.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-blue-900 font-medium mb-1">Important</p>
                      <p className="text-sm text-blue-700">
                        Refund eligibility varies by service type and timing of cancellation. Please read this policy carefully before purchasing our services.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Eligibility */}
                <div id="eligibility" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-[#4B6E48]" />
                    Refund Eligibility
                  </h2>
                  <p className="text-gray-700 mb-4">You may be eligible for a refund if:</p>
                  <ul className="space-y-2 text-gray-700 ml-4 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>You cancel within the specified cancellation window for your service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>We fail to deliver the service as promised in our agreement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>There was a billing error or duplicate charge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>The service was cancelled by us due to unforeseen circumstances</span>
                    </li>
                  </ul>

                  <p className="text-gray-700 mb-4">You are <strong>not eligible</strong> for a refund if:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>You change your mind after services have been substantially delivered</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Your application is rejected by a university or visa authority (outcomes we don't control)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>You failed to provide required information or documents in a timely manner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>You violate our Terms & Conditions</span>
                    </li>
                  </ul>
                </div>

                {/* Service-Specific Policies */}
                <div id="services" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-6">Service-Specific Refund Policies</h2>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900">Service</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900">Refundable</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900">Conditions</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900">Timeline</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {serviceRefunds.map((item, index) => (
                          <tr key={index} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-4 font-medium text-gray-900">{item.service}</td>
                            <td className="px-4 py-4">
                              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                                item.refundable === 'Yes' 
                                  ? 'bg-green-100 text-green-800' 
                                  : item.refundable === 'Partial'
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {item.refundable}
                              </span>
                            </td>
                            <td className="px-4 py-4 text-gray-700">{item.conditions}</td>
                            <td className="px-4 py-4 text-gray-600">{item.timeline}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Non-Refundable Services */}
                <div id="non-refundable" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <XCircle className="w-6 h-6 text-red-600" />
                    Non-Refundable Services
                  </h2>
                  <p className="text-gray-700 mb-4">The following are <strong>strictly non-refundable</strong>:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                      <p className="font-semibold text-red-900 mb-2">Third-Party Fees</p>
                      <p className="text-sm text-red-700">University application fees, visa fees, test registration fees paid to external parties</p>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                      <p className="font-semibold text-red-900 mb-2">Document Services</p>
                      <p className="text-sm text-red-700">Transcript evaluation, document translation, notarization services (once completed)</p>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                      <p className="font-semibold text-red-900 mb-2">Event Tickets</p>
                      <p className="text-sm text-red-700">Pre-departure workshops, networking events, webinar registrations</p>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                      <p className="font-semibold text-red-900 mb-2">Premium Consultations</p>
                      <p className="text-sm text-red-700">One-on-one expert consultations (once the session is conducted)</p>
                    </div>
                  </div>
                </div>

                {/* Refund Process */}
                <div id="process" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <RefreshCw className="w-6 h-6 text-[#4B6E48]" />
                    Refund Request Process
                  </h2>
                  <p className="text-gray-700 mb-6">Follow these steps to request a refund:</p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#4B6E48] text-white flex items-center justify-center font-semibold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Submit Request</h4>
                        <p className="text-sm text-gray-700">Email us at <a href="mailto:refunds@example.com" className="text-[#4B6E48] hover:underline">refunds@example.com</a> with your order details and reason for refund</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#4B6E48] text-white flex items-center justify-center font-semibold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Provide Information</h4>
                        <p className="text-sm text-gray-700">Include: Transaction ID, service name, purchase date, payment method, and detailed reason</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#4B6E48] text-white flex items-center justify-center font-semibold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Review Process</h4>
                        <p className="text-sm text-gray-700">Our team will review your request within 2-3 business days and respond with approval or denial</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#4B6E48] text-white flex items-center justify-center font-semibold flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Receive Refund</h4>
                        <p className="text-sm text-gray-700">If approved, refund will be processed to your original payment method within the timeline specified</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Processing Timeline */}
                <div id="timeline" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Clock className="w-6 h-6 text-[#4B6E48]" />
                    Processing Timeline
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Once your refund is approved, processing times vary by payment method:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">â€¢</span>
                      <span><strong>Credit/Debit Card:</strong> 5-10 business days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">â€¢</span>
                      <span><strong>Net Banking:</strong> 3-7 business days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">â€¢</span>
                      <span><strong>UPI/Wallets:</strong> 2-5 business days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B6E48] mt-1">â€¢</span>
                      <span><strong>Bank Transfer:</strong> 7-14 business days</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4 italic">
                    Note: Processing times may be longer during holidays or due to banking delays beyond our control.
                  </p>
                </div>

                {/* Cancellation Policy */}
                <div id="cancellation" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">Cancellation Policy</h2>
                  
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 mb-6">
                    <h3 className="font-semibold text-amber-900 mb-3">Cancellation Windows</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-amber-900">Within 24 hours:</strong>
                          <p className="text-amber-800">Full refund for most services (if no work has started)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-amber-900">24-72 hours:</strong>
                          <p className="text-amber-800">75% refund (subject to service type)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-amber-900">After 72 hours:</strong>
                          <p className="text-amber-800">No refund if services have been substantially delivered</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm">
                    To cancel a service, email <a href="mailto:support@example.com" className="text-[#4B6E48] hover:underline">support@example.com</a> with your order number and cancellation request.
                  </p>
                </div>

                {/* Exceptions */}
                <div id="exceptions" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">Exceptions & Special Cases</h2>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-5">
                      <h4 className="font-semibold text-gray-900 mb-2">Medical Emergencies</h4>
                      <p className="text-sm text-gray-700">Full refunds may be granted in case of medical emergencies with valid documentation (doctor's certificate, hospitalization records).</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-5">
                      <h4 className="font-semibold text-gray-900 mb-2">Force Majeure</h4>
                      <p className="text-sm text-gray-700">In cases of natural disasters, pandemics, war, or government restrictions, special refund considerations will apply.</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-5">
                      <h4 className="font-semibold text-gray-900 mb-2">Service Failure on Our Part</h4>
                      <p className="text-sm text-gray-700">If we fail to deliver services due to errors or negligence, full refunds plus compensation may be provided.</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-5">
                      <h4 className="font-semibold text-gray-900 mb-2">Promotional Offers</h4>
                      <p className="text-sm text-gray-700">Services purchased at discounted or promotional rates may have different refund terms as stated at time of purchase.</p>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div id="contact" className="scroll-mt-24 pt-8 border-t border-gray-200">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Mail className="w-6 h-6 text-[#4B6E48]" />
                    Contact Us for Refunds
                  </h2>
                  <p className="text-gray-700 mb-4">For refund or cancellation requests, please contact:</p>
                  
                  <div className="bg-[#4B6E48]/5 rounded-xl p-6 border border-[#4B6E48]/20">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-[#4B6E48] mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <a href="mailto:refunds@example.com" className="font-medium text-[#4B6E48] hover:underline">
                            refunds@example.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-[#4B6E48] mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600">Response Time</p>
                          <p className="text-sm text-gray-900">Within 2-3 business days</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mt-6 italic">
                    This policy is subject to our <a href="/terms" className="text-[#4B6E48] hover:underline">Terms & Conditions</a>. In case of disputes, our decision shall be final.
                  </p>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
