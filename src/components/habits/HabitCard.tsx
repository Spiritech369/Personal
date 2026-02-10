import React, { useState } from 'react';
import { Check, Zap, TrendingUp, Target } from 'lucide-react';
import type { Habit, HabitVersion } from '../../types';

interface HabitCardProps {
  habit: Habit;
  streak: number;
  onComplete: (version: HabitVersion, notes?: string) => void;
  roi?: number;
}

export const HabitCard: React.FC<HabitCardProps> = ({ habit, streak, onComplete, roi }) => {
  const [notes, setNotes] = useState('');
  const [showNotes, setShowNotes] = useState(false);

  const handleComplete = (version: HabitVersion) => {
    onComplete(version, notes || undefined);
    setNotes('');
    setShowNotes(false);
  };

  const getEnergyColor = (impact: string) => {
    switch (impact) {
      case 'positive': return '#00c853';
      case 'neutral': return '#ffab00';
      case 'negative': return '#ff5252';
      default: return '#666';
    }
  };

  const getEnergyIcon = (impact: string) => {
    switch (impact) {
      case 'positive': return '⚡';
      case 'neutral': return '➖';
      case 'negative': return '⬇️';
      default: return '';
    }
  };

  return (
    <div className="habit-card">
      <div className="habit-header">
        <div className="habit-info">
          <h3>{habit.name}</h3>
          <span
            className="energy-badge"
            style={{ background: `${getEnergyColor(habit.energyImpact)}20`, color: getEnergyColor(habit.energyImpact) }}
          >
            {getEnergyIcon(habit.energyImpact)} {habit.energyImpact}
          </span>
        </div>
        {streak > 0 && (
          <div className="streak">
            <span className="streak-emoji">🔥</span>
            <span className="streak-value">{streak}</span>
          </div>
        )}
      </div>

      <div className="habit-versions">
        <div className="version min">
          <div className="version-label">
            <Target size={14} />
            <span>MIN</span>
          </div>
          <p>{habit.minimumVersion}</p>
          <button onClick={() => handleComplete('min')} className="complete-btn min">
            <Check size={16} />
            <span>Done (Min)</span>
          </button>
        </div>

        <div className="version ideal">
          <div className="version-label">
            <Zap size={14} />
            <span>IDEAL</span>
          </div>
          <p>{habit.idealVersion}</p>
          <button onClick={() => handleComplete('ideal')} className="complete-btn ideal">
            <Check size={16} />
            <span>Done (Ideal)</span>
          </button>
        </div>
      </div>

      {roi !== undefined && (
        <div className="habit-roi">
          <TrendingUp size={14} />
          <span>ROI: {roi.toFixed(1)}x</span>
        </div>
      )}

      {showNotes && (
        <div className="habit-notes">
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Quick note (optional)..."
            rows={2}
          />
        </div>
      )}

      <button
        className="add-note-btn"
        onClick={() => setShowNotes(!showNotes)}
      >
        {showNotes ? 'Hide' : 'Add Note'}
      </button>

      <style>{`
        .habit-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.25rem;
          transition: all 0.2s;
        }

        .habit-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .habit-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .habit-info {
          flex: 1;
        }

        .habit-info h3 {
          margin: 0 0 0.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
        }

        .energy-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .streak {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem 0.75rem;
          background: rgba(255, 193, 7, 0.1);
          border-radius: 20px;
        }

        .streak-emoji {
          font-size: 1.25rem;
        }

        .streak-value {
          font-size: 1rem;
          font-weight: 700;
          color: #ffc107;
        }

        .habit-versions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .version {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          padding: 1rem;
        }

        .version-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .version.min .version-label {
          color: rgba(255, 255, 255, 0.6);
        }

        .version.ideal .version-label {
          color: #ff4d4d;
        }

        .version p {
          margin: 0 0 0.75rem;
          font-size: 0.85rem;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.8);
        }

        .complete-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.5rem;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .complete-btn.min {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.9);
        }

        .complete-btn.min:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .complete-btn.ideal {
          background: rgba(255, 77, 77, 0.2);
          color: #ff4d4d;
        }

        .complete-btn.ideal:hover {
          background: rgba(255, 77, 77, 0.3);
        }

        .habit-roi {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
          background: rgba(0, 200, 83, 0.1);
          border-radius: 6px;
          color: #00c853;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .habit-notes {
          margin-bottom: 0.75rem;
        }

        .habit-notes textarea {
          width: 100%;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          padding: 0.5rem;
          color: #fff;
          font-family: inherit;
          font-size: 0.85rem;
          resize: vertical;
        }

        .habit-notes textarea:focus {
          outline: none;
          border-color: rgba(255, 77, 77, 0.5);
        }

        .add-note-btn {
          width: 100%;
          padding: 0.5rem;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .add-note-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </div>
  );
};
