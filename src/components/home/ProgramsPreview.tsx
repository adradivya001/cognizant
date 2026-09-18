import React from 'react';
import { ProgramsSectionData } from '../../types/program';
import { ArrowRight } from 'lucide-react';
import './ProgramsPreview.css';

interface ProgramsPreviewProps {
  data: ProgramsSectionData;
  onNavigate?: (href: string) => void;
}

export const ProgramsPreview: React.FC<ProgramsPreviewProps> = ({ data, onNavigate }) => {
  const handleCtaClick = (href?: string) => {
    if (!href) return;
    if (onNavigate) {
      onNavigate(href);
    } else {
      window.location.hash = href.replace('/', '');
    }
  };

  return (
    <section id="programs-preview-section" className="programs-preview-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow-pill">{data.eyebrow}</span>
          <h2 className="section-heading-text">{data.title}</h2>
          <p className="section-subtitle-text">{data.description}</p>
        </div>

        <div className="programs-grid-row">
          {data.programs.map((program) => (
            <div key={program.id} className="program-card-container">
              <div className="program-card">
                <div className="program-card-top">
                  <span className="program-code-badge">{program.code}</span>
                  <span className="program-audience-chip">{program.audienceTag}</span>
                </div>

                <div className="program-card-main">
                  <h3 className="program-title-name">{program.name}</h3>
                  <p className="program-desc-text">{program.shortDescription}</p>

                  <div className="program-focus-list">
                    {program.focus.map((f, i) => (
                      <span key={i} className="focus-pill-tag">{f}</span>
                    ))}
                  </div>
                </div>

                <div className="program-card-bottom">
                  <button
                    className="program-action-link"
                    onClick={() => handleCtaClick(program.cta.href)}
                  >
                    <span>{program.cta.label}</span>
                    <ArrowRight size={16} className="link-arrow" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;

