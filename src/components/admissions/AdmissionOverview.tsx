import React from 'react';
import { AdmissionPathway } from '../../types/admissions';
import { AdmissionPathwayCard } from './AdmissionPathwayCard';
import './AdmissionOverview.css';

interface AdmissionOverviewProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  pathways: AdmissionPathway[];
  onSelectProgram?: (slug: string) => void;
}

export const AdmissionOverview: React.FC<AdmissionOverviewProps> = ({
  eyebrow,
  title,
  subtitle,
  pathways,
  onSelectProgram,
}) => {
  return (
    <section className="admission-overview-section">
      <div className="admission-overview-container">
        {/* Header */}
        <div className="admission-overview-header">
          <span className="overview-eyebrow">{eyebrow}</span>
          <h2 className="overview-title">{title}</h2>
          <p className="overview-subtitle">{subtitle}</p>
        </div>

        {/* Pathways Grid */}
        <div className="admission-pathways-grid">
          {pathways.map((pathway) => (
            <AdmissionPathwayCard
              key={pathway.programId}
              pathway={pathway}
              onSelectProgram={onSelectProgram}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
