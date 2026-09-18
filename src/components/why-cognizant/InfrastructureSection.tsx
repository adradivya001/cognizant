import React from 'react';
import { InfrastructureData } from '../../types/whyCognizant';
import { Building2, CheckCircle2 } from 'lucide-react';
import './InfrastructureSection.css';

interface InfrastructureSectionProps {
  data: InfrastructureData;
}

export const InfrastructureSection: React.FC<InfrastructureSectionProps> = ({ data }) => {
  return (
    <section className="infr-section" id="infrastructure">
      <div className="infr-container">
        <div className="infr-grid">
          <div className="infr-content-col">
            <span className="infr-eyebrow">CAMPUS & LEARNING ENVIRONMENT</span>
            <h2 className="infr-title">{data.title}</h2>
            <p className="infr-desc">{data.description}</p>

            <div className="infr-features-grid">
              {data.features.map((item, idx) => (
                <div key={idx} className="infr-feature-card">
                  <CheckCircle2 size={18} className="infr-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="infr-visual-col">
            <div className="infr-visual-card">
              <Building2 size={54} className="infr-card-icon" />
              <h3 className="infr-card-title">Cognizant Ramnagar Campus</h3>
              <p className="infr-card-sub">Anantapur, Andhra Pradesh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
