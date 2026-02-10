import React, { useState } from 'react';
import { Zap, Check } from 'lucide-react';
import { NextActionSuggestor } from '../../services/NextActionSuggestor';
import type { Project, Task } from '../../types';

interface NextActionDisplayProps {
  project: Project;
  tasks: Task[];
  onSelectAction?: (taskId: string) => void;
}

export const NextActionDisplay: React.FC<NextActionDisplayProps> = ({
  project,
  tasks,
  onSelectAction,
}) => {
  const [energyLevel, setEnergyLevel] = useState<'low' | 'medium' | 'high'>('medium');
  const [manualAction, setManualAction] = useState(project.nextAction || '');
  const [isEditing, setIsEditing] = useState(false);

  const suggestion = NextActionSuggestor.suggestNextAction(project, tasks, energyLevel);

  const handleAcceptSuggestion = () => {
    if (suggestion) {
      setManualAction(suggestion.title);
      setIsEditing(false);
      onSelectAction?.(suggestion.taskId);
    }
  };

  const energyLevels = [
    { value: 'low', label: 'Low', emoji: '🔋' },
    { value: 'medium', label: 'Medium', emoji: '⚡' },
    { value: 'high', label: 'High', emoji: '🔥' },
  ] as const;

  return (
    <div className="next-action-display">
      <div className="section-header">
        <Zap size={20} />
        <h3>Next Action</h3>
      </div>

      {/* Energy Level Selector */}
      <div className="energy-selector">
        <label>Your Energy:</label>
        <div className="energy-buttons">
          {energyLevels.map((level) => (
            <button
              key={level.value}
              className={`energy-btn ${energyLevel === level.value ? 'active' : ''}`}
              onClick={() => setEnergyLevel(level.value)}
            >
              <span className="emoji">{level.emoji}</span>
              <span>{level.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Suggested Action */}
      {suggestion && !isEditing && (
        <div className="suggestion-card">
          <div className="suggestion-header">
            <span className="ai-badge">AI Suggested</span>
            <span className="confidence">
              {suggestion.confidence}% confidence
            </span>
          </div>
          <div className="suggestion-title">{suggestion.title}</div>
          <div className="suggestion-reason">{suggestion.reason}</div>
          <button onClick={handleAcceptSuggestion} className="accept-btn">
            <Check size={16} />
            <span>Use This Action</span>
          </button>
        </div>
      )}

      {/* Manual Override */}
      <div className="manual-action">
        {isEditing ? (
          <div className="edit-mode">
            <input
              type="text"
              value={manualAction}
              onChange={(e) => setManualAction(e.target.value)}
              placeholder="Type your next action..."
              autoFocus
            />
            <div className="edit-actions">
              <button onClick={() => setIsEditing(false)} className="save-btn">
                Save
              </button>
              <button onClick={() => setIsEditing(false)} className="cancel-btn">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="display-mode">
            {manualAction ? (
              <div className="current-action">
                <div className="action-text">{manualAction}</div>
                <button onClick={() => setIsEditing(true)} className="edit-link">
                  Edit
                </button>
              </div>
            ) : (
              <button onClick={() => setIsEditing(true)} className="set-action-btn">
                Set Manual Action
              </button>
            )}
          </div>
        )}
      </div>

      <style>{`
        .next-action-display {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
          padding: 1.25rem;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          color: #ff4d4d;
        }

        .section-header h3 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
        }

        .energy-selector {
          margin-bottom: 1.5rem;
        }

        .energy-selector label {
          display: block;
          margin-bottom: 0.75rem;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .energy-buttons {
          display: flex;
          gap: 0.5rem;
        }

        .energy-btn {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          padding: 0.75rem;
          background: rgba(0, 0, 0, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .energy-btn:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .energy-btn.active {
          background: rgba(255, 77, 77, 0.1);
          border-color: #ff4d4d;
        }

        .energy-btn .emoji {
          font-size: 1.5rem;
        }

        .energy-btn span:last-child {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .suggestion-card {
          background: linear-gradient(135deg, rgba(255, 77, 77, 0.1) 0%, rgba(255, 107, 107, 0.05) 100%);
          border: 1px solid rgba(255, 77, 77, 0.3);
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 1.5rem;
        }

        .suggestion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .ai-badge {
          padding: 0.25rem 0.75rem;
          background: rgba(255, 77, 77, 0.2);
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #ff4d4d;
        }

        .confidence {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .suggestion-title {
          font-size: 1.05rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.5rem;
        }

        .suggestion-reason {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 1rem;
        }

        .accept-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 77, 77, 0.2);
          border: 1px solid rgba(255, 77, 77, 0.4);
          border-radius: 6px;
          color: #ff4d4d;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .accept-btn:hover {
          background: rgba(255, 77, 77, 0.3);
        }

        .manual-action {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1rem;
        }

        .edit-mode input {
          width: 100%;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          padding: 0.75rem;
          color: #fff;
          font-family: inherit;
          font-size: 0.95rem;
          margin-bottom: 0.75rem;
        }

        .edit-mode input:focus {
          outline: none;
          border-color: rgba(255, 77, 77, 0.5);
        }

        .edit-actions {
          display: flex;
          gap: 0.75rem;
        }

        .save-btn,
        .cancel-btn {
          flex: 1;
          padding: 0.5rem;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .save-btn {
          background: rgba(0, 200, 83, 0.2);
          color: #00c853;
        }

        .save-btn:hover {
          background: rgba(0, 200, 83, 0.3);
        }

        .cancel-btn {
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.7);
        }

        .cancel-btn:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        .current-action {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 6px;
        }

        .action-text {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .edit-link {
          padding: 0.25rem 0.75rem;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.8rem;
          cursor: pointer;
        }

        .edit-link:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .set-action-btn {
          width: 100%;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px dashed rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
        }

        .set-action-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </div>
  );
};
