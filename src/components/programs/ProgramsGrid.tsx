import React from 'react';
import { ProgramDetail } from '../../types/program';
import ProgramCard from './ProgramCard';
import './ProgramsGrid.css';

interface ProgramsGridProps {
  programs: ProgramDetail[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  onSelectProgram?: (slug: string) => void;
}

export const ProgramsGrid: React.FC<ProgramsGridProps> = ({
  programs,
  eyebrow = 'ACADEMIC PATHWAYS',
  title = 'Explore Our Programs',
  subtitle = 'Structured preparation pathways combining core board fundamentals with competitive NEET & JEE coaching.',
  onSelectProgram,
}) => {
  return (
    <section className="programs-grid-section" id="explore-programs">
      <div className="programs-grid-container">
        <div className="programs-grid-header">
          <span className="grid-eyebrow">{eyebrow}</span>
          <h2 className="grid-title">{title}</h2>
          <p className="grid-subtitle">{subtitle}</p>
        </div>

        <div className="programs-cards-wrapper">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onSelectProgram={onSelectProgram}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsGrid;
