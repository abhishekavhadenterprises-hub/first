import { useState } from 'react';
import { Footer } from '@/app/components/Footer';
import { AIAssistantNav } from '@/app/components/AIAssistantNav';
import { StandardButton } from '@/app/components/ui/standard-button';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  BookOpen,
  PenTool,
  Mic,
  Headphones,
  Target,
  Calendar,
  TrendingUp,
  Award,
  CheckCircle,
  Clock,
  BarChart3,
  Sparkles,
  ChevronRight,
  Settings
} from 'lucide-react';
import {
  mockUserGoal,
  mockSkillLevels,
  mockProgressData,
  mockTodayTasks,
  mockWeeklyPlan,
  mockRecentSessions,
  mockStrengths,
  mockWeaknesses,
  mockRecommendation
} from '@/app/data/aiAssistantData';
import { toast } from 'sonner';

export default function AIAssistantDashboard() {
  const [userGoal, setUserGoal] = useState(mockUserGoal);
  const [todayTasks, setTodayTasks] = useState(mockTodayTasks);
  const [intensity, setIntensity] = useState<'Light' | 'Normal' | 'Intense'>('Normal');

  const skillIcons = {
    reading: BookOpen,
    writing: PenTool,
    speaking: Mic,
    listening: Headphones
  };

  const skillColors = {
    reading: 'bg-blue-50 text-blue-700 border-blue-200',
    writing: 'bg-purple-50 text-purple-700 border-purple-200',
    speaking: 'bg-green-50 text-green-700 border-green-200',
    listening: 'bg-amber-50 text-amber-700 border-amber-200'
  };

  const toggleTask = (taskId: string) => {
    setTodayTasks(tasks =>
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedTasks = todayTasks.filter(t => t.completed).length;
  const daysUntilExam = Math.ceil(
    (new Date(userGoal.targetDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <>
      <AIAssistantNav />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-40 pb-16">
        <div className="dashboard-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="dashboard-hero-section"
          >
            <div className="dashboard-hero-header">
              <div className="dashboard-hero-content">
                <div className="dashboard-hero-title-row">
                  <div className="dashboard-hero-icon">
                    <Sparkles className="dashboard-hero-icon-svg" />
                  </div>
                  <div className="dashboard-hero-text-wrapper">
                    <h1 className="dashboard-hero-title">AI Visa & English Assistant</h1>
                    <p className="dashboard-hero-subtitle">
                      Practice + track progress across Reading, Writing, Speaking, Listening
                    </p>
                  </div>
                </div>
              </div>

              <button className="dashboard-settings-btn">
                <Settings className="dashboard-settings-icon" />
              </button>
            </div>

            {/* CTAs */}
            <div className="dashboard-hero-ctas">
              <Link to="/ai-assistant/reading">
                <StandardButton size="lg" className="dashboard-cta-primary">
                  <Sparkles className="dashboard-cta-icon" />
                  <span>Start a Practice Session</span>
                </StandardButton>
              </Link>
              <StandardButton variant="outline" size="lg" className="dashboard-cta-secondary">
                <Clock className="dashboard-cta-icon" />
                <span>Continue Last Session</span>
              </StandardButton>
            </div>
          </motion.div>

          {/* Comprehensive Responsive Styles for Dashboard Hero Section */}
          <style>{`
            /* ============================================
               1. LAYOUT & CONTAINER
               Desktop (â‰¥1280px): Max-width 1200px, Center aligned
               Tablet (768pxâ€“1279px): 100% width, 24px side padding
               Mobile (â‰¤767px): 100% width, 16px side padding
               Remove large outer white margins
               Make layout fluid instead of fixed
               ============================================ */
            .dashboard-container {
              width: 100%;
              margin: 0 auto;
            }

            /* Mobile (â‰¤480px): 16px padding */
            @media (max-width: 480px) {
              .dashboard-container {
                max-width: 100%;
                padding: 0 16px;
              }
            }

            /* Mobile Large (481-767px): 16px padding */
            @media (min-width: 481px) and (max-width: 767px) {
              .dashboard-container {
                max-width: 100%;
                padding: 0 16px;
              }
            }

            /* Tablet (768-1279px): 24px padding */
            @media (min-width: 768px) and (max-width: 1279px) {
              .dashboard-container {
                max-width: 100%;
                padding: 0 24px;
              }
            }

            /* Desktop (â‰¥1280px): 1200px max-width, centered */
            @media (min-width: 1280px) {
              .dashboard-container {
                max-width: 1200px;
                padding: 0 32px;
              }
            }

            /* ============================================
               HERO SECTION BASE
               ============================================ */
            .dashboard-hero-section {
              width: 100%;
              box-sizing: border-box;
            }

            /* Mobile: 24px bottom margin */
            @media (max-width: 767px) {
              .dashboard-hero-section {
                margin-bottom: 24px;
              }
            }

            /* Tablet: 36px bottom margin */
            @media (min-width: 768px) and (max-width: 1279px) {
              .dashboard-hero-section {
                margin-bottom: 36px;
              }
            }

            /* Desktop: 48px bottom margin */
            @media (min-width: 1280px) {
              .dashboard-hero-section {
                margin-bottom: 48px;
              }
            }

            /* ============================================
               HERO HEADER (Title Row + Settings Button)
               ============================================ */
            .dashboard-hero-header {
              display: flex;
              align-items: flex-start;
              justify-content: space-between;
              width: 100%;
            }

            /* Mobile: 16px bottom margin */
            @media (max-width: 767px) {
              .dashboard-hero-header {
                margin-bottom: 16px;
                gap: 12px;
              }
            }

            /* Tablet: 20px bottom margin */
            @media (min-width: 768px) and (max-width: 1279px) {
              .dashboard-hero-header {
                margin-bottom: 20px;
                gap: 16px;
              }
            }

            /* Desktop: 24px bottom margin */
            @media (min-width: 1280px) {
              .dashboard-hero-header {
                margin-bottom: 24px;
                gap: 20px;
              }
            }

            .dashboard-hero-content {
              flex: 1;
              min-width: 0;
            }

            /* ============================================
               5. ICON ALIGNMENT
               Align green assistant icon vertically centered with heading
               Maintain 16px spacing between icon and text
               On mobile, reduce icon size slightly
               ============================================ */
            .dashboard-hero-title-row {
              display: flex;
              align-items: center;
              gap: 16px;
            }

            .dashboard-hero-icon {
              background: linear-gradient(to bottom right, #4B6E48, #3a5638);
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
            }

            .dashboard-hero-icon-svg {
              color: #FFFFFF;
            }

            /* Mobile: 40px icon box, 20px icon */
            @media (max-width: 767px) {
              .dashboard-hero-title-row {
                gap: 12px;
              }
              .dashboard-hero-icon {
                width: 40px;
                height: 40px;
              }
              .dashboard-hero-icon-svg {
                width: 20px;
                height: 20px;
              }
            }

            /* Tablet: 44px icon box, 22px icon */
            @media (min-width: 768px) and (max-width: 1279px) {
              .dashboard-hero-icon {
                width: 44px;
                height: 44px;
              }
              .dashboard-hero-icon-svg {
                width: 22px;
                height: 22px;
              }
            }

            /* Desktop: 48px icon box, 24px icon */
            @media (min-width: 1280px) {
              .dashboard-hero-icon {
                width: 48px;
                height: 48px;
              }
              .dashboard-hero-icon-svg {
                width: 24px;
                height: 24px;
              }
            }

            /* ============================================
               HERO TEXT WRAPPER
               ============================================ */
            .dashboard-hero-text-wrapper {
              flex: 1;
              min-width: 0;
            }

            /* ============================================
               3. HEADING
               Desktop: 40px bold
               Tablet: 32px
               Mobile: 26px
               Line-height: 1.3
               Maintain balanced text wrapping
               Ensure natural break: "AI Visa & English" / "Assistant"
               ============================================ */
            .dashboard-hero-title {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              font-weight: 700;
              color: #111827;
              line-height: 1.3;
              margin: 0;
              word-wrap: break-word;
              overflow-wrap: break-word;
            }

            /* Mobile: 26px */
            @media (max-width: 767px) {
              .dashboard-hero-title {
                font-size: 26px;
                margin-bottom: 6px;
              }
            }

            /* Tablet: 32px */
            @media (min-width: 768px) and (max-width: 1279px) {
              .dashboard-hero-title {
                font-size: 32px;
                margin-bottom: 8px;
              }
            }

            /* Desktop: 40px */
            @media (min-width: 1280px) {
              .dashboard-hero-title {
                font-size: 40px;
                margin-bottom: 8px;
              }
            }

            /* ============================================
               4. SUBTITLE
               Max-width: 600px desktop, 100% on mobile
               Font size: Desktop 18px, Mobile 15â€“16px
               Line-height: 1.5
               Avoid awkward wrapping
               ============================================ */
            .dashboard-hero-subtitle {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              color: #6B7280;
              line-height: 1.5;
              margin: 0;
              word-wrap: break-word;
              overflow-wrap: break-word;
            }

            /* Mobile: 15px (within 15-16px), 100% width */
            @media (max-width: 767px) {
              .dashboard-hero-subtitle {
                font-size: 15px;
                max-width: 100%;
              }
            }

            /* Tablet: 16px, 100% width */
            @media (min-width: 768px) and (max-width: 1279px) {
              .dashboard-hero-subtitle {
                font-size: 16px;
                max-width: 100%;
              }
            }

            /* Desktop: 18px, 600px max-width */
            @media (min-width: 1280px) {
              .dashboard-hero-subtitle {
                font-size: 18px;
                max-width: 600px;
              }
            }

            /* ============================================
               SETTINGS BUTTON
               ============================================ */
            .dashboard-settings-btn {
              padding: 8px;
              background-color: transparent;
              border: none;
              border-radius: 8px;
              cursor: pointer;
              transition: background-color 0.2s ease;
              flex-shrink: 0;
            }

            .dashboard-settings-btn:hover {
              background-color: #F3F4F6;
            }

            .dashboard-settings-icon {
              width: 20px;
              height: 20px;
              color: #6B7280;
            }

            /* Mobile: slightly smaller */
            @media (max-width: 767px) {
              .dashboard-settings-btn {
                padding: 6px;
              }
              .dashboard-settings-icon {
                width: 18px;
                height: 18px;
              }
            }

            /* ============================================
               6. CTA BUTTONS
               Desktop: Horizontal layout, 16px gap
               Tablet: Keep horizontal if space allows
               Mobile: Stack vertically, Full width buttons, 12â€“16px vertical spacing
               Reduce internal padding slightly on small screens
               ============================================ */
            .dashboard-hero-ctas {
              display: flex;
              flex-wrap: wrap;
              width: 100%;
            }

            /* Mobile: vertical stack, 12px gap, full width */
            @media (max-width: 767px) {
              .dashboard-hero-ctas {
                flex-direction: column;
                gap: 12px;
              }
              .dashboard-hero-ctas > * {
                width: 100%;
              }
            }

            /* Tablet: horizontal, 16px gap */
            @media (min-width: 768px) and (max-width: 1279px) {
              .dashboard-hero-ctas {
                flex-direction: row;
                gap: 16px;
              }
            }

            /* Desktop: horizontal, 16px gap */
            @media (min-width: 1280px) {
              .dashboard-hero-ctas {
                flex-direction: row;
                gap: 16px;
              }
            }

            .dashboard-cta-primary,
            .dashboard-cta-secondary {
              display: flex;
              align-items: center;
              justify-center gap-8px;
              transition: all 0.2s ease;
            }

            .dashboard-cta-primary {
              background-color: #4B6E48;
              color: #FFFFFF;
            }

            .dashboard-cta-icon {
              flex-shrink: 0;
            }

            /* Mobile: full width buttons, slightly reduced padding */
            @media (max-width: 767px) {
              .dashboard-cta-primary,
              .dashboard-cta-secondary {
                width: 100%;
                min-height: 44px;
              }
              .dashboard-cta-icon {
                width: 18px;
                height: 18px;
              }
            }

            /* Tablet & Desktop: auto width */
            @media (min-width: 768px) {
              .dashboard-cta-icon {
                width: 20px;
                height: 20px;
              }
            }

            /* ============================================
               7. SPACING SYSTEM
               Desktop vertical spacing: 48px
               Tablet: 36px
               Mobile: 24px
               Maintain consistent vertical rhythm
               ============================================ */
            /* Already handled in .dashboard-hero-section margin-bottom */

            /* ============================================
               8. VISUAL BALANCE
               Avoid excessive empty space on large screens
               Ensure fluid scaling across all breakpoints
               Make the section visually clean and proportionally balanced
               ============================================ */
            
            /* Prevent horizontal overflow */
            .dashboard-container,
            .dashboard-hero-section,
            .dashboard-hero-header,
            .dashboard-hero-ctas {
              overflow-x: hidden;
              max-width: 100%;
              box-sizing: border-box;
            }

            /* Smooth transitions */
            .dashboard-settings-btn,
            .dashboard-cta-primary,
            .dashboard-cta-secondary {
              transition: all 0.2s ease;
            }

            /* Text overflow prevention */
            .dashboard-hero-title,
            .dashboard-hero-subtitle {
              word-wrap: break-word;
              overflow-wrap: break-word;
            }
          `}</style>

          {/* Goal Setup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="goal-setup-card"
          >
            <div className="goal-setup-header">
              <Target className="goal-setup-icon" />
              <h2 className="goal-setup-title">Your Goal Setup</h2>
            </div>

            <div className="goal-setup-grid">
              <div className="goal-setup-field">
                <label className="goal-setup-label">Target Exam</label>
                <select className="goal-setup-select">
                  <option>IELTS</option>
                  <option>TOEFL</option>
                  <option>PTE</option>
                  <option>Duolingo</option>
                  <option>Visa Interview</option>
                </select>
              </div>

              <div className="goal-setup-field">
                <label className="goal-setup-label">Target Score</label>
                <input
                  type="text"
                  value={userGoal.targetScore}
                  onChange={(e) => setUserGoal({ ...userGoal, targetScore: e.target.value })}
                  className="goal-setup-input"
                />
              </div>

              <div className="goal-setup-field">
                <label className="goal-setup-label">Target Date</label>
                <div className="goal-setup-date-wrapper">
                  <Calendar className="goal-setup-calendar-icon" />
                  <input
                    type="date"
                    value={userGoal.targetDate}
                    onChange={(e) => setUserGoal({ ...userGoal, targetDate: e.target.value })}
                    className="goal-setup-date-input"
                  />
                </div>
              </div>

              <div className="goal-setup-field">
                <label className="goal-setup-label">Focus Areas</label>
                <div className="goal-setup-focus-icons">
                  {(['reading', 'writing', 'speaking', 'listening'] as const).map((skill) => {
                    const Icon = skillIcons[skill];
                    return (
                      <button
                        key={skill}
                        className={`goal-setup-focus-btn ${
                          userGoal.focusAreas[skill]
                            ? 'focus-btn-active'
                            : 'focus-btn-inactive'
                        }`}
                        title={skill}
                      >
                        <Icon className="focus-btn-icon" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="goal-setup-footer">
              <Calendar className="goal-setup-footer-icon" />
              <span className="goal-setup-footer-text">{daysUntilExam} days</span> until your exam
            </div>
          </motion.div>

          {/* Skill Snapshot Cards */}
          <div className="skill-cards-grid">
            {mockSkillLevels.map((skill, index) => {
              const Icon = skillIcons[skill.skill];
              const colorClass = skillColors[skill.skill];

              return (
                <motion.div
                  key={skill.skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="skill-card"
                >
                  <div className="skill-card-header">
                    <div className={`skill-card-icon-wrapper ${colorClass}`}>
                      <Icon className="skill-card-icon" />
                    </div>
                    <div className="skill-card-score">
                      <div className="skill-card-band">{skill.currentBand}</div>
                      <div className="skill-card-band-label">Current Band</div>
                    </div>
                  </div>

                  <h3 className="skill-card-title">{skill.skill}</h3>

                  <div className="skill-card-stats">
                    <div className="skill-card-stat-row">
                      <span className="skill-card-stat-label">Weekly Practice</span>
                      <span className="skill-card-stat-value">{skill.weeklyPracticeTime} min</span>
                    </div>
                    <div className="skill-card-stat-row">
                      <span className="skill-card-stat-label">Last Score</span>
                      <span className="skill-card-stat-value skill-card-stat-score">{skill.lastScore}</span>
                    </div>
                  </div>

                  <div className="skill-card-weakness">
                    <div className="skill-card-weakness-label">Weakest Sub-skill</div>
                    <div className="skill-card-weakness-text">{skill.weakestSubSkill}</div>
                  </div>

                  <Link to={`/ai-assistant/${skill.skill}`}>
                    <StandardButton variant="outline" size="sm" className="skill-card-btn">
                      <span>Practice Now</span>
                    </StandardButton>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Comprehensive Responsive Styles for Goal Setup & Skill Cards */}
          <style>{`
            /* ============================================
               2. CONTAINER BEHAVIOR
               Desktop max-width: 1200px centered
               Tablet: 100% width with 24px side padding
               Mobile: 100% width with 16px padding
               Remove excessive side white space
               Maintain consistent spacing between sections
               Keep layout visually balanced across breakpoints
               ============================================ */
            
            /* Already handled by .max-w-7xl parent container, but we'll ensure sections respect this */

            /* ============================================
               4. GOAL SETUP CARD (Form Section)
               Layout: Desktop fields in single row, Tablet wrap into 2 rows, Mobile stack vertically
               Field Behavior: Target Exam, Target Score, Target Date â†’ full width on mobile
               Focus Area icons wrap properly
               Maintain equal spacing between fields
               Card Styling: Desktop padding 24-32px, Mobile padding 16px, Border radius 16px
               ============================================ */
            .goal-setup-card {
              background-color: #FFFFFF;
              border: 1px solid #E5E7EB;
              border-radius: 16px;
              width: 100%;
              box-sizing: border-box;
            }

            /* Mobile (â‰¤480px): 16px padding, 32px bottom margin */
            @media (max-width: 480px) {
              .goal-setup-card {
                padding: 16px;
                margin-bottom: 24px;
              }
            }

            /* Mobile Large (481-767px): 20px padding */
            @media (min-width: 481px) and (max-width: 767px) {
              .goal-setup-card {
                padding: 20px;
                margin-bottom: 28px;
              }
            }

            /* Tablet (768-1279px): 24px padding */
            @media (min-width: 768px) and (max-width: 1279px) {
              .goal-setup-card {
                padding: 24px;
                margin-bottom: 32px;
              }
            }

            /* Desktop (â‰¥1280px): 28px padding (within 24-32px) */
            @media (min-width: 1280px) {
              .goal-setup-card {
                padding: 28px;
                margin-bottom: 32px;
              }
            }

            /* ============================================
               5. SECTION TITLE â€” "Your Goal Setup"
               Desktop: 22-24px, Tablet: 20px, Mobile: 18px
               Line height: 1.3
               Keep icon aligned with text
               Maintain consistent spacing from container edges
               ============================================ */
            .goal-setup-header {
              display: flex;
              align-items: center;
              gap: 8px;
            }

            .goal-setup-icon {
              color: #4B6E48;
              flex-shrink: 0;
            }

            /* Mobile: 16px icon, 18px title */
            @media (max-width: 767px) {
              .goal-setup-header {
                margin-bottom: 16px;
              }
              .goal-setup-icon {
                width: 18px;
                height: 18px;
              }
            }

            /* Tablet: 18px icon, 20px title */
            @media (min-width: 768px) and (max-width: 1279px) {
              .goal-setup-header {
                margin-bottom: 18px;
              }
              .goal-setup-icon {
                width: 20px;
                height: 20px;
              }
            }

            /* Desktop: 20px icon, 23px title (within 22-24px) */
            @media (min-width: 1280px) {
              .goal-setup-header {
                margin-bottom: 20px;
              }
              .goal-setup-icon {
                width: 20px;
                height: 20px;
              }
            }

            .goal-setup-title {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              font-weight: 700;
              color: #111827;
              line-height: 1.3;
              margin: 0;
            }

            /* Mobile: 18px */
            @media (max-width: 767px) {
              .goal-setup-title {
                font-size: 18px;
              }
            }

            /* Tablet: 20px */
            @media (min-width: 768px) and (max-width: 1279px) {
              .goal-setup-title {
                font-size: 20px;
              }
            }

            /* Desktop: 23px (within 22-24px) */
            @media (min-width: 1280px) {
              .goal-setup-title {
                font-size: 23px;
              }
            }

            /* ============================================
               GOAL SETUP GRID
               Desktop: fields in single row (4 columns)
               Tablet: wrap into 2 rows (2 columns)
               Mobile: stack fields vertically (1 column)
               ============================================ */
            .goal-setup-grid {
              display: grid;
              width: 100%;
            }

            /* Mobile (â‰¤767px): 1 column, 16px gap */
            @media (max-width: 767px) {
              .goal-setup-grid {
                grid-template-columns: 1fr;
                gap: 16px;
              }
            }

            /* Tablet (768-1279px): 2 columns, 16px gap */
            @media (min-width: 768px) and (max-width: 1279px) {
              .goal-setup-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 16px;
              }
            }

            /* Desktop (â‰¥1280px): 4 columns, 16px gap */
            @media (min-width: 1280px) {
              .goal-setup-grid {
                grid-template-columns: repeat(4, 1fr);
                gap: 16px;
              }
            }

            /* ============================================
               GOAL SETUP FIELDS
               Target Exam, Target Score, Target Date â†’ full width on mobile
               Maintain equal spacing between fields
               ============================================ */
            .goal-setup-field {
              display: flex;
              flex-direction: column;
              width: 100%;
            }

            .goal-setup-label {
              display: block;
              font-size: 14px;
              font-weight: 500;
              color: #374151;
              margin-bottom: 8px;
            }

            .goal-setup-select,
            .goal-setup-input {
              width: 100%;
              padding: 10px 12px;
              border: 1px solid #D1D5DB;
              border-radius: 8px;
              font-size: 14px;
              color: #111827;
              background-color: #FFFFFF;
              transition: all 0.2s ease;
              box-sizing: border-box;
            }

            .goal-setup-select:focus,
            .goal-setup-input:focus {
              outline: none;
              border-color: #4B6E48;
              ring: 2px;
              ring-color: #4B6E48;
            }

            .goal-setup-date-wrapper {
              display: flex;
              align-items: center;
              gap: 8px;
              padding: 10px 12px;
              border: 1px solid #D1D5DB;
              border-radius: 8px;
              background-color: transparent;
            }

            .goal-setup-calendar-icon {
              width: 16px;
              height: 16px;
              color: #6B7280;
              flex-shrink: 0;
            }

            .goal-setup-date-input {
              flex: 1;
              border: none;
              outline: none;
              font-size: 14px;
              color: #111827;
              background-color: transparent;
            }

            /* ============================================
               FOCUS AREA ICONS
               Icons wrap properly on smaller screens
               Maintain consistent spacing
               ============================================ */
            .goal-setup-focus-icons {
              display: flex;
              gap: 8px;
              flex-wrap: wrap;
            }

            .goal-setup-focus-btn {
              padding: 10px;
              border-radius: 8px;
              transition: all 0.2s ease;
              border: none;
              cursor: pointer;
              flex-shrink: 0;
            }

            .focus-btn-active {
              background-color: #4B6E48;
              color: #FFFFFF;
            }

            .focus-btn-inactive {
              background-color: #F3F4F6;
              color: #9CA3AF;
            }

            .focus-btn-inactive:hover {
              background-color: #E5E7EB;
            }

            .focus-btn-icon {
              width: 16px;
              height: 16px;
            }

            /* ============================================
               GOAL SETUP FOOTER
               ============================================ */
            .goal-setup-footer {
              display: flex;
              align-items: center;
              gap: 8px;
              font-size: 14px;
              color: #6B7280;
              margin-top: 16px;
            }

            .goal-setup-footer-icon {
              width: 16px;
              height: 16px;
            }

            .goal-setup-footer-text {
              font-weight: 500;
            }

            /* ============================================
               6. SKILL CARDS GRID (Reading / Writing / Speaking / Listening)
               Grid Behavior:
               Desktop (â‰¥1280px): 4 columns
               Tablet (768-1279px): 2 columns
               Mobile (â‰¤767px): 1 column
               ============================================ */
            .skill-cards-grid {
              display: grid;
              width: 100%;
            }

            /* Mobile (â‰¤767px): 1 column, 20px gap, 32px bottom margin */
            @media (max-width: 767px) {
              .skill-cards-grid {
                grid-template-columns: 1fr;
                gap: 20px;
                margin-bottom: 32px;
              }
            }

            /* Tablet (768-1279px): 2 columns, 24px gap, 32px bottom margin */
            @media (min-width: 768px) and (max-width: 1279px) {
              .skill-cards-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 24px;
                margin-bottom: 32px;
              }
            }

            /* Desktop (â‰¥1280px): 4 columns, 24px gap, 32px bottom margin */
            @media (min-width: 1280px) {
              .skill-cards-grid {
                grid-template-columns: repeat(4, 1fr);
                gap: 24px;
                margin-bottom: 32px;
              }
            }

            /* ============================================
               SKILL CARD LAYOUT
               Card width = 100% of grid column
               Reduce padding on mobile (16px)
               Maintain equal card height
               Prevent uneven spacing
               ============================================ */
            .skill-card {
              background-color: #FFFFFF;
              border: 2px solid #E5E7EB;
              border-radius: 16px;
              width: 100%;
              display: flex;
              flex-direction: column;
              transition: all 0.3s ease;
              box-sizing: border-box;
            }

            .skill-card:hover {
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            }

            /* Mobile: 16px padding */
            @media (max-width: 767px) {
              .skill-card {
                padding: 16px;
              }
            }

            /* Tablet & Desktop: 24px padding */
            @media (min-width: 768px) {
              .skill-card {
                padding: 24px;
              }
            }

            /* ============================================
               SKILL CARD ELEMENTS
               Keep band score aligned top-right
               Keep icon + title aligned
               Maintain spacing between text sections
               CTA button always full width
               ============================================ */
            .skill-card-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 16px;
            }

            .skill-card-icon-wrapper {
              padding: 12px;
              border-radius: 12px;
              border: 2px solid;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .skill-card-icon {
              width: 24px;
              height: 24px;
            }

            .skill-card-score {
              text-align: right;
            }

            .skill-card-band {
              font-size: 24px;
              font-weight: 700;
              color: #111827;
              line-height: 1;
            }

            .skill-card-band-label {
              font-size: 12px;
              color: #6B7280;
              margin-top: 4px;
            }

            /* ============================================
               7. TYPOGRAPHY
               Card Titles: Desktop 20px, Mobile 18px
               Labels & Body Text: Desktop 14-16px, Mobile 13-14px
               Prevent text overflow
               Avoid awkward line breaks
               Maintain readable line spacing
               ============================================ */
            .skill-card-title {
              font-weight: 700;
              color: #111827;
              margin: 0 0 16px 0;
              text-transform: capitalize;
            }

            /* Mobile: 18px */
            @media (max-width: 767px) {
              .skill-card-title {
                font-size: 18px;
              }
            }

            /* Tablet & Desktop: 20px */
            @media (min-width: 768px) {
              .skill-card-title {
                font-size: 20px;
              }
            }

            .skill-card-stats {
              display: flex;
              flex-direction: column;
              gap: 12px;
              margin-bottom: 16px;
            }

            .skill-card-stat-row {
              display: flex;
              align-items: center;
              justify-content: space-between;
              font-size: 14px;
            }

            .skill-card-stat-label {
              color: #6B7280;
            }

            .skill-card-stat-value {
              font-weight: 600;
              color: #111827;
            }

            .skill-card-stat-score {
              color: #10B981;
            }

            .skill-card-weakness {
              background-color: #FFFFFF;
              border: 1px solid #FEE2E2;
              border-radius: 8px;
              padding: 12px;
              margin-bottom: 16px;
            }

            .skill-card-weakness-label {
              font-size: 12px;
              font-weight: 500;
              color: #111827;
              margin-bottom: 4px;
            }

            .skill-card-weakness-text {
              font-size: 14px;
              color: #374151;
            }

            /* ============================================
               8. BUTTONS (Practice Now / Actions)
               Full width inside cards
               Maintain consistent height
               Mobile: Reduce vertical padding, Keep readable tap size (min 44px)
               Prevent button overflow
               ============================================ */
            .skill-card-btn {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
              min-height: 44px;
            }

            /* ============================================
               9. SPACING & ALIGNMENT
               Desktop vertical spacing: 40px
               Tablet: 32px
               Mobile: 24px
               Maintain consistent gap between cards
               Avoid excessive empty space
               Ensure balanced layout at all widths
               ============================================ */
            
            /* Already handled by margin-bottom in grid and card classes */

            /* ============================================
               10. OVERALL BEHAVIOR
               Smooth scaling from desktop â†’ tablet â†’ mobile
               No overflow or broken layout
               No overlapping components
               Maintain premium clean UI
               Layout should feel fluid and balanced
               ============================================ */
            
            /* Prevent horizontal overflow */
            .goal-setup-card,
            .skill-cards-grid,
            .skill-card {
              overflow-x: hidden;
              max-width: 100%;
            }

            /* Smooth transitions */
            .skill-card,
            .goal-setup-focus-btn {
              transition: all 0.3s ease;
            }

            /* Prevent text overflow */
            .skill-card-title,
            .skill-card-weakness-text,
            .goal-setup-title {
              word-wrap: break-word;
              overflow-wrap: break-word;
            }
          `}</style>

          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            {/* Progress & Insights */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#4B6E48] to-[#3a5638] rounded-xl flex items-center justify-center shadow-sm">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-[#0F172A]">Progress & Insights</h2>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 text-sm bg-[#4B6E48] text-white rounded-lg shadow-sm hover:bg-[#3a5638] transition-all duration-300">7 Days</button>
                    <button className="px-3 py-1.5 text-sm bg-gray-100 text-[#64748B] rounded-lg hover:bg-gray-200 hover:text-[#0F172A] transition-all duration-300">30 Days</button>
                  </div>
                </div>

                {/* Simple Progress Chart */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-6 p-6 bg-gradient-to-br from-gray-50 to-white border border-[#E2E8F0] rounded-xl hover:shadow-sm transition-shadow duration-300"
                >
                  <div className="flex items-end justify-between h-48 gap-2">
                    {mockProgressData.map((data, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                        className="flex-1 flex flex-col items-center gap-2 group"
                      >
                        <div className="w-full flex flex-col-reverse gap-1">
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${(data.reading / 9) * 100}%` }}
                            transition={{ duration: 0.6, delay: 0.6 + i * 0.05, ease: "easeOut" }}
                            className="bg-gradient-to-t from-[#4B6E48] to-[#5a8055] rounded-t hover:from-[#3a5638] hover:to-[#4B6E48] transition-all duration-300 cursor-pointer"
                            style={{ minHeight: '4px' }}
                          />
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${(data.writing / 9) * 100}%` }}
                            transition={{ duration: 0.6, delay: 0.65 + i * 0.05, ease: "easeOut" }}
                            className="bg-gradient-to-t from-[#7C9A7A] to-[#8FAA8D] rounded-t hover:from-[#6B8969] hover:to-[#7C9A7A] transition-all duration-300 cursor-pointer"
                            style={{ minHeight: '4px' }}
                          />
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${(data.speaking / 9) * 100}%` }}
                            transition={{ duration: 0.6, delay: 0.7 + i * 0.05, ease: "easeOut" }}
                            className="bg-gradient-to-t from-[#9BB899] to-[#B0C7AE] rounded-t hover:from-[#8FAA8D] hover:to-[#9BB899] transition-all duration-300 cursor-pointer"
                            style={{ minHeight: '4px' }}
                          />
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${(data.listening / 9) * 100}%` }}
                            transition={{ duration: 0.6, delay: 0.75 + i * 0.05, ease: "easeOut" }}
                            className="bg-gradient-to-t from-[#C5D6C4] to-[#D9E5D8] rounded-t hover:from-[#B0C7AE] hover:to-[#C5D6C4] transition-all duration-300 cursor-pointer"
                            style={{ minHeight: '4px' }}
                          />
                        </div>
                        <span className="text-xs text-[#94A3B8] font-medium group-hover:text-[#4B6E48] transition-colors duration-300">{new Date(data.date).getDate()}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-6 mt-6 text-xs flex-wrap">
                    <div className="flex items-center gap-2 group cursor-pointer">
                      <div className="w-3 h-3 bg-gradient-to-br from-[#4B6E48] to-[#5a8055] rounded shadow-sm group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-[#64748B] font-medium group-hover:text-[#4B6E48] transition-colors duration-300">Reading</span>
                    </div>
                    <div className="flex items-center gap-2 group cursor-pointer">
                      <div className="w-3 h-3 bg-gradient-to-br from-[#7C9A7A] to-[#8FAA8D] rounded shadow-sm group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-[#64748B] font-medium group-hover:text-[#4B6E48] transition-colors duration-300">Writing</span>
                    </div>
                    <div className="flex items-center gap-2 group cursor-pointer">
                      <div className="w-3 h-3 bg-gradient-to-br from-[#9BB899] to-[#B0C7AE] rounded shadow-sm group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-[#64748B] font-medium group-hover:text-[#4B6E48] transition-colors duration-300">Speaking</span>
                    </div>
                    <div className="flex items-center gap-2 group cursor-pointer">
                      <div className="w-3 h-3 bg-gradient-to-br from-[#C5D6C4] to-[#D9E5D8] rounded shadow-sm group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-[#64748B] font-medium group-hover:text-[#4B6E48] transition-colors duration-300">Listening</span>
                    </div>
                  </div>
                </motion.div>

                {/* Strengths & Weaknesses */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="bg-gradient-to-br from-[#4B6E48]/5 to-white border border-[#4B6E48]/20 rounded-xl p-5 hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#4B6E48] rounded-lg flex items-center justify-center shadow-sm">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      Strengths
                    </h3>
                    <ul className="space-y-3">
                      {mockStrengths.map((strength, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                          className="flex items-start gap-2.5 text-sm text-[#64748B] group hover:text-[#4B6E48] transition-colors duration-300"
                        >
                          <CheckCircle className="w-4 h-4 text-[#4B6E48] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                          <span>{strength}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="bg-gradient-to-br from-gray-50 to-white border border-[#E2E8F0] rounded-xl p-5 hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#64748B] rounded-lg flex items-center justify-center shadow-sm">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      Areas to Improve
                    </h3>
                    <ul className="space-y-3">
                      {mockWeaknesses.map((weakness, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                          className="flex items-start gap-2.5 text-sm text-[#64748B] group hover:text-[#0F172A] transition-colors duration-300"
                        >
                          <div className="w-4 h-4 border-2 border-[#64748B] rounded-full mt-0.5 flex-shrink-0 group-hover:border-[#4B6E48] group-hover:scale-110 transition-all duration-300" />
                          <span>{weakness}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* AI Recommendation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-gradient-to-br from-[#4B6E48] to-[#3a5638] rounded-xl p-6 text-white shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5" />
                    <h3 className="font-bold text-lg">AI Recommended Next Step</h3>
                  </div>
                  <p className="text-white/90 mb-4 text-sm leading-relaxed">{mockRecommendation}</p>
                  <Link to="/ai-assistant/improvement-plan">
                    <button className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] border border-white/20 hover:border-white/40">
                      <Target className="w-4 h-4" />
                      <span>View Full Improvement Plan</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Today's Plan + Weekly Plan */}
            <div className="space-y-6">
              {/* Today's Tasks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">Today's Checklist</h3>
                  <span className="text-sm text-gray-500">
                    {completedTasks}/{todayTasks.length}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  {todayTasks.map((task) => (
                    <button
                      key={task.id}
                      onClick={() => toggleTask(task.id)}
                      className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          task.completed
                            ? 'bg-[#4B6E48] border-[#4B6E48]'
                            : 'border-gray-300'
                        }`}
                      >
                        {task.completed && <CheckCircle className="w-4 h-4 text-white" />}
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm font-medium ${task.completed ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                          {task.title}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{task.duration} min</div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#4B6E48] to-[#3a5638] transition-all duration-500"
                    style={{ width: `${(completedTasks / todayTasks.length) * 100}%` }}
                  />
                </div>
              </motion.div>

              {/* Weekly Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">Weekly Plan</h3>
                  <div className="flex gap-1">
                    {(['Light', 'Normal', 'Intense'] as const).map((level) => (
                      <button
                        key={level}
                        onClick={() => setIntensity(level)}
                        className={`px-2 py-1 text-xs rounded transition-all ${
                          intensity === level
                            ? 'bg-[#4B6E48] text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  {mockWeeklyPlan.map((day, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        toast.success(`${day.day}'s plan: ${day.tasks.join(', ')}`);
                      }}
                      className={`w-full p-3 rounded-lg text-left transition-all hover:scale-[1.02] cursor-pointer ${
                        i === 0 ? 'bg-[#4B6E48]/10 border border-[#4B6E48]/20 hover:bg-[#4B6E48]/15' : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="font-semibold text-sm text-gray-900 mb-1">{day.day}</div>
                      <div className="text-xs text-gray-600">
                        {day.tasks.join(' â€¢ ')}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* History & Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#4B6E48]" />
                <h2 className="text-xl font-bold text-gray-900">Recent Sessions</h2>
              </div>
              <Link to="/ai-assistant/progress-log" className="text-[#4B6E48] hover:underline text-sm font-medium flex items-center gap-1">
                View all
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-3">
              {mockRecentSessions.map((session) => {
                const Icon = skillIcons[session.skill];
                const colorClass = skillColors[session.skill];

                return (
                  <div
                    key={session.id}
                    className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl border-2 ${colorClass}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{session.type}</div>
                        <div className="text-sm text-gray-500">{session.date} â€¢ {session.duration} min</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#4B6E48]">{session.score}</div>
                      <div className="text-xs text-gray-500">Band Score</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
}
