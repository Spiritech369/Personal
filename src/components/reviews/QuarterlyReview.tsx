import React, { useState } from 'react';
import { Compass, Repeat, Zap } from 'lucide-react';
import type { Review } from '../../types';

interface QuarterlyReviewProps {
  onSave: (review: Omit<Review, 'id' | 'userId' | 'createdAt' | 'updatedAt'>) => void;
}

export const QuarterlyReview: React.FC<QuarterlyReviewProps> = ({ onSave }) => {
  const [responses, setResponses] = useState<Record<string, string>>({
    goalsValid: '',
    systemRedesign: '',
    doubleDown: '',
  });

  const prompts = [
    {
      id: 'goalsValid',
      Icon: Compass,
      question: 'Are your goals still valid?',
      placeholder: 'Do they align with where you want to go? Should any change?',
      rows: 4,
    },
    {
      id: 'systemRedesign',
      Icon: Repeat,
      question: 'What system needs redesign?',
      placeholder: 'Workflows, processes, tools, habits—what needs a fundamental rethink?',
      rows: 5,
    },
    {
      id: 'doubleDown',
      Icon: Zap,
      question: 'What should you double down on?',
      placeholder: 'What\'s working extremely well that deserves more focus and investment?',
      rows: 4,
    },
  ];

  const handleResponseChange = (id: string, value: string) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  const handleSave = () => {
    const review: Omit<Review, 'id' | 'userId' | 'createdAt' | 'updatedAt'> = {
      type: 'quarterly',
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
    <div className="quarterly-review">
      <div className="review-header">
        <div className="quarter-label">Q{Math.floor((new Date().getMonth()) / 3) + 1}</div>
        <div>
          <h2>Quarterly Review</h2>
          <p>Deep strategic reflection and system redesign</p>
        </div>
      </div>

      <div className="review-form">
        {prompts.map((prompt) => (
          <div key={prompt.id} className="prompt-group">
            <label>
              <span className="prompt-icon"><prompt.Icon size={24} /></span>
              <span className="prompt-question">{prompt.question}</span>
            </label>
            <textarea
              value={responses[prompt.id]}
              onChange={(e) => handleResponseChange(prompt.id, e.target.value)}
              placeholder={prompt.placeholder}
              rows={prompt.rows}
            />
          </div>
        ))}
      </div>

      <button
        className="save-review-btn"
        onClick={handleSave}
        disabled={!isComplete}
      >
        Save Quarterly Review
      </button>

      <style>{`
        .quarterly-review {
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

        .quarter-label {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #9c27b0 0%, #ba68c8 100%);
          border-radius: 50%;
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
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
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .prompt-group label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .prompt-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9c27b0;
        }

        .prompt-question {
          font-size: 1.1rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.95);
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
          line-height: 1.6;
          resize: vertical;
          transition: border-color 0.2s;
        }

        .prompt-group textarea:focus {
          outline: none;
          border-color: rgba(156, 39, 176, 0.6);
        }

        .prompt-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .save-review-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #9c27b0 0%, #ba68c8 100%);
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
          box-shadow: 0 4px 12px rgba(156, 39, 176, 0.4);
        }

        .save-review-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};
