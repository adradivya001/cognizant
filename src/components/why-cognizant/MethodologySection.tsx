import React from 'react';
import { MethodologyData } from '../../types/whyCognizant';
import { ArrowRight } from 'lucide-react';
import './MethodologySection.css';

interface MethodologySectionProps {
  data: MethodologyData;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ data }) => {
  return (
    <section className="methodology-section" id="methodology">
      <div className="methodology-container">
        <div className="methodology-header">
          <span className="methodology-eyebrow">TEACHING PEDAGOGY</span>
          <h2 className="methodology-title">{data.title}</h2>
          <p className="methodology-desc">{data.description}</p>
        </div>

        <div className="methodology-flow">
          {data.steps.map((step, idx) => (
            <div key={idx} className="flow-card">
              <div className="flow-num">{step.number}</div>
              <span className="flow-stage-tag">{step.stage}</span>
              <h3 className="flow-title">{step.title}</h3>
              <p className="flow-desc">{step.description}</p>
              {idx < data.steps.length - 1 && (
                <div className="flow-arrow" aria-hidden="true">
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

export default MethodologySection;
