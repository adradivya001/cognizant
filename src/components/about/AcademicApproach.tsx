import React from 'react';
import { ApproachStep } from '../../types/about';
import { ArrowRight } from 'lucide-react';
import './AcademicApproach.css';

interface AcademicApproachProps {
  steps: ApproachStep[];
  heading?: string;
}

export const AcademicApproach: React.FC<AcademicApproachProps> = ({
  steps,
  heading = 'How Cognizant Approaches Student Development',
}) => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        <div className="approach-header">
          <span className="approach-eyebrow">PEDAGOGICAL STRATEGY</span>
          <h2 className="approach-title">{heading}</h2>
        </div>

        <div className="approach-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="approach-card">
              <div className="approach-num-badge">{step.number}</div>
              <h3 className="approach-card-title">{step.title}</h3>
              <p className="approach-card-desc">{step.description}</p>
              {idx < steps.length - 1 && (
                <div className="approach-arrow" aria-hidden="true">
                  <ArrowRight size={18} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicApproach;
