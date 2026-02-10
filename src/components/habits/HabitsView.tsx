// ============================================
// LifeHub - HabitsView Component
// ============================================

import React from 'react';
import { useTaskStore } from '../../stores/taskStore';
import { TaskList } from '../tasks/TaskList';
import { Button } from '../common';
import { Plus, Repeat } from 'lucide-react';
import styles from './HabitsView.module.css';

interface HabitsViewProps {
    onTaskClick: (id: string) => void;
    onCreateTask: () => void;
}

export const HabitsView: React.FC<HabitsViewProps> = ({ onTaskClick, onCreateTask }) => {
    const { tasks } = useTaskStore();

    const habits = tasks.filter(task => task.taskType === 'habit');

    const handleCreateHabit = () => {
        onCreateTask();
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleSection}>
                    <h1 className={styles.title}>Habits &amp; Routines</h1>
                    <p className={styles.subtitle}>Build consistency with recurring tasks</p>
                </div>
                <Button
                    variant="primary"
                    leftIcon={<Plus size={20} />}
                    onClick={handleCreateHabit}
                >
                    New Habit
                </Button>
            </div>

            {habits.length === 0 ? (
                <div className={styles.emptyState}>
                    <Repeat size={48} />
                    <p>No habits defined yet.</p>
                    <p>Create a task and set its type to "Habit" to see it here.</p>
                </div>
            ) : (
                <TaskList
                    tasks={habits}
                    onTaskClick={onTaskClick}
                />
            )}
        </div>
    );
};

export default HabitsView;
