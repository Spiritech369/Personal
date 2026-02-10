import React from 'react';
import { AlertCircle, TrendingUp, Activity } from 'lucide-react';
import { ProjectHealthCalculator } from '../../services/ProjectHealth';
import type { Project } from '../../types';

interface Task {
  id: string;
  status: string;
  dueDate?: Date;
  dependencies?: string[];
}

interface ProjectHealthBadgeProps {
  project: Project;
  tasks: Task[];
  showDetails?: boolean;
}

export const ProjectHealthBadge: React.FC<ProjectHealthBadgeProps> = ({
  project,
  tasks,
  showDetails = false,
}) => {
  const metrics = ProjectHealthCalculator.calculateHealth(project, tasks);

  const getHealthColor = (health: string) => {
    switch (health) {
      case 'ontrack': return '#00c853';
      case 'atrisk': return '#ffab00';
      case 'blocked': return '#ff5252';
      default: return '#666';
    }
  };

  const getHealthIcon = (health: string) => {
    switch (health) {
      case 'ontrack': return <TrendingUp size={16} />;
      case 'atrisk': return <Activity size={16} />;
      case 'blocked': return <AlertCircle size={16} />;
      default: return null;
    }
  };

  const getHealthLabel = (health: string) => {
    switch (health) {
      case 'ontrack': return 'On Track';
      case 'atrisk': return 'At Risk';
      case 'blocked': return 'Blocked';
      default: return 'Unknown';
    }
  };

  return (
    <div className="project-health">
      <div
        className="health-badge"
        style={{
          background: `${getHealthColor(metrics.health)}20`,
          borderColor: getHealthColor(metrics.health),
          color: getHealthColor(metrics.health),
        }}
      >
        {getHealthIcon(metrics.health)}
        <span>{getHealthLabel(metrics.health)}</span>
        <span className="health-score">{metrics.score}%</span>
      </div>

      {showDetails && (
        <div className="health-details">
          <div className="health-factors">
            {metrics.factors.overdueTasksCount > 0 && (
              <div className="factor overdue">
                ⚠️ {metrics.factors.overdueTasksCount} overdue task(s)
              </div>
            )}
            {metrics.factors.blockedDependenciesCount > 0 && (
              <div className="factor blocked">
                🚫 {metrics.factors.blockedDependenciesCount} blocked task(s)
              </div>
            )}
            {metrics.factors.daysSinceActivity > 7 && (
              <div className="factor inactive">
                💤 {metrics.factors.daysSinceActivity} days since activity
              </div>
            )}
            <div className="factor completion">
              ✓ {metrics.factors.completionRate}% complete
            </div>
          </div>

          <div className="recommendations">
            <strong>Recommendations:</strong>
            <ul>
              {metrics.recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <style>{`
        .project-health {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .health-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border: 2px solid;
          border-radius: 20px;
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          width: fit-content;
        }

        .health-score {
          margin-left: 0.25rem;
          opacity: 0.8;
        }

        .health-details {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding: 1rem;
        }

        .health-factors {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .factor {
          font-size: 0.85rem;
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 4px;
        }

        .factor.overdue {
          color: #ff5252;
        }

        .factor.blocked {
          color: #ff5252;
        }

        .factor.inactive {
          color: #ffab00;
        }

        .factor.completion {
          color: rgba(255, 255, 255, 0.7);
        }

        .recommendations {
          font-size: 0.85rem;
        }

        .recommendations strong {
          display: block;
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .recommendations ul {
          margin: 0;
          padding-left: 1.5rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .recommendations li {
          margin-bottom: 0.25rem;
        }
      `}</style>
    </div>
  );
};
