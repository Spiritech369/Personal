import React, { useState } from 'react';
import { Calendar, TrendingUp, AlertCircle, Lightbulb } from 'lucide-react';
import type { JournalContentDailyClarity as DailyClarityType } from '../../types';

interface DailyClarityProps {
  onSave: (entry: DailyClarityType) => void;
  initialData?: DailyClarityType;
}

export const DailyClarity: React.FC<DailyClarityProps> = ({ onSave, initialData }) => {
  const [movedNeedle, setMovedNeedle] = useState(initialData?.movedNeedle || '');
  const [blockedProgress, setBlockedProgress] = useState(initialData?.blockedProgress || '');
  const [lessonLearned, setLessonLearned] = useState(initialData?.lessonLearned || '');
  const [mentalState, setMentalState] = useState<'focused' | 'overloaded' | 'distracted'>(
    initialData?.mentalState || 'focused'
  );

  const handleSave = () => {
    onSave({
      movedNeedle,
      blockedProgress,
      lessonLearned,
      mentalState,
    });
  };

  const mentalStates = [
    { value: 'focused', emoji: '🎯', label: 'Focused', color: '#00c853' },
    { value: 'overloaded', emoji: '🔥', label: 'Overloaded', color: '#ff5252' },
    { value: 'distracted', emoji: '💭', label: 'Distracted', color: '#ffab00' },
  ] as const;

  return (
    <div className="daily-clarity">
      <div className="journal-header">
        <Calendar size={24} />
        <h2>Daily Clarity</h2>
      </div>

      <div className="journal-form">
        {/* What moved the needle */}
        <div className="input-group">
          <label>
            <TrendingUp size={16} />
            <span>What moved the needle today?</span>
          </label>
          <textarea
            value={movedNeedle}
            onChange={(e) => setMovedNeedle(e.target.value)}
            placeholder="Focus on high-leverage actions..."
            onBlur={handleSave}
            rows={3}
          />
        </div>

        {/* What blocked progress */}
        <div className="input-group">
          <label>
            <AlertCircle size={16} />
            <span>What blocked progress?</span>
          </label>
          <textarea
            value={blockedProgress}
            onChange={(e) => setBlockedProgress(e.target.value)}
            placeholder="Obstacles, dependencies, distractions..."
            onBlur={handleSave}
            rows={3}
          />
        </div>

        {/* Lesson learned */}
        <div className="input-group">
          <label>
            <Lightbulb size={16} />
            <span>One lesson learned</span>
          </label>
          <textarea
            value={lessonLearned}
            onChange={(e) => setLessonLearned(e.target.value)}
            placeholder="What would you do differently?"
            onBlur={handleSave}
            rows={2}
          />
        </div>

        {/* Mental state */}
        <div className="input-group">
          <label>Mental State</label>
          <div className="mental-state-selector">
            {mentalStates.map((state) => (
              <button
                key={state.value}
                className={`state-btn ${mentalState === state.value ? 'active' : ''}`}
                onClick={() => {
                  setMentalState(state.value);
                  handleSave();
                }}
                style={{
                  borderColor: mentalState === state.value ? state.color : 'transparent',
                }}
              >
                <span className="emoji">{state.emoji}</span>
                <span className="label">{state.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .daily-clarity {
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

        .mental-state-selector {
          display: flex;
          gap: 0.75rem;
        }

        .state-btn {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.2);
          border: 2px solid transparent;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .state-btn:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .state-btn.active {
          background: rgba(255, 255, 255, 0.08);
        }

        .state-btn .emoji {
          font-size: 2rem;
        }

        .state-btn .label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};
