import React from 'react';
import { WhyCognizantCtaData } from '../../types/whyCognizant';
import { ArrowRight, Users } from 'lucide-react';
import './WhyCognizantCTA.css';

interface WhyCognizantCTAProps {
  data: WhyCognizantCtaData;
  onExplorePrograms?: () => void;
  onExploreGurus?: () => void;
}

export const WhyCognizantCTA: React.FC<WhyCognizantCTAProps> = ({
  data,
  onExplorePrograms,
  onExploreGurus,
}) => {
  return (
    <section className="whycog-cta-section">
      <div className="whycog-cta-container">
        <div className="whycog-cta-card">
          <div className="cta-content">
            <span className="cta-eyebrow">YOUR JOURNEY STARTS HERE</span>
            <h2 className="cta-title">{data.title}</h2>
            <p className="cta-subtitle">{data.subtitle}</p>
          </div>

          <div className="cta-actions">
            <a
              href="/programs"
              className="whycog-btn primary"
              onClick={(e) => {
                if (onExplorePrograms) {
                  e.preventDefault();
                  onExplorePrograms();
                }
              }}
            >
              <span>{data.primaryBtnText}</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#gurus"
              className="whycog-btn secondary"
              onClick={(e) => {
                if (onExploreGurus) {
                  e.preventDefault();
                  onExploreGurus();
                }
              }}
            >
              <Users size={18} />
              <span>{data.secondaryBtnText}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCognizantCTA;
