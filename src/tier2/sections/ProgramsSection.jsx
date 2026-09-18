import React from 'react';
import { Container } from '../../tier1/components/Container';
import { SectionHeading } from '../../tier1/components/SectionHeading';
import { Card } from '../../tier1/components/Card';
import { ArrowRight } from 'lucide-react';
import './ProgramsSection.css';

export function ProgramsSection({ data, sectionConfig, onAction }) {
  const eyebrow = sectionConfig?.eyebrow || 'ACADEMIC PROGRAMS';
  const title = sectionConfig?.title || 'PROGRAMS BUILT FOR THE COMPETITION';
  const subtitle = sectionConfig?.subtitle || 'Focused academic pathways designed around strong fundamentals, competitive-exam preparation, problem-solving and continuous academic development.';
  const programs = data?.courses?.programs || [];

  return (
    <section id="programs" className="visual-section programs-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        <div className="programs-cards-grid">
          {programs.map((program, idx) => {
            const focusTags = program.focus || program.streams || [];
            
            return (
              <div key={program.id || idx} className="program-card-wrap">
                <Card variant="glass" className="program-card">
                  <div className="program-card-header">
                    <span className="program-code-pill">{program.code}</span>
                  </div>

                  <div className="program-card-body">
                    <h3 className="program-name">{program.name}</h3>
                    <p className="program-description">{program.description}</p>

                    {focusTags.length > 0 && (
                      <div className="program-focus-chips">
                        {focusTags.map((tag, i) => (
                          <span key={i} className="focus-chip">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="program-card-footer">
                    <button
                      className="program-cta-btn"
                      onClick={() => onAction('open_admissions_modal', `Program: ${program.name}`)}
                      aria-label={`Explore ${program.name}`}
                    >
                      <span className="cta-text">{program.ctaText || 'EXPLORE PROGRAM'}</span>
                      <ArrowRight size={16} className="cta-arrow" />
                    </button>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
