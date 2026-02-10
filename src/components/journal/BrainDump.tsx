import React, { useState } from 'react';
import { Brain, CheckSquare, Lightbulb, FileText, Tag } from 'lucide-react';
export interface BrainDumpData {
  content: string;
}

interface BrainDumpProps {
  onSave: (entry: BrainDumpData) => void;
  onConvertToTask?: (text: string) => void;
  onConvertToIdea?: (text: string) => void;
  onConvertToNote?: (text: string) => void;
  initialData?: BrainDumpData;
}

export const BrainDump: React.FC<BrainDumpProps> = ({
  onSave,
  onConvertToTask,
  onConvertToIdea,
  onConvertToNote,
  initialData,
}) => {
  const [content, setContent] = useState(initialData?.content || '');
  const [selectedLines, setSelectedLines] = useState<Set<number>>(new Set());

  const lines = content.split('\n').filter((line) => line.trim());

  const handleSave = () => {
    onSave({ content });
  };

  const toggleLineSelection = (index: number) => {
    const newSelection = new Set(selectedLines);
    if (newSelection.has(index)) {
      newSelection.delete(index);
    } else {
      newSelection.add(index);
    }
    setSelectedLines(newSelection);
  };

  const convertSelected = (type: 'task' | 'idea' | 'note') => {
    const selectedText = Array.from(selectedLines)
      .map((index) => lines[index])
      .join('\n');

    if (!selectedText) return;

    switch (type) {
      case 'task':
        onConvertToTask?.(selectedText);
        break;
      case 'idea':
        onConvertToIdea?.(selectedText);
        break;
      case 'note':
        onConvertToNote?.(selectedText);
        break;
    }

    // Clear selection after conversion
    setSelectedLines(new Set());
  };

  const extractTags = (text: string): string[] => {
    const tagRegex = /#(\w+)/g;
    const matches = text.matchAll(tagRegex);
    return Array.from(new Set(Array.from(matches, (m) => m[1])));
  };

  const tags = extractTags(content);

  return (
    <div className="brain-dump">
      <div className="journal-header">
        <Brain size={24} />
        <h2>Brain Dump</h2>
      </div>

      <div className="journal-form">
        {/* Free text editor */}
        <div className="input-group">
          <label>
            <span>Get it all out...</span>
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write freely. Start lines with - for bullets. Use #tags for categorization."
            onBlur={handleSave}
            rows={12}
            className="dump-textarea"
          />
          <div className="editor-tips">
            <span>💡 Tip: Use #tags for auto-categorization</span>
          </div>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="tags-section">
            <Tag size={14} />
            <span>Tags:</span>
            <div className="tags">
              {tags.map((tag) => (
                <span key={tag} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Line-by-line conversion */}
        {lines.length > 0 && (
          <div className="conversion-section">
            <h3>Convert Lines</h3>
            <div className="lines-list">
              {lines.map((line, index) => (
                <div
                  key={index}
                  className={`line-item ${selectedLines.has(index) ? 'selected' : ''}`}
                  onClick={() => toggleLineSelection(index)}
                >
                  <div className="checkbox">
                    {selectedLines.has(index) && '✓'}
                  </div>
                  <div className="line-text">{line}</div>
                </div>
              ))}
            </div>

            {selectedLines.size > 0 && (
              <div className="conversion-actions">
                <button onClick={() => convertSelected('task')} className="convert-btn task">
                  <CheckSquare size={16} />
                  <span>To Task ({selectedLines.size})</span>
                </button>
                <button onClick={() => convertSelected('idea')} className="convert-btn idea">
                  <Lightbulb size={16} />
                  <span>To Idea ({selectedLines.size})</span>
                </button>
                <button onClick={() => convertSelected('note')} className="convert-btn note">
                  <FileText size={16} />
                  <span>To Note ({selectedLines.size})</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        .brain-dump {
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

        .dump-textarea {
          width: 100%;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1rem;
          color: #fff;
          font-family: 'Menlo', 'Monaco', monospace;
          font-size: 0.95rem;
          line-height: 1.6;
          resize: vertical;
          transition: border-color 0.2s;
        }

        .dump-textarea:focus {
          outline: none;
          border-color: rgba(255, 77, 77, 0.5);
        }

        .dump-textarea::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .editor-tips {
          margin-top: 0.5rem;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .tags-section {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .tag {
          padding: 0.25rem 0.75rem;
          background: rgba(255, 77, 77, 0.2);
          border-radius: 12px;
          color: #ff4d4d;
          font-weight: 500;
        }

        .conversion-section {
          margin-top: 1rem;
        }

        .conversion-section h3 {
          margin: 0 0 1rem;
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
        }

        .lines-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .line-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .line-item:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .line-item.selected {
          background: rgba(255, 77, 77, 0.1);
          border-color: rgba(255, 77, 77, 0.3);
        }

        .checkbox {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #ff4d4d;
          font-weight: bold;
        }

        .line-item.selected .checkbox {
          border-color: #ff4d4d;
          background: rgba(255, 77, 77, 0.2);
        }

        .line-text {
          flex: 1;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .conversion-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .convert-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .convert-btn.task {
          background: rgba(0, 200, 83, 0.2);
          color: #00c853;
        }

        .convert-btn.task:hover {
          background: rgba(0, 200, 83, 0.3);
        }

        .convert-btn.idea {
          background: rgba(255, 193, 7, 0.2);
          color: #ffc107;
        }

        .convert-btn.idea:hover {
          background: rgba(255, 193, 7, 0.3);
        }

        .convert-btn.note {
          background: rgba(33, 150, 243, 0.2);
          color: #2196f3;
        }

        .convert-btn.note:hover {
          background: rgba(33, 150, 243, 0.3);
        }
      `}</style>
    </div>
  );
};
