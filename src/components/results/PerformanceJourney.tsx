import React from 'react';
import { JourneyStep } from '../../types/results';
import './PerformanceJourney.css';

interface PerformanceJourneyProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: JourneyStep[];
}

export const PerformanceJourney: React.FC<PerformanceJourneyProps> = ({
  eyebrow,
  title,
  subtitle,
  steps,
}) => {
  return (
    <section className="performance-journey-section">
      <div className="performance-journey-container">
        <div className="performance-journey-header">
          <span className="journey-eyebrow">{eyebrow}</span>
          <h2 className="journey-title">{title}</h2>
          <p className="journey-subtitle">{subtitle}</p>
        </div>

        <div className="journey-flow-grid">
          {steps.map((step) => (
            <div key={step.stepNumber} className="journey-step-card">
              <div className="step-badge">{step.stepNumber}</div>
              <h3 className="stage-name">{step.stageName}</h3>
              <p className="stage-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
