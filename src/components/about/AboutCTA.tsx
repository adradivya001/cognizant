import React from 'react';
import { AboutCtaData } from '../../types/about';
import { ArrowRight, PhoneCall } from 'lucide-react';
import './AboutCTA.css';

interface AboutCTAProps {
  data: AboutCtaData;
  onExplorePrograms?: () => void;
  onContactClick?: () => void;
}

export const AboutCTA: React.FC<AboutCTAProps> = ({
  data,
  onExplorePrograms,
  onContactClick,
}) => {
  return (
    <section className="about-cta-section">
      <div className="about-cta-container">
        <div className="about-cta-card">
          <div className="about-cta-content">
            <span className="about-cta-eyebrow">TAKE THE NEXT STEP</span>
            <h2 className="about-cta-title">{data.title}</h2>
            <p className="about-cta-desc">{data.description}</p>
          </div>

          <div className="about-cta-actions">
            <a
              href={data.primaryCtaHref}
              className="cta-btn primary"
              onClick={(e) => {
                if (onExplorePrograms) {
                  e.preventDefault();
                  onExplorePrograms();
                }
              }}
            >
              <span>{data.primaryCtaText}</span>
              <ArrowRight size={18} />
            </a>

            <a
              href={data.secondaryCtaHref}
              className="cta-btn secondary"
              onClick={(e) => {
                if (onContactClick) {
                  e.preventDefault();
                  onContactClick();
                }
              }}
            >
              <PhoneCall size={18} />
              <span>{data.secondaryCtaText}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
