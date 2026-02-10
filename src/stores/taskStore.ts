// ============================================
// LifeHub - Task Store (Zustand)
// ============================================

import { create } from 'zustand';
import type {
    Task,
    TaskFormData,
    ID,
    TaskFilters,
    SortBy,
    SortOrder,
    ViewMode,
    Subtask,
    TaskStatus,
} from '../types';
import { generateId, getCurrentTimestamp } from '../utils/helpers';
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../utils/storage';
import { useHistoryStore } from './historyStore';

interface TaskState {
    tasks: Task[];
    selectedTaskId: ID | null;
    filters: TaskFilters;
    sortBy: SortBy;
    sortOrder: SortOrder;
    viewMode: ViewMode;
    isLoading: boolean;
}

interface TaskActions {
    addTask: (data: TaskFormData) => Task;
    updateTask: (id: ID, data: Partial<TaskFormData>) => void;
    deleteTask: (id: ID) => void;
    archiveTask: (id: ID) => void;
    toggleTaskStatus: (id: ID) => void;
    toggleSubtask: (taskId: ID, subtaskId: ID) => void;
    updateSubtask: (taskId: ID, subtaskId: ID, title: string) => void;
    addSubtask: (taskId: ID, title: string) => void;
    deleteSubtask: (taskId: ID, subtaskId: ID) => void;
    selectTask: (id: ID | null) => void;
    setFilters: (filters: Partial<TaskFilters>) => void;
    setSortBy: (sortBy: SortBy) => void;
    setSortOrder: (order: SortOrder) => void;
    setViewMode: (mode: ViewMode) => void;
    reorderTasks: (taskIds: ID[]) => void;
    getTasksByProject: (projectId: ID, includeArchived?: boolean) => Task[];
    getTaskById: (id: ID) => Task | undefined;
    loadTasks: () => void;
    // Timer actions
    startTimer: (taskId: ID) => void;
    stopTimer: (taskId: ID) => void;
    resetTimer: (taskId: ID) => void;
}

type TaskStore = TaskState & TaskActions;

// Initial state
const initialFilters: TaskFilters = {
    status: 'all',
    priority: 'all',
    projectId: 'all',
    search: '',
};

const initialState: TaskState = {
    tasks: [],
    selectedTaskId: null,
    filters: initialFilters,
    sortBy: 'order',
    sortOrder: 'asc',
    viewMode: 'list',
    isLoading: false,
};

