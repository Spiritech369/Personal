import React, { useState } from 'react';
import { Target, Brain, Lightbulb, BookOpen } from 'lucide-react';
import { Modal } from '../common';
import { useTaskStore } from '../../stores/taskStore';
import { DailyClarityForm } from './forms/DailyClarityForm';
import { DecisionLogForm } from './forms/DecisionLogForm';
import { BrainDumpForm } from './forms/BrainDumpForm';
import { JournalList } from './JournalList';
import type { JournalEntry, JournalEntryType } from '../../types';
import styles from './JournalEntryModal.module.css';

interface JournalEntryModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialType?: JournalEntryType | 'history';
}

export const JournalEntryModal: React.FC<JournalEntryModalProps> = ({ isOpen, onClose, initialType = 'daily_clarity' }) => {
    const [activeType, setActiveType] = useState<JournalEntryType | 'history'>(initialType);
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

    const tabs = [
        { id: 'daily_clarity', label: 'Daily Clarity', icon: <Target size={18} /> },
        { id: 'decision_log', label: 'Decision Log', icon: <Brain size={18} /> },
        { id: 'brain_dump', label: 'Brain Dump', icon: <Lightbulb size={18} /> },
        { id: 'history', label: 'History', icon: <BookOpen size={18} /> },
    ];

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Strategic Journal" size="lg">
            <div className={styles.container}>
                {/* Tabs */}
                <div className={styles.tabs}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`${styles.tab} ${activeType === tab.id ? styles.activeTab : ''}`}
                            onClick={() => setActiveType(tab.id as any)}
                        >
                            {tab.icon}
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className={styles.content}>
                    {activeType === 'daily_clarity' && <DailyClarityForm onClose={onClose} />}
                    {activeType === 'decision_log' && <DecisionLogForm onClose={onClose} />}
                    {activeType === 'brain_dump' && <BrainDumpForm onClose={onClose} />}
                    {activeType === 'history' && <JournalList onConvertToTask={handleConvertToTask} />}
                </div>
            </div>
        </Modal>
    );
};
