import React from 'react';
import { useAnalyticsStore } from '../../stores/analyticsStore';
import { ENERGY_LABELS, EnergyLevel } from '../../types';
import styles from './EnergyDistribution.module.css';

export const EnergyDistribution: React.FC = () => {
    const { getEnergyDistribution } = useAnalyticsStore();
    const distribution = getEnergyDistribution();

    const total = Object.values(distribution).reduce((sum, count) => sum + count, 0);

    if (total === 0) {
        return (
            <div className={styles.container}>
                <h3 className={styles.title}>Energy Distribution</h3>
                <div className={styles.emptyState}>No confirmed tasks yet</div>
            </div>
        );
    }

    // Colors mapping
    const colors: Record<EnergyLevel, string> = {
        high: '#ef4444',   // Red
        medium: '#eab308', // Yellow
        low: '#22c55e',    // Green
    };

    // Calculate segments for conic-gradient
    let currentDeg = 0;
    const segments = (Object.keys(distribution) as EnergyLevel[]).map(level => {
        const count = distribution[level];
        const degrees = (count / total) * 360;
        const color = colors[level];
        const segmentStr = `${color} ${currentDeg}deg ${currentDeg + degrees}deg`;
        currentDeg += degrees;
        return segmentStr;
    });

    const gradient = `conic-gradient(${segments.join(', ')})`;

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Energy Distribution</h3>

            <div
                className={styles.chartContainer}
                style={{ background: gradient }}
            >
                <div className={styles.centerText}>
                    <span className={styles.totalValue}>{total}</span>
                    <span className={styles.totalLabel}>Tasks</span>
                </div>
            </div>

            <div className={styles.legend}>
                {(Object.keys(distribution) as EnergyLevel[]).map(level => (
                    <div key={level} className={styles.legendItem}>
                        <div
                            className={styles.dot}
                            style={{ background: colors[level] }}
                        />
                        <span>{ENERGY_LABELS[level].split(' ')[1]}</span>
                        <span style={{ color: 'var(--color-text-muted)' }}>
                            ({Math.round((distribution[level] / total) * 100)}%)
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
