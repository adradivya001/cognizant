import React from 'react';
import { AdmissionStep } from '../../types/admissions';
import './AdmissionProcess.css';

interface AdmissionProcessProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: AdmissionStep[];
}

export const AdmissionProcess: React.FC<AdmissionProcessProps> = ({
  eyebrow,
  title,
  subtitle,
  steps,
}) => {
  return (
    <section className="admission-process-section">
      <div className="admission-process-container">
        <div className="admission-process-header">
          <span className="process-eyebrow">{eyebrow}</span>
          <h2 className="process-title">{title}</h2>
          <p className="process-subtitle">{subtitle}</p>
        </div>

        <div className="admission-process-timeline">
          {steps.map((step) => (
            <div key={step.stepNumber} className="timeline-item">
              <div className="timeline-marker">
                <span className="marker-number">{step.stepNumber}</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-meta">
                  <span className="timeline-program-code">{step.programCode}</span>
                  {step.badge && <span className="timeline-badge">{step.badge}</span>}
                </div>
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
