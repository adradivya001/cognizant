import React from 'react';
import './ResultsCTA.css';

interface ResultsCTAProps {
  title: string;
  subtitle: string;
  primaryBtnText: string;
  secondaryBtnText: string;
  onExplorePrograms?: () => void;
  onContactClick?: () => void;
}

export const ResultsCTA: React.FC<ResultsCTAProps> = ({
  title,
  subtitle,
  primaryBtnText,
  secondaryBtnText,
  onExplorePrograms,
  onContactClick,
}) => {
  return (
    <section className="results-cta-section">
      <div className="results-cta-container">
        <div className="results-cta-card">
          <div className="results-cta-glow"></div>
          <h2 className="results-cta-title">{title}</h2>
          <p className="results-cta-subtitle">{subtitle}</p>
          <div className="results-cta-buttons">
            <a
              href="#programs"
              onClick={(e) => {
                if (onExplorePrograms) {
                  e.preventDefault();
                  onExplorePrograms();
                }
              }}
              className="results-cta-btn primary"
            >
              {primaryBtnText}
            </a>
            <button
              onClick={() => {
                if (onContactClick) onContactClick();
              }}
              className="results-cta-btn secondary"
            >
              {secondaryBtnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
