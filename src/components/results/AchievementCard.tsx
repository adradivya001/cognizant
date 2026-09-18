import React from 'react';
import { AchievementItem } from '../../types/results';
import './AchievementCard.css';

interface AchievementCardProps {
  achievement: AchievementItem;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const isHistorical = achievement.sourceType === 'historical-achievement';

  return (
    <div className={`achievement-card ${isHistorical ? 'historical' : ''}`}>
      <div className="card-top-row">
        <span className={`source-badge ${isHistorical ? 'badge-hist' : 'badge-track'}`}>
          {isHistorical ? 'Historical Achievement' : 'Mentor Track Record'}
        </span>
        {achievement.year && <span className="year-pill">{achievement.year}</span>}
      </div>

      <div className="card-value-display">
        <span className="achievement-value">{achievement.value}</span>
      </div>

      <div className="card-content-body">
        <h3 className="achievement-label">{achievement.label}</h3>
        <p className="achievement-desc">{achievement.description}</p>
        <div className="mentor-credit">
          <span className="mentor-prefix">Mentor:</span>
          <span className="mentor-name">{achievement.facultyMentor}</span>
        </div>
      </div>
    </div>
  );
};
