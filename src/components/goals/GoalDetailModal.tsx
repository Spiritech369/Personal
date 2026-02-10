// ============================================
// LifeHub - GoalDetailModal Component
// ============================================

import React, { useState, useEffect } from 'react';
import {
    X,
    Trash2,
    Calendar,
    Target,
    Heart,
    Activity,
    Save,
} from 'lucide-react';
import type { Goal, GoalFormData, LifeArea, GoalStatus, GoalTimeline, ID } from '../../types';
import { useGoalStore } from '../../stores/goalStore';
import { LIFE_AREA_LABELS } from '../../types';
import { Button, Modal } from '../common';
import styles from './GoalDetailModal.module.css';

interface GoalDetailModalProps {
    goal: Goal | null; // null for new goal
    isOpen: boolean;
    onClose: () => void;
}

export const GoalDetailModal: React.FC<GoalDetailModalProps> = ({
    goal,
    isOpen,
    onClose,
}) => {
    const { goals: allGoals, addGoal, updateGoal, deleteGoal } = useGoalStore();

    // Local state
    const [title, setTitle] = useState('');
    const [vision, setVision] = useState('');
    const [description, setDescription] = useState('');
    const [lifeArea, setLifeArea] = useState<LifeArea>('growth');
    const [status, setStatus] = useState<GoalStatus>('not_started');
    const [progress, setProgress] = useState(0);
    const [deadline, setDeadline] = useState('');
    const [icon, setIcon] = useState('');
    const [parentId, setParentId] = useState<ID | null>(null);
    const [timeline, setTimeline] = useState<GoalTimeline>('year');
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    // Sync state with goal prop
    useEffect(() => {
        if (goal) {
            setTitle(goal.title);
            setVision(goal.vision || '');
            setDescription(goal.description || '');
            setLifeArea(goal.lifeArea);
            setStatus(goal.status);
            setProgress(goal.progress);
            setDeadline(goal.deadline ? goal.deadline.split('T')[0] : '');
            setIcon(goal.icon || '');
            setParentId(goal.parentId);
            setTimeline(goal.timeline);
            setShowDeleteConfirm(false);
        } else {
            // Defaults for new goal
            setTitle('');
            setVision('');
            setDescription('');
            setLifeArea('growth');
            setStatus('not_started');
            setProgress(0);
            setDeadline('');
            setIcon('');
            setParentId(null);
            setTimeline('year');
            setShowDeleteConfirm(false);
        }
    }, [goal, isOpen]);

    const handleSave = () => {
        if (!title.trim()) return;

        const goalData: GoalFormData = {
            title: title.trim(),
            vision: vision.trim(),
            description: description.trim(),
            lifeArea,
            status,
            deadline: deadline ? new Date(deadline).toISOString() : null,
            parentId,
            timeline,
            icon: icon.trim(),
            progress,
        };

        if (goal) {
            updateGoal(goal.id, goalData);
        } else {
            addGoal(goalData);
        }
        onClose();
    };

    const handleDelete = () => {
        if (goal) {
            deleteGoal(goal.id);
            onClose();
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={goal ? 'Edit Goal' : 'New Goal'} size="lg" showCloseButton={false}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <input
                        className={styles.titleInput}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Goal Title"
                        autoFocus
                    />
                    <button className={styles.closeBtn} onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className={styles.content}>
                    {/* Main Column */}
                    <div className={styles.mainColumn}>

                        {/* Vision */}
                        <div className={styles.section}>
                            <label className={styles.label}>
                                <Target size={16} /> Vision (The Why)
                            </label>
                            <textarea
                                className={styles.textarea}
                                value={vision}
                                onChange={(e) => setVision(e.target.value)}
                                placeholder="Why is this goal important? What is the desired outcome?"
                                rows={2}
                            />
                        </div>

                        {/* Description */}
                        <div className={styles.section}>
                            <label className={styles.label}>Description</label>
                            <textarea
                                className={styles.textarea}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Details about execution..."
                                rows={4}
                            />
                        </div>

                    </div>

                    {/* Meta Column */}
                    <div className={styles.metaColumn}>

                        {/* Parent Goal */}
                        <div className={styles.metaItem}>
                            <label className={styles.label}>Parent Goal</label>
                            <select
                                className={styles.select}
                                value={parentId || ''}
                                onChange={(e) => setParentId(e.target.value || null)}
                            >
                                <option value="">None (Top Level)</option>
                                {allGoals
                                    .filter(g => g.id !== goal?.id) // Prevent self-parenting
                                    .map(g => (
                                        <option key={g.id} value={g.id}>{g.title}</option>
                                    ))
                                }
                            </select>
                        </div>

                        {/* Timeline */}
                        <div className={styles.metaItem}>
                            <label className={styles.label}>Timeline</label>
                            <select
                                className={styles.select}
                                value={timeline}
                                onChange={(e) => setTimeline(e.target.value as GoalTimeline)}
                            >
                                <option value="q1">Q1</option>
                                <option value="q2">Q2</option>
                                <option value="q3">Q3</option>
                                <option value="q4">Q4</option>
                                <option value="year">Next Year</option>
                                <option value="5_years">5 Years</option>
                                <option value="lifetime">Lifetime</option>
                            </select>
                        </div>

                        {/* Status */}
                        <div className={styles.metaItem}>
                            <label className={styles.label}>Status</label>
                            <select
                                className={styles.select}
                                value={status}
                                onChange={(e) => setStatus(e.target.value as GoalStatus)}
                            >
                                <option value="not_started">Not Started</option>
                                <option value="in_progress">In Progress</option>
                                <option value="paused">Paused</option>
                                <option value="achieved">Achieved</option>
                                <option value="dropped">Dropped</option>
                            </select>
                        </div>

                        {/* Life Area */}
                        <div className={styles.metaItem}>
                            <label className={styles.label}>
                                <Heart size={16} /> Life Area
                            </label>
                            <select
                                className={styles.select}
                                value={lifeArea}
                                onChange={(e) => setLifeArea(e.target.value as LifeArea)}
                            >
                                {Object.entries(LIFE_AREA_LABELS).map(([key, label]) => (
                                    <option key={key} value={key}>{label}</option>
                                ))}
                            </select>
                        </div>

                        {/* Progress */}
                        {goal && (
                            <div className={styles.metaItem}>
                                <label className={styles.label}>
                                    <Activity size={16} /> Progress
                                </label>
                                <div className={styles.sliderContainer}>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={progress}
                                        onChange={(e) => setProgress(Number(e.target.value))}
                                        className={styles.slider}
                                    />
                                    <span className={styles.progressValue}>{progress}%</span>
                                </div>
                            </div>
                        )}

                        {/* Deadline */}
                        <div className={styles.metaItem}>
                            <label className={styles.label}>
                                <Calendar size={16} /> Deadline
                            </label>
                            <input
                                type="date"
                                className={styles.input}
                                value={deadline}
                                onChange={(e) => setDeadline(e.target.value)}
                            />
                        </div>

                        {/* Icon Name (Optional) */}
                        <div className={styles.metaItem}>
                            <label className={styles.label}>Icon Name</label>
                            <input
                                type="text"
                                className={styles.input}
                                value={icon}
                                onChange={(e) => setIcon(e.target.value)}
                                placeholder="e.g. DollarSign"
                            />
                        </div>

                    </div>
                </div>

                {/* Footer */}
                <div className={styles.footer}>
                    {goal ? (
                        showDeleteConfirm ? (
                            <div className={styles.deleteConfirm}>
                                <span>Delete this goal?</span>
                                <Button variant="danger" size="sm" onClick={handleDelete}>
                                    Yes, Delete
                                </Button>
                                <Button variant="ghost" size="sm" onClick={() => setShowDeleteConfirm(false)}>
                                    Cancel
                                </Button>
                            </div>
                        ) : (
                            <Button
                                variant="ghost"
                                leftIcon={<Trash2 size={16} />}
                                onClick={() => setShowDeleteConfirm(true)}
                            >
                                Delete
                            </Button>
                        )
                    ) : (
                        <div /> // Spacer
                    )}

                    <div className={styles.footerActions}>
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleSave} leftIcon={<Save size={16} />}>
                            Save Goal
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default GoalDetailModal;
