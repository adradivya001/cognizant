import React from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';
import './GurusHero.css';

interface GurusHeroProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  breadcrumb?: string;
  onNavigateHome?: () => void;
}

export const GurusHero: React.FC<GurusHeroProps> = ({
  eyebrow = 'OUR GURUS',
  title = 'Meet the Gurus Behind the Academic Journey',
  description = 'All of our Gurus at Cognizant are with great experience in nurturing students to achieve best ranks in NEET and JEE.',
  breadcrumb = 'Home / Our Gurus',
  onNavigateHome,
}) => {
  return (
    <section className="gurus-hero-section">
      <div className="gurus-hero-bg">
        <div className="gurus-hero-overlay" />
        <div className="gurus-hero-glow" />
      </div>

      <div className="gurus-hero-container">
        {/* Breadcrumb */}
        <div className="gurus-breadcrumb">
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
          <span>Our Gurus</span>
        </div>

        <div className="gurus-hero-content">
          <div className="gurus-hero-eyebrow">
            <Sparkles size={14} />
            <span>{eyebrow}</span>
          </div>

          <h1 className="gurus-hero-title">{title}</h1>
          <p className="gurus-hero-desc">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default GurusHero;
