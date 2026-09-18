import React from 'react';
import { Container } from '../../tier1/components/Container';
import { Button } from '../../tier1/components/Button';
import { ArrowUpRight, Phone, ArrowDown, GraduationCap, Shield } from 'lucide-react';
import './HeroSection.css';

export function HeroSection({ data, sectionConfig, theme, onAction }) {
  const eyebrow = sectionConfig?.eyebrow || 'COGNIZANT JUNIOR COLLEGE';
  const brandSub = sectionConfig?.brandSub || 'JUNIOR COLLEGE • JEE • NEET';
  const title = sectionConfig?.title || 'MASTER THE CONCEPT.\nBUILD THE CONFIDENCE.\nCOMPETE WITH PURPOSE.';
  const subtitle = sectionConfig?.subtitle || 'A focused academic environment combining intermediate education with structured preparation for JEE and NEET.';
  const heroImage = sectionConfig?.heroImage || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80';
  const phoneContact = sectionConfig?.phoneContact || data?.college?.contact?.phone || '8096651111';

  return (
    <section id="hero" className="cinematic-hero-section">
      {/* Background Photography & Overlay */}
      <div className="hero-backdrop-frame">
        <img
          src={heroImage}
          alt="Cognizant Campus"
          className="hero-backdrop-img"
          loading="eager"
        />
        <div className="hero-vignette-overlay" />
        <div className="hero-gradient-overlay" />
      </div>

      <Container>
        <div className="hero-cinematic-content">
          {/* Eyebrow & Brand Label */}
          <div className="hero-brand-tag">
            <span className="hero-brand-pulse" />
            <span className="hero-brand-name">{eyebrow}</span>
            <span className="hero-brand-divider">·</span>
            <span className="hero-brand-loc">{brandSub}</span>
          </div>

          {/* Primary Cinematic Headline */}
          <h1 className="hero-statement-title">
            {title.split('\n').map((line, idx) => (
              <span key={idx} className="hero-title-line">{line}</span>
            ))}
          </h1>

          {/* Supporting Subtitle */}
          <p className="hero-compact-subtitle">
            {subtitle}
          </p>

          {/* Primary Action Buttons & Secondary Call Contact */}
          <div className="hero-action-row">
            <div className="hero-action-buttons">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowUpRight}
                onClick={() => onAction('scroll_to', '#programs')}
              >
                Explore Programs
              </Button>

              <Button
                variant="glass"
                size="lg"
                onClick={() => onAction('open_admissions_modal')}
              >
                Admissions Enquiry
              </Button>
            </div>

            <a
              href={`tel:${phoneContact}`}
              className="hero-secondary-phone"
            >
              <Phone size={16} className="phone-icon" />
              <span>Call {phoneContact}</span>
            </a>
          </div>
        </div>
      </Container>

      {/* Bottom Scroll Indicator */}
      <button
        className="hero-scroll-indicator"
        onClick={() => onAction('scroll_to', '#trust-strip')}
        aria-label="Scroll to next section"
      >
        <span className="scroll-txt">EXPLORE</span>
        <ArrowDown size={14} className="scroll-arrow" />
      </button>
    </section>
  );
}
