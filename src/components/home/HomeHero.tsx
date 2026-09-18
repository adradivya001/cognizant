import React from 'react';
import { HeroData } from '../../types/site';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import './HomeHero.css';

interface HomeHeroProps {
  data: HeroData;
  onNavigate?: (href: string) => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ data, onNavigate }) => {
  const handleCtaClick = (href?: string) => {
    if (!href) return;
    if (onNavigate) {
      onNavigate(href);
    } else if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = href.replace('/', '');
    }
  };

  return (
    <section className="new-home-hero">
      <div className="hero-content-container">
        <div className="hero-left-col">
          {/* Eyebrow */}
          <div className="hero-eyebrow-badge">
            <span className="eyebrow-pulse-dot" />
            <span className="eyebrow-text">{data.eyebrow}</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-main-title">
            {data.title.split('\n').map((line, idx) => (
              <span key={idx} className="title-block-line">{line}</span>
            ))}
          </h1>

          {/* Short Description */}
          <p className="hero-description-para">{data.description}</p>

          {/* Primary & Secondary Action CTAs */}
          <div className="hero-cta-group">
            <button
              className="hero-btn primary-hero-btn"
              onClick={() => handleCtaClick(data.primaryCta.href)}
            >
              <span>{data.primaryCta.label}</span>
              <ArrowUpRight size={18} />
            </button>

            <button
              className="hero-btn secondary-hero-btn"
              onClick={() => handleCtaClick(data.secondaryCta.href)}
            >
              <span>{data.secondaryCta.label}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Sophisticated Academic Visual Area */}
        <div className="hero-right-col">
          <div className="hero-visual-card-frame">
            {data.visualImage ? (
              <img
                src={data.visualImage}
                alt={data.eyebrow}
                className="hero-card-img"
                loading="eager"
              />
            ) : (
              <div className="hero-abstract-emblem">
                <span className="abstract-c">COGNIZANT</span>
              </div>
            )}
            <div className="hero-card-gradient-overlay" />

            <div className="hero-visual-floating-badge">
              <span className="floating-badge-tag">RECOGNISED ACADEMIC METHODOLOGY</span>
              <span className="floating-badge-sub">NEET & JEE Integrated Pathways</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

