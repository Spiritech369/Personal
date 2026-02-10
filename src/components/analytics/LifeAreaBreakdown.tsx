import React from 'react';
import { useAnalyticsStore } from '../../stores/analyticsStore';
import { LIFE_AREA_LABELS, LifeArea } from '../../types';
import styles from './LifeAreaBreakdown.module.css';

export const LifeAreaBreakdown: React.FC = () => {
    const { getLifeAreaDistribution } = useAnalyticsStore();
    const distribution = getLifeAreaDistribution();

    const total = Object.values(distribution).reduce((sum, count) => sum + count, 0);
    const maxVal = Math.max(...Object.values(distribution));

    if (total === 0) {
        return (
            <div className={styles.container}>
                <h3 className={styles.title}>Life Area Focus</h3>
                <div className={styles.emptyState}>No confirmed tasks yet</div>
            </div>
        );
    }

    // Colors mapping
    const colors: Record<LifeArea, string> = {
        money: '#10b981',        // Green
        health: '#ef4444',       // Red
        growth: '#3b82f6',       // Blue
        relationships: '#ec4899', // Pink
        order: '#6b7280',        // Gray
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Life Area Focus</h3>

            <div className={styles.chart}>
                {(Object.keys(LIFE_AREA_LABELS) as LifeArea[]).map(area => {
                    const count = distribution[area] || 0;
                    const percentage = maxVal > 0 ? (count / maxVal) * 100 : 0;

                    return (
                        <div key={area} className={styles.barRow}>
                            <span className={styles.label}>{LIFE_AREA_LABELS[area]}</span>
                            <div className={styles.barContainer}>
                                <div
                                    className={styles.bar}
                                    style={{
                                        width: `${percentage}%`,
                                        background: colors[area]
                                    }}
                                />
                            </div>
                            <span className={styles.value}>{count}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
