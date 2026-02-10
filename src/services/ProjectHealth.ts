import type { Project } from '../types';

interface Task {
    id: string;
    status: string;
    dueDate?: Date;
    dependencies?: string[];
    priority?: string;
}

interface ProjectHealthMetrics {
    health: 'on_track' | 'at_risk' | 'blocked';
    score: number; // 0-100
    factors: {
        overdueTasksCount: number;
        blockedDependenciesCount: number;
        daysSinceActivity: number;
        completionRate: number;
    };
    recommendations: string[];
}

export class ProjectHealthCalculator {
    /**
     * Calculate comprehensive project health
     */
    static calculateHealth(
        project: Project,
        tasks: Task[]
    ): ProjectHealthMetrics {
        const factors = {
            overdueTasksCount: this.countOverdueTasks(tasks),
            blockedDependenciesCount: this.countBlockedDependencies(tasks),
            daysSinceActivity: this.getDaysSinceActivity(project.lastActivity),
            completionRate: this.calculateCompletionRate(tasks),
        };

        const score = this.calculateHealthScore(factors);
        const health = this.determineHealthStatus(score, factors);
        const recommendations = this.generateRecommendations(factors, project);

        return { health, score, factors, recommendations };
    }

    private static countOverdueTasks(tasks: Task[]): number {
        const now = new Date();
        return tasks.filter(
            (task) => task.dueDate && new Date(task.dueDate) < now && task.status !== 'completed'
        ).length;
    }

    private static countBlockedDependencies(tasks: Task[]): number {
        const blockedTasks = tasks.filter(
            (task) => task.dependencies && task.dependencies.length > 0
        );

        return blockedTasks.filter((task) => {
            const unmetDeps = task.dependencies!.filter(
                (depId) => !tasks.find((t) => t.id === depId && t.status === 'completed')
            );
            return unmetDeps.length > 0;
        }).length;
    }

    private static getDaysSinceActivity(lastActivity?: string): number {
        if (!lastActivity) return 0;
        return Math.floor(
            (new Date().getTime() - new Date(lastActivity).getTime()) / (1000 * 60 * 60 * 24)
        );
    }

    private static calculateCompletionRate(tasks: Task[]): number {
        if (tasks.length === 0) return 0;
        const completedCount = tasks.filter((t) => t.status === 'completed').length;
        return Math.round((completedCount / tasks.length) * 100);
    }

    private static calculateHealthScore(factors: ProjectHealthMetrics['factors']): number {
        let score = 100;

        // Penalize for overdue tasks (-10 per task, max -40)
        score -= Math.min(factors.overdueTasksCount * 10, 40);

        // Penalize for blocked dependencies (-15 per blocked task, max -30)
        score -= Math.min(factors.blockedDependenciesCount * 15, 30);

        // Penalize for inactivity
        if (factors.daysSinceActivity > 7) score -= 15;
        if (factors.daysSinceActivity > 14) score -= 20;
        if (factors.daysSinceActivity > 30) score -= 25;

        // Bonus for high completion rate
        if (factors.completionRate >= 75) score += 10;
        else if (factors.completionRate < 25) score -= 10;

        return Math.max(0, Math.min(100, score));
    }

    private static determineHealthStatus(
        score: number,
        factors: ProjectHealthMetrics['factors']
    ): 'on_track' | 'at_risk' | 'blocked' {
        // Blocked if multiple critical issues
        if (
            factors.blockedDependenciesCount >= 3 ||
            factors.daysSinceActivity > 30 ||
            (factors.overdueTasksCount >= 5 && factors.completionRate < 25)
        ) {
            return 'blocked';
        }

        // At risk if score below 60 or specific issues
        if (
            score < 60 ||
            factors.daysSinceActivity > 14 ||
            factors.overdueTasksCount >= 3 ||
            factors.blockedDependenciesCount >= 2
        ) {
            return 'at_risk';
        }

        return 'on_track';
    }

    private static generateRecommendations(
        factors: ProjectHealthMetrics['factors'],
        project: Project
    ): string[] {
        const recommendations: string[] = [];

        if (factors.overdueTasksCount > 0) {
            recommendations.push(
                `${factors.overdueTasksCount} overdue task(s). Reschedule or reprioritize immediately.`
            );
        }

        if (factors.blockedDependenciesCount > 0) {
            recommendations.push(
                `${factors.blockedDependenciesCount} blocked task(s). Resolve dependencies or find workarounds.`
            );
        }

        if (factors.daysSinceActivity > 14) {
            recommendations.push(
                `No activity for ${factors.daysSinceActivity} days. Schedule a kickoff meeting or archive.`
            );
        }

        if (factors.completionRate < 25 && factors.daysSinceActivity < 7) {
            recommendations.push(
                'Low progress despite recent activity. Break tasks into smaller chunks.'
            );
        }

        if (project.blockers && project.blockers.length > 0) {
            recommendations.push(
                `${project.blockers.length} blocker(s) documented. Assign owners to resolve.`
            );
        }

        if (recommendations.length === 0) {
            recommendations.push('Project is healthy. Maintain momentum.');
        }

        return recommendations;
    }

    /**
     * Auto-update project health (call after task changes)
     */
    static autoUpdateHealth(project: Project, tasks: Task[]): Project {
        const metrics = this.calculateHealth(project, tasks);

        return {
            ...project,
            health: metrics.health,
            lastActivity: new Date().toISOString(),
        };
    }
}
