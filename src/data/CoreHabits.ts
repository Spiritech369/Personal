import type { Habit } from '../types';

// Initialize core high-leverage habits for entrepreneurs
export const coreHabits: Omit<Habit, 'id' | 'userId' | 'createdAt' | 'updatedAt'>[] = [
    {
        name: 'Daily Focus Review',
        minimumVersion: 'Review top 3 priorities (2 min)',
        idealVersion: 'Full morning clarity: priorities + energy check + time blocks (10 min)',
        energyImpact: 'positive',
        lifeArea: 'growth',
        active: true,
    },
    {
        name: 'Minimum Daily Movement',
        minimumVersion: '10 min walk',
        idealVersion: '30 min exercise (strength or cardio)',
        energyImpact: 'positive',
        lifeArea: 'health',
        active: true,
    },
    {
        name: 'Night Shutdown Ritual',
        minimumVersion: 'Close all apps + set 3 priorities for tomorrow (3 min)',
        idealVersion: 'Full shutdown: review day + plan tomorrow + brain dump (15 min)',
        energyImpact: 'positive',
        lifeArea: 'order',
        active: true,
    },
    {
        name: 'Weekly Planning Review',
        minimumVersion: 'Review last week + set 1 priority for next week (10 min)',
        idealVersion: 'Full strategic review: wins/losses + goals + calendar + adjustments (45 min)',
        energyImpact: 'positive',
        lifeArea: 'growth',
        active: true,
    },
];

// Helper to initialize habits for a new user
export const initializeCoreHabits = (userId: string): Habit[] => {
    const now = new Date().toISOString();

    return coreHabits.map((_habit) => ({
        ..._habit,
        id: crypto.randomUUID(),
        userId,
        createdAt: now,
        updatedAt: now,
    }));
};
