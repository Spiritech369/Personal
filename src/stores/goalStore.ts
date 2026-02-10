// ============================================
// LifeHub - Goal Store (Zustand)
// ============================================

import { create } from 'zustand';
import type {
    Goal,
    GoalFormData,
    ID,
} from '../types';
import { generateId, getCurrentTimestamp } from '../utils/helpers';
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../utils/storage';

interface GoalState {
    goals: Goal[];
    selectedGoalId: ID | null;
    isLoading: boolean;
}

interface GoalActions {
    addGoal: (data: GoalFormData) => Goal;
    updateGoal: (id: ID, data: Partial<GoalFormData>) => void;
    deleteGoal: (id: ID) => void;
    selectGoal: (id: ID | null) => void;
    loadGoals: () => void;
}

type GoalStore = GoalState & GoalActions;

const initialState: GoalState = {
    goals: [],
    selectedGoalId: null,
    isLoading: false,
};

// Sample goals for first load
const sampleGoals: Goal[] = [
    {
        id: 'goal-1',
        parentId: null,
        title: 'Run a Marathon',
        description: 'Complete a full marathon by end of year',
        lifeArea: 'health',
        deadline: new Date(new Date().getFullYear(), 11, 31).toISOString(),
        timeline: 'year',
        status: 'in_progress',
        progress: 45,
        linkedProjectIds: [],
        linkedTaskIds: [],
        vision: 'Build extreme physical endurance and mental toughness',
        icon: 'Run',
        createdAt: getCurrentTimestamp(),
        updatedAt: getCurrentTimestamp(),
        completedAt: null,
    },
    {
        id: 'goal-2',
        parentId: null,
        title: 'Save $10,000',
        description: 'Build emergency fund and investment capital',
        lifeArea: 'money',
        deadline: new Date(new Date().getFullYear(), 11, 31).toISOString(),
        timeline: 'year',
        status: 'not_started',
        progress: 10,
        linkedProjectIds: [],
        linkedTaskIds: [],
        vision: 'Financial security and freedom to take risks',
        icon: 'DollarSign',
        createdAt: getCurrentTimestamp(),
        updatedAt: getCurrentTimestamp(),
        completedAt: null,
    },
    {
        id: 'goal-3',
        parentId: null,
        title: 'Master a New Language',
        description: 'Reach B2 level in Spanish',
        lifeArea: 'growth',
        deadline: new Date(new Date().getFullYear() + 1, 5, 30).toISOString(),
        timeline: 'q2', // Next year Q2
        status: 'in_progress',
        progress: 30,
        linkedProjectIds: [],
        linkedTaskIds: [],
        vision: 'Connect with more people and expand cultural understanding',
        icon: 'Languages',
        createdAt: getCurrentTimestamp(),
        updatedAt: getCurrentTimestamp(),
        completedAt: null,
    },
];

export const useGoalStore = create<GoalStore>((set) => ({
    ...initialState,
    goals: getStorageItem<Goal[]>(STORAGE_KEYS.GOALS, []),

    loadGoals: () => {
        const stored = getStorageItem<Goal[]>(STORAGE_KEYS.GOALS, []);
        if (stored.length === 0) {
            set({ goals: sampleGoals });
            setStorageItem(STORAGE_KEYS.GOALS, sampleGoals);
        } else {
            set({ goals: stored });
        }
    },

    addGoal: (data: GoalFormData) => {
        const timestamp = getCurrentTimestamp();

        const newGoal: Goal = {
            id: generateId(),
            ...data,
            linkedProjectIds: [],
            linkedTaskIds: [],
            createdAt: timestamp,
            updatedAt: timestamp,
            completedAt: null,
        };

        set((state) => {
            const updated = [...state.goals, newGoal];
            setStorageItem(STORAGE_KEYS.GOALS, updated);
            return { goals: updated };
        });

        return newGoal;
    },

    updateGoal: (id: ID, data: Partial<GoalFormData>) => {
        set((state) => {
            const updated = state.goals.map((goal) =>
                goal.id === id
                    ? { ...goal, ...data, updatedAt: getCurrentTimestamp() }
                    : goal
            );
            setStorageItem(STORAGE_KEYS.GOALS, updated);
            return { goals: updated };
        });
    },

    deleteGoal: (id: ID) => {
        set((state) => {
            const updated = state.goals.filter((goal) => goal.id !== id);
            setStorageItem(STORAGE_KEYS.GOALS, updated);
            return {
                goals: updated,
                selectedGoalId: state.selectedGoalId === id ? null : state.selectedGoalId,
            };
        });
    },

    selectGoal: (id: ID | null) => {
        set({ selectedGoalId: id });
    },
}));
