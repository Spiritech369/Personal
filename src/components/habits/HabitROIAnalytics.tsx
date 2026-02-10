import React, { useMemo } from 'react';
import { TrendingUp, TrendingDown, AlertCircle, Award } from 'lucide-react';
import { HabitROICalculator } from '../../services/HabitROI';
import type { Habit, HabitCompletion, Goal } from '../../types';

interface HabitROIAnalyticsProps {
  habits: Habit[];
  completions: HabitCompletion[];
  goals: Goal[];
}

export const HabitROIAnalytics: React.FC<HabitROIAnalyticsProps> = ({
  habits,
  completions,
  goals,
}) => {
  const roiData = useMemo(() => {
    return habits.map((habit) => {
      const habitCompletions = completions.filter((c) => c.habitId === habit.id);
      const linkedGoal = goals.find((g) => g.id === habit.linkedGoalId);

      return HabitROICalculator.calculateROI(
        habit.id,
        habitCompletions,
        linkedGoal
      );
    });
  }, [habits, completions, goals]);

  const suggestions = {
    pause: HabitROICalculator.suggestPauses(roiData),
    doubleDown: HabitROICalculator.suggestDoubleDown(roiData),
  };

  const getHabitName = (habitId: string) => {
    return habits.find((h) => h.id === habitId)?.name || 'Unknown Habit';
  };

  return (
    <div className="habit-analytics">
      <h2>Habit ROI Analytics</h2>

      {/* High ROI Habits */}
      {suggestions.doubleDown.length > 0 && (
        <div className="section high-roi">
          <div className="section-header">
            <Award size={20} />
            <h3>Double Down On These</h3>
          </div>
          <div className="habit-list">
            {suggestions.doubleDown.map((roi) => (
              <div key={roi.habitId} className="roi-card high">
                <div className="roi-header">
                  <span className="habit-name">{getHabitName(roi.habitId)}</span>
                  <span className="roi-value">
                    <TrendingUp size={16} />
                    {roi.roi}x ROI
                  </span>
                </div>
                <div className="roi-stats">
                  <span>Completion: {roi.completionRate}%</span>
                  <span>Impact: {roi.impactScore}/10</span>
                </div>
                <p className="recommendation">{roi.recommendation}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Low ROI / Pause Suggestions */}
      {suggestions.pause.length > 0 && (
        <div className="section low-roi">
          <div className="section-header">
            <AlertCircle size={20} />
            <h3>Consider Pausing These</h3>
          </div>
          <div className="habit-list">
            {suggestions.pause.map((roi) => (
              <div key={roi.habitId} className="roi-card low">
                <div className="roi-header">
                  <span className="habit-name">{getHabitName(roi.habitId)}</span>
                  <span className="roi-value">
                    <TrendingDown size={16} />
                    {roi.roi}x ROI
                  </span>
                </div>
                <div className="roi-stats">
                  <span>Completion: {roi.completionRate}%</span>
                  <span>Impact: {roi.impactScore}/10</span>
                </div>
                <p className="recommendation">{roi.recommendation}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Habits Overview */}
      <div className="section overview">
        <h3>All Habits</h3>
        <div className="overview-grid">
          {roiData.map((roi) => (
            <div key={roi.habitId} className="overview-item">
              <span className="habit-name">{getHabitName(roi.habitId)}</span>
              <div className="metrics">
                <span className={`roi ${roi.roi >= 3 ? 'good' : roi.roi >= 1 ? 'ok' : 'bad'}`}>
                  {roi.roi}x
                </span>
                <span className="completion">{roi.completionRate}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .habit-analytics {
          padding: 1.5rem;
        }

        .habit-analytics h2 {
          margin: 0 0 1.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
        }

        .section {
          margin-bottom: 2rem;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .section-header h3 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .habit-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .roi-card {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
          padding: 1rem;
          border-left: 4px solid;
        }

        .roi-card.high {
          border-left-color: #00c853;
          background: rgba(0, 200, 83, 0.05);
        }

        .roi-card.low {
          border-left-color: #ff5252;
          background: rgba(255, 82, 82, 0.05);
        }

        .roi-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .habit-name {
          font-weight: 600;
          color: #fff;
        }

        .roi-value {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-weight: 700;
          font-size: 0.95rem;
        }

        .roi-card.high .roi-value {
          color: #00c853;
        }

        .roi-card.low .roi-value {
          color: #ff5252;
        }

        .roi-stats {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.5rem;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .recommendation {
          margin: 0;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
          font-style: italic;
        }

        .overview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 0.75rem;
        }

        .overview-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
        }

        .overview-item .habit-name {
          font-size: 0.9rem;
        }

        .metrics {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .roi {
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.85rem;
        }

        .roi.good {
          background: rgba(0, 200, 83, 0.2);
          color: #00c853;
        }

        .roi.ok {
          background: rgba(255, 193, 7, 0.2);
          color: #ffc107;
        }

        .roi.bad {
          background: rgba(255, 82, 82, 0.2);
          color: #ff5252;
        }

        .completion {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </div>
  );
};
