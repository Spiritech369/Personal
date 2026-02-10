import type { Routine } from '../types';

// Initialize core routines optimized for focus and execution
export const coreRoutines: Omit<Routine, 'id' | 'userId' | 'createdAt' | 'updatedAt'>[] = [
    {
        name: 'Morning Control Ritual',
        description: 'Start the day with clarity and intention',
        steps: [
            { title: 'Review calendar and commitments', duration: 2 },
            { title: 'Set top 3 priorities', duration: 3 },
            { title: 'Check energy level and adjust plan', duration: 2 },
            { title: 'Time-block deep work', duration: 3 },
        ],
        totalDuration: 10,
        autoSpawnTasks: false,
        active: true,
    },
    {
        name: 'Deep Work Session',
        description: 'Focused execution on high-leverage work',
        steps: [
            { title: 'Close all distractions (Slack, email, phone)', duration: 2 },
            { title: 'Set timer and work on ONE thing', duration: 90 },
            { title: 'Document progress and blockers', duration: 5 },
            { title: 'Short break (walk, water, stretch)', duration: 15 },
        ],
        totalDuration: 112,
        autoSpawnTasks: false,
        active: true,
    },
    {
        name: 'Admin / Low Energy Block',
        description: 'Handle low-leverage tasks when energy is low',
        steps: [
            { title: 'Process inbox to zero', duration: 15 },
            { title: 'Respond to messages and requests', duration: 20 },
            { title: 'File/organize documents', duration: 10 },
            { title: 'Update project statuses', duration: 10 },
        ],
        totalDuration: 55,
        autoSpawnTasks: false,
        active: true,
    },
    {
        name: 'Night Shutdown',
        description: 'Close the day and prepare for tomorrow',
        steps: [
            { title: 'Review what got done today', duration: 3 },
            { title: 'Brain dump open loops', duration: 5 },
            { title: 'Set top 3 priorities for tomorrow', duration: 3 },
            { title: 'Close all apps and tabs', duration: 2 },
            { title: 'Plan first deep work task', duration: 2 },
        ],
        totalDuration: 15,
        autoSpawnTasks: true,
        active: true,
    },
];

export const initializeCoreRoutines = (userId: string): Routine[] => {
    const now = new Date().toISOString();

    return coreRoutines.map((routine) => ({
        ...routine,
        id: crypto.randomUUID(),
        userId,
        createdAt: now,
        updatedAt: now,
    }));
};
