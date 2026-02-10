import React, { useState } from 'react';
import {
    ChevronRight,
    ChevronDown,
    CheckCircle2,
    Circle,
    Clock,
    AlertTriangle,
    Link as LinkIcon,
    Zap,
    Target,
    Star
} from 'lucide-react';
import type { Task, ID } from '../../types';
import { useProjectStore } from '../../stores/projectStore';
import {
    getDetailedProjectProgress,
    isTaskBlocked,
    getDependencyChain,
    suggestNextAction
} from '../../utils/helpers';
import { IconButton } from '../common';
import styles from './ProjectTreeView.module.css';

interface ProjectTreeViewProps {
    tasks: Task[];
    onTaskClick: (taskId: ID) => void;
}

export const ProjectTreeView: React.FC<ProjectTreeViewProps> = ({ tasks, onTaskClick }) => {
    const [expandedTasks, setExpandedTasks] = useState<Set<ID>>(new Set());
    const { selectedProjectId, getProjectById, setNextAction } = useProjectStore();

    const project = selectedProjectId ? getProjectById(selectedProjectId) : null;
    const manualNextTaskId = project?.nextActionTaskId;

    // Find next action task
    const suggestedNextTask = suggestNextAction(tasks);
    const currentNextTask = manualNextTaskId
        ? tasks.find(t => t.id === manualNextTaskId)
        : suggestedNextTask;

    const toggleExpand = (e: React.MouseEvent, taskId: ID) => {
        e.stopPropagation();
        setExpandedTasks(prev => {
            const next = new Set(prev);
            if (next.has(taskId)) next.delete(taskId);
            else next.add(taskId);
            return next;
        });
    };

    const stats = getDetailedProjectProgress(tasks);

    if (tasks.length === 0) {
        return (
            <div className={styles.emptyTree}>
                <p>No tasks in this project yet.</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            {/* Project Summary Header */}
            <div className={styles.summaryCard}>
                <div className={styles.summaryHeader}>
                    <h2 className={styles.summaryTitle}>Project Progress</h2>
                    {stats.blockedCount > 0 && (
                        <div className={styles.blockerBadge}>
                            <AlertTriangle size={14} />
                            <span>{stats.blockedCount} Blocked Tasks</span>
                        </div>
                    )}
                </div>

                <div className={styles.progressLabel}>
                    <span>{stats.completedSubtasks} / {stats.totalSubtasks} steps completed</span>
                    <span>{stats.progress}%</span>
                </div>

                <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        style={{ width: `${stats.progress}%` }}
                    />
                </div>

                {currentNextTask && (
                    <div className={styles.nextActionSection}>
                        <div className={styles.nextActionLabel}>
                            <Zap size={14} fill="currentColor" />
                            <span>Next Action</span>
                            {!manualNextTaskId && <span className={styles.suggestionBadge}>Suggested</span>}
                        </div>
                        <div className={styles.nextActionTask}>
                            <span className={styles.nextActionTitle}>{currentNextTask.title}</span>
                            <IconButton
                                icon={<Target size={14} />}
                                size="sm"
                                variant="ghost"
                                onClick={() => onTaskClick(currentNextTask.id)}
                                tooltip="Focus Task"
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Tree View */}
            <div className={styles.tree}>
                {tasks.map(task => {
                    const isBlocked = isTaskBlocked(task, tasks);
                    const isExpanded = expandedTasks.has(task.id);
                    const hasSubtasks = task.subtasks.length > 0;
                    const depChain = getDependencyChain(task, tasks);

                    return (
                        <div
                            key={task.id}
                            className={`${styles.treeItem} ${isBlocked && task.status !== 'done' ? styles.blocked : ''}`}
                        >
                            <div className={styles.treeItemContent}>
                                <div
                                    className={styles.treeItemHeader}
                                    onClick={() => onTaskClick(task.id)}
                                >
                                    <button
                                        className={styles.expandBtn}
                                        onClick={(e) => toggleExpand(e, task.id)}
                                    >
                                        {hasSubtasks ? (
                                            isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />
                                        ) : (
                                            <div style={{ width: 18 }} />
                                        )}
                                    </button>

                                    <div className={styles.statusIcon}>
                                        {task.status === 'done' ? (
                                            <CheckCircle2 size={20} color="var(--color-success)" />
                                        ) : isBlocked ? (
                                            <AlertTriangle size={20} color="var(--color-error)" />
                                        ) : task.status === 'in_progress' ? (
                                            <Clock size={20} color="var(--color-accent)" />
                                        ) : (
                                            <Circle size={20} color="var(--color-text-muted)" />
                                        )}
                                    </div>

                                    <span className={styles.taskTitle}>{task.title}</span>

                                    <div className={styles.treeMeta}>
                                        <IconButton
                                            icon={<Star size={16} fill={task.id === manualNextTaskId ? "var(--color-accent)" : "none"} />}
                                            size="sm"
                                            variant="ghost"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (selectedProjectId) {
                                                    setNextAction(selectedProjectId, task.id === manualNextTaskId ? null : task.id);
                                                }
                                            }}
                                            tooltip={task.id === manualNextTaskId ? "Clear Next Action" : "Set as Next Action"}
                                            style={{ color: task.id === manualNextTaskId ? "var(--color-accent)" : "var(--color-text-muted)" }}
                                        />
                                        {depChain.length > 0 && (
                                            <div className={styles.dependencyBadge} title={`Depends on: ${depChain.map(d => d.title).join(', ')}`}>
                                                <LinkIcon size={14} />
                                                <span>{depChain.length} dep</span>
                                            </div>
                                        )}
                                        {hasSubtasks && (
                                            <span className={styles.progressCount}>
                                                {task.subtasks.filter(s => s.isCompleted).length}/{task.subtasks.length}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {isExpanded && hasSubtasks && (
                                    <div className={styles.subtasksList}>
                                        {task.subtasks.map(subtask => (
                                            <div key={subtask.id} className={styles.subtaskItem}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', padding: 'var(--space-1) 0' }}>
                                                    {subtask.isCompleted ? (
                                                        <CheckCircle2 size={14} color="var(--color-success)" />
                                                    ) : (
                                                        <Circle size={14} color="var(--color-text-muted)" />
                                                    )}
                                                    <span style={{
                                                        fontSize: 'var(--font-size-sm)',
                                                        textDecoration: subtask.isCompleted ? 'line-through' : 'none',
                                                        color: subtask.isCompleted ? 'var(--color-text-muted)' : 'var(--color-text-primary)'
                                                    }}>
                                                        {subtask.title}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
