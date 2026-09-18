import React from 'react';
import { PrincipleItem } from '../../types/about';
import { Users, Layers, BookOpen, UserCheck, LineChart, ArrowRight } from 'lucide-react';
import './AcademicPrinciples.css';

interface AcademicPrinciplesProps {
  principles: PrincipleItem[];
  heading?: string;
  onExploreWhy?: () => void;
}

const getPrincipleIcon = (name: string) => {
  switch (name) {
    case 'users':
      return <Users size={22} />;
    case 'layers':
      return <Layers size={22} />;
    case 'book-open':
      return <BookOpen size={22} />;
    case 'user-check':
      return <UserCheck size={22} />;
    case 'line-chart':
      return <LineChart size={22} />;
    default:
      return <Users size={22} />;
  }
};

export const AcademicPrinciples: React.FC<AcademicPrinciplesProps> = ({
  principles,
  heading = 'Academic Principles',
  onExploreWhy,
}) => {
  return (
    <section className="principles-section" id="principles">
      <div className="principles-container">
        <div className="principles-header">
          <span className="principles-eyebrow">CORE PILLARS</span>
          <h2 className="principles-title">{heading}</h2>
        </div>

        <div className="principles-grid">
          {principles.map((item, idx) => (
            <div key={idx} className="principle-card">
              <div className="principle-card-top">
                <div className="principle-icon-box">
                  {getPrincipleIcon(item.iconName)}
                </div>
                <span className="principle-num">{item.number}</span>
              </div>
              <h3 className="principle-title">{item.title}</h3>
              <p className="principle-desc">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="principles-footer">
          <a
            href="#about"
            className="explore-why-btn"
            onClick={(e) => {
              if (onExploreWhy) {
                e.preventDefault();
                onExploreWhy();
              }
            }}
          >
            <span>Explore Why Cognizant</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AcademicPrinciples;
