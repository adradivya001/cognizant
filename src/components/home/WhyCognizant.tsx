import React from 'react';
import { WhyFeature } from '../../types/site';
import { 
  Users, 
  Target, 
  BookOpen, 
  Building2, 
  UserCheck, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import './WhyCognizant.css';

interface WhyCognizantProps {
  features: WhyFeature[];
  ctaText?: string;
  ctaHref?: string;
}

const getIconComponent = (iconName?: string) => {
  switch (iconName) {
    case 'users':
      return <Users className="why-icon" />;
    case 'target':
      return <Target className="why-icon" />;
    case 'book':
      return <BookOpen className="why-icon" />;
    case 'building':
      return <Building2 className="why-icon" />;
    case 'user-check':
      return <UserCheck className="why-icon" />;
    default:
      return <CheckCircle2 className="why-icon" />;
  }
};

export const WhyCognizant: React.FC<WhyCognizantProps> = ({
  features,
  ctaText = 'Explore Why Cognizant',
  ctaHref = '/why-cognizant',
}) => {
  return (
    <section className="why-section" id="why-cognizant">
      <div className="why-container">
        <div className="why-header">
          <span className="why-eyebrow">WHY COGNIZANT</span>
          <h2 className="why-title">A structured approach to academic preparation.</h2>
          <p className="why-subtitle">
            Designed around core educational pillars to build strong conceptual clarity, competitive confidence, and consistent academic progress.
          </p>
        </div>

        <div className="why-grid">
          {features.map((feature, idx) => (
            <div key={feature.id || idx} className={`why-card ${idx === 0 ? 'why-card-featured' : ''}`}>
              <div className="why-card-header">
                <div className="why-icon-box">
                  {getIconComponent(feature.icon)}
                </div>
                <span className="why-card-number">0{idx + 1}</span>
              </div>
              <h3 className="why-card-title">{feature.title}</h3>
              <p className="why-card-desc">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="why-footer">
          <a href={ctaHref} className="why-cta-btn">
            <span>{ctaText}</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyCognizant;
