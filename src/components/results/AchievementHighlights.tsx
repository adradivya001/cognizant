import React, { useState } from 'react';
import { AchievementItem, ExamCategory } from '../../types/results';
import { AchievementCard } from './AchievementCard';
import { AchievementFilters } from './AchievementFilters';
import './AchievementHighlights.css';

interface AchievementHighlightsProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  achievements: AchievementItem[];
}

export const AchievementHighlights: React.FC<AchievementHighlightsProps> = ({
  eyebrow,
  title,
  subtitle,
  achievements,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ExamCategory>('ALL');

  const filteredAchievements = achievements.filter((item) => {
    if (selectedCategory === 'ALL') return true;
    return item.examCategory === selectedCategory;
  });

  return (
    <section className="achievement-highlights-section">
      <div className="achievement-highlights-container">
        {/* Header */}
        <div className="highlights-header">
          <span className="highlights-eyebrow">{eyebrow}</span>
          <h2 className="highlights-title">{title}</h2>
          <p className="highlights-subtitle">{subtitle}</p>
        </div>

        {/* Filters */}
        <AchievementFilters
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Grid */}
        {filteredAchievements.length > 0 ? (
          <div className="achievements-grid">
            {filteredAchievements.map((item) => (
              <AchievementCard key={item.id} achievement={item} />
            ))}
          </div>
        ) : (
          <div className="no-achievements-message">
            No specific track record items found for category "{selectedCategory}".
          </div>
        )}
      </div>
    </section>
  );
};
