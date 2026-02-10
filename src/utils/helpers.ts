// ============================================
// LifeHub - Helper Utilities
// ============================================

import { v4 as uuidv4 } from 'uuid';
import type { Task, TaskStatus, TaskPriority, ProjectHealth } from '../types';

/**
 * Generate a unique ID
 */
export function generateId(): string {
    return uuidv4();
}

/**
 * Get current timestamp in ISO format
 */
export function getCurrentTimestamp(): string {
    return new Date().toISOString();
}

/**
 * Format date for display
 */
export function formatDate(dateString: string | null): string {
    if (!dateString) return '';

    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    // Check if same day
    if (date.toDateString() === today.toDateString()) {
        return 'Today';
    }
    if (date.toDateString() === tomorrow.toDateString()) {
        return 'Tomorrow';
    }
    if (date.toDateString() === yesterday.toDateString()) {
        return 'Yesterday';
    }

    // Format as short date
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: date.getFullYear() !== today.getFullYear() ? 'numeric' : undefined,
    });
}

/**
 * Format relative time (e.g., "2 hours ago")
 */
export function formatRelativeTime(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return formatDate(dateString);
}

/**
 * Get status label
 */
export function getStatusLabel(status: TaskStatus): string {
    const labels: Record<TaskStatus, string> = {
        todo: 'To Do',
        in_progress: 'In Progress',
        done: 'Done',
    };
    return labels[status];
}

/**
 * Get priority label
 */
export function getPriorityLabel(priority: TaskPriority): string {
    const labels: Record<TaskPriority, string> = {
        low: 'Low',
        medium: 'Medium',
        high: 'High',
        urgent: 'Urgent',
    };
    return labels[priority];
}

/**
 * Get priority color CSS variable
 */
export function getPriorityColor(priority: TaskPriority): string {
    const colors: Record<TaskPriority, string> = {
        low: 'var(--color-priority-low)',
        medium: 'var(--color-priority-medium)',
        high: 'var(--color-priority-high)',
        urgent: 'var(--color-priority-urgent)',
    };
    return colors[priority];
}

/**
 * Calculate task completion percentage
 */
export function getTaskProgress(task: Task): number {
    if (task.subtasks.length === 0) {
        return task.status === 'done' ? 100 : 0;
    }
    const completed = task.subtasks.filter(s => s.isCompleted).length;
    return Math.round((completed / task.subtasks.length) * 100);
}

/**
 * Check if date is overdue
 */
export function isOverdue(dateString: string | null): boolean {
    if (!dateString) return false;
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
}

/**
 * Check if date is today
 */
export function isToday(dateString: string | null): boolean {
    if (!dateString) return false;
    const date = new Date(dateString);
    const today = new Date();
    return date.toDateString() === today.toDateString();
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength - 3) + '...';
}

/**
 * Capitalize first letter
 */
export function capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Create debounced function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return (...args: Parameters<T>) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), wait);
    };
}

/**
 * Keyboard shortcut helper
 */
export function isShortcut(
    event: KeyboardEvent,
    key: string,
    modifiers: { ctrl?: boolean; shift?: boolean; alt?: boolean } = {}
): boolean {
    const { ctrl = false, shift = false, alt = false } = modifiers;
    return (
        event.key.toLowerCase() === key.toLowerCase() &&
        event.ctrlKey === ctrl &&
        event.shiftKey === shift &&
        event.altKey === alt
    );
}

/**
 * Check if a task is blocked by its dependencies
 */
export function isTaskBlocked(task: Task, allTasks: Task[]): boolean {
    if (!task.dependencies || task.dependencies.length === 0) return false;

    return task.dependencies.some(depId => {
        const depTask = allTasks.find(t => t.id === depId);
        return depTask && depTask.status !== 'done';
    });
}

/**
 * Get detailed project progress based on subtasks
 */
export function getDetailedProjectProgress(projectTasks: Task[]): {
    progress: number;
    totalSubtasks: number;
    completedSubtasks: number;
    blockedCount: number;
} {
    let totalSubtasks = 0;
    let completedSubtasks = 0;
    let blockedCount = 0;

    projectTasks.forEach(task => {
        if (task.subtasks.length === 0) {
            totalSubtasks += 1;
            if (task.status === 'done') completedSubtasks += 1;
        } else {
            totalSubtasks += task.subtasks.length;
            completedSubtasks += task.subtasks.filter(s => s.isCompleted).length;
        }

        if (isTaskBlocked(task, projectTasks) && task.status !== 'done') {
            blockedCount += 1;
        }
    });

    const progress = totalSubtasks > 0
        ? Math.round((completedSubtasks / totalSubtasks) * 100)
        : 0;

    return { progress, totalSubtasks, completedSubtasks, blockedCount };
}

