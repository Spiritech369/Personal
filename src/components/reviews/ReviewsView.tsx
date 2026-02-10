
import React, { useState } from 'react';
import { Plus, Calendar, CheckCircle } from 'lucide-react';
import { useReviewStore } from '../../stores/reviewStore';
import { ReviewWizard } from './ReviewWizard';
import { Card, Button } from '../common';
import styles from './ReviewsView.module.css';

export const ReviewsView: React.FC = () => {
    const { reviews, deleteReview } = useReviewStore();
    const [isWizardOpen, setIsWizardOpen] = useState(false);

    const sortedReviews = [...reviews].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Reviews</h1>
                    <p className={styles.subtitle}>Reflect, Learn, and Plan.</p>
                </div>
                <Button
                    variant="primary"
                    leftIcon={<Plus size={20} />}
                    onClick={() => setIsWizardOpen(true)}
                >
                    Start Review
                </Button>
            </div>

            <div className={styles.content}>
                {sortedReviews.length === 0 ? (
                    <div className={styles.emptyState}>
                        <Calendar size={48} className={styles.emptyIcon} />
                        <h3>No reviews yet</h3>
                        <p>Complete your first review to start tracking your progress.</p>
                        <Button variant="secondary" onClick={() => setIsWizardOpen(true)}>
                            Start Now
                        </Button>
                    </div>
                ) : (
                    <div className={styles.grid}>
                        {sortedReviews.map((review) => (
                            <Card key={review.id} className={styles.card} variant="default" padding="md">
                                <div className={styles.cardHeader}>
                                    <div className={styles.typeTag}>
                                        {review.type.charAt(0).toUpperCase() + review.type.slice(1)} Review
                                    </div>
                                    <span className={styles.date}>{formatDate(review.createdAt)}</span>
                                </div>

                                <div className={styles.status}>
                                    <CheckCircle size={16} className={review.status === 'completed' ? styles.completedIcon : ''} />
                                    <span>{review.status === 'completed' ? 'Completed' : 'In Progress'}</span>
                                </div>

                                <div className={styles.stats}>
                                    <span>{review.answers.length} Questions Answered</span>
                                </div>

                                <div className={styles.actions}>
                                    <button
                                        className={styles.deleteBtn}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (confirm('Delete this review?')) deleteReview(review.id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </div>

            {isWizardOpen && (
                <ReviewWizard type="weekly" onClose={() => setIsWizardOpen(false)} />
            )}
        </div>
    );
};
