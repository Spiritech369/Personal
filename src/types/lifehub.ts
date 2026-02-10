// Core type definitions for LifeHub Strategic Productivity System

// ========================================
// JOURNAL SYSTEM
// ========================================

export type JournalType = 'daily' | 'decision' | 'braindump';

export interface DailyClarity {
    movedNeedle: string;
    blockedProgress: string;
    lessonLearned: string;
    mentalState: 'focused' | 'overloaded' | 'distracted';
}

export interface DecisionLog {
    decision: string;
    context: string;
    expectedOutcome: string;
    confidenceLevel: number; // 1-10
    reviewDate: Date;
}

export interface BrainDump {
    content: string;
    extractedItems?: {
        type: 'task' | 'idea' | 'note';
        text: string;
    }[];
}

export interface JournalEntry {
    id: string;
    userId: string;
    type: JournalType;
    date: Date;
    content: DailyClarity | DecisionLog | BrainDump;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}

// ========================================
// HABIT SYSTEM
// ========================================

export type EnergyImpact = 'positive' | 'neutral' | 'negative';
export type HabitVersion = 'min' | 'ideal';

export interface Habit {
    id: string;
    userId: string;
    name: string;
    minVersion: string;
    idealVersion: string;
    energyImpact: EnergyImpact;
    linkedGoal?: string;
    lifeArea: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface HabitCompletion {
    id: string;
    habitId: string;
    completedAt: Date;
    version: HabitVersion;
    notes?: string;
}

export interface HabitStats {
    habitId: string;
    streak: number;
    completionRate: number; // 0-100
    roi: number; // Calculated impact score
    lastCompleted?: Date;
}

// ========================================
// REVIEW SYSTEM
// ========================================

export type ReviewType = 'weekly' | 'monthly' | 'quarterly';

export interface ReviewPrompt {
    question: string;
    response?: string;
}

export interface Review {
    id: string;
    userId: string;
    type: ReviewType;
    date: Date;
    prompts: ReviewPrompt[];
    responses: Record<string, string>;
    conclusions: string[];
    actionItems: string[];
    createdAt: Date;
    updatedAt: Date;
}

// ========================================
// ROUTINE SYSTEM
// ========================================

export interface RoutineStep {
    title: string;
    duration: number; // minutes
    notes?: string;
    optional?: boolean;
}

export interface Routine {
    id: string;
    userId: string;
    name: string;
    description?: string;
    steps: RoutineStep[];
    totalDuration: number; // Auto-calculated
    autoSpawnTasks: boolean;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface RoutineExecution {
    id: string;
    routineId: string;
    startedAt: Date;
    completedAt?: Date;
    stepsCompleted: Record<string, boolean>;
    notes?: string;
}

// ========================================
// GOAL SYSTEM
// ========================================

export type GoalStatus = 'active' | 'stagnated' | 'completed' | 'archived';

export interface Goal {
    id: string;
    userId: string;
    vision: string;
    outcome: string; // Measurable
    deadline?: Date;
    lifeArea: string;
    parentGoal?: string;
    childGoals?: string[];
    status: GoalStatus;
    progress: number; // 0-100
    lastActivity: Date;
    createdAt: Date;
    updatedAt: Date;
}

// ========================================
// PROJECT SYSTEM
// ========================================

export type ProjectHealth = 'ontrack' | 'atrisk' | 'blocked';

export interface Project {
    id: string;
    userId: string;
    name: string;
    description?: string;
    outcome: string;
    health: ProjectHealth;
    nextAction?: string;
    linkedGoal?: string;
    dependencies: string[]; // Project/Task IDs
    blockers: string[];
    lastActivity: Date;
    createdAt: Date;
    updatedAt: Date;
}

// ========================================
// AUTOMATION SYSTEM
// ========================================

export type ConditionType = 'energy' | 'overdue' | 'inactive' | 'health';
export type ActionType = 'reschedule' | 'priority' | 'notify' | 'review';

export interface Condition {
    type: ConditionType;
    params: Record<string, any>;
}

export interface Action {
    type: ActionType;
    params: Record<string, any>;
}

export interface AutomationRule {
    id: string;
    userId: string;
    name: string;
    description?: string;
    condition: Condition;
    action: Action;
    enabled: boolean;
    lastTriggered?: Date;
    triggerCount: number;
    createdAt: Date;
    updatedAt: Date;
}

// ========================================
// VERSION HISTORY
// ========================================

export interface VersionEntry {
    id: string;
    entityId: string;
    entityType: string;
    changes: Record<string, any>;
    previousVersion?: Record<string, any>;
    userId: string;
    timestamp: Date;
}

// ========================================
// LINKED ITEMS
// ========================================

export type EntityType = 'journal' | 'habit' | 'routine' | 'review' | 'task' | 'project' | 'goal';

export interface LinkedItem {
    id: string;
    sourceId: string;
    sourceType: EntityType;
    targetId: string;
    targetType: EntityType;
    createdAt: Date;
}

// ========================================
// SHARED TYPES
// ========================================

export interface Reference {
    id: string;
    type: EntityType;
    label?: string;
}
