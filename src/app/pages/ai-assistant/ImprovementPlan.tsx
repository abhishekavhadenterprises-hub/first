import { useState, useRef, useMemo, useEffect } from 'react';
import { Footer } from '@/app/components/Footer';
import { AIAssistantNav } from '@/app/components/AIAssistantNav';
import { StandardButton } from '@/app/components/ui/standard-button';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import confetti from 'canvas-confetti';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { createEvent } from 'ics';
import {
  Brain,
  Target,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Calendar,
  BookOpen,
  PenTool,
  Mic,
  Headphones,
  MessageSquare,
  Settings,
  ChevronRight,
  ChevronDown,
  Clock,
  Check,
  Download,
  Share2,
  Printer,
  Plus,
  GripVertical,
  Trash2,
  Bell,
  BarChart3,
  Sparkles,
  CalendarPlus,
  Save,
  TrendingDown,
  Award,
  Timer,
  Zap,
  Flag
} from 'lucide-react';
import {
  improvementRoadmap,
  dailyActionPlan,
  skillBreakdowns
} from '@/app/data/aiAssistantData';
import { toast } from 'sonner';
import { Progress } from '@/app/components/ui/progress';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/components/ui/dialog';

// Types
interface Task {
  id: string;
  text: string;
  completed: boolean;
  priority?: 'high' | 'medium' | 'low';
  timeEstimate?: number;
  icon?: string;
}

interface WeekData {
  week: number;
  tasks: Task[];
  mockTests: string[];
  practiceSets: number;
  reviewSessions: number;
  status: 'completed' | 'current' | 'upcoming';
  timeCommitment?: number; // hours per week
  completedDate?: string;
}

interface Analytics {
  totalTimeSpent: number;
  completionRate: number;
  predictedFinishDate: string;
  weeklyProgress: { week: number; completed: number; total: number }[];
}

// LocalStorage Key
const STORAGE_KEY = 'improvement_plan_data';

// Task Icons Mapping
const TASK_ICONS: Record<string, any> = {
  reading: BookOpen,
  writing: PenTool,
  speaking: Mic,
  listening: Headphones,
  review: Target,
  test: Flag
};

// Drag and Drop Types
const TASK_TYPE = 'task';

// Draggable Task Component
const DraggableTask = ({ task, weekNum, taskIndex, onToggle, onDelete, isCompleted }: any) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: TASK_TYPE,
    item: { task, weekNum, taskIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const getTaskIcon = (taskText: string) => {
    const text = taskText.toLowerCase();
    if (text.includes('reading')) return BookOpen;
    if (text.includes('writing')) return PenTool;
    if (text.includes('speaking')) return Mic;
    if (text.includes('listening')) return Headphones;
    if (text.includes('review')) return Target;
    if (text.includes('test') || text.includes('mock')) return Flag;
    return CheckCircle;
  };

  const TaskIcon = getTaskIcon(task.text);
  const priorityColors = {
    high: 'text-red-600 bg-red-50 border-red-200',
    medium: 'text-amber-600 bg-amber-50 border-amber-200',
    low: 'text-blue-600 bg-blue-50 border-blue-200'
  };

  return (
    <li
      ref={drag}
      className={`flex items-start gap-3 group cursor-pointer p-3 rounded-lg border-l-4 transition-all min-h-[64px] ${
        isDragging ? 'opacity-50 scale-95' : 'opacity-100'
      } ${isCompleted ? 'bg-gray-50 border-gray-400' : priorityColors[task.priority || 'low']}`}
      onClick={() => onToggle(weekNum, taskIndex)}
      style={{ 
        opacity: isDragging ? 0.5 : 1,
        borderLeftWidth: '4px',
        borderLeftStyle: 'solid',
        minWidth: '4px'
      }}
    >
      <GripVertical className="w-4 h-4 max-[440px]:w-3 max-[440px]:h-3 text-gray-400 mt-0.5 cursor-grab flex-shrink-0 self-start" />
      <button
        className={`mt-0.5 w-[18px] h-[18px] rounded border-2 flex items-center justify-center transition-all flex-shrink-0 self-start ${
          isCompleted ? 'bg-[#4B6E48] border-[#4B6E48]' : 'border-gray-300 group-hover:border-[#4B6E48]'
        }`}
      >
        {isCompleted && <Check className="w-3 h-3 text-white" />}
      </button>
      <TaskIcon className="w-4 h-4 max-[440px]:w-[14px] max-[440px]:h-[14px] mt-0.5 text-gray-500 flex-shrink-0 self-start" />
      <span 
        className={`text-sm max-[440px]:text-xs leading-relaxed flex-1 min-w-0 ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-700'}`}
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}
      >
        {task.text}
      </span>
      {task.timeEstimate && (
        <span className="text-xs max-[340px]:text-[10px] text-gray-500 flex items-center gap-1 flex-shrink-0 self-start whitespace-nowrap">
          <Timer className="w-3 h-3" />
          {task.timeEstimate}m
        </span>
      )}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(weekNum, taskIndex);
        }}
        className="opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-700 flex-shrink-0 self-start"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  );
};

// Drop Zone for Tasks
const DroppableWeek = ({ week, children, onDrop }: any) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: TASK_TYPE,
    drop: (item: any) => onDrop(item, week),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <ul
      ref={drop}
      className={`space-y-2 ${isOver ? 'bg-[#4B6E48]/5 rounded-lg' : ''}`}
    >
      {children}
    </ul>
  );
};

