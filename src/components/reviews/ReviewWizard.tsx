
import React, { useState, useMemo } from 'react';
import {
    X,
    Sparkles,
    AlertTriangle,
    Target
} from 'lucide-react';
import { useReviewStore } from '../../stores/reviewStore';
import { useTaskStore } from '../../stores/taskStore';
import { useProjectStore } from '../../stores/projectStore';
import { IconButton, Button } from '../common';
import { calculateProjectHealth } from '../../utils/helpers';
import type { ReviewQuestion, ReviewType } from '../../types';
import styles from './ReviewWizard.module.css';

// Structured Prompt Sets
const WEEKLY_QUESTIONS: ReviewQuestion[] = [
    {
        id: 'advanced_income',
        text: 'What advanced income or leverage this week?',
        type: 'text',
        category: 'reflection'
    },
    {
        id: 'noise',
        text: 'What was noise/distraction?',
        type: 'text',
        category: 'reflection'
    },
    {
        id: 'eliminated',
        text: 'What should be eliminated?',
        type: 'text',
        category: 'system'
    },
    {
        id: 'next_priority',
        text: 'What is the single priority for next week?',
        type: 'text',
        category: 'planning'
    }
];

const MONTHLY_QUESTIONS: ReviewQuestion[] = [
    {
        id: 'goal_progress',
        text: 'Goal progress vs expectation?',
        type: 'text',
        category: 'reflection'
    },
    {
        id: 'time_vs_impact',
        text: 'Time vs Impact analysis (80/20 rule)',
        type: 'text',
        category: 'reflection'
    },
    {
        id: 'bottlenecks',
        text: 'What bottlenecks were detected?',
        type: 'text',
        category: 'system'
    },
    {
        id: 'strategic_adjustment',
        text: 'One strategic adjustment for next month',
        type: 'text',
        category: 'planning'
    }
];

const QUARTERLY_QUESTIONS: ReviewQuestion[] = [
    {
        id: 'goals_valid',
        text: 'Are your goals still valid?',
        type: 'text',
        category: 'reflection'
    },
    {
        id: 'system_redesign',
        text: 'What part of the system needs redesign?',
        type: 'text',
        category: 'system'
    },
    {
        id: 'double_down',
        text: 'What to double down on?',
        type: 'text',
        category: 'planning'
    }
];

interface WizardStep {
    id: string;
    title: string;
    question?: ReviewQuestion;
}

interface ReviewWizardProps {
    type: ReviewType;
    onClose: () => void;
}

export const ReviewWizard: React.FC<ReviewWizardProps> = ({ type, onClose }) => {
    const { currentReview, saveAnswer, completeReview } = useReviewStore();
    const { tasks } = useTaskStore();
    const { projects } = useProjectStore();
    const [currentStep, setCurrentStep] = useState(0);

    // Filter tasks/projects for insights
    const insights = useMemo(() => {
        const completedTasks = tasks.filter(t => t.status === 'done'); // Simplified: should filter by date range
        const stalledProjects = projects.filter(p => !p.isArchived && calculateProjectHealth(tasks.filter(t => t.projectId === p.id)) !== 'on_track');
        return {
            completedCount: completedTasks.length,
            stalledCount: stalledProjects.length,
            stalledProjects
        };
    }, [tasks, projects]);

    const questions = useMemo(() => {
        switch (type) {
            case 'quarterly': return QUARTERLY_QUESTIONS;
            case 'monthly': return MONTHLY_QUESTIONS;
            case 'weekly': default: return WEEKLY_QUESTIONS;
        }
    }, [type]);

    const steps: WizardStep[] = [
        { id: 'overview', title: `${type.charAt(0).toUpperCase() + type.slice(1)} Overview` },
        ...questions.map(q => ({ id: q.id, title: q.text, question: q })),
        { id: 'summary', title: 'Summary' }
    ];

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            completeReview();
            onClose();
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleAnswerChange = (value: string) => {
        const step = steps[currentStep];
        if (step.question) {
            saveAnswer(step.question.id, value);
        }
    };

    const getCurrentAnswer = () => {
        const step = steps[currentStep];
        if (step.question) {
            return currentReview?.answers.find(a => a.questionId === step.question!.id)?.value as string || '';
        }
        return '';
    };

    // Render Steps
    const renderContent = () => {
        if (currentStep === 0) {
            return (
                <div className={styles.overviewStep}>
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>{insights.completedCount}</span>
                            <span className={styles.statLabel}>Tasks Completed</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>{insights.stalledCount}</span>
                            <span className={styles.statLabel}>Projects At Risk</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>{projects.length}</span>
                            <span className={styles.statLabel}>Active Projects</span>
                        </div>
                    </div>

                    {insights.stalledProjects.length > 0 && (
                        <div className={styles.suggestionPanel}>
                            <div className={styles.suggestionTitle}>
                                <AlertTriangle size={18} />
                                <span>Attention Needed</span>
                            </div>
                            <ul className={styles.suggestionList}>
                                {insights.stalledProjects.map(p => (
                                    <li key={p.id} className={styles.suggestionItem}>
                                        <Target size={14} />
                                        <span>{p.name}</span>
                                        <span style={{ opacity: 0.7 }}>- {calculateProjectHealth(tasks.filter(t => t.projectId === p.id)).replace('_', ' ')}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            );
        }

        const step = steps[currentStep];
        if (step.question) {
            return (
                <div className={styles.questionSection}>
                    <label className={styles.questionLabel}>{step.question.text}</label>
                    <textarea
                        className={styles.textarea}
                        value={getCurrentAnswer()}
                        onChange={(e) => handleAnswerChange(e.target.value)}
                        placeholder="Type your reflection here..."
                        autoFocus
                    />
                </div>
            );
        }

        // Summary Step
        return (
            <div className={styles.summaryStep}>
                <h3 className={styles.questionLabel}>Review Complete!</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                    You've reflected on your week and planned for the next.
                    Click "Finish" to save your review.
                </p>
                {/* Could show summary of answers here */}
            </div>
        );
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.titleContainer}>
                        <Sparkles className="text-accent" size={24} />
                        <div>
                            <h2 className={styles.title}>{type.charAt(0).toUpperCase() + type.slice(1)} Review</h2>
                            <span className={styles.subtitle}>{steps[currentStep].title}</span>
                        </div>
                    </div>
                    <IconButton icon={<X size={20} />} onClick={onClose} tooltip="Close" />
                </div>

                {/* Content */}
                <div className={styles.content}>
                    {renderContent()}
                </div>

                {/* Footer */}
                <div className={styles.footer}>
                    <Button
                        disabled={currentStep === 0}
                        onClick={handlePrev}
                        variant="secondary"
                    >
                        Back
                    </Button>

                    <div className={styles.progressContainer}>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progressFill}
                                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                            />
                        </div>
                        <span className={styles.stepCounter}>{currentStep + 1} / {steps.length}</span>
                    </div>

                    <Button onClick={handleNext} variant="primary">
                        {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </div>
            </div>
        </div>
    );
};
