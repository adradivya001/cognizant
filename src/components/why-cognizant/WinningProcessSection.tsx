import React from 'react';
import { WinningProcessStep } from '../../types/whyCognizant';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './WinningProcessSection.css';

interface WinningProcessSectionProps {
  steps: WinningProcessStep[];
  heading?: string;
}

export const WinningProcessSection: React.FC<WinningProcessSectionProps> = ({
  steps,
  heading = 'OUR WINNING PROCESS',
}) => {
  return (
    <section className="wprocess-section" id="winning-process">
      <div className="wprocess-container">
        <div className="wprocess-header">
          <span className="wprocess-eyebrow">ACADEMIC OBJECTIVES</span>
          <h2 className="wprocess-title">{heading}</h2>
          <p className="wprocess-subtitle">
            A 3-stage developmental methodology engineered to transform student analytical ability into exam excellence.
          </p>
        </div>

        <div className="wprocess-grid">
          {steps.map((step, idx) => (
            <div key={step.id || idx} className="wprocess-card">
              <div className="wprocess-card-header">
                <span className="wprocess-num">{step.number}</span>
              </div>

              <h3 className="wprocess-step-title">{step.title}</h3>
              <p className="wprocess-short-desc">{step.shortDesc}</p>
              <p className="wprocess-full-desc">{step.fullDesc}</p>

              <div className="wprocess-highlights">
                {step.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="wprocess-highlight-item">
                    <CheckCircle2 size={16} className="hl-icon" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {idx < steps.length - 1 && (
                <div className="wprocess-connector" aria-hidden="true">
                  <ArrowRight size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinningProcessSection;