// Sample tasks for first load
const sampleTasks: Task[] = [
    {
        id: 'task-1',
        projectId: 'project-1',
        title: 'Define yearly goals',
        description: 'Write down 3-5 major goals for the year',
        status: 'in_progress',
        priority: 'high',
        dueDate: null,
        dueTime: null,
        reminder: null,
        recurring: 'none',
        tags: ['planning', 'goals'],
        subtasks: [
            { id: 'sub-1', title: 'Career goals', isCompleted: true },
            { id: 'sub-2', title: 'Health goals', isCompleted: false },
            { id: 'sub-3', title: 'Financial goals', isCompleted: false },
        ],
        createdAt: getCurrentTimestamp(),
        updatedAt: getCurrentTimestamp(),
        completedAt: null,
        order: 0,
        timeEstimate: 60,
        timeSpent: 0,
        timeEntries: [],
        isTimerRunning: false,
        // Life OS fields
        impact: 'high',
        lifeArea: 'growth',
        mentalLevel: 'creative',
        taskType: 'goal',
        energyRequired: 'high',
        reward: 'Clarity and direction for the year',
        dependencies: [],
        isArchived: false,
    },
    {
        id: 'task-2',
        projectId: 'project-2',
        title: 'Complete project proposal',
        description: 'Draft and submit the Q1 project proposal',
        status: 'todo',
        priority: 'urgent',
        dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
        dueTime: '17:00',
        reminder: 60,
        recurring: 'none',
        tags: ['work', 'deadline'],
        subtasks: [],
        createdAt: getCurrentTimestamp(),
        updatedAt: getCurrentTimestamp(),
        completedAt: null,
        order: 1,
        timeEstimate: 120,
        timeSpent: 0,
        timeEntries: [],
        isTimerRunning: false,
        // Life OS fields
        impact: 'high',
        lifeArea: 'growth',
        mentalLevel: 'analytical',
        taskType: 'deep_work',
        energyRequired: 'high',
        reward: 'Peace of mind and project progress',
        dependencies: [],
        isArchived: false,
    },
    {
        id: 'task-3',
        projectId: 'project-3',
        title: 'Create workout schedule',
        description: 'Plan weekly workout routine',
        status: 'done',
        priority: 'medium',
        dueDate: null,
        dueTime: null,
        reminder: null,
        recurring: 'weekly',
        tags: ['fitness'],
        subtasks: [],
        createdAt: getCurrentTimestamp(),
        updatedAt: getCurrentTimestamp(),
        completedAt: getCurrentTimestamp(),
        order: 2,
        timeEstimate: 30,
        timeSpent: 1800,
        timeEntries: [],
        isTimerRunning: false,
        // Life OS fields
        impact: 'high',
        lifeArea: 'money',
        mentalLevel: 'analytical',
        taskType: 'quick',
        energyRequired: 'low',
        reward: null,
        dependencies: [],
        isArchived: false,
    },
    {
        id: 'task-4',
        projectId: 'project-2',
        title: 'Read 30 mins',
        description: 'Current book: Atomic Habits',
        status: 'todo',
        priority: 'low',
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        dueTime: null,
        reminder: 1440,
        recurring: 'monthly',
        tags: ['learning', 'personal'],
        subtasks: [
            { id: 'sub-4', title: 'Atomic Habits', isCompleted: false },
            { id: 'sub-5', title: 'Choose a fiction book', isCompleted: false },
        ],
        createdAt: getCurrentTimestamp(),
        updatedAt: getCurrentTimestamp(),
        completedAt: null,
        order: 3,
        timeEstimate: 600,
        timeSpent: 0,
        timeEntries: [],
        isTimerRunning: false,
        // Life OS fields
        impact: 'medium',
        lifeArea: 'growth',
        mentalLevel: 'creative',
        taskType: 'habit',
        energyRequired: 'medium',
        reward: 'Knowledge and relaxation',
        dependencies: [],
        isArchived: false,
    },
];

