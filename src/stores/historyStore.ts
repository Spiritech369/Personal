import { create } from 'zustand';
import type { HistoryEntry, HistoryAction, HistoryTarget, HistoryChange, ID } from '../types';
import { generateId, getCurrentTimestamp } from '../utils/helpers';
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../utils/storage';

interface HistoryState {
    entries: HistoryEntry[];
    isLoading: boolean;
}

interface HistoryActions {
    logChange: (
        targetType: HistoryTarget,
        targetId: ID,
        targetName: string,
        action: HistoryAction,
        changes?: HistoryChange[]
    ) => void;
    getHistory: (targetId?: ID, targetType?: HistoryTarget) => HistoryEntry[];
    clearHistory: () => void;
    loadHistory: () => void;
}

type HistoryStore = HistoryState & HistoryActions;



export const useHistoryStore = create<HistoryStore>((set, get) => ({
    entries: [],
    isLoading: false,

    loadHistory: () => {
        const stored = getStorageItem<HistoryEntry[]>(STORAGE_KEYS.HISTORY, []);
        set({ entries: stored });
    },

    logChange: (targetType, targetId, targetName, action, changes = []) => {
        const newEntry: HistoryEntry = {
            id: generateId(),
            targetType,
            targetId,
            targetName,
            action,
            changes,
            timestamp: getCurrentTimestamp(),
            userId: 'user',
        };

        set((state) => {
            const updatedEntries = [newEntry, ...state.entries];
            // Limit history size to prevent bloat (e.g., last 1000 actions)
            if (updatedEntries.length > 1000) {
                updatedEntries.length = 1000;
            }
            setStorageItem(STORAGE_KEYS.HISTORY, updatedEntries);
            return { entries: updatedEntries };
        });
    },

    getHistory: (targetId, targetType) => {
        const { entries } = get();
        if (!targetId && !targetType) return entries;

        return entries.filter(entry => {
            const matchId = targetId ? entry.targetId === targetId : true;
            const matchType = targetType ? entry.targetType === targetType : true;
            return matchId && matchType;
        });
    },

    clearHistory: () => {
        set({ entries: [] });
        setStorageItem(STORAGE_KEYS.HISTORY, []);
    }
}));
