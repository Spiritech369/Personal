// ============================================
// LifeHub - Local Storage Utilities
// ============================================

const STORAGE_PREFIX = 'lifehub_';

/**
 * Get item from localStorage with JSON parsing
 */
export function getStorageItem<T>(key: string, defaultValue: T): T {
    try {
        const item = localStorage.getItem(STORAGE_PREFIX + key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.error(`Error reading from localStorage: ${key}`, error);
        return defaultValue;
    }
}

/**
 * Set item in localStorage with JSON stringification
 */
export function setStorageItem<T>(key: string, value: T): void {
    try {
        localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
    } catch (error) {
        console.error(`Error writing to localStorage: ${key}`, error);
    }
}

/**
 * Remove item from localStorage
 */
export function removeStorageItem(key: string): void {
    try {
        localStorage.removeItem(STORAGE_PREFIX + key);
    } catch (error) {
        console.error(`Error removing from localStorage: ${key}`, error);
    }
}

/**
 * Clear all LifeHub items from localStorage
 */
export function clearAllStorage(): void {
    try {
        const keysToRemove: string[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key?.startsWith(STORAGE_PREFIX)) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach(key => localStorage.removeItem(key));
    } catch (error) {
        console.error('Error clearing localStorage', error);
    }
}

// Storage keys
export const STORAGE_KEYS = {
    PROJECTS: 'projects',
    TASKS: 'tasks',
    GOALS: 'goals',
    SETTINGS: 'settings',
    UI_STATE: 'ui_state',
    ROUTINES: 'routines',
    REVIEWS: 'reviews',
    JOURNALS: 'journals',
    HISTORY: 'history',
    HABITS: 'habits',
} as const;

/**
 * Export all LifeHub data as a JSON object (for backup)
 */
export function exportAllData(): Record<string, unknown> {
    const data: Record<string, unknown> = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith(STORAGE_PREFIX)) {
            try {
                data[key] = JSON.parse(localStorage.getItem(key) || 'null');
            } catch {
                data[key] = localStorage.getItem(key);
            }
        }
    }
    return data;
}

/**
 * Import LifeHub data from a JSON backup object
 */
export function importAllData(data: Record<string, unknown>): void {
    // Only import keys that match our prefix
    for (const [key, value] of Object.entries(data)) {
        if (key.startsWith(STORAGE_PREFIX)) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch (error) {
                console.error(`Error importing key: ${key}`, error);
            }
        }
    }
}
