import React from 'react';
import './AdmissionsCTA.css';

interface AdmissionsCTAProps {
  title: string;
  subtitle: string;
  primaryBtnText: string;
  secondaryBtnText: string;
  onContactClick?: () => void;
  onExplorePrograms?: () => void;
}

export const AdmissionsCTA: React.FC<AdmissionsCTAProps> = ({
  title,
  subtitle,
  primaryBtnText,
  secondaryBtnText,
  onContactClick,
  onExplorePrograms,
}) => {
  return (
    <section className="admissions-cta-section">
      <div className="admissions-cta-container">
        <div className="admissions-cta-card">
          <div className="admissions-cta-glow"></div>
          <h2 className="admissions-cta-title">{title}</h2>
          <p className="admissions-cta-subtitle">{subtitle}</p>
          <div className="admissions-cta-buttons">
            <button
              onClick={() => {
                if (onContactClick) onContactClick();
              }}
              className="admissions-cta-btn primary"
            >
              {primaryBtnText}
            </button>
            <a
              href="#programs"
              onClick={(e) => {
                if (onExplorePrograms) {
                  e.preventDefault();
                  onExplorePrograms();
                }
              }}
              className="admissions-cta-btn secondary"
            >
              {secondaryBtnText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
