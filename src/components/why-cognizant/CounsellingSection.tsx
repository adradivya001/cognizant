import React from 'react';
import { CounsellingData } from '../../types/whyCognizant';
import { UserCheck, ArrowRight } from 'lucide-react';
import './CounsellingSection.css';

interface CounsellingSectionProps {
  data: CounsellingData;
}

export const CounsellingSection: React.FC<CounsellingSectionProps> = ({ data }) => {
  return (
    <section className="counselling-section" id="counselling">
      <div className="counselling-container">
        <div className="counselling-header">
          <span className="counselling-eyebrow">PERSONALIZED MENTORSHIP</span>
          <h2 className="counselling-title">{data.title}</h2>
          <p className="counselling-desc">{data.description}</p>
        </div>

        <div className="counselling-grid">
          {data.steps.map((step, idx) => (
            <div key={idx} className="counselling-card">
              <div className="counselling-card-top">
                <div className="counselling-icon-box">
                  <UserCheck size={20} />
                </div>
                <span className="counselling-step-num">0{idx + 1}</span>
              </div>
              <h3 className="counselling-stage-name">{step.stage}</h3>
              <p className="counselling-stage-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounsellingSection;
