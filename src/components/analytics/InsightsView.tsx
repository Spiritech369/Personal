import React, { useEffect } from 'react';
import { useAnalyticsStore } from '../../stores/analyticsStore';
import { WeeklyChart } from './WeeklyChart';
import { ProductivityHeatmap } from './ProductivityHeatmap';
import { EnergyDistribution } from './EnergyDistribution';
import { LifeAreaBreakdown } from './LifeAreaBreakdown';
import styles from './InsightsView.module.css';

export const InsightsView: React.FC = () => {
    const {
        loadAnalytics,
        getTotalCompletedThisWeek,
        getProductivityStreak,
        completionHistory
    } = useAnalyticsStore();

    useEffect(() => {
        loadAnalytics();
    }, [loadAnalytics]);

    const totalCompleted = completionHistory.length;
    const weeklyTotal = getTotalCompletedThisWeek();
    const streak = getProductivityStreak();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Insights</h1>
                <p className={styles.subtitle}>Track your productivity and life balance</p>
            </div>

            {/* Key Metrics */}
            <div className={styles.metricsGrid}>
                <div className={styles.metricCard}>
                    <span className={styles.metricValue}>{weeklyTotal}</span>
                    <span className={styles.metricLabel}>Tasks This Week</span>
                </div>
                <div className={styles.metricCard}>
                    <span className={styles.metricValue}>{streak} 🔥</span>
                    <span className={styles.metricLabel}>Day Streak</span>
                </div>
                <div className={styles.metricCard}>
                    <span className={styles.metricValue}>{totalCompleted}</span>
                    <span className={styles.metricLabel}>Total Completed</span>
                </div>
            </div>

            {/* Activity Charts */}
            <div className={styles.section}>
                <div className={styles.chartsGrid}>
                    <WeeklyChart />
                    <ProductivityHeatmap />
                </div>
            </div>

            {/* Balance Charts */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Life Balance</h2>
                <div className={styles.chartsGrid}>
                    <EnergyDistribution />
                    <LifeAreaBreakdown />
                </div>
            </div>
        </div>
    );
};
