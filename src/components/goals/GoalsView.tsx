// ============================================
// LifeHub - GoalsView Component
// ============================================

import React, { useEffect, useState } from 'react';
import { useGoalStore } from '../../stores/goalStore';
import { GoalCard } from './GoalCard';
import { GoalTreeView } from './GoalTreeView';
import { GoalDetailModal } from './GoalDetailModal';
import { Button } from '../common';
import { Plus, LayoutGrid, ListTree } from 'lucide-react';
import type { Goal } from '../../types';
import styles from './GoalsView.module.css';

export const GoalsView: React.FC = () => {
    const { goals, loadGoals, isLoading } = useGoalStore();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
    const [viewMode, setViewMode] = useState<'grid' | 'tree'>('grid');

    useEffect(() => {
        loadGoals();
    }, [loadGoals]);

    const handleGoalClick = (id: string) => {
        const goal = goals.find((g) => g.id === id);
        if (goal) {
            setSelectedGoal(goal);
            setIsModalOpen(true);
        }
    };

    const handleAddGoal = () => {
        setSelectedGoal(null);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedGoal(null);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleSection}>
                    <h1 className={styles.title}>Your Goals</h1>
                    <p className={styles.subtitle}>Define, track, and achieve your dreams</p>
                </div>

                <div className={styles.controls}>
                    <div className={styles.viewToggle}>
                        <button
                            className={`${styles.toggleBtn} ${viewMode === 'grid' ? styles.active : ''}`}
                            onClick={() => setViewMode('grid')}
                            title="Grid View"
                        >
                            <LayoutGrid size={18} />
                            <span>Cards</span>
                        </button>
                        <button
                            className={`${styles.toggleBtn} ${viewMode === 'tree' ? styles.active : ''}`}
                            onClick={() => setViewMode('tree')}
                            title="Hierarchy View"
                        >
                            <ListTree size={18} />
                            <span>Tree</span>
                        </button>
                    </div>

                    <Button
                        variant="primary"
                        leftIcon={<Plus size={20} />}
                        onClick={handleAddGoal}
                    >
                        New Goal
                    </Button>
                </div>
            </div>

            {isLoading ? (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                    Loading goals...
                </div>
            ) : (
                <>
                    {viewMode === 'grid' ? (
                        goals.length > 0 ? (
                            <div className={styles.grid}>
                                {goals.map((goal) => (
                                    <GoalCard
                                        key={goal.id}
                                        goal={goal}
                                        onClick={() => handleGoalClick(goal.id)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className={styles.emptyState}>
                                <div style={{ fontSize: '40px', marginBottom: '1rem' }}>🎯</div>
                                <h3>No goals yet</h3>
                                <p>Start by creating your first big goal.</p>
                            </div>
                        )
                    ) : (
                        <GoalTreeView />
                    )}
                </>
            )}

            <GoalDetailModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                goal={selectedGoal}
            />
        </div>
    );
};

export default GoalsView;
