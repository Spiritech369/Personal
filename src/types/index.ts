// ============================================
// LifeHub - Type Definitions
// ============================================

// Unique identifier type
export type ID = string;

// Timestamp type
export type Timestamp = string; // ISO 8601 format

// ============================================
// Project Types
// ============================================

export type ProjectStatus = 'active' | 'on_hold' | 'completed' | 'archived';
export type ProjectHealth = 'on_track' | 'at_risk' | 'blocked';

export interface Project {
    id: ID;
    name: string;
    description: string;
    color: string;
    icon: string;
    status: ProjectStatus;
    nextActionTaskId?: ID | null;
    parentId: ID | null; // For sub-projects
    goalId: ID | null; // Main linked goal
    deadline: Timestamp | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    isArchived: boolean; // Deprecated in favor of status='archived', kept for backward compat
    // Phase 3: Project Health
    nextAction?: string | null;
    health?: ProjectHealth;
    lastActivity?: Timestamp;
    dependencies?: string[];
    blockers?: string[];
}

export type ProjectFormData = Omit<Project, 'id' | 'createdAt' | 'updatedAt' | 'isArchived'>;

// ============================================
// Task Types
// ============================================

export type TaskStatus = 'todo' | 'in_progress' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';
export type RecurringType = 'none' | 'daily' | 'weekly' | 'monthly';

// Life OS - New Types
export type EnergyLevel = 'high' | 'medium' | 'low';
export type TaskImpact = 'low' | 'medium' | 'high';
export type LifeArea = 'money' | 'health' | 'growth' | 'relationships' | 'order';
export type MentalLevel = 'creative' | 'analytical' | 'mechanical';
export type TaskType = 'habit' | 'goal' | 'deep_work' | 'quick' | 'decision' | 'task';

// Life OS Labels (Spanish)
export const ENERGY_LABELS: Record<EnergyLevel, string> = {
    high: '⚡ Alta',
    medium: '🙂 Media',
    low: '😴 Baja',
};

export const IMPACT_LABELS: Record<TaskImpact, string> = {
    low: 'Bajo',
    medium: 'Medio',
    high: 'Alto',
};

export const LIFE_AREA_LABELS: Record<LifeArea, string> = {
    money: '💰 Dinero',
    health: '❤️ Salud',
    growth: '🧠 Crecimiento',
    relationships: '👥 Relaciones',
    order: '📦 Orden',
};

export const MENTAL_LEVEL_LABELS: Record<MentalLevel, string> = {
    creative: '🎨 Creativo',
    analytical: '📊 Analítico',
    mechanical: '⚙️ Mecánico',
};

export const TASK_TYPE_LABELS: Record<TaskType, string> = {
    habit: '🔁 Hábito',
    goal: '🎯 Objetivo',
    deep_work: '🧱 Deep Work',
    quick: '⚡ Rápida',
    decision: '🧠 Decidir',
    task: '✅ Tarea',
};

export interface Subtask {
    id: ID;
    title: string;
    isCompleted: boolean;
}

export interface TimeEntry {
    id: ID;
    startedAt: Timestamp;
    endedAt: Timestamp | null;
    duration: number; // in seconds
}

export interface Task {
    id: ID;
    projectId: ID;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate: Timestamp | null;
    dueTime: string | null; // HH:mm format
    reminder: number | null; // minutes before due
    recurring: RecurringType;
    tags: string[];
    subtasks: Subtask[];
    createdAt: Timestamp;
    updatedAt: Timestamp;
    completedAt: Timestamp | null;
    order: number;
    // Time tracking
    timeEstimate: number | null; // in minutes
    timeSpent: number; // in seconds
    timeEntries: TimeEntry[];
    isTimerRunning: boolean;
    dependencies: ID[]; // IDs of tasks that must be completed before this one
    // Life OS - New Fields
    impact: TaskImpact;
    lifeArea: LifeArea | null;
    mentalLevel: MentalLevel;
    taskType: TaskType;
    energyRequired: EnergyLevel;
    reward: string | null; // What you gain by completing
    isArchived: boolean;
}

export type TaskFormData = Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'completedAt' | 'order' | 'timeSpent' | 'timeEntries' | 'isTimerRunning'>;

// ============================================
// Analytics Types
// ============================================

export interface DailyStats {
    date: string; // YYYY-MM-DD
    completed: number;
    created: number;
    timeSpent: number; // in seconds
}

