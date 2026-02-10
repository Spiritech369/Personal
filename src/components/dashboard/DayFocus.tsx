import React, { useState, useEffect } from 'react';
import { Target, Battery, BatteryMedium, BatteryLow, Play, CheckCircle2 } from 'lucide-react';
import { useTaskStore } from '../../stores/taskStore';
import { Button, Card } from '../common';
import type { Task, EnergyLevel } from '../../types';
import { ENERGY_LABELS } from '../../types';
import styles from './DayFocus.module.css';

interface DayFocusProps {
    onTaskClick: (taskId: string) => void;
}

export const DayFocus: React.FC<DayFocusProps> = ({ onTaskClick }) => {
    const { tasks, startTimer, toggleTaskStatus } = useTaskStore();
    const [energy, setEnergy] = useState<EnergyLevel>('medium');
    const [focusTask, setFocusTask] = useState<Task | null>(null);

    // Find the most important task for today
    useEffect(() => {
        const today = new Date().toDateString();

        // 1. High impact & Urgent priority tasks due today
        const urgentToday = tasks.filter(t =>
            t.status !== 'done' &&
            t.dueDate && new Date(t.dueDate).toDateString() === today &&
            (t.priority === 'urgent' || t.priority === 'high')
        );

        if (urgentToday.length > 0) {
            setFocusTask(urgentToday[0]);
            return;
        }

        // 2. High impact tasks matching current energy
        const exactMatch = tasks.filter(t =>
            t.status !== 'done' &&
            t.energyRequired === energy &&
            t.impact === 'high'
        );

        if (exactMatch.length > 0) {
            setFocusTask(exactMatch[0]);
            return;
        }

        // 3. Fallback: Any high priority task
        const fallback = tasks.filter(t =>
            t.status !== 'done' &&
            t.priority === 'high'
        );

        if (fallback.length > 0) {
            setFocusTask(fallback[0]);
        } else {
            setFocusTask(null);
        }
    }, [tasks, energy]);

    const handleEnergyChange = (level: EnergyLevel) => {
        setEnergy(level);
    };

    const getEnergyIcon = (level: EnergyLevel) => {
        switch (level) {
            case 'high': return <Battery className={styles.iconHigh} />;
            case 'medium': return <BatteryMedium className={styles.iconMedium} />;
            case 'low': return <BatteryLow className={styles.iconLow} />;
        }
    };

    return (
        <Card variant="elevated" className={styles.container}>
            <div className={styles.header}>
                <div className={styles.energySelector}>
                    <span className={styles.label}>Nivel de Energía:</span>
                    <div className={styles.buttons}>
                        {(['high', 'medium', 'low'] as EnergyLevel[]).map((level) => (
                            <button
                                key={level}
                                className={`${styles.energyBtn} ${energy === level ? styles.active : ''} ${styles[level]}`}
                                onClick={() => handleEnergyChange(level)}
                            >
                                {getEnergyIcon(level)}
                                <span className={styles.btnText}>{ENERGY_LABELS[level]}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.focusLabel}>
                    <Target size={20} className={styles.targetIcon} />
                    <h3>Foco Principal del Día</h3>
                </div>

                {focusTask ? (
                    <div className={styles.taskCard}>
                        <div className={styles.taskInfo} onClick={() => onTaskClick(focusTask.id)}>
                            <h2 className={styles.taskTitle}>{focusTask.title}</h2>
                            {focusTask.timeEstimate && (
                                <span className={styles.timeEstimate}>
                                    ⏱️ {focusTask.timeEstimate} min
                                </span>
                            )}
                        </div>

                        <div className={styles.actions}>
                            {focusTask.isTimerRunning ? (
                                <Button
                                    variant="primary"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onTaskClick(focusTask.id);
                                    }}
                                >
                                    Ver Timer
                                </Button>
                            ) : (
                                <Button
                                    variant="primary"
                                    leftIcon={<Play size={16} />}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        startTimer(focusTask.id);
                                    }}
                                >
                                    Empezar Ahora
                                </Button>
                            )}

                            <button
                                className={styles.doneBtn}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleTaskStatus(focusTask.id);
                                }}
                            >
                                <CheckCircle2 size={24} />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className={styles.emptyState}>
                        <p>🎉 ¡No hay tareas urgentes! Disfruta tu día o selecciona tareas del backlog.</p>
                    </div>
                )}
            </div>
        </Card>
    );
};
