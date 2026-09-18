import React from 'react';
import { AboutHeroData } from '../../types/about';
import { Sparkles, ChevronRight, GraduationCap } from 'lucide-react';
import './AboutHero.css';

interface AboutHeroProps {
  data: AboutHeroData;
  onNavigateHome?: () => void;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ data, onNavigateHome }) => {
  return (
    <section className="about-hero-section">
      <div className="about-hero-bg">
        <div className="about-hero-overlay" />
        <div className="about-hero-glow" />
      </div>

      <div className="about-hero-container">
        {/* Breadcrumb */}
        <div className="about-breadcrumb">
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
          <span>About Cognizant</span>
        </div>

        <div className="about-hero-grid">
          <div className="about-hero-content">
            <div className="about-hero-eyebrow">
              <Sparkles size={14} />
              <span>{data.eyebrow}</span>
            </div>
            <h1 className="about-hero-title">{data.title}</h1>
            <p className="about-hero-desc">{data.description}</p>
          </div>

          <div className="about-hero-visual">
            <div className="about-visual-card">
              <div className="about-visual-emblem">
                <GraduationCap size={48} className="emblem-icon" />
              </div>
              <div className="about-visual-text">
                <h3 className="about-visual-title">Cognizant Institute</h3>
                <p className="about-visual-sub">NEET & JEE Academic System</p>
              </div>
              <div className="about-visual-tag">Est. 2022 • Anantapur</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
