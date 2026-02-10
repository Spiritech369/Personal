import React from 'react';
import { TrendingUp } from 'lucide-react';
import { useTaskStore } from '../../stores/taskStore';
import { Card } from '../common';
import styles from './TemporalSummary.module.css';

export const TemporalSummary: React.FC = () => {
    const { tasks } = useTaskStore();

    // Helper to check same day
    const isSameDay = (d1: Date, d2: Date) =>
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();

    // Get date ranges
    const today = new Date();

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const lastWeekStart = new Date(today);
    lastWeekStart.setDate(lastWeekStart.getDate() - 7);

    // Calculate stats
    const completedToday = tasks.filter(t =>
        t.status === 'done' &&
        t.completedAt &&
        isSameDay(new Date(t.completedAt), today)
    ).length;

    const completedYesterday = tasks.filter(t =>
        t.status === 'done' &&
        t.completedAt &&
        isSameDay(new Date(t.completedAt), yesterday)
    ).length;

    const completedLastWeek = tasks.filter(t =>
        t.status === 'done' &&
        t.completedAt &&
        new Date(t.completedAt) > lastWeekStart &&
        new Date(t.completedAt) < today
    ).length;

    const avgDailyLastWeek = Math.round(completedLastWeek / 7);

    // Determine trend
    const trend = completedToday >= avgDailyLastWeek ? 'up' : 'down';

    return (
        <Card variant="default" className={styles.container}>
            <div className={styles.header}>
                <TrendingUp size={18} className={styles.icon} />
                <h3>Productivity Trend</h3>
            </div>

            <div className={styles.grid}>
                <div className={styles.statItem}>
                    <span className={styles.label}>Last Week (Avg)</span>
                    <span className={styles.value}>{avgDailyLastWeek}</span>
                    <span className={styles.subtext}>tasks/day</span>
                </div>

                <div className={styles.divider} />

                <div className={styles.statItem}>
                    <span className={styles.label}>Yesterday</span>
                    <span className={styles.value}>{completedYesterday}</span>
                    <span className={styles.subtext}>tasks</span>
                </div>

                <div className={styles.divider} />

                <div className={`${styles.statItem} ${styles.today}`}>
                    <span className={styles.label}>Today</span>
                    <span className={styles.value}>{completedToday}</span>
                    <span className={styles.subtext}>
                        {trend === 'up' ? '🔥 On Fire' : '⚡ Keep Going'}
                    </span>
                </div>
            </div>
        </Card>
    );
};
