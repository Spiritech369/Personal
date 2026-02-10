import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import type { Review } from '../../types';

interface WeeklyReviewProps {
  onSave: (review: Omit<Review, 'id' | 'userId' | 'createdAt' | 'updatedAt'>) => void;
}

export const WeeklyReview: React.FC<WeeklyReviewProps> = ({ onSave }) => {
  const [responses, setResponses] = useState<Record<string, string>>({
    needle: '',
    noise: '',
    eliminate: '',
    priority: '',
  });

  const prompts = [
    {
      id: 'needle',
      question: 'What advanced income or leverage this week?',
      placeholder: 'Focus on revenue, automation, or strategic moves...',
    },
    {
      id: 'noise',
      question: 'What was noise?',
      placeholder: 'Distractions, low-impact tasks, busy work...',
    },
    {
      id: 'eliminate',
      question: 'What should be eliminated?',
      placeholder: 'Tasks, meetings, commitments to drop...',
    },
    {
      id: 'priority',
      question: 'Single priority for next week?',
      placeholder: 'One thing that will move the needle...',
    },
  ];

  const handleResponseChange = (id: string, value: string) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  const handleSave = () => {
    const review: Omit<Review, 'id' | 'userId' | 'createdAt' | 'updatedAt'> = {
      type: 'weekly',
      date: new Date().toISOString(),
      status: 'completed',
      completedAt: new Date().toISOString(),
      prompts: prompts.map((p) => ({
        question: p.question,
        response: responses[p.id],
      })),
      answers: Object.entries(responses).map(([key, value]) => ({
        questionId: key,
        value,
      })),
      responses,
      conclusions: [],
      actionItems: [],
    };

    onSave(review);
  };

  const isComplete = Object.values(responses).every((r) => r.trim().length > 0);

  return (
    <div className="weekly-review">
      <div className="review-header">
        <Calendar size={28} />
        <div>
          <h2>Weekly Review</h2>
          <p>Strategic clarity for the week ahead</p>
        </div>
      </div>

      <div className="review-form">
        {prompts.map((prompt, index) => (
          <div key={prompt.id} className="prompt-group">
            <label>
              <span className="prompt-number">{index + 1}</span>
              <span className="prompt-question">{prompt.question}</span>
            </label>
            <textarea
              value={responses[prompt.id]}
              onChange={(e) => handleResponseChange(prompt.id, e.target.value)}
              placeholder={prompt.placeholder}
              rows={3}
            />
          </div>
        ))}
      </div>

      <button
        className="save-review-btn"
        onClick={handleSave}
        disabled={!isComplete}
      >
        Save Weekly Review
      </button>

      <style>{`
        .weekly-review {
          max-width: 700px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          padding: 2rem;
        }

        .review-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
        }

        .review-header h2 {
          margin: 0 0 0.25rem;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .review-header p {
          margin: 0;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .review-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .prompt-group label {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .prompt-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: rgba(255, 77, 77, 0.2);
          border-radius: 50%;
          color: #ff4d4d;
          font-weight: 700;
          font-size: 0.85rem;
          flex-shrink: 0;
        }

        .prompt-question {
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
        }

        .prompt-group textarea {
          width: 100%;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1rem;
          color: #fff;
          font-family: inherit;
          font-size: 0.95rem;
          line-height: 1.5;
          resize: vertical;
          transition: border-color 0.2s;
        }

        .prompt-group textarea:focus {
          outline: none;
          border-color: rgba(255, 77, 77, 0.5);
        }

        .prompt-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .save-review-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #ff4d4d 0%, #ff6b6b 100%);
          border: none;
          border-radius: 8px;
          color: #fff;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .save-review-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(255, 77, 77, 0.4);
        }

        .save-review-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        `}</style></div>
  );
};
