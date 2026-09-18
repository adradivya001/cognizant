import React from 'react';
import { WhyCognizantHeroData } from '../../types/whyCognizant';
import { Sparkles, ChevronRight } from 'lucide-react';
import './WhyCognizantHero.css';

interface WhyCognizantHeroProps {
  data: WhyCognizantHeroData;
  onNavigateHome?: () => void;
}

export const WhyCognizantHero: React.FC<WhyCognizantHeroProps> = ({
  data,
  onNavigateHome,
}) => {
  return (
    <section className="whycog-hero-section">
      <div className="whycog-hero-bg">
        <div className="whycog-hero-overlay" />
        <div className="whycog-hero-glow" />
      </div>

      <div className="whycog-hero-container">
        {/* Breadcrumb */}
        <div className="whycog-breadcrumb">
          <a
            href="/"
            onClick={(e) => {
              if (onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
              }
            }}
          >
            Home
          </a>
          <ChevronRight size={14} />
          <span>Why Cognizant</span>
        </div>

        <div className="whycog-hero-content">
          <div className="whycog-hero-eyebrow">
            <Sparkles size={14} />
            <span>{data.eyebrow}</span>
          </div>

          <h1 className="whycog-hero-title">{data.title}</h1>
          <p className="whycog-hero-desc">{data.description}</p>
        </div>
      </div>
    </section>
  );
};

export default WhyCognizantHero;
