import React from 'react';
import { SubjectType } from '../../types/guru';
import './GurusGrid.css';

interface GurusFilterProps {
  selectedSubject: string;
  onSelectSubject: (subject: string) => void;
}

export const GurusFilter: React.FC<GurusFilterProps> = ({
  selectedSubject,
  onSelectSubject,
}) => {
  const categories = ['ALL', 'MATHEMATICS', 'CHEMISTRY', 'PHYSICS', 'BIOLOGY'];

  return (
    <div className="gurus-filter-container">
      <div className="gurus-filter-bar">
        {categories.map((cat) => {
          const isActive = selectedSubject.toUpperCase() === cat;
          return (
            <button
              key={cat}
              className={`filter-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectSubject(cat)}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GurusFilter;
