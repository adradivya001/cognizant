import React from 'react';
import { Guru } from '../../types/guru';
import { ArrowRight, CheckCircle2, Award } from 'lucide-react';

interface GuruCardProps {
  guru: Guru;
  onSelectGuru?: (slug: string) => void;
}

const getInitials = (name: string): string => {
  const clean = name.replace(/^(Sri\.|Dr\.|Prof\.)\s+/i, '').trim();
  const parts = clean.split(/\s+/);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return clean.substring(0, 2).toUpperCase();
};

const getSubjectClass = (subject: string): string => {
  switch (subject) {
    case 'Mathematics':
      return 'theme-math';
    case 'Chemistry':
      return 'theme-chem';
    case 'Physics':
      return 'theme-phys';
    case 'Biology':
      return 'theme-bio';
    default:
      return 'theme-math';
  }
};

export const GuruCard: React.FC<GuruCardProps> = ({ guru, onSelectGuru }) => {
  const subjectClass = getSubjectClass(guru.subject);
  const displayHighlights = guru.highlights.slice(0, 3);
  const hasMore = guru.highlights.length > 3;

  return (
    <article className={`guru-main-card ${subjectClass}`}>
      <div className="guru-card-header">
        <div className="guru-avatar-circle">
          <span className="guru-avatar-text">{getInitials(guru.name)}</span>
        </div>
        <span className={`guru-sub-badge ${subjectClass}`}>{guru.subject}</span>
      </div>

      <div className="guru-card-body">
        <h3 className="guru-card-name">{guru.name}</h3>

        <div className="guru-highlights-list">
          {displayHighlights.map((hl, idx) => (
            <div key={idx} className="guru-hl-item">
              <CheckCircle2 size={14} className="hl-bullet" />
              <span>{hl}</span>
            </div>
          ))}
          {hasMore && (
            <div className="more-hl-note">
              <span>+{guru.highlights.length - 3} more credentials...</span>
            </div>
          )}
        </div>
      </div>

      <div className="guru-card-footer">
        <a
          href={`/gurus/${guru.slug}`}
          className="guru-profile-link"
          onClick={(e) => {
            if (onSelectGuru) {
              e.preventDefault();
              onSelectGuru(guru.slug);
            }
          }}
        >
          <span>View Profile</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </article>
  );
};

export default GuruCard;
