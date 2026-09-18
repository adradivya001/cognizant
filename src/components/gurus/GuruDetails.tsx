import React from 'react';
import { Guru } from '../../types/guru';
import './GuruDetails.css';

interface GuruDetailsProps {
  guru: Guru;
  onBack?: () => void;
}

export const GuruDetails: React.FC<GuruDetailsProps> = ({ guru, onBack }) => {
  // Extract initials
  const getInitials = (name: string) => {
    const cleanName = name.replace(/^Sri\.\s*/i, '').trim();
    const parts = cleanName.split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return cleanName.substring(0, 2).toUpperCase();
  };

  // Determine subject theme class
  const getSubjectClass = (subject: string) => {
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

  const themeClass = getSubjectClass(guru.subject);
  const initials = getInitials(guru.name);

  return (
    <div className="guru-details-section">
      <div className="guru-details-container">
        {/* Navigation / Breadcrumb */}
        <div className="guru-details-top-bar">
          <a
            href="#gurus"
            onClick={(e) => {
              if (onBack) {
                e.preventDefault();
                onBack();
              }
            }}
            className="guru-back-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to All Gurus
          </a>

          <div className="guru-details-breadcrumb">
            <span>Home</span> / <span>Our Gurus</span> / <span className="current">{guru.name}</span>
          </div>
        </div>

        {/* Profile Card */}
        <div className={`guru-profile-card ${themeClass}`}>
          {/* LEFT: Avatar Container */}
          <div className="guru-profile-left">
            <div className="guru-profile-avatar">
              {guru.image ? (
                <img src={guru.image} alt={guru.name} className="guru-profile-img" />
              ) : (
                <div className="guru-profile-initials">{initials}</div>
              )}
            </div>
            <div className="guru-subject-pill">
              {guru.subject} Faculty
            </div>
          </div>

          {/* RIGHT: Content Details */}
          <div className="guru-profile-right">
            <span className="guru-subject-subtitle">{guru.subject}</span>
            <h1 className="guru-profile-name">{guru.name}</h1>

            <div className="guru-profile-divider"></div>

            <h3 className="guru-highlights-heading">Key Accomplishments & Credentials</h3>

            <ul className="guru-full-highlights-list">
              {guru.highlights.map((highlight, idx) => (
                <li key={idx} className="guru-full-highlight-item">
                  <span className="highlight-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="highlight-text">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
