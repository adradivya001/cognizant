import React from 'react';
import { WhyIntroData } from '../../types/whyCognizant';
import { CheckCircle2 } from 'lucide-react';
import './WhyIntro.css';

interface WhyIntroProps {
  data: WhyIntroData;
}

export const WhyIntro: React.FC<WhyIntroProps> = ({ data }) => {
  return (
    <section className="why-intro-section">
      <div className="why-intro-container">
        <div className="why-intro-grid">
          <div className="why-intro-left">
            <span className="intro-eyebrow">{data.eyebrow}</span>
            <h2 className="intro-title">{data.title}</h2>
            <p className="intro-desc">{data.description}</p>
          </div>

          <div className="why-intro-right">
            <ul className="intro-bullets-list">
              {data.bullets.map((bullet, idx) => (
                <li key={idx} className="bullet-item">
                  <CheckCircle2 size={18} className="bullet-icon" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIntro;
