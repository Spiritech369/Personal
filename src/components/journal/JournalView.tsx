
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../common';
import { JournalList } from './JournalList';
import { JournalEntryModal } from './JournalEntryModal';
import { useTaskStore } from '../../stores/taskStore';
import type { JournalEntry } from '../../types';
import styles from './JournalView.module.css';

export const JournalView: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { addTask } = useTaskStore();

    const handleConvertToTask = (entry: JournalEntry) => {
        if (entry.type !== 'brain_dump') return;

        const content = (entry.content as any).text || '';
        const title = content.split('\n')[0].slice(0, 50) + (content.length > 50 ? '...' : '');

        const newTask = {
            title: title,
            description: content,
            status: 'todo' as const,
            priority: 'medium' as const,
            projectId: 'default',
            subtasks: [],
            tags: ['from-journal'],
            isArchived: false,
            timeEstimate: 30,
            energyRequired: 'medium' as const,
            recurring: 'none' as const,
            reminder: null,
            impact: 'medium' as const,
            lifeArea: null,
            mentalLevel: 'analytical' as const,
            taskType: 'task' as const,
            reward: null,
            dependencies: [],
            isTimerRunning: false,
            timeSpent: 0,
            timeEntries: [],
            dueDate: null,
            dueTime: null
        };

        addTask(newTask);
        alert('Task created from journal entry!');
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Strategic Journal</h1>
                    <p className={styles.subtitle}>Clarity, Decisions, and Focus.</p>
                </div>
                <Button
                    variant="primary"
                    leftIcon={<Plus size={20} />}
                    onClick={() => setIsModalOpen(true)}
                >
                    New Entry
                </Button>
            </div>

            <div className={styles.content}>
                <JournalList onConvertToTask={handleConvertToTask} />
            </div>

            {isModalOpen && (
                <JournalEntryModal isOpen={true} onClose={() => setIsModalOpen(false)} />
            )}
        </div>
    );
};
