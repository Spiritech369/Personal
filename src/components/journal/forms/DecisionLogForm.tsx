
import React, { useState } from 'react';
import { Save, Calendar } from 'lucide-react';
import { Button, Input, TextArea } from '../../common';
import { useJournalStore } from '../../../stores/journalStore';
import type { JournalContentDecisionLog } from '../../../types';
import styles from './Forms.module.css';

interface DecisionLogFormProps {
    onClose: () => void;
}

export const DecisionLogForm: React.FC<DecisionLogFormProps> = ({ onClose }) => {
    const { addEntry } = useJournalStore();
    const [formData, setFormData] = useState<JournalContentDecisionLog>({
        decision: '',
        context: '',
        expectedOutcome: '',
        confidenceLevel: 7,
        reviewDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    });
    const [tags, setTags] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        addEntry({
            type: 'decision_log',
            title: formData.decision,
            content: formData,
            tags: tags.split(',').map(t => t.trim()).filter(Boolean),
            linkedItemIds: [],
            timestamp: new Date().toISOString(),
        });

        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.section}>
                <h3>Decision Made</h3>
                <Input
                    value={formData.decision}
                    onChange={(e) => setFormData({ ...formData, decision: e.target.value })}
                    placeholder="e.g., Switch to new marketing agency..."
                    autoFocus
                />
            </div>

            <div className={styles.section}>
                <h3>Context / Why?</h3>
                <TextArea
                    value={formData.context}
                    onChange={(e) => setFormData({ ...formData, context: e.target.value })}
                    placeholder="Background info, options considered..."
                    rows={4}
                />
            </div>

            <div className={styles.section}>
                <h3>Expected Outcome</h3>
                <TextArea
                    value={formData.expectedOutcome}
                    onChange={(e) => setFormData({ ...formData, expectedOutcome: e.target.value })}
                    placeholder="What does success look like?"
                    rows={3}
                />
            </div>

            <div className={styles.section}>
                <h3>Confidence Level (1-10)</h3>
                <div className={styles.sliderContainer}>
                    <input
                        type="range"
                        min="1"
                        max="10"
                        value={formData.confidenceLevel}
                        onChange={(e) => setFormData({ ...formData, confidenceLevel: parseInt(e.target.value) })}
                        className={styles.slider}
                    />
                    <span className={styles.sliderValue}>{formData.confidenceLevel}</span>
                </div>
            </div>

            <div className={styles.section}>
                <h3>Review Date</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Calendar size={16} className="text-muted" />
                    <Input
                        type="date"
                        value={formData.reviewDate.split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, reviewDate: new Date(e.target.value).toISOString() })}
                        style={{ maxWidth: 200 }}
                    />
                    <span className="text-sm text-muted">
                        (Default: 14 days)
                    </span>
                </div>
            </div>

            <div className={styles.section}>
                <h3>Tags</h3>
                <Input
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Business, Strategy, Hiring..."
                />
            </div>

            <div className={styles.actions}>
                <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
                <Button type="submit" variant="primary" style={{ gap: 8 }}>
                    <Save size={16} />
                    Log Decision
                </Button>
            </div>
        </form>
    );
};
