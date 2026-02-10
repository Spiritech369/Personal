
import { create } from 'zustand';
import type { JournalEntry, JournalFormData, ID, JournalEntryType } from '../types';
import { generateId, getCurrentTimestamp } from '../utils/helpers';
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../utils/storage';

interface JournalState {
    entries: JournalEntry[];
    isLoading: boolean;
}

interface JournalActions {
    addEntry: (data: JournalFormData) => JournalEntry;
    updateEntry: (id: ID, data: Partial<JournalFormData>) => void;
    deleteEntry: (id: ID) => void;
    getEntriesByType: (type: JournalEntryType) => JournalEntry[];
    getRecentEntries: (limit?: number) => JournalEntry[];
    loadEntries: () => void;
}

type JournalStore = JournalState & JournalActions;

export const useJournalStore = create<JournalStore>((set, get) => ({
    entries: [],
    isLoading: false,

    loadEntries: () => {
        const stored = getStorageItem<JournalEntry[]>(STORAGE_KEYS.JOURNALS, []);
        set({ entries: stored });
    },

    addEntry: (data: JournalFormData) => {
        const timestamp = getCurrentTimestamp();
        const newEntry: JournalEntry = {
            id: generateId(),
            ...data,
            createdAt: timestamp,
            updatedAt: timestamp,
        };

        set((state) => {
            const updated = [newEntry, ...state.entries];
            setStorageItem(STORAGE_KEYS.JOURNALS, updated);
            return { entries: updated };
        });

        return newEntry;
    },

    updateEntry: (id: ID, data: Partial<JournalFormData>) => {
        set((state) => {
            const updated = state.entries.map((entry) =>
                entry.id === id
                    ? { ...entry, ...data, updatedAt: getCurrentTimestamp() }
                    : entry
            );
            setStorageItem(STORAGE_KEYS.JOURNALS, updated);
            return { entries: updated };
        });
    },

    deleteEntry: (id: ID) => {
        set((state) => {
            const updated = state.entries.filter((entry) => entry.id !== id);
            setStorageItem(STORAGE_KEYS.JOURNALS, updated);
            return { entries: updated };
        });
    },

    getEntriesByType: (type: JournalEntryType) => {
        return get().entries.filter((entry) => entry.type === type);
    },

    getRecentEntries: (limit = 5) => {
        return get().entries
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(0, limit);
    },
}));
