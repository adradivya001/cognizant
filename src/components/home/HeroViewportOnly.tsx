import React from 'react';
import { ArrowRight, BookOpen, Award, CheckCircle, Sparkles } from 'lucide-react';
import './HeroViewportOnly.css';

interface HeroViewportOnlyProps {
  onApplyClick?: () => void;
  onExploreClick?: () => void;
}

export const HeroViewportOnly: React.FC<HeroViewportOnlyProps> = ({
  onApplyClick,
  onExploreClick,
}) => {
  const verifiedStats = [
    { value: '2022', label: 'Founded' },
    { value: '25+ Yrs', label: 'Academic Experience' },
    { value: 'NEET', label: 'Focused Preparation' },
    { value: 'JEE', label: 'Focused Preparation' },
  ];

  return (
    <section className="hero-viewport-section" id="home">
      {/* Background Visual Layer */}
      <div className="hero-bg-layer">
        <div className="hero-bg-overlay" />
        <div className="hero-bg-glow" />
      </div>

      {/* Hero Content Grid */}
      <div className="hero-viewport-container">
        <div className="hero-main-wrapper">
          {/* Eyebrow Badge */}
          <div className="hero-eyebrow-badge">
            <Sparkles size={14} className="eyebrow-icon" />
            <span>ADMISSIONS OPEN • 2026–27</span>
          </div>

          {/* Institute Title */}
          <h1 className="hero-main-title">
            COGNIZANT INSTITUTE <br />
            <span className="hero-title-accent">FOR NEET & JEE</span>
          </h1>

          {/* Supporting Headline */}
          <p className="hero-supporting-headline">
            Building Strong Foundations for Tomorrow's Success
          </p>

          {/* Short Supporting Paragraph (1-2 lines max) */}
          <p className="hero-supporting-desc">
            Empowering student excellence in Intermediate education, NEET & JEE coaching through structured methodology and experienced IIT faculty mentorship.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <button className="hero-cta-primary" onClick={onApplyClick}>
              <span>Apply Now</span>
              <ArrowRight size={18} />
            </button>
            
            <a href="#academics" className="hero-cta-secondary" onClick={onExploreClick}>
              <BookOpen size={18} />
              <span>Explore Courses</span>
            </a>
          </div>
        </div>

        {/* Bottom Statistics Strip */}
        <div className="hero-bottom-stats-strip">
          <div className="stats-inner-container">
            {verifiedStats.map((stat, idx) => (
              <React.Fragment key={idx}>
                <div className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
                {idx < verifiedStats.length - 1 && <div className="stat-divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroViewportOnly;
