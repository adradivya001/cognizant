import React from 'react';
import { AdmissionPathway } from '../../types/admissions';
import './AdmissionPathwayCard.css';

interface AdmissionPathwayCardProps {
  pathway: AdmissionPathway;
  onSelectProgram?: (slug: string) => void;
}

export const AdmissionPathwayCard: React.FC<AdmissionPathwayCardProps> = ({
  pathway,
  onSelectProgram,
}) => {
  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onSelectProgram) {
      onSelectProgram(pathway.slug);
    }
  };

  return (
    <div className={`admission-pathway-card code-${pathway.programId}`}>
      <div className="pathway-card-header">
        <div className="pathway-code-badge">{pathway.programCode}</div>
        <div className="pathway-status-pill">
          <span className="status-dot"></span>
          <span>{pathway.statusText}</span>
        </div>
      </div>

      <div className="pathway-card-body">
        <h3 className="pathway-name">{pathway.programName}</h3>
        <p className="pathway-stage">{pathway.studentStage}</p>

        {pathway.duration && (
          <div className="pathway-meta-item">
            <span className="meta-label">Duration:</span>
            <span className="meta-value">{pathway.duration}</span>
          </div>
        )}

        {pathway.assessmentMethod && (
          <div className="pathway-assessment-box">
            <span className="assessment-label">Admission Basis:</span>
            <p className="assessment-text">{pathway.assessmentMethod}</p>
          </div>
        )}

        {pathway.features && pathway.features.length > 0 && (
          <ul className="pathway-features-list">
            {pathway.features.map((feat, idx) => (
              <li key={idx} className="pathway-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feature-check">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pathway-card-footer">
        <a
          href={`#programs/${pathway.slug}`}
          onClick={handleCardClick}
          className="pathway-cta-link"
        >
          <span>Explore Program</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};
