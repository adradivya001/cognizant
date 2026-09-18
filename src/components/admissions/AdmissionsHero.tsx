import React from 'react';
import './AdmissionsHero.css';

interface AdmissionsHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb: string;
  onNavigateHome?: () => void;
  onNavigatePrograms?: () => void;
}

export const AdmissionsHero: React.FC<AdmissionsHeroProps> = ({
  eyebrow,
  title,
  description,
  breadcrumb,
  onNavigateHome,
  onNavigatePrograms,
}) => {
  return (
    <section className="admissions-hero-section">
      <div className="admissions-hero-overlay"></div>
      <div className="admissions-hero-container">
        {/* Breadcrumb */}
        <div className="admissions-hero-breadcrumb">
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
          <span className="breadcrumb-current">Admissions</span>
        </div>

        {/* Content */}
        <div className="admissions-hero-content">
          <span className="admissions-hero-eyebrow">{eyebrow}</span>
          <h1 className="admissions-hero-title">{title}</h1>
          <p className="admissions-hero-description">{description}</p>
          <div className="admissions-hero-actions">
            <a
              href="#programs"
              onClick={(e) => {
                if (onNavigatePrograms) {
                  e.preventDefault();
                  onNavigatePrograms();
                }
              }}
              className="admissions-hero-btn primary"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
