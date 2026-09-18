import React from 'react';
import { FactItem } from '../../types/about';
import { Calendar, Award, Stethoscope, Calculator } from 'lucide-react';
import './AboutFacts.css';

interface AboutFactsProps {
  facts: FactItem[];
}

const getFactIcon = (name: string) => {
  switch (name) {
    case 'calendar':
      return <Calendar size={24} />;
    case 'award':
      return <Award size={24} />;
    case 'stethoscope':
      return <Stethoscope size={24} />;
    case 'calculator':
      return <Calculator size={24} />;
    default:
      return <Award size={24} />;
  }
};

export const AboutFacts: React.FC<AboutFactsProps> = ({ facts }) => {
  return (
    <section className="about-facts-section">
      <div className="facts-container">
        <div className="facts-grid">
          {facts.map((fact, idx) => (
            <div key={idx} className="fact-card">
              <div className="fact-icon-wrapper">
                {getFactIcon(fact.iconName)}
              </div>
              <div className="fact-value">{fact.value}</div>
              <div className="fact-label">{fact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFacts;