/**
 * Get dependency chain for a task
 */
export function getDependencyChain(task: Task, allTasks: Task[]): Task[] {
    const chain: Task[] = [];
    const visit = (t: Task) => {
        if (!t.dependencies) return;
        t.dependencies.forEach(depId => {
            const dep = allTasks.find(at => at.id === depId);
            if (dep && !chain.find(c => c.id === dep.id)) {
                chain.push(dep);
                visit(dep);
            }
        });
    };
    visit(task);
    return chain;
}

/**
 * Calculate project health status
 */
export function calculateProjectHealth(projectTasks: Task[]): ProjectHealth {
    if (projectTasks.length === 0) return 'on_track';

    const hasBlockedTask = projectTasks.some(task =>
        task.status !== 'done' && isTaskBlocked(task, projectTasks)
    );
    if (hasBlockedTask) return 'blocked';

    const hasOverdueTask = projectTasks.some(task =>
        task.status !== 'done' && isOverdue(task.dueDate)
    );

    // Check for activity in the last 7 days
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const hasRecentActivity = projectTasks.some(task =>
        new Date(task.updatedAt) > sevenDaysAgo
    );

    if (hasOverdueTask || !hasRecentActivity) return 'at_risk';

    return 'on_track';
}

/**
 * Suggest the next best action for a project
 */
export function suggestNextAction(projectTasks: Task[]): Task | null {
    const availableTasks = projectTasks.filter(task =>
        task.status !== 'done' && !isTaskBlocked(task, projectTasks)
    );

    if (availableTasks.length === 0) return null;

    // Sort by priority (Urgent > High > Medium > Low)
    const priorityMap: Record<string, number> = {
        urgent: 4,
        high: 3,
        medium: 2,
        low: 1
    };

    // Sort by priority, then by impact
    const sortedTasks = [...availableTasks].sort((a, b) => {
        const priorityDiff = (priorityMap[b.priority] || 0) - (priorityMap[a.priority] || 0);
        if (priorityDiff !== 0) return priorityDiff;

        const impactMap: Record<string, number> = { high: 3, medium: 2, low: 1 };
        const impactDiff = (impactMap[b.impact || 'medium'] || 0) - (impactMap[a.impact || 'medium'] || 0);
        return impactDiff;
    });

    return sortedTasks[0];
}

interface DecisionCriteria {
    energyLevel: 'high' | 'medium' | 'low';
    timeAvailable: number; // in minutes
}

/**
 * Find optimal tasks based on context
 */
export function findOptimalTasks(tasks: Task[], criteria: DecisionCriteria): Task[] {
    const { energyLevel, timeAvailable } = criteria;

    // Filter available tasks
    let candidates = tasks.filter(task =>
        task.status !== 'done' &&
        !isTaskBlocked(task, tasks) &&
        (!task.timeEstimate || task.timeEstimate <= timeAvailable)
    );

    // Scoring Logic
    const scoredCandidates = candidates.map(task => {
        let score = 0;

        // 1. Priority Score
        const priorityScore = { urgent: 10, high: 7, medium: 4, low: 1 };
        score += priorityScore[task.priority];

        // 2. Impact Score
        const impactScore = { high: 5, medium: 3, low: 1 };
        score += impactScore[task.impact || 'medium'];

        // 3. Energy Match
        // If High Energy: Boost High Impact/Urgent checks (already handled by base scores mostly), 
        // but also verify we don't punish hard tasks.
        // If Low Energy: HEAVILY boost Low Energy tasks, Punish High Energy tasks.
        // But also verify we don't punish hard tasks.
        // If Low Energy: HEAVILY boost Low Energy tasks, Punish High Energy tasks.
        const taskEnergy = task.energyRequired || 'medium';

        if (energyLevel === 'low') {
            if (taskEnergy === 'low') score += 15; // Huge boost for low energy tasks
            if (taskEnergy === 'medium') score += 5;
            if (taskEnergy === 'high') score -= 10; // Avoid high energy tasks
        } else if (energyLevel === 'medium') {
            if (taskEnergy === 'medium') score += 5;
            if (taskEnergy === 'low') score += 2;
        } else {
            // High Energy - tackling hard stuff is good
            if (taskEnergy === 'high') score += 5;
        }

        // 4. Time Efficiency
        // If time is tight (< 30m), boost short tasks
        if (timeAvailable <= 30 && (task.timeEstimate || 60) <= 15) {
            score += 5;
        }

        // 5. Overdue Penalty/Boost
        if (task.dueDate && isOverdue(task.dueDate)) {
            score += 8; // Urgent to fix
        }

        return { task, score };
    });

    // Sort by score
    scoredCandidates.sort((a, b) => b.score - a.score);

    // Return top 3
    return scoredCandidates.slice(0, 3).map(c => c.task);
}

