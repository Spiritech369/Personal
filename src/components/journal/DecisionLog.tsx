import React, { useState } from 'react';
import { Target, FileText, TrendingUp, Gauge } from 'lucide-react';
import type { JournalContentDecisionLog as DecisionLogType } from '../../types';

interface DecisionLogProps {
  onSave: (entry: DecisionLogType) => void;
  initialData?: DecisionLogType;
}

export const DecisionLog: React.FC<DecisionLogProps> = ({ onSave, initialData }) => {
  const [decision, setDecision] = useState(initialData?.decision || '');
  const [context, setContext] = useState(initialData?.context || '');
  const [expectedOutcome, setExpectedOutcome] = useState(initialData?.expectedOutcome || '');
  const [confidenceLevel, setConfidenceLevel] = useState(initialData?.confidenceLevel || 7);

  const handleSave = () => {
    const reviewDate = new Date();
    reviewDate.setDate(reviewDate.getDate() + 14); // 14 days from now

    onSave({
      decision,
      context,
      expectedOutcome,
      confidenceLevel,
      reviewDate: reviewDate.toISOString(),
    });
  };

  const getConfidenceColor = (level: number) => {
    if (level <= 3) return '#ff5252'; // Low confidence - red
    if (level <= 6) return '#ffab00'; // Medium - orange
    return '#00c853'; // High confidence - green
  };

  return (
    <div className="decision-log">
      <div className="journal-header">
        <Target size={24} />
        <h2>Decision Log</h2>
      </div>

      <div className="journal-form">
        {/* Decision made */}
        <div className="input-group">
          <label>
            <Target size={16} />
            <span>Decision Made</span>
          </label>
          <textarea
            value={decision}
            onChange={(e) => setDecision(e.target.value)}
            placeholder="Clearly state the decision..."
            onBlur={handleSave}
            rows={2}
          />
        </div>

        {/* Context */}
        <div className="input-group">
          <label>
            <FileText size={16} />
            <span>Context</span>
          </label>
          <textarea
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="What factors led to this decision?"
            onBlur={handleSave}
            rows={3}
          />
        </div>

        {/* Expected Outcome */}
        <div className="input-group">
          <label>
            <TrendingUp size={16} />
            <span>Expected Outcome</span>
          </label>
          <textarea
            value={expectedOutcome}
            onChange={(e) => setExpectedOutcome(e.target.value)}
            placeholder="What should happen as a result?"
            onBlur={handleSave}
            rows={2}
          />
        </div>

        {/* Confidence Level */}
        <div className="input-group">
          <label>
            <Gauge size={16} />
            <span>Confidence Level: {confidenceLevel}/10</span>
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={confidenceLevel}
            onChange={(e) => {
              setConfidenceLevel(Number(e.target.value));
              handleSave();
            }}
            className="confidence-slider"
            style={{
              background: `linear-gradient(to right, ${getConfidenceColor(confidenceLevel)} ${confidenceLevel * 10
                }%, rgba(255,255,255,0.1) ${confidenceLevel * 10}%)`,
            }}
          />
          <div className="confidence-labels">
            <span>Low</span>
            <span>Medium</span>
            <span>High</span>
          </div>
        </div>

        {/* Review Reminder */}
        <div className="review-reminder">
          <div className="reminder-icon">🔔</div>
          <div className="reminder-text">
            <strong>Auto-review in 14 days</strong>
            <p>You'll be reminded to assess this decision's outcome</p>
          </div>
        </div>
      </div>

      <style>{`
        .decision-log {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          padding: 1.5rem;
        }

        .journal-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          color: #fff;
        }

        .journal-header h2 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .journal-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .input-group label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
        }

        .input-group textarea {
          width: 100%;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.75rem;
          color: #fff;
          font-family: inherit;
          font-size: 0.95rem;
          line-height: 1.5;
          resize: vertical;
          transition: border-color 0.2s;
        }

        .input-group textarea:focus {
          outline: none;
          border-color: rgba(255, 77, 77, 0.5);
        }

        .input-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .confidence-slider {
          width: 100%;
          height: 8px;
          border-radius: 4px;
          appearance: none;
          cursor: pointer;
          transition: background 0.2s;
        }

        .confidence-slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .confidence-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .confidence-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 0.5rem;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .review-reminder {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 193, 7, 0.1);
          border-left: 3px solid #ffc107;
          border-radius: 8px;
        }

        .reminder-icon {
          font-size: 1.5rem;
        }

        .reminder-text {
          flex: 1;
        }

        .reminder-text strong {
          display: block;
          margin-bottom: 0.25rem;
          color: #ffc107;
        }

        .reminder-text p {
          margin: 0;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </div>
  );
};
