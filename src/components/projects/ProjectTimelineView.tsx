import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Calendar } from 'lucide-react';
import type { Task, ID } from '../../types';
import { IconButton } from '../common';
import { isOverdue, isTaskBlocked } from '../../utils/helpers';
import styles from './ProjectTimelineView.module.css';

interface ProjectTimelineViewProps {
    tasks: Task[];
    onTaskClick: (taskId: ID) => void;
}

type ZoomLevel = 'week' | 'month';

export const ProjectTimelineView: React.FC<ProjectTimelineViewProps> = ({ tasks, onTaskClick }) => {
    const [zoomLevel, setZoomLevel] = useState<ZoomLevel>('week');
    const [currentDate, setCurrentDate] = useState(new Date());

    // Configuration based on zoom level
    const config = useMemo(() => {
        return zoomLevel === 'week'
            ? { cellWidth: 50, daysToShow: 14 }
            : { cellWidth: 30, daysToShow: 30 };
    }, [zoomLevel]);

    // Calculate timeline range
    const startDate = useMemo(() => {
        const date = new Date(currentDate);
        date.setDate(date.getDate() - 2); // Start a bit before
        return date;
    }, [currentDate]);

    const dates = useMemo(() => {
        const days = [];
        for (let i = 0; i < config.daysToShow; i++) {
            const date = new Date(startDate);
            date.setDate(date.getDate() + i);
            days.push(date);
        }
        return days;
    }, [startDate, config.daysToShow]);

    // Helper to get position for a date
    const getPosition = (dateStr: string | null) => {
        if (!dateStr) return 0;
        const date = new Date(dateStr);
        const diffTime = date.getTime() - startDate.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays * config.cellWidth;
    };

    const handlePrev = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() - (zoomLevel === 'week' ? 7 : 14));
        setCurrentDate(newDate);
    };

    const handleNext = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + (zoomLevel === 'week' ? 7 : 14));
        setCurrentDate(newDate);
    };

    const handleToday = () => {
        setCurrentDate(new Date());
    };

    return (
        <div className={styles.container}>
            {/* Toolbar */}
            <div className={styles.toolbar}>
                <div className={styles.controls}>
                    <IconButton
                        icon={<ChevronLeft size={16} />}
                        onClick={handlePrev}
                        tooltip="Previous"
                    />
                    <IconButton
                        icon={<Calendar size={16} />}
                        onClick={handleToday}
                        tooltip="Jump to Today"
                        variant="ghost"
                    />
                    <IconButton
                        icon={<ChevronRight size={16} />}
                        onClick={handleNext}
                        tooltip="Next"
                    />
                    <span style={{ fontWeight: 500, fontSize: '14px', marginLeft: 8 }}>
                        {startDate.toLocaleDateString()} - {dates[dates.length - 1].toLocaleDateString()}
                    </span>
                </div>
                <div className={styles.controls}>
                    <IconButton
                        icon={zoomLevel === 'week' ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
                        onClick={() => setZoomLevel(prev => prev === 'week' ? 'month' : 'week')}
                        tooltip={zoomLevel === 'week' ? "Switch to Month View" : "Switch to Week View"}
                    />
                </div>
            </div>

            {/* Timeline Area */}
            <div className={styles.timelineScrollArea}>
                <div
                    className={styles.timelineGrid}
                    style={{ width: dates.length * config.cellWidth }}
                >
                    {/* Header */}
                    <div className={styles.timelineHeader}>
                        {dates.map((date, index) => {
                            const isToday = date.toDateString() === new Date().toDateString();
                            return (
                                <div
                                    key={index}
                                    className={`${styles.headerCell} ${isToday ? styles.todayHeader : ''}`}
                                    style={{ width: config.cellWidth }}
                                >
                                    {zoomLevel === 'week'
                                        ? date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' })
                                        : date.getDate()
                                    }
                                </div>
                            );
                        })}
                    </div>

                    {/* Today Line Indicator */}
                    {(() => {
                        const todayPos = getPosition(new Date().toISOString());
                        if (todayPos >= 0 && todayPos <= dates.length * config.cellWidth) {
                            return <div className={styles.todayLine} style={{ left: todayPos + (config.cellWidth / 2) }} />;
                        }
                        return null;
                    })()}

                    {/* Task Rows */}
                    {tasks.map(task => {
                        // Determine start and end
                        // If no start date logic exists, use createdAt or calculate from due date
                        const start = task.createdAt || new Date().toISOString();
                        const end = task.dueDate || start; // Simplified for now

                        const left = getPosition(start);
                        const right = getPosition(end);
                        let width = Math.max(config.cellWidth, right - left);

                        // Prevent off-screen negative widths handled by positioning
                        if (left < 0) {
                            // Trim if starts before view
                            // width += left; // Reduce width
                            // left = 0; 
                            // Simple clipping for MVP: hide if completely out, or clamp
                        }

                        // Status styling
                        const isDone = task.status === 'done';
                        const isBlockedTask = isTaskBlocked(task, tasks);
                        const isOverdueTask = task.dueDate && isOverdue(task.dueDate) && !isDone;

                        let statusClass = '';
                        if (isDone) statusClass = styles.done;
                        else if (isBlockedTask) statusClass = styles.blocked;
                        else if (isOverdueTask) statusClass = styles.overdue;

                        return (
                            <div key={task.id} className={styles.taskRow}>
                                <div
                                    className={`${styles.taskBar} ${statusClass}`}
                                    style={{
                                        left: Math.max(0, left),
                                        width,
                                        opacity: left + width < 0 || left > dates.length * config.cellWidth ? 0 : 1
                                    }}
                                    onClick={() => onTaskClick(task.id)}
                                    title={`${task.title} (${new Date(start).toLocaleDateString()} - ${new Date(end).toLocaleDateString()})`}
                                >
                                    <span className={styles.taskBarTitle}>{task.title}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