// ============================================
// Gamification & Stats Helpers
// ============================================

/**
 * Calculate current productivity streak (consecutive days with at least one completed task)
 */
export function calculateStreak(tasks: Task[]): number {
    const completedTasks = tasks
        .filter(t => t.status === 'done' && t.completedAt)
        .sort((a, b) => new Date(b.completedAt!).getTime() - new Date(a.completedAt!).getTime());

    if (completedTasks.length === 0) return 0;

    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check if we completed something today
    const lastTaskDate = new Date(completedTasks[0].completedAt!);
    lastTaskDate.setHours(0, 0, 0, 0);

    // Check if we completed something today

    // If last task was before yesterday, streak is broken (unless we just started today)
    if (lastTaskDate.getTime() < today.getTime() - 86400000) {
        return 0;
    }

    // Iterate backwards checking for continuity
    const datesWithTasks = new Set(completedTasks.map(t => {
        const d = new Date(t.completedAt!);
        return d.toDateString();
    }));

    let checkDate = new Date(today);
    // If no task today, check if yesterday has task. If not, streak 0.
    if (!datesWithTasks.has(checkDate.toDateString())) {
        checkDate.setDate(checkDate.getDate() - 1);
        if (!datesWithTasks.has(checkDate.toDateString())) {
            return 0;
        }
    }

    while (datesWithTasks.has(checkDate.toDateString())) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
    }

    return streak;
}

/**
 * Calculate Current Mental Load
 * Sum of energy levels of 'in_progress' active tasks
 */
export function calculateMentalLoad(tasks: Task[]): { percentage: number; level: string } {
    const activeTasks = tasks.filter(t =>
        (t.status === 'in_progress' || (t.status === 'todo' && t.dueDate && isToday(t.dueDate))) &&
        !t.isArchived
    );

    if (activeTasks.length === 0) return { percentage: 0, level: 'Zen' };

    let loadScore = 0;
    const weights: Record<string, number> = { high: 3, medium: 2, low: 1 };

    activeTasks.forEach(t => {
        loadScore += weights[t.energyRequired || 'medium'] || 2;
    });

    // Normalize: Assume max daily capacity is roughly ~15 points 
    const MAX_CAPACITY = 15;
    const percentage = Math.min(100, Math.round((loadScore / MAX_CAPACITY) * 100));

    let level = 'Zen';
    if (percentage > 80) level = 'Overload';
    else if (percentage > 50) level = 'Heavy';
    else if (percentage > 20) level = 'Moderate';

    return { percentage, level };
}

/**
 * Calculate Time Remaining Today % (Active Day 8am-10pm = 14h)
 */
export function getTimeRemainingToday(): { percentPassed: number; hoursLeft: number } {
    const now = new Date();
    const startOfDay = new Date();
    startOfDay.setHours(8, 0, 0, 0); // 8 AM start
    const endOfDay = new Date(); // 10 PM end
    endOfDay.setHours(22, 0, 0, 0);

    const totalMinutes = (endOfDay.getTime() - startOfDay.getTime()) / 1000 / 60; // 14 * 60 = 840
    let minutesPassed = (now.getTime() - startOfDay.getTime()) / 1000 / 60;

    if (minutesPassed < 0) minutesPassed = 0; // It's early morning
    if (minutesPassed > totalMinutes) minutesPassed = totalMinutes; // It's late night

    const percentPassed = Math.round((minutesPassed / totalMinutes) * 100);
    const hoursLeft = Math.max(0, Math.round((totalMinutes - minutesPassed) / 60 * 10) / 10);

    return { percentPassed, hoursLeft };
}

/**
 * Check if a review is due
 */
export const checkReviewDue = (lastWeekly?: string, lastMonthly?: string, lastQuarterly?: string): 'weekly' | 'monthly' | 'quarterly' | null => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday
    const date = now.getDate();
    const month = now.getMonth(); // 0 = Jan

    // Quarterly: 1st-7th day of Jan, Apr, Jul, Oct
    if ([0, 3, 6, 9].includes(month) && date <= 7) {
        if (!lastQuarterly || new Date(lastQuarterly).getMonth() !== month) {
            return 'quarterly';
        }
    }

    // Monthly: 1st-3rd day of month
    if (date <= 3) {
        if (!lastMonthly || new Date(lastMonthly).getMonth() !== month) {
            return 'monthly';
        }
    }

    // Weekly: Sunday (0) or Monday (1)
    if (day === 0 || day === 1) {
        // Check if we already did a review this week
        if (!lastWeekly) return 'weekly';

        const last = new Date(lastWeekly);
        const diffTime = Math.abs(now.getTime() - last.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 5) return 'weekly';
    }

    return null;
};
