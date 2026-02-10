import { create } from 'zustand';
import type { Review, ReviewType, ID } from '../types';
import { generateId, getCurrentTimestamp } from '../utils/helpers';
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../utils/storage';

interface ReviewState {
    reviews: Review[];
    currentReview: Review | null;
    isLoading: boolean;
}

interface ReviewActions {
    startReview: (type: ReviewType) => void;
    saveAnswer: (questionId: string, value: string | number | boolean | string[]) => void;
    completeReview: () => void;
    cancelReview: () => void;
    loadReviews: () => void;
    getReviewByDate: (date: string, type: ReviewType) => Review | undefined;
    deleteReview: (id: ID) => void;
}

type ReviewStore = ReviewState & ReviewActions;

const initialState: ReviewState = {
    reviews: [],
    currentReview: null,
    isLoading: false,
};

export const useReviewStore = create<ReviewStore>((set, get) => ({
    ...initialState,

    loadReviews: () => {
        const stored = getStorageItem<Review[]>(STORAGE_KEYS.REVIEWS, []);
        set({ reviews: stored });
    },

    deleteReview: (id: ID) => {
        set((state) => {
            const updatedReviews = state.reviews.filter(r => r.id !== id);
            setStorageItem(STORAGE_KEYS.REVIEWS, updatedReviews);
            return { reviews: updatedReviews };
        });
    },

    startReview: (type: ReviewType) => {
        const timestamp = getCurrentTimestamp();
        const newReview: Review = {
            id: generateId(),
            type,
            date: timestamp,
            status: 'in_progress',
            answers: [],
            completedAt: null,
            createdAt: timestamp,
            updatedAt: timestamp,
        };
        set({ currentReview: newReview });
    },

    saveAnswer: (questionId: string, value: string | number | boolean | string[]) => {
        set((state) => {
            if (!state.currentReview) return state;

            const existingAnswerIndex = state.currentReview.answers.findIndex(a => a.questionId === questionId);
            const newAnswers = [...state.currentReview.answers];

            if (existingAnswerIndex >= 0) {
                newAnswers[existingAnswerIndex] = { questionId, value };
            } else {
                newAnswers.push({ questionId, value });
            }

            return {
                currentReview: {
                    ...state.currentReview,
                    answers: newAnswers,
                    updatedAt: getCurrentTimestamp(),
                },
            };
        });
    },

    completeReview: () => {
        set((state) => {
            if (!state.currentReview) return state;

            const completedReview: Review = {
                ...state.currentReview,
                status: 'completed',
                completedAt: getCurrentTimestamp(),
                updatedAt: getCurrentTimestamp(),
            };

            const updatedReviews = [...state.reviews, completedReview];
            setStorageItem(STORAGE_KEYS.REVIEWS, updatedReviews);

            return {
                reviews: updatedReviews,
                currentReview: null,
            };
        });
    },

    cancelReview: () => {
        set({ currentReview: null });
    },

    getReviewByDate: (date: string, type: ReviewType) => {
        // Simple check if a review of this type exists around this date
        // For now just exact match or logic to be improved
        return get().reviews.find(r => r.type === type && r.createdAt.startsWith(date.split('T')[0]));
    },
}));
