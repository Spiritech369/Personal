import type { Goal } from '../types';

export class GoalProgressCalculator {
    /**
     * Calculate goal progress based on linked tasks/projects
     */
    static calculateProgress(
        completedTasksCount: number,
        totalTasksCount: number
    ): number {
        if (totalTasksCount === 0) return 0;
        return Math.round((completedTasksCount / totalTasksCount) * 100);
    }

    /**
     * Detect if goal is stagnated (no activity in X days)
     */
    static isStagnated(goal: Goal, thresholdDays: number = 14): boolean {
        if (!goal.lastActivity) return true;

        const daysSinceActivity = Math.floor(
            (new Date().getTime() - new Date(goal.lastActivity).getTime()) / (1000 * 60 * 60 * 24)
        );

        return daysSinceActivity >= thresholdDays;
    }

    /**
     * Calculate days until deadline
     */
    static daysUntilDeadline(goal: Goal): number | null {
        if (!goal.deadline) return null;

        return Math.floor(
            (new Date(goal.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
        );
    }

    /**
     * Get goal health status
     */
    static getHealthStatus(
        goal: Goal,
        completedTasksCount: number,
        totalTasksCount: number
    ): 'ontrack' | 'atrisk' | 'blocked' {
        const progress = this.calculateProgress(completedTasksCount, totalTasksCount);
        const daysLeft = this.daysUntilDeadline(goal);
        const isStagnant = this.isStagnated(goal);

        // Blocked if stagnated for more than 30 days
        if (this.isStagnated(goal, 30)) return 'blocked';

        // At risk if stagnated or behind schedule
        if (isStagnant) return 'atrisk';

        if (daysLeft !== null && daysLeft > 0) {
            // Calculate expected progress based on time
            const totalDeadlineDays = Math.floor(
                (new Date(goal.deadline!).getTime() - new Date(goal.createdAt).getTime()) / (1000 * 60 * 60 * 24)
            );
            const daysElapsed = totalDeadlineDays - daysLeft;
            const expectedProgress = (daysElapsed / totalDeadlineDays) * 100;

            // At risk if more than 20% behind expected progress
            if (progress < expectedProgress - 20) return 'atrisk';
        }

        return 'ontrack';
    }

    /**
     * Suggest next actions for stagnated goals
     */
    static suggestNextActions(goal: Goal): string[] {
        const suggestions: string[] = [];

        if (this.isStagnated(goal, 30)) {
            suggestions.push('This goal has been inactive for over a month. Consider archiving or redesigning.');
        } else if (this.isStagnated(goal)) {
            suggestions.push('No recent activity. Break down into smaller tasks or projects.');
        }

        const daysLeft = this.daysUntilDeadline(goal);
        if (daysLeft !== null) {
            if (daysLeft < 0) {
                suggestions.push('Deadline has passed. Update timeline or mark as complete/archived.');
            } else if (daysLeft < 7) {
                suggestions.push('Deadline approaching. Focus efforts on this goal.');
            }
        }

        if (goal.progress < 25 && suggestions.length === 0) {
            suggestions.push('Low progress. Create specific projects or tasks to drive this forward.');
        }

        return suggestions;
    }

    /**
     * Calculate parent goal progress from child goals
     */
    static calculateParentProgress(childGoals: Goal[]): number {
        if (childGoals.length === 0) return 0;

        const totalProgress = childGoals.reduce((sum, child) => sum + child.progress, 0);
        return Math.round(totalProgress / childGoals.length);
    }
}
