// ============================================
// LifeHub - GoalCard Component
// ============================================

import React from 'react';
import {
    Calendar,
    Target,
    Zap,
    Heart,
    Brain,
    DollarSign,
    Users,
    Package,
    Trophy,
    Activity,
    Languages,
    LucideIcon,
} from 'lucide-react';
import type { Goal } from '../../types';
import { formatDate } from '../../utils/helpers';
import { LIFE_AREA_LABELS } from '../../types';
import styles from './GoalCard.module.css';

interface GoalCardProps {
    goal: Goal;
    onClick: () => void;
}

export const GoalCard: React.FC<GoalCardProps> = ({ goal, onClick }) => {

    // Map of icon names to components
    const IconMap: Record<string, LucideIcon> = {
        Run: Activity,
        DollarSign: DollarSign,
        Languages: Languages,
        Target: Target,
        Zap: Zap,
        Heart: Heart,
        Brain: Brain,
        Users: Users,
        Package: Package,
        Trophy: Trophy,
    };

    // Helper to get icon based on goal.icon or LifeArea
    const getIcon = () => {
        // Try specific icon first
        if (goal.icon && IconMap[goal.icon]) {
            const Icon = IconMap[goal.icon];
            return <Icon size={24} />;
        }

        // Fallback to LifeArea
        switch (goal.lifeArea) {
            case 'health': return <Activity size={24} />;
            case 'money': return <DollarSign size={24} />;
            case 'growth': return <Brain size={24} />;
            case 'relationships': return <Users size={24} />;
            case 'order': return <Package size={24} />;
            default: return <Target size={24} />;
        }
    };

    const getStatusLabel = (status: string) => {
        return status.replace('_', ' ');
    };

    const deadlineDate = goal.deadline ? new Date(goal.deadline) : null;
    const isOverdue = deadlineDate && deadlineDate < new Date() && goal.status !== 'achieved';

    return (
        <div className={styles.card} onClick={onClick}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.iconWrapper}>
                    {getIcon()}
                </div>
                <div className={styles.titleSection}>
                    <h3 className={styles.title}>{goal.title}</h3>
                    <div className={styles.area}>
                        {LIFE_AREA_LABELS[goal.lifeArea]}
                    </div>
                </div>
            </div>

            {/* Vision */}
            {goal.vision && (
                <p className={styles.vision}>"{goal.vision}"</p>
            )}

            {/* Progress */}
            <div className={styles.progressSection}>
                <div className={styles.progressLabel}>
                    <span>Progress</span>
                    <span>{goal.progress}%</span>
                </div>
                <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        style={{ width: `${goal.progress}%` }}
                    />
                </div>
            </div>

            {/* Meta */}
            <div className={styles.meta}>
                <div className={`${styles.status} ${styles[goal.status]}`}>
                    {getStatusLabel(goal.status)}
                </div>

                {goal.deadline && (
                    <div className={`${styles.date} ${isOverdue ? styles.overdue : ''}`}>
                        <Calendar size={14} />
                        {formatDate(goal.deadline)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GoalCard;
