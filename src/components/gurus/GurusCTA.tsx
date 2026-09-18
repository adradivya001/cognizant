import React from 'react';
import './GurusCTA.css';

interface GurusCTAProps {
  onNavigate?: (route: string) => void;
}

export const GurusCTA: React.FC<GurusCTAProps> = ({ onNavigate }) => {
  const handleNav = (route: string, e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(route);
    }
  };

  return (
    <section className="gurus-cta-section">
      <div className="gurus-cta-container">
        <div className="gurus-cta-card">
          <div className="gurus-cta-glow"></div>
          <h2 className="gurus-cta-title">Explore the Cognizant Academic Journey</h2>
          <p className="gurus-cta-subtitle">
            Discover our specialized entrance exam preparation programs and core academic pillars.
          </p>
          <div className="gurus-cta-buttons">
            <a
              href="#programs"
              onClick={(e) => handleNav('/programs', e)}
              className="gurus-cta-btn primary"
            >
              Explore Programs
            </a>
            <a
              href="#why-cognizant"
              onClick={(e) => handleNav('/why-cognizant', e)}
              className="gurus-cta-btn secondary"
            >
              Why Cognizant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
