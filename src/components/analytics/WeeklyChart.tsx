import React from 'react';
import { useAnalyticsStore } from '../../stores/analyticsStore';
import styles from './WeeklyChart.module.css';

interface WeeklyChartProps {
    label?: string;
}

export const WeeklyChart: React.FC<WeeklyChartProps> = ({
    label = 'Tasks Completed',
}) => {
    const { dailyStats } = useAnalyticsStore();

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    // Get last 7 days
    const getWeekData = () => {
        const result = [];
        const today = new Date();
        const maxVal = Math.max(...dailyStats.slice(-7).map(d => d.completed), 1);

        for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            const dateKey = date.toISOString().split('T')[0];
            const dayIndex = (date.getDay() + 6) % 7; // Monday = 0

            const found = dailyStats.find(d => d.date === dateKey);
            result.push({
                day: days[dayIndex],
                value: found?.completed || 0,
                date: dateKey,
                isToday: i === 0,
                max: maxVal
            });
        }

        return result;
    };

    const weekData = getWeekData();
    const total = weekData.reduce((sum, d) => sum + d.value, 0);
    const max = Math.max(...weekData.map(d => d.value), 1); // Recalculate max based on current view

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.title}>{label}</h3>
                <span className={styles.total}>{total} this week</span>
            </div>

            <div className={styles.chart}>
                {weekData.map((item, index) => (
                    <div key={index} className={styles.barContainer}>
                        <div className={styles.barWrapper}>
                            <div
                                className={`${styles.bar} ${item.isToday ? styles.today : ''}`}
                                style={{
                                    height: `${(item.value / max) * 100}%`,
                                    minHeight: item.value > 0 ? '8px' : '2px',
                                }}
                            >
                                {item.value > 0 && (
                                    <span className={styles.value}>{item.value}</span>
                                )}
                            </div>
                        </div>
                        <span className={`${styles.label} ${item.isToday ? styles.todayLabel : ''}`}>
                            {item.day}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeeklyChart;
