// ============================================
// LifeHub - Project Store (Zustand)
// ============================================

import { create } from 'zustand';
import type { Project, ProjectFormData, ID } from '../types';
import { generateId, getCurrentTimestamp } from '../utils/helpers';
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../utils/storage';

interface ProjectState {
    projects: Project[];
    selectedProjectId: ID | null;
    isLoading: boolean;
}

interface ProjectActions {
    addProject: (data: ProjectFormData) => Project;
    updateProject: (id: ID, data: Partial<ProjectFormData>) => void;
    deleteProject: (id: ID) => void;
    archiveProject: (id: ID) => void;
    selectProject: (id: ID | null) => void;
    getProjectById: (id: ID) => Project | undefined;
    setNextAction: (projectId: ID, taskId: ID | null) => void;
    loadProjects: () => void;
}

type ProjectStore = ProjectState & ProjectActions;

// Initial state
const initialState: ProjectState = {
    projects: [],
    selectedProjectId: null,
    isLoading: false,
};

// Sample projects for first load
const sampleProjects: Project[] = [
    {
        id: 'project-1',
        name: 'Personal Goals',
        description: 'Track personal development and life goals',
        color: '#d4af37',
        icon: 'Target',
        status: 'active',
        parentId: null,
        goalId: null,
        deadline: null,
        createdAt: getCurrentTimestamp(),
        updatedAt: getCurrentTimestamp(),
        isArchived: false,
    },
    {
        id: 'project-2',
        name: 'Work Projects',
        description: 'Professional tasks and deadlines',
        color: '#3b82f6',
        icon: 'Briefcase',
        status: 'active',
        parentId: null,
        goalId: null,
        deadline: null,
        createdAt: getCurrentTimestamp(),
        updatedAt: getCurrentTimestamp(),
        isArchived: false,
    },
    {
        id: 'project-3',
        name: 'Health & Fitness',
        description: 'Exercise routines and wellness habits',
        color: '#22c55e',
        icon: 'Dumbbell',
        status: 'active',
        parentId: null,
        goalId: null,
        deadline: null,
        createdAt: getCurrentTimestamp(),
        updatedAt: getCurrentTimestamp(),
        isArchived: false,
    },
];

export const useProjectStore = create<ProjectStore>((set, get) => ({
    ...initialState,

    loadProjects: () => {
        const stored = getStorageItem<Project[]>(STORAGE_KEYS.PROJECTS, []);
        if (stored.length === 0) {
            // First time - load sample projects
            set({ projects: sampleProjects });
            setStorageItem(STORAGE_KEYS.PROJECTS, sampleProjects);
        } else {
            set({ projects: stored });
        }
    },

    addProject: (data: ProjectFormData) => {
        const timestamp = getCurrentTimestamp();
        const newProject: Project = {
            id: generateId(),
            ...data,
            createdAt: timestamp,
            updatedAt: timestamp,
            isArchived: data.status === 'archived',
        };

        set((state) => {
            const updated = [...state.projects, newProject];
            setStorageItem(STORAGE_KEYS.PROJECTS, updated);
            return { projects: updated };
        });

        return newProject;
    },

    updateProject: (id: ID, data: Partial<ProjectFormData>) => {
        set((state) => {
            const updated = state.projects.map((project) =>
                project.id === id
                    ? { ...project, ...data, updatedAt: getCurrentTimestamp() }
                    : project
            );
            setStorageItem(STORAGE_KEYS.PROJECTS, updated);
            return { projects: updated };
        });
    },

    deleteProject: (id: ID) => {
        set((state) => {
            const updated = state.projects.filter((project) => project.id !== id);
            setStorageItem(STORAGE_KEYS.PROJECTS, updated);
            return {
                projects: updated,
                selectedProjectId: state.selectedProjectId === id ? null : state.selectedProjectId,
            };
        });
    },

    archiveProject: (id: ID) => {
        set((state) => {
            const updated = state.projects.map((project) =>
                project.id === id
                    ? { ...project, isArchived: !project.isArchived, updatedAt: getCurrentTimestamp() }
                    : project
            );
            setStorageItem(STORAGE_KEYS.PROJECTS, updated);
            return { projects: updated };
        });
    },

    selectProject: (id: ID | null) => {
        set({ selectedProjectId: id });
    },

    getProjectById: (id: ID) => {
        return get().projects.find((project) => project.id === id);
    },

    setNextAction: (projectId: ID, taskId: ID | null) => {
        set((state) => {
            const updated = state.projects.map((project) =>
                project.id === projectId
                    ? { ...project, nextActionTaskId: taskId, updatedAt: getCurrentTimestamp() }
                    : project
            );
            setStorageItem(STORAGE_KEYS.PROJECTS, updated);
            return { projects: updated };
        });
    },
}));
