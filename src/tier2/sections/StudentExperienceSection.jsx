import React from 'react';
import { Container } from '../../tier1/components/Container';
import './StudentExperienceSection.css';

export function StudentExperienceSection({ data, sectionConfig, theme }) {
  const microTags = sectionConfig?.microTags || ['LEARN', 'CONNECT', 'GROW'];
  const statement = sectionConfig?.statement || 'WHERE POTENTIAL TURNS INTO PURPOSE.';
  const dominantImage = sectionConfig?.dominantImage || 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80';
  const supportingImages = sectionConfig?.supportingImages || [
    { src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80', caption: 'Collaborative Study' },
    { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80', caption: 'Campus Community' }
  ];

  return (
    <section id="student-experience" className="student-experience-section visual-section">
      <Container>
        {/* Editorial Top Bar with Micro Overlays */}
        <div className="experience-top-bar">
          <div className="micro-tag-group">
            {microTags.map((tag, idx) => (
              <span key={idx} className="editorial-tag-pill">
                {tag}
              </span>
            ))}
          </div>

          <span className="experience-statement-label">
            {statement}
          </span>
        </div>

        {/* Asymmetric Visual Collage */}
        <div className="student-collage-grid">
          {/* Dominant Large Photograph */}
          <div className="collage-dominant-frame">
            <img
              src={dominantImage}
              alt="Students learning and collaborating"
              className="dominant-student-img"
              loading="lazy"
            />
            <div className="dominant-img-overlay" />
            
            {/* Embedded Micro Statement Overlay */}
            <div className="dominant-micro-caption">
              <span className="caption-tag">LIFE AT {data?.college?.shortName?.toUpperCase() || 'CHAKRA'}</span>
              <p className="caption-body">A shared culture of intellectual curiosity and collaborative ambition.</p>
            </div>

            {/* Subtle Circular Motif Badge */}
            <div className="collage-chakra-ring">
              <svg viewBox="0 0 100 100" className="spinning-ring-svg">
                <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
                <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Overlapping Smaller Photographs */}
          <div className="collage-supporting-stack">
            {supportingImages.map((img, idx) => (
              <div key={idx} className={`supporting-img-card card-offset-${idx + 1}`}>
                <img src={img.src} alt={img.caption} loading="lazy" />
                <div className="supporting-img-badge">
                  <span>{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
