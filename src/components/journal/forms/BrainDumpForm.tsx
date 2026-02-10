
import React, { useState } from 'react';
import { Save, Sparkles } from 'lucide-react';
import { Button, Input, TextArea } from '../../common';
import { useJournalStore } from '../../../stores/journalStore';
import type { JournalContentBrainDump } from '../../../types';
import styles from './Forms.module.css';

interface BrainDumpFormProps {
    onClose: () => void;
}

export const BrainDumpForm: React.FC<BrainDumpFormProps> = ({ onClose }) => {
    const { addEntry } = useJournalStore();
    const [formData, setFormData] = useState<JournalContentBrainDump>({
        text: '',
    });
    const [tags, setTags] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        addEntry({
            type: 'brain_dump',
            title: `Brain Dump - ${new Date().toLocaleTimeString()}`,
            content: formData,
            tags: tags.split(',').map(t => t.trim()).filter(Boolean),
            linkedItemIds: [] as string[],
            timestamp: new Date().toISOString(),
        });

        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.section}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>Free Flow</h3>
                    <Button type="button" variant="ghost" size="sm" style={{ gap: 6, fontSize: 12 }}>
                        <Sparkles size={14} className="text-accent" />
                        Convert to Tasks (Coming Soon)
                    </Button>
                </div>
                <TextArea
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    placeholder="Get everything out of your head..."
                    rows={12}
                    autoFocus
                />
            </div>

            <div className={styles.section}>
                <h3>Tags</h3>
                <Input
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Ideas, Worries, Random..."
                />
            </div>

            <div className={styles.actions}>
                <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
                <Button type="submit" variant="primary" style={{ gap: 8 }}>
                    <Save size={16} />
                    Save Dump
                </Button>
            </div>
        </form>
    );
};
