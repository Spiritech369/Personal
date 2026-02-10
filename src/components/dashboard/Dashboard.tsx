
// ============================================
// LifeHub - Dashboard Component
// ============================================

import React, { useMemo } from 'react';
import {
    CheckCircle2,
    Clock,
    Target,
    TrendingUp,
    Calendar,
    Zap,
    Sparkles,
} from 'lucide-react';
import { useProjectStore } from '../../stores/projectStore';
import { useTaskStore } from '../../stores/taskStore';
import { Card } from '../common';
import { TaskCard } from '../tasks';
import { DayFocus } from './DayFocus';
import { TemporalSummary } from './TemporalSummary';
import {
    isToday,
    isOverdue,
    calculateProjectHealth,
    suggestNextAction,
    calculateStreak,
    calculateMentalLoad,
    getTimeRemainingToday,
    checkReviewDue
} from '../../utils/helpers';
import { ReviewWizard } from '../reviews/ReviewWizard';
import { useReviewStore } from '../../stores/reviewStore';
import { Button } from '../common';
import styles from './Dashboard.module.css';

interface DashboardProps {
    onTaskClick: (taskId: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onTaskClick }) => {
    const { projects } = useProjectStore();
    const { tasks } = useTaskStore();
    const { reviews, startReview } = useReviewStore();
    const [isReviewOpen, setIsReviewOpen] = React.useState(false);
    const [activeFilter, setActiveFilter] = React.useState<'all' | 'completed' | 'in_progress' | 'overdue'>('all');

    // Check if review is due
    const reviewDue = useMemo(() => {
        const sorted = [...reviews].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        const lastWeekly = sorted.find(r => r.type === 'weekly')?.createdAt;
        const lastMonthly = sorted.find(r => r.type === 'monthly')?.createdAt;
        const lastQuarterly = sorted.find(r => r.type === 'quarterly')?.createdAt;

        return checkReviewDue(lastWeekly, lastMonthly, lastQuarterly);
    }, [reviews]);

    // Calculate stats
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((t) => t.status === 'done').length;
    const inProgressTasks = tasks.filter((t) => t.status === 'in_progress').length;
    const overdueTasks = tasks.filter(
        (t) => t.dueDate && isOverdue(t.dueDate) && t.status !== 'done' && !t.isArchived
    ).length;

    // Gamification Stats
    const streak = calculateStreak(tasks);
    const mentalLoad = calculateMentalLoad(tasks);
    const timeRemaining = getTimeRemainingToday();

    // State for the type of review being started
    const [activeReviewType, setActiveReviewType] = React.useState<'weekly' | 'monthly' | 'quarterly'>('weekly');

    const handleStartReview = (type: 'weekly' | 'monthly' | 'quarterly') => {
        setActiveReviewType(type);
        startReview(type);
        setIsReviewOpen(true);
    };

    // Today's tasks
    const todaysTasks = tasks.filter(
        (t) => ((t.dueDate && isToday(t.dueDate)) || t.status === 'in_progress') && !t.isArchived
    );

    // Urgent tasks
    const urgentTasks = tasks.filter(
        (t) => t.priority === 'urgent' && t.status !== 'done'
    );

    // Recent tasks (last 5 updated)
    const recentTasks = [...tasks]
        .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
        .slice(0, 5);

    const stats = [
        {
            label: 'Total Tasks',
            value: totalTasks,
            icon: <Target size={20} />,
            color: 'var(--color-accent)',
            filterKey: 'all',
        },
        {
            label: 'Completed',
            value: completedTasks,
            icon: <CheckCircle2 size={20} />,
            color: 'var(--color-success)',
            filterKey: 'completed',
        },
        {
            label: 'In Progress',
            value: inProgressTasks,
            icon: <Clock size={20} />,
            color: 'var(--color-info)',
            filterKey: 'in_progress',
        },
        {
            label: 'Overdue',
            value: overdueTasks,
            icon: <TrendingUp size={20} />,
            color: 'var(--color-error)',
            filterKey: 'overdue',
        },
    ];

    const completionRate = totalTasks > 0
        ? Math.round((completedTasks / totalTasks) * 100)
        : 0;

    // Filter tasks based on active card
    const filteredTasks = tasks.filter(t => {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'completed') return t.status === 'done';
        if (activeFilter === 'in_progress') return t.status === 'in_progress';
        if (activeFilter === 'overdue') return t.dueDate && isOverdue(t.dueDate) && t.status !== 'done';
        return true;
    });

    return (
        <div className={styles.dashboard}>
            {reviewDue && (
                <div className={styles.reviewBanner}>
                    <div className={styles.reviewBannerContent}>
                        <Sparkles size={20} />
                        <span>{reviewDue.charAt(0).toUpperCase() + reviewDue.slice(1)} Review is due!</span>
                    </div>
                    <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleStartReview(reviewDue)}
                        className={styles.reviewButton}
                    >
                        Start Review
                    </Button>
                </div>
            )}

            {/* Welcome Section */}
            <div className={styles.welcome}>
                <div className={styles.welcomeContent}>
                    <h1 className={styles.welcomeTitle}>
                        Good {getTimeOfDay()}, <span className={styles.accent}>Commander</span>
                    </h1>
                    <p className={styles.welcomeSubtitle}>
                        You have {todaysTasks.length} tasks to focus on today
                    </p>
                </div>
                <div className={styles.dateDisplay}>
                    <Calendar size={18} />
                    <span>{formatCurrentDate()}</span>
                </div>
            </div>

            {/* Day Focus Section */}
            <DayFocus onTaskClick={onTaskClick} />

            {/* Temporal Summary */}
            <TemporalSummary />

            {/* Stats Grid */}
            <div className={styles.statsGrid}>
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className={`${styles.statCardWrapper} ${activeFilter === stat.filterKey ? styles.activeStat : ''}`}
                        onClick={() => setActiveFilter(stat.filterKey as any)}
                    >
                        <Card variant="elevated" padding="md" className={styles.statCard}>
                            <div className={styles.statIcon} style={{ color: stat.color }}>
                                {stat.icon}
                            </div>
                            <div className={styles.statInfo}>
                                <span className={styles.statValue}>{stat.value}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>

            {/* Gamification Bar */}
            <div className={styles.gamificationBar} style={{ marginBottom: 24, display: 'flex', gap: 12 }}>
                {/* Streak */}
                <div className={styles.streakBadge} title="Productivity Streak">
                    <span style={{ fontSize: 16 }}>🔥</span>
                    <span style={{ fontWeight: 'bold', marginLeft: 4 }}>{streak} days</span>
                </div>

                {/* Mental Load */}
                <div className={styles.mentalLoadBadge} title={`Current Load: ${mentalLoad.percentage}%`}>
                    <span style={{ fontSize: 16 }}>🧠</span>
                    <span style={{ fontWeight: 'bold', marginLeft: 4, fontSize: 12 }}>{mentalLoad.level}</span>
                </div>

                {/* Time Remaining */}
                <div className={styles.timeRemaining} style={{ flex: 1 }} title={`${timeRemaining.hoursLeft}h left in active day`}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                        <span style={{ fontSize: 10, color: 'var(--color-text-secondary)' }}>Day Progress</span>
                        <span style={{ fontSize: 10, fontWeight: 'bold' }}>{timeRemaining.hoursLeft}h left</span>
                    </div>
                    <div style={{ height: 6, background: 'var(--color-bg-tertiary)', borderRadius: 3, overflow: 'hidden' }}>
                        <div
                            style={{
                                height: '100%',
                                width: `${timeRemaining.percentPassed}%`,
                                background: timeRemaining.percentPassed > 90 ? 'var(--color-error)' : 'var(--color-accent)',
                                transition: 'width 0.5s ease'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Filtered Task List (if filter active) */}
            {activeFilter !== 'all' && (
                <div className={styles.filteredListSection}>
                    <h3 className={styles.filterTitle}>
                        {activeFilter === 'completed' && '✅ Completed Tasks'}
                        {activeFilter === 'in_progress' && '🚧 In Progress'}
                        {activeFilter === 'overdue' && '⚠️ Overdue Tasks'}
                    </h3>
                    <div className={styles.taskList}>
                        {filteredTasks.length === 0 ? (
                            <p className={styles.emptyMessage}>No tasks found for this filter.</p>
                        ) : (
                            filteredTasks.map(task => (
                                <TaskCard key={task.id} task={task} onClick={() => onTaskClick(task.id)} />
                            ))
                        )}
                    </div>
                </div>
            )}

            {/* Progress Ring */}
            <Card variant="elevated" padding="lg" className={styles.progressCard}>
                <div className={styles.progressContent}>
                    <div className={styles.progressRing}>
                        <svg viewBox="0 0 100 100" className={styles.progressSvg}>
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="none"
                                stroke="var(--color-bg-tertiary)"
                                strokeWidth="8"
                            />
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="none"
                                stroke="var(--color-accent)"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeDasharray={`${completionRate * 2.51} 251`}
                                transform="rotate(-90 50 50)"
                                className={styles.progressCircle}
                            />
                        </svg>
                        <div className={styles.progressValue}>
                            <span className={styles.progressNumber}>{completionRate}</span>
                            <span className={styles.progressPercent}>%</span>
                        </div>
                    </div>
                    <div className={styles.progressInfo}>
                        <h3>Overall Progress</h3>
                        <p>{completedTasks} of {totalTasks} tasks completed</p>
                        <div className={styles.projectBreakdown}>
                            {projects.filter(p => !p.isArchived).slice(0, 3).map((project) => {
                                const projectTasks = tasks.filter((t) => t.projectId === project.id);
                                const projectCompleted = projectTasks.filter((t) => t.status === 'done').length;
                                const health = calculateProjectHealth(projectTasks);

                                // Next Action logic
                                const manualNextTaskId = project.nextActionTaskId;
                                const suggestedNextTask = suggestNextAction(projectTasks);
                                const nextAction = manualNextTaskId
                                    ? projectTasks.find(t => t.id === manualNextTaskId)
                                    : suggestedNextTask;

                                return (
                                    <div key={project.id} className={styles.projectProgressItem}>
                                        <div className={styles.projectProgressRow}>
                                            <span
                                                className={`${styles.projectDot} ${styles[health]}`}
                                                style={{ backgroundColor: project.color }}
                                            />
                                            <span className={`${styles.projectName} ${styles[health + 'Text']}`}>
                                                {project.name}
                                            </span>
                                            <span className={styles.projectCount}>
                                                {projectCompleted}/{projectTasks.length}
                                            </span>
                                        </div>
                                        {nextAction && (
                                            <div className={styles.dashboardNextAction} onClick={() => onTaskClick(nextAction.id)}>
                                                <Zap size={10} fill="currentColor" />
                                                <span className={styles.nextActionText}>Next: {nextAction.title}</span>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Card>

            {/* Two Column Layout */}
            <div className={styles.twoColumn}>
                {/* Urgent Tasks */}
                <Card variant="default" padding="md" className={styles.sectionCard}>
                    <div className={styles.sectionHeader}>
                        <Zap size={18} className={styles.urgentIcon} />
                        <h2>Urgent Tasks</h2>
                        <span className={styles.sectionCount}>{urgentTasks.length}</span>
                    </div>
                    <div className={styles.taskList}>
                        {urgentTasks.length === 0 ? (
                            <p className={styles.emptyMessage}>No urgent tasks 🎉</p>
                        ) : (
                            urgentTasks.slice(0, 3).map((task) => (
                                <TaskCard key={task.id} task={task} onClick={() => onTaskClick(task.id)} />
                            ))
                        )}
                    </div>
                </Card>

                {/* Recent Activity */}
                <Card variant="default" padding="md" className={styles.sectionCard}>
                    <div className={styles.sectionHeader}>
                        <Clock size={18} />
                        <h2>Recent Tasks</h2>
                    </div>
                    <div className={styles.taskList}>
                        {recentTasks.map((task) => (
                            <TaskCard key={task.id} task={task} onClick={() => onTaskClick(task.id)} />
                        ))}
                    </div>
                </Card>
            </div>

            {isReviewOpen && (
                <ReviewWizard
                    type={activeReviewType}
                    onClose={() => setIsReviewOpen(false)}
                />
            )}
        </div>
    );
};

// Helper functions
function getTimeOfDay(): string {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 17) return 'afternoon';
    return 'evening';
}

function formatCurrentDate(): string {
    return new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });
}
