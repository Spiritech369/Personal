import { create } from 'zustand';
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../utils/storage';

interface NotificationSettings {
    enabled: boolean;
    quietMode: boolean; // Manual override
    quietHoursStart: string; // HH:mm (e.g., "22:00")
    quietHoursEnd: string; // HH:mm (e.g., "08:00")
    contexts: {
        routines: boolean;
        tasks: boolean;
        energy: boolean;
    };
    whatsapp: {
        enabled: boolean;
        apiKey: string;
        phoneNumber: string;
    };
}

interface NotificationState {
    settings: NotificationSettings;
    permission: NotificationPermission;
    setPermission: (permission: NotificationPermission) => void;
    updateSettings: (settings: Partial<NotificationSettings>) => void;
    toggleContext: (context: keyof NotificationSettings['contexts']) => void;
}

const DEFAULT_SETTINGS: NotificationSettings = {
    enabled: false,
    quietMode: false,
    quietHoursStart: '22:00',
    quietHoursEnd: '07:00',
    contexts: {
        routines: true,
        tasks: true,
        energy: true,
    },
    whatsapp: {
        enabled: false,
        apiKey: '',
        phoneNumber: '',
    },
};

export const useNotificationStore = create<NotificationState>((set) => ({
    settings: getStorageItem(STORAGE_KEYS.SETTINGS, DEFAULT_SETTINGS), // Assuming we might store other settings here too, or specific notification key? 
    // Wait, STORAGE_KEYS.SETTINGS is generic. Let's use a specific key for now or merge.
    // Actually, `getStorageItem` implementation takes a key prefix. 
    // If I use 'settings', it might conflict if I have other settings. 
    // But currently 'settings' is unused in App. 
    // Let's use it for generic settings including notifications for now.

    permission: 'default',

    setPermission: (permission) => set({ permission }),

    updateSettings: (updates) => set((state) => {
        const newSettings = { ...state.settings, ...updates };
        setStorageItem(STORAGE_KEYS.SETTINGS, newSettings);
        return { settings: newSettings };
    }),

    toggleContext: (context) => set((state) => {
        const newContexts = {
            ...state.settings.contexts,
            [context]: !state.settings.contexts[context]
        };
        const newSettings = { ...state.settings, contexts: newContexts };
        setStorageItem(STORAGE_KEYS.SETTINGS, newSettings);
        return { settings: newSettings };
    }),
}));
