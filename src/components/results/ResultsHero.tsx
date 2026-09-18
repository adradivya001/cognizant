import React from 'react';
import './ResultsHero.css';

interface ResultsHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb: string;
  onNavigateHome?: () => void;
}

export const ResultsHero: React.FC<ResultsHeroProps> = ({
  eyebrow,
  title,
  description,
  breadcrumb,
  onNavigateHome,
}) => {
  return (
    <section className="results-hero-section">
      <div className="results-hero-overlay"></div>
      <div className="results-hero-container">
        {/* Breadcrumb */}
        <div className="results-hero-breadcrumb">
          <a
            href="/"
            onClick={(e) => {
              if (onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
              }
            }}
          >
            Home
          </a>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Results</span>
        </div>

        {/* Content */}
        <div className="results-hero-content">
          <span className="results-hero-eyebrow">{eyebrow}</span>
          <h1 className="results-hero-title">{title}</h1>
          <p className="results-hero-description">{description}</p>
        </div>
      </div>
    </section>
  );
};
