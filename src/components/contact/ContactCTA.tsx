import React from 'react';
import './ContactCTA.css';

interface ContactCTAProps {
  title: string;
  description: string;
  primaryBtnText: string;
  secondaryBtnText: string;
  onExplorePrograms?: () => void;
  onContactClick?: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  title,
  description,
  primaryBtnText,
  secondaryBtnText,
  onExplorePrograms,
  onContactClick,
}) => {
  return (
    <section className="contact-cta-section">
      <div className="contact-cta-container">
        <div className="contact-cta-card">
          <div className="contact-cta-glow"></div>
          <h2 className="contact-cta-title">{title}</h2>
          <p className="contact-cta-subtitle">{description}</p>
          <div className="contact-cta-buttons">
            <a
              href="#programs"
              onClick={(e) => {
                if (onExplorePrograms) {
                  e.preventDefault();
                  onExplorePrograms();
                }
              }}
              className="contact-cta-btn primary"
            >
              {primaryBtnText}
            </a>
            <button
              onClick={() => {
                if (onContactClick) {
                  onContactClick();
                } else {
                  const formEl = document.getElementById('enquiry-form');
                  if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="contact-cta-btn secondary"
            >
              {secondaryBtnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
