import React from 'react';
import {
    History,
    Plus,
    Edit2,
    Trash2,
    Archive,
    RotateCcw
} from 'lucide-react';
import { useHistoryStore } from '../../stores/historyStore';
import type { ID, HistoryTarget, HistoryEntry, HistoryAction } from '../../types';
import styles from './HistoryLog.module.css';

interface HistoryLogProps {
    targetId?: ID;
    targetType?: HistoryTarget;
}

export const HistoryLog: React.FC<HistoryLogProps> = ({ targetId, targetType }) => {
    const { getHistory } = useHistoryStore();
    const history = getHistory(targetId, targetType);

    if (history.length === 0) {
        return (
            <div className={styles.emptyState}>
                <History size={24} style={{ marginBottom: 8, opacity: 0.5 }} />
                <p>No activity history found.</p>
            </div>
        );
    }

    const getActionIcon = (action: HistoryAction) => {
        switch (action) {
            case 'create': return <Plus size={14} />;
            case 'update': return <Edit2 size={12} />;
            case 'delete': return <Trash2 size={12} />;
            case 'archive': return <Archive size={12} />;
            case 'restore': return <RotateCcw size={12} />;
            default: return <History size={12} />;
        }
    };

    const getActionLabel = (entry: HistoryEntry) => {
        switch (entry.action) {
            case 'create': return `Created ${entry.targetType}`;
            case 'update': return `Updated ${entry.targetType}`;
            case 'delete': return `Deleted ${entry.targetType}`;
            case 'archive': return `Archived ${entry.targetType}`;
            default: return `Changed ${entry.targetType}`;
        }
    };

    const formatValue = (val: any) => {
        if (val === null || val === undefined) return 'empty';
        if (typeof val === 'object') return JSON.stringify(val); // Simplified for arrays/objects
        return String(val);
    };

    return (
        <div className={styles.container}>
            <div className={styles.timeline}>
                {history.map(entry => (
                    <div key={entry.id} className={`${styles.entryItem} ${styles[entry.action]}`}>
                        <div className={styles.entryIcon}>
                            {getActionIcon(entry.action)}
                        </div>
                        <div className={styles.entryContent}>
                            <div className={styles.entryHeader}>
                                <span className={styles.entryTitle}>
                                    {getActionLabel(entry)}
                                    {!targetId && <span style={{ fontWeight: 400 }}>: {entry.targetName}</span>}
                                </span>
                                <span className={styles.entryTime}>
                                    {new Date(entry.timestamp).toLocaleString()}
                                </span>
                            </div>

                            {entry.changes && entry.changes.length > 0 && (
                                <div className={styles.changesList}>
                                    {entry.changes.map((change, i) => (
                                        <div key={i} className={styles.changeItem}>
                                            <span className={styles.fieldName}>{change.field}:</span>
                                            <span className={styles.oldValue}>{formatValue(change.oldValue)}</span>
                                            <span style={{ margin: '0 4px' }}>→</span>
                                            <span className={styles.newValue}>{formatValue(change.newValue)}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
