
import React, { useMemo, useState } from 'react';
import {
    Search,
    ChevronRight,
    ChevronDown,
    BookOpen,
    BrainCircuit,
    Lightbulb,
    Target
} from 'lucide-react';
import { useJournalStore } from '../../stores/journalStore';
import { Card } from '../common';
import type { JournalEntry, JournalEntryType } from '../../types';
import styles from './JournalList.module.css';

interface JournalListProps {
    onEntryClick?: (entry: JournalEntry) => void;
    onConvertToTask?: (entry: JournalEntry) => void;
}

export const JournalList: React.FC<JournalListProps> = ({ onEntryClick, onConvertToTask }) => {
    const { entries } = useJournalStore();
    const [filterType, setFilterType] = useState<JournalEntryType | 'all'>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedDates, setExpandedDates] = useState<Record<string, boolean>>({});

    const filteredEntries = useMemo(() => {
        return entries
            .filter(e => {
                if (filterType !== 'all' && e.type !== filterType) return false;
                if (searchQuery) {
                    const query = searchQuery.toLowerCase();
                    // Basic search in content based on type
                    if (e.type === 'brain_dump' && (e.content as any).text.toLowerCase().includes(query)) return true;
                    if (e.type === 'daily_clarity' && (e.content as any).bigWin?.toLowerCase().includes(query)) return true;
                    if (e.type === 'decision_log' && (e.content as any).decision?.toLowerCase().includes(query)) return true;
                    return false;
                }
                return true;
            })
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }, [entries, filterType, searchQuery]);

    // Group by Date
    const groupedEntries = useMemo(() => {
        const groups: Record<string, JournalEntry[]> = {};
        filteredEntries.forEach(entry => {
            const date = new Date(entry.createdAt).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            if (!groups[date]) groups[date] = [];
            groups[date].push(entry);
        });
        return groups;
    }, [filteredEntries]);

    const toggleDate = (date: string) => {
        setExpandedDates(prev => ({
            ...prev,
            [date]: !prev[date]
        }));
    };

    const getIcon = (type: JournalEntryType) => {
        switch (type) {
            case 'daily_clarity': return <Lightbulb size={16} className="text-accent" />;
            case 'decision_log': return <Target size={16} className="text-secondary" />;
            case 'brain_dump': return <BrainCircuit size={16} className="text-blue-400" />;
        }
    };

    const getTitle = (entry: JournalEntry) => {
        switch (entry.type) {
            case 'daily_clarity': return 'Daily Clarity';
            case 'decision_log': return (entry.content as any).decision || 'Decision Log';
            case 'brain_dump': return (entry.content as any).text.slice(0, 50) + '...' || 'Brain Dump';
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Journal Entries</h2>
                <div className={styles.controls}>
                    <div className={styles.searchWrapper}>
                        <Search size={16} className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Search entries..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={styles.searchInput}
                        />
                    </div>
                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value as any)}
                        className={styles.filterSelect}
                    >
                        <option value="all">All Types</option>
                        <option value="daily_clarity">Daily Clarity</option>
                        <option value="decision_log">Decision Logs</option>
                        <option value="brain_dump">Brain Dumps</option>
                    </select>
                </div>
            </div>

            <div className={styles.list}>
                {Object.keys(groupedEntries).length === 0 ? (
                    <div className={styles.emptyState}>
                        <BookOpen size={48} />
                        <p>No journal entries found</p>
                    </div>
                ) : (
                    Object.entries(groupedEntries).map(([date, dateEntries]) => (
                        <div key={date} className={styles.dateGroup}>
                            <div
                                className={styles.dateHeader}
                                onClick={() => toggleDate(date)}
                            >
                                <div className={styles.dateTitle}>
                                    {expandedDates[date] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                    <span>{date}</span>
                                    <span className={styles.countBadge}>{dateEntries.length}</span>
                                </div>
                            </div>

                            {/* Always expanded by default, or use state. defaulting to expanded for now logic adjustment needed if I want collapse */}
                            <div className={styles.entriesList}>
                                {dateEntries.map(entry => (
                                    <Card
                                        key={entry.id}
                                        variant="default"
                                        padding="sm"
                                        className={styles.entryCard}
                                        onClick={() => onEntryClick?.(entry)}
                                    >
                                        <div className={styles.entryHeader}>
                                            <div className={styles.entryIconWrapper}>
                                                {getIcon(entry.type)}
                                            </div>
                                            <span className={styles.entryTitle}>{getTitle(entry)}</span>
                                            <span className={styles.entryTime}>
                                                {new Date(entry.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                        <div className={styles.entryPreview}>
                                            {/* Preview content based on type */}
                                            {entry.type === 'daily_clarity' && (
                                                <div className={styles.previewTags}>
                                                    <span className={styles.moodTag}>Mood: {(entry.content as any).mood}</span>
                                                    <span>Win: {(entry.content as any).bigWin}</span>
                                                </div>
                                            )}
                                            {/* Convert to Task Action for Brain Dump */}
                                            {entry.type === 'brain_dump' && (
                                                <div className={styles.previewTags}>
                                                    <span className={styles.moodTag} style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}>
                                                        Brain Dump
                                                    </span>
                                                    <button
                                                        className={styles.convertBtn}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            onConvertToTask?.(entry);
                                                        }}
                                                        title="Convert to Task"
                                                    >
                                                        <Target size={12} />
                                                        Convert
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
