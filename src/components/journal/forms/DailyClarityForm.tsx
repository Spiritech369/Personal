
import React, { useState } from 'react';
import { Save } from 'lucide-react';
import { Button, Input, TextArea } from '../../common';
import { useJournalStore } from '../../../stores/journalStore';
import type { JournalContentDailyClarity, Sentiment } from '../../../types';
import styles from './Forms.module.css';

interface DailyClarityFormProps {
    onClose: () => void;
}

export const DailyClarityForm: React.FC<DailyClarityFormProps> = ({ onClose }) => {
    const { addEntry } = useJournalStore();
    const [formData, setFormData] = useState<JournalContentDailyClarity>({
        movedNeedle: '',
        blockedProgress: '',
        lessonLearned: '',
        mentalState: 'focused',
    });
    const [tags, setTags] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        addEntry({
            type: 'daily_clarity',
            title: `Daily Clarity - ${new Date().toLocaleDateString()}`,
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
                <h3>What moved the needle today?</h3>
                <TextArea
                    value={formData.movedNeedle}
                    onChange={(e) => setFormData({ ...formData, movedNeedle: e.target.value })}
                    placeholder="Focus on the 20% that created 80% of results..."
                    rows={3}
                />
            </div>

            <div className={styles.section}>
                <h3>What blocked progress?</h3>
                <TextArea
                    value={formData.blockedProgress}
                    onChange={(e) => setFormData({ ...formData, blockedProgress: e.target.value })}
                    placeholder="Distractions, lack of resources, energy dips..."
                    rows={3}
                />
            </div>

            <div className={styles.section}>
                <h3>One lesson learned</h3>
                <Input
                    value={formData.lessonLearned}
                    onChange={(e) => setFormData({ ...formData, lessonLearned: e.target.value })}
                    placeholder="Insight or takeaway for tomorrow..."
                />
            </div>

            <div className={styles.section}>
                <h3>Mental State</h3>
                <div className={styles.sentimentGrid}>
                    {(['focused', 'overloaded', 'distracted'] as Sentiment[]).map((state) => (
                        <button
                            key={state}
                            type="button"
                            className={`${styles.sentimentBtn} ${formData.mentalState === state ? styles.activeSentiment : ''}`}
                            onClick={() => setFormData({ ...formData, mentalState: state })}
                        >
                            {state === 'focused' && '🧠 Focused'}
                            {state === 'overloaded' && '😫 Overloaded'}
                            {state === 'distracted' && '😵‍💫 Distracted'}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.section}>
                <h3>Tags</h3>
                <Input
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Productivity, Health, Learning (comma separated)"
                />
            </div>

            <div className={styles.actions}>
                <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
                <Button type="submit" variant="primary" style={{ gap: 8 }}>
                    <Save size={16} />
                    Save Entry
                </Button>
            </div>
        </form>
    );
};
