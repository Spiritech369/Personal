import React, { useState } from 'react';
import { TrendingUp, Target, AlertTriangle, Wrench } from 'lucide-react';
import type { Review } from '../../types';

interface MonthlyReviewProps {
  onSave: (review: Omit<Review, 'id' | 'userId' | 'createdAt' | 'updatedAt'>) => void;
}

export const MonthlyReview: React.FC<MonthlyReviewProps> = ({ onSave }) => {
  const [responses, setResponses] = useState<Record<string, string>>({
    goalProgress: '',
    timeVsImpact: '',
    bottlenecks: '',
    adjustment: '',
  });

  const prompts = [
    {
      id: 'goalProgress',
      icon: <Target size={20} />,
      question: 'Goal progress vs expectation?',
      placeholder: 'Are you on track? Ahead? Behind? Why?',
    },
    {
      id: 'timeVsImpact',
      icon: <TrendingUp size={20} />,
      question: 'Time vs impact analysis',
      placeholder: 'What consumed time but had low impact? What had the highest ROI?',
    },
    {
      id: 'bottlenecks',
      icon: <AlertTriangle size={20} />,
      question: 'Bottlenecks detected?',
      placeholder: 'What slowed you down? Skills, systems, people, resources?',
    },
    {
      id: 'adjustment',
      icon: <Wrench size={20} />,
      question: 'One strategic adjustment',
      placeholder: 'What will you change going forward?',
    },
  ];

  const handleResponseChange = (id: string, value: string) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  const handleSave = () => {
    const review: Omit<Review, 'id' | 'userId' | 'createdAt' | 'updatedAt'> = {
      type: 'monthly',
      date: new Date().toISOString(),
      prompts: prompts.map((p) => ({
        question: p.question,
        response: responses[p.id],
      })),
      responses,
      conclusions: [],
      actionItems: [],
      status: 'completed',
      completedAt: new Date().toISOString(),
      answers: [], // We use prompts/responses for this review type
    };

    onSave(review);
  };

  const isComplete = Object.values(responses).every((r) => r.trim().length > 0);

  return (
    <div className="monthly-review">
      <div className="review-header">
        <div className="month-badge">📊</div>
        <div>
          <h2>Monthly Review</h2>
          <p>Strategic analysis and course correction</p>
        </div>
      </div>

      <div className="review-form">
        {prompts.map((prompt) => (
          <div key={prompt.id} className="prompt-group">
            <label>
              <span className="prompt-icon">{prompt.icon}</span>
              <span className="prompt-question">{prompt.question}</span>
            </label>
            <textarea
              value={responses[prompt.id]}
              onChange={(e) => handleResponseChange(prompt.id, e.target.value)}
              placeholder={prompt.placeholder}
              rows={4}
            />
          </div>
        ))}
      </div>

      <button
        className="save-review-btn"
        onClick={handleSave}
        disabled={!isComplete}
      >
        Save Monthly Review
      </button>

      <style>{`
        .monthly-review {
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
        }

        .month-badge {
          font-size: 2.5rem;
        }

        .review-header h2 {
          margin: 0 0 0.25rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
        }

        .review-header p {
          margin: 0;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .review-form {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          margin-bottom: 2rem;
        }

        .prompt-group label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .prompt-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff4d4d;
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
          background: linear-gradient(135deg, #2196f3 0%, #42a5f5 100%);
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
          box-shadow: 0 4px 12px rgba(33, 150, 243, 0.4);
        }

        .save-review-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};
