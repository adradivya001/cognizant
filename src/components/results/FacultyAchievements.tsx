import React from 'react';
import { FacultyAchievementGroup } from '../../types/results';
import './FacultyAchievements.css';

interface FacultyAchievementsProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  facultyGroups: FacultyAchievementGroup[];
}

export const FacultyAchievements: React.FC<FacultyAchievementsProps> = ({
  eyebrow,
  title,
  subtitle,
  facultyGroups,
}) => {
  return (
    <section className="faculty-achievements-section">
      <div className="faculty-achievements-container">
        <div className="faculty-achievements-header">
          <span className="fac-eyebrow">{eyebrow}</span>
          <h2 className="fac-title">{title}</h2>
          <p className="fac-subtitle">{subtitle}</p>
        </div>

        <div className="faculty-groups-grid">
          {facultyGroups.map((group, idx) => (
            <div key={idx} className="faculty-group-card">
              <div className="group-card-header">
                <span className="subject-tag">{group.subject}</span>
                <h3 className="faculty-name">{group.facultyName}</h3>
              </div>

              <ul className="faculty-highlights-list">
                {group.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="faculty-highlight-item">
                    <span className="bullet-icon">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