export interface CompletionRecord {
    taskId: ID;
    projectId: ID;
    completedAt: Timestamp;
    priority: TaskPriority;
    energy?: EnergyLevel;
    lifeArea?: LifeArea;
}

// ============================================
// Goal Types
// ============================================

export type GoalStatus = 'not_started' | 'in_progress' | 'achieved' | 'paused' | 'dropped';
export type GoalTimeline = 'q1' | 'q2' | 'q3' | 'q4' | 'year' | '5_years' | 'lifetime';

export interface Goal {
    id: ID;
    parentId: ID | null; // For sub-goals (hierarchy)
    title: string;
    description: string;
    lifeArea: LifeArea;
    deadline: Timestamp | null;
    timeline: GoalTimeline; // Rough timeframe
    status: GoalStatus;
    progress: number; // 0-100 (manual or calculated)
    linkedProjectIds: ID[]; // Derived/Cached
    linkedTaskIds: ID[];    // Derived/Cached
    vision: string; // The "Why"
    icon: string; // Emoji or Lucide icon name
    createdAt: Timestamp;
    updatedAt: Timestamp;
    completedAt: Timestamp | null;
    lastActivity?: Timestamp; // For stagnation detection
}

export type GoalFormData = Omit<Goal, 'id' | 'createdAt' | 'updatedAt' | 'completedAt' | 'linkedProjectIds' | 'linkedTaskIds'>;

// ============================================
// Review Types
// ============================================

export type ReviewType = 'weekly' | 'monthly' | 'quarterly' | 'yearly';
export type ReviewStatus = 'in_progress' | 'completed';

export interface ReviewQuestion {
    id: string;
    text: string;
    type: 'text' | 'scale' | 'boolean' | 'list';
    category: 'reflection' | 'planning' | 'closing' | 'system';
}

export interface ReviewAnswer {
    questionId: string;
    value: string | number | boolean | string[];
}

export interface Review {
    id: ID;
    type: ReviewType;
    date: Timestamp; // The date regarding the review (e.g. start of week)
    status: ReviewStatus;
    answers: ReviewAnswer[];
    prompts?: any[]; // For storing the questions asked
    responses?: Record<string, any>; // For storing raw responses
    conclusions?: string[];
    actionItems?: string[];
    completedAt: Timestamp | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}

export type ReviewFormData = Omit<Review, 'id' | 'createdAt' | 'updatedAt' | 'completedAt'>;

// ============================================
// Habit Types
// ============================================

export interface Habit {
    id: ID;
    userId: string;
    name: string;
    description?: string;
    minimumVersion: string; // Minimum viable action
    idealVersion: string; // Full ideal execution
    energyImpact: 'positive' | 'neutral' | 'negative';
    linkedGoalId?: ID | null;
    lifeArea?: LifeArea | null;
    active: boolean;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}

export type HabitVersion = 'min' | 'ideal';

export interface HabitCompletion {
    id: ID;
    habitId: ID;
    userId: string;
    completedAt: Timestamp;
    version: 'minimum' | 'ideal';
    notes?: string;
}

export type HabitFormData = Omit<Habit, 'id' | 'userId' | 'createdAt' | 'updatedAt'>;

// ============================================
// Routine Types
// ============================================

export interface RoutineStep {
    title: string;
    duration: number; // in minutes
}

export interface Routine {
    id: ID;
    userId: string;
    name: string;
    description?: string;
    steps: RoutineStep[];
    totalDuration: number; // in minutes (auto-calculated)
    autoSpawnTasks: boolean;
    active: boolean;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}

export interface RoutineExecution {
    id: ID;
    routineId: ID;
    userId: string;
    startedAt: Timestamp;
    completedAt: Timestamp | null;
    stepsCompleted: Record<string, boolean>;
    notes?: string;
}

export type RoutineFormData = Omit<Routine, 'id' | 'userId' | 'createdAt' | 'updatedAt'>;


// ============================================
// History Types
// ============================================

export type HistoryAction = 'create' | 'update' | 'delete' | 'archive' | 'restore';
export type HistoryTarget = 'task' | 'project' | 'goal';

export interface HistoryChange {
    field: string;
    oldValue: any;
    newValue: any;
}

export interface HistoryEntry {
    id: ID;
    targetType: HistoryTarget;
    targetId: ID;
    targetName: string; // Snapshot of name/title
    action: HistoryAction;
    changes: HistoryChange[];
    timestamp: Timestamp;
    userId: string; // 'user' for now
}

