import React from 'react';
import { Container } from '../../tier1/components/Container';
import { Button } from '../../tier1/components/Button';
import { OrbitalMotif } from '../../tier1/components/OrbitalMotif';
import { ArrowUpRight, Compass } from 'lucide-react';
import './AdmissionsCTASection.css';

export function AdmissionsCTASection({ data, sectionConfig, theme, onAction }) {
  const statement = sectionConfig?.statement || 'YOUR NEXT CHAPTER STARTS HERE.';
  const bgImage = sectionConfig?.backgroundImage || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80';
  const primaryCta = sectionConfig?.primaryCta || { label: 'Admissions Enquiry', action: 'open_admissions_modal' };
  const secondaryCta = sectionConfig?.secondaryCta || { label: 'Visit Campus', action: 'open_admissions_modal', meta: 'campus_visit' };

  return (
    <section id="final-cta" className="cinematic-final-cta-section">
      {/* Background Visual Layer */}
      <div className="final-cta-backdrop">
        <img
          src={bgImage}
          alt={statement}
          className="final-cta-bg-img"
          loading="lazy"
        />
        <div className="final-cta-overlay" />
      </div>

      {/* Subtle Chakra Orbital Motif */}
      <OrbitalMotif motif={theme?.motif} />

      <Container>
        <div className="final-cta-content">
          <span className="micro-label">ADMISSIONS 2026-27</span>

          <h2 className="final-cta-statement">
            {statement}
          </h2>

          <div className="final-cta-actions">
            <Button
              variant="primary"
              size="lg"
              icon={ArrowUpRight}
              onClick={() => onAction(primaryCta.action, primaryCta.meta || '')}
            >
              {primaryCta.label}
            </Button>

            <Button
              variant="glass"
              size="lg"
              onClick={() => onAction(secondaryCta.action, secondaryCta.meta || 'campus_visit')}
            >
              {secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
