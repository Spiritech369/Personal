import { ID, Timestamp, Mood } from './index';

export interface WeeklyReview {
    id: ID;
    date: Timestamp; // Date the review was performed
    weekStartDate: string; // YYYY-MM-DD of the Monday of the week being reviewed
    weekNumber: number;
    year: number;

    // Reflections
    wins: string[]; // Top 3 wins
    challenges: string[]; // What didn't go well
    learnings: string; // Key takeaway

    // Metrics
    rating: number; // 1-5 stars
    mood: Mood;

    // Planning
    nextWeekGoalIds: ID[]; // Goals to focus on next week

    createdAt: Timestamp;
}

export type ReviewFormData = Omit<WeeklyReview, 'id' | 'createdAt'>;
