import type { HabitCompletion, Goal } from '../types';

interface HabitROIData {
    habitId: string;
    completionRate: number; // 0-100
    impactScore: number; // Calculated based on goal progress correlation
    roi: number; // Impact / Time investment
    shouldPause: boolean;
    recommendation: string;
}

export class HabitROICalculator {
    /**
     * Calculate ROI for a habit based on completion history and goal progress
     */
    static calculateROI(
        habitId: string,
        completions: HabitCompletion[],
        linkedGoal?: Goal,
        timeInvestment: number = 10 // Average minutes per completion
    ): HabitROIData {
        const last30Days = this.getLast30Days(completions);
        const completionRate = (last30Days.length / 30) * 100;

        // Calculate impact score
        let impactScore = 0;

        if (linkedGoal) {
            // If habit has linked goal, use goal progress as proxy for impact
            impactScore = linkedGoal.progress / 10; // Normalize to 0-10 scale
        } else {
            // Default impact based on completion consistency
            impactScore = completionRate / 20; // 100% completion = 5 impact score
        }

        // ROI = impact / time
        const roi = impactScore / (timeInvestment / 60); // Convert to hours

        // Determine if should pause
        const shouldPause = completionRate < 30 || roi < 1;

        // Generate recommendation
        let recommendation = '';
        if (completionRate < 30) {
            recommendation = 'Low completion rate. Consider reducing friction or removing this habit.';
        } else if (roi < 1) {
            recommendation = 'Low ROI. Reassess if this habit supports your goals.';
        } else if (roi > 5) {
            recommendation = 'High ROI! Double down on this habit.';
        } else {
            recommendation = 'Moderate ROI. Continue tracking.';
        }

        return {
            habitId,
            completionRate: Math.round(completionRate),
            impactScore: Math.round(impactScore * 10) / 10,
            roi: Math.round(roi * 10) / 10,
            shouldPause,
            recommendation,
        };
    }

    /**
     * Get completions from last 30 days
     */
    private static getLast30Days(completions: HabitCompletion[]): HabitCompletion[] {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        return completions.filter(
            (c) => new Date(c.completedAt) >= thirtyDaysAgo
        );
    }

    /**
     * Calculate current streak
     */
    static calculateStreak(completions: HabitCompletion[]): number {
        if (completions.length === 0) return 0;

        const sorted = [...completions].sort(
            (a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
        );

        let streak = 0;
        let checkDate = new Date();
        checkDate.setHours(0, 0, 0, 0);

        for (const completion of sorted) {
            const completionDate = new Date(completion.completedAt);
            completionDate.setHours(0, 0, 0, 0);

            const daysDiff = Math.floor(
                (checkDate.getTime() - completionDate.getTime()) / (1000 * 60 * 60 * 24)
            );

            if (daysDiff === 0 || daysDiff === 1) {
                streak++;
                checkDate = completionDate;
            } else {
                break;
            }
        }

        return streak;
    }

    /**
     * Suggest habits to pause based on low ROI
     */
    static suggestPauses(habitROIs: HabitROIData[]): HabitROIData[] {
        return habitROIs
            .filter((h) => h.shouldPause)
            .sort((a, b) => a.roi - b.roi); // Lowest ROI first
    }

    /**
     * Suggest habits to double down on based on high ROI
     */
    static suggestDoubleDown(habitROIs: HabitROIData[]): HabitROIData[] {
        return habitROIs
            .filter((h) => h.roi >= 5)
            .sort((a, b) => b.roi - a.roi); // Highest ROI first
    }
}