export const useTaskStore = create<TaskStore>((set, get) => ({
    ...initialState,

    loadTasks: () => {
        const stored = getStorageItem<Task[]>(STORAGE_KEYS.TASKS, []);
        if (stored.length === 0) {
            set({ tasks: sampleTasks });
            setStorageItem(STORAGE_KEYS.TASKS, sampleTasks);
        } else {
            // Migration: add new Life OS fields to existing tasks
            const migratedTasks = stored.map((task) => ({
                ...task,
                impact: task.impact || 'medium',
                lifeArea: task.lifeArea || null,
                mentalLevel: task.mentalLevel || 'analytical',
                taskType: task.taskType || 'task',
                energyRequired: task.energyRequired || 'medium',
                reward: task.reward || null,
                dependencies: task.dependencies || [],
                isArchived: (task as any).isArchived || false,
            }));
            set({ tasks: migratedTasks });
            // Save migrated tasks
            setStorageItem(STORAGE_KEYS.TASKS, migratedTasks);
        }
    },

    addTask: (data: TaskFormData) => {
        const timestamp = getCurrentTimestamp();
        const tasks = get().tasks;
        const projectTasks = tasks.filter((t) => t.projectId === data.projectId);
        const maxOrder = projectTasks.length > 0
            ? Math.max(...projectTasks.map((t) => t.order))
            : -1;

        const newTask: Task = {
            id: generateId(),
            ...data,
            createdAt: timestamp,
            updatedAt: timestamp,
            completedAt: null,
            order: maxOrder + 1,
            timeSpent: 0,
            timeEntries: [],
            isTimerRunning: false,
            // Defaults for new fields if not provided
            impact: data.impact || 'medium',
            lifeArea: data.lifeArea || null,
            mentalLevel: data.mentalLevel || 'analytical',
            taskType: data.taskType || 'task',
            energyRequired: data.energyRequired || 'medium',
            reward: data.reward || null,
            dependencies: data.dependencies || [],
            isArchived: false,
        };

        set((state) => {
            const updated = [...state.tasks, newTask];
            setStorageItem(STORAGE_KEYS.TASKS, updated);
            return { tasks: updated };
        });

        return newTask;
    },

    updateTask: (id: ID, data: Partial<TaskFormData>) => {
        set((state) => {
            const updated = state.tasks.map((task) =>
                task.id === id
                    ? { ...task, ...data, updatedAt: getCurrentTimestamp() }
                    : task
            );
            setStorageItem(STORAGE_KEYS.TASKS, updated);
            return { tasks: updated };
        });
    },

    deleteTask: (id: ID) => {
        set((state) => {
            const task = state.tasks.find(t => t.id === id);
            if (task) {
                useHistoryStore.getState().logChange('task', id, task.title, 'delete');
            }

            const updated = state.tasks.filter((task) => task.id !== id);
            setStorageItem(STORAGE_KEYS.TASKS, updated);
            return {
                tasks: updated,
                selectedTaskId: state.selectedTaskId === id ? null : state.selectedTaskId,
            };
        });
    },

    archiveTask: (id: ID) => {
        set((state) => {
            const task = state.tasks.find(t => t.id === id);
            if (task) {
                useHistoryStore.getState().logChange('task', id, task.title, 'archive');
            }

            const updated = state.tasks.map((task) =>
                task.id === id
                    ? { ...task, isArchived: true, updatedAt: getCurrentTimestamp() }
                    : task
            );
            setStorageItem(STORAGE_KEYS.TASKS, updated);
            // If the archived task was selected, deselect it
            return {
                tasks: updated,
                selectedTaskId: state.selectedTaskId === id ? null : state.selectedTaskId,
            };
        });
    },

    toggleTaskStatus: (id: ID) => {
        set((state) => {
            const updated = state.tasks.map((task): Task => {
                if (task.id !== id) return task;

                const nextStatus: TaskStatus = task.status === 'done' ? 'todo' :
                    task.status === 'todo' ? 'in_progress' : 'done';

                return {
                    ...task,
                    status: nextStatus,
                    updatedAt: getCurrentTimestamp(),
                    completedAt: nextStatus === 'done' ? getCurrentTimestamp() : null,
                };
            });
            setStorageItem(STORAGE_KEYS.TASKS, updated);
            return { tasks: updated };
        });
    },

    toggleSubtask: (taskId: ID, subtaskId: ID) => {
        set((state) => {
            const updated = state.tasks.map((task) => {
                if (task.id !== taskId) return task;
                const updatedSubtasks = task.subtasks.map((subtask) =>
                    subtask.id === subtaskId
                        ? { ...subtask, isCompleted: !subtask.isCompleted }
                        : subtask
                );
                return { ...task, subtasks: updatedSubtasks, updatedAt: getCurrentTimestamp() };
            });
            setStorageItem(STORAGE_KEYS.TASKS, updated);
            return { tasks: updated };
        });
    },

    updateSubtask: (taskId: ID, subtaskId: ID, title: string) => {
        set((state) => {
            const updated = state.tasks.map((task) => {
                if (task.id !== taskId) return task;
                const updatedSubtasks = task.subtasks.map((subtask) =>
                    subtask.id === subtaskId ? { ...subtask, title } : subtask
                );
                return { ...task, subtasks: updatedSubtasks, updatedAt: getCurrentTimestamp() };
            });
            setStorageItem(STORAGE_KEYS.TASKS, updated);
            return { tasks: updated };
        });
    },

    addSubtask: (taskId: ID, title: string) => {
        const newSubtask: Subtask = {
            id: generateId(),
            title,
            isCompleted: false,
        };

        set((state) => {
            const updated = state.tasks.map((task) =>
                task.id === taskId
                    ? {
                        ...task,
                        subtasks: [...task.subtasks, newSubtask],
                        updatedAt: getCurrentTimestamp(),
                    }
                    : task
            );
            setStorageItem(STORAGE_KEYS.TASKS, updated);
            return { tasks: updated };
        });
    },

    deleteSubtask: (taskId: ID, subtaskId: ID) => {
        set((state) => {
            const updated = state.tasks.map((task) =>
                task.id === taskId
                    ? {
                        ...task,
                        subtasks: task.subtasks.filter((sub) => sub.id !== subtaskId),
                        updatedAt: getCurrentTimestamp(),
                    }
                    : task
            );
            setStorageItem(STORAGE_KEYS.TASKS, updated);
            return { tasks: updated };
        });
    },

    selectTask: (id: ID | null) => {
        set({ selectedTaskId: id });
    },

    setFilters: (filters: Partial<TaskFilters>) => {
        set((state) => ({
            filters: { ...state.filters, ...filters },
        }));
    },

    setSortBy: (sortBy: SortBy) => {
        set({ sortBy });
    },

    setSortOrder: (order: SortOrder) => {
        set({ sortOrder: order });
    },

    setViewMode: (mode: ViewMode) => {
        set({ viewMode: mode });
    },

    reorderTasks: (taskIds: ID[]) => {
        set((state) => {
            const taskMap = new Map(state.tasks.map(t => [t.id, t]));
            const newTasks = [...state.tasks];

            taskIds.forEach((id, index) => {
                const task = taskMap.get(id);
                if (task) {
                    // Update order in the full list
                    // Find index in state.tasks
                    const taskIndex = newTasks.findIndex(t => t.id === id);
                    if (taskIndex !== -1) {
                        newTasks[taskIndex] = { ...newTasks[taskIndex], order: index };
                    }
                }
            });

            setStorageItem(STORAGE_KEYS.TASKS, newTasks);
            return { tasks: newTasks };
        });
    },

    getTasksByProject: (projectId: ID, includeArchived = false) => {
        return get().tasks.filter((task) =>
            task.projectId === projectId &&
            (includeArchived ? true : !task.isArchived)
        );
    },

    getTaskById: (id: ID) => {
        return get().tasks.find((task) => task.id === id);
    },

    // Timer actions
    startTimer: (taskId: ID) => {
        const timestamp = getCurrentTimestamp();
        set((state) => {
            const updated = state.tasks.map((task) => {
                if (task.id !== taskId) return task;

                const newEntry = {
                    id: generateId(),
                    startedAt: timestamp,
                    endedAt: null,
                    duration: 0,
                };

                return {
                    ...task,
                    isTimerRunning: true,
                    timeEntries: [...task.timeEntries, newEntry],
                    updatedAt: timestamp,
                };
            });
            setStorageItem(STORAGE_KEYS.TASKS, updated);
            return { tasks: updated };
        });
    },

    stopTimer: (taskId: ID) => {
        const timestamp = getCurrentTimestamp();
        set((state) => {
            const updated = state.tasks.map((task) => {
                if (task.id !== taskId || !task.isTimerRunning) return task;

                const lastEntry = task.timeEntries[task.timeEntries.length - 1];
                if (!lastEntry || lastEntry.endedAt) return task;

                const startTime = new Date(lastEntry.startedAt).getTime();
                const endTime = new Date(timestamp).getTime();
                const duration = Math.floor((endTime - startTime) / 1000);

                const updatedEntries = task.timeEntries.map((entry, i) =>
                    i === task.timeEntries.length - 1
                        ? { ...entry, endedAt: timestamp, duration }
                        : entry
                );

                return {
                    ...task,
                    isTimerRunning: false,
                    timeSpent: task.timeSpent + duration,
                    timeEntries: updatedEntries,
                    updatedAt: timestamp,
                };
            });
            setStorageItem(STORAGE_KEYS.TASKS, updated);
            return { tasks: updated };
        });
    },

    resetTimer: (taskId: ID) => {
        set((state) => {
            const updated = state.tasks.map((task) =>
                task.id === taskId
                    ? {
                        ...task,
                        isTimerRunning: false,
                        timeSpent: 0,
                        timeEntries: [],
                        updatedAt: getCurrentTimestamp(),
                    }
                    : task
            );
            setStorageItem(STORAGE_KEYS.TASKS, updated);
            return { tasks: updated };
        });
    },
}));