function ImprovementPlan() {
  // State Management
  const [intensity, setIntensity] = useState<'light' | 'normal' | 'intense'>('normal');
  const [dailyTasks, setDailyTasks] = useState(dailyActionPlan);
  const [showCounselorNotes, setShowCounselorNotes] = useState(false);
  const [expandedWeeks, setExpandedWeeks] = useState<Set<number>>(new Set([3]));
  const [completedTasks, setCompletedTasks] = useState<Record<string, Set<number>>>({});
  const [customTasks, setCustomTasks] = useState<Record<number, Task[]>>({});
  const [newTaskText, setNewTaskText] = useState('');
  const [activeSlide, setActiveSlide] = useState(1);
  const [skillsOrder, setSkillsOrder] = useState([
    {
      skill: 'Reading',
      icon: BookOpen,
      color: '#4B6E48',
      bgGradient: 'from-[#4B6E48]/5 to-[#4B6E48]/10',
      issues: ['Skimming issues - spending too little time', 'Vocabulary gaps in academic contexts', 'Timing problem - rushing through passages'],
      recommendations: ['Practice timed reading (20 min per passage)', 'Build academic vocabulary (20 words/day)', 'Use process of elimination for T/F/NG']
    },
    {
      skill: 'Writing',
      icon: PenTool,
      color: '#6B46C1',
      bgGradient: 'from-purple-50 to-purple-100/50',
      issues: ['Structure flaws in Task 2 essays', 'Grammar patterns - article usage', 'Vocabulary limits - repetitive words'],
      recommendations: ['Study essay templates and structures', 'Practice article usage exercises', 'Use synonym banks for common words']
    },
    {
      skill: 'Speaking',
      icon: Mic,
      color: '#059669',
      bgGradient: 'from-emerald-50 to-emerald-100/50',
      issues: ['Fluency gaps - frequent pauses', 'Pronunciation of complex words', 'Fillers (um, like, you know)'],
      recommendations: ['Daily 10-min fluency drills', 'Record and review your speech', 'Practice replacing fillers with pauses']
    },
    {
      skill: 'Listening',
      icon: Headphones,
      color: '#D97706',
      bgGradient: 'from-amber-50 to-amber-100/50',
      issues: ['Accent difficulty - Australian accent', 'Focus loss in long lectures', 'Note-taking issues'],
      recommendations: ['Listen to Australian podcasts daily', 'Practice active listening techniques', 'Develop shorthand note-taking system']
    }
  ]);
  const [addingTaskToWeek, setAddingTaskToWeek] = useState<number | null>(null);
  const [taskPriority, setTaskPriority] = useState<'high' | 'medium' | 'low'>('medium');
  const [taskTimeEstimate, setTaskTimeEstimate] = useState<number>(30);
  const [remindersEnabled, setRemindersEnabled] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [weekTimeSpent, setWeekTimeSpent] = useState<Record<number, number>>({});
  const [showConfetti, setShowConfetti] = useState(false);
  const weekRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const roadmapRef = useRef<HTMLDivElement>(null);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setCompletedTasks(
          Object.fromEntries(
            Object.entries(parsed.completedTasks || {}).map(([k, v]: any) => [k, new Set(v)])
          )
        );
        setCustomTasks(parsed.customTasks || {});
        setExpandedWeeks(new Set(parsed.expandedWeeks || [3]));
        setWeekTimeSpent(parsed.weekTimeSpent || {});
        toast.success('Progress loaded from previous session!');
      } catch (err) {
        console.error('Failed to load saved data:', err);
      }
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    const dataToSave = {
      completedTasks: Object.fromEntries(
        Object.entries(completedTasks).map(([k, v]) => [k, Array.from(v)])
      ),
      customTasks,
      expandedWeeks: Array.from(expandedWeeks),
      weekTimeSpent,
      lastSaved: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  }, [completedTasks, customTasks, expandedWeeks, weekTimeSpent]);

  const getStatusColor = () => {
    const avg = 7.2;
    if (avg >= 7.5) return { status: 'On Track', color: 'green', icon: CheckCircle };
    if (avg >= 6.5) return { status: 'Needs Focus', color: 'amber', icon: AlertTriangle };
    return { status: 'Critical', color: 'red', icon: AlertTriangle };
  };

  const status = getStatusColor();

  // Generate roadmap with useMemo - MUST BE BEFORE functions that use it
  const roadmap: WeekData[] = useMemo(() => {
    const baseTasksData = [
      {
        week: 1,
        tasks: ['Foundation: Reading strategies & vocabulary building', 'Writing Task 1 structure introduction', 'Speaking fluency warm-up exercises'],
        mockTests: [],
        timeCommitment: intensity === 'light' ? 10 : intensity === 'normal' ? 15 : 20
      },
      {
        week: 2,
        tasks: ['Reading: T/F/NG question mastery', 'Writing Task 2: Opinion essays', 'Listening Section 1-2 practice'],
        mockTests: [],
        timeCommitment: intensity === 'light' ? 12 : intensity === 'normal' ? 16 : 22
      },
      {
        week: 3,
        tasks: ['Speaking Part 2 practice', 'Writing coherence drills', 'Reading speed improvement'],
        mockTests: ['Mini Reading Test'],
        timeCommitment: intensity === 'light' ? 12 : intensity === 'normal' ? 18 : 24
      },
      {
        week: 4,
        tasks: ['Listening Section 3-4 advanced', 'Writing grammar review', 'Speaking pronunciation focus'],
        mockTests: [],
        timeCommitment: intensity === 'light' ? 14 : intensity === 'normal' ? 18 : 25
      },
      {
        week: 5,
        tasks: ['Reading academic vocabulary', 'Writing Task 1 data description', 'Speaking Part 3 complex answers'],
        mockTests: ['Writing Mini Mock'],
        timeCommitment: intensity === 'light' ? 14 : intensity === 'normal' ? 20 : 26
      },
      {
        week: 6,
        tasks: ['Full section practice - All skills', 'Weak area intensive training', 'Time management drills'],
        mockTests: ['Half Mock Test (Reading + Listening)'],
        timeCommitment: intensity === 'light' ? 16 : intensity === 'normal' ? 22 : 28
      },
      {
        week: 7,
        tasks: ['Advanced reading techniques', 'Writing band 7+ strategies', 'Speaking fluency refinement'],
        mockTests: [],
        timeCommitment: intensity === 'light' ? 14 : intensity === 'normal' ? 20 : 26
      },
      {
        week: 8,
        tasks: ['Listening accent training (British, Australian)', 'Writing error analysis', 'Speaking confidence building'],
        mockTests: ['Full Mock Test'],
        timeCommitment: intensity === 'light' ? 16 : intensity === 'normal' ? 24 : 30
      },
      {
        week: 9,
        tasks: ['Reading inference questions', 'Writing advanced vocabulary', 'Speaking topic variety practice'],
        mockTests: [],
        timeCommitment: intensity === 'light' ? 16 : intensity === 'normal' ? 22 : 28
      },
      {
        week: 10,
        tasks: ['All skills integration practice', 'Mock test strategy refinement', 'Review all weak areas'],
        mockTests: ['Full Mock Test'],
        timeCommitment: intensity === 'light' ? 18 : intensity === 'normal' ? 25 : 32
      },
      {
        week: 11,
        tasks: ['Final practice sessions', 'Confidence building exercises', 'Test day preparation'],
        mockTests: ['Final Full Mock Test'],
        timeCommitment: intensity === 'light' ? 14 : intensity === 'normal' ? 20 : 28
      },
      {
        week: 12,
        tasks: ['Light review only', 'Mental preparation', 'Rest and confidence building'],
        mockTests: [],
        timeCommitment: intensity === 'light' ? 6 : intensity === 'normal' ? 10 : 14
      }
    ];

    return baseTasksData.map(weekData => ({
      week: weekData.week,
      tasks: weekData.tasks.map((text, idx) => ({
        id: `week-${weekData.week}-task-${idx}`,
        text,
        completed: false,
        priority: idx === 0 ? 'high' : idx === 1 ? 'medium' : 'low',
        timeEstimate: intensity === 'light' ? 30 : intensity === 'normal' ? 45 : 60
      })),
      mockTests: weekData.mockTests,
      practiceSets: intensity === 'light' 
        ? Math.floor(weekData.week * 0.5) + 3 
        : intensity === 'normal' 
        ? Math.floor(weekData.week * 0.7) + 5 
        : Math.floor(weekData.week * 0.9) + 7,
      reviewSessions: weekData.week % 3 === 0 ? 3 : weekData.week % 2 === 0 ? 2 : 1,
      status: weekData.week <= 2 ? 'completed' : weekData.week === 3 ? 'current' : 'upcoming',
      timeCommitment: weekData.timeCommitment
    }));
  }, [intensity]);

  const toggleTask = (id: string) => {
    setDailyTasks(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    toast.success('Task updated!');
  };

  const toggleWeekExpansion = (weekNum: number) => {
    setExpandedWeeks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(weekNum)) {
        newSet.delete(weekNum);
      } else {
        newSet.add(weekNum);
      }
      return newSet;
    });
  };

  const toggleRoadmapTask = (weekNum: number, taskIndex: number) => {
    const weekKey = `week-${weekNum}`;
    setCompletedTasks(prev => {
      const newCompleted = { ...prev };
      if (!newCompleted[weekKey]) {
        newCompleted[weekKey] = new Set();
      }
      const weekTasks = new Set(newCompleted[weekKey]);
      const wasCompleted = weekTasks.has(taskIndex);
      
      if (wasCompleted) {
        weekTasks.delete(taskIndex);
      } else {
        weekTasks.add(taskIndex);
      }
      newCompleted[weekKey] = weekTasks;
      
      // Check if week is now fully completed
      const week = roadmap.find(w => w.week === weekNum);
      if (week) {
        const totalTasks = week.tasks.length + (customTasks[weekNum]?.length || 0);
        if (weekTasks.size === totalTasks && !wasCompleted) {
          triggerWeekCompletionCelebration(weekNum);
        }
      }
      
      return newCompleted;
    });
    toast.success('Task updated!');
  };

  const triggerWeekCompletionCelebration = (weekNum: number) => {
    // Confetti animation
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    toast.success(`ðŸŽ‰ Congratulations! Week ${weekNum} completed!`, {
      duration: 5000,
    });
  };

  const scrollToWeek = (weekNum: number) => {
    const element = weekRefs.current[weekNum];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        setExpandedWeeks(prev => new Set(prev).add(weekNum));
      }, 500);
    }
  };

  // Add custom task
  const addCustomTask = (weekNum: number) => {
    if (!newTaskText.trim()) {
      toast.error('Please enter a task description');
      return;
    }

    const newTask: Task = {
      id: `custom-${Date.now()}`,
      text: newTaskText,
      completed: false,
      priority: taskPriority,
      timeEstimate: taskTimeEstimate
    };

    setCustomTasks(prev => ({
      ...prev,
      [weekNum]: [...(prev[weekNum] || []), newTask]
    }));

    setNewTaskText('');
    setAddingTaskToWeek(null);
    toast.success('Custom task added!');
  };

  // Delete custom task
  const deleteCustomTask = (weekNum: number, taskIndex: number) => {
    setCustomTasks(prev => ({
      ...prev,
      [weekNum]: prev[weekNum]?.filter((_, i) => i !== taskIndex) || []
    }));
    toast.success('Task deleted');
  };

  // Handle task drop (reorder)
  const handleTaskDrop = (item: any, targetWeek: number) => {
    const { weekNum: sourceWeek, taskIndex } = item;
    
    if (sourceWeek === targetWeek) {
      toast.info('Task is already in this week');
      return;
    }

    // Move task from source week to target week
    const taskToMove = customTasks[sourceWeek]?.[taskIndex];
    if (taskToMove) {
      setCustomTasks(prev => ({
        ...prev,
        [sourceWeek]: prev[sourceWeek]?.filter((_, i) => i !== taskIndex) || [],
        [targetWeek]: [...(prev[targetWeek] || []), taskToMove]
      }));
      toast.success(`Task moved to Week ${targetWeek}`);
    }
  };

  // Carousel navigation handlers
  const handleNextSlide = () => {
    setSkillsOrder(prev => {
      const newOrder = [...prev];
      const firstItem = newOrder.shift(); // Remove first item
      if (firstItem) {
        newOrder.push(firstItem); // Add to end
      }
      return newOrder;
    });
  };

  const handlePrevSlide = () => {
    setSkillsOrder(prev => {
      const newOrder = [...prev];
      const lastItem = newOrder.pop(); // Remove last item
      if (lastItem) {
        newOrder.unshift(lastItem); // Add to beginning
      }
      return newOrder;
    });
  };

  // Export as PDF
  const exportToPDF = async () => {
    if (!roadmapRef.current) return;
    
    toast.info('Generating PDF...');
    
    try {
      const canvas = await html2canvas(roadmapRef.current, {
        scale: 2,
        useCORS: true,
        logging: false
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('improvement-plan-roadmap.pdf');
      toast.success('PDF downloaded successfully!');
    } catch (error) {
      toast.error('Failed to generate PDF');
      console.error(error);
    }
  };

  // Share roadmap link
  const shareRoadmap = async () => {
    const shareData = {
      title: '12-Week IELTS Study Roadmap',
      text: 'Check out my personalized IELTS improvement plan!',
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        toast.success('Shared successfully!');
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          fallbackShare();
        }
      }
    } else {
      fallbackShare();
    }
  };

  const fallbackShare = () => {
    // Create a temporary input element to copy the link
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    tempInput.style.position = 'fixed';
    tempInput.style.left = '-9999px';
    document.body.appendChild(tempInput);
    tempInput.select();
    
    try {
      // Try the older execCommand method as fallback
      const successful = document.execCommand('copy');
      document.body.removeChild(tempInput);
      
      if (successful) {
        toast.success('Link copied to clipboard!');
      } else {
        // If that fails too, show the link in a toast
        toast.info(`Share this link: ${window.location.href}`, {
          duration: 10000,
        });
      }
    } catch (err) {
      document.body.removeChild(tempInput);
      // Show link in toast as last resort
      toast.info(`Share this link: ${window.location.href}`, {
        duration: 10000,
      });
    }
  };

  // Print view
  const printRoadmap = () => {
    window.print();
    toast.info('Opening print dialog...');
  };

  // Export to calendar (ICS)
  const exportToCalendar = () => {
    try {
      roadmap.forEach((week) => {
        const event = {
          start: new Date(2026, 1, week.week * 7).toISOString().split('T')[0].split('-').map(Number) as [number, number, number],
          duration: { weeks: 1 },
          title: `Week ${week.week} - IELTS Study`,
          description: week.tasks.map(t => typeof t === 'string' ? t : t.text).join('\n'),
          status: 'CONFIRMED' as const,
          busyStatus: 'BUSY' as const
        };

        const { error, value } = createEvent(event as any);
        
        if (error) {
          console.error(error);
          return;
        }

        const blob = new Blob([value || ''], { type: 'text/calendar' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `ielts-week-${week.week}.ics`;
        link.click();
      });
      
      toast.success('Calendar events exported!');
    } catch (error) {
      toast.error('Failed to export calendar events');
      console.error(error);
    }
  };

  // Calculate analytics
  const analytics = useMemo((): Analytics => {
    const totalWeeks = roadmap.length;
    const completedWeeksCount = roadmap.filter(w => w.status === 'completed').length;
    const totalTasks = roadmap.reduce((sum, week) => 
      sum + week.tasks.length + (customTasks[week.week]?.length || 0), 0
    );
    const completedTasksCount = Object.values(completedTasks).reduce(
      (sum, tasks) => sum + tasks.size, 0
    );

    const completionRate = totalTasks > 0 ? (completedTasksCount / totalTasks) * 100 : 0;
    const totalTimeSpent = Object.values(weekTimeSpent).reduce((sum, time) => sum + time, 0);
    
    // Predict finish date based on current progress
    const weeksRemaining = totalWeeks - completedWeeksCount;
    const predictedDate = new Date();
    predictedDate.setDate(predictedDate.getDate() + (weeksRemaining * 7));
    
    const weeklyProgress = roadmap.map(week => {
      const weekKey = `week-${week.week}`;
      const completed = completedTasks[weekKey]?.size || 0;
      const total = week.tasks.length + (customTasks[week.week]?.length || 0);
      return { week: week.week, completed, total };
    });

    return {
      totalTimeSpent,
      completionRate,
      predictedFinishDate: predictedDate.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      weeklyProgress
    };
  }, [roadmap, completedTasks, customTasks, weekTimeSpent]);

  const coreWeaknesses = [
    {
      title: 'Writing Coherence',
      severity: 'high',
      description: 'Paragraph transitions and linking words need improvement',
      impact: 'Affects Task 2 scores significantly'
    },
    {
      title: 'True/False/Not Given',
      severity: 'medium',
      description: 'Tendency to rush and miss context clues',
      impact: 'Reduces Reading accuracy by 15%'
    },
    {
      title: 'Speaking Fillers',
      severity: 'low',
      description: 'Frequent use of "um", "like", "you know"',
      impact: 'Affects fluency perception'
    }
  ];

  const learningGaps = [
    'Advanced vocabulary for academic writing',
    'Complex sentence structures in speaking',
    'Note-taking strategies for listening'
  ];

  const behaviourIssues = [
    'Rushing through reading passages (avg: 15 min vs recommended 20 min)',
    'Skipping review sessions after practice',
    'Inconsistent speaking practice (only 2x per week)'
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <AIAssistantNav />

      <div className="min-h-screen bg-gray-50 pt-40 pb-16 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 max-w-full box-border">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex flex-col max-[600px]:gap-4 md:flex-row items-start justify-between mb-6 max-w-full overflow-x-hidden box-border">
              {/* Left side: Icon + Title + Status */}
              <div className="flex-1 max-w-full">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-12 h-12 max-[600px]:w-9 max-[600px]:h-9 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 max-[600px]:w-5 max-[600px]:h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h1 className="text-4xl max-[600px]:text-[22px] max-[360px]:text-[20px] font-bold text-gray-900 max-[600px]:line-clamp-2">Personal Improvement Plan</h1>
                    <div className="flex flex-wrap items-center gap-2 mt-2 max-[600px]:mt-1">
                      <div className="flex items-center gap-2">
                        <status.icon className={`w-5 h-5 max-[600px]:w-4 max-[600px]:h-4 text-${status.color}-600 flex-shrink-0`} />
                        <span className={`font-semibold text-${status.color}-600 text-sm max-[600px]:text-xs whitespace-nowrap`}>{status.status}</span>
                      </div>
                      <span className="text-gray-400 max-[600px]:hidden">â€¢</span>
                      <span className="text-gray-600 text-sm max-[600px]:text-[11px] whitespace-nowrap">Last updated: Feb 5, 2026</span>
                    </div>
                  </div>
                </div>
                
                {/* Buttons row for mobile (â‰¤400px) */}
                <div className="hidden max-[400px]:flex flex-col gap-2 mt-4 w-full">
                  <StandardButton
                    variant="outline"
                    size="sm"
                    onClick={() => setShowAnalytics(!showAnalytics)}
                    className="flex items-center justify-center gap-2 w-full"
                  >
                    <BarChart3 className="w-4 h-4" />
                    <span>Analytics</span>
                  </StandardButton>
                  <StandardButton
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      localStorage.setItem(STORAGE_KEY, JSON.stringify({
                        completedTasks: Object.fromEntries(
                          Object.entries(completedTasks).map(([k, v]) => [k, Array.from(v)])
                        ),
                        customTasks,
                        expandedWeeks: Array.from(expandedWeeks),
                        weekTimeSpent,
                        lastSaved: new Date().toISOString()
                      }));
                      toast.success('Progress saved!');
                    }}
                    className="flex items-center justify-center gap-2 w-full"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Progress</span>
                  </StandardButton>
                </div>
              </div>
              
              {/* Right side: Action buttons (hidden on â‰¤400px, icon-only on â‰¤600px) */}
              <div className="flex gap-2 max-[400px]:hidden max-[600px]:mt-0">
                <StandardButton
                  variant="outline"
                  size="sm"
                  onClick={() => setShowAnalytics(!showAnalytics)}
                  className="flex items-center gap-2 max-[600px]:!px-3 max-[600px]:!py-3 group relative"
                  title="Analytics"
                >
                  <BarChart3 className="w-4 h-4" />
                  <span className="max-[600px]:hidden">Analytics</span>
                  <span className="hidden max-[600px]:inline-block absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    Analytics
                  </span>
                </StandardButton>
                <StandardButton
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify({
                      completedTasks: Object.fromEntries(
                        Object.entries(completedTasks).map(([k, v]) => [k, Array.from(v)])
                      ),
                      customTasks,
                      expandedWeeks: Array.from(expandedWeeks),
                      weekTimeSpent,
                      lastSaved: new Date().toISOString()
                    }));
                    toast.success('Progress saved!');
                  }}
                  className="flex items-center gap-2 max-[600px]:!px-3 max-[600px]:!py-3 group relative"
                  title="Save"
                >
                  <Save className="w-4 h-4" />
                  <span className="max-[600px]:hidden">Save</span>
                  <span className="hidden max-[600px]:inline-block absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    Save
                  </span>
                </StandardButton>
              </div>
            </div>
          </motion.div>

          {/* Analytics Dashboard */}
          <AnimatePresence>
            {showAnalytics && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8 overflow-hidden"
              >
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                    Progress Analytics
                  </h2>
                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200 rounded-xl p-4">
                      <div className="text-sm font-medium text-blue-700 mb-2">Completion Rate</div>
                      <div className="text-3xl font-bold text-blue-900">{analytics.completionRate.toFixed(1)}%</div>
                      <Progress value={analytics.completionRate} className="mt-2 h-2" />
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100/50 border-2 border-green-200 rounded-xl p-4">
                      <div className="text-sm font-medium text-green-700 mb-2">Time Invested</div>
                      <div className="text-3xl font-bold text-green-900">{analytics.totalTimeSpent}h</div>
                      <div className="text-xs text-green-600 mt-1">Across all weeks</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-2 border-purple-200 rounded-xl p-4">
                      <div className="text-sm font-medium text-purple-700 mb-2">Predicted Finish</div>
                      <div className="text-lg font-bold text-purple-900">{analytics.predictedFinishDate}</div>
                      <div className="text-xs text-purple-600 mt-1">At current pace</div>
                    </div>
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 border-2 border-amber-200 rounded-xl p-4">
                      <div className="text-sm font-medium text-amber-700 mb-2">Avg Weekly Progress</div>
                      <div className="text-3xl font-bold text-amber-900">
                        {(analytics.weeklyProgress.reduce((sum, w) => sum + (w.total > 0 ? (w.completed / w.total) * 100 : 0), 0) / analytics.weeklyProgress.length).toFixed(0)}%
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-12 gap-2">
                    {analytics.weeklyProgress.map(week => {
                      const percentage = week.total > 0 ? (week.completed / week.total) * 100 : 0;
                      return (
                        <div key={week.week} className="text-center">
                          <div className="text-xs text-gray-600 mb-1">W{week.week}</div>
                          <div className="h-20 bg-gray-100 rounded-lg overflow-hidden relative">
                            <div 
                              className={`absolute bottom-0 left-0 right-0 transition-all ${
                                percentage === 100 ? 'bg-green-500' : 
                                percentage > 50 ? 'bg-blue-500' : 'bg-gray-400'
                              }`}
                              style={{ height: `${percentage}%` }}
                            />
                          </div>
                          <div className="text-xs text-gray-700 mt-1 font-medium">{percentage.toFixed(0)}%</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* AI Diagnosis Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-gray-900 mb-8 border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ scrollMarginTop: '110px' }}
          >
            <div className="flex items-start gap-3 mb-6">
              <Brain className="w-8 h-8 max-[460px]:w-6 max-[460px]:h-6 flex-shrink-0 self-start" />
              <h2 className="text-2xl max-[460px]:text-base font-bold whitespace-nowrap max-[460px]:whitespace-normal max-[460px]:line-clamp-2">AI Performance Diagnosis</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {coreWeaknesses.map((weakness, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl p-5 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-between mb-3 flex-nowrap">
                    <span className="font-semibold whitespace-nowrap max-[960px]:text-xs">Top {i + 1} Weakness</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white flex-shrink-0 ml-2 ${
                      weakness.severity === 'high' ? 'bg-red-500' :
                      weakness.severity === 'medium' ? 'bg-amber-500' :
                      'bg-blue-500'
                    }`}>
                      {weakness.severity}
                    </span>
                  </div>
                  <div className="text-xl font-bold mb-2">{weakness.title}</div>
                  <div className="text-sm text-gray-700 mb-2">{weakness.description}</div>
                  <div className="text-xs text-gray-600 italic">Impact: {weakness.impact}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl p-5 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="font-semibold mb-3">Root Causes</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">â€¢</span>
                    <span>Limited exposure to academic linking phrases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">â€¢</span>
                    <span>Time pressure leading to rushed reading</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">â€¢</span>
                    <span>Lack of structured speaking practice routine</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl p-5 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="font-semibold mb-3">Learning Gaps</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {learningGaps.map((gap, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gray-500">â€¢</span>
                      <span>{gap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Behaviour Issues</div>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {behaviourIssues.map((issue, i) => (
                      <li key={i}>â€¢ {issue}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section-wise Feedback - Redesigned Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative mb-8"
            style={{ scrollMarginTop: '110px' }}
          >
            {/* Main Container - Two-column layout at â‰¥900px, single column below */}
            <div className="bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-sm p-6 max-[520px]:p-4 min-h-0 h-auto">
              <div className="grid lg:grid-cols-[60%_40%] gap-6 max-[899px]:grid-cols-1">
                {/* Left Panel: Text Content (Current Issues + Action Items) */}
                <div className="w-full">
                  {/* Active Skill Card Content */}
                  {skillsOrder[1] && (() => {
                    const section = skillsOrder[1];
                    const IconComponent = section.icon;
                    return (
                      <div className={`h-auto min-h-0 p-6 max-[520px]:p-4 bg-gradient-to-br ${section.bgGradient} rounded-xl`}>
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
                            <IconComponent className="w-6 h-6" style={{ color: section.color }} />
                          </div>
                          <h3 className="text-gray-900 text-lg font-semibold">{section.skill}</h3>
                        </div>

                        {/* Current Issues */}
                        <div className="mb-4">
                          <div className="text-gray-700 mb-2 font-medium text-base">Current Issues:</div>
                          <ul className="space-y-1.5">
                            {section.issues.map((issue, j) => (
                              <motion.li
                                key={`${section.skill}-issue-${j}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + j * 0.1, type: "tween" }}
                                className="text-gray-600 flex items-start gap-2 p-2 bg-white/60 rounded-lg text-sm"
                              >
                                <span className="mt-0.5 text-sm" style={{ color: section.color }}>â€¢</span>
                                <span className="text-sm">{issue}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Action Items */}
                        <div>
                          <div className="text-gray-700 mb-2 font-medium text-base">Action Items:</div>
                          <ul className="space-y-1.5">
                            {section.recommendations.map((rec, j) => (
                              <motion.li
                                key={`${section.skill}-rec-${j}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + j * 0.1, type: "tween" }}
                                className="text-gray-600 flex items-start gap-2 p-2 bg-white/60 rounded-lg text-sm"
                              >
                                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: section.color }} />
                                <span className="text-sm">{rec}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Right Panel: Navigation + Skill Cards */}
                <div className="w-full flex flex-col gap-4">
                  {/* Navigation Buttons */}
                  <div className="flex justify-center gap-4 max-[520px]:my-6">
                    <button
                      onClick={handlePrevSlide}
                      className="w-12 h-12 rounded-xl border-2 border-gray-300/50 bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all hover:border-[#4B6E48] hover:bg-white hover:scale-110 active:scale-95 shadow-lg"
                      aria-label="Previous slide"
                    >
                      <span className="text-gray-700" style={{ paddingRight: '2px' }}>â—</span>
                    </button>
                    <button
                      onClick={handleNextSlide}
                      className="w-12 h-12 rounded-xl border-2 border-gray-300/50 bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all hover:border-[#4B6E48] hover:bg-white hover:scale-110 active:scale-95 shadow-lg"
                      aria-label="Next slide"
                    >
                      <span className="text-gray-700" style={{ paddingLeft: '2px' }}>â–·</span>
                    </button>
                  </div>

                  {/* Skill Cards Grid - 2 columns on tablet, 1 column on mobile */}
                  <div className="grid grid-cols-2 max-[520px]:grid-cols-1 gap-3">
                    {/* Show cards at index 2 and 3 (next two skills) */}
                    {skillsOrder.slice(2, 4).map((section, idx) => {
                      const IconComponent = section.icon;
                      return (
                        <div
                          key={`${section.skill}-card-${idx}`}
                          className={`bg-gradient-to-br ${section.bgGradient} rounded-xl p-4 max-[520px]:p-4 border border-gray-200/50 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center justify-center min-h-[180px] max-[520px]:min-h-[140px]`}
                          onClick={handleNextSlide}
                        >
                          <IconComponent className="w-12 h-12 mb-3 max-[520px]:w-10 max-[520px]:h-10" style={{ color: section.color }} />
                          <div className="text-gray-900 font-semibold text-center">{section.skill}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Personalized Roadmap */}
          <motion.div
            ref={roadmapRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-10 max-[1279px]:p-8 max-[767px]:p-4 mb-10 max-[1279px]:mb-8 max-[767px]:mb-6 shadow-lg w-full max-w-[1200px] mx-auto"
            style={{ scrollMarginTop: '110px' }}
          >
            <div className="flex flex-col gap-6 max-[1279px]:gap-5 max-[767px]:gap-4 mb-10 max-[1279px]:mb-8 max-[767px]:mb-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 max-[440px]:w-10 max-[440px]:h-10 bg-gradient-to-br from-[#4B6E48] to-[#3a5638] rounded-xl flex items-center justify-center shadow-md flex-shrink-0 self-start">
                  <Target className="w-6 h-6 max-[440px]:w-5 max-[440px]:h-5 text-white" />
                </div>
                <h2 className="text-[28px] max-[660px]:text-[22px] max-[440px]:text-[18px] font-bold text-gray-900 line-clamp-2">12-Week Study Roadmap</h2>
              </div>
              <div className="flex items-center gap-3 max-[540px]:flex-col max-[540px]:items-start max-[540px]:w-full max-[540px]:gap-3">
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Intensity:</span>
                <div className="flex gap-2 bg-white/60 backdrop-blur-sm p-1 rounded-xl border border-white/30 max-[540px]:w-auto">
                  {['light', 'normal', 'intense'].map((level) => (
                    <button
                      key={level}
                      onClick={() => {
                        setIntensity(level as any);
                        toast.success(`Intensity changed to ${level}! Practice sets updated.`);
                      }}
                      className={`px-4 max-[795px]:px-3 max-[540px]:px-3 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                        intensity === level
                          ? 'bg-[#4B6E48] text-white shadow-md'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                      }`}
                    >
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mb-6 grid grid-cols-2 max-[599px]:grid-cols-2 min-[600px]:grid-cols-3 min-[1100px]:grid-cols-5 gap-2 max-[599px]:gap-2">
              <StandardButton
                variant="outline"
                size="sm"
                onClick={exportToPDF}
                className="flex items-center justify-center gap-2 max-[1099px]:px-2.5"
              >
                <Download className="w-4 h-4" />
                <span className="max-[599px]:text-xs">Export PDF</span>
              </StandardButton>
              <StandardButton
                variant="outline"
                size="sm"
                onClick={shareRoadmap}
                className="flex items-center justify-center gap-2 max-[1099px]:px-2.5"
              >
                <Share2 className="w-4 h-4" />
                <span className="max-[599px]:text-xs">Share Link</span>
              </StandardButton>
              <StandardButton
                variant="outline"
                size="sm"
                onClick={printRoadmap}
                className="flex items-center justify-center gap-2 max-[1099px]:px-2.5 max-[599px]:col-span-1"
              >
                <Printer className="w-4 h-4" />
                <span className="max-[599px]:text-xs">Print View</span>
              </StandardButton>
              <StandardButton
                variant="outline"
                size="sm"
                onClick={exportToCalendar}
                className="flex items-center justify-center gap-2 max-[1099px]:px-2.5"
              >
                <CalendarPlus className="w-4 h-4" />
                <span className="max-[599px]:text-xs">Export to Calendar</span>
              </StandardButton>
              <StandardButton
                variant="outline"
                size="sm"
                onClick={() => {
                  setRemindersEnabled(!remindersEnabled);
                  toast.success(remindersEnabled ? 'Reminders disabled' : 'Reminders enabled!');
                }}
                className="flex items-center justify-center gap-2 max-[1099px]:px-2.5 max-[599px]:col-span-1"
              >
                <Bell className="w-4 h-4" />
                <span className="max-[599px]:text-xs">{remindersEnabled ? 'Disable' : 'Enable'} Reminders</span>
              </StandardButton>
            </div>

            {/* Week Navigation Quick Jump */}
            <div className="mb-6 max-[1279px]:mb-5 max-[767px]:mb-4 p-4 max-[767px]:p-3 bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl shadow-sm">
              <div className="text-sm font-semibold text-gray-700 mb-3 max-[767px]:mb-2">Quick Jump to Week:</div>
              <div className="flex flex-wrap max-[767px]:flex-nowrap max-[767px]:overflow-x-auto gap-2 max-[767px]:gap-2 relative" style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style dangerouslySetInnerHTML={{ __html: `
                  .max-\\[767px\\]\\:overflow-x-auto::-webkit-scrollbar {
                    display: none;
                  }
                ` }} />
                {roadmap.map((week) => {
                  const weekKey = `week-${week.week}`;
                  const completedTasksInWeek = completedTasks[weekKey] || new Set();
                  const totalTasks = week.tasks.length + (customTasks[week.week]?.length || 0);
                  const progress = totalTasks > 0 ? (completedTasksInWeek.size / totalTasks) * 100 : 0;
                  
                  return (
                    <button
                      key={week.week}
                      onClick={() => scrollToWeek(week.week)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all relative overflow-hidden flex-shrink-0 min-w-[48px] ${
                        week.status === 'current'
                          ? 'bg-[#4B6E48] text-white hover:bg-[#3a5638] shadow-md'
                          : 'bg-white/80 text-gray-600 hover:bg-white hover:text-gray-900 border border-gray-200 hover:border-[#4B6E48]/30 hover:shadow-sm'
                      }`}
                    >
                      <div className="relative z-10">W{week.week}</div>
                      {progress > 0 && (
                        <div 
                          className={`absolute bottom-0 left-0 h-1 transition-all ${
                            week.status === 'current' ? 'bg-white/30' : 'bg-[#4B6E48]/30'
                          }`}
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </button>
                  );
                })}
                <div className="max-[767px]:block hidden absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white/60 to-transparent pointer-events-none" />
              </div>
            </div>

            <div className="relative pb-12 max-[1279px]:pb-10 max-[767px]:pb-8">
              {/* Timeline Line */}
              <div className="absolute left-8 max-[1279px]:left-7 max-[767px]:left-5 top-0 bottom-12 max-[1279px]:bottom-10 max-[767px]:bottom-8 w-1 max-[767px]:w-0.5 bg-gradient-to-b from-[#4B6E48] via-gray-300 to-gray-200 rounded-full" />

              <div className="space-y-6 max-[1279px]:space-y-5 max-[767px]:space-y-4">
                {roadmap.map((week, i) => {
                  const isExpanded = expandedWeeks.has(week.week);
                  const weekKey = `week-${week.week}`;
                  const completedTasksInWeek = completedTasks[weekKey] || new Set();
                  const weekCustomTasks = customTasks[week.week] || [];
                  const totalTasks = week.tasks.length + weekCustomTasks.length;
                  const completedCount = completedTasksInWeek.size;
                  const progress = totalTasks > 0 ? (completedCount / totalTasks) * 100 : 0;

                  return (
                    <motion.div
                      key={week.week}
                      ref={(el) => (weekRefs.current[week.week] = el)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="relative pl-24 max-[1279px]:pl-20 max-[767px]:pl-16"
                    >
                      {/* Week Badge */}
                      <div
                        className={`absolute left-0 w-16 h-16 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg transition-all cursor-pointer hover:scale-105 ${
                          week.status === 'current'
                            ? 'bg-gradient-to-br from-[#4B6E48] to-[#3a5638] text-white border-2 border-[#4B6E48] ring-4 ring-[#4B6E48]/20'
                            : 'bg-white/80 text-gray-600 border-2 border-gray-300 hover:border-gray-400'
                        }`}
                        onClick={() => scrollToWeek(week.week)}
                      >
                        <span className="text-sm">W{week.week}</span>
                      </div>

                      <div
                        className={`bg-white/80 backdrop-blur-sm border-2 rounded-xl transition-all ${
                          week.status === 'current'
                            ? 'border-[#4B6E48] shadow-md ring-2 ring-[#4B6E48]/10'
                            : 'border-white/30 hover:border-white/50 shadow-sm'
                        }`}
                      >
                        {/* Collapsible Header */}
                        <button
                          onClick={() => toggleWeekExpansion(week.week)}
                          className="w-full p-8 max-[1279px]:p-6 max-[767px]:p-4 flex flex-col gap-[6px] hover:bg-white/50 transition-colors rounded-t-xl relative"
                        >
                          <div className="flex items-center justify-between max-[440px]:w-full">
                            <div className="flex items-center gap-4 max-[440px]:gap-2 flex-1">
                              <h3 className="text-lg max-[646px]:text-base font-bold text-gray-900 whitespace-nowrap min-w-[60px]">Week {week.week}</h3>
                              <span
                                className={`px-4 max-[440px]:px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide whitespace-nowrap ${
                                  week.status === 'current'
                                    ? 'bg-[#4B6E48] text-white'
                                    : 'bg-gray-100 text-gray-600 border border-gray-200'
                                }`}
                              >
                                {week.status}
                              </span>
                            </div>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 min-w-[32px] min-h-[32px] max-[340px]:absolute max-[340px]:top-3 max-[340px]:right-3 ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </div>
                          <div className="flex items-center max-[440px]:justify-between max-[340px]:flex-col max-[340px]:items-start max-[340px]:gap-2 gap-3">
                            <div className="flex items-center gap-2 text-sm max-[440px]:text-xs text-gray-600">
                              <Clock className="w-4 h-4 max-[440px]:w-3 max-[440px]:h-3" />
                              <span className="whitespace-nowrap">{week.timeCommitment}h/week</span>
                            </div>
                            <div className="w-32 max-[440px]:flex-1 max-[440px]:max-w-[40%] max-[340px]:w-full max-[340px]:max-w-full">
                              <Progress value={progress} className="h-2 max-[340px]:h-1" />
                            </div>
                            {completedCount > 0 && (
                              <span className="text-sm max-[440px]:text-xs text-gray-600 max-[440px]:hidden min-[441px]:inline">
                                {completedCount}/{totalTasks} tasks
                              </span>
                            )}
                          </div>
                        </button>

                        {/* Collapsible Content */}
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="px-8 max-[1279px]:px-6 max-[767px]:px-4 pb-8 max-[1279px]:pb-6 max-[767px]:pb-4 space-y-4 max-[767px]:space-y-3 border-t border-white/30"
                          >
                            <div className="pt-4">
                              <div className="flex items-center justify-between mb-3">
                                <div className="text-sm font-semibold text-gray-700 flex items-center gap-2 max-[440px]:flex-1 max-[440px]:min-w-0">
                                  <CheckCircle className="w-4 h-4 text-[#4B6E48] flex-shrink-0" />
                                  <span className="max-[440px]:truncate">
                                    <span className="max-[440px]:hidden">Focus Areas ({week.tasks.length} tasks)</span>
                                    <span className="min-[441px]:hidden">Focus Areas</span>
                                  </span>
                                </div>
                                <button
                                  onClick={() => setAddingTaskToWeek(week.week)}
                                  className="text-sm text-[#4B6E48] hover:text-[#3a5638] font-medium flex items-center gap-1 w-6 h-6 max-[440px]:w-6 max-[440px]:h-6 justify-center rounded-full bg-[#4B6E48]/10 hover:bg-[#4B6E48]/20 flex-shrink-0 min-[441px]:w-auto min-[441px]:h-auto min-[441px]:px-2 min-[441px]:py-1 min-[441px]:rounded-lg min-[441px]:bg-transparent"
                                  title="Add Custom Task"
                                >
                                  <Plus className="w-4 h-4 max-[440px]:w-4 max-[440px]:h-4" />
                                  <span className="max-[440px]:hidden">Add Custom Task</span>
                                </button>
                              </div>
                              
                              <DroppableWeek week={week.week} onDrop={handleTaskDrop}>
                                {week.tasks.map((task, j) => {
                                  const isTaskCompleted = completedTasksInWeek.has(j);
                                  return (
                                    <DraggableTask
                                      key={j}
                                      task={task}
                                      weekNum={week.week}
                                      taskIndex={j}
                                      onToggle={toggleRoadmapTask}
                                      onDelete={() => {}}
                                      isCompleted={isTaskCompleted}
                                    />
                                  );
                                })}
                                
                                {weekCustomTasks.map((task, j) => {
                                  const taskIndex = week.tasks.length + j;
                                  const isTaskCompleted = completedTasksInWeek.has(taskIndex);
                                  return (
                                    <DraggableTask
                                      key={`custom-${j}`}
                                      task={task}
                                      weekNum={week.week}
                                      taskIndex={taskIndex}
                                      onToggle={toggleRoadmapTask}
                                      onDelete={deleteCustomTask}
                                      isCompleted={isTaskCompleted}
                                    />
                                  );
                                })}
                              </DroppableWeek>

                              {addingTaskToWeek === week.week && (
                                <motion.div
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="mt-4 p-4 bg-white/60 backdrop-blur-sm border-2 border-[#4B6E48]/30 rounded-lg"
                                >
                                  <div className="space-y-3">
                                    <input
                                      type="text"
                                      value={newTaskText}
                                      onChange={(e) => setNewTaskText(e.target.value)}
                                      placeholder="Enter task description..."
                                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B6E48]"
                                      autoFocus
                                    />
                                    <div className="flex items-center gap-4">
                                      <select
                                        value={taskPriority}
                                        onChange={(e) => setTaskPriority(e.target.value as any)}
                                        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B6E48]"
                                      >
                                        <option value="high">High Priority</option>
                                        <option value="medium">Medium Priority</option>
                                        <option value="low">Low Priority</option>
                                      </select>
                                      <input
                                        type="number"
                                        value={taskTimeEstimate}
                                        onChange={(e) => setTaskTimeEstimate(parseInt(e.target.value))}
                                        placeholder="Minutes"
                                        className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B6E48]"
                                      />
                                      <span className="text-sm text-gray-600">minutes</span>
                                    </div>
                                    <div className="flex gap-2">
                                      <StandardButton
                                        size="sm"
                                        onClick={() => addCustomTask(week.week)}
                                        className="flex-1"
                                      >
                                        Add Task
                                      </StandardButton>
                                      <StandardButton
                                        variant="outline"
                                        size="sm"
                                        onClick={() => {
                                          setAddingTaskToWeek(null);
                                          setNewTaskText('');
                                        }}
                                        className="flex-1"
                                      >
                                        Cancel
                                      </StandardButton>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </div>

                            {week.mockTests && week.mockTests.length > 0 && (
                              <div className="pt-2">
                                <div className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                  <Flag className="w-4 h-4 text-[#4B6E48]" />
                                  Mock Tests:
                                </div>
                                <ul className="space-y-1">
                                  {week.mockTests.map((test, idx) => (
                                    <li key={idx} className="text-sm text-gray-600 flex items-center gap-2 pl-6">
                                      <span className="w-1.5 h-1.5 bg-[#4B6E48] rounded-full"></span>
                                      {test}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* AI Suggestions */}
                            <div className="pt-2 bg-[#4B6E48]/10 backdrop-blur-sm border border-[#4B6E48]/20 rounded-lg p-4 max-[1279px]:p-3 max-[767px]:p-4 max-[340px]:mt-4 max-[340px]:pb-6 h-auto">
                              <div className="text-sm font-semibold text-[#4B6E48] mb-1 flex items-center gap-2">
                                <Sparkles className="w-4 h-4" />
                                AI Suggestion
                              </div>
                              <div className="text-xs max-[767px]:text-xs text-gray-700" style={{ lineHeight: '1.4' }}>
                                {week.week <= 4 
                                  ? 'Focus on building strong foundations. Consider adding vocabulary drills.'
                                  : week.week <= 8
                                  ? 'Mid-program checkpoint. Schedule a mock test to gauge progress.'
                                  : 'Final stretch! Prioritize review and confidence-building exercises.'}
                              </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 max-[1279px]:gap-3 max-[440px]:flex max-[440px]:gap-0 pt-4 max-[767px]:pt-3 border-t border-white/30">
                              <div className="text-center max-[440px]:flex-1 max-[440px]:border-r max-[440px]:border-gray-200">
                                <div className="text-2xl max-[767px]:text-xl max-[440px]:text-sm font-bold text-gray-900 mb-1">
                                  {week.mockTests?.length || 0}
                                </div>
                                <div className="text-xs max-[440px]:text-[11px] text-gray-500 font-medium">Mock Tests</div>
                              </div>
                              <div className="text-center border-x border-gray-200 max-[440px]:flex-1 max-[440px]:border-x max-[440px]:border-gray-200">
                                <div className="text-2xl max-[767px]:text-xl max-[440px]:text-sm font-bold text-gray-900 mb-1">{week.practiceSets || 0}</div>
                                <div className="text-xs max-[440px]:text-[11px] text-gray-500 font-medium">Practice Sets</div>
                              </div>
                              <div className="text-center max-[440px]:flex-1 max-[440px]:border-l max-[440px]:border-gray-200">
                                <div className="text-2xl max-[767px]:text-xl max-[440px]:text-sm font-bold text-gray-900 mb-1">{week.reviewSessions || 0}</div>
                                <div className="text-xs max-[440px]:text-[11px] text-gray-500 font-medium">Reviews</div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Roadmap Summary */}
            <div className="mt-10 max-[1279px]:mt-8 max-[767px]:mt-6 grid grid-cols-3 max-[767px]:grid-cols-1 gap-6 max-[1279px]:gap-4 max-[767px]:gap-6" style={{ scrollMarginTop: '110px' }}>
              <div className="bg-[#4B6E48]/10 backdrop-blur-sm border-2 border-[#4B6E48]/30 rounded-xl p-6 max-[1279px]:p-5 max-[767px]:p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl max-[767px]:text-[28px] font-bold text-[#4B6E48] mb-1">
                  {roadmap.filter((w) => w.status === 'completed').length}
                </div>
                <div className="text-sm font-medium text-gray-700">Weeks Completed</div>
              </div>
              <div className="bg-gradient-to-br from-[#4B6E48] to-[#3a5638] border-2 border-[#4B6E48] rounded-xl p-6 max-[1279px]:p-5 max-[767px]:p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl max-[767px]:text-[28px] font-bold text-white mb-1">
                  {roadmap.filter((w) => w.status === 'current').length}
                </div>
                <div className="text-sm font-medium text-white/90">Current Week</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm border-2 border-white/30 rounded-xl p-6 max-[1279px]:p-5 max-[767px]:p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl max-[767px]:text-[28px] font-bold text-gray-700 mb-1">
                  {roadmap.filter((w) => w.status === 'upcoming').length}
                </div>
                <div className="text-sm font-medium text-gray-600">Weeks Remaining</div>
              </div>
            </div>
          </motion.div>

          {/* Daily Action Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 mb-8 shadow-sm"
          >
            <div className="flex flex-col max-[400px]:gap-1 min-[401px]:flex-row min-[401px]:items-center min-[401px]:justify-between mb-6">
              <div className="flex items-start gap-3 max-[400px]:gap-[10px]">
                <div className="w-12 h-12 max-[400px]:w-8 max-[400px]:h-8 bg-gradient-to-br from-[#4B6E48] to-[#3a5638] rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                  <Calendar className="w-6 h-6 max-[400px]:w-5 max-[400px]:h-5 text-white" />
                </div>
                <h2 className="text-2xl max-[400px]:text-xl font-bold text-gray-900">Today's Action Plan</h2>
              </div>
              <div className="text-sm max-[400px]:text-xs max-[400px]:ml-[calc(32px+10px)] max-[400px]:mt-1 text-gray-600">
                {dailyTasks.filter(t => t.completed).length} of {dailyTasks.length} completed
              </div>
            </div>

            <div className="space-y-3">
              {dailyTasks.map((task) => (
                <div
                  key={task.id}
                  className={`flex items-start max-[400px]:items-start min-[401px]:items-center gap-4 p-[12px_16px] rounded-xl border transition-all ${
                    task.completed
                      ? 'bg-[#4B6E48]/5 border-[#4B6E48]/20'
                      : 'bg-gray-50/50 border-gray-200/50 hover:border-[#4B6E48]/40 hover:bg-[#4B6E48]/5'
                  }`}
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 self-start max-[400px]:self-start ${
                      task.completed
                        ? 'border-[#4B6E48]'
                        : 'border-gray-300 hover:border-[#4B6E48]'
                    }`}
                    style={task.completed ? { backgroundColor: '#4B6E48' } : {}}
                  >
                    {task.completed && <CheckCircle className="w-4 h-4 text-white" />}
                  </button>

                  <div className="flex-1 min-w-0">
                    <div 
                      className={`text-sm max-[400px]:text-[13px] ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {task.task}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500 flex-shrink-0 self-start max-[400px]:self-start whitespace-nowrap">
                    <Clock className="w-4 h-4" />
                    <span>{task.duration} min</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-[#4B6E48]/10 backdrop-blur-sm border border-[#4B6E48]/20 rounded-xl min-h-[52px] max-[400px]:min-h-[52px]">
              <div 
                className="text-sm max-[400px]:text-[11px] text-gray-700"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}
              >
                <strong className="font-semibold text-[#4B6E48]">Tomorrow's Preview:</strong> Writing Task 1 practice, Listening Section 3 & 4, Speaking Part 3 drill
              </div>
            </div>
          </motion.div>

          {/* Counselor Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-8 max-[1199px]:p-6 max-[767px]:p-5 max-[480px]:p-4 mb-8 max-[767px]:mb-6 max-[480px]:mb-5"
          >
            <button
              onClick={() => setShowCounselorNotes(!showCounselorNotes)}
              className="w-full flex flex-row items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 max-[480px]:gap-2 flex-1 min-w-0">
                <MessageSquare className="w-6 h-6 max-[480px]:w-5 max-[480px]:h-5 text-blue-600 flex-shrink-0" />
                <h2 className="font-bold text-gray-900 text-[18px] max-[767px]:text-[16px] max-[480px]:text-[15px] truncate">Counselor / Mentor Notes</h2>
              </div>
              <ChevronRight className={`w-5 h-5 max-[480px]:w-5 max-[480px]:h-5 min-w-[20px] text-gray-400 transition-transform flex-shrink-0 ${showCounselorNotes ? 'rotate-90' : ''}`} />
            </button>

            {showCounselorNotes && (
              <div className="mt-6 max-[767px]:mt-5 max-[480px]:mt-4 space-y-4 max-[480px]:space-y-3">
                <div className="p-4 max-[480px]:p-3 bg-blue-50 rounded-xl border-l-4 border-blue-600">
                  <div className="flex items-center justify-between mb-2 max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-1">
                    <span className="font-semibold text-blue-900 max-[767px]:text-sm max-[480px]:text-sm">From: Sarah Johnson (IELTS Specialist)</span>
                    <span className="text-xs text-blue-700">Feb 3, 2026</span>
                  </div>
                  <p className="text-sm max-[480px]:text-sm text-blue-800 leading-relaxed">
                    Excellent progress on Reading! Your comprehension has improved significantly. Focus on Writing coherence for the next 2 weeks. I recommend using the PEEL structure (Point, Evidence, Explain, Link) for body paragraphs.
                  </p>
                </div>

                <div className="p-4 max-[480px]:p-3 bg-purple-50 rounded-xl border-l-4 border-purple-600">
                  <div className="flex items-center justify-between mb-2 max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-1">
                    <span className="font-semibold text-purple-900 max-[767px]:text-sm max-[480px]:text-sm">From: David Chen (Speaking Coach)</span>
                    <span className="text-xs text-purple-700">Jan 30, 2026</span>
                  </div>
                  <p className="text-sm max-[480px]:text-sm text-purple-800 leading-relaxed">
                    Your fluency is improving! Work on reducing filler words by practicing with a recording device. Try the "3-second pause" technique instead of saying "um" or "like".
                  </p>
                </div>

                <div className="text-sm max-[480px]:text-xs text-gray-500 italic">Next review session: February 10, 2026</div>
              </div>
            )}
          </motion.div>

          {/* Adjustment Controls - Auto Layout Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-row flex-wrap max-[480px]:flex-col gap-4 max-[767px]:gap-4 max-[480px]:gap-3 w-full"
          >
            <StandardButton 
              variant="outline" 
              className="flex-1 min-[481px]:min-w-[200px] max-[480px]:w-full flex flex-row items-center justify-center gap-2 px-6 max-[1199px]:px-5 max-[767px]:px-4 max-[480px]:px-5 py-3 max-[480px]:py-3 whitespace-nowrap text-sm max-[767px]:text-sm"
              onClick={() => toast.info('Plan settings panel opening soon...')}
            >
              <Settings className="w-4 h-4 max-[480px]:w-[18px] max-[480px]:h-[18px] flex-shrink-0" />
              <span>Adjust Plan Settings</span>
            </StandardButton>
            <StandardButton 
              variant="outline" 
              className="flex-1 min-[481px]:min-w-[200px] max-[480px]:w-full flex flex-row items-center justify-center gap-2 px-6 max-[1199px]:px-5 max-[767px]:px-4 max-[480px]:px-5 py-3 max-[480px]:py-3 whitespace-nowrap text-sm max-[767px]:text-sm"
              onClick={() => toast.info('Target score adjustment coming soon...')}
            >
              <Target className="w-4 h-4 max-[480px]:w-[18px] max-[480px]:h-[18px] flex-shrink-0" />
              <span>Change Target Score</span>
            </StandardButton>
            <StandardButton 
              variant="outline" 
              className="flex-1 min-[481px]:min-w-[200px] max-[480px]:w-full flex flex-row items-center justify-center gap-2 px-6 max-[1199px]:px-5 max-[767px]:px-4 max-[480px]:px-5 py-3 max-[480px]:py-3 whitespace-nowrap text-sm max-[767px]:text-sm"
              onClick={() => toast.info('Timeline rescheduling feature coming soon...')}
            >
              <Calendar className="w-4 h-4 max-[480px]:w-[18px] max-[480px]:h-[18px] flex-shrink-0" />
              <span>Reschedule Timeline</span>
            </StandardButton>
          </motion.div>
        </div>
      </div>
      <Footer />
    </DndProvider>
  );
}

export default ImprovementPlan;
