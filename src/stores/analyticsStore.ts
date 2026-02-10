// ============================================
// LifeHub - Analytics Store (Zustand)
// ============================================

import { create } from 'zustand';
import type { DailyStats, CompletionRecord, ID, TaskPriority, EnergyLevel, LifeArea } from '../types';
import { getStorageItem, setStorageItem } from '../utils/storage';

const STORAGE_KEY = 'analytics';

interface AnalyticsState {
    dailyStats: DailyStats[];
    completionHistory: CompletionRecord[];
}

interface AnalyticsActions {
    recordCompletion: (taskId: ID, projectId: ID, priority: TaskPriority, energy?: string, lifeArea?: string) => void;
    getStatsForRange: (startDate: string, endDate: string) => DailyStats[];
    getCompletedCountByDate: (date: string) => number;
    getTotalCompletedThisWeek: () => number;
    getProductivityStreak: () => number;
    getEnergyDistribution: () => Record<EnergyLevel, number>;
    getLifeAreaDistribution: () => Record<LifeArea, number>;
    loadAnalytics: () => void;
}

type AnalyticsStore = AnalyticsState & AnalyticsActions;

function getDateKey(date: Date = new Date()): string {
    return date.toISOString().split('T')[0];
}

function getWeekDates(): string[] {
    const dates: string[] = [];
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        dates.push(getDateKey(date));
    }
    return dates;
}

export const useAnalyticsStore = create<AnalyticsStore>((set, get) => ({
    dailyStats: [],
    completionHistory: [],

    loadAnalytics: () => {
        const stored = getStorageItem<AnalyticsState>(STORAGE_KEY, {
            dailyStats: [],
            completionHistory: [],
        });
        set(stored);
    },

    recordCompletion: (taskId: ID, projectId: ID, priority: TaskPriority, energy?: string, lifeArea?: string) => {
        const timestamp = new Date().toISOString();
        const dateKey = getDateKey();

        const newRecord: CompletionRecord = {
            taskId,
            projectId,
            completedAt: timestamp,
            priority,
            energy: energy as EnergyLevel,
            lifeArea: lifeArea as LifeArea,
        };

        set((state) => {
            // Update completion history
            const updatedHistory = [...state.completionHistory, newRecord];

            // Update or create daily stats
            const existingStatIndex = state.dailyStats.findIndex(s => s.date === dateKey);
            let updatedStats: DailyStats[];

            if (existingStatIndex >= 0) {
                updatedStats = state.dailyStats.map((stat, i) =>
                    i === existingStatIndex
                        ? { ...stat, completed: stat.completed + 1 }
                        : stat
                );
            } else {
                updatedStats = [
                    ...state.dailyStats,
                    { date: dateKey, completed: 1, created: 0, timeSpent: 0 },
                ];
            }

            const newState = {
                dailyStats: updatedStats,
                completionHistory: updatedHistory,
            };

            setStorageItem(STORAGE_KEY, newState);
            return newState;
        });
    },

    getStatsForRange: (startDate: string, endDate: string) => {
        const { dailyStats } = get();
        return dailyStats.filter(
            stat => stat.date >= startDate && stat.date <= endDate
        );
    },

    getCompletedCountByDate: (date: string) => {
        const { dailyStats } = get();
        const stat = dailyStats.find(s => s.date === date);
        return stat?.completed || 0;
    },

    getTotalCompletedThisWeek: () => {
        const { dailyStats } = get();
        const weekDates = getWeekDates();
        return weekDates.reduce((total, date) => {
            const stat = dailyStats.find(s => s.date === date);
            return total + (stat?.completed || 0);
        }, 0);
    },

    getProductivityStreak: () => {
        const { dailyStats } = get();
        const sortedStats = [...dailyStats].sort((a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        let streak = 0;
        const today = new Date();

        for (let i = 0; i < 365; i++) {
            const checkDate = new Date(today);
            checkDate.setDate(today.getDate() - i);
            const dateKey = getDateKey(checkDate);

            const stat = sortedStats.find(s => s.date === dateKey);
            if (stat && stat.completed > 0) {
                streak++;
            } else if (i > 0) { // Allow today to have 0 if streak continues from yesterday
                break;
            }
        }

        return streak;
    },

    getEnergyDistribution: () => {
        const { completionHistory } = get();
        const distribution: Record<EnergyLevel, number> = {
            high: 0,
            medium: 0,
            low: 0,
        };

        completionHistory.forEach(record => {
            if (record.energy) {
                distribution[record.energy] = (distribution[record.energy] || 0) + 1;
            }
        });

        return distribution;
    },

    getLifeAreaDistribution: () => {
        const { completionHistory } = get();
        const distribution: Record<LifeArea, number> = {
            money: 0,
            health: 0,
            growth: 0,
            relationships: 0,
            order: 0,
        };

        completionHistory.forEach(record => {
            if (record.lifeArea) {
                distribution[record.lifeArea] = (distribution[record.lifeArea] || 0) + 1;
            }
        });

        return distribution;
    },
}));
