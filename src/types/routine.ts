export type RoutineFrequency = 'daily' | 'weekly' | 'custom';

export interface RoutineStep {
    id: string;
    title: string;
    duration: number; // in minutes
    isCompleted: boolean;
}

export interface Routine {
    id: string;
    title: string;
    description?: string;
    steps: RoutineStep[];
    frequency: RoutineFrequency;
    streak: number;
    bestStreak: number;
    lastCompleted: string | null; // ISO Date string
    color?: string;
    icon?: string;
}

export const MOCK_ROUTINES: Routine[] = [
    {
        id: 'morning-routine',
        title: '🌅 Morning Ritual',
        description: 'Start the day with energy and focus',
        frequency: 'daily',
        streak: 3,
        bestStreak: 12,
        lastCompleted: new Date(Date.now() - 86400000).toISOString(),
        steps: [
            { id: 'step-1', title: 'Drink Water (500ml)', duration: 1, isCompleted: false },
            { id: 'step-2', title: 'Meditation / Breathing', duration: 10, isCompleted: false },
            { id: 'step-3', title: 'Review DayFocus', duration: 5, isCompleted: false },
            { id: 'step-4', title: 'Quick Exercise / Stretch', duration: 15, isCompleted: false },
        ]
    },
    {
        id: 'night-routine',
        title: '🌙 Night Wind-down',
        description: 'Disconnect and prepare for sleep',
        frequency: 'daily',
        streak: 0,
        bestStreak: 5,
        lastCompleted: new Date(Date.now() - 172800000).toISOString(),
        steps: [
            { id: 'step-1', title: 'No Screens', duration: 1, isCompleted: false },
            { id: 'step-2', title: 'Journaling', duration: 10, isCompleted: false },
            { id: 'step-3', title: 'Prepare Tomorrow\'s Outfit', duration: 5, isCompleted: false },
            { id: 'step-4', title: 'Read Fiction', duration: 20, isCompleted: false },
        ]
    }
];