// ============================================
// View Types
// ============================================

export type ViewType = 'dashboard' | 'tasks' | 'project' | 'goals' | 'routines' | 'reviews' | 'habits' | 'calendar' | 'journal' | 'insights' | 'settings';
export type ViewMode = 'list' | 'board' | 'calendar' | 'tree' | 'timeline';
export type SortBy = 'dueDate' | 'priority' | 'createdAt' | 'title' | 'order';
export type SortOrder = 'asc' | 'desc';

export interface TaskFilters {
    status: TaskStatus | 'all';
    priority: TaskPriority | 'all';
    projectId: ID | 'all';
    search: string;
}

// ============================================
// UI Types
// ============================================

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export interface ToastMessage {
    id: ID;
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    duration?: number;
}

// ============================================
// Store Types
// ============================================

export interface ProjectStore {
    projects: Project[];
    selectedProjectId: ID | null;
    isLoading: boolean;

    // Actions
    addProject: (data: ProjectFormData) => Project;
    updateProject: (id: ID, data: Partial<ProjectFormData>) => void;
    deleteProject: (id: ID) => void;
    archiveProject: (id: ID) => void;
    selectProject: (id: ID | null) => void;
    getProjectById: (id: ID) => Project | undefined;
}

export interface TaskStore {
    tasks: Task[];
    selectedTaskId: ID | null;
    filters: TaskFilters;
    sortBy: SortBy;
    sortOrder: SortOrder;
    viewMode: ViewMode;
    isLoading: boolean;

    // Actions
    addTask: (data: TaskFormData) => Task;
    updateTask: (id: ID, data: Partial<TaskFormData>) => void;
    deleteTask: (id: ID) => void;
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
    getTasksByProject: (projectId: ID) => Task[];
    getTaskById: (id: ID) => Task | undefined;
}

// ============================================
// Icon Names (Lucide)
// ============================================

export const PROJECT_ICONS = [
    'Folder',
    'Briefcase',
    'Home',
    'Heart',
    'Star',
    'Zap',
    'Target',
    'Trophy',
    'Rocket',
    'Book',
    'Code',
    'Music',
    'Camera',
    'Plane',
    'Car',
    'Dumbbell',
    'Leaf',
    'Sun',
    'Moon',
    'Coffee'
] as const;

export type ProjectIcon = typeof PROJECT_ICONS[number];

// ============================================
// Color Presets
// ============================================

export const PROJECT_COLORS = [
    '#d4af37', // Gold (default)
    '#ef4444', // Red
    '#f97316', // Orange
    '#eab308', // Yellow
    '#22c55e', // Green
    '#14b8a6', // Teal
    '#3b82f6', // Blue
    '#8b5cf6', // Purple
    '#ec4899', // Pink
    '#6b7280', // Gray
] as const;

export type ProjectColor = typeof PROJECT_COLORS[number];
// ============================================
// Strategic Journal Types
// ============================================

export type JournalEntryType = 'daily_clarity' | 'decision_log' | 'brain_dump';

export type Sentiment = 'focused' | 'overloaded' | 'distracted';
export type Mood = Sentiment;

export const MOOD_LABELS: Record<Mood, string> = {
    focused: '🎯 Focused',
    overloaded: '😫 Overloaded',
    distracted: '🐿️ Distracted',
};

export interface JournalContentDailyClarity {
    movedNeedle: string;
    blockedProgress: string;
    lessonLearned: string;
    mentalState: Sentiment;
}

export interface JournalContentDecisionLog {
    decision: string;
    context: string;
    expectedOutcome: string;
    confidenceLevel: number; // 1-10
    reviewDate: Timestamp;
}

export interface JournalContentBrainDump {
    text: string;
}

export type JournalContent =
    | JournalContentDailyClarity
    | JournalContentDecisionLog
    | JournalContentBrainDump;

export interface JournalEntry {
    id: ID;
    type: JournalEntryType;
    title: string;
    content: JournalContent;
    timestamp: Timestamp;
    tags: string[];
    linkedItemIds: ID[]; // IDs of linked Projects or Goals
    createdAt: Timestamp;
    updatedAt: Timestamp;
}

export type JournalFormData = Omit<JournalEntry, 'id' | 'createdAt' | 'updatedAt'>;

