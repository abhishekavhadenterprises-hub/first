import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  User, 
  FileText,
  Calendar,
  TrendingUp,
  Home,
  CreditCard,
  Shield,
  Plane,
  X,
  Plus,
  Edit2,
  Trash2,
  Mail,
  Phone,
  MessageSquare,
  Bell,
  Upload,
  Eye,
  Tag
} from 'lucide-react';
import { StandardButton } from '@/app/components/ui/standard-button';
import { showToast } from '@/app/components/ui/toast';

interface ProfileHealthItem {
  field: string;
  status: 'missing' | 'pending' | 'complete';
  priority: 'high' | 'medium' | 'low';
}

interface Service {
  title: string;
  status: string;
  counselor: string;
  counselorStatus: 'assigned' | 'auto-assigned' | 'pending';
  lastUpdate: string;
  icon: any;
  description: string;
  nextStep: string;
  progressDetails: string;
  actionButtons: Array<{
    label: string;
    action: string;
    primary?: boolean;
  }>;
}

interface Alert {
  id: string;
  type: 'deadline' | 'payment' | 'visa' | 'intake';
  title: string;
  detail: string;
  date: string;
}

interface Task {
  id: string;
  task: string;
  priority: 'high' | 'medium' | 'low';
  deadline: string;
  completed: boolean;
}

