import React from 'react';
import { JourneyStep } from '../../types/program';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './ProgramJourney.css';

interface ProgramJourneyProps {
  steps: JourneyStep[];
  heading?: string;
}

export const ProgramJourney: React.FC<ProgramJourneyProps> = ({
  steps,
  heading = 'Example Academic Pathways',
}) => {
  return (
    <section className="journey-section">
      <div className="journey-container">
        <div className="journey-header">
          <span className="journey-eyebrow">ACADEMIC PROGRESSION</span>
          <h2 className="journey-title">{heading}</h2>
          <p className="journey-subtitle">
            Flexible preparation options designed to support students entering after 10th or after 12th Intermediate.
          </p>
        </div>

        <div className="journey-timeline">
          {steps.map((step, idx) => (
            <div key={idx} className="journey-step-card">
              <div className="step-badge-col">
                <div className="step-circle">
                  <span>0{idx + 1}</span>
                </div>
                {idx < steps.length - 1 && <div className="step-line" />}
              </div>

              <div className="step-content-col">
                <div className="step-stage-title">
                  {step.stage}
                  {step.programCode && (
                    <span className="step-program-tag">
                      {step.programCode} — {step.programName}
                    </span>
                  )}
                </div>
                <p className="step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramJourney;
