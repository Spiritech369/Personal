import React, { useState } from 'react';
import { X, Wand2, Battery, Clock, ArrowRight } from 'lucide-react';
import { useTaskStore } from '../../stores/taskStore';
import { IconButton, Button } from '../common';
import { findOptimalTasks } from '../../utils/helpers';
import type { Task, ID } from '../../types';
import styles from './DecisionModal.module.css';

interface DecisionModalProps {
    onClose: () => void;
    onSelectTask: (taskId: ID) => void;
}

export const DecisionModal: React.FC<DecisionModalProps> = ({ onClose, onSelectTask }) => {
    const { tasks } = useTaskStore();
    const [step, setStep] = useState<'input' | 'results'>('input');
    const [energy, setEnergy] = useState<'high' | 'medium' | 'low'>('medium');
    const [time, setTime] = useState<number>(60); // minutes
    const [suggestions, setSuggestions] = useState<Task[]>([]);

    const handleMagic = () => {
        const results = findOptimalTasks(tasks, { energyLevel: energy, timeAvailable: time });
        setSuggestions(results);
        setStep('results');
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.closeButton}>
                        <IconButton icon={<X size={20} />} onClick={onClose} />
                    </div>
                    <div className={styles.iconWrapper}>
                        <Wand2 size={24} />
                    </div>
                    <h2 className={styles.title}>
                        {step === 'input' ? 'What should I do?' : 'Best options for you'}
                    </h2>
                    <p className={styles.subtitle}>
                        {step === 'input'
                            ? 'Tell me a bit about your current context.'
                            : `Based on ${energy} energy and ${time}m available.`}
                    </p>
                </div>

                <div className={styles.content}>
                    {step === 'input' ? (
                        <>
                            {/* Energy Selection */}
                            <div className={styles.section}>
                                <label className={styles.label}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                        <Battery size={16} /> How is your energy?
                                    </div>
                                </label>
                                <div className={styles.energyGrid}>
                                    <div
                                        className={`${styles.optionCard} ${energy === 'high' ? styles.selected : ''}`}
                                        onClick={() => setEnergy('high')}
                                    >
                                        <span className={styles.emoji}>⚡</span>
                                        <span className={styles.optionLabel}>High</span>
                                    </div>
                                    <div
                                        className={`${styles.optionCard} ${energy === 'medium' ? styles.selected : ''}`}
                                        onClick={() => setEnergy('medium')}
                                    >
                                        <span className={styles.emoji}>🙂</span>
                                        <span className={styles.optionLabel}>Medium</span>
                                    </div>
                                    <div
                                        className={`${styles.optionCard} ${energy === 'low' ? styles.selected : ''}`}
                                        onClick={() => setEnergy('low')}
                                    >
                                        <span className={styles.emoji}>😴</span>
                                        <span className={styles.optionLabel}>Low</span>
                                    </div>
                                </div>
                            </div>

                            {/* Time Selection */}
                            <div className={styles.section}>
                                <label className={styles.label}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                        <Clock size={16} /> Time available?
                                    </div>
                                </label>
                                <div className={styles.timeGrid}>
                                    {[15, 30, 60, 120].map((m) => (
                                        <button
                                            key={m}
                                            className={`${styles.timeButton} ${time === m ? styles.selected : ''}`}
                                            onClick={() => setTime(m)}
                                        >
                                            {m === 120 ? '2h+' : `${m}m`}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className={styles.suggestions}>
                            {suggestions.length > 0 ? (
                                suggestions.map((task, index) => (
                                    <div
                                        key={task.id}
                                        className={styles.suggestionCard}
                                        onClick={() => {
                                            onSelectTask(task.id);
                                            onClose();
                                        }}
                                    >
                                        <div className={styles.scoreBadge}>#{index + 1}</div>
                                        <div className={styles.taskInfo}>
                                            <div className={styles.taskTitle}>{task.title}</div>
                                            <div className={styles.taskMeta}>
                                                Priority: {task.priority} • {task.timeEstimate ? `${task.timeEstimate}m` : 'No est.'}
                                            </div>
                                        </div>
                                        <ArrowRight size={16} className="text-muted" />
                                    </div>
                                ))
                            ) : (
                                <div style={{ textAlign: 'center', padding: 20, color: 'var(--color-text-secondary)' }}>
                                    No matching tasks found. Try adjusting your filters or adding new tasks.
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {step === 'input' && (
                    <div className={styles.footer}>
                        <Button
                            className={styles.magicButton}
                            onClick={handleMagic}
                            variant="primary"
                            size="lg"
                        >
                            <Wand2 size={18} />
                            Find Optimal Task
                        </Button>
                    </div>
                )}

                {step === 'results' && (
                    <div className={styles.footer}>
                        <Button
                            onClick={() => setStep('input')}
                            variant="secondary"
                        >
                            Back
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