export function OverviewTab() {
  // Load data from localStorage or use defaults
  const [currentStageId, setCurrentStageId] = useState(() => {
    const saved = localStorage.getItem('journeyStage');
    return saved ? parseInt(saved) : 3;
  });

  const [showStageModal, setShowStageModal] = useState(false);
  
  const [profileHealth, setProfileHealth] = useState<ProfileHealthItem[]>(() => {
    const saved = localStorage.getItem('profileHealth');
    return saved ? JSON.parse(saved) : [
      { field: 'IELTS Score', status: 'missing', priority: 'high' },
      { field: 'SOP', status: 'pending', priority: 'medium' },
      { field: 'LOR 2', status: 'pending', priority: 'medium' },
      { field: 'Portfolio', status: 'complete', priority: 'low' },
      { field: 'Transcripts', status: 'complete', priority: 'high' },
      { field: 'LOR 1', status: 'complete', priority: 'medium' }
    ];
  });

  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('nextActions');
    return saved ? JSON.parse(saved) : [
      { id: '1', task: 'Upload Official Transcript', priority: 'high', deadline: '2026-02-07', completed: false },
      { id: '2', task: 'Book Counselor Session', priority: 'high', deadline: '2026-02-10', completed: false },
      { id: '3', task: 'Finalize University List', priority: 'medium', deadline: '2026-02-12', completed: false },
      { id: '4', task: 'Submit Visa Documents', priority: 'medium', deadline: '2026-02-19', completed: false }
    ];
  });

  const [alerts, setAlerts] = useState<Alert[]>(() => {
    const saved = localStorage.getItem('alerts');
    return saved ? JSON.parse(saved) : [
      { id: '1', type: 'deadline', title: 'Application Deadline', detail: 'MIT - Feb 15, 2026', date: '2026-02-15' },
      { id: '2', type: 'payment', title: 'Payment Due', detail: 'Application Fee - Stanford', date: '2026-02-10' },
      { id: '3', type: 'visa', title: 'Visa Appointment', detail: 'US Embassy - Feb 20, 2026', date: '2026-02-20' },
      { id: '4', type: 'intake', title: 'Intake Reminder', detail: 'Fall 2026 - Last chance', date: '2026-03-07' }
    ];
  });

  // Modals
  const [showHealthModal, setShowHealthModal] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [editingAlert, setEditingAlert] = useState<Alert | null>(null);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('journeyStage', currentStageId.toString());
  }, [currentStageId]);

  useEffect(() => {
    localStorage.setItem('profileHealth', JSON.stringify(profileHealth));
  }, [profileHealth]);

  useEffect(() => {
    localStorage.setItem('nextActions', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('alerts', JSON.stringify(alerts));
  }, [alerts]);

  const stageNames = [
    { id: 1, name: 'Exploration' },
    { id: 2, name: 'Shortlisting' },
    { id: 3, name: 'Applications' },
    { id: 4, name: 'Acceptance' },
    { id: 5, name: 'Pre-departure' },
    { id: 6, name: 'Arrival' }
  ];

  const journeyStages = stageNames.map(stage => ({
    ...stage,
    status: stage.id < currentStageId ? 'completed' : stage.id === currentStageId ? 'current' : 'pending'
  }));

  const progressPercentage = ((currentStageId - 1) / (stageNames.length - 1)) * 100;

  const handleStageClick = (stageId: number) => {
    setCurrentStageId(stageId);
  };

  // Calculate profile health percentage
  const completedFields = profileHealth.filter(item => item.status === 'complete').length;
  const healthPercentage = Math.round((completedFields / profileHealth.length) * 100);

  // Toggle profile health item status
  const toggleHealthStatus = (index: number) => {
    const newHealth = [...profileHealth];
    if (newHealth[index].status === 'complete') {
      newHealth[index].status = 'missing';
    } else if (newHealth[index].status === 'missing') {
      newHealth[index].status = 'pending';
    } else {
      newHealth[index].status = 'complete';
    }
    setProfileHealth(newHealth);
  };

  // Calculate days left for alerts
  const calculateDaysLeft = (dateStr: string) => {
    const today = new Date('2026-02-05'); // Using the current date from system
    const targetDate = new Date(dateStr);
    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Calculate days left for tasks
  const calculateTaskDaysLeft = (dateStr: string) => {
    const today = new Date('2026-02-05');
    const targetDate = new Date(dateStr);
    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} days`;
  };

  // Task functions
  const handleCheckAction = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleAddTask = () => {
    setEditingTask({
      id: Date.now().toString(),
      task: '',
      priority: 'medium',
      deadline: '',
      completed: false
    });
    setShowTaskModal(true);
  };

  const handleSaveTask = (task: Task) => {
    if (tasks.find(t => t.id === task.id)) {
      setTasks(tasks.map(t => t.id === task.id ? task : t));
    } else {
      setTasks([...tasks, task]);
    }
    setShowTaskModal(false);
    setEditingTask(null);
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  // Alert functions
  const handleAddAlert = () => {
    setEditingAlert({
      id: Date.now().toString(),
      type: 'deadline',
      title: '',
      detail: '',
      date: ''
    });
    setShowAlertModal(true);
  };

  const handleSaveAlert = (alert: Alert) => {
    if (alerts.find(a => a.id === alert.id)) {
      setAlerts(alerts.map(a => a.id === alert.id ? alert : a));
    } else {
      setAlerts([...alerts, alert]);
    }
    setShowAlertModal(false);
    setEditingAlert(null);
  };

  const handleDeleteAlert = (id: string) => {
    setAlerts(alerts.filter(a => a.id !== id));
  };

  const activeServices: Service[] = [
    {
      title: 'University Shortlisting',
      status: 'Awaiting Review',
      counselor: 'Sarah Johnson',
      counselorStatus: 'assigned',
      lastUpdate: '2 hours ago',
      icon: TrendingUp,
      description: 'Comprehensive university selection based on your profile, budget, and preferences. We\'ve shortlisted 12 universities across US, UK, and Canada.',
      nextStep: 'Review shortlisted universities',
      progressDetails: '12 universities shortlisted',
      actionButtons: [
        { label: 'Review', action: 'review', primary: true },
        { label: 'Contact Counselor', action: 'contact' }
      ]
    },
    {
      title: 'Visa Support',
      status: 'Documents Ready',
      counselor: 'Michael Chen',
      counselorStatus: 'assigned',
      lastUpdate: 'Yesterday',
      icon: Plane,
      description: 'End-to-end visa application support including document preparation, interview coaching, and appointment booking.',
      nextStep: 'Submit visa documents',
      progressDetails: 'Documents prepared',
      actionButtons: [
        { label: 'Submit', action: 'submit', primary: true },
        { label: 'Contact Counselor', action: 'contact' }
      ]
    },
    {
      title: 'Accommodation',
      status: 'Options Available',
      counselor: 'Emily Davis',
      counselorStatus: 'assigned',
      lastUpdate: '3 days ago',
      icon: Home,
      description: 'Finding suitable on-campus or off-campus housing near your university with safety and budget considerations.',
      nextStep: 'Book accommodation',
      progressDetails: 'Housing options found',
      actionButtons: [
        { label: 'Book', action: 'book', primary: true },
        { label: 'Contact Counselor', action: 'contact' }
      ]
    },
    {
      title: 'Banking',
      status: 'Setup Required',
      counselor: 'Unassigned',
      counselorStatus: 'pending',
      lastUpdate: 'N/A',
      icon: CreditCard,
      description: 'Assistance with opening international student bank accounts, forex, and financial planning.',
      nextStep: 'Open bank account',
      progressDetails: 'N/A',
      actionButtons: [
        { label: 'Open Account', action: 'open', primary: true },
        { label: 'Contact Counselor', action: 'contact' }
      ]
    },
    {
      title: 'Insurance',
      status: 'Setup Required',
      counselor: 'Unassigned',
      counselorStatus: 'pending',
      lastUpdate: 'N/A',
      icon: Shield,
      description: 'Comprehensive health and travel insurance coverage for international students.',
      nextStep: 'Purchase insurance',
      progressDetails: 'N/A',
      actionButtons: [
        { label: 'Purchase', action: 'purchase', primary: true },
        { label: 'Contact Counselor', action: 'contact' }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Journey Progress */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Journey Progress</h2>
          <StandardButton className="!h-9 !px-4 !text-sm" onClick={() => setShowStageModal(!showStageModal)}>
            {showStageModal ? 'Close' : 'Update Stage'}
          </StandardButton>
        </div>

        {showStageModal && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4"
          >
            <p className="text-sm text-blue-900 font-medium mb-3">Click on any stage below to update your progress</p>
            <div className="flex flex-wrap gap-2">
              {stageNames.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => handleStageClick(stage.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    currentStageId === stage.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  {stage.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
        
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <div className="relative">
            <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200">
              <motion.div 
                className="h-full bg-[#4B6E48] transition-all duration-500"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {journeyStages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <motion.button
                    onClick={() => handleStageClick(stage.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 relative z-10 transition-all cursor-pointer ${
                      stage.status === 'completed'
                        ? 'bg-[#4B6E48] text-white hover:bg-[#3d5a3a]'
                        : stage.status === 'current'
                        ? 'bg-blue-500 text-white ring-4 ring-blue-100 hover:bg-blue-600'
                        : 'bg-gray-200 text-gray-400 hover:bg-gray-300 hover:text-gray-600'
                    }`}
                    title={`Click to set stage to: ${stage.name}`}
                  >
                    {stage.status === 'completed' ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <span className="text-sm font-bold">{stage.id}</span>
                    )}
                  </motion.button>
                  <span
                    className={`text-xs text-center font-medium ${
                      stage.status === 'current' ? 'text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    {stage.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Current Stage</p>
              <p className="font-bold text-gray-900">{stageNames.find(s => s.id === currentStageId)?.name}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Progress</p>
              <p className="font-bold text-[#4B6E48]">{Math.round(progressPercentage)}%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Health & Next Actions Row - Responsive Grid System */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {/* Profile Health */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-5 lg:mb-6">Profile Health</h2>
          <div className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-5 sm:mb-6">
              <span className="text-2xl sm:text-3xl font-bold text-gray-900">{healthPercentage}%</span>
              <span className="text-xs sm:text-sm text-gray-500">Complete</span>
            </div>

            <div className="space-y-3 sm:space-y-3.5 lg:space-y-4">
              {profileHealth.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 sm:p-3.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => toggleHealthStatus(index)}
                  title="Click to change status"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0">
                    {item.status === 'complete' ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : item.priority === 'high' ? (
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <Clock className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    )}
                    <span className="text-[13px] sm:text-sm font-medium text-gray-900 truncate">{item.field}</span>
                  </div>
                  <span
                    className={`text-[11px] sm:text-xs px-2 py-1 rounded-full whitespace-nowrap ml-2 flex-shrink-0 ${
                      item.status === 'complete'
                        ? 'bg-green-100 text-green-700'
                        : item.priority === 'high'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {item.status}
                  </span>
                </motion.div>
              ))}
            </div>

            <StandardButton 
              className="w-full mt-5 sm:mt-6 h-12"
              onClick={() => setShowHealthModal(true)}
            >
              Complete Missing Fields
            </StandardButton>
          </div>
        </section>

        {/* Next Actions */}
        <section>
          <div className="flex items-center justify-between mb-4 sm:mb-5 lg:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Next Actions</h2>
            <button
              onClick={handleAddTask}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
              title="Add new task"
            >
              <Plus className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 border border-gray-200">
            <p className="text-xs sm:text-sm text-gray-600 mb-5 sm:mb-6">AI-powered checklist based on your journey</p>

            <div className="space-y-3 sm:space-y-3.5">
              {tasks.map((action, index) => (
                <motion.div
                  key={action.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 border rounded-lg transition-all group ${
                    action.completed
                      ? 'border-green-200 bg-green-50'
                      : 'border-gray-200 hover:border-[#4B6E48]'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={action.completed}
                    onChange={() => handleCheckAction(action.id)}
                    className="mt-0.5 sm:mt-1 w-4 h-4 text-[#4B6E48] border-gray-300 rounded focus:ring-[#4B6E48] cursor-pointer flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className={`text-[13px] sm:text-sm font-medium mb-2 ${
                      action.completed ? 'text-gray-500 line-through' : 'text-gray-900'
                    }`}>
                      {action.task}
                    </p>
                    <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-3 text-[11px] sm:text-xs text-gray-500">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full w-fit ${
                          action.priority === 'high'
                            ? 'bg-red-100 text-red-700'
                            : action.priority === 'medium'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {action.priority}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 flex-shrink-0" />
                        {calculateTaskDaysLeft(action.deadline)}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                    <button
                      onClick={() => {
                        setEditingTask(action);
                        setShowTaskModal(true);
                      }}
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <Edit2 className="w-3 h-3 text-gray-600" />
                    </button>
                    <button
                      onClick={() => handleDeleteTask(action.id)}
                      className="p-1 hover:bg-red-100 rounded"
                    >
                      <Trash2 className="w-3 h-3 text-red-600" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Active Services - Comprehensive Responsive Redesign */}
      <section className="max-w-[1440px] mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Active Services</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {activeServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 md:p-5 lg:p-6 border border-gray-200 shadow-sm hover:shadow-md cursor-pointer flex flex-col transition-all hover:border-[#4B6E48]/30"
                onClick={() => {
                  setSelectedService(service);
                  setShowServiceModal(true);
                }}
              >
                {/* Header: Icon + Badge */}
                <div className="flex items-start justify-between mb-4 md:mb-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#4B6E48]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#4B6E48]" />
                  </div>
                  <span
                    className={`text-xs md:text-sm px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 ml-2 font-medium ${
                      service.status === 'Awaiting Review'
                        ? 'bg-green-100 text-green-700'
                        : service.status === 'Options Available'
                        ? 'bg-blue-100 text-blue-700'
                        : service.status === 'Documents Ready'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {service.status}
                  </span>
                </div>

                {/* Title - Equal Height */}
                <h3 className="font-bold text-base md:text-lg lg:text-xl text-gray-900 mb-4 leading-tight min-h-[48px] md:min-h-[56px] flex items-start">
                  {service.title}
                </h3>

                {/* Counselor & Last Update Info */}
                <div className="space-y-3 text-sm md:text-base mb-4 flex-grow">
                  <div className="flex items-start gap-2.5 text-gray-600">
                    <User className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <span className="block font-medium truncate">{service.counselor}</span>
                      {service.counselorStatus === 'auto-assigned' && (
                        <span className="text-xs text-blue-600 block mt-1">(Auto-assigned)</span>
                      )}
                      {service.counselorStatus === 'pending' && (
                        <span className="text-xs text-amber-600 block mt-1">(Will be assigned)</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 text-gray-500">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="truncate text-sm">{service.lastUpdate}</span>
                  </div>
                </div>

                {/* Progress Details */}
                <div className="pt-3 md:pt-4 border-t border-gray-200">
                  <p className="text-xs md:text-sm text-gray-500 mb-1.5 font-medium">Progress</p>
                  <p className="text-sm md:text-base font-semibold text-gray-900 leading-relaxed">
                    {service.progressDetails}
                  </p>
                </div>

                {/* Next Step - Enhanced Visibility */}
                <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-200">
                  <p className="text-xs md:text-sm text-gray-500 mb-1.5 font-medium">Next Step</p>
                  <p className="text-sm md:text-base font-bold text-[#4B6E48] leading-relaxed flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">→</span>
                    <span>{service.nextStep}</span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Alerts & Deadlines */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Alerts & Deadlines</h2>
          <button
            onClick={handleAddAlert}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Add new alert"
          >
            <Plus className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {alerts.map((alert, index) => {
            const daysLeft = calculateDaysLeft(alert.date);
            return (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-lg border-l-4 group relative ${
                  daysLeft <= 7
                    ? 'border-red-500 bg-red-50'
                    : daysLeft <= 14
                    ? 'border-amber-500 bg-amber-50'
                    : 'border-blue-500 bg-blue-50'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {alert.type === 'deadline' && <Calendar className="w-4 h-4 text-gray-600" />}
                      {alert.type === 'payment' && <CreditCard className="w-4 h-4 text-gray-600" />}
                      {alert.type === 'visa' && <FileText className="w-4 h-4 text-gray-600" />}
                      {alert.type === 'intake' && <Clock className="w-4 h-4 text-gray-600" />}
                      <h4 className="font-semibold text-sm text-gray-900">{alert.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{alert.detail}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-full ${
                        daysLeft <= 7
                          ? 'bg-red-200 text-red-800'
                          : daysLeft <= 14
                          ? 'bg-amber-200 text-amber-800'
                          : 'bg-blue-200 text-blue-800'
                      }`}
                    >
                      {daysLeft}d
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteAlert(alert.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white rounded transition-opacity"
                    >
                      <X className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Modals */}
      <AnimatePresence>
        {/* Profile Health Modal */}
        {showHealthModal && (
          <Modal onClose={() => setShowHealthModal(false)} title="Complete Profile Fields">
            <div className="space-y-4">
              <p className="text-sm text-gray-600">Click on any field to update its status:</p>
              {profileHealth.map((item, index) => (
                <div
                  key={index}
                  onClick={() => toggleHealthStatus(index)}
                  className="flex items-center justify-between p-4 border rounded-lg hover:border-[#4B6E48] cursor-pointer transition-colors"
                >
                  <span className="font-medium text-gray-900">{item.field}</span>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      item.status === 'complete'
                        ? 'bg-green-100 text-green-700'
                        : item.status === 'pending'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
              <div className="pt-4">
                <StandardButton onClick={() => setShowHealthModal(false)} className="w-full !h-10">
                  Done
                </StandardButton>
              </div>
            </div>
          </Modal>
        )}

        {/* Service Detail Modal */}
        {showServiceModal && selectedService && (
          <Modal onClose={() => {
            setShowServiceModal(false);
            setSelectedService(null);
          }} title={selectedService.title}>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-600 mb-2">Status</p>
                <span
                  className={`inline-block text-sm px-3 py-1 rounded-full ${
                    selectedService.status === 'Awaiting Review'
                      ? 'bg-green-100 text-green-700'
                      : selectedService.status === 'Options Available'
                      ? 'bg-blue-100 text-blue-700'
                      : selectedService.status === 'Documents Ready'
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {selectedService.status}
                </span>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">Description</p>
                <p className="text-sm text-gray-900">{selectedService.description}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">Progress</p>
                <p className="text-sm font-medium text-gray-900">{selectedService.progressDetails}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">Next Step</p>
                <p className="text-sm font-semibold text-[#4B6E48]">{selectedService.nextStep}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-3">Counselor</p>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <User className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{selectedService.counselor}</p>
                    <p className="text-xs text-gray-500">
                      {selectedService.counselorStatus === 'assigned' && 'Assigned to you'}
                      {selectedService.counselorStatus === 'auto-assigned' && 'Auto-assigned based on your needs'}
                      {selectedService.counselorStatus === 'pending' && 'Will be assigned once you start'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-4">
                {selectedService.actionButtons.map((button, index) => (
                  button.primary ? (
                    <StandardButton key={index} className="w-full !h-10">
                      {button.label}
                    </StandardButton>
                  ) : (
                    <button
                      key={index}
                      className="w-full h-10 px-4 border-2 border-gray-300 rounded-xl text-sm font-medium hover:border-[#4B6E48] hover:text-[#4B6E48] transition-colors text-[rgb(0,0,0)]"
                    >
                      {button.label}
                    </button>
                  )
                ))}
              </div>
            </div>
          </Modal>
        )}

        {/* Task Modal */}
        {showTaskModal && editingTask && (
          <TaskModal
            task={editingTask}
            onSave={handleSaveTask}
            onClose={() => {
              setShowTaskModal(false);
              setEditingTask(null);
            }}
          />
        )}

        {/* Alert Modal */}
        {showAlertModal && editingAlert && (
          <AlertModal
            alert={editingAlert}
            onSave={handleSaveAlert}
            onClose={() => {
              setShowAlertModal(false);
              setEditingAlert(null);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Modal Component
function Modal({ children, onClose, title }: { children: React.ReactNode; onClose: () => void; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
}

// Task Modal Component
function TaskModal({ task, onSave, onClose }: { task: Task; onSave: (task: Task) => void; onClose: () => void }) {
  const [formData, setFormData] = useState(task);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.task && formData.deadline) {
      onSave(formData);
    }
  };

  return (
    <Modal onClose={onClose} title={task.task ? 'Edit Task' : 'Add New Task'}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Task Name</label>
          <input
            type="text"
            value={formData.task}
            onChange={(e) => setFormData({ ...formData, task: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
            placeholder="Enter task name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Priority</label>
          <select
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value as 'high' | 'medium' | 'low' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Deadline</label>
          <input
            type="date"
            value={formData.deadline}
            onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
            required
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-900 font-medium"
          >
            Cancel
          </button>
          <StandardButton type="submit" className="flex-1 !h-10">
            Save Task
          </StandardButton>
        </div>
      </form>
    </Modal>
  );
}

// Alert Modal Component
function AlertModal({ alert, onSave, onClose }: { alert: Alert; onSave: (alert: Alert) => void; onClose: () => void }) {
  const [formData, setFormData] = useState(alert);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.detail && formData.date) {
      onSave(formData);
    }
  };

  return (
    <Modal onClose={onClose} title={alert.title ? 'Edit Alert' : 'Add New Alert'}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Alert Type</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value as Alert['type'] })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
          >
            <option value="deadline">Deadline</option>
            <option value="payment">Payment</option>
            <option value="visa">Visa</option>
            <option value="intake">Intake</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
            placeholder="Enter alert title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Details</label>
          <input
            type="text"
            value={formData.detail}
            onChange={(e) => setFormData({ ...formData, detail: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
            placeholder="Enter alert details"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Date</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B6E48] focus:border-transparent text-gray-900 bg-white"
            required
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-900 font-medium"
          >
            Cancel
          </button>
          <StandardButton type="submit" className="flex-1 !h-10">
            Save Alert
          </StandardButton>
        </div>
      </form>
    </Modal>
  );
}