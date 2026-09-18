import React from 'react';
import { Sparkles, ChevronRight, BookOpen } from 'lucide-react';
import './ProgramsHero.css';

interface ProgramsHeroProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  breadcrumb?: string;
  onNavigateHome?: () => void;
}

export const ProgramsHero: React.FC<ProgramsHeroProps> = ({
  eyebrow = 'OUR PROGRAMS',
  title = 'Programs Designed Around the NEET & JEE Journey',
  description = 'Cognizant Institute provides structured academic pathways tailored for students at different stages of their competitive entrance preparation.',
  breadcrumb = 'Home / Programs',
  onNavigateHome,
}) => {
  return (
    <section className="programs-hero-section">
      <div className="programs-hero-bg">
        <div className="programs-hero-overlay" />
        <div className="programs-hero-glow" />
      </div>

      <div className="programs-hero-container">
        {/* Breadcrumb */}
        <div className="programs-breadcrumb">
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
          <span>Programs</span>
        </div>

        <div className="programs-hero-content">
          <div className="programs-hero-eyebrow">
            <Sparkles size={14} />
            <span>{eyebrow}</span>
          </div>

          <h1 className="programs-hero-title">{title}</h1>
          <p className="programs-hero-desc">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProgramsHero;
