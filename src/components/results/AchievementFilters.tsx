import React from 'react';
import { ExamCategory } from '../../types/results';
import './AchievementFilters.css';

interface AchievementFiltersProps {
  selectedCategory: ExamCategory;
  onSelectCategory: (category: ExamCategory) => void;
}

export const AchievementFilters: React.FC<AchievementFiltersProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const categories: ExamCategory[] = [
    'ALL',
    'IITJEE',
    'JEE ADVANCED',
    'EAMCET',
    'AIEEE',
    'NEET / MEDICAL',
    'OTHER ENTRANCE EXAMS',
  ];

  return (
    <div className="achievement-filter-container">
      <div className="achievement-filter-bar">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              className={`achievement-filter-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat)}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};
