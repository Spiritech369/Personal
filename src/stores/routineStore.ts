import { create } from 'zustand';
import { Routine, MOCK_ROUTINES } from '../types/routine';
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../utils/storage';

interface RoutineState {
    routines: Routine[];
    addRoutine: (routine: Routine) => void;
    updateRoutine: (id: string, updates: Partial<Routine>) => void;
    deleteRoutine: (id: string) => void;
    toggleStep: (routineId: string, stepId: string) => void;
    resetRoutineSteps: (routineId: string) => void;
    completeRoutine: (id: string) => void;
}

const isToday = (dateStr: string | null): boolean => {
    if (!dateStr) return false;
    const date = new Date(dateStr);
    const today = new Date();
    return date.toDateString() === today.toDateString();
};

export const useRoutineStore = create<RoutineState>((set) => ({
    routines: getStorageItem(STORAGE_KEYS.ROUTINES, MOCK_ROUTINES),

    addRoutine: (routine) => set((state) => {
        const newRoutines = [...state.routines, routine];
        setStorageItem(STORAGE_KEYS.ROUTINES, newRoutines);
        return { routines: newRoutines };
    }),

    updateRoutine: (id, updates) => set((state) => {
        const newRoutines = state.routines.map((r) =>
            r.id === id ? { ...r, ...updates } : r
        );
        setStorageItem(STORAGE_KEYS.ROUTINES, newRoutines);
        return { routines: newRoutines };
    }),

    deleteRoutine: (id) => set((state) => {
        const newRoutines = state.routines.filter((r) => r.id !== id);
        setStorageItem(STORAGE_KEYS.ROUTINES, newRoutines);
        return { routines: newRoutines };
    }),

    toggleStep: (routineId, stepId) => set((state) => {
        const newRoutines = state.routines.map((r) => {
            if (r.id !== routineId) return r;
            const newSteps = r.steps.map((s) =>
                s.id === stepId ? { ...s, isCompleted: !s.isCompleted } : s
            );
            return { ...r, steps: newSteps };
        });
        setStorageItem(STORAGE_KEYS.ROUTINES, newRoutines);
        return { routines: newRoutines };
    }),

    resetRoutineSteps: (routineId) => set((state) => {
        const newRoutines = state.routines.map((r) => {
            if (r.id !== routineId) return r;
            const newSteps = r.steps.map((s) => ({ ...s, isCompleted: false }));
            return { ...r, steps: newSteps };
        });
        setStorageItem(STORAGE_KEYS.ROUTINES, newRoutines);
        return { routines: newRoutines };
    }),

    completeRoutine: (id) => set((state) => {
        const newRoutines = state.routines.map((r) => {
            if (r.id !== id) return r;

            // Logic for streaks
            const todayStr = new Date().toISOString();

            // If already completed today, just update timestamp, don't increment streak again
            if (isToday(r.lastCompleted)) {
                return { ...r, lastCompleted: todayStr };
            }

            // Check if streak continues
            const lastDate = r.lastCompleted ? new Date(r.lastCompleted) : null;
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            let newStreak = r.streak;

            // If first time or last completion was yesterday
            if (!lastDate || lastDate.toDateString() === yesterday.toDateString()) {
                newStreak += 1;
            } else {
                // Streak broken
                newStreak = 1;
            }

            return {
                ...r,
                lastCompleted: todayStr,
                streak: newStreak,
                bestStreak: Math.max(newStreak, r.bestStreak)
            };
        });

        // Also reset steps for next time? 
        // No, keep them checked until next day or manual reset? 
        // Usually wizards reset after completion. Let's do that in the component or explicit action.

        setStorageItem(STORAGE_KEYS.ROUTINES, newRoutines);
        return { routines: newRoutines };
    }),
}));
