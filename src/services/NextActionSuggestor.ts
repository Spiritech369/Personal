import type { Project, Task } from '../types';

interface NextActionSuggestion {
    taskId: string;
    title: string;
    reason: string;
    confidence: number; // 0-100
}

export class NextActionSuggestor {
    /**
     * Suggest the best next action based on multiple factors
     */
    static suggestNextAction(
        _project: Project,
        tasks: Task[],
        currentEnergyLevel: 'low' | 'medium' | 'high' = 'medium'
    ): NextActionSuggestion | null {
        const eligibleTasks = this.getEligibleTasks(tasks);

        if (eligibleTasks.length === 0) return null;

        const scoredTasks = eligibleTasks.map((task) => ({
            task,
            score: this.calculateTaskScore(task, currentEnergyLevel, tasks),
        }));

        // Sort by score descending
        scoredTasks.sort((a, b) => b.score - a.score);

        const bestTask = scoredTasks[0].task;
        const reason = this.explainChoice(bestTask, currentEnergyLevel);

        return {
            taskId: bestTask.id,
            title: bestTask.title,
            reason,
            confidence: Math.min(100, scoredTasks[0].score),
        };
    }

    /**
     * Get tasks that are eligible to work on (not blocked, not completed)
     */
    private static getEligibleTasks(tasks: Task[]): Task[] {
        return tasks.filter((task) => {
            // Must not be completed
            if (task.status === 'done' || task.isArchived) return false;

            // Must not have unmet dependencies
            if (task.dependencies && task.dependencies.length > 0) {
                const hasUnmetDeps = task.dependencies.some(
                    (depId) => !tasks.find((t) => t.id === depId && t.status === 'done')
                );
                if (hasUnmetDeps) return false;
            }

            return true;
        });
    }

    /**
     * Calculate priority score for a task
     */
    private static calculateTaskScore(
        task: Task,
        energyLevel: 'low' | 'medium' | 'high',
        allTasks: Task[]
    ): number {
        let score = 50; // Base score

        // Priority weight (+30 for high, +15 for medium)
        if (task.priority === 'high') score += 30;
        else if (task.priority === 'medium') score += 15;

        // Energy match (+20 if match, -10 if mismatch)
        if (task.energyRequired === energyLevel) {
            score += 20;
        } else if (
            (energyLevel === 'low' && task.energyRequired === 'high') ||
            (energyLevel === 'high' && task.energyRequired === 'low')
        ) {
            score -= 10;
        }

        // Due date urgency (+25 if due within 3 days)
        if (task.dueDate) {
            const daysUntilDue = Math.floor(
                (new Date(task.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
            );
            if (daysUntilDue <= 3 && daysUntilDue >= 0) score += 25;
            else if (daysUntilDue < 0) score += 35; // Overdue gets highest urgency
        }

        // Unblocks other tasks (+15 if other tasks depend on this)
        const dependentTasksCount = allTasks.filter(
            (t) => t.dependencies && t.dependencies.includes(task.id)
        ).length;
        score += dependentTasksCount * 15;

        return score;
    }

    /**
     * Explain why this task was chosen
     */
    private static explainChoice(
        task: Task,
        energyLevel: 'low' | 'medium' | 'high'
    ): string {
        const reasons: string[] = [];

        if (task.priority === 'high') {
            reasons.push('High priority');
        }

        if (task.energyRequired === energyLevel) {
            reasons.push(`Matches your ${energyLevel} energy`);
        }

        if (task.dueDate) {
            const daysUntilDue = Math.floor(
                (new Date(task.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
            );
            if (daysUntilDue < 0) {
                reasons.push('Overdue');
            } else if (daysUntilDue <= 3) {
                reasons.push(`Due in ${daysUntilDue} day(s)`);
            }
        }

        if (reasons.length === 0) {
            return 'Best available task based on current state';
        }

        return reasons.join(' • ');
    }

    /**
     * Get multiple next action suggestions (top N)
     */
    static suggestMultipleActions(
        _project: Project,
        tasks: Task[],
        count: number = 3,
        currentEnergyLevel: 'low' | 'medium' | 'high' = 'medium'
    ): NextActionSuggestion[] {
        const eligibleTasks = this.getEligibleTasks(tasks);

        const scoredTasks = eligibleTasks
            .map((task) => ({
                task,
                score: this.calculateTaskScore(task, currentEnergyLevel, tasks),
            }))
            .sort((a, b) => b.score - a.score)
            .slice(0, count);

        return scoredTasks.map(({ task, score }) => ({
            taskId: task.id,
            title: task.title,
            reason: this.explainChoice(task, currentEnergyLevel),
            confidence: Math.min(100, score),
        }));
    }
}
