import React from 'react';
import { ProgramDetail } from '../../types/program';
import { ArrowRight, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

interface ProgramCardProps {
  program: ProgramDetail;
  onSelectProgram?: (slug: string) => void;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  program,
  onSelectProgram,
}) => {
  const isUpdating = program.status === 'information-updating';

  return (
    <article className={`program-main-card ${isUpdating ? 'status-updating' : ''}`}>
      <div className="card-top-bar">
        <div className="program-code-box">
          <span className="code-text">{program.code}</span>
        </div>
        {isUpdating ? (
          <span className="status-badge updating">
            <AlertCircle size={12} />
            <span>Updating</span>
          </span>
        ) : (
          <span className="status-badge active">
            <CheckCircle2 size={12} />
            <span>Active Program</span>
          </span>
        )}
      </div>

      <div className="card-body">
        <h3 className="program-name">{program.name}</h3>
        <span className="audience-tag">{program.audienceTag}</span>
        <p className="program-short-desc">{program.shortDescription}</p>

        {program.duration && (
          <div className="duration-info">
            <Clock size={14} />
            <span>{program.duration}</span>
          </div>
        )}
      </div>

      <div className="card-footer">
        <a
          href={`/programs/${program.slug}`}
          className="explore-program-btn"
          onClick={(e) => {
            if (onSelectProgram) {
              e.preventDefault();
              onSelectProgram(program.slug);
            }
          }}
        >
          <span>{program.cta?.text || 'Explore Program'}</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </article>
  );
};

export default ProgramCard;
