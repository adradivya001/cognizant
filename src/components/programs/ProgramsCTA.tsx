import React from 'react';
import { PhoneCall, Navigation } from 'lucide-react';
import './ProgramsCTA.css';

interface ProgramsCTAProps {
  title?: string;
  subtitle?: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  onContactClick?: () => void;
}

export const ProgramsCTA: React.FC<ProgramsCTAProps> = ({
  title = 'Have Questions About Our Programs?',
  subtitle = 'Connect with Cognizant admissions desk to understand the right academic pathway for your educational goals.',
  primaryBtnText = 'Contact Cognizant',
  secondaryBtnText = 'Get Directions',
  onContactClick,
}) => {
  return (
    <section className="programs-cta-section" id="programs-contact">
      <div className="programs-cta-container">
        <div className="programs-cta-card">
          <div className="cta-info">
            <span className="cta-eyebrow">ADMISSIONS & COUNSELING</span>
            <h2 className="cta-title">{title}</h2>
            <p className="cta-subtitle">{subtitle}</p>
          </div>

          <div className="cta-actions">
            <a
              href="#contact"
              className="cta-btn primary"
              onClick={(e) => {
                if (onContactClick) {
                  e.preventDefault();
                  onContactClick();
                }
              }}
            >
              <PhoneCall size={18} />
              <span>{primaryBtnText}</span>
            </a>

            <a
              href="https://maps.google.com/?q=Ramnagar+80+Feet+Road+Anantapur+Andhra+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn secondary"
            >
              <Navigation size={18} />
              <span>{secondaryBtnText}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsCTA;
