import React from 'react';
import './ResultsIntro.css';

interface ResultsIntroProps {
  title: string;
  description: string;
}

export const ResultsIntro: React.FC<ResultsIntroProps> = ({ title, description }) => {
  return (
    <section className="results-intro-section">
      <div className="results-intro-container">
        <div className="results-intro-card">
          <div className="intro-badge">
            <span className="badge-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </span>
            <span>VERIFIED ACADEMIC TRACK RECORD</span>
          </div>
          <h2 className="intro-title">{title}</h2>
          <p className="intro-description">{description}</p>
        </div>
      </div>
    </section>
  );
};
