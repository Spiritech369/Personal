import React from 'react';
import { useAnalyticsStore } from '../../stores/analyticsStore';
import styles from './ProductivityHeatmap.module.css';

interface ProductivityHeatmapProps {
    weeks?: number;
}

export const ProductivityHeatmap: React.FC<ProductivityHeatmapProps> = ({
    weeks = 12,
}) => {
    const { dailyStats } = useAnalyticsStore();

    // Convert dailyStats to format expected by logic
    const data = dailyStats.map(s => ({ date: s.date, value: s.completed }));

    const days = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

    // Generate grid data for last N weeks
    const generateGrid = () => {
        const grid: { date: string; value: number; month?: string }[][] = [];
        const today = new Date();
        const totalDays = weeks * 7;

        // Start from (weeks) weeks ago, on a Sunday
        const startDate = new Date(today);
        startDate.setDate(today.getDate() - totalDays + (7 - today.getDay()));

        let currentWeek: { date: string; value: number; month?: string }[] = [];
        let currentMonth = '';

        for (let i = 0; i < totalDays; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            const dateKey = date.toISOString().split('T')[0];

            const found = data.find(d => d.date === dateKey);
            const monthName = date.toLocaleDateString('en-US', { month: 'short' });

            const cell: { date: string; value: number; month?: string } = {
                date: dateKey,
                value: found?.value || 0,
            };

            // Add month label at start of month
            if (monthName !== currentMonth && date.getDate() <= 7) {
                cell.month = monthName;
                currentMonth = monthName;
            }

            currentWeek.push(cell);

            if (currentWeek.length === 7) {
                grid.push(currentWeek);
                currentWeek = [];
            }
        }

        if (currentWeek.length > 0) {
            grid.push(currentWeek);
        }

        return grid;
    };

    const grid = generateGrid();
    const maxValue = Math.max(...data.map(d => d.value), 1);

    const getLevel = (value: number): number => {
        if (value === 0) return 0;
        const ratio = value / maxValue;
        if (ratio <= 0.25) return 1;
        if (ratio <= 0.5) return 2;
        if (ratio <= 0.75) return 3;
        return 4;
    };

    const totalTasks = data.reduce((sum, d) => sum + d.value, 0);
    const activeDays = data.filter(d => d.value > 0).length;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.title}>Activity Heatmap</h3>
                <div className={styles.stats}>
                    <span>{totalTasks} tasks</span>
                    <span className={styles.separator}>•</span>
                    <span>{activeDays} active days</span>
                </div>
            </div>

            <div className={styles.heatmap}>
                <div className={styles.dayLabels}>
                    {days.map((day, i) => (
                        <span key={i} className={styles.dayLabel}>{day}</span>
                    ))}
                </div>

                <div className={styles.grid}>
                    {/* Month labels */}
                    <div className={styles.monthLabels}>
                        {grid.map((week, i) => {
                            const monthCell = week.find(d => d.month);
                            return (
                                <span key={i} className={styles.monthLabel}>
                                    {monthCell?.month || ''}
                                </span>
                            );
                        })}
                    </div>

                    {/* Grid cells */}
                    <div className={styles.weeks}>
                        {grid.map((week, weekIndex) => (
                            <div key={weekIndex} className={styles.week}>
                                {week.map((cell, dayIndex) => (
                                    <div
                                        key={dayIndex}
                                        className={`${styles.cell} ${styles[`level${getLevel(cell.value)}`]}`}
                                        title={`${cell.date}: ${cell.value} tasks`}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Legend */}
                <div className={styles.legend}>
                    <span className={styles.legendLabel}>Less</span>
                    <div className={`${styles.cell} ${styles.level0}`} />
                    <div className={`${styles.cell} ${styles.level1}`} />
                    <div className={`${styles.cell} ${styles.level2}`} />
                    <div className={`${styles.cell} ${styles.level3}`} />
                    <div className={`${styles.cell} ${styles.level4}`} />
                    <span className={styles.legendLabel}>More</span>
                </div>
            </div>
        </div>
    );
};

export default ProductivityHeatmap;
