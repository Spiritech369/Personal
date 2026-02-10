import React, { useEffect, useRef } from 'react';
import { useNotificationStore } from '../../stores/notificationStore';
import { useTaskStore } from '../../stores/taskStore';
import { useRoutineStore } from '../../stores/routineStore';
import { sendNotification, checkPermission } from '../../utils/notifications';
import { sendWhatsAppMessage } from '../../services/whatsapp';

export const NotificationManager: React.FC = () => {
    const { settings, setPermission } = useNotificationStore();
    const { tasks } = useTaskStore();
    const { routines } = useRoutineStore();

    // Track sent notifications to avoid spamming
    const sentNotificationIds = useRef<Set<string>>(new Set());

    // Check permission on mount
    useEffect(() => {
        setPermission(checkPermission());
    }, [setPermission]);

    // Main Logic Loop
    useEffect(() => {
        if (!settings.enabled) return;

        const checkNotifications = () => {
            const now = new Date();
            const currentHour = now.getHours();
            const currentMinute = now.getMinutes();
            const timeString = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
            const todayStr = todayDateString();

            // 1. Check Quiet Mode/Hours
            if (settings.quietMode) return;

            const startHour = parseInt(settings.quietHoursStart.split(':')[0]);
            const endHour = parseInt(settings.quietHoursEnd.split(':')[0]);

            // Simple quiet hour check (handles overnight e.g. 22:00 -> 07:00)
            let isQuietTime = false;
            if (startHour > endHour) {
                if (currentHour >= startHour || currentHour < endHour) isQuietTime = true;
            } else {
                if (currentHour >= startHour && currentHour < endHour) isQuietTime = true;
            }

            if (isQuietTime) return;

            // 2. overdue Tasks
            if (settings.contexts.tasks) {
                tasks.forEach(task => {
                    if (task.status === 'done' || !task.dueTime || !task.dueDate) return;

                    // Check if due date is today
                    const taskDate = new Date(task.dueDate);
                    const today = new Date();
                    if (taskDate.toDateString() !== today.toDateString()) return;

                    if (task.dueTime === timeString) {
                        const notificationId = `task-${task.id}-${timeString}`;
                        if (!sentNotificationIds.current.has(notificationId)) {
                            const title = `Task Due: ${task.title}`;
                            const body = `It's time to work on: ${task.title}`;

                            // Browser
                            sendNotification(title, {
                                body,
                                tag: notificationId
                            });

                            // WhatsApp
                            if (settings.whatsapp.enabled && settings.whatsapp.apiKey && settings.whatsapp.phoneNumber) {
                                sendWhatsAppMessage(`*${title}*\n${body}`, settings.whatsapp);
                            }

                            sentNotificationIds.current.add(notificationId);
                        }
                    }
                });
            }

            // 3. Routines Suggestions (Simple hardcoded logic for now based on title)
            if (settings.contexts.routines) {
                // Morning Logic (e.g. 7 AM)
                if (timeString === '07:00') {
                    const morningRoutine = routines.find(r => r.title.toLowerCase().includes('morning'));
                    if (morningRoutine) {
                        const notificationId = `routine-${morningRoutine.id}-${todayStr}`;
                        if (!sentNotificationIds.current.has(notificationId) && !isRoutineCompletedToday(morningRoutine)) {
                            const title = '☀️ Good Morning!';
                            const body = 'Ready to start your Morning Ritual?';

                            sendNotification(title, {
                                body,
                                tag: notificationId
                            });

                            if (settings.whatsapp.enabled && settings.whatsapp.apiKey && settings.whatsapp.phoneNumber) {
                                sendWhatsAppMessage(`*${title}*\n${body}`, settings.whatsapp);
                            }

                            sentNotificationIds.current.add(notificationId);
                        }
                    }
                }

                // Night Logic (e.g. 9 PM)
                if (timeString === '21:00') {
                    const nightRoutine = routines.find(r => r.title.toLowerCase().includes('night'));
                    if (nightRoutine) {
                        const notificationId = `routine-${nightRoutine.id}-${todayStr}`;
                        if (!sentNotificationIds.current.has(notificationId) && !isRoutineCompletedToday(nightRoutine)) {
                            const title = '🌙 Time to Wind Down';
                            const body = 'Ready for your Night Routine?';

                            sendNotification(title, {
                                body,
                                tag: notificationId
                            });

                            if (settings.whatsapp.enabled && settings.whatsapp.apiKey && settings.whatsapp.phoneNumber) {
                                sendWhatsAppMessage(`*${title}*\n${body}`, settings.whatsapp);
                            }

                            sentNotificationIds.current.add(notificationId);
                        }
                    }
                }
            }
        };

        // Run check every minute
        const interval = setInterval(checkNotifications, 60000);

        // Also run immediately on mount/settings change
        checkNotifications();

        return () => clearInterval(interval);
    }, [settings, tasks, routines]);

    return null; // Headless
};

// Helper
const todayDateString = () => new Date().toISOString().split('T')[0];

const isRoutineCompletedToday = (routine: any) => {
    if (!routine.lastCompleted) return false;
    const lastDate = new Date(routine.lastCompleted);
    const today = new Date();
    return lastDate.toDateString() === today.toDateString();
};
