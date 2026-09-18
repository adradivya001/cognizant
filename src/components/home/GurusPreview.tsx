import React, { useState } from 'react';
import { Guru } from '../../types/guru';
import { User, ArrowRight, Award, BookOpen } from 'lucide-react';
import './GurusPreview.css';

interface GurusPreviewProps {
  gurus: Guru[];
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export const GurusPreview: React.FC<GurusPreviewProps> = ({
  gurus,
  title = 'Meet Our Gurus',
  subtitle = 'Experienced academic mentors dedicated to guiding NEET & JEE aspirants toward concept mastery.',
  ctaText = 'Meet All Our Gurus',
  ctaHref = '/gurus',
}) => {
  const [activeSubject, setActiveSubject] = useState<string>('All');

  const subjects = ['All', ...Array.from(new Set(gurus.map((g) => g.subject)))];

  const filteredGurus = activeSubject === 'All'
    ? gurus
    : gurus.filter((g) => g.subject.toLowerCase() === activeSubject.toLowerCase());

  // Helper to get initials for clean avatar treatment
  const getInitials = (name: string) => {
    const cleanName = name.replace(/^(Sri\.|Dr\.|Prof\.)\s+/i, '');
    const parts = cleanName.trim().split(/\s+/);
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return parts[0] ? parts[0].substring(0, 2).toUpperCase() : 'CG';
  };

  return (
    <section className="gurus-section" id="gurus">
      <div className="gurus-container">
        <div className="gurus-header">
          <span className="gurus-eyebrow">DISTINGUISHED FACULTY</span>
          <h2 className="gurus-title">{title}</h2>
          <p className="gurus-subtitle">{subtitle}</p>

          {/* Subject Filter Tabs */}
          <div className="gurus-filter-bar">
            {subjects.map((sub) => (
              <button
                key={sub}
                className={`guru-filter-btn ${activeSubject === sub ? 'active' : ''}`}
                onClick={() => setActiveSubject(sub)}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        <div className="gurus-grid">
          {filteredGurus.map((guru) => (
            <div key={guru.id} className="guru-card">
              <div className="guru-avatar-wrapper">
                {guru.image ? (
                  <img src={guru.image} alt={guru.name} className="guru-image" />
                ) : (
                  <div className="guru-avatar-placeholder">
                    <span className="guru-initials">{getInitials(guru.name)}</span>
                  </div>
                )}
                <span className="guru-subject-badge">{guru.subject}</span>
              </div>

              <div className="guru-info">
                <h3 className="guru-name">{guru.name}</h3>
                {guru.role && <p className="guru-role">{guru.role}</p>}
                
                {guru.highlight && (
                  <div className="guru-highlight-box">
                    <Award size={14} className="guru-highlight-icon" />
                    <span>{guru.highlight}</span>
                  </div>
                )}

                {guru.bio && <p className="guru-bio">{guru.bio}</p>}
              </div>

              <div className="guru-card-footer">
                <a href={`${ctaHref}#${guru.id}`} className="guru-link">
                  <span>View Mentorship Details</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="gurus-footer">
          <a href={ctaHref} className="gurus-cta-btn">
            <span>{ctaText}</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GurusPreview;
